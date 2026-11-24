"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LOGO_VIEWBOX as V, ontleding, IMG } from "@/lib/cases/vanesch";

/* ============================================================
   Het logo, ontleed - de tweede spread van het merkboek, maar dan om
   aan te zitten. Zeven punten op het echte logobestand van 2016, op
   de plek die in het vectorbestand is gemeten. Tik op een punt en je
   leest wat het is en wat het in de huisstijl werd.
   ============================================================ */

const pct = (x: number, y: number) => ({
  left: `${((x - V.x) / V.w) * 100}%`,
  top: `${((y - V.y) / V.h) * 100}%`,
});

export function LogoOntleed() {
  const [actief, setActief] = useState(0);
  const reduce = useReducedMotion();
  const a = ontleding[actief];

  return (
    <div className="chamf chamf-lg border border-ink/10 bg-white p-5 shadow-[0_30px_70px_-45px_rgba(0,0,0,0.45)] sm:p-8 md:p-10">
      <div className="relative mx-auto max-w-[760px] px-2 py-6 sm:px-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/logo-kleur.svg`} alt="Het logo van R. van Esch Gevelrestauratie" className="block h-auto w-full" />
        {ontleding.map((o, i) => (
          <button
            key={o.nr}
            type="button"
            onClick={() => setActief(i)}
            onMouseEnter={() => setActief(i)}
            aria-pressed={actief === i}
            aria-label={`${o.nr} ${o.naam}`}
            className="group absolute -translate-x-1/2 -translate-y-1/2 p-1.5 outline-none"
            style={pct(o.doel[0], o.doel[1])}
          >
            <span
              className={`grid h-6 w-6 place-items-center chamf-sm text-[0.62rem] font-bold tabular-nums shadow-[0_6px_16px_-4px_rgba(0,0,0,0.5)] transition-all duration-200 sm:h-7 sm:w-7 sm:text-[0.7rem] ${
                actief === i ? "scale-110 bg-blue text-white" : "bg-[#262261] text-white group-hover:bg-blue"
              } group-focus-visible:ring-2 group-focus-visible:ring-blue group-focus-visible:ring-offset-2`}
            >
              {o.nr}
            </span>
            {actief === i && !reduce && (
              <span aria-hidden className="absolute inset-0 m-auto h-6 w-6 animate-ping chamf-sm bg-blue/40 sm:h-7 sm:w-7" />
            )}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-6 border-t border-ink/[0.07] pt-6 md:grid-cols-[auto_1fr] md:items-start md:gap-8">
        <div className="flex gap-1.5 md:flex-col" role="group" aria-label="Onderdelen van het logo">
          {ontleding.map((o, i) => (
            <button
              key={o.nr}
              type="button"
              onClick={() => setActief(i)}
              aria-pressed={actief === i}
              className={`h-1.5 flex-1 chamf-sm transition-colors md:h-6 md:w-1.5 md:flex-none ${actief === i ? "bg-blue" : "bg-ink/10 hover:bg-ink/25"}`}
              aria-label={o.naam}
            />
          ))}
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={a.nr}
            initial={reduce ? false : { opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? undefined : { opacity: 0, x: -10 }}
            transition={{ duration: 0.25 }}
            aria-live="polite"
          >
            <p className="font-display text-xs font-bold text-blue">{a.nr} / 07</p>
            <p className="mt-1 font-display text-2xl font-extrabold tracking-tight text-ink">{a.naam}</p>
            <p className="mt-2 max-w-2xl text-[1.02rem] leading-relaxed text-g600">{a.tekst}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
