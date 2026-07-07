import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { cases, casesHead } from "@/lib/site";

/* BL-08 · CASES — proof sheets: real clients in chamfered browser frames.
   Covers are duotone + logo until real screenshots land (never fake stock). */
export function Cases() {
  return (
    <section id="cases" className="on-light relative py-20 md:py-28">

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

        <div className="mt-14 space-y-10 md:space-y-14">
          {cases.map((c, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={c.id}
                className={`grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 ${
                  flip ? "lg:[&>*:first-child]:order-2 lg:grid-cols-[0.85fr_1.15fr]" : ""
                }`}
              >
                {/* browser frame */}
                <Reveal delay={0.05}>
                  <Link href={c.href} className="group block">
                    <div className="chamf chamf-lg overflow-hidden border border-black/10 bg-s0 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-[var(--ease-brand)] group-hover:-translate-y-1.5">
                      {/* chrome */}
                      <div className="flex items-center gap-2 border-b border-[var(--color-line)] px-5 py-3.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-blue" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                        <span className="ml-3 hidden flex-1 items-center gap-2 chamf-sm bg-s2 px-3 py-1 font-semibold text-[0.62rem] tracking-[0.08em] text-g500 sm:flex">
                          {c.url}
                        </span>
                      </div>
                      {/* duotone cover + logo */}
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-deep via-s2 to-s0" />
                        <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
                        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-blue/25 blur-[80px]" />
                        {/* scanline sweep on hover */}
                        <span className="scanline pointer-events-none absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-transparent via-blue-text/25 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center p-10">
                          <Image
                            src={c.logo}
                            alt={c.client}
                            width={300}
                            height={110}
                            className="logo-white max-h-20 w-auto max-w-[65%] opacity-90 transition-transform duration-300 ease-[var(--ease-brand)] group-hover:scale-[1.04]"
                          />
                        </div>
                        <span className="absolute bottom-4 left-5 font-semibold text-[0.62rem] uppercase tracking-[0.08em] text-g500">
                          {c.sector}
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>

                {/* meta column */}
                <div>
                  <Reveal>
                    <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                      {c.client}
                    </h3>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <div className="mt-5 space-y-4 border-l-2 border-blue/20 pl-5">
                      <p className="text-base leading-relaxed text-g600">
                        <span className="mb-1 block font-semibold text-[0.62rem] uppercase tracking-[0.08em] text-blue">
                          Uitdaging
                        </span>
                        {c.challenge}
                      </p>
                      <p className="text-base leading-relaxed text-g600">
                        <span className="mb-1 block font-semibold text-[0.62rem] uppercase tracking-[0.08em] text-blue">
                          Richting
                        </span>
                        {c.direction}
                      </p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.16}>
                    <Link
                      href={c.href}
                      className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue hover:underline"
                    >
                      Bekijk de case
                      <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                    </Link>
                  </Reveal>
                </div>
              </div>
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
