import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/metadata";

/* Alle indexeerbare routes.

   lastModified stond hier op `new Date()`, dus élke URL beweerde bij elke
   deploy dat hij die dag gewijzigd was. Dat maakt het signaal waardeloos:
   als alles altijd nieuw is, is niets nieuw. Nu staat er per pagina de datum
   die ook in de byline op de pagina zelf staat, zodat sitemap en zichtbare
   inhoud hetzelfde zeggen.

   Bij het bijwerken van een pagina: pas de UPDATED-constante op die pagina
   aan én de datum hieronder. */

const DATES: Record<string, string> = {
  "/": "2026-07-30",
  "/diensten": "2026-07-13",
  "/diensten/website-laten-maken": "2026-07-13",
  "/diensten/lokale-seo": "2026-07-16",
  "/diensten/branding": "2026-07-17",
  "/diensten/conversie-optimalisatie": "2026-07-17",
  "/website-kosten-calculator": "2026-07-16",
  "/website-laten-maken-den-haag": "2026-07-13",
  "/website-laten-maken-rotterdam": "2026-07-13",
  "/website-laten-maken-eindhoven": "2026-07-13",
  "/website-laten-maken-utrecht": "2026-07-13",
  "/website-laten-maken-amsterdam": "2026-07-13",
  "/website-laten-maken-delft": "2026-07-13",
  "/seo-den-haag": "2026-07-30",
  "/cases": "2026-07-10",
  "/cases/hovenier-eykelenboom": "2026-07-10",
  "/cases/de-reizende-kwast": "2026-07-10",
  "/voorbeelden": "2026-07-13",
  "/voor-wie": "2026-07-17",
  "/voor-wie/vakbedrijven": "2026-07-17",
  "/voor-wie/premium": "2026-07-17",
  "/werkwijze": "2026-07-30",
  "/over-brandlift": "2026-07-13",
  "/contact": "2026-07-13",
  "/kennisbank": "2026-07-13",
  "/kennisbank/wat-kost-een-website-laten-maken": "2026-07-13",
  "/kennisbank/wat-is-lokale-seo": "2026-07-13",
  "/privacybeleid": "2026-07-10",
  "/algemene-voorwaarden": "2026-07-10",
};

export default function sitemap(): MetadataRoute.Sitemap {
  /* absoluteUrl() is dezelfde functie die de canonical bouwt, zodat de
     sitemap-URL en de canonical van een pagina letterlijk gelijk zijn.
     Dat ging eerder mis op de homepage: canonical zonder slash,
     sitemap met slash - voor Google twee URL's. */
  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
  ): MetadataRoute.Sitemap[number] => ({
    url: absoluteUrl(path),
    lastModified: new Date(DATES[path] ?? "2026-07-13"),
    changeFrequency,
    priority,
  });

  return [
    entry("/", 1.0, "weekly"),
    // dienstenhub + pijlers
    entry("/diensten/website-laten-maken", 0.9),
    entry("/diensten/lokale-seo", 0.8),
    entry("/diensten/branding", 0.8),
    entry("/diensten/conversie-optimalisatie", 0.8),
    entry("/website-kosten-calculator", 0.7),
    // lokaal commercieel - steden
    entry("/website-laten-maken-den-haag", 0.9),
    entry("/website-laten-maken-rotterdam", 0.9),
    entry("/website-laten-maken-eindhoven", 0.8),
    entry("/website-laten-maken-utrecht", 0.8),
    entry("/website-laten-maken-amsterdam", 0.8),
    entry("/website-laten-maken-delft", 0.7),
    entry("/seo-den-haag", 0.8),
    // bewijs + doelgroep
    entry("/cases", 0.7),
    entry("/cases/hovenier-eykelenboom", 0.7),
    entry("/cases/de-reizende-kwast", 0.6),
    entry("/voorbeelden", 0.7),
    entry("/voor-wie", 0.7),
    entry("/voor-wie/vakbedrijven", 0.8),
    entry("/voor-wie/premium", 0.8),
    // vertrouwen + methode
    entry("/werkwijze", 0.7),
    entry("/over-brandlift", 0.7),
    entry("/contact", 0.8),
    // kennisbank
    entry("/kennisbank/wat-kost-een-website-laten-maken", 0.8),
    // juridisch
  ];
}
