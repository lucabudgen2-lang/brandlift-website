import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { articles } from "@/lib/site";

export function Kennisbank() {
  return (
    <Section tone="black" id="kennisbank">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <Reveal>
            <Eyebrow>Kennisbank</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">
              Praktische gidsen voor betere keuzes online.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="max-w-sm text-base leading-relaxed text-g500">
            Geen dichtgetimmerde salespraat. Eerlijke uitleg, zodat je met
            vertrouwen kiest.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {articles.map((a, i) => (
          <Reveal key={a.href} delay={i * 0.06}>
            <Link
              href={a.href}
              className="group flex h-full flex-col chamf border border-[var(--color-line)] bg-s1 p-7 transition-colors hover:border-[var(--color-line-strong)] hover:bg-s2"
            >
              <span className="font-semibold text-xs uppercase tracking-[0.08em] text-blue-text">
                {a.tag}
              </span>
              <h3 className="mt-4 text-xl font-bold leading-snug text-paper">
                {a.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-g500">
                {a.lead}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-text">
                Lees de gids
                <span className="transition-transform duration-150 group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
