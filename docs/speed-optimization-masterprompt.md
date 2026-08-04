# MASTERPROMPT - Snelheidsoptimalisatie brandliftagency.nl

## Rol

Je bent een performance-engineer die Core Web Vitals optimaliseert voor een
Next.js 16 site op Vercel. Je optimaliseert voor **echte gebruikers op een
middenklasse Android op 4G**, niet voor een score in een dashboard. Een hogere
PageSpeed-score die de site niet echt sneller maakt is geen resultaat.

## Opdracht

Maak brandliftagency.nl aantoonbaar sneller op alle apparaten, voor bezoekers
en voor Google, zonder dat het ontwerp verandert.

---

## Harde randvoorwaarden

1. **Het ontwerp verandert niet.** Geen enkele sectie mag er anders uitzien.
   Animaties mogen technisch anders worden opgebouwd, maar het zichtbare
   resultaat moet identiek zijn. Wordt een verschil onvermijdelijk, meld het
   en vraag toestemming in plaats van het door te voeren.
2. **Meten, niet aannemen.** Elke claim over winst moet onderbouwd zijn met een
   getal dat je zelf hebt gemeten, voor en na. "Dit zou sneller moeten zijn" is
   geen bewijs. Als iets niet meetbaar sneller werd, zeg dat.
3. **Geen functionaliteit slopen.** Formulieren, de calculator, de nav, de
   lightbox-galerij, de kaart en de WhatsApp-knop moeten na afloop nog werken.
   Test ze, klik ze aan.
4. **Geen kwaliteitsverlies in beeld dat opvalt.** Compressie is prima tot het
   punt waarop een foto zichtbaar slechter wordt. Bekijk de beelden, vergelijk
   ze, kies niet blind een cijfer.
5. **Nederlandse teksten, gewone koppelstreepjes.** Nooit em- of en-streepjes.
6. **Commentaar in de code legt uit waarom, niet wat.** Vooral bij niet voor de
   hand liggende keuzes.

---

## Gemeten uitgangssituatie

Dit is echt gemeten op 4 augustus 2026, niet geschat:

| Bevinding | Meting |
|---|---|
| `public/` totaal | **34 MB** (19 MB alleen `images/`) |
| `favicon.png` - laadt op **elke** pagina, ongeoptimaliseerd | **436 KB** |
| `earth.mp4` op de 404-pagina, `autoPlay` zonder `preload` of `poster` | **13 MB** |
| `hero-showcase.png` - nergens gerefereerd | 1857 KB dood gewicht |
| `luca-desk.jpg` - nergens gerefereerd | 552 KB dood gewicht |
| Beeldoptimalisatie levert **WebP, geen AVIF** | hero op 1200px = 93 KB |
| `next.config.mjs` | alleen `reactStrictMode` - geen beeld- of bundelconfiguratie |
| Lettertypen | 3 families, **13 gewichten** in totaal |
| JetBrains Mono (3 gewichten geladen) | `font-mono` komt **1 keer** voor in de hele codebase |
| Client components | 25, waaronder `Reveal`/`LineReveal` die op vrijwel elke pagina staan |
| Gebouwde JS | 1,4 MB ongecomprimeerd over alle chunks |
| HTML over de lijn | 17-40 KB per pagina - dit is gezond, hier ligt het probleem niet |

**Conclusie vooraf:** het probleem zit niet in de HTML en grotendeels niet in de
JS. Het zit in statische ballast en in een beeldpijplijn die niet is
geconfigureerd.

---

## Workstreams

Werk ze in deze volgorde af. De eerste twee leveren het meeste op voor het
minste risico; begin daar en verifieer voordat je verdergaat.

### W1 - Dode en veel te zware statische ballast

- `favicon.png` van 436 KB naar onder de 5 KB. Dit is de grootste makkelijke
  winst op de hele site: hij wordt op elke pagina opgehaald en gaat niet door de
  optimizer heen. Lever een net formaat (bij voorkeur meerdere maten, plus een
  `apple-touch-icon`) en controleer dat het icoon in de browsertab er nog goed
  uitziet - kleiner mag niet betekenen dat hij korrelig wordt.
- Verwijder `hero-showcase.png` en `luca-desk.jpg`. Controleer eerst zelf
  opnieuw dat ze echt nergens worden gebruikt; vertrouw niet blind op de tabel
  hierboven.
- De 404-video: 13 MB die automatisch begint te spelen zodra iemand op een dode
  link klikt. Kies zelf de beste oplossing en verantwoord hem. Opties zijn onder
  meer: sterk hercomprimeren, een `poster` met `preload="none"` zodat er niets
  laadt tot de video echt speelt, of hem vervangen door een stilstaand beeld.
  Wat je ook kiest, de 404-pagina mag geen megabytes meer kosten.
- Kam `public/` verder uit op bestanden die nergens worden gebruikt.

### W2 - De beeldpijplijn configureren

- Zet AVIF aan in `next.config.mjs` (`formats`), zodat moderne browsers de
  kleinere variant krijgen en de rest terugvalt op WebP. Meet daarna opnieuw wat
  er over de lijn gaat en rapporteer het verschil in KB.
- Loop elke `next/image` langs en controleer:
  - staat er een correcte `sizes` die klopt met hoe breed het beeld echt is per
    breakpoint (een verkeerde `sizes` laat mobiel een desktopbestand ophalen),
  - staat `priority` alleen op beelden die echt boven de vouw staan, en op
    hoogstens één per pagina,
  - hebben niet-kritieke beelden `loading="lazy"`.
- Comprimeer de bronbestanden zelf waar dat kan zonder zichtbaar verlies. Ze
  gaan weliswaar door de optimizer, maar ze zitten wel in elke deploy en in de
  eerste optimizer-run.
- Let op de vastgelegde regel in dit project: **overschrijf nooit een bestaande
  afbeelding op dezelfde bestandsnaam** - de optimizer serveert dan de oude. Nieuwe
  naam, oude verwijzing bijwerken.

### W3 - Lettertypen op dieet

- JetBrains Mono levert drie gewichten voor precies één gebruik van `font-mono`.
  Onderzoek dat ene gebruik en beslis: schrappen, of terugbrengen tot het ene
  gewicht dat nodig is.
- Controleer per familie welke gewichten echt worden gebruikt. Let op: het
  ontbreken van de klasse `font-normal` betekent **niet** dat gewicht 400
  ongebruikt is - dat is de standaardwaarde voor bodytekst. Ga dit na in de
  gerenderde pagina voordat je iets weghaalt.
- Controleer dat `display: "swap"` overal staat en dat het kritieke lettertype
  vroeg wordt geladen, zodat tekst niet onzichtbaar is tijdens het laden.

### W4 - JavaScript en hydratatie

- `Reveal` en `LineReveal` trekken framer-motion vrijwel elke pagina in, voor
  wat in de kern een fade-up bij scrollen is. Onderzoek of dit met CSS
  (`@starting-style`, scroll-driven animaties, of een IntersectionObserver van
  een paar regels) hetzelfde resultaat geeft.
  **Meet eerst hoeveel het daadwerkelijk scheelt** in de bundel. Blijkt de winst
  klein, doe het dan niet - dit is de meest risicovolle wijziging in deze lijst
  en een kapotte animatie op elke pagina is de prijs niet waard.
- Zoek client components die server components hadden kunnen zijn: een
  component met `"use client"` maar zonder state, effect of event handler hoort
  die richtlijn niet te hebben.
- Zet `optimizePackageImports` aan voor de zware afhankelijkheden.
- Controleer of zware, onderaan-de-pagina componenten (calculator, galerij,
  kaart) dynamisch geladen kunnen worden zonder dat het zichtbaar hapert.

### W5 - Renderpad en LCP

- Bepaal per sjabloon welk element het LCP-element is. Raad dit niet: meet het.
- Zorg dat dat element zo vroeg mogelijk begint te laden en niets ervoor in de
  weg staat.
- Controleer op layout shift (CLS): elk beeld en elke ingesloten kaart hoort
  vooraf gereserveerde ruimte te hebben.
- De homepage-hero heeft een achtergrondfoto plus geanimeerde lichtbundels plus
  een blur-glow. Controleer wat dat kost op een middenklasse toestel en of de
  animaties het schilderwerk van de hero vertragen.

### W6 - Derden en uitgesteld laden

- De Google Maps-iframe op contact en over-ons is een zware embed van een derde
  partij. Onderzoek of hij pas hoeft te laden wanneer hij in beeld komt, of dat
  een statische kaartafbeelding met een link naar Maps volstaat.
- Controleer de WhatsApp-knop en de groeigesprek-modal: die staan in de root
  layout en laden dus op elke pagina mee.

### W7 - Cachen en headers

- Controleer welke cache-headers Vercel meegeeft aan statische assets en of daar
  iets aan ontbreekt.
- Controleer of er onnodige redirects in het pad zitten.

---

## Verificatieprotocol

Voor elke workstream:

1. **Meet vooraf** en noteer het getal.
2. Voer de wijziging door.
3. **Meet achteraf** met exact dezelfde methode.
4. `npm run build` moet slagen. De dev-build vangt geen typefouten - alleen de
   productiebuild telt.
5. Controleer visueel in de browser, op **375px en op desktop**, dat er niets is
   veranderd aan het ontwerp.
6. Klik de interactieve onderdelen aan die je hebt geraakt.

Aan het eind:

- Draai `node scripts/validate-schema.mjs` - de gestructureerde data moet nog
  kloppen.
- Loop alle 26 routes langs op console-fouten.
- Rapporteer een tabel: metriek, voor, na, verschil. Alleen gemeten getallen.

---

## Klaar wanneer

- Elke bevinding uit de tabel hierboven is opgelost of onderbouwd afgewezen.
- Geen enkele pagina laadt nog een asset boven de 200 KB die vermijdbaar was.
- Het ontwerp is op geen enkel punt veranderd.
- Alle formulieren en interactieve componenten werken nog.
- De productiebuild slaagt en de schemavalidatie is schoon.
- Er ligt een eerlijk voor-en-na-overzicht, inclusief wat je bewust **niet**
  hebt gedaan en waarom.

## Wat je niet moet doen

- Niet de PageSpeed-score najagen met trucjes die echte gebruikers niet helpen.
- Niet alles tegelijk wijzigen: dan weet je niet wat de winst opleverde.
- Niet meer beloven dan je hebt gemeten.
- Geen enkele afbeelding overschrijven op dezelfde bestandsnaam.
