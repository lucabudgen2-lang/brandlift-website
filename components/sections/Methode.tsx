"use client";

import { useRef } from "react";
import { motion, useScroll, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { LineReveal } from "@/components/ui/LineReveal";
import { methode, cta } from "@/lib/site";

const ease = [0.22, 0.61, 0.36, 1] as const;

/* BL-07 · METHODE — one centered column: thesis on top, a scroll-charged
   traject down the middle with steps alternating left/right, CTA at the base. */
export function Methode() {
  const trackRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.7", "end 0.6"],
  });

  return (
    <section id="methode" className="relative overflow-hidden bg-s1 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />

      <Container className="relative">
        {/* ── thesis (centered) ── */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>{methode.eyebrow}</Eyebrow>
          </Reveal>
          <LineReveal
            as="h2"
            className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
            lines={[
              { text: "Van groeigesprek naar" },
              { text: "een website die klopt.", className: "text-blue-text" },
            ]}
          />
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-g300">
              {methode.intro}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 inline-flex items-center gap-3 text-sm italic text-g500">
              <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
              {methode.aiNote}
            </p>
          </Reveal>
        </div>

        {/* ── the traject: centered rail, steps alternating ── */}
        <ol ref={trackRef} className="relative mx-auto mt-16 max-w-3xl">
          {/* rail + scroll charge — left on mobile, centered on desktop */}
          <span
            aria-hidden
            className="absolute bottom-0 top-0 left-[13px] w-px -translate-x-1/2 bg-[var(--color-line-strong)] lg:left-1/2"
          />
          {!reduce && (
            <motion.span
              aria-hidden
              className="absolute bottom-0 top-0 left-[13px] w-[2px] origin-top -translate-x-1/2 bg-blue shadow-[0_0_12px_rgba(1,48,253,0.8)] lg:left-1/2"
              style={{ scaleY: scrollYProgress }}
            />
          )}

          {methode.steps.map((step, i) => {
            const left = i % 2 === 0;
            return (
              <li
                key={step.n}
                className="relative py-4 first:pt-0 last:pb-0 md:py-5"
              >
                {/* node on the rail */}
                <motion.span
                  className="absolute left-[13px] top-1/2 z-10 grid h-[27px] w-[27px] -translate-x-1/2 -translate-y-1/2 place-items-center chamf-sm border border-[var(--color-line-strong)] bg-s2 lg:left-1/2"
                  initial={reduce ? {} : { borderColor: "rgba(255,255,255,0.16)" }}
                  whileInView={
                    reduce
                      ? {}
                      : { borderColor: "#0130FD", boxShadow: "0 0 16px rgba(1,48,253,0.55)" }
                  }
                  viewport={{ once: true, margin: "-35% 0px -35% 0px" }}
                  transition={{ duration: 0.4, ease }}
                  aria-hidden
                >
                  <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                </motion.span>

                {/* connector from rail to card (desktop) */}
                <span
                  aria-hidden
                  className={`absolute top-1/2 hidden h-px w-8 -translate-y-1/2 lg:block ${
                    left
                      ? "right-1/2 bg-gradient-to-l from-blue to-blue/20"
                      : "left-1/2 bg-gradient-to-r from-blue to-blue/20"
                  }`}
                />

                {/* card */}
                <Reveal delay={0.05}>
                  <div
                    className={`group ml-14 chamf border border-[var(--color-line)] bg-s0/60 p-6 transition-colors duration-150 hover:border-[var(--color-line-strong)] hover:bg-s2/80 md:p-7 lg:ml-0 ${
                      left ? "lg:mr-[calc(50%+2rem)]" : "lg:ml-[calc(50%+2rem)]"
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-xl font-extrabold tracking-tight text-paper md:text-2xl">
                        {step.title}
                      </h3>
                      <span
                        aria-hidden
                        className="text-stroke shrink-0 font-display text-3xl font-extrabold leading-none opacity-40 md:text-4xl"
                      >
                        {step.n}
                      </span>
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-g500">{step.body}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>

        {/* ── CTA (centered) ── */}
        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-center text-center">
            <p className="mb-4 text-base font-semibold text-g100">{methode.outro}</p>
            <Button href={cta.primaryHome.href} variant="primary" className="group">
              {cta.primaryHome.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
