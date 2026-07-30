"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";

/* ============================================================
   CONVERSIE · VERGELIJKING — dezelfde bezoeker, twee websites.
   Eén schakelaar wisselt een nagebouwde pagina tussen "zoals de
   meeste sites" en "conversiegericht gebouwd". In de tweede stand
   verschijnen genummerde hotspots bij wat er is veranderd.
   Bewust een illustratie - geen cijfers, geen beloftes.
   ============================================================ */

const ease = [0.22, 0.61, 0.36, 1] as const;

const principes = [
  { nr: "1", title: "Heldere boodschap", body: "Binnen drie seconden duidelijk wat je doet en voor wie." },
  { nr: "2", title: "Bewijs en vertrouwen", body: "Reviews en echt werk op de plek waar de twijfel ontstaat." },
  { nr: "3", title: "Route naar contact", body: "Eén duidelijke actie, altijd binnen handbereik." },
  { nr: "4", title: "Scanbaarheid", body: "Korte blokken in plaats van een muur tekst." },
  { nr: "5", title: "Snelheid en mobiel", body: "Snel op de telefoon, waar de meeste bezoekers zitten." },
];

/* genummerde hotspot-pin */
function Pin({ n, className }: { n: string; className: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.15 + Number(n) * 0.07, ease }}
      className={`absolute z-20 grid h-6 w-6 place-items-center chamf-sm bg-blue font-display text-[0.68rem] font-extrabold text-white shadow-[0_0_18px_rgba(1,48,253,0.9)] ${className}`}
      aria-hidden
    >
      {n}
    </motion.span>
  );
}

/* skeletonlijn */
function Line({ w, dim = false }: { w: string; dim?: boolean }) {
  return <span className={`block h-1.5 rounded-full ${dim ? "bg-white/10" : "bg-white/20"}`} style={{ width: w }} />;
}

export function ConversieVergelijking() {
  const [optimized, setOptimized] = useState(false);
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
      <div className="animate-glow pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />

      <Container className="relative">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Het verschil</Eyebrow>
          </Reveal>
          <LineReveal
            as="h2"
            className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
            lines={[{ text: "Dezelfde bezoeker." }, { text: "Twee websites.", className: "text-blue-text" }]}
          />
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg leading-relaxed text-g300">
              Zet de schakelaar om en zie wat conversiegericht bouwen concreet verandert aan dezelfde
              pagina. Een illustratie van het principe - geen weergave van jouw cijfers.
            </p>
          </Reveal>
        </div>

        {/* ── de schakelaar ── */}
        <Reveal delay={0.16}>
          <div className="mt-10 inline-flex items-center gap-1.5 chamf-sm border border-[var(--color-line-strong)] bg-s1 p-1.5">
            {[
              { on: false, label: "Zoals de meeste sites" },
              { on: true, label: "Conversiegericht gebouwd" },
            ].map((opt) => (
              <button
                key={opt.label}
                type="button"
                onClick={() => setOptimized(opt.on)}
                aria-pressed={optimized === opt.on}
                className={`chamf-sm px-4 py-2.5 text-sm font-semibold transition-colors duration-200 sm:px-5 ${
                  optimized === opt.on
                    ? "bg-blue text-white shadow-[0_0_28px_-6px_rgba(1,48,253,0.8)]"
                    : "text-g400 hover:text-paper"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-start lg:gap-12">
          {/* ── de nagebouwde pagina ── */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 shadow-[0_50px_110px_-50px_rgba(0,0,0,0.8)]">
              {/* browserbalk */}
              <div className="flex items-center gap-2 border-b border-[var(--color-line)] bg-s2/60 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-blue" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-2 flex-1 truncate chamf-sm bg-white/[0.04] px-3 py-1 text-[0.62rem] font-semibold tracking-[0.08em] text-g500">
                  jouwbedrijf.nl
                </span>
                <span
                  className={`chamf-sm px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-[0.1em] transition-colors ${
                    optimized ? "bg-blue text-white" : "bg-white/10 text-g500"
                  }`}
                >
                  {optimized ? "geoptimaliseerd" : "standaard"}
                </span>
              </div>

              <div className="relative p-5 sm:p-7">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={optimized ? "after" : "before"}
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease }}
                    className="relative space-y-4 pl-8"
                  >
                    {/* kop */}
                    <div className="relative">
                      {optimized && <Pin n="1" className="-left-8 top-0" />}
                      {optimized ? (
                        <>
                          <p className="font-display text-xl font-extrabold leading-tight tracking-tight text-paper sm:text-2xl">
                            Hovenier in Den Haag - tuinaanleg en onderhoud
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-g300">
                            Een tuin die jaren mooi blijft. Vraag vrijblijvend een offerte aan.
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="font-display text-xl font-extrabold leading-tight tracking-tight text-g500 sm:text-2xl">
                            Welkom op onze website
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-g600">
                            Wij zijn een bedrijf met jarenlange ervaring en passie voor ons vak.
                          </p>
                        </>
                      )}
                    </div>

                    {/* bewijsstrook */}
                    <div className="relative">
                      {optimized && <Pin n="2" className="-left-8 top-0" />}
                      {optimized ? (
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 chamf-sm border border-blue/30 bg-blue/10 px-3 py-1.5">
                            <span className="flex gap-0.5 text-blue-text">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <svg key={i} width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                  <path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.8 6.1 20.2l1.2-6.6L2.5 9l6.6-.9L12 2z" />
                                </svg>
                              ))}
                            </span>
                            <span className="text-[0.68rem] font-semibold text-g100">Beoordeeld door klanten</span>
                          </span>
                          <span className="chamf-sm border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.68rem] font-semibold text-g200">
                            Echt werk in beeld
                          </span>
                        </div>
                      ) : (
                        <div className="chamf-sm border border-dashed border-white/10 px-3 py-2.5">
                          <span className="text-[0.68rem] italic text-g600">geen bewijs zichtbaar</span>
                        </div>
                      )}
                    </div>

                    {/* body / scanbaarheid */}
                    <div className="relative">
                      {optimized && <Pin n="4" className="-left-8 top-0" />}
                      {optimized ? (
                        <div className="grid gap-2 sm:grid-cols-3">
                          {["Tuinaanleg", "Onderhoud", "Bestrating"].map((s) => (
                            <div key={s} className="chamf-sm border border-white/10 bg-white/[0.03] px-3 py-2.5">
                              <span className="block text-[0.72rem] font-bold text-g100">{s}</span>
                              <span className="mt-1 block h-1 w-3/5 rounded-full bg-white/15" />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-1.5 chamf-sm border border-white/[0.06] px-3 py-3">
                          {["96%", "92%", "97%", "89%", "94%", "62%"].map((w, i) => (
                            <Line key={i} w={w} dim />
                          ))}
                          <span className="block pt-1 text-[0.62rem] italic text-g600">muur van tekst</span>
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="relative flex items-center justify-between gap-3">
                      {optimized && <Pin n="3" className="-left-8 -top-1" />}
                      {optimized ? (
                        <>
                          <span className="chamf-sm bg-blue px-5 py-2.5 text-[0.78rem] font-bold text-white shadow-[0_10px_28px_-8px_rgba(1,48,253,0.8)]">
                            Vraag een offerte aan
                          </span>
                          <span className="text-[0.68rem] text-g400">of bel direct</span>
                        </>
                      ) : (
                        <span className="text-[0.68rem] italic text-g600">
                          contact staat ergens onderaan de pagina
                        </span>
                      )}
                    </div>

                    {/* snelheid / mobiel */}
                    <div className="relative flex items-center gap-2.5 border-t border-white/10 pt-4">
                      {optimized && <Pin n="5" className="-left-8 top-3" />}
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                          optimized ? "bg-blue shadow-[0_0_8px_rgba(1,48,253,0.9)]" : "bg-amber-400"
                        }`}
                      />
                      <span className={`text-[0.7rem] font-medium ${optimized ? "text-g200" : "text-g500"}`}>
                        {optimized ? "Snel en volledig leesbaar op mobiel" : "Traag op mobiel, tekst te klein"}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>

          {/* ── legenda ── */}
          <div className="space-y-3">
            {principes.map((p, i) => (
              <Reveal key={p.nr} delay={i * 0.05}>
                <div
                  className={`flex items-start gap-3.5 chamf chamf-lg border p-4 transition-all duration-300 md:p-5 ${
                    optimized
                      ? "border-blue/40 bg-blue/[0.08]"
                      : "border-white/10 bg-s1/40 opacity-60"
                  }`}
                >
                  <span
                    className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center chamf-sm font-display text-[0.72rem] font-extrabold transition-colors duration-300 ${
                      optimized ? "bg-blue text-white" : "bg-white/10 text-g500"
                    }`}
                  >
                    {p.nr}
                  </span>
                  <span>
                    <span className={`block text-[0.95rem] font-bold ${optimized ? "text-paper" : "text-g300"}`}>
                      {p.title}
                    </span>
                    <span className="mt-0.5 block text-sm leading-snug text-g500">{p.body}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
