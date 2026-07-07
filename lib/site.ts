/* ============================================================
   BRANDLIFT · central site content · v2 (redesign)
   Copy source: docs/homepage-blueprint-v1.md (APPROVED, verbatim)
   All customer-facing copy is Dutch, plain hyphens only.
   ============================================================ */

export const site = {
  name: "Brandlift",
  legalName: "Brandlift",
  domain: "brandliftagency.nl",
  url: "https://brandliftagency.nl",
  email: "luca@brandliftagency.nl",
  street: "Guirlande 118",
  postalCode: "2496 WT",
  city: "Den Haag",
  region: "Zuid-Holland",
  country: "NL",
  kvk: "88162427",
  geo: { lat: 52.0479085, lng: 4.3651425 },
  geoLabel: "52.04790° N · 4.36514° O",
  hours: { days: "ma - za", open: "08:00", close: "20:00" },
  socials: {
    instagram: "https://www.instagram.com/brandliftnl/",
    facebook: "https://www.facebook.com/brandliftnl",
  },
  founder: "Luca Budgen",
  tagline: "Meer zichtbaarheid. Meer vertrouwen. Meer aanvragen.",
  oneLiner:
    "Brandlift bouwt strategische websites met lokale SEO voor Nederlandse bedrijven die meer zichtbaarheid, meer vertrouwen en meer aanvragen willen.",
} as const;

export const cta = {
  primary: { label: "Plan een gratis groeigesprek", href: "/contact" },
  primaryHome: { label: "Plan een gratis groeigesprek", href: "#contact" },
  secondary: { label: "Ontdek De Brandlift Methode", href: "#methode" },
} as const;

/* ── 01 Hero ── */
export const hero = {
  eyebrow: "Website · Branding · Lokale SEO · Conversie",
  pillars: ["Website", "Branding", "Lokale SEO", "Conversie"],
  h1Lines: ["Meer zichtbaarheid.", "Meer vertrouwen.", "Meer aanvragen."],
  sub: "Brandlift bouwt strategische websites met branding en lokale SEO. Zo word je beter gevonden, kom je professioneler over en zetten meer bezoekers de stap naar contact.",
  trustLine: "Gevestigd in Den Haag, actief in heel Nederland.",
  ctaMicrocopy: "30 minuten. Geen salespitch. Je weet daarna precies waar je staat.",
  benefits: [
    { icon: "search", label: "Lokaal gevonden" },
    { icon: "shield", label: "Sterke uitstraling" },
    { icon: "chart", label: "Meer aanvragen" },
  ],
  showcase: {
    label: "Hovenier Eykelenboom",
    deliverables: [
      "Complete rebranding",
      "Lokale SEO-optimalisatie",
      "Custom website ontwerp + bouw",
      "Brandlift Methode AI-CMS",
    ],
    stat: { from: "2", to: "24", unit: "aanvragen p/m", caption: "sinds livegang" },
  },
} as const;

/* ── 02 Trust-strip ── */
export const trust = {
  headingA: "Zij leveren het vakwerk,",
  headingB: "wij laten het zien",
  sub: "Een greep van onze helden",
} as const;

/* ── 02 Trust-strip (marquee) ── */
export const clientLogos = [
  { name: "RotorSwing Holland", src: "/logos/rotorswing.png" },
  { name: "Hovenier Eykelenboom", src: "/logos/eykelenboom.png" },
  { name: "De Reizende Kwast", src: "/logos/reizende-kwast.png" },
  { name: "Corda Solar", src: "/logos/corda-solar.png" },
  { name: "ACG", src: "/logos/acg.webp" },
] as const;

export const trustBadges = [
  "Website + Lokale SEO",
  "Eigen AI-systemen",
  "Founder-led aanpak",
  "Den Haag · heel Nederland",
] as const;

/* ── 03 Probleem ── */
export const problem = {
  eyebrow: "Herken je dit?",
  h2: "Je levert goed werk. Online zie je dat niet terug.",
  intro:
    "De meeste bedrijven die vakwerk leveren, komen online te zwak over. Niet omdat het werk niet klopt - maar omdat de website niet is gebouwd om te overtuigen en gevonden te worden.",
  items: [
    {
      title: "De site oogt prima, maar de telefoon blijft stil.",
      body: "Bezoekers kijken rond en klikken weg. Er is geen duidelijke route naar contact.",
    },
    {
      title: "Klanten vinden je niet in Google.",
      body: "Op de zoekopdrachten die ze gebruiken sta je niet - of onder je concurrent.",
    },
    {
      title: "Je diensten zijn niet meteen duidelijk.",
      body: "Wat je doet en voor wie staat er niet scherp genoeg. Twijfel kost je de aanvraag.",
    },
    {
      title: "Je merk doet je vakmanschap tekort.",
      body: "Online lijk je kleiner dan je bent. Dat kost vertrouwen, en dus klussen.",
    },
  ],
  outro: "Herkenbaar? Dan zit er meer in je website dan er nu uitkomt.",
} as const;

/* ── 04 Voor wie — twee werelden, één methode ── */
export const voorWie = {
  eyebrow: "Voor wie",
  h2: "Voor bedrijven die al goed werk leveren - en online willen groeien.",
  intro:
    "Brandlift begrijpt vakbedrijven en servicebedrijven als geen ander. Maar we bouwen net zo graag voor visuele en premium bedrijven die professioneel en betrouwbaar willen overkomen.",
  bridgeLead: "Dezelfde beproefde methode - elke keer op maat voor jouw bedrijf.",
  bridge: "Ontdek De Brandlift Methode",
  panels: [
    {
      id: "vak",
      index: "01",
      label: "Vakbedrijven & servicebedrijven",
      desc: "Brandlift begrijpt vakbedrijven en servicebedrijven als geen ander.",
      items: [
        "Hoveniers",
        "Schilders",
        "Aannemers",
        "Installateurs",
        "Dakdekkers",
        "Elektriciens",
        "Loodgieters",
        "Renovatie- en bouwbedrijven",
        "Lokale servicebedrijven",
      ],
      photo: "/images/audience-vak.jpg",
      photoAlt: "Vakmensen aan het werk op een bouwplaats",
      proof: [
        { name: "Hovenier Eykelenboom", src: "/logos/eykelenboom.png" },
        { name: "De Reizende Kwast", src: "/logos/reizende-kwast.png" },
      ],
      href: "/voor-wie/vakbedrijven",
      linkLabel: "Bekijk de aanpak voor vakbedrijven",
    },
    {
      id: "premium",
      index: "02",
      label: "Premium & visuele bedrijven",
      desc: "We bouwen net zo graag voor visuele en premium bedrijven die professioneel en betrouwbaar willen overkomen.",
      items: ["Vastgoed", "Maritiem & jacht", "Interieurdesign", "Klinieken"],
      photo: "/images/audience-premium.jpg",
      photoAlt: "Superjacht voor anker aan een groene kustlijn",
      proof: [{ name: "RotorSwing Holland", src: "/logos/rotorswing.png" }],
      href: "/voor-wie",
      linkLabel: "Voor wie werkt Brandlift",
    },
    {
      id: "overig",
      index: "03",
      label: "Overige bedrijven",
      desc: "Val jouw bedrijf hier niet tussen? Geen probleem. Lever je goed werk en wil je online sterker overkomen, dan bouwen we er net zo graag voor.",
      items: ["Webshops", "Horeca", "Retail", "B2B-dienstverleners", "Praktijken & coaches"],
      photo: "/images/audience-overig.jpg",
      photoAlt: "Interieur van een eigentijdse lokale winkel",
      proof: [] as { name: string; src: string }[],
      note: "Twijfel je of het past? Eén groeigesprek geeft antwoord.",
      href: "/contact",
      linkLabel: "Bespreek jouw situatie",
    },
  ],
} as const;

/* ── 05 Diensten ── */
export const services = [
  {
    id: "website",
    motif: "wireframe",
    title: "Website laten maken",
    lead: "Een strategische website die vertrouwen wekt en aanvragen oplevert - geen digitale brochure.",
    points: ["Strategie en paginastructuur", "Webdesign en copy", "Conversiegerichte opbouw"],
    linkLabel: "Meer over website laten maken",
    href: "/diensten/website-laten-maken",
    job: "Zet bezoekers om in aanvragen",
    image: "/images/macbook-only-bigger.jpg",
    imageAlt: "De website die we bouwden voor Hovenier Eykelenboom, getoond op een laptop",
  },
  {
    id: "lokale-seo",
    motif: "radar",
    title: "Lokale SEO",
    lead: "Beter gevonden worden in je eigen regio, met een website die is gebouwd om te scoren.",
    points: ["Dienst- en locatiepagina's", "Google Bedrijfsprofiel", "Techniek en schema"],
    linkLabel: "Meer over lokale SEO",
    href: "/diensten/lokale-seo",
    job: "Wordt gevonden in je regio",
  },
  {
    id: "branding",
    motif: "focus",
    title: "Branding",
    lead: "Een scherpere uitstraling die past bij de kwaliteit van je werk en je website geloofwaardiger maakt.",
    points: ["Merkstrategie en positionering", "Visuele identiteit", "Doorvertaling naar de website"],
    linkLabel: "Meer over branding",
    href: "/diensten/branding",
    job: "Bouwt vertrouwen op",
    image: "/images/brandbook-only.jpg",
    imageAlt: "De merkgids die we ontwierpen voor Hovenier Eykelenboom",
  },
] as const;

export const servicesHead = {
  eyebrow: "Wat we bouwen",
  h2: "Eén website. Drie dingen die hij moet doen.",
  intro:
    "Geen losse diensten, maar één groeifundament: beter gevonden worden, vertrouwen opbouwen en bezoekers omzetten in aanvragen.",
} as const;

/* ── 06 Waarom Brandlift ── */
export const waarom = {
  eyebrow: "Waarom Brandlift",
  h2: "Verder dan mooi. Gebouwd om te presteren.",
  intro:
    "Een goedkope website is zo gemaakt. Een website die klanten oplevert vraagt om strategie. Daar zit het verschil.",
  benefits: [
    {
      title: "Strategie, SEO en conversie als basis",
      body: "Elke pagina is gebouwd op een doel, niet op een sjabloon.",
      wide: true,
      icon: "target",
    },
    {
      title: "Ervaring uit de Amerikaanse markt",
      body: "Aangescherpt in een van de meest competitieve online markten ter wereld.",
      wide: false,
      icon: "globe",
    },
    {
      title: "Eigen AI-systemen",
      body: "Sneller en scherper werken met eigen workflows voor research en kwaliteit - nooit als vervanging van strategie.",
      wide: false,
      icon: "chip",
    },
    {
      title: "Een partner, geen leverancier",
      body: "Je werkt direct met de persoon achter de strategie. Kort lijntje, echt meedenken.",
      wide: true,
      icon: "partners",
    },
    {
      title: "Premium uitstraling, praktische groei",
      body: "Ziet er serieus uit en levert tegelijk aanvragen op.",
      wide: false,
      icon: "gem",
    },
    {
      title: "Vakbedrijven door en door",
      body: "We weten wat jouw klant zoekt en wat hem over de streep trekt.",
      wide: false,
      icon: "tools",
    },
  ],
} as const;

/* ── 07 De Brandlift Methode ── */
export const methode = {
  eyebrow: "De Brandlift Methode",
  h2: "Van groeigesprek naar een website die klopt.",
  intro:
    "Geen website die toevallig werkt. Een vaste aanpak, stap voor stap, gebouwd op vindbaarheid, vertrouwen en conversie.",
  steps: [
    { n: "01", title: "Positionering", body: "We bepalen hoe je bedrijf sterker en betrouwbaarder overkomt dan de concurrent." },
    { n: "02", title: "Structuur", body: "Een heldere sitemap en paginastructuur, logisch voor bezoekers en zoekmachines." },
    { n: "03", title: "Branding", body: "De uitstraling gaat passen bij je kwaliteit, doelgroep en gewenste marktpositie." },
    { n: "04", title: "Lokale SEO", body: "Een sterke lokale basis, zodat diensten, locaties en zoekintentie goed worden afgedekt." },
    { n: "05", title: "Conversie", body: "Pagina's gericht op vertrouwen, duidelijkheid en actie, zodat bezoekers sneller contact opnemen." },
    { n: "06", title: "Techniek", body: "Snel, modern en schaalbaar gebouwd, met een custom CMS waar dat nodig is." },
    { n: "07", title: "Groei", body: "Na livegang uit te breiden met SEO, content, advertenties en verdere optimalisatie." },
  ],
  aiNote: "Versneld met eigen AI-systemen voor research, structuur en kwaliteit.",
  outro: "Benieuwd hoe dit er voor jouw bedrijf uitziet?",
} as const;

/* ── 08 Cases ── */
export const casesHead = {
  eyebrow: "Cases",
  h2: "Strategisch gebouwd. Niet alleen mooi gemaakt.",
  intro:
    "Voor elk bedrijf begon het bij dezelfde vraag: hoe kom je online net zo sterk over als in het echt?",
  allLabel: "Bekijk alle cases",
  allHref: "/cases",
} as const;

export const cases = [
  {
    id: "rotorswing",
    client: "RotorSwing Holland",
    sector: "Maritiem / jachttechniek",
    challenge: "Een technisch sterk product dat online niet de premium indruk maakte die het verdient.",
    direction: "Positionering als premium jachtmerk, met een adviestool die bezoekers naar de juiste stabilisator leidt.",
    href: "/cases/rotorswing",
    logo: "/logos/rotorswing.png",
    url: "rotorswing.nl",
  },
  {
    id: "eykelenboom",
    client: "Hovenier Eykelenboom",
    sector: "Hoveniers / groenvoorziening",
    challenge: "Vakwerk dat lokaal te weinig werd gevonden en te weinig aanvragen opleverde.",
    direction: "Complete website met lokale SEO-structuur per dienst en werkgebied, gebouwd op vindbaarheid.",
    href: "/cases/hovenier-eykelenboom",
    logo: "/logos/eykelenboom.png",
    url: "hoveniereykelenboom.nl",
  },
  {
    id: "de-reizende-kwast",
    client: "De Reizende Kwast",
    sector: "Schilders / afwerking",
    challenge: "Een ambachtelijk schildersbedrijf zonder website die het vakmanschap overtuigend liet zien.",
    direction: "Merkuitstraling en heldere dienstenstructuur die vertrouwen opbouwt en tot aanvragen leidt.",
    href: "/cases/de-reizende-kwast",
    logo: "/logos/reizende-kwast.png",
    url: "dereizendekwast.nl",
  },
] as const;

/* ── 09 CTA-band ── */
export const ctaBand = {
  h3: "Zie je jouw bedrijf hierin terug?",
  body: "In een gratis groeigesprek laten we zien waar in jouw website aanvragen blijven liggen - en wat er mogelijk is.",
  cta: "Plan een gratis groeigesprek",
  microcopy: "30 minuten. Geen salespitch.",
} as const;

/* ── 10 Over Brandlift ── */
export const founder = {
  eyebrow: "Achter Brandlift",
  h2: "Geen anoniem bureau. Gewoon Luca - en een obsessie met resultaat.",
  body: "Brandlift is geen bureau met een receptie en tien tussenlagen. Achter elke strategie zit Luca Budgen. Hij leerde het vak in de Amerikaanse markt - waar je online opvalt of verdwijnt - en combineert dat met een achtergrond in fotografie, branding en development. Daardoor kijkt hij niet alleen naar hoe je website eruitziet, maar naar hoe je bedrijf online vertrouwen opbouwt, gevonden wordt en klanten binnenhaalt. Je werkt dus niet met een accountmanager, maar met de persoon die je site ook echt bouwt. Kort lijntje, eerlijk advies, en een partner die net zo graag wil dat het werkt als jij.",
  quote: "Ik behandel jouw website zoals jij een klus aanpakt: doordacht, opgemeten en gegarandeerd werkend.",
  points: [
    "Ervaring uit de Amerikaanse markt",
    "Achtergrond in fotografie, branding en development",
    "Founder-led - je spreekt de bouwer zelf",
    "Gevestigd in Den Haag",
  ],
} as const;

/* ── 11 Lokale SEO / Den Haag ── */
export const denHaag = {
  eyebrow: "Den Haag · heel Nederland",
  h2: "Gebouwd vanuit Den Haag. Gemaakt voor groei in heel Nederland.",
  body: "Lokale SEO is meer dan een plek op de kaart. We bouwen je website met een sterke lokale basis - dienstpagina's, locatiesignalen, interne links en een scherp Google Bedrijfsprofiel - zodat de juiste klanten je vinden.",
  points: ["Dienstpagina's", "Locatiesignalen", "Google Bedrijfsprofiel", "Reviews en vertrouwen"],
  links: [
    { label: "Website laten maken in Den Haag", href: "/website-laten-maken-den-haag" },
    { label: "Meer over lokale SEO", href: "/diensten/lokale-seo" },
  ],
} as const;

/* ── 12 FAQ ── */
export const faqs = [
  {
    q: "Voor wie werkt Brandlift?",
    a: "Voor Nederlandse vakbedrijven en servicebedrijven die al goed werk leveren maar online nog niet sterk overkomen - en voor visuele en premium bedrijven die professioneel en betrouwbaar willen overkomen.",
  },
  {
    q: "Maakt Brandlift alleen websites, of ook branding en SEO?",
    a: "De kracht zit juist in de combinatie: website, branding, lokale SEO en conversie in één aanpak. Dat is De Brandlift Methode.",
  },
  {
    q: "Wat kost een website laten maken?",
    a: "Dat hangt af van je doel, omvang en de mate van maatwerk. In het groeigesprek geven we een eerlijke indicatie.",
    link: { label: "Lees eerst wat een website laten maken kost", href: "/kennisbank/wat-kost-een-website-laten-maken" },
  },
  {
    q: "Werkt Brandlift alleen in Den Haag?",
    a: "Brandlift is gevestigd in Den Haag en werkt voor bedrijven in heel Nederland. De lokale focus zit in de aanpak, niet in de regio.",
  },
  {
    q: "Wat maakt een Brandlift-website anders?",
    a: "We kijken verder dan mooi design. Elke pagina is gebouwd op strategie, vindbaarheid en conversie - zodat je website meer aanvragen ondersteunt in plaats van alleen goed oogt.",
  },
  {
    q: "Hoe start een traject?",
    a: "Met een gratis groeigesprek van 30 minuten. Geen salespitch - we kijken waar je nu staat en waar aanvragen blijven liggen.",
  },
] as const;

/* ── 13 Slot-CTA ── */
export const finalCta = {
  eyebrow: "Gratis groeigesprek",
  h2: "Klaar om je website serieuzer voor je bedrijf te laten werken?",
  body: "In 30 minuten kijken we waar je nu staat, waar aanvragen blijven liggen en welke aanpak logisch is. Geen salespitch.",
  steps: [
    "We kijken waar je nu staat",
    "We laten zien waar aanvragen blijven liggen",
    "Je krijgt een concrete aanpak - vrijblijvend",
  ],
} as const;

/* ── Kennisbank teasers (used on stub/kennisbank pages) ── */
export const articles = [
  {
    title: "Wat kost een website laten maken?",
    lead: "Welke keuzes de prijs bepalen - van strategie en design tot SEO, techniek en maatwerk.",
    href: "/kennisbank/wat-kost-een-website-laten-maken",
    tag: "Kosten",
  },
  {
    title: "Wat is lokale SEO?",
    lead: "Hoe lokale vindbaarheid werkt en waarom die begint bij je eigen website.",
    href: "/kennisbank/wat-is-lokale-seo",
    tag: "Lokale SEO",
  },
  {
    title: "Website laten maken: het stappenplan",
    lead: "Van groeigesprek tot livegang - wat er in welke volgorde gebeurt.",
    href: "/kennisbank/website-laten-maken-stappenplan",
    tag: "Proces",
  },
] as const;
