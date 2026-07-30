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
import { PremiumDetails } from "@/components/sections/PremiumDetails";
import { cases, reviews, voorWie } from "@/lib/site";
import { serviceSchema } from "@/lib/schema";

const PATH = "/voor-wie/premium";
const UPDATED = "2026-07-17";

const premiumPanel = voorWie.panels[1];
const rotorswing = cases[0];

export const metadata: Metadata = {
  title: "Websites voor premium en visuele bedrijven - Brandlift",
  description:
    "Website laten maken voor een premium merk? Voor vastgoed, maritiem, interieurdesign en klinieken bouwen we sites waarin beeld, rust en merk het werk doen. NL en Engels.",
  alternates: { canonical: PATH },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Voor wie", path: "/voor-wie" },
  { name: "Premium en visuele bedrijven", path: PATH },
];

const heroChips = ["Sinds 2021", "Nederlands en Engels", "5,0 op Google", "Geen wachtlijst"];

/* ── het probleem, premium-specifiek ── */
const problemen = [
  {
    nr: "01",
    title: "Je product is prachtig. Je site doet het tekort",
    body: "Wat in het echt indruk maakt - de afwerking, het materiaal, de maatvoering - verdwijnt online in kleine foto's en volle pagina's. De kwaliteit is er wel, maar hij komt niet over.",
    gevolg: "Je werk wordt onderschat",
  },
  {
    nr: "02",
    title: "Je uitstraling past niet bij je prijs",
    body: "Je vraagt een premium prijs en dat is terecht. Maar een verouderde site zaait twijfel precies op het moment dat iemand die investering overweegt.",
    gevolg: "Je moet je prijs verdedigen",
  },
  {
    nr: "03",
    title: "Internationale kopers haken af",
    body: "Bij jachtbouw, vastgoed en design komt de koper net zo vaak uit het buitenland. Een site die alleen Nederlands spreekt, sluit een deel van je markt stilzwijgend uit.",
    gevolg: "Je mist kopers die je nooit ziet",
  },
  {
    nr: "04",
    title: "Je wordt vergeleken, niet bekeken",
    body: "Een dure aankoop wordt niet in één bezoek beslist. Men vergelijkt je met een shortlist, komt terug, en kijkt nog eens. Je site moet die herhaalde blik doorstaan.",
    gevolg: "De shortlist kiest een ander",
  },
];

/* ── de aanpak, aangepast op dit publiek ── */
const aanpak = [
  {
    icon: "gem",
    title: "Merk en positionering eerst",
    body: "Voor jouw markt is het merk geen laagje verf, maar het argument. We bepalen eerst waar je staat en voor wie - daarna pas hoe het eruitziet.",
    link: { label: "Meer over branding", href: "/diensten/branding" },
  },
  {
    icon: "camera",
    title: "Beeld in de hoofdrol",
    body: "Bij een premium merk doet het beeld het verkoopwerk. We geven het de ruimte die het verdient en denken mee over wat je laat zien - we komen zelf uit de fotografie.",
  },
  {
    icon: "layout",
    title: "Rust en ruimte in het ontwerp",
    body: "Witruimte is geen verspilling maar een signaal. Minder op een pagina betekent dat wat er staat zwaarder telt - precies wat een hoge prijs vraagt.",
  },
  {
    icon: "globe",
    title: "Meertalig voor internationale kopers",
    body: "We werken in het Nederlands en Engels, en schakelen professionele vertalers in voor andere talen. Elke taal krijgt dezelfde zorg, niet een machinevertaling.",
  },
  {
    icon: "route",
    title: "Een zachte route naar contact",
    body: "Geen knipperende belknop. Bij een overwogen aankoop werkt informeren beter dan pushen: goed opgebouwde pagina's en een uitnodiging tot gesprek op het juiste moment.",
  },
  {
    icon: "bolt",
    title: "Techniek die zwaar beeld snel houdt",
    body: "Grote foto's en video mogen nooit ten koste gaan van snelheid. We bouwen modern en geoptimaliseerd, zodat je site scherp blijft en toch vlot laadt.",
  },
];

const faqs = [
  {
    q: "Kunnen jullie een meertalige website bouwen?",
    a: "Ja. We werken zelf in het Nederlands en Engels, en voor andere talen schakelen we professionele vertalers in - geen machinevertaling. Elke taalversie krijgt dezelfde structuur en dezelfde zorg, zodat je ook in het buitenland serieus overkomt.",
  },
  {
    q: "Wij hebben al professionele fotografie. Kunnen jullie daarmee werken?",
    a: "Graag zelfs. Goede beelden zijn het beste materiaal dat je ons kunt geven en we bouwen het ontwerp er letterlijk omheen. Ontbreken er beelden of dekken ze niet alles, dan denken we mee over wat er nog nodig is - we hebben zelf een achtergrond in fotografie.",
  },
  {
    q: "Hoe zorgen jullie dat zwaar beeld toch snel laadt?",
    a: "Door beelden in de juiste formaten en moderne bestandstypen te serveren, ze pas te laden wanneer ze nodig zijn en de site technisch licht te houden. Je hoeft dus niet te kiezen tussen mooi en snel - dat is een kwestie van goed bouwen.",
  },
  {
    q: "Werken jullie ook voor internationale klanten?",
    a: "Ja. We zitten in Den Haag en werken door heel Nederland, en een deel van het werk is internationaal gericht - zeker in markten als jachtbouw en vastgoed, waar de koper net zo vaak uit het buitenland komt. De samenwerking verloopt grotendeels online.",
  },
  {
    q: "Wij verkopen niet online. Wat is dan het doel van onze site?",
    a: "Vertrouwen opbouwen tot het punt waarop iemand contact opneemt. Bij een overwogen aankoop is de website geen kassa maar je belangrijkste verkoopmateriaal: hij laat zien wat je maakt, hoe je werkt en waarom je je prijs waard bent. Het doel is een goed gesprek, niet een klik.",
  },
  {
    q: "Kunnen jullie onze bestaande huisstijl volgen?",
    a: "Zeker. Is je merk al scherp, dan bouwen we daarbinnen en houden we ons strak aan je richtlijnen. Zien we dat de huisstijl je tegenwerkt, dan zeggen we dat eerlijk en laten we zien wat we zouden aanscherpen - maar we vervangen nooit iets alleen om te vervangen.",
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
    case "gem":
      return (
        <svg {...c}>
          <path d="M6 3h12l3 5-9 13L3 8l3-5z" />
          <path d="M3 8h18M9 3l3 5 3-5M12 8l0 13" />
        </svg>
      );
    case "camera":
      return (
        <svg {...c}>
          <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h1.8l1.2-2h6.9l1.2 2h1.9A2.5 2.5 0 0 1 21 8.5v9A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z" />
          <circle cx="12" cy="12.5" r="3.4" />
        </svg>
      );
    case "layout":
      return (
        <svg {...c}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M9 9v11" />
        </svg>
      );
    case "globe":
      return (
        <svg {...c}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
        </svg>
      );
    case "route":
      return (
        <svg {...c}>
          <circle cx="6" cy="19" r="2.5" />
          <circle cx="18" cy="5" r="2.5" />
          <path d="M8.5 19h6a4 4 0 0 0 0-8h-5a4 4 0 0 1 0-8h6" />
        </svg>
      );
    default:
      return (
        <svg {...c}>
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
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
    name: "Websites voor premium en visuele bedrijven",
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
                <Eyebrow>Voor wie · Premium en visueel</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-5 font-display text-[2.1rem] font-extrabold leading-[1.04] tracking-tight text-paper sm:text-5xl lg:text-[3.2rem]">
                  Websites voor premium en visuele bedrijven
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g200">
                  Bij een hoge prijs wordt er eerst gekeken en pas daarna gesproken. Je website is dan
                  je eerste indruk - en vaak je enige. Wij bouwen sites voor vastgoed, maritiem,
                  interieurdesign en klinieken waarin beeld, rust en merk het werk doen.
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
                    href="/cases/rotorswing"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-text hover:underline"
                  >
                    Bekijk een premium merk dat we bouwden
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

            <Reveal delay={0.12}>
              <div className="relative">
                <div className="animate-glow pointer-events-none absolute -inset-6 -z-10 rounded-full bg-blue/15 blur-[80px]" />
                <div className="relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] shadow-[0_44px_100px_-45px_rgba(0,0,0,0.8)]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={premiumPanel.photo}
                      alt={premiumPanel.photoAlt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 92vw, 46vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-blue-deep/30 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-s0/75 via-transparent to-transparent" />
                  </div>
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 chamf-sm bg-s0/70 px-3 py-1.5 text-xs font-medium text-g100 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                    Premium en visueel
                  </span>
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
              lines={[{ text: "Voor merken die op" }, { text: "presentatie worden beoordeeld.", className: "text-g600" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                Wij bouwen premium websites voor bedrijven waar de aankoop groot is en de indruk telt:
                vastgoed, maritiem en jachtbouw, interieurdesign en klinieken. Bedrijven die niet op
                prijs concurreren, maar op kwaliteit - en waarbij de website die kwaliteit moet
                bewijzen voordat er iemand belt.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-g600">
                Hier draait het niet om zo veel mogelijk bezoekers. Het draait om de juiste bezoeker,
                die na drie keer terugkomen nog steeds onder de indruk is.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="chamf chamf-lg border border-ink/10 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)] md:p-8">
              <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-blue">
                Onder meer voor
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {premiumPanel.items.map((v) => (
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
                Werk je in een andere markt maar herken je het verhaal? Dan bouwen we er net zo graag
                voor.{" "}
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
                  { text: "Je kwaliteit is niet het probleem." },
                  { text: "De weergave ervan wel.", className: "text-blue-text" },
                ]}
              />
            </div>
            <Reveal delay={0.12}>
              <p className="max-w-md text-lg leading-relaxed text-g300 lg:justify-self-end">
                In een markt waar men vergelijkt voordat men belt, beslist de presentatie mee. Dit zien
                we het vaakst misgaan.
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
              <p className="text-lg font-semibold italic text-g200">Herkenbaar? Dan is er veel te winnen.</p>
              <Button href="/contact" variant="primary" className="group">
                Plan een gratis groeigesprek
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ SIGNATURE: de optelsom van details ═══════════ */}
      <PremiumDetails />

      {/* ═══════════ ONZE AANPAK ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Onze aanpak</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Gebouwd voor een publiek" }, { text: "dat op details let.", className: "text-g600" }]}
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-g600">
                Voor dit soort merken werkt de standaardaanpak niet. Dit is wat we anders doen.
              </p>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aanpak.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 0.07}>
                <div className="group flex h-full flex-col chamf chamf-lg border border-black/10 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(1,48,253,0.35)]">
                  <span className="grid h-12 w-12 place-items-center chamf-sm bg-blue/10 text-blue transition-colors duration-200 group-hover:bg-blue group-hover:text-white">
                    <Icon name={a.icon} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-extrabold leading-tight tracking-tight text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-2.5 text-[0.93rem] leading-relaxed text-g600">{a.body}</p>
                  {a.link && (
                    <Link
                      href={a.link.href}
                      className="group/l mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:underline"
                    >
                      {a.link.label}
                      <span className="transition-transform duration-150 group-hover/l:translate-x-0.5">→</span>
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ BEWIJS — RotorSwing ═══════════ */}
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
                  { text: "Technisch sterk." },
                  { text: "Nu ook zo te zien.", className: "text-blue-text" },
                ]}
              />
              <Reveal delay={0.1}>
                <div className="mt-6 inline-flex w-fit items-center gap-2.5 chamf-sm bg-blue px-4 py-2 shadow-[0_0_24px_-6px_rgba(1,48,253,0.9)]">
                  <span aria-hidden className="h-2 w-2 rounded-full bg-white" />
                  <span className="text-[0.82rem] font-semibold text-white">
                    In aanbouw - website binnenkort live
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-g300">
                  {rotorswing.challenge} We positioneren {rotorswing.client} als premium jachtmerk en
                  bouwen een adviestool die bezoekers naar de juiste stabilisator leidt - precies de
                  begeleiding die past bij een aankoop van dit kaliber.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-7 chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 p-6">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-blue-text">
                    De richting
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-g200">{rotorswing.direction}</p>
                  <p className="mt-4 border-t border-[var(--color-line)] pt-4 text-xs text-g500">
                    {rotorswing.sector}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.26}>
                <Link
                  href={rotorswing.href}
                  className="group mt-7 flex w-fit items-center gap-2 text-sm font-semibold text-blue-text hover:underline"
                >
                  Bekijk de case
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
                    {rotorswing.url}
                  </span>
                </div>
                <div className="relative aspect-[16/11] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-deep via-s2 to-s0" />
                  <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
                  <div className="pointer-events-none absolute -right-14 -top-16 h-52 w-52 rounded-full bg-blue/25 blur-[70px]" />
                  <div className="absolute inset-0 flex items-center justify-center p-10">
                    <Image
                      src={rotorswing.logo}
                      alt={rotorswing.client}
                      width={300}
                      height={110}
                      className="logo-white max-h-20 w-auto max-w-[70%] opacity-90 transition-transform duration-500 ease-[var(--ease-brand)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <span className="absolute bottom-3 left-3 chamf-sm bg-s0/70 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.08em] text-g100 backdrop-blur-sm">
                    {rotorswing.sector}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ MEER WERK · REVIEWS ═══════════ */}
      <CasesCarousel tone="light" heading={["Meer werk voor merken", "die op kwaliteit concurreren."]} />

      <Reviews tone="dark" />

      {/* ═══════════ INTERNATIONAAL ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>Over de grens</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Je koper zit niet altijd" }, { text: "in Nederland.", className: "text-g600" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                In jachtbouw, vastgoed en design komt een serieuze koper net zo vaak uit Duitsland,
                Engeland of verder. Een site die alleen Nederlands spreekt, sluit dat deel van je markt
                stilzwijgend uit - precies het deel met het grootste budget.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-g600">
                Wij werken in het Nederlands en Engels, en schakelen professionele vertalers in voor
                andere talen. Elke versie krijgt dezelfde structuur en dezelfde zorg - geen
                doorgedraaide machinevertaling waar je op afgerekend wordt.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="chamf chamf-lg border border-ink/10 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)] md:p-8">
              <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-blue">
                Hoe we dat doen
              </p>
              <div className="mt-5 space-y-4">
                {[
                  { k: "Nederlands en Engels", v: "Allebei door ons zelf geschreven, niet vertaald" },
                  { k: "Andere talen", v: "Via professionele vertalers, met dezelfde zorg" },
                  { k: "Per taal opgebouwd", v: "Elke taalversie krijgt een eigen, kloppende structuur" },
                ].map((row) => (
                  <div key={row.k} className="flex items-start gap-3.5">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center chamf-sm bg-blue/10 text-blue">
                      <Check size={12} />
                    </span>
                    <span>
                      <span className="block text-[0.95rem] font-bold text-ink">{row.k}</span>
                      <span className="mt-0.5 block text-sm leading-snug text-g600">{row.v}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ WAT WE BOUWEN ═══════════ */}
      <section className="on-light relative border-t border-ink/5 py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Wat we bouwen</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
                lines={[{ text: "Het merk voorop," }, { text: "de rest daaromheen.", className: "text-g600" }]}
              />
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                  Voor een premium merk begint het bij positionering en uitstraling. Vindbaarheid is
                  daarna belangrijk, maar het is hier het sluitstuk - niet het startpunt.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <div className="grid gap-3">
                {[
                  {
                    label: "Branding",
                    desc: "Het merk waarop je beoordeeld wordt - hier begint het",
                    href: "/diensten/branding",
                  },
                  {
                    label: "Website laten maken",
                    desc: "Het ontwerp en de techniek die je werk recht doen",
                    href: "/diensten/website-laten-maken",
                  },
                  {
                    label: "Conversie-optimalisatie",
                    desc: "Een route naar contact die past bij een overwogen aankoop",
                    href: "/diensten/conversie-optimalisatie",
                  },
                  {
                    label: "Lokale SEO",
                    desc: "Ondersteunend - voor als je markt ook regionaal is",
                    href: "/diensten/lokale-seo",
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

      {/* ═══════════ INVESTERING ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
        <Container className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-14">
          <div>
            <Reveal>
              <Eyebrow>Investering</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Wat kost een" }, { text: "premium website?", className: "text-g300" }]}
            />
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-g300">
                Een website begint bij ons <span className="font-semibold text-paper">vanaf €1.500</span>,
                maar voor dit soort merken ligt het traject doorgaans hoger: maatwerk begint rond de{" "}
                <span className="font-semibold text-paper">€5.000</span>. Dat komt door het merkwerk, het
                ontwerp op maat en vaak meertaligheid. Je krijgt altijd een eerlijke indicatie voordat
                we beginnen.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/website-kosten-calculator"
                  className="group inline-flex items-center justify-center gap-2.5 chamf-sm bg-blue px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_48px_-16px_rgba(1,48,253,0.85)] transition-colors duration-150 hover:bg-blue-press"
                >
                  Bereken je indicatie
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
                Benieuwd hoe we werken?{" "}
                <Link href="/werkwijze" className="font-semibold text-blue-text hover:underline">
                  Bekijk onze werkwijze
                </Link>{" "}
                of{" "}
                <Link href="/voor-wie/vakbedrijven" className="font-semibold text-blue-text hover:underline">
                  bekijk de aanpak voor vakbedrijven
                </Link>
                .
              </p>
            </Reveal>
          </div>

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
                Jij levert geen half werk. Wij ook niet. Zit het er nog niet in, dan werken we door
                zonder extra kosten tot het klopt - tot in het detail.
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
