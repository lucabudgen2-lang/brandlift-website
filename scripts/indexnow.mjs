/* ============================================================
   BRANDLIFT · IndexNow-melding (Bing, Yandex, Seznam, Naver)
   Bing voedt Copilot en ChatGPT-zoeken; met IndexNow staat een nieuw of
   bijgewerkt artikel binnen uren in die index in plaats van na dagen.
   Google doet niet mee aan IndexNow (dat loopt via de sitemap).

   De sleutel is openbaar volgens het protocol: public/<sleutel>.txt.

   Gebruik:  node scripts/indexnow.mjs /kennisbank/<slug> [/ander/pad ...]
             node scripts/indexnow.mjs --droog /kennisbank/<slug>
   Stap 5 van de blogpipeline (vault systeem/blog/WERKWIJZE.md): pas
   draaien nadat de pagina live 200 geeft.
   ============================================================ */
import { readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HOST = "brandliftagency.nl";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const sleutel = readdirSync(join(ROOT, "public")).find((b) => /^[0-9a-f]{32}\.txt$/.test(b))?.slice(0, 32);
if (!sleutel) { console.error("Geen IndexNow-sleutel in public/."); process.exit(2); }

const droog = process.argv.includes("--droog");
const paden = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (!paden.length) { console.error("Geef minstens één pad, bv. /kennisbank/wat-kost-een-website-laten-maken"); process.exit(2); }
const urls = paden.map((p) => `https://${HOST}${p.startsWith("/") ? p : `/${p}`}`);

/* eerst controleren: sleutel online en elke URL live (200), anders niet melden */
const sleutelUrl = `https://${HOST}/${sleutel}.txt`;
const s = await fetch(sleutelUrl);
if (!s.ok || (await s.text()).trim() !== sleutel) { console.error(`Sleutelbestand niet live: ${sleutelUrl} (${s.status})`); process.exit(1); }
for (const u of urls) {
  const r = await fetch(u, { redirect: "manual" });
  if (r.status !== 200) { console.error(`Niet live (${r.status}): ${u}`); process.exit(1); }
}

const body = { host: HOST, key: sleutel, keyLocation: sleutelUrl, urlList: urls };
if (droog) { console.log("droog, zou melden:", JSON.stringify(body, null, 1)); process.exit(0); }
const r = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST", headers: { "Content-Type": "application/json; charset=utf-8" }, body: JSON.stringify(body),
});
/* 200 = ontvangen, 202 = ontvangen en sleutel wordt nog gecontroleerd */
console.log(`IndexNow ${r.status} voor ${urls.length} URL('s): ${urls.join(", ")}`);
process.exit(r.status === 200 || r.status === 202 ? 0 : 1);
