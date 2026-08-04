"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";

/* ============================================================
   WEBSITEGALERIJ — echte, live klantsites in een pop-up.

   Alles hieronder is geverifieerd tegen de live sites: elke URL is
   opgehaald en gaf 200, elke schermafbeelding is van de echte site.

   Let op de embed-val: climatisationacg.com stuurt
   `X-Frame-Options: SAMEORIGIN` en weigert dus in een iframe te laden.
   Runtime-detectie werkt daar NIET voor: de browser laadt een lege
   foutpagina en vuurt daarbij gewoon `onLoad`, dus zowel een error-
   handler als een laadtimer denkt dat het goed ging. Getest: dat gaf
   een blanco wit vlak.

   Daarom staat het per site in de data (`embed: false`), afgeleid uit
   de echte response-headers. Deterministisch en niet te omzeilen. De
   laadtimer blijft als vangnet staan voor sites die hun headers later
   aanscherpen.
   ============================================================ */

const ease = [0.22, 0.61, 0.36, 1] as const;
const LAAD_TIMEOUT = 2500;

type Site = {
  id: string;
  klant: string;
  sector: string;
  plaats: string;
  domein: string;
  url: string;
  shot: string;
  alt: string;
  /* Wat deze site moest oplossen. Alleen invullen waar we het echt weten. */
  kern: string;
  /* Interne case-pagina, als die bestaat. */
  case?: { label: string; href: string };
  /* false = site stuurt X-Frame-Options/CSP die insluiten verbiedt.
     Dan tonen we meteen de uitleg i.p.v. een leeg kader. */
  embed?: boolean;
};

const sites: Site[] = [
  {
    id: "eykelenboom",
    klant: "Hovenier Eykelenboom",
    sector: "Hoveniers",
    plaats: "Den Haag",
    domein: "hoveniereykelenboom.nl",
    url: "https://hovenier-eykelenboom.vercel.app",
    shot: "/images/voorbeelden/eykelenboom.jpg",
    alt: "Homepage van de website die Brandlift bouwde voor Hovenier Eykelenboom",
    kern: "Van zes pagina's naar een structuur met een eigen pagina per dienst en per werkgebied.",
    case: { label: "Lees de volledige case", href: "/cases/hovenier-eykelenboom" },
  },
  {
    id: "reizende-kwast",
    klant: "De Reizende Kwast",
    sector: "Schilders",
    plaats: "Leiden",
    domein: "dereizendekwast-schilders.nl",
    url: "https://dereizendekwast-schilders.nl",
    shot: "/images/voorbeelden/reizende-kwast.jpg",
    alt: "Homepage van de website die Brandlift bouwde voor schildersbedrijf De Reizende Kwast",
    kern: "Een ambachtelijk schildersbedrijf dat online net zo vakkundig moest overkomen als op de steiger.",
    case: { label: "Bekijk de case", href: "/cases/de-reizende-kwast" },
  },
  {
    id: "acg",
    klant: "Climatisation ACG",
    sector: "HVAC / klimaattechniek",
    plaats: "Montréal, Canada",
    domein: "climatisationacg.com",
    url: "https://climatisationacg.com",
    shot: "/images/voorbeelden/acg.jpg",
    alt: "Homepage van de tweetalige website die Brandlift bouwde voor Climatisation ACG in Montréal",
    /* Geen case-pagina en geen resultaatclaim: die hebben we niet. */
    kern: "Tweetalig (Engels en Frans) opgezet voor een markt waar klanten in beide talen zoeken.",
    /* Geverifieerd op de live respons: `x-frame-options: SAMEORIGIN`. */
    embed: false,
  },
];

function BrowserBalk({ domein, licht = false }: { domein: string; licht?: boolean }) {
  return (
    <div
      className={`flex items-center gap-2 border-b px-4 py-3 ${
        licht ? "border-ink/[0.07] bg-black/[0.02]" : "border-[var(--color-line)] bg-s2/60"
      }`}
    >
      <span className="h-2.5 w-2.5 rounded-full bg-blue" />
      <span className={`h-2.5 w-2.5 rounded-full ${licht ? "bg-black/15" : "bg-white/15"}`} />
      <span className={`h-2.5 w-2.5 rounded-full ${licht ? "bg-black/15" : "bg-white/15"}`} />
      <span
        className={`ml-2 flex-1 truncate chamf-sm px-3 py-1 text-[0.62rem] font-semibold tracking-[0.08em] ${
          licht ? "bg-black/[0.04] text-g600" : "bg-white/[0.04] text-g500"
        }`}
      >
        {domein}
      </span>
    </div>
  );
}

export function WebsiteGalerij() {
  const [open, setOpen] = useState<number | null>(null);
  const [geladen, setGeladen] = useState(false);
  const [geblokkeerd, setGeblokkeerd] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduce = useReducedMotion();

  const close = useCallback(() => setOpen(null), []);
  const ga = useCallback(
    (stap: number) => setOpen((i) => (i === null ? i : (i + stap + sites.length) % sites.length)),
    [],
  );

  /* Bij elke wissel opnieuw meten of de site zich laat inladen. */
  useEffect(() => {
    if (open === null) return;
    const site = sites[open];
    setGeladen(false);
    /* Weten we al dat insluiten geweigerd wordt, dan slaan we de iframe
       helemaal over - geen wachttijd en geen wit vlak. */
    if (site.embed === false) {
      setGeblokkeerd(true);
      return;
    }
    setGeblokkeerd(false);
    timer.current = setTimeout(() => setGeblokkeerd(true), LAAD_TIMEOUT);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [open]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") ga(-1);
      if (e.key === "ArrowRight") ga(1);
    };
    document.addEventListener("keydown", onKey);
    const vorige = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = vorige;
    };
  }, [open, close, ga]);

  const huidige = open === null ? null : sites[open];

  return (
    <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
      <div className="animate-glow pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />

      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <Reveal>
              <Eyebrow>De galerij</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
              lines={[{ text: "Geen mockups." }, { text: "Klik ze zelf open.", className: "text-blue-text" }]}
            />
          </div>
          <Reveal delay={0.12}>
            <p className="max-w-md text-lg leading-relaxed text-g300 lg:justify-self-end">
              Dit zijn geen ontwerpen in een lijstje - het zijn sites die op dit moment draaien voor
              echte bedrijven. Open er een en klik erdoorheen alsof je een klant bent.
            </p>
          </Reveal>
        </div>

        {/* ── de tegels ── */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {sites.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.07}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`Bekijk de website van ${s.klant}`}
                className="group flex h-full w-full flex-col overflow-hidden chamf chamf-lg border border-white/10 bg-s1 text-left shadow-[0_30px_70px_-40px_rgba(0,0,0,0.8)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1.5 hover:border-blue/50"
              >
                <BrowserBalk domein={s.domein} />
                <span className="relative block aspect-[16/11] overflow-hidden">
                  <Image
                    src={s.shot}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 768px) 92vw, 33vw"
                    className="object-cover object-top transition-transform duration-[600ms] ease-[var(--ease-brand)] group-hover:scale-[1.04]"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-s0/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span
                    aria-hidden
                    className="absolute bottom-3 left-1/2 flex -translate-x-1/2 translate-y-2 items-center gap-2 chamf-sm bg-blue px-4 py-2 text-[0.78rem] font-semibold text-white opacity-0 shadow-[0_10px_30px_-8px_rgba(1,48,253,0.9)] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    Bekijk de site
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </span>
                </span>
                <span className="flex flex-1 flex-col p-6">
                  <span className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-blue-text">
                    <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                    {s.sector} · {s.plaats}
                  </span>
                  <span className="mt-2.5 font-display text-xl font-extrabold leading-tight tracking-tight text-paper">
                    {s.klant}
                  </span>
                  <span className="mt-2 flex-1 text-[0.93rem] leading-relaxed text-g500">{s.kern}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-5 text-sm text-g600">
            Klik een site aan om hem hier te openen - of ga rechtstreeks naar het echte adres.
          </p>
        </Reveal>
      </Container>

      {/* ═══ pop-up met de live site ═══ */}
      <AnimatePresence>
        {huidige && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-s0/92 p-3 backdrop-blur-md sm:p-5 lg:p-8"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`Website van ${huidige.klant}`}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Sluiten"
              className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center chamf-sm border border-white/15 bg-s1/90 text-paper transition-colors hover:border-blue hover:text-blue-text sm:right-6 sm:top-6"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>

            {sites.length > 1 &&
              [
                { stap: -1, label: "Vorige website", pos: "left-2 sm:left-6", d: "m15 5-7 7 7 7" },
                { stap: 1, label: "Volgende website", pos: "right-2 sm:right-6", d: "m9 5 7 7-7 7" },
              ].map((b) => (
                <button
                  key={b.label}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    ga(b.stap);
                  }}
                  aria-label={b.label}
                  className={`absolute top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center chamf-sm border border-white/15 bg-s1/90 text-paper transition-colors hover:border-blue hover:text-blue-text ${b.pos}`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={b.d} />
                  </svg>
                </button>
              ))}

            <motion.div
              key={huidige.id}
              initial={reduce ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease }}
              /* max-w-6xl (1152px) capte de iframe onder de desktop-
                 breedte van veel sites - de knip zat precies waar hun
                 eigen mobiele navigatie inschakelt. 1800px is breed
                 genoeg om de echte desktop-layout te tonen, en blijft
                 op elk scherm nog ruim binnen de viewport dankzij de
                 backdrop-padding hierboven. */
              className="flex h-full w-full max-w-[1800px] flex-col overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 shadow-[0_50px_120px_-40px_rgba(0,0,0,0.95)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* kop met echte URL */}
              <div className="flex shrink-0 items-center gap-2 border-b border-[var(--color-line)] bg-s2/70 px-3 py-2.5 sm:px-4 sm:py-3">
                <span className="hidden h-2.5 w-2.5 rounded-full bg-blue sm:block" />
                <span className="hidden h-2.5 w-2.5 rounded-full bg-white/15 sm:block" />
                <span className="hidden h-2.5 w-2.5 rounded-full bg-white/15 sm:block" />
                <span className="ml-0 flex-1 truncate chamf-sm bg-white/[0.04] px-3 py-1 text-[0.62rem] font-semibold tracking-[0.08em] text-g500 sm:ml-2">
                  {huidige.domein}
                </span>
                {/* De ontsnappingsroute staat er altijd, ook als de iframe wél laadt. */}
                <a
                  href={huidige.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex shrink-0 items-center gap-1.5 chamf-sm bg-blue px-3 py-1.5 text-[0.7rem] font-semibold text-white transition-colors hover:bg-blue-press sm:px-4 sm:py-2 sm:text-[0.75rem]"
                >
                  <span className="hidden sm:inline">Open in nieuw tabblad</span>
                  <span className="sm:hidden">Openen</span>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </a>
              </div>

              {/* het venster zelf */}
              <div className="relative flex-1 bg-white">
                {!geblokkeerd && (
                  <iframe
                    key={huidige.id}
                    src={huidige.url}
                    title={`Live website van ${huidige.klant}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                    onLoad={() => {
                      if (timer.current) clearTimeout(timer.current);
                      setGeladen(true);
                    }}
                    className="absolute inset-0 h-full w-full border-0"
                  />
                )}

                {/* laadstand */}
                {!geladen && !geblokkeerd && (
                  <div className="absolute inset-0 flex items-center justify-center bg-s1">
                    <span className="flex items-center gap-3 text-sm text-g500">
                      <span className="h-2 w-2 animate-pulse chamf-sm bg-blue" />
                      {huidige.domein} laden…
                    </span>
                  </div>
                )}

                {/* terugval als de site zich niet laat insluiten */}
                {geblokkeerd && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-s1 px-6 text-center">
                    <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
                    <span className="relative grid h-14 w-14 place-items-center chamf-sm border border-blue/30 bg-blue/10 text-blue-text">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="M3 10h18M8 15h8" />
                      </svg>
                    </span>
                    <div className="relative max-w-md">
                      <p className="font-display text-xl font-extrabold tracking-tight text-paper">
                        Deze site laat zich niet insluiten
                      </p>
                      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-g500">
                        {huidige.klant} staat om veiligheidsredenen niet toe dat de site in een venster
                        van een andere website wordt getoond. Volstrekt normaal - en niets mis mee.
                        Open hem gewoon rechtstreeks.
                      </p>
                    </div>
                    <a
                      href={huidige.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-2.5 chamf-sm bg-blue px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_48px_-16px_rgba(1,48,253,0.85)] transition-colors hover:bg-blue-press"
                    >
                      Bekijk {huidige.domein}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M7 17 17 7M9 7h8v8" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>

              {/* voet: wie het is + link naar de case */}
              <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-[var(--color-line)] bg-s1 px-4 py-3">
                <span className="min-w-0">
                  <span className="block truncate font-display text-sm font-extrabold tracking-tight text-paper">
                    {huidige.klant}
                  </span>
                  <span className="block truncate text-xs text-g600">
                    {huidige.sector} · {huidige.plaats}
                  </span>
                </span>
                <span className="flex items-center gap-3">
                  {huidige.case && (
                    <a
                      href={huidige.case.href}
                      className="text-xs font-semibold text-blue-text hover:underline"
                    >
                      {huidige.case.label} →
                    </a>
                  )}
                  <span className="chamf-sm border border-white/10 px-2.5 py-1 text-xs text-g500">
                    {(open ?? 0) + 1} / {sites.length}
                  </span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
