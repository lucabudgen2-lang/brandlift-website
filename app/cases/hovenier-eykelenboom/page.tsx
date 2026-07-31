import { buildPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Byline, CtaBlock } from "@/components/page/blocks";
import { caseEykelenboom } from "@/lib/site";
import { caseSchema } from "@/lib/schema";

const c = caseEykelenboom;

export const metadata = buildPageMetadata({
  title: c.metaTitle,
  description:
    c.metaDescription,
  path: `/cases/${c.slug}`,
  type: "article",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Cases", path: "/cases" },
  { name: c.client, path: `/cases/${c.slug}` },
];

export default function Page() {
  const schema = caseSchema({
    headline: c.h1,
    description: c.metaDescription,
    path: `/cases/${c.slug}`,
    image: c.image,
    datePublished: c.updated,
    crumbs,
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* hero */}
      <section className="relative overflow-hidden bg-s0 pt-10 pb-16 md:pb-20">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="animate-glow pointer-events-none absolute -top-40 right-[-12%] h-[520px] w-[520px] rounded-full bg-blue/20 blur-[150px]" />
        <Container className="relative">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
            <div>
              <Reveal>
                <Eyebrow>Case · {c.sector}</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.06] tracking-tight text-paper sm:text-5xl lg:text-[3rem]">
                  {c.h1}
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g300">{c.intro}</p>
              </Reveal>
              <Reveal delay={0.22}>
                <div className="mt-7">
                  <Byline updated={c.updated} />
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <div className="relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] shadow-[0_44px_90px_-44px_rgba(0,0,0,0.7)]">
                <div className="relative aspect-[16/11]">
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 92vw, 46vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-blue-deep/15 mix-blend-multiply" />
                </div>
                <div className="absolute -bottom-4 left-4 chamf-sm bg-blue px-5 py-3 shadow-[0_16px_40px_-12px_rgba(1,48,253,0.7)]">
                  <div className="font-semibold text-[0.55rem] uppercase tracking-[0.08em] text-white/70">
                    Resultaat
                  </div>
                  <div className="mt-0.5 flex items-baseline gap-2 font-display font-extrabold text-white">
                    <span className="text-xl">{c.stat.from}</span>
                    <span className="text-white/60">→</span>
                    <span className="text-3xl">{c.stat.to}</span>
                    <span className="text-[0.7rem] font-semibold text-white/85">{c.stat.unit}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* uitdaging → aanpak → resultaat */}
      <section className="on-light py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-14">
            {c.blocks.map((b) => (
              <Reveal key={b.label}>
                <div>
                  <span className="font-semibold text-xs uppercase tracking-[0.08em] text-blue">
                    {b.label}
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-tight text-ink md:text-3xl">
                    {b.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-g600">{b.body}</p>
                </div>
              </Reveal>
            ))}

            {/* metric callout */}
            <Reveal>
              <div className="chamf chamf-lg relative overflow-hidden bg-s0 p-8 text-center md:p-10">
                <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
                <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/3 rounded-full bg-blue/25 blur-[70px]" />
                <p className="relative font-semibold text-[0.62rem] uppercase tracking-[0.1em] text-blue-text">
                  Sinds livegang
                </p>
                <div className="relative mt-2 flex items-baseline justify-center gap-3 font-display font-extrabold text-paper">
                  <span className="text-4xl">{c.stat.from}</span>
                  <span className="text-blue-text">→</span>
                  <span className="text-6xl">{c.stat.to}</span>
                  <span className="text-lg font-semibold text-g300">{c.stat.unit}</span>
                </div>
              </div>
            </Reveal>

            {/* internal links */}
            <Reveal>
              <div className="flex flex-wrap gap-3 border-t border-ink/10 pt-8">
                <Link
                  href="/website-laten-maken-den-haag"
                  className="group inline-flex items-center gap-2 chamf-sm border border-ink/12 bg-black/[0.02] px-4 py-2.5 text-sm font-medium text-g800 transition-colors hover:border-blue hover:text-blue"
                >
                  Website laten maken in Den Haag
                  <span className="text-blue transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
                <Link
                  href="/diensten/lokale-seo"
                  className="group inline-flex items-center gap-2 chamf-sm border border-ink/12 bg-black/[0.02] px-4 py-2.5 text-sm font-medium text-g800 transition-colors hover:border-blue hover:text-blue"
                >
                  Lokale SEO
                  <span className="text-blue transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
                <Link
                  href="/cases"
                  className="group inline-flex items-center gap-2 chamf-sm border border-ink/12 bg-black/[0.02] px-4 py-2.5 text-sm font-medium text-g800 transition-colors hover:border-blue hover:text-blue"
                >
                  Alle cases
                  <span className="text-blue transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBlock
        h2="Wil je dit ook voor jouw bedrijf?"
        body="Plan een gratis, vrijblijvend groeigesprek van 30 minuten. Je weet daarna precies waar de groei zit."
      />
    </main>
  );
}
