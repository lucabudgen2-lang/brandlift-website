# Technische SEO-audit · brandliftagency.nl

Uitgevoerd augustus 2026 volgens `docs/masterprompt-technische-seo.md`.
Elk punt hieronder is gemeten, niet aangenomen. Het commando of bestand
staat erbij, zodat de controle herhaalbaar is.

Herhalen:

```
npx next dev -p 8792
node scripts/audit-seo.mjs http://localhost:8792
node scripts/validate-schema.mjs http://localhost:8792
```

---

## Gerepareerd

### 1. www gaf een certificaatwaarschuwing (ernstig)

`www.brandliftagency.nl` had wél een CNAME naar Vercel, maar stond niet
als domein op het project. Daardoor dekte het certificaat alleen de kale
domeinnaam:

```
$ echo | openssl s_client -connect brandliftagency.nl:443 \
    | openssl x509 -noout -text | grep -A1 "Subject Alternative Name"
    X509v3 Subject Alternative Name:
        DNS:brandliftagency.nl

$ curl -sSI https://www.brandliftagency.nl
curl: (60) SSL: no alternative certificate subject name matches
      target host name 'www.brandliftagency.nl'
```

Iedereen die "www.brandliftagency.nl" intypte, kreeg dus een volledige
blokkadepagina van de browser. Dat is schadelijker dan een 404: het ziet
eruit alsof de site onveilig is.

Opgelost door www als domein aan het project toe te voegen (waarmee er
een certificaat voor wordt uitgegeven) plus een permanente redirect naar
de kale variant in `next.config.mjs`. Zonder die redirect zou www
dezelfde site serveren en had je duplicate content op twee hostnamen.

### 2. Meta description te lang op de casepagina

191 tekens; daarboven kapt Google af. Teruggebracht tot 156.
Gevonden met `scripts/audit-seo.mjs`.

---

## Al goed - niet aangeraakt

| Punt | Meting |
|---|---|
| HTTPS sitewide | `curl -I https://brandliftagency.nl` -> 200 |
| HTTP -> HTTPS | `http://` -> 308 -> `https://` |
| HSTS | `strict-transport-security: max-age=63072000` |
| Trailing slash | `/contact/` -> 308 -> `/contact` |
| Geen redirectketens | alle geteste redirects zijn één hop |
| Custom 404 | `app/not-found.tsx`, statuscode 404 |
| Canonicals | 28/28 aanwezig, absoluut, self-referencing |
| Canonical = sitemap-URL | beide via `absoluteUrl()` in `lib/metadata.ts` |
| Titles uniek | 28/28, geen duplicaten |
| Descriptions uniek | 28/28, geen duplicaten |
| Eén `<h1>` per pagina | 28/28 |
| Open Graph + Twitter | compleet, afgeleid van dezelfde bron als `<title>` |
| Onbedoelde noindex | geen enkele |
| robots.txt | live, niets belangrijks geblokkeerd, AI-crawlers bewust toegestaan |
| Sitemap | 26 canonieke URL's, geen redirects/404's/noindex |
| Kapotte interne links | 0 van 28 unieke bestemmingen |
| Links naar redirects | 0 |
| Crawlbare navigatie | 45 echte `<a href>` in de HTML van de homepage |
| Inhoud in HTML | server-gerenderd, niet pas na hydratie |
| Alt-teksten | 0 ontbrekend, 0 bestandsnamen, 0 zwakke patronen |
| LCP-beeld niet lazy | eerste `<img>` op elke geteste pagina is eager |
| Below-the-fold lazy | 60 van 63 op de homepage |
| CLS door beelden | 0 afbeeldingen zonder afmetingen of `fill` |
| AVIF/WebP | `next.config.mjs` -> `formats: ["image/avif","image/webp"]` |
| Statische assets | `cache-control: public,max-age=31536000,immutable` |
| Gestructureerde data | 61 JSON-LD-blokken, 2035 nodes, 580 `@id`'s, 372 verwijzingen, 0 dood |
| Geen valse rich results | geen `aggregateRating`/`review` op eigen diensten |

### Core Web Vitals (Lighthouse 13.4, desktop, lab)

| Meting | Waarde |
|---|---|
| Performance | **100** |
| SEO | **100** |
| Best Practices | **100** |
| Accessibility | 93 |
| LCP | **684 ms** (drempel 2500) |
| FCP | 304 ms |
| Speed Index | 624 ms |
| Serverresponstijd | 13 ms |
| Max potential FID | 28 ms |
| Totale paginagrootte | 567 KB |

---

## Actie voor de eigenaar

Deze punten zijn van hieruit niet te controleren of te doen.

1. **DNS voor www opruimen.** Het CNAME staat er al; de redirect werkt
   zodra Vercel het certificaat heeft uitgegeven (meestal binnen enkele
   minuten). Controleer daarna zelf:
   `curl -I https://www.brandliftagency.nl` -> moet 308 naar de kale
   variant geven, zonder certificaatfout.
2. **Google Search Console.** Controleer Index Coverage, crawlfouten,
   handmatige maatregelen, het HTTPS-rapport en het Core Web
   Vitals-rapport. Dien de sitemap in als dat nog niet is gebeurd:
   `https://brandliftagency.nl/sitemap.xml`. Voeg **ook de
   www-property** toe, zodat je ziet of daar nog verkeer op binnenkomt.
3. **GA4 of een alternatief.** Er staat op dit moment geen analytics op
   de site. Zonder meting is elke verdere SEO-beslissing giswerk.
4. **Veldwaarden CWV.** De cijfers hierboven zijn labdata. Echte
   gebruikersdata (CrUX) verschijnt pas bij voldoende verkeer, in het
   CWV-rapport in Search Console.
5. **Accessibility 93.** Geen SEO-blokkade, maar de resterende punten
   zijn wel de moeite waard. Vraag hier een aparte ronde voor aan als je
   naar 100 wil.

---

## Bewust niet gedaan

- **Hoofdletters in URL's redirecten.** `/Contact` geeft nu 404. Dat is
  correct: de site linkt zelf uitsluitend naar kleine letters, dus Google
  komt die variant niet tegen. Een redirect toevoegen zou een probleem
  oplossen dat niet bestaat.
- **Juridische pagina's in de sitemap.** `/privacybeleid` en
  `/algemene-voorwaarden` staan er bewust niet in. Ze zijn wel
  indexeerbaar en bereikbaar via de voettekst; ze hoeven alleen niet als
  belangrijke pagina te worden aangeboden.
- **`Host:` uit robots.txt halen.** Die regel wordt door Google genegeerd
  (het was een Yandex-directive). Hij doet geen kwaad, dus laten staan.
