"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { spiegel } from "@/lib/cases/vanesch";

/* ============================================================
   Profiel ↔ site: elke categorie in het Google-bedrijfsprofiel
   heeft precies één pagina op de site, en elke dienst daaronder hangt
   aan die pagina. Google ziet zo twee keer hetzelfde verhaal.

   Links het profiel, rechts de site, in het midden de verbinding.
   Kies een categorie en zijn diensten klappen uit; op een telefoon
   staan profiel en pagina onder elkaar.
   ============================================================ */

const ease = [0.22, 0.61, 0.36, 1] as const;

export function ProfielSpiegel() {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <div className="space-y-3">
      <div className="hidden grid-cols-[1fr_auto_1fr] items-center gap-4 px-1 pb-1 text-[0.66rem] font-bold uppercase tracking-[0.12em] text-g600 md:grid">
        <span>Google-bedrijfsprofiel</span>
        <span className="w-14" />
        <span>Website</span>
      </div>

      {spiegel.map((s, i) => {
        const aan = open === i;
        return (
          <div
            key={s.categorie}
            className={`overflow-hidden chamf chamf-lg border transition-colors duration-300 ${
              aan ? "border-blue/40 bg-white shadow-[0_30px_60px_-36px_rgba(1,48,253,0.45)]" : "border-ink/10 bg-white/70"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(aan ? -1 : i)}
              aria-expanded={aan}
              className="grid w-full min-w-0 grid-cols-1 items-center gap-3 p-5 text-left md:grid-cols-[1fr_auto_1fr] md:gap-4 md:p-6"
            >
              {/* profiel */}
              <span className="flex items-center gap-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center chamf-sm border border-ink/10 bg-paper">
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                    <path fill="#4285F4" d="M22.6 12.2c0-.8-.1-1.5-.2-2.2H12v4.2h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-1.9 3.3-4.8 3.3-8z" />
                    <path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.7c-1 .7-2.2 1-3.7 1-2.9 0-5.3-1.9-6.2-4.5H2.1v2.8A11 11 0 0 0 12 23z" />
                    <path fill="#FBBC05" d="M5.8 14.1a6.6 6.6 0 0 1 0-4.2V7.1H2.1a11 11 0 0 0 0 9.8l3.7-2.8z" />
                    <path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.6l3.2-3.2A11 11 0 0 0 2.1 7.1l3.7 2.8C6.7 7.3 9.1 5.4 12 5.4z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-[0.66rem] font-bold uppercase tracking-[0.1em] text-g600">{s.rol}</span>
                  <span className="block font-display text-lg font-extrabold leading-tight tracking-tight text-ink">{s.categorie}</span>
                </span>
              </span>

              {/* verbinding */}
              <span aria-hidden className="hidden items-center md:flex">
                <span className={`h-px w-5 transition-colors ${aan ? "bg-blue" : "bg-ink/20"}`} />
                <span className={`grid h-7 w-7 place-items-center chamf-sm text-xs font-bold transition-colors ${aan ? "bg-blue text-white" : "bg-ink/5 text-g600"}`}>
                  =
                </span>
                <span className={`h-px w-5 transition-colors ${aan ? "bg-blue" : "bg-ink/20"}`} />
              </span>

              {/* pagina */}
              <span className="flex min-w-0 items-center justify-between gap-3 border-t border-ink/[0.06] pt-3 md:border-0 md:pt-0">
                <span className="min-w-0">
                  <span className="block truncate font-mono text-[0.72rem] text-blue">vaneschgevelrestauratie.nl{s.pad === "/" ? "" : s.pad}</span>
                  <span className="block font-display text-lg font-extrabold leading-tight tracking-tight text-ink">{s.pagina}</span>
                </span>
                <span className="flex shrink-0 items-center gap-2 text-[0.75rem] font-semibold text-g600">
                  {s.diensten.length} diensten
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden className={`transition-transform duration-300 ${aan ? "rotate-180" : ""}`}>
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {aan && (
                <motion.div
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease }}
                >
                  <div className="border-t border-ink/[0.06] px-5 pb-6 pt-5 md:px-6">
                    <p className="text-[0.66rem] font-bold uppercase tracking-[0.12em] text-g600">
                      Diensten met een eigen pagina onder deze categorie
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {s.diensten.map((d, k) => (
                        <motion.li
                          key={d}
                          initial={reduce ? false : { opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: reduce ? 0 : 0.08 + k * 0.05 }}
                          className="inline-flex items-center gap-2 chamf-sm border border-blue/20 bg-blue/[0.05] px-3 py-1.5 text-[0.85rem] font-medium text-g800"
                        >
                          <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                          {d}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
