#!/usr/bin/env node
/* ============================================================
   Haalt elke route op, trekt alle JSON-LD-blokken eruit en
   controleert wat er echt in de HTML staat - niet wat de code
   belooft. Draaien tegen een lopende server:

     node scripts/validate-schema.mjs [http://localhost:8767]

   Faalt met exit 1 zodra een van de regels wordt overtreden.
   ============================================================ */

const BASE = process.argv[2] ?? "http://localhost:8767";
const PHONE = "+31644145772";

const ROUTES = [
  "/", "/diensten", "/diensten/website-laten-maken", "/diensten/lokale-seo",
  "/diensten/branding", "/diensten/conversie-optimalisatie", "/website-kosten-calculator",
  "/website-laten-maken-den-haag", "/website-laten-maken-rotterdam",
  "/website-laten-maken-eindhoven", "/website-laten-maken-utrecht",
  "/website-laten-maken-amsterdam", "/website-laten-maken-delft", "/seo-den-haag",
  "/cases", "/cases/hovenier-eykelenboom", "/cases/de-reizende-kwast",
  "/voorbeelden", "/voor-wie", "/voor-wie/vakbedrijven", "/voor-wie/premium",
  "/werkwijze", "/over-brandlift", "/contact", "/kennisbank",
  "/kennisbank/wat-kost-een-website-laten-maken", "/kennisbank/wat-is-lokale-seo",
  "/privacybeleid", "/algemene-voorwaarden",
];

const errors = [];
const stats = { routes: 0, blocks: 0, nodes: 0, ids: 0, refs: 0 };

const decode = (s) =>
  s.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, "&")
   .replace(/&lt;/g, "<").replace(/&gt;/g, ">");

/* Loopt recursief door een node-boom en verzamelt @id's, verwijzingen en
   elke sleutel die we willen verbieden of controleren. */
function walk(node, visit) {
  if (Array.isArray(node)) return node.forEach((n) => walk(n, visit));
  if (!node || typeof node !== "object") return;
  visit(node);
  for (const v of Object.values(node)) walk(v, visit);
}

for (const route of ROUTES) {
  let html;
  try {
    const res = await fetch(BASE + route);
    if (!res.ok) { errors.push(`${route}: HTTP ${res.status}`); continue; }
    html = await res.text();
  } catch (e) {
    errors.push(`${route}: fetch mislukt - ${e.message}`);
    continue;
  }
  stats.routes++;

  const blocks = [...html.matchAll(
    /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
  )].map((m) => m[1]);

  if (!blocks.length) { errors.push(`${route}: geen JSON-LD gevonden`); continue; }

  const defined = new Set();
  const referenced = [];

  for (const [i, raw] of blocks.entries()) {
    stats.blocks++;
    let parsed;
    try {
      parsed = JSON.parse(decode(raw));
    } catch (e) {
      errors.push(`${route} blok ${i + 1}: ongeldige JSON - ${e.message}`);
      continue;
    }

    walk(parsed, (n) => {
      stats.nodes++;
      if (typeof n["@id"] === "string") { defined.add(n["@id"]); stats.ids++; }
      /* een node met alleen @id is een verwijzing, geen definitie */
      const keys = Object.keys(n);
      if (keys.length === 1 && keys[0] === "@id") {
        referenced.push(n["@id"]); stats.refs++;
      }
      if ("aggregateRating" in n)
        errors.push(`${route}: aggregateRating op ${n["@type"] ?? "?"}`);
      if ("review" in n)
        errors.push(`${route}: review-array op ${n["@type"] ?? "?"}`);
      if ("ratingValue" in n && n["@type"] === "AggregateRating")
        errors.push(`${route}: losse AggregateRating-node`);
      if (typeof n.telephone === "string" && n.telephone !== PHONE)
        errors.push(`${route}: telephone "${n.telephone}" != ${PHONE}`);
    });
  }

  for (const ref of referenced) {
    if (!defined.has(ref)) errors.push(`${route}: @id-verwijzing zonder node -> ${ref}`);
  }
}

console.log(
  `\ngecontroleerd: ${stats.routes} routes · ${stats.blocks} JSON-LD-blokken · ` +
  `${stats.nodes} nodes · ${stats.ids} @id's · ${stats.refs} verwijzingen\n`,
);

if (errors.length) {
  console.error(`FOUTEN (${errors.length}):`);
  for (const e of errors) console.error("  - " + e);
  process.exit(1);
}
console.log("OK - geldige JSON, geen losse @id-verwijzingen, geen aggregateRating/review, telefoonnummer consistent.\n");
