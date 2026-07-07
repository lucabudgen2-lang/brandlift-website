import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { site, denHaag } from "@/lib/site";

/* BL-11 · DEN HAAG — radar sheet: pinned at the real coordinates,
   serving the whole country. */
export function LocalDenHaag() {
  return (
    <section id="lokaal" className="relative overflow-hidden bg-s0 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />

      <Container className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Reveal>
            <Eyebrow>{denHaag.eyebrow}</Eyebrow>
          </Reveal>
          <LineReveal
            as="h2"
            className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
            lines={[
              { text: "Gebouwd vanuit Den Haag." },
              { text: "Gemaakt voor groei in", className: "text-g300" },
              { text: "heel Nederland.", className: "text-g300" },
            ]}
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-g300">{denHaag.body}</p>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-4">
            {denHaag.points.map((p, i) => (
              <Reveal key={p} delay={i * 0.06}>
                <div className="flex h-full items-center gap-2.5 bg-s1 px-4 py-4">
                  <span className="h-1.5 w-1.5 shrink-0 chamf-sm bg-blue" />
                  <span className="text-[0.82rem] font-medium leading-tight text-g100">{p}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {denHaag.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-text hover:underline"
                >
                  {l.label}
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>

        {/* radar */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center">
            <svg viewBox="0 0 420 420" fill="none" className="absolute inset-0 h-full w-full" aria-hidden>
              {[70, 125, 180].map((r) => (
                <circle key={r} cx="210" cy="210" r={r} stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
              ))}
              <line x1="210" y1="20" x2="210" y2="400" stroke="rgba(255,255,255,0.07)" />
              <line x1="20" y1="210" x2="400" y2="210" stroke="rgba(255,255,255,0.07)" />
              {/* reach: elsewhere in NL */}
              <circle cx="300" cy="128" r="3.5" fill="#5B78FF" opacity="0.8" />
              <circle cx="140" cy="290" r="3.5" fill="#5B78FF" opacity="0.55" />
              <circle cx="310" cy="278" r="3.5" fill="#5B78FF" opacity="0.4" />
              <circle cx="128" cy="140" r="3.5" fill="#5B78FF" opacity="0.35" />
            </svg>
            {/* sweep */}
            <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] max-w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
              <div
                className="animate-sweep h-full w-full rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(1,48,253,0.4) 0deg, rgba(1,48,253,0.08) 60deg, transparent 95deg)",
                }}
              />
            </div>
            {/* HQ node */}
            <div className="relative z-10 flex flex-col items-center">
              <span className="animate-ping-slow absolute -inset-5 rounded-full border-2 border-blue-text" />
              <span className="block h-4 w-4 chamf-sm bg-blue shadow-[0_0_28px_rgba(1,48,253,0.9)]" />
            </div>
            <span className="absolute bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium italic text-g500">
              Thuisbasis: Den Haag
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
