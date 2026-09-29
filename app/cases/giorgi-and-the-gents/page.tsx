import { buildPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Byline, CtaBlock } from "@/components/page/blocks";
import { Button } from "@/components/ui/Button";
import { CasesCarousel } from "@/components/sections/CasesCarousel";
import { GoogleReview } from "@/components/cases/GoogleReview";
import { caseSchema } from "@/lib/schema";
import {
  caseGiorgi as c, IMG, kort, opleveringen, fases, onboardingStats, onboardingKoppelingen,
  onderzoekStats, inzichten, videoStats, stills, pijlers, controles, tweetaligStats, naLivegang,
} from "@/lib/cases/giorgi";
import { BrowserFrame, PhoneFrame } from "@/components/cases/giorgi/Frames";
import { FaseRail } from "@/components/cases/giorgi/FaseRail";
import { ZoekvraagChart } from "@/components/cases/giorgi/ZoekvraagChart";
import { LocalPackChart } from "@/components/cases/giorgi/LocalPackChart";
import { SeizoenChart } from "@/components/cases/giorgi/SeizoenChart";
import { MerkboekGalerij } from "@/components/cases/giorgi/MerkboekGalerij";
import { MerkSpecimen } from "@/components/cases/giorgi/MerkSpecimen";
import { VideoFacade } from "@/components/cases/giorgi/VideoFacade";
import { ScrollBrowser } from "@/components/cases/giorgi/ScrollBrowser";
import { LighthouseRingen } from "@/components/cases/giorgi/LighthouseRingen";
import { TaalWissel } from "@/components/cases/giorgi/TaalWissel";
import { VergelijkSlider } from "@/components/cases/giorgi/VergelijkSlider";

/* Kop van elke fase: stapnummer + titel uit lib/cases/giorgi.ts, zodat de
   rail, het overzicht en de secties dezelfde namen gebruiken. */
const fase = (id: string) => fases.find((f) => f.id === id)!;

const PATH = `/cases/${c.slug}`;

export const metadata = buildPageMetadata({
  title: c.metaTitle,
  description: c.metaDescription,
  path: PATH,
  type: "article",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Cases", path: "/cases" },
  { name: c.client, path: PATH },
];

export default function Page() {
  const schema = caseSchema({
    headline: c.h1,
    description: c.metaDescription,
    path: PATH,
    image: `${IMG}/site-home.jpg`,
    datePublished: c.updated,
    crumbs,
    clientName: c.client,
  });

  return (
    <main>
      <FaseRail />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-s0 pt-10 pb-20 md:pb-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="animate-glow pointer-events-none absolute -top-40 right-[-12%] h-[560px] w-[560px] rounded-full bg-blue/20 blur-[150px]" />
        <Container className="relative">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12">
            <div>
              <Reveal>
                <Eyebrow>Case · Live muziek · JungleBookings</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-[3rem]">
                  {c.h1}
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g300">
                  Een nieuwe band, zonder website, zonder reviews en zonder naam in Google. JungleBookings
                  wilde hem verkopen aan bruidsparen en bedrijven die in twee seconden beslissen of ze
                  verder kijken. Dit is het volledige traject, van de eerste intake tot de livegang in twee
                  talen - met het onderzoek en de keuzes erachter.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {["Bruiloften en bedrijfsfeesten", "Nederlands + Engels", "27 pagina's", "Lighthouse 100 op desktop"].map((chip) => (
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
              <Reveal delay={0.26}>
                <div className="mt-7">
                  <Byline updated={c.updated} />
                </div>
              </Reveal>
            </div>

            {/* het resultaat, direct in beeld: desktop + telefoon, overlappend */}
            <Reveal delay={0.12}>
              <div className="relative mx-auto w-full max-w-[640px] pb-10 pl-6 sm:pl-10">
                <div className="animate-glow pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-blue/15 blur-[90px]" />
                <BrowserFrame url={c.url} src={`${IMG}/site-home.jpg`} alt="De homepage van Giorgi & The Gents op desktop" priority sizes="(max-width: 1024px) 90vw, 600px" />
                <div className="absolute -bottom-2 left-0 w-[30%] min-w-[120px] max-w-[190px]">
                  <PhoneFrame src={`${IMG}/site-home-mobiel.jpg`} alt="De homepage van Giorgi & The Gents op een telefoon" />
                </div>
                <div className="absolute -bottom-4 right-2 chamf-sm bg-blue px-5 py-3 shadow-[0_16px_40px_-12px_rgba(1,48,253,0.8)] sm:right-6">
                  <span className="block whitespace-nowrap text-[0.55rem] font-semibold uppercase tracking-[0.08em] text-white/75">
                    Van intake tot livegang
                  </span>
                  <span className="mt-0.5 flex items-baseline gap-2 font-display font-extrabold text-white">
                    <span className="text-3xl">3</span>
                    <span className="text-[0.8rem] font-semibold text-white/85">weken</span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ WIE + IN HET KORT ═══════════ */}
      <section className="on-light relative py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.85fr] lg:items-start lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>Wie zijn Giorgi & The Gents</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.6rem]"
              lines={[{ text: "Een Italiaanse zomeravond," }, { text: "als live band.", className: "text-g600" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                Giorgi & The Gents is een coverband van vijf muzikanten voor bruiloften, bedrijfsfeesten en
                privéfeesten: pop, soul, jazz en swing, in eigen arrangementen. Het concept is een
                Italiaanse zomeravond - warm licht, goede wijn en muziek die precies klopt.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-g600">
                De boekingen lopen via JungleBookings, het boekingskantoor van Max Groenen. Max verkoopt
                muziek op bruiloften en bedrijfsfeesten, en bouwde websites voor zijn acts tot dan toe zelf
                in Wix. Voor deze band wilde hij het anders aanpakken.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-8 overflow-hidden chamf chamf-lg border border-ink/10 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.45)]">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={`${IMG}/still-so-easy-40.jpg`}
                    alt="Giorgi & The Gents spelen live in de open ruïne van de Ruïnekerk in Oude Niedorp"
                    fill
                    sizes="(max-width: 1024px) 92vw, 600px"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="chamf chamf-lg border border-ink/10 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)] md:p-8 lg:sticky lg:top-28">
              <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-blue">In het kort</p>
              <div className="mt-5 space-y-3.5">
                {kort.map((r) => (
                  <div key={r.k} className="flex items-baseline justify-between gap-4 border-b border-ink/[0.06] pb-3 last:border-0 last:pb-0">
                    <span className="shrink-0 text-[0.72rem] font-bold uppercase tracking-[0.06em] text-g600">{r.k}</span>
                    <span className="text-right text-[0.9rem] font-semibold leading-snug text-ink">{r.v}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-g600">Opgeleverd</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {opleveringen.map((o) => (
                  <span key={o} className="chamf-sm border border-blue/25 bg-blue/[0.06] px-2.5 py-1 text-[0.75rem] font-medium text-g800">
                    {o}
                  </span>
                ))}
              </div>
              <a
                href={`https://www.${c.url}`}
                target="_blank"
                rel="noopener"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue hover:underline"
              >
                Bekijk {c.url}
                <span aria-hidden>↗</span>
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ DE UITDAGING ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -left-40 top-16 h-[520px] w-[520px] rounded-full bg-blue/12 blur-[150px]" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>De uitdaging</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
                lines={[{ text: "Twee seconden" }, { text: "om te overtuigen.", className: "text-blue-text" }]}
              />
              <Reveal delay={0.14}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-g300">
                  Een bruidspaar dat een band zoekt, klikt door een rij websites en blijft hangen bij die ene
                  die in één oogopslag zegt: dit is de sfeer die wij willen, en zo klinkt het. Max wist dat
                  uit ervaring - en wist ook dat zijn eigen Wix-sites dat niet haalden.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-g300">
                  Daar kwam bij dat de band nieuw was. Geen reviews, geen Google-profiel, geen geschiedenis
                  om op te leunen. De website moest dus alles tegelijk doen: vertrouwen wekken, de muziek
                  laten horen en een aanvraag zo makkelijk maken dat niemand afhaakt.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <figure className="relative chamf chamf-lg border border-[var(--color-line-strong)] bg-s1/80 p-8 md:p-10">
                <span aria-hidden className="absolute left-8 top-0 grid h-10 w-10 -translate-y-1/2 place-items-center chamf chamf-sm bg-blue shadow-[0_12px_30px_-10px_rgba(1,48,253,0.85)]">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="#fff">
                    <path d="M9.5 5H4v7.2C4 16.6 6.3 19 10 19v-2.6c-1.9 0-2.9-1.1-2.9-2.9h2.4V5zm10 0H14v7.2c0 4.4 2.3 6.8 6 6.8v-2.6c-1.9 0-2.9-1.1-2.9-2.9h2.4V5z" />
                  </svg>
                </span>
                <blockquote className="font-display text-[1.35rem] font-bold leading-snug text-paper md:text-[1.55rem]">
                  Een website die, snel werkt, goed converteert en er geweldig uit ziet is voor het verkopen
                  van een band of act heel erg belangrijk. De klant maakt een beslissing in 2 seconden om
                  verder te kijken.
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-[var(--color-line)] pt-5 text-sm">
                  <span className="relative h-10 w-10 shrink-0 overflow-hidden chamf chamf-sm">
                    <Image src={`${IMG}/max-groenen.jpg`} alt="Max Groenen" fill sizes="40px" className="object-cover object-top" />
                  </span>
                  <span>
                    <span className="block font-semibold text-g100">Max Groenen</span>
                    <span className="block text-g500">JungleBookings, in zijn Google-review</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ HET TRAJECT IN ACHT STAPPEN ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Het traject</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Acht stappen," }, { text: "één samenhangend geheel.", className: "text-g600" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g600">
                Zo ziet een traject bij Brandlift eruit - hier met alles wat we voor Giorgi & The Gents
                maakten. Klik op een stap om er direct naartoe te gaan.
              </p>
            </Reveal>
          </div>
          <ol className="mt-12 grid gap-px overflow-hidden chamf chamf-lg border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {fases.map((f, i) => (
              <li key={f.id} className="bg-white">
                <Reveal delay={(i % 4) * 0.05} className="h-full">
                  <a href={`#${f.id}`} className="group flex h-full flex-col p-6 transition-colors duration-200 hover:bg-blue/[0.04] md:p-7">
                    <span className="font-display text-xs font-bold text-blue">Stap {f.nr}</span>
                    <span className="mt-3 font-display text-lg font-extrabold leading-tight tracking-tight text-ink">{f.titel}</span>
                    <span className="mt-2 flex-1 text-[0.9rem] leading-relaxed text-g600">{f.lijn}</span>
                    <span className="mt-4 text-sm font-semibold text-blue opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      Naar deze stap ↓
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ═══════════ STAP 01 · ONBOARDING ═══════════ */}
      <section id="onboarding" className="on-light relative scroll-mt-28 border-t border-ink/5 py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Stap {fase("onboarding").nr} · {fase("onboarding").titel}</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.6rem]"
                lines={[{ text: "Eerst luisteren," }, { text: "dan pas bouwen.", className: "text-g600" }]}
              />
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                  Max nam contact op, en dezelfde week stond de online intake gepland. Daarin ging het nog
                  niet over kleuren of lettertypes, maar over de band zelf: voor wie ze spelen, wat ze
                  anders maakt dan andere coverbands en hoe een boeking nu verloopt.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-g600">
                  Daarna volgde een vragenlijst op maat, geschreven voor een band: van repertoire en
                  bezetting tot werkgebied, bewijs en de manier van boeken. Alles wordt tussentijds
                  automatisch bewaard, dus invullen kan in etappes.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-ink/10 bg-ink/10 sm:grid-cols-4">
                  {onboardingStats.map((s) => (
                    <div key={s.label} className="bg-white px-4 py-5 text-center">
                      <span className="block font-display text-3xl font-extrabold text-ink">{s.n}</span>
                      <span className="mt-1.5 block text-[0.74rem] leading-tight text-g600">{s.label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="relative pb-12 pr-6 sm:pr-12">
                <BrowserFrame url="onboarding · Giorgi & The Gents" src={`${IMG}/onboarding-start.jpg`} alt="De start van de onboardingvragenlijst voor Giorgi & The Gents, in de stijl van Brandlift" tone="light" sizes="(max-width: 1024px) 92vw, 560px" />
                <div className="absolute -bottom-2 right-0 w-[46%] overflow-hidden chamf chamf-lg border border-ink/10 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)]">
                  <div className="relative aspect-[4/5]">
                    <Image src={`${IMG}/onboarding-markt.jpg`} alt="Het onderdeel Markt en lokaal uit de onboardingvragenlijst, met vragen over regio's en werkgebied" fill sizes="260px" className="object-cover object-top" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* elk antwoord heeft een vaste plek */}
          <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <Reveal>
              <div>
                <h3 className="font-display text-2xl font-extrabold leading-tight tracking-tight text-ink">
                  Geen vragenlijst voor de la.
                </h3>
                <p className="mt-4 text-[1rem] leading-relaxed text-g600">
                  Elke vraag in het formulier is gekoppeld aan een vaste plek: op de website zelf of in de
                  gestructureerde data die Google leest. Zo gaat er tussen intake en bouw niets verloren,
                  en staat er op de site niets wat de band niet zelf heeft aangeleverd.
                </p>
              </div>
            </Reveal>
            <div className="space-y-3">
              {onboardingKoppelingen.map((k, i) => (
                <Reveal key={k.pad} delay={i * 0.06}>
                  <div className="grid items-center gap-3 chamf chamf-lg border border-ink/10 bg-white p-4 sm:grid-cols-[1fr_auto_1.2fr] sm:gap-4 md:p-5">
                    <div>
                      <span className="text-[0.6rem] font-bold uppercase tracking-[0.1em] text-g600">De vraag</span>
                      <p className="mt-1 text-[0.92rem] font-semibold leading-snug text-ink">{k.vraag}</p>
                    </div>
                    <span className="inline-flex w-fit items-center gap-2 chamf-sm border border-blue/25 bg-blue/[0.06] px-2.5 py-1 font-mono text-[0.7rem] text-blue">
                      {k.pad} <span aria-hidden>→</span>
                    </span>
                    <div>
                      <span className="text-[0.6rem] font-bold uppercase tracking-[0.1em] text-g600">Op de site</span>
                      <p className="mt-1 text-[0.88rem] leading-snug text-g700">{k.landt}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════ STAP 02 · ONDERZOEK ═══════════ */}
      <section id="onderzoek" className="relative scroll-mt-28 overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -right-40 top-24 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />
        <Container className="relative">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Stap {fase("onderzoek").nr} · {fase("onderzoek").titel}</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
              lines={[{ text: "De briefing zei Italië." }, { text: "Google zei iets anders.", className: "text-blue-text" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g300">
                Voordat er één pagina bestond, hebben we de markt doorgemeten in vier rondes: zoekvolumes,
                zoekintentie, de concurrentie in Google Maps, de websites van tien andere bands en het
                seizoen. De eerste uitkomst was ongemakkelijk: op de vier zoektermen uit de briefing
                zoekt in Nederland niemand. Niet weinig mensen - niemand.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-[var(--color-line)] lg:grid-cols-4">
            {onderzoekStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05} className="h-full">
                <div className="h-full bg-s1 px-5 py-7 text-center md:py-9">
                  <span className="block font-display text-4xl font-extrabold text-paper md:text-5xl">{s.n}</span>
                  <span className="mx-auto mt-2 block max-w-[16ch] text-[0.8rem] leading-tight text-g400">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10">
              <ZoekvraagChart />
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {inzichten.map((z, i) => (
              <Reveal key={z.kop} delay={i * 0.07} className="h-full">
                <div className="h-full chamf chamf-lg border border-[var(--color-line-strong)] bg-s1/70 p-6 md:p-7">
                  <span className="font-display text-xs font-bold text-blue-text">Inzicht {i + 1}</span>
                  <h3 className="mt-3 font-display text-lg font-extrabold leading-tight tracking-tight text-paper">{z.kop}</h3>
                  <p className="mt-2.5 text-[0.93rem] leading-relaxed text-g300">{z.tekst}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Uit het onderzoek · Google Maps</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h3 className="mt-5 font-display text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
                  Bands worden gevonden in Maps, niet in de gewone resultaten.
                </h3>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-4 text-[1rem] leading-relaxed text-g600">
                  In de gewone zoekresultaten voor het boeken van een band staan boekingsplatforms, geen
                  bands. Individuele bands winnen in Google Maps - en daar tellen reviews. De drempel bleek
                  lager dan gedacht: plek vijf wordt gehaald met acht reviews. Daarom adviseerden we om het{" "}
                  <Link href="/diensten/lokale-seo" className="font-semibold text-blue hover:underline">
                    Google Bedrijfsprofiel
                  </Link>{" "}
                  en het verzamelen van reviews tegelijk met de bouw van de site te starten.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-8 chamf chamf-lg border border-ink/10 bg-white p-6 md:p-7">
                  <LocalPackChart />
                </div>
              </Reveal>
            </div>

            <div>
              <Reveal>
                <Eyebrow>Uit het onderzoek · Het seizoen</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h3 className="mt-5 font-display text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
                  Wie in augustus live gaat, oogst in het voorjaar.
                </h3>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-4 text-[1rem] leading-relaxed text-g600">
                  De interesse in bruiloften piekt in mei en juni, en is in december ruim drie keer zo laag.
                  Vanaf februari loopt hij weer op. Een site die in de zomer live gaat, heeft dus precies
                  de maanden die vindbaarheid nodig heeft om te rijpen voordat het nieuwe seizoen begint.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-8 chamf chamf-lg border border-ink/10 bg-white p-6 md:p-7">
                  <SeizoenChart />
                </div>
              </Reveal>
            </div>
          </div>

          {/* twee markten */}
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {[
              { n: "± 1.600", l: "zoekopdrachten per maand om een band te boeken", w: "In handen van boekingsplatforms. Voor een losse band organisch niet te winnen - wel via Google Maps." },
              { n: "± 2.200", l: "zoekopdrachten per maand over muziek voor je bruiloft", w: "Van ceremoniemuziek tot openingsdans. Hier winnen blogs en muzikanten - dus kreeg de site een eigen muziekgids." },
            ].map((m, i) => (
              <Reveal key={m.n} delay={i * 0.07} className="h-full">
                <div className="flex h-full flex-col chamf chamf-lg border border-ink/10 bg-white p-6 md:p-7">
                  <span className="font-display text-4xl font-extrabold tabular-nums text-ink">{m.n}</span>
                  <span className="mt-1.5 text-[0.9rem] font-semibold leading-snug text-ink">{m.l}</span>
                  <p className="mt-3 text-[0.9rem] leading-relaxed text-g600">{m.w}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ STAP 03 · MERKBOEK ═══════════ */}
      <section id="merkboek" className="on-light relative scroll-mt-28 border-t border-ink/5 py-20 md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div className="max-w-2xl">
              <Reveal>
                <Eyebrow>Stap {fase("merkboek").nr} · {fase("merkboek").titel}</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
                lines={[{ text: "Eerst het merk," }, { text: "dan de website.", className: "text-g600" }]}
              />
            </div>
            <Reveal delay={0.12}>
              <p className="text-lg leading-relaxed text-g600">
                Een Italiaanse zomeravond moest een beeld krijgen dat je herkent voordat je iets leest. Het
                merkboek legt dat vast in zeventien pagina&apos;s - en eindigt waar de website begint: bij
                de designtokens die één op één in de code staan.
              </p>
            </Reveal>
          </div>

          <div className="mt-12">
            <MerkboekGalerij />
          </div>

          <div className="mt-4">
            <MerkSpecimen />
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              { k: "De Boog", v: "Het logo combineert een dunne gouden boog - een Toscaanse doorgang, de aankondiging van een avond die begint - met de handgeschreven naam Giorgi en & THE GENTS in kapitalen als fundament." },
              { k: "Het gouden uur", v: "De beeldtaal: fotografie met warm, laag licht, alsof de avond net begint. Geen flitslicht en geen koude podiumbeelden." },
              { k: "Nooit doen", v: "Het merkboek zegt ook wat níet mag: het logo vervormen of herkleuren, drukke fotografie eronder, goud als groot vlak." },
            ].map((b, i) => (
              <Reveal key={b.k} delay={i * 0.06} className="h-full">
                <div className="h-full chamf chamf-lg border border-ink/10 bg-white p-6">
                  <h3 className="font-display text-lg font-extrabold tracking-tight text-ink">{b.k}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-g600">{b.v}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-8 text-sm leading-relaxed text-g600">
              Waarom het merk bij ons altijd vóór het ontwerp komt, lees je bij{" "}
              <Link href="/diensten/branding" className="font-semibold text-blue hover:underline">
                onze aanpak van branding
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ STAP 04 · VIDEOGRAFIE ═══════════ */}
      <section id="videografie" className="relative scroll-mt-28 overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-end">
            <div>
              <Reveal>
                <Eyebrow>Stap {fase("videografie").nr} · {fase("videografie").titel}</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
                lines={[{ text: "Horen voordat" }, { text: "je boekt.", className: "text-blue-text" }]}
              />
            </div>
            <Reveal delay={0.12}>
              <p className="text-lg leading-relaxed text-g300">
                De band nam op één dag zeven nummers op in de Ruïnekerk van Oude Niedorp, gefilmd door
                een externe videograaf. Wij kregen de montages en de audiomixen aangeleverd en maakten er het hart
                van de site van - want geen enkele concurrent liet je op de eigen site naar de band luisteren.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12">
              <VideoFacade poster={`${IMG}/still-medley-22.jpg`} alt="Zangeres Gwen Kaihatu van Giorgi & The Gents zingt in de Ruïnekerk in Oude Niedorp" />
            </div>
          </Reveal>

          <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-[var(--color-line)] lg:grid-cols-4">
            {videoStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05} className="h-full">
                <div className="h-full bg-s1 px-5 py-6 text-center">
                  <span className="block font-display text-3xl font-extrabold text-paper">{s.n}</span>
                  <span className="mx-auto mt-2 block max-w-[20ch] text-[0.78rem] leading-tight text-g400">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <Reveal>
              <div>
                <h3 className="font-display text-2xl font-extrabold leading-tight tracking-tight text-paper">
                  Zwaar materiaal, lichte pagina.
                </h3>
                <p className="mt-4 text-[1rem] leading-relaxed text-g300">
                  Video is het zwaarste wat je op een website kunt zetten, en een trage site verliest
                  bezoekers. Daarom bestaat er vóór de klik geen videospeler: je ziet een foto met een
                  play-knop. Pas na je klik begint de video - vrijwel direct, omdat hij al afspeelt terwijl
                  de rest nog binnenkomt.
                </p>
                <p className="mt-4 text-[1rem] leading-relaxed text-g300">
                  Zo kon de kwaliteit omhoog naar 1080p zonder dat de laadtijd ook maar iets merkte. De
                  speler hierboven werkt precies zo: tot je op play drukt, is er niets van geladen.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { src: `${IMG}/site-repertoire.jpg`, t: "Een play-knop per nummer", alt: "De nummerlijst op de homepage van Giorgi & The Gents met een afspeelknop per nummer" },
                { src: `${IMG}/site-galerij.jpg`, t: "Alle opnames: clip én audio", alt: "De galerij op de Luister & beleef-pagina met zeven opnames, elk met video en audiospeler" },
                { src: `${IMG}/site-bts.jpg`, t: "Een pagina voor de opnamedag", alt: "De Behind the Scenes-pagina van Giorgi & The Gents over de opnamedag" },
              ].map((k, i) => (
                <Reveal key={k.t} delay={i * 0.07} className="h-full">
                  <figure className="h-full overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1">
                    <div className="relative aspect-[4/3]">
                      <Image src={k.src} alt={k.alt} fill sizes="(max-width: 640px) 92vw, 240px" className="object-cover object-top" />
                    </div>
                    <figcaption className="px-4 py-3 text-[0.82rem] font-semibold text-g100">{k.t}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stills.map((s, i) => (
              <Reveal key={s.src} delay={i * 0.05}>
                <div className="relative aspect-video overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)]">
                  <Image src={s.src} alt={s.alt} fill sizes="(max-width: 1024px) 46vw, 280px" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ STAP 05 · ONTWERP ═══════════ */}
      <section id="ontwerp" className="on-light relative scroll-mt-28 py-20 md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-end">
            <div>
              <Reveal>
                <Eyebrow>Stap {fase("ontwerp").nr} · {fase("ontwerp").titel}</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
                lines={[{ text: "Het merkboek," }, { text: "pagina voor pagina.", className: "text-g600" }]}
              />
            </div>
            <Reveal delay={0.12}>
              <p className="text-lg leading-relaxed text-g600">
                Het ontwerp volgt het merkboek tot in de details: de gouden boog als doorgang, goud alleen
                als accent en fotografie van het gouden uur. Een bezoeker moet de avond voelen voordat er
                één regel gelezen is.
              </p>
            </Reveal>
          </div>

          {/* van merkboek naar live - dezelfde verhouding, dus vergelijkbaar met een schuif */}
          <Reveal>
            <div className="mt-12">
              <VergelijkSlider
                links={{ src: `${IMG}/merkboek-13-schets.jpg`, alt: "De schets van de homepage uit het merkboek: logo, navigatie en de kop Live muziek met karakter" }}
                rechts={{ src: `${IMG}/site-home-band.jpg`, alt: "De homepage zoals hij live staat, met landschapsfoto, uitgebreide navigatie en introtekst" }}
                labelLinks="Schets in het merkboek"
                labelRechts="Live site"
              />
              <p className="mt-3 text-sm text-g600">
                Sleep de schuif: links de schets uit het merkboek, rechts de homepage zoals hij live staat.
              </p>
            </div>
          </Reveal>

          {/* de hele pagina, scrollend */}
          <div className="mt-16 grid items-start gap-8 lg:grid-cols-[1fr_260px] lg:gap-10">
            <Reveal>
              <ScrollBrowser src={`${IMG}/site-home-lang.jpg`} alt="De volledige homepage van Giorgi & The Gents op desktop" url={c.url} breed={1100} hoog={7000} />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mx-auto w-full max-w-[260px]">
                <ScrollBrowser src={`${IMG}/site-home-lang-mobiel.jpg`} alt="De volledige homepage van Giorgi & The Gents op een telefoon" url={c.url} breed={520} hoog={7000} venster="aspect-[9/19.5]" mobiel />
                <p className="mt-3 text-center text-sm text-g600">Dezelfde pagina op mobiel</p>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { k: "Luisteren staat bovenaan", v: "De eerste knop op de homepage is niet \"contact\" maar \"Luister & beleef\". Wie de band gehoord heeft, vraagt makkelijker een datum aan." },
              { k: "Rust als luxe", v: "Veel lucht, weinig woorden per blok en één accentkleur. Exclusief voelt nooit druk: ademruimte staat als vast motief in het merkboek, en dus in de code." },
              { k: "Gemaakt voor de telefoon", v: "Bruidsparen oriënteren zich vaak op hun telefoon. Elke pagina is gecontroleerd op een scherm van 375 pixels breed - tot en met het datumveld in het formulier op iOS." },
            ].map((b, i) => (
              <Reveal key={b.k} delay={i * 0.06} className="h-full">
                <div className="h-full chamf chamf-lg border border-ink/10 bg-white p-6">
                  <h3 className="font-display text-lg font-extrabold tracking-tight text-ink">{b.k}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-g600">{b.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ STAP 06 · DEVELOPMENT ═══════════ */}
      <section id="development" className="relative scroll-mt-28 overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
            <div>
              <Reveal>
                <Eyebrow>Stap {fase("development").nr} · {fase("development").titel}</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
                lines={[{ text: "Snel, vindbaar" }, { text: "en gebouwd om te boeken.", className: "text-blue-text" }]}
              />
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-g300">
                  Onder het ontwerp zit het werk dat je niet ziet, maar wel merkt. De site staat op desktop
                  in minder dan een seconde in beeld, is volledig leesbaar voor Google zonder dat er eerst
                  JavaScript hoeft te draaien, en elke pagina leidt naar dezelfde plek: een aanvraag.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <LighthouseRingen />
            </Reveal>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pijlers.map((p, i) => (
              <Reveal key={p.kop} delay={i * 0.07} className="h-full">
                <div className="h-full chamf chamf-lg border border-[var(--color-line-strong)] bg-s1/70 p-6 md:p-7">
                  <h3 className="font-display text-lg font-extrabold tracking-tight text-paper">{p.kop}</h3>
                  <ul className="mt-4 space-y-3">
                    {p.punten.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-[0.9rem] leading-relaxed text-g300">
                        <span className="mt-2 h-1 w-3 shrink-0 bg-blue-text" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
            <Reveal>
              <BrowserFrame url={c.url} src={`${IMG}/site-aanvraag.jpg`} alt="Het aanvraagformulier van Giorgi & The Gents, geopend als venster boven de homepage" sizes="(max-width: 1024px) 92vw, 600px" />
            </Reveal>
            <div>
              <Reveal>
                <h3 className="font-display text-2xl font-extrabold leading-tight tracking-tight text-paper">
                  Zes controles voor elke livegang.
                </h3>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-4 text-[1rem] leading-relaxed text-g300">
                  Geen enkele wijziging gaat live voordat deze controles allemaal zijn geslaagd. Ze vangen
                  de fouten die je met het oog niet ziet - en die Google wél ziet.
                </p>
              </Reveal>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {controles.map((k, i) => (
                  <Reveal key={k.naam} delay={0.1 + i * 0.04}>
                    <li className="h-full chamf-sm border border-[var(--color-line)] bg-s1/60 px-4 py-3">
                      <span className="flex items-center gap-2 text-[0.85rem] font-bold text-paper">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5b78ff" strokeWidth="3" aria-hidden>
                          <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {k.naam}
                      </span>
                      <span className="mt-1 block text-[0.78rem] leading-snug text-g400">{k.wat}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>

          <Reveal delay={0.1}>
            <p className="mt-10 text-sm leading-relaxed text-g500">
              Zo bouwen we{" "}
              <Link href="/diensten/website-laten-maken" className="font-semibold text-blue-text hover:underline">
                elke strategische website
              </Link>
              , en zo pakken we{" "}
              <Link href="/diensten/conversie-optimalisatie" className="font-semibold text-blue-text hover:underline">
                conversie-optimalisatie
              </Link>{" "}
              aan.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ STAP 07 · TWEETALIG ═══════════ */}
      <section id="tweetalig" className="on-light relative scroll-mt-28 py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>Stap {fase("tweetalig").nr} · {fase("tweetalig").titel}</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.6rem]"
              lines={[{ text: "Twee talen," }, { text: "twee volwaardige sites.", className: "text-g600" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g600">
                Giorgi & The Gents spelen ook voor internationale gasten en bedrijven. Dus kwam er een
                Engelse versie - geen vertaalplug-in die de Nederlandse tekst woord voor woord omzet, maar
                eigen pagina&apos;s met tekst die is aangepast aan een Engelstalige lezer.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 text-[1rem] leading-relaxed text-g600">
                Voor Google zijn het twee gekoppelde versies: elke pagina verwijst naar haar tegenhanger,
                zodat een Engelstalige zoeker de Engelse pagina krijgt. Reviews blijven in de taal waarin
                ze geschreven zijn. En de muziekgids bestaat bewust alleen in het Nederlands - het
                onderzoek liet zien dat daar in het Engels niet op gezocht wordt.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-ink/10 bg-ink/10">
                {tweetaligStats.map((s) => (
                  <div key={s.label} className="bg-white px-3 py-5 text-center">
                    <span className="block font-display text-3xl font-extrabold text-ink">{s.n}</span>
                    <span className="mt-1.5 block text-[0.74rem] leading-tight text-g600">{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <TaalWissel />
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ STAP 08 · OPLEVERING ═══════════ */}
      <section id="oplevering" className="relative scroll-mt-28 overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
        <div className="animate-glow pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-blue/25 blur-[120px]" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Stap {fase("oplevering").nr} · {fase("oplevering").titel}</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
                lines={[{ text: "Live in drie weken." }, { text: "En toen begon het pas.", className: "text-blue-text" }]}
              />
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-g300">
                  Binnen drie weken na de intake stond de site live - in de woorden van Max zelf. Maar een
                  website is bij ons niet af op de dag van oplevering. Rechts staat wat er in de weken
                  daarna bij kwam: op verzoek van Max, of omdat we zagen dat het beter kon.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-9 flex items-baseline gap-4 font-display font-extrabold text-paper">
                  <span className="text-7xl sm:text-8xl">3</span>
                  <span className="text-xl font-semibold text-g300">weken van intake tot livegang</span>
                </div>
              </Reveal>
            </div>

            <ol className="relative border-l border-[var(--color-line-strong)] pl-7">
              {naLivegang.map((n, i) => (
                <Reveal key={n.datum} delay={i * 0.05}>
                  <li className="relative pb-6 last:pb-0">
                    <span aria-hidden className="absolute -left-[33px] top-1.5 h-[11px] w-[11px] chamf-sm border border-blue-text bg-s0" />
                    <span className="font-display text-xs font-bold uppercase tracking-[0.08em] text-blue-text">{n.datum}</span>
                    <p className="mt-1 text-[0.98rem] leading-relaxed text-g200">{n.wat}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button href="/contact" variant="primary" className="group">
                Plan een gratis groeigesprek
              </Button>
              <a
                href={`https://www.${c.url}`}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-text hover:underline"
              >
                Bekijk de site van Giorgi & The Gents
                <span aria-hidden className="transition-transform duration-150 group-hover:translate-x-0.5">↗</span>
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ DE REVIEW VAN MAX ═══════════ */}
      <GoogleReview auteur="Max Groenen" foto={`${IMG}/max-groenen.jpg`} eyebrow="De review van Max op Google" kop="In Max' eigen woorden," />

      <CasesCarousel tone="light" eyebrow="Meer cases" heading={["Meer werk uit", "de praktijk."]} />

      <CtaBlock
        h2="Wil je dit ook voor jouw band, act of bedrijf?"
        body="Plan een gratis, vrijblijvend groeigesprek van 30 minuten. We kijken waar jouw groei zit - net als bij JungleBookings."
      />
    </main>
  );
}
