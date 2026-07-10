import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { cases, casesHead } from "@/lib/site";

/* BL-08 · CASES — three proof cards side by side, each framed as a browser
   window. Real screenshots where they exist (Eykelenboom); a duotone
   logo-cover where they don't yet - never fake stock. */
export function Cases() {
  return (
    <section id="cases" className="on-light relative pt-20 pb-12 md:pt-28 md:pb-16">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>{casesHead.eyebrow}</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
              lines={[{ text: "Strategisch gebouwd." }, { text: "Niet alleen mooi gemaakt." }]}
            />
          </div>
          <Reveal delay={0.12}>
            <p className="max-w-sm text-base leading-relaxed text-g600">{casesHead.intro}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {cases.map((c, i) => {
            const photo = "photo" in c ? (c.photo as string) : null;
            return (
              <Reveal key={c.id} delay={(i % 3) * 0.08} className="h-full">
                <Link
                  href={c.href}
                  className="group flex h-full flex-col overflow-hidden chamf chamf-lg border border-black/10 bg-paper shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1.5 hover:shadow-[0_34px_70px_-32px_rgba(1,48,253,0.4)]"
                >
                  {/* browser chrome */}
                  <div className="flex items-center gap-2 border-b border-black/[0.07] bg-black/[0.02] px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue" />
                    <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                    <span className="ml-2 flex-1 truncate chamf-sm bg-black/[0.04] px-3 py-1 font-semibold text-[0.62rem] tracking-[0.08em] text-g600">
                      {c.url}
                    </span>
                  </div>

                  {/* cover — real screenshot, or duotone logo-cover */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-s0">
                    {photo ? (
                      <>
                        <Image
                          src={photo}
                          alt={`Website die Brandlift bouwde voor ${c.client}`}
                          fill
                          sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 31vw"
                          className="object-cover object-center transition-transform duration-500 ease-[var(--ease-brand)] group-hover:scale-[1.05]"
                        />
                        <div className="absolute inset-0 bg-blue-deep/15 mix-blend-multiply" />
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-deep via-s2 to-s0" />
                        <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
                        <div className="pointer-events-none absolute -right-14 -top-16 h-52 w-52 rounded-full bg-blue/25 blur-[70px]" />
                        <span className="scanline pointer-events-none absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-transparent via-blue-text/25 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <Image
                            src={c.logo}
                            alt={c.client}
                            width={260}
                            height={96}
                            className="logo-white max-h-16 w-auto max-w-[68%] opacity-90 transition-transform duration-300 ease-[var(--ease-brand)] group-hover:scale-[1.04]"
                          />
                        </div>
                      </>
                    )}
                    {/* sector badge */}
                    <span className="absolute bottom-3 left-3 chamf-sm bg-s0/70 px-2.5 py-1 font-semibold text-[0.58rem] uppercase tracking-[0.08em] text-g100 backdrop-blur-sm">
                      {c.sector}
                    </span>
                  </div>

                  {/* body */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">
                      {c.client}
                    </h3>
                    <div className="mt-4 space-y-3 border-l-2 border-blue/20 pl-4">
                      <p className="text-sm leading-relaxed text-g600">
                        <span className="mb-1 block font-semibold text-[0.6rem] uppercase tracking-[0.08em] text-blue">
                          Uitdaging
                        </span>
                        {c.challenge}
                      </p>
                      <p className="text-sm leading-relaxed text-g600">
                        <span className="mb-1 block font-semibold text-[0.6rem] uppercase tracking-[0.08em] text-blue">
                          Richting
                        </span>
                        {c.direction}
                      </p>
                    </div>
                    <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-blue">
                      Bekijk de case
                      <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex justify-center">
            <Link
              href={casesHead.allHref}
              className="group inline-flex items-center gap-2 chamf-sm border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-150 hover:border-blue hover:bg-blue hover:text-white"
            >
              {casesHead.allLabel}
              <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
