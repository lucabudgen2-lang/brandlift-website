import { buildPageMetadata } from "@/lib/metadata";
import { LegalPage, type LegalBlok } from "@/components/page/LegalPage";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const PATH = "/privacybeleid";
const BIJGEWERKT = "2026-07-31";

export const metadata = buildPageMetadata({
  title: "Privacybeleid",
  description:
    "Welke gegevens Brandlift via deze website verzamelt, waarom, hoe lang we ze bewaren en welke rechten je daarbij hebt volgens de AVG.",
  path: PATH,
});

/* Alles hieronder beschrijft wat deze site FEITELIJK doet: het
   contactformulier, de calculator, de ingesloten kaart, de WhatsApp-knop
   en het feit dat er (nog) geen analytics op staat. Verandert daar iets
   aan, dan hoort deze tekst in dezelfde commit mee te veranderen. */
const blokken: LegalBlok[] = [
  {
    id: "wie",
    titel: "Wie verwerkt je gegevens",
    alineas: [
      `Brandlift is een handelsnaam van ${site.legalName}, een eenmanszaak gevestigd in ${site.city}. Wij zijn de verwerkingsverantwoordelijke voor de gegevens die via deze website worden verzameld.`,
    ],
    paren: [
      { k: "Bedrijf", v: `${site.name} (handelsnaam van ${site.legalName})` },
      { k: "Adres", v: `${site.street}, ${site.postalCode} ${site.city}` },
      { k: "KvK-nummer", v: site.kvk },
      { k: "E-mail", v: site.email },
      { k: "Telefoon", v: site.phone },
    ],
  },
  {
    id: "gegevens",
    titel: "Welke gegevens we verzamelen",
    alineas: [
      "We verzamelen alleen wat je zelf invult. Deze website vraagt niet om een account, houdt geen profiel van je bij en koopt geen gegevens in bij derden.",
    ],
    paren: [
      {
        k: "Contactformulier",
        v: "Je naam, bedrijfsnaam, e-mailadres, telefoonnummer, waar je het over wilt hebben en - als je die invult - je bericht.",
      },
      {
        k: "Kostencalculator",
        v: "Je e-mailadres en de keuzes die je in de calculator maakt, zodat we je de berekening kunnen sturen.",
      },
      {
        k: "E-mail, telefoon of WhatsApp",
        v: "Neem je rechtstreeks contact op, dan verwerken we de gegevens die je zelf in dat bericht zet.",
      },
      {
        k: "Technische gegevens",
        v: "Onze hostingpartij legt standaard serverlogboeken aan, waaronder IP-adressen. Dat is nodig om de site te laten werken en misbruik te voorkomen.",
      },
    ],
  },
  {
    id: "waarom",
    titel: "Waarom we ze verwerken en op welke grondslag",
    alineas: [
      "We verwerken je gegevens uitsluitend voor de doelen hieronder. We gebruiken ze niet voor iets anders, en we verkopen ze niet.",
    ],
    paren: [
      {
        k: "Contact opnemen",
        v: "Om te reageren op je aanvraag en een groeigesprek in te plannen. Grondslag: uitvoering van een overeenkomst of maatregelen op jouw verzoek voorafgaand daaraan (artikel 6 lid 1 sub b AVG).",
      },
      {
        k: "Offerte en samenwerking",
        v: "Om een voorstel te doen en, als we gaan samenwerken, het project uit te voeren en te factureren. Grondslag: uitvoering van de overeenkomst.",
      },
      {
        k: "Administratie",
        v: "Facturen en de bijbehorende gegevens bewaren we omdat de Belastingdienst dat verplicht. Grondslag: wettelijke verplichting (artikel 6 lid 1 sub c AVG).",
      },
      {
        k: "Werkende en veilige site",
        v: "Serverlogboeken om storingen en misbruik op te sporen. Grondslag: gerechtvaardigd belang (artikel 6 lid 1 sub f AVG).",
      },
    ],
  },
  {
    id: "bewaren",
    titel: "Hoe lang we ze bewaren",
    alineas: [
      "We bewaren niets langer dan nodig. Wil je eerder dat we je gegevens verwijderen, dan doen we dat - behalve waar de wet ons verplicht ze te bewaren.",
    ],
    paren: [
      {
        k: "Aanvragen zonder vervolg",
        v: "Tot twaalf maanden na het laatste contact, zodat we de draad kunnen oppakken als je later terugkomt.",
      },
      {
        k: "Klantgegevens",
        v: "Gedurende de samenwerking en daarna zolang dat nodig is voor nazorg en garantie.",
      },
      {
        k: "Facturen en administratie",
        v: "Zeven jaar, de wettelijke bewaartermijn van de Belastingdienst.",
      },
      {
        k: "Serverlogboeken",
        v: "Kortlopend, volgens de standaardtermijn van onze hostingpartij.",
      },
    ],
  },
  {
    id: "derden",
    titel: "Wie je gegevens nog meer kunnen zien",
    alineas: [
      "Voor het draaien van deze site en het uitvoeren van ons werk schakelen we een klein aantal partijen in. Met partijen die namens ons persoonsgegevens verwerken sluiten we een verwerkersovereenkomst.",
    ],
    paren: [
      {
        k: "Hosting (Vercel)",
        v: "Deze website draait bij Vercel. Zij verwerken serverlogboeken en de gegevens die je via het formulier verstuurt op het moment dat die binnenkomen.",
      },
      {
        k: "Google Maps",
        v: "Op de contactpagina en enkele andere pagina's staat een ingesloten kaart van Google. Zodra die kaart laadt kan Google gegevens ontvangen, waaronder je IP-adres, en kan Google cookies plaatsen. Dat gebeurt onder de voorwaarden van Google, niet die van ons.",
      },
      {
        k: "WhatsApp",
        v: "Klik je op de WhatsApp-knop, dan ga je naar WhatsApp. Wat daar gebeurt valt onder het privacybeleid van Meta.",
      },
      {
        k: "Boekhouding",
        v: "Facturatiegegevens gaan naar onze boekhouding en, waar de wet dat vraagt, naar de Belastingdienst.",
      },
    ],
    lijst: [
      "We verkopen je gegevens niet en delen ze niet voor marketingdoeleinden van anderen.",
      "Sommige van deze partijen zijn gevestigd buiten de EU. Doorgifte gebeurt op basis van de standaardcontractbepalingen van de Europese Commissie of een gelijkwaardige waarborg.",
    ],
  },
  {
    id: "cookies",
    titel: "Cookies en meten",
    alineas: [
      "Deze website plaatst zelf geen tracking- of marketingcookies, en er staat op dit moment geen analysesoftware op. We houden dus niet bij wie je bent of welke pagina's je bekijkt.",
      "Wat er wel kan gebeuren: de ingesloten kaart van Google kan bij het laden cookies plaatsen. Wil je dat voorkomen, dan kun je cookies van derden blokkeren in je browserinstellingen.",
      "Gaan we later wel meten, bijvoorbeeld met bezoekersstatistieken, dan passen we dit beleid daarop aan en regelen we toestemming waar dat vereist is.",
    ],
  },
  {
    id: "rechten",
    titel: "Jouw rechten",
    alineas: [
      "Onder de AVG heb je een aantal rechten. Wil je er gebruik van maken, stuur dan een bericht naar het e-mailadres onderaan deze pagina. We reageren binnen vier weken en vragen mogelijk om een bevestiging van je identiteit, zodat we geen gegevens naar de verkeerde persoon sturen.",
    ],
    lijst: [
      "Inzage: opvragen welke gegevens we van je hebben.",
      "Rectificatie: onjuiste gegevens laten corrigeren.",
      "Verwijdering: je gegevens laten wissen, tenzij we ze wettelijk moeten bewaren.",
      "Beperking: de verwerking tijdelijk laten stopzetten.",
      "Bezwaar: bezwaar maken tegen verwerking op grond van gerechtvaardigd belang.",
      "Dataportabiliteit: je gegevens in een gangbaar bestandsformaat ontvangen.",
      "Klacht: een klacht indienen bij de Autoriteit Persoonsgegevens via autoriteitpersoonsgegevens.nl.",
    ],
  },
  {
    id: "beveiliging",
    titel: "Beveiliging",
    alineas: [
      "De site draait volledig over een beveiligde verbinding (HTTPS) en de lettertypen worden vanaf onze eigen server geladen in plaats van bij Google, zodat je browser daarvoor geen contact hoeft te maken met derden.",
      "Toegang tot aanvragen en klantgegevens is beperkt tot de mensen die er voor het werk bij moeten. Merk je iets dat niet klopt of denk je een kwetsbaarheid gevonden te hebben, laat het ons weten - we pakken het op.",
    ],
  },
  {
    id: "wijzigingen",
    titel: "Wijzigingen in dit beleid",
    alineas: [
      "Verandert er iets aan de manier waarop we gegevens verwerken, dan werken we deze pagina bij en passen we de datum bovenaan aan. Bij ingrijpende wijzigingen laten we het weten aan klanten met wie we op dat moment samenwerken.",
    ],
  },
];

export default function Page() {
  const schema = breadcrumbSchema(
    [
      { name: "Home", path: "/" },
      { name: "Privacybeleid", path: PATH },
    ],
    PATH,
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LegalPage
        eyebrow="Juridisch"
        titel="Privacybeleid"
        intro="Wat we met je gegevens doen, in gewone taal. Kort samengevat: we verzamelen alleen wat je zelf invult, we gebruiken het om je te helpen, en we verkopen niets door."
        bijgewerkt={BIJGEWERKT}
        path={PATH}
        crumbLabel="Privacybeleid"
        blokken={blokken}
      />
    </>
  );
}
