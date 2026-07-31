"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";

/* ============================================================
   FOTOGRAFIE — de shoot op locatie, met vergrootbare galerij.

   Acht foto's uit de shoot, geselecteerd uit 31 opnamen. Staat er
   ooit een foto bij zonder `src`, dan valt de tegel netjes terug op
   een placeholder in plaats van een gebroken beeld.
   ============================================================ */

const ease = [0.22, 0.61, 0.36, 1] as const;

type Foto = {
  id: string;
  /** Leeg laten = nette placeholder-tegel i.p.v. een gebroken beeld. */
  src?: string;
  alt: string;
  caption: string;
  /** Werkelijke verhouding, zodat de lightbox staand en liggend allebei goed toont. */
  w: number;
  h: number;
  /** Grote tegel in het raster. */
  groot?: boolean;
};

const fotos: Foto[] = [
  {
    id: "f1",
    src: "/images/cases/eykelenboom/foto/portret-sebastiaan.jpg",
    alt: "Sebastiaan Eykelenboom in bedrijfspolo bij een project in Den Haag",
    caption: "De hovenier zelf",
    w: 1600,
    h: 2399,
    groot: true,
  },
  {
    id: "f2",
    src: "/images/cases/eykelenboom/foto/kruiwagen-stenen.jpg",
    alt: "Sebastiaan Eykelenboom met een kruiwagen vol natuursteen in een Haagse achterom",
    caption: "Materiaal naar de achtertuin",
    w: 1600,
    h: 2400,
  },
  {
    id: "f3",
    src: "/images/cases/eykelenboom/foto/merk-op-de-rug.jpg",
    alt: "Werkpolo met het logo van Hovenier Eykelenboom op de rug, tijdens het werk in de tuin",
    caption: "Het merk op de werkvloer",
    w: 1600,
    h: 2400,
  },
  {
    id: "f4",
    src: "/images/cases/eykelenboom/foto/vlonder-boren.jpg",
    alt: "Sebastiaan Eykelenboom schroeft vlonderplanken vast op een terras in Den Haag",
    caption: "Vlonder leggen",
    w: 1600,
    h: 2400,
  },
  {
    id: "f5",
    src: "/images/cases/eykelenboom/foto/zagen-vlonderplank.jpg",
    alt: "Vlonderplank op maat zagen met een cirkelzaag tijdens de aanleg van een terras",
    caption: "Op maat zagen",
    w: 1600,
    h: 1067,
  },
  {
    id: "f6",
    src: "/images/cases/eykelenboom/foto/muur-metselen.jpg",
    alt: "Sebastiaan Eykelenboom metselt een natuurstenen muurtje tegen een oude Haagse gevel",
    caption: "Het muurtje metselen",
    w: 1600,
    h: 1067,
  },
  {
    id: "f7",
    src: "/images/cases/eykelenboom/foto/steen-plaatsen.jpg",
    alt: "Handen die een natuursteen op zijn plek leggen in een tuinmuurtje",
    caption: "Steen voor steen",
    w: 1600,
    h: 1067,
  },
  {
    id: "f8",
    src: "/images/cases/eykelenboom/foto/muur-afwerken.jpg",
    alt: "Het natuurstenen muurtje wordt afgewerkt naast de terrasdeuren",
    caption: "Afwerken tot het klopt",
    w: 1600,
    h: 1067,
  },
];

const waarom = [
  {
    nr: "01",
    title: "De tuin is het product",
    body: "Bij een hovenier kun je de dienst niet omschrijven - je moet hem laten zien. Een foto van een opgeleverde tuin doet meer dan drie alinea's over vakmanschap.",
  },
  {
    nr: "02",
    title: "Stockfoto's herkent iedereen",
    body: "Een perfect Amerikaans gazon onder een strakblauwe hemel zegt: dit is niet mijn werk. Precies op het moment dat iemand overweegt een vreemde zijn tuin binnen te laten.",
  },
  {
    nr: "03",
    title: "Beeld voedt meer dan de site",
    body: "Dezelfde shoot vult de website, het Google Bedrijfsprofiel en de social kanalen. Foto's op je Bedrijfsprofiel zijn bovendien een van de dingen waar je zelf invloed op hebt.",
  },
  {
    nr: "04",
    title: "Een gezicht wint van een logo",
    body: "Mensen bellen een mens. Een portret van Sebastiaan bij naam maakt van een onbekend bedrijf iemand waar je een afspraak mee maakt.",
  },
];

/* Nette placeholder-tegel: duidelijk als plaatshouder herkenbaar,
   maar in de huisstijl, zodat de sectie nu al af oogt. */
function Placeholder({ label }: { label: string }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 bg-s2">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <div aria-hidden className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-blue/15 blur-[60px]" />
      <span className="relative grid h-11 w-11 place-items-center chamf-sm border border-blue/30 bg-blue/10 text-blue-text">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h1.8l1.2-2h6.9l1.2 2h1.9A2.5 2.5 0 0 1 21 8.5v9A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z" />
          <circle cx="12" cy="12.5" r="3.4" />
        </svg>
      </span>
      <span className="relative px-4 text-center text-[0.72rem] font-semibold leading-tight text-g500">{label}</span>
    </div>
  );
}

export function FotoGalerij() {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(() => setOpen((i) => (i === null ? i : (i - 1 + fotos.length) % fotos.length)), []);
  const next = useCallback(() => setOpen((i) => (i === null ? i : (i + 1) % fotos.length)), []);

  /* ESC, pijltjes en scroll-lock zolang de lightbox openstaat. */
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const vorige = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = vorige;
    };
  }, [open, close, prev, next]);

  const huidige = open === null ? null : fotos[open];

  return (
    <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
      <div className="animate-glow pointer-events-none absolute -left-40 top-24 h-[520px] w-[520px] rounded-full bg-blue/12 blur-[150px]" />

      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <Reveal>
              <Eyebrow>Fase 5 · Fotografie op locatie</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
              lines={[{ text: "Je kunt vakmanschap" }, { text: "niet beschrijven.", className: "text-blue-text" }]}
            />
          </div>
          <Reveal delay={0.12}>
            <p className="max-w-md text-lg leading-relaxed text-g300 lg:justify-self-end">
              Daarom trokken we er een dag op uit: echte tuinen, echt werk en de hovenier zelf.
              Geen stockbeeld, maar het bewijs waar de hele site op leunt.
            </p>
          </Reveal>
        </div>

        {/* ── raster ── */}
        <div className="mt-12 grid auto-rows-[minmax(0,1fr)] grid-cols-2 gap-3 [grid-auto-rows:1fr] md:grid-cols-4">
          {fotos.map((f, i) => (
            /* De span-klassen horen op de Reveal-wrapper: dat is het
               echte grid-item. Op de knop daarbinnen doen ze niets. */
            <Reveal
              key={f.id}
              delay={(i % 4) * 0.05}
              className={f.groot ? "col-span-2 row-span-2" : ""}
            >
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`Vergroot: ${f.caption}`}
                className="group relative block h-full w-full overflow-hidden chamf chamf-lg border border-white/10 bg-s1 transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:border-blue/50"
              >
                {!f.groot && <span aria-hidden className="block aspect-square w-full" />}
                <span className="absolute inset-0">
                  {f.src ? (
                    <Image
                      src={f.src}
                      alt={f.alt}
                      fill
                      sizes={f.groot ? "(max-width: 768px) 92vw, 50vw" : "(max-width: 768px) 46vw, 25vw"}
                      className="object-cover object-center transition-transform duration-500 ease-[var(--ease-brand)] group-hover:scale-[1.05]"
                    />
                  ) : (
                    <Placeholder label={f.caption} />
                  )}
                </span>
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-s0/85 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                {/* vergrootglas-hint */}
                <span
                  aria-hidden
                  className="absolute right-3 top-3 grid h-8 w-8 translate-y-1 place-items-center chamf-sm bg-blue text-white opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m21 21-4.3-4.3M11 8v6M8 11h6" />
                  </svg>
                </span>
                <span className="absolute inset-x-3 bottom-3 translate-y-2 text-left text-[0.75rem] font-semibold leading-tight text-paper opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {f.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-4 text-sm text-g600">Klik op een foto om te vergroten.</p>
        </Reveal>

        {/* ── waarom het uitmaakt ── */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {waarom.map((w, i) => (
            <Reveal key={w.nr} delay={(i % 2) * 0.07}>
              <div className="flex h-full items-start gap-4 chamf chamf-lg border border-white/10 bg-s1/50 p-6 backdrop-blur-md transition-colors duration-200 hover:border-blue/40 md:p-7">
                <span className="font-display text-xs font-bold text-blue-text">{w.nr}</span>
                <span>
                  <span className="block font-display text-lg font-extrabold leading-tight tracking-tight text-paper">
                    {w.title}
                  </span>
                  <span className="mt-2 block text-[0.95rem] leading-relaxed text-g500">{w.body}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* ═══ lightbox ═══ */}
      <AnimatePresence>
        {huidige && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-s0/92 p-4 backdrop-blur-md sm:p-8"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={huidige.caption}
          >
            {/* sluiten */}
            <button
              type="button"
              onClick={close}
              aria-label="Sluiten"
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center chamf-sm border border-white/15 bg-s1/80 text-paper transition-colors hover:border-blue hover:text-blue-text sm:right-6 sm:top-6"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>

            {/* vorige / volgende */}
            {[
              { fn: prev, label: "Vorige foto", pos: "left-3 sm:left-6", d: "m15 5-7 7 7 7" },
              { fn: next, label: "Volgende foto", pos: "right-3 sm:right-6", d: "m9 5 7 7-7 7" },
            ].map((b) => (
              <button
                key={b.label}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  b.fn();
                }}
                aria-label={b.label}
                className={`absolute top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center chamf-sm border border-white/15 bg-s1/80 text-paper transition-colors hover:border-blue hover:text-blue-text ${b.pos}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={b.d} />
                </svg>
              </button>
            ))}

            <motion.figure
              key={huidige.id}
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex max-h-[74vh] w-full items-center justify-center overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 shadow-[0_50px_120px_-40px_rgba(0,0,0,0.9)]">
                {huidige.src ? (
                  /* width/height i.p.v. fill: staand en liggend beeld houden
                     zo allebei hun eigen verhouding binnen dezelfde lijst. */
                  <Image
                    src={huidige.src}
                    alt={huidige.alt}
                    width={huidige.w}
                    height={huidige.h}
                    sizes="(max-width: 1024px) 92vw, 900px"
                    className="max-h-[74vh] w-auto object-contain"
                  />
                ) : (
                  <div className="aspect-[4/3] w-full">
                    <Placeholder label={`${huidige.caption} · foto volgt`} />
                  </div>
                )}
              </div>
              <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[0.95rem] font-semibold text-paper">{huidige.caption}</span>
                <span className="chamf-sm border border-white/10 px-2.5 py-1 text-xs text-g500">
                  {(open ?? 0) + 1} / {fotos.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
