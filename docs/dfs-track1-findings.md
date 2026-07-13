# DataForSEO — Track 1: Keyword Discovery Findings

Date: 2026-07-13 · Location: Netherlands · Language: nl · Source: DataForSEO Labs (keyword_ideas + keyword_suggestions)
Raw data: `dfs-keyword-discovery.csv` (412 kw, noisy category-based) + `dfs-keywords-commercial.csv` (181 kw, clean full-text)

## ⚠️ Read this first — volume caveat
Every keyword shows a large spike in **2025-09** (its annual peak, uniformly). This inflates the `search_volume` (12-month average). The **`recent3mo_avg`** column is the truer current signal. Plan on the recent numbers, not the annual averages. Example: "website laten maken" = 6,600 annual but ~5,600 recent (still strong); "conversie optimalisatie" = 590 annual but ~210 recent.

## The money keyword (confirmed)
| keyword | vol (ann) | vol (recent) | KD | ~ref.domains to rank |
|---|---|---|---|---|
| website laten maken | 6,600 | ~5,600 | 65 | ~90 | pillar, hard, long game |

## 🟢 Biggest opportunity: the COST cluster (very low difficulty)
These are **KD 3–11** — nearly free to rank for, high commercial value, and we already have a stub at `/kennisbank/wat-kost-een-website-laten-maken`. This validates the cost-guide + calculator priority hard.
| keyword | vol (recent) | KD |
|---|---|---|
| kosten website laten maken / website laten maken kosten | ~500 | **4** |
| wat kost een website laten maken / wat kost website laten maken | ~370–500 | **3** |
| website laten maken prijs / prijs website laten maken | ~200 | (low) |
| professionele website laten maken kosten | ~120 | (low) |
| hoeveel kost website laten maken | ~130 | — |

## City expansion — the data REORDERS the brief's plan
The brief proposed Den Haag → Delft → Zoetermeer → Rijswijk → Westland. But raw volume says the strongest single-word city terms are elsewhere:
| city keyword | vol (recent) | KD | ref.domains | note |
|---|---|---|---|---|
| website laten maken **rotterdam** | ~460 | low | **2.5** | 🔥 sleeper: big volume, almost no competition, next to Den Haag |
| website laten maken **utrecht** | ~320 | 11 | 33 | |
| website laten maken **amsterdam** | ~350 | 7 | 60 | bigger but more contested |
| website laten maken **eindhoven** | ~400 | — | 13 | |
| website laten maken **groningen / nijmegen** | ~130–200 | ~29 | | |
| — Den Haag regional cluster (the brief's list) — | | | | mostly small: |
| website laten maken **zoetermeer** | ~50 | — | 32 | |
| website laten maken **delft** | ~87 | 8 | 29 | |
| website laten maken **westland** | ~110 | 10 | 3.6 | low competition |

(Den Haag itself ~1,900/mo per the earlier map — still the anchor; it's a two-word city so it dropped out of the single-word filter above.)

**Takeaway:** after Den Haag, **Rotterdam is a better #2 than Delft/Zoetermeer** — comparable/higher volume, dramatically lower competition (2.5 ref domains), same region.

## SEO local cluster
| keyword | vol (recent) | KD |
|---|---|---|
| seo bureau (national) | ~730 | 39 |
| seo bureau den haag | ~60 | low |
| seo bureau zoetermeer | ~40 | — |
| seo bureau delft | ~27 | — |
| seo den haag (from earlier map) | ~1,300 | 12 |

`/seo-den-haag` is worth building (low competition), but SEO-local volume is modest vs. the website-local + cost clusters.

## Conversie & Branding (supporting, lower priority — confirmed)
- conversie optimalisatie: 590 ann / ~210 recent, **KD 16**, very low competition (7.5 ref domains). conversie optimalisatie bureau: 320.
- huisstijl laten maken: 210 ann / ~63 recent, KD low. branding bureau: ~1,600 (earlier map).

## Recommended priority order (data-driven)
1. **Cost cluster** — `/wat-kost-een-website` guide + `/website-kosten-calculator` (KD 3–11, we have the stub, matches the brief's #1 differentiator).
2. **Rotterdam city page** — the best-value new local page (high vol, ~no competition).
3. Finish **Den Haag** cluster (done) + `/seo-den-haag`.
4. Then Utrecht / Amsterdam / Eindhoven if going national; Delft/Westland if staying tight to Den Haag.

## Cost of this pass
~$0.22 (5 keyword_ideas + 4 keyword_suggestions calls). Well under the $2–4 Track 1 estimate.
