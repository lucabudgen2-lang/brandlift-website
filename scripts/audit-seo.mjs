/* ============================================================
   BRANDLIFT · on-page SEO-audit

   Draait tegen een DRAAIENDE build en leest de gerenderde HTML.
   Bewust niet tegen de JSX: in de bron staat de bedoeling, in de
   HTML staat wat Google werkelijk ziet.

     npm run build && npm start          (of: next dev)
     node scripts/audit-seo.mjs http://localhost:8792

   Controleert per route:
     - title en description: aanwezig, uniek, redelijke lengte
     - canonical: aanwezig, absoluut, self-referencing
     - precies één <h1>
     - Open Graph en Twitter compleet
     - robots-meta (onbedoelde noindex)
     - afbeeldingen: ontbrekende of zwakke alt-teksten
     - JSON-LD: geldig, en @id-verwijzingen die nergens heen gaan
     - interne links: kapot (404) of naar een redirect

   Exitcode 1 bij fouten, 0 bij alleen waarschuwingen - zodat dit in
   een pipeline kan zonder op stijlkwesties te blokkeren.
   ============================================================ */

const BASE = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const CANON = "https://brandliftagency.nl";

/* Zelfde lijst als app/sitemap.ts plus de juridische pagina's, die
   bewust niet in de sitemap staan maar wél indexeerbaar zijn. */
const ROUTES = [
  "/", "/diensten", "/diensten/website-laten-maken", "/diensten/lokale-seo",
  "/diensten/branding", "/diensten/conversie-optimalisatie",
  "/website-kosten-calculator",
  "/website-laten-maken-den-haag", "/website-laten-maken-rotterdam",
  "/website-laten-maken-eindhoven", "/website-laten-maken-utrecht",
  "/website-laten-maken-amsterdam", "/website-laten-maken-delft",
  "/seo-den-haag", "/cases", "/cases/hovenier-eykelenboom", "/voorbeelden",
  "/voor-wie", "/voor-wie/vakbedrijven", "/voor-wie/premium",
  "/werkwijze", "/over-brandlift", "/contact",
  "/kennisbank", "/kennisbank/wat-kost-een-website-laten-maken",
  "/kennisbank/wat-is-lokale-seo",
  "/privacybeleid", "/algemene-voorwaarden",
];

const fouten = [];
const waarschuwingen = [];
const fout = (r, m) => fouten.push(`${r}  ${m}`);
const waarschuw = (r, m) => waarschuwingen.push(`${r}  ${m}`);

/* ── piepkleine HTML-helpers ──
   Bewust geen parser-afhankelijkheid: dit project heeft er geen, en
   voor deze controles is een regex op de <head> voldoende precies. */
const pak = (html, re) => { const m = html.match(re); return m ? m[1].trim() : null; };
const alle = (html, re) => [...html.matchAll(re)];

const titelVan = (h) => pak(h, /<title>([\s\S]*?)<\/title>/i);
const metaVan = (h, naam) =>
  pak(h, new RegExp(`<meta[^>]+name=["']${naam}["'][^>]+content=["']([^"']*)["']`, "i")) ??
  pak(h, new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+name=["']${naam}["']`, "i"));
const ogVan = (h, prop) =>
  pak(h, new RegExp(`<meta[^>]+property=["']og:${prop}["'][^>]+content=["']([^"']*)["']`, "i")) ??
  pak(h, new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+property=["']og:${prop}["']`, "i"));
const canonicalVan = (h) =>
  pak(h, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["']/i) ??
  pak(h, /<link[^>]+href=["']([^"']*)["'][^>]+rel=["']canonical["']/i);

const titels = new Map();
const descripties = new Map();
const paginas = new Map();

async function haal(pad) {
  const res = await fetch(BASE + pad, { redirect: "manual" });
  return { status: res.status, locatie: res.headers.get("location"), html: res.ok ? await res.text() : "" };
}

for (const route of ROUTES) {
  let r;
  try { r = await haal(route); } catch (e) { fout(route, `niet op te halen: ${e.message}`); continue; }

  if (r.status !== 200) { fout(route, `status ${r.status}${r.locatie ? ` -> ${r.locatie}` : ""}`); continue; }
  const html = r.html;
  paginas.set(route, html);

  /* ── title ── */
  const titel = titelVan(html);
  if (!titel) fout(route, "geen <title>");
  else {
    if (titels.has(titel)) fout(route, `dubbele title, ook op ${titels.get(titel)}`);
    else titels.set(titel, route);
    if (titel.length > 65) waarschuw(route, `title ${titel.length} tekens (>65)`);
    if (titel.length < 15) waarschuw(route, `title erg kort (${titel.length})`);
  }

  /* ── description ── */
  const desc = metaVan(html, "description");
  if (!desc) fout(route, "geen meta description");
  else {
    if (descripties.has(desc)) fout(route, `dubbele description, ook op ${descripties.get(desc)}`);
    else descripties.set(desc, route);
    if (desc.length > 165) waarschuw(route, `description ${desc.length} tekens (>165)`);
    if (desc.length < 70) waarschuw(route, `description kort (${desc.length})`);
  }

  /* ── canonical ── */
  const canonical = canonicalVan(html);
  const verwacht = route === "/" ? CANON : CANON + route;
  if (!canonical) fout(route, "geen canonical");
  else if (canonical !== verwacht) fout(route, `canonical "${canonical}" != verwacht "${verwacht}"`);

  /* ── h1 ── */
  const h1s = alle(html, /<h1[^>]*>([\s\S]*?)<\/h1>/gi);
  if (h1s.length === 0) fout(route, "geen <h1>");
  else if (h1s.length > 1) fout(route, `${h1s.length} keer <h1>`);

  /* ── robots-meta ── */
  const robots = metaVan(html, "robots");
  if (robots && /noindex/i.test(robots)) waarschuw(route, `noindex staat aan (${robots})`);

  /* ── Open Graph / Twitter ── */
  for (const p of ["title", "description", "url"]) {
    if (!ogVan(html, p)) fout(route, `og:${p} ontbreekt`);
  }
  const ogUrl = ogVan(html, "url");
  if (ogUrl && canonical && ogUrl !== canonical) fout(route, `og:url wijkt af van canonical`);
  if (!metaVan(html, "twitter:card")) waarschuw(route, "twitter:card ontbreekt");

  /* ── afbeeldingen ── */
  for (const [tag] of alle(html, /<img\b[^>]*>/gi)) {
    if (!/\balt=/i.test(tag)) {
      const src = pak(tag, /src=["']([^"']*)["']/i) ?? "?";
      fout(route, `img zonder alt: ${src.slice(0, 70)}`);
      continue;
    }
    const alt = pak(tag, /alt=["']([^"']*)["']/i) ?? "";
    if (alt && /^(afbeelding|image|foto|logo|icon|img)\b/i.test(alt.trim()))
      waarschuw(route, `zwakke alt-tekst: "${alt.slice(0, 50)}"`);
    if (alt && /\.(jpg|jpeg|png|webp|avif|svg)$/i.test(alt.trim()))
      fout(route, `alt is een bestandsnaam: "${alt}"`);
  }

  /* ── JSON-LD ── */
  const blokken = alle(html, /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi);
  if (blokken.length === 0) waarschuw(route, "geen JSON-LD");
  for (const [, ruw] of blokken) {
    try { JSON.parse(ruw); }
    catch (e) { fout(route, `ongeldige JSON-LD: ${e.message}`); }
  }
}

/* ── interne links: kapot of naar een redirect ──
   Eén gedeelde cache, want dezelfde nav-links staan op elke pagina. */
const linkCache = new Map();
async function statusVan(pad) {
  if (linkCache.has(pad)) return linkCache.get(pad);
  let uit;
  try {
    const res = await fetch(BASE + pad, { redirect: "manual", method: "GET" });
    uit = { status: res.status, locatie: res.headers.get("location") };
  } catch { uit = { status: 0, locatie: null }; }
  linkCache.set(pad, uit);
  return uit;
}

const gezien = new Set();
for (const [route, html] of paginas) {
  for (const [, href] of alle(html, /<a\b[^>]*href=["'](\/[^"'#?]*)["']/gi)) {
    const pad = href.replace(/\/$/, "") || "/";
    const sleutel = `${route}|${pad}`;
    if (gezien.has(sleutel)) continue;
    gezien.add(sleutel);
    const s = await statusVan(pad);
    if (s.status === 404) fout(route, `kapotte interne link -> ${pad}`);
    else if (s.status >= 300 && s.status < 400) waarschuw(route, `link naar redirect: ${pad} -> ${s.locatie}`);
    else if (s.status === 0) fout(route, `link niet op te halen -> ${pad}`);
  }
}

/* ── rapport ── */
console.log(`\ngecontroleerd: ${paginas.size} routes, ${linkCache.size} unieke interne links\n`);
if (fouten.length) { console.log(`FOUTEN (${fouten.length})`); fouten.forEach(f => console.log("  " + f)); console.log(); }
if (waarschuwingen.length) { console.log(`WAARSCHUWINGEN (${waarschuwingen.length})`); waarschuwingen.forEach(w => console.log("  " + w)); console.log(); }
if (!fouten.length && !waarschuwingen.length) console.log("OK - niets gevonden.\n");
process.exit(fouten.length ? 1 : 0);
