"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";

/* ============================================================
   DE DRIE SIGNALEN — relevantie, afstand en bekendheid.

   Dit is Google's eigen uitleg van hoe lokale resultaten worden
   gerangschikt, niet een model dat wij hebben bedacht. Daarom staat
   er per signaal ook expliciet bij wat je er zelf aan kunt doen en
   wat niet - dat onderscheid is precies wat de meeste uitleg over
   lokale SEO weglaat.

   Geen cijfers, geen wegingspercentages: Google publiceert die niet
   en wij verzinnen ze niet.
   ============================================================ */

const ease = [0.22, 0.61, 0.36, 1] as const;

type Signaal = {
  id: string;
  nr: string;
  naam: string;
  kort: string;
  uitleg: string;
  /* Wat je er concreet aan kunt doen. */
  welInvloed: string[];
  /* Wat buiten je macht ligt - eerlijk benoemen. */
  geenInvloed: string;
};

const signalen: Signaal[] = [
  {
    id: "relevantie",
    nr: "01",
    naam: "Relevantie",
    kort: "Past jouw bedrijf bij wat er gezocht wordt?",
    uitleg:
      "Google probeert te bepalen of jij levert wat iemand zoekt. Zoekt iemand op 'heggen snoeien' en staat er bij jou alleen 'hovenier', dan moet Google gokken. Hoe explicieter je benoemt wat je doet, hoe minder er te gokken valt.",
    welInvloed: [
      "Je diensten volledig invullen op je Google Bedrijfsprofiel",
      "Een eigen pagina per dienst in plaats van één verzamelpagina",
      "De woorden gebruiken die je klant gebruikt, niet je vakjargon",
      "Gestructureerde data waarmee je diensten en werkgebied leesbaar worden",
    ],
    geenInvloed:
      "Hoe Google jouw branche interpreteert en welke categorieën er überhaupt bestaan om uit te kiezen.",
  },
  {
    id: "afstand",
    nr: "02",
    naam: "Afstand",
    kort: "Hoe ver zit je van degene die zoekt?",
    uitleg:
      "Google kijkt naar de afstand tussen de zoeker en jouw vestiging of opgegeven werkgebied. Iemand die zoekt vanuit een andere wijk krijgt eerder een bedrijf te zien dat dichterbij zit. Dit is meteen het signaal waar je het minst aan kunt doen - en waar de meeste tijd aan verspild wordt.",
    welInvloed: [
      "Je servicegebied correct instellen op je Bedrijfsprofiel",
      "De plaatsen benoemen waar je daadwerkelijk komt",
      "Consistente bedrijfsgegevens, zodat Google weet waar je zit",
    ],
    geenInvloed:
      "Waar de zoeker op dat moment staat. Je kunt jezelf niet dichterbij maken dan je bent, en pagina's maken voor plaatsen waar je nooit komt werkt averechts.",
  },
  {
    id: "bekendheid",
    nr: "03",
    naam: "Bekendheid",
    kort: "Hoe bekend is je bedrijf, online en daarbuiten?",
    uitleg:
      "Bekendheid gaat over hoe vaak en hoe consistent je elders op het web voorkomt: vermeldingen, links, artikelen en reviews. Het is het traagste signaal om op te bouwen en tegelijk het signaal dat een gevestigd bedrijf zijn voorsprong geeft.",
    welInvloed: [
      "Structureel om reviews vragen, en erop reageren",
      "Vermeldingen op branchegidsen met overal dezelfde gegevens",
      "Links van lokale partijen: leveranciers, verenigingen, opdrachtgevers",
      "Zorgen dat je naam, adres en telefoonnummer overal identiek zijn",
    ],
    geenInvloed:
      "Hoe lang je concurrent al bestaat en hoeveel reviews die in de tussentijd heeft verzameld.",
  },
];

export function DrieSignalen() {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();
  const s = signalen[open];

  return (
    <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
      <div className="animate-glow pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />

      <Container className="relative">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Hoe Google kiest</Eyebrow>
          </Reveal>
          <LineReveal
            as="h2"
            className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
            lines={[
              { text: "Waar kijkt Google naar" },
              { text: "bij lokale resultaten?", className: "text-blue-text" },
            ]}
          />
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg leading-relaxed text-g300">
              Google noemt zelf drie signalen: relevantie, afstand en bekendheid. Hoe zwaar ze
              precies wegen maakt Google niet bekend, en iedereen die je een percentage voorrekent
              verzint dat. Wat wel bekend is: aan twee ervan kun je echt iets doen.
            </p>
          </Reveal>
        </div>

        {/* ── de drie kaarten ── */}
        <div className="mt-12 grid gap-3 md:grid-cols-3" role="group" aria-label="Kies een signaal">
          {signalen.map((sig, i) => {
            const on = i === open;
            return (
              <button
                key={sig.id}
                type="button"
                onClick={() => setOpen(i)}
                aria-pressed={on}
                className={`group relative overflow-hidden chamf chamf-lg border p-6 text-left transition-all duration-200 ${
                  on
                    ? "border-blue bg-blue/[0.12] shadow-[0_0_44px_-12px_rgba(1,48,253,0.6)]"
                    : "border-white/10 bg-s1/50 hover:border-blue/40 hover:bg-s1/70"
                }`}
              >
                {on && (
                  <span
                    aria-hidden
                    className="absolute right-0 top-0 h-4 w-4 bg-blue [clip-path:polygon(100%_0,0_0,100%_100%)]"
                  />
                )}
                <span className={`font-display text-xs font-bold ${on ? "text-blue-text" : "text-g600"}`}>
                  {sig.nr}
                </span>
                <span
                  className={`mt-1.5 block font-display text-xl font-extrabold tracking-tight ${
                    on ? "text-paper" : "text-g300"
                  }`}
                >
                  {sig.naam}
                </span>
                <span className={`mt-1.5 block text-sm leading-snug ${on ? "text-g300" : "text-g600"}`}>
                  {sig.kort}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── het paneel ── */}
        <div className="mt-4 chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 p-6 md:p-8">
          <AnimatePresence initial={false}>
            <motion.div
              key={s.id}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease }}
            >
              <p className="max-w-2xl text-[1.02rem] leading-relaxed text-g300">{s.uitleg}</p>

              <div className="mt-7 grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
                <div>
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-blue-text">
                    Hier heb je wél invloed op
                  </p>
                  <ul className="mt-3.5 space-y-2.5">
                    {s.welInvloed.map((w) => (
                      <li key={w} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center chamf-sm bg-blue/15 text-blue-text">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                            <path d="m5 12 4.5 4.5L19 7" />
                          </svg>
                        </span>
                        <span className="text-[0.95rem] leading-relaxed text-g300">{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="chamf border border-white/10 bg-s2/60 p-5">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-g500">
                    Hier niet
                  </p>
                  <p className="mt-3 text-[0.93rem] leading-relaxed text-g500">{s.geenInvloed}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-5 text-sm leading-relaxed text-g600">
            Bron: Google's eigen toelichting op hoe lokale resultaten worden gerangschikt. De
            onderlinge weging publiceert Google niet.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
