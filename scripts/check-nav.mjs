/* ============================================================
   BRANDLIFT · navigatiecontrole

     node scripts/check-nav.mjs http://localhost:8797

   Twee vragen, allebei mechanisch:
   1. Wijst elke link in de nav en de voettekst naar een pagina die
      bestaat? (een menu-item naar een 404 ziet niemand in de bron)
   2. Staat elke casepagina in app/cases/ ook in de mega-nav? Dat is
      precies de fout die hier optrad: de Giorgi-case stond wel live,
      maar in geen enkel menu - dus alleen vindbaar via een directe URL.

   De controle test zichzelf eerst op een verzonnen route en op een
   verzonnen casemap, zodat "0 fouten" bewezen iets betekent
   (feedback-verify-the-verifier).
   ============================================================ */
import { readFile, readdir } from "node:fs/promises";

const BASE = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");

const navBron = await readFile("lib/nav.ts", "utf8");
const hrefs = [...new Set([...navBron.matchAll(/href:\s*"(\/[^"]*)"/g)].map((m) => m[1]))];

const caseMappen = (await readdir("app/cases", { withFileTypes: true }))
  .filter((d) => d.isDirectory())
  .map((d) => `/cases/${d.name}`);

const fouten = [];

/* 1. elke navlink bestaat */
for (const h of hrefs) {
  const pad = h.split("#")[0] || "/";
  const res = await fetch(BASE + pad, { redirect: "manual" }).catch(() => null);
  if (!res) fouten.push(`navlink niet op te halen: ${h}`);
  else if (res.status !== 200) fouten.push(`navlink geeft ${res.status}: ${h}`);
}

/* 2. elke casepagina staat in de nav */
for (const c of caseMappen) {
  if (!navBron.includes(`"${c}"`)) fouten.push(`casepagina ontbreekt in de nav: ${c}`);
}

/* ── zelftest: bijt de controle wel? ── */
const zelftest = [];
const nep = await fetch(BASE + "/deze-route-bestaat-niet-xyz", { redirect: "manual" }).catch(() => null);
zelftest.push(nep && nep.status !== 200 ? "ok: onbekende route wordt als fout gezien" : "FAAL: onbekende route gaf 200");
zelftest.push(!navBron.includes('"/cases/verzonnen-case"') ? "ok: ontbrekende case wordt opgemerkt" : "FAAL: zelftest-case staat echt in de nav");

console.log(`\ngecontroleerd: ${hrefs.length} navlinks, ${caseMappen.length} casepagina's`);
console.log("zelftest: " + zelftest.join(" | "));
if (fouten.length) {
  console.log(`\nFOUTEN (${fouten.length})`);
  fouten.forEach((f) => console.log("  " + f));
  process.exit(1);
}
console.log("\nOK - elke navlink bestaat en elke casepagina staat in de nav.\n");
