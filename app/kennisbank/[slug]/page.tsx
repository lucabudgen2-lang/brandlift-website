import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqBlock, CtaBlock } from "@/components/page/blocks";
import { ArtikelBlokken, Inline } from "@/components/kennisbank/ArtikelBlokken";
import { articleSchema } from "@/lib/schema";
import { artikelen, vindArtikel } from "@/content/kennisbank";
import type { Artikel, Blok } from "@/lib/kennisbank/types";
import { articles as oudeGidsen } from "@/lib/site";

/* ============================================================
   KENNISBANK · één template voor elk artikel in content/kennisbank/.
   Alleen de slugs uit het register bestaan; al het andere is een 404.
   ============================================================ */

export const dynamicParams = false;

export function generateStaticParams() {
  return artikelen.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = vindArtikel(slug);
  if (!a) return {};
  return buildPageMetadata({
    title: a.metaTitle,
    description: a.metaDescription,
    path: `/kennisbank/${a.slug}`,
    type: "article",
    noindex: a.concept,
    publishedTime: a.gepubliceerd,
    modifiedTime: a.bijgewerkt,
  });
}

const datum = (iso: string) => new Date(iso).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });

function woorden(blokken: Blok[]) {
  const tekst = blokken
    .map((b) => {
      switch (b.type) {
        case "lijst":
          return b.items.join(" ");
        case "tabel":
          return b.rijen.flat().join(" ");
        case "bewijs":
          return `${b.titel} ${b.tekst}`;
        case "beeld":
          return "";
        case "letop":
          return `${b.titel} ${b.tekst}`;
        default:
          return "tekst" in b ? b.tekst : "";
      }
    })
    .join(" ");
  return tekst.split(/\s+/).filter(Boolean).length;
}

/* gerelateerd: slug uit het register of een vast pad (de oude gidsen) */
function gerelateerdeItems(a: Artikel) {
  return a.gerelateerd
    .map((g) => {
      const pad = g.startsWith("/") ? g : `/kennisbank/${g}`;
      const nieuw = artikelen.find((x) => `/kennisbank/${x.slug}` === pad);
      if (nieuw) return { href: pad, titel: nieuw.titel, lead: nieuw.lead, tag: nieuw.tag };
      const oud = oudeGidsen.find((x) => x.href === pad);
      if (oud) return { href: pad, titel: oud.title, lead: oud.lead, tag: oud.tag };
      return null;
    })
    .filter(Boolean) as { href: string; titel: string; lead: string; tag: string }[];
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = vindArtikel(slug);
  if (!a) notFound();

  const PATH = `/kennisbank/${a.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Kennisbank", path: "/kennisbank" },
    { name: a.titel, path: PATH },
  ];
  const schema = articleSchema({
    headline: a.titel,
    description: a.metaDescription,
    path: PATH,
    image: a.beeld?.src,
    datePublished: a.gepubliceerd,
    dateModified: a.bijgewerkt,
    crumbs,
    faqs: a.faq,
  });
  const inhoud = a.blokken.filter((b): b is Extract<Blok, { type: "kop" }> => b.type === "kop");
  const leestijd = Math.max(1, Math.round(woorden(a.blokken) / 220));
  const gerelateerd = gerelateerdeItems(a);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── kop ── */}
      <section className="relative overflow-hidden bg-s0 pb-14 pt-10 md:pb-20">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
        <Container className="relative">
          <Breadcrumbs crumbs={crumbs} />
          {a.concept && (
            <p className="mt-6 inline-block chamf-sm bg-[#FBBC05] px-3 py-1 font-mono text-[0.66rem] font-bold uppercase tracking-[0.1em] text-ink">
              Concept · niet gepubliceerd
            </p>
          )}
          <div className="mt-8 max-w-3xl">
            <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-blue-text">Kennisbank · {a.tag}</p>
            <h1 className="mt-4 font-display text-[2rem] font-extrabold leading-[1.08] tracking-tight text-paper sm:text-[2.6rem] lg:text-[3rem]">
              {a.titel}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-g300">{a.lead}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-g400">
              <Link href="/over-brandlift" className="group flex items-center gap-3">
                <span className="block h-10 w-10 overflow-hidden chamf-sm border border-blue/40">
                  <Image src="/images/portrait-luca-chip.jpg" alt="Luca Budgen" width={80} height={80} className="h-full w-full object-cover" />
                </span>
                <span>
                  <span className="block font-semibold text-paper group-hover:text-blue-text">Luca Budgen</span>
                  <span className="block text-xs text-g500">Oprichter van Brandlift</span>
                </span>
              </Link>
              <span className="hidden h-6 w-px bg-white/15 sm:block" aria-hidden />
              <span>
                Bijgewerkt op <time dateTime={a.bijgewerkt}>{datum(a.bijgewerkt)}</time>
              </span>
              <span>{leestijd} min lezen</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ── artikel ── */}
      <section className="on-light relative py-14 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16">
          <article className="min-w-0 max-w-[720px]">
            {a.beeld && (
              <div className="mb-10 overflow-hidden chamf chamf-lg border border-ink/10">
                <Image src={a.beeld.src} alt={a.beeld.alt} width={a.beeld.breed} height={a.beeld.hoog} priority sizes="(max-width: 768px) 92vw, 720px" className="block h-auto w-full" />
              </div>
            )}
            <ArtikelBlokken blokken={a.blokken} />

            {/* bronnen: zichtbaar, zodat elke claim na te gaan is */}
            {a.bronnen.length > 0 && (
              <div className="mt-14 border-t border-ink/10 pt-6">
                <p className="font-display text-sm font-extrabold uppercase tracking-[0.06em] text-ink">Bronnen</p>
                <ol className="mt-3 space-y-1.5 text-[0.9rem] text-g600">
                  {a.bronnen.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="tabular-nums text-g500">{i + 1}.</span>
                      {b.url ? (
                        <a href={b.url} target="_blank" rel="noopener" className="underline decoration-ink/20 underline-offset-2 hover:text-blue">
                          {b.label}
                        </a>
                      ) : (
                        <span>{b.label}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* auteur */}
            <div className="mt-10 flex gap-5 chamf chamf-lg border border-ink/10 bg-white p-6">
              <span className="block h-16 w-16 shrink-0 overflow-hidden chamf-sm">
                <Image src="/images/portrait-luca-chip.jpg" alt="Luca Budgen" width={128} height={128} className="h-full w-full object-cover" />
              </span>
              <div>
                <p className="font-display text-base font-extrabold text-ink">Geschreven door Luca Budgen</p>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-g600">
                  Oprichter van Brandlift in Den Haag. Bouwt websites, merken en Google-profielen voor vakbedrijven, en schrijft hier op
                  wat hij in die trajecten ziet.{" "}
                  <Link href="/over-brandlift" className="font-semibold text-blue hover:underline">
                    Meer over Luca
                  </Link>
                </p>
              </div>
            </div>

            {/* volgende stap */}
            <div className="mt-6 chamf chamf-lg bg-blue p-6 text-white md:p-7">
              <p className="text-[1rem] leading-relaxed text-white/85">
                <Inline tekst={a.volgendeStap.tekst} />
              </p>
              <Link href={a.volgendeStap.href} className="mt-4 inline-flex items-center gap-2 chamf-sm bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-paper">
                {a.volgendeStap.label} <span aria-hidden>→</span>
              </Link>
            </div>
          </article>

          {/* inhoudsopgave */}
          {inhoud.length > 1 && (
            <nav aria-label="In dit artikel" className="hidden lg:block">
              <div className="sticky top-28 border-l border-ink/10 pl-5">
                <p className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-g600">In dit artikel</p>
                <ol className="mt-4 space-y-3 text-[0.9rem]">
                  {inhoud.map((k) => (
                    <li key={k.id}>
                      <a href={`#${k.id}`} className="text-g700 hover:text-blue">
                        {k.tekst}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>
          )}
        </Container>
      </section>

      {a.faq.length > 0 && <FaqBlock faqs={a.faq} heading="Vragen die we vaak krijgen." />}

      {gerelateerd.length > 0 && (
        <section className="on-light border-t border-ink/5 py-16 md:py-20">
          <Container>
            <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-blue">Verder lezen</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {gerelateerd.map((g) => (
                <Link key={g.href} href={g.href} className="group chamf chamf-lg border border-ink/10 bg-white p-6 transition-colors hover:border-blue/40">
                  <span className="font-mono text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-g600">{g.tag}</span>
                  <span className="mt-2 block font-display text-lg font-extrabold leading-snug text-ink group-hover:text-blue">{g.titel}</span>
                  <span className="mt-2 block text-[0.92rem] leading-relaxed text-g600">{g.lead}</span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBlock />
    </main>
  );
}
