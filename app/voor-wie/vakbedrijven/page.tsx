import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Byline, FaqBlock } from "@/components/page/blocks";
import { Reviews } from "@/components/sections/Reviews";
import { CasesCarousel } from "@/components/sections/CasesCarousel";
import { FinalCta } from "@/components/sections/FinalCta";
import { BenefitMarquee } from "@/components/sections/BenefitMarquee";
import { VakSelector } from "@/components/sections/VakSelector";
import { caseEykelenboom, reviews, voorWie } from "@/lib/site";
import { serviceSchema } from "@/lib/schema";

const PATH = "/voor-wie/vakbedrijven";
const UPDATED = "2026-07-17";

export const metadata: Metadata = {
  title: "Websites voor vakbedrijven en servicebedrijven",
  description:
    "Websites voor hoveniers, schilders, aannemers en installateurs. Gevonden worden per dienst en werkgebied, met een route naar contact die werkt.",
  alternates: { canonical: PATH },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Voor wie", path: "/voor-wie" },
  { name: "Vakbedrijven", path: PATH },
];

const heroChips = ["Sinds 2021", "Gebouwd voor vakbedrijven", "5,0 op Google", "Geen wachtlijst"];

/* de echte doelgroeplijst uit lib/site.ts */
const vakLijst = voorWie.panels[0].items;

/* ── het probleem, in de taal van het vak ── */
const problemen = [
  {
    nr: "01",
    title: "Je draait op mond-tot-mond",
    body: "Het werk komt via bekenden, via via en van bestaande klanten. Prima - tot het even stil is. Dan heb je geen knop om aan te draaien, want online komt er niets binnen.",
    gevolg: "Stille maanden kun je niet opvangen",
  },
  {
    nr: "02",
    title: "Je site is een visitekaartje uit 2016",
    body: "Hij staat er wel, maar hij doet niets. Een paar foto's, een telefoonnummer en een pagina die je al jaren niet meer hebt aangeraakt. Klanten die hem vinden, worden er niet warm van.",
    gevolg: "Je oogt kleiner dan je werk is",
  },
  {
    nr: "03",
    title: "De concurrent staat boven je in Google",
    body: "Iemand zoekt jouw vak in jouw plaats en komt uit bij een bedrijf dat niet beter werkt, maar wel beter gevonden wordt. Die klus had van jou kunnen zijn.",
    gevolg: "Je verliest klussen die je nooit zag",
  },
  {
    nr: "04",
    title: "Je bent overdag op de klus",
    body: "Je staat op een steiger, in een tuin of onder een cv-ketel. Niet achter een laptop om je vindbaarheid te regelen. En 's avonds is er de administratie.",
    gevolg: "Er is geen tijd om het zelf op te pakken",
  },
];

/* ── waarom vakbedrijven bij ons uitkomen ── */
const waaroms = [
  {
    icon: "tools",
    title: "We spreken je taal",
    body: "Geen marketingjargon en geen praatjes over funnels. We snappen hoe je aan klussen komt, wat een offerteaanvraag waard is en waarom je klant belt in plaats van mailt.",
  },
  {
    icon: "partners",
    title: "Je praat direct met de bouwer",
    body: "Geen accountmanager die het doorgeeft. Je werkt rechtstreeks met de mensen die je site ontwerpen en bouwen - korte lijnen, snelle antwoorden.",
  },
  {
    icon: "camera",
    title: "Jouw werk, geen stockfoto's",
    body: "Je eigen projecten zijn het beste bewijs dat je hebt. We zetten die centraal, en helpen met beeld als je nog geen goede foto's hebt.",
  },
  {
    icon: "phone",
    title: "Gebouwd om gebeld te worden",
    body: "Je klant zoekt op zijn telefoon, vaak met haast. De site is snel, leest goed op mobiel en de belknop is altijd binnen handbereik.",
  },
  {
    icon: "search",
    title: "Vindbaar per dienst en per plaats",
    body: "Niet één pagina die alles moet doen, maar een structuur per dienst en per werkgebied. Zo word je gevonden op precies de klus die iemand zoekt.",
  },
  {
    icon: "shield",
    title: "We werken door tot het klopt",
    body: "Je krijgt geen half product. Zit het er nog niet in, dan werken we door zonder extra kosten tot je tevreden bent.",
  },
];

const faqs = [
  {
    q: "Werken jullie ook voor eenmanszaken en kleine bedrijven?",
    a: "Ja. Een groot deel van de vakbedrijven waarvoor we bouwen is een eenmanszaak of een klein team. Je hoeft geen groot bedrijf te zijn om online serieus voor de dag te komen - vaak is het verschil juist voor kleinere bedrijven het grootst.",
  },
  {
    q: "Ik heb al een website. Kan die beter, of moet er een nieuwe komen?",
    a: "Dat kijken we eerst na. Soms zit het probleem in losse dingen - onduidelijke teksten, geen bewijs, een onvindbare contactknop - en is dat gericht op te lossen. Vaker zit het in de structuur, en dan is opnieuw bouwen goedkoper dan blijven plakken. Je krijgt daar een eerlijk advies over, ook als dat betekent dat je je huidige site houdt.",
  },
  {
    q: "Ik heb geen tijd om teksten en foto's aan te leveren.",
    a: "Dat hoeft ook niet. We halen in een gesprek op wat we nodig hebben en schrijven de teksten zelf. Voor beeld gebruiken we jouw projectfoto's; heb je die niet, dan denken we mee over fotografie. Jij levert het vakmanschap, wij de rest.",
  },
  {
    q: "Krijg ik foto's van mijn eigen werk op de site?",
    a: "Ja, en dat is precies de bedoeling. Jouw eigen projecten overtuigen veel sterker dan stockbeelden - een klant wil zien wat je in zijn straat of in zijn soort woning hebt gedaan. We hebben zelf een achtergrond in fotografie, dus we denken mee over wat je laat zien.",
  },
  {
    q: "Werken jullie ook in mijn regio?",
    a: "We zitten in Den Haag en werken door heel Nederland. De samenwerking verloopt grotendeels online, dus afstand speelt zelden een rol. Je website bouwen we wel altijd rond jouw werkgebied, zodat je lokaal gevonden wordt waar jij daadwerkelijk komt.",
  },
  {
    q: "Hoe snel staat mijn website online?",
    a: "Meestal binnen 3 tot 4 weken, afhankelijk van de omvang en hoe snel we content en feedback rond hebben. In het groeigesprek koppelen we een concrete planning aan jouw project, zodat je weet waar je aan toe bent.",
  },
  {
    q: "Ik heb weinig verstand van internet. Kan ik er zelf mee werken?",
    a: "Dat hoeft niet, maar het kan wel. We leveren de site werkend op en jij hoeft er niets aan te doen. Wil je zelf projecten of teksten kunnen aanpassen, dan richten we dat zo in dat het simpel blijft en leggen we het rustig uit.",
  },
];

function Icon({ name, size = 22 }: { name: string; size?: number }) {
  const c = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "tools":
      return (
        <svg {...c}>
          <path d="M14.5 5.5a3.5 3.5 0 0 0 4.7 4.3l-2 2 2.3 2.3a2 2 0 1 1-2.8 2.8L14.4 14l-6 6a2.1 2.1 0 0 1-3-3l6-6-2.9-2.9a2 2 0 0 1 2.8-2.8L15.8 7l-2-2a3.5 3.5 0 0 1 .7.5z" />
        </svg>
      );
    case "partners":
      return (
        <svg {...c}>
          <circle cx="8.5" cy="8" r="3" />
          <circle cx="16" cy="9.5" r="2.4" />
          <path d="M3.5 19c0-2.8 2.2-5 5-5 1.7 0 3.2.8 4.1 2.1" />
          <path d="M13.5 19c.2-2.3 2-4 4.2-4 1.9 0 3.5 1.3 3.9 3.1" />
        </svg>
      );
    case "camera":
      return (
        <svg {...c}>
          <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h1.8l1.2-2h6.9l1.2 2h1.9A2.5 2.5 0 0 1 21 8.5v9A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z" />
          <circle cx="12" cy="12.5" r="3.4" />
        </svg>
      );
    case "phone":
      return (
        <svg {...c}>
          <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
          <path d="M11 18.5h2" />
        </svg>
      );
    case "search":
      return (
        <svg {...c}>
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      );
    default:
      return (
        <svg {...c}>
          <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
  }
}

function Check({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

export default function Page() {
  const schema = serviceSchema({
    name: "Websites voor vakbedrijven",
    description: metadata.description as string,
    path: PATH,
    faqs,
    crumbs,
    withReviews: reviews,
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-s0 pt-10 pb-20 md:pb-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="animate-glow pointer-events-none absolute -top-40 right-[-12%] h-[520px] w-[520px] rounded-full bg-blue/20 blur-[150px]" />
        <Container className="relative">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Reveal>
                <Eyebrow>Voor wie · Vakbedrijven</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-5 font-display text-[2.1rem] font-extrabold leading-[1.04] tracking-tight text-paper sm:text-5xl lg:text-[3.2rem]">
                  Websites voor vakbedrijven en servicebedrijven
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g200">
                  Je levert goed werk. Je klanten zijn tevreden. Maar online zie je dat niet terug - en
                  de aanvragen komen vooral via via. Wij bouwen websites voor hoveniers, schilders,
                  aannemers en installateurs die daar verandering in willen brengen.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {heroChips.map((chip) => (
                    <li
                      key={chip}
                      className="inline-flex items-center gap-2 chamf-sm border border-[var(--color-line-strong)] bg-s1/70 px-3.5 py-2 text-sm font-medium text-g100 backdrop-blur-sm"
                    >
                      <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                      {chip}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.28}>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button href="/contact" variant="primary" className="group">
                    Plan een gratis groeigesprek
                  </Button>
                  <Link
                    href="/cases/hovenier-eykelenboom"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-text hover:underline"
                  >
                    Bekijk een hovenier die dit deed
                    <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={0.34}>
                <div className="mt-6">
                  <Byline updated={UPDATED} />
                </div>
              </Reveal>
            </div>

            {/* echte vakfoto + resultaatbadge */}
            <Reveal delay={0.12}>
              <div className="relative">
                <div className="animate-glow pointer-events-none absolute -inset-6 -z-10 rounded-full bg-blue/15 blur-[80px]" />
                <div className="relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] shadow-[0_44px_100px_-45px_rgba(0,0,0,0.8)]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={voorWie.panels[0].photo}
                      alt={voorWie.panels[0].photoAlt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 92vw, 46vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-blue-deep/35 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-s0/80 via-transparent to-transparent" />
                  </div>
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 chamf-sm bg-s0/70 px-3 py-1.5 text-xs font-medium text-g100 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                    Vakbedrijven
                  </span>
                </div>
                <div className="absolute -bottom-5 -left-4 chamf-sm bg-blue px-5 py-3 shadow-[0_16px_40px_-12px_rgba(1,48,253,0.7)]">
                  <div className="text-[0.55rem] font-semibold uppercase tracking-[0.08em] text-white/70">
                    Resultaat voor een hovenier
                  </div>
                  <div className="mt-0.5 flex items-baseline gap-2 font-display font-extrabold text-white">
                    <span className="text-xl">{caseEykelenboom.stat.from}</span>
                    <span className="text-white/60">→</span>
                    <span className="text-3xl">{caseEykelenboom.stat.to}</span>
                    <span className="text-[0.7rem] font-semibold text-white/85">{caseEykelenboom.stat.unit}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ TRUST STRIP ═══════════ */}
      <BenefitMarquee />

      {/* ═══════════ VOOR WIE PRECIES (AEO) ═══════════ */}
      <section className="on-light relative py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.85fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>Voor wie precies</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.6rem]"
              lines={[{ text: "Voor wie bouwen we" }, { text: "deze websites?", className: "text-g600" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                Wij bouwen websites voor vakbedrijven en servicebedrijven: bedrijven die met hun handen
                goed werk leveren en het grootste deel van hun klussen uit de eigen regio halen. Denk aan
                hoveniers, schilders, aannemers, installateurs en dakdekkers - bedrijven waarbij een
                offerteaanvraag of een telefoontje het echte doel van de website is.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-g600">
                Wat ze delen: het vakmanschap zit goed, maar online komt dat niet terug. Precies daar
                bouwen wij op.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="chamf chamf-lg border border-ink/10 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)] md:p-8">
              <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-blue">
                Onder meer voor
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {vakLijst.map((v) => (
                  <span
                    key={v}
                    className="inline-flex items-center gap-2 chamf-sm border border-ink/12 bg-black/[0.02] px-3.5 py-2 text-sm font-medium text-g800"
                  >
                    <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                    {v}
                  </span>
                ))}
              </div>
              <p className="mt-6 border-t border-ink/10 pt-5 text-sm leading-relaxed text-g600">
                Val je hier niet precies tussen? Lever je goed werk en wil je online sterker overkomen,
                dan bouwen we er net zo graag voor.{" "}
                <Link href="/voor-wie" className="font-semibold text-blue hover:underline">
                  Bekijk voor wie we werken
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ HET PROBLEEM ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-blue/12 blur-[150px]" />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <div>
              <Reveal>
                <Eyebrow>Het probleem</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.9rem]"
                lines={[
                  { text: "Goed werk." },
                  { text: "Te weinig online aanvragen.", className: "text-blue-text" },
                ]}
              />
            </div>
            <Reveal delay={0.12}>
              <p className="max-w-md text-lg leading-relaxed text-g300 lg:justify-self-end">
                Dit horen we bij vrijwel elk vakbedrijf dat bij ons aanklopt. Herken je er één, dan valt
                er waarschijnlijk veel te winnen.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {problemen.map((p, i) => (
              <Reveal key={p.nr} delay={(i % 2) * 0.07}>
                <div className="group relative flex h-full flex-col overflow-hidden chamf chamf-lg border border-white/10 bg-s1/50 p-7 backdrop-blur-md transition-all duration-200 hover:border-blue/50 hover:bg-s1/70 md:p-8">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-2 top-2 font-display text-[5.5rem] font-extrabold leading-none text-white/[0.04] transition-colors duration-300 group-hover:text-white/[0.07]"
                  >
                    {p.nr}
                  </span>
                  <h3 className="relative font-display text-xl font-extrabold leading-tight tracking-tight text-paper">
                    {p.title}
                  </h3>
                  <p className="relative mt-2.5 text-[0.95rem] leading-relaxed text-g500">{p.body}</p>
                  <div className="relative mt-5 flex items-center gap-2.5 border-t border-white/10 pt-4">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.7)]" />
                    <span className="text-xs font-semibold uppercase tracking-[0.06em] text-amber-300/90">Gevolg</span>
                    <span className="text-sm font-medium text-g300">{p.gevolg}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <p className="text-lg font-semibold italic text-g200">Klinkt bekend? Dan weet je waar we beginnen.</p>
              <Button href="/contact" variant="primary" className="group">
                Plan een gratis groeigesprek
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ SIGNATURE: zo zoekt jouw klant ═══════════ */}
      <VakSelector />

      {/* ═══════════ WAAROM VAKBEDRIJVEN BIJ ONS UITKOMEN ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Waarom vakbedrijven bij ons uitkomen</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Een bureau dat weet" }, { text: "hoe jouw werk werkt.", className: "text-g600" }]}
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-g600">
                We bouwen niet voor iedereen. Juist omdat we vooral voor vakbedrijven werken, weten we wat
                er in jouw markt werkt - en wat niet.
              </p>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {waaroms.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.07}>
                <div className="group h-full chamf chamf-lg border border-black/10 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(1,48,253,0.35)]">
                  <span className="grid h-12 w-12 place-items-center chamf-sm bg-blue/10 text-blue transition-colors duration-200 group-hover:bg-blue group-hover:text-white">
                    <Icon name={w.icon} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-extrabold leading-tight tracking-tight text-ink">
                    {w.title}
                  </h3>
                  <p className="mt-2.5 text-[0.93rem] leading-relaxed text-g600">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ BEWIJS ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">
            <div>
              <Reveal>
                <Eyebrow>Bewijs uit de praktijk</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
                lines={[
                  { text: "Een hovenier uit Den Haag." },
                  { text: "Van 2 naar 24 aanvragen.", className: "text-blue-text" },
                ]}
              />
              <Reveal delay={0.14}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-g300">
                  Hovenier Eykelenboom leverde al jaren goed werk, maar werd online nauwelijks gevonden.
                  We bouwden een compleet nieuw merk en een website met een pagina per dienst en per
                  werkgebied - precies de structuur uit het overzicht hierboven. Sinds livegang komen de
                  aanvragen structureel binnen via Google.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-7 inline-flex items-baseline gap-2.5 chamf chamf-lg bg-blue px-6 py-4 font-display font-extrabold text-white shadow-[0_24px_60px_-24px_rgba(1,48,253,0.8)]">
                  <span className="text-2xl">{caseEykelenboom.stat.from}</span>
                  <span className="text-white/60">→</span>
                  <span className="text-4xl">{caseEykelenboom.stat.to}</span>
                  <span className="text-sm font-semibold text-white/85">{caseEykelenboom.stat.unit}</span>
                </div>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-g500">
                  Resultaat van het complete traject - branding, website en lokale SEO samen.
                </p>
              </Reveal>
              <Reveal delay={0.26}>
                <Link
                  href="/cases/hovenier-eykelenboom"
                  className="group mt-7 flex w-fit items-center gap-2 text-sm font-semibold text-blue-text hover:underline"
                >
                  Bekijk de volledige case
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="group overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 shadow-[0_44px_100px_-45px_rgba(0,0,0,0.8)]">
                <div className="flex items-center gap-2 border-b border-[var(--color-line)] bg-s2/60 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="ml-2 flex-1 truncate chamf-sm bg-white/[0.04] px-3 py-1 text-[0.62rem] font-semibold tracking-[0.08em] text-g500">
                    {caseEykelenboom.url}
                  </span>
                </div>
                <div className="relative aspect-[16/11]">
                  <Image
                    src={caseEykelenboom.image}
                    alt={caseEykelenboom.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 92vw, 48vw"
                    className="object-cover object-center transition-transform duration-500 ease-[var(--ease-brand)] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-blue-deep/15 mix-blend-multiply" />
                  <span className="absolute bottom-3 left-3 chamf-sm bg-s0/70 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.08em] text-g100 backdrop-blur-sm">
                    {caseEykelenboom.sector}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ MEER WERK · REVIEWS ═══════════ */}
      <CasesCarousel tone="light" heading={["Meer werk voor bedrijven", "die met hun handen leveren."]} />

      <Reviews tone="dark" />

      {/* ═══════════ WAT WE BOUWEN ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Wat we bouwen</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
                lines={[{ text: "Eén aanpak," }, { text: "vier onderdelen.", className: "text-g600" }]}
              />
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                  Voor een vakbedrijf hangt alles samen: je moet gevonden worden, serieus genomen worden
                  en het de klant makkelijk maken om contact op te nemen. Wij regelen die onderdelen in
                  samenhang, zodat je niet met drie partijen hoeft te schakelen.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <div className="grid gap-3">
                {[
                  {
                    label: "Website laten maken",
                    desc: "Het fundament: structuur, teksten en techniek die kloppen",
                    href: "/diensten/website-laten-maken",
                  },
                  {
                    label: "Lokale SEO",
                    desc: "Gevonden worden per dienst en per werkgebied",
                    href: "/diensten/lokale-seo",
                  },
                  {
                    label: "Branding",
                    desc: "Een uitstraling die past bij de kwaliteit van je werk",
                    href: "/diensten/branding",
                  },
                  {
                    label: "Conversie-optimalisatie",
                    desc: "Meer aanvragen uit dezelfde bezoekers",
                    href: "/diensten/conversie-optimalisatie",
                  },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="group relative flex items-center gap-4 overflow-hidden chamf chamf-lg border border-black/10 bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:border-blue/40 hover:shadow-[0_24px_50px_-24px_rgba(1,48,253,0.35)]"
                  >
                    <span
                      aria-hidden
                      className="absolute right-0 top-0 h-4 w-4 bg-blue opacity-0 transition-opacity duration-200 [clip-path:polygon(100%_0,0_0,100%_100%)] group-hover:opacity-100"
                    />
                    <span className="min-w-0">
                      <span className="block font-display text-base font-extrabold tracking-tight text-ink">
                        {l.label}
                      </span>
                      <span className="block text-sm text-g600">{l.desc}</span>
                    </span>
                    <span className="ml-auto shrink-0 text-blue opacity-0 transition-all duration-200 group-hover:opacity-100">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ WAT HET KOST ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
        <Container className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-14">
          <div>
            <Reveal>
              <Eyebrow>Wat het kost</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Eerlijk over de prijs," }, { text: "voordat je begint.", className: "text-g300" }]}
            />
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-g300">
                Een website voor een vakbedrijf begint bij ons{" "}
                <span className="font-semibold text-paper">vanaf €1.500</span>. Daar zit de lokale
                SEO-basis, de strategie en het ontwerp al in - je hoeft dat niet los bij te kopen.
                Hosting en onderhoud lopen apart via een voordelig maandbedrag, en je site staat meestal
                binnen 3 tot 4 weken online.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/website-kosten-calculator"
                  className="group inline-flex items-center justify-center gap-2.5 chamf-sm bg-blue px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_48px_-16px_rgba(1,48,253,0.85)] transition-colors duration-150 hover:bg-blue-press"
                >
                  Bereken jouw prijs
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
                <Link
                  href="/kennisbank/wat-kost-een-website-laten-maken"
                  className="group inline-flex items-center justify-center gap-2 chamf-sm border border-[var(--color-line-strong)] px-6 py-3.5 text-sm font-semibold text-g100 transition-colors duration-150 hover:border-blue hover:text-blue-text"
                >
                  Lees wat een website kost
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="mt-6 text-sm leading-relaxed text-g500">
                Benieuwd hoe een traject verloopt?{" "}
                <Link href="/werkwijze" className="font-semibold text-blue-text hover:underline">
                  Bekijk onze werkwijze
                </Link>{" "}
                of{" "}
                <Link href="/cases" className="font-semibold text-blue-text hover:underline">
                  bekijk alle cases
                </Link>
                .
              </p>
            </Reveal>
          </div>

          {/* garantie monument */}
          <Reveal delay={0.12}>
            <div className="relative overflow-hidden chamf chamf-lg bg-blue p-8 shadow-[0_36px_80px_-32px_rgba(1,48,253,0.7)]">
              <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/15 blur-[60px]" />
              <span className="relative grid h-12 w-12 place-items-center chamf-sm bg-white text-blue">
                <Check size={22} />
              </span>
              <p className="relative mt-6 font-display text-2xl font-extrabold leading-snug tracking-tight text-white md:text-[1.7rem]">
                We werken door totdat je tevreden bent.
              </p>
              <p className="relative mt-3 text-base leading-relaxed text-white/85">
                Je levert zelf ook geen half werk af. Wij dus ook niet: zit het er nog niet in, dan
                werken we door zonder extra kosten tot het klopt.
              </p>
              <Link
                href="/contact"
                className="group relative mt-7 inline-flex items-center gap-2.5 chamf-sm bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-white/90"
              >
                Plan een gratis groeigesprek
                <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ FAQ · SLOT ═══════════ */}
      <FaqBlock faqs={faqs} tone="light" />

      <FinalCta />
    </main>
  );
}
