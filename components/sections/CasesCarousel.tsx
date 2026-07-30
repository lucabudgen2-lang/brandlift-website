"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { cases } from "@/lib/site";

/* Arrow icon for the carousel controls */
function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {dir === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  );
}

/* A horizontally scrolling carousel of all projects. Reuses the homepage
   Cases card (browser-window framing). Tone-aware so it drops onto light or
   dark surfaces; reusable across pages. */
export function CasesCarousel({
  tone = "light",
  heading = ["Projecten die we", "voor vakbedrijven bouwden."],
  eyebrow = "Meer werk",
}: {
  tone?: "light" | "dark";
  heading?: [string, string];
  eyebrow?: string;
}) {
  const light = tone === "light";
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const btnClass = light
    ? "border-ink/15 bg-black/[0.02] text-ink hover:border-blue hover:bg-blue hover:text-white"
    : "border-[var(--color-line-strong)] bg-s1 text-g100 hover:border-blue hover:bg-blue hover:text-white";

  return (
    <section className={`relative overflow-hidden py-20 md:py-28 ${light ? "on-light" : "bg-s0"}`}>
      {!light && (
        <>
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
          <div className="animate-glow pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />
        </>
      )}

      <Container className="relative">
        {/* header + controls */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: heading[0] }, { text: heading[1] }]}
            />
          </div>
          <Reveal delay={0.1}>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Vorige projecten"
                className={`grid h-12 w-12 place-items-center chamf-sm border transition-colors duration-150 ${btnClass}`}
              >
                <Arrow dir="left" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Volgende projecten"
                className={`grid h-12 w-12 place-items-center chamf-sm border transition-colors duration-150 ${btnClass}`}
              >
                <Arrow dir="right" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* track */}
        <div
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {cases.map((c) => {
            const photo = "photo" in c ? (c.photo as string) : null;
            return (
              <Reveal key={c.id} className="shrink-0 snap-start">
                <Link
                  href={c.href}
                  data-card
                  className={`group flex h-full w-[82vw] flex-col overflow-hidden chamf chamf-lg border transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1.5 sm:w-[380px] ${
                    light
                      ? "border-black/10 bg-paper shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)] hover:shadow-[0_34px_70px_-32px_rgba(1,48,253,0.4)]"
                      : "border-[var(--color-line-strong)] bg-s1 shadow-[0_28px_60px_-30px_rgba(0,0,0,0.7)] hover:border-blue/50 hover:shadow-[0_34px_70px_-32px_rgba(1,48,253,0.45)]"
                  }`}
                >
                  {/* browser chrome */}
                  <div
                    className={`flex items-center gap-2 border-b px-4 py-3 ${
                      light ? "border-black/[0.07] bg-black/[0.02]" : "border-[var(--color-line)] bg-s2/60"
                    }`}
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-blue" />
                    <span className={`h-2.5 w-2.5 rounded-full ${light ? "bg-black/15" : "bg-white/15"}`} />
                    <span className={`h-2.5 w-2.5 rounded-full ${light ? "bg-black/15" : "bg-white/15"}`} />
                    <span
                      className={`ml-2 flex-1 truncate chamf-sm px-3 py-1 font-semibold text-[0.62rem] tracking-[0.08em] text-g500 ${
                        light ? "bg-black/[0.04]" : "bg-white/[0.04]"
                      }`}
                    >
                      {c.url}
                    </span>
                  </div>

                  {/* cover — real screenshot, or duotone logo-cover */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-s0">
                    {photo ? (
                      <>
                        <Image
                          src={photo}
                          alt={`Website die Brandlift bouwde voor ${c.client}`}
                          fill
                          sizes="(max-width: 640px) 82vw, 380px"
                          className="object-cover object-center transition-transform duration-500 ease-[var(--ease-brand)] group-hover:scale-[1.05]"
                        />
                        <div className="absolute inset-0 bg-blue-deep/15 mix-blend-multiply" />
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-deep via-s2 to-s0" />
                        <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
                        <div className="pointer-events-none absolute -right-14 -top-16 h-52 w-52 rounded-full bg-blue/25 blur-[70px]" />
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <Image
                            src={c.logo}
                            alt={c.client}
                            width={260}
                            height={96}
                            className="logo-white max-h-16 w-auto max-w-[68%] opacity-90 transition-transform duration-300 ease-[var(--ease-brand)] group-hover:scale-[1.04]"
                          />
                        </div>
                      </>
                    )}
                    <span className="absolute bottom-3 left-3 chamf-sm bg-s0/70 px-2.5 py-1 font-semibold text-[0.58rem] uppercase tracking-[0.08em] text-g100 backdrop-blur-sm">
                      {c.sector}
                    </span>
                    {"comingSoon" in c && c.comingSoon && (
                      <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 chamf-sm bg-blue px-2.5 py-1 font-semibold text-[0.58rem] uppercase tracking-[0.08em] text-white shadow-[0_0_18px_-4px_rgba(1,48,253,0.9)]">
                        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-white" />
                        In aanbouw
                      </span>
                    )}
                  </div>

                  {/* body */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className={`font-display text-xl font-extrabold tracking-tight md:text-2xl ${light ? "text-ink" : "text-paper"}`}>
                      {c.client}
                    </h3>
                    <div className="mt-4 space-y-3 border-l-2 border-blue/25 pl-4">
                      <p className={`text-sm leading-relaxed ${light ? "text-g600" : "text-g500"}`}>
                        <span className={`mb-1 block font-semibold text-[0.6rem] uppercase tracking-[0.08em] ${light ? "text-blue" : "text-blue-text"}`}>
                          Uitdaging
                        </span>
                        {c.challenge}
                      </p>
                      <p className={`text-sm leading-relaxed ${light ? "text-g600" : "text-g500"}`}>
                        <span className={`mb-1 block font-semibold text-[0.6rem] uppercase tracking-[0.08em] ${light ? "text-blue" : "text-blue-text"}`}>
                          Richting
                        </span>
                        {c.direction}
                      </p>
                    </div>
                    {"comingSoon" in c && c.comingSoon && (
                      <p
                        className={`mt-4 flex items-start gap-2 border-t pt-4 text-[0.82rem] leading-snug ${
                          light ? "border-ink/10 text-g600" : "border-white/10 text-g500"
                        }`}
                      >
                        <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 chamf-sm bg-blue" />
                        <span>
                          Dit traject loopt nog -{" "}
                          <span className={`font-semibold ${light ? "text-ink" : "text-paper"}`}>
                            de website gaat binnenkort live.
                          </span>
                        </span>
                      </p>
                    )}
                    <span className={`mt-auto flex items-center gap-2 pt-6 text-sm font-semibold ${light ? "text-blue" : "text-blue-text"}`}>
                      Bekijk de case
                      <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
