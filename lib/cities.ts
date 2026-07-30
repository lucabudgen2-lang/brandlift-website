/* ============================================================
   BRANDLIFT · location-page content (one object per city)
   Each object holds 100% UNIQUE, hyperlocal copy. The design is
   shared via <CityPage>; the words never are. Every page targets a
   distinct "website laten maken [stad]" keyword and self-canonicals,
   so there is no cannibalization or duplicate content between them.
   (Den Haag keeps its own bespoke page - this covers the rest.)
   ============================================================ */

export type CityFaq = { q: string; a: string; link?: { label: string; href: string } };
export type CityPillar = {
  icon: string;
  title: string;
  body: string;
  link?: { label: string; href: string };
};

export type CityData = {
  slug: string;
  city: string;
  updated: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  h1: string;
  intro: string;
  heroChips: string[];
  waarom: {
    heading: [string, string];
    intro: string;
    serpQuery: string;
    cards: { title: string; body: string }[];
    outro: string;
  };
  aanpak: { heading: [string, string]; intro: string; pillars: CityPillar[] };
  bewijs: { heading: [string, string]; body: string };
  kostenHeading: [string, string];
  kostenBody: string;
  local: {
    eyebrow: string;
    heading: [string, string];
    body: [string, string];
    points: string[];
    portraitChip: string;
    portraitAlt: string;
  };
  coverage: {
    heading: [string, string];
    intro: string;
    primaryLabel: string;
    primary: string[];
    secondaryLabel: string;
    secondary: string[];
    nearby: string[];
    mapQuery: string;
    mapTitle: string;
    mapSubtitle: string;
  };
  faqs: CityFaq[];
  finalCta: { h2: string; body: string };
};

const lokaleSeoLink = { label: "Meer over lokale SEO", href: "/diensten/lokale-seo" };
const costGuideLink = { label: "Lees wat een website kost", href: "/kennisbank/wat-kost-een-website-laten-maken" };

export const cities: Record<string, CityData> = {
  /* ═══════════════════════ ROTTERDAM ═══════════════════════ */
  rotterdam: {
    slug: "website-laten-maken-rotterdam",
    city: "Rotterdam",
    updated: "2026-07-13",
    metaTitle: "Website laten maken Rotterdam - meer aanvragen",
    metaDescription:
      "Website laten maken in Rotterdam? Strategische sites met lokale SEO en conversie voor Rotterdamse bedrijven die meer aanvragen willen. Vanaf 1.500 euro.",
    heroEyebrow: "Rotterdam · heel Nederland",
    h1: "Website laten maken in Rotterdam",
    intro:
      "Rotterdam is een stad van aanpakken - en van keuze. In elke branche strijden tientallen bedrijven om dezelfde klant. Wij bouwen strategische websites met lokale SEO en conversie waarmee Rotterdamse ondernemers bovenaan komen en de aanvraag ook echt binnenhalen.",
    heroChips: [
      "Sinds 2021, vanuit Den Haag",
      "Lokale SEO inbegrepen",
      "Reactie binnen 1 werkdag",
      "5,0 op Google",
    ],
    waarom: {
      heading: ["Rotterdammers Googelen lokaal.", "Wie bovenaan staat, wint de klus."],
      intro:
        "Van Kralingen tot Charlois, van de Kop van Zuid tot Hillegersberg: de Rotterdamse markt is groot en druk. Wie online niet opvalt, raakt de klant kwijt aan de concurrent die net iets beter vindbaar is.",
      serpQuery: "jouw vak + Rotterdam",
      cards: [
        {
          title: "Ze zoeken lokaal - en jij staat er niet",
          body: "Rotterdamse klanten typen hun vak plus hun wijk in Google en bellen wie bovenaan staat. Sta jij op pagina drie, dan kom je niet eens in de overweging.",
        },
        {
          title: "Volle site, lege mailbox",
          body: "Bezoek zonder richting levert niets op. Een site die niet meteen duidelijk maakt wat je doet en waarom juist jij, verliest de Rotterdammer die geen tijd heeft om te zoeken.",
        },
        {
          title: "Sterk in het werk, zwak op het scherm",
          body: "Je levert degelijk werk, maar een gedateerde site straalt dat niet uit. In een stad die op daden afgaat, kost dat gat je vertrouwen - en dus opdrachten.",
        },
      ],
      outro: "Een website die op Rotterdam is gebouwd, draait dat om.",
    },
    aanpak: {
      heading: ["Verder dan mooi.", "Gebouwd om Rotterdamse klanten te winnen."],
      intro:
        "Vier dingen bepalen of je website in Rotterdam klanten oplevert. Wij regelen ze alle vier, in de juiste volgorde.",
      pillars: [
        {
          icon: "target",
          title: "Strategie vóór ontwerp",
          body: "Voordat er ook maar een pixel staat, bepalen we waarom een Rotterdamse klant voor jou kiest en niet voor de tien anderen. Die keuze stuurt je structuur, je boodschap en de hele route naar de aanvraag.",
        },
        {
          icon: "gem",
          title: "Design en merk dat vertrouwen wekt",
          body: "Rotterdam houdt van duidelijkheid en no-nonsense. We geven je een uitstraling die klopt met je vak en je markt: strak, eerlijk en herkenbaar, zodat je online net zo solide overkomt als op de werkvloer.",
        },
        {
          icon: "shield",
          title: "Techniek: snel, veilig en schaalbaar",
          body: "De meeste Rotterdammers vinden je op hun telefoon, onderweg. We bouwen snel, veilig en mobiel-eerst, met een fundering die meegroeit als je uitbreidt naar nieuwe diensten of nieuwe wijken.",
        },
        {
          icon: "search",
          title: "Lokale SEO die Rotterdamse klanten vindt",
          body: "We regelen het complete lokale pakket: aparte dienst- en wijkpagina's, gestructureerde data (schema), lokale vermeldingen en een geoptimaliseerd en beheerd Google Bedrijfsprofiel. Zo word je gevonden van 'website laten maken Rotterdam' tot je specifieke dienst in Kralingen of Charlois.",
          link: lokaleSeoLink,
        },
      ],
    },
    bewijs: {
      heading: ["Bewijs uit de praktijk.", "Van 2 naar 24 aanvragen."],
      body: "Voor Hovenier Eykelenboom - een vakbedrijf hier vlakbij in Den Haag - bouwden we een complete website met een lokale SEO-structuur per dienst en werkgebied. Vakwerk dat eerst nauwelijks werd gevonden, levert nu structureel aanvragen op. Dezelfde aanpak werkt net zo goed voor een Rotterdams bedrijf.",
    },
    kostenHeading: ["Wat kost een website", "laten maken in Rotterdam?"],
    kostenBody:
      "Wat het precies wordt hangt af van je doel, de omvang en de mate van maatwerk - van een compacte, scherpe site tot een uitgebreid platform met veel dienst- en wijkpagina's. In elke website zit een lokale SEO-basis, strategie en een ontwerp dat vertrouwen wekt. Hosting en onderhoud lopen apart via een voordelig maandbedrag.",
    local: {
      eyebrow: "Dichtbij",
      heading: ["Een Haags bureau,", "thuis in Rotterdam."],
      body: [
        "Brandlift zit in Den Haag - op een klein half uur van de Coolsingel. We kennen de regio Rijnmond en de manier waarop Rotterdamse klanten online zoeken en beslissen: snel, concreet en zonder omhaal.",
        "Je werkt met een vast team en korte lijnen, direct met de mensen die je site ontwerpen en bouwen. In het Nederlands en Engels - en via professionele vertalers ook in andere talen, handig voor de internationale bedrijven in de stad.",
      ],
      points: [
        "Sinds 2021, vanuit Den Haag",
        "Vast team, korte lijnen",
        "Nederlands, Engels en meer talen",
        "Direct plek, geen wachtlijst",
      ],
      portraitChip: "Den Haag · nabij Rotterdam",
      portraitAlt: "Luca Budgen, oprichter van Brandlift, dat websites bouwt voor bedrijven in Rotterdam",
    },
    coverage: {
      heading: ["Actief in heel Rotterdam.", "Van de haven tot Hillegersberg."],
      intro:
        "We werken voor bedrijven in de hele stad en de regio Rijnmond - van het centrum en Zuid tot de buitenwijken en de randgemeenten.",
      primaryLabel: "Gebieden",
      primary: [
        "Centrum",
        "Delfshaven",
        "Kralingen-Crooswijk",
        "Feijenoord",
        "Hillegersberg-Schiebroek",
        "Prins Alexander",
        "Charlois",
        "IJsselmonde",
        "Noord",
        "Overschie",
      ],
      secondaryLabel: "En onder meer in de wijken",
      secondary: [
        "Kop van Zuid",
        "Katendrecht",
        "Blijdorp",
        "Cool",
        "Het Nieuwe Westen",
        "Lombardijen",
        "Ommoord",
        "Nesselande",
      ],
      nearby: ["Schiedam", "Capelle aan den IJssel", "Barendrecht", "Vlaardingen", "Ridderkerk", "Spijkenisse"],
      mapQuery: "Rotterdam, Nederland",
      mapTitle: "Werkgebied: Rotterdam",
      mapSubtitle: "Websites vanuit Den Haag, voor heel Rijnmond",
    },
    faqs: [
      {
        q: "Werken jullie ook echt voor bedrijven in Rotterdam?",
        a: "Zeker. Ons team zit in Den Haag, op een klein half uur van Rotterdam, en we bouwen websites voor bedrijven door de hele stad en de regio Rijnmond - van Kralingen tot Charlois en de randgemeenten. De samenwerking verloopt grotendeels online, dus afstand speelt geen rol.",
      },
      {
        q: "Wat kost een website laten maken in Rotterdam?",
        a: "Een website begint bij ons vanaf 1.500 euro. De uiteindelijke prijs hangt af van je doel en de mate van maatwerk. In elke website zit een lokale SEO-basis, strategie en een sterk ontwerp; hosting en onderhoud lopen apart via een voordelig maandbedrag. En we werken door totdat je tevreden bent. In een gratis groeigesprek geven we een eerlijke indicatie.",
        link: costGuideLink,
      },
      {
        q: "Wat valt er onder lokale SEO in Rotterdam?",
        a: "Zo goed als alles wat nodig is om in Rotterdam gevonden te worden: een sterke website met dienst- en wijkpagina's, gestructureerde data (schema), lokale vermeldingen (citaties) en een geoptimaliseerd en beheerd Google Bedrijfsprofiel. Zo verschijn je op het moment dat een Rotterdamse klant naar jouw dienst zoekt.",
      },
      {
        q: "Hoe lang duurt het om een website te laten maken?",
        a: "Een website staat er meestal binnen 3 tot 4 weken, afhankelijk van de omvang en hoe snel content en feedback rond zijn. In het groeigesprek koppelen we een concrete planning aan jouw project.",
      },
      {
        q: "Werken jullie ook voor Engelstalige bedrijven in Rotterdam?",
        a: "Ja. We werken in het Nederlands en Engels, en voor andere talen schakelen we professionele vertalers in - handig in een internationale havenstad als Rotterdam. Je website kan meertalig, met dezelfde lokale SEO-basis per taal.",
      },
    ],
    finalCta: {
      h2: "Klaar voor een website die Rotterdamse klanten oplevert?",
      body: "Plan een gratis, vrijblijvend groeigesprek van 30 minuten. Je weet daarna precies waar je staat - met of zonder samenwerking.",
    },
  },

  /* ═══════════════════════ EINDHOVEN ═══════════════════════ */
  eindhoven: {
    slug: "website-laten-maken-eindhoven",
    city: "Eindhoven",
    updated: "2026-07-13",
    metaTitle: "Website laten maken Eindhoven - meer aanvragen",
    metaDescription:
      "Website laten maken in Eindhoven? Strategische sites met lokale SEO en conversie voor Brabantse bedrijven die meer aanvragen willen. Vanaf 1.500 euro.",
    heroEyebrow: "Eindhoven · heel Nederland",
    h1: "Website laten maken in Eindhoven",
    intro:
      "Eindhoven draait op techniek, design en ondernemerschap - van Strijp-S tot de High Tech Campus. In die veeleisende markt val je alleen op met een website die klopt. Wij bouwen strategische sites met lokale SEO en conversie voor Eindhovense bedrijven die willen groeien.",
    heroChips: [
      "Sinds 2021, vanuit Den Haag",
      "Lokale SEO inbegrepen",
      "Reactie binnen 1 werkdag",
      "5,0 op Google",
    ],
    waarom: {
      heading: ["Eindhovenaren zoeken online.", "Wie ze niet vindt, mist de opdracht."],
      intro:
        "Brainport trekt bedrijvigheid aan - en dus concurrentie. Van Woensel tot Gestel strijden aanbieders om dezelfde klant. Wie online niet scherp staat, verdwijnt naar de achtergrond.",
      serpQuery: "jouw vak + Eindhoven",
      cards: [
        {
          title: "Ze zoeken lokaal - en vinden je niet",
          body: "Eindhovense klanten typen hun vraag plus hun buurt in Google en kiezen uit wie bovenaan staat. Onvindbaar betekent hier simpelweg: niet in beeld.",
        },
        {
          title: "Bezoek zat, aanvragen niet",
          body: "In een regio die op oplossingen draait, haakt een bezoeker af zodra je site niet meteen duidelijk maakt wat je levert en waarom jij. Verkeer zonder richting kost je gewoon geld.",
        },
        {
          title: "Goed werk, gedateerde site",
          body: "Eindhoven legt de lat hoog op vormgeving en techniek. Een verouderde website ondermijnt precies de professionaliteit waar je klanten hier op letten.",
        },
      ],
      outro: "Een website die op Eindhoven is gebouwd, draait dat om.",
    },
    aanpak: {
      heading: ["Verder dan mooi.", "Gebouwd om Eindhovense klanten te winnen."],
      intro:
        "Vier dingen bepalen of je website in Eindhoven klanten oplevert. Wij regelen ze alle vier, in de juiste volgorde.",
      pillars: [
        {
          icon: "target",
          title: "Strategie vóór ontwerp",
          body: "We beginnen bij de vraag waarom een klant in Eindhoven voor jou kiest. In een regio vol techneuten en makers telt onderscheidend vermogen; die positionering bepaalt je structuur, je boodschap en de route naar contact.",
        },
        {
          icon: "gem",
          title: "Design en merk dat vertrouwen wekt",
          body: "Eindhoven is designstad - hier valt slordig ontwerp meteen op. We geven je een merk en uitstraling die passen bij je vak en de kwaliteitsverwachting van de regio, zodat je online net zo sterk staat als in het echt.",
        },
        {
          icon: "shield",
          title: "Techniek: snel, veilig en schaalbaar",
          body: "In Brainport weet men wat goede techniek is. We bouwen snel, veilig en mobiel-eerst, op een schaalbare basis die meegroeit met je bedrijf - van eenmanszaak tot scale-up.",
        },
        {
          icon: "search",
          title: "Lokale SEO die Eindhovense klanten vindt",
          body: "We regelen het volledige lokale pakket: dienst- en wijkpagina's, gestructureerde data (schema), lokale vermeldingen en een geoptimaliseerd en beheerd Google Bedrijfsprofiel. Zo word je gevonden van 'website laten maken Eindhoven' tot je specifieke dienst in Strijp of Woensel.",
          link: lokaleSeoLink,
        },
      ],
    },
    bewijs: {
      heading: ["Bewijs uit de praktijk.", "Van 2 naar 24 aanvragen."],
      body: "Voor Hovenier Eykelenboom in Den Haag bouwden we een complete website met een lokale SEO-structuur per dienst en werkgebied. Vakwerk dat eerst nauwelijks werd gevonden, levert nu structureel aanvragen op. Al is dit een Haagse case, de aanpak werkt net zo goed voor een Eindhovens bedrijf.",
    },
    kostenHeading: ["Wat kost een website", "laten maken in Eindhoven?"],
    kostenBody:
      "Wat het precies wordt hangt af van je doel, de omvang en de mate van maatwerk - van een strakke, compacte site tot een uitgebreid platform met veel dienst- en locatiepagina's. In elke website zit een lokale SEO-basis, strategie en een ontwerp dat vertrouwen wekt. Hosting en onderhoud lopen apart via een voordelig maandbedrag.",
    local: {
      eyebrow: "Op afstand, toch dichtbij",
      heading: ["Een Haags bureau", "dat de Brainport-markt kent."],
      body: [
        "Brandlift zit in Den Haag, maar afstand is online geen belemmering - onze samenwerkingen lopen door heel Nederland. We kennen de Eindhovense markt: een regio waar techniek, design en ondernemerschap samenkomen en waar kwaliteit vanzelfsprekend is.",
        "Je werkt met een vast team en korte lijnen, direct met de mensen die je site bouwen. In het Nederlands en Engels - en via professionele vertalers ook in andere talen, handig voor de vele kenniswerkers en internationale bedrijven in en rond Eindhoven.",
      ],
      points: [
        "Sinds 2021, vanuit Den Haag",
        "Vast team, korte lijnen",
        "Nederlands, Engels en meer talen",
        "Direct plek, geen wachtlijst",
      ],
      portraitChip: "Den Haag · actief in Eindhoven",
      portraitAlt: "Luca Budgen, oprichter van Brandlift, dat websites bouwt voor bedrijven in Eindhoven",
    },
    coverage: {
      heading: ["Actief in heel Eindhoven.", "Van Strijp tot Woensel."],
      intro:
        "We werken voor bedrijven in de hele stad en de Brainport-regio - van het centrum en de campussen tot de buitenwijken en de omliggende gemeenten.",
      primaryLabel: "Stadsdelen",
      primary: [
        "Centrum",
        "Strijp",
        "Woensel-Noord",
        "Woensel-Zuid",
        "Tongelre",
        "Stratum",
        "Gestel",
      ],
      secondaryLabel: "En onder meer in de wijken",
      secondary: ["Strijp-S", "Meerhoven", "Blixembosch", "Vaartbroek", "Lakerlopen", "Tivoli", "Genderdal"],
      nearby: ["Veldhoven", "Best", "Geldrop", "Nuenen", "Son en Breugel", "Waalre", "Helmond"],
      mapQuery: "Eindhoven, Nederland",
      mapTitle: "Werkgebied: Eindhoven",
      mapSubtitle: "Websites vanuit Den Haag, voor heel Brainport",
    },
    faqs: [
      {
        q: "Werken jullie ook voor bedrijven in Eindhoven?",
        a: "Ja. Ons team zit in Den Haag, maar we bouwen websites voor bedrijven door heel Nederland - Eindhoven en de Brainport-regio inbegrepen. Vrijwel alles verloopt online en snel, dus de afstand tussen Den Haag en Eindhoven speelt geen rol in de samenwerking.",
      },
      {
        q: "Wat kost een website laten maken in Eindhoven?",
        a: "Een website begint bij ons vanaf 1.500 euro. De uiteindelijke prijs hangt af van je doel en de mate van maatwerk. In elke website zit een lokale SEO-basis, strategie en een sterk ontwerp; hosting en onderhoud lopen apart via een voordelig maandbedrag. En we werken door totdat je tevreden bent.",
        link: costGuideLink,
      },
      {
        q: "Wat valt er onder lokale SEO in Eindhoven?",
        a: "Zo goed als alles wat nodig is om lokaal gevonden te worden: een sterke website met dienst- en wijkpagina's, gestructureerde data (schema), lokale vermeldingen en een geoptimaliseerd en beheerd Google Bedrijfsprofiel. Zo verschijn je precies wanneer een Eindhovense klant naar jouw dienst zoekt.",
      },
      {
        q: "Hoe lang duurt het om een website te laten maken?",
        a: "Een website staat er meestal binnen 3 tot 4 weken, afhankelijk van de omvang en hoe snel content en feedback rond zijn. In het groeigesprek koppelen we een concrete planning aan jouw project.",
      },
      {
        q: "Werken jullie ook voor internationale bedrijven in Eindhoven?",
        a: "Ja. Eindhoven trekt veel internationaal talent en bedrijven aan. We werken in het Nederlands en Engels, en voor andere talen schakelen we professionele vertalers in. Je website kan meertalig, met dezelfde sterke lokale SEO-basis per taal.",
      },
    ],
    finalCta: {
      h2: "Klaar voor een website die Eindhovense klanten oplevert?",
      body: "Plan een gratis, vrijblijvend groeigesprek van 30 minuten. Je weet daarna precies waar je staat - met of zonder samenwerking.",
    },
  },

  /* ═══════════════════════ UTRECHT ═══════════════════════ */
  utrecht: {
    slug: "website-laten-maken-utrecht",
    city: "Utrecht",
    updated: "2026-07-13",
    metaTitle: "Website laten maken Utrecht - meer aanvragen",
    metaDescription:
      "Website laten maken in Utrecht? Strategische sites met lokale SEO en conversie voor Utrechtse bedrijven die meer aanvragen willen. Vanaf 1.500 euro.",
    heroEyebrow: "Utrecht · heel Nederland",
    h1: "Website laten maken in Utrecht",
    intro:
      "Utrecht ligt in het hart van Nederland - centraal, dynamisch en competitief. Van de binnenstad tot Leidsche Rijn dingen bedrijven naar dezelfde klant. Wij bouwen strategische websites met lokale SEO en conversie waarmee Utrechtse ondernemers opvallen en aanvragen binnenhalen.",
    heroChips: [
      "Sinds 2021, vanuit Den Haag",
      "Lokale SEO inbegrepen",
      "Reactie binnen 1 werkdag",
      "5,0 op Google",
    ],
    waarom: {
      heading: ["Utrechters zoeken lokaal.", "Onvindbaar is onverkocht."],
      intro:
        "Utrecht is een van de snelst groeiende steden van het land, en de concurrentie groeit mee. Van Wittevrouwen tot Overvecht: wie online niet opvalt, verliest de klant aan wie net beter vindbaar is.",
      serpQuery: "jouw vak + Utrecht",
      cards: [
        {
          title: "Ze zoeken lokaal - en jij mist het",
          body: "Utrechtse klanten typen hun vak plus hun wijk in Google en kiezen uit de eerste resultaten. Sta jij daar niet tussen, dan bestaat je bedrijf voor hen niet.",
        },
        {
          title: "Bezoekers komen, aanvragen blijven weg",
          body: "Verkeer zonder richting levert niets op. Zonder een heldere boodschap en een duidelijke route naar contact klikt de Utrechter net zo makkelijk door naar de volgende aanbieder.",
        },
        {
          title: "Goed werk, zwakke uitstraling",
          body: "Je werk is in orde, maar een gedateerde site laat dat niet zien. In een stad vol scherpe bedrijven kost dat verschil je vertrouwen, en dus opdrachten.",
        },
      ],
      outro: "Een website die op Utrecht is gebouwd, draait dat om.",
    },
    aanpak: {
      heading: ["Verder dan mooi.", "Gebouwd om Utrechtse klanten te winnen."],
      intro:
        "Vier dingen bepalen of je website in Utrecht klanten oplevert. Wij regelen ze alle vier, in de juiste volgorde.",
      pillars: [
        {
          icon: "target",
          title: "Strategie vóór ontwerp",
          body: "We beginnen bij de vraag waarom een Utrechtse klant voor jou kiest in een markt vol alternatieven. Die positionering bepaalt de structuur van je site, je boodschap en de route naar de aanvraag - nog voor we iets ontwerpen.",
        },
        {
          icon: "gem",
          title: "Design en merk dat vertrouwen wekt",
          body: "Utrecht combineert historie met een frisse, professionele ondernemersgeest. We geven je een merk en uitstraling die daarbij passen, zodat je online net zo overtuigend bent als in een gesprek aan tafel.",
        },
        {
          icon: "shield",
          title: "Techniek: snel, veilig en schaalbaar",
          body: "Je klanten vinden je meestal mobiel, tussen twee afspraken door. We bouwen snel, veilig en mobiel-eerst, met een schaalbare basis die meegroeit met je bedrijf en je werkgebied.",
        },
        {
          icon: "search",
          title: "Lokale SEO die Utrechtse klanten vindt",
          body: "We regelen het complete lokale pakket: dienst- en wijkpagina's, gestructureerde data (schema), lokale vermeldingen en een geoptimaliseerd en beheerd Google Bedrijfsprofiel. Zo word je gevonden van 'website laten maken Utrecht' tot je specifieke dienst in Leidsche Rijn of Oost.",
          link: lokaleSeoLink,
        },
      ],
    },
    bewijs: {
      heading: ["Bewijs uit de praktijk.", "Van 2 naar 24 aanvragen."],
      body: "Voor Hovenier Eykelenboom in Den Haag bouwden we een complete website met een lokale SEO-structuur per dienst en werkgebied. Vakwerk dat eerst nauwelijks werd gevonden, levert nu structureel aanvragen op. Dezelfde aanpak zetten we net zo goed in voor een Utrechts bedrijf.",
    },
    kostenHeading: ["Wat kost een website", "laten maken in Utrecht?"],
    kostenBody:
      "Wat het precies wordt hangt af van je doel, de omvang en de mate van maatwerk - van een compacte, sterke site tot een uitgebreid platform met veel dienst- en locatiepagina's. In elke website zit een lokale SEO-basis, strategie en een ontwerp dat vertrouwen wekt. Hosting en onderhoud lopen apart via een voordelig maandbedrag.",
    local: {
      eyebrow: "Centraal in beeld",
      heading: ["Een Haags bureau,", "actief in het hart van het land."],
      body: [
        "Brandlift zit in Den Haag en werkt door heel Nederland - Utrecht ligt daarbij letterlijk centraal. We kennen de Utrechtse markt: een stad die hard groeit, met een sterke, competitieve ondernemersgemeenschap waarin je online echt moet opvallen.",
        "Je werkt met een vast team en korte lijnen, direct met de mensen die je site ontwerpen en bouwen. In het Nederlands en Engels - en via professionele vertalers ook in andere talen, handig in een stad met veel internationale bedrijvigheid.",
      ],
      points: [
        "Sinds 2021, vanuit Den Haag",
        "Vast team, korte lijnen",
        "Nederlands, Engels en meer talen",
        "Direct plek, geen wachtlijst",
      ],
      portraitChip: "Den Haag · actief in Utrecht",
      portraitAlt: "Luca Budgen, oprichter van Brandlift, dat websites bouwt voor bedrijven in Utrecht",
    },
    coverage: {
      heading: ["Actief in heel Utrecht.", "Van de Dom tot Leidsche Rijn."],
      intro:
        "We werken voor bedrijven in de hele stad en de regio - van de historische binnenstad tot de nieuwbouw in het westen en de omliggende gemeenten.",
      primaryLabel: "Wijken",
      primary: [
        "Binnenstad",
        "Oost",
        "Noordoost",
        "Zuid",
        "Zuidwest",
        "West",
        "Noordwest",
        "Overvecht",
        "Leidsche Rijn",
        "Vleuten-De Meern",
      ],
      secondaryLabel: "En onder meer in",
      secondary: ["Wittevrouwen", "Lombok", "Tuindorp", "Zuilen", "Lunetten", "Kanaleneiland", "Vleuten"],
      nearby: ["Nieuwegein", "Houten", "Zeist", "De Bilt", "Maarssen", "IJsselstein", "Bunnik"],
      mapQuery: "Utrecht, Nederland",
      mapTitle: "Werkgebied: Utrecht",
      mapSubtitle: "Websites vanuit Den Haag, voor heel Midden-Nederland",
    },
    faqs: [
      {
        q: "Werken jullie ook voor bedrijven in Utrecht?",
        a: "Ja. Ons team zit in Den Haag, maar we bouwen websites voor bedrijven door heel Nederland - en Utrecht ligt centraal en goed bereikbaar. De samenwerking verloopt grotendeels online, dus afstand speelt geen rol.",
      },
      {
        q: "Wat kost een website laten maken in Utrecht?",
        a: "Een website begint bij ons vanaf 1.500 euro. De uiteindelijke prijs hangt af van je doel en de mate van maatwerk. In elke website zit een lokale SEO-basis, strategie en een sterk ontwerp; hosting en onderhoud lopen apart via een voordelig maandbedrag. En we werken door totdat je tevreden bent.",
        link: costGuideLink,
      },
      {
        q: "Hoe val ik op tussen de vele Utrechtse aanbieders?",
        a: "Precies daar begint onze aanpak. We bepalen eerst waarom een klant voor jou kiest en niet voor de rest, en vertalen dat naar een scherpe positionering, sterke content en een lokale SEO-structuur. Zo verschijn je niet alleen in Google, maar overtuig je de bezoeker ook echt.",
      },
      {
        q: "Hoe lang duurt het om een website te laten maken?",
        a: "Een website staat er meestal binnen 3 tot 4 weken, afhankelijk van de omvang en hoe snel content en feedback rond zijn. In het groeigesprek koppelen we een concrete planning aan jouw project.",
      },
      {
        q: "Werken jullie ook voor Engelstalige bedrijven in Utrecht?",
        a: "Ja. We werken in het Nederlands en Engels, en voor andere talen schakelen we professionele vertalers in. Je website kan meertalig, met dezelfde sterke lokale SEO-basis per taal.",
      },
    ],
    finalCta: {
      h2: "Klaar voor een website die Utrechtse klanten oplevert?",
      body: "Plan een gratis, vrijblijvend groeigesprek van 30 minuten. Je weet daarna precies waar je staat - met of zonder samenwerking.",
    },
  },

  /* ═══════════════════════ AMSTERDAM ═══════════════════════ */
  amsterdam: {
    slug: "website-laten-maken-amsterdam",
    city: "Amsterdam",
    updated: "2026-07-13",
    metaTitle: "Website laten maken Amsterdam - meer aanvragen",
    metaDescription:
      "Website laten maken in Amsterdam? Strategische sites met lokale SEO en conversie voor Amsterdamse bedrijven die meer aanvragen willen. Vanaf 1.500 euro.",
    heroEyebrow: "Amsterdam · heel Nederland",
    h1: "Website laten maken in Amsterdam",
    intro:
      "Amsterdam is de drukste markt van Nederland - internationaal, snel en meedogenloos competitief. Opvallen vraagt meer dan een mooie site. Wij bouwen strategische websites met lokale SEO en conversie waarmee Amsterdamse bedrijven boven het lawaai uitkomen en klanten binnenhalen.",
    heroChips: [
      "Sinds 2021, vanuit Den Haag",
      "Lokale SEO inbegrepen",
      "Reactie binnen 1 werkdag",
      "5,0 op Google",
    ],
    waarom: {
      heading: ["In Amsterdam is iedereen online.", "Alleen wie opvalt, wint."],
      intro:
        "In de hoofdstad strijden in elke branche honderden bedrijven om dezelfde klant, van De Pijp tot Noord. Een gemiddelde website verdwijnt hier meteen in de massa.",
      serpQuery: "jouw vak + Amsterdam",
      cards: [
        {
          title: "Onvindbaar tussen honderden anderen",
          body: "Amsterdamse klanten scrollen niet ver. Ze typen hun vraag in Google en kiezen uit de bovenste resultaten. Sta jij daar niet, dan zien ze je simpelweg niet.",
        },
        {
          title: "Bezoek genoeg, aanvragen te weinig",
          body: "In een stad die haast heeft, beslist een bezoeker in seconden. Maakt je site niet meteen duidelijk wat je doet en waarom jij, dan is hij weg voor je het weet.",
        },
        {
          title: "Sterk bedrijf, gemiddelde site",
          body: "Amsterdam zit vol scherpe, goed ogende merken. Een gedateerde of vage website laat je kleiner lijken dan je bent - en dat kost je juist hier de klant.",
        },
      ],
      outro: "Een website die op Amsterdam is gebouwd, draait dat om.",
    },
    aanpak: {
      heading: ["Verder dan mooi.", "Gebouwd om op te vallen in Amsterdam."],
      intro:
        "Vier dingen bepalen of je website in Amsterdam klanten oplevert. Wij regelen ze alle vier, in de juiste volgorde.",
      pillars: [
        {
          icon: "target",
          title: "Strategie vóór ontwerp",
          body: "In een markt met honderden concurrenten is positionering alles. We bepalen scherp waarom een Amsterdamse klant voor jou kiest, en bouwen je hele site - structuur, boodschap, route naar contact - rond dat antwoord.",
        },
        {
          icon: "gem",
          title: "Design en merk dat vertrouwen wekt",
          body: "Amsterdam is verwend op het gebied van design. We geven je een merk en uitstraling die opvallen tussen de rest en meteen kwaliteit uitstralen, zodat je niet wegvalt in het lawaai maar eruit springt.",
        },
        {
          icon: "shield",
          title: "Techniek: snel, veilig en schaalbaar",
          body: "De hoofdstad zoekt mobiel en ongeduldig. We bouwen razendsnel, veilig en mobiel-eerst, op een basis die meegroeit - of je nu een buurtzaak bent of opschaalt naar meerdere vestigingen.",
        },
        {
          icon: "search",
          title: "Lokale SEO die Amsterdamse klanten vindt",
          body: "We regelen het volledige lokale pakket: dienst- en wijkpagina's, gestructureerde data (schema), lokale vermeldingen en een geoptimaliseerd en beheerd Google Bedrijfsprofiel. Zo word je gevonden van 'website laten maken Amsterdam' tot je specifieke dienst in De Pijp of Oost.",
          link: lokaleSeoLink,
        },
      ],
    },
    bewijs: {
      heading: ["Bewijs uit de praktijk.", "Van 2 naar 24 aanvragen."],
      body: "Voor Hovenier Eykelenboom in Den Haag bouwden we een complete website met een lokale SEO-structuur per dienst en werkgebied. Vakwerk dat eerst nauwelijks werd gevonden, levert nu structureel aanvragen op. Precies dezelfde aanpak zetten we in om een Amsterdams bedrijf boven de concurrentie te tillen.",
    },
    kostenHeading: ["Wat kost een website", "laten maken in Amsterdam?"],
    kostenBody:
      "Wat het precies wordt hangt af van je doel, de omvang en de mate van maatwerk - van een scherpe, compacte site tot een uitgebreid platform met veel dienst- en locatiepagina's. In elke website zit een lokale SEO-basis, strategie en een ontwerp dat vertrouwen wekt. Hosting en onderhoud lopen apart via een voordelig maandbedrag.",
    local: {
      eyebrow: "Boven het lawaai uit",
      heading: ["Een Haags bureau", "dat opvalt in Amsterdam."],
      body: [
        "Brandlift zit in Den Haag en werkt door heel Nederland, de hoofdstad inbegrepen. We kennen de Amsterdamse markt: druk, internationaal en veeleisend, waar een gemiddelde website niet volstaat en onderscheidend vermogen het verschil maakt.",
        "Je werkt met een vast team en korte lijnen, direct met de mensen die je site ontwerpen en bouwen. In het Nederlands en Engels - en via professionele vertalers ook in andere talen, wat in het internationale Amsterdam vaak precies is wat je nodig hebt.",
      ],
      points: [
        "Sinds 2021, vanuit Den Haag",
        "Vast team, korte lijnen",
        "Nederlands, Engels en meer talen",
        "Direct plek, geen wachtlijst",
      ],
      portraitChip: "Den Haag · actief in Amsterdam",
      portraitAlt: "Luca Budgen, oprichter van Brandlift, dat websites bouwt voor bedrijven in Amsterdam",
    },
    coverage: {
      heading: ["Actief in heel Amsterdam.", "Van Zuid tot Noord."],
      intro:
        "We werken voor bedrijven in de hele stad en de regio - van het centrum en de grachtengordel tot de buitenstadsdelen en de omliggende gemeenten.",
      primaryLabel: "Stadsdelen",
      primary: ["Centrum", "Noord", "Oost", "Zuid", "West", "Nieuw-West", "Zuidoost", "Westpoort"],
      secondaryLabel: "En onder meer in",
      secondary: ["De Pijp", "Jordaan", "Oud-Zuid", "Oud-West", "Westerpark", "Bos en Lommer", "IJburg", "De Baarsjes"],
      nearby: ["Amstelveen", "Diemen", "Zaandam", "Hoofddorp", "Almere", "Haarlem", "Ouder-Amstel"],
      mapQuery: "Amsterdam, Nederland",
      mapTitle: "Werkgebied: Amsterdam",
      mapSubtitle: "Websites vanuit Den Haag, voor heel de hoofdstad",
    },
    faqs: [
      {
        q: "Werken jullie ook voor bedrijven in Amsterdam?",
        a: "Ja. Ons team zit in Den Haag, maar we bouwen websites voor bedrijven door heel Nederland - de hoofdstad inbegrepen. Vrijwel alles verloopt online en snel, dus de afstand tot Amsterdam speelt in de praktijk geen rol.",
      },
      {
        q: "Wat kost een website laten maken in Amsterdam?",
        a: "Een website begint bij ons vanaf 1.500 euro. De uiteindelijke prijs hangt af van je doel en de mate van maatwerk. In elke website zit een lokale SEO-basis, strategie en een sterk ontwerp; hosting en onderhoud lopen apart via een voordelig maandbedrag. En we werken door totdat je tevreden bent.",
        link: costGuideLink,
      },
      {
        q: "Amsterdam is enorm competitief - hoe kom ik dan bovenaan?",
        a: "Bovenaan komen in Amsterdam is een spel van sterke on-page SEO, een scherpe positionering en autoriteit die je opbouwt met reviews en vermeldingen. Wij leggen die volledige basis en zijn eerlijk over wat realistisch is: op sommige zoekwoorden ben je snel zichtbaar, op de zwaarste is het een kwestie van consequent doorbouwen.",
      },
      {
        q: "Werken jullie ook voor Engelstalige of internationale bedrijven in Amsterdam?",
        a: "Ja, en in Amsterdam is dat vaak juist de vraag. We werken in het Nederlands en Engels, en voor andere talen schakelen we professionele vertalers in. Je website kan meertalig, met dezelfde sterke lokale SEO-basis per taal.",
      },
      {
        q: "Hoe lang duurt het om een website te laten maken?",
        a: "Een website staat er meestal binnen 3 tot 4 weken, afhankelijk van de omvang en hoe snel content en feedback rond zijn. In het groeigesprek koppelen we een concrete planning aan jouw project.",
      },
    ],
    finalCta: {
      h2: "Klaar voor een website die opvalt in Amsterdam?",
      body: "Plan een gratis, vrijblijvend groeigesprek van 30 minuten. Je weet daarna precies waar je staat - met of zonder samenwerking.",
    },
  },

  /* ═══════════════════════ DELFT ═══════════════════════ */
  delft: {
    slug: "website-laten-maken-delft",
    city: "Delft",
    updated: "2026-07-13",
    metaTitle: "Website laten maken Delft - meer aanvragen",
    metaDescription:
      "Website laten maken in Delft? Strategische sites met lokale SEO en conversie voor Delftse bedrijven die meer aanvragen willen. Vanaf 1.500 euro.",
    heroEyebrow: "Delft · heel Nederland",
    h1: "Website laten maken in Delft",
    intro:
      "Delft is compact, historisch en verrassend innovatief - van de grachten tot de TU-campus. In zo'n stad ken je elkaar, en telt je online reputatie dubbel. Wij zitten om de hoek in Den Haag en bouwen strategische websites met lokale SEO en conversie voor Delftse bedrijven die serieus gevonden willen worden.",
    heroChips: [
      "Om de hoek, vanuit Den Haag",
      "Lokale SEO inbegrepen",
      "Reactie binnen 1 werkdag",
      "5,0 op Google",
    ],
    waarom: {
      heading: ["Delftenaren zoeken lokaal.", "Wie ze niet vindt, mist de klant."],
      intro:
        "Delft is klein maar drukbezet: van de Binnenstad tot Tanthof zitten er in elke branche meerdere aanbieders. Wie online niet opvalt, verliest de klant aan de buurman die net beter vindbaar is.",
      serpQuery: "jouw vak + Delft",
      cards: [
        {
          title: "Ze zoeken lokaal - en vinden je niet",
          body: "Delftse klanten typen hun vak plus hun buurt in Google en kiezen wie bovenaan staat. In een compacte stad valt het extra op als jij daar niet tussen staat.",
        },
        {
          title: "Bezoekers komen, aanvragen blijven uit",
          body: "Verkeer zonder richting levert niets op. Zonder een heldere boodschap en een duidelijke route naar contact haakt ook de Delftenaar af en gaat verder bij de volgende.",
        },
        {
          title: "Goed werk, zwakke uitstraling",
          body: "In een stad waar mond-tot-mondreclame telt, versterkt of ondermijnt je site je reputatie. Vakwerk op een verouderde website oogt zwakker dan het is - en dat kost klussen.",
        },
      ],
      outro: "Een website die op Delft is gebouwd, draait dat om.",
    },
    aanpak: {
      heading: ["Verder dan mooi.", "Gebouwd om Delftse klanten te winnen."],
      intro:
        "Vier dingen bepalen of je website in Delft klanten oplevert. Wij regelen ze alle vier, in de juiste volgorde.",
      pillars: [
        {
          icon: "target",
          title: "Strategie vóór ontwerp",
          body: "We beginnen bij de vraag waarom een Delftse klant voor jou kiest in plaats van voor de aanbieder in de volgende straat. Die positionering bepaalt de structuur, de boodschap en de route naar de aanvraag - nog voor we iets ontwerpen.",
        },
        {
          icon: "gem",
          title: "Design en merk dat vertrouwen wekt",
          body: "Delft ademt historie en tegelijk techniek en innovatie. We geven je een uitstraling die past bij je vak en je stad, zodat je online net zo betrouwbaar overkomt als in een gesprek op de zaak.",
        },
        {
          icon: "shield",
          title: "Techniek: snel, veilig en schaalbaar",
          body: "Je klanten vinden je vooral op hun telefoon. We bouwen snel, veilig en mobiel-eerst, op een schaalbare basis die meegroeit met je bedrijf - van eenmanszaak tot groeiend Delfts bedrijf.",
        },
        {
          icon: "search",
          title: "Lokale SEO die Delftse klanten vindt",
          body: "We regelen het complete lokale pakket: dienst- en wijkpagina's, gestructureerde data (schema), lokale vermeldingen en een geoptimaliseerd en beheerd Google Bedrijfsprofiel. Zo word je gevonden van 'website laten maken Delft' tot je specifieke dienst in de Binnenstad of Tanthof.",
          link: lokaleSeoLink,
        },
      ],
    },
    bewijs: {
      heading: ["Bewijs uit de buurt.", "Van 2 naar 24 aanvragen."],
      body: "Voor Hovenier Eykelenboom - een vakbedrijf hier vlakbij in Den Haag - bouwden we een complete website met een lokale SEO-structuur per dienst en werkgebied. Vakwerk dat eerst nauwelijks werd gevonden, levert nu structureel aanvragen op. Dezelfde aanpak werkt net zo goed voor een Delfts bedrijf, letterlijk om de hoek.",
    },
    kostenHeading: ["Wat kost een website", "laten maken in Delft?"],
    kostenBody:
      "Wat het precies wordt hangt af van je doel, de omvang en de mate van maatwerk - van een compacte, sterke site tot een uitgebreid platform met veel dienst- en locatiepagina's. In elke website zit een lokale SEO-basis, strategie en een ontwerp dat vertrouwen wekt. Hosting en onderhoud lopen apart via een voordelig maandbedrag.",
    local: {
      eyebrow: "Om de hoek",
      heading: ["Vanuit Den Haag,", "zo bij je in Delft."],
      body: [
        "Brandlift zit in Den Haag - op zo'n tien minuten van de Delftse binnenstad. Delft is voor ons geen verre markt maar de buurstad: we kennen de wijken, de ondernemers en de manier waarop Delftse klanten online zoeken. Nodig is het zelden, maar even langskomen kan gewoon.",
        "Je werkt met een vast team en korte lijnen, direct met de mensen die je site ontwerpen en bouwen. In het Nederlands en Engels - en via professionele vertalers ook in andere talen, handig met de internationale studenten en spin-offs rond de TU Delft.",
      ],
      points: [
        "Om de hoek, sinds 2021",
        "Vast team, korte lijnen",
        "Nederlands, Engels en meer talen",
        "Direct plek, geen wachtlijst",
      ],
      portraitChip: "Den Haag · om de hoek van Delft",
      portraitAlt: "Luca Budgen, oprichter van Brandlift, dat vlakbij in Den Haag zit en websites bouwt voor bedrijven in Delft",
    },
    coverage: {
      heading: ["Actief in heel Delft.", "Van de binnenstad tot Tanthof."],
      intro:
        "We werken voor bedrijven in heel Delft en de directe omgeving - van de historische binnenstad tot de woonwijken en de bedrijventerreinen.",
      primaryLabel: "Wijken",
      primary: [
        "Binnenstad",
        "Hof van Delft",
        "Vrijenban",
        "Wippolder",
        "Voordijkshoorn",
        "Voorhof",
        "Buitenhof",
        "Tanthof",
      ],
      secondaryLabel: "En onder meer in",
      secondary: ["Delftse Hout", "Tanthof-Oost", "Tanthof-West", "Poptahof", "Indische Buurt", "Olofsbuurt"],
      nearby: ["Rijswijk", "Pijnacker", "Nootdorp", "Den Hoorn", "Schipluiden", "Den Haag"],
      mapQuery: "Delft, Nederland",
      mapTitle: "Werkgebied: Delft",
      mapSubtitle: "Websites vanuit Den Haag - om de hoek",
    },
    faqs: [
      {
        q: "Zitten jullie echt vlakbij Delft?",
        a: "Ja. Ons team zit in Den Haag, op ongeveer tien minuten van de Delftse binnenstad. Delft is voor ons de buurstad. De meeste samenwerking verloopt online en snel, maar even fysiek afspreken is zo geregeld.",
      },
      {
        q: "Wat kost een website laten maken in Delft?",
        a: "Een website begint bij ons vanaf 1.500 euro. De uiteindelijke prijs hangt af van je doel en de mate van maatwerk. In elke website zit een lokale SEO-basis, strategie en een sterk ontwerp; hosting en onderhoud lopen apart via een voordelig maandbedrag. En we werken door totdat je tevreden bent.",
        link: costGuideLink,
      },
      {
        q: "Wat valt er onder lokale SEO in Delft?",
        a: "Zo goed als alles wat nodig is om lokaal gevonden te worden: een sterke website met dienst- en wijkpagina's, gestructureerde data (schema), lokale vermeldingen en een geoptimaliseerd en beheerd Google Bedrijfsprofiel. Zo verschijn je precies wanneer een Delftse klant naar jouw dienst zoekt.",
      },
      {
        q: "Hoe lang duurt het om een website te laten maken?",
        a: "Een website staat er meestal binnen 3 tot 4 weken, afhankelijk van de omvang en hoe snel content en feedback rond zijn. In het groeigesprek koppelen we een concrete planning aan jouw project.",
      },
      {
        q: "Werken jullie ook voor Engelstalige bedrijven en TU-spin-offs in Delft?",
        a: "Ja. Rond de TU Delft zit veel internationaal talent. We werken in het Nederlands en Engels, en voor andere talen schakelen we professionele vertalers in. Je website kan meertalig, met dezelfde sterke lokale SEO-basis per taal.",
      },
    ],
    finalCta: {
      h2: "Klaar voor een website die Delftse klanten oplevert?",
      body: "Plan een gratis, vrijblijvend groeigesprek van 30 minuten. Je weet daarna precies waar je staat - met of zonder samenwerking.",
    },
  },
};
