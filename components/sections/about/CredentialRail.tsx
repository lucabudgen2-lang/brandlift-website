"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/* De drie credentials als open te klappen rail. Precies één staat open,
   zodat de sectie een leesvolgorde krijgt in plaats van drie blokken die
   even hard om aandacht vragen. De teksten zijn onveranderd; alleen de
   manier waarop je ze tegenkomt is anders. */

const ease = [0.22, 0.61, 0.36, 1] as const;

export type Credential = { n: string; title: string; body: string };

export function CredentialRail({ blocks }: { blocks: readonly Credential[] }) {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <div className="mt-9 border-t border-[var(--color-line)]">
      {blocks.map((b, i) => {
        const on = i === open;
        return (
          <div key={b.n} className="border-b border-[var(--color-line)]">
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-expanded={on}
              className="group flex w-full items-center gap-5 py-5 text-left"
            >
              <span
                className={`grid h-9 w-9 shrink-0 place-items-center chamf-sm border font-display text-sm font-extrabold transition-colors duration-200 ${
                  on
                    ? "border-blue bg-blue text-white shadow-[0_0_26px_-6px_rgba(1,48,253,0.9)]"
                    : "border-blue/30 bg-blue/5 text-blue-text group-hover:border-blue/60"
                }`}
              >
                {b.n}
              </span>
              <span
                className={`flex-1 font-display text-lg font-extrabold leading-snug tracking-tight transition-colors duration-200 md:text-xl ${
                  on ? "text-paper" : "text-g300 group-hover:text-paper"
                }`}
              >
                {b.title}
              </span>
              <span
                aria-hidden
                className={`shrink-0 text-xl leading-none transition-all duration-200 ${
                  on ? "rotate-45 text-blue-text" : "text-g600 group-hover:text-g300"
                }`}
              >
                +
              </span>
            </button>

            <AnimatePresence initial={false}>
              {on && (
                <motion.div
                  key="body"
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease }}
                  className="overflow-hidden"
                >
                  <p className="max-w-lg pb-6 pl-14 text-[0.95rem] leading-relaxed text-g500">
                    {b.body}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
