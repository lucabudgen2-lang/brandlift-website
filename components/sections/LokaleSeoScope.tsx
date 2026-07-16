"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";

/* ============================================================
   LOKALE SEO · SCOPE — de SERP-simulator.
   Links: de vier onderdelen van het complete lokale pakket.
   Rechts: een gestileerde Google-resultatenpagina. Kies een
   onderdeel en zie oplichten wat het in Google doet.
   ============================================================ */

type Zone = "organic" | "pack" | "stars" | "naw";

const items: { nr: string; title: string; desc: string; zone: Zone; effect: string }[] = [
  {
    nr: "01",
    title: "Website met lokale structuur",
    desc: "Dienst- en plaatspagina's, interne links en teksten die aansluiten op hoe jouw klant zoekt - de fundering waar al het andere op rust.",
    zone: "organic",
    effect: "Jouw dienst- en plaatspagina's verschijnen in de gewone zoekresultaten - precies op de combinatie van dienst en plaats waar jouw klant op zoekt.",
  },
  {
    nr: "02",
    title: "Google Bedrijfsprofiel",
    desc: "Volledig geoptimaliseerd en doorlopend beheerd: categorieën, diensten, foto's, berichten en reviews.",
    zone: "pack",
    effect: "Je verschijnt in het kaartblok bovenaan - de plek waar lokale klanten het eerst kijken en het snelst bellen.",
  },
  {
    nr: "03",
    title: "Gestructureerde data (schema)",
    desc: "Code die Google precies vertelt wie je bent, wat je doet en waar je werkt.",
    zone: "stars",
    effect: "Google begrijpt je pagina's beter en kan rijke resultaten tonen - zoals sterren en bedrijfsinformatie bij je vermelding.",
  },
  {
    nr: "04",
    title: "Lokale vermeldingen (citaties)",
    desc: "Consistente naam-, adres- en telefoongegevens in de gidsen en platforms die er lokaal toe doen.",
    zone: "naw",
    effect: "Overal exact dezelfde bedrijfsgegevens - die consistentie beloont Google met een sterkere lokale positie.",
  },
];

function Star({ dim = false }: { dim?: boolean }) {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden className={dim ? "text-g600" : "text-blue-text"}>
      <path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.8 6.1 20.2l1.2-6.6L2.5 9l6.6-.9L12 2z" />
    </svg>
  );
}

/* zone wrapper: glows when active, dims when not */
function SerpZone({ on, children, label }: { on: boolean; children: React.ReactNode; label: string }) {
  return (
    <div
      className={`relative rounded-lg transition-all duration-300 ease-[var(--ease-brand)] ${
        on ? "opacity-100 ring-2 ring-blue shadow-[0_0_34px_-6px_rgba(1,48,253,0.6)]" : "opacity-35"
      }`}
    >
      {on && (
        <span className="absolute -top-2.5 left-3 z-10 chamf-sm bg-blue px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-[0.1em] text-white">
          {label}
        </span>
      )}
      {children}
    </div>
  );
}

export function LokaleSeoScope() {
  const [active, setActive] = useState(0);
  const zone = items[active].zone;

  return (
    <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
      <div className="animate-glow pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />

      <Container className="relative">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Wat je krijgt</Eyebrow>
          </Reveal>
          <LineReveal
            as="h2"
            className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
            lines={[{ text: "Alles wat lokale vindbaarheid vraagt." }, { text: "Letterlijk alles.", className: "text-blue-text" }]}
          />
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg leading-relaxed text-g300">
              Geen los lijstje trucs, maar het complete systeem - vier onderdelen die elkaar
              versterken. Kies een onderdeel en zie wat het in Google doet.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
          {/* ── rail: the four components ── */}
          <div className="space-y-3">
            {items.map((item, i) => {
              const on = i === active;
              return (
                <button
                  key={item.nr}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  className={`group relative w-full overflow-hidden chamf chamf-lg border p-5 text-left transition-all duration-200 md:p-6 ${
                    on
                      ? "border-blue bg-blue/[0.12] shadow-[0_0_44px_-10px_rgba(1,48,253,0.55)]"
                      : "border-white/10 bg-s1/50 hover:border-blue/40 hover:bg-s1/70"
                  }`}
                >
                  {on && <span className="absolute right-0 top-0 h-4 w-4 bg-blue [clip-path:polygon(100%_0,0_0,100%_100%)]" aria-hidden />}
                  <span className="flex items-baseline gap-3">
                    <span className={`font-display text-sm font-bold ${on ? "text-blue-text" : "text-g600"}`}>{item.nr}</span>
                    <span className={`font-display text-lg font-extrabold tracking-tight md:text-xl ${on ? "text-paper" : "text-g300"}`}>
                      {item.title}
                    </span>
                  </span>
                  <span className={`mt-2 block pl-8 text-sm leading-relaxed ${on ? "text-g300" : "text-g500"}`}>{item.desc}</span>
                </button>
              );
            })}

            {/* effect annotation */}
            <div className="chamf border border-blue/30 bg-blue/[0.07] p-4" aria-live="polite">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-blue-text">Dit doet het in Google</p>
              <p className="mt-1.5 text-sm leading-relaxed text-g200">{items[active].effect}</p>
            </div>
          </div>

          {/* ── the SERP simulator ── */}
          <Reveal delay={0.1}>
            <div className="overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 shadow-[0_50px_110px_-50px_rgba(0,0,0,0.8)]">
              {/* browser chrome + query */}
              <div className="flex items-center gap-2 border-b border-[var(--color-line)] bg-s2/60 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-blue" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-2 flex flex-1 items-center gap-2 rounded-full border border-white/10 bg-s0 px-3.5 py-1.5">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0 text-g500">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m21 21-4.3-4.3" strokeLinecap="round" />
                  </svg>
                  <span className="truncate text-[0.72rem] font-medium text-g300">jouw dienst in jouw plaats</span>
                </span>
              </div>

              <div className="space-y-4 p-4 sm:p-5">
                {/* ── zone: local pack ── */}
                <SerpZone on={zone === "pack"} label="Het kaartblok">
                  <div className="chamf border border-white/10 bg-s0/70 p-3.5">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-g500">Bedrijven in de buurt</p>
                    {/* mini map strip */}
                    <div className="relative mt-2.5 h-11 overflow-hidden rounded-md border border-white/10 bg-s2">
                      <div className="absolute inset-0 grid-lines opacity-50" />
                      <span className="absolute left-[30%] top-[38%] h-2 w-2 chamf-sm bg-blue shadow-[0_0_12px_rgba(1,48,253,0.9)]" />
                      <span className="absolute left-[58%] top-[55%] h-1.5 w-1.5 rounded-full bg-white/30" />
                      <span className="absolute left-[74%] top-[30%] h-1.5 w-1.5 rounded-full bg-white/30" />
                    </div>
                    {/* entries */}
                    <div className="mt-2.5 space-y-1.5">
                      <div className="flex items-center gap-2.5 rounded-md border border-blue/50 bg-blue/[0.14] px-3 py-2">
                        <span className="grid h-5 w-5 shrink-0 place-items-center chamf-sm bg-blue font-display text-[0.6rem] font-extrabold text-white">1</span>
                        <div className="min-w-0">
                          <p className="truncate text-[0.78rem] font-bold text-paper">Jouw bedrijf</p>
                          <span className="flex items-center gap-1">
                            <span className="flex gap-0.5"><Star /><Star /><Star /><Star /><Star /></span>
                            <span className="text-[0.62rem] text-g500">· geoptimaliseerd profiel</span>
                          </span>
                        </div>
                      </div>
                      {["Concurrent A", "Concurrent B"].map((c, i) => (
                        <div key={c} className="flex items-center gap-2.5 rounded-md border border-white/8 px-3 py-2 opacity-60">
                          <span className="grid h-5 w-5 shrink-0 place-items-center chamf-sm bg-white/10 font-display text-[0.6rem] font-bold text-g500">{i + 2}</span>
                          <div className="min-w-0 flex-1">
                            <div className="h-1.5 w-2/5 rounded-full bg-white/20" />
                            <div className="mt-1 h-1 w-1/4 rounded-full bg-white/10" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </SerpZone>

                {/* ── zone: organic + stars ── */}
                <SerpZone on={zone === "organic" || zone === "stars"} label={zone === "stars" ? "Rijke resultaten" : "De gewone resultaten"}>
                  <div className="chamf border border-white/10 bg-s0/70 p-3.5">
                    {/* jouw resultaat */}
                    <div className="rounded-md border border-blue/40 bg-blue/[0.08] px-3 py-2.5">
                      <p className="text-[0.62rem] text-g500">jouwbedrijf.nl › dienst › plaats</p>
                      <p className="mt-0.5 text-[0.8rem] font-bold text-blue-text">Jouw dienst in jouw plaats - Jouw bedrijf</p>
                      <span className={`mt-1 flex items-center gap-1.5 transition-opacity duration-300 ${zone === "stars" ? "opacity-100" : "opacity-60"}`}>
                        <span className="flex gap-0.5"><Star /><Star /><Star /><Star /><Star /></span>
                        <span className="text-[0.62rem] font-semibold text-g500">5,0 · via schema</span>
                      </span>
                      <div className="mt-1.5 h-1 w-5/6 rounded-full bg-white/15" />
                      <div className="mt-1 h-1 w-3/5 rounded-full bg-white/10" />
                    </div>
                    {/* concurrent skeleton */}
                    <div className="mt-2 rounded-md border border-white/8 px-3 py-2.5 opacity-50">
                      <div className="h-1 w-1/3 rounded-full bg-white/15" />
                      <div className="mt-1.5 h-1.5 w-3/5 rounded-full bg-white/20" />
                      <div className="mt-1.5 h-1 w-4/5 rounded-full bg-white/10" />
                    </div>
                  </div>
                </SerpZone>

                {/* ── zone: NAW consistency ── */}
                <SerpZone on={zone === "naw"} label="Overal dezelfde gegevens">
                  <div className="chamf border border-white/10 bg-s0/70 p-3.5">
                    <div className="grid grid-cols-3 gap-2">
                      {["Bedrijvengids", "Platform", "Branchesite"].map((g) => (
                        <div key={g} className="rounded-md border border-white/10 bg-s1/70 px-2.5 py-2 text-center">
                          <p className="truncate text-[0.58rem] font-semibold uppercase tracking-[0.06em] text-g600">{g}</p>
                          <p className="mt-1 truncate text-[0.62rem] font-medium text-g300">Jouw bedrijf</p>
                          <span className="mx-auto mt-1 grid h-3.5 w-3.5 place-items-center chamf-sm bg-blue/20 text-blue-text">
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4.5 4.5L19 7" /></svg>
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-2 text-center text-[0.62rem] text-g500">naam, adres en telefoon - overal identiek</p>
                  </div>
                </SerpZone>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
