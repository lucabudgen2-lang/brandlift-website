"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { tijdlijn } from "@/lib/cases/vanesch";

/* ============================================================
   De tijdlijn als een stuk metselwerk.

   Elke steen is een moment, van het eerste telefoontje tot de
   livegang, gelegd in halfsteensverband: elke rij schuift een halve
   steen op, zoals een echte muur. De kleuren komen uit Rudy's merkboek:
   baksteen en kalkvoeg, gemeten op foto's van zijn eigen werk.
   Gevelnavy = een moment waarop Rudy zelf iets deed. Monumentrood =
   de steen die je bekijkt.

   Tik of beweeg over een steen; met de pijltjes loop je erdoorheen.
   ============================================================ */

const PER_RIJ = 4;
const STEEN = "#886259";
const VOEG = "#C6BEB5";
const NAVY = "#262261";
const ROOD = "#EF4036";

export function MetselTijdlijn() {
  const [actief, setActief] = useState(tijdlijn.length - 1);
  const reduce = useReducedMotion();
  const a = tijdlijn[actief];

  const rijen: (typeof tijdlijn)[number][][] = [];
  for (let i = 0; i < tijdlijn.length; i += PER_RIJ) rijen.push(tijdlijn.slice(i, i + PER_RIJ) as never);

  const stap = (d: number) => setActief((v) => Math.min(tijdlijn.length - 1, Math.max(0, v + d)));

  return (
    <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-12">
      <div
        className="overflow-hidden chamf chamf-lg p-2 sm:p-2.5"
        style={{ background: VOEG }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); stap(1); }
          if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); stap(-1); }
        }}
      >
        <div className="space-y-2 sm:space-y-2.5">
          {rijen.map((rij, r) => (
            <div key={r} className="flex gap-2 sm:gap-2.5">
              {/* halfsteensverband: elke rij is 10 eenheden breed; de even
                  rijen eindigen op een hele, de oneven beginnen en eindigen
                  op een halve steen, zodat de voegen verspringen */}
              {r % 2 === 1 && <span aria-hidden className="block rounded-[2px]" style={{ flex: "1 1 0", background: STEEN, opacity: 0.5 }} />}
              {rij.map((m) => {
                const i = tijdlijn.indexOf(m);
                const aan = i === actief;
                return (
                  <motion.button
                    key={m.d}
                    type="button"
                    onClick={() => setActief(i)}
                    onMouseEnter={() => setActief(i)}
                    aria-pressed={aan}
                    aria-label={`${m.d}: ${m.kop}`}
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.35, delay: reduce ? 0 : i * 0.04 }}
                    className="group relative min-w-0 rounded-[2px] px-2 py-3 text-left outline-none transition-[filter] duration-200 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-white sm:px-3 sm:py-4"
                    style={{
                      flex: "2 1 0",
                      background: aan ? ROOD : m.rudy ? NAVY : STEEN,
                      boxShadow: "inset 0 -3px 0 rgba(0,0,0,0.18), inset 0 2px 0 rgba(255,255,255,0.08)",
                    }}
                  >
                    <span className="block font-display text-[0.7rem] font-extrabold tabular-nums text-white sm:text-sm">{m.d}</span>
                    <span className="mt-0.5 hidden truncate text-[0.68rem] font-medium text-white/80 sm:block">{m.kop}</span>
                  </motion.button>
                );
              })}
              {Array.from({ length: PER_RIJ - rij.length }).map((_, k) => (
                <span key={`leeg-${k}`} aria-hidden className="block rounded-[2px]" style={{ flex: "2 1 0", background: STEEN, opacity: 0.5 }} />
              ))}
              <span aria-hidden className="block rounded-[2px]" style={{ flex: r % 2 === 1 ? "1 1 0" : "2 1 0", background: STEEN, opacity: 0.5 }} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={a.d}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            aria-live="polite"
          >
            <p className="font-display text-sm font-bold tabular-nums text-blue-text">
              {a.d} 2026 · {actief + 1} van {tijdlijn.length}
            </p>
            <p className="mt-2 font-display text-3xl font-extrabold tracking-tight text-paper">{a.kop}</p>
            <p className="mt-3 text-lg leading-relaxed text-g300">{a.tekst}</p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-6 flex items-center gap-2">
          {[-1, 1].map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => stap(d)}
              disabled={d < 0 ? actief === 0 : actief === tijdlijn.length - 1}
              aria-label={d < 0 ? "Vorig moment" : "Volgend moment"}
              className="grid h-10 w-10 place-items-center chamf-sm border border-[var(--color-line-strong)] text-paper transition-colors hover:border-blue hover:bg-blue disabled:opacity-30 disabled:hover:bg-transparent"
            >
              {d < 0 ? "←" : "→"}
            </button>
          ))}
        </div>
        <ul className="mt-7 space-y-2 text-[0.8rem] text-g400">
          {[
            { c: NAVY, l: "Rudy aan zet: een gesprek, het formulier, zijn feedback" },
            { c: STEEN, l: "Wij aan het werk" },
            { c: ROOD, l: "Het moment dat je bekijkt" },
          ].map((x) => (
            <li key={x.l} className="flex items-center gap-2.5">
              <span className="h-3.5 w-6 shrink-0 rounded-[2px] border border-white/10" style={{ background: x.c }} />
              {x.l}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
