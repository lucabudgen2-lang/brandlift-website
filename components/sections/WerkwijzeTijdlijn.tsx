"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";

/* ============================================================
   WERKWIJZE · TIJDLIJN — twee banen naast elkaar.
   Horizontale week-rail die je doorloopt. Per week zie je wat
   wij doen en wat jij doet. Dat tweede lijstje is kort - en dat
   is precies het punt. Geen cijfers, alleen het echte proces.
   ============================================================ */

const ease = [0.22, 0.61, 0.36, 1] as const;

type Week = {
  id: string;
  label: string;
  sub: string;
  fase: string;
  wij: string[];
  jij: string[];
  jijNote: string;
};

const weken: Week[] = [
  {
    id: "w1",
    label: "Week 1",
    sub: "Groeigesprek en strategie",
    fase: "Fase 1",
    wij: [
      "Groeigesprek van een half uur, zonder salespitch",
      "Onderzoek naar je markt, je concurrenten en waar je klant op zoekt",
      "Positionering bepalen: waarom jij en niet de buurman",
      "Sitemap en paginastructuur vastleggen",
    ],
    jij: ["Eén gesprek van een half uur", "Vertellen wat je bedrijf goed maakt"],
    jijNote: "Verder hoef je deze week niets voor te bereiden.",
  },
  {
    id: "w2",
    label: "Week 2",
    sub: "Ontwerp en merk",
    fase: "Fase 2",
    wij: [
      "Ontwerp van de belangrijkste pagina's, op jouw merk",
      "Kleur, typografie en beeldtaal aanscherpen waar dat nodig is",
      "Teksten schrijven op de zoekintentie van jouw klant",
    ],
    jij: ["Beeldmateriaal aanleveren", "Eén feedbackronde op het ontwerp"],
    jijNote: "Heb je geen goed beeldmateriaal? Dan denken we daarin mee.",
  },
  {
    id: "w3",
    label: "Week 3",
    sub: "Bouw en techniek",
    fase: "Fase 3",
    wij: [
      "De site bouwen: snel, modern en mobiel-first",
      "Techniek inrichten - schema, snelheid, formulieren, meetbaarheid",
      "Alle pagina's vullen en regel voor regel nakijken",
    ],
    jij: ["Niets"],
    jijNote: "Dit is onze week. Je hoort alleen van ons als we iets nodig hebben.",
  },
  {
    id: "w4",
    label: "Week 4",
    sub: "Livegang en lokale SEO",
    fase: "Fase 4",
    wij: [
      "Laatste controle op snelheid, mobiel en alle formulieren",
      "Domein en hosting live zetten",
      "Google Bedrijfsprofiel, schema en vermeldingen inrichten",
      "Uitleg hoe je zelf kleine dingen aanpast",
    ],
    jij: ["Akkoord geven op de laatste versie"],
    jijNote: "Daarna staat hij live en gaan we door tot je tevreden bent.",
  },
  {
    id: "na",
    label: "Daarna",
    sub: "Groei en onderhoud",
    fase: "Fase 5",
    wij: [
      "Meekijken hoe de site het doet in de zoekresultaten",
      "Uitbreiden met extra pagina's, content of advertenties",
      "Hosting en onderhoud, als je dat bij ons afneemt",
    ],
    jij: ["Zelf bepalen of en hoe je doorgroeit"],
    jijNote: "Geen verplichte doorloop. Je zit nergens aan vast.",
  },
];

function Dot({ filled }: { filled: boolean }) {
  return (
    <span
      aria-hidden
      className={`mt-[7px] h-1.5 w-1.5 shrink-0 chamf-sm transition-colors duration-200 ${
        filled ? "bg-blue" : "bg-white/25"
      }`}
    />
  );
}

export function WerkwijzeTijdlijn() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const week = weken[active];
  const progress = active / (weken.length - 1);

  return (
    <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
      <div className="animate-glow pointer-events-none absolute -right-40 top-24 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />

      <Container className="relative">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>De tijdlijn</Eyebrow>
          </Reveal>
          <LineReveal
            as="h2"
            className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
            lines={[
              { text: "Drie tot vier weken." },
              { text: "En weinig werk voor jou.", className: "text-blue-text" },
            ]}
          />
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg leading-relaxed text-g300">
              De grootste zorg bij een nieuwe website is niet het geld - het is de tijd die het jou
              gaat kosten. Loop de weken hieronder door en zie precies wat wij doen, en wat er van jou
              wordt gevraagd.
            </p>
          </Reveal>
        </div>

        {/* ── week-rail ── */}
        <Reveal delay={0.16}>
          <div className="relative mt-12">
            {/* lijn */}
            <span
              aria-hidden
              className="absolute left-0 right-0 top-[13px] hidden h-px bg-[var(--color-line-strong)] sm:block"
            />
            <motion.span
              aria-hidden
              className="absolute left-0 top-[13px] hidden h-[2px] origin-left bg-blue shadow-[0_0_12px_rgba(1,48,253,0.8)] sm:block"
              style={{ right: 0 }}
              animate={{ scaleX: progress }}
              initial={false}
              transition={reduce ? { duration: 0 } : { duration: 0.45, ease }}
            />

            <div
              className="relative grid grid-cols-2 gap-x-4 gap-y-6 sm:flex sm:justify-between"
              role="group"
              aria-label="Kies een week"
            >
              {weken.map((w, i) => {
                const done = i <= active;
                const on = i === active;
                return (
                  <button
                    key={w.id}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    className="group flex flex-col items-start text-left sm:items-center sm:text-center"
                  >
                    <span
                      aria-hidden
                      className={`grid h-[27px] w-[27px] place-items-center chamf-sm border transition-all duration-200 ${
                        on
                          ? "border-blue bg-blue shadow-[0_0_18px_rgba(1,48,253,0.75)]"
                          : done
                            ? "border-blue/60 bg-s2"
                            : "border-[var(--color-line-strong)] bg-s2 group-hover:border-blue/50"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 chamf-sm transition-colors duration-200 ${
                          on ? "bg-white" : done ? "bg-blue" : "bg-white/30"
                        }`}
                      />
                    </span>
                    <span
                      className={`mt-3 font-display text-sm font-extrabold tracking-tight transition-colors duration-200 ${
                        on ? "text-paper" : "text-g500 group-hover:text-g300"
                      }`}
                    >
                      {w.label}
                    </span>
                    <span
                      className={`mt-0.5 max-w-[8.5rem] text-[0.7rem] leading-snug transition-colors duration-200 ${
                        on ? "text-blue-text" : "text-g600"
                      }`}
                    >
                      {w.sub}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* ── twee banen ── */}
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:gap-6">
          {/* baan 1 — wij */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 p-6 shadow-[0_40px_90px_-45px_rgba(0,0,0,0.8)] md:p-8">
              <span
                aria-hidden
                className="absolute right-0 top-0 h-5 w-5 bg-blue [clip-path:polygon(100%_0,0_0,100%_100%)]"
              />
              <div className="flex items-center gap-3">
                <span className="chamf-sm bg-blue px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.1em] text-white">
                  {week.fase}
                </span>
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-blue-text">
                  Wat wij doen
                </p>
              </div>
              <AnimatePresence initial={false}>
                <motion.div
                  key={week.id}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease }}
                >
                  <h3 className="mt-4 font-display text-xl font-extrabold leading-tight tracking-tight text-paper md:text-2xl">
                    {week.sub}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {week.wij.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Dot filled />
                        <span className="text-[0.95rem] leading-relaxed text-g300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          {/* baan 2 — jij */}
          <Reveal delay={0.16}>
            <div className="relative overflow-hidden chamf chamf-lg border border-dashed border-white/15 bg-s1/40 p-6 backdrop-blur-md md:p-8">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-g500">
                Wat jij doet
              </p>
              <AnimatePresence initial={false}>
                <motion.div
                  key={week.id}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease }}
                >
                  <ul className="mt-5 space-y-3">
                    {week.jij.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Dot filled={item !== "Niets"} />
                        <span
                          className={`text-[0.95rem] leading-relaxed ${
                            item === "Niets" ? "font-semibold text-paper" : "text-g300"
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-relaxed text-g500">
                    {week.jijNote}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 text-sm leading-relaxed text-g500">
            Drie tot vier weken is wat een website bij ons meestal kost. Loopt het uit doordat we op
            iets wachten, dan hoor je dat van tevoren - niet achteraf.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
