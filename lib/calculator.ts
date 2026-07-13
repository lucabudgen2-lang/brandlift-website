/* ============================================================
   BRANDLIFT · kosten-calculator pricing engine
   Pure, unit-testable logic. Honest, directional bands inside the
   real €2.000-€10.000 envelope (bron: brandlift-company-facts).
   Altijd een INDICATIE - de exacte prijs volgt uit het groeigesprek.
   ============================================================ */

export type SiteType = "eenvoudig" | "vakbedrijf" | "maatwerk" | "webshop";
export type PageBand = "1-5" | "6-10" | "10plus";
export type ExtraId =
  | "meertalig"
  | "betalingen"
  | "boekingen"
  | "blog"
  | "koppeling"
  | "teksten"
  | "fotografie";

export type CalcInput = {
  type: SiteType;
  pages: PageBand;
  extras: ExtraId[];
  seoUitgebreid: boolean;
  contentKlaar: boolean;
};

export type CalcResult = {
  low: number;
  high: number;
  /* doorlopende kosten die NIET in de bouwprijs zitten */
  monthly: string[];
  /* wat er bij deze configuratie inbegrepen is (voor de checklist) */
  included: string[];
};

type Band = [number, number];

/* basis per type website */
export const TYPE_OPTIONS: {
  id: SiteType;
  label: string;
  desc: string;
  band: Band;
  vanafLabel: string;
}[] = [
  {
    id: "eenvoudig",
    label: "Eenvoudige website",
    desc: "Compacte site die je bedrijf sterk neerzet",
    band: [2000, 3500],
    vanafLabel: "vanaf €2.000",
  },
  {
    id: "vakbedrijf",
    label: "Website voor vakbedrijf",
    desc: "Dienst- en werkgebiedpagina's, gebouwd op aanvragen",
    band: [3500, 6000],
    vanafLabel: "vanaf €3.500",
  },
  {
    id: "maatwerk",
    label: "Maatwerk website",
    desc: "Volledig op maat, voor complexe wensen",
    band: [6000, 10000],
    vanafLabel: "vanaf €6.000",
  },
  {
    id: "webshop",
    label: "Webshop",
    desc: "Online verkopen, betalingen inbegrepen",
    band: [5000, 9000],
    vanafLabel: "vanaf €5.000",
  },
];

export const PAGE_OPTIONS: { id: PageBand; label: string; add: Band }[] = [
  { id: "1-5", label: "1 - 5 pagina's", add: [0, 0] },
  { id: "6-10", label: "6 - 10 pagina's", add: [500, 1000] },
  { id: "10plus", label: "Meer dan 10", add: [1000, 2000] },
];

export const EXTRA_OPTIONS: { id: ExtraId; label: string; add: Band }[] = [
  { id: "meertalig", label: "Meertaligheid", add: [750, 1500] },
  { id: "betalingen", label: "Webshop / betalingen", add: [1000, 2500] },
  { id: "boekingen", label: "Boekings- of reserveringssysteem", add: [500, 1250] },
  { id: "blog", label: "Blog of kennisbank", add: [350, 750] },
  { id: "koppeling", label: "Koppeling (CRM, agenda, boekhouding)", add: [500, 1500] },
  { id: "teksten", label: "Teksten laten schrijven", add: [400, 1000] },
  { id: "fotografie", label: "Professionele fotografie", add: [500, 1000] },
];

/* content nog niet klaar (en niet al 'teksten' gekozen) */
const CONTENT_NOT_READY: Band = [300, 800];

const round50 = (n: number) => Math.round(n / 50) * 50;

export function calcPrice(input: CalcInput): CalcResult {
  const type = TYPE_OPTIONS.find((t) => t.id === input.type) ?? TYPE_OPTIONS[0];
  const pages = PAGE_OPTIONS.find((p) => p.id === input.pages) ?? PAGE_OPTIONS[0];

  let low = type.band[0] + pages.add[0];
  let high = type.band[1] + pages.add[1];

  const included: string[] = [
    "Strategie en positionering",
    "Lokale SEO-basis (schema, vermeldingen, Google Bedrijfsprofiel)",
    "Ontwerp dat vertrouwen wekt",
    "Snelle, veilige techniek",
  ];
  if (input.type === "webshop") included.push("Webshop en betalingen");

  for (const id of input.extras) {
    /* betalingen zitten al in het webshop-type */
    if (id === "betalingen" && input.type === "webshop") continue;
    const extra = EXTRA_OPTIONS.find((e) => e.id === id);
    if (!extra) continue;
    low += extra.add[0];
    high += extra.add[1];
    included.push(extra.label);
  }

  if (!input.contentKlaar && !input.extras.includes("teksten")) {
    low += CONTENT_NOT_READY[0];
    high += CONTENT_NOT_READY[1];
    included.push("Hulp bij teksten en beeld");
  }

  const monthly: string[] = ["Hosting en onderhoud - apart, voordelig maandbedrag"];
  if (input.seoUitgebreid) monthly.push("SEO-groei-retainer - apart per maand");

  return {
    low: Math.max(2000, round50(low)),
    high: round50(high),
    monthly,
    included,
  };
}

export const formatEuro = (n: number) => `€${new Intl.NumberFormat("nl-NL").format(n)}`;

/* positie van een bedrag op het €2.000 → €10.000+ spectrum (0..1) */
export const spectrumPos = (n: number) =>
  Math.min(1, Math.max(0, (n - 2000) / (10000 - 2000)));
