"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { services, servicesHead } from "@/lib/site";

const ease = [0.22, 0.61, 0.36, 1] as const;

type Service = (typeof services)[number];

/* ── RADAR — the connective visual for lokale SEO (no photo asset): a
   business pinned in its region while nearby seekers light up. ── */
function RadarMotif() {
  return (
    <div className="relative flex h-full w-full items-center justify-center" aria-hidden>
      <svg viewBox="0 0 480 340" fill="none" className="absolute inset-0 h-full w-full">
        {[46, 88, 130].map((r) => (
          <circle key={r} cx="240" cy="170" r={r} stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
        ))}
        <line x1="240" y1="28" x2="240" y2="312" stroke="rgba(255,255,255,0.1)" />
        <line x1="98" y1="170" x2="382" y2="170" stroke="rgba(255,255,255,0.1)" />
        <circle cx="308" cy="120" r="4" fill="#5B78FF" opacity="0.9" />
        <circle cx="180" cy="230" r="4" fill="#5B78FF" opacity="0.65" />
        <circle cx="292" cy="228" r="4" fill="#5B78FF" opacity="0.5" />
        <circle cx="172" cy="118" r="4" fill="#5B78FF" opacity="0.4" />
      </svg>
      <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2">
        <div
          className="animate-sweep h-full w-full rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(1,48,253,0.5) 0deg, rgba(1,48,253,0.12) 55deg, transparent 90deg)",
          }}
        />
      </div>
      <div className="relative z-10">
        <span className="animate-ping-slow absolute -inset-4 rounded-full border-2 border-blue-text" />
        <span className="block h-4 w-4 chamf-sm bg-blue shadow-[0_0_24px_rgba(1,48,253,0.9)]" />
      </div>
      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm italic text-g500">
        jouw regio · jouw klanten
      </span>
    </div>
  );
}

/* The stage fill for one service: a real product photo, or the radar. Shared
   by the desktop switcher (crossfaded) and the mobile stacked cards. */
function StageFill({ s, index }: { s: Service; index: number }) {
  const image = "image" in s ? s.image : null;
  const imageAlt = "imageAlt" in s ? s.imageAlt : "";
  return (
    <div className="absolute inset-0">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue/20 blur-[90px]" />

      {image ? (
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover object-center"
        />
      ) : (
        <div className="absolute inset-0 p-6 pt-10">
          <RadarMotif />
        </div>
      )}

      {/* proof tag — only where the visual is a real deliverable */}
      {image && (
        <span className="absolute left-4 top-4 chamf-sm bg-s0/70 px-3 py-1.5 text-xs font-medium italic text-g300 backdrop-blur-sm">
          Uit ons echte werk
        </span>
      )}

      {/* the job this layer does */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2.5 chamf-sm bg-s0/80 px-3.5 py-2 backdrop-blur-sm">
        <span className="grid h-6 w-6 place-items-center chamf-sm bg-blue text-xs font-bold text-white">
          0{index + 1}
        </span>
        <span className="text-sm font-semibold text-paper">{s.job}</span>
      </div>
    </div>
  );
}

/* BL-05 · WAT WE BOUWEN — "één website, drie taken". One large stage on the
   right; a vertical funnel-rail of the three jobs on the left. Moving through
   the rail swaps the stage. The two real deliverables (site + merkgids) anchor
   it; the regio-radar is the connective tissue in the middle. */
export function Services() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = services[active];

  return (
    <section id="diensten" className="on-light relative py-20 md:py-28">
      <Container>
        {/* header (copy locked) */}
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>{servicesHead.eyebrow}</Eyebrow>
          </Reveal>
          <LineReveal
            as="h2"
            className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
            lines={[{ text: "Eén website. Drie dingen" }, { text: "die hij moet doen." }]}
          />
          <Reveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-g600">{servicesHead.intro}</p>
          </Reveal>
        </div>

        {/* ── MOBILE: three stacked cards, each with its own visual ── */}
        <div className="mt-12 space-y-8 lg:hidden">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={0.05}>
              <div className="chamf chamf-lg overflow-hidden border border-ink/10 bg-paper shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)]">
                <div className="relative aspect-[4/3] bg-s0">
                  <StageFill s={s} index={i} />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-sm font-bold text-blue">0{i + 1}</span>
                    <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-g600">{s.lead}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="inline-flex items-center gap-2 chamf-sm border border-ink/12 bg-ink/[0.02] px-3 py-1.5 text-sm font-medium text-g800"
                      >
                        <span className="h-1.5 w-1.5 bg-blue" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={s.href}
                    className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-text hover:text-blue"
                  >
                    {s.linkLabel}
                    <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── DESKTOP: rail selector + one swapping stage ── */}
        <div className="mt-16 hidden lg:grid lg:grid-cols-[0.84fr_1.16fr] lg:items-center lg:gap-14">
          {/* funnel rail */}
          <Reveal>
            <div className="relative">
              {/* the spine the three jobs hang on */}
              <span aria-hidden className="absolute left-[15px] top-4 bottom-4 w-px bg-ink/10" />
              <div className="space-y-1">
                {services.map((s, i) => {
                  const on = i === active;
                  return (
                    <div key={s.id} className="relative pl-11">
                      {/* rail node */}
                      <span
                        aria-hidden
                        className={`absolute left-[9px] top-[13px] grid h-[15px] w-[15px] place-items-center rounded-full border-2 transition-all duration-300 ${
                          on ? "border-blue bg-blue" : "border-ink/25 bg-paper"
                        }`}
                      >
                        {on && <span className="h-[5px] w-[5px] rounded-full bg-white" />}
                      </span>

                      <button
                        type="button"
                        onClick={() => setActive(i)}
                        aria-pressed={on}
                        className="flex w-full items-baseline gap-3 py-2 text-left"
                      >
                        <span
                          className={`font-display text-sm font-bold transition-colors ${
                            on ? "text-blue" : "text-g600"
                          }`}
                        >
                          0{i + 1}
                        </span>
                        <span
                          className={`font-display text-2xl font-extrabold tracking-tight transition-colors md:text-[1.75rem] ${
                            on ? "text-ink" : "text-g600 hover:text-ink"
                          }`}
                        >
                          {s.title}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {on && (
                          <motion.div
                            key="body"
                            initial={reduce ? false : { height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={reduce ? undefined : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease }}
                            className="overflow-hidden"
                          >
                            <div className="pb-5 pt-1">
                              <p className="max-w-md text-base leading-relaxed text-g600">{s.lead}</p>
                              <ul className="mt-4 flex flex-wrap gap-2">
                                {s.points.map((p) => (
                                  <li
                                    key={p}
                                    className="inline-flex items-center gap-2 chamf-sm border border-ink/12 bg-ink/[0.02] px-3 py-1.5 text-sm font-medium text-g800"
                                  >
                                    <span className="h-1.5 w-1.5 bg-blue" />
                                    {p}
                                  </li>
                                ))}
                              </ul>
                              <Link
                                href={s.href}
                                className="group mt-5 inline-flex items-center gap-2 chamf-sm bg-blue px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_-16px_rgba(1,48,253,0.8)] transition-colors duration-150 hover:bg-blue-press"
                              >
                                {s.linkLabel}
                                <span className="transition-transform duration-150 group-hover:translate-x-0.5">
                                  →
                                </span>
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* the stage — dark deliverable inset into the light page */}
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] chamf chamf-lg overflow-hidden border border-ink/10 bg-s0 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.55)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={reduce ? false : { opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                  className="absolute inset-0"
                >
                  <StageFill s={current} index={active} />
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
