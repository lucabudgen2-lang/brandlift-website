// formtest.mjs (14-11-2026) - groeigesprek (/contact) en kostencalculator tegen de formulierdienst van Brandlift,
// zonder echte verzending (de dienst en Turnstile worden onderschept). Per formulier, op 375 en 1280:
//   storing - de dienst geeft 500: een foutmelding, de invoer blijft staan, geen "bedankt";
//   goed    - precies één POST naar de juiste sleutel met de velden, _pagina (zonder query), _duur > 0,
//             het Turnstile-token en de utm-bron; geen Web3Forms-restanten; daarna de bedankt-toestand.
// Zelftest: een verkeerd verwacht adres moet als fout gezien worden.
// Gebruik: node scripts/formtest.mjs [basis-url]   (standaard http://127.0.0.1:8834 = `next start -p 8834`)
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PW_CORE || "/Users/lucabudgen/.hermes/hermes-agent/node_modules/playwright-core");
const BASIS = (process.argv[2] || "http://127.0.0.1:8834").replace(/\/$/, "");
const DIENST = "https://forms.brandliftagency.nl/v1/";
const NEP_TS = `window.turnstile={render(el){const i=document.createElement("input");i.type="hidden";i.name="cf-turnstile-response";i.value="nep-token";el.append(i);return "w"+Math.random()},reset(){}};`;

const GEVALLEN = [
  { pad: "/contact", sleutel: "brandlift", vul: async (f) => {
      await f.locator("#name").fill("Test Formulier"); await f.locator("#company").fill("Testbedrijf");
      await f.locator("#email").fill("test@example.com"); await f.locator("#phone").fill("0612345678");
      await f.locator("select").first().selectOption({ index: 1 });
    }, verwacht: { naam: "Test Formulier", bedrijf: "Testbedrijf", email: "test@example.com", telefoon: "0612345678" },
    bewaard: (f) => f.locator("#name").inputValue({ timeout: 2000 }), waarde: "Test Formulier",
    succes: /Bedankt - hij staat binnen/ },
  { pad: "/website-kosten-calculator", sleutel: "brandlift-calculator", vul: async (f) => { await f.locator('input[type="email"]').fill("test@example.com"); },
    verwacht: { email: "test@example.com" }, bewaard: (f) => f.locator('input[type="email"]').inputValue({ timeout: 2000 }), waarde: "test@example.com",
    succes: null },
];

async function test(browser, g, w, verwachtBasis = DIENST) {
  const fouten = []; const naam = `${g.pad} ${w}`;
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 } });
  const p = await ctx.newPage();
  const verzoeken = []; let antwoord = { status: 200, body: { ok: true, id: "t" } };
  await p.route("https://forms.brandliftagency.nl/**", async (r) => { verzoeken.push(r.request()); await r.fulfill({ status: antwoord.status, contentType: "application/json", body: JSON.stringify(antwoord.body) }); });
  await p.route("https://challenges.cloudflare.com/**", (r) => r.fulfill({ status: 200, contentType: "text/javascript", body: NEP_TS }));
  const open = async () => { await p.goto(BASIS + g.pad + "?utm_source=formtest", { waitUntil: "networkidle" }); const f = p.locator("form:has(input[name=_gotcha])").first(); await f.scrollIntoViewIfNeeded(); return f; };
  // storing
  let f = await open(); antwoord = { status: 500, body: { ok: false } };
  await g.vul(f); await f.locator("button[type=submit]").click(); await p.waitForTimeout(1200);
  if (!(await p.locator("text=/ging iets mis|lukte niet/").count())) fouten.push(`${naam} storing: geen foutmelding`);
  const bewaard = await g.bewaard(f).catch(() => null);
  if (bewaard !== g.waarde) fouten.push(`${naam} storing: invoer verdwenen (vals succes?)`);
  // goed
  antwoord = { status: 200, body: { ok: true, id: "t" } };
  f = await open(); await g.vul(f); const n = verzoeken.length;
  await f.locator("button[type=submit]").click(); await p.waitForTimeout(1500);
  const nieuw = verzoeken.slice(n);
  if (nieuw.length !== 1) fouten.push(`${naam} goed: ${nieuw.length} verzoeken, verwacht 1`);
  else {
    const r = nieuw[0]; const b = JSON.parse(r.postData() || "{}");
    if (r.url() !== verwachtBasis + g.sleutel) fouten.push(`${naam} goed: adres ${r.url()} klopt niet`);
    for (const [k, v] of Object.entries(g.verwacht)) if (b[k] !== v) fouten.push(`${naam} goed: ${k} = "${b[k]}"`);
    if (b._pagina !== BASIS + g.pad) fouten.push(`${naam} goed: _pagina "${b._pagina}"`);
    if (!(Number(b._duur) > 0)) fouten.push(`${naam} goed: geen _duur`);
    if (b["cf-turnstile-response"] !== "nep-token") fouten.push(`${naam} goed: geen Turnstile-token`);
    if (b.utm_source !== "formtest") fouten.push(`${naam} goed: utm_source ontbreekt`);
    if ("access_key" in b || "replyto" in b || "_gotcha" in b) fouten.push(`${naam} goed: Web3Forms-restant of gevuld lokveld`);
  }
  if (g.succes && !(await p.locator(`text=${g.succes}`).count())) fouten.push(`${naam} goed: geen bedankt-toestand`);
  if (!g.succes && (await p.locator("text=/lukte niet/").count())) fouten.push(`${naam} goed: toch een foutmelding`);
  await ctx.close();
  return fouten;
}

const browser = await chromium.launch();
const zt = await test(browser, GEVALLEN[0], 375, "https://forms.brandliftagency.nl/v1/verkeerd-");
if (!zt.some((x) => /adres .* klopt niet/.test(x))) { console.log("ZELFTEST FAALT", zt); await browser.close(); process.exit(1); }
console.log("Zelftest geslaagd: verkeerd adres gevonden.");
const fouten = []; let n = 0;
for (const g of GEVALLEN) for (const w of [375, 1280]) { fouten.push(...(await test(browser, g, w))); n++; }
await browser.close();
console.log(`${n} formuliertests (storing + goed).`);
if (fouten.length) { console.log(`${fouten.length} fout(en):`); fouten.forEach((x) => console.log("  " + x)); process.exit(1); }
console.log("0 fouten.");
