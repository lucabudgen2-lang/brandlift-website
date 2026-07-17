import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { waarom, cta } from "@/lib/site";

/* blue line-icons, one per differentiator */
function BenefitIcon({ name }: { name: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "target": // strategie, SEO & conversie
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      );
    case "globe": // Amerikaanse markt
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
        </svg>
      );
    case "chip": // eigen AI-systemen
      return (
        <svg {...common}>
          <rect x="7" y="7" width="10" height="10" rx="1.5" />
          <path d="M9.5 3v2M14.5 3v2M9.5 19v2M14.5 19v2M3 9.5h2M3 14.5h2M19 9.5h2M19 14.5h2" />
          <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case "partners": // partner, geen leverancier
      return (
        <svg {...common}>
          <circle cx="8.5" cy="8" r="3" />
          <circle cx="16" cy="9.5" r="2.4" />
          <path d="M3.5 19c0-2.8 2.2-5 5-5 1.7 0 3.2.8 4.1 2.1" />
          <path d="M13.5 19c.2-2.3 2-4 4.2-4 1.9 0 3.5 1.3 3.9 3.1" />
        </svg>
      );
    case "gem": // premium uitstraling
      return (
        <svg {...common}>
          <path d="M6 3h12l3 5-9 13L3 8l3-5z" />
          <path d="M3 8h18M9 3l3 5 3-5M12 8l0 13" />
        </svg>
      );
    case "tools": // vakbedrijven
      return (
        <svg {...common}>
          <path d="M14.5 5.5a3.5 3.5 0 0 0 4.7 4.3l-2 2 2.3 2.3a2 2 0 1 1-2.8 2.8L14.4 14l-6 6a2.1 2.1 0 0 1-3-3l6-6-2.9-2.9a2 2 0 0 1 2.8-2.8L15.8 7l-2-2a3.5 3.5 0 0 1 .7.5z" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}

/* BL-06 · WAAROM — an editorial spread. A crisp, brand-duotoned photo of the
   team anchors the promise ("partner, geen leverancier"), with a real-work
   inset woven in; the six differentiators sit below as frosted proof cards. */
export function Waarom() {
  return (
    <section id="waarom" className="relative overflow-hidden bg-s0 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
      <div className="animate-glow pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />

      <Container className="relative">
        {/* ── the spread: statement + team photo ── */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* statement */}
          <div>
            <Reveal>
              <Eyebrow>{waarom.eyebrow}</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.9rem]"
              lines={[
                { text: "Verder dan mooi." },
                { text: "Gebouwd om te presteren.", className: "text-blue-text" },
              ]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-g300">{waarom.intro}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                href={cta.primaryHome.href}
                className="group mt-8 inline-flex items-center gap-2.5 chamf-sm bg-blue px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_48px_-16px_rgba(1,48,253,0.85)] transition-colors duration-150 hover:bg-blue-press"
              >
                {cta.primaryHome.label}
                <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
              </Link>
            </Reveal>
          </div>

          {/* photo composite */}
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-blue/15 blur-[80px]" />

              {/* main: the team, cooled into the huisstijl */}
              <div className="relative aspect-[4/3] overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.7)]">
                <Image
                  src="/images/luca-aan-het-werk.jpg"
                  alt="Luca van Brandlift aan het werk aan een website, op kantoor in Den Haag"
                  fill
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="object-cover object-[62%_center]"
                />
                <div className="absolute inset-0 bg-blue-deep/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-s0/75 via-transparent to-transparent" />
                {/* location chip */}
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 chamf-sm bg-s0/70 px-3 py-1.5 text-xs font-medium text-g100 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                  Den Haag
                </span>
              </div>

              {/* inset: real work, overlapping for depth */}
              <div className="absolute -bottom-8 -left-8 w-[52%] overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] shadow-[0_28px_60px_-24px_rgba(0,0,0,0.85)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/brandbook-only.jpg"
                    alt="Een merkgids die Brandlift ontwierp voor een klant"
                    fill
                    sizes="(max-width: 1024px) 48vw, 24vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-blue-deep/20 mix-blend-multiply" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-s0/80 to-transparent" />
                </div>
                <span className="absolute bottom-2.5 left-3 text-xs font-medium italic text-g100 [text-shadow:0_1px_6px_rgba(0,0,0,0.8)]">
                  Uit ons echte werk
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── the proof: six differentiators as frosted cards ── */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
          {waarom.benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 0.06}>
              <div className="group relative h-full overflow-hidden chamf chamf-lg border border-white/10 bg-s1/50 p-6 backdrop-blur-md transition-all duration-200 hover:border-blue/50 hover:bg-s1/70 md:p-7">
                {/* voltage corner */}
                <span className="absolute right-0 top-0 h-4 w-4 bg-blue opacity-0 transition-opacity duration-200 [clip-path:polygon(100%_0,0_0,100%_100%)] group-hover:opacity-100" />
                <div className="relative">
                  <span className="grid h-11 w-11 place-items-center chamf-sm border border-blue/30 bg-blue/10 text-blue-text transition-colors duration-200 group-hover:border-blue/60 group-hover:bg-blue group-hover:text-white">
                    <BenefitIcon name={b.icon} />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-extrabold leading-tight tracking-tight text-paper">
                    {b.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-g500">{b.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
