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
import { MerkSysteem } from "@/components/sections/MerkSysteem";
import { caseEykelenboom, reviews } from "@/lib/site";
import { serviceSchema } from "@/lib/schema";

const PATH = "/diensten/branding";
const UPDATED = "2026-07-17";

export const metadata: Metadata = {
  title: "Branding en huisstijl die vertrouwen wekken",
  description:
    "Branding en huisstijl die passen bij de kwaliteit die je levert. Positionering, logo, kleur en beeldtaal, doorgevoerd tot in je website.",
  alternates: { canonical: PATH },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Diensten", path: "/diensten" },
  { name: "Branding", path: PATH },
];

const heroChips = ["Sinds 2021", "Merkgids inbegrepen", "5,0 op Google", "Geen wachtlijst"];

/* ── waarom sterke bedrijven online klein lijken ── */
const problemen = [
  {
    nr: "01",
    title: "Je logo is ooit snel gemaakt",
    body: "Een logo dat er op een busje anders uitziet dan op je offerte, of dat niet leesbaar is op een telefoon. Het werkt niet tegen je, maar het werkt ook nergens voor je.",
    gevolg: "Niemand onthoudt je",
  },
  {
    nr: "02",
    title: "Elk document ziet er anders uit",
    body: "Een andere kleur op de website dan op de factuur, drie verschillende lettertypes en foto's in wisselende stijl. Los is het niet erg - samen oogt het rommelig.",
    gevolg: "Je oogt kleiner dan je bent",
  },
  {
    nr: "03",
    title: "Je uitstraling past niet bij je prijs",
    body: "Je levert het betere werk en rekent daar terecht meer voor. Maar online zie je er hetzelfde uit als de goedkoopste aanbieder in je regio.",
    gevolg: "Je moet je prijs verdedigen",
  },
  {
    nr: "04",
    title: "Het merk stopt bij het logo",
    body: "Er is ooit een logo opgeleverd, maar niemand legde vast hoe je het gebruikt. Elke nieuwe uiting is weer opnieuw beginnen.",
    gevolg: "Elke uiting kost weer tijd",
  },
];

/* ── wat je krijgt ── */
const deliverables = [
  {
    icon: "target",
    title: "Merkstrategie en positionering",
    body: "We bepalen waarom een klant voor jou kiest en hoe je dat consequent uitdraagt. Dat is de basis waar elke ontwerpkeuze uit volgt.",
  },
  {
    icon: "gem",
    title: "Logo en beeldmerk",
    body: "Een logo laten maken dat je vak uitdraagt en overal werkt: op je bedrijfswagen, je drukwerk en een klein telefoonscherm. Je krijgt alle bestanden.",
  },
  {
    icon: "palette",
    title: "Kleur en typografie",
    body: "Een vast palet en vaste letters, gekozen op leesbaarheid en op de markt waarin je werkt. Zo is alles wat je maakt meteen herkenbaar van jou.",
  },
  {
    icon: "book",
    title: "Merkgids",
    body: "Een document waarin staat hoe je het merk gebruikt: kleuren, letters, logogebruik en beeldtaal. Ook bruikbaar als iemand anders er later mee werkt.",
  },
  {
    icon: "camera",
    title: "Beeldtaal",
    body: "Afspraken over hoe je foto's eruitzien. We hebben zelf een achtergrond in fotografie, dus we denken mee over wat je laat zien en hoe.",
  },
  {
    icon: "layers",
    title: "Doorvertaling naar je website",
    body: "Het merk landt pas echt als het in je website zit. Wij bouwen die zelf, dus er gaat niets verloren tussen ontwerp en oplevering.",
  },
];

const faqs = [
  {
    q: "Wat kost een huisstijl laten maken?",
    a: "Branding doen we meestal als onderdeel van een websiteproject, dat begint vanaf 1.500 euro. Wat de branding daarin kost hangt af van hoe ver je wilt gaan: alleen een logo en kleurpalet, of een compleet merk met merkgids en beeldtaal. Een los huisstijltraject zonder website kan ook. In een gratis groeigesprek geven we een eerlijke indicatie voor jouw situatie.",
    link: { label: "Lees wat een website kost", href: "/kennisbank/wat-kost-een-website-laten-maken" },
  },
  {
    q: "Hoe lang duurt een brandingtraject?",
    a: "Als de branding onderdeel is van je website, loopt het mee in dezelfde doorlooptijd - meestal 3 tot 4 weken. Een los merktraject is korter. In het groeigesprek koppelen we een concrete planning aan jouw project.",
  },
  {
    q: "Krijg ik de bestanden en ben ik eigenaar van mijn logo?",
    a: "Ja. Je krijgt alle bestanden in de formaten die je nodig hebt - voor druk, voor web en voor je bedrijfswagen - en je bent en blijft eigenaar van je merk. Je zit nergens aan vast en kunt er altijd zelf mee verder.",
  },
  {
    q: "Kunnen jullie mijn bestaande logo behouden?",
    a: "Zeker. Soms is een logo prima en ontbreekt alleen de rest: kleuren, letters, beeldtaal en afspraken over gebruik. Dan bouwen we daaromheen. Werkt het logo je tegen, dan zeggen we dat eerlijk - maar we vervangen nooit iets alleen om iets te vervangen.",
  },
  {
    q: "Wat zit er precies in een merkgids?",
    a: "Een merkgids legt vast hoe je merk werkt: het logo en hoe je het wel en niet gebruikt, je kleurcodes, je lettertypes met hun toepassing, en richtlijnen voor beeldtaal. Daardoor blijft je merk consistent, ook als je later met een drukker of een andere partij werkt.",
  },
  {
    q: "Doen jullie ook alleen een logo?",
    a: "Dat kan, maar we raden het zelden aan. Een logo zonder kleurpalet, typografie en toepassing lost het echte probleem niet op: dat je merk overal net iets anders oogt. Voor hetzelfde traject leveren we liever een merk dat compleet klopt.",
  },
  {
    q: "Kan ik branding afnemen zonder website?",
    a: "Ja. We werken vooral aan merken die daarna in een website landen - daar komt het sterkste resultaat uit - maar een los huisstijltraject is mogelijk. Vertel in het groeigesprek wat je van plan bent, dan zeggen we eerlijk wat in jouw geval het meeste oplevert.",
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
    case "target":
      return (
        <svg {...c}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      );
    case "gem":
      return (
        <svg {...c}>
          <path d="M6 3h12l3 5-9 13L3 8l3-5z" />
          <path d="M3 8h18M9 3l3 5 3-5M12 8l0 13" />
        </svg>
      );
    case "palette":
      return (
        <svg {...c}>
          <path d="M12 3a9 9 0 1 0 0 18c1 0 1.7-.8 1.7-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.1 0-.9.8-1.7 1.7-1.7H16a5 5 0 0 0 5-5c0-4-4-7.3-9-7.3z" />
          <circle cx="7.5" cy="11" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="11" cy="7.5" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="15.5" cy="9" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "book":
      return (
        <svg {...c}>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z" />
          <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5A2.5 2.5 0 0 1 4 20.5z" />
        </svg>
      );
    case "camera":
      return (
        <svg {...c}>
          <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h1.8l1.2-2h6.9l1.2 2h1.9A2.5 2.5 0 0 1 21 8.5v9A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z" />
          <circle cx="12" cy="12.5" r="3.4" />
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
    name: "Branding",
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
                <Eyebrow>Diensten · Branding</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-5 font-display text-[2.1rem] font-extrabold leading-[1.04] tracking-tight text-paper sm:text-5xl lg:text-[3.2rem]">
                  Branding die je bedrijf herkenbaar en geloofwaardig maakt
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g200">
                  Online lijken goede bedrijven vaak kleiner dan ze zijn. Wij vertalen de kwaliteit van
                  je werk naar een merk dat klopt - logo, kleur, typografie en merkgids - en zetten dat
                  door in een website die klanten oplevert.
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
                    Bekijk een merk dat we bouwden
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

            {/* de echte merkgids als hero-visual */}
            <Reveal delay={0.12}>
              <div className="relative mx-auto w-full max-w-[520px]">
                <div className="animate-glow pointer-events-none absolute -inset-6 -z-10 rounded-full bg-blue/15 blur-[80px]" />
                <div className="relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] shadow-[0_44px_100px_-45px_rgba(0,0,0,0.8)]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/brandbook-only.jpg"
                      alt="De merkgids die Brandlift ontwierp voor Hovenier Eykelenboom, in diepgroen en goud"
                      fill
                      priority
                      sizes="(max-width: 1024px) 92vw, 46vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-blue-deep/15 mix-blend-multiply" />
                  </div>
                  <span className="absolute left-4 top-4 chamf-sm bg-s0/70 px-3 py-1.5 text-xs font-medium italic text-g100 backdrop-blur-sm">
                    Uit ons echte werk
                  </span>
                  <div className="absolute inset-x-4 bottom-4">
                    <span className="block font-display text-sm font-extrabold tracking-tight text-paper">
                      Hovenier Eykelenboom
                    </span>
                    <span className="block text-xs text-g300">Merkgids en volledige rebranding</span>
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
              lines={[{ text: "Wat is branding" }, { text: "en wat levert het op?", className: "text-g600" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                Branding is het geheel van keuzes dat bepaalt hoe je bedrijf overkomt: je positionering
                en je visuele identiteit - logo, kleuren, typografie en beeldtaal. Goed gedaan zorgt die
                merkidentiteit ervoor dat je herkenbaar bent, betrouwbaar oogt en niet op prijs hoeft te
                concurreren.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-g600">
                Voor ons is branding geen kunst maar een vertrouwenslaag. Het is het verschil tussen een
                bezoeker die twijfelt en een bezoeker die contact opneemt - en daarom staat het bij ons
                nooit los van de{" "}
                <Link href="/diensten/website-laten-maken" className="font-semibold text-blue hover:underline">
                  website waarin het moet landen
                </Link>
                .
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="chamf chamf-lg border border-ink/10 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)] md:p-8">
              <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-blue">
                Van uitstraling naar aanvragen
              </p>
              <div className="mt-5 space-y-4">
                {[
                  { k: "Herkenbaar", v: "Klanten weten meteen dat jij het bent - op elk kanaal" },
                  { k: "Geloofwaardig", v: "Je oogt zoals je werkt: verzorgd en vakkundig" },
                  { k: "Overtuigend", v: "Twijfel verdwijnt, de stap naar contact wordt kleiner" },
                ].map((row, i) => (
                  <div key={row.k} className="flex items-start gap-3.5">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center chamf-sm bg-blue/10 font-display text-[0.7rem] font-extrabold text-blue">
                      {i + 1}
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

      {/* ═══════════ PROBLEEM ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-blue/12 blur-[150px]" />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <div>
              <Reveal>
                <Eyebrow>Waar het misgaat</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.9rem]"
                lines={[
                  { text: "Je werk is top." },
                  { text: "Online oogt het middelmatig.", className: "text-blue-text" },
                ]}
              />
            </div>
            <Reveal delay={0.12}>
              <p className="max-w-md text-lg leading-relaxed text-g300 lg:justify-self-end">
                Bijna nooit ligt het aan het vakmanschap. Het zijn deze vier dingen die ervoor zorgen dat
                een sterk bedrijf online kleiner lijkt dan het is.
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
              <p className="text-lg font-semibold italic text-g200">Herkenbaar? Dan valt er veel te winnen.</p>
              <Button href="/contact" variant="primary" className="group">
                Plan een gratis groeigesprek
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ SIGNATURE: het merksysteem ═══════════ */}
      <MerkSysteem />

      {/* ═══════════ WAT JE KRIJGT ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Wat je krijgt</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Een compleet merk." }, { text: "Niet alleen een logo.", className: "text-g600" }]}
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-g600">
                Alles wat nodig is om overal hetzelfde over te komen - en om er zelf mee verder te kunnen.
              </p>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 0.07}>
                <div className="group h-full chamf chamf-lg border border-black/10 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(1,48,253,0.35)]">
                  <span className="grid h-12 w-12 place-items-center chamf-sm bg-blue/10 text-blue transition-colors duration-200 group-hover:bg-blue group-hover:text-white">
                    <Icon name={d.icon} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-extrabold leading-tight tracking-tight text-ink">
                    {d.title}
                  </h3>
                  <p className="mt-2.5 text-[0.93rem] leading-relaxed text-g600">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ BEWIJS — Eykelenboom ═══════════ */}
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
                  { text: "Van naamloos vakwerk" },
                  { text: "naar een merk dat staat.", className: "text-blue-text" },
                ]}
              />
              <Reveal delay={0.14}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-g300">
                  Voor Hovenier Eykelenboom in Den Haag maakten we een volledige rebranding: een eikel met
                  een boom erin als beeldmerk, een palet van diepgroen en goud, een vaste typografie en
                  een merkgids waarin alles is vastgelegd. Daarna zetten we dat merk door in de complete
                  website.
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
                  Resultaat van het complete traject - rebranding, website en lokale SEO samen.
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
              <div className="grid gap-4">
                <div className="group relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] shadow-[0_44px_100px_-45px_rgba(0,0,0,0.8)]">
                  <div className="relative aspect-[16/11]">
                    <Image
                      src="/images/brandbook-only.jpg"
                      alt="Merkgids van Hovenier Eykelenboom met het eikel-beeldmerk in diepgroen en goud"
                      fill
                      sizes="(max-width: 1024px) 92vw, 48vw"
                      className="object-cover object-center transition-transform duration-500 ease-[var(--ease-brand)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <span className="absolute bottom-3 left-3 chamf-sm bg-s0/70 px-2.5 py-1 font-semibold text-[0.58rem] uppercase tracking-[0.08em] text-g100 backdrop-blur-sm">
                    De merkgids
                  </span>
                </div>
                <div className="group overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 shadow-[0_34px_70px_-32px_rgba(0,0,0,0.7)]">
                  <div className="flex items-center gap-2 border-b border-[var(--color-line)] bg-s2/60 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="ml-2 flex-1 truncate chamf-sm bg-white/[0.04] px-3 py-1 font-semibold text-[0.62rem] tracking-[0.08em] text-g500">
                      {caseEykelenboom.url}
                    </span>
                  </div>
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={caseEykelenboom.image}
                      alt="Het merk van Hovenier Eykelenboom doorvertaald naar de website"
                      fill
                      sizes="(max-width: 1024px) 92vw, 48vw"
                      className="object-cover object-center transition-transform duration-500 ease-[var(--ease-brand)] group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-blue-deep/15 mix-blend-multiply" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ MEER WERK · REVIEWS ═══════════ */}
      <CasesCarousel tone="light" heading={["Meer werk voor bedrijven", "die serieus genomen willen worden."]} />

      <Reviews tone="dark" />

      {/* ═══════════ VAN MERK NAAR WEBSITE ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Van merk naar website</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
                lines={[
                  { text: "Een merk betaalt zich pas terug" },
                  { text: "als het ergens landt.", className: "text-g600" },
                ]}
              />
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                  Een merkgids in een la verandert niets. Het verschil ontstaat als je merk consequent
                  terugkomt op de plek waar klanten je beoordelen: je website. Omdat wij die zelf
                  ontwerpen en bouwen, gaat er niets verloren tussen ontwerp en oplevering - en zorgen we
                  dat het merk ook meehelpt om gevonden te worden.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <div className="grid gap-3">
                {[
                  {
                    label: "Website laten maken",
                    desc: "Het merk doorvertaald naar een site die aanvragen oplevert",
                    href: "/diensten/website-laten-maken",
                  },
                  {
                    label: "Lokale SEO",
                    desc: "Gevonden worden door klanten in je eigen regio",
                    href: "/diensten/lokale-seo",
                  },
                  {
                    label: "Conversie-optimalisatie",
                    desc: "Meer aanvragen uit dezelfde bezoekers",
                    href: "/diensten/conversie-optimalisatie",
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
              lines={[{ text: "Wat kost een huisstijl" }, { text: "laten maken?", className: "text-g300" }]}
            />
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-g300">
                Meestal doen we branding als onderdeel van een websiteproject - dat begint{" "}
                <span className="font-semibold text-paper">vanaf €1.500</span>. Wat de branding daarin
                kost hangt af van hoe ver je wilt gaan: alleen een logo en kleurpalet, of een compleet
                merk met merkgids en beeldtaal. Een los huisstijltraject kan ook. Je krijgt altijd een
                eerlijke indicatie voordat we beginnen.
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
                  href="/werkwijze"
                  className="group inline-flex items-center justify-center gap-2 chamf-sm border border-[var(--color-line-strong)] px-6 py-3.5 text-sm font-semibold text-g100 transition-colors duration-150 hover:border-blue hover:text-blue-text"
                >
                  Bekijk onze werkwijze
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
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
                Een merk moet kloppen - voor jou, en voor je klanten. Zit het er nog niet in, dan werken
                we door zonder extra kosten tot het wel klopt.
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
