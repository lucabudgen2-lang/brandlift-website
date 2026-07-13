import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/* All indexable routes. Utility/legal pages get low priority; the
   money pages (home, service hub, local, cases) rank highest. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
  ): MetadataRoute.Sitemap[number] => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    entry("/", 1.0, "weekly"),
    // service hub + pillars
    entry("/diensten", 0.7),
    entry("/diensten/website-laten-maken", 0.9),
    entry("/diensten/lokale-seo", 0.8),
    entry("/diensten/branding", 0.7),
    entry("/diensten/conversie-optimalisatie", 0.7),
    // local commercial
    entry("/website-laten-maken-den-haag", 0.9),
    // proof + audience
    entry("/cases", 0.7),
    entry("/cases/hovenier-eykelenboom", 0.7),
    entry("/cases/rotorswing", 0.6),
    entry("/cases/de-reizende-kwast", 0.6),
    entry("/voor-wie", 0.7),
    entry("/voor-wie/vakbedrijven", 0.7),
    // trust + method
    entry("/werkwijze", 0.7),
    entry("/over-brandlift", 0.7),
    entry("/contact", 0.8),
    // knowledge base
    entry("/kennisbank", 0.6),
    entry("/kennisbank/wat-kost-een-website-laten-maken", 0.7),
    entry("/kennisbank/wat-is-lokale-seo", 0.6),
    entry("/kennisbank/website-laten-maken-stappenplan", 0.6),
    // legal
    entry("/privacybeleid", 0.2, "yearly"),
    entry("/algemene-voorwaarden", 0.2, "yearly"),
  ];
}
