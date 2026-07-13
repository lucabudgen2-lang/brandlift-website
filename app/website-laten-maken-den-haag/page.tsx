import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Byline, FaqBlock, CtaBlock } from "@/components/page/blocks";
import { Reviews } from "@/components/sections/Reviews";
import { cityPages, caseEykelenboom, reviews, site } from "@/lib/site";
import { serviceSchema } from "@/lib/schema";

const city = cityPages["den-haag"];

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: `/${city.slug}` },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Diensten", path: "/diensten" },
  { name: "Website laten maken", path: "/diensten/website-laten-maken" },
  { name: `Website laten maken ${city.city}`, path: `/${city.slug}` },
];

/* hero trust signals */
const heroChips = [
  "Lokale SEO inbegrepen",
  city.responsePromise,
  `${reviews.rating.toString().replace(".", ",")} op Google`,
];

/* ── Pillar icons (reused from the homepage icon set) ── */
function PillarIcon({ name }: { name: string }) {
  const c = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "target")
    return (
      <svg {...c}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      </svg>
    );
  if (name === "gem")
    return (
      <svg {...c}>
        <path d="M6 3h12l3 5-9 13L3 8l3-5z" />
        <path d="M3 8h18M9 3l3 5 3-5M12 8l0 13" />
      </svg>
    );
  if (name === "shield")
    return (
      <svg {...c}>
        <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  return (
    <svg {...c}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

/* ── The four things that decide whether a Haagse website converts ── */
const pillars = [
  {
    icon: "target",
    title: "Strategie vóór ontwerp",
    body: "We beginnen bij de vraag waarom een Haagse klant voor jou kiest in plaats van voor de buurman. Die positionering bepaalt de structuur, de boodschap en de route naar contact - nog voordat we iets ontwerpen.",
  },
  {
    icon: "gem",
    title: "Design en merk dat vertrouwen wekt",
    body: "We vertalen de kwaliteit van je werk naar een uitstraling die klopt: een merk, kleur en beeldtaal die passen bij je markt en je plek in Den Haag. Zo kom je online net zo sterk over als aan de deur.",
  },
  {
    icon: "shield",
    title: "Techniek: snel, veilig en schaalbaar",
    body: "Snelheid, mobiele weergave en veiligheid zijn precies waar Haagse klanten en Google op letten. We bouwen modern en schaalbaar, zodat je site moeiteloos meegroeit met je bedrijf.",
  },
  {
    icon: "search",
    title: "Lokale SEO die Haagse klanten vindt",
    body: "Aparte dienst- en locatiepagina's, interne links, gestructureerde data en een scherp Google Bedrijfsprofiel. Zo word je gevonden op 'website laten maken Den Haag' tot de specifieke dienst in de wijk.",
    link: { label: "Meer over lokale SEO", href: "/diensten/lokale-seo" },
  },
];

export default function Page() {
  const schema = serviceSchema({
    name: `Website laten maken ${city.city}`,
    description: city.metaDescription,
    path: `/${city.slug}`,
    areaServed: city.city,
    faqs: city.faqs,
    crumbs,
    withReviews: reviews,
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ═══════════ HERO — photographic backdrop, cooled into the brand duotone ═══════════ */}
      <section className="relative overflow-hidden bg-s0 pt-10 pb-20 md:pb-28">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[65%_35%]"
          />
          <div className="absolute inset-0 bg-blue-deep/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-s0/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-s0 via-s0/85 to-s0/45" />
        </div>
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="animate-glow pointer-events-none absolute -top-40 right-[-12%] h-[520px] w-[520px] rounded-full bg-blue/20 blur-[150px]" />

        <Container className="relative">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 max-w-3xl">
            <Reveal>
              <Eyebrow>Den Haag · heel Nederland</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 font-display text-[2.1rem] font-extrabold leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-[3.3rem]">
                {city.h1}
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-g200">{city.intro}</p>
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
                <Byline updated={city.updated} />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ WAAROM LOKAAL LOONT — diagnostic cards (Problem design) ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <Reveal>
                <Eyebrow>Waarom lokaal loont</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
                lines={[
                  { text: "Haagse klanten zoeken lokaal." },
                  { text: "Val je niet op, dan kiezen ze de buurman.", className: "text-g600" },
                ]}
              />
            </div>
            <Reveal delay={0.12}>
              <p className="max-w-md text-lg leading-relaxed text-g600 lg:justify-self-end">
                In Den Haag zijn er in elke branche tientallen aanbieders - van het Centrum en het
                Statenkwartier tot Ypenburg en Loosduinen. Wie online niet opvalt, verdwijnt onder de
                concurrent, precies op het moment dat een klant klaar is om contact op te nemen.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {/* card 1 — de lokale SERP die de concurrent wint */}
            <Reveal>
              <div className="group h-full overflow-hidden chamf border border-black/10 bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(1,48,253,0.35)]">
                <div className="relative h-40 overflow-hidden bg-s0">
                  <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
                  <div className="pointer-events-none absolute -right-10 -top-14 h-40 w-40 rounded-full bg-blue/15 blur-[60px]" />
                  <div className="flex h-full flex-col justify-center gap-2.5 px-6">
                    <div className="flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-s2 px-3.5 py-1.5">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0 text-g500">
                        <circle cx="11" cy="11" r="7" />
                        <path d="m21 21-4.3-4.3" strokeLinecap="round" />
                      </svg>
                      <span className="text-[0.7rem] text-g300">jouw vak + Den Haag</span>
                    </div>
                    {[0, 1].map((i) => (
                      <div key={i} className="rounded-lg border border-[var(--color-line)] bg-s1 px-3.5 py-2">
                        <div className="h-1.5 w-2/5 rounded-full bg-blue-text/70" />
                        <div className="mt-1.5 h-1 w-4/5 rounded-full bg-white/15" />
                      </div>
                    ))}
                    <div className="flex items-center justify-between rounded-lg border border-dashed border-[var(--color-line)] px-3.5 py-2 opacity-60">
                      <div className="h-1.5 w-1/3 rounded-full bg-g600" />
                      <span className="text-[0.65rem] italic text-g600">pagina 4 ↓</span>
                    </div>
                  </div>
                </div>
                <div className="relative p-6 md:p-7">
                  <span aria-hidden className="text-stroke-dark pointer-events-none absolute right-5 top-4 font-display text-4xl font-extrabold leading-none opacity-20 transition-opacity duration-300 group-hover:opacity-40">
                    01
                  </span>
                  <h3 className="pr-12 text-lg font-bold leading-snug text-ink md:text-xl">
                    Ze zoeken lokaal - en vinden je niet
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-g600 md:text-base">
                    Haagse klanten typen hun vak plus hun buurt en kiezen uit wat bovenaan staat. Sta jij op
                    pagina vier, dan besta je voor hen niet.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* card 2 — bezoekers zonder aanvragen */}
            <Reveal delay={0.08}>
              <div className="group h-full overflow-hidden chamf border border-black/10 bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(1,48,253,0.35)]">
                <div className="relative h-40 overflow-hidden bg-s0">
                  <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
                  <div className="pointer-events-none absolute -right-10 -top-14 h-40 w-40 rounded-full bg-blue/15 blur-[60px]" />
                  <div className="flex h-full items-center justify-center gap-6 px-6">
                    <div className="text-center">
                      <div className="font-display text-4xl font-extrabold text-paper">128</div>
                      <div className="mt-1 text-xs text-g500">bezoekers deze week</div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="block h-px w-10 bg-gradient-to-r from-blue-text/60 to-transparent" />
                      <span className="text-g600">→</span>
                      <span className="block h-px w-10 bg-gradient-to-r from-transparent to-[var(--color-line-strong)]" />
                    </div>
                    <div className="text-center">
                      <div className="font-display text-4xl font-extrabold text-g600">0</div>
                      <div className="mt-1 text-xs text-g600">aanvragen</div>
                    </div>
                  </div>
                </div>
                <div className="relative p-6 md:p-7">
                  <span aria-hidden className="text-stroke-dark pointer-events-none absolute right-5 top-4 font-display text-4xl font-extrabold leading-none opacity-20 transition-opacity duration-300 group-hover:opacity-40">
                    02
                  </span>
                  <h3 className="pr-12 text-lg font-bold leading-snug text-ink md:text-xl">
                    Bezoekers komen, aanvragen blijven uit
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-g600 md:text-base">
                    Verkeer zonder richting levert niets op. Zonder heldere boodschap en een duidelijke route
                    naar contact klikt de bezoeker weer weg.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* card 3 — vakwerk vs uitstraling */}
            <Reveal delay={0.16}>
              <div className="group h-full overflow-hidden chamf border border-black/10 bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(1,48,253,0.35)]">
                <div className="relative h-40 overflow-hidden bg-s0">
                  <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
                  <div className="pointer-events-none absolute -right-10 -top-14 h-40 w-40 rounded-full bg-blue/15 blur-[60px]" />
                  <div className="flex h-full flex-col justify-center gap-4 px-7">
                    <div>
                      <div className="mb-2 flex items-baseline justify-between">
                        <span className="text-xs font-semibold text-g100">Je vakmanschap</span>
                        <span className="font-display text-sm font-extrabold text-blue-text">9,2</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <span className="block h-full w-[92%] rounded-full bg-blue shadow-[0_0_14px_rgba(1,48,253,0.7)]" />
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex items-baseline justify-between">
                        <span className="text-xs font-semibold text-g500">Je online uitstraling</span>
                        <span className="font-display text-sm font-extrabold text-g600">3,1</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <span className="block h-full w-[31%] rounded-full bg-g600" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative p-6 md:p-7">
                  <span aria-hidden className="text-stroke-dark pointer-events-none absolute right-5 top-4 font-display text-4xl font-extrabold leading-none opacity-20 transition-opacity duration-300 group-hover:opacity-40">
                    03
                  </span>
                  <h3 className="pr-12 text-lg font-bold leading-snug text-ink md:text-xl">
                    Goed werk, zwakke uitstraling
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-g600 md:text-base">
                    Vakwerk dat aan de deur indruk maakt, oogt op een verouderde site zwak. Dat gat kost je
                    vertrouwen, en dus klussen.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12 flex items-center justify-center gap-5">
              <span className="hidden h-px w-16 bg-black/15 sm:block" />
              <p className="text-center text-base font-semibold italic text-ink md:text-lg">
                Een website die lokaal is opgebouwd, draait dat om.
              </p>
              <span className="hidden h-px w-16 bg-black/15 sm:block" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ ONZE AANPAK — four pillars (Waarom frosted-card design) ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />

        <Container className="relative">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Onze aanpak</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.9rem]"
              lines={[
                { text: "Verder dan mooi." },
                { text: "Gebouwd om Haagse klanten te winnen.", className: "text-blue-text" },
              ]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g300">
                Vier dingen bepalen of je website in Den Haag klanten oplevert. Wij regelen ze alle vier,
                in de juiste volgorde.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.06}>
                <div className="group relative h-full overflow-hidden chamf chamf-lg border border-white/10 bg-s1/50 p-6 backdrop-blur-md transition-all duration-200 hover:border-blue/50 hover:bg-s1/70 md:p-8">
                  <span className="absolute right-0 top-0 h-4 w-4 bg-blue opacity-0 transition-opacity duration-200 [clip-path:polygon(100%_0,0_0,100%_100%)] group-hover:opacity-100" />
                  <div className="relative flex gap-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center chamf-sm border border-blue/30 bg-blue/10 text-blue-text transition-colors duration-200 group-hover:border-blue/60 group-hover:bg-blue group-hover:text-white">
                      <PillarIcon name={p.icon} />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-extrabold leading-tight tracking-tight text-paper">
                        {p.title}
                      </h3>
                      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-g400">{p.body}</p>
                      {"link" in p && p.link && (
                        <Link
                          href={p.link.href}
                          className="group/l mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-text hover:underline"
                        >
                          {p.link.label}
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

      {/* ═══════════ BEWIJS — de Haagse case (Cases browser-window design) ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">
            <div>
              <Reveal>
                <Eyebrow>Lokaal bewijs</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
                lines={[{ text: "Gebouwd voor een" }, { text: "hovenier in Den Haag." }]}
              />
              <Reveal delay={0.14}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-g600">
                  Voor Hovenier Eykelenboom in Den Haag bouwden we een complete website met een lokale
                  SEO-structuur per dienst en werkgebied. Vakwerk dat eerst nauwelijks werd gevonden, is nu
                  vindbaar in precies de wijken waar de klanten zitten.
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
                <Link
                  href="/cases/hovenier-eykelenboom"
                  className="group mt-7 flex w-fit items-center gap-2 text-sm font-semibold text-blue hover:underline"
                >
                  Bekijk de volledige case
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
              </Reveal>
            </div>

            {/* browser-window screenshot (Cases design) */}
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
                  <Image
                    src={caseEykelenboom.image}
                    alt={caseEykelenboom.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 92vw, 48vw"
                    className="object-cover object-center transition-transform duration-500 ease-[var(--ease-brand)] group-hover:scale-[1.04]"
                  />
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

      {/* ═══════════ KOSTEN — honest price framing → calculator (dark) ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
        <Container className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
          <div>
            <Reveal>
              <Eyebrow>Investering</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Wat kost een website" }, { text: "laten maken in Den Haag?", className: "text-g300" }]}
            />
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-g300">
                Er is geen vaste prijs - en dat is maar goed ook. Wat je website kost hangt af van je doel,
                de omvang en de mate van maatwerk. Een sterke, eenvoudige site kost minder dan een uitgebreid
                platform met veel dienst- en locatiepagina's. Wat er altijd in zit: strategie, een lokale
                SEO-basis en een ontwerp dat vertrouwen wekt.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 p-8 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.7)]">
              <div className="animate-glow pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blue/20 blur-[70px]" />
              <p className="relative font-display text-lg font-extrabold text-paper">Bereken je indicatie</p>
              <p className="relative mt-2 text-sm leading-relaxed text-g400">
                Stel in een paar klikken je website samen en zie direct een eerlijke prijsindicatie die past
                bij jouw bedrijf.
              </p>
              <Link
                href="/website-kosten-calculator"
                className="group relative mt-6 inline-flex items-center gap-2.5 chamf-sm bg-blue px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_48px_-16px_rgba(1,48,253,0.85)] transition-colors duration-150 hover:bg-blue-press"
              >
                Naar de kostencalculator
                <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="/kennisbank/wat-kost-een-website-laten-maken"
                className="group relative mt-4 flex w-fit items-center gap-2 text-sm font-semibold text-blue-text hover:underline"
              >
                Of lees wat een website kost
                <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ ACTIEF IN HEEL DEN HAAG — coverage + Google-profiel map ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <Reveal>
              <Eyebrow>Werkgebied</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Actief in heel Den Haag." }, { text: "Van het Centrum tot de kust.", className: "text-g600" }]}
            />
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-g600">{city.areasIntro}</p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8">
                <p className="text-sm font-semibold text-g600">Stadsdelen</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {city.stadsdelen.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-2 chamf-sm border border-ink/12 bg-black/[0.02] px-3.5 py-2 text-sm font-medium text-g800"
                    >
                      <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-6">
                <p className="text-sm font-semibold text-g600">En onder meer in de wijken</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {city.wijken.map((w) => (
                    <span
                      key={w}
                      className="inline-flex chamf-sm border border-ink/10 px-3 py-1.5 text-[0.82rem] font-medium text-g700"
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-8 border-t border-ink/10 pt-6">
                <p className="text-sm font-semibold text-g600">Ook in de regio</p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  {city.nearby.map((n) => (
                    <span key={n} className="text-sm text-g600">
                      Website laten maken {n}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Google-profiel kaart */}
          <Reveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-[460px] lg:sticky lg:top-28">
              <div className="animate-glow pointer-events-none absolute -inset-4 -z-10 rounded-[32px] bg-blue/15 blur-[70px]" />
              <div className="relative overflow-hidden chamf chamf-lg border border-ink/10 bg-white shadow-[0_44px_100px_-45px_rgba(0,0,0,0.4)]">
                <div className="relative aspect-square">
                  <iframe
                    title={`${site.name} op Google Maps - ${site.street}, ${site.city}`}
                    src="https://www.google.com/maps?q=Brandlift,%20Guirlande%20118,%202496%20WT%20Den%20Haag&z=16&hl=nl&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
                <div className="flex items-center gap-3 border-t border-ink/10 bg-black/[0.02] px-5 py-3.5">
                  <span className="grid h-8 w-8 shrink-0 place-items-center chamf-sm bg-blue/10 text-blue">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>
                  <div className="leading-tight">
                    <span className="block text-sm font-semibold text-ink">{site.name}</span>
                    <span className="block text-xs text-g600">
                      {site.street}, {site.postalCode} {site.city}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ REVIEWS · FAQ · SLOT ═══════════ */}
      <Reviews tone="dark" />

      <FaqBlock faqs={city.faqs} tone="light" />

      <CtaBlock
        h2="Klaar voor een website die Haagse klanten oplevert?"
        body="Plan een gratis, vrijblijvend groeigesprek van 30 minuten. Je weet daarna precies waar je staat - met of zonder samenwerking."
      />
    </main>
  );
}
