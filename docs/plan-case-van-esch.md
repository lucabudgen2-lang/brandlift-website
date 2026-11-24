# Plan · casepagina R. van Esch Gevelrestauratie

`/cases/van-esch-gevelrestauratie` · 24 nov 2026 · opdracht Luca: "uitgebreid, elk onderwerp, neemt de lezer mee, overtuigt potentiële klanten, prachtig uniek interactief ontwerp; placeholders voor Rudy's review en video".

## 1. Waar de pagina voor is
De lezer is een vakman met een oud of eigenzinnig bedrijf (restauratie, metselwerk, hovenier, aannemer) die twijfelt of een bureau zijn vak wel snapt. De pagina moet in één scroll drie dingen bewijzen:
1. **Wij luisteren naar het vak**, niet naar een sjabloon: Rudy wilde niet gevonden worden als voegbedrijf, wel op zijn best betaalde werk. Het onderzoek bewees waar hij stond.
2. **Alles hangt samen**: onderzoek → Google-profiel → pagina's → merk → teksten → bouw → livegang. Elke stap met echt bewijs (data, schermen, maten).
3. **Samenwerken is licht voor de klant**: één formulier, twee calls, een testversie met een opmerkingenknop, en wij regelden de overstap.

## 2. Bronnen (gelezen, niet uit het geheugen)
| Wat | Bron |
|---|---|
| Fact-lock (wat wel en niet mag) | vault `klanten/van-esch-gevelrestauratie/PROJECT.md` §1-§6 |
| Verloop en data | `status.md`, geheugen `van-esch-gevelrestauratie.md`, `calls/2026-10-20-check-call.md`, `calls/2026-11-04-call.md` |
| SEO-onderzoek | `seo/ONDERZOEK.md` §1-§8 (rankmap-rasters §3, woordenboek §5, huidige site §7) |
| Google-profiel | `gbp/UITVOERING.md`, status 6 + 14 nov |
| Merkboek | `merk/merkboek-vanesch.json` (ontleding, kleuren), `merk/merkboek.py` (skyline-spread), PDF v1.0 (28 p.) |
| Ontwerp | `ontwerp/ONTWERPBRIEF.md`, PROJECT §6 |
| Feedback | `feedback/FEEDBACK-ronde1.md` (62 opmerkingen, 58 verwerkt) |
| Livegang | `LIVEGANG-CLOUDFLARE.md` ("LIVE 18 nov 2026") |
| Reviews Rudy | `reviews/google.json` (5,0 uit 22, 23 nov) |
| Snelheid | Lighthouse 13.6 op de live homepage, 24 nov 2026 (desktop 99/97/100/100, mobiel 92/97/100/100) |

## 3. Wat er NIET op komt (vertrouwelijk of fact-lock)
Prijs en betaling, maandbedragen en het afgevallen maandpakket, bezwaren uit de calls ("puur voor mezelf", "niet iets voor ons"), Novosite-kosten en DNS-details, telefoonnummers, adres, familie, concurrentnamen, Total Wall (alleen: "een verlopen certificaatclaim"), VCA, superlatieven, "weinig concurrentie", resultaten in rankings (live pas 6 dagen; geen nieuwe meting), groeibeloftes, doorlopend meten (geen retainer).

## 4. Opbouw (13 secties)
| # | Sectie | Signatuur / interactie | Bewijs |
|---|---|---|---|
| 0 | **Hero**: H1 "R. van Esch Gevelrestauratie: onzichtbaar restaureren, eindelijk zichtbaar online" | Browser + telefoon met de live site; badge "Van eerste gesprek tot livegang: 9 weken" | 15 sept koude call → 18 nov live |
| 1 | **Wie is Rudy** + kaart "In het kort" | **Skyline die echt bestaat** (signatuur): het echte logosilhouet uit het vectorbestand; tik op toren, molen, gevel of kerktoren en de echte klus verschijnt | merkboek spread 01, foto's uit de site |
| 2 | **De uitdaging** | **Voor/na-schuif** oude site ↔ nieuwe site; lijst van wat de oude site deed | ONDERZOEK §7, analyse 23 sept |
| 3 | **Het traject in 8 stappen** | klikbaar overzicht + voortgangsrail (FaseRail, nu met props) | |
| 4 | Stap 01 **Analyse vóór de eerste euro** | analyse + homepageconcept voor het tekenen | vanesch-analyse.vercel.app |
| 5 | Stap 02 **Onboarding** | 19 delen, vakkennis tot mortelverhoudingen, Drive met projectmappen | onboarding, PROJECT §8 |
| 6 | Stap 03 **SEO-onderzoek** | **Rankmap-raster 7×7** (signatuur): schakel tussen gevelrestauratie, voegwerk, scheurherstel, knipvoeg; plus het woordenboek (wel / bewust niet) | ONDERZOEK §2-§5 |
| 7 | Stap 04 **Google-profiel = site** | **Spiegel**: 3 categorieën links, 3 pagina's rechts, diensten eronder; hover koppelt | ONDERZOEK §8, GBP 6+14 nov |
| 8 | Stap 05 **Merkboek** | **Logo ontleed** (signatuur): 7 genummerde punten op het echte logo, tik voor de maat; kleur uit de muur (steen en kalkvoeg gemeten op foto's); letter | merkboek-vanesch.json |
| 9 | Stap 06 **Ontwerp** | ScrollBrowser desktop + mobiel; vier elementen die alleen bij Rudy passen (voor/na-schuif, kaart, bedankjes, 404 "Hier ontbreekt een steen") | PROJECT §6, status |
| 10 | Stap 07 **Teksten en bouw** | Lighthouse-ringen (props), pijlers: 20 pagina's, blinde lezers met geplante fouten, oude URL's doorgestuurd, schema | status 12-31 okt |
| 11 | Stap 08 **Samenwerking en livegang** | **Metselverband-tijdlijn** (signatuur): elke steen is een moment, van de eerste call tot de livegang | status, calls |
| 12 | **Rudy aan het woord** | placeholder video (16:9, merkkleuren, "volgt binnenkort") + placeholder Google-review | geen nep-citaat, geen schema |
| 13 | Andere cases + CTA | CasesCarousel, CtaBlock | |

## 5. Componenten
Nieuw in `components/cases/vanesch/`: `SkylineEcht`, `RankmapRaster`, `ProfielSpiegel`, `LogoOntleed`, `MetselTijdlijn`, `RudyPlaceholders`.
Hergebruik (algemener gemaakt, Giorgi blijft gelijk): `FaseRail` (prop `fases`), `LighthouseRingen` (prop `data`), `Frames`, `ScrollBrowser`, `VergelijkSlider`.
Data: één bronbestand `lib/cases/vanesch.ts` met per getal de bron in commentaar.

## 6. Overal elders
- `lib/site.ts` → `cases`: Van Esch vooraan; grid met 5 kaarten: eerste kaart breed (geen wees).
- `lib/nav.ts` → Cases-paneel; `app/sitemap.ts`; `scripts/audit-seo.mjs` ROUTES.
- Schema: `caseSchema` zonder `video` (pas als de echte video er is).
- `klanten.json` → brandlift-website `sta_toe`: Van Esch-termen.

## 7. Poort
tsc · validate-schema · audit-seo · check-nav · restantenscan `--streng` · desktop + 375 mobiel visueel · onafhankelijke Opus-review (read-only, geen betaalde calls): claims tegen de fact-lock en §3.
Branch `case/van-esch` + Vercel-preview. **Niet naar main zonder go van Luca.**

## 8. Besluiten voor Luca
- **B1** Rankmap-cijfers van Rudy publiceren (34,7% gevelrestauratie, 0% scheurherstel en knipvoeg, 6,1% voegwerk; zonder concurrentnamen).
- **B2** Rudy's projectfoto's en portret op onze site (overeenkomst art. 13: portfoliogebruik toegestaan).
- **B3** Rudy's eigen woorden uit het formulier als citaat ("mijn foto's moeten het meeste werk doen").
- **B4** "De eerste aanvragen kwamen in de eerste week binnen" (aanvragen 18, 20, 21 nov).
- **B5** De oude site (schermafbeelding uit de analyse van 23 sept) als "voor".
