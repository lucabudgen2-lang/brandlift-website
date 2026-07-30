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
import { WerkwijzeTijdlijn } from "@/components/sections/WerkwijzeTijdlijn";
import { methode, reviews, site } from "@/lib/site";
import { serviceSchema } from "@/lib/schema";

const PATH = "/werkwijze";
const UPDATED = "2026-07-17";

export const metadata: Metadata = {
  title: "Onze werkwijze: van gesprek tot livegang",
  description:
    "Zo verloopt een project bij Brandlift: vijf fases, meestal drie tot vier weken, en weinig werk voor jou. Bekijk stap voor stap wat we doen.",
  alternates: { canonical: PATH },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Werkwijze", path: PATH },
];

const heroChips = ["Meestal 3 tot 4 weken", "Geen wachtlijst", "Eén vast aanspreekpunt", "Sinds 2021"];

/* ── de vijf fases, in detail ── */
const fases = [
  {
    n: "01",
    title: "Groeigesprek en strategie",
    lead: "Eerst begrijpen we je bedrijf. Pas daarna praten we over een website.",
    body: "We beginnen met een gesprek van een half uur. Geen salespitch en geen presentatie - we willen weten wat je doet, wie je klanten zijn en waar je vandaag klanten misloopt. Daarna doen we het onderzoek: wie zijn je concurrenten online, waar zoekt jouw klant echt op, en welke positie kun jij pakken. Dat vertalen we naar een sitemap en een paginastructuur die we met je doornemen voordat er iets wordt ontworpen.",
    krijg: [
      "Een helder beeld van je online concurrentie",
      "Positionering: waarom jij en niet de buurman",
      "Een sitemap en paginastructuur op zoekintentie",
    ],
    rol: "Eén gesprek van een half uur",
  },
  {
    n: "02",
    title: "Ontwerp en merk",
    lead: "Je uitstraling gaat passen bij de kwaliteit die je levert.",
    body: "We ontwerpen de belangrijkste pagina's op basis van de structuur uit fase 1. Waar je merk je tegenwerkt, scherpen we het aan: kleur, typografie en beeldtaal. Heb je al een huisstijl die staat, dan bouwen we daarbinnen. Tegelijk schrijven we de teksten - niet als opvulling achteraf, maar als onderdeel van het ontwerp, geschreven op wat je klant intikt bij Google.",
    krijg: [
      "Ontwerp van de belangrijkste pagina's",
      "Merk aangescherpt waar dat nodig is",
      "Teksten geschreven op zoekintentie",
    ],
    rol: "Beeld aanleveren en één feedbackronde",
    link: { label: "Meer over branding", href: "/diensten/branding" },
  },
  {
    n: "03",
    title: "Bouw en techniek",
    lead: "De week waarin jij niets hoeft te doen.",
    body: "Wij bouwen. Snel, modern en mobiel-first, met een custom CMS als je zelf dingen wilt kunnen aanpassen. Onder de motorkap richten we de techniek in die zoekmachines nodig hebben: schema, laadsnelheid, nette URL's en formulieren die het ook echt doen. Elke pagina wordt regel voor regel nagekeken voordat we hem aan je laten zien.",
    krijg: [
      "Een snelle, moderne site die op mobiel net zo goed werkt",
      "Techniek en schema goed ingericht",
      "Formulieren die getest zijn, niet aangenomen",
    ],
    rol: "Niets, tenzij we iets bij je opvragen",
    link: { label: "Meer over de bouw", href: "/diensten/website-laten-maken" },
  },
  {
    n: "04",
    title: "Livegang en lokale SEO",
    lead: "Live gaan is geen eindpunt. Het is het moment dat je gevonden moet worden.",
    body: "Voor de livegang doen we een laatste controle op snelheid, mobiel en alle formulieren. Dan zetten we domein en hosting live. Meteen daarna richten we de lokale basis in: je Google Bedrijfsprofiel, de schema-markering en de vermeldingen die Google gebruikt om te bepalen of je bestaat. We laten je ook zien hoe je zelf kleine dingen aanpast, zodat je voor elke tekstwijziging niet hoeft te bellen.",
    krijg: [
      "Een geteste, live website op je eigen domein",
      "Google Bedrijfsprofiel, schema en vermeldingen ingericht",
      "Uitleg zodat je zelf kleine aanpassingen kunt doen",
    ],
    rol: "Akkoord geven op de laatste versie",
    link: { label: "Meer over lokale SEO", href: "/diensten/lokale-seo" },
  },
  {
    n: "05",
    title: "Groei en onderhoud",
    lead: "Wat er daarna gebeurt, bepaal je zelf.",
    body: "Een website is nooit af, maar je zit bij ons nergens aan vast. Wil je doorgroeien, dan breiden we uit met extra pagina's, content, advertenties of verdere optimalisatie. Wil je alleen dat het blijft draaien, dan neem je hosting en onderhoud bij ons af. En wil je het vanaf hier zelf doen, dan is dat ook goed - de site is van jou.",
    krijg: [
      "Uitbreiden met content, pagina's of advertenties",
      "Hosting en onderhoud als je dat wilt",
      "Geen verplichte doorloop of langlopend contract",
    ],
    rol: "Zelf bepalen of en hoe je doorgroeit",
    link: { label: "Meer over conversie-optimalisatie", href: "/diensten/conversie-optimalisatie" },
  },
];

/* ── wat je van ons mag verwachten ── */
const verwachten = [
  {
    icon: "user",
    title: "Eén vast aanspreekpunt",
    body: "Je wordt niet doorgeschoven naar een accountmanager die je project niet kent. Je praat met de mensen die het werk ook echt doen.",
  },
  {
    icon: "chat",
    title: "Antwoord in gewone taal",
    body: "Geen jargon om indruk te maken. Als we iets voorstellen, leggen we uit waarom - en wat het jou oplevert.",
  },
  {
    icon: "eye",
    title: "Geen verrassingen achteraf",
    body: "Je weet vooraf wat het kost en wat je krijgt. Loopt er iets uit, dan hoor je dat van tevoren en niet bij de oplevering.",
  },
  {
    icon: "shield",
    title: "We werken door tot het klopt",
    body: "Zit het er nog niet in, dan werken we zonder extra kosten door totdat je tevreden bent. Jij levert geen half werk, wij ook niet.",
  },
];

/* ── wat wij van jou nodig hebben ── */
const nodig = [
  {
    title: "Een half uur voor het gesprek",
    body: "Het belangrijkste dat je ons geeft is context. Wat maakt jouw bedrijf anders, en van welke klussen wil je er meer?",
  },
  {
    title: "Beeldmateriaal van je werk",
    body: "Eigen foto's van je projecten werken altijd beter dan stockbeelden. Heb je die niet, dan denken we mee over wat er nodig is.",
  },
  {
    title: "Eén feedbackronde op het ontwerp",
    body: "Liever één keer goed kijken en eerlijk zijn, dan tien kleine rondjes. Zeg gerust wat je niet mooi vindt.",
  },
  {
    title: "Toegang tot wat je al hebt",
    body: "Je domein, je huidige hosting en je Google Bedrijfsprofiel als dat er is. Weet je niet waar dat staat? Dan zoeken we het samen uit.",
  },
];

const faqs = [
  {
    q: "Hoe lang duurt het om een website te laten maken?",
    a: "Bij ons meestal drie tot vier weken, van het eerste gesprek tot livegang. De doorlooptijd hangt vooral af van hoe snel we beeldmateriaal en feedback van je terugkrijgen - het bouwen zelf is zelden de vertragende factor. Voor een groter maatwerktraject met meertaligheid of koppelingen trekken we langer uit, en dat zeggen we dan vooraf.",
  },
  {
    q: "Hoeveel tijd kost het mij zelf?",
    a: "Weinig. In de praktijk komt het neer op één gesprek van een half uur, het aanleveren van beeldmateriaal, één feedbackronde op het ontwerp en een akkoord voor de livegang. De week waarin we bouwen hoef je helemaal niets te doen.",
  },
  {
    q: "Is er een wachtlijst?",
    a: "Nee. We nemen bewust een beperkt aantal trajecten tegelijk aan, maar er is geen wachtlijst - meestal kunnen we op korte termijn starten. In het groeigesprek hoor je meteen wanneer we kunnen beginnen.",
  },
  {
    q: "Wat als ik het ontwerp niet mooi vind?",
    a: "Dan passen we het aan. Daar is de feedbackronde voor, en je mag daarin gerust streng zijn. Onze garantie is simpel: we werken zonder extra kosten door totdat je tevreden bent. We leveren niets op waar jij niet achter staat.",
  },
  {
    q: "Kan ik de website daarna zelf aanpassen?",
    a: "Ja. Waar dat zinvol is bouwen we een CMS zodat je teksten, foto's en projecten zelf kunt bijwerken, en bij de oplevering laten we zien hoe dat werkt. Wil je het liever uitbesteden, dan kan dat via onderhoud.",
  },
  {
    q: "Zit ik ergens aan vast na de livegang?",
    a: "Nee. De website is van jou en er is geen verplichte doorloop. Hosting, onderhoud en doorlopende lokale SEO zijn losse keuzes die je maakt als je ze wilt - niet iets waar je automatisch in rolt.",
  },
  {
    q: "Werken jullie op locatie of online?",
    a: "Grotendeels online, en dat werkt in de praktijk prima. We zitten in Den Haag en werken door heel Nederland, dus een gesprek op locatie kan als dat zinvol is - zeker als we bij jou willen zien wat je maakt.",
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
    case "user":
      return (
        <svg {...c}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
        </svg>
      );
    case "chat":
      return (
        <svg {...c}>
          <path d="M21 12a8 8 0 0 1-8 8H8l-5 3 1.4-4.2A8 8 0 1 1 21 12z" />
          <path d="M9 11h6M9 14.5h3.5" />
        </svg>
      );
    case "eye":
      return (
        <svg {...c}>
          <path d="M2 12s3.8-6.5 10-6.5S22 12 22 12s-3.8 6.5-10 6.5S2 12 2 12z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    default:
      return (
        <svg {...c}>
          <path d="M12 3l7.5 3v5.5c0 4.5-3.1 8.2-7.5 9.5-4.4-1.3-7.5-5-7.5-9.5V6z" />
          <path d="m8.8 12 2.3 2.3 4.1-4.4" />
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

function pageSchema() {
  const s = serviceSchema({
    name: "De werkwijze van Brandlift",
    description: metadata.description as string,
    path: PATH,
    faqs,
    crumbs,
    withReviews: reviews,
  });
  s["@graph"].push({
    "@type": "HowTo",
    name: "Zo verloopt een website-traject bij Brandlift",
    description:
      "Van eerste gesprek tot livegang in vijf fases, meestal binnen drie tot vier weken.",
    totalTime: "P28D",
    step: fases.map((f, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: f.title,
      text: f.body,
      url: `${site.url}${PATH}#fase-${i + 1}`,
    })),
  });
  return s;
}

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema()) }} />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-s0 pt-10 pb-20 md:pb-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="animate-glow pointer-events-none absolute -top-40 right-[-12%] h-[520px] w-[520px] rounded-full bg-blue/20 blur-[150px]" />
        <Container className="relative">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Reveal>
                <Eyebrow>Werkwijze</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-5 font-display text-[2.1rem] font-extrabold leading-[1.04] tracking-tight text-paper sm:text-5xl lg:text-[3.1rem]">
                  Onze werkwijze: van eerste gesprek tot livegang
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g300">
                  Een website laten maken voelt als een risico: je weet niet wat er gaat gebeuren, hoe
                  lang het duurt en hoeveel tijd het jou gaat kosten. Daarom leggen we het hier gewoon
                  uit - vijf fases, meestal drie tot vier weken, en weinig werk voor jou.
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
                    href="/website-kosten-calculator"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-text hover:underline"
                  >
                    Bereken eerst een prijsindicatie
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
                      src="/images/brandlift-aan-het-werk.jpg"
                      alt="Aan het werk aan een websiteontwerp op kantoor bij Brandlift"
                      fill
                      priority
                      sizes="(max-width: 1024px) 92vw, 46vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-blue-deep/25 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-s0/75 via-transparent to-transparent" />
                  </div>
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 chamf-sm bg-s0/70 px-3 py-1.5 text-xs font-medium text-g100 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                    Zo werken we
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ TRUST STRIP ═══════════ */}
      <BenefitMarquee />

      {/* ═══════════ AEO · KORT ANTWOORD ═══════════ */}
      <section className="on-light relative py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.85fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>Kort antwoord</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.6rem]"
              lines={[{ text: "Hoe werkt het als je" }, { text: "een website laat maken?", className: "text-g600" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                Een website laten maken bij Brandlift verloopt in vijf fases: een groeigesprek met
                onderzoek en strategie, ontwerp en merk, bouw en techniek, livegang met lokale SEO, en
                daarna groei. Een traject duurt meestal drie tot vier weken. Jouw eigen inbreng blijft
                beperkt tot één gesprek, het aanleveren van beeld, één feedbackronde en een akkoord.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-g600">
                Hieronder loop je de tijdlijn week voor week door, en daaronder staat elke fase in
                detail uitgewerkt.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="chamf chamf-lg border border-ink/10 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)] md:p-8">
              <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-blue">
                In het kort
              </p>
              <div className="mt-5 space-y-4">
                {[
                  { k: "Doorlooptijd", v: "Meestal 3 tot 4 weken" },
                  { k: "Jouw tijd", v: "Eén gesprek, beeld, één feedbackronde" },
                  { k: "Start", v: "Geen wachtlijst" },
                  { k: "Contact", v: "Eén vast aanspreekpunt" },
                  { k: "Garantie", v: "We werken door tot je tevreden bent" },
                ].map((row) => (
                  <div key={row.k} className="flex items-start gap-3.5">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center chamf-sm bg-blue/10 text-blue">
                      <Check size={12} />
                    </span>
                    <span>
                      <span className="block text-[0.72rem] font-bold uppercase tracking-[0.08em] text-g600">
                        {row.k}
                      </span>
                      <span className="mt-0.5 block text-[0.95rem] font-semibold leading-snug text-ink">
                        {row.v}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ SIGNATURE: de tijdlijn ═══════════ */}
      <WerkwijzeTijdlijn />

      {/* ═══════════ DE VIJF FASES ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>De vijf fases</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Elke fase uitgelegd," }, { text: "zonder mooie praatjes.", className: "text-g600" }]}
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-g600">
                Wat er gebeurt, wat je eruit krijgt en wat jouw rol erin is.
              </p>
            </Reveal>
          </div>

          <div className="mt-14">
            {fases.map((f, i) => (
              <Reveal key={f.n} delay={0.05}>
                <article
                  id={`fase-${i + 1}`}
                  className="grid scroll-mt-28 gap-6 border-t border-ink/10 py-10 md:py-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-12"
                >
                  <div>
                    <div className="flex items-baseline gap-4">
                      <span
                        aria-hidden
                        className="font-display text-5xl font-extrabold leading-none text-blue/20 md:text-6xl"
                      >
                        {f.n}
                      </span>
                      <span className="chamf-sm bg-blue/10 px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.1em] text-blue">
                        Fase {i + 1}
                      </span>
                    </div>
                    <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight tracking-tight text-ink md:text-[1.85rem]">
                      {f.title}
                    </h2>
                    <p className="mt-3 text-lg font-semibold italic leading-snug text-g700">{f.lead}</p>
                    <div className="mt-5 inline-flex items-start gap-2.5 chamf-sm border border-ink/12 bg-black/[0.02] px-3.5 py-2.5">
                      <span className="mt-0.5 shrink-0 text-[0.58rem] font-bold uppercase tracking-[0.1em] text-blue">
                        Jouw rol
                      </span>
                      <span className="text-sm font-medium text-g800">{f.rol}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-[1.02rem] leading-relaxed text-g600">{f.body}</p>
                    <p className="mt-6 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-blue">
                      Wat je hieruit krijgt
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {f.krijg.map((k) => (
                        <li key={k} className="flex items-start gap-3">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center chamf-sm bg-blue/10 text-blue">
                            <Check size={11} />
                          </span>
                          <span className="text-[0.95rem] leading-relaxed text-g800">{k}</span>
                        </li>
                      ))}
                    </ul>
                    {f.link && (
                      <Link
                        href={f.link.href}
                        className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:underline"
                      >
                        {f.link.label}
                        <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                      </Link>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col items-start gap-4 border-t border-ink/10 pt-10 sm:flex-row sm:items-center">
              <p className="text-lg font-semibold italic text-g700">
                Benieuwd hoe dit er voor jouw bedrijf uitziet?
              </p>
              <Button href="/contact" variant="primary" className="group">
                Plan een gratis groeigesprek
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ WAT JE VAN ONS MAG VERWACHTEN ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -left-40 top-16 h-[520px] w-[520px] rounded-full bg-blue/12 blur-[150px]" />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <div>
              <Reveal>
                <Eyebrow>Onze belofte</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.9rem]"
                lines={[{ text: "Wat je van ons" }, { text: "mag verwachten.", className: "text-blue-text" }]}
              />
            </div>
            <Reveal delay={0.12}>
              <p className="max-w-md text-lg leading-relaxed text-g300 lg:justify-self-end">
                Een goed proces is niet alleen een planning. Het is ook weten hoe iemand zich gedraagt
                als het even tegenzit.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {verwachten.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 0.07}>
                <div className="group flex h-full items-start gap-5 chamf chamf-lg border border-white/10 bg-s1/50 p-7 backdrop-blur-md transition-all duration-200 hover:border-blue/50 hover:bg-s1/70 md:p-8">
                  <span className="grid h-12 w-12 shrink-0 place-items-center chamf-sm bg-blue/10 text-blue-text transition-colors duration-200 group-hover:bg-blue group-hover:text-white">
                    <Icon name={v.icon} />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-extrabold leading-tight tracking-tight text-paper">
                      {v.title}
                    </span>
                    <span className="mt-2 block text-[0.95rem] leading-relaxed text-g500">{v.body}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ WAT WIJ VAN JOU NODIG HEBBEN ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Van jouw kant</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
                lines={[{ text: "Wat wij van jou" }, { text: "nodig hebben.", className: "text-g600" }]}
              />
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                  Het korte antwoord: minder dan je denkt. We nemen het schrijven, ontwerpen, bouwen en
                  vindbaar maken volledig over. Dit is alles wat we van jou vragen - en ontbreekt er
                  iets, dan lossen we dat samen op.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-8 flex items-start gap-3.5 chamf chamf-lg border border-blue/25 bg-blue/[0.05] p-5">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center chamf-sm bg-blue text-white">
                    <Check size={12} />
                  </span>
                  <p className="text-[0.95rem] leading-relaxed text-g800">
                    <span className="font-bold text-ink">Je hoeft geen teksten te schrijven.</span> Dat
                    doen wij, op basis van het gesprek en het zoekwoordonderzoek. Jij corrigeert alleen
                    waar we jouw vak nog niet goed genoeg begrijpen.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="space-y-3">
                {nodig.map((n, i) => (
                  <div
                    key={n.title}
                    className="flex items-start gap-4 chamf chamf-lg border border-ink/10 bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,0.04)] md:p-6"
                  >
                    <span className="mt-0.5 font-display text-xs font-bold text-blue">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block font-display text-base font-extrabold tracking-tight text-ink">
                        {n.title}
                      </span>
                      <span className="mt-1.5 block text-[0.93rem] leading-relaxed text-g600">{n.body}</span>
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ DE ZEVEN ONDERDELEN ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
        <Container className="relative">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>{methode.eyebrow}</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[
                { text: "Hierboven las je wanneer." },
                { text: "Dit is wat er gebeurt.", className: "text-g300" },
              ]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g300">
                Binnen die vijf fases werken we altijd aan dezelfde zeven onderdelen. Ze lopen in de
                tijd door elkaar heen, maar geen enkel traject slaat er één over.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {methode.steps.map((step, i) => (
              <Reveal key={step.n} delay={(i % 4) * 0.06}>
                <div className="flex h-full flex-col chamf chamf-lg border border-white/10 bg-s1/50 p-5 backdrop-blur-md transition-colors duration-200 hover:border-blue/40">
                  <span
                    aria-hidden
                    className="text-stroke font-display text-2xl font-extrabold leading-none opacity-50"
                  >
                    {step.n}
                  </span>
                  <span className="mt-3 font-display text-base font-extrabold leading-tight tracking-tight text-paper">
                    {step.title}
                  </span>
                  <span className="mt-2 flex-1 text-[0.85rem] leading-relaxed text-g500">{step.body}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-8 inline-flex items-center gap-3 text-sm italic text-g500">
              <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
              {methode.aiNote}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ BEWIJS ═══════════ */}
      <CasesCarousel tone="light" heading={["Projecten die deze", "werkwijze hebben doorlopen."]} />

      <Reviews tone="dark" />

      {/* ═══════════ INVESTERING + GARANTIE ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-14">
          <div>
            <Reveal>
              <Eyebrow>Investering</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "En wat kost" }, { text: "zo'n traject?", className: "text-g600" }]}
            />
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                Een website begint bij ons vanaf{" "}
                <span className="font-semibold text-ink">&euro;1.500</span>. Wat jouw traject kost hangt
                af van het type site en van wat er precies in moet. Je krijgt altijd een vaste prijs
                voordat we beginnen - geen nacalculatie en geen verrassingen achteraf.
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
                  className="group inline-flex items-center justify-center gap-2 chamf-sm border border-ink/15 px-6 py-3.5 text-sm font-semibold text-g800 transition-colors duration-150 hover:border-blue hover:text-blue"
                >
                  Lees wat een website kost
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="mt-6 text-sm leading-relaxed text-g600">
                Wil je eerst weten wie er tegenover je zit?{" "}
                <Link href="/over-brandlift" className="font-semibold text-blue hover:underline">
                  Lees het verhaal achter Brandlift
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
                Zit het er na de laatste ronde nog niet in, dan werken we zonder extra kosten door tot
                het klopt. Dat is het hele risico dat je loopt.
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
