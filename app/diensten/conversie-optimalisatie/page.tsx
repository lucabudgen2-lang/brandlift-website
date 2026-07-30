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
import { ConversieVergelijking } from "@/components/sections/ConversieVergelijking";
import { caseEykelenboom, reviews } from "@/lib/site";
import { serviceSchema } from "@/lib/schema";

const PATH = "/diensten/conversie-optimalisatie";
const UPDATED = "2026-07-17";

export const metadata: Metadata = {
  title: "Conversie-optimalisatie - meer aanvragen",
  description:
    "Conversie-optimalisatie die van bezoekers aanvragen maakt. We halen de twijfel uit je pagina's en maken de route naar contact vanzelfsprekend.",
  alternates: { canonical: PATH },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Diensten", path: "/diensten" },
  { name: "Conversie-optimalisatie", path: PATH },
];

const heroChips = ["Sinds 2021", "Conversie vanaf de fundering", "5,0 op Google", "Geen wachtlijst"];

/* ── het probleem: verspild verkeer ── */
const problemen = [
  {
    nr: "01",
    title: "Je betaalt voor bezoekers die weer weggaan",
    body: "Elke bezoeker kost je iets - aan advertenties, aan SEO of gewoon aan tijd. Wie afhaakt zonder contact op te nemen, is dat volledig kwijt.",
    gevolg: "Je verkeer levert niets op",
  },
  {
    nr: "02",
    title: "Meer bezoekers lost het niet op",
    body: "Als van de honderd bezoekers niemand belt, verandert tweehonderd bezoekers daar weinig aan. Je verdubbelt dan vooral je kosten.",
    gevolg: "Groeien wordt onnodig duur",
  },
  {
    nr: "03",
    title: "Je site is bekeken, niet overtuigend",
    body: "Mooi ontworpen, maar zonder heldere belofte, zichtbaar bewijs of duidelijke volgende stap. De bezoeker weet niet wat hij moet doen - dus doet hij niets.",
    gevolg: "Twijfel wint van actie",
  },
  {
    nr: "04",
    title: "Je weet niet waar het misgaat",
    body: "Zonder meting is elke aanpassing een gok. Je hoort wel dat er weinig aanvragen zijn, maar niet op welke pagina de bezoeker afhaakt.",
    gevolg: "Verbeteren op onderbuikgevoel",
  },
];

/* ── de aanpak ── */
const aanpak = [
  {
    icon: "message",
    title: "Heldere boodschap",
    body: "Binnen een paar seconden duidelijk wat je doet, voor wie en waarom jij. Geen 'welkom op onze website', maar een belofte die klopt met wat je klant zoekt.",
  },
  {
    icon: "shield",
    title: "Bewijs en vertrouwen",
    body: "Reviews, echt werk en concrete resultaten - precies op de plek waar de twijfel ontstaat. Vertrouwen is de grootste conversiehefboom die er is.",
  },
  {
    icon: "route",
    title: "Route naar contact",
    body: "Eén duidelijke actie die overal binnen handbereik is, met een formulier dat niet meer vraagt dan nodig. Twijfel je tussen bellen en mailen, dan bieden we beide.",
  },
  {
    icon: "layers",
    title: "Scanbaarheid en structuur",
    body: "Mensen lezen niet, ze scannen. Korte blokken, duidelijke koppen en een logische volgorde zorgen dat de boodschap ook binnenkomt bij wie haast heeft.",
  },
  {
    icon: "bolt",
    title: "Snelheid en mobiel",
    body: "De meeste bezoekers komen op hun telefoon, vaak onderweg. Een trage of krappe mobiele weergave kost je aanvragen voordat je iets hebt kunnen zeggen.",
  },
  {
    icon: "chart",
    title: "Meten en verbeteren",
    body: "We maken meetbaar wat er gebeurt, zodat je ziet welke pagina's aanvragen opleveren en waar bezoekers afhaken. Verbeteren op cijfers, niet op smaak.",
  },
];

const faqs = [
  {
    q: "Wat is conversie-optimalisatie precies?",
    a: "Conversie-optimalisatie is het verbeteren van je website zodat een groter deel van je bezoekers de stap naar contact zet. Voor een vakbedrijf is die conversie meestal een offerteaanvraag, een contactformulier of een telefoontje - niet een online aankoop. Het draait om een heldere boodschap, zichtbaar bewijs, een duidelijke route naar contact en een site die snel en scanbaar is.",
  },
  {
    q: "Wat is een goed conversiepercentage?",
    a: "Dat verschilt sterk per branche, per type dienst en per soort verkeer, en wij noemen daarom bewust geen universeel getal - iedereen die dat wel doet, gokt. Wat je wel kunt doen is jezelf met jezelf vergelijken: we maken je huidige situatie meetbaar en kijken vanaf daar wat de verbeteringen opleveren.",
  },
  {
    q: "Zit conversie al in een nieuwe website van Brandlift?",
    a: "Ja. We bouwen conversie vanaf de fundering in: de structuur, de teksten, de plaatsing van bewijs en de route naar contact zijn onderdeel van elk websiteproject. Je hoeft conversie-optimalisatie er dus niet achteraf bij te kopen.",
    link: { label: "Meer over website laten maken", href: "/diensten/website-laten-maken" },
  },
  {
    q: "Kunnen jullie mijn bestaande website optimaliseren?",
    a: "Zeker. We kijken eerst waar bezoekers afhaken en wat er structureel mist. Soms is dat met gerichte aanpassingen op te lossen; soms zit het probleem zo diep in de structuur dat een herbouw voordeliger is. Je krijgt daar een eerlijk advies over - ook als dat betekent dat je bij je huidige site blijft.",
  },
  {
    q: "Hoe snel zie ik resultaat?",
    a: "Verbeteringen aan je boodschap, bewijs en route naar contact werken direct: elke bezoeker die daarna komt, krijgt de betere versie te zien. Hoe snel dat zichtbaar wordt in je aantallen hangt af van hoeveel verkeer je hebt - bij weinig bezoekers duurt het simpelweg langer voordat een verschil betrouwbaar te zien is.",
  },
  {
    q: "Hoe meten jullie of het werkt?",
    a: "We maken meetbaar wat er op je site gebeurt: welke pagina's bezoekers binnenhalen, waar ze afhaken en welke pagina's aanvragen opleveren. Zo weet je waar de winst zit en of een aanpassing daadwerkelijk iets doet.",
  },
  {
    q: "Verandert mijn huisstijl door conversie-optimalisatie?",
    a: "Niet noodzakelijk. Conversie en uitstraling bijten elkaar niet - een site kan tegelijk mooi en overtuigend zijn. Blijkt je uitstraling wel het probleem, bijvoorbeeld omdat je online kleiner oogt dan je bent, dan pakken we dat via branding aan.",
    link: { label: "Meer over branding", href: "/diensten/branding" },
  },
  {
    q: "Garanderen jullie meer aanvragen?",
    a: "Nee, en wees voorzichtig met partijen die dat wel doen: hoeveel aanvragen je krijgt hangt ook af van je markt, je prijzen en je verkeer. Wat we wel doen is de dingen bouwen die aantoonbaar het verschil maken, eerlijk zijn over wat realistisch is, en doorwerken totdat je tevreden bent over het resultaat.",
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
    case "message":
      return (
        <svg {...c}>
          <path d="M21 12a8 8 0 0 1-8 8H7l-4 3v-5.5A8 8 0 0 1 11 4h2a8 8 0 0 1 8 8z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...c}>
          <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
          <path d="m9 12 2 2 4-4" />
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
    case "bolt":
      return (
        <svg {...c}>
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
      );
    case "chart":
      return (
        <svg {...c}>
          <path d="M3 17l6-6 4 4 7-7" />
          <path d="M17 8h4v4" />
        </svg>
      );
    default:
      return (
        <svg {...c}>
          <path d="M12 3 3 8l9 5 9-5-9-5z" />
          <path d="m3 13 9 5 9-5" />
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
    name: "Conversie-optimalisatie",
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
                <Eyebrow>Diensten · Conversie-optimalisatie</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-5 font-display text-[2.1rem] font-extrabold leading-[1.04] tracking-tight text-paper sm:text-5xl lg:text-[3.1rem]">
                  Conversie-optimalisatie: meer aanvragen uit dezelfde bezoekers
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g200">
                  Je hebt niet per se meer bezoekers nodig. Je moet meer halen uit de bezoekers die er
                  al zijn. Wij bouwen websites die niet alleen bekeken worden, maar die de stap naar
                  contact ook echt makkelijk maken.
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
                    Bekijk wat het opleverde
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

            {/* de echte site + resultaatbadge */}
            <Reveal delay={0.12}>
              <div className="relative">
                <div className="animate-glow pointer-events-none absolute -inset-6 -z-10 rounded-full bg-blue/15 blur-[80px]" />
                <div className="overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 shadow-[0_44px_100px_-45px_rgba(0,0,0,0.8)]">
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
                      alt="Conversiegerichte website die Brandlift bouwde voor Hovenier Eykelenboom"
                      fill
                      priority
                      sizes="(max-width: 1024px) 92vw, 46vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-blue-deep/15 mix-blend-multiply" />
                  </div>
                </div>
                <div className="absolute -bottom-5 -left-4 chamf-sm bg-blue px-5 py-3 shadow-[0_16px_40px_-12px_rgba(1,48,253,0.7)]">
                  <div className="text-[0.55rem] font-semibold uppercase tracking-[0.08em] text-white/70">
                    Resultaat voor een klant
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

      {/* ═══════════ DEFINITIE (AEO) ═══════════ */}
      <section className="on-light relative py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.85fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>In het kort</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.6rem]"
              lines={[
                { text: "Wat is conversie-optimalisatie" },
                { text: "en wat levert het op?", className: "text-g600" },
              ]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                Conversie optimalisatie (ook wel CRO of conversie-optimalisatie) is het verbeteren van je
                website zodat een groter deel van je bezoekers de stap naar contact zet. Je verandert
                niets aan hoeveel mensen er komen - je zorgt dat er meer van hen iets doen.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-g600">
                Voor een vakbedrijf is een conversie zelden een online aankoop. Het is een
                offerteaanvraag, een ingevuld contactformulier of een telefoontje. Precies die stappen
                maken wij zo makkelijk en logisch mogelijk - vanaf de{" "}
                <Link href="/diensten/website-laten-maken" className="font-semibold text-blue hover:underline">
                  eerste opzet van de website
                </Link>
                .
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="chamf chamf-lg border border-ink/10 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)] md:p-8">
              <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-blue">
                Wat telt als conversie
              </p>
              <div className="mt-5 space-y-3">
                {[
                  "Een ingevuld contact- of offerteformulier",
                  "Een telefoontje vanaf je website",
                  "Een WhatsApp- of mailbericht",
                  "Een ingeplande afspraak",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center chamf-sm bg-blue/10 text-blue">
                      <Check size={12} />
                    </span>
                    <span className="text-[0.95rem] leading-snug text-g800">{t}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 border-t border-ink/10 pt-5 text-sm leading-relaxed text-g600">
                Alles wat daarvoor nodig is - duidelijkheid, vertrouwen en een makkelijke route - is
                waar conversie-optimalisatie over gaat.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ PROBLEEM ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-blue/12 blur-[150px]" />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <div>
              <Reveal>
                <Eyebrow>Waar het geld weglekt</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.9rem]"
                lines={[
                  { text: "Verkeer kost geld." },
                  { text: "Niet converteren kost meer.", className: "text-blue-text" },
                ]}
              />
            </div>
            <Reveal delay={0.12}>
              <p className="max-w-md text-lg leading-relaxed text-g300 lg:justify-self-end">
                De meeste bedrijven investeren in méér bezoekers, terwijl de grootste winst zit bij de
                mensen die al op de site staan.
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
              <p className="text-lg font-semibold italic text-g200">
                Herkenbaar? Dan zit je grootste winst in wat je al hebt.
              </p>
              <Button href="/contact" variant="primary" className="group">
                Plan een gratis groeigesprek
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ SIGNATURE: voor/na ═══════════ */}
      <ConversieVergelijking />

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
              lines={[{ text: "Zes dingen die bepalen" }, { text: "of iemand contact opneemt.", className: "text-g600" }]}
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-g600">
                Geen trucjes of knipperende knoppen. Gewoon de dingen die aantoonbaar het verschil maken
                tussen kijken en contact opnemen.
              </p>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aanpak.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 0.07}>
                <div className="group h-full chamf chamf-lg border border-black/10 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(1,48,253,0.35)]">
                  <span className="grid h-12 w-12 place-items-center chamf-sm bg-blue/10 text-blue transition-colors duration-200 group-hover:bg-blue group-hover:text-white">
                    <Icon name={a.icon} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-extrabold leading-tight tracking-tight text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-2.5 text-[0.93rem] leading-relaxed text-g600">{a.body}</p>
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
                  { text: "Van bekeken worden" },
                  { text: "naar gebeld worden.", className: "text-blue-text" },
                ]}
              />
              <Reveal delay={0.14}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-g300">
                  Voor Hovenier Eykelenboom bouwden we de site opnieuw op rond de vraag van de klant: een
                  heldere belofte bovenaan, per dienst en werkgebied een eigen pagina, zichtbaar bewijs
                  van het werk en een offerteaanvraag die altijd binnen handbereik is. Bezoekers hoeven
                  niet meer te zoeken wat ze moeten doen.
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
      <CasesCarousel tone="light" heading={["Meer werk voor bedrijven", "die meer uit hun website wilden halen."]} />

      <Reviews tone="dark" />

      {/* ═══════════ WAT HET OPLEVERT ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Wat het oplevert</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Geen extra budget." }, { text: "Wel meer aanvragen.", className: "text-g600" }]}
            />
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Je haalt meer uit hetzelfde verkeer",
                body: "Dezelfde bezoekers, dezelfde advertentiekosten - alleen zetten er meer de stap naar contact. Dat is de goedkoopste groei die er is.",
              },
              {
                title: "Elke verbetering blijft renderen",
                body: "Een advertentie stopt zodra je stopt met betalen. Een betere website blijft elke dag beter presteren, ook over een jaar.",
              },
              {
                title: "Je weet waar de winst zit",
                body: "Omdat we meetbaar maken wat er gebeurt, zie je welke pagina's aanvragen opleveren - en waar nog ruimte zit.",
              },
            ].map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden chamf border border-black/10 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(1,48,253,0.35)]">
                  <span
                    aria-hidden
                    className="text-stroke-dark pointer-events-none absolute right-5 top-4 font-display text-4xl font-extrabold leading-none opacity-20 transition-opacity duration-300 group-hover:opacity-40"
                  >
                    0{i + 1}
                  </span>
                  <h3 className="pr-12 text-lg font-bold leading-snug text-ink">{b.title}</h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-g600">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ HOE DIT SAMENHANGT ═══════════ */}
      <section className="on-light relative border-t border-ink/5 py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Hoe dit samenhangt</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
                lines={[{ text: "Conversie staat nooit" }, { text: "op zichzelf.", className: "text-g600" }]}
              />
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                  Vindbaarheid brengt de bezoeker binnen, je uitstraling zorgt dat hij je serieus neemt en
                  conversie zorgt dat hij ook echt contact opneemt. Wij bouwen die drie in samenhang -
                  daarom zit conversie bij ons standaard in elk websiteproject.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <div className="grid gap-3">
                {[
                  {
                    label: "Website laten maken",
                    desc: "Het fundament waarin conversie vanaf dag één zit",
                    href: "/diensten/website-laten-maken",
                  },
                  {
                    label: "Lokale SEO",
                    desc: "Zorgt dat er überhaupt bezoekers zijn om te overtuigen",
                    href: "/diensten/lokale-seo",
                  },
                  {
                    label: "Branding",
                    desc: "Zorgt dat je serieus wordt genomen zodra ze binnen zijn",
                    href: "/diensten/branding",
                  },
                  {
                    label: "Voor vakbedrijven",
                    desc: "Hoveniers, schilders, aannemers en installateurs",
                    href: "/voor-wie/vakbedrijven",
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
              lines={[{ text: "Wat kost conversie-" }, { text: "optimalisatie?", className: "text-g300" }]}
            />
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-g300">
                Bij een nieuwe website kost het je niets extra: conversie zit standaard in elk
                websiteproject, <span className="font-semibold text-paper">vanaf €1.500</span>. Wil je
                een bestaande site laten optimaliseren, dan hangt de prijs af van wat er nodig is - soms
                zijn dat gerichte aanpassingen, soms is een herbouw voordeliger. Je krijgt daar een
                eerlijk advies over in het groeigesprek.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/website-kosten-calculator"
                  className="group inline-flex items-center justify-center gap-2.5 chamf-sm border border-[var(--color-line-strong)] bg-s1 px-6 py-3.5 text-sm font-semibold text-g100 transition-colors duration-150 hover:border-blue hover:bg-blue hover:text-white"
                >
                  Bereken je website-indicatie
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
                Benieuwd hoe we te werk gaan?{" "}
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
                Zit het resultaat er nog niet in, dan werken we door - zonder extra kosten - tot het wel
                klopt. Wat we niet doen: beloven hoeveel aanvragen je krijgt. Dat bepaalt je markt mee.
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
