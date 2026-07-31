/* ============================================================
   BRANDLIFT · location-page content (one object per city)
   Each object holds 100% UNIQUE, hyperlocal copy. The design is
   shared via <CityPage>; the words never are. Every page targets a
   distinct "website laten maken [stad]" keyword and self-canonicals,
   so there is no cannibalization or duplicate content between them.
   (Den Haag keeps its own bespoke page - this covers the rest.)
   ============================================================ */

import type { CitySection } from "@/components/sections/CityPage";

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
  /* Volgorde van de middensecties. Elke stad krijgt een eigen volgorde:
     zes pagina's met dezelfde blokken in dezelfde volgorde lezen als een
     sjabloon. Weglaten = de standaardvolgorde uit CityPage. */
  sectionOrder?: CitySection[];
  /* Deze drie koppen stonden hard in de gedeelde componenten en waren dus
     op alle zes de stadspagina's byte-identiek. Nu per stad. */
  carouselHeading: [string, string];
  reviewsHeading: [string, string];
  /* Startindex in de reviewlijst, zodat elke stad met andere reviews opent. */
  reviewsStartAt?: number;
  faqHeading: string;
};

/* Ankertekst met de stad erin, zodat de link beschrijft waar hij heen
   gaat in plaats van "meer over ...". Per stad anders geformuleerd. */
const seoLink = (label: string) => ({ label, href: "/diensten/lokale-seo" });
const costGuideLink = { label: "Lees wat een website kost", href: "/kennisbank/wat-kost-een-website-laten-maken" };


/* Elke stad heeft een eigen sectionOrder, eigen koppen en eigen FAQ's.
   Reden: de zes stadspagina's deelden hetzelfde skelet met alleen een
   andere stadsnaam. Vier H2's waren zelfs byte-identiek. Dat leest voor
   een zoekmachine als één sjabloon dat zes keer is uitgerold.

   TODO LUCA - lokaal bewijs. Eykelenboom is onze enige benoemde case en
   dat is een Haagse klant. Op de andere vijf steden is dat dus wel echt
   bewijs, maar geen LOKAAL bewijs. Zodra er een klant in Rotterdam,
   Eindhoven, Utrecht, Amsterdam of Delft is, hoort die hier in het
   bewijsblok van die stad. Tot die tijd benoemen we eerlijk dat het om
   een Haagse case gaat - nooit doen alsof hij uit die stad komt. */
export const cities: Record<string, CityData> = {
  /* ═══════════════════════ ROTTERDAM ═══════════════════════ */
  rotterdam: {
    slug: "website-laten-maken-rotterdam",
    city: "Rotterdam",
    updated: "2026-07-31",
    metaTitle: "Website laten maken Rotterdam - meer aanvragen",
    metaDescription:
      "Website laten maken in Rotterdam? Strategische sites met lokale SEO en conversie voor Rotterdamse bedrijven die meer aanvragen willen. Vanaf 1.500 euro.",
    heroEyebrow: "Rotterdam · Rijnmond",
    h1: "Website laten maken in Rotterdam",
    intro:
      "Rotterdam beoordeelt je op wat je oplevert, niet op wat je belooft. Online werkt dat niet anders: de klant kijkt kort, vergelijkt drie partijen en belt er één. Wij bouwen websites die in dat korte moment de doorslag geven - vindbaar per dienst en per deelgemeente, en duidelijk over wat je doet.",
    heroChips: [
      "Vanuit Den Haag, 25 minuten van de Coolsingel",
      "Lokale SEO inbegrepen",
      "Reactie binnen 1 werkdag",
      "Vanaf 1.500 euro",
    ],
    sectionOrder: ["waarom", "aanpak", "bewijs", "werkgebied", "meerwerk", "kosten", "lokaal"],
    waarom: {
      heading: ["De klant vergelijkt drie partijen.", "Jij moet er een van zijn."],
      intro:
        "In Rijnmond zit in elk vak een lange lijst aanbieders. Niet de beste wint automatisch - de best vindbare komt op de lijst, en de rest komt er niet eens op voor.",
      serpQuery: "jouw vak + Rotterdam",
      cards: [
        {
          title: "Je staat niet in het kaartje bovenaan",
          body: "Zoekt iemand in Kralingen of op Zuid, dan verschijnen er drie bedrijven met een kaartje erbij. Wie daar niet tussen staat, wordt zelden aangeklikt - hoe goed het werk daaronder ook is.",
        },
        {
          title: "Drie offertes, en jij bent de duurste",
          body: "Zonder verhaal over hoe je werkt en wat je oplevert, blijft alleen de prijs over om op te vergelijken. Dan verlies je van wie het goedkoopst is in plaats van te winnen op wat je levert.",
        },
        {
          title: "Groot werk, kleine indruk",
          body: "Je draait projecten waar opdrachtgevers jaren op teren. Staat daar een site tegenover uit 2016, dan gaat de aanvraag naar de partij die online groter oogt dan hij is.",
        },
      ],
      outro: "Op een site die op Rotterdam is gebouwd, valt dat verschil weg.",
    },
    aanpak: {
      heading: ["Geen mooie praatjes.", "Een site die werk binnenhaalt."],
      intro:
        "Vier dingen bepalen of een Rotterdamse bezoeker belt of wegklikt. We pakken ze in deze volgorde aan.",
      pillars: [
        {
          icon: "target",
          title: "Eerst de vraag, dan het ontwerp",
          body: "We beginnen bij wat je klant intikt en waar hij op afhaakt. Die twee dingen bepalen de opbouw van je site - niet andersom.",
        },
        {
          icon: "gem",
          title: "Een uitstraling die past bij de schaal van je werk",
          body: "Rotterdam wantrouwt opsmuk en herkent degelijkheid. Je site wordt strak en direct, zodat hij hetzelfde signaal afgeeft als je opgeleverde werk.",
        },
        {
          icon: "shield",
          title: "Snel op een telefoon met slecht bereik",
          body: "Je klant kijkt vanaf de bouwplaats of onderweg. Alles wordt mobiel-eerst en licht gebouwd, zodat je site het ook doet als de verbinding tegenzit.",
        },
        {
          icon: "search",
          title: "Vindbaar per dienst en per deelgemeente",
          body: "Een pagina voor elke dienst en voor de gebieden waar je echt komt. Zo koppelt Google je aan de klus én aan de buurt.",
          link: seoLink("Hoe lokale SEO in Rotterdam werkt"),
        },
      ],
    },
    bewijs: {
      heading: ["Wat dit oplevert", "voor een vakbedrijf als het jouwe."],
      body:
        "Ons duidelijkste voorbeeld is een hovenier uit Den Haag, niet uit Rotterdam - dat zeggen we er eerlijk bij. Wat overdraagbaar is, is de aanpak: een pagina per dienst, een pagina per werkgebied en een route naar contact die geen drempels opwerpt. In een markt als Rijnmond, waar de concurrentie per postcode dieper is dan in Den Haag, telt die structuur alleen maar zwaarder.",
    },
    kostenHeading: ["Wat kost een website", "laten maken in Rotterdam?"],
    kostenBody:
      "Wat jij betaalt hangt af van hoeveel diensten en gebieden je wilt afdekken. Een vakbedrijf met vier diensten en drie deelgemeenten heeft meer pagina's nodig dan een specialist met één dienst. Je krijgt een vaste prijs voordat we beginnen.",
    local: {
      eyebrow: "Dichtbij",
      heading: ["Een Haags bureau,", "thuis in Rijnmond."],
      body: [
        "We zitten in Den Haag, op een klein half uur van de Coolsingel. Dichtbij genoeg om langs te komen, en vertrouwd genoeg met de regio om te weten hoe hier wordt gezocht en besloten: snel, concreet, zonder omhaal.",
        "Je hebt één vast aanspreekpunt en praat met de mensen die je site ook echt ontwerpen en bouwen. Geen accountmanager ertussen die je project van horen zeggen kent.",
      ],
      points: [
        "25 minuten van de Coolsingel",
        "Eén vast aanspreekpunt",
        "Nederlands en Engels",
        "Geen wachtlijst",
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
    carouselHeading: ["Werk voor bedrijven", "die op uitvoering worden afgerekend."],
    reviewsHeading: ["Wat opdrachtgevers", "achteraf zeggen."],
    reviewsStartAt: 0,
    faqHeading: "Rechttoe rechtaan beantwoord.",
    faqs: [
      {
        q: "Rotterdam zit vol bureaus. Waarom een bureau uit Den Haag?",
        a: "Omdat je geen bureau om de hoek nodig hebt, maar een dat je markt begrijpt. We zitten 25 minuten van de Coolsingel, werken al sinds 2021 in Rijnmond en komen langs wanneer dat zin heeft. De rest gaat online, wat sneller werkt dan een agenda vol reistijd.",
      },
      {
        q: "In mijn vak zijn er in Rotterdam tientallen concurrenten. Helpt een site dan echt?",
        a: "Juist dan. Waar veel aanbieders zijn, is de vergelijking oppervlakkig: mensen kijken kort en kiezen uit wie ze zien. Verschijnen op de juiste zoekopdracht en meteen duidelijk maken wat je doet, is precies waar dat gevecht wordt beslist.",
      },
      {
        q: "Ik werk in de haven en voor zakelijke opdrachtgevers. Is lokale SEO dan zinvol?",
        a: "Deels. Voor zakelijke opdrachtgevers telt vooral hoe geloofwaardig en compleet je site is - die kijken langer en vergelijken grondiger. Lokale vindbaarheid is dan ondersteunend in plaats van leidend, en dat zeggen we ook als dat betekent dat je minder nodig hebt.",
      },
      {
        q: "Werken jullie ook in Schiedam, Capelle of Barendrecht?",
        a: "Ja. Veel Rotterdamse bedrijven werken toch al door heel Rijnmond, en die randgemeenten nemen we mee in je vindbaarheid als je er ook echt komt. Pagina's maken voor gebieden waar je nooit werkt, doen we niet - dat levert alleen bezoekers op die je moet teleurstellen.",
      },
      {
        q: "Hoe snel staat mijn site live?",
        a: "Meestal binnen drie tot vier weken na het eerste gesprek. Het bouwen is zelden de vertragende factor; wachten op foto's en feedback wel. Wat we van je nodig hebben, hoor je meteen in het begin.",
        link: costGuideLink,
      },
      {
        q: "Kan ik daarna zelf dingen aanpassen?",
        a: "Ja. Waar dat zinvol is bouwen we een CMS zodat je teksten, foto's en projecten zelf kunt bijwerken, en bij de oplevering laten we zien hoe dat werkt. Liever uitbesteden kan ook, via onderhoud.",
      },
    ],
    finalCta: {
      h2: "Klaar om in Rotterdam op de lijst te komen?",
      body: "Plan een gratis groeigesprek van 30 minuten. We kijken naar je vindbaarheid in Rijnmond en zeggen eerlijk wat er te winnen valt.",
    },
  },

  /* ═══════════════════════ EINDHOVEN ═══════════════════════ */
  eindhoven: {
    slug: "website-laten-maken-eindhoven",
    city: "Eindhoven",
    updated: "2026-07-31",
    metaTitle: "Website laten maken Eindhoven - meer aanvragen",
    metaDescription:
      "Website laten maken in Eindhoven? Strategische sites met lokale SEO en conversie voor Eindhovense bedrijven in de Brainport-regio. Vanaf 1.500 euro.",
    heroEyebrow: "Eindhoven · Brainport",
    h1: "Website laten maken in Eindhoven",
    intro:
      "Eindhoven bouwt sneller dan de meeste bedrijven hun vindbaarheid bijhouden. Nieuwe wijken, nieuwe bewoners, nieuwe bedrijven - allemaal mensen die jou nog niet kennen en je dus moeten kunnen vinden. Wij bouwen sites die dat opvangen, in het Nederlands en waar nodig in het Engels.",
    heroChips: [
      "Actief in de Brainport-regio",
      "Ook in het Engels",
      "Lokale SEO inbegrepen",
      "Vanaf 1.500 euro",
    ],
    sectionOrder: ["waarom", "bewijs", "aanpak", "lokaal", "meerwerk", "werkgebied", "kosten"],
    waarom: {
      heading: ["De stad groeit hard.", "Je vindbaarheid groeit zelden mee."],
      intro:
        "Meerhoven, Strijp-S, Blixembosch: hele wijken vol mensen die geen idee hebben welke vakbedrijven er in de buurt zitten. Ze zoeken het op. Wat ze dan vinden, bepaalt wie ze bellen.",
      serpQuery: "jouw vak + Eindhoven",
      cards: [
        {
          title: "Nieuwe buren die je naam nog nooit hoorden",
          body: "Mond-tot-mondreclame werkt pas als mensen elkaar kennen. In een wijk die net is opgeleverd, bestaat dat netwerk nog niet - daar wint wie online het makkelijkst te vinden is.",
        },
        {
          title: "Je legt techniek uit aan wie geen techneut is",
          body: "Warmtepompen, laadpalen, domotica: je klant weet wat hij wil bereiken, niet welk product dat doet. Een site die in zijn woorden uitlegt wat je oplost, wint van een site vol specificaties.",
        },
        {
          title: "De helft van je markt leest Engels",
          body: "Rond de campussen en kennisinstellingen wonen tienduizenden internationale werknemers met koopkracht en een woning die onderhoud vraagt. Alleen Nederlands sluit dat deel stilzwijgend uit.",
        },
      ],
      outro: "Groei in de stad wordt pas jouw groei als je gevonden wordt.",
    },
    aanpak: {
      heading: ["Techniek begrijpelijk maken.", "Daar begint de aanvraag."],
      intro:
        "In deze regio is vakinhoud zelden het probleem. De vertaalslag naar de klant wel. Zo pakken we dat aan.",
      pillars: [
        {
          icon: "target",
          title: "Beginnen bij wat je klant intikt",
          body: "We zoeken uit met welke woorden mensen jouw oplossing zoeken - meestal het probleem, niet de productnaam. Daar bouwen we de structuur omheen.",
        },
        {
          icon: "gem",
          title: "Vakwerk zonder jargon",
          body: "Je site legt uit wat iets oplevert voordat hij uitlegt hoe het werkt. Wie de techniek wél wil, kan doorlezen - wie alleen een prijs zoekt, hoeft dat niet.",
        },
        {
          icon: "search",
          title: "Ook in het Engels vindbaar",
          body: "Waar het loont, zetten we een Engelse versie op die net zo goed is opgebouwd als de Nederlandse. Geen machinevertaling, maar echte teksten.",
          link: seoLink("Zo pakken we lokale SEO in Eindhoven aan"),
        },
        {
          icon: "shield",
          title: "Gebouwd om mee te groeien",
          body: "Kom je er over een jaar een dienst of een werkgebied bij, dan schuif je die erin zonder dat de site opnieuw op de schop moet.",
        },
      ],
    },
    bewijs: {
      heading: ["Bewijs uit Den Haag,", "principe geldt ook hier."],
      body:
        "Onze enige benoemde case is een Haagse hovenier, en we doen niet alsof hij uit Eindhoven komt. Waar het om gaat is wat de aanpak deed: van een site die niets opleverde naar een structuur die per dienst en per gebied gevonden wordt. In Eindhoven speelt dat in een andere markt - meer techniek, meer nieuwbouw, meer Engels - maar het mechanisme erachter is hetzelfde.",
    },
    kostenHeading: ["Wat kost een website", "laten maken in Eindhoven?"],
    kostenBody:
      "De grootste kostenpost is zelden het ontwerp, maar het aantal pagina's dat je nodig hebt. Wil je ook een Engelse versie, dan komt daar vertaalwerk bij. Je hoort vooraf wat het wordt, inclusief wat je later nog kunt toevoegen.",
    local: {
      eyebrow: "Op afstand, toch dichtbij",
      heading: ["Ver weg op de kaart.", "Dichtbij in de praktijk."],
      body: [
        "We zitten in Den Haag en dat is geen belemmering gebleken: het meeste werk gaat online en dat gaat sneller dan heen en weer rijden. Wat wel telt, is dat we snappen hoe deze regio in elkaar zit - techniek, design en ondernemerschap door elkaar heen.",
        "Voor de internationale kant van de markt werken we in het Nederlands en Engels, en voor andere talen schakelen we professionele vertalers in. Geen machinevertaling waar je later op afgerekend wordt.",
      ],
      points: [
        "Volledig online samenwerken",
        "Nederlands en Engels",
        "Vertalers voor andere talen",
        "Geen wachtlijst",
      ],
      portraitChip: "Den Haag · actief in Eindhoven",
      portraitAlt: "Luca Budgen, oprichter van Brandlift, dat websites bouwt voor bedrijven in Eindhoven",
    },
    coverage: {
      heading: ["Actief in heel Eindhoven.", "Van Strijp tot Woensel."],
      intro:
        "We werken voor bedrijven in de hele stad en de Brainport-regio - van het centrum en de campussen tot de buitenwijken en de omliggende gemeenten.",
      primaryLabel: "Stadsdelen",
      primary: ["Centrum", "Strijp", "Woensel-Noord", "Woensel-Zuid", "Tongelre", "Stratum", "Gestel"],
      secondaryLabel: "En onder meer in de wijken",
      secondary: ["Strijp-S", "Meerhoven", "Blixembosch", "Vaartbroek", "Lakerlopen", "Tivoli", "Genderdal"],
      nearby: ["Veldhoven", "Best", "Geldrop", "Nuenen", "Son en Breugel", "Waalre", "Helmond"],
      mapQuery: "Eindhoven, Nederland",
      mapTitle: "Werkgebied: Eindhoven",
      mapSubtitle: "Websites vanuit Den Haag, voor heel Brainport",
    },
    carouselHeading: ["Eerder werk voor bedrijven", "die iets uit te leggen hadden."],
    reviewsHeading: ["Acht klanten,", "acht keer vijf sterren."],
    reviewsStartAt: 3,
    faqHeading: "Kort, concreet, zonder omhaal.",
    faqs: [
      {
        q: "Hebben jullie een Engelstalige website voor ons?",
        a: "Ja. We schrijven zelf in het Nederlands en Engels, en voor andere talen schakelen we professionele vertalers in. Elke taalversie krijgt een eigen, kloppende structuur - niet één site met een vertaalknop erop.",
      },
      {
        q: "Wij zitten in een technische niche. Snappen jullie waar we het over hebben?",
        a: "Genoeg om de juiste vragen te stellen, en we vragen door tot het klopt. Het echte werk is niet dat wij techneut worden, maar dat jouw klant snapt wat je voor hem oplost. Jij controleert de teksten voordat er iets live gaat.",
      },
      {
        q: "Onze markt is de hele Brainport-regio, niet alleen Eindhoven. Kan dat?",
        a: "Ja, en dat is vaak verstandig. Veldhoven, Best, Geldrop en Helmond zijn aparte zoekmarkten met eigen concurrentie. Werk je daar echt, dan bouwen we ze mee op in je vindbaarheid.",
      },
      {
        q: "Werken jullie op afstand, of komen jullie langs?",
        a: "Grotendeels op afstand, en dat bevalt beide kanten goed: geen reistijd, sneller schakelen. Is er een goede reden om langs te komen, dan doen we dat - maar we rekenen het niet als vanzelfsprekend in.",
      },
      {
        q: "Wat kost het en waar hangt dat vanaf?",
        a: "Een website begint bij 1.500 euro. Wat jij betaalt hangt vooral af van het aantal diensten en gebieden dat je wilt afdekken en of er een Engelse versie bij komt. Je krijgt een vaste prijs voordat we starten.",
        link: costGuideLink,
      },
      {
        q: "Kunnen jullie ook onze bestaande site verbeteren?",
        a: "Soms. Staat de basis technisch redelijk, dan bouwen we daarin verder. Is hij zo verouderd dat elke euro die je erin stopt verloren gaat, dan zeggen we dat eerlijk en beginnen we liever opnieuw.",
      },
    ],
    finalCta: {
      h2: "Klaar om mee te groeien met Eindhoven?",
      body: "Plan een gratis groeigesprek van 30 minuten. We kijken hoe je nu gevonden wordt en wat er in deze regio te halen valt.",
    },
  },

  /* ═══════════════════════ UTRECHT ═══════════════════════ */
  utrecht: {
    slug: "website-laten-maken-utrecht",
    city: "Utrecht",
    updated: "2026-07-31",
    metaTitle: "Website laten maken Utrecht - meer aanvragen",
    metaDescription:
      "Website laten maken in Utrecht? Strategische sites met lokale SEO en conversie voor Utrechtse bedrijven die meer aanvragen willen. Vanaf 1.500 euro.",
    heroEyebrow: "Utrecht · Midden-Nederland",
    h1: "Website laten maken in Utrecht",
    intro:
      "Utrecht ligt centraal, en dat is precies het probleem: iedereen kan hier werken, dus iedereen doet het. Van zzp'ers tot landelijke ketens die de stad als uitvalsbasis gebruiken. Wij bouwen sites die duidelijk maken dat jij hier echt zit en dit gebied echt kent.",
    heroChips: [
      "Actief in Midden-Nederland",
      "Lokale SEO inbegrepen",
      "Reactie binnen 1 werkdag",
      "Vanaf 1.500 euro",
    ],
    sectionOrder: ["waarom", "aanpak", "lokaal", "bewijs", "werkgebied", "meerwerk", "kosten"],
    waarom: {
      heading: ["Centraal in het land.", "Niet vanzelf in beeld."],
      intro:
        "De ligging die je klanten oplevert, levert ook je concurrentie op. In Utrecht strijd je niet alleen met de buurman, maar met partijen uit Amersfoort, Nieuwegein en Amsterdam die hier net zo makkelijk komen.",
      serpQuery: "jouw vak + Utrecht",
      cards: [
        {
          title: "Landelijke partijen bieden mee op jouw klus",
          body: "Doordat alles vanuit Utrecht bereikbaar is, verschijnen er in de zoekresultaten bedrijven van ver buiten de stad. Wie niet laat zien dat hij hier zit, verliest zijn thuisvoordeel.",
        },
        {
          title: "Binnenstad en Leidsche Rijn zijn twee markten",
          body: "Een pand uit 1650 aan de gracht vraagt iets heel anders dan nieuwbouw in Vleuten. Eén pagina die beide wil bedienen, overtuigt in geen van beide gevallen.",
        },
        {
          title: "Je klant vergelijkt langer dan je denkt",
          body: "Utrechtse opdrachtgevers oriënteren zich grondig en komen terug voordat ze bellen. Je site moet die tweede en derde blik doorstaan, niet alleen de eerste.",
        },
      ],
      outro: "Wie laat zien dat hij hier hoort, wint van wie hier toevallig ook komt.",
    },
    aanpak: {
      heading: ["Laten zien dat je", "hier daadwerkelijk thuis bent."],
      intro:
        "Vier keuzes maken in Utrecht het verschil tussen een site die meedoet en een die opvalt.",
      pillars: [
        {
          icon: "search",
          title: "Per wijk, niet per stad",
          body: "Wittevrouwen, Lombok, Leidsche Rijn en Overvecht zoeken anders en vragen ander werk. We bouwen die verschillen in plaats van ze weg te middelen.",
          link: seoLink("Lokale SEO voor Utrechtse bedrijven"),
        },
        {
          icon: "target",
          title: "Kiezen wat je níet doet",
          body: "In een drukke markt win je door specifiek te zijn. We scherpen aan waar je in uitblinkt en laten de rest bewust weg - dat levert betere aanvragen op.",
        },
        {
          icon: "gem",
          title: "Gebouwd voor de tweede blik",
          body: "Omdat mensen hier terugkomen voordat ze beslissen, zetten we het bewijs vooraan: projecten, reviews en duidelijke uitleg over hoe je werkt.",
        },
        {
          icon: "shield",
          title: "Techniek die niet in de weg zit",
          body: "Snel, veilig en mobiel-eerst. Onzichtbaar als het goed is, en meteen merkbaar als het dat niet is.",
        },
      ],
    },
    bewijs: {
      heading: ["Eén case,", "en wat je eruit mee kunt nemen."],
      body:
        "De case hieronder komt uit Den Haag, niet uit Utrecht - dat vermelden we liever dan het weg te laten. Wat er wél overdraagbaar aan is: het probleem was niet de kwaliteit van het werk, maar dat niemand het vond. Die diagnose stellen we in Utrecht net zo vaak, alleen is de concurrentie hier breder omdat partijen van buiten de stad meedingen.",
    },
    kostenHeading: ["Wat kost een website", "laten maken in Utrecht?"],
    kostenBody:
      "Utrechtse bedrijven kiezen vaker voor meer diepgang: aparte pagina's per wijk of per type pand, omdat de markt zo verschillend is. Dat kost meer pagina's en dus meer werk. Wat het bij jou wordt, hoor je voordat we beginnen.",
    local: {
      eyebrow: "Midden in het land",
      heading: ["Vanuit Den Haag,", "met Utrecht op een uur."],
      body: [
        "We werken door heel Nederland en Utrecht ligt daarbij letterlijk in het midden. De stad groeit hard en de ondernemers zijn scherp - dat merk je aan hoe goed de concurrentie het hier online al doet.",
        "Bij ons praat je met de mensen die het werk doen. Eén aanspreekpunt, geen tussenlagen, en eerlijk advies als blijkt dat je minder nodig hebt dan je dacht.",
      ],
      points: [
        "Werkzaam in heel Midden-Nederland",
        "Eén aanspreekpunt",
        "Eerlijk advies, ook als het nee is",
        "Geen wachtlijst",
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
    carouselHeading: ["Projecten voor ondernemers", "die zich wilden onderscheiden."],
    reviewsHeading: ["Woord voor woord", "overgenomen van Google."],
    reviewsStartAt: 5,
    faqHeading: "Helder antwoord, geen kleine lettertjes.",
    faqs: [
      {
        q: "Ik concurreer in Utrecht met landelijke partijen. Kan ik daar tegenop?",
        a: "Vaak beter dan je denkt. Landelijke aanbieders scoren zelden goed op wijkniveau, omdat ze één algemene pagina hebben voor het hele land. Daar ligt je opening: laten zien dat je hier zit, hier werkt en deze panden kent.",
      },
      {
        q: "Werken jullie ook in Leidsche Rijn en Vleuten, of alleen de oude stad?",
        a: "Allebei, en we behandelen ze bewust apart. Nieuwbouw in het westen trekt ander werk aan dan de binnenstad, en mensen zoeken er ook anders. Eén pagina voor heel Utrecht laat dat verschil liggen.",
      },
      {
        q: "Mijn klanten zijn zakelijk, geen particulieren. Verandert dat de aanpak?",
        a: "Ja. Zakelijke opdrachtgevers vergelijken langer en willen zien hoe je werkt, wie er achter het bedrijf zit en wat je eerder hebt opgeleverd. De nadruk verschuift dan van snel contact naar geloofwaardigheid opbouwen.",
      },
      {
        q: "Hoe lang duurt het en wat moet ik zelf doen?",
        a: "Meestal drie tot vier weken. Van jou vragen we één gesprek, beeldmateriaal, één feedbackronde en een akkoord voor de livegang. Het schrijven en bouwen nemen wij volledig over.",
      },
      {
        q: "Wat kost het?",
        a: "Vanaf 1.500 euro voor een eenvoudige site. Wil je per wijk of per type klus aparte pagina's, dan loopt dat op omdat er meer geschreven en gebouwd moet worden. Je krijgt vooraf een vaste prijs.",
        link: costGuideLink,
      },
      {
        q: "Zit ik na de livegang ergens aan vast?",
        a: "Nee. De site is van jou en er is geen verplichte doorloop. Hosting, onderhoud en doorlopende SEO zijn losse keuzes die je maakt als je ze wilt.",
      },
    ],
    finalCta: {
      h2: "Klaar om in Utrecht op te vallen?",
      body: "Plan een gratis groeigesprek van 30 minuten. We kijken wie er nu boven je staat en wat daaraan te doen is.",
    },
  },

  /* ═══════════════════════ AMSTERDAM ═══════════════════════ */
  amsterdam: {
    slug: "website-laten-maken-amsterdam",
    city: "Amsterdam",
    updated: "2026-07-31",
    metaTitle: "Website laten maken Amsterdam - meer aanvragen",
    metaDescription:
      "Website laten maken in Amsterdam? Strategische sites met lokale SEO en conversie voor Amsterdamse bedrijven die meer aanvragen willen. Vanaf 1.500 euro.",
    heroEyebrow: "Amsterdam · Noord-Holland",
    h1: "Website laten maken in Amsterdam",
    intro:
      "In Amsterdam is bijna elk vak overbezet en is elke klant al een keer teleurgesteld. Dat maakt vertrouwen het schaarse goed, niet zichtbaarheid alleen. Wij bouwen sites die binnen een paar seconden laten zien dat je weet wat je doet - en die daarna het bewijs leveren.",
    heroChips: [
      "Actief in de hoofdstad",
      "Ook in het Engels",
      "Lokale SEO inbegrepen",
      "Vanaf 1.500 euro",
    ],
    sectionOrder: ["waarom", "lokaal", "aanpak", "bewijs", "meerwerk", "kosten", "werkgebied"],
    waarom: {
      heading: ["Zichtbaar zijn is stap een.", "Geloofwaardig zijn wint de klus."],
      intro:
        "Amsterdammers hebben keuze in overvloed en weinig geduld. Ze scannen, twijfelen en kiezen wie het meest betrouwbaar oogt - vaak binnen een minuut.",
      serpQuery: "jouw vak + Amsterdam",
      cards: [
        {
          title: "Iedereen belooft hetzelfde",
          body: "Snel, betrouwbaar, vakkundig: dat zegt elke concurrent ook. Zonder concreet bewijs verdwijn je in een rij pagina's die niet van elkaar te onderscheiden zijn.",
        },
        {
          title: "Je klant is al eens teleurgesteld",
          body: "In een stad met veel aanbieders is de kans op een slechte ervaring groot. Nieuwe klanten zoeken daarom eerst naar redenen om je níet te vertrouwen. Die moet je wegnemen.",
        },
        {
          title: "Een kwart van je markt spreekt geen Nederlands",
          body: "Amsterdam is internationaal en dat deel van de markt betaalt vaak het beste. Een site die alleen Nederlands spreekt, sluit ze zonder het te merken buiten.",
        },
      ],
      outro: "Vertrouwen is hier je snelste manier om op te vallen.",
    },
    aanpak: {
      heading: ["Bewijs vooraan.", "Beloftes achteraan."],
      intro:
        "In de drukste markt van het land werkt terughoudendheid beter dan grote woorden. Zo bouwen we dat op.",
      pillars: [
        {
          icon: "gem",
          title: "Laten zien in plaats van beweren",
          body: "Echte foto's van echt werk, echte reviews en duidelijke uitleg over je proces. Alles wat een bezoeker zelf kan controleren, weegt zwaarder dan wat je over jezelf zegt.",
        },
        {
          icon: "target",
          title: "Scherp kiezen voor wie je er bent",
          body: "In Amsterdam is de generalist kansloos tegen de specialist. We bepalen welk werk je het liefst doet en bouwen de site daar volledig omheen.",
        },
        {
          icon: "search",
          title: "Per stadsdeel gevonden worden",
          body: "De Pijp, IJburg en Noord zijn losse markten met eigen prijzen en eigen concurrentie. Die dek je niet af met één pagina over Amsterdam.",
          link: seoLink("Lokale vindbaarheid per Amsterdams stadsdeel"),
        },
        {
          icon: "shield",
          title: "Tweetalig waar het loont",
          body: "Een Engelse versie die net zo goed is opgebouwd als de Nederlandse, zodat internationale klanten je serieus nemen in plaats van afhaken.",
        },
      ],
    },
    bewijs: {
      heading: ["Onze case komt", "niet uit Amsterdam."],
      body:
        "Dat zeggen we er liever bij dan dat we het verzwijgen: het voorbeeld hieronder is een hovenier uit Den Haag. Wat het laat zien, is wat er gebeurt als goed werk eindelijk vindbaar en geloofwaardig wordt gepresenteerd. In Amsterdam is dat moeilijker - meer aanbieders, kritischer klanten - maar het is precies daarom dat de basis op orde brengen hier het meeste oplevert.",
    },
    kostenHeading: ["Wat kost een website", "laten maken in Amsterdam?"],
    kostenBody:
      "Wij rekenen geen Amsterdamse tarieven: onze prijs hangt af van wat er gebouwd moet worden, niet van je postcode. Wil je een Engelse versie of aparte pagina's per stadsdeel, dan zit daar het verschil.",
    local: {
      eyebrow: "Boven het lawaai uit",
      heading: ["Geen Amsterdams bureau.", "Wel Amsterdamse tarieven vermeden."],
      body: [
        "We zitten in Den Haag en dat scheelt je geld: je betaalt voor het werk, niet voor een grachtenpand. De markt kennen we goed genoeg om te weten dat een gemiddelde site hier niet volstaat.",
        "Je werkt met één vast aanspreekpunt en korte lijnen. In het Nederlands en Engels, en via professionele vertalers ook in andere talen - in deze stad vaak geen luxe maar noodzaak.",
      ],
      points: [
        "Geen grote-stad-toeslag",
        "Eén vast aanspreekpunt",
        "Nederlands en Engels",
        "Geen wachtlijst",
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
    carouselHeading: ["Eerder werk voor bedrijven", "die vertrouwen moesten winnen."],
    reviewsHeading: ["Niet door ons geschreven.", "Wel door ons verdiend."],
    reviewsStartAt: 2,
    faqHeading: "Zonder omweg beantwoord.",
    faqs: [
      {
        q: "Waarom zou ik een bureau buiten Amsterdam nemen?",
        a: "Omdat je voor hetzelfde werk in de stad vaak meer betaalt zonder dat je er iets voor terugkrijgt. Wij zitten in Den Haag, werken online en komen langs als het zin heeft. Wat je bespaart, kun je in meer pagina's of betere foto's steken.",
      },
      {
        q: "Mijn concurrenten hebben honderden reviews. Hoe kom ik daar ooit tussen?",
        a: "Niet door te doen alsof je die ook hebt. Wel door te winnen op specifieke zoekopdrachten waar zij te algemeen voor zijn, en door bij de reviews die je wél hebt te laten zien dat ze echt zijn. Reviews verzamelen is daarnaast iets wat we je leren structureel te doen.",
      },
      {
        q: "Hebben we een Engelstalige site nodig?",
        a: "Als een deel van je klanten internationaal is, bijna zeker. Amsterdam heeft een grote groep bewoners die geen Nederlands leest en wel goed betaalt. We bouwen die versie volwaardig op, niet als vertaalknop.",
      },
      {
        q: "Werken jullie ook in Amstelveen, Diemen of Haarlem?",
        a: "Ja. Veel Amsterdamse bedrijven werken toch al in de hele regio. Die gemeenten nemen we mee als je er daadwerkelijk komt - anders trek je bezoekers die je moet afwijzen.",
      },
      {
        q: "Wat kost het, en rekenen jullie meer voor Amsterdam?",
        a: "Nee. Een website begint bij 1.500 euro, ongeacht waar je zit. Wat de prijs bepaalt is de omvang: aantal diensten, aantal gebieden en of er een tweede taal bij komt.",
        link: costGuideLink,
      },
      {
        q: "Hoe snel kunnen jullie beginnen?",
        a: "Er is geen wachtlijst, dus meestal op korte termijn. In het groeigesprek hoor je meteen wanneer we kunnen starten en hoe lang het gaat duren.",
      },
    ],
    finalCta: {
      h2: "Klaar om in Amsterdam vertrouwd over te komen?",
      body: "Plan een gratis groeigesprek van 30 minuten. We kijken waar je nu staat tegenover je concurrenten en wat er te winnen valt.",
    },
  },

  /* ═══════════════════════ DELFT ═══════════════════════ */
  delft: {
    slug: "website-laten-maken-delft",
    city: "Delft",
    updated: "2026-07-31",
    metaTitle: "Website laten maken Delft - meer aanvragen",
    metaDescription:
      "Website laten maken in Delft? Strategische sites met lokale SEO en conversie voor Delftse bedrijven die meer aanvragen willen. Vanaf 1.500 euro.",
    heroEyebrow: "Delft · om de hoek",
    h1: "Website laten maken in Delft",
    intro:
      "Delft is klein genoeg dat iedereen elkaar kent en groot genoeg dat je alsnog gemist wordt. Wie hier zoekt, krijgt een korte lijst te zien - en op een korte lijst staan of niet staan is het hele verschil. Wij zitten tien minuten verderop en bouwen sites die je op die lijst zetten.",
    heroChips: [
      "10 minuten van de binnenstad",
      "Lokale SEO inbegrepen",
      "Reactie binnen 1 werkdag",
      "Vanaf 1.500 euro",
    ],
    sectionOrder: ["waarom", "aanpak", "werkgebied", "bewijs", "lokaal", "meerwerk", "kosten"],
    waarom: {
      heading: ["Kleine stad.", "Juist daarom telt elke vermelding."],
      intro:
        "In een stad van deze omvang zijn er per vak maar een handvol serieuze aanbieders. Dat is goed nieuws: je hoeft niet honderden partijen te verslaan, alleen zichtbaar te zijn naast de vijf die er al staan.",
      serpQuery: "jouw vak + Delft",
      cards: [
        {
          title: "De lijst is kort - sta erop of niet",
          body: "Zoekt iemand hier naar jouw vak, dan ziet hij een handvol bedrijven. Er niet tussen staan betekent niet dat je tweede keus bent, maar dat je helemaal niet meedoet.",
        },
        {
          title: "Monumenten vragen een ander verhaal",
          body: "De binnenstad zit vol panden met beperkingen en eisen. Kun je laten zien dat je daar ervaring mee hebt, dan hoef je nauwelijks meer te concurreren op prijs.",
        },
        {
          title: "Studenten, starters en spin-offs",
          body: "Rond de TU zit een stroom internationale bewoners en jonge bedrijven met een eigen ritme, eigen budget en vaak een voorkeur voor Engels. Een markt die makkelijk over het hoofd wordt gezien.",
        },
      ],
      outro: "Zichtbaar zijn is hier haalbaarder dan waar dan ook - als je het doet.",
    },
    aanpak: {
      heading: ["Zichtbaar worden", "in een overzichtelijke markt."],
      intro:
        "Delft vraagt geen zwaar geschut. Het vraagt dat de basis klopt en dat je specifiek bent.",
      pillars: [
        {
          icon: "search",
          title: "De basis compleet, niet half",
          body: "Bedrijfsprofiel, vermeldingen, schema en een pagina per dienst. In een kleine markt is de complete basis vaak al genoeg om bovenaan te staan.",
          link: seoLink("Wat lokale SEO in Delft inhoudt"),
        },
        {
          icon: "target",
          title: "Uitblinken in wat hier speelt",
          body: "Monumentaal werk, verduurzaming, verhuurpanden: benoem waar je in thuis bent. Specifiek zijn levert hier sneller een klus op dan breed zijn.",
        },
        {
          icon: "gem",
          title: "Een uitstraling die past bij de stad",
          body: "Delft is precies en een tikje eigenwijs. Je site wordt verzorgd en rustig, zonder de opsmuk die hier eerder wantrouwen wekt dan indruk maakt.",
        },
        {
          icon: "shield",
          title: "Klaar voor de regio eromheen",
          body: "Rijswijk, Pijnacker, Nootdorp en Den Haag liggen om de hoek. De site wordt zo opgezet dat je die gebieden erbij kunt pakken wanneer je wilt.",
        },
      ],
    },
    bewijs: {
      heading: ["Een buurstad verderop,", "dezelfde aanpak."],
      body:
        "De case hieronder is een hovenier uit Den Haag - tien minuten van Delft, maar het blijft een andere stad en dat vermelden we. Interessanter is de gelijkenis: ook daar was het werk goed en de vindbaarheid niet. In Delft is die stap kleiner te zetten, simpelweg omdat er per vak minder partijen om dezelfde plek strijden.",
    },
    kostenHeading: ["Wat kost een website", "laten maken in Delft?"],
    kostenBody:
      "Delftse bedrijven hebben vaak genoeg aan een compacte site: een paar diensten, een helder verhaal en een goede lokale basis. Dat houdt de investering laag. Wil je later de regio erbij, dan bouwen we dat erop.",
    local: {
      eyebrow: "Om de hoek",
      heading: ["Tien minuten verderop.", "Geen ver bureau."],
      body: [
        "Vanuit Den Haag ben je bij ons zo in de Delftse binnenstad. Delft is voor ons geen afzetgebied op een kaart maar de buurstad: we kennen de wijken, de panden en de ondernemers die er zitten. Langskomen kan gewoon, ook al is het zelden nodig.",
        "Rond de TU is Engels eerder regel dan uitzondering. We werken in het Nederlands en Engels, en schakelen professionele vertalers in als er meer nodig is.",
      ],
      points: [
        "Tien minuten rijden",
        "Bekend met de binnenstad",
        "Nederlands en Engels",
        "Geen wachtlijst",
      ],
      portraitChip: "Den Haag · om de hoek van Delft",
      portraitAlt:
        "Luca Budgen, oprichter van Brandlift, dat vlakbij in Den Haag zit en websites bouwt voor bedrijven in Delft",
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
    carouselHeading: ["Werk voor bedrijven", "met een vak en een verhaal."],
    reviewsHeading: ["Echte klanten,", "eigen woorden."],
    reviewsStartAt: 6,
    faqHeading: "Direct antwoord op wat je wilt weten.",
    faqs: [
      {
        q: "Delft is een kleine markt. Is een goede website dan wel de moeite?",
        a: "Juist wel, en het is er goedkoper dan in een grote stad. Omdat er per vak maar een handvol aanbieders is, hoef je niet honderden partijen te verslaan. Een complete basis brengt je hier vaak al bovenaan, terwijl datzelfde in Rotterdam veel meer werk kost.",
      },
      {
        q: "Ik werk vooral aan monumentale panden in de binnenstad. Kunnen jullie dat laten zien?",
        a: "Ja, en dat is precies het soort specialisme dat je moet uitlichten. Ervaring met beperkingen, vergunningen en oude constructies is een reden om jou te bellen in plaats van de goedkoopste. We bouwen daar een eigen pagina voor.",
      },
      {
        q: "Veel van mijn klanten zijn studenten of internationaal. Moet mijn site Engels zijn?",
        a: "Als dat een serieus deel van je omzet is, loont het zeker. Rond de TU wordt veel in het Engels gezocht. We kunnen een volwaardige Engelse versie opzetten, of alleen de pagina's waar het echt om gaat.",
      },
      {
        q: "Werken jullie ook in Rijswijk, Pijnacker of Den Hoorn?",
        a: "Ja. Voor de meeste Delftse bedrijven ligt daar een flink deel van het werk. We nemen die plaatsen mee in je vindbaarheid zodra je er ook echt komt.",
      },
      {
        q: "Komen jullie langs?",
        a: "Dat kan gemakkelijk, we zitten tien minuten verderop. In de praktijk is één gesprek meestal genoeg en gaat de rest online, omdat dat voor allebei sneller werkt.",
      },
      {
        q: "Wat kost het?",
        a: "Vanaf 1.500 euro. Voor veel Delftse bedrijven is een compacte site met een sterke lokale basis genoeg, wat de investering beperkt houdt. Je krijgt vooraf een vaste prijs.",
        link: costGuideLink,
      },
    ],
    finalCta: {
      h2: "Klaar om in Delft op de lijst te staan?",
      body: "Plan een gratis groeigesprek van 30 minuten. We kijken wie er nu bovenaan staat en wat er nodig is om daar te komen.",
    },
  },
};
