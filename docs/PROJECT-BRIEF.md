# Brandlift Website — Project Brief & Handoff

> **New chat? Read this file first.** It's the single source of truth for the Brandlift agency website: what it is, how it's built, current state, the SEO research, locked decisions, and what to do next. Detailed history also lives in the memory files (see end).

---

## 1. What this is
Brandlift's own agency marketing website. Brandlift builds **strategische websites met lokale SEO en conversie** for Dutch trades/service businesses (vakbedrijven), run **founder-led by Luca Budgen** from **Den Haag, nationwide**.

- **Repo:** `/Users/lucabudgen/Claude working/brandlift-website/`
- **GitHub:** https://github.com/lucabudgen2-lang/brandlift-website (branch `main`)
- **Live (Vercel):** https://brandlift-website-six.vercel.app (project `brandlift-website`, org lucabudgen-s-projects)
- **Deploy:** push to `main` (git-connected) OR `cd brandlift-website && npx vercel --yes --prod`. Vercel occasionally fails a deploy on infra with no build output — just retry.

## 2. Business facts (in `lib/site.ts` `site`)
Brandlift · Luca Budgen (oprichter) · Guirlande 118, 2496 WT Den Haag · KvK 88162427 · luca@brandliftagency.nl · ma–za 08:00–20:00 · IG/FB @brandliftnl · geo 52.0479085/4.3651425 · domain brandliftagency.nl.

## 3. Stack & conventions
- **Next.js 16 App Router + TypeScript + Tailwind v4 + framer-motion.** Preview server name `brandlift-web`, port **8767**.
- **Data-driven:** all copy in `lib/site.ts`; sections in `components/sections/`; reusable page blocks in `components/page/blocks.tsx`; JSON-LD in `lib/schema.ts`; nav/sitemap IA in `lib/nav.ts`.
- **Design system** (`app/globals.css`): "Blauwdruk-systeem" — chamfer corners (`.chamf`/`-sm`/`-lg`), single electric-blue accent (`--color-blue #0130fd` / `--color-blue-text`), dark surfaces `s0–s3` + `g100–g800` neutrals, `font-display` Saira (headings) / `font-body` Manrope (text). `.on-light` for light sections.
- **Voice:** Dutch, **nuchter-vakman**, no hype, no exclamation marks, **plain hyphens `-` only** (never em/en dashes). **"wij/we" throughout, EXCEPT the founder's personal signed quote which stays "ik"** (deliberate).
- **HARD RULES / GOTCHAS:**
  - **Never set `turbopack.root`** in next.config — breaks RSC (global-error 500s). The multi-lockfile warning is harmless.
  - **No mono font / no uppercase-tracked sentence-length text** — reads as "AI site." Short labels only.
  - **Real photos only** — never stock people or fabricated proof/reviews/metrics.
  - **Never overwrite a public image in place** — rename (Next image-optimizer serves stale). 
  - **Preview pane is unreliable** (black frames / 0-width viewport after restart — always check `window.innerWidth`). **Verify via `curl` + HTML parse** (word count, schema, H1, canonical), not the pane.
  - Always run a **production `npm run build`** before deploying — dev/Turbopack skips full type-checking and misses real type errors.

## 4. Current build state
**DONE (fully designed pages):**
- `/` homepage — 13 sections (Hero, TrustStrip, Problem, VoorWie, Services, Waarom, Methode, Cases, CtaBand, Founder, LocalDenHaag, Faq, FinalCta). Founder section = "dossier" card; LocalDenHaag has a real Google Maps embed.
- `/over-brandlift` — 11 sections (`components/sections/about/`), full `AboutPage`+`Person`+`FAQPage` schema.
- `/diensten/website-laten-maken` — pillar hub.
- `/website-laten-maken-den-haag` — flagship local page (~1,500 words, wijken, Eykelenboom proof, reviews, `Service`+`FAQPage`+`BreadcrumbList`+`AggregateRating`).
- `/cases/hovenier-eykelenboom` — real 2→24 metric case, `Article` by founder.

**Foundation (site-wide):** `app/sitemap.ts`, `app/robots.ts`, `components/ui/Breadcrumbs.tsx` + `breadcrumbSchema`, canonicals, author byline, reusable page blocks (`PageHero`/`ProseSections`/`FaqBlock`/`CtaBlock`/`Byline`), `components/sections/Reviews.tsx` (real Google reviews).

**STILL PageStub placeholders:** `/diensten/{lokale-seo,branding,conversie-optimalisatie}`, `/voor-wie` + `/voor-wie/vakbedrijven`, `/cases/{rotorswing,de-reizende-kwast}`, `/werkwijze`, `/kennisbank` + its 3 articles, `/contact` (has the real form), `/privacybeleid`, `/algemene-voorwaarden`.

**Reviews:** 3 REAL Google reviews (5,0 avg) in `lib/site.ts` `reviews` (Alessandro Stinis, Marina Kuipers, Josie Jackson) — verbatim, AggregateRating wired. Never fabricate more.

**Contact form:** `/api/contact` is a **placeholder** (logs + returns success). Not wired to a backend yet — user chose to keep it placeholder for now. Wire to Resend (→ luca@brandliftagency.nl) later.

## 5. DataForSEO (MCP, connected)
Registered in `Claude working/.mcp` local config (creds software@brandliftagency.nl). **Bills per call** — cap `ranked_keywords`/`keyword_ideas`/`domain_intersection` with `limit`+`filters` (one uncapped call can cost $0.60+). **Big responses auto-save to `.claude/projects/.../tool-results/*.txt`** (session-specific/ephemeral) — parse with python/jq, never read raw into context. Location `Netherlands`, language `nl`. Use `keyword_suggestions` (clean full-text) over `keyword_ideas` (noisy category-based).

## 6. SEO research — key findings (full detail in the files listed in §8)
1. **⚠️ Volume caveat:** every keyword spikes uniformly in 2025-09 (a DataForSEO artifact) → the 12-month `search_volume` is inflated. Plan on RECENT 3-month volume.
2. **COST cluster = top quick win:** "kosten/wat kost een website laten maken", "website laten maken prijs" = **KD 3–11** (near-zero competition), commercial, content-led SERP (NOT gated by local pack). We have the stub `/kennisbank/wat-kost-een-website-laten-maken`.
3. **Reviews decide the local pack** on EVERY "website laten maken [stad]" SERP. Ranking competitors have **34–286** Google reviews; **Brandlift has 3.** Biggest local lever — non-code, Luca's job (target 25+).
4. **Domain authority = the moat, built from client footer-credit links** ("website door [bureau]" on client sites). Competitors: 285–1,556 referring domains; **Brandlift has 0.** #1 flerque's Den Haag page has 96 page-level links; #2 dewerkendewebsite's has 1 (ranks on domain authority + local content + local pack). **On-page alone won't crack top-3 for the flagship — links win.**
5. **City priority (data-driven):** Den Haag (done) → **Rotterdam** (~460/mo, best volume/effort) → Utrecht/Amsterdam/Eindhoven (bigger, national, harder) → Delft/Westland (tiny). Every city gated by reviews + a dedicated `/website-laten-maken-[stad]/` page.
6. dewerkendewebsite.nl teardown: one page per intent; `/voorbeeld-websites/` ranks #1 (examples cluster); their #1 traffic keyword is a **zombie "google plus" page** (Google Plus died 2019); weak on cost cluster.

## 7. Recommended next actions (in priority order)
**Non-code (Luca, highest leverage):**
- A) Gather Google reviews (3 → 25+) — decides the local pack.
- B) Footer-credit-link flywheel — "Website door Brandlift" → brandliftagency.nl in the footer of every client site (Eykelenboom, RotorSwing, De Reizende Kwast + all future builds). Free, compounding authority.

**Build (lowest barrier / best ROI first):**
- C) **Cost guide** (`/wat-kost-een-website` or upgrade the kennisbank stub) + **`/website-kosten-calculator`** interactive tool (email-gated lead capture) — KD 3–4, content-led, differentiator none of them have.
- D) **Rotterdam page** (reuse the data-driven `cityPages` template — add a `"rotterdam"` object to `lib/site.ts`).
- E) `/seo-den-haag`, then a single `/voorbeelden` hub (no cannibalizing filter pages).
- F) On-page tweaks: add a "vanaf" price indication, surface more testimonials as reviews grow, richer local context.
- G) Later: wire the contact form backend (Resend), then more cities.

**Competitor set (for reference):** stuurlui.nl (national content giant, owns cost cluster), webactueel/vrijdagonline (big national), dewerkendewebsite.nl (direct local rival), flerque.nl (#1 Den Haag), chuckswebdesign/scoreagency/rubixcreative/ploko (local/price-led).

## 8. Where ALL the SEO research lives
In-repo (`brandlift-website/docs/`):
- `dfs-track1-findings.md` — keyword discovery (clusters, cost cluster, cities, volume caveat)
- `dfs-track2-competitors.md` — competitor sizing, who-owns-which-SERP, flagship + city SERPs, review gap
- `dfs-track3-why.md` — WHY they rank (backlink authority, footer-link flywheel, on-page teardown)
- `dfs-keywords-commercial.csv` — 181 clean commercial keywords (vol/KD/cpc/refdomains/intent)
- `dfs-keyword-discovery.csv` — 412 keywords (noisy, category-based)
- `brandlift-master-keyword-map.csv` — original keyword map (97 rows, pre-DataForSEO)
- `brandlift-seo-page-briefs-v1.md` — original per-page SEO briefs (website-laten-maken, den-haag, cost, lokale-seo, branding)
- `homepage-blueprint-v1.md`, `brandlift-homepage-brief-v1.md`, `redesign-master-prompt-v1.md` — homepage/design docs

Memory (auto-loaded, `~/.claude/projects/-Users-lucabudgen-Claude-working/memory/`):
- `brandlift-website-build.md` — full build history, every section, all gotchas/fixes
- `brandlift-seo-research.md` — condensed research conclusions + the volume caveat

Raw DataForSEO API responses: `.claude/projects/-Users-lucabudgen-Claude-working/<session>/tool-results/*.txt` — session-specific & ephemeral (regenerate by re-querying if needed).
