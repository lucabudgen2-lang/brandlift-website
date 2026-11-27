/* ============================================================
   BRANDLIFT · artikel-check: de artikelstandaard als poort
   (docs/blogstrategie-2026.md §3, vault systeem/blog/WERKWIJZE.md)

   Leest alle artikelen in content/kennisbank/*.ts (zonder server, zonder
   build) en controleert per artikel:
     - zoekterm: in titel of metaTitle, en in het antwoordblok of de lead
     - metaTitle + " | Brandlift" <= 65 tekens, metaDescription 70-160
     - opbouw: eerste blok = antwoord, >= 3 H2's, >= 1 bewijsblok
     - FAQ >= 3, bronnen >= 1, datums ISO en gepubliceerd <= bijgewerkt
     - interne links: >= 1 omhoog naar een dienst-/stadspagina, >= 3 in totaal
       (inline + volgende stap + gerelateerd); alle interne paden bestaan
     - ankertekst: nooit "Brandlift", nooit dezelfde ankertekst naar twee
       verschillende pagina's, en een ankertekst maar één keer per artikel
     - kannibalisatie: geen twee artikelen met dezelfde zoekterm, en geen
       zoekterm die in de zoekwoordenkaart van een andere pagina is
     - verboden: lange streepjes, "sinds 2021", AI-slopwoorden, en
       klantresultaten (aanvragen/leads/bezoekers) behalve Eykelenboom 2 -> 24
   Templates (slug artikel-template-voorbeeld) worden overgeslagen.

   Gebruik:  node scripts/artikel-check.mjs            (alle artikelen)
             node scripts/artikel-check.mjs <slug>     (één artikel)
   Exitcode 1 bij een fout. Met een zelftest: een geplant slecht
   artikel moet falen, anders weigert de check (verify the verifier).
   ============================================================ */

import { readFileSync, readdirSync, existsSync, writeFileSync, mkdtempSync } from "node:fs";
import { join, dirname } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const MAP = join(ROOT, "content/kennisbank");
const SLOP = ["ontdek", "naadloos", "naadloze", "hoger niveau", "ultiem", "ultieme", "passie", "unieke", "uniek", "ontzorg", "kortom", "bovendien", "game-changer", "in de wereld van"];

/* Een artikelbestand is een object-literal met alleen `import type` en
   `: Artikel` als TypeScript. Die twee halen we weg en we laden het als JS. */
async function laad(bestand) {
  const ts = readFileSync(bestand, "utf8");
  const js = ts.replace(/^import type[^\n]*\n/gm, "").replace(/export const (\w+): Artikel =/g, "export const $1 =");
  const tmp = join(mkdtempSync(join(tmpdir(), "artikel-")), "a.mjs");
  writeFileSync(tmp, js);
  const mod = await import(pathToFileURL(tmp).href);
  return Object.values(mod).find((v) => v && typeof v === "object" && "slug" in v);
}

/* bestaat een intern pad? statische map onder app/, of een artikel-slug */
function padBestaat(pad, slugs) {
  const p = pad.split("#")[0].replace(/\/$/, "") || "/";
  if (p === "/") return true;
  if (p.startsWith("/kennisbank/") && slugs.has(p.slice(12))) return true;
  return existsSync(join(ROOT, "app", p, "page.tsx"));
}

function links(tekst) {
  return [...tekst.matchAll(/\[([^\]]+)\]\((\/[^)\s]*)\)/g)].map((m) => ({ anker: m[1], pad: m[2] }));
}

function tekstVan(a) {
  return [a.titel, a.lead, ...a.blokken.flatMap((b) => {
    if (b.type === "lijst") return b.items;
    if (b.type === "tabel") return [...b.kop, ...b.rijen.flat(), b.bron || ""];
    if (b.type === "bewijs") return [b.label, b.titel, b.tekst, b.bron];
    if (b.type === "citaat") return [b.tekst, b.wie, b.bron];
    if (b.type === "letop") return [b.titel, b.tekst];
    if (b.type === "beeld") return [b.beeld.alt, b.beeld.onderschrift || ""];
    return [b.tekst];
  }), ...a.faq.flatMap((f) => [f.q, f.a]), a.volgendeStap.tekst, a.volgendeStap.label];
}

const OMHOOG = /^\/(diensten|website-laten-maken-|seo-den-haag|voor-wie|website-kosten-calculator)/;

function controleer(a, alle, kaart) {
  const f = [];
  const fout = (m) => f.push(m);
  const zt = (a.zoekterm || "").toLowerCase();
  /* lichte stam: "kosten" telt ook als "kost", "websites" als "website" */
  const stam = (w) => (w.length > 5 ? w.replace(/(en|s)$/, "") : w);
  const woorden = zt.split(/\s+/).filter((w) => w.length > 2).map(stam);
  const bevat = (t) => woorden.every((w) => (t || "").toLowerCase().includes(w));
  const antwoord = a.blokken[0]?.type === "antwoord" ? a.blokken[0].tekst : "";

  if (!zt) fout("geen zoekterm");
  if (zt && !bevat(a.titel) && !bevat(a.metaTitle)) fout(`zoekterm "${zt}" niet in titel of metaTitle`);
  if (zt && !bevat(antwoord) && !bevat(a.lead)) fout(`zoekterm "${zt}" niet in het antwoordblok of de lead`);
  const titel = `${a.metaTitle} | Brandlift`;
  if (titel.length > 65) fout(`title ${titel.length} tekens (max 65): "${titel}"`);
  if (a.metaDescription.length < 70 || a.metaDescription.length > 160) fout(`metaDescription ${a.metaDescription.length} tekens (70-160)`);

  if (a.blokken[0]?.type !== "antwoord") fout("eerste blok is geen antwoordblok");
  const koppen = a.blokken.filter((b) => b.type === "kop");
  if (koppen.length < 3) fout(`maar ${koppen.length} H2's (min 3)`);
  if (!a.blokken.some((b) => b.type === "bewijs")) fout("geen bewijsblok (informatiewinst is verplicht)");
  const ids = koppen.map((k) => k.id);
  if (new Set(ids).size !== ids.length) fout("dubbele kop-id's");
  if (a.faq.length < 3) fout(`maar ${a.faq.length} FAQ-vragen (min 3)`);
  if (a.bronnen.length < 1) fout("geen bronnen");
  const iso = /^\d{4}-\d{2}-\d{2}$/;
  if (!iso.test(a.gepubliceerd) || !iso.test(a.bijgewerkt)) fout("datum niet in ISO-vorm");
  else if (a.gepubliceerd > a.bijgewerkt) fout("gepubliceerd ligt na bijgewerkt");

  /* links */
  const slugs = new Set(alle.map((x) => x.slug));
  const inline = tekstVan(a).flatMap(links);
  const alleLinks = [...inline.map((l) => l.pad), a.volgendeStap.href, ...a.gerelateerd.map((g) => (g.startsWith("/") ? g : `/kennisbank/${g}`))];
  if (!alleLinks.some((p) => OMHOOG.test(p))) fout("geen link omhoog naar een dienst-, doelgroep- of stadspagina");
  if (new Set(alleLinks).size < 3) fout(`maar ${new Set(alleLinks).size} verschillende interne links (min 3)`);
  for (const p of alleLinks) if (!padBestaat(p, slugs)) fout(`interne link naar onbestaande pagina: ${p}`);
  const gezien = new Map();
  for (const { anker, pad } of inline) {
    const k = anker.toLowerCase().trim();
    if (/brandlift/i.test(k)) fout(`ankertekst met de merknaam: "${anker}"`);
    if (gezien.has(k)) fout(`ankertekst twee keer in dit artikel: "${anker}"`);
    gezien.set(k, pad);
  }

  /* verboden */
  const t = tekstVan(a).join("\n");
  if (/[–—]/.test(t)) fout("lang streepje (– of —) in de tekst");
  if (/sinds 2021/i.test(t)) fout('"sinds 2021" (klopt niet)');
  for (const w of SLOP) if (new RegExp(`\\b${w}\\b`, "i").test(t)) fout(`AI-slopwoord: "${w}"`);
  for (const zin of t.split(/(?<=[.!?])\s+|\n/)) {
    if (/\b\d[\d.]*\s*(aanvragen|leads|bezoekers|klikken)\b/i.test(zin) && !/eykelenboom/i.test(zin) && !/\b2\b.*\b24\b/.test(zin))
      fout(`mogelijke klantresultaatclaim: "${zin.slice(0, 90)}"`);
  }

  /* kannibalisatie */
  for (const ander of alle) if (ander !== a && ander.zoekterm && ander.zoekterm.toLowerCase() === zt) fout(`zoekterm ook bij ${ander.slug}`);
  const eigenaar = kaart.get(zt);
  if (eigenaar && eigenaar.replace(/\/$/, "") !== `/kennisbank/${a.slug}`) fout(`zoekterm hoort volgens de zoekwoordenkaart bij ${eigenaar}`);

  /* ankertekst sitebreed: dezelfde ankertekst mag in een ander artikel niet naar een andere pagina wijzen */
  for (const ander of alle) {
    if (ander === a || !ander.blokken) continue;
    for (const l of tekstVan(ander).flatMap(links)) {
      const mijn = gezien.get(l.anker.toLowerCase().trim());
      if (mijn && mijn !== l.pad) fout(`ankertekst "${l.anker}" wijst in ${ander.slug} naar ${l.pad}, hier naar ${mijn}`);
    }
  }
  return f;
}

function zoekwoordenkaart() {
  const p = join(ROOT, "docs/brandlift-master-keyword-map.csv");
  const kaart = new Map();
  if (!existsSync(p)) return kaart;
  for (const regel of readFileSync(p, "utf8").split("\n").slice(1)) {
    const [kw, , , , , , doel] = regel.split(",");
    if (kw && doel) kaart.set(kw.trim().toLowerCase(), doel.trim());
  }
  return kaart;
}

/* ── zelftest: een geplant slecht artikel moet op elk punt vallen ── */
function zelftest(kaart) {
  const slecht = {
    slug: "zelftest", titel: "Iets anders", metaTitle: "x".repeat(60), metaDescription: "kort", lead: "lead", tag: "Kosten",
    zoekterm: "website laten maken kosten", gepubliceerd: "2026-12-01", bijgewerkt: "2026-11-01", concept: true,
    blokken: [{ type: "kop", id: "a", tekst: "A" }, { type: "alinea", tekst: "Ontdek het naadloos — sinds 2021, met 40 aanvragen per maand. [Brandlift](/bestaat-niet)" }],
    faq: [], bronnen: [], volgendeStap: { label: "x", href: "/kennisbank", tekst: "x" }, gerelateerd: [],
  };
  const ander = { ...slecht, slug: "ander", blokken: [{ type: "alinea", tekst: "[Brandlift](/diensten)" }], faq: [] };
  const f = controleer(slecht, [slecht, ander], kaart);
  const verwacht = ["zoekterm", "title", "metaDescription", "antwoordblok", "H2", "bewijsblok", "FAQ", "bronnen", "gepubliceerd", "omhoog", "onbestaande", "merknaam", "lang streepje", "sinds 2021", "AI-slop", "klantresultaat", "ook bij", "zoekwoordenkaart", "wijst in ander"];
  const gemist = verwacht.filter((v) => !f.some((m) => m.includes(v)));
  if (gemist.length) { console.error(`ZELFTEST MISLUKT: niet gevonden: ${gemist.join(", ")}`); process.exit(2); }
  return verwacht.length;
}

const kaart = zoekwoordenkaart();
const n = zelftest(kaart);
const bestanden = readdirSync(MAP).filter((b) => b.endsWith(".ts") && b !== "index.ts");
const alle = [];
for (const b of bestanden) alle.push(await laad(join(MAP, b)));
const alleen = process.argv[2];
let fouten = 0;
for (const a of alle) {
  if (a.slug === "artikel-template-voorbeeld" || (alleen && a.slug !== alleen)) continue;
  const f = controleer(a, alle, kaart);
  console.log(`${f.length ? "FOUT" : "OK  "}  ${a.slug}${a.concept ? " (concept)" : ""}`);
  for (const m of f) console.log(`      - ${m}`);
  fouten += f.length;
}
console.log(`\nzelftest: ${n}/${n} geplante fouten gevonden · ${fouten ? `${fouten} fout(en)` : "alles in orde"}`);
process.exit(fouten ? 1 : 0);
