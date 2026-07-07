import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { LineReveal } from "@/components/ui/LineReveal";
import { ctaBand } from "@/lib/site";

/* BL-09 · CTA-BAND — the voltage moment. Short, loud, one action. */
export function CtaBand() {
  return (
    <section aria-label="Plan een gratis groeigesprek" className="on-light py-14 md:py-20">
      <Container>
        <Reveal>
          <div className="chamf chamf-lg relative overflow-hidden bg-blue">
            <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-[70px]" />

            <div className="relative grid gap-8 px-8 py-12 md:grid-cols-[1.3fr_auto] md:items-center md:px-14 md:py-16">
              <div>
                <LineReveal
                  as="h3"
                  className="text-3xl leading-[1.05] text-white sm:text-4xl lg:text-[2.9rem]"
                  lines={[{ text: "Zie je jouw bedrijf" }, { text: "hierin terug?" }]}
                />
                <Reveal delay={0.12}>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-white/85 md:text-lg">
                    {ctaBand.body}
                  </p>
                </Reveal>
              </div>

              <Reveal delay={0.15}>
                <div className="flex flex-col items-start gap-3 md:items-end">
                  <Link
                    href="#contact"
                    className="group inline-flex items-center gap-2.5 chamf-sm bg-paper px-7 py-4 font-semibold text-ink transition-colors duration-150 hover:bg-white"
                  >
                    {ctaBand.cta}
                    <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
                  </Link>
                  <span className="text-sm text-white/75">
                    {ctaBand.microcopy}
                  </span>
                </div>
              </Reveal>
            </div>

            {/* arrow current along the base */}
            <div className="relative border-t border-white/20 py-2.5" aria-hidden>
              <Marquee speed={22}>
                <span className="flex items-center gap-8 px-4 font-semibold text-[0.68rem] tracking-[0.08em] text-white/50">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <span key={i} className="flex items-center gap-8">
                      <span>→</span>
                      <span>MEER AANVRAGEN</span>
                    </span>
                  ))}
                </span>
              </Marquee>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
