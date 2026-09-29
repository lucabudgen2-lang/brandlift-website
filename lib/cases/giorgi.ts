/* ============================================================
   CASE · GIORGI & THE GENTS - de enige bron voor deze casepagina.

   Elk getal hieronder is terug te voeren op iets dat bestaat:
   - zoekvolumes, local pack en seizoen: docs/seo-research.md in de
     Giorgi-repo (DataForSEO, vier rondes, juli 2026). Volumes zijn de
     "echte" waarden, gecorrigeerd voor de piek van september 2025.
   - onboarding: georgie-onboarding/index.html (10 secties, 70 velden,
     68 unieke data-schema-paden, geteld in de broncode).
   - snelheid: Lighthouse 13.5 op de live site, 29 september 2026.
     Desktop en mobiel elk los gedraaid, mobiel twee keer (beide 95).
   - tijdlijn na livegang: git log van de Giorgi-repo.
   - "binnen drie weken": Max' eigen woorden in zijn Google-review.
   Geen conversiecijfers: die hebben we niet, dus die staan er niet.
   ============================================================ */

export const IMG = "/images/cases/giorgi";

export const caseGiorgi = {
  slug: "giorgi-and-the-gents",
  client: "Giorgi & The Gents",
  opdrachtgever: "JungleBookings",
  contact: "Max Groenen",
  url: "giorgiandthegents.nl",
  updated: "2026-09-29",
  metaTitle: "Case: Giorgi & The Gents - bandwebsite in 3 weken",
  metaDescription:
    "Van persoonlijke intake tot tweetalige website in drie weken: onderzoek, merkboek, videografie en een snelle site voor Giorgi & The Gents en JungleBookings.",
  h1: "Giorgi & The Gents: online net zo overtuigend als op het podium",
} as const;

export const kort = [
  { k: "Klant", v: "Giorgi & The Gents" },
  { k: "Opdrachtgever", v: "JungleBookings" },
  { k: "Contactpersoon", v: "Max Groenen" },
  { k: "Sector", v: "Live muziek voor bruiloften en bedrijfsfeesten" },
  { k: "Werkgebied", v: "Heel Nederland, internationaal op aanvraag" },
  { k: "Talen", v: "Nederlands en Engels" },
] as const;

export const opleveringen = [
  "Persoonlijke onboarding",
  "SEO-onderzoek in 4 rondes",
  "Merkboek",
  "Videografie verwerkt",
  "Website-ontwerp",
  "Development",
  "Nederlands + Engels",
  "Doorlopende ondersteuning",
] as const;

/* De acht fases - ook de ankers voor de voortgangsbalk. */
export const fases = [
  { id: "onboarding", nr: "01", kort: "Onboarding", titel: "Persoonlijke onboarding", lijn: "Een intake en een vragenlijst die de band écht leert kennen." },
  { id: "onderzoek", nr: "02", kort: "Onderzoek", titel: "SEO-onderzoek", lijn: "Vier rondes data: waar zoekt Nederland werkelijk op?" },
  { id: "merkboek", nr: "03", kort: "Merkboek", titel: "Het merkboek", lijn: "Logo, kleur, letter en beeld - vastgelegd vóór het ontwerp." },
  { id: "videografie", nr: "04", kort: "Video", titel: "Videografie", lijn: "Zeven opnames, zo verwerkt dat ze direct spelen." },
  { id: "ontwerp", nr: "05", kort: "Ontwerp", titel: "Website-ontwerp", lijn: "Het merkboek, pagina voor pagina doorvertaald." },
  { id: "development", nr: "06", kort: "Development", titel: "Development", lijn: "Snel, vindbaar en gebouwd om aanvragen binnen te halen." },
  { id: "tweetalig", nr: "07", kort: "NL + EN", titel: "Nederlands en Engels", lijn: "Twee volwaardige versies, niet één vertaalde." },
  { id: "oplevering", nr: "08", kort: "Oplevering", titel: "Oplevering en daarna", lijn: "Live in drie weken, en daarna gewoon doorgebouwd." },
] as const;

/* ── Fase 1 · onboarding ── */
export const onboardingStats = [
  { n: "10", label: "secties" },
  { n: "70", label: "vragen en keuzes" },
  { n: "±20", label: "minuten invullen" },
  { n: "68", label: "antwoorden met een vaste plek in de site" },
] as const;

/* Drie echte velden uit het formulier en waar ze op de site landen. */
export const onboardingKoppelingen = [
  { vraag: "Officiële bandnaam", pad: "band.name", landt: "De naam in elke paginatitel en in de gestructureerde data voor Google" },
  { vraag: "In welke regio's zijn jullie actief?", pad: "geo.regions[]", landt: "Het werkgebied in de teksten én het veld areaServed dat Google leest" },
  { vraag: "Per lid: naam, instrument, korte bio", pad: "member[]", landt: "De bandleden op /de-gents, elk als eigen persoon in de data" },
] as const;

/* ── Fase 2 · onderzoek ── */
export const onderzoekStats = [
  { n: "4", label: "onderzoeksrondes" },
  { n: "140+", label: "zoektermen gemeten" },
  { n: "10", label: "concurrenten live doorgelicht" },
  { n: "0", label: "zoekopdrachten op de vier gewenste zoektermen" },
] as const;

/* De vier zoektermen uit de briefing - allemaal nul. */
export const briefingTermen = [
  "trouwen in italie band",
  "exclusieve live entertainment italiaanse stijl",
  "boho chic live band exclusieve bruiloft",
  "high end coverband zakelijk gala private dinner",
] as const;

/* Waar Nederland wél op zoekt. Echte maandvolumes, gecorrigeerd. */
export type Term = { term: string; volume: number; intentie: string; route: string };
export const echteTermen: Term[] = [
  { term: "coverband", volume: 900, intentie: "Oriënterend", route: "Google Maps" },
  { term: "zanger / zangeres boeken", volume: 453, intentie: "Niet gemeten", route: "Website + Maps" },
  { term: "bruiloft band", volume: 438, intentie: "Boekend", route: "Website + Maps" },
  { term: "bandje bruiloft", volume: 438, intentie: "Boekend", route: "Website + Maps" },
  { term: "muziek bruiloft", volume: 318, intentie: "Oriënterend", route: "Muziekgids" },
  { term: "zangeres inhuren", volume: 264, intentie: "Niet gemeten", route: "Website" },
  { term: "band boeken", volume: 206, intentie: "Oriënterend", route: "Website + Maps" },
  { term: "akoestische band", volume: 157, intentie: "Oriënterend", route: "Website" },
  { term: "coverband bruiloft", volume: 116, intentie: "Boekend", route: "Google Maps" },
  { term: "band huren feest", volume: 112, intentie: "Boekend", route: "Website" },
  { term: "live muziek bruiloft", volume: 103, intentie: "Vergelijkend", route: "Website + Maps" },
];

/* Google Trends, NL, "bruiloft" - index per maand. */
export const seizoen = [
  { m: "jul '25", v: 60 }, { m: "aug", v: 73 }, { m: "sep", v: 63 }, { m: "okt", v: 42 },
  { m: "nov", v: 29 }, { m: "dec", v: 27 }, { m: "jan '26", v: 40 }, { m: "feb", v: 45 },
  { m: "mrt", v: 63 }, { m: "apr", v: 74 }, { m: "mei", v: 88 }, { m: "jun", v: 91 }, { m: "jul", v: 64 },
] as const;

/* De zes bands in de local pack voor "coverband". Namen weggelaten: het
   gaat om het patroon, niet om de concurrenten. */
export const localPack = [
  { plek: 1, plaats: "Nootdorp", score: "5,0", reviews: 56 },
  { plek: 2, plaats: "Zeist", score: "5,0", reviews: 39 },
  { plek: 3, plaats: "Hilversum", score: "4,9", reviews: 12 },
  { plek: 4, plaats: "Oudkarspel", score: "5,0", reviews: 26 },
  { plek: 5, plaats: "Soest", score: "5,0", reviews: 8 },
  { plek: 6, plaats: "Heerhugowaard", score: "5,0", reviews: 46 },
] as const;

export const inzichten = [
  {
    kop: "\"Liveband\" bestaat niet in Google",
    tekst: "Aan elkaar geschreven: nul zoekopdrachten, in elke combinatie. \"Bruiloft band\" in twee woorden: 438 per maand. De briefing gebruikte overal het eerste. De site gebruikt nergens het eerste.",
  },
  {
    kop: "\"Bandje\" is net zo groot als \"band\"",
    tekst: "Het Nederlandse verkleinwoord bleek een eigen zoekwereld van dezelfde omvang: bandje bruiloft, bandje boeken, bandje huren. Wie alleen op \"band\" schrijft, mist de helft.",
  },
  {
    kop: "Niemand laat zich horen",
    tekst: "Van tien concurrenten liet er niet één je op de eigen site naar de band luisteren. Terwijl dat precies is wat een bruidspaar wil weten. Dat werd het hart van het ontwerp.",
  },
] as const;

/* ── Fase 3 · merkboek ── */
export const kleuren = [
  { naam: "Nachtblauw", hex: "#0D1B2A", rol: "Diepte, avond, contrast", licht: false },
  { naam: "Antraciet", hex: "#1C1E21", rol: "Werkkleur voor tekst en vlak", licht: false },
  { naam: "Goud", hex: "#D4AF37", rol: "Het accent: logo, lijnen, knoppen", licht: true },
  { naam: "Linnen", hex: "#F4EFE6", rol: "Rustige secundaire achtergrond", licht: true },
  { naam: "Ivoor", hex: "#F9F6F0", rol: "Het primaire canvas", licht: true },
] as const;

export const merkPaginas = [
  { src: `${IMG}/merkboek-01.jpg`, alt: "Omslag van het merkboek van Giorgi & The Gents met het gouden boog-logo op nachtblauw", caption: "De omslag" },
  { src: `${IMG}/merkboek-05.jpg`, alt: "Merkboekpagina over het logo De Boog, in vier kleurvarianten", caption: "Het logo: De Boog" },
  { src: `${IMG}/merkboek-07.jpg`, alt: "Merkboekpagina met het kleurensysteem en de goudschaal", caption: "Kleur en goudschaal" },
  { src: `${IMG}/merkboek-09.jpg`, alt: "Merkboekpagina over typografie met Playfair Display en Montserrat", caption: "Typografie" },
  { src: `${IMG}/merkboek-11.jpg`, alt: "Merkboekpagina Het Gouden Uur over de beeldtaal, met vier boogvormige sfeerbeelden", caption: "Beeldtaal: het gouden uur" },
  { src: `${IMG}/merkboek-12.jpg`, alt: "Merkboekpagina over de grafische motieven: de boog, de hairline en de ademruimte", caption: "Grafische motieven" },
  { src: `${IMG}/merkboek-14.jpg`, alt: "Merkboekpagina met toepassingen: podiumbanner, Instagram en briefpapier", caption: "Toepassingen" },
  { src: `${IMG}/merkboek-15.jpg`, alt: "Merkboekpagina Van gids naar code met de design tokens voor de website", caption: "Van gids naar code" },
] as const;

/* ── Fase 4 · videografie ── */
export const videoStats = [
  { n: "7", label: "livesessies, elk als clip én audiomix" },
  { n: "1080p", label: "scherper én lichter dan de eerste versie" },
  { n: "0 KB", label: "video geladen voordat iemand op play drukt" },
  { n: "263 ms", label: "van klik tot eerste beeld, gemeten op de live site" },
] as const;

export const stills = [
  { src: `${IMG}/still-medley-22.jpg`, alt: "Zangeres Gwen Kaihatu zingt in de Ruïnekerk van Oude Niedorp, met de gitarist op de achtergrond" },
  { src: `${IMG}/still-so-easy-40.jpg`, alt: "De volledige band speelt in de open ruïne van de Ruïnekerk in Oude Niedorp" },
  { src: `${IMG}/still-diamonds-25.jpg`, alt: "Gwen Kaihatu zingt Diamonds met gitarist en toetsenist onder lichtsnoeren" },
  { src: `${IMG}/still-medley-41.jpg`, alt: "Dronebeeld van boven op de band in de Ruïnekerk tussen het groen" },
] as const;

/* ── Fase 6 · development ── */
export const lighthouse = {
  gemeten: "29 september 2026",
  desktop: { performance: 100, accessibility: 100, bestPractices: 100, seo: 100, lcp: "0,7 s", cls: "0", tbt: "0 ms" },
  mobiel: { performance: 95, accessibility: 100, bestPractices: 100, seo: 100, lcp: "2,7 s", cls: "0", tbt: "30 ms" },
} as const;

export const pijlers = [
  {
    kop: "Snelheid",
    punten: [
      "Elke pagina staat als kant-en-klare HTML klaar - geen server die eerst moet rekenen",
      "Video pas laden na een klik, zodat de pagina zelf licht blijft",
      "Beelden per schermformaat uitgesneden, in AVIF en WebP",
      "Geen enkel script van derden zonder toestemming",
    ],
  },
  {
    kop: "Vindbaarheid",
    punten: [
      "Alle tekst direct leesbaar voor Google, zonder JavaScript - 1.782 woorden op de homepage",
      "Gestructureerde data voor de band, de boekingen, video's, veelgestelde vragen en het kruimelpad",
      "Een muziekgids voor de oriënterende zoekvragen rond ceremonie- en bruiloftsmuziek",
      "31 SEO-regels die automatisch worden gecontroleerd voor elke livegang",
    ],
  },
  {
    kop: "Conversie",
    punten: [
      "Een aanvraagformulier op elke pagina dat direct als e-mail wordt verstuurd - zonder omweg via de mail-app",
      "Max persoonlijk bereikbaar via een zwevende WhatsApp-knop met zijn eigen foto",
      "Per nummer een play-knop: horen voordat je boekt",
      "Een heldere dagprijs en een reactie binnen 24 uur als vaste belofte",
    ],
  },
] as const;

export const controles = [
  { naam: "SEO-audit", wat: "31 regels: titels, koppen, ankerteksten, beelden, schema, datums" },
  { naam: "Taalcontrole", wat: "Geen Nederlands op Engelse pagina's, tot in de gestructureerde data" },
  { naam: "Hreflang", wat: "Elke taalverwijzing wederzijds, zelfverwijzend en naar een bestaande pagina" },
  { naam: "Reviews", wat: "Elke review woordelijk gelijk aan het origineel" },
  { naam: "Contrast", wat: "Tekst op elke herofoto gemeten tegen de WCAG-norm" },
  { naam: "Structuur", wat: "De Nederlandse en Engelse pagina's bouwkundig gelijk" },
] as const;

/* ── Fase 7 · tweetalig ── */
export const tweetaligStats = [
  { n: "10", label: "Engelse pagina's" },
  { n: "27", label: "pagina's in de sitemap" },
  { n: "10", label: "taalparen met wederzijdse hreflang" },
] as const;

/* ── Fase 8 · na de livegang (uit de git-historie) ── */
export const naLivegang = [
  { datum: "12 aug", wat: "De Engelse versie live, met tien eigen pagina's" },
  { datum: "13 aug", wat: "Tekstcontrast op alle foto's verbeterd: 12 WCAG-fouten naar 0" },
  { datum: "31 aug", wat: "Een play-knop per nummer, met de songvideo in een venster" },
  { datum: "4 sep", wat: "De Behind the Scenes-pagina en de galerij met alle opnames" },
  { datum: "11 sep", wat: "Het formulier mailt nu direct, zonder omweg via de mail-app" },
  { datum: "13 sep", wat: "Alle video's naar 1080p, en toch lichter dan ervoor" },
  { datum: "29 sep", wat: "Cookiemelding en Tag Manager, klaar voor Google Ads" },
] as const;
