import type { Artikel } from "@/lib/kennisbank/types";

/* ============================================================
   Google Bedrijfsprofiel optimaliseren (blogpipeline, backlog #15,
   concept 27 nov 2026).

   Bronnen per claim:
   - het bewijs (profiel en site als spiegel bij R. van Esch
     Gevelrestauratie): alleen wat openbaar op de casepagina staat,
     app/cases/van-esch-gevelrestauratie + lib/cases/vanesch.ts:
     `spiegel` (3 categorieën, de pagina per categorie, de 11 diensten
     eronder), `profielStats` (20 diensten, 14 producten, 32 foto's,
     20 plaatsen), `oudeSite` (0 diensten in het profiel vooraf),
     `rasters` (meting vooraf, oktober: gevelrestauratie 17 van 49
     punten in de top 3, scheurherstel en knipvoeg op geen enkel punt
     in de top 20), `onderzoekStats` (49 punten, raster 30 bij 30 km),
     `onboardingKoppelingen` ("niet gevonden worden als voegbedrijf"),
     de tijdlijn (6 nov en 14 nov) en de lopende tekst van stap 03 en 04
     ("Google kende het bedrijf...", "Een claim die niet meer klopte",
     "Google Maps kijkt naar de categorieën en diensten in het
     bedrijfsprofiel, en zoekt op de website naar bevestiging": dat is
     onze eigen werkwijze zoals hij op de casepagina staat, geen
     letterlijke uitspraak uit de documentatie van Google)
   - citaat Rudy van Esch: zijn Google-review, letterlijk, lib/site.ts
     `reviews.items` (daarom staat het woord "Tevens" erin)
   - categorieën (één primaire, zo min mogelijk, zo specifiek mogelijk,
     mogelijk opnieuw verifiëren): Google-bedrijfsprofiel Help,
     answer/7249669 en answer/3038177, gelezen 27 nov 2026
   - diensten per bedrijfscategorie, eigen diensten, beschrijving en
     prijs: Google Help answer/9455399 (Uw services beheren), 27 nov
   - SERP: een rijtje tips in het fragment staat bij posities 2, 4, 9
     en 17; het AI-overzicht in dezelfde meting noemt "links naar
     relevante webpagina's" bij producten en diensten, en dat staat
     eerlijk in de tekst
   - relevantie, afstand, prominentie en de tips (verifiëren, volledig
     invullen, reviews, foto's): Google Help answer/7091, gelezen 27 nov
   - profiel bewerken en "we beoordelen uw wijzigingen": answer/3039617
   - "kosteloos toevoegen of claimen": answer/2911778
   - bedrijfsnaam zonder extra woorden: answer/3038177
   - wat de zoekresultaten adviseren: vault systeem/blog/data/
     serp-google-bedrijfsprofiel-optimaliseren-2026-11-27.json
     (DataForSEO, Den Haag centrum, desktop, 19 resultaten waarvan 3
     pagina's dubbel = 16 verschillende pagina's); alleen titels en
     omschrijvingen, aanbieders zonder naam
   - wat bij ons in een websiteproject zit en wat los is:
     lib/calculator.ts `calcPrice().included` + REGELS-SCHRIJVER
     (basis lokale SEO altijd erin, doorlopende SEO een los abonnement)
   - de analyse vóór het eerste gesprek: casepagina Van Esch, stap 01
   - FAQ: 'Mensen vragen ook' uit dezelfde SERP ("Hoe kan ik mijn
     bedrijfsprofiel in Google wijzigen?", "Is Google Bedrijfsprofiel
     gratis?"). Search Console (gsc-2026-11-25.json) heeft nog geen
     vertoningen op varianten van deze vraag.

   Bewust niet:
   - geen resultaten van Van Esch na de livegang, geen prijzen, geen
     andere bedrijven uit zijn kaartresultaten; alleen de meting vooraf
   - geen wegingsfactoren of percentages die Google niet publiceert
     ("de hoofdcategorie telt het zwaarst" staat in het AI-overzicht,
     niet in de documentatie van Google, dus niet als eigen claim)
   - geen bedrag voor doorlopend profielbeheer (staat niet in de calculator)
   - de twee Google Ads-vragen uit 'Mensen vragen ook': ander onderwerp
   - geen belofte over posities of over hoe snel je iets merkt
   ============================================================ */

export const googleBedrijfsprofielOptimaliseren: Artikel = {
  slug: "google-bedrijfsprofiel-optimaliseren",
  titel: "Google Bedrijfsprofiel optimaliseren: waar begin je?",
  metaTitle: "Google Bedrijfsprofiel optimaliseren: zo doe je het",
  metaDescription:
    "Google Bedrijfsprofiel optimaliseren begint bij drie dingen: categorieën kiezen, diensten invullen die ook op je site staan, en foto's van eigen werk.",
  lead:
    "Categorieën, diensten en foto's: wat je invult, in welke volgorde, en waarom je website hetzelfde moet vertellen. Met een profiel dat we zelf zo hebben ingericht.",
  tag: "Google-profiel",
  zoekterm: "google bedrijfsprofiel optimaliseren",
  gepubliceerd: "2026-11-27",
  bijgewerkt: "2026-11-27",
  concept: true,
  blokken: [
    {
      type: "antwoord",
      tekst:
        "Je Google Bedrijfsprofiel optimaliseren begint bij drie dingen: **de categorie die bij je werk past**, **de diensten die je wilt verkopen** en **foto's van je eigen werk**. Zorg daarna dat je website hetzelfde vertelt, met een eigen pagina per categorie en per dienst. Zo werken wij: wat je profiel zegt, moet op je site terug te lezen zijn.",
    },

    { type: "kop", id: "categorie", tekst: "Welke categorie kies je in je Google Bedrijfsprofiel?" },
    {
      type: "alinea",
      tekst:
        "Begin bij de categorie, want daar hangt de rest aan. Google vraagt om één primaire categorie \"die uw bedrijf het beste beschrijft\", en je mag er een paar extra bij kiezen. De richtlijn is kort: zo min mogelijk categorieën, en zo specifiek mogelijk.",
    },
    {
      type: "alinea",
      tekst:
        "Dat klinkt als een vinkje, maar het is een keuze. Met je categorie zeg je voor welk werk je gevonden wilt worden, en dus ook voor welk werk niet. Een gevelrestaurateur die \"Bouwbedrijf\" als eerste kiest, krijgt andere vragen dan een die \"Restauratie van gebouwen\" kiest. Kies daarom niet het woord waar het meest op gezocht wordt, maar het werk waar je voor gebeld wilt worden.",
    },
    {
      type: "alinea",
      tekst:
        "Voor extra categorieën houden wij één praktische regel aan: alleen als er op je site een eigen pagina bij hoort. Heb je die pagina niet en ga je hem ook niet maken, laat de categorie dan weg.",
    },
    {
      type: "letop",
      titel: "Een categorie wijzigen kan een nieuwe verificatie vragen",
      tekst:
        "Google waarschuwt dat je na het toevoegen of aanpassen van een categorie soms opnieuw moet verifiëren. Doe het dus in één keer goed, en niet elke maand een beetje.",
    },

    { type: "kop", id: "diensten", tekst: "Welke diensten zet je in je profiel?" },
    {
      type: "alinea",
      tekst:
        "Diensten vul je in per bedrijfscategorie. Google biedt bij een categorie een lijst met opties aan, en je mag er eigen diensten bij maken, met een beschrijving en een prijs als je wilt. Sla je dit over, dan staat je profiel er wel, met naam, adres en reviews. Maar wat je precies doet, staat er dan nergens in.",
    },
    {
      type: "alinea",
      tekst:
        "Dat zagen we bij R. van Esch Gevelrestauratie in Liempde. Vóór we begonnen stond er geen enkele dienst in het profiel. In oktober 2026, nog voor de nieuwe site, hebben we Google Maps doorgemeten op 49 punten rond Liempde. Dat is een raster van 30 bij 30 kilometer, en elk punt is een zoekopdracht vanaf die plek.",
    },
    {
      type: "alinea",
      tekst:
        "Op \"gevelrestauratie\" stond het bedrijf op 17 van die 49 punten in de top 3. Op \"scheurherstel\" en \"knipvoeg\", het specialistische werk, stond het op geen enkel punt in de top 20. Google kende het bedrijf dus wel, maar wist niet wat het precies deed.",
    },
    {
      type: "alinea",
      tekst:
        "Zo'n gat dicht je niet met een trucje in je bedrijfsnaam. Google wil daar geen extra woorden in zien. Je dicht het door diensten in te vullen, en door ze op je website terug te laten komen.",
    },
    {
      type: "bewijs",
      label: "Uit ons eigen werk",
      titel: "Drie categorieën, drie pagina's: profiel en site als spiegel",
      tekst:
        "Bij Van Esch hebben we het profiel en de nieuwe website als elkaars spiegel opgezet. Elke categorie in het profiel heeft precies één pagina op de site. Onder die pagina hangen de diensten die ook in het profiel staan, elk met een eigen pagina. De beschrijving van een dienst in het profiel komt uit de tekst van die pagina. Zo leest Google twee keer hetzelfde, op twee plekken.",
      bron: "Bron: de case R. van Esch Gevelrestauratie op brandliftagency.nl, stap 04 (Google-profiel en site). Het profiel is op 6 en 14 november 2026 ingericht.",
    },
    {
      type: "tabel",
      kop: ["Categorie in het profiel", "Pagina op de site", "Diensten met een eigen pagina eronder"],
      rijen: [
        [
          "Restauratie van gebouwen (hoofdcategorie)",
          "Homepage",
          "Patineren en bijkleuren, monument restaureren, onderhoud van monumenten, langgevelboerderij restaureren",
        ],
        [
          "Metselaar (extra categorie)",
          "Voegwerk",
          "Knipvoeg en snijvoeg, voegwerk herstellen, voegwerk vervangen, doorgestreken voegwerk, cementvoegen verwijderen",
        ],
        ["Bouwbedrijf (extra categorie)", "Gevel repareren", "Scheurherstel, baksteen repareren"],
      ],
      bron: "Bron: de case van R. van Esch Gevelrestauratie. In het profiel staan in totaal 20 diensten; deze 11 hebben een eigen pagina op de site.",
    },
    {
      type: "alinea",
      tekst:
        "Kijk naar de middelste rij. De categorie heet \"Metselaar\", maar de pagina gaat over voegwerk. Want daar zoeken mensen op, en dat is het werk dat hij doet.",
    },
    {
      type: "alinea",
      tekst:
        "Wat er bewust níet staat, telt net zo hard. De eigenaar wilde niet gevonden worden als voegbedrijf, omdat dat woord vooral nieuwbouw aantrekt. Dat woord staat dus nergens, niet op de site en niet in het profiel.",
    },
    {
      type: "alinea",
      tekst:
        "Het profiel is daarna verder gevuld: 14 producten met tekst en beeld, en 20 plaatsen in het werkgebied. Dat is wat er is ingevuld, geen uitkomst in posities of opdrachten. Het hele traject lees je in [de case van Van Esch Gevelrestauratie](/cases/van-esch-gevelrestauratie).",
    },
    {
      type: "citaat",
      tekst: "Tevens is mijn Google bedrijfsprofiel helemaal aangepast, zodat alles optimaal samenwerkt.",
      wie: "Rudy van Esch, R. van Esch Gevelrestauratie",
      bron: "Google-review bij Brandlift, november 2026",
    },

    { type: "kop", id: "fotos", tekst: "Welke foto's zet je in je profiel?" },
    {
      type: "alinea",
      tekst:
        "Foto's van je eigen werk. Google zegt het zelf: laat met foto's zien wat je aanbiedt. Een stockfoto van een lachende bouwvakker vertelt hem niets. Een gevel die jij hebt hersteld wel.",
    },
    {
      type: "alinea",
      tekst:
        "Wij houden per foto bij waar hij vandaan komt. Bij Van Esch staan er 32 eigen foto's in het profiel, en van elke foto weten we de herkomst. Dat is extra werk, maar je weet daarna zeker dat alles wat je laat zien echt van jou is. Ruim meteen op wat niet meer klopt: bij Van Esch ging er één claim uit het profiel die niet meer waar was.",
    },

    { type: "kop", id: "website", tekst: "Waarom is je profiel invullen alleen niet genoeg?" },
    {
      type: "alinea",
      tekst:
        "Omdat een plek in de lokale resultaten van meer afhangt dan van je profiel. Google noemt zelf drie dingen waar die resultaten op rusten: relevantie, afstand en prominentie. Relevantie is hoe goed je profiel past bij wat iemand zoekt.",
    },
    {
      type: "alinea",
      tekst:
        "Prominentie is hoe bekend je bedrijf is, en daar tellen onder meer links van andere websites en je reviews in mee. Aan afstand doe je niets, aan de andere twee wel. En voor allebei heb je meer nodig dan ingevulde velden.",
    },
    {
      type: "alinea",
      tekst:
        "We hebben vastgelegd wat de zoekresultaten hierover laten zien. Op 27 november 2026 bewaarden we de eerste 19 resultaten voor \"google bedrijfsprofiel optimaliseren\", gezocht vanuit Den Haag. Dat zijn 16 verschillende pagina's, want drie staan er twee keer in. Vier daarvan geven in hun fragment een rijtje tips, en dat rijtje lijkt steeds op elkaar: de juiste categorie, alles invullen, foto's, reviews.",
    },
    {
      type: "alinea",
      tekst:
        "Dat klopt allemaal. Maar in de titels en omschrijvingen die Google laat zien, staat nergens dat je diensten ook op je website moeten terugkomen. Dat zegt niet alles over de artikelen zelf, want zo'n fragment is kort. En het AI-overzicht boven de resultaten noemt bij producten en diensten wel links naar je eigen webpagina's.",
    },
    {
      type: "alinea",
      tekst:
        "Wij maken van die koppeling tussen profiel en site het hoofdpunt. Een dienst in je profiel is een bewering. Een pagina over die dienst, met je eigen foto's en uitleg, is de onderbouwing. Zo denken wij erover; Google schrijft het nergens zo voor.",
    },
    {
      type: "alinea",
      tekst:
        "Daarom is je profiel bij ons een onderdeel van [onze aanpak voor lokale SEO](/diensten/lokale-seo), en geen los klusje. Wil je eerst het grotere plaatje, lees dan [wat lokale SEO is en hoe het werkt](/kennisbank/wat-is-lokale-seo).",
    },

    { type: "kop", id: "volgorde", tekst: "In welke volgorde pak je het aan?" },
    {
      type: "alinea",
      tekst:
        "Dit is de volgorde die wij aanhouden. Eerst de keuzes, dan het invulwerk, zodat je niets twee keer hoeft te doen.",
    },
    {
      type: "lijst",
      genummerd: true,
      items: [
        "**Claim en verifieer je profiel.** Zo weet Google dat jij namens het bedrijf mag spreken.",
        "**Kies je categorieën.** Eén primaire, en zo min mogelijk extra.",
        "**Vul je diensten in**, per categorie, in de woorden die je klant gebruikt. Neem de beschrijving over uit de tekst op je site.",
        "**Schrijf je omschrijving** en controleer naam, adres, telefoonnummer en openingstijden. Je naam is je echte bedrijfsnaam, zonder extra woorden.",
        "**Zet foto's van eigen werk erin**, en haal weg wat verouderd is of niet van jou.",
        "**Stel je werkgebied in** als je bij klanten thuis werkt, en voeg producten toe als je die hebt.",
        "**Vraag om reviews en reageer erop.** Dat houdt niet op na de eerste week.",
      ],
    },

    { type: "kop", id: "zelf-of-uitbesteden", tekst: "Kun je dit zelf, of laat je het doen?" },
    {
      type: "alinea",
      tekst:
        "Je kunt dit zelf. Het profiel kost niets, en je vult het zelf in via Profiel bewerken. Het invullen is niet het moeilijke deel. Dat zijn de keuzes ervoor: welke categorie, welke diensten wel en niet, en welke pagina's daarbij horen.",
    },
    {
      type: "alinea",
      tekst:
        "Laat je bij ons een site bouwen, dan zit een ingericht Google Bedrijfsprofiel in de bouwprijs. Het hoort bij de lokale SEO-basis van elke website die we maken, samen met gestructureerde data en lokale vermeldingen. Wat er niet in zit, is het doorlopende werk daarna: berichten plaatsen, nieuwe foto's, blijven bijsturen. Dat is een los abonnement, als je het wilt. Wat de bouw zelf kost, reken je uit met [de calculator voor websitekosten](/website-kosten-calculator).",
    },
  ],
  faq: [
    {
      q: "Hoe kan ik mijn bedrijfsprofiel in Google wijzigen?",
      a: "Ga in Google Zoeken naar je bedrijfsprofiel, ingelogd met het account dat het beheert, en kies Profiel bewerken. In de Google Maps-app tik je op Bedrijf en daarna op Profiel bewerken. Sla je wijzigingen op. Google beoordeelt ze eerst, dus ze staan er niet altijd direct.",
    },
    {
      q: "Is Google Bedrijfsprofiel gratis?",
      a: "Ja. Je kunt je bedrijf kosteloos toevoegen of claimen, zegt Google zelf. Je betaalt alleen als je iemand inhuurt om het in te richten of bij te houden, of als je ernaast gaat adverteren.",
    },
    {
      q: "Hoeveel categorieën moet ik kiezen?",
      a: "Zo min mogelijk. Google vraagt om één primaire categorie en een paar extra die je kernwerk beschrijven, zo specifiek mogelijk. Een vast aantal noemt Google niet. Bij Van Esch werden het er drie.",
    },
    {
      q: "Mag ik mijn dienst of plaats in mijn bedrijfsnaam zetten?",
      a: "Nee, tenzij je bedrijf echt zo heet. Google wil je naam zien zoals hij op je gevel en je briefpapier staat, zonder overbodige informatie erin. Je diensten horen bij de diensten, je werkgebied bij het werkgebied.",
    },
    {
      q: "Hoe snel zie ik resultaat van een geoptimaliseerd profiel?",
      a: "Dat kunnen we niet beloven, en wie het wel belooft, weet het ook niet. Google beoordeelt wijzigingen eerst, en je plek hangt ook af van je website, je reviews en waar iemand zoekt. Wat je wel direct weet: of je profiel en je site hetzelfde vertellen.",
    },
  ],
  bronnen: [
    {
      label: "Google-bedrijfsprofiel Help: Tips voor hoe u uw positie in lokale zoekresultaten op Google kunt verbeteren",
      url: "https://support.google.com/business/answer/7091?hl=nl",
    },
    {
      label: "Google-bedrijfsprofiel Help: Uw bedrijfscategorie beheren",
      url: "https://support.google.com/business/answer/7249669?hl=nl",
    },
    {
      label: "Google-bedrijfsprofiel Help: Uw services beheren in uw Bedrijfsprofiel",
      url: "https://support.google.com/business/answer/9455399?hl=nl",
    },
    {
      label: "Google-bedrijfsprofiel Help: Richtlijnen voor de vertegenwoordiging van uw bedrijf op Google",
      url: "https://support.google.com/business/answer/3038177?hl=nl",
    },
    {
      label: "Google-bedrijfsprofiel Help: Uw Bedrijfsprofiel bewerken",
      url: "https://support.google.com/business/answer/3039617?hl=nl",
    },
    {
      label: "Google-bedrijfsprofiel Help: Uw bedrijfsprofiel toevoegen of claimen",
      url: "https://support.google.com/business/answer/2911778?hl=nl",
    },
    {
      label: "Case R. van Esch Gevelrestauratie: het profiel en de site als spiegel, en de meting vooraf",
      url: "https://brandliftagency.nl/cases/van-esch-gevelrestauratie",
    },
    {
      label:
        "Google-zoekresultaten voor \"google bedrijfsprofiel optimaliseren\", de eerste 19 resultaten vanuit Den Haag, 27 november 2026 (via DataForSEO)",
    },
  ],
  volgendeStap: {
    label: "Plan een gratis groeigesprek",
    href: "/contact",
    tekst:
      "Wil je weten hoe jouw profiel ervoor staat? Voor elk bedrijf dat een gesprek plant, maken we vooraf een analyse van het Google-profiel en de website. Je ziet waar je staat, voordat je ergens aan vastzit.",
  },
  gerelateerd: ["/kennisbank/wat-is-lokale-seo", "wat-kost-een-website-laten-maken"],
};
