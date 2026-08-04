import { buildPageMetadata } from "@/lib/metadata";
import { LegalPage, type LegalBlok } from "@/components/page/LegalPage";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const PATH = "/algemene-voorwaarden";
const BIJGEWERKT = "2026-07-31";

export const metadata = buildPageMetadata({
  title: "Algemene voorwaarden",
  description:
    "De algemene voorwaarden van Brandlift voor websites, branding, lokale SEO en conversie-optimalisatie: offertes, betaling, oplevering, eigendom en garantie.",
  path: PATH,
});

/* Deze voorwaarden moeten kloppen met wat de site elders belooft:
   vanaf 1.500 euro exclusief BTW, meestal 3 tot 4 weken doorlooptijd,
   een vaste prijs vooraf, en de garantie "we werken door totdat je
   tevreden bent". Verandert een van die beloftes, dan hoort dit
   document mee te veranderen. */
const blokken: LegalBlok[] = [
  {
    id: "definities",
    titel: "Definities",
    paren: [
      { k: "Brandlift", v: `${site.name}, handelsnaam van ${site.legalName}, KvK ${site.kvk}, gevestigd te ${site.city}.` },
      { k: "Opdrachtgever", v: "De partij die met Brandlift een overeenkomst aangaat. Deze voorwaarden zijn geschreven voor zakelijke opdrachtgevers." },
      { k: "Opdracht", v: "Het geheel van werkzaamheden dat is vastgelegd in de offerte, bijvoorbeeld een website, branding, lokale SEO of conversie-optimalisatie." },
      { k: "Oplevering", v: "Het moment waarop het resultaat live gaat of ter goedkeuring wordt aangeboden." },
    ],
  },
  {
    id: "toepasselijkheid",
    titel: "Toepasselijkheid",
    alineas: [
      "Deze voorwaarden gelden voor elke offerte, opdracht en overeenkomst tussen Brandlift en de opdrachtgever, tenzij we samen schriftelijk iets anders afspreken.",
      "Wijkt de offerte af van deze voorwaarden, dan gaat de offerte voor. Inkoop- of andere voorwaarden van de opdrachtgever zijn niet van toepassing, tenzij Brandlift die uitdrukkelijk schriftelijk heeft aanvaard.",
    ],
  },
  {
    id: "offerte",
    titel: "Offerte en totstandkoming",
    alineas: [
      "Elke opdracht begint met een gratis gesprek en daarna een offerte met een vaste prijs. Die prijs is de prijs: we werken niet met nacalculatie voor wat in de offerte staat.",
      "Een offerte is dertig dagen geldig. De overeenkomst komt tot stand zodra de opdrachtgever de offerte schriftelijk of per e-mail akkoord geeft.",
      "Alle bedragen zijn exclusief BTW, tenzij er nadrukkelijk iets anders bij staat.",
    ],
  },
  {
    id: "uitvoering",
    titel: "Uitvoering en medewerking",
    alineas: [
      "Brandlift voert de opdracht naar beste inzicht en vermogen uit. Waar dat het resultaat ten goede komt, mag Brandlift derden inschakelen, bijvoorbeeld voor vertaalwerk of fotografie.",
      "Een project loopt alleen goed als de opdrachtgever op tijd aanlevert. Concreet vragen we om een intakegesprek, beeldmateriaal, één feedbackronde op het ontwerp en toegang tot bestaande zaken zoals domein, hosting en het Google Bedrijfsprofiel.",
      "Levert de opdrachtgever niet of te laat aan, dan schuift de planning op met minimaal die vertraging. Kosten die daardoor ontstaan komen voor rekening van de opdrachtgever.",
      "De opdrachtgever staat ervoor in dat aangeleverde teksten, foto's en logo's gebruikt mogen worden en geen rechten van derden schenden.",
    ],
  },
  {
    id: "termijnen",
    titel: "Termijnen",
    alineas: [
      "Een website is doorgaans binnen drie tot vier weken na het eerste gesprek live. Die termijn is een indicatie en geen fatale termijn: de werkelijke doorlooptijd hangt sterk af van hoe snel we materiaal en feedback terugkrijgen.",
      "Dreigt een termijn niet gehaald te worden, dan meldt Brandlift dat vooraf en niet achteraf.",
    ],
  },
  {
    id: "prijzen",
    titel: "Prijzen, betaling en meerwerk",
    alineas: [
      "Een website begint bij 1.500 euro exclusief BTW. Wat een specifieke opdracht kost staat in de offerte.",
      "Tenzij anders afgesproken factureert Brandlift vijftig procent bij aanvang en vijftig procent bij oplevering. Facturen worden binnen veertien dagen voldaan.",
      "Bij te late betaling is de opdrachtgever van rechtswege in verzuim. Brandlift mag dan de wettelijke handelsrente en redelijke incassokosten in rekening brengen en het werk opschorten tot er is betaald.",
      "Werk dat buiten de offerte valt is meerwerk. Brandlift voert meerwerk pas uit nadat de opdrachtgever met de omschrijving en de prijs akkoord is gegaan. Zonder dat akkoord blijft de oorspronkelijke prijs staan.",
    ],
  },
  {
    id: "garantie",
    titel: "Feedback, oplevering en garantie",
    alineas: [
      "In de offerte staat hoeveel feedbackrondes zijn inbegrepen. Onze werkwijze gaat uit van één grondige ronde op het ontwerp, waarin de opdrachtgever gerust streng mag zijn.",
      "Brandlift levert niets op waar de opdrachtgever niet achter staat: zit het resultaat er na de laatste ronde nog niet in, dan werken we zonder extra kosten door tot het klopt. Die garantie gaat over de uitvoering van wat in de offerte is afgesproken. Nieuwe wensen die daarbuiten vallen zijn meerwerk.",
      "Na oplevering heeft de opdrachtgever veertien dagen om gebreken te melden. Gebreken die aan Brandlift zijn toe te rekenen worden kosteloos hersteld.",
      "Brandlift belooft geen posities in Google en geen aantallen bezoekers of aanvragen. Zoekmachines bepalen hun eigen volgorde; wat we wel doen is alles inrichten waar we invloed op hebben.",
    ],
  },
  {
    id: "eigendom",
    titel: "Intellectueel eigendom",
    alineas: [
      "Zodra de opdrachtgever alles heeft betaald, gaan de gebruiksrechten op het opgeleverde werk over: de website, de teksten en de merkmiddelen zijn dan van de opdrachtgever. De site is van jou, niet van ons.",
      "Brandlift behoudt het recht om onderliggende technieken, componenten en werkwijzen die niet specifiek voor deze opdracht zijn ontwikkeld, ook voor andere opdrachtgevers te gebruiken.",
      "Brandlift mag het opgeleverde werk tonen in het eigen portfolio en er als referentie naar verwijzen, tenzij de opdrachtgever daar schriftelijk bezwaar tegen maakt.",
      "Licenties van derden, bijvoorbeeld voor lettertypen of beeldmateriaal, blijven gelden volgens de voorwaarden van die derden.",
    ],
  },
  {
    id: "hosting",
    titel: "Hosting, onderhoud en doorlopende diensten",
    alineas: [
      "Hosting, onderhoud en doorlopende lokale SEO zijn losse diensten die de opdrachtgever kiest als hij ze wil. Ze zitten niet automatisch bij een opdracht en er is geen verplichte doorloop.",
      "Doorlopende diensten worden per maand gefactureerd en zijn maandelijks opzegbaar met een opzegtermijn van één maand, tenzij in de offerte iets anders staat.",
      "Brandlift spant zich in voor een goede beschikbaarheid, maar is afhankelijk van externe leveranciers en kan geen ononderbroken beschikbaarheid garanderen.",
    ],
  },
  {
    id: "aansprakelijkheid",
    titel: "Aansprakelijkheid",
    alineas: [
      "Brandlift is alleen aansprakelijk voor directe schade die het gevolg is van een toerekenbare tekortkoming. De aansprakelijkheid is beperkt tot het bedrag dat voor de betreffende opdracht is gefactureerd, met een maximum van het bedrag dat de verzekeraar in dat geval uitkeert.",
      "Brandlift is niet aansprakelijk voor indirecte schade, waaronder gederfde omzet, gemiste opdrachten of gevolgschade.",
      "Deze beperkingen gelden niet bij opzet of bewuste roekeloosheid van Brandlift.",
      "De opdrachtgever is zelf verantwoordelijk voor de inhoud die hij aanlevert en voor het naleven van wet- en regelgeving die op zijn eigen bedrijfsvoering van toepassing is.",
    ],
  },
  {
    id: "overmacht",
    titel: "Overmacht",
    alineas: [
      "Bij overmacht worden de verplichtingen opgeschort. Onder overmacht valt in elk geval uitval bij hostingpartijen of andere leveranciers, langdurige ziekte en storingen buiten onze invloedssfeer.",
      "Duurt de overmacht langer dan zestig dagen, dan mogen beide partijen de overeenkomst schriftelijk beëindigen. Werk dat tot dat moment is verricht wordt afgerekend.",
    ],
  },
  {
    id: "beeindiging",
    titel: "Beëindiging",
    alineas: [
      "Beide partijen kunnen de overeenkomst tussentijds schriftelijk beëindigen. Het tot dan verrichte werk wordt naar rato afgerekend.",
      "Brandlift mag de overeenkomst per direct beëindigen als de opdrachtgever ondanks aanmaning niet betaalt of in staat van faillissement komt te verkeren.",
    ],
  },
  {
    id: "recht",
    titel: "Toepasselijk recht en geschillen",
    alineas: [
      "Op alle overeenkomsten met Brandlift is Nederlands recht van toepassing.",
      "Loopt er iets mis, dan zoeken we het eerst samen uit - een telefoontje lost meestal meer op dan een brief. Komen we er niet uit, dan wordt het geschil voorgelegd aan de bevoegde rechter in het arrondissement Den Haag.",
    ],
  },
];

export default function Page() {
  const schema = breadcrumbSchema(
    [
      { name: "Home", path: "/" },
      { name: "Algemene voorwaarden", path: PATH },
    ],
    PATH,
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LegalPage
        eyebrow="Juridisch"
        titel="Algemene voorwaarden"
        intro="De afspraken waaronder we werken. Geschreven om te lezen, niet om je af te schrikken: vaste prijs vooraf, geen verplichte doorloop, en we leveren niets op waar je niet achter staat."
        bijgewerkt={BIJGEWERKT}
        path={PATH}
        crumbLabel="Algemene voorwaarden"
        blokken={blokken}
      />
    </>
  );
}
