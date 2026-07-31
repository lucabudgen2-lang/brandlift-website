import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { site, denHaag } from "@/lib/site";

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/* BL-11 · DEN HAAG — pinned at the real Google-profiel location,
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

          {/* De stadspagina's zijn zes commerciele URL's; vanaf de homepage
              linkte alleen Den Haag. De rest stond daardoor los in de
              structuur. Volledige zoekterm als ankertekst. */}
          <Reveal delay={0.26}>
            <div className="mt-8 border-t border-[var(--color-line)] pt-6">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-g600">
                Website laten maken in
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {denHaag.steden.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    className="group inline-flex items-center gap-2 chamf-sm border border-[var(--color-line-strong)] bg-s1/70 px-3.5 py-2 text-sm font-medium text-g100 transition-colors hover:border-blue/50 hover:text-paper"
                  >
                    <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                    {s.city}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Google-profiel kaart */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="animate-glow pointer-events-none absolute -inset-4 -z-10 rounded-[32px] bg-blue/20 blur-[70px]" />
            <div className="relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 shadow-[0_44px_100px_-45px_rgba(0,0,0,0.75)]">
              <div className="relative aspect-square">
                <iframe
                  title={`${site.name} op Google Maps - ${site.street}, ${site.city}`}
                  src="https://www.google.com/maps?q=Brandlift,%20Guirlande%20118,%202496%20WT%20Den%20Haag&z=16&hl=nl&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
                />
              </div>
              {/* address bar */}
              <div className="flex items-center gap-3 border-t border-[var(--color-line)] bg-s0 px-5 py-3.5">
                <span className="grid h-8 w-8 shrink-0 place-items-center chamf-sm bg-blue/15 text-blue-text">
                  <PinIcon />
                </span>
                <div className="leading-tight">
                  <span className="block text-sm font-semibold text-paper">{site.name}</span>
                  <span className="block text-xs text-g500">
                    {site.street}, {site.postalCode} {site.city}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
