"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { merkPaginas as giorgiPaginas } from "@/lib/cases/giorgi";

type Pagina = { src: string; alt: string; caption: string };

/* ============================================================
   Het merkboek, pagina voor pagina - met een vergroting.

   Merkboekpagina's zijn tekstrijk; op tegelformaat lees je ze niet.
   Daarom opent elke pagina in een lightbox op volle breedte, met
   pijltjestoetsen, Escape en een teller. De focus gaat terug naar de
   tegel waarmee je hem opende.
   ============================================================ */

/* `paginas` is optioneel: zonder prop de Giorgi-pagina's. Alle
   pagina's moeten A4 liggend zijn (1600 x 1131). */
export function MerkboekGalerij({ paginas: merkPaginas = giorgiPaginas }: { paginas?: readonly Pagina[] } = {}) {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const tegels = useRef<(HTMLButtonElement | null)[]>([]);
  const sluitKnop = useRef<HTMLButtonElement>(null);
  const laatste = useRef<number | null>(null);

  const sluit = useCallback(() => {
    setOpen((o) => {
      laatste.current = o;
      return null;
    });
  }, []);
  const stap = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + merkPaginas.length) % merkPaginas.length)), [merkPaginas.length]);

  useEffect(() => {
    if (open === null) {
      if (laatste.current !== null) tegels.current[laatste.current]?.focus();
      return;
    }
    sluitKnop.current?.focus();
    const toets = (e: KeyboardEvent) => {
      if (e.key === "Escape") sluit();
      if (e.key === "ArrowRight") stap(1);
      if (e.key === "ArrowLeft") stap(-1);
    };
    document.addEventListener("keydown", toets);
    const vorig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", toets);
      document.body.style.overflow = vorig;
    };
  }, [open, sluit, stap]);

  const [eerste, ...rest] = merkPaginas;

  return (
    <>
      <div className="grid gap-4 lg:grid-cols-[1.35fr_1fr]">
        <Tegel index={0} p={eerste} groot onOpen={setOpen} refFn={(el) => (tegels.current[0] = el)} />
        <div className="grid grid-cols-2 gap-4">
          {rest.slice(0, 4).map((p, k) => (
            <Tegel key={p.src} index={k + 1} p={p} onOpen={setOpen} refFn={(el) => (tegels.current[k + 1] = el)} />
          ))}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-3">
        {rest.slice(4).map((p, k) => (
          <Tegel key={p.src} index={k + 5} p={p} onOpen={setOpen} refFn={(el) => (tegels.current[k + 5] = el)} />
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Merkboekpagina: ${merkPaginas[open].caption}`}
            className="fixed inset-0 z-[80] flex flex-col bg-black/92 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            onClick={sluit}
          >
            <div className="flex items-center justify-between px-5 py-4 text-sm text-g300" onClick={(e) => e.stopPropagation()}>
              <span className="font-semibold text-paper">
                {merkPaginas[open].caption}
                <span className="ml-3 font-normal tabular-nums text-g500">{open + 1} / {merkPaginas.length}</span>
              </span>
              <button ref={sluitKnop} type="button" onClick={sluit} className="chamf-sm border border-white/20 px-3 py-1.5 font-semibold text-paper hover:bg-white/10">
                Sluiten
              </button>
            </div>
            <div className="relative flex flex-1 items-center justify-center px-4 pb-6 md:px-20">
              <motion.div
                key={open}
                initial={reduce ? false : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="relative aspect-[1600/1131] w-full max-w-[1200px] max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image src={merkPaginas[open].src} alt={merkPaginas[open].alt} fill sizes="(max-width: 1280px) 96vw, 1200px" className="object-contain" />
              </motion.div>
              {[-1, 1].map((d) => (
                <button
                  key={d}
                  type="button"
                  aria-label={d < 0 ? "Vorige pagina" : "Volgende pagina"}
                  onClick={(e) => {
                    e.stopPropagation();
                    stap(d);
                  }}
                  className={`absolute top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center chamf-sm border border-white/20 text-paper hover:bg-blue md:grid ${d < 0 ? "left-4" : "right-4"}`}
                >
                  {d < 0 ? "←" : "→"}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Tegel({
  p,
  index,
  groot = false,
  onOpen,
  refFn,
}: {
  p: Pagina;
  index: number;
  groot?: boolean;
  onOpen: (i: number) => void;
  refFn: (el: HTMLButtonElement | null) => void;
}) {
  return (
    <button
      ref={refFn}
      type="button"
      onClick={() => onOpen(index)}
      aria-label={`Vergroot: ${p.caption}`}
      className="group relative block w-full overflow-hidden chamf chamf-lg border border-ink/10 bg-white text-left shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)] outline-none transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-blue"
    >
      <span className="relative block aspect-[1600/1131]">
        <Image src={p.src} alt={p.alt} fill sizes={groot ? "(max-width: 1024px) 92vw, 640px" : "(max-width: 1024px) 46vw, 300px"} className="object-cover" />
      </span>
      <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 chamf-sm bg-s0/75 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-g100 backdrop-blur-sm">
        {p.caption}
        <span aria-hidden className="text-blue-text opacity-0 transition-opacity group-hover:opacity-100">⤢</span>
      </span>
    </button>
  );
}
