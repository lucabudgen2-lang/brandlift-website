# Brandlift Website - Sitemap & Page-Structure Sheet (v1)

> **Step 1 of 3.** This is the master page inventory that drives the build, derived from the DataForSEO research (`dfs-track1/2/3` + `dfs-keywords-commercial.csv`). Next steps: (2) per-page plan = H-structure + goal, (3) write content. Reviews + backlinks are handled by Luca (out of scope here, but they gate every local page - see §5).
>
> Date: 2026-07-13 · Location target: Netherlands / nl · Volume = **recent 3-month avg** (not the inflated 12-mo, see volume caveat).
>
> **Scaffolding status (2026-07-13):** all 8 NEW pages now exist as on-brand `PageStub` routes and are wired into the nav + footer + sitemap. Every page in this sheet is reachable from the nav bar. Content + design still to come (Steps 2-3). The two `(optional)` Tier-D articles (D4/D5) were NOT scaffolded (uncommitted); legal pages (F1/F2) live in the footer only, per convention.

---

## 1. How to read this

- **Status:** `DONE` = fully designed + content · `STUB` = route exists, PageStub placeholder · `NEW` = doesn't exist yet.
- **Phase:** build order. **P1** = research quick-wins (win without the authority/review moat) · **P2** = complete the core site (trust + coverage) · **P3** = scale (more cities/articles, needs authority + reviews first).
- **Vol / KD:** recent-3mo search volume / keyword difficulty (0-100). `-` = no clean single datapoint.
- **Goal:** the one job the page must do (rank + convert action).

The research's central strategic finding governs the priority: **on-page alone can't crack the authority-gated flagship SERPs** (flerque 96 page-links; every city has a review-gated local pack). So P1 targets the ground you *can* win on content quality alone: the **cost cluster** (content SERP, no local-pack gate, KD 3-4) and the **examples** cluster.

---

## 2. Master page inventory

### Tier A - Money / commercial pages

| # | URL | Type | Target keyword(s) | Vol | KD | Intent | Goal | Schema | Status | Phase |
|---|-----|------|-------------------|-----|----|--------|------|--------|--------|-------|
| A1 | `/` | Home | website laten maken (brand) | 5,633 | 65 | comm | Position Brandlift; route to service/local/cases; capture gesprek | Organization, WebSite | **DONE** | - |
| A2 | `/diensten/website-laten-maken` | Pillar hub | website laten maken | 5,633 | 65 | comm | Own the topic hub; internal-link to all sub-services + local + cost | Service | **DONE** | - |
| A3 | `/website-laten-maken-den-haag` | Local flagship | website laten maken den haag | 263 | 6 | comm | Rank Den Haag; convert local aanvraag | Service, FAQPage, BreadcrumbList, AggregateRating | **DONE** | - |
| A4 | `/diensten/lokale-seo` | Service pillar | lokale seo / seo bureau | ~730 | 39 | comm | Explain lokale-SEO offer; feed local city pages | Service | **STUB** | P2 |
| A5 | `/diensten/branding` | Service pillar | huisstijl laten maken / branding bureau | ~63 | low | comm | Explain branding offer; support trust angle | Service | **STUB** | P2 |
| A6 | `/diensten/conversie-optimalisatie` | Service pillar | conversie optimalisatie | ~210 | 16 | comm | Explain CRO offer; differentiator vs pretty-site rivals | Service | **STUB** | P2 |
| A7 | `/diensten` | Services index | (nav/hub) | - | - | comm | Overview + route to 4 pillars | CollectionPage | REVIEW | P2 |

### Tier B - The research quick-wins (P1, highest ROI)

| # | URL | Type | Target keyword(s) | Vol | KD | Intent | Goal | Schema | Status | Phase |
|---|-----|------|-------------------|-----|----|--------|------|--------|--------|-------|
| **B1** | `/kennisbank/wat-kost-een-website-laten-maken` | **Cost guide** | wat kost een website laten maken · kosten website laten maken · website laten maken prijs · hoeveel kost | **~3,770 (cluster)** | **3-4** | comm/info | **#1 build priority.** Own the cost cluster (content SERP, no local-pack gate). Rank + push to calculator + gesprek | Article, FAQPage, (HowTo optional) | **STUB** | **P1** |
| **B2** | `/website-kosten-calculator` | **Interactive tool** | website kosten / prijs indication | (cluster) | low | comm | Differentiator none of them have. Instant price range → email-gated lead capture. Internal-link magnet | WebApplication / SoftwareApplication | **NEW** | **P1** |
| **B3** | `/website-laten-maken-rotterdam` | Local (city #2) | website laten maken rotterdam | 457 | ~0 | comm | Best volume x lowest link-field (2.5 ref domains). Add `"rotterdam"` to `cityPages`, reuse Den Haag template | Service, FAQPage, BreadcrumbList, (AggregateRating when reviews allow) | **NEW** | **P1** |
| **B4** | `/voorbeelden` | Examples hub | website voorbeelden · voorbeeld websites | ~1,440 (combined) | low | comm/info | dewerkendewebsite ranks #1 with one such page. Single hub (NO filter pages - cannibalization risk). Showcase real builds | CollectionPage | **NEW** | **P1** |
| B5 | `/seo-den-haag` | Local SEO | seo den haag · seo bureau den haag | ~1,300 / ~60 | 12 / low | comm | Low-competition local SEO term; complements lokale-seo pillar + Den Haag page | Service, FAQPage | **NEW** | P1/P2 |

### Tier C - Proof, audience & trust (P2 - complete the core)

| # | URL | Type | Target / role | Vol | KD | Goal | Schema | Status | Phase |
|---|-----|------|---------------|-----|----|------|--------|--------|-------|
| C1 | `/cases/hovenier-eykelenboom` | Case study | proof (2→24 metric) | - | - | Flagship proof; real metric; author byline | Article | **DONE** | - |
| C2 | `/cases/rotorswing` | Case study | proof (maritiem) | - | - | Second proof; premium/visual segment | Article | **STUB** | P2 |
| C3 | `/cases/de-reizende-kwast` | Case study | proof (schilders) | - | - | Third proof; vakbedrijf segment | Article | **STUB** | P2 |
| C4 | `/cases` | Cases index | portfolio hub | - | - | Route to all cases; proof overview | CollectionPage | REVIEW | P2 |
| C5 | `/voor-wie` | Audience hub | segmentation | - | - | Self-select: vakbedrijven / premium / overig | CollectionPage | **STUB** | P2 |
| C6 | `/voor-wie/vakbedrijven` | Audience page | hoveniers/schilders/aannemers/installateurs | - | - | Speak to core ICP; feed service + local pages | Service/CollectionPage | **STUB** | P2 |
| C7 | `/werkwijze` | Method page | trust / process | - | - | De-risk the buy; explain Brandlift's process | HowTo (optional) | **STUB** | P2 |
| C8 | `/over-brandlift` | About | brand / founder | - | - | Founder-led trust; E-E-A-T | AboutPage, Person, FAQPage | **DONE** | - |
| C9 | `/contact` | Contact | conversion endpoint | - | - | Capture aanvraag (form is placeholder backend for now) | ContactPage | REVIEW (form live, backend stub) | P2 |

### Tier D - Kennisbank / knowledge (P2-P3, topical authority + info intent)

| # | URL | Type | Target keyword(s) | Vol | KD | Goal | Schema | Status | Phase |
|---|-----|------|-------------------|-----|----|------|--------|--------|-------|
| D1 | `/kennisbank` | KB index | hub | - | - | Route to guides; topical hub | CollectionPage | REVIEW | P2 |
| D2 | `/kennisbank/wat-is-lokale-seo` | Guide | wat is lokale seo | ~low | low | Info-intent; support lokale-seo pillar + city pages | Article, FAQPage | **STUB** | P2 |
| D3 | `/kennisbank/website-laten-maken-stappenplan` | Guide | website laten maken stappenplan | ~low | low | Info-intent; funnel to service + calculator | Article, HowTo | **STUB** | P2 |
| D4 | `/kennisbank/huisstijl-laten-maken` | Guide (optional) | huisstijl laten maken | ~63 | low | Support branding pillar | Article | **NEW** | P3 |
| D5 | `/kennisbank/website-laten-maken-of-zelf-doen` | Guide (optional) | zelf website maken vs laten maken | - | low | Info funnel; qualify DIY-curious | Article | **NEW** | P3 |

### Tier E - Scale: more cities (P3, only after reviews + authority exist)

> Every city is gated by a review-driven local pack (Brandlift has 3 reviews; ranking competitors 27-286). Build these *after* Luca's review push. Each = one `cityPages` object + one route + nav/sitemap entry.

| # | URL | Target | Vol | KD | ref.dom | Note |
|---|-----|--------|-----|----|---------| -----|
| E1 | `/website-laten-maken-eindhoven` | website laten maken eindhoven | 407 | ~0 | 12.6 | high vol, national, soft link-field |
| E2 | `/website-laten-maken-utrecht` | website laten maken utrecht | 323 | 11 | 33 | stuurlui is Utrecht-based (hard local pack) |
| E3 | `/website-laten-maken-amsterdam` | website laten maken amsterdam | 353 | 7 | 60 | hardest: big agencies, 286-review incumbents |
| E4 | `/website-laten-maken-delft` | website laten maken delft | 87 | 8 | 29 | genuinely easy, low reward; same region as Den Haag |

### Tier F - Utility / legal (P2, needed for trust + completeness)

| # | URL | Type | Goal | Schema | Status | Phase |
|---|-----|------|------|--------|--------|-------|
| F1 | `/privacybeleid` | Legal | AVG compliance + trust | - (noindex ok) | **STUB** | P2 |
| F2 | `/algemene-voorwaarden` | Legal | Terms + trust | - (noindex ok) | **STUB** | P2 |

---

## 3. Build order (rolled up)

**Phase 1 - research quick-wins (win on content alone):**
1. `B1` Cost guide (upgrade the existing stub) - highest ROI, ~€38k/mo PPC-equiv value, KD 3-4, no local-pack gate.
2. `B2` Website-kosten-calculator - the differentiator + lead-capture engine; internal-links to/from B1.
3. `B3` Rotterdam city page - best new local, softest link-field.
4. `B4` `/voorbeelden` examples hub - one page ranks #1 in this niche (dewerkendewebsite proof).
5. `B5` `/seo-den-haag` - low-competition local SEO term.

**Phase 2 - complete the core (trust + coverage):**
6. Service pillars `A4/A5/A6` (lokale-seo, branding, conversie) + `A7` diensten index.
7. Cases `C2/C3` (+ verify `C4` index) - real proof only.
8. Audience `C5/C6`, method `C7`, contact `C9` review.
9. Kennisbank articles `D2/D3` (+ `D1` index).
10. Legal `F1/F2`.

**Phase 3 - scale (gated on Luca's reviews + authority):**
11. More cities `E1-E4` (Eindhoven → Delft → Utrecht → Amsterdam).
12. Optional KB articles `D4/D5`.

---

## 4. IA / nav changes this plan requires

- **nav.ts:** add `/voorbeelden` (likely top-level or under Cases), `/website-kosten-calculator` (under Kennisbank or Diensten), `/seo-den-haag` (under Diensten/lokale-seo). Add a **"Steden"/local group** as city pages grow (Den Haag, Rotterdam, …) - avoid a flat nav explosion.
- **footer nav.ts:** surface cost guide + calculator (high-intent), Rotterdam, examples.
- **sitemap.ts:** add every NEW page with priority (cost guide 0.8, calculator 0.7, Rotterdam 0.9, examples 0.7, seo-den-haag 0.8). Legal stays 0.2.
- **cityPages (site.ts):** add `"rotterdam"` object; later `"eindhoven"` etc. Keep the Den Haag object as the template.

---

## 5. Out of scope here (Luca's levers - but they gate the plan)

Per Track 2 + 3, these decide the local SERPs and can't be built in code:
1. **Google reviews 3 → 25+** - decides the local pack on *every* city page. **Prerequisite for AggregateRating schema + the local Phase-3 cities.**
2. **Footer-credit-link flywheel** - "Website door Brandlift" → brandliftagency.nl on every client site (Eykelenboom, RotorSwing, De Reizende Kwast + all future builds). The domain-authority moat.

The on-page plan is built to win the *non-authority-gated* ground (cost + examples) immediately, and to be *ready* to win local as soon as the reviews land.

---

## 6. Open decisions (need a call before Step 2)

1. **Cost content URL:** upgrade existing `/kennisbank/wat-kost-een-website-laten-maken` (URL stable, already in nav/sitemap) - or promote to a shorter top-level `/wat-kost-een-website`? **Recommend: upgrade the existing stub** (no redirect/link loss).
2. **Calculator scope:** simple range estimator (type of site + pages + extras → "vanaf €X-€Y") with email-gated detailed breakdown - or fuller multi-step quote wizard? **Recommend: start simple**, email-gate the detailed result.
3. **Examples hub content:** we have 3 real cases + the wider factory portfolio. Which builds can we show as real "voorbeelden" (real-photos/real-proof rule)? Need Luca's list of showable client sites.
4. **`/seo-den-haag` vs folding into `/diensten/lokale-seo`:** separate page targets the ~1,300-vol "seo den haag" term directly. **Recommend: separate page.**
5. **Price transparency:** Track 3 shows winners display on-page prices (flerque €1.899-2.300). Add a "vanaf" indication site-wide (service pillars + city pages + calculator)? **Recommend: yes**, a "vanaf" band.
