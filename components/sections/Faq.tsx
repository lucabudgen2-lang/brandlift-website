import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { faqs } from "@/lib/site";

/* BL-12 · FAQ — the last objections, answered straight. */
export function Faq() {
  return (
    <section id="faq" className="on-light relative py-20 md:py-28">

      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <Eyebrow>Veelgestelde vragen</Eyebrow>
          </Reveal>
          <LineReveal
            as="h2"
            className="mt-5 text-3xl leading-[1.06] sm:text-4xl"
            lines={[{ text: "Kort en eerlijk" }, { text: "beantwoord." }]}
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-g600">
              Staat je vraag er niet bij? Stel hem in het groeigesprek - of mail
              gerust.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-black/10">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <details className="group border-b border-black/10 py-6">
                <summary className="flex cursor-pointer list-none items-baseline gap-5 text-lg font-bold text-ink">
                  <span className="text-xs font-semibold text-blue">
                    0{i + 1}
                  </span>
                  <span className="flex-1">{f.q}</span>
                  <span className="grid h-7 w-7 shrink-0 translate-y-1 place-items-center chamf-sm bg-blue-50 text-blue transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="mt-3 pl-9 pr-12">
                  <p className="max-w-2xl text-base leading-relaxed text-g600">{f.a}</p>
                  {"link" in f && f.link && (
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
