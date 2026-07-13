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
    photo: "/images/macbook-only-bigger.jpg",
  },
  {
    id: "de-reizende-kwast",
    client: "De Reizende Kwast",
    sector: "Schilders / afwerking",
    challenge: "Een ambachtelijk schildersbedrijf zonder website die het vakmanschap overtuigend liet zien.",
    direction: "Merkuitstraling en heldere dienstenstructuur die vertrouwen opbouwt en tot aanvragen leidt.",
    href: "/cases/de-reizende-kwast",
    logo: "/logos/reizende-kwast.png",
    url: "dereizendekwast-schilders.nl",
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
  h2: "Geen anoniem bureau. Gewoon Luca - die je site zelf bouwt.",
  body: [
    "Brandlift is ontstaan uit ergernis. Te veel Nederlandse bureaus behandelen je als klantnummer 147: je praat met een accountmanager, je site verdwijnt in een wachtrij, en \"SEO\" betekent een rapportje met groene vinkjes dat niemand snapt - en dat je geen enkele klant oplevert.",
    "Bij ons is dat anders. Je praat direct met de persoon die je site ook echt ontwerpt, bouwt en oplevert. We leerden het vak in de Amerikaanse markt, waar je online meteen opvalt of verdwijnt, en combineren dat met een achtergrond in fotografie, branding en development. Geen vinkjes, maar SEO die er echt voor zorgt dat je gevonden wordt door mensen die klaar zijn om te bellen.",
    "Kort lijntje, eerlijk advies, en iemand die net zo graag wil dat het werkt als jij.",
  ],
  proof: "Zo bouwden we onder meer de nieuwe site voor Hovenier Eykelenboom in Den Haag.",
  quote: "Ik behandel jouw website zoals jij een klus aanpakt: doordacht, opgemeten en werkend opgeleverd.",
  points: [
    "Je spreekt de bouwer zelf, geen tussenlagen",
    "Aanpak uit de veeleisende Amerikaanse markt",
    "Fotografie, branding én development in één hand",
    "Gevestigd in Den Haag",
  ],
  ctaLabel: "Vraag een gratis site-check aan",
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

/* ── Over Brandlift (about page) ── */
export const aboutPage = {
  hero: {
    eyebrow: "Over Brandlift",
    h1Lines: ["Geen anoniem bureau.", "Wel het bureau dat je", "site zelf bouwt."],
    sub: "Achter elke Brandlift-website zit Luca Budgen - die je project persoonlijk ontwerpt, bouwt en oplevert. Kort lijntje, eerlijk advies, en iemand die net zo graag wil dat het werkt als jij.",
    cta: "Vraag een gratis site-check aan",
  },
  origin: {
    eyebrow: "Waarom we bestaan",
    h2: "Ontstaan uit ergernis.",
    paras: [
      "Te veel Nederlandse bureaus behandelen je als klantnummer 147. Je praat met een accountmanager die je site nooit aanraakt, je project verdwijnt in een wachtrij, en na drie weken krijg je een SEO-rapportje met groene vinkjes dat niemand snapt - en dat geen enkele klant oplevert.",
      "Wij besloten het tegenovergestelde te bouwen. Geen tussenlagen, geen wachtrijen, geen rapportjes voor de vorm. Gewoon een bureau waar de persoon die je spreekt ook de persoon is die je site ontwerpt, bouwt en oplevert.",
    ],
    payoff: "Bij ons praat je direct met de bouwer. Geen vinkjes, wel resultaat.",
  },
  luca: {
    eyebrow: "Dit is Luca",
    h2: "De bouwer achter elke Brandlift-site.",
    blocks: [
      {
        n: "01",
        title: "Aangescherpt in de Amerikaanse markt",
        body: "Luca leerde het vak in een van de meest competitieve online markten ter wereld - waar je meteen opvalt of verdwijnt. Die lat gaat mee naar elk Nederlands project.",
      },
      {
        n: "02",
        title: "Strategie, beeld en techniek in één hand",
        body: "Een achtergrond in fotografie, branding én development betekent dat er niets verloren gaat tussen ontwerp en oplevering. Wat bedacht wordt, wordt ook zo gebouwd.",
      },
      {
        n: "03",
        title: "Founder-led, van begin tot eind",
        body: "Je spreekt geen accountmanager maar de bouwer zelf. Eén aanspreekpunt dat elk detail van je project kent - van het eerste gesprek tot livegang.",
      },
    ],
  },
  principles: {
    eyebrow: "Waar we in geloven",
    h2: "Vier principes. Eén doel: dat het werkt.",
    items: [
      {
        title: "Strategie voor mooi",
        believe: "Een site die er goed uitziet maar niets oplevert, is een dure brochure.",
        get: "Elke pagina begint bij een doel - en levert daaraan af.",
      },
      {
        title: "Eerlijk boven verkopen",
        believe: "Een lange offerte is geen strategie.",
        get: "Als iets niet nodig is, zeggen we het. Geen salespitch.",
      },
      {
        title: "Eén aanspreekpunt",
        believe: "Tussenlagen kosten tijd, geld en kwaliteit.",
        get: "De persoon die adviseert, bouwt ook. Kort lijntje.",
      },
      {
        title: "Gebouwd om gevonden te worden",
        believe: "SEO is geen rapportje met vinkjes.",
        get: "Vindbaarheid die klanten oplevert die klaar zijn om te bellen.",
      },
    ],
  },
  contrast: {
    eyebrow: "Wat ons anders maakt",
    h2: "Een typisch bureau - en hoe wij het doen.",
    themLabel: "Een typisch bureau",
    usLabel: "Brandlift",
    rows: [
      { them: "Je praat met een accountmanager", us: "Je praat met de bouwer zelf" },
      { them: "Een template met jouw logo erop", us: "Strategie en ontwerp per pagina" },
      { them: "Een SEO-rapport met groene vinkjes", us: "SEO die aanvragen oplevert" },
      { them: "Je project verdwijnt in een wachtrij", us: "Kort lijntje, snel schakelen" },
    ],
  },
  proof: {
    eyebrow: "Bewijs",
    h2: "Geen beloftes, maar werk dat het laat zien.",
    stat: {
      from: "2",
      to: "24",
      unit: "aanvragen p/m",
      caption: "Hovenier Eykelenboom - na de nieuwe site met lokale SEO-structuur",
    },
    ctaLabel: "Bekijk alle cases",
  },
  process: {
    eyebrow: "Zo werken we",
    line: "Elke site doorloopt dezelfde zeven stappen - van positionering tot groei. Geen improvisatie, wel een methode die zich bewezen heeft.",
    ctaLabel: "Ontdek de volledige werkwijze",
  },
  audience: {
    eyebrow: "Voor wie we bouwen",
    line: "Van hoveniers en installateurs tot jachttechniek en interieurdesign - we bouwen voor bedrijven die goed werk leveren en daar online sterker mee willen overkomen.",
    groups: ["Vakbedrijven & servicebedrijven", "Premium & visuele bedrijven", "Overige bedrijven"],
    ctaLabel: "Bekijk voor wie",
  },
  practical: {
    eyebrow: "Praktisch",
    h2: "Gevestigd in Den Haag. Werkt door heel Nederland.",
    body: "Ons kantoor staat in Den Haag, maar afstand speelt geen rol: de meeste samenwerking verloopt online - snel en zonder reistijd.",
  },
  slotCta: {
    h2: "Benieuwd wat we voor jouw bedrijf kunnen betekenen?",
    body: "Plan een gratis, vrijblijvend gesprek - je weet daarna precies waar je staat.",
    ctaLabel: "Vraag een gratis site-check aan",
    micro: "30 minuten. Geen salespitch.",
  },
} as const;

export const aboutFaqs = [
  {
    q: "Werk ik echt met Luca zelf, of met een accountmanager?",
    a: "Met Luca zelf. Brandlift heeft bewust geen tussenlagen: de persoon die je spreekt is ook de persoon die je site ontwerpt, bouwt en oplevert.",
  },
  {
    q: "Waar zit Brandlift?",
    a: "Ons kantoor staat in Den Haag, maar we bouwen voor bedrijven door heel Nederland. De meeste samenwerking verloopt online - snel en zonder reistijd.",
  },
  {
    q: "Is een klein bureau geen nadeel?",
    a: "Het is precies waarom klanten voor ons kiezen. Geen wachtrijen, geen ruis tussen afdelingen en niemand die je project half kent. Wel directe communicatie en iemand die elk detail overziet.",
  },
  {
    q: "Hebben jullie ervaring in mijn branche?",
    a: "We bouwden onder meer voor hoveniers, schilders, jachttechniek en zonne-energie. Belangrijker dan de branche is de aanpak: we verdiepen ons in jouw klant en bouwen daar de strategie omheen.",
    link: { label: "Bekijk onze cases", href: "/cases" },
  },
  {
    q: "Wat kost het om te starten?",
    a: "Dat hangt af van je doel en de omvang van het project. In een gratis groeigesprek van 30 minuten geven we een eerlijke indicatie - zonder verplichtingen.",
    link: { label: "Plan een gratis groeigesprek", href: "/contact" },
  },
] as const;

/* ── Google-reviews (echt, verbatim overgenomen) ── */
export const reviews = {
  source: "Google",
  rating: 5.0,
  count: 3,
  items: [
    {
      name: "Alessandro Stinis",
      role: "",
      stars: 5,
      when: "7 weken geleden",
      text: "Brandlift heeft voor ons een professionele website gemaakt die veel beter laat zien wie we zijn en wat we doen. Luca dacht goed mee over de structuur, uitstraling en teksten, waardoor de website niet alleen mooi is geworden, maar ook duidelijk en overtuigend voor klanten. De communicatie was prettig en alles werd netjes uitgelegd. Zeker een aanrader voor bedrijven die serieus online willen groeien.",
    },
    {
      name: "Marina Kuipers",
      role: "Local Guide",
      stars: 5,
      when: "8 weken geleden",
      text: "Wat wij sterk vonden aan Brandlift is dat ze niet zomaar een website bouwen, maar echt meedenken over de strategie erachter. Luca keek naar hoe klanten onze diensten beoordelen, welke informatie belangrijk is en hoe de website vertrouwen moet opbouwen. Daardoor voelt de website veel doelgerichter dan wat we hiervoor hadden. Professioneel, duidelijk en prettig samenwerken.",
    },
    {
      name: "Josie Jackson",
      role: "",
      stars: 5,
      when: "8 weken geleden",
      text: "Wij hebben Brandlift ingeschakeld voor SEO en zijn erg tevreden over de aanpak. Luca keek niet alleen naar zoekwoorden, maar ook naar de volledige structuur van de website, lokale vindbaarheid en hoe klanten online naar ons zoeken. Alles werd helder uitgelegd en praktisch aangepakt. Fijn om met iemand te werken die echt begrijpt hoe je beter zichtbaar wordt in Google.",
    },
  ],
} as const;

/* ── Service-hub: website laten maken (pillar) ── */
export const websiteHub = {
  eyebrow: "Website laten maken",
  h1: "Website laten maken die vertrouwen wekt en aanvragen oplevert",
  intro:
    "Een goedkope website is zo gemaakt. Een website die klanten oplevert vraagt om strategie, vindbaarheid en conversie. Wij bouwen websites als groeifundament - voor Nederlandse bedrijven die serieus online willen groeien.",
  updated: "2026-07-10",
  sections: [
    {
      h2: "Waarom een standaard website vaak niet genoeg is",
      body: "Veel websites zien er prima uit, maar missen structuur, vertrouwen en vindbaarheid. Bezoekers snappen niet meteen wat je doet, komen niet binnen via Google, en vinden geen duidelijke route naar contact. Het resultaat: een dure digitale brochure die te weinig aanvragen oplevert.",
    },
    {
      h2: "Wat je krijgt bij een website van Brandlift",
      body: "Geen los ontwerp, maar een compleet groeifundament. Elke pagina is gebouwd op een doel en afgestemd op hoe jouw klant zoekt, twijfelt en beslist.",
      points: [
        "Strategie en positionering - eerst het doel, dan het ontwerp",
        "Webdesign dat past bij de kwaliteit van je werk",
        "Copy en een heldere paginastructuur",
        "Lokale SEO-basis vanaf de fundering",
        "Conversiegerichte pagina's en CTA's",
        "Snelle, veilige en schaalbare techniek",
        "Meetbaar gemaakt, zodat je ziet wat werkt",
      ],
    },
    {
      h2: "Maatwerk website voor jouw bedrijf",
      body: "Maatwerk gaat bij ons niet alleen over code, maar over structuur, boodschap en de route die je bezoeker aflegt. Een zakelijke website op maat die klopt bij jouw markt, doelgroep en gewenste positie - in plaats van een sjabloon met jouw logo erop.",
    },
    {
      h2: "Lokale SEO vanaf de basis",
      body: "Beter gevonden worden begint bij je eigen website. We bouwen een sterke lokale basis met dienst- en locatiepagina's, interne links, schema en een scherp Google Bedrijfsprofiel - zodat de juiste klanten je vinden op het moment dat ze zoeken.",
      link: { label: "Meer over lokale SEO", href: "/diensten/lokale-seo" },
    },
    {
      h2: "Ontworpen voor meer aanvragen",
      body: "Vertrouwen, duidelijkheid en een logische route naar contact. Met bewijs, heldere diensten en conversiegerichte pagina's zetten we bezoekers om in aanvragen - niet alleen in bezoekers die weer wegklikken.",
    },
  ],
  faqs: [
    {
      q: "Wat kost een website laten maken?",
      a: "Dat hangt af van je doel, omvang en de mate van maatwerk. In een gratis groeigesprek geven we een eerlijke indicatie - zonder verplichtingen.",
      link: { label: "Lees wat een website kost", href: "/kennisbank/wat-kost-een-website-laten-maken" },
    },
    {
      q: "Hoe lang duurt het om een website te laten maken?",
      a: "Een gemiddeld traject loopt van enkele weken tot een paar maanden, afhankelijk van omvang en content. In het groeigesprek koppelen we een realistische planning aan jouw project.",
    },
    {
      q: "Is SEO inbegrepen bij een nieuwe website?",
      a: "Ja. Elke website bouwen we met een sterke lokale SEO-basis: structuur, dienst- en locatiepagina's, techniek en schema. Zo is je site vanaf livegang gebouwd om gevonden te worden.",
    },
    {
      q: "Maken jullie ook maatwerk websites?",
      a: "Ja. We werken niet met kant-en-klare sjablonen, maar bouwen je website op maat rond jouw strategie, doelgroep en boodschap.",
    },
    {
      q: "Kan Brandlift mijn bestaande website vernieuwen?",
      a: "Zeker. We kijken naar wat er staat, wat werkt en wat beter kan - en bouwen daarop verder of opnieuw, afhankelijk van wat het meeste oplevert.",
    },
  ],
} as const;

/* ── Lokale pagina's: data-gedreven per stad (Den Haag eerst) ── */
export const cityPages = {
  "den-haag": {
    city: "Den Haag",
    slug: "website-laten-maken-den-haag",
    updated: "2026-07-10",
    metaTitle: "Website laten maken Den Haag | Strategisch + lokale SEO - Brandlift",
    metaDescription:
      "Website laten maken in Den Haag? Brandlift bouwt strategische websites met lokale SEO en conversie voor Haagse bedrijven die meer aanvragen willen. Plan een gratis groeigesprek.",
    h1: "Website laten maken in Den Haag",
    intro:
      "Een website die Haagse klanten vindt, overtuigt en omzet in aanvragen. Wij zitten zelf in Den Haag en bouwen strategische websites met lokale SEO en conversie - voor bedrijven in de hele stad en ver daarbuiten.",
    responsePromise: "Reactie binnen 1 werkdag",
    areasIntro:
      "We werken voor bedrijven in heel Den Haag - van het Centrum tot de kust, van Ypenburg tot Loosduinen.",
    stadsdelen: [
      "Centrum",
      "Escamp",
      "Haagse Hout",
      "Laak",
      "Leidschenveen-Ypenburg",
      "Loosduinen",
      "Scheveningen",
      "Segbroek",
    ],
    wijken: [
      "Zeeheldenkwartier",
      "Benoordenhout",
      "Bezuidenhout",
      "Statenkwartier",
      "Archipelbuurt",
      "Duinoord",
      "Bomenbuurt",
      "Vogelwijk",
      "Mariahoeve",
      "Ypenburg",
      "Leidschenveen",
      "Wateringse Veld",
      "Kijkduin",
    ],
    sections: [
      {
        h2: "Waarom een lokale website loont in Den Haag",
        body: "Haagse klanten zoeken lokaal. Ze typen niet zomaar 'hovenier' of 'schilder', maar zoeken naar een bedrijf in hun eigen buurt dat betrouwbaar oogt en snel bereikbaar is. Den Haag is bovendien een drukke, competitieve markt: van het Centrum en het Statenkwartier tot Ypenburg en Loosduinen zijn er in elke branche tientallen aanbieders. Wie online niet opvalt, verdwijnt onder de concurrent. Een website die lokaal is opgebouwd - met de juiste structuur, locatiesignalen en vindbaarheid - zorgt dat jij verschijnt op precies het moment dat een klant in Den Haag klaar is om contact op te nemen. Dat is het verschil tussen een site die er staat, en een site die klanten oplevert.",
      },
      {
        h2: "Strategie vóór ontwerp",
        body: "We beginnen niet bij het uiterlijk, maar bij de vraag: waarom zou een Haagse klant voor jou kiezen in plaats van voor de buurman? Die positionering bepaalt alles - de structuur van je site, de volgorde van je pagina's, de boodschap op je homepage en de route naar contact. We kijken naar je concurrenten in de regio, naar hoe jouw ideale klant zoekt en twijfelt, en naar welk bewijs hem over de streep trekt. Pas als dat scherp is, gaan we ontwerpen. Zo wordt je website niet alleen mooi, maar overtuigend voor de mensen die je echt wilt bereiken.",
      },
      {
        h2: "Design en merk dat vertrouwen wekt",
        body: "Online lijken veel goede bedrijven kleiner dan ze zijn. Vakwerk dat in het echt indruk maakt, komt op een verouderde of rommelige site zwak over - en dat kost vertrouwen, en dus klussen. Wij vertalen de kwaliteit van je werk naar een uitstraling die klopt: een merk, kleurgebruik en beeldtaal die passen bij je markt en je gewenste positie in Den Haag. Zo kom je op het scherm net zo sterk over als aan de deur.",
      },
      {
        h2: "Techniek: snel, veilig en schaalbaar",
        body: "Een trage of onveilige website kost je klanten én posities in Google - zeker op mobiel, waar de meeste Haagse klanten zoeken. We bouwen modern, snel en veilig, met aandacht voor laadtijd, mobiele weergave en de technische signalen waar Google op let. De fundering is schaalbaar, zodat je site meegroeit met je bedrijf: extra diensten, nieuwe werkgebieden of een webshop voeg je later moeiteloos toe, zonder opnieuw te hoeven beginnen.",
      },
      {
        h2: "Lokale SEO die Haagse klanten vindt",
        body: "Beter gevonden worden begint bij je eigen website. We bouwen een sterke lokale basis met aparte dienst- en locatiepagina's, interne links, gestructureerde data (schema) en een scherp Google Bedrijfsprofiel dat op je site aansluit. Zo word je gevonden op de zoekopdrachten die Haagse klanten écht gebruiken - van 'website laten maken Den Haag' tot de specifieke dienst in hun wijk. Geen rapportje met groene vinkjes, maar vindbaarheid die aanvragen oplevert van mensen die klaar zijn om te bellen.",
        link: { label: "Meer over lokale SEO", href: "/diensten/lokale-seo" },
      },
      {
        h2: "Content die converteert",
        body: "Gevonden worden is stap één; overtuigen is stap twee. Heldere teksten, duidelijke diensten, echte cases en een logische route naar contact zorgen dat bezoekers niet wegklikken maar de stap naar een aanvraag zetten. We schrijven voor je klant, niet voor de zoekmachine alleen: begrijpelijke taal, sterke call-to-actions en genoeg vertrouwenssignalen op de juiste plek. Elke pagina heeft een doel, en dat doel is meestal simpel - meer aanvragen uit Den Haag en omgeving.",
      },
      {
        h2: "Voor welke Haagse bedrijven we bouwen",
        body: "We bouwen vooral voor vakbedrijven, servicebedrijven en lokale dienstverleners in Den Haag: hoveniers, schilders, aannemers, installateurs, dakdekkers en elektriciens, maar net zo goed voor praktijken, premium en visuele bedrijven die professioneel willen overkomen. Wat ze delen: ze leveren goed werk en willen dat online eindelijk terugzien in meer zichtbaarheid en meer aanvragen. Val je daar niet precies tussen? Eén groeigesprek geeft snel antwoord of het past.",
        link: { label: "Bekijk voor wie we bouwen", href: "/voor-wie" },
      },
      {
        h2: "Zo verloopt de samenwerking",
        body: "Je werkt van begin tot eind direct met Luca - geen accountmanager, geen tussenlagen. We starten met een gratis groeigesprek waarin we je situatie, doel en concurrentie doornemen. Daarna volgen strategie en positionering, een heldere structuur en copy, het ontwerp, de bouw en een lokale SEO-check, tot en met de livegang en meting. Korte lijnen, eerlijk advies en een reactie binnen één werkdag - zodat je altijd weet waar je project staat.",
        link: { label: "Bekijk de volledige werkwijze", href: "/werkwijze" },
      },
    ],
    faqs: [
      {
        q: "Werken jullie alleen voor bedrijven in Den Haag?",
        a: "Nee. Ons kantoor staat in Den Haag, maar we bouwen voor bedrijven door heel Nederland - en uiteraard in de hele regio, van Delft en Rijswijk tot Zoetermeer en het Westland. De meeste samenwerking verloopt online, snel en zonder reistijd, dus afstand speelt zelden een rol.",
      },
      {
        q: "Wat kost een website laten maken in Den Haag?",
        a: "Dat hangt af van je doel, de omvang van de site en de mate van maatwerk. Een eenvoudige, sterke website kost minder dan een uitgebreid platform met veel dienst- en locatiepagina's. In een gratis groeigesprek van 30 minuten geven we een eerlijke indicatie die bij jouw situatie past - zonder verplichtingen en zonder salespitch.",
        link: { label: "Lees wat een website kost", href: "/kennisbank/wat-kost-een-website-laten-maken" },
      },
      {
        q: "Is lokale SEO inbegrepen?",
        a: "Ja. Elke Haagse website bouwen we met een lokale SEO-basis: de juiste structuur, dienst- en locatiepagina's, techniek, schema en de aansluiting op je Google Bedrijfsprofiel. Zo ben je vanaf livegang gebouwd om lokaal gevonden te worden, in plaats van dat SEO er achteraf nog bij moet.",
      },
      {
        q: "Hoe lang duurt het om een website te laten maken?",
        a: "Een gemiddeld traject loopt van enkele weken tot een paar maanden, afhankelijk van omvang en hoe snel content en feedback rond zijn. In het groeigesprek koppelen we een realistische planning aan jouw project, zodat je precies weet waar je aan toe bent.",
      },
      {
        q: "Hebben jullie ervaring met Haagse bedrijven?",
        a: "Zeker. We bouwden onder meer de nieuwe website voor Hovenier Eykelenboom in Den Haag, met een lokale SEO-structuur per dienst en werkgebied. Het resultaat: van 2 naar 24 aanvragen per maand sinds livegang.",
        link: { label: "Bekijk de case", href: "/cases/hovenier-eykelenboom" },
      },
      {
        q: "Kunnen jullie mijn bestaande website vernieuwen?",
        a: "Ja. We kijken naar wat er staat, wat werkt en wat beter kan, en bouwen daarop verder of opnieuw - afhankelijk van wat het meeste oplevert. Vaak is een strategische herbouw met een sterke lokale basis effectiever dan losse aanpassingen aan een verouderde site.",
      },
    ],
    nearby: [
      "Delft",
      "Zoetermeer",
      "Rijswijk",
      "Leidschendam-Voorburg",
      "Westland",
      "Wassenaar",
    ],
  },
} as const;

/* ── Case: Hovenier Eykelenboom (echte cijfers) ── */
export const caseEykelenboom = {
  slug: "hovenier-eykelenboom",
  client: "Hovenier Eykelenboom",
  sector: "Hoveniers / groenvoorziening",
  location: "Den Haag",
  url: "hoveniereykelenboom.nl",
  updated: "2026-07-10",
  metaTitle: "Case: Hovenier Eykelenboom - van 2 naar 24 aanvragen per maand | Brandlift",
  metaDescription:
    "Hoe Brandlift Hovenier Eykelenboom uit Den Haag lokaal beter vindbaar maakte met een complete website en lokale SEO-structuur - van 2 naar 24 aanvragen per maand.",
  h1: "Hovenier Eykelenboom: van 2 naar 24 aanvragen per maand",
  intro:
    "Vakwerk dat lokaal te weinig werd gevonden - opnieuw opgebouwd tot een website die per dienst en werkgebied vindbaar is, en het vakmanschap eindelijk laat zien.",
  image: "/images/macbook-only-bigger.jpg",
  imageAlt: "De website die Brandlift bouwde voor Hovenier Eykelenboom, getoond op een laptop",
  stat: { from: "2", to: "24", unit: "aanvragen p/m", label: "sinds livegang" },
  blocks: [
    {
      label: "De uitdaging",
      title: "Sterk vakwerk, zwakke online vindbaarheid",
      body: "Hovenier Eykelenboom levert al jaren hoogwaardig hoveniers- en groenwerk in Den Haag en omgeving. Online kwam dat niet terug: de oude website werd lokaal nauwelijks gevonden, liet het vakmanschap onvoldoende zien en leverde te weinig aanvragen op. Klanten die zochten naar een hovenier in hun wijk, kwamen bij de concurrent uit.",
    },
    {
      label: "De aanpak",
      title: "Complete website met een lokale SEO-structuur per dienst en werkgebied",
      body: "We bouwden de website opnieuw op als groeifundament. Een heldere structuur met aparte pagina's per dienst en per werkgebied, een scherpe merkuitstraling die past bij de kwaliteit van het werk, en een lokale SEO-basis met locatiesignalen, interne links en schema. Zo werd de site gebouwd om precies die Haagse klanten te bereiken die op zoek zijn naar een hovenier in hun buurt.",
    },
    {
      label: "Het resultaat",
      title: "Van 2 naar 24 aanvragen per maand",
      body: "Sinds livegang stroomt het aantal aanvragen structureel binnen: van 2 naar 24 per maand. De website wordt lokaal beter gevonden, oogt professioneler en zet bezoekers om in concrete aanvragen - precies het groeifundament dat het vakwerk verdient.",
    },
  ],
} as const;
