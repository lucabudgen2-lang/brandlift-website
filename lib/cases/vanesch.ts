/* ============================================================
   CASE · R. VAN ESCH GEVELRESTAURATIE - de enige bron voor deze pagina.

   Elk getal en elke datum is terug te voeren op iets dat bestaat
   (paden in de vault: klanten/van-esch-gevelrestauratie/):
   - fact-lock en afspraken: PROJECT.md §1-§6
   - verloop met data: status.md, calls/*.md, geheugen van-esch
   - onboarding: onboarding/secties.py (19 delen, 00-18) en
     onboarding/inzending/2026-10-03-submission.json (31 antwoorden
     vooraf ingevuld als ".bekend", Rudy bevestigde of vulde aan)
   - SEO: seo/ONDERZOEK.md §1-§8 (rankmap §3, woordenboek §5,
     huidige site §7); volumes = Google Ads, okt 2026
   - Google-profiel: gbp/UITVOERING.md, status.md 6 en 14 nov
   - merkboek: merk/merkboek-vanesch.json + merkboek.py (v1.0, 28 p.)
   - feedback: feedback/FEEDBACK-ronde1.md (62 opmerkingen, 58 verwerkt)
   - livegang: LIVEGANG-CLOUDFLARE.md, "LIVE 18 nov 2026"
   - snelheid: Lighthouse 13.6 op de live homepage, 24 nov 2026
   Niet op deze pagina (vertrouwelijk of fact-lock §4): prijzen,
   bezwaren uit de gesprekken, de oude provider, telefoonnummers,
   concurrentnamen, certificaten, rankings ná de livegang (nog niet
   gemeten), groeibeloftes.
   ============================================================ */

export const IMG = "/images/cases/vanesch";

export const caseVanEsch = {
  slug: "van-esch-gevelrestauratie",
  client: "R. van Esch Gevelrestauratie",
  kortNaam: "Van Esch Gevelrestauratie",
  contact: "Rudy van Esch",
  url: "vaneschgevelrestauratie.nl",
  updated: "2026-11-24",
  metaTitle: "Case Van Esch Gevelrestauratie: website, merk en SEO",
  metaDescription:
    "Onderzoek, merkboek, Google-profiel en een website van 20 pagina's voor gevelrestaurateur Rudy van Esch uit Liempde. Het hele traject, stap voor stap.",
  h1: "R. van Esch Gevelrestauratie: onzichtbaar restaureren, eindelijk zichtbaar online",
} as const;

export const kort = [
  { k: "Klant", v: "R. van Esch Gevelrestauratie" },
  { k: "Eigenaar", v: "Rudy van Esch" },
  { k: "Vanuit", v: "Liempde, Noord-Brabant" },
  { k: "Vak", v: "Restauratie van oude en monumentale gevels" },
  { k: "Eigen bedrijf", v: "Sinds 2005" },
  { k: "Live", v: "18 november 2026" },
] as const;

export const opleveringen = [
  "Analyse + homepageconcept",
  "Onboarding",
  "SEO-onderzoek",
  "Google-bedrijfsprofiel",
  "Merkboek (28 pagina's)",
  "Website-ontwerp",
  "Teksten voor 20 pagina's",
  "Development en hosting",
  "Overstap en livegang",
] as const;

/* De acht stappen - ook de ankers voor de voortgangsrail. */
export const fases = [
  { id: "analyse", nr: "01", kort: "Analyse", titel: "Analyse vooraf", lijn: "Eerst laten zien wat er beter kan, nog vóór het akkoord." },
  { id: "onboarding", nr: "02", kort: "Onboarding", titel: "Onboarding", lijn: "Eén formulier in 19 delen, al half ingevuld met wat we wisten." },
  { id: "onderzoek", nr: "03", kort: "Onderzoek", titel: "SEO-onderzoek", lijn: "Waar staat Rudy in Google, en waar juist niet?" },
  { id: "profiel", nr: "04", kort: "Google-profiel", titel: "Google-profiel en site", lijn: "Drie categorieën, drie pagina's: profiel en site spiegelen." },
  { id: "merkboek", nr: "05", kort: "Merkboek", titel: "Het merkboek", lijn: "Het logo uit 2016 ontleed, gemeten en vastgelegd." },
  { id: "ontwerp", nr: "06", kort: "Ontwerp", titel: "Website-ontwerp", lijn: "Zijn foto's doen het werk, de rest maakt ruimte." },
  { id: "bouw", nr: "07", kort: "Teksten + bouw", titel: "Teksten en bouw", lijn: "Twintig pagina's, snel, en elke oude link komt aan." },
  { id: "livegang", nr: "08", kort: "Livegang", titel: "Samenwerking en livegang", lijn: "Twee calls, één testversie, live op 18 november." },
] as const;

/* ── Wie: de skyline uit het logo bestaat echt (merkboek spread 01) ──
   Regio's in logo-punten (x0-x1), gemeten op de vectorvlakken. */
export const skyline = [
  { id: "toren", label: "De toren", x0: 35.4, x1: 64.6, foto: `${IMG}/foto-duiventoren.jpg`, alt: "De duiventoren bij het Groot Duijfhuis in Liempde, na het voegwerk", project: "Duiventoren, Groot Duijfhuis", plaats: "Liempde", jaar: "2021" },
  { id: "molen", label: "De molen", x0: 64.6, x1: 97.4, foto: `${IMG}/foto-molen-korenaar.jpg`, alt: "Molen De Korenaar in Oirschot", project: "Molen De Korenaar", plaats: "Oirschot", jaar: "2023" },
  { id: "kerk", label: "De kerktoren", x0: 124.6, x1: 140.4, foto: `${IMG}/foto-sintjan-toren.jpg`, alt: "Een toren van de Sint-Jan in Den Bosch, vanaf de steiger gefotografeerd", project: "Sint-Jan, vanaf de steiger", plaats: "Den Bosch", jaar: "2005-2006" },
  { id: "gevel", label: "De gevel", x0: 140.4, x1: 183.6, foto: `${IMG}/foto-oirschot-1674.jpg`, alt: "Een gevel uit 1674 in Oirschot", project: "Gevel uit 1674", plaats: "Oirschot", jaar: "2026" },
] as const;

/* ── De uitdaging: de oude site (ONDERZOEK §7, analyse 23 sept) ── */
export const oudeSite = [
  { n: "52", t: "pagina's in de sitemap, waarvan Google er ongeveer 10 liet zien" },
  { n: "28", t: "pagina's met minder dan 150 woorden" },
  { n: "4", t: "losse pagina's die allemaal over knipvoeg gingen" },
  { n: "0", t: "diensten in het Google-bedrijfsprofiel" },
] as const;

/* ── Stap 01 · analyse vóór het akkoord ── */
export const analysePunten = [
  "Hoe zijn Google-profiel ervoor stond, met zijn eigen reviews erbij",
  "Wat de oude site op een telefoon liet zien: geen aangepaste weergave en geen belknop",
  "Een homepageconcept in zijn eigen logo en kleuren, met zijn echte projecten",
] as const;

/* ── Stap 02 · onboarding ── */
export const onboardingStats = [
  { n: "19", label: "delen, van bedrijfsgegevens tot beheeromgeving" },
  { n: "31", label: "antwoorden vooraf ingevuld uit onze gesprekken" },
  { n: "16+", label: "projectmappen met foto's in een gedeelde map" },
  { n: "1", label: "keer alles vertellen, daarna niet meer" },
] as const;

/* Echte antwoorden uit het formulier en wat er op de site mee gebeurde. */
export const onboardingKoppelingen = [
  { vraag: "Toon", antwoord: "“Mijn foto's moeten het meeste werk doen.”", landt: "Grote eigen projectfoto's op elke pagina, tekst in korte blokken eromheen" },
  { vraag: "Wat liever niet", antwoord: "Alles van na de Tweede Wereldoorlog, behalve scheurherstel.", landt: "Teksten en formulier richten zich op gevels van vóór 1940; scheurherstel staat open voor elk bouwjaar" },
  { vraag: "Nooit", antwoord: "“Ik wil niet gevonden worden als voegbedrijf.”", landt: "Dat woord staat nergens op de site of in het profiel, ook al wordt er veel op gezocht" },
  { vraag: "Doel", antwoord: "“Onzichtbaar restaureren, dat is eigenlijk altijd mijn doel.”", landt: "De slogan in het merkboek en de grote kop van de homepage" },
] as const;

/* ── Stap 03 · onderzoek (ONDERZOEK §1-§3, §5) ── */
export const onderzoekStats = [
  { n: "49", label: "meetpunten in een raster van 30 bij 30 km rond Liempde" },
  { n: "661", label: "zoektermen met een maandvolume" },
  { n: "189", label: "bedrijven in de kaartresultaten vergeleken" },
  { n: "700", label: "metingen, waarvan de belangrijkste twee keer" },
] as const;

/* Rankmap 7×7 (N boven, W links, midden = Rudy's vestiging). Positie
   1-20; 15 = "ergens op 10-20" (het rapport noteert die als +);
   0 = niet in de top 20. Letterlijk uit ONDERZOEK §3. */
const P = 15;
export type Raster = { term: string; volume: number; top3: string; tekst: string; grid: number[][] };
export const rasters: Raster[] = [
  {
    term: "gevelrestauratie",
    volume: 210,
    top3: "34,7%",
    tekst: "Op zijn vak was Rudy al de sterkste van de regio: op 17 van de 49 punten in de top 3, en op elk punt zichtbaar. De nummer twee kwam niet verder dan 18,4%.",
    grid: [
      [P, P, P, P, P, P, 8],
      [P, 9, P, 6, 3, 6, 9],
      [7, 5, 4, 2, 2, 4, 8],
      [5, 3, 1, 1, 1, 3, 8],
      [8, 2, 1, 1, 1, 1, 7],
      [P, 3, 3, 1, 4, 4, 7],
      [5, 3, 4, 5, 6, 7, P],
    ],
  },
  {
    term: "voegwerk",
    volume: 590,
    top3: "6,1%",
    tekst: "Op voegwerk alleen zichtbaar vlak rond Liempde zelf. Een paar kilometer verder verdween hij uit beeld.",
    grid: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, P, P, P, P, 0, 0],
      [0, P, 6, 6, 9, P, 0],
      [0, 9, 4, 1, 2, P, 0],
      [0, 9, 4, 2, 6, P, 0],
      [0, P, 9, P, P, 0, 0],
      [0, P, P, P, 0, 0, 0],
    ],
  },
  {
    term: "scheurherstel",
    volume: 260,
    top3: "0%",
    tekst: "Zijn best betaalde werk. Op geen enkel punt in de top 20, ook niet in zijn eigen dorp.",
    grid: Array.from({ length: 7 }, () => Array(7).fill(0)),
  },
  {
    term: "knipvoeg",
    volume: 1300,
    top3: "0%",
    tekst: "De term met het meeste volume. Ook hier nergens, terwijl zijn oude site er vier pagina's over had.",
    grid: Array.from({ length: 7 }, () => Array(7).fill(0)),
  },
];

/* Woordenboek: de woorden die mensen typen (ONDERZOEK §5). */
export const woordenWel = [
  { woord: "baksteen repareren", volume: 480, noot: "in plaats van “steenreparatie” (50): het vakwoord dat bijna niemand typt" },
  { woord: "knipvoeg en snijvoeg", volume: 1890, noot: "1.300 + 590 per maand, samen op één pagina: Google toont bij allebei dezelfde vakbedrijven" },
  { woord: "langgevelboerderij", volume: 320, noot: "een echt Brabants woord, en veel van zijn projecten zijn boerderijen" },
  { woord: "gevel repareren", volume: 320, noot: "de brede term voor herstel, met een eigen pagina" },
] as const;

export const woordenNiet = [
  { woord: "voegbedrijf", volume: 1000, noot: "trekt nieuwbouw, precies de aanvragen die Rudy afwijst" },
  { woord: "gevelrenovatie", volume: 5400, noot: "alleen als uitleg: restauratie of renovatie?" },
  { woord: "gevelreiniging", volume: 2400, noot: "werk dat hij niet doet" },
  { woord: "gevel impregneren", volume: 1600, noot: "werk dat hij niet doet" },
] as const;

/* ── Stap 04 · Google-profiel ↔ site (ONDERZOEK §8, SITEMAP, GBP) ── */
export const spiegel = [
  {
    categorie: "Restauratie van gebouwen",
    rol: "Hoofdcategorie",
    pagina: "Homepage",
    pad: "/",
    diensten: ["Patineren en bijkleuren", "Monument restaureren", "Onderhoud van monumenten", "Langgevelboerderij restaureren"],
  },
  {
    categorie: "Metselaar",
    rol: "Extra categorie",
    pagina: "Voegwerk",
    pad: "/metselaar",
    diensten: ["Knipvoeg en snijvoeg", "Voegwerk herstellen", "Voegwerk vervangen", "Doorgestreken voegwerk", "Cementvoegen verwijderen"],
  },
  {
    categorie: "Bouwbedrijf",
    rol: "Extra categorie",
    pagina: "Gevel repareren",
    pad: "/bouwbedrijf",
    diensten: ["Scheurherstel", "Baksteen repareren"],
  },
] as const;

export const profielStats = [
  { n: "3", label: "categorieën, elk met een eigen pagina" },
  { n: "20", label: "diensten met een beschrijving uit de sitetekst" },
  { n: "14", label: "producten met tekst en beeld" },
  { n: "32", label: "eigen foto's, met herkomst per foto" },
  { n: "20", label: "plaatsen in het werkgebied" },
] as const;

/* ── Stap 05 · merkboek (merkboek-vanesch.json "ontleding") ──
   doel = punt in logo-coördinaten; viewBox logo 33.46 127.47 533.07 145.06 */
export const LOGO_VIEWBOX = { x: 33.46, y: 127.47, w: 533.07, h: 145.06 } as const;
export const ontleding = [
  { nr: "01", naam: "De toren", doel: [50, 151], tekst: "Een ronde kasteeltoren met vijf kantelen, bijna drie keer zo hoog als breed. Hij wordt de kantelenrand op de site." },
  { nr: "02", naam: "De molen", doel: [85, 170], tekst: "Twee schuine wieken, onder ongeveer 45 en 130 graden. Daaruit komt het kruis." },
  { nr: "03", naam: "De gevels", doel: [114, 168], tekst: "Puntgevels van 55 tot 65 graden en trapgevels. De gevel is wat Rudy herstelt, dus de horizon loopt door de hele site." },
  { nr: "04", naam: "De kerktoren", doel: [133, 135], tekst: "Het hoogste punt van het logo: een toren in vier geledingen met lantaarn en naald." },
  { nr: "05", naam: "De grondlijn", doel: [180, 226], tekst: "De stad staat op de basislijn van de naam: 226,2 tegen 225,4 punten. Dat werd de regel van het merk: alles staat op één lijn." },
  { nr: "06", naam: "De balk", doel: [564, 252], tekst: "Navy, 39,6 punten hoog: bijna de kapitaalhoogte van de naam. Rechts precies gelijk met de H. De balk wordt het label boven elke kop." },
  { nr: "07", naam: "Het schild", doel: [61.5, 266], tekst: "Het blauw-witte schild van beschermd erfgoed. De ruit staat op precies 45 graden. Op de site staat het bij de kop en als opsommingsteken." },
] as const;

export const merkKleuren = [
  { naam: "Monumentrood", hex: "#EF4036", herkomst: "Uit het logobestand", licht: false },
  { naam: "Gevelnavy", hex: "#262261", herkomst: "Uit het logobestand", licht: false },
  { naam: "Schildgrijs", hex: "#D1D3D4", herkomst: "Uit het logobestand", licht: true },
  { naam: "Baksteen", hex: "#886259", herkomst: "Gemeten op foto's van zijn eigen muren", licht: false },
  { naam: "Kalkvoeg", hex: "#C6BEB5", herkomst: "Gemeten op dezelfde foto's", licht: true },
  { naam: "Kalkwit", hex: "#F6F3EE", herkomst: "Lichter gemaakt uit de kalkvoeg", licht: true },
] as const;

export const merkPaginas = [
  { src: `${IMG}/merkboek-01.jpg`, alt: "Omslag van het merkboek van R. van Esch Gevelrestauratie met het logo en een boerderij met steiger", caption: "De omslag" },
  { src: `${IMG}/merkboek-05.jpg`, alt: "Merkboekpagina: elk gebouwtype uit het logo is ook een klus van Rudy, met vier projectfoto's", caption: "De skyline bestaat echt" },
  { src: `${IMG}/merkboek-07.jpg`, alt: "Merkboekpagina met het logo, ontleed in zeven genummerde vormen", caption: "Het logo, ontleed" },
  { src: `${IMG}/merkboek-08.jpg`, alt: "Merkboekpagina met het bestaande drukwerk: visitekaartje, briefpapier en envelop", caption: "Wat er al was" },
  { src: `${IMG}/merkboek-12.jpg`, alt: "Merkboekpagina met negen kleuren, uit het logo en uit de muur", caption: "Kleur" },
  { src: `${IMG}/merkboek-15.jpg`, alt: "Merkboekpagina over de letters: Cormorant Garamond, Cinzel en Source Sans 3", caption: "Letter" },
  { src: `${IMG}/merkboek-17.jpg`, alt: "Merkboekpagina met zeven vormen uit het logo, elk met een vaste plek", caption: "Zeven vormen" },
  { src: `${IMG}/merkboek-20.jpg`, alt: "Merkboekpagina over beeld: eigen projectfoto's van dichtbij en van ver", caption: "Beeld" },
  { src: `${IMG}/merkboek-23.jpg`, alt: "Merkboekpagina met de vijf waarden die Rudy koos", caption: "Vijf waarden" },
  { src: `${IMG}/merkboek-25.jpg`, alt: "Merkboekpagina met toepassingen: website, bus, kleding en drukwerk", caption: "Toepassingen" },
] as const;

/* ── Stap 06 · ontwerp: elementen die alleen bij Rudy passen ── */
export const eigenElementen = [
  { kop: "De voor/na-schuif", tekst: "Op de scheurherstelpagina schuift u zelf tussen de scheur en het herstel. Het bewijs bij “nagenoeg onzichtbaar”, met zijn eigen foto's.", src: `${IMG}/site-voorna.jpg`, alt: "De voor/na-schuif op de scheurherstelpagina: links de gevel met scheur, rechts na het herstel" },
  { kop: "De kaart van zijn werk", tekst: "Op de projectenpagina staat elk project als stip op een kaart, van Liempde tot de Domkerk. Tik op een stip en je ziet wat hij daar deed. Een klant ziet zo of Rudy al eens in de buurt werkte.", src: `${IMG}/site-kaart.jpg`, alt: "De kaart op de projectenpagina met een stip voor elke plaats waar Rudy een project deed" },
  { kop: "Projecten als bewijs", tekst: "Van de Domkerk tot een langgevelboerderij: elk project met foto's, plaats, jaar en de techniek. Grote klussen als bewijs van wat hij kan.", src: `${IMG}/site-projecten.jpg`, alt: "De projectenpagina met de Sint-Jan in Den Bosch" },
  { kop: "Hier ontbreekt een steen", tekst: "Zelfs de foutpagina praat zijn taal: een muur met één lege plek. Wie via een oude link binnenkomt, vindt direct de weg terug.", src: `${IMG}/site-404.jpg`, alt: "De foutpagina 'Hier ontbreekt een steen' met een getekende muur" },
] as const;

/* ── Stap 07 · teksten en bouw ── */
export const lighthouse = {
  gemeten: "24 november 2026",
  desktop: { performance: 99, accessibility: 97, bestPractices: 100, seo: 100, lcp: "0,9 s", cls: "0", tbt: "0 ms" },
  mobiel: { performance: 92, accessibility: 97, bestPractices: 100, seo: 100, lcp: "2,9 s", cls: "0,01", tbt: "200 ms" },
} as const;

export const pijlers = [
  {
    kop: "Teksten die het vak uitleggen",
    punten: [
      "Elke pagina in zijn stem: “ik”, en de lezer met “u”",
      "Echte vragen van huiseigenaren als kop, het antwoord eerst",
      "Zijn eigen kennis erin: kalkmortel per pand, de restauratieladder",
      "Elke pagina gelezen door een verse lezer, met fouten die wij er bewust in stopten om te zien of hij ze vond",
    ],
  },
  {
    kop: "Gebouwd om gevonden te worden",
    punten: [
      "Twintig pagina's, elk met één onderwerp en één zoekterm",
      "Links alleen omhoog en omlaag in de boom, zoals het profiel",
      "Gestructureerde data die Google vertelt wie Rudy is en wat hij doet",
      "Elke oude link stuurt door naar de juiste nieuwe pagina",
    ],
  },
  {
    kop: "Licht en snel",
    punten: [
      "Statische pagina's, direct vanaf een wereldwijd netwerk",
      "Foto's per schermformaat, in moderne formaten",
      "Video pas laden na een klik",
      "Een aanvraagformulier dat ook foto's van de gevel meeneemt",
    ],
  },
] as const;

/* ── Stap 08 · tijdlijn (status.md, calls, LIVEGANG) ──
   Elke steen is een moment. `rudy` = momenten waarop Rudy iets deed. */
export const tijdlijn = [
  { d: "15 sep", kop: "Eerste gesprek", tekst: "Een kennismaking aan de telefoon. Rudy vertelt over zijn vak en zijn site.", rudy: true },
  { d: "23 sep", kop: "Analyse besproken", tekst: "We lopen samen door de analyse en het homepageconcept: wat er nu is en wat het kan worden.", rudy: true },
  { d: "29 sep", kop: "Akkoord", tekst: "Rudy gaat door. Dezelfde dag staan het formulier en de gedeelde map klaar.", rudy: true },
  { d: "3 okt", kop: "Formulier ingevuld", tekst: "Alle 19 delen, plus ruim zestien projectmappen met foto's.", rudy: true },
  { d: "4 okt", kop: "SEO-onderzoek", tekst: "Rankmap, zoekvolumes, concurrenten en de oude site. Daarna twee onafhankelijke controles.", rudy: false },
  { d: "7 okt", kop: "Merkboek", tekst: "Het logo ontleed en de huisstijl vastgelegd, voordat er één pixel website is.", rudy: false },
  { d: "10 okt", kop: "Homepage", tekst: "De eerste pagina gebouwd, op het merkboek en het paginaplan.", rudy: false },
  { d: "12 okt", kop: "Twintig pagina's", tekst: "Alle pagina's staan, elk beoordeeld met een vaste scorekaart.", rudy: false },
  { d: "15 okt", kop: "Teksten opnieuw", tekst: "Alle teksten herschreven: meer vertellen, minder opsommen.", rudy: false },
  { d: "20 okt", kop: "Eerste check", tekst: "In een call lopen we samen door de eerste pagina's. Rudy geeft zijn eerste reacties.", rudy: true },
  { d: "31 okt", kop: "Testversie", tekst: "Een besloten testversie met een knop om op elke plek een opmerking te zetten.", rudy: false },
  { d: "4 nov", kop: "Presentatie", tekst: "De hele site samen doorgelopen. Het merkboek is definitief.", rudy: true },
  { d: "6 nov", kop: "Google-profiel", tekst: "Categorieën, diensten, foto's en omschrijving staan in het profiel.", rudy: false },
  { d: "7 nov", kop: "Feedback klaar", tekst: "Rudy vinkt alle 20 pagina's af en plaatst zijn opmerkingen.", rudy: true },
  { d: "14 nov", kop: "Alles verwerkt", tekst: "58 opmerkingen verwerkt. Het profiel is compleet met producten en werkgebied.", rudy: false },
  { d: "18 nov", kop: "Live", tekst: "De nieuwe site staat live. Zijn e-mail en domein bleven waar ze waren.", rudy: true },
] as const;

export const samenwerkingStats = [
  { n: "2", label: "gesprekken met Rudy om de site samen door te lopen" },
  { n: "58", label: "opmerkingen van Rudy verwerkt op de testversie" },
  { n: "20", label: "pagina's door Rudy afgevinkt voor de livegang" },
  { n: "7", label: "weken van akkoord tot livegang" },
] as const;

/* ── Rudy aan het woord ──
   Leeg tot ze er echt zijn. Geen verzonnen citaat, geen nepspeler,
   niets in de reviewdata of het schema. Vul in zodra ze binnen zijn:
   - review: de letterlijke Google-review van Rudy (en zet hem ook in
     lib/site.ts → reviews, dan pakt GoogleReview hem op)
   - video: YouTube-id + echte duur en uploaddatum (voor caseSchema) */
export const rudy: {
  review: { naam: string } | null;
  video: { youtubeId: string; titel: string; duur: string; uploadDate: string } | null;
} = {
  review: null,
  video: null,
};
