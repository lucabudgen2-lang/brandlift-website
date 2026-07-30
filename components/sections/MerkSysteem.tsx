"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { caseEykelenboom } from "@/lib/site";

/* ============================================================
   BRANDING · MERKSYSTEEM — de merk-verkenner.
   Links: de vier bouwstenen van een merkidentiteit.
   Rechts: een live preview die het geselecteerde onderdeel toont,
   uitgewerkt met de echte identiteit van Hovenier Eykelenboom.
   Alleen echt werk - geen verzonnen merken.
   ============================================================ */

type BlockId = "strategie" | "logo" | "kleur" | "toepassing";

const blocks: { nr: string; id: BlockId; title: string; desc: string; note: string }[] = [
  {
    nr: "01",
    id: "strategie",
    title: "Merkstrategie en positionering",
    desc: "Eerst de vraag waarom een klant voor jou kiest. Die positionering bepaalt de toon, de beeldtaal en elke keuze die daarna volgt.",
    note: "Voor Eykelenboom: vakmanschap en groei - een hovenier die tuinen aanlegt die meegroeien.",
  },
  {
    nr: "02",
    id: "logo",
    title: "Logo en beeldmerk",
    desc: "Een merkteken dat je vak uitdraagt en herkenbaar blijft op een busje, een offerte en een telefoonscherm.",
    note: "Een eikel met een boom erin - het verhaal van klein beginnen en groot worden, in één teken.",
  },
  {
    nr: "03",
    id: "kleur",
    title: "Kleur en typografie",
    desc: "Een vast palet en vaste letters. Dat maakt alles wat je maakt meteen van jou - en voorkomt dat elk drukwerk er anders uitziet.",
    note: "Diepgroen voor het vak, goud voor de kwaliteit. Eén serif voor autoriteit, één schreefloze voor leesbaarheid.",
  },
  {
    nr: "04",
    id: "toepassing",
    title: "Toepassing en merkgids",
    desc: "Het merk landt pas als het overal klopt: op je website, je drukwerk en je bedrijfswagen. De merkgids legt vast hoe.",
    note: "Alles vastgelegd in een merkgids - zodat het merk ook klopt als iemand anders er later mee werkt.",
  },
];

/* de echte Eykelenboom-identiteit */
const palette = [
  { hex: "#1E4536", label: "Diepgroen", role: "Basis" },
  { hex: "#2E6B4F", label: "Bladgroen", role: "Accent" },
  { hex: "#C4A265", label: "Goud", role: "Kwaliteit" },
  { hex: "#F4F1E8", label: "Crème", role: "Rust" },
];

function Panel({ active }: { active: BlockId }) {
  /* 01 · strategie — positionering als kompas */
  if (active === "strategie")
    return (
      <div className="flex flex-1 flex-col justify-center gap-4 p-7 sm:p-9">
        <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-blue-text">Positionering</p>
        <div className="space-y-3">
          {[
            { k: "Voor wie", v: "Particulieren in Den Haag met een tuin die meer verdient" },
            { k: "Waarom zij", v: "Vakmanschap dat je ziet, jaren nadat de tuin is aangelegd" },
            { k: "De toon", v: "Rustig, vakkundig, zonder opsmuk" },
          ].map((row) => (
            <div key={row.k} className="chamf border border-white/10 bg-white/[0.03] px-4 py-3">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.1em] text-g600">{row.k}</p>
              <p className="mt-1 text-sm font-medium leading-snug text-g100">{row.v}</p>
            </div>
          ))}
        </div>
      </div>
    );

  /* 02 · logo — het echte merkgids-boek */
  if (active === "logo")
    return (
      <div className="absolute inset-0">
        <Image
          src="/images/brandbook-only.jpg"
          alt="De merkgids die Brandlift ontwierp voor Hovenier Eykelenboom, met het eikel-beeldmerk in groen en goud"
          fill
          sizes="(max-width: 1024px) 92vw, 52vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-s0/90 via-s0/10 to-transparent" />
        <span className="absolute left-4 top-4 chamf-sm bg-s0/70 px-3 py-1.5 text-xs font-medium italic text-g100 backdrop-blur-sm">
          Uit ons echte werk
        </span>
        <div className="absolute inset-x-5 bottom-5">
          <p className="font-display text-lg font-extrabold tracking-tight text-paper">Het beeldmerk</p>
          <p className="mt-1 text-sm leading-snug text-g300">
            Een eikel met een boom erin - herkenbaar op een busje, een offerte en een telefoonscherm.
          </p>
        </div>
      </div>
    );

  /* 03 · kleur en typografie */
  if (active === "kleur")
    return (
      <div className="flex flex-1 flex-col justify-center gap-6 p-7 sm:p-9">
        <div>
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-blue-text">Kleurpalet</p>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {palette.map((c) => (
              <div key={c.hex}>
                <div
                  className="h-16 w-full chamf-sm border border-white/10 sm:h-20"
                  style={{ backgroundColor: c.hex }}
                />
                <p className="mt-1.5 text-[0.68rem] font-semibold text-g200">{c.label}</p>
                <p className="text-[0.6rem] text-g600">{c.role}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 pt-5">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-blue-text">Typografie</p>
          <div className="mt-3 space-y-2.5">
            <div className="chamf border border-white/10 bg-white/[0.03] px-4 py-3">
              <p className="font-display text-xl font-extrabold tracking-tight text-paper">Tuinen die meegroeien</p>
              <p className="mt-0.5 text-[0.6rem] uppercase tracking-[0.1em] text-g600">Koppen - serif met autoriteit</p>
            </div>
            <div className="chamf border border-white/10 bg-white/[0.03] px-4 py-3">
              <p className="text-sm leading-relaxed text-g300">
                Vakmanschap dat je jaren later nog terugziet in de tuin.
              </p>
              <p className="mt-1 text-[0.6rem] uppercase tracking-[0.1em] text-g600">Broodtekst - rustig leesbaar</p>
            </div>
          </div>
        </div>
      </div>
    );

  /* 04 · toepassing — merk landt in de website */
  return (
    <div className="flex flex-1 flex-col justify-center gap-4 p-7 sm:p-9">
      <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-blue-text">Doorvertaald naar de website</p>
      <div className="overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)]">
        <div className="flex items-center gap-2 border-b border-[var(--color-line)] bg-s2/60 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-blue" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="ml-1.5 truncate text-[0.58rem] font-semibold tracking-[0.08em] text-g500">
            {caseEykelenboom.url}
          </span>
        </div>
        <div className="relative aspect-[16/10]">
          <Image
            src={caseEykelenboom.image}
            alt={caseEykelenboom.imageAlt}
            fill
            sizes="(max-width: 1024px) 92vw, 52vw"
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["Website", "Drukwerk", "Bedrijfswagen"].map((t) => (
          <div key={t} className="chamf border border-white/10 bg-white/[0.03] px-3 py-2.5 text-center">
            <span className="text-[0.7rem] font-semibold text-g200">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MerkSysteem() {
  const [active, setActive] = useState(0);
  const current = blocks[active];

  return (
    <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
      <div className="animate-glow pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />

      <Container className="relative">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Het merksysteem</Eyebrow>
          </Reveal>
          <LineReveal
            as="h2"
            className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
            lines={[
              { text: "Vier bouwstenen." },
              { text: "Eén herkenbaar merk.", className: "text-blue-text" },
            ]}
          />
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg leading-relaxed text-g300">
              Een merk is geen logo alleen. Kies een bouwsteen en zie hoe we het uitwerkten voor
              Hovenier Eykelenboom - een echt project, geen voorbeeldmerk.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
          {/* ── rail ── */}
          <div className="space-y-3">
            {blocks.map((b, i) => {
              const on = i === active;
              return (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  className={`group relative w-full overflow-hidden chamf chamf-lg border p-5 text-left transition-all duration-200 md:p-6 ${
                    on
                      ? "border-blue bg-blue/[0.12] shadow-[0_0_44px_-10px_rgba(1,48,253,0.55)]"
                      : "border-white/10 bg-s1/50 hover:border-blue/40 hover:bg-s1/70"
                  }`}
                >
                  {on && (
                    <span
                      aria-hidden
                      className="absolute right-0 top-0 h-4 w-4 bg-blue [clip-path:polygon(100%_0,0_0,100%_100%)]"
                    />
                  )}
                  <span className="flex items-baseline gap-3">
                    <span className={`font-display text-sm font-bold ${on ? "text-blue-text" : "text-g600"}`}>
                      {b.nr}
                    </span>
                    <span
                      className={`font-display text-lg font-extrabold tracking-tight md:text-xl ${
                        on ? "text-paper" : "text-g300"
                      }`}
                    >
                      {b.title}
                    </span>
                  </span>
                  <span className={`mt-2 block pl-8 text-sm leading-relaxed ${on ? "text-g300" : "text-g500"}`}>
                    {b.desc}
                  </span>
                </button>
              );
            })}

            <div className="chamf border border-blue/30 bg-blue/[0.07] p-4" aria-live="polite">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-blue-text">
                Zo deden we het voor Eykelenboom
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-g200">{current.note}</p>
            </div>
          </div>

          {/* ── preview ── */}
          <Reveal delay={0.1}>
            <div className="relative flex min-h-[420px] overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 shadow-[0_50px_110px_-50px_rgba(0,0,0,0.8)] lg:min-h-[520px]">
              <Panel active={current.id} />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
