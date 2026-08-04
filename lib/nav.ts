/* ============================================================
   BRANDLIFT · sitemap + mega-nav information architecture
   Each mega dropdown lists ONLY the pages that live under it.
   ============================================================ */

export type SubLink = { label: string; href: string; desc?: string };
export type MegaColumn = { heading: string; links: SubLink[] };

/* a mega item = a top-level section that owns child pages */
export type MegaItem = {
  label: string;
  key: string;
  href: string; // the section's own index page
  overview: string; // label for the "view all" link
  pages: SubLink[]; // ONLY the pages that fall under this section
};

export type NavItem =
  | { label: string; href: string } // direct link (no children)
  | MegaItem; // mega panel

export function isMega(item: NavItem): item is MegaItem {
  return "key" in item;
}

/* founder spotlight — the constant left rail of every mega panel */
export const megaSpotlight = {
  name: "Luca Budgen",
  role: "Oprichter",
  photo: "/images/portrait-luca-chip.jpg",
  href: "/over-brandlift",
  tagline: "Geen leverancier, maar een partner.",
};

export const megaNav: NavItem[] = [
  {
    label: "Diensten",
    key: "diensten",
    href: "/diensten",
    overview: "Alle diensten",
    pages: [
      { label: "Website laten maken", href: "/diensten/website-laten-maken", desc: "Strategische websites die aanvragen opleveren" },
      { label: "Lokale SEO", href: "/diensten/lokale-seo", desc: "Beter gevonden worden in je regio" },
      { label: "Branding", href: "/diensten/branding", desc: "Een uitstraling die vertrouwen wekt" },
      { label: "Conversie-optimalisatie", href: "/diensten/conversie-optimalisatie", desc: "Meer halen uit je bezoekers" },
      { label: "Website kosten berekenen", href: "/website-kosten-calculator", desc: "Bereken direct een prijsindicatie" },
    ],
  },
  {
    label: "Voor wie",
    key: "voor-wie",
    href: "/voor-wie",
    overview: "Bekijk voor wie",
    pages: [
      { label: "Vakbedrijven & servicebedrijven", href: "/voor-wie/vakbedrijven", desc: "Hoveniers, schilders, aannemers, installateurs" },
      { label: "Premium & visuele bedrijven", href: "/voor-wie/premium", desc: "Vastgoed, maritiem & jacht, interieurdesign, klinieken" },
      { label: "Overige bedrijven", href: "/voor-wie#overig", desc: "Webshops, horeca, retail, praktijken, B2B" },
    ],
  },
  {
    label: "Cases",
    key: "cases",
    href: "/cases",
    overview: "Alle cases",
    pages: [
      { label: "Hovenier Eykelenboom", href: "/cases/hovenier-eykelenboom", desc: "Hoveniers / groenvoorziening" },
      { label: "De Reizende Kwast", href: "/cases/de-reizende-kwast", desc: "Schilders / afwerking" },
      { label: "Voorbeelden", href: "/voorbeelden", desc: "Meer websites die we bouwden" },
    ],
  },
  {
    label: "Kennisbank",
    key: "kennisbank",
    href: "/kennisbank",
    overview: "Alle gidsen",
    pages: [
      { label: "Wat kost een website laten maken?", href: "/kennisbank/wat-kost-een-website-laten-maken", desc: "Prijzen en keuzes uitgelegd" },
      { label: "Wat is lokale SEO?", href: "/kennisbank/wat-is-lokale-seo", desc: "Hoe lokale vindbaarheid werkt" },
      { label: "Onze werkwijze", href: "/werkwijze", desc: "Van start tot livegang" },
    ],
  },
  {
    label: "Over",
    key: "over",
    href: "/over-brandlift",
    overview: "Over Brandlift",
    pages: [
      { label: "Over Brandlift", href: "/over-brandlift", desc: "Founder-led, vanuit Den Haag" },
      { label: "Werkwijze", href: "/werkwijze", desc: "Hoe we van start tot livegang werken" },
      { label: "Contact", href: "/contact", desc: "Plan een gratis groeigesprek" },
    ],
  },
];

/* ── Footer sitemap ── */
export const footerNav: MegaColumn[] = [
  {
    heading: "Diensten",
    links: [
      { label: "Website laten maken", href: "/diensten/website-laten-maken" },
      { label: "Lokale SEO", href: "/diensten/lokale-seo" },
      { label: "Branding", href: "/diensten/branding" },
      { label: "Conversie-optimalisatie", href: "/diensten/conversie-optimalisatie" },
      { label: "Website kosten berekenen", href: "/website-kosten-calculator" },
    ],
  },
  {
    heading: "Steden",
    links: [
      { label: "Website laten maken Den Haag", href: "/website-laten-maken-den-haag" },
      { label: "Website laten maken Rotterdam", href: "/website-laten-maken-rotterdam" },
      { label: "Website laten maken Eindhoven", href: "/website-laten-maken-eindhoven" },
      { label: "Website laten maken Utrecht", href: "/website-laten-maken-utrecht" },
      { label: "Website laten maken Amsterdam", href: "/website-laten-maken-amsterdam" },
      { label: "Website laten maken Delft", href: "/website-laten-maken-delft" },
      { label: "SEO Den Haag", href: "/seo-den-haag" },
    ],
  },
  {
    heading: "Werk & doelgroep",
    links: [
      { label: "Cases & portfolio", href: "/cases" },
      { label: "Voorbeelden", href: "/voorbeelden" },
      { label: "Voor wie", href: "/voor-wie" },
      { label: "Vakbedrijven", href: "/voor-wie/vakbedrijven" },
      { label: "Premium & visuele bedrijven", href: "/voor-wie/premium" },
    ],
  },
  {
    heading: "Bedrijf",
    links: [
      { label: "Over Brandlift", href: "/over-brandlift" },
      { label: "Werkwijze", href: "/werkwijze" },
      { label: "Kennisbank", href: "/kennisbank" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const footerLegal: SubLink[] = [
  { label: "Privacybeleid", href: "/privacybeleid" },
  { label: "Algemene voorwaarden", href: "/algemene-voorwaarden" },
];
