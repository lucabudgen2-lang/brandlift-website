# Masterprompt · Case-pagina Hovenier Eykelenboom (v1 · 2026-07-31)

Herbouw `/cases/hovenier-eykelenboom` van een 3-bloks samenvatting naar het
volledige verhaal van het traject - de bewijspagina van de hele site, en
tegelijk een verticale landingspagina voor "website laten maken voor hoveniers".

## Geverifieerde feiten (enige toegestane bron)

- Eigenaar: Sebastiaan Eykelenboom · actief sinds 2016 · Den Haag e.o.
- Oude site: WordPress, 6 routes, één pagina voor alles.
  Oude title: "Hovenier Den Haag | Tuinontwerp, Tuinaanleg & Onderhoud"
- Nieuwe site: 34 routes = 7 kern (home, over-ons, projecten, blog,
  werkgebieden, contact, privacy) + 7 GBP-categoriepagina's (tuinaanleg,
  tuinonderhoud, tuinontwerp, boomverzorging, gazonverzorging,
  aannemer-voor-bestrating, bouwer-van-verandas) + 20 verdiepende
  dienstpagina's. Nieuwe title: "Tuinman Den Haag | Persoonlijke Hovenier |
  Eykelenboom". Dienstpagina's ~2.000 woorden (tuinaanleg 1.972/17 H2s,
  boomverzorging 1.992/13 H2s). Werkgebied 12+ plaatsen.
- Homepage-secties (echt): Vraag tuinadvies aan (2x), Wat Klanten Zeggen,
  Recente Projecten, Waarom kiezen, Over Sebastiaan, Zo werken wij, Diensten,
  Werkgebied, Contact & Locatie, FAQ.
- Zoekwoordenonderzoek (CSV geverifieerd): 188 zoekwoorden, 42 clusters,
  4 topics (Locaties/Tuinonderhoud/Tuinaanleg/Tuinontwerp), samen ±10.700
  zoekopdrachten p/m. "hovenier den haag" 480 p/m · "tuinman den haag" 140 p/m.
- Merk: Gloock (display) + Inter Tight (tekst), logo-suite, mockups
  (bus, visitekaartje, pet, t-shirt, briefpapier) - staan in
  public/images/cases/eykelenboom/. Portret Sebastiaan idem.
- Resultaat: 2 → 24 aanvragen p/m - ALTIJD toeschrijven aan het complete
  traject, nooit aan één discipline. GBP-categorie is "Tuinman"; re-theming
  NIET uitleggen op de pagina, alleen de titels feitelijk tonen.

## Signature-secties

1. **Core30Boom** - adaptatie van het Howdy-dropdowndiagram (verticale stam,
   tiers, chamfer-chips; klik = in-place uitklappen). Brandlift-blauw i.p.v.
   rood. Home klapt uit naar de echte homepage-secties; elke categorie klapt
   uit naar zijn echte onderliggende dienstpagina's. Statregel: 34 pagina's ·
   7 categorieën · 20 verdiepingen · was 6.
2. **FormuleDrieluik** - Verkeer · Vertrouwen · Conversie als interactieve
   pijlers; elk paneel = definitie + wat dat in DIT project concreet was.
   Kadert de hele case: elke oplevering valt onder één van de drie.
3. **Video-testimonial placeholder** - nette "binnenkort"-sectie; video en
   Google-review van Sebastiaan volgen. TODO in code.

## Structuur (13 secties)

Hero (donker, portret Sebastiaan) → In het kort (feitentabel + oplevering-chips)
→ Wie is Eykelenboom → Het startpunt (6 pagina's WP + oude vs nieuwe title,
voor/na-blok) → De formule (drieluik) → Fase 1 Onboarding & onderzoek (echte
onderzoekscijfers) → Fase 2 Rebrand (mockup-galerij, Gloock/Inter Tight) →
Fase 3 GBP & Core 30 (diagram) → Fase 4 Design & development (~2.000 wrd/pag,
schema, snelheid) → Fase 5 Fotografie, oplevering & meten → Resultaat
(2→24-monument + eerlijke attributie) → Video-placeholder → CasesCarousel + CTA.

## Regels

Huisstijl-tokens, bestaande primitieven (Reveal/LineReveal/Eyebrow/chamf),
Nederlands/je-vorm, korte streepjes, geen verzonnen cijfers of quotes, geen
AnimatePresence mode="wait", letterlijke Tailwind-klassen, buildPageMetadata +
caseSchema, interne links naar branding/lokale-seo/website-pijler/Den Haag-
pagina's/vakbedrijven/werkwijze.

## Verificatie

Prod-build · curl-parse (title/OG/H-structuur/schema) · Core30Boom en
FormuleDrieluik aantoonbaar aanklikken in de browser · mobiel 375px zonder
overflow · eerlijkheids-sweep (geen percentages/verzonnen aantallen; 2→24
alleen met traject-attributie).
