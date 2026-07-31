"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/* ============================================================
   CORE 30 · EYKELENBOOM — de sitestructuur als uitklapbare boom.
   Principe overgenomen van het Hometown Heroes-diagram (verticale
   stam, tiers, chips die in-place uitklappen), vertaald naar het
   Brandlift-blauwdruksysteem: chamfer-chips, voltage-blauw, s-lagen.

   ALLES hieronder is geverifieerd tegen de gebouwde site: elke slug
   bestaat, de homepage-secties zijn de echte H2's, de plaatsen komen
   van de werkgebiedenpagina. Geen enkel verzonnen node.
   ============================================================ */

const ease = [0.22, 0.61, 0.36, 1] as const;

type Node = {
  id: string;
  label: string;
  children?: string[];
  note?: string;
};

/* De echte homepage-secties (H2's van de gebouwde site). */
const HOME_SECTIES = [
  "Vraag tuinadvies aan",
  "Wat klanten zeggen",
  "Recente projecten",
  "Waarom kiezen voor Eykelenboom",
  "Over Sebastiaan",
  "Zo werken wij",
  "Onze hoveniersdiensten",
  "Werkgebied",
  "Contact & locatie",
  "Veelgestelde vragen",
];

const KERN = ["Over ons", "Projecten", "Blog", "Werkgebieden", "Contact"];

const CATEGORIEEN: Node[] = [
  {
    id: "tuinaanleg",
    label: "Tuinaanleg",
    children: ["Aanleg kleine tuin", "Stadstuin ontwerp en aanleg", "Aanleg van oprijlanen", "Tuin ophogen", "Tuinrenovatie"],
    note: "De categoriepagina zelf telt zo'n 2.000 woorden en 17 koppen - een volwaardige landingspagina, geen opsomming.",
  },
  {
    id: "tuinonderhoud",
    label: "Tuinonderhoud",
    children: ["Heggen snoeien", "Onkruid verwijderen", "Tuin winterklaar maken", "Voorjaarsbeurt tuin"],
    note: "Onderhoud is terugkerend werk - elke verdieping vangt een eigen seizoensvraag af.",
  },
  {
    id: "tuinontwerp",
    label: "Tuinontwerp",
    note: "Eigen categoriepagina; het ontwerpwerk loopt door in de aanlegpagina's.",
  },
  {
    id: "boomverzorging",
    label: "Boomverzorging",
    children: ["Bomen planten", "Inkorten en snoeien van bomen", "Verwijdering van bomen"],
    note: "Bijna 2.000 woorden op de categoriepagina, met de drie verdiepingen eronder.",
  },
  {
    id: "gazon",
    label: "Gazonverzorging",
    children: ["Gazononderhoud", "Graszoden leggen"],
  },
  {
    id: "bestrating",
    label: "Aannemer voor bestrating",
    children: ["Bestrating", "Installatie hekwerken"],
    note: "De naam volgt de categorie op het Google Bedrijfsprofiel - site en profiel spreken dezelfde taal.",
  },
  {
    id: "veranda",
    label: "Bouwer van veranda's",
    children: ["Verandabouw", "Bouw van terrasoverkappingen", "Pergola-aanleg", "Terrasvlonders"],
    note: "Ook deze naam spiegelt het Bedrijfsprofiel - één van de zeven categorieën die de site afdekt.",
  },
];

const PLAATSEN = [
  "Den Haag", "Scheveningen", "Loosduinen", "Kijkduin", "Ypenburg", "Wassenaar",
  "Voorburg", "Leidschendam", "Rijswijk", "Delft", "Nootdorp", "Zoetermeer",
];

const STATS = [
  { n: "34", label: "pagina's totaal" },
  { n: "7", label: "categoriepagina's" },
  { n: "20", label: "verdiepende dienstpagina's" },
  { n: "6", label: "pagina's op de oude site", dim: true },
];

function Chip({
  label,
  open,
  expandable,
  onClick,
  controls,
}: {
  label: string;
  open?: boolean;
  expandable?: boolean;
  onClick?: () => void;
  controls?: string;
}) {
  if (!expandable)
    return (
      <span className="inline-flex items-center gap-2 chamf-sm border border-white/10 bg-s2/70 px-3.5 py-2 text-[0.82rem] font-medium text-g300">
        <span className="h-1.5 w-1.5 chamf-sm bg-white/25" />
        {label}
      </span>
    );
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-controls={controls}
      className={`inline-flex items-center gap-2.5 chamf-sm border px-3.5 py-2 text-[0.82rem] font-semibold transition-all duration-200 ${
        open
          ? "border-blue bg-blue text-white shadow-[0_0_28px_-6px_rgba(1,48,253,0.8)]"
          : "border-blue/30 bg-s2/70 text-g100 hover:border-blue/60 hover:text-paper"
      }`}
    >
      <span
        aria-hidden
        className={`text-[0.5rem] transition-transform duration-200 ${open ? "rotate-180 text-white" : "text-blue-text"}`}
      >
        ▼
      </span>
      {label}
    </button>
  );
}

function Panel({ id, children }: { id: string; children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      id={id}
      initial={reduce ? false : { opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease }}
      className="mt-3 w-full chamf chamf-lg border border-blue/25 bg-s1 p-5"
    >
      {children}
    </motion.div>
  );
}

export function Core30Boom() {
  const [open, setOpen] = useState<string | null>("tuinaanleg");

  const toggle = (id: string) => setOpen((v) => (v === id ? null : id));
  const openCat = CATEGORIEEN.find((c) => c.id === open && open !== "home");

  return (
    <div className="chamf chamf-lg border border-[var(--color-line-strong)] bg-s0/60 p-5 shadow-[0_40px_90px_-45px_rgba(0,0,0,0.8)] sm:p-8">
      <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-blue-text">
        De Core 30 · een spiegel van het Google Bedrijfsprofiel
      </p>

      {/* ── de stam ── */}
      <div className="relative mt-6 pl-6 sm:pl-9">
        <span aria-hidden className="absolute bottom-2 left-1.5 top-1 w-px bg-[var(--color-line-strong)] sm:left-3" />
        <span aria-hidden className="absolute left-[3px] top-0 h-2.5 w-2.5 chamf-sm bg-blue shadow-[0_0_12px_rgba(1,48,253,0.9)] sm:left-[9px]" />

        <div className="flex flex-col gap-8">
          {/* Home */}
          <div className="relative">
            <span aria-hidden className="absolute -left-[18px] top-4 h-px w-3 bg-[var(--color-line-strong)] sm:-left-[24px] sm:w-4" />
            <p className="mb-3 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-g500">
              Home · de landingspagina van het Bedrijfsprofiel
            </p>
            <Chip label="Home" expandable open={open === "home"} onClick={() => toggle("home")} controls="c30-home" />
            <AnimatePresence initial={false}>
              {open === "home" && (
                <Panel id="c30-home">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-blue-text">
                    {HOME_SECTIES.length} secties op deze pagina
                  </p>
                  <ul className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                    {HOME_SECTIES.map((s) => (
                      <li key={s} className="flex items-center gap-2.5 text-[0.85rem] text-g300">
                        <span className="h-1 w-3 shrink-0 bg-blue" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </Panel>
              )}
            </AnimatePresence>
          </div>

          {/* Tier 1 */}
          <div className="relative">
            <span aria-hidden className="absolute -left-[18px] top-4 h-px w-3 bg-[var(--color-line-strong)] sm:-left-[24px] sm:w-4" />
            <p className="mb-3 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-g500">
              Tier 1 · kernpagina's <span className="text-g600">· {KERN.length}</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {KERN.map((k) => (
                <Chip key={k} label={k} />
              ))}
            </div>
          </div>

          {/* Tier 2 */}
          <div className="relative">
            <span aria-hidden className="absolute -left-[18px] top-4 h-px w-3 bg-[var(--color-line-strong)] sm:-left-[24px] sm:w-4" />
            <p className="mb-3 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-g500">
              Tier 2 · categoriepagina's, één per Google-categorie <span className="text-g600">· {CATEGORIEEN.length}</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {CATEGORIEEN.map((c) => (
                <Chip
                  key={c.id}
                  label={c.children ? `${c.label} +${c.children.length}` : c.label}
                  expandable
                  open={open === c.id}
                  onClick={() => toggle(c.id)}
                  controls={`c30-${c.id}`}
                />
              ))}
            </div>
            <AnimatePresence initial={false}>
              {openCat && (
                <Panel key={openCat.id} id={`c30-${openCat.id}`}>
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-blue-text">
                    Uit {openCat.label}
                    {openCat.children ? ` · ${openCat.children.length} verdiepende dienstpagina's` : ""}
                  </p>
                  {openCat.children && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {openCat.children.map((ch) => (
                        <span
                          key={ch}
                          className="inline-flex items-center gap-2 chamf-sm border border-blue/25 bg-blue/[0.08] px-3 py-1.5 text-[0.78rem] font-medium text-g100"
                        >
                          <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                          {ch}
                        </span>
                      ))}
                    </div>
                  )}
                  {openCat.note && (
                    <p className="mt-4 border-t border-[var(--color-line)] pt-3 text-sm leading-relaxed text-g500">
                      {openCat.note}
                    </p>
                  )}
                </Panel>
              )}
            </AnimatePresence>
          </div>

          {/* Werkgebied */}
          <div className="relative">
            <span aria-hidden className="absolute -left-[18px] top-4 h-px w-3 bg-[var(--color-line-strong)] sm:-left-[24px] sm:w-4" />
            <p className="mb-3 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-g500">
              Werkgebied · de geografische laag <span className="text-g600">· {PLAATSEN.length} plaatsen</span>
            </p>
            <div className="flex flex-wrap gap-1.5">
              {PLAATSEN.map((p) => (
                <span key={p} className="chamf-sm border border-white/10 px-2.5 py-1 text-[0.75rem] text-g300">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── statregel ── */}
      <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-s1 px-4 py-4 text-center">
            <span className={`block font-display text-3xl font-extrabold ${s.dim ? "text-g600 line-through decoration-blue/60" : "text-paper"}`}>
              {s.n}
            </span>
            <span className="mt-1 block text-[0.7rem] leading-tight text-g500">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
