import type { Artikel } from "@/lib/kennisbank/types";

/* ============================================================
   WordPress of maatwerk (blogpipeline artikel #2, schrijfronde 27 nov 2026).

   Bronnen per claim:
   - de eerste 19 Google-resultaten, 'Mensen vragen ook' en het AI-overzicht:
     vault systeem/blog/data/serp-wordpress-of-maatwerk-2026-11-27.json
     (DataForSEO, Den Haag centrum, desktop, 27 nov 2026). Aanbieders bewust
     zonder naam. Indeling van de 19: bureaus die WordPress-sites verkopen
     = positie 3, 6, 7, 9, 11, 13, 14, 16 (7 en 11 zijn dezelfde pagina);
     hostingbedrijven, vergelijkers en handleidingen = 1, 2, 5, 8, 10, 12, 15, 18;
     overig = 4 (advertentiesite), 17 (supportpagina uit 2016), 19 (offertesite)
   - bedragen en levertijden in de SERP-tabel: letterlijk uit titel of
     omschrijving van die posities; €500 - €6.000 en de doorlopende kosten
     (domein, hosting, SSL, back-ups, plug-inlicenties, updates) plus de drie
     aandachtspunten (eigendom, zelf beheren, SEO en snelheid): het AI-overzicht
   - snelheid van twee sites die wij bouwden: lib/cases/giorgi.ts (`lighthouse`,
     Lighthouse 13.5, 29 sep 2026, mobiel twee keer gedraaid, beide 95) en
     lib/cases/vanesch.ts (`lighthouse`, Lighthouse 13.6, 24 nov 2026). Beide
     staan al openbaar op de casepagina's, mobiel = gesimuleerde trage 4G
     (components/cases/giorgi/LighthouseRingen.tsx)
   - hoe wij bouwen (kant-en-klare HTML, beelden per schermformaat, geen
     scripts van derden zonder toestemming): `pijlers` in lib/cases/giorgi.ts;
     geen kant-en-klare sjablonen: FAQ op app/diensten/website-laten-maken;
     CMS waar dat zinvol is: app/werkwijze (stap bouw + FAQ)
   - LCP-richtlijn van 2,5 seconden en "sluit aan bij wat de rankingsystemen
     willen belonen": Google Search Central, Core Web Vitals (opgehaald 27 nov)
   - WordPress is open source en gratis te gebruiken: wordpress.org/about;
     regelmatige updates van WordPress en plug-ins, verouderde plug-ins als
     risico: developer.wordpress.org, "Hardening WordPress" (opgehaald 27 nov)
   - prijzen van Brandlift: lib/calculator.ts (TYPE_OPTIONS), met de labels
     van de calculator letterlijk (Eenvoudige website, Website voor
     vakbedrijf, Maatwerk website); wat inbegrepen is: calcPrice().included;
     3-4 weken, eigendom na betaling (website, teksten, merkmiddelen), het
     hergebruik van onderliggende technieken en componenten, hosting als
     losse opzegbare dienst, garantie binnen de offerte, geen beloofde
     posities: app/algemene-voorwaarden
   - het domein is van jou: FAQ op app/diensten/website-laten-maken; zelf
     aanpassen via een CMS waar dat zinvol is, uitleg bij de oplevering,
     anders via onderhoud: FAQ op app/werkwijze
   - oude WordPress-site van zes pagina's, één pagina voor alle diensten:
     app/cases/hovenier-eykelenboom (openbaar); 2 -> 24 aanvragen: de enige
     toegestane resultaatclaim (Luca 27 nov)
   - FAQ: 'Mensen vragen ook' uit dezelfde SERP; "wat kost een maatwerk
     website" en "kosten maatwerk website" hebben vertoningen in Search
     Console (gsc-2026-11-25.json)

   Bewust niet:
   - het geplande bewijs "onze sites vs. WP-concurrenten": de snelheid van
     andere bureaus is niet gemeten (geen Lighthouse beschikbaar in de
     schrijfronde, de openbare PageSpeed-API weigerde met 429). Er staat dus
     geen enkel snelheidscijfer van een ander in, en geen claim dat maatwerk
     sneller ís dan WordPress (ook niet in het antwoordblok)
   - een bedrag voor losse wijzigingen of voor onderhoud per maand: staat
     niet op de site, dus het artikel verwijst naar de offerte
   - "bijna elk bureau biedt WordPress aan" en "de meeste vakmensen": geen
     bron voor, dus kleiner geformuleerd
   - marktaandeel van WordPress (geen bron opgehaald)
   - de PAA-vraag "Hoe zet ik mijn WordPress website offline?": past niet bij
     de lezer die nog moet kiezen
   - namen van aanbieders uit de SERP, klantcijfers, een oprichtingsjaar,
     een eigen hostingbedrag, het framework waarin wij bouwen (staat nergens
     op de site)
   ============================================================ */

export const wordpressOfMaatwerk: Artikel = {
  slug: "wordpress-of-maatwerk",
  titel: "WordPress website laten maken of maatwerk: wat past bij een vakbedrijf?",
  metaTitle: "WordPress website laten maken of maatwerk?",
  metaDescription:
    "WordPress website laten maken of kiezen voor maatwerk? De verschillen in beheer, onderhoud, snelheid en prijs, met eigen metingen en vijf offertevragen.",
  lead:
    "Zoek je op een WordPress website laten maken, dan vraagt bijna geen enkel resultaat of het wel WordPress moet zijn. Voor een vakbedrijf is het de moeite waard om één stap eerder te beginnen: wat moet de site voor je doen, en welk systeem past daarbij?",
  tag: "Proces",
  zoekterm: "wordpress website laten maken",
  gepubliceerd: "2026-11-27",
  bijgewerkt: "2026-11-27",
  concept: true,
  blokken: [
    {
      type: "antwoord",
      tekst:
        "Een **WordPress website laten maken** is een goede keuze als je zelf vaak pagina's wilt toevoegen en vrij wilt blijven in wie je site onderhoudt. **Maatwerk**, een site zonder thema of pagebuilder, past beter als de site vooral aanvragen moet opleveren en je het bijhouden liever uitbesteedt. De prijs is zelden het verschil: bureaus in de zoekresultaten vragen vanaf ongeveer €1.500 voor WordPress, en daar beginnen onze websites ook.",
    },

    { type: "kop", id: "verschil", tekst: "Wat is het verschil tussen WordPress en maatwerk?" },
    {
      type: "alinea",
      tekst:
        "WordPress is een beheersysteem dat je gratis mag gebruiken. Een bureau kiest er een thema bij, vaak met een pagebuilder, en voegt functies toe met plug-ins: een formulier, een cookiemelding, een SEO-hulp. Je logt in en past zelf teksten en foto's aan. Dat is de kracht van WordPress, want je hebt er geen programmeur voor nodig.",
    },
    {
      type: "alinea",
      tekst:
        "Met maatwerk bedoelen we in dit artikel een site die voor jouw bedrijf is ontworpen en gebouwd, zonder thema of pagebuilder. Er zit alleen in wat jouw pagina's nodig hebben. Let op het woord, want het wordt door elkaar gebruikt: ook WordPress-bureaus verkopen \"maatwerk\", en in onze calculator is een maatwerk website het type voor complexe wensen en koppelingen. Hier gaat het om de bouwwijze.",
    },
    {
      type: "tabel",
      kop: ["", "WordPress met thema of pagebuilder", "Maatwerk"],
      rijen: [
        ["Zelf aanpassen", "Ja, de beheeromgeving zit er standaard in", "Alleen als er een beheeromgeving bij gebouwd wordt: vraag ernaar"],
        ["Onderhoud", "Updates van WordPress, thema en plug-ins, het hele jaar door", "Minder onderdelen van anderen, maar voor wijzigingen in de bouw heb je de bouwer nodig"],
        ["Overstappen naar een ander bureau", "Makkelijk: veel bureaus en freelancers kennen WordPress", "Lastiger: leg vast wat er na betaling van jou is"],
        ["Snelheid", "Hangt af van het thema en het aantal plug-ins", "Hangt af van de bouwer, maar er hoeft niets mee wat je niet gebruikt"],
        ["Nieuwe functie", "Vaak een plug-in die al bestaat", "Wordt erbij gebouwd"],
      ],
      bron: "Onderhoud van WordPress: de eigen documentatie van WordPress over beveiliging en updates. De rest: hoe beide bouwwijzen werken, zonder oordeel over een aanbieder.",
    },

    { type: "kop", id: "zoekresultaten", tekst: "Wat vind je als je zoekt op \"wordpress website laten maken\"?" },
    {
      type: "alinea",
      tekst:
        "Wie dit intypt, heeft de keuze voor WordPress vaak al gemaakt. Meestal niet na een vergelijking, maar omdat het de naam is die je overal hoort. We wilden weten of Google je bij die zoekopdracht nog helpt kiezen. Dus legden we de resultaten vast.",
    },
    {
      type: "bewijs",
      label: "Zelf gemeten",
      titel: "19 resultaten, en één keer de vraag of het wel WordPress moet zijn",
      tekst:
        "Op 27 november 2026 legden we de eerste 19 resultaten vast voor \"wordpress website laten maken\", gezocht vanuit Den Haag. **Acht** resultaten komen van zeven bureaus die WordPress-sites verkopen, want één pagina staat er twee keer in. **Acht** komen van hostingbedrijven, vergelijkers en handleidingen om zelf te bouwen. De andere drie zijn een advertentiesite, een offertesite en een supportpagina uit 2016. Alleen op die advertentiesite biedt iemand een \"eigen CMS, geen WordPress\" aan. Alle andere resultaten gaan ervan uit dat je al gekozen hebt.",
      bron: "Bron: Google-resultaten voor \"wordpress website laten maken\", de eerste 19 resultaten, vanuit Den Haag, 27 november 2026 (via DataForSEO). Aanbieders bewust niet bij naam genoemd.",
    },
    {
      type: "tabel",
      kop: ["Positie in Google", "Wat het resultaat is", "Wat het belooft"],
      rijen: [
        ["2", "Hostingbedrijf, over zelf bouwen", "hosting vanaf $2,99 per maand"],
        ["4", "Advertentiesite", "een site voor €199 in 48 uur, of €499 met een eigen CMS"],
        ["6", "Bureau", "vanaf €2.500, een webshop vanaf €3.500"],
        ["7 en 11", "Bureau (dezelfde pagina, twee keer)", "vanaf €1.500, snel en met weinig plug-ins"],
        ["9", "Bureau", "€1.799 voor een site tot 10 pagina's"],
        ["12", "Blog over zelf bouwen", "€100 als je het zelf doet"],
        ["13", "Bureau", "in veertien dagen live"],
        ["14", "Bureau", "vanaf €1.499, in 7 dagen live"],
      ],
      bron: "Alle resultaten die in hun titel of omschrijving een bedrag of een levertijd noemen. De andere tien noemen geen van beide.",
    },
    {
      type: "alinea",
      tekst:
        "Twee dingen vallen op. De bureaus concurreren op prijs en op dagen, niet op wat de site daarna voor je doet. En het AI-overzicht van Google, dat boven deze resultaten staat, noemt wel drie dingen om op te letten: eigendom, zelf kunnen beheren, en of SEO en snelheid zijn meegenomen. Dat zijn precies de punten waarop WordPress en maatwerk van elkaar verschillen. Daarom lopen we ze hieronder na.",
    },

    { type: "kop", id: "snelheid", tekst: "Is een maatwerk website sneller dan WordPress?" },
    {
      type: "alinea",
      tekst:
        "Niet vanzelf. Een WordPress-site met een licht thema en weinig plug-ins kan snel zijn, en maatwerk van een slordige bouwer kan traag zijn. Het verschil zit in wat er bij elke pagina meegeladen wordt. Een pagebuilder en een rij plug-ins brengen elk hun eigen code mee, ook op pagina's waar je ze niet gebruikt. Bij maatwerk beslist de bouwer per pagina wat erin gaat.",
    },
    {
      type: "alinea",
      tekst:
        "Wij bouwen zonder sjablonen van de plank. Elke pagina staat al als HTML klaar, zodat er geen server eerst hoeft te rekenen. Beelden snijden we per schermformaat uit, en scripts van anderen laden pas na toestemming. Of dat werkt, hoef je niet van ons aan te nemen, want we meten het na de livegang en zetten de uitkomst in de case.",
    },
    {
      type: "bewijs",
      label: "Eigen meting",
      titel: "Twee sites die wij bouwden: 92 en 95 op mobiel, 99 en 100 op desktop",
      tekst:
        "We draaiden Lighthouse, de meetmethode van Google zelf, op de live homepage van twee sites uit ons eigen werk. Op mobiel meet Lighthouse met een gesimuleerde trage 4G-verbinding, dus streng. Daar zit ook ons eerlijke minpunt: het grootste onderdeel van de pagina staat op mobiel na 2,7 tot 2,9 seconden in beeld, terwijl Google naar 2,5 seconden streeft. Ook maatwerk is dus niet vanzelf af. De sites van WordPress-bureaus hebben we niet gemeten, dus dit is geen vergelijking: het laat zien wat je van een bouwer mag vragen.",
      bron: "Bron: Lighthouse op de live homepage. Giorgi & The Gents op 29 september 2026 (Lighthouse 13.5), R. van Esch Gevelrestauratie op 24 november 2026 (Lighthouse 13.6). Dezelfde cijfers staan op de casepagina's.",
    },
    {
      type: "tabel",
      kop: ["Site", "Gemeten op", "Score mobiel", "Grootste onderdeel mobiel", "Score desktop", "Grootste onderdeel desktop"],
      rijen: [
        ["Giorgi & The Gents", "29 september 2026", "95", "2,7 s", "100", "0,7 s"],
        ["R. van Esch Gevelrestauratie", "24 november 2026", "92", "2,9 s", "99", "0,9 s"],
      ],
      bron: "Score = de snelheidsscore van Lighthouse, van 0 tot 100. Grootste onderdeel = Largest Contentful Paint, het moment waarop het grootste onderdeel van de pagina in beeld staat. Dat kan een foto zijn, maar ook een tekstblok.",
    },
    {
      type: "alinea",
      tekst:
        "Waarom dit voor een vakbedrijf telt: je klant zoekt op zijn telefoon, vaak met matig bereik. Google schrijft zelf dat een goede laadervaring aansluit bij wat zijn rankingsystemen willen belonen. Een hoge score levert je geen plek bovenaan op, maar een trage site kost je bezoekers die al op weg waren naar je formulier. Hoe dat er in een heel traject uitziet, lees je in de [case van Giorgi & The Gents](/cases/giorgi-and-the-gents) en in de [case van Van Esch Gevelrestauratie](/cases/van-esch-gevelrestauratie).",
    },
    {
      type: "letop",
      titel: "Meet het zelf, bij elk bureau",
      tekst:
        "Vraag een bureau naar twee sites die het dit jaar heeft gebouwd. Plak die adressen in [PageSpeed Insights](https://pagespeed.web.dev) en kijk naar de mobiele score. Dat kost je vijf minuten en het zegt meer dan elke belofte op een offerte, ook die van ons.",
    },

    { type: "kop", id: "kosten", tekst: "Wat kost een WordPress website laten maken, en wat kost maatwerk?" },
    {
      type: "alinea",
      tekst:
        "De tabel zet drie dingen naast elkaar: wat Google zelf noemt, wat de bureaus in de zoekresultaten vragen en wat onze calculator rekent. Let op de naam, want \"Maatwerk website\" is in onze calculator het type voor complexe wensen en koppelingen. Onze andere twee typen bouwen we ook zonder thema of pagebuilder, als [website op maat](/diensten/website-laten-maken). Die kosten ongeveer wat de WordPress-bureaus vragen, dus zonder thema bouwen is niet per se de dure keuze.",
    },
    {
      type: "tabel",
      kop: ["", "Bouwprijs", "Bron"],
      rijen: [
        ["WordPress laten maken", "€500 - €6.000", "AI-overzicht van Google bij deze zoekopdracht"],
        ["WordPress bij de bureaus in de zoekresultaten", "€1.499 tot €2.500 voor een eerste site", "posities 6, 7, 9 en 14"],
        ["Bij ons: Eenvoudige website", "€1.500 - €2.500", "onze calculator"],
        ["Bij ons: Website voor vakbedrijf", "€2.000 - €3.500", "onze calculator"],
        ["Bij ons: Maatwerk website", "€5.000 - €8.000+", "onze calculator"],
      ],
      bron: "Zoekresultaten vastgelegd op 27 november 2026. Posities 6, 7 en 14 noemen een vanafprijs, positie 9 een pakketprijs voor een site tot 10 pagina's. Onze bedragen zijn indicaties voor de eenmalige bouw, exclusief btw.",
    },
    {
      type: "alinea",
      tekst:
        "Het verschil zit in wat er daarna komt. Bij WordPress horen volgens hetzelfde AI-overzicht doorlopende kosten voor domein, hosting, SSL, back-ups, plug-inlicenties en updates. Die updates zijn geen luxe: WordPress schrijft zelf voor dat je het systeem en de plug-ins bijhoudt, omdat verouderde plug-ins een bekende ingang voor aanvallen zijn. Vraag dus wie dat doet en wat het per maand kost. Wil je de bouwprijs per type naast elkaar zien, lees dan [wat een website laten maken kost](/kennisbank/wat-kost-een-website-laten-maken).",
    },

    { type: "kop", id: "wanneer-wordpress", tekst: "Wanneer is WordPress de betere keuze?" },
    {
      type: "alinea",
      tekst:
        "Er zijn situaties waarin wij je WordPress zouden aanraden, ook al bouwen we het zelf anders. De belangrijkste is dat je de site echt zelf wilt runnen. Schrijf je elke week een bericht of bouw je zelf nieuwe pagina's, dan is een systeem dat daarvoor gemaakt is prettig werken.",
    },
    {
      type: "lijst",
      items: [
        "**Je hebt een functie nodig die al als plug-in bestaat**, en je wilt die niet laten bouwen.",
        "**Je hebt al een WordPress-site die goed draait.** Dan is bijwerken vaak verstandiger dan opnieuw beginnen.",
        "**Je hebt iemand die de updates bijhoudt**, of je doet het zelf en vergeet het niet.",
      ],
    },

    { type: "kop", id: "wanneer-maatwerk", tekst: "Wanneer past maatwerk beter bij een vakbedrijf?" },
    {
      type: "alinea",
      tekst:
        "Veel vakmensen die wij spreken, willen geen website beheren. Ze willen dat de telefoon gaat. Herken je dat, dan heb je weinig aan een beheeromgeving vol knoppen en meer aan een site die per dienst en per plaats gevonden wordt. Voor dat doel bouwen wij [websites voor vakbedrijven](/voor-wie/vakbedrijven), met een beheeromgeving alleen waar je hem gebruikt, zoals voor projecten.",
    },
    {
      type: "alinea",
      tekst:
        "Toch beslist het systeem minder dan je denkt. Hovenier Eykelenboom had een WordPress-site van zes pagina's, waarvan één alle diensten moest dragen. Dat lag niet aan WordPress, want ook daarin kun je per dienst een pagina maken. Het lag aan de opbouw. Na de nieuwe site en het ingerichte Google-profiel ging Eykelenboom **van 2 naar 24 aanvragen per maand**. Geen belofte voor elk bedrijf, wel een reden om eerst over structuur te praten en dan pas over techniek. Het hele verhaal staat in de [case van Hovenier Eykelenboom](/cases/hovenier-eykelenboom).",
    },

    { type: "kop", id: "vragen", tekst: "Welke vragen stel je aan een bureau, welk systeem het ook wordt?" },
    {
      type: "alinea",
      tekst:
        "Met deze vijf vragen wordt elke offerte vergelijkbaar, of er nu WordPress op staat of maatwerk. Ze gaan niet over techniek, maar over wat jij na de oplevering in handen hebt.",
    },
    {
      type: "lijst",
      genummerd: true,
      items: [
        "**Van wie is de site na betaling?** Ook het domein, de teksten en de code.",
        "**Wat kan ik zelf aanpassen**, en wat kost het als jullie het doen?",
        "**Wie doet de updates en de back-ups**, en wat kost dat per maand?",
        "**Welke twee sites bouwden jullie het afgelopen jaar?**",
        "**Wie schrijft de teksten**, en zit vindbaarheid in de prijs?",
      ],
    },

    { type: "kop", id: "wat-zit-erin", tekst: "Wat zit er bij ons in, en wat niet?" },
    {
      type: "alinea",
      tekst:
        "We leggen onszelf langs dezelfde lat, vraag voor vraag. Eén: na betaling zijn de website, de teksten, de merkmiddelen en je domein van jou. Voor de code geldt een voorbehoud dat in onze voorwaarden staat. Technieken en onderdelen die we niet speciaal voor jou ontwikkelden, mogen we ook voor andere klanten gebruiken.",
    },
    {
      type: "alinea",
      tekst:
        "Twee: waar dat zinvol is, bouwen we een beheeromgeving voor teksten, foto's en projecten, en bij de oplevering laten we zien hoe die werkt. De rest passen wij aan, via onderhoud. Drie: updates en back-ups zitten niet in de bouwprijs. Hosting en onderhoud zijn losse diensten, per maand opzegbaar, en het bedrag staat in je offerte.",
    },
    {
      type: "alinea",
      tekst:
        "Vier: de twee sites zijn die uit de meting hierboven, dus je kunt ze zelf nameten. Vijf: de teksten schrijven wij, en de basis voor lokale vindbaarheid zit in de bouwprijs. Doorlopend werken aan je posities is apart, en een plek in Google beloven we niet. Een site staat er meestal binnen 3 tot 4 weken, en die weken staan beschreven in onze [werkwijze van groeigesprek tot livegang](/werkwijze). Wat jouw site kost, rekent de [kostencalculator](/website-kosten-calculator) in een minuut uit.",
    },
  ],
  faq: [
    {
      q: "Kun je zelf een WordPress website maken?",
      a: "Ja. WordPress is gratis te gebruiken, en acht van de 19 zoekresultaten die wij vastlegden komen van hostingbedrijven, vergelijkers en handleidingen om zelf te bouwen. Reken wel je eigen uren mee, en de vraag wie daarna de updates bijhoudt en of de site ook gevonden wordt.",
    },
    {
      q: "Wat kost het gemiddeld om een website te laten bouwen?",
      a: "Dat hangt af van het type site. De tabel onder het kopje over kosten zet naast elkaar wat Google noemt, wat WordPress-bureaus vragen en wat wij rekenen. Bij ons begint een website bij €1.500, en hosting en onderhoud komen daar per maand bij als je die afneemt.",
    },
    {
      q: "Wat kost een maatwerk website?",
      a: "Wat wij in de calculator een Maatwerk website noemen, voor complexe wensen en koppelingen, kost €5.000 tot €8.000 of meer. Bedoel je een site zonder thema of pagebuilder, dan hoeft het niet zo duur. Zo bouwen we ook onze Eenvoudige website, vanaf €1.500, en de Website voor vakbedrijf van €2.000 tot €3.500. De teksten zitten in de bouwprijs.",
    },
    {
      q: "Wie kan mij helpen met WordPress?",
      a: "Draait je WordPress-site goed en zoek je alleen onderhoud, dan is een WordPress-specialist de logische keuze. Twijfel je of de site nog bij je bedrijf past, dan kijken wij in een groeigesprek naar wat er staat. We zeggen dan eerlijk of bijwerken genoeg is of dat opnieuw bouwen meer oplevert.",
    },
    {
      q: "Is WordPress slecht voor SEO?",
      a: "Nee. Het systeem bepaalt niet of je gevonden wordt. Dat doen de opbouw van je pagina's, de teksten, de snelheid en je Google-bedrijfsprofiel. Een goed gebouwde WordPress-site kan prima scoren, en maatwerk zonder structuur doet dat niet.",
    },
  ],
  bronnen: [
    { label: "Google-zoekresultaten voor \"wordpress website laten maken\", de eerste 19 resultaten en het AI-overzicht, vanuit Den Haag, 27 november 2026 (via DataForSEO)" },
    { label: "Lighthouse-meting Giorgi & The Gents, 29 september 2026", url: "https://brandliftagency.nl/cases/giorgi-and-the-gents" },
    { label: "Lighthouse-meting R. van Esch Gevelrestauratie, 24 november 2026", url: "https://brandliftagency.nl/cases/van-esch-gevelrestauratie" },
    { label: "Google Search Central: Core Web Vitals en de zoekresultaten", url: "https://developers.google.com/search/docs/appearance/core-web-vitals?hl=nl" },
    { label: "WordPress-documentatie: Hardening WordPress (updates en plug-ins)", url: "https://developer.wordpress.org/advanced-administration/security/hardening/" },
    { label: "WordPress.org: open source en gratis te gebruiken", url: "https://wordpress.org/about/" },
    { label: "Brandlift-kostencalculator: prijsbanden", url: "https://brandliftagency.nl/website-kosten-calculator" },
    { label: "Algemene voorwaarden van Brandlift: eigendom, termijnen, hosting en garantie", url: "https://brandliftagency.nl/algemene-voorwaarden" },
    { label: "Case Hovenier Eykelenboom", url: "https://brandliftagency.nl/cases/hovenier-eykelenboom" },
  ],
  volgendeStap: {
    label: "Plan een gratis groeigesprek",
    href: "/contact",
    tekst: "Twijfel je tussen bijwerken en opnieuw bouwen? In 30 minuten kijken we naar wat er nu staat en wat je site moet opleveren. Daarna weet je welke bouwwijze bij je bedrijf past, ook als dat WordPress is.",
  },
  gerelateerd: ["wat-kost-een-website-laten-maken", "/kennisbank/wat-is-lokale-seo"],
};
