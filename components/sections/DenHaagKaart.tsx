"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";

/* ============================================================
   SEO DEN HAAG · WIJKKAART — Den Haag is geen één markt.
   Een gestileerde kaart van de acht stadsdelen. Klik er een aan
   en zie welke wijken erin liggen en hoe we die vindbaar maken.
   Beschrijvend, geen cijfers - we claimen geen zoekvolumes per
   wijk en de kaart is bewust een schema, geen plattegrond.
   ============================================================ */

const ease = [0.22, 0.61, 0.36, 1] as const;

type Deel = {
  id: string;
  naam: string;
  /* tailwind grid-placement, ruwweg de echte ligging */
  pos: string;
  karakter: string;
  wijken: string[];
  aanpak: string;
};

const stadsdelen: Deel[] = [
  {
    id: "scheveningen",
    naam: "Scheveningen",
    pos: "sm:col-start-1 sm:col-span-2 sm:row-start-1",
    karakter: "Kust, toerisme en villabouw naast elkaar",
    wijken: ["Scheveningen-Dorp", "Statenkwartier", "Duinoord", "Belgisch Park", "Duindorp", "Zorgvliet"],
    aanpak:
      "Hier lopen twee markten door elkaar: horeca en toerisme aan de boulevard, en kapitale panden in het Statenkwartier en Belgisch Park. Een pagina die beide probeert te bedienen, overtuigt geen van beide.",
  },
  {
    id: "haagse-hout",
    naam: "Haagse Hout",
    pos: "sm:col-start-3 sm:row-start-1",
    karakter: "Ruime, groene wijken met veel eigen bezit",
    wijken: ["Benoordenhout", "Bezuidenhout", "Mariahoeve", "Marlot"],
    aanpak:
      "Veel eengezinswoningen met tuin en particuliere opdrachtgevers die op kwaliteit selecteren en niet op prijs. Vraag naar onderhoud en verbouwing is hier structureel, niet seizoensgebonden.",
  },
  {
    id: "ypenburg",
    naam: "Leidschenveen-Ypenburg",
    pos: "sm:col-start-4 sm:row-start-1 sm:row-span-2",
    karakter: "Nieuwbouw, jonge gezinnen, aan de rand",
    wijken: ["Ypenburg", "Leidschenveen", "Forepark", "Hoornwijck"],
    aanpak:
      "Ligt tegen Rijswijk, Pijnacker en Zoetermeer aan. Wie hier zoekt, ziet net zo goed bedrijven van buiten Den Haag - je concurreert dus met een andere lijst dan in het Centrum.",
  },
  {
    id: "segbroek",
    naam: "Segbroek",
    pos: "sm:col-start-1 sm:row-start-2",
    karakter: "Jaren-30 woningen, veel verbouwd",
    wijken: ["Bomenbuurt", "Vogelwijk", "Regentessekwartier", "Valkenboskwartier", "Bloemenbuurt", "Vruchtenbuurt"],
    aanpak:
      "Rijen jaren-30 huizen die allemaal tegen dezelfde dingen aanlopen: kozijnen, daken, achtertuinen. Buren praten hier met elkaar - één goed uitgevoerde klus levert zichtbaarheid in de hele straat op.",
  },
  {
    id: "centrum",
    naam: "Centrum",
    pos: "sm:col-start-2 sm:row-start-2",
    karakter: "Dichtbebouwd, zakelijk en zeer competitief",
    wijken: ["Zeeheldenkwartier", "Archipelbuurt", "Willemspark", "Stationsbuurt", "Het Oude Centrum", "Kortenbos"],
    aanpak:
      "De drukste zoekmarkt van de stad, met kantoren, appartementen en monumentale panden door elkaar. Hier win je zelden op een algemene term - wel op de specifieke klus.",
  },
  {
    id: "laak",
    naam: "Laak",
    pos: "sm:col-start-3 sm:row-start-2",
    karakter: "Bedrijvigheid en transformatie",
    wijken: ["Laakkwartier", "Spoorwijk", "Binckhorst", "Molenwijk"],
    aanpak:
      "De Binckhorst wordt in hoog tempo omgebouwd van bedrijventerrein naar woonwijk. Dat betekent zakelijke opdrachtgevers en particulieren in hetzelfde postcodegebied.",
  },
  {
    id: "loosduinen",
    naam: "Loosduinen",
    pos: "sm:col-start-1 sm:row-start-3",
    karakter: "Dorps van karakter, tegen het Westland aan",
    wijken: ["Loosduinen", "Kijkduin", "Houtwijk", "Waldeck", "Kraayenstein", "Bohemen"],
    aanpak:
      "Voelt als een eigen dorp binnen de stad en zoekt ook zo: mensen typen hier eerder 'Loosduinen' of 'Kijkduin' in dan 'Den Haag'. Een stadsbrede pagina vangt dat niet af.",
  },
  {
    id: "escamp",
    naam: "Escamp",
    pos: "sm:col-start-2 sm:col-span-2 sm:row-start-3",
    karakter: "Het grootste stadsdeel, sterk gemengd",
    wijken: ["Moerwijk", "Morgenstond", "Bouwlust", "Vrederust", "Leyenburg", "Wateringse Veld", "Rustenburg-Oostbroek"],
    aanpak:
      "Qua inwoners het grootste stadsdeel, met grote verschillen tussen naoorlogse flats en nieuwbouw in Wateringse Veld. Eén boodschap voor heel Escamp slaat zelden aan.",
  },
];

export function DenHaagKaart() {
  const [active, setActive] = useState(4); // Centrum
  const reduce = useReducedMotion();
  const deel = stadsdelen[active];

  return (
    <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
      <div className="animate-glow pointer-events-none absolute -left-40 top-24 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />

      <Container className="relative">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>De Haagse wijkkaart</Eyebrow>
          </Reveal>
          <LineReveal
            as="h2"
            className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
            lines={[{ text: "Den Haag is geen één markt." }, { text: "Het zijn er acht.", className: "text-blue-text" }]}
          />
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg leading-relaxed text-g300">
              Iemand in het Benoordenhout zoekt anders, en krijgt andere bedrijven te zien, dan iemand
              in Loosduinen. Toch heeft bijna elke Haagse ondernemer één pagina voor de hele stad. Klik
              een stadsdeel aan en zie wat daar speelt.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-12">
          {/* ── de kaart ── */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 p-4 shadow-[0_40px_90px_-45px_rgba(0,0,0,0.8)] sm:p-6">
              {/* de zee, links */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-blue-deep/40 to-transparent"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute left-3 top-1/2 -rotate-90 text-[0.55rem] font-bold uppercase tracking-[0.2em] text-blue-text/50"
              >
                Noordzee
              </span>

              <div
                className="relative grid grid-cols-2 gap-2 sm:grid-cols-4 sm:grid-rows-3"
                role="group"
                aria-label="Kies een stadsdeel van Den Haag"
              >
                {stadsdelen.map((d, i) => {
                  const on = i === active;
                  return (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={on}
                      className={`group relative flex min-h-[74px] flex-col justify-end overflow-hidden chamf-sm border p-3 text-left transition-all duration-200 sm:min-h-[92px] ${d.pos} ${
                        on
                          ? "border-blue bg-blue/25 shadow-[0_0_34px_-6px_rgba(1,48,253,0.75)]"
                          : "border-white/10 bg-s2/70 hover:border-blue/50 hover:bg-s2"
                      }`}
                    >
                      {on && (
                        <span
                          aria-hidden
                          className="absolute right-0 top-0 h-3.5 w-3.5 bg-blue [clip-path:polygon(100%_0,0_0,100%_100%)]"
                        />
                      )}
                      <span
                        aria-hidden
                        className={`absolute right-2.5 top-2.5 h-1.5 w-1.5 chamf-sm transition-colors duration-200 ${
                          on ? "bg-white" : "bg-white/25 group-hover:bg-blue"
                        }`}
                      />
                      <span
                        className={`font-display text-[0.78rem] font-extrabold leading-tight tracking-tight transition-colors duration-200 sm:text-[0.85rem] ${
                          on ? "text-paper" : "text-g300 group-hover:text-paper"
                        }`}
                      >
                        {d.naam}
                      </span>
                      <span
                        className={`mt-0.5 text-[0.62rem] transition-colors duration-200 ${
                          on ? "text-blue-300" : "text-g600"
                        }`}
                      >
                        {d.wijken.length} wijken
                      </span>
                    </button>
                  );
                })}
              </div>

              <p className="relative mt-4 text-[0.68rem] leading-snug text-g600">
                Schematische weergave van de acht Haagse stadsdelen - bedoeld om de verschillen te laten
                zien, niet als plattegrond.
              </p>
            </div>
          </Reveal>

          {/* ── het paneel ── */}
          <Reveal delay={0.16}>
            <div className="relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 p-6 shadow-[0_40px_90px_-45px_rgba(0,0,0,0.8)] md:p-8">
              <AnimatePresence initial={false}>
                <motion.div
                  key={deel.id}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.32, ease }}
                >
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-blue-text">
                    Stadsdeel
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-extrabold leading-tight tracking-tight text-paper md:text-[1.8rem]">
                    {deel.naam}
                  </h3>
                  <p className="mt-2 text-[0.95rem] italic leading-snug text-g300">{deel.karakter}</p>

                  <p className="mt-7 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-g500">
                    Wijken hier
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {deel.wijken.map((w) => (
                      <span
                        key={w}
                        className="chamf-sm border border-blue/25 bg-blue/[0.08] px-2.5 py-1 text-[0.75rem] font-medium text-g100"
                      >
                        {w}
                      </span>
                    ))}
                  </div>

                  <p className="mt-7 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-g500">
                    Wat hier speelt
                  </p>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-g300">{deel.aanpak}</p>
                </motion.div>
              </AnimatePresence>

              <p className="mt-7 border-t border-[var(--color-line)] pt-5 text-sm leading-relaxed text-g500">
                Wij bouwen je vindbaarheid op per dienst en per gebied, in plaats van één pagina die
                heel Den Haag moet bedienen. Zo koppelt Google jouw bedrijf aan precies de klus die
                iemand in zijn eigen buurt zoekt.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
