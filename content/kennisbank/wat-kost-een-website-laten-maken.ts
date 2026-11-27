import type { Artikel } from "@/lib/kennisbank/types";

/* ============================================================
   Kostengids, vernieuwd (blogpipeline artikel #1, 27 nov 2026).
   Vervangt de losse pagina app/kennisbank/wat-kost-een-website-laten-maken
   op dezelfde URL.

   Bronnen per claim:
   - prijsbanden en meerprijzen: lib/calculator.ts (TYPE_OPTIONS,
     EXTRA_OPTIONS, BEELD_NODIG), zodat gids en calculator hetzelfde zeggen
   - wat altijd inbegrepen is: calcPrice().included in lib/calculator.ts;
     3-4 weken: geheugen brandlift-company-facts
   - eerste 19 Google-resultaten: vault systeem/blog/data/serp-kosten-2026-11-27.json
     (DataForSEO, vanuit Den Haag, 27 nov 2026); concurrenten bewust zonder naam
   - vaste prijs zonder nacalculatie, garantie binnen de offerte, eigendom
     na betaling, hosting als losse opzegbare dienst: app/algemene-voorwaarden
   - marktbedragen per maand (€30-€100 hosting, abonnement vanaf €99) en de
     laagste websiteprijzen (vanaf €500/€595): dezelfde SERP-meting
   - 2 -> 24 aanvragen: Eykelenboom, de enige toegestane resultaatclaim
     (Luca 27 nov); bevestigd door Luca 5 sep (brandlift-company-facts)
   - zoekvragen voor de FAQ: 'Mensen vragen ook' bij "website laten maken
     kosten" (kansen-2026-11-27.json) en Search Console-zoekopdrachten
   Bewust niet: een eigen maandbedrag voor hosting (geen vaste bron, besluit Luca),
   of teksten standaard in de bouwprijs zitten (geen bron, besluit Luca),
   een oprichtingsjaar (klopt niet in oudere teksten), aantallen projecten.
   ============================================================ */

export const kostengids: Artikel = {
  slug: "wat-kost-een-website-laten-maken",
  titel: "Wat kost een website laten maken in 2026?",
  metaTitle: "Wat kost een website laten maken in 2026?",
  metaDescription:
    "Een website laten maken kost meestal €1.500 tot €8.000 voor de bouw. Per type uitgelegd, met de meerprijzen en waarom offertes zo ver uiteenlopen.",
  lead:
    "Een eerlijk antwoord in bedragen, per type website. Plus wat de prijs omhoog duwt, wat er daarna nog komt, en waarom offertes zo ver uit elkaar liggen.",
  tag: "Kosten",
  zoekterm: "website laten maken kosten",
  gepubliceerd: "2026-07-13",
  bijgewerkt: "2026-11-27",
  concept: true,
  blokken: [
    {
      type: "antwoord",
      tekst:
        "Een website laten maken kost in Nederland meestal **€1.500 tot €8.000** voor de bouw. Een eenvoudige site zit onderaan die bandbreedte, een site voor een vakbedrijf die per dienst en plaats gevonden moet worden zit rond **€2.000 tot €3.500**, en volledig maatwerk begint bij **€5.000**. Hosting en onderhoud zijn een apart maandbedrag, als je die afneemt.",
    },

    { type: "kop", id: "per-type", tekst: "Wat kost welk type website?" },
    {
      type: "alinea",
      tekst:
        "Het type site bepaalt het startpunt. Dit zijn de bandbreedtes die wij hanteren voor de eenmalige bouw van een [website op maat](/diensten/website-laten-maken). Het zijn dezelfde bedragen als in onze [kostencalculator](/website-kosten-calculator), dus wat je hier leest en wat je daar uitrekent, sluit op elkaar aan.",
    },
    {
      type: "tabel",
      kop: ["Type website", "Bouwprijs", "Voor wie"],
      rijen: [
        ["Eenvoudige website", "€1.500 - €2.500", "Een compacte site die je bedrijf sterk neerzet, voor zzp'ers en starters"],
        ["Website voor een vakbedrijf", "€2.000 - €3.500", "Dienst- en werkgebiedpagina's die per klus en per plaats gevonden worden"],
        ["Webshop", "€4.000 - €7.000", "Online verkopen, met betalingen erin"],
        ["Maatwerk website", "€5.000 - €8.000+", "Complexe wensen, koppelingen of een sterke merkambitie"],
      ],
      bron: "Bron: de bandbreedtes van de Brandlift-kostencalculator. Indicaties voor de eenmalige bouw, exclusief btw.",
    },

    { type: "kop", id: "waarom-verschillen", tekst: "Waarom liggen offertes zo ver uit elkaar?" },
    {
      type: "alinea",
      tekst:
        "Wie op \"website laten maken kosten\" zoekt, krijgt bedragen te zien die niets met elkaar te maken lijken te hebben. Dat komt niet doordat de ene aanbieder eerlijk is en de andere niet. Onder het woord \"website\" worden heel verschillende producten verkocht: een ingevulde template, een site met teksten en vindbaarheid, of een systeem met koppelingen.",
    },
    {
      type: "bewijs",
      label: "Zelf gemeten",
      titel: "Van €500 tot ruim €100.000, op de eerste twee pagina's van Google",
      tekst:
        "We legden op 27 november 2026 de eerste 19 resultaten vast voor \"website laten maken kosten\", gezocht vanuit Den Haag: de eerste twee pagina's van Google. In de titels en omschrijvingen die Google toont, staan websiteprijzen van **€500** tot **ruim €100.000**. Wie alleen die getallen naast elkaar legt, kan er niets mee. Pas als je weet wát er voor dat bedrag gebouwd wordt, wordt een prijs vergelijkbaar.",
      bron: "Bron: Google-resultaten voor \"website laten maken kosten\", de eerste 19 resultaten, vanuit Den Haag, 27 november 2026 (via DataForSEO). Aanbieders bewust niet bij naam genoemd.",
    },
    {
      type: "tabel",
      kop: ["Positie in Google", "Genoemd bedrag in het zoekresultaat"],
      rijen: [
        ["1", "vanaf €1.495"],
        ["3", "€3.000 tot ruim €100.000"],
        ["6", "€500 tot €2.000, of €2.000 tot €5.000"],
        ["7", "€850 tot €2.500 eenmalig, of een abonnement vanaf €99 per maand"],
        ["8", "vanaf €595, of vanaf €1.495"],
        ["9", "€500 tot €10.000"],
        ["11", "€500 tot €5.000"],
        ["12", "enkele honderden tot tienduizenden euro's"],
        ["13", "€1.500 tot €3.000 voor een compacte site"],
        ["16", "€500 tot €2.500 voor een eenvoudige site"],
        ["17", "vanaf €1.495"],
        ["18", "€3.000 tot €12.000"],
        ["19", "een paar honderd euro tot een paar ton"],
      ],
      bron: "Alle resultaten die in hun titel of omschrijving een prijs voor een website noemen. Weggelaten: drie artikelen over webshops, twee resultaten zonder bedrag, en één resultaat waarvan het fragment alleen hostingkosten noemt.",
    },
    {
      type: "alinea",
      tekst:
        "Vergelijk offertes daarom niet op het eindbedrag, maar op drie vragen. **Wie schrijft de teksten?** **Zit vindbaarheid erin, of komt dat later?** En **wat betaal je na de oplevering per maand?** Dat zijn de posten waar de grootste verschillen zitten. Vraag het ook bij ons na: wat in de offerte staat, zit in de vaste prijs. We rekenen niet achteraf bij.",
    },

    { type: "kop", id: "waar-hangt-het-van-af", tekst: "Waar hangt de prijs van af?" },
    {
      type: "alinea",
      tekst:
        "Binnen een type schuift de prijs door een handvol keuzes. De belangrijkste is **het aantal pagina's dat moet overtuigen**. Een vakbedrijf dat gevonden wil worden op elke dienst en in elke plaats waar het werkt, heeft meer pagina's nodig dan een bedrijf dat vooral een visitekaartje zoekt. Elke pagina is structuur, tekst en vindbaarheid, en dat is werk.",
    },
    {
      type: "alinea",
      tekst:
        "Daarna komen **maatwerk of template** en **content**. Een template staat er snel, maar beperkt je in opbouw en snelheid. Heb je al sterke teksten en goede foto's, dan scheelt dat; moeten ze nog gemaakt worden, dan komt dat erbij. Juist die content bepaalt of een bezoeker belt of doorklikt naar de volgende.",
    },
    {
      type: "subkop",
      tekst: "Wat kost een website extra?",
    },
    {
      type: "tabel",
      kop: ["Toevoeging", "Meerprijs"],
      rijen: [
        ["Fotografie (als er geen bruikbaar beeld is)", "€400 - €900"],
        ["Boekings- of reserveringssysteem", "€400 - €1.000"],
        ["Meertaligheid", "€500 - €1.200"],
        ["Koppeling met CRM, agenda of boekhouding", "€500 - €1.200"],
        ["Betalingen op een gewone site", "€800 - €2.000"],
      ],
      bron: "Bron: de meerprijzen in de Brandlift-kostencalculator. Indicaties, exclusief btw.",
    },

    { type: "kop", id: "wat-zit-erin", tekst: "Wat zit er bij ons altijd in?" },
    {
      type: "alinea",
      tekst:
        "Een lage prijs zegt weinig als er weinig in zit. Daarom zit dit bij elke website die wij bouwen standaard in de bouwprijs, in elke prijsklasse:",
    },
    {
      type: "lijst",
      items: [
        "**Strategie en positionering**: waarom een klant voor jou kiest en niet voor de buurman",
        "**De [lokale SEO](/diensten/lokale-seo)-basis**: gestructureerde data, lokale vermeldingen en een ingericht Google-bedrijfsprofiel",
        "**Een ontwerp dat past bij je vak** en vertrouwen wekt, op telefoon en computer",
        "**Snelle, veilige techniek**",
      ],
    },
    {
      type: "letop",
      titel: "We werken door tot je tevreden bent",
      tekst:
        "Klopt het resultaat na de laatste feedbackronde nog niet, dan werken we zonder extra kosten door tot het wel klopt. Die garantie geldt voor wat in de offerte is afgesproken; nieuwe wensen daarbuiten zijn meerwerk.",
    },

    { type: "kop", id: "maandelijkse-kosten", tekst: "Wat kost een website per maand?" },
    {
      type: "alinea",
      tekst:
        "Na de bouw komen er kosten voor **hosting en onderhoud**: de plek waar de site draait, beveiliging, updates en kleine aanpassingen. Bij ons zijn dat losse diensten die je kiest als je ze wilt, per maand opzegbaar, en apart van de bouwprijs. De site zelf is na betaling van jou. Wil je daarna actief blijven werken aan je vindbaarheid, dan kan dat met een aparte SEO-retainer.",
    },
    {
      type: "alinea",
      tekst:
        "Om een idee te geven van de markt: in dezelfde zoekresultaten noemt een aanbieder **€30 tot €100 per maand** voor beheerde hosting, en een ander een **abonnement vanaf €99 per maand** waar de bouw in zit. Bij zo'n abonnement betaal je zolang de site bestaat. Reken dan uit wat je na drie jaar kwijt bent, en vraag of de site daarna van jou is.",
    },

    { type: "kop", id: "zelf-of-laten-maken", tekst: "Zelf maken, een budgetaanbieder of laten bouwen?" },
    {
      type: "tabel",
      kop: ["", "Zelf maken", "Goedkope aanbieder", "Strategisch laten bouwen"],
      rijen: [
        ["Prijs", "een abonnement op een sitebouwer", "vanaf ongeveer €500 tot €600", "vanaf €1.500"],
        ["Jouw tijd", "veel: elke pagina en elke wijziging zelf", "beperkt", "beperkt: het werk ligt bij ons"],
        ["Lokale vindbaarheid", "zelf uitzoeken", "verschilt per aanbieder: vraag ernaar", "de basis zit erin"],
        ["Ontwerp", "een template", "meestal een template", "afgestemd op je bedrijf"],
      ],
      bron: "Goedkope aanbieder: de laagste websiteprijzen in de zoekresultaten hierboven (vanaf €500 en vanaf €595).",
    },
    {
      type: "alinea",
      tekst:
        "Alle drie zijn verstandige keuzes, als je weet wat je koopt. Zelf bouwen is prima als je tijd hebt en online gevonden worden geen prioriteit is. Een budgetsite is prima als je alleen een digitaal visitekaartje zoekt. Moet je website klanten opleveren, dan is de bouw een investering die zich moet terugverdienen.",
    },

    { type: "kop", id: "is-het-het-waard", tekst: "Verdient een website zich terug?" },
    {
      type: "alinea",
      tekst:
        "Dat hangt af van wat één nieuwe klant voor je waard is. Voor een vakbedrijf kan één opdracht via de site de bouwprijs al dekken. Een voorbeeld uit ons eigen werk: Hovenier Eykelenboom in Den Haag ging na de nieuwe site en het ingerichte Google-profiel **van 2 naar 24 aanvragen per maand**. Dat is geen belofte voor elk bedrijf, wel een beeld van wat er gebeurt als een goed bedrijf eindelijk goed gevonden wordt. [Lees de hele case](/cases/hovenier-eykelenboom).",
    },
  ],
  faq: [
    {
      q: "Wat zijn de maandelijkse kosten van een website?",
      a: "Voor hosting en onderhoud betaal je per maand, los van de eenmalige bouwprijs. In de zoekresultaten die wij bekeken, noemt een aanbieder €30 tot €100 per maand voor beheerde hosting. Bij ons zijn hosting en onderhoud losse diensten die je kiest als je ze wilt, per maand opzegbaar.",
    },
    {
      q: "Wat kost een websitebouwer per uur?",
      a: "Dat verschilt sterk per aanbieder. Wij werken niet met een uurtarief maar met een offerte met een vaste prijs: wat daarin staat, rekenen we achteraf niet bij.",
    },
    {
      q: "Kan je zelf gratis een website maken?",
      a: "Ja, met een sitebouwer kan dat voor weinig of niets, al betaal je meestal wel voor een eigen domeinnaam en voor de functies die je echt nodig hebt. Reken vooral je eigen tijd mee, en de vraag of de site ook gevonden wordt.",
    },
    {
      q: "Hoe lang duurt het om een website te laten maken?",
      a: "Bij ons meestal 3 tot 4 weken. Grote maatwerkprojecten met koppelingen duren langer.",
    },
    {
      q: "Kost SEO extra bij een website?",
      a: "De lokale SEO-basis zit bij ons altijd in de bouwprijs: gestructureerde data, lokale vermeldingen en een ingericht Google-bedrijfsprofiel. Alleen doorlopend werken aan posities is een aparte, optionele retainer.",
    },
  ],
  bronnen: [
    { label: "Brandlift-kostencalculator: prijsbanden en meerprijzen", url: "https://brandliftagency.nl/website-kosten-calculator" },
    { label: "Google-zoekresultaten voor \"website laten maken kosten\", de eerste 19 resultaten vanuit Den Haag, 27 november 2026 (via DataForSEO)" },
    { label: "Algemene voorwaarden van Brandlift: vaste prijs, garantie, eigendom en hosting", url: "https://brandliftagency.nl/algemene-voorwaarden" },
    { label: "Case Hovenier Eykelenboom", url: "https://brandliftagency.nl/cases/hovenier-eykelenboom" },
  ],
  volgendeStap: {
    label: "Reken je eigen prijs uit",
    href: "/website-kosten-calculator",
    tekst: "Wil je weten waar jouw website in die bandbreedte valt? De calculator rekent het in een minuut uit, zonder dat je gegevens achterlaat.",
  },
  gerelateerd: ["/kennisbank/wat-is-lokale-seo"],
};
