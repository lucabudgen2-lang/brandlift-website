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
import { caseSchema } from "@/lib/schema";
import {
  caseVanEsch as c, IMG, kort, opleveringen, fases, oudeSite, analysePunten, onboardingStats,
  onboardingKoppelingen, onderzoekStats, woordenWel, woordenNiet, profielStats, merkKleuren,
  merkPaginas, eigenElementen, lighthouse, pijlers, samenwerkingStats,
} from "@/lib/cases/vanesch";
import { BrowserFrame, PhoneFrame } from "@/components/cases/giorgi/Frames";
import { FaseRail } from "@/components/cases/giorgi/FaseRail";
import { ScrollBrowser } from "@/components/cases/giorgi/ScrollBrowser";
import { LighthouseRingen } from "@/components/cases/giorgi/LighthouseRingen";
import { VergelijkSlider } from "@/components/cases/giorgi/VergelijkSlider";
import { MerkboekGalerij } from "@/components/cases/giorgi/MerkboekGalerij";
import { SkylineEcht } from "@/components/cases/vanesch/SkylineEcht";
import { RankmapRaster } from "@/components/cases/vanesch/RankmapRaster";
import { ProfielSpiegel } from "@/components/cases/vanesch/ProfielSpiegel";
import { LogoOntleed } from "@/components/cases/vanesch/LogoOntleed";
import { MetselTijdlijn } from "@/components/cases/vanesch/MetselTijdlijn";
import { RudyAanHetWoord } from "@/components/cases/vanesch/RudyAanHetWoord";

/* Kop van elke fase: stapnummer + titel uit lib/cases/vanesch.ts, zodat
   de rail, het overzicht en de secties dezelfde namen gebruiken. */
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
  { name: c.kortNaam, path: PATH },
];

/* Kleine bouwstenen die op deze pagina vaak terugkomen. */
function StatGrid({ items, tone }: { items: readonly { n: string; label: string }[]; tone: "dark" | "light" }) {
  const dark = tone === "dark";
  const cols = items.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";
  return (
    <div
      className={`grid grid-cols-2 gap-px overflow-hidden chamf chamf-lg border ${cols} ${
        dark ? "border-[var(--color-line-strong)] bg-[var(--color-line)]" : "border-ink/10 bg-ink/10"
      }`}
    >
      {items.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.05} className={`h-full ${items.length % 2 && i === items.length - 1 ? "col-span-2 lg:col-span-1" : ""}`}>
          <div className={`h-full px-5 py-7 text-center md:py-9 ${dark ? "bg-s1" : "bg-white"}`}>
            <span className={`block font-display text-4xl font-extrabold md:text-5xl ${dark ? "text-paper" : "text-ink"}`}>{s.n}</span>
            <span className={`mx-auto mt-2 block max-w-[18ch] text-[0.8rem] leading-tight ${dark ? "text-g400" : "text-g600"}`}>{s.label}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

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
      <FaseRail fases={fases} />
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
                <Eyebrow>Case · Gevelrestauratie · Liempde</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-[3rem]">
                  {c.h1}
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g300">
                  Rudy van Esch restaureert sinds 2005 oude en monumentale gevels, vanuit Liempde. Op de steiger
                  is zijn beste werk bijna onzichtbaar, en dat is precies de bedoeling. Online was het dat ook,
                  maar dan per ongeluk. Dit is het hele traject: van de analyse vóór het akkoord tot de livegang,
                  met het onderzoek en de keuzes erachter.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {["Oude en monumentale gevels", "20 pagina's", "Merkboek van 28 pagina's", "Google-profiel compleet"].map((chip) => (
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

            <Reveal delay={0.12}>
              <div className="relative mx-auto w-full max-w-[640px] pb-10 pl-6 sm:pl-10">
                <div className="animate-glow pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-blue/15 blur-[90px]" />
                <BrowserFrame url={c.url} src={`${IMG}/site-home.jpg`} alt="De homepage van R. van Esch Gevelrestauratie op desktop, met de kop Onzichtbaar restaureren" priority sizes="(max-width: 1024px) 90vw, 600px" />
                <div className="absolute -bottom-2 left-0 w-[30%] min-w-[120px] max-w-[190px]">
                  <PhoneFrame src={`${IMG}/site-home-mobiel.jpg`} alt="De homepage van R. van Esch Gevelrestauratie op een telefoon" />
                </div>
                <div className="absolute -bottom-4 right-2 chamf-sm bg-blue px-5 py-3 shadow-[0_16px_40px_-12px_rgba(1,48,253,0.8)] sm:right-6">
                  <span className="block whitespace-nowrap text-[0.55rem] font-semibold uppercase tracking-[0.08em] text-white/75">
                    Van akkoord tot livegang
                  </span>
                  <span className="mt-0.5 flex items-baseline gap-2 font-display font-extrabold text-white">
                    <span className="text-3xl">7</span>
                    <span className="text-[0.8rem] font-semibold text-white/85">weken</span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ WIE IS RUDY + IN HET KORT ═══════════ */}
      <section className="on-light relative py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.85fr] lg:items-start lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Wie is Rudy van Esch</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.6rem]"
                lines={[{ text: "Een restaurateur die zijn" }, { text: "eigen werk laat verdwijnen.", className: "text-g600" }]}
              />
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                  Rudy stond als jongen al in de vakanties op de bouw, in het voegbedrijf van zijn vader. Sinds 2005
                  heeft hij zijn eigen bedrijf. Hij werkt aan oude, vaak monumentale gevels: scheurherstel, knip- en
                  snijvoegwerk, patineren en bijkleuren, en complete restauraties. Van de Sint-Jan in Den Bosch en de
                  Domkerk in Utrecht tot kastelen en langgevelboerderijen in Brabant.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-g600">
                  Zijn doel vat hij zelf samen in twee woorden: onzichtbaar restaureren. Een goede reparatie zie je
                  niet. Dat werd de slogan van zijn merk, en meteen onze opdracht: een website waarop zijn werk juist
                  wél te zien is.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="chamf chamf-lg border border-ink/10 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)] md:p-8 lg:sticky lg:top-28">
                <div className="flex items-center gap-4 border-b border-ink/[0.06] pb-5">
                  <span className="relative h-14 w-14 shrink-0 overflow-hidden chamf chamf-sm">
                    <Image src={`${IMG}/foto-rudy-portret.jpg`} alt="Rudy van Esch" fill sizes="56px" className="object-cover" />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-extrabold text-ink">{c.contact}</span>
                    <span className="block text-sm text-g600">Gevelrestaurateur, Liempde</span>
                  </span>
                </div>
                <p className="mt-5 font-display text-xs font-bold uppercase tracking-[0.1em] text-blue">In het kort</p>
                <div className="mt-4 space-y-3.5">
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
          </div>

          {/* de skyline uit het logo */}
          <div className="mt-20 border-t border-ink/[0.07] pt-14 md:mt-24 md:pt-16">
            <div className="max-w-2xl">
              <Reveal>
                <Eyebrow>Uit het merkboek · De skyline bestaat echt</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h3 className="mt-5 font-display text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
                  Elk gebouw in zijn logo is ook een klus van hem.
                </h3>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-g600">
                  Bij het ontleden van Rudy&apos;s logo uit 2016 viel ons iets op. De toren, de molen, de kerktoren en
                  de gevels in het rode silhouet zijn precies de gebouwen waar hij aan werkt. Voor elk type vonden we
                  een eigen klus. Beweeg over het silhouet of tik op een gebouw.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.14}>
              <div className="mt-10">
                <SkylineEcht />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ DE UITDAGING ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -left-40 top-16 h-[520px] w-[520px] rounded-full bg-blue/12 blur-[150px]" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>De uitdaging</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
                lines={[{ text: "Op zijn vak de sterkste." }, { text: "Op zijn specialisme onvindbaar.", className: "text-blue-text" }]}
              />
              <Reveal delay={0.14}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-g300">
                  Rudy&apos;s oude site was in de loop der jaren gegroeid tot 52 pagina&apos;s, maar Google liet er maar
                  een stuk of tien van zien. Veel pagina&apos;s hadden een paar zinnen tekst, vier gingen over hetzelfde
                  onderwerp, en op een telefoon was de site lastig te lezen. Zijn Google-profiel noemde geen enkele
                  dienst.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-g300">
                  En er kwamen aanvragen binnen voor huizen uit de jaren tachtig en negentig, die hij moest afwijzen.
                  Rudy wilde dat juist zijn specialistische werk beter gevonden werd: scheurherstel, patineren,
                  knip- en snijvoegwerk aan oude gevels.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-2 gap-px overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-[var(--color-line)]">
              {oudeSite.map((s, i) => (
                <Reveal key={s.t} delay={i * 0.06} className="h-full">
                  <div className="h-full bg-s1 p-6 md:p-7">
                    <span className="block font-display text-5xl font-extrabold text-paper">{s.n}</span>
                    <span className="mt-2 block text-[0.88rem] leading-snug text-g400">{s.t}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-14">
              <VergelijkSlider
                ratio="aspect-[16/10]"
                links={{ src: `${IMG}/oud-home.jpg`, alt: "De oude homepage van R. van Esch Gevelrestauratie, september 2026" }}
                rechts={{ src: `${IMG}/site-home.jpg`, alt: "De nieuwe homepage van R. van Esch Gevelrestauratie, live sinds 18 november 2026" }}
                labelLinks="Oude site · september"
                labelRechts="Nieuwe site · november"
              />
              <p className="mt-4 text-center text-sm text-g500">Sleep de schuif om de oude en de nieuwe homepage te vergelijken.</p>
            </div>
          </Reveal>
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
              lines={[{ text: "Acht stappen," }, { text: "van analyse tot livegang.", className: "text-g600" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g600">
                Zo ziet een traject bij Brandlift eruit, hier met alles wat we voor Rudy maakten. Klik op een stap om
                er direct naartoe te gaan.
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

      {/* ═══════════ STAP 01 · ANALYSE ═══════════ */}
      <section id="analyse" className="relative scroll-mt-28 overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Stap {fase("analyse").nr} · {fase("analyse").titel}</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
                lines={[{ text: "Eerst laten zien," }, { text: "dan pas vragen.", className: "text-blue-text" }]}
              />
              <Reveal delay={0.12}>
                <p className="mt-6 text-lg leading-relaxed text-g300">
                  Nog voordat Rudy iets had getekend, maakten we een analyse van zijn online aanwezigheid en een
                  concept voor zijn homepage, in zijn eigen logo en met zijn eigen projecten. Die liepen we samen
                  door in een gesprek van ruim een uur. Zo wist hij precies wat hij kreeg, en wij wisten wat voor
                  hem telde.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-4 text-lg leading-relaxed text-g300">
                  Zo&apos;n analyse maken we voor elk bedrijf dat een gesprek met ons plant. Je ziet waar je staat,
                  voordat je ergens aan vastzit.
                </p>
              </Reveal>
            </div>
            <div className="space-y-3">
              {analysePunten.map((p, i) => (
                <Reveal key={p} delay={0.08 + i * 0.07}>
                  <div className="flex gap-4 chamf chamf-lg border border-[var(--color-line-strong)] bg-s1/70 p-5 md:p-6">
                    <span className="grid h-9 w-9 shrink-0 place-items-center chamf-sm bg-blue font-display text-sm font-extrabold text-white">
                      {i + 1}
                    </span>
                    <p className="self-center text-[1rem] leading-relaxed text-g200">{p}</p>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.32}>
                <div className="pt-3">
                  <Button href="/contact" variant="primary">
                    Plan je eigen analysegesprek
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════ STAP 02 · ONBOARDING ═══════════ */}
      <section id="onboarding" className="on-light relative scroll-mt-28 py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Stap {fase("onboarding").nr} · {fase("onboarding").titel}</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Eén keer vertellen," }, { text: "daarna niet meer.", className: "text-g600" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g600">
                Na het akkoord kreeg Rudy één formulier in negentien delen: zijn verhaal, zijn vakkennis, zijn
                klanten, zijn werkwijze en zijn projecten. Wat we al uit de gesprekken wisten, stond er al in; hij
                hoefde alleen te bevestigen of aan te vullen. Zijn foto&apos;s zette hij in een gedeelde map, met een
                eigen map per project.
              </p>
            </Reveal>
          </div>

          <div className="mt-12">
            <StatGrid items={onboardingStats} tone="light" />
          </div>

          <div className="mt-14">
            <Reveal>
              <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-blue">Van antwoord naar website</p>
            </Reveal>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {onboardingKoppelingen.map((k, i) => (
                <Reveal key={k.vraag} delay={i * 0.06} className="h-full">
                  <div className="flex h-full flex-col chamf chamf-lg border border-ink/10 bg-white p-6 shadow-[0_20px_50px_-34px_rgba(0,0,0,0.3)] md:p-7">
                    <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-g600">Uit het formulier · {k.vraag}</span>
                    <p className="mt-2 font-display text-lg font-extrabold leading-snug tracking-tight text-ink">{k.antwoord}</p>
                    <div className="mt-5 flex flex-1 items-end gap-3 border-t border-ink/[0.07] pt-4">
                      <span className="grid h-6 w-6 shrink-0 place-items-center chamf-sm bg-blue text-[0.7rem] font-bold text-white" aria-hidden>
                        →
                      </span>
                      <p className="text-[0.92rem] leading-snug text-g700">
                        <span className="font-semibold text-ink">Op de site: </span>
                        {k.landt}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════ STAP 03 · ONDERZOEK ═══════════ */}
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
              lines={[{ text: "Bovenaan op zijn vak." }, { text: "Nergens op zijn specialisme.", className: "text-blue-text" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g300">
                Voordat er één pagina bestond, hebben we Google Maps doorgemeten op 49 punten rond Liempde, voor elke
                zoekterm die voor Rudy telt. Elk punt is een zoekopdracht vanaf die plek, zoals een huiseigenaar daar
                zou zoeken. Daarnaast de zoekvolumes van ruim zeshonderd termen, de bedrijven in de kaartresultaten
                en elke pagina van de oude site.
              </p>
            </Reveal>
          </div>

          <div className="mt-12">
            <StatGrid items={onderzoekStats} tone="dark" />
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10">
              <RankmapRaster />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 grid gap-6 chamf chamf-lg border border-[var(--color-line-strong)] bg-s1/50 p-6 md:grid-cols-[auto_1fr] md:items-center md:gap-8 md:p-8">
              <span className="font-display text-xs font-bold uppercase tracking-[0.1em] text-blue-text">De diagnose</span>
              <p className="text-[1.02rem] leading-relaxed text-g200">
                Google kende het bedrijf, maar wist niet wat het precies deed. Dat los je niet op met trucjes, maar
                met diepte: een eigen pagina per dienst, dezelfde diensten in het Google-profiel, en de categorie
                die bij het werk past.{" "}
                <Link href="/diensten/lokale-seo" className="font-semibold text-blue-text hover:underline">
                  Zo werkt lokale SEO bij ons
                </Link>
                .
              </p>
            </div>
          </Reveal>

          {/* het woordenboek */}
          <div className="mt-20 border-t border-[var(--color-line)] pt-14">
            <div className="max-w-2xl">
              <Reveal>
                <Eyebrow>Uit het onderzoek · Het woordenboek</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h3 className="mt-5 font-display text-2xl font-extrabold leading-tight tracking-tight text-paper sm:text-3xl">
                  De woorden die mensen typen, en de woorden die we bewust lieten liggen.
                </h3>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-g300">
                  Op &ldquo;voegbedrijf&rdquo; wordt bijna vijf keer zo vaak gezocht als op
                  &ldquo;gevelrestauratie&rdquo;. Een bureau dat alleen naar volume kijkt, had Rudy daarop gezet. Maar
                  Rudy wil juist niet gevonden worden als voegbedrijf, en de data gaf hem gelijk: wie zo zoekt, heeft
                  meestal een huis dat niet oud genoeg is.
                </p>
              </Reveal>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {[
                { kop: "Wel: zoals mensen het zeggen", items: woordenWel, wel: true },
                { kop: "Bewust niet: veel volume, verkeerde klus", items: woordenNiet, wel: false },
              ].map((kol, k) => (
                <Reveal key={kol.kop} delay={k * 0.08} className="h-full">
                  <div className="h-full chamf chamf-lg border border-[var(--color-line-strong)] bg-s1/70 p-6 md:p-7">
                    <p className={`font-display text-sm font-extrabold ${kol.wel ? "text-blue-text" : "text-g400"}`}>{kol.kop}</p>
                    <ul className="mt-5 divide-y divide-[var(--color-line)]">
                      {kol.items.map((w) => (
                        <li key={w.woord} className="flex items-start justify-between gap-5 py-3.5 first:pt-0 last:pb-0">
                          <span>
                            <span className={`block font-semibold ${kol.wel ? "text-paper" : "text-g300 line-through decoration-g600"}`}>{w.woord}</span>
                            <span className="mt-0.5 block text-[0.85rem] leading-snug text-g500">{w.noot}</span>
                          </span>
                          <span className="shrink-0 text-right">
                            <span className="block font-display text-lg font-extrabold tabular-nums text-paper">{w.volume.toLocaleString("nl-NL")}</span>
                            <span className="block text-[0.62rem] uppercase tracking-[0.08em] text-g600">per maand</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════ STAP 04 · GOOGLE-PROFIEL ═══════════ */}
      <section id="profiel" className="on-light relative scroll-mt-28 py-20 md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Stap {fase("profiel").nr} · {fase("profiel").titel}</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
                lines={[{ text: "Het profiel en de site" }, { text: "vertellen hetzelfde.", className: "text-g600" }]}
              />
              <Reveal delay={0.12}>
                <p className="mt-6 text-lg leading-relaxed text-g600">
                  Google Maps kijkt naar de categorieën en diensten in het bedrijfsprofiel, en zoekt op de website
                  naar bevestiging. Dus bouwden we die twee als spiegel: drie categorieën, elk met een eigen pagina,
                  en onder elke pagina de diensten die ook in het profiel staan.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.18}>
              <p className="text-lg leading-relaxed text-g600">
                De categorie Metselaar kreeg een pagina over voegwerk: daar zoeken mensen op, en dat is wat Rudy
                doet. Het profiel kreeg ook een nieuwe omschrijving, foto&apos;s van eigen werk, producten en het
                werkgebied. Een claim die niet meer klopte, ging eruit.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="mt-12">
              <ProfielSpiegel />
            </div>
          </Reveal>
          <div className="mt-12">
            <StatGrid items={profielStats} tone="light" />
          </div>
        </Container>
      </section>

      {/* ═══════════ STAP 05 · MERKBOEK ═══════════ */}
      <section id="merkboek" className="relative scroll-mt-28 overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -left-40 top-24 h-[520px] w-[520px] rounded-full bg-blue/12 blur-[150px]" />
        <Container className="relative">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Stap {fase("merkboek").nr} · {fase("merkboek").titel}</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
              lines={[{ text: "Het merk bestond al." }, { text: "Nu staat het vast.", className: "text-blue-text" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g300">
                Rudy&apos;s logo uit 2016 bleef, zo hadden we afgesproken. Maar een logo is nog geen huisstijl. We
                hebben het originele vectorbestand ontleed en gemeten, en daaruit een merkboek van 28 pagina&apos;s
                gemaakt: kleur, letter, vormen, beeld, toon en toepassingen. Pas toen dat vaststond, begon het
                ontwerp van de site.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12">
              <LogoOntleed />
            </div>
          </Reveal>

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14">
            <div>
              <Reveal>
                <h3 className="font-display text-2xl font-extrabold leading-tight tracking-tight text-paper sm:text-3xl">
                  Rood en navy uit het logo. Steen en kalk uit de muur.
                </h3>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-g300">
                  Drie kleuren staan letterlijk in het logobestand. De warme tinten kwamen ergens anders vandaan: we
                  hebben ze gemeten op foto&apos;s van Rudy&apos;s eigen metselwerk, steen en voeg apart. Voor de letters
                  kozen we Romeinse kapitalen, zoals in zijn logo: Cormorant Garamond voor koppen, Cinzel voor labels
                  en Source Sans 3 voor de tekst.
                </p>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {merkKleuren.map((k, i) => (
                <Reveal key={k.hex} delay={i * 0.05} className="h-full">
                  <div className="h-full overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1">
                    <div className="flex h-24 items-end p-3" style={{ background: k.hex }}>
                      <span className={`font-mono text-[0.72rem] font-semibold ${k.licht ? "text-[#262261]" : "text-white"}`}>{k.hex}</span>
                    </div>
                    <div className="p-3.5">
                      <p className="text-sm font-semibold text-paper">{k.naam}</p>
                      <p className="mt-0.5 text-[0.75rem] leading-snug text-g500">{k.herkomst}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <Reveal>
              <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-blue-text">Blader door het merkboek</p>
            </Reveal>
            <div className="mt-5">
              <MerkboekGalerij paginas={merkPaginas} />
            </div>
          </div>

          <Reveal delay={0.1}>
            <p className="mt-10 max-w-2xl text-[1rem] leading-relaxed text-g400">
              Het merkboek is van Rudy. Hij gebruikt het voor alles wat nog komt: drukwerk, kleding, de bus.{" "}
              <Link href="/diensten/branding" className="font-semibold text-blue-text hover:underline">
                Meer over branding bij Brandlift
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ STAP 06 · ONTWERP ═══════════ */}
      <section id="ontwerp" className="on-light relative scroll-mt-28 py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-14">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <Eyebrow>Stap {fase("ontwerp").nr} · {fase("ontwerp").titel}</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.3rem]"
                lines={[{ text: "Zijn foto's doen het werk." }, { text: "Het ontwerp maakt ruimte.", className: "text-g600" }]}
              />
              <Reveal delay={0.12}>
                <p className="mt-6 text-lg leading-relaxed text-g600">
                  Rudy had het zelf al gezegd: hele lappen tekst zijn niet zijn ding, zijn foto&apos;s moeten het werk
                  doen. Dus staan zijn projecten groot in beeld, in een vast ritme, en is de tekst opgedeeld in korte
                  blokken. Het rood en navy van zijn logo dragen de site, de horizon uit het logo sluit de pagina af, en
                  de kantelen van de toren keren terug als rand.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-4 text-lg leading-relaxed text-g600">
                  Het aanvraagformulier vraagt wat er moet gebeuren, wat voor pand het is en of je foto&apos;s hebt van
                  de gevel. Rudy ziet zo meteen of een klus bij hem past. Wie liever appt, kan dat ook, met de
                  verwachting erbij: reactie op werkdagen.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <p className="mt-6 text-sm text-g600">Beweeg over het scherm om door de homepage te scrollen.</p>
              </Reveal>
            </div>

            <div className="grid grid-cols-[1fr_0.42fr] items-start gap-4 sm:gap-6">
              <Reveal delay={0.08}>
                <ScrollBrowser src={`${IMG}/site-home-lang.jpg`} alt="De volledige homepage van R. van Esch Gevelrestauratie op desktop" url={c.url} breed={1100} hoog={11832} venster="aspect-[10/13]" />
              </Reveal>
              <Reveal delay={0.14}>
                <ScrollBrowser src={`${IMG}/site-home-lang-mobiel.jpg`} alt="De homepage van R. van Esch Gevelrestauratie op een telefoon" url={c.url} breed={412} hoog={16000} venster="aspect-[9/19.5]" mobiel />
              </Reveal>
            </div>
          </div>

          <div className="mt-20">
            <div className="max-w-2xl">
              <Reveal>
                <Eyebrow>Alleen voor Rudy ontworpen</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h3 className="mt-5 font-display text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
                  Vier onderdelen die je op geen andere site tegenkomt.
                </h3>
              </Reveal>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {eigenElementen.map((e, i) => (
                <Reveal key={e.kop} delay={(i % 2) * 0.08} className="h-full">
                  <figure className="group h-full overflow-hidden chamf chamf-lg border border-ink/10 bg-white shadow-[0_30px_70px_-45px_rgba(0,0,0,0.45)]">
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-ink/[0.07]">
                      <Image src={e.src} alt={e.alt} fill sizes="(max-width: 768px) 92vw, 560px" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
                    </div>
                    <figcaption className="p-6 md:p-7">
                      <span className="font-display text-xs font-bold text-blue">0{i + 1}</span>
                      <p className="mt-2 font-display text-lg font-extrabold leading-tight tracking-tight text-ink">{e.kop}</p>
                      <p className="mt-2 text-[0.95rem] leading-relaxed text-g600">{e.tekst}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════ STAP 07 · TEKSTEN EN BOUW ═══════════ */}
      <section id="bouw" className="relative scroll-mt-28 overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -right-40 top-16 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Stap {fase("bouw").nr} · {fase("bouw").titel}</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
                lines={[{ text: "Twintig pagina's," }, { text: "elk met één taak.", className: "text-blue-text" }]}
              />
              <Reveal delay={0.12}>
                <p className="mt-6 text-lg leading-relaxed text-g300">
                  Elke dienst kreeg een eigen pagina, met een tekst die het vak uitlegt zoals Rudy het aan een klant
                  uitlegt: waarom kalk en geen cement, hoe een scheur met spiraalankers wordt hersteld, wanneer je een
                  vergunning nodig hebt. Rudy leest mee; schrijven doen wij.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-4 text-lg leading-relaxed text-g300">
                  Elke pagina is beoordeeld door een verse lezer die er niet aan had meegewerkt, op een vaste
                  scorekaart. Pas bij een 9 of een 10 was een pagina klaar. Daarna de techniek: snelle pagina&apos;s,
                  gestructureerde data, en een doorverwijzing voor elk van de 52 oude adressen.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <LighthouseRingen lighthouse={lighthouse} />
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {pijlers.map((p, i) => (
              <Reveal key={p.kop} delay={i * 0.07} className="h-full">
                <div className="h-full chamf chamf-lg border border-[var(--color-line-strong)] bg-s1/70 p-6 md:p-7">
                  <h3 className="font-display text-lg font-extrabold leading-tight tracking-tight text-paper">{p.kop}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {p.punten.map((pt) => (
                      <li key={pt} className="flex gap-3 text-[0.93rem] leading-relaxed text-g300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 chamf-sm bg-blue-text" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-10 text-[1rem] leading-relaxed text-g400">
              Benieuwd hoe wij een website bouwen?{" "}
              <Link href="/diensten/website-laten-maken" className="font-semibold text-blue-text hover:underline">
                Lees hoe een website laten maken bij ons werkt
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ STAP 08 · SAMENWERKING EN LIVEGANG ═══════════ */}
      <section id="livegang" className="on-light relative scroll-mt-28 py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Stap {fase("livegang").nr} · {fase("livegang").titel}</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.6rem]"
                lines={[{ text: "Rudy hield de regie," }, { text: "wij deden het werk.", className: "text-g600" }]}
              />
              <Reveal delay={0.12}>
                <p className="mt-6 text-lg leading-relaxed text-g600">
                  Rudy is vakman, en zijn dagen staan op de steiger. Dus werkten we zo dat hij alleen nodig was waar
                  het echt om hem ging: vertellen, kijken en zeggen wat er niet klopte. Zijn feedback gaf hij op een
                  besloten testversie, met een knop waarmee hij op elke plek van elke pagina een opmerking kon zetten.
                  Per pagina vinkte hij af wanneer hij klaar was, en per opmerking zag hij wat we ermee deden.
                </p>
              </Reveal>
            </div>
            <div>
              <Reveal delay={0.12}>
                <p className="text-lg leading-relaxed text-g600">
                  De overstap regelden we samen met zijn provider: zijn domein en e-mail bleven waar ze waren, alleen
                  de site verhuisde. Op 18 november ging hij live. Oude links sturen door naar de nieuwe pagina&apos;s,
                  en nieuwe Google-reviews komen voortaan vanzelf op de site. In de eerste week kwamen de eerste
                  aanvragen via het nieuwe formulier binnen.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <a
                  href={`https://www.${c.url}`}
                  target="_blank"
                  rel="noopener"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue hover:underline"
                >
                  Bekijk de live site
                  <span aria-hidden>↗</span>
                </a>
              </Reveal>
            </div>
          </div>
          <div className="mt-12">
            <StatGrid items={samenwerkingStats} tone="light" />
          </div>
        </Container>
      </section>

      {/* de tijdlijn, steen voor steen */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <Container className="relative">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Het hele traject, steen voor steen</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Van eerste telefoontje" }, { text: "tot livegang.", className: "text-blue-text" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g300">
                Zestien momenten, gemetseld in halfsteensverband, in de kleuren van Rudy&apos;s merkboek. De donkere
                stenen zijn de momenten waarop Rudy zelf aan zet was. Tik op een steen.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="mt-12">
              <MetselTijdlijn />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ HERKEN JE DIT ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Herken je dit?</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Goed in je vak." }, { text: "Maar weet Google dat ook?", className: "text-g600" }]}
            />
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                kop: "Google kent je naam, niet je specialisme",
                tekst: "Rudy stond bovenaan op zijn vak en nergens op zijn specialisme. Dat zien we vaker: het profiel en de site vertellen niet wat je precies doet.",
              },
              {
                kop: "Je wilt de juiste klussen",
                tekst: "Een goede site trekt niet alleen aan, hij filtert ook. Bij Rudy op het bouwjaar van het pand; bij jou misschien op regio of soort klus.",
              },
              {
                kop: "Je hebt geen tijd voor een websiteproject",
                tekst: "Eén formulier, een paar gesprekken en een testversie waarop je klikt. De rest doen wij, van onderzoek tot overstap.",
              },
            ].map((k, i) => (
              <Reveal key={k.kop} delay={i * 0.07} className="h-full">
                <div className="h-full chamf chamf-lg border border-ink/10 bg-white p-6 shadow-[0_20px_50px_-34px_rgba(0,0,0,0.3)] md:p-7">
                  <span className="font-display text-xs font-bold text-blue">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-lg font-extrabold leading-tight tracking-tight text-ink">{k.kop}</h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-g600">{k.tekst}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-10">
              <Button href="/contact" variant="primary">
                Plan een gratis groeigesprek
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ RUDY AAN HET WOORD (video + review volgen) ═══════════ */}
      <RudyAanHetWoord />

      <CasesCarousel tone="light" eyebrow="Meer cases" heading={["Meer werk uit", "de praktijk."]} />

      <CtaBlock
        h2="Ook zo'n traject voor jouw bedrijf?"
        body="Plan een gratis groeigesprek van 30 minuten. Je krijgt dezelfde soort analyse als Rudy: waar je nu staat in Google, en wat er beter kan."
      />
    </main>
  );
}
