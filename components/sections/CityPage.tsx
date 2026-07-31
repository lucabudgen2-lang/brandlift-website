import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Byline, FaqBlock, CtaBlock } from "@/components/page/blocks";
import { Reviews } from "@/components/sections/Reviews";
import { CasesCarousel } from "@/components/sections/CasesCarousel";
import { BenefitMarquee } from "@/components/sections/BenefitMarquee";
import { OokActiefIn } from "@/components/sections/OokActiefIn";
import { caseEykelenboom, reviews } from "@/lib/site";
import { serviceSchema } from "@/lib/schema";
import type { CityData } from "@/lib/cities";

type SectionProps = { city: CityData; mapSrc: string };

/* ── shared pillar icons ── */
function PillarIcon({ name }: { name: string }) {
  const c = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "target")
    return (
      <svg {...c}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      </svg>
    );
  if (name === "gem")
    return (
      <svg {...c}>
        <path d="M6 3h12l3 5-9 13L3 8l3-5z" />
        <path d="M3 8h18M9 3l3 5 3-5M12 8l0 13" />
      </svg>
    );
  if (name === "shield")
    return (
      <svg {...c}>
        <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  return (
    <svg {...c}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function CheckIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

function PinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/* The three fixed diagnostic visuals (city name flows into the first). */
function WaaromVisual({ index, serpQuery }: { index: number; serpQuery: string }) {
  if (index === 0)
    return (
      <div className="flex h-full flex-col justify-center gap-2.5 px-6">
        <div className="flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-s2 px-3.5 py-1.5">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0 text-g500">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" strokeLinecap="round" />
          </svg>
          <span className="text-[0.7rem] text-g300">{serpQuery}</span>
        </div>
        {[0, 1].map((i) => (
          <div key={i} className="rounded-lg border border-[var(--color-line)] bg-s1 px-3.5 py-2">
            <div className="h-1.5 w-2/5 rounded-full bg-blue-text/70" />
            <div className="mt-1.5 h-1 w-4/5 rounded-full bg-white/15" />
          </div>
        ))}
        <div className="flex items-center justify-between rounded-lg border border-dashed border-[var(--color-line)] px-3.5 py-2 opacity-60">
          <div className="h-1.5 w-1/3 rounded-full bg-g600" />
          <span className="text-[0.65rem] italic text-g600">pagina 4 ↓</span>
        </div>
      </div>
    );
  if (index === 1)
    return (
      <div className="flex h-full items-center justify-center gap-6 px-6">
        <div className="text-center">
          <div className="font-display text-4xl font-extrabold text-paper">128</div>
          <div className="mt-1 text-xs text-g500">bezoekers deze week</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="block h-px w-10 bg-gradient-to-r from-blue-text/60 to-transparent" />
          <span className="text-g600">→</span>
          <span className="block h-px w-10 bg-gradient-to-r from-transparent to-[var(--color-line-strong)]" />
        </div>
        <div className="text-center">
          <div className="font-display text-4xl font-extrabold text-g600">0</div>
          <div className="mt-1 text-xs text-g600">aanvragen</div>
        </div>
      </div>
    );
  return (
    <div className="flex h-full flex-col justify-center gap-4 px-7">
      <div>
        <div className="mb-2 flex items-baseline justify-between">
          <span className="text-xs font-semibold text-g100">Je vakmanschap</span>
          <span className="font-display text-sm font-extrabold text-blue-text">9,2</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <span className="block h-full w-[92%] rounded-full bg-blue shadow-[0_0_14px_rgba(1,48,253,0.7)]" />
        </div>
      </div>
      <div>
        <div className="mb-2 flex items-baseline justify-between">
          <span className="text-xs font-semibold text-g500">Je online uitstraling</span>
          <span className="font-display text-sm font-extrabold text-g600">3,1</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <span className="block h-full w-[31%] rounded-full bg-g600" />
        </div>
      </div>
    </div>
  );
}

function SecWaarom({ city }: SectionProps) {
  return (
    <>
  {/* ═══════════ WAAROM LOKAAL LOONT ═══════════ */}
        <section className="on-light relative py-20 md:py-28">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <Reveal>
                  <Eyebrow>Waarom lokaal loont</Eyebrow>
                </Reveal>
                <LineReveal
                  as="h2"
                  className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
                  lines={[{ text: city.waarom.heading[0] }, { text: city.waarom.heading[1], className: "text-g600" }]}
                />
              </div>
              <Reveal delay={0.12}>
                <p className="max-w-md text-lg leading-relaxed text-g600 lg:justify-self-end">{city.waarom.intro}</p>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {city.waarom.cards.map((card, i) => (
                <Reveal key={card.title} delay={(i % 3) * 0.08}>
                  <div className="group h-full overflow-hidden chamf border border-black/10 bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(1,48,253,0.35)]">
                    <div className="relative h-40 overflow-hidden bg-s0">
                      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
                      <div className="pointer-events-none absolute -right-10 -top-14 h-40 w-40 rounded-full bg-blue/15 blur-[60px]" />
                      <WaaromVisual index={i} serpQuery={city.waarom.serpQuery} />
                    </div>
                    <div className="relative p-6 md:p-7">
                      <span aria-hidden className="text-stroke-dark pointer-events-none absolute right-5 top-4 font-display text-4xl font-extrabold leading-none opacity-20 transition-opacity duration-300 group-hover:opacity-40">
                        0{i + 1}
                      </span>
                      <h3 className="pr-12 text-lg font-bold leading-snug text-ink md:text-xl">{card.title}</h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-g600 md:text-base">{card.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-12 flex items-center justify-center gap-5">
                <span className="hidden h-px w-16 bg-black/15 sm:block" />
                <p className="text-center text-base font-semibold italic text-ink md:text-lg">{city.waarom.outro}</p>
                <span className="hidden h-px w-16 bg-black/15 sm:block" />
              </div>
            </Reveal>
          </Container>
        </section>
    </>
  );
}

function SecAanpak({ city }: SectionProps) {
  return (
    <>
  {/* ═══════════ ONZE AANPAK ═══════════ */}
        <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
          <div className="animate-glow pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />
          <Container className="relative">
            <div className="max-w-2xl">
              <Reveal>
                <Eyebrow>Onze aanpak</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.9rem]"
                lines={[{ text: city.aanpak.heading[0] }, { text: city.aanpak.heading[1], className: "text-blue-text" }]}
              />
              <Reveal delay={0.12}>
                <p className="mt-6 text-lg leading-relaxed text-g300">{city.aanpak.intro}</p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2">
              {city.aanpak.pillars.map((p, i) => (
                <Reveal key={p.title} delay={(i % 2) * 0.06}>
                  <div className="group relative h-full overflow-hidden chamf chamf-lg border border-white/10 bg-s1/50 p-6 backdrop-blur-md transition-all duration-200 hover:border-blue/50 hover:bg-s1/70 md:p-8">
                    <span className="absolute right-0 top-0 h-4 w-4 bg-blue opacity-0 transition-opacity duration-200 [clip-path:polygon(100%_0,0_0,100%_100%)] group-hover:opacity-100" />
                    <div className="relative flex gap-5">
                      <span className="grid h-12 w-12 shrink-0 place-items-center chamf-sm border border-blue/30 bg-blue/10 text-blue-text transition-colors duration-200 group-hover:border-blue/60 group-hover:bg-blue group-hover:text-white">
                        <PillarIcon name={p.icon} />
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-extrabold leading-tight tracking-tight text-paper">{p.title}</h3>
                        <p className="mt-2.5 text-[0.95rem] leading-relaxed text-g500">{p.body}</p>
                        {p.link && (
                          <Link href={p.link.href} className="group/l mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-text hover:underline">
                            {p.link.label}
                            <span className="transition-transform duration-150 group-hover/l:translate-x-0.5">→</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
    </>
  );
}

function SecBewijs({ city }: SectionProps) {
  return (
    <>
  {/* ═══════════ BEWIJS — Eykelenboom (real) ═══════════ */}
        <section className="on-light relative py-20 md:py-28">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">
              <div>
                <Reveal>
                  <Eyebrow>Lokaal bewijs</Eyebrow>
                </Reveal>
                <LineReveal
                  as="h2"
                  className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
                  lines={[{ text: city.bewijs.heading[0] }, { text: city.bewijs.heading[1] }]}
                />
                <Reveal delay={0.14}>
                  <p className="mt-6 max-w-lg text-lg leading-relaxed text-g600">{city.bewijs.body}</p>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="mt-7 inline-flex items-baseline gap-2.5 chamf chamf-lg bg-blue px-6 py-4 font-display font-extrabold text-white shadow-[0_24px_60px_-24px_rgba(1,48,253,0.8)]">
                    <span className="text-2xl">{caseEykelenboom.stat.from}</span>
                    <span className="text-white/60">→</span>
                    <span className="text-4xl">{caseEykelenboom.stat.to}</span>
                    <span className="text-sm font-semibold text-white/85">{caseEykelenboom.stat.unit}</span>
                  </div>
                  <p className="mt-2 text-sm text-g600">{caseEykelenboom.stat.label}</p>
                </Reveal>
                <Reveal delay={0.26}>
                  <Link href="/cases/hovenier-eykelenboom" className="group mt-7 flex w-fit items-center gap-2 text-sm font-semibold text-blue hover:underline">
                    Bekijk de volledige case
                    <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                  </Link>
                </Reveal>
              </div>

              <Reveal delay={0.12}>
                <div className="group overflow-hidden chamf chamf-lg border border-black/10 bg-paper shadow-[0_34px_70px_-32px_rgba(1,48,253,0.4)]">
                  <div className="flex items-center gap-2 border-b border-black/[0.07] bg-black/[0.02] px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue" />
                    <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                    <span className="ml-2 flex-1 truncate chamf-sm bg-black/[0.04] px-3 py-1 font-semibold text-[0.62rem] tracking-[0.08em] text-g600">
                      {caseEykelenboom.url}
                    </span>
                  </div>
                  <div className="relative aspect-[16/11] overflow-hidden bg-s0">
                    <Image
                      src={caseEykelenboom.image}
                      alt={caseEykelenboom.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 92vw, 48vw"
                      className="object-cover object-center transition-transform duration-500 ease-[var(--ease-brand)] group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-blue-deep/15 mix-blend-multiply" />
                    <span className="absolute bottom-3 left-3 chamf-sm bg-s0/70 px-2.5 py-1 font-semibold text-[0.58rem] uppercase tracking-[0.08em] text-g100 backdrop-blur-sm">
                      {caseEykelenboom.sector}
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
    </>
  );
}

function SecMeerWerk({ city }: SectionProps) {
  return (
    <>
  {/* ═══════════ MEER WERK ═══════════ */}
        <CasesCarousel tone="light" heading={city.carouselHeading} />
    </>
  );
}

function SecKosten({ city }: SectionProps) {
  return (
    <>
  {/* ═══════════ KOSTEN ═══════════ */}
        <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
          <Container className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-14">
            <div>
              <Reveal>
                <Eyebrow>Investering</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
                lines={[{ text: city.kostenHeading[0] }, { text: city.kostenHeading[1], className: "text-g300" }]}
              />
              <Reveal delay={0.14}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g300">
                  Een website bij ons begint <span className="font-semibold text-paper">vanaf &euro;1.500</span>. {city.kostenBody}
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-8 flex items-start gap-4 chamf chamf-lg border border-blue/30 bg-blue/[0.07] p-5">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center chamf-sm bg-blue text-white">
                    <CheckIcon size={18} />
                  </span>
                  <div>
                    <p className="font-display text-base font-extrabold text-paper">We werken door totdat je tevreden bent.</p>
                    <p className="mt-1 text-sm leading-relaxed text-g500">
                      Nog niet tevreden met het resultaat? Dan werken we door - zonder extra kosten - tot het wel klopt.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 p-8 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.7)]">
                <div className="animate-glow pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blue/20 blur-[70px]" />
                <p className="relative font-display text-lg font-extrabold text-paper">Bereken je indicatie</p>
                <p className="relative mt-2 text-sm leading-relaxed text-g500">
                  Stel in een paar klikken je website samen en zie direct een eerlijke prijsindicatie die past bij jouw bedrijf.
                </p>
                <Link
                  href="/website-kosten-calculator"
                  className="group relative mt-6 inline-flex items-center gap-2.5 chamf-sm bg-blue px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_48px_-16px_rgba(1,48,253,0.85)] transition-colors duration-150 hover:bg-blue-press"
                >
                  Naar de kostencalculator
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
                <Link
                  href="/kennisbank/wat-kost-een-website-laten-maken"
                  className="group relative mt-4 flex w-fit items-center gap-2 text-sm font-semibold text-blue-text hover:underline"
                >
                  Of lees wat een website kost
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </Reveal>
          </Container>
        </section>
    </>
  );
}

function SecLokaal({ city }: SectionProps) {
  return (
    <>
  {/* ═══════════ ECHT LOKAAL — founder / local angle ═══════════ */}
        <section className="on-light relative py-20 md:py-28">
          <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>{city.local.eyebrow}</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
                lines={[{ text: city.local.heading[0] }, { text: city.local.heading[1], className: "text-g600" }]}
              />
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">{city.local.body[0]}</p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-g600">{city.local.body[1]}</p>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mt-9 grid gap-px overflow-hidden rounded-xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
                  {city.local.points.map((p) => (
                    <div key={p} className="flex items-center gap-3 bg-white px-5 py-4">
                      <span className="grid h-7 w-7 shrink-0 place-items-center chamf-sm bg-blue/10 text-blue">
                        <CheckIcon />
                      </span>
                      <span className="text-sm font-medium leading-tight text-g800">{p}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="relative mx-auto w-full max-w-[420px]">
                <div className="animate-glow pointer-events-none absolute -inset-4 -z-10 rounded-[32px] bg-blue/15 blur-[70px]" />
                <div className="relative overflow-hidden chamf chamf-lg border border-ink/10 shadow-[0_44px_100px_-45px_rgba(0,0,0,0.5)]">
                  <div className="relative aspect-[4/5]">
                    <div className="absolute inset-0 bg-gradient-to-b from-s2 to-s0" />
                    <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
                    <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 translate-y-1/4 rounded-full bg-blue/30 blur-[90px]" />
                    <div className="absolute inset-x-8 bottom-0 top-8">
                      <Image
                        src="/images/portrait-luca-soft.png"
                        alt={city.local.portraitAlt}
                        fill
                        sizes="(max-width: 1024px) 92vw, 40vw"
                        className="object-contain object-bottom"
                      />
                    </div>
                    <span className="absolute left-4 top-4 inline-flex items-center gap-2 chamf-sm bg-s0/70 px-3 py-1.5 text-xs font-medium text-g100 backdrop-blur-sm">
                      <PinIcon size={12} />
                      {city.local.portraitChip}
                    </span>
                    <div className="absolute bottom-5 left-5 chamf-sm bg-blue px-4 py-2 shadow-[0_10px_30px_-10px_rgba(1,48,253,0.9)]">
                      <span className="block font-display text-sm font-extrabold tracking-tight text-white">Luca Budgen</span>
                      <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white/80">Oprichter</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
    </>
  );
}

function SecWerkgebied({ city, mapSrc }: SectionProps) {
  return (
    <>
  {/* ═══════════ WERKGEBIED — coverage + city map ═══════════ */}
        <section className="on-light relative py-20 md:py-28">
          <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <Reveal>
                <Eyebrow>Werkgebied</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
                lines={[{ text: city.coverage.heading[0] }, { text: city.coverage.heading[1], className: "text-g600" }]}
              />
              <Reveal delay={0.14}>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-g600">{city.coverage.intro}</p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-8">
                  <p className="text-sm font-semibold text-g600">{city.coverage.primaryLabel}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {city.coverage.primary.map((s) => (
                      <span key={s} className="inline-flex items-center gap-2 chamf-sm border border-ink/12 bg-black/[0.02] px-3.5 py-2 text-sm font-medium text-g800">
                        <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.22}>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-g600">{city.coverage.secondaryLabel}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {city.coverage.secondary.map((w) => (
                      <span key={w} className="inline-flex chamf-sm border border-ink/10 px-3 py-1.5 text-[0.82rem] font-medium text-g700">
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.26}>
                <div className="mt-8 border-t border-ink/10 pt-6">
                  <p className="text-sm font-semibold text-g600">Ook in de regio</p>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                    {city.coverage.nearby.map((n) => (
                      <span key={n} className="text-sm text-g600">
                        Website laten maken {n}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="relative mx-auto w-full max-w-[460px] lg:sticky lg:top-28">
                <div className="animate-glow pointer-events-none absolute -inset-4 -z-10 rounded-[32px] bg-blue/15 blur-[70px]" />
                <div className="relative overflow-hidden chamf chamf-lg border border-ink/10 bg-white shadow-[0_44px_100px_-45px_rgba(0,0,0,0.4)]">
                  <div className="relative aspect-square">
                    <iframe
                      title={`${city.city} op Google Maps`}
                      src={mapSrc}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 h-full w-full border-0"
                    />
                  </div>
                  <div className="flex items-center gap-3 border-t border-ink/10 bg-black/[0.02] px-5 py-3.5">
                    <span className="grid h-8 w-8 shrink-0 place-items-center chamf-sm bg-blue/10 text-blue">
                      <PinIcon />
                    </span>
                    <div className="leading-tight">
                      <span className="block text-sm font-semibold text-ink">{city.coverage.mapTitle}</span>
                      <span className="block text-xs text-g600">{city.coverage.mapSubtitle}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
    </>
  );
}

/* De middensecties staan bewust NIET in een vaste volgorde. Zes stadspagina's
   die exact dezelfde zeven blokken in exact dezelfde volgorde afdraaien, lezen
   voor een zoekmachine als één sjabloon met een ander stadsnaam erin. Elke
   stad kiest daarom zijn eigen volgorde via city.sectionOrder; alleen de hero,
   de trust-strip en de afsluiting (reviews, FAQ, CTA) liggen vast. */
const SECTION_MAP = {
  waarom: SecWaarom,
  aanpak: SecAanpak,
  bewijs: SecBewijs,
  meerwerk: SecMeerWerk,
  kosten: SecKosten,
  lokaal: SecLokaal,
  werkgebied: SecWerkgebied,
} as const;

export type CitySection = keyof typeof SECTION_MAP;

const DEFAULT_ORDER: CitySection[] = [
  "waarom", "aanpak", "bewijs", "meerwerk", "kosten", "lokaal", "werkgebied",
];

/* Data-driven location page. One template, unique content per city. */
export function CityPage({ city }: { city: CityData }) {
  /* De hub /diensten is nog een stub op noindex, dus die slaan we over.
     De pijler /diensten/website-laten-maken bestaat wel echt en is de
     logische ouder van elke stadspagina - die houden we juist wel. */
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Website laten maken", path: "/diensten/website-laten-maken" },
    { name: `Website laten maken ${city.city}`, path: `/${city.slug}` },
  ];

  const schema = serviceSchema({
    name: `Website laten maken ${city.city}`,
    description: city.metaDescription,
    path: `/${city.slug}`,
    areaServed: city.city,
    faqs: city.faqs,
    crumbs,
  });

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(city.coverage.mapQuery)}&z=12&hl=nl&output=embed`;
  const order = city.sectionOrder ?? DEFAULT_ORDER;

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

{/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-s0 pt-10 pb-20 md:pb-28">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image src="/images/hero-bg.jpg" alt="" fill priority sizes="100vw" className="object-cover object-[65%_35%]" />
          <div className="absolute inset-0 bg-blue-deep/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-s0/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-s0 via-s0/85 to-s0/45" />
        </div>
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="animate-glow pointer-events-none absolute -top-40 right-[-12%] h-[520px] w-[520px] rounded-full bg-blue/20 blur-[150px]" />

        <Container className="relative">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 max-w-3xl">
            <Reveal>
              <Eyebrow>{city.heroEyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 font-display text-[2.1rem] font-extrabold leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-[3.3rem]">
                {city.h1}
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-g200">{city.intro}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {city.heroChips.map((chip) => (
                  <li key={chip} className="inline-flex items-center gap-2 chamf-sm border border-[var(--color-line-strong)] bg-s1/70 px-3.5 py-2 text-sm font-medium text-g100 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                    {chip}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="/contact" variant="primary" className="group">
                  Plan een gratis groeigesprek
                </Button>
                <Byline updated={city.updated} />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ TRUST STRIP ═══════════ */}
      <BenefitMarquee />

      {order.map((key) => {
        const Section = SECTION_MAP[key];
        return <Section key={key} city={city} mapSrc={mapSrc} />;
      })}

      <OokActiefIn currentCity={city.city} />

      {/* ═══════════ REVIEWS · FAQ · SLOT ═══════════ */}
      <Reviews tone="dark" heading={city.reviewsHeading} startAt={city.reviewsStartAt ?? 0} />
      <FaqBlock faqs={city.faqs} tone="light" heading={city.faqHeading} />
      <CtaBlock h2={city.finalCta.h2} body={city.finalCta.body} />
    </main>
  );
}
