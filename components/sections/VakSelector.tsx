"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";

/* ============================================================
   VAKBEDRIJVEN · SELECTOR — "Zo zoekt jouw klant".
   Horizontale rij vakken. Kies je vak en zie links hoe klanten
   in dat vak zoeken, en rechts de sitestructuur die die zoek-
   opdrachten afvangt. Alleen voorbeelden - geen cijfers.
   ============================================================ */

const ease = [0.22, 0.61, 0.36, 1] as const;

type Vak = {
  id: string;
  label: string;
  zoekopdrachten: string[];
  diensten: string[];
};

const vakken: Vak[] = [
  {
    id: "hovenier",
    label: "Hovenier",
    zoekopdrachten: ["hovenier den haag", "tuin laten aanleggen", "tuinonderhoud in de buurt", "hovenier offerte aanvragen"],
    diensten: ["Tuinaanleg", "Tuinonderhoud", "Bestrating", "Beplanting"],
  },
  {
    id: "schilder",
    label: "Schilder",
    zoekopdrachten: ["schilder rotterdam", "buitenschilderwerk kosten", "schildersbedrijf in de buurt", "kozijnen schilderen offerte"],
    diensten: ["Binnenschilderwerk", "Buitenschilderwerk", "Houtrotherstel", "Behangwerk"],
  },
  {
    id: "aannemer",
    label: "Aannemer",
    zoekopdrachten: ["aannemer utrecht", "aanbouw laten bouwen", "verbouwing offerte", "aannemer in de buurt"],
    diensten: ["Verbouwingen", "Aanbouw en opbouw", "Renovatie", "Casco afbouw"],
  },
  {
    id: "installateur",
    label: "Installateur",
    zoekopdrachten: ["installateur amsterdam", "cv-ketel vervangen", "warmtepomp laten installeren", "loodgieter met spoed"],
    diensten: ["CV en verwarming", "Warmtepompen", "Sanitair", "Onderhoud"],
  },
  {
    id: "dakdekker",
    label: "Dakdekker",
    zoekopdrachten: ["dakdekker eindhoven", "dak lekkage reparatie", "dakbedekking vervangen kosten", "dakdekker in de buurt"],
    diensten: ["Platte daken", "Hellende daken", "Dakreparatie", "Dakisolatie"],
  },
  {
    id: "elektricien",
    label: "Elektricien",
    zoekopdrachten: ["elektricien delft", "groepenkast vervangen", "laadpaal laten installeren", "elektricien spoed"],
    diensten: ["Groepenkasten", "Laadpalen", "Verlichting", "Storingen"],
  },
  {
    id: "loodgieter",
    label: "Loodgieter",
    zoekopdrachten: ["loodgieter den haag", "lekkage opsporen", "badkamer verbouwen", "loodgieter met spoed"],
    diensten: ["Lekkages", "Badkamers", "Riolering", "Sanitair"],
  },
];

function SearchRow({ q }: { q: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-s0 px-3.5 py-2.5">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        className="shrink-0 text-g500"
        aria-hidden
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" strokeLinecap="round" />
      </svg>
      <span className="truncate text-[0.8rem] font-medium text-g200">{q}</span>
    </div>
  );
}

export function VakSelector() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const vak = vakken[active];

  return (
    <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
      <div className="animate-glow pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />

      <Container className="relative">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Zo zoekt jouw klant</Eyebrow>
          </Reveal>
          <LineReveal
            as="h2"
            className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
            lines={[{ text: "Kies je vak." }, { text: "Zie hoe je gevonden wordt.", className: "text-blue-text" }]}
          />
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg leading-relaxed text-g300">
              Elk vak heeft zijn eigen zoekopdrachten. Wij bouwen de structuur die daar precies op
              aansluit - een pagina per dienst en per werkgebied, in plaats van één pagina die alles
              moet doen.
            </p>
          </Reveal>
        </div>

        {/* ── vak-chips ── */}
        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap gap-2.5" role="group" aria-label="Kies je vak">
            {vakken.map((v, i) => {
              const on = i === active;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  className={`relative overflow-hidden chamf-sm border px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                    on
                      ? "border-blue bg-blue text-white shadow-[0_0_32px_-8px_rgba(1,48,253,0.8)]"
                      : "border-white/12 bg-s1/60 text-g300 hover:border-blue/50 hover:text-paper"
                  }`}
                >
                  {on && (
                    <span
                      aria-hidden
                      className="absolute right-0 top-0 h-3 w-3 bg-white/30 [clip-path:polygon(100%_0,0_0,100%_100%)]"
                    />
                  )}
                  {v.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* ── resultaat ── */}
        <div className="mt-8 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {/* links: zoekopdrachten */}
          <Reveal delay={0.1}>
            <div className="h-full overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 p-6 shadow-[0_40px_90px_-45px_rgba(0,0,0,0.8)] md:p-7">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-blue-text">
                Zo zoeken jouw klanten
              </p>
              <p className="mt-1.5 text-xs text-g600">Voorbeelden van zoekopdrachten in dit vak</p>
              <AnimatePresence initial={false}>
                <motion.div
                  key={vak.id}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease }}
                  className="mt-5 space-y-2.5"
                >
                  {vak.zoekopdrachten.map((q) => (
                    <SearchRow key={q} q={q} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          {/* rechts: sitestructuur */}
          <Reveal delay={0.16}>
            <div className="h-full overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 p-6 shadow-[0_40px_90px_-45px_rgba(0,0,0,0.8)] md:p-7">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-blue-text">
                Zo ziet jouw site eruit
              </p>
              <p className="mt-1.5 text-xs text-g600">De structuur die die zoekopdrachten afvangt</p>
              <AnimatePresence initial={false}>
                <motion.div
                  key={vak.id}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease }}
                  className="mt-5"
                >
                  {/* sitemap-boom */}
                  <div className="chamf border border-white/10 bg-s0/70 px-4 py-3.5">
                    <span className="inline-flex items-center gap-2 text-[0.82rem] font-bold text-paper">
                      <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                      Home
                    </span>

                    <div className="mt-3 space-y-2 border-l border-white/10 pl-4">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-g500">
                        Diensten
                      </p>
                      <div className="grid gap-1.5 sm:grid-cols-2">
                        {vak.diensten.map((d) => (
                          <span
                            key={d}
                            className="chamf-sm border border-blue/25 bg-blue/[0.08] px-3 py-1.5 text-[0.75rem] font-medium text-g100"
                          >
                            {d}
                          </span>
                        ))}
                      </div>

                      <p className="pt-2 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-g500">
                        Werkgebieden
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {["Je stad", "Buurgemeente", "Regio"].map((w) => (
                          <span
                            key={w}
                            className="chamf-sm border border-white/10 px-2.5 py-1 text-[0.72rem] text-g300"
                          >
                            {w}
                          </span>
                        ))}
                      </div>

                      <p className="pt-2 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-g500">
                        Vertrouwen
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {["Projecten", "Reviews", "Over ons", "Contact"].map((w) => (
                          <span
                            key={w}
                            className="chamf-sm border border-white/10 px-2.5 py-1 text-[0.72rem] text-g300"
                          >
                            {w}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-g500">
                    Elke dienst en elk werkgebied een eigen pagina - zo kan Google je koppelen aan precies
                    de klus die iemand zoekt.
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
