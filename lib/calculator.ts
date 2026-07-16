/* ============================================================
   BRANDLIFT · kosten-calculator pricing engine
   Pure, unit-testable logic. Honest, directional bands.
   Altijd een INDICATIE - de exacte prijs volgt uit het groeigesprek.
   Bewust simpel gehouden: het type website is de grootste knop,
   een paar extra's en of er beeld nodig is. Geen pagina-telling.
   ============================================================ */

export type SiteType = "eenvoudig" | "vakbedrijf" | "maatwerk" | "webshop";
export type ExtraId = "meertalig" | "betalingen" | "boekingen" | "koppeling";

export type CalcInput = {
  type: SiteType;
  extras: ExtraId[];
  seoUitgebreid: boolean;
  beeldKlaar: boolean;
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

const FLOOR = 1500;
const SPECTRUM_MIN = 1500;
const SPECTRUM_MAX = 8000;

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
    band: [1500, 2500],
    vanafLabel: "vanaf €1.500",
  },
  {
    id: "vakbedrijf",
    label: "Website voor vakbedrijf",
    desc: "Diensten en werkgebied, gebouwd op aanvragen",
    band: [2000, 3500],
    vanafLabel: "vanaf €2.000",
  },
  {
    id: "maatwerk",
    label: "Maatwerk website",
    desc: "Volledig op maat, voor complexe wensen",
    band: [5000, 8000],
    vanafLabel: "vanaf €5.000",
  },
  {
    id: "webshop",
    label: "Webshop",
    desc: "Online verkopen, betalingen inbegrepen",
    band: [4000, 7000],
    vanafLabel: "vanaf €4.000",
  },
];

export const EXTRA_OPTIONS: { id: ExtraId; label: string; add: Band }[] = [
  { id: "meertalig", label: "Meertaligheid", add: [500, 1200] },
  { id: "betalingen", label: "Webshop / betalingen", add: [800, 2000] },
  { id: "boekingen", label: "Boekings- of reserveringssysteem", add: [400, 1000] },
  { id: "koppeling", label: "Koppeling (CRM, agenda, boekhouding)", add: [500, 1200] },
];

/* geen beeld -> we verzorgen fotografie */
const BEELD_NODIG: Band = [400, 900];

const round50 = (n: number) => Math.round(n / 50) * 50;

export function calcPrice(input: CalcInput): CalcResult {
  const type = TYPE_OPTIONS.find((t) => t.id === input.type) ?? TYPE_OPTIONS[0];

  let low = type.band[0];
  let high = type.band[1];

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

  if (!input.beeldKlaar) {
    low += BEELD_NODIG[0];
    high += BEELD_NODIG[1];
    included.push("Professionele fotografie");
  }

  const monthly: string[] = ["Hosting en onderhoud - apart, voordelig maandbedrag"];
  if (input.seoUitgebreid) monthly.push("SEO-groei-retainer - apart per maand");

  return {
    low: Math.max(FLOOR, round50(low)),
    high: round50(high),
    monthly,
    included,
  };
}

export const formatEuro = (n: number) => `€${new Intl.NumberFormat("nl-NL").format(n)}`;

/* positie van een bedrag op het €1.500 → €8.000+ spectrum (0..1) */
export const spectrumPos = (n: number) =>
  Math.min(1, Math.max(0, (n - SPECTRUM_MIN) / (SPECTRUM_MAX - SPECTRUM_MIN)));

export const SPECTRUM = { min: SPECTRUM_MIN, max: SPECTRUM_MAX };
