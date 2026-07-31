"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/* ============================================================
   DE FORMULE — Verkeer · Vertrouwen · Conversie.
   Drie pijlers waar elke oplevering in dit traject onder valt.
   Interactief drieluik: kies een pijler, zie wat die betekent en
   wat er in DIT project concreet voor is gebouwd. Alle punten
   verwijzen naar geverifieerde onderdelen van de gebouwde site.
   ============================================================ */

const ease = [0.22, 0.61, 0.36, 1] as const;

type Pijler = {
  id: string;
  nr: string;
  term: string;
  tag: string;
  definitie: string;
  punten: { lead: string; rest: string }[];
};

const PIJLERS: Pijler[] = [
  {
    id: "verkeer",
    nr: "01",
    term: "Verkeer",
    tag: "Eerst gevonden worden",
    definitie:
      "Voordat een website iets kan opleveren, moet hij gezien worden op het moment dat iemand zoekt. Verkeer is geen bezoekersaantal - het is de juiste bezoeker, met een klus, in jouw werkgebied.",
    punten: [
      {
        lead: "Google Bedrijfsprofiel als fundament",
        rest: "categorieën, diensten en gegevens volledig ingericht - voor een lokale hovenier vaak het eerste wat een klant ziet.",
      },
      {
        lead: "Een site die het profiel spiegelt",
        rest: "elke categorie op het Bedrijfsprofiel heeft een eigen pagina op de site, zodat Google de volle breedte van het vak ziet.",
      },
      {
        lead: "188 zoekwoorden onderzocht",
        rest: "geclusterd tot 42 groepen in 4 thema's - de structuur van de site volgt hoe er echt gezocht wordt, niet hoe het bedrijf intern denkt.",
      },
      {
        lead: "Techniek en schema",
        rest: "gestructureerde data, snelheid en nette URL's, zodat zoekmachines en AI-assistenten de site kunnen lezen en citeren.",
      },
    ],
  },
  {
    id: "vertrouwen",
    nr: "02",
    term: "Vertrouwen",
    tag: "De eerste blik winnen",
    definitie:
      "Gevonden worden is niets waard als de bezoeker afhaakt. Een tuin gun je iemand die betrouwbaar oogt - vertrouwen is wat een vreemde website omzet in een bedrijf dat je durft te bellen.",
    punten: [
      {
        lead: "Een compleet nieuw merk",
        rest: "logo, kleuren en typografie die passen bij het vakwerk - rustig, groen en verzorgd in plaats van gedateerd.",
      },
      {
        lead: "Sebastiaan bij naam op de site",
        rest: "mensen vertrouwen een gezicht, geen bedrijfsnaam. De site stelt de hovenier zelf voor, met zijn eigen verhaal sinds 2016.",
      },
      {
        lead: "Echte reviews op de homepage",
        rest: "wat klanten zeggen staat bovenaan, niet weggestopt - sociale bewijskracht op het moment van twijfel.",
      },
      {
        lead: "Echte fotografie van echt werk",
        rest: "projecten uit Den Haag en omgeving in plaats van stockbeeld - de tuinen bewijzen het vakmanschap.",
      },
    ],
  },
  {
    id: "conversie",
    nr: "03",
    term: "Conversie",
    tag: "Van bezoeker naar aanvraag",
    definitie:
      "Verkeer en vertrouwen zijn pas iets waard als de bezoeker de stap zet. Conversie is de route naar contact zo helder maken dat de aanvraag vanzelfsprekend voelt - zonder te pushen.",
    punten: [
      {
        lead: "Eén vaste route: 'Vraag tuinadvies aan'",
        rest: "dezelfde uitnodiging keert door de hele site terug, zodat elke pagina een logische volgende stap heeft.",
      },
      {
        lead: "Een pagina per vraag",
        rest: "wie op heggen snoeien zoekt, landt op een pagina over heggen snoeien - niet op een algemene dienstenlijst.",
      },
      {
        lead: "Werkgebied expliciet",
        rest: "twaalf plaatsen benoemd, zodat de bezoeker direct ziet dat Eykelenboom ook bij hem komt.",
      },
      {
        lead: "Zo werken wij, stap voor stap",
        rest: "het proces staat uitgelegd op de site - wie weet wat er komt, durft eerder contact op te nemen.",
      },
    ],
  },
];

export function FormuleDrieluik() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const p = PIJLERS[active];

  return (
    <div>
      {/* ── pijler-selector ── */}
      <div className="grid gap-3 sm:grid-cols-3" role="group" aria-label="Kies een pijler van de formule">
        {PIJLERS.map((pl, i) => {
          const on = i === active;
          return (
            <button
              key={pl.id}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={on}
              className={`group relative overflow-hidden chamf chamf-lg border p-5 text-left transition-all duration-200 md:p-6 ${
                on
                  ? "border-blue bg-blue/[0.12] shadow-[0_0_44px_-12px_rgba(1,48,253,0.6)]"
                  : "border-white/10 bg-s1/50 hover:border-blue/40 hover:bg-s1/70"
              }`}
            >
              {on && (
                <span aria-hidden className="absolute right-0 top-0 h-4 w-4 bg-blue [clip-path:polygon(100%_0,0_0,100%_100%)]" />
              )}
              <span className={`font-display text-xs font-bold ${on ? "text-blue-text" : "text-g600"}`}>{pl.nr}</span>
              <span className={`mt-1 block font-display text-xl font-extrabold tracking-tight md:text-2xl ${on ? "text-paper" : "text-g300"}`}>
                {pl.term}
              </span>
              <span className={`mt-1 block text-sm ${on ? "text-g300" : "text-g600"}`}>{pl.tag}</span>
            </button>
          );
        })}
      </div>

      {/* ── paneel ── */}
      <div className="mt-5 chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 p-6 md:p-8">
        <AnimatePresence initial={false}>
          <motion.div
            key={p.id}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            <p className="max-w-2xl text-[1.02rem] leading-relaxed text-g300">{p.definitie}</p>
            <p className="mt-6 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-blue-text">
              In dit project
            </p>
            <ul className="mt-4 grid gap-x-8 gap-y-4 md:grid-cols-2">
              {p.punten.map((pt) => (
                <li key={pt.lead} className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-4 shrink-0 bg-blue" />
                  <span className="text-[0.95rem] leading-relaxed text-g500">
                    <span className="font-semibold text-g100">{pt.lead}</span> - {pt.rest}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
