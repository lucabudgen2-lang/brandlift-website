"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { skyline } from "@/lib/cases/vanesch";
import { SKYLINE_PATHS, SKYLINE_VIEWBOX as V } from "./skyline-paths";

/* ============================================================
   De skyline bestaat echt.

   Het rode silhouet uit Rudy's logo is geen verzonnen stadje: elk
   gebouwtype erin is ook een klus van hem. Dat ontdekten we bij het
   merkboek, en het werd de openingsspread ervan.

   Hier interactief: tik op een gebouw (of op de knoppen eronder) en
   alleen dat deel van het silhouet licht op, met de echte klus ernaast.
   Het oplichten is een clipPath-rechthoek over het échte vectorvlak:
   er is niets nagetekend.
   ============================================================ */

const ease = [0.22, 0.61, 0.36, 1] as const;

export function SkylineEcht() {
  const [actief, setActief] = useState<string>(skyline[0].id);
  const reduce = useReducedMotion();
  const a = skyline.find((s) => s.id === actief)!;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-12">
      {/* ── het silhouet ── */}
      <div>
        <div className="relative">
          <svg
            viewBox={`${V.x} ${V.y} ${V.w} ${V.h}`}
            className="block h-auto w-full"
            role="img"
            aria-label="Het silhouet uit het logo van R. van Esch Gevelrestauratie: een toren, een molen, gevels en een kerktoren op één grondlijn"
          >
            <defs>
              <clipPath id="ves-sky-clip">
                <motion.rect
                  y={V.y}
                  height={V.h}
                  initial={false}
                  animate={{ x: a.x0, width: a.x1 - a.x0 }}
                  transition={{ duration: reduce ? 0 : 0.5, ease }}
                />
              </clipPath>
            </defs>
            {/* basis: gedimd */}
            <g fill="#EF4036" opacity={0.22}>
              {SKYLINE_PATHS.map((d, i) => (
                <path key={i} d={d} />
              ))}
            </g>
            {/* het gekozen gebouw: vol rood */}
            <g fill="#EF4036" clipPath="url(#ves-sky-clip)">
              {SKYLINE_PATHS.map((d, i) => (
                <path key={i} d={d} />
              ))}
            </g>
          </svg>

          {/* klikvlakken over de gebouwen */}
          {skyline.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActief(s.id)}
              onMouseEnter={() => setActief(s.id)}
              aria-label={`${s.label}: ${s.project}, ${s.plaats}`}
              aria-pressed={actief === s.id}
              className="absolute inset-y-0 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue"
              style={{ left: `${((s.x0 - V.x) / V.w) * 100}%`, width: `${((s.x1 - s.x0) / V.w) * 100}%` }}
            />
          ))}
        </div>

        {/* grondlijn + knoppen */}
        <div className="h-[3px] bg-[#EF4036]" />
        <div role="group" aria-label="Kies een gebouw" className="mt-5 flex flex-wrap gap-2">
          {skyline.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActief(s.id)}
              aria-pressed={actief === s.id}
              className={`chamf-sm border px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                actief === s.id
                  ? "border-[#262261] bg-[#262261] text-white"
                  : "border-ink/15 bg-white text-g700 hover:border-[#262261]"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── de echte klus ── */}
      <div className="relative mx-auto w-full max-w-[340px] lg:max-w-none">
        <div className="relative aspect-[4/5] overflow-hidden chamf chamf-lg border border-ink/10 bg-[#262261] shadow-[0_40px_80px_-40px_rgba(38,34,97,0.6)]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={a.id}
              className="absolute inset-0"
              initial={reduce ? false : { opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.45, ease }}
            >
              <Image src={a.foto} alt={a.alt} fill sizes="(max-width: 1024px) 340px, 420px" className="object-cover" />
            </motion.div>
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#262261] via-[#262261]/70 to-transparent p-5 pt-16">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#FF8F87]">
              {a.label} · {a.jaar}
            </p>
            <p className="mt-1 font-display text-lg font-extrabold leading-tight text-white">{a.project}</p>
            <p className="text-sm text-white/75">{a.plaats}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
