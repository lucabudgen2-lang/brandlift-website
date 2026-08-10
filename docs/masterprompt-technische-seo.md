# Masterprompt · volledige on-page en technische SEO-optimalisatie

Voor **brandliftagency.nl** (Next.js 16, App Router, Vercel, 28 routes).

---

## 0. Uitgangspunt: dit is een audit, geen herbouw

Grote delen hiervan zijn in eerdere rondes al gedaan: de entiteitsgraaf in
`lib/schema.ts`, de metadata-helper, de sitemap met echte datums, robots
met AI-crawlers, en een snelheidsronde (fonts, beelden, JS, caching).

De opdracht is dus niet "bouw SEO", maar:

1. **Verifieer** elk punt tegen de werkelijkheid - broncode én de live site.
2. **Repareer** wat aantoonbaar stuk is.
3. **Rapporteer eerlijk** wat al goed stond, en raak dat niet aan.
4. **Benoem expliciet** wat niet vanaf hier te controleren is.

Een afvinklijst die "OK" zegt zonder meting is waardeloos. Elk punt in het
eindrapport moet terug te voeren zijn op een commando of een bestand.

---

## 1. Meten, niet aannemen

Voor elke claim geldt: laat de meting zien.

- Live gedrag (redirects, headers, statuscodes) meet je met `curl`, niet
  door naar de broncode te kijken. Broncode zegt wat de bedoeling was;
  `curl` zegt wat er gebeurt.
- Interne structuur (canonicals, titels, alt-teksten, koppen, links) meet
  je door de **gerenderde HTML** te parsen van een draaiende build, niet
  door in JSX te grepen. Wat in de HTML staat is wat Google ziet.
- Schema valideer je met het bestaande `scripts/validate-schema.mjs` en
  daarnaast op structuur: verplichte velden, geldige types, en - het
  belangrijkste - **komt het overeen met wat er zichtbaar op de pagina
  staat**.

Schrijf waar nuttig een herbruikbaar auditscript in `scripts/`, zodat deze
controle later opnieuw te draaien is in plaats van eenmalig handwerk.

---

## 2. Wat er gecontroleerd moet worden

### Domein en redirects
- HTTPS werkt sitewide; HTTP stuurt door naar HTTPS
- Eén canonieke domeinvariant (www óf apex), de andere redirect ernaartoe
- **Let op de www-variant**: als DNS wel naar de host wijst maar het
  certificaat de naam niet dekt, krijgt de bezoeker een
  certificaatwaarschuwing. Dat is erger dan een 404 - de browser toont een
  volledige blokkadepagina. Controleer de SAN's van het certificaat.
- Trailing slash consistent afgehandeld
- Geen redirectketens (max één hop) en geen loops
- Hoofdlettergebruik in URL's consistent

### Crawlbaarheid en indexatie
- `robots.txt` klopt; niets belangrijks geblokkeerd
- `noindex` alleen waar bedoeld
- Canonicals aanwezig, absoluut, self-referencing
- Canonical en sitemap-URL zijn **letterlijk dezelfde string** (let op
  slash-verschillen op de homepage)
- Sitemap bevat uitsluitend canonieke, indexeerbare URL's - geen
  redirects, geen 404's, geen noindex-pagina's
- Elke route in `app/` staat in de sitemap, of er is een reden om dat niet
  te doen
- Navigatie bestaat uit echte `<a href>`-links
- Belangrijke inhoud staat in de HTML, niet alleen na hydratie

### Interne links
- Geen kapotte interne links
- Geen links naar redirects (link direct naar de eindbestemming)
- Custom 404 die de bezoeker verder helpt

### Metadata
- Elke pagina eigen `<title>` en `description`, geen duplicaten
- Lengtes binnen redelijke grenzen (title ±60, description ±155)
- Eén `<h1>` per pagina
- Open Graph en Twitter compleet en afgeleid van dezelfde bron als de
  `<title>` (anders lopen ze uiteen zodra iemand een titel wijzigt)

### Gestructureerde data (2026-niveau)
- Eén samenhangende `@graph` per pagina, geen losse eilandjes
- Stabiele `@id`'s, onderling verbonden met verwijzingen
- `Organization` + `LocalBusiness`/`ProfessionalService` voor het bedrijf
- `WebSite`, `WebPage`, `BreadcrumbList` per pagina
- `Service` op dienstpagina's, `Article` op kennisbank, `FAQPage` alleen
  bij zichtbare FAQ's, `VideoObject` alleen bij een zichtbare video
- **Nooit markup voor iets dat niet op de pagina staat.** Geen
  `aggregateRating`/`review` op eigen diensten - dat is in strijd met
  Google's richtlijnen en kan een handmatige maatregel opleveren.
- Alle JSON-LD valideert; geen dode `@id`-verwijzingen

### Afbeeldingen
- Elke betekenisdragende afbeelding heeft een unieke, beschrijvende
  `alt`; decoratieve afbeeldingen krijgen `alt=""`
- Geen "afbeelding van" of bestandsnamen als alt-tekst
- Moderne formaten (AVIF/WebP), passende afmetingen
- Below-the-fold lui geladen, **LCP-beeld juist niet**
- `width`/`height` of `fill` gezet, zodat er geen layout shift optreedt

### Prestaties (Core Web Vitals)
- LCP, INP, CLS gemeten - niet geschat
- Fonts, JS, CSS en third-party scripts beperkt
- Caching en compressie actief
- Serverresponstijd redelijk

### Analytics en Search Console
- GSC gekoppeld, sitemap ingediend
- GA4 (of alternatief) actief
- Index Coverage, crawlfouten, handmatige maatregelen, HTTPS-rapport en
  CWV-rapport nagelopen

---

## 3. Wat je van hieruit NIET kunt controleren

Wees hier expliciet over in het rapport in plaats van het stilzwijgend
over te slaan of te doen alsof het gecontroleerd is:

- Alles achter de login van Google Search Console: Index Coverage,
  crawlfouten, handmatige maatregelen, HTTPS-rapport, het CWV-rapport en
  of de sitemap daadwerkelijk is ingediend.
- Veldwaarden van Core Web Vitals (CrUX) bij weinig verkeer.
- Of GA4 daadwerkelijk data ontvangt.

Voor deze punten: lever een concrete lijst met wat de eigenaar zelf moet
klikken, in volgorde van belang.

---

## 4. Randvoorwaarden

- Nederlands in alle zichtbare tekst en in commentaar in de code.
- Gewone koppeltekens `-`, nooit kastlijnen.
- Niets verzinnen: geen reviews, aantallen, keurmerken of resultaten die
  niet aantoonbaar zijn. De site heeft één benoemde case (Hovenier
  Eykelenboom) en 5,0 op Google.
- Bestaande, werkende oplossingen niet "verbeteren" zonder aanleiding.
- Elke wijziging moet door `npx tsc --noEmit` en
  `node scripts/validate-schema.mjs` komen.

---

## 5. Oplevering

1. Een auditscript in `scripts/` dat herhaalbaar is.
2. De daadwerkelijke reparaties, met per reparatie de meting die het
   probleem aantoonde.
3. Een rapport in `docs/` met drie kolommen: **al goed** / **gerepareerd**
   / **actie voor de eigenaar**.
