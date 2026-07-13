import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { site } from "@/lib/site";

type Crumb = { name: string; path: string };

/* Author + date byline — E-E-A-T signal, reused across content pages. */
export function Byline({ updated, tone = "dark" }: { updated: string; tone?: "dark" | "light" }) {
  const muted = tone === "dark" ? "text-g500" : "text-g600";
  const strong = tone === "dark" ? "text-g300" : "text-g800";
  const d = new Date(updated).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
  return (
    <p className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-sm ${muted}`}>
      <span>
        Door{" "}
        <Link href="/over-brandlift" className={`font-semibold ${strong} hover:text-blue-text`}>
          {site.founder}
        </Link>
      </span>
      <span aria-hidden>·</span>
      <span>
        Bijgewerkt op <time dateTime={updated}>{d}</time>
      </span>
    </p>
  );
}

/* Commercial/content page hero: breadcrumb, eyebrow, H1, intro, byline, CTA. */
export function PageHero({
  crumbs,
  eyebrow,
  h1,
  intro,
  updated,
  cta = "Plan een gratis groeigesprek",
  badge,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  h1: string;
  intro: string;
  updated?: string;
  cta?: string;
  badge?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-s0 pt-10 pb-16 md:pb-20">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
      <div className="animate-glow pointer-events-none absolute -top-40 right-[-12%] h-[520px] w-[520px] rounded-full bg-blue/20 blur-[150px]" />
      <Container className="relative">
        <Breadcrumbs crumbs={crumbs} />
        <div className="mt-8 max-w-3xl">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.06] tracking-tight text-paper sm:text-5xl lg:text-[3.1rem]">
              {h1}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-g300">{intro}</p>
          </Reveal>
          {badge && (
            <Reveal delay={0.2}>
              <span className="mt-6 inline-flex items-center gap-2 chamf-sm border border-[var(--color-line-strong)] bg-s1 px-3.5 py-2 text-sm font-medium text-g100">
                <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                {badge}
              </span>
            </Reveal>
          )}
          <Reveal delay={0.26}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/contact" variant="primary" className="group">
                {cta}
              </Button>
              {updated && <Byline updated={updated} />}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

type Section = {
  h2: string;
  body: string;
  points?: readonly string[];
  link?: { label: string; href: string };
};

/* Editorial content block — the readable body of a page, light surface. */
export function ProseSections({ sections }: { sections: readonly Section[] }) {
  return (
    <section className="on-light py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl space-y-14">
          {sections.map((s) => (
            <Reveal key={s.h2}>
              <div>
                <h2 className="font-display text-2xl font-extrabold leading-tight tracking-tight text-ink md:text-3xl">
                  {s.h2}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-g600">{s.body}</p>
                {s.points && (
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-base text-g800">
                        <span className="mt-2 h-1.5 w-4 shrink-0 bg-blue" />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
                {s.link && (
                  <Link
                    href={s.link.href}
                    className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue hover:underline"
                  >
                    {s.link.label}
                    <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* FAQ accordion — reusable, with FAQPage schema handled by the page. */
export function FaqBlock({
  faqs,
  tone = "light",
}: {
  faqs: readonly { q: string; a: string; link?: { label: string; href: string } }[];
  tone?: "light" | "dark";
}) {
  const light = tone === "light";
  return (
    <section className={`${light ? "on-light" : "bg-s0"} relative py-20 md:py-28`}>
      {!light && <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />}
      <Container className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <Eyebrow>Veelgestelde vragen</Eyebrow>
          </Reveal>
          <h2
            className={`mt-5 font-display text-3xl font-extrabold leading-[1.06] tracking-tight sm:text-4xl ${
              light ? "text-ink" : "text-paper"
            }`}
          >
            Kort en eerlijk beantwoord.
          </h2>
        </div>
        <div className={`border-t ${light ? "border-black/10" : "border-[var(--color-line)]"}`}>
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <details className={`group border-b py-6 ${light ? "border-black/10" : "border-[var(--color-line)]"}`}>
                <summary
                  className={`flex cursor-pointer list-none items-baseline gap-5 text-lg font-bold ${
                    light ? "text-ink" : "text-paper"
                  }`}
                >
                  <span className="text-xs font-semibold text-blue">0{i + 1}</span>
                  <span className="flex-1">{f.q}</span>
                  <span
                    className={`grid h-7 w-7 shrink-0 translate-y-1 place-items-center chamf-sm transition-transform duration-200 group-open:rotate-45 ${
                      light ? "bg-blue-50 text-blue" : "bg-blue/15 text-blue-text"
                    }`}
                  >
                    +
                  </span>
                </summary>
                <div className="mt-3 pl-9 pr-4 md:pr-12">
                  <p className={`max-w-2xl text-base leading-relaxed ${light ? "text-g600" : "text-g300"}`}>
                    {f.a}
                  </p>
                  {f.link && (
                    <Link
                      href={f.link.href}
                      className="group/l mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:underline"
                    >
                      {f.link.label}
                      <span className="transition-transform duration-150 group-hover/l:translate-x-0.5">→</span>
                    </Link>
                  )}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* Closing CTA band — the blue voltage moment. */
export function CtaBlock({
  h2 = "Klaar om je website meer te laten opleveren?",
  body = "Plan een gratis, vrijblijvend groeigesprek van 30 minuten. Je weet daarna precies waar je staat.",
  cta = "Plan een gratis groeigesprek",
}: {
  h2?: string;
  body?: string;
  cta?: string;
}) {
  return (
    <section className="on-light pb-20 md:pb-28">
      <Container>
        <Reveal>
          <div className="chamf chamf-lg relative overflow-hidden bg-blue px-8 py-14 text-center md:px-14 md:py-16">
            <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-[70px]" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-4xl">
                {h2}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/85 md:text-lg">{body}</p>
              <div className="mt-8 flex flex-col items-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 chamf-sm bg-paper px-7 py-4 font-semibold text-ink transition-colors duration-150 hover:bg-white"
                >
                  {cta}
                  <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
                </Link>
                <span className="text-sm text-white/75">30 minuten. Geen salespitch.</span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
