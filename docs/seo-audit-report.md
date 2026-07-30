# SEO-audit en optimalisatie

Datum: 2026-07-30 · Scope: on-page + technisch, lokale SEO 2026

---

## Kritieke fouten die zijn gevonden en opgelost

### 1. Elf pagina's verklaarden zichzelf de homepage
`app/layout.tsx` zette `alternates: { canonical: "/" }`. Next.js erft layout-metadata naar elke
pagina die het niet overschrijft, dus onder meer `/contact`, `/diensten`, `/cases`, `/kennisbank`
en `/over-brandlift` stuurden `rel=canonical → https://brandliftagency.nl`. Dat is een direct
de-indexeersignaal op belangrijke URL's.

**Opgelost:** canonical uit de layout gehaald, self-canonical op alle 30 routes.

### 2. Elke titel eindigde op "- Brandlift | Brandlift"
Pagina's zetten zelf `- Brandlift` achter hun titel, terwijl de layout-template ook al
` | Brandlift` toevoegde. 23 van de 30 titels liepen daardoor over de afkapgrens van Google.

**Opgelost:** achtervoegsel uit de pagina-titels, alle titels ≤ 60 tekens inclusief template.

### 3. Geen enkele OG-afbeelding op de hele site
Elke gedeelde link - WhatsApp, LinkedIn, Slack, AI-antwoorden - liet een lege preview zien.

**Opgelost:** `app/opengraph-image.tsx` rendert een merkkaart (1200×630) plus een
`summary_large_image` Twitter-kaart.

### 4. Sitemap zei dat alles elke dag wijzigde
`lastModified: new Date()` betekende: bij elke deploy claimt élke URL dat hij vandaag is
gewijzigd. Als alles altijd nieuw is, is niets nieuw.

**Opgelost:** echte datums per pagina, gelijk aan de zichtbare byline.

### 5. Ontbrekend telefoonnummer in lokale schema
Een van de zwaarste lokale signalen ontbrak volledig.

**Opgelost:** `telephone` (E.164) op Organization, ProfessionalService en ContactPoint.

---

## Entiteitsgraaf

`lib/schema.ts` was een verzameling losse eilandjes die dezelfde entiteiten telkens iets anders
herdefinieerden. Nu één samenhangende graaf met een vast `@id`-register:

| `@id` | Type |
|---|---|
| `/#organization` | Organization |
| `/#localbusiness` | ProfessionalService |
| `/#website` | WebSite |
| `/#founder` | Person (E-E-A-T-anker) |
| `{path}#webpage` | WebPage |
| `{path}#breadcrumb` | BreadcrumbList |
| `{path}#service` | Service |
| `{path}#faq` | FAQPage |

**Verrijkingen:**
- `LocalBusiness` → `ProfessionalService` (specifieker type = scherpere entiteit)
- `hasMap` via de canonieke cid-URL, afgeleid uit de hex in de Maps-URL en geverifieerd tegen
  de CID uit de GBP-console
- `sameAs`: Instagram, Facebook, LinkedIn (bedrijf) en het Google Bedrijfsprofiel
- `areaServed`: de zes steden waar we echt pagina's voor hebben, niet alleen "Nederland"
- `hasOfferCatalog` met de publiek gecommuniceerde vanaf-prijzen, `valueAddedTaxIncluded: false`
- `aggregateRating` 5,0 / 8 op de bedrijfsnode - uitsluitend de echte Google-reviews
- `legalName: "Luca Budgen"` (eenmanszaak; Brandlift is de handelsnaam)

**Dekking:** alle 30 routes hebben een passend paginatype. Nieuw toegevoegd: CollectionPage +
ItemList op de hubs, ContactPage, Article op cases en kennisbank, WebApplication op de
calculator, BreadcrumbList overal.

---

## Bewust weggelaten

Geen data = geen veld. Liever een incompleet dan een onjuist schema.

| Veld | Reden |
|---|---|
| `vatID` | Niet aangeleverd |
| `numberOfEmployees` | Geen echt aantal bekend |
| `award`, `hasCredential` | Niets reëels om te claimen |
| `hreflang` | De Engelse versie bestaat nog niet. Hreflang naar niet-bestaande URL's is schadelijk. Patroon staat gedocumenteerd in `layout.tsx` voor wanneer EN live gaat. |

---

## AI-crawlers: bewust toegestaan

`robots.ts` staat GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended,
Applebot-Extended, CCBot en meta-externalagent expliciet toe. Brandlift verkoopt gevonden
worden; antwoordmachines zijn in 2026 een echt vindkanaal. De site bevat geen persoonsgegevens
of betaalde content, dus er valt niets af te schermen.

---

## Verificatie

| Controle | Resultaat |
|---|---|
| `npm run build` | schoon |
| JSON-LD parseert op alle 30 routes | ja |
| `@id`-verwijzingen die nergens op uitkomen | geen |
| Self-canonical op alle routes | ja |
| Titels ≤ 60, beschrijvingen 120-158 | alle 30 binnen bereik |
| Afbeeldingen zonder alt | geen |
| OG-route | 200, geldige 1200×630 PNG |
| Console-fouten | geen |
| Horizontale overflow (375 px) | geen |
| Verzonnen cijfers/claims | geen |

De honesty-sweep gaf drie treffers die alle drie vals-positief zijn: "klantnummer 147"
(retorisch), "tientallen aanbieders" (over concurrenten, niet over onze klanten) en
"plek nummer 1 garanderen? Nee, en niemand kan dat" (juist de eerlijke weigering).

---

## Nog open

1. **BTW-nummer** voor `vatID` - overgeslagen op verzoek, kan alsnog.
2. **Alt-tekst van `hero-bg.jpg`** stond op "Het kantoor van Brandlift in Den Haag". Het beeld
   is een gerenderde merkvisual, geen foto van een echt kantoor, dus die claim is aangepast naar
   een beschrijving van wat er te zien is. Als dit wél het echte kantoor is, kan het terug.
3. **De tien pagina's in aanbouw** blijven indexeerbaar (jouw keuze). Ze hebben nu wel een
   self-canonical, dus ze kunnen andere URL's niet meer schaden.
4. **Google Search Console** - verificatie en sitemap-indiening staan nog open.
