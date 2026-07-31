import { buildPageMetadata } from "@/lib/metadata";
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
import { LokaleSeoScope } from "@/components/sections/LokaleSeoScope";
import { caseEykelenboom, reviews } from "@/lib/site";
import { serviceSchema } from "@/lib/schema";

const PATH = "/diensten/lokale-seo";
const UPDATED = "2026-07-16";

export const metadata = buildPageMetadata({
  title: "Lokale SEO - beter gevonden in je regio",
  description:
    "Lokale SEO waarmee je gevonden wordt op de klus die je wilt, in de regio waar je werkt. Dienstpagina's, Google Bedrijfsprofiel, schema en reviews.",
  path: PATH,
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Diensten", path: "/diensten" },
  { name: "Lokale SEO", path: PATH },
];

const heroChips = ["Sinds 2021", "Basis altijd inbegrepen", "5,0 op Google", "Geen wachtlijst"];

/* ── de vier lekken: probleem + het gevolg ── */
const problemen = [
  {
    nr: "01",
    icon: "search",
    title: "Geen lokale structuur",
    body: "Zonder aparte dienst- en plaatspagina's kan Google je nergens aan koppelen. Je bestaat wel, maar niet op de zoekopdrachten waar klanten je zoeken.",
    gevolg: "Onzichtbaar op je belangrijkste zoekwoorden",
  },
  {
    nr: "02",
    icon: "pin",
    title: "Verwaarloosd Bedrijfsprofiel",
    body: "Verouderde foto's, ontbrekende diensten, geen beheer. Het kaartblok bovenaan kiest dan een concurrent - ook als jij het betere werk levert.",
    gevolg: "Het kaartblok kiest de concurrent",
  },
  {
    nr: "03",
    icon: "cross",
    title: "Gegevens die niet kloppen",
    body: "Een oud adres in de ene gids, een ander telefoonnummer op een platform. Die inconsistentie kost vertrouwen - bij Google en bij je klant.",
    gevolg: "Google en klanten twijfelen",
  },
  {
    nr: "04",
    icon: "clock",
    title: "Niemand houdt het bij",
    body: "Lokale vindbaarheid is geen eenmalige klus. Zonder beheer en onderhoud zak je langzaam terug terwijl de concurrent doorbouwt.",
    gevolg: "Je zakt terug, de concurrent stijgt",
  },
];

/* ── head-to-head: losse SEO-rapportjes vs. Brandlift ── */
const versus: { criterium: string; los: string; wij: string }[] = [
  { criterium: "Wat je krijgt", los: "Een rapport met groene vinkjes", wij: "Vindbaarheid die aanvragen oplevert" },
  { criterium: "De aanpak", los: "Losse trucs en snelle fixes", wij: "Eén compleet systeem in één hand" },
  { criterium: "Je contact", los: "Een accountmanager op afstand", wij: "Direct met de bouwer, korte lijnen" },
  { criterium: "Eigenaarschap", los: "Lock-in en afhankelijkheid", wij: "Jij bent en blijft eigenaar van alles" },
  { criterium: "De belofte", los: "'Gegarandeerd positie 1'", wij: "Eerlijk over wat realistisch is" },
];

/* ── proces: signaal wordt sterker ── */
const proces = [
  { title: "Nulmeting en analyse", body: "Waar sta je nu, waar zoekt jouw klant op en wie staat er boven je? We brengen de lokale markt en je concurrentie in kaart." },
  { title: "Structuur en pagina's", body: "Dienst- en plaatspagina's die aansluiten op echte zoekopdrachten, met interne links en teksten die overtuigen." },
  { title: "Techniek en schema", body: "Snelle, veilige techniek en gestructureerde data die Google precies vertellen wie je bent en waar je werkt." },
  { title: "Google Bedrijfsprofiel", body: "Volledig optimaliseren: categorieën, diensten, foto's en berichten - en daarna doorlopend beheren." },
  { title: "Vermeldingen en consistentie", body: "Dezelfde naam-, adres- en telefoongegevens in de gidsen en platforms die er lokaal toe doen." },
  { title: "Meten en doorgroeien", body: "Na livegang zie je wat werkt. Wie verder wil groeien, kan dat met de optionele groei-retainer." },
];

const steden = [
  { label: "Den Haag", href: "/website-laten-maken-den-haag" },
  { label: "Rotterdam", href: "/website-laten-maken-rotterdam" },
  { label: "Eindhoven", href: "/website-laten-maken-eindhoven" },
  { label: "Utrecht", href: "/website-laten-maken-utrecht" },
  { label: "Amsterdam", href: "/website-laten-maken-amsterdam" },
  { label: "Delft", href: "/website-laten-maken-delft" },
];

const faqs = [
  {
    q: "Wat is lokale SEO precies?",
    a: "Lokale SEO is het geheel van optimalisaties dat ervoor zorgt dat jouw bedrijf gevonden wordt door klanten in je eigen regio - in de gewone zoekresultaten en in het kaartblok van Google. Het omvat je website-structuur, je Google Bedrijfsprofiel, gestructureerde data en consistente lokale vermeldingen.",
  },
  {
    q: "Zit lokale SEO al in een website van Brandlift?",
    a: "Ja. De complete lokale basis - structuur, dienst- en plaatspagina's, schema, vermeldingen en een geoptimaliseerd Google Bedrijfsprofiel - zit standaard in elk websiteproject. Je hoeft SEO er dus niet achteraf bij te kopen.",
    link: { label: "Meer over website laten maken", href: "/diensten/website-laten-maken" },
  },
  {
    q: "Wat kost lokale SEO?",
    a: "De basis kost bij ons niets extra: die zit inbegrepen in elk websiteproject, vanaf 1.500 euro. Wil je daarna doorlopend aan posities en aanvragen werken, dan kan dat met een optionele groei-retainer. Wat die kost hangt af van je markt en ambitie - dat bespreken we eerlijk in het gratis groeigesprek.",
    link: { label: "Lees wat een website kost", href: "/kennisbank/wat-kost-een-website-laten-maken" },
  },
  {
    q: "Hoe snel zie ik resultaat van lokale SEO?",
    a: "Dat hangt af van je markt en concurrentie. Op minder competitieve zoekopdrachten zie je vaak binnen enkele weken tot maanden beweging; op de zwaarste termen is het een kwestie van consequent doorbouwen. We zijn daar eerlijk over - lokale SEO is opbouwen, geen knop die je omzet.",
  },
  {
    q: "Wat is het verschil tussen lokale en landelijke SEO?",
    a: "Landelijke SEO richt zich op heel Nederland en draait vooral om content en autoriteit. Lokale SEO richt zich op jouw stad en regio: het kaartblok, je Google Bedrijfsprofiel, plaatspagina's en lokale vermeldingen. Voor bedrijven die klanten uit hun eigen regio halen, levert lokale SEO vrijwel altijd het snelste resultaat.",
  },
  {
    q: "Wat is een Google Bedrijfsprofiel en waarom is het zo belangrijk?",
    a: "Je Google Bedrijfsprofiel is de vermelding die verschijnt in Google Maps en het kaartblok bovenaan de zoekresultaten - met je reviews, foto's, openingstijden en contactgegevens. Voor lokale zoekopdrachten kijken klanten daar het eerst. Een geoptimaliseerd en actief beheerd profiel is daarom een van de sterkste lokale signalen die er bestaan.",
  },
  {
    q: "Garanderen jullie positie 1 in Google?",
    a: "Nee - en wees voorzichtig met iedereen die dat wel doet. Niemand bepaalt de resultaten van Google, behalve Google. Wat we wel doen: de complete lokale basis bouwen die aantoonbaar werkt, en eerlijk zijn over wat realistisch is voor jouw markt en concurrentie.",
  },
  {
    q: "Kunnen jullie ook mijn bestaande website lokaal optimaliseren?",
    a: "Ja. We kijken eerst wat er staat: soms is losse optimalisatie genoeg, vaak is een herbouw met een goede lokale structuur effectiever en zelfs voordeliger. In het groeigesprek krijg je daar een eerlijk advies over - ook als dat betekent dat je bij je huidige site blijft.",
  },
];

function pillarSchema() {
  const s = serviceSchema({
    name: "Lokale SEO",
    description: metadata.description as string,
    path: PATH,
    faqs,
    crumbs,
    withReviews: reviews,
  });
  s["@graph"].push({
    "@type": "HowTo",
    name: "Zo bouwt Brandlift je lokale vindbaarheid op",
    description: "Van nulmeting tot doorlopende groei - de zes stappen waarmee we lokale vindbaarheid opbouwen.",
    step: proces.map((p, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: p.title,
      text: p.body,
    })),
  });
  return s;
}

function Check({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}
function Cross({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
function Pin({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
function MiniStar() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="text-blue-text">
      <path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.8 6.1 20.2l1.2-6.6L2.5 9l6.6-.9L12 2z" />
    </svg>
  );
}

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pillarSchema()) }} />

      {/* ═══════════ HERO — met local-pack mock ═══════════ */}
      <section className="relative overflow-hidden bg-s0 pt-10 pb-20 md:pb-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="animate-glow pointer-events-none absolute -top-40 right-[-12%] h-[520px] w-[520px] rounded-full bg-blue/20 blur-[150px]" />
        <Container className="relative">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <Reveal>
                <Eyebrow>Diensten · Lokale SEO</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-5 font-display text-[2.1rem] font-extrabold leading-[1.04] tracking-tight text-paper sm:text-5xl lg:text-[3.2rem]">
                  Lokale SEO die aanvragen oplevert
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g200">
                  Beter gevonden worden door klanten in je eigen regio - en die bezoekers omzetten in
                  aanvragen. Wij regelen alles wat lokale vindbaarheid vraagt: van je website-structuur
                  en Google Bedrijfsprofiel tot schema en lokale vermeldingen. Geen rapport met groene
                  vinkjes, maar vindbaarheid die je agenda vult.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {heroChips.map((chip) => (
                    <li key={chip} className="inline-flex items-center gap-2 chamf-sm border border-[var(--color-line-strong)] bg-s1/70 px-3.5 py-2 text-sm font-medium text-g100 backdrop-blur-sm">
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
                  <Link href="/cases/hovenier-eykelenboom" className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-text hover:underline">
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

            {/* local-pack mock — jouw bedrijf op 1 */}
            <Reveal delay={0.12}>
              <div className="relative mx-auto w-full max-w-[440px]">
                <div className="animate-glow pointer-events-none absolute -inset-5 -z-10 rounded-[32px] bg-blue/15 blur-[70px]" />
                <div className="overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 shadow-[0_44px_100px_-45px_rgba(0,0,0,0.8)]">
                  <div className="flex items-center gap-2 border-b border-[var(--color-line)] bg-s2/60 px-4 py-3">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0 text-g500">
                      <circle cx="11" cy="11" r="7" />
                      <path d="m21 21-4.3-4.3" strokeLinecap="round" />
                    </svg>
                    <span className="text-[0.78rem] font-medium text-g300">jouw dienst + jouw plaats</span>
                  </div>
                  <div className="p-4 sm:p-5">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-g500">Bedrijven in de buurt</p>
                    {/* map strip */}
                    <div className="relative mt-2.5 h-16 overflow-hidden rounded-lg border border-white/10 bg-s2">
                      <div className="absolute inset-0 grid-lines opacity-50" />
                      <span className="absolute left-[34%] top-[42%]">
                        <span className="animate-ping-slow absolute -inset-2 rounded-full border-2 border-blue-text" />
                        <span className="block h-2.5 w-2.5 chamf-sm bg-blue shadow-[0_0_16px_rgba(1,48,253,0.9)]" />
                      </span>
                      <span className="absolute left-[62%] top-[58%] h-1.5 w-1.5 rounded-full bg-white/30" />
                      <span className="absolute left-[78%] top-[28%] h-1.5 w-1.5 rounded-full bg-white/30" />
                    </div>
                    {/* entries */}
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-3 rounded-lg border border-blue/50 bg-blue/[0.14] px-3.5 py-2.5 shadow-[0_0_30px_-8px_rgba(1,48,253,0.55)]">
                        <span className="grid h-6 w-6 shrink-0 place-items-center chamf-sm bg-blue font-display text-xs font-extrabold text-white">1</span>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-bold text-paper">Jouw bedrijf</p>
                          <span className="mt-0.5 flex items-center gap-1.5">
                            <span className="flex gap-0.5"><MiniStar /><MiniStar /><MiniStar /><MiniStar /><MiniStar /></span>
                            <span className="text-[0.65rem] text-g500">geoptimaliseerd en beheerd</span>
                          </span>
                        </div>
                        <span className="grid h-7 w-7 shrink-0 place-items-center chamf-sm bg-blue/20 text-blue-text">
                          <Pin />
                        </span>
                      </div>
                      {["2", "3"].map((n) => (
                        <div key={n} className="flex items-center gap-3 rounded-lg border border-white/8 px-3.5 py-2.5 opacity-55">
                          <span className="grid h-6 w-6 shrink-0 place-items-center chamf-sm bg-white/10 font-display text-xs font-bold text-g500">{n}</span>
                          <div className="min-w-0 flex-1">
                            <div className="h-1.5 w-2/5 rounded-full bg-white/20" />
                            <div className="mt-1.5 h-1 w-1/4 rounded-full bg-white/10" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="mt-3.5 text-center text-[0.68rem] italic text-g600">
                      het kaartblok - waar lokale klanten echt kiezen
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ TRUST STRIP ═══════════ */}
      <BenefitMarquee />

      {/* ═══════════ DEFINITIE (AEO) + anatomie van een zoekopdracht ═══════════ */}
      <section className="on-light relative py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.8fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>In het kort</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.6rem]"
              lines={[{ text: "Wat is lokale SEO" }, { text: "en waarom werkt het?", className: "text-g600" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                Lokale SEO is het geheel van optimalisaties dat ervoor zorgt dat jouw bedrijf gevonden
                wordt door klanten in je eigen regio - in de gewone zoekresultaten en in het kaartblok
                van Google. Het werkt omdat lokale zoekers klaar zijn om contact op te nemen: wie dan
                bovenaan staat, krijgt de aanvraag.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-g600">
                Sterke lokale SEO begint bij je website: de structuur bepaalt waar je op gevonden kunt
                worden. Daarom zit de complete lokale basis bij ons standaard in elk{" "}
                <Link href="/diensten/website-laten-maken" className="font-semibold text-blue hover:underline">
                  websiteproject
                </Link>{" "}
                - geen losse dienst die je er achteraf bij moet kopen.
              </p>
            </Reveal>
          </div>

          {/* anatomie van een lokale zoekopdracht */}
          <Reveal delay={0.12}>
            <div className="chamf chamf-lg border border-ink/10 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)] md:p-8">
              <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-blue">Anatomie van een lokale zoekopdracht</p>
              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <span className="chamf-sm border border-ink/12 bg-black/[0.02] px-4 py-2.5 font-display text-base font-extrabold text-ink">hovenier</span>
                <span className="font-display text-lg font-extrabold text-g600">+</span>
                <span className="chamf-sm bg-blue px-4 py-2.5 font-display text-base font-extrabold text-white shadow-[0_10px_28px_-8px_rgba(1,48,253,0.6)]">rijswijk</span>
              </div>
              <div className="mt-5 space-y-3 border-t border-ink/10 pt-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center chamf-sm bg-black/[0.04] text-g600 font-display text-[0.65rem] font-bold">D</span>
                  <p className="text-sm leading-relaxed text-g600"><span className="font-semibold text-ink">De dienst</span> - dit vangt je dienstpagina af</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center chamf-sm bg-blue/10 text-blue font-display text-[0.65rem] font-bold">P</span>
                  <p className="text-sm leading-relaxed text-g600"><span className="font-semibold text-ink">De plaats</span> - dit vangt je plaatspagina en je Google Bedrijfsprofiel af</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center chamf-sm bg-blue text-white">
                    <Check size={12} />
                  </span>
                  <p className="text-sm leading-relaxed text-g600"><span className="font-semibold text-ink">De intentie</span> - deze zoeker is klaar om te bellen</p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ PROBLEEM — diagnose met gevolg (dark, impact) ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-blue/12 blur-[150px]" />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <div>
              <Reveal>
                <Eyebrow>Waar het misgaat</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.9rem]"
                lines={[{ text: "Vier stille lekken." }, { text: "Elke dag een gemiste klus.", className: "text-blue-text" }]}
              />
            </div>
            <Reveal delay={0.12}>
              <p className="max-w-md text-lg leading-relaxed text-g300 lg:justify-self-end">
                Vrijwel nooit ligt het aan het vakwerk. Dit zijn de vier lekken die samen bepalen dat de
                concurrent de aanvraag krijgt - en jij niet.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {problemen.map((p, i) => (
              <Reveal key={p.nr} delay={(i % 2) * 0.07}>
                <div className="group relative flex h-full flex-col overflow-hidden chamf chamf-lg border border-white/10 bg-s1/50 p-7 backdrop-blur-md transition-all duration-200 hover:border-blue/50 hover:bg-s1/70 md:p-8">
                  <span aria-hidden className="pointer-events-none absolute -right-2 top-2 font-display text-[5.5rem] font-extrabold leading-none text-white/[0.04] transition-colors duration-300 group-hover:text-white/[0.07]">
                    {p.nr}
                  </span>
                  <span className="relative grid h-11 w-11 place-items-center chamf-sm border border-amber-400/30 bg-amber-400/10 text-amber-300">
                    {p.icon === "search" && <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>}
                    {p.icon === "pin" && <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>}
                    {p.icon === "cross" && <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>}
                    {p.icon === "clock" && <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>}
                  </span>
                  <h3 className="relative mt-4 font-display text-xl font-extrabold leading-tight tracking-tight text-paper">{p.title}</h3>
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
              <p className="text-lg font-semibold italic text-g200">Herkenbaar? Dan dichten we die lekken.</p>
              <Button href="/contact" variant="primary" className="group">
                Plan een gratis groeigesprek
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ SCOPE — de SERP-simulator ═══════════ */}
      <LokaleSeoScope />

      {/* ═══════════ EERLIJKE SEO — head-to-head versus ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Eerlijke SEO</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Een rapport met vinkjes." }, { text: "Of vindbaarheid die verkoopt.", className: "text-g600" }]}
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-g600">
                De meeste SEO-bureaus verkopen je een rapportje. Wij verkopen je aanvragen. Zo staan we
                naast elkaar.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <div className="mt-12 overflow-hidden chamf chamf-lg border border-ink/10 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.3)]">
              {/* header */}
              <div className="grid grid-cols-2 md:grid-cols-[0.9fr_1.1fr_1.1fr]">
                <div className="hidden bg-s0 px-6 py-5 md:block" />
                <div className="bg-s0 px-5 py-5 md:px-6">
                  <p className="font-display text-sm font-bold tracking-tight text-g500 sm:text-base">Losse SEO-rapportjes</p>
                </div>
                <div className="relative bg-blue px-5 py-5 md:px-6">
                  <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
                  <p className="relative font-display text-sm font-extrabold tracking-tight text-white sm:text-base">Brandlift</p>
                </div>
              </div>
              {/* rows */}
              {versus.map((row, i) => (
                <div key={row.criterium} className={`grid grid-cols-2 border-t border-ink/8 md:grid-cols-[0.9fr_1.1fr_1.1fr] ${i % 2 ? "bg-black/[0.015]" : "bg-white"}`}>
                  <div className="col-span-2 px-5 pt-4 pb-1 md:col-span-1 md:px-6 md:py-5">
                    <p className="font-display text-xs font-bold uppercase tracking-[0.08em] text-blue md:text-[0.8rem] md:normal-case md:tracking-normal md:text-ink md:font-semibold">{row.criterium}</p>
                  </div>
                  <div className="flex items-start gap-2.5 px-5 py-3 md:px-6 md:py-5">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center chamf-sm border border-ink/12 text-g500"><Cross size={11} /></span>
                    <span className="text-sm leading-snug text-g600">{row.los}</span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-blue/[0.05] px-5 py-3 md:px-6 md:py-5">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center chamf-sm bg-blue text-white"><Check size={11} /></span>
                    <span className="text-sm font-semibold leading-snug text-ink">{row.wij}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-g700">
                  <span className="flex gap-0.5">{Array.from({ length: 5 }).map((_, s) => <MiniStar key={s} />)}</span>
                  Beoordeeld met 5,0 op Google
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-g700">
                  <span className="h-1.5 w-1.5 chamf-sm bg-blue" /> Founder-led sinds 2021
                </span>
              </div>
              <Button href="/contact" variant="primary" className="group">
                Plan een gratis groeigesprek
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ BEWIJS — Eykelenboom door de SEO-lens ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">
            <div>
              <Reveal>
                <Eyebrow>Bewijs uit de praktijk</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
                lines={[{ text: "Eén lokale structuur." }, { text: "Twaalf keer zoveel aanvragen.", className: "text-blue-text" }]}
              />
              <Reveal delay={0.14}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-g300">
                  Voor Hovenier Eykelenboom bouwden we de complete lokale basis: een pagina per dienst
                  en per werkgebied, gestructureerde data, lokale vermeldingen en een beheerd Google
                  Bedrijfsprofiel. Vakwerk dat eerst onvindbaar was, wordt nu gevonden in precies de
                  wijken waar de klanten zitten.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-7 inline-flex items-baseline gap-2.5 chamf chamf-lg bg-blue px-6 py-4 font-display font-extrabold text-white shadow-[0_24px_60px_-24px_rgba(1,48,253,0.8)]">
                  <span className="text-2xl">{caseEykelenboom.stat.from}</span>
                  <span className="text-white/60">→</span>
                  <span className="text-4xl">{caseEykelenboom.stat.to}</span>
                  <span className="text-sm font-semibold text-white/85">{caseEykelenboom.stat.unit}</span>
                </div>
                <p className="mt-2 text-sm text-g500">{caseEykelenboom.stat.label}</p>
              </Reveal>
              <Reveal delay={0.26}>
                <Link href="/cases/hovenier-eykelenboom" className="group mt-7 flex w-fit items-center gap-2 text-sm font-semibold text-blue-text hover:underline">
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
                  <span className="ml-2 flex-1 truncate chamf-sm bg-white/[0.04] px-3 py-1 font-semibold text-[0.62rem] tracking-[0.08em] text-g500">
                    {caseEykelenboom.url}
                  </span>
                </div>
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image src={caseEykelenboom.image} alt={caseEykelenboom.imageAlt} fill sizes="(max-width: 1024px) 92vw, 48vw" className="object-cover object-center transition-transform duration-500 ease-[var(--ease-brand)] group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-blue-deep/15 mix-blend-multiply" />
                  <span className="absolute bottom-3 left-3 chamf-sm bg-s0/70 px-2.5 py-1 font-semibold text-[0.58rem] uppercase tracking-[0.08em] text-g100 backdrop-blur-sm">
                    {caseEykelenboom.sector}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ MEER WERK · REVIEWS ═══════════ */}
      <CasesCarousel tone="light" heading={["Meer werk voor bedrijven", "die gevonden willen worden."]} />

      <Reviews tone="dark" />

      {/* ═══════════ TRUST STRIP (reprise) ═══════════ */}
      <BenefitMarquee speed={38} />

      {/* ═══════════ PROCES — het signaal wordt sterker ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Het proces</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Zo bouwen we je" }, { text: "vindbaarheid op.", className: "text-g600" }]}
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-g600">
                Stap voor stap wordt je lokale signaal sterker. De basis zit in elk websiteproject -
                doorgroeien daarna is optioneel.
              </p>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {proces.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.07}>
                <div className="group h-full chamf chamf-lg border border-black/10 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(1,48,253,0.35)]">
                  {/* signaalbalk: elke stap vult verder */}
                  <div className="flex items-center gap-1.5" aria-hidden>
                    {Array.from({ length: 6 }).map((_, seg) => (
                      <span
                        key={seg}
                        className={`h-1.5 flex-1 rounded-full transition-colors ${
                          seg <= i ? "bg-blue shadow-[0_0_10px_rgba(1,48,253,0.5)]" : "bg-ink/10"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="mt-5 flex items-baseline gap-2.5">
                    <span className="font-display text-sm font-bold text-blue">0{i + 1}</span>
                    <h3 className="font-display text-lg font-extrabold leading-tight tracking-tight text-ink">{p.title}</h3>
                  </div>
                  <p className="mt-2.5 text-[0.92rem] leading-relaxed text-g600">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ INVESTERING — twee routes + garantie ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
        <Container className="relative">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Investering</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Wat kost lokale SEO?" }, { text: "De basis: niets extra.", className: "text-blue-text" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g300">
                De complete lokale basis zit standaard in elk websiteproject - vanaf €1.500. Doorgroeien
                daarna kan, maar hoeft niet.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <Reveal>
              <div className="h-full chamf chamf-lg border border-white/10 bg-s1/50 p-7 backdrop-blur-md md:p-8">
                <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-blue-text">Route 1 · De basis</p>
                <p className="mt-3 font-display text-2xl font-extrabold tracking-tight text-paper">Inbegrepen</p>
                <p className="mt-1 text-xs font-semibold text-g500">bij elke website, vanaf €1.500</p>
                <p className="mt-4 text-sm leading-relaxed text-g500">
                  Lokale structuur, schema, vermeldingen en een geoptimaliseerd Google Bedrijfsprofiel -
                  vanaf livegang gebouwd om gevonden te worden.
                </p>
                <Link href="/website-kosten-calculator" className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-text hover:underline">
                  Bereken wat een website kost
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full chamf chamf-lg border border-white/10 bg-s1/50 p-7 backdrop-blur-md md:p-8">
                <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-blue-text">Route 2 · Doorgroeien</p>
                <p className="mt-3 font-display text-2xl font-extrabold tracking-tight text-paper">Optionele retainer</p>
                <p className="mt-1 text-xs font-semibold text-g500">per maand, opzegbaar</p>
                <p className="mt-4 text-sm leading-relaxed text-g500">
                  Doorlopend werken aan posities, content en je Google Bedrijfsprofiel. Wat dat kost
                  hangt af van je markt en ambitie - dat bespreken we eerlijk in het groeigesprek.
                </p>
                <Link href="/contact" className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-text hover:underline">
                  Plan het groeigesprek
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="relative flex h-full flex-col overflow-hidden chamf chamf-lg bg-blue p-7 shadow-[0_36px_80px_-32px_rgba(1,48,253,0.7)] md:p-8">
                <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
                <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-white/15 blur-[55px]" />
                <p className="relative text-xs font-bold uppercase tracking-[0.1em] text-white/70">Weet in 30 minuten waar je staat</p>
                <p className="relative mt-3 font-display text-xl font-extrabold leading-snug tracking-tight text-white">
                  Een eerlijke inschatting van je lokale kansen.
                </p>
                <p className="relative mt-2.5 text-sm leading-relaxed text-white/85">
                  In een gratis groeigesprek laten we zien waar je nu staat, wat blijft liggen en wat
                  realistisch is. Geen salespitch.
                </p>
                <div className="relative mt-auto pt-6">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 chamf-sm bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-white/90"
                  >
                    Plan een gratis groeigesprek
                    <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ IN JOUW STAD — ticket-grid ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>In jouw regio</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Lokale SEO in" }, { text: "jouw stad.", className: "text-g600" }]}
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-g600">
                Elke stad heeft zijn eigen markt, wijken en concurrentie. Zo ziet onze aanpak eruit in
                de steden waar we bouwen.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steden.map((s, i) => (
              <Reveal key={s.href} delay={(i % 3) * 0.06}>
                <Link
                  href={s.href}
                  className="group relative flex h-full items-center gap-4 overflow-hidden chamf chamf-lg border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:border-blue/40 hover:shadow-[0_24px_50px_-24px_rgba(1,48,253,0.35)]"
                >
                  <span className="absolute right-0 top-0 h-4 w-4 bg-blue opacity-0 transition-opacity duration-200 [clip-path:polygon(100%_0,0_0,100%_100%)] group-hover:opacity-100" />
                  <span className="grid h-11 w-11 shrink-0 place-items-center chamf-sm bg-blue/10 text-blue transition-colors duration-200 group-hover:bg-blue group-hover:text-white">
                    <Pin size={17} />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-extrabold tracking-tight text-ink">{s.label}</span>
                    <span className="block text-sm text-g600">Website met lokale SEO in {s.label}</span>
                  </span>
                  <span className="ml-auto text-blue opacity-0 transition-all duration-200 group-hover:opacity-100">→</span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.14}>
            <p className="mt-8 text-base leading-relaxed text-g600">
              Onze thuisbasis is Den Haag - voor die stad bouwen we ook aan een eigen verdieping:{" "}
              <Link href="/seo-den-haag" className="font-semibold text-blue hover:underline">
                SEO in Den Haag
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ FAQ · SLOT ═══════════ */}
      <FaqBlock faqs={faqs} tone="light" />

      <FinalCta />
    </main>
  );
}
