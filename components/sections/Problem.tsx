"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { problem } from "@/lib/site";

const ease = [0.22, 0.61, 0.36, 1] as const;

/* ── vignette 1 · bezoekers komen, aanvragen blijven uit ── */
function VignettePhone() {
  return (
    <div className="relative flex h-full items-center justify-center gap-6 px-6">
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
        <div className="mt-1 text-xs text-g600">telefoontjes</div>
      </div>
      {/* silent phone */}
      <div className="absolute right-4 top-4 grid h-8 w-8 place-items-center chamf-sm border border-[var(--color-line)] text-g600">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          <line x1="3" y1="3" x2="21" y2="21" stroke="rgba(255,82,87,0.7)" />
        </svg>
      </div>
    </div>
  );
}

/* ── vignette 2 · de SERP die de concurrent wint ── */
function VignetteSerp() {
  return (
    <div className="flex h-full flex-col justify-center gap-2.5 px-6">
      <div className="flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-s2 px-3.5 py-1.5">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0 text-g500">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" strokeLinecap="round" />
        </svg>
        <span className="text-[0.7rem] text-g300">jouw vak + jouw regio</span>
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
  );
}

/* ── vignette 3 · de vage website ── */
function VignetteVague() {
  return (
    <div className="flex h-full items-center justify-center px-6">
      <div className="relative w-full max-w-[240px] rounded-[4px] border border-[var(--color-line-strong)] bg-s1 p-3.5">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="ml-auto flex gap-2">
            <span className="h-1 w-6 rounded-full bg-white/20" />
            <span className="h-1 w-6 rounded-full bg-white/20" />
            <span className="h-1 w-6 rounded-full bg-white/20" />
          </span>
        </div>
        <div className="mt-3.5 space-y-1.5 blur-[2.5px]">
          <div className="h-2 w-3/4 rounded-full bg-white/40" />
          <div className="h-2 w-1/2 rounded-full bg-white/25" />
          <div className="mt-2.5 h-1.5 w-5/6 rounded-full bg-white/15" />
          <div className="h-1.5 w-2/3 rounded-full bg-white/15" />
        </div>
        {/* confused visitor */}
        <div className="absolute -bottom-3 -right-2 flex items-end gap-1">
          <span className="grid h-7 w-7 place-items-center chamf-sm bg-blue font-display text-sm font-extrabold text-white shadow-[0_6px_20px_rgba(1,48,253,0.5)]">
            ?
          </span>
          <svg width="13" height="13" viewBox="0 0 24 24" className="text-paper drop-shadow">
            <path fill="currentColor" d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.48 0 .68-.6.31-.89L6.3 2.83a.5.5 0 0 0-.8.38Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ── vignette 4 · vakwerk vs. uitstraling ── */
function VignetteMismatch() {
  const reduce = useReducedMotion();
  const bar = (w: string, delay: number) =>
    reduce
      ? {}
      : {
          initial: { width: 0 },
          whileInView: { width: w },
          viewport: { once: true, amount: 0.6 },
          transition: { duration: 0.8, delay, ease },
        };
  return (
    <div className="flex h-full flex-col justify-center gap-5 px-7">
      <div>
        <div className="mb-2 flex items-baseline justify-between">
          <span className="text-xs font-semibold text-g100">Je vakmanschap</span>
          <span className="font-display text-sm font-extrabold text-blue-text">9,2</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-blue shadow-[0_0_14px_rgba(1,48,253,0.7)]"
            {...bar("92%", 0.1)}
            style={reduce ? { width: "92%" } : undefined}
          />
        </div>
      </div>
      <div>
        <div className="mb-2 flex items-baseline justify-between">
          <span className="text-xs font-semibold text-g500">Je online uitstraling</span>
          <span className="font-display text-sm font-extrabold text-g600">3,1</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-g600"
            {...bar("31%", 0.3)}
            style={reduce ? { width: "31%" } : undefined}
          />
        </div>
      </div>
      <p className="text-center text-[0.7rem] italic text-g600">dat gat kost je aanvragen</p>
    </div>
  );
}

const vignettes = [VignettePhone, VignetteSerp, VignetteVague, VignetteMismatch];

/* BL-03 · PROBLEEM — diagnostic cards: each pain made visible in a small
   vignette, so the right visitor sees their own situation on screen. */
export function Problem() {
  return (
    <section id="probleem" className="on-light relative py-20 md:py-28">
      <Container>
        {/* header */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Reveal>
              <Eyebrow>{problem.eyebrow}</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
              lines={[
                { text: "Je levert goed werk." },
                { text: "Online zie je dat niet terug.", className: "text-g600" },
              ]}
            />
          </div>
          <Reveal delay={0.12}>
            <p className="max-w-md text-lg leading-relaxed text-g600 lg:justify-self-end">
              {problem.intro}
            </p>
          </Reveal>
        </div>

        {/* diagnostic cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {problem.items.map((item, i) => {
            const Vignette = vignettes[i];
            return (
              <Reveal key={item.title} delay={(i % 2) * 0.08}>
                <div className="group h-full overflow-hidden chamf border border-black/10 bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(1,48,253,0.35)]">
                  {/* vignette canvas */}
                  <div className="relative h-44 overflow-hidden bg-s0">
                    <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
                    <div className="pointer-events-none absolute -right-10 -top-14 h-40 w-40 rounded-full bg-blue/15 blur-[60px]" />
                    <Vignette />
                  </div>
                  {/* copy */}
                  <div className="relative p-6 md:p-7">
                    <span
                      aria-hidden
                      className="text-stroke-dark pointer-events-none absolute right-5 top-4 font-display text-4xl font-extrabold leading-none opacity-20 transition-opacity duration-300 group-hover:opacity-40"
                    >
                      0{i + 1}
                    </span>
                    <h3 className="pr-12 text-lg font-bold leading-snug text-ink md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-g600 md:text-base">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* bridge */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex items-center justify-center gap-5">
            <span className="hidden h-px w-16 bg-black/15 sm:block" />
            <p className="text-center text-base font-semibold italic text-ink md:text-lg">
              {problem.outro}
            </p>
            <span className="hidden h-px w-16 bg-black/15 sm:block" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
