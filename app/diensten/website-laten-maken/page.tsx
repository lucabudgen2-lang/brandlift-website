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
import { BenefitMarquee } from "@/components/sections/BenefitMarquee";
import { CasesCarousel } from "@/components/sections/CasesCarousel";
import { Methode } from "@/components/sections/Methode";
import { Founder } from "@/components/sections/Founder";
import { FinalCta } from "@/components/sections/FinalCta";
import { caseEykelenboom, reviews, methode } from "@/lib/site";
import { serviceSchema } from "@/lib/schema";

const PATH = "/diensten/website-laten-maken";
const UPDATED = "2026-07-13";

export const metadata: Metadata = {
  title: "Website laten maken - strategisch en vindbaar",
  description:
    "Website laten maken die klanten oplevert. Strategie, ontwerp, lokale SEO en conversie in een. Vanaf 1.500 euro, live in 3 tot 4 weken.",
  alternates: { canonical: PATH },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Diensten", path: "/diensten" },
  { name: "Website laten maken", path: PATH },
];

const heroChips = ["Sinds 2021", "Lokale SEO inbegrepen", "Vanaf €1.500", "5,0 op Google"];

const inbegrepen = [
  "Strategie en positionering - eerst het doel, dan het ontwerp",
  "Webdesign dat past bij de kwaliteit van je werk",
  "Copy en een heldere paginastructuur",
  "Lokale SEO-basis vanaf de fundering",
  "Conversiegerichte pagina's en call-to-actions",
  "Snelle, veilige en schaalbare techniek",
];

/* ── iconography ── */
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
      return <svg {...c}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" /></svg>;
    case "gem":
      return <svg {...c}><path d="M6 3h12l3 5-9 13L3 8l3-5z" /><path d="M3 8h18M9 3l3 5 3-5M12 8l0 13" /></svg>;
    case "search":
      return <svg {...c}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>;
    case "chart":
      return <svg {...c}><path d="M3 17l6-6 4 4 7-7" /><path d="M17 8h4v4" /></svg>;
    case "partners":
      return <svg {...c}><circle cx="8.5" cy="8" r="3" /><circle cx="16" cy="9.5" r="2.4" /><path d="M3.5 19c0-2.8 2.2-5 5-5 1.7 0 3.2.8 4.1 2.1" /><path d="M13.5 19c.2-2.3 2-4 4.2-4 1.9 0 3.5 1.3 3.9 3.1" /></svg>;
    case "shield":
      return <svg {...c}><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="m9 12 2 2 4-4" /></svg>;
    case "clock":
      return <svg {...c}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
    case "globe":
      return <svg {...c}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" /></svg>;
    case "layers":
      return <svg {...c}><path d="M12 3 3 8l9 5 9-5-9-5z" /><path d="m3 13 9 5 9-5" /></svg>;
    default:
      return <svg {...c}><path d="m5 12 4.5 4.5L19 7" /></svg>;
  }
}

function Check({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

/* ── waarom een standaard website tekortschiet ── */
const problemen = [
  { icon: "chart", title: "Wel bezoek, geen aanvragen", body: "Verkeer zonder richting levert niets op. Zonder heldere boodschap, bewijs en een duidelijke route naar contact klikt de bezoeker weer weg." },
  { icon: "search", title: "Onvindbaar in Google", body: "Zonder lokale SEO-structuur sta je niet waar je klant zoekt. De concurrent die net beter is opgebouwd, wint de klus - ook al lever jij beter werk." },
  { icon: "gem", title: "Mooi, maar niet overtuigend", body: "Een fraai ontwerp zonder strategie overtuigt niemand. Zonder positionering en vertrouwenssignalen blijft een website een dure digitale brochure." },
];

/* ── de vier bouwstenen (link down naar de sub-pillars) ── */
const bouwstenen = [
  { icon: "target", title: "Strategie en positionering", body: "We beginnen bij de vraag waarom een klant voor jou kiest. Die positionering bepaalt de structuur, de boodschap en de route naar contact - nog voor er iets ontworpen wordt." },
  { icon: "gem", title: "Design en merk dat vertrouwen wekt", body: "We vertalen de kwaliteit van je werk naar een uitstraling die klopt: een merk, kleur en beeldtaal die passen bij je markt en gewenste positie.", link: { label: "Meer over branding", href: "/diensten/branding" } },
  { icon: "search", title: "Lokale SEO vanaf de fundering", body: "Aparte dienst- en locatiepagina's, gestructureerde data, lokale vermeldingen en een geoptimaliseerd Google Bedrijfsprofiel - zodat de juiste klanten je vinden.", link: { label: "Meer over lokale SEO", href: "/diensten/lokale-seo" } },
  { icon: "chart", title: "Conversie die bezoekers omzet", body: "Vertrouwen, duidelijkheid en een logische route naar contact. Zo worden bezoekers aanvragen, in plaats van cijfers die weer wegklikken.", link: { label: "Meer over conversie", href: "/diensten/conversie-optimalisatie" } },
];

/* ── waarom Brandlift ── */
const waaroms = [
  { icon: "partners", title: "Je praat direct met de bouwer", body: "Geen accountmanager, geen tussenlagen. Je werkt rechtstreeks met de mensen die je site ontwerpen en bouwen." },
  { icon: "shield", title: "We werken door tot je tevreden bent", body: "Nog niet tevreden met het resultaat? Dan werken we door - zonder extra kosten - tot het wel klopt." },
  { icon: "clock", title: "Meestal live binnen 3 - 4 weken", body: "Een strak proces met korte lijnen. In het groeigesprek koppelen we een concrete planning aan jouw project." },
  { icon: "layers", title: "Alles in één hand", body: "Strategie, branding, copy, SEO en development komen bij ons samen - geen losse leveranciers die langs elkaar heen werken." },
  { icon: "globe", title: "Aanpak uit de Amerikaanse markt", body: "We leerden het vak waar je online meteen opvalt of verdwijnt, en combineren dat met een achtergrond in fotografie, branding en development." },
  { icon: "chart", title: "Meetbaar gemaakt", body: "We bouwen niet op onderbuikgevoel. Je ziet wat werkt, zodat de site na livegang gericht verder kan groeien." },
];

/* ── cluster-hub linkgroepen ── */
const steden = [
  { label: "Den Haag", href: "/website-laten-maken-den-haag" },
  { label: "Rotterdam", href: "/website-laten-maken-rotterdam" },
  { label: "Eindhoven", href: "/website-laten-maken-eindhoven" },
  { label: "Utrecht", href: "/website-laten-maken-utrecht" },
  { label: "Amsterdam", href: "/website-laten-maken-amsterdam" },
  { label: "Delft", href: "/website-laten-maken-delft" },
];
const voorWieLinks = [
  { label: "Vakbedrijven en servicebedrijven", href: "/voor-wie/vakbedrijven" },
  { label: "Bekijk voor wie we bouwen", href: "/voor-wie" },
  { label: "Onze cases", href: "/cases" },
];
const kennisLinks = [
  { label: "Wat kost een website laten maken?", href: "/kennisbank/wat-kost-een-website-laten-maken" },
  { label: "Onze werkwijze", href: "/werkwijze" },
  { label: "Wat is lokale SEO?", href: "/kennisbank/wat-is-lokale-seo" },
];

const faqs = [
  {
    q: "Wat kost een website laten maken?",
    a: "Een website laten maken kost bij ons vanaf 1.500 euro, afhankelijk van het type en de mate van maatwerk. Volledig maatwerk begint vanaf 5.000 euro. In elke website zit een lokale SEO-basis, strategie en een sterk ontwerp; hosting en onderhoud lopen apart via een voordelig maandbedrag.",
    link: { label: "Lees wat een website kost", href: "/kennisbank/wat-kost-een-website-laten-maken" },
  },
  {
    q: "Hoe lang duurt het om een website te laten maken?",
    a: "Een website staat er meestal binnen 3 tot 4 weken, afhankelijk van de omvang en hoe snel content en feedback rond zijn. In het groeigesprek koppelen we een concrete planning aan jouw project.",
  },
  {
    q: "Is SEO inbegrepen bij een nieuwe website?",
    a: "Ja. Elke website bouwen we met een complete lokale SEO-basis: de juiste structuur, dienst- en locatiepagina's, gestructureerde data (schema), lokale vermeldingen en een geoptimaliseerd Google Bedrijfsprofiel. Zo is je site vanaf livegang gebouwd om gevonden te worden.",
    link: { label: "Meer over lokale SEO", href: "/diensten/lokale-seo" },
  },
  {
    q: "Maken jullie ook maatwerk websites?",
    a: "Ja. We werken niet met kant-en-klare sjablonen, maar bouwen je website op maat rond jouw strategie, doelgroep en boodschap. Maatwerk gaat bij ons niet alleen over code, maar over structuur, positionering en de route die je bezoeker aflegt.",
  },
  {
    q: "Van wie is de website als hij klaar is?",
    a: "Van jou. Je bent eigenaar van je website, je domein en je content. Je zit nergens aan vast en kunt altijd verder - bij ons of ergens anders. We geloven in resultaat als reden om te blijven, niet in lock-in.",
  },
  {
    q: "Wat kost het onderhoud van een website?",
    a: "Hosting en onderhoud lopen via een aparte, voordelige maandelijkse retainer, zodat je site snel, veilig en actueel blijft. We houden de bouwprijs en de maandkosten bewust gescheiden, zodat je precies weet waar je aan toe bent.",
  },
  {
    q: "Kunnen jullie een meertalige website bouwen?",
    a: "Ja. We werken in het Nederlands en Engels, en voor andere talen schakelen we professionele vertalers in. Je website kan meertalig, met dezelfde sterke SEO-basis per taal.",
  },
  {
    q: "Waarom zou ik niet gewoon voor een goedkope website kiezen?",
    a: "Een goedkope template staat er snel, maar mist strategie, sterke teksten en vindbaarheid - en levert daardoor zelden aanvragen op. Een strategische website is geen kostenpost maar een investering die zich terugverdient. Voor Hovenier Eykelenboom betekende dat een groei van 2 naar 24 aanvragen per maand.",
    link: { label: "Bekijk de case", href: "/cases/hovenier-eykelenboom" },
  },
];

function pillarSchema() {
  const s = serviceSchema({
    name: "Website laten maken",
    description: metadata.description as string,
    path: PATH,
    faqs,
    crumbs,
    withReviews: reviews,
  });
  s["@graph"].push({
    "@type": "HowTo",
    name: "De Brandlift Methode: van groeigesprek naar een website die klopt",
    description: methode.intro,
    step: methode.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.body,
    })),
  });
  return s;
}

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pillarSchema()) }} />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-s0 pt-10 pb-20 md:pb-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="animate-glow pointer-events-none absolute -top-40 right-[-12%] h-[520px] w-[520px] rounded-full bg-blue/20 blur-[150px]" />
        <Container className="relative">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <Reveal>
                <Eyebrow>Website laten maken</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-5 font-display text-[2.1rem] font-extrabold leading-[1.04] tracking-tight text-paper sm:text-5xl lg:text-[3.3rem]">
                  Website laten maken die klanten oplevert
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g200">
                  Een website laten maken is meer dan een mooi ontwerp - het is een groeifundament. Wij
                  bouwen strategische websites met lokale SEO en conversie voor Nederlandse bedrijven die
                  online serieus willen groeien. Gevestigd in Den Haag, actief in heel Nederland.
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
                  <Link href="/website-kosten-calculator" className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-text hover:underline">
                    Bereken direct wat het kost
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

            {/* showcase — real work + proof stat */}
            <Reveal delay={0.12}>
              <div className="relative">
                <div className="animate-glow pointer-events-none absolute -inset-6 -z-10 rounded-full bg-blue/15 blur-[80px]" />
                <div className="relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] shadow-[0_44px_100px_-45px_rgba(0,0,0,0.75)]">
                  <div className="flex items-center gap-2 border-b border-[var(--color-line)] bg-s2/60 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="ml-2 flex-1 truncate chamf-sm bg-white/[0.04] px-3 py-1 font-semibold text-[0.62rem] tracking-[0.08em] text-g500">
                      {caseEykelenboom.url}
                    </span>
                  </div>
                  <div className="relative aspect-[16/11]">
                    <Image src={caseEykelenboom.image} alt={caseEykelenboom.imageAlt} fill priority sizes="(max-width: 1024px) 92vw, 46vw" className="object-cover object-center" />
                    <div className="absolute inset-0 bg-blue-deep/15 mix-blend-multiply" />
                  </div>
                </div>
                <div className="absolute -bottom-5 -left-4 chamf-sm bg-blue px-5 py-3 shadow-[0_16px_40px_-12px_rgba(1,48,253,0.7)]">
                  <div className="font-semibold text-[0.55rem] uppercase tracking-[0.08em] text-white/70">Resultaat voor een klant</div>
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

      {/* ═══════════ DIRECT ANSWER / DEFINITIE (AEO) ═══════════ */}
      <section className="on-light relative py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>In het kort</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.6rem]"
              lines={[{ text: "Wat betekent een website" }, { text: "laten maken - en wat levert het op?", className: "text-g600" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                Een website laten maken betekent dat een specialist een website voor je ontwerpt en
                bouwt, afgestemd op je doel, doelgroep en markt. Bij een strategische aanpak is het
                resultaat geen digitale brochure, maar een groeifundament: een website die gevonden
                wordt, vertrouwen wekt en bezoekers omzet in aanvragen.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-g600">
                Het verschil zit niet in het ontwerp alleen, maar in de strategie, de vindbaarheid en de
                conversie eronder. Precies daar bouwen wij op.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="chamf chamf-lg border border-ink/10 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)] md:p-8">
              <p className="font-display text-sm font-bold uppercase tracking-[0.1em] text-blue">In elke website inbegrepen</p>
              <ul className="mt-5 space-y-3">
                {inbegrepen.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[0.95rem] leading-snug text-g800">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center chamf-sm bg-blue/10 text-blue">
                      <Check size={12} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ PROBLEEM (dark, frosted) ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />
        <Container className="relative">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Het probleem</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
              lines={[{ text: "De meeste websites zijn mooi." }, { text: "Maar ze leveren te weinig op.", className: "text-blue-text" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g300">
                Een website die er goed uitziet is nog geen website die klanten oplevert. Dit is meestal
                waar het misgaat.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {problemen.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.07}>
                <div className="group relative h-full overflow-hidden chamf chamf-lg border border-white/10 bg-s1/50 p-7 backdrop-blur-md transition-all duration-200 hover:border-blue/50 hover:bg-s1/70">
                  <span className="absolute right-0 top-0 h-4 w-4 bg-blue opacity-0 transition-opacity duration-200 [clip-path:polygon(100%_0,0_0,100%_100%)] group-hover:opacity-100" />
                  <span className="grid h-11 w-11 place-items-center chamf-sm border border-blue/30 bg-blue/10 text-blue-text transition-colors duration-200 group-hover:border-blue/60 group-hover:bg-blue group-hover:text-white">
                    <Icon name={p.icon} />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-extrabold leading-tight tracking-tight text-paper">{p.title}</h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-g500">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ WAT WE BOUWEN — de bouwstenen (link down) ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Wat we bouwen</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
              lines={[{ text: "Eén website. Alles wat hij" }, { text: "nodig heeft om te presteren.", className: "text-g600" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g600">
                Geen losse diensten, maar één groeifundament. Vier bouwstenen bepalen samen of je website
                klanten oplevert - wij regelen ze alle vier, in de juiste volgorde.
              </p>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {bouwstenen.map((b, i) => (
              <Reveal key={b.title} delay={(i % 2) * 0.06}>
                <div className="group relative h-full overflow-hidden chamf chamf-lg border border-black/10 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(1,48,253,0.35)] md:p-8">
                  <div className="flex gap-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center chamf-sm bg-blue/10 text-blue">
                      <Icon name={b.icon} />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-extrabold leading-tight tracking-tight text-ink">{b.title}</h3>
                      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-g600">{b.body}</p>
                      {b.link && (
                        <Link href={b.link.href} className="group/l mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:underline">
                          {b.link.label}
                          <span className="transition-transform duration-150 group-hover/l:translate-x-0.5">→</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ WAAROM BRANDLIFT (dark, frosted) ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />
        <Container className="relative">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Waarom Brandlift</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.9rem]"
              lines={[{ text: "Geen leverancier." }, { text: "Een partner die meebouwt.", className: "text-blue-text" }]}
            />
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {waaroms.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.06}>
                <div className="group relative h-full overflow-hidden chamf chamf-lg border border-white/10 bg-s1/50 p-6 backdrop-blur-md transition-all duration-200 hover:border-blue/50 hover:bg-s1/70 md:p-7">
                  <span className="absolute right-0 top-0 h-4 w-4 bg-blue opacity-0 transition-opacity duration-200 [clip-path:polygon(100%_0,0_0,100%_100%)] group-hover:opacity-100" />
                  <span className="grid h-11 w-11 place-items-center chamf-sm border border-blue/30 bg-blue/10 text-blue-text transition-colors duration-200 group-hover:border-blue/60 group-hover:bg-blue group-hover:text-white">
                    <Icon name={w.icon} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-extrabold leading-tight tracking-tight text-paper">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-g500">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ BEWIJS — Eykelenboom ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">
            <div>
              <Reveal>
                <Eyebrow>Bewijs uit de praktijk</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
                lines={[{ text: "Van 2 naar 24 aanvragen" }, { text: "per maand." }]}
              />
              <Reveal delay={0.14}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-g600">
                  Voor Hovenier Eykelenboom in Den Haag bouwden we een complete website met een lokale
                  SEO-structuur per dienst en werkgebied. Vakwerk dat eerst nauwelijks werd gevonden,
                  levert nu structureel aanvragen op - het verschil tussen een site die er staat en een
                  site die klanten oplevert.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-7 inline-flex items-baseline gap-2.5 chamf chamf-lg bg-blue px-6 py-4 font-display font-extrabold text-white shadow-[0_24px_60px_-24px_rgba(1,48,253,0.8)]">
                  <span className="text-2xl">{caseEykelenboom.stat.from}</span>
                  <span className="text-white/60">→</span>
                  <span className="text-4xl">{caseEykelenboom.stat.to}</span>
                  <span className="text-sm font-semibold text-white/85">{caseEykelenboom.stat.unit}</span>
                </div>
                <p className="mt-2 text-sm text-g600">{caseEykelenboom.stat.label}</p>
              </Reveal>
              <Reveal delay={0.26}>
                <Link href="/cases/hovenier-eykelenboom" className="group mt-7 flex w-fit items-center gap-2 text-sm font-semibold text-blue hover:underline">
                  Bekijk de volledige case
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <div className="group overflow-hidden chamf chamf-lg border border-black/10 bg-paper shadow-[0_34px_70px_-32px_rgba(1,48,253,0.4)]">
                <div className="flex items-center gap-2 border-b border-black/[0.07] bg-black/[0.02] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                  <span className="ml-2 flex-1 truncate chamf-sm bg-black/[0.04] px-3 py-1 font-semibold text-[0.62rem] tracking-[0.08em] text-g600">
                    {caseEykelenboom.url}
                  </span>
                </div>
                <div className="relative aspect-[16/11] overflow-hidden bg-s0">
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

      {/* ═══════════ MEER WERK · REVIEWS · WERKWIJZE ═══════════ */}
      <CasesCarousel tone="light" heading={["Meer werk voor", "bedrijven die serieus willen groeien."]} />

      <Reviews tone="dark" />

      <Methode />

      {/* ═══════════ KOSTEN ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-14">
          <div>
            <Reveal>
              <Eyebrow>Investering</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Wat kost een website" }, { text: "laten maken?", className: "text-g600" }]}
            />
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                Een website bij ons begint <span className="font-semibold text-ink">vanaf €1.500</span> en
                loopt tot ongeveer €8.000 voor volledig maatwerk. Wat het precies wordt hangt af van je
                doel, de omvang en de mate van maatwerk. In elke website zit een lokale SEO-basis,
                strategie en een ontwerp dat vertrouwen wekt. Hosting en onderhoud lopen apart via een
                voordelig maandbedrag.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/website-kosten-calculator" className="group inline-flex items-center justify-center gap-2.5 chamf-sm bg-blue px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_48px_-16px_rgba(1,48,253,0.85)] transition-colors duration-150 hover:bg-blue-press">
                  Bereken jouw prijs
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
                <Link href="/kennisbank/wat-kost-een-website-laten-maken" className="group inline-flex items-center justify-center gap-2 chamf-sm border border-ink/15 px-6 py-3.5 text-sm font-semibold text-ink transition-colors duration-150 hover:border-blue hover:text-blue">
                  Lees de kostengids
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
                Nog niet tevreden met het resultaat? Dan werken we door - zonder extra kosten - tot het
                wel klopt. Zo loop je nooit het risico te betalen voor iets waar je niet achter staat.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ CLUSTER HUB — steden · voor wie · kennisbank ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <Container className="relative">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Website laten maken in heel Nederland</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Lokaal gebouwd," }, { text: "overal inzetbaar.", className: "text-blue-text" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g300">
                We zitten in Den Haag en bouwen voor bedrijven door heel Nederland - met een lokale
                SEO-structuur die je in je eigen stad en regio vindbaar maakt.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] lg:grid-cols-3">
            <div className="bg-s1 p-7 md:p-8">
              <p className="font-display text-sm font-bold uppercase tracking-[0.1em] text-blue-text">Per stad</p>
              <ul className="mt-4 space-y-1">
                {steden.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="group flex items-center justify-between py-2 text-[0.95rem] font-semibold text-g100 transition-colors hover:text-blue-text">
                      Website laten maken {s.label}
                      <span className="text-blue-text opacity-0 transition-all duration-200 group-hover:opacity-100">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-s1 p-7 md:p-8">
              <p className="font-display text-sm font-bold uppercase tracking-[0.1em] text-blue-text">Voor wie</p>
              <ul className="mt-4 space-y-1">
                {voorWieLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="group flex items-center justify-between py-2 text-[0.95rem] font-semibold text-g100 transition-colors hover:text-blue-text">
                      {l.label}
                      <span className="text-blue-text opacity-0 transition-all duration-200 group-hover:opacity-100">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-s1 p-7 md:p-8">
              <p className="font-display text-sm font-bold uppercase tracking-[0.1em] text-blue-text">Kennisbank</p>
              <ul className="mt-4 space-y-1">
                {kennisLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="group flex items-center justify-between py-2 text-[0.95rem] font-semibold text-g100 transition-colors hover:text-blue-text">
                      {l.label}
                      <span className="text-blue-text opacity-0 transition-all duration-200 group-hover:opacity-100">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════ FOUNDER · FAQ · SLOT ═══════════ */}
      <Founder />

      <FaqBlock faqs={faqs} tone="light" />

      <FinalCta />
    </main>
  );
}
