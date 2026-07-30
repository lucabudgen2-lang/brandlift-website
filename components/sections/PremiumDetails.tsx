"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";

/* ============================================================
   PREMIUM · DETAILS — de optelsom van details.
   Vier vakprincipes die je één voor één aanzet. De nagebouwde
   pagina wordt bij elke stap rustiger, ruimer en zelfverzekerder.
   Bewijst de stelling: premium is geen ding, het is de optelsom.
   Geen cijfers - alleen wat de bezoeker ziet.
   ============================================================ */

const ease = [0.22, 0.61, 0.36, 1] as const;

type Key = "ruimte" | "typografie" | "beeld" | "rust";

const principes: { id: Key; nr: string; title: string; desc: string }[] = [
  {
    id: "ruimte",
    nr: "01",
    title: "Rust en witruimte",
    desc: "Ruimte om iets heen zegt dat het belangrijk is. Alles volproppen zegt het tegenovergestelde.",
  },
  {
    id: "typografie",
    nr: "02",
    title: "Typografie met autoriteit",
    desc: "Een letter met karakter, een rustige regelafstand en tekst die niet schreeuwt om aandacht.",
  },
  {
    id: "beeld",
    nr: "03",
    title: "Beeld dat het vakmanschap draagt",
    desc: "Groot, scherp en met de ruimte die het verdient. Bij premium merken doet het beeld het werk.",
  },
  {
    id: "rust",
    nr: "04",
    title: "Terughoudendheid in kleur en UI",
    desc: "Minder randen, minder knoppen, minder kleur. Wat overblijft, telt zwaarder.",
  },
];

export function PremiumDetails() {
  const [on, setOn] = useState<Record<Key, boolean>>({
    ruimte: false,
    typografie: false,
    beeld: false,
    rust: false,
  });
  const reduce = useReducedMotion();

  const toggle = (k: Key) => setOn((s) => ({ ...s, [k]: !s[k] }));
  const count = Object.values(on).filter(Boolean).length;

  return (
    <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
      <div className="animate-glow pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />

      <Container className="relative">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>De optelsom van details</Eyebrow>
          </Reveal>
          <LineReveal
            as="h2"
            className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
            lines={[{ text: "Premium is geen ding." }, { text: "Het is de optelsom.", className: "text-blue-text" }]}
          />
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg leading-relaxed text-g300">
              Niemand kan aanwijzen waarom een merk duur aanvoelt - maar iedereen ziet het. Zet de
              principes hieronder één voor één aan en kijk wat er met dezelfde pagina gebeurt.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
          {/* ── principes ── */}
          <div className="space-y-3">
            {principes.map((p) => {
              const active = on[p.id];
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => toggle(p.id)}
                  aria-pressed={active}
                  className={`group relative flex w-full items-start gap-4 overflow-hidden chamf chamf-lg border p-5 text-left transition-all duration-200 md:p-6 ${
                    active
                      ? "border-blue bg-blue/[0.12] shadow-[0_0_40px_-12px_rgba(1,48,253,0.5)]"
                      : "border-white/10 bg-s1/50 hover:border-blue/40 hover:bg-s1/70"
                  }`}
                >
                  {/* checkbox */}
                  <span
                    aria-hidden
                    className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center chamf-sm border transition-colors duration-200 ${
                      active ? "border-blue bg-blue text-white" : "border-white/25 text-transparent"
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 12 4.5 4.5L19 7" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-baseline gap-2.5">
                      <span className={`font-display text-xs font-bold ${active ? "text-blue-text" : "text-g600"}`}>
                        {p.nr}
                      </span>
                      <span
                        className={`font-display text-lg font-extrabold tracking-tight ${
                          active ? "text-paper" : "text-g300"
                        }`}
                      >
                        {p.title}
                      </span>
                    </span>
                    <span className={`mt-1.5 block text-sm leading-relaxed ${active ? "text-g300" : "text-g500"}`}>
                      {p.desc}
                    </span>
                  </span>
                </button>
              );
            })}

            {/* verfijning-teller */}
            <div className="flex items-center gap-4 chamf border border-blue/30 bg-blue/[0.07] p-4">
              <span className="font-display text-2xl font-extrabold text-paper">
                {count}
                <span className="text-g500">/4</span>
              </span>
              <span className="flex-1">
                <span className="block text-[0.62rem] font-bold uppercase tracking-[0.1em] text-blue-text">
                  Verfijning
                </span>
                <span className="mt-0.5 block text-sm text-g300">
                  {count === 0
                    ? "Zoals de meeste sites eruitzien"
                    : count === 4
                      ? "Zo voelt een premium merk"
                      : "Elk detail telt mee"}
                </span>
              </span>
              <span aria-hidden className="flex gap-1">
                {principes.map((p, i) => (
                  <span
                    key={p.id}
                    className={`h-1.5 w-6 rounded-full transition-colors duration-300 ${
                      i < count ? "bg-blue shadow-[0_0_10px_rgba(1,48,253,0.6)]" : "bg-white/12"
                    }`}
                  />
                ))}
              </span>
            </div>
          </div>

          {/* ── de nagebouwde pagina ── */}
          <Reveal delay={0.1}>
            <motion.div
              animate={{}}
              className={`overflow-hidden chamf chamf-lg border transition-all duration-500 ease-[var(--ease-brand)] ${
                on.rust
                  ? "border-white/10 bg-s1 shadow-[0_50px_110px_-50px_rgba(0,0,0,0.85)]"
                  : "border-[var(--color-line-strong)] bg-s2 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.7)]"
              }`}
            >
              {/* browserbalk */}
              <div className="flex items-center gap-2 border-b border-[var(--color-line)] bg-s2/60 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-blue" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-2 flex-1 truncate chamf-sm bg-white/[0.04] px-3 py-1 text-[0.62rem] font-semibold tracking-[0.08em] text-g500">
                  jouwmerk.nl
                </span>
              </div>

              {/* de pagina zelf — alles schaalt mee met de principes */}
              <motion.div
                animate={{ padding: on.ruimte ? (reduce ? 32 : 40) : 16 }}
                transition={{ duration: 0.5, ease }}
                className="relative"
              >
                {/* navigatie */}
                <div
                  className={`flex items-center justify-between transition-all duration-500 ${
                    on.rust ? "border-b border-white/[0.06] pb-4" : "border-b border-white/15 pb-2"
                  }`}
                >
                  <span
                    className={`font-display font-extrabold text-paper transition-all duration-500 ${
                      on.typografie ? "text-base tracking-[0.16em]" : "text-sm tracking-normal"
                    }`}
                  >
                    {on.typografie ? "MERK" : "Merk"}
                  </span>
                  <span className="flex gap-2">
                    {["Werk", "Over", "Contact"].map((n) => (
                      <span
                        key={n}
                        className={`transition-all duration-500 ${
                          on.rust
                            ? "text-[0.68rem] text-g300"
                            : "chamf-sm border border-white/20 px-2 py-0.5 text-[0.68rem] text-g300"
                        }`}
                      >
                        {n}
                      </span>
                    ))}
                  </span>
                </div>

                {/* kop */}
                <motion.div
                  animate={{ marginTop: on.ruimte ? 36 : 14 }}
                  transition={{ duration: 0.5, ease }}
                >
                  <p
                    className={`font-display font-extrabold text-paper transition-all duration-500 ${
                      on.typografie
                        ? "text-2xl leading-[1.15] tracking-tight sm:text-[1.75rem]"
                        : "text-lg leading-tight"
                    }`}
                  >
                    Vakmanschap in elk detail
                  </p>
                  <p
                    className={`transition-all duration-500 ${
                      on.typografie
                        ? "mt-3 text-sm leading-relaxed text-g300"
                        : "mt-1.5 text-[0.78rem] leading-snug text-g500"
                    } ${on.ruimte ? "max-w-sm" : "max-w-none"}`}
                  >
                    Ontworpen en gebouwd voor wie geen concessies doet.
                  </p>
                </motion.div>

                {/* beeld */}
                <motion.div
                  animate={{ marginTop: on.ruimte ? 32 : 12 }}
                  transition={{ duration: 0.5, ease }}
                  className={`relative overflow-hidden transition-all duration-500 ${
                    on.beeld ? "aspect-[16/9] chamf chamf-lg" : "aspect-[16/5] chamf-sm"
                  } ${on.rust ? "" : "border border-white/20"}`}
                >
                  <Image
                    src="/images/audience-premium.jpg"
                    alt="Voorbeeld van beeldgebruik op een premium website"
                    fill
                    sizes="(max-width: 1024px) 92vw, 52vw"
                    className={`object-cover object-center transition-all duration-500 ${
                      on.beeld ? "scale-100" : "scale-100 grayscale-[0.35] brightness-90"
                    }`}
                  />
                  {!on.rust && (
                    <span className="absolute left-2 top-2 chamf-sm bg-blue px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-[0.08em] text-white">
                      Nieuw
                    </span>
                  )}
                </motion.div>

                {/* onderblok */}
                <motion.div
                  animate={{ marginTop: on.ruimte ? 32 : 12 }}
                  transition={{ duration: 0.5, ease }}
                  className={`flex items-center justify-between gap-4 ${on.rust ? "" : "chamf-sm border border-white/15 p-2.5"}`}
                >
                  <span
                    className={`transition-all duration-500 ${
                      on.typografie ? "text-[0.8rem] text-g300" : "text-[0.72rem] text-g500"
                    }`}
                  >
                    {on.rust ? "Selectie van ons werk" : "Bekijk hier al ons werk en onze diensten!"}
                  </span>
                  <span
                    className={`shrink-0 whitespace-nowrap transition-all duration-500 ${
                      on.rust
                        ? "border-b border-blue/60 pb-0.5 text-[0.78rem] font-semibold text-blue-text"
                        : "chamf-sm bg-blue px-3 py-1.5 text-[0.72rem] font-bold text-white"
                    }`}
                  >
                    {on.rust ? "Neem contact op" : "KLIK HIER"}
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
