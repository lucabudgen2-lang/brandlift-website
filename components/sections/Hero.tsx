import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroHeadline } from "@/components/sections/HeroHeadline";
import { site, hero, cta } from "@/lib/site";

function BenefitIcon({ name }: { name: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "search")
    return (
      <svg {...common}>
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    );
  if (name === "shield")
    return (
      <svg {...common}>
        <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M17 8h4v4" />
    </svg>
  );
}

/* BL-01 · HERO — wider promise column; one big real-work mockup with the
   deliverables listed to its right. */
export function Hero() {
  const { showcase } = hero;

  return (
    <section className="relative overflow-hidden bg-s0">
      {/* photographic backdrop — office scene, cooled into the brand duotone */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/hero-luca.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_28%]"
        />
        {/* blue duotone tint (huisstijl §06: blauwe duotoon voor niet-projectbeeld) */}
        <div className="absolute inset-0 bg-blue-deep/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-s0/15" />
        {/* readability: heavy left, open right */}
        <div className="absolute inset-0 bg-gradient-to-r from-s0 via-s0/70 to-s0/10" />
        {/* ground into the page: fade to black at base + settle under nav */}
        <div className="absolute inset-0 bg-gradient-to-t from-s0 via-transparent to-s0/55" />
      </div>

      {/* "de lift" — diagonal voltage beams rising at the chamfer angle */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-[35%] left-[2%] h-[170%] w-56 rotate-[24deg]">
          <div className="animate-beam-slow h-full w-full bg-gradient-to-r from-transparent via-blue/[0.13] to-transparent blur-2xl" />
        </div>
        <div className="absolute -bottom-[35%] left-[30%] h-[170%] w-10 rotate-[24deg]">
          <div className="animate-beam h-full w-full bg-gradient-to-r from-transparent via-blue-text/[0.16] to-transparent" />
        </div>
        <div className="absolute -bottom-[35%] left-[31.5%] h-[170%] w-px rotate-[24deg] bg-gradient-to-b from-transparent via-blue-text/25 to-transparent" />
        <div className="absolute -bottom-[35%] right-[6%] h-[170%] w-80 rotate-[24deg]">
          <div className="animate-beam-slow h-full w-full bg-gradient-to-r from-transparent via-blue/[0.09] to-transparent blur-3xl" />
        </div>
      </div>
      <div className="animate-glow pointer-events-none absolute -top-44 right-[-12%] h-[560px] w-[560px] rounded-full bg-blue/25 blur-[150px]" />

      <Container className="relative grid items-center gap-12 pb-10 pt-20 md:pb-14 md:pt-24 lg:grid-cols-[1.18fr_0.82fr] lg:gap-16 lg:pb-16 lg:pt-28">
        {/* ── left: the promise ── */}
        <div>
          {/* De H1 zit in de eyebrow-badge: semantisch de kop van de pagina,
              visueel de kleine regel. De slogan eronder is groot maar een <p>. */}
          <Reveal>
            <h1 className="inline-flex flex-wrap items-center gap-x-3 gap-y-1.5 chamf-sm border border-[var(--color-line-strong)] bg-s1/60 px-4 py-2.5 text-[0.68rem] font-bold uppercase leading-relaxed tracking-[0.09em] text-g100 backdrop-blur-sm sm:text-[0.78rem]">
              <span aria-hidden className="h-3.5 w-3.5 shrink-0 chamf-sm bg-blue shadow-[0_0_10px_rgba(1,48,253,0.7)]" />
              <span>
                Webdesignbureau in <span className="text-blue-text">Den Haag</span> dat je meer
                aanvragen oplevert
              </span>
            </h1>
          </Reveal>

          <HeroHeadline
            lines={hero.sloganLines}
            className="mt-5 font-display text-[clamp(1.85rem,5.2vw,3.7rem)] font-extrabold leading-[1.16]"
          />

          <Reveal delay={0.3}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-g300">{hero.sub}</p>
          </Reveal>

          <Reveal delay={0.38}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={cta.primaryHome.href} variant="primary" className="group">
                {cta.primaryHome.label}
              </Button>
              <Button href={cta.secondary.href} variant="secondary" className="group">
                {cta.secondary.label}
              </Button>
            </div>
            <p className="mt-4 text-sm text-g500">
              {hero.ctaMicrocopy}
            </p>
          </Reveal>

          {/* 3 benefits with icons - one line */}
          <Reveal delay={0.46}>
            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--color-line)] pt-6 sm:flex-nowrap">
              {hero.benefits.map((b) => (
                <li key={b.label} className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 shrink-0 place-items-center chamf-sm border border-[var(--color-line-strong)] bg-s1 text-blue-text">
                    <BenefitIcon name={b.icon} />
                  </span>
                  <span className="whitespace-nowrap text-sm font-medium text-g300">{b.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* founder — direct-contact trust chip */}
          <Reveal delay={0.52}>
            <a href="#over" className="group mt-6 inline-flex items-center gap-3">
              <span className="block h-24 w-24 shrink-0 overflow-hidden chamf-sm border border-blue/50 bg-gradient-to-b from-s2 to-s0 shadow-[0_6px_20px_-6px_rgba(1,48,253,0.6)]">
                <Image
                  src="/images/portrait-luca-chip.jpg"
                  alt="Luca Budgen, oprichter van Brandlift"
                  width={200}
                  height={200}
                  className="h-full w-full object-cover object-center"
                />
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-g300 transition-colors group-hover:text-paper">
                <span>
                  Direct contact met <span className="font-semibold text-paper">Luca</span>, oprichter
                </span>
                <span className="-translate-x-1 text-blue-text opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </span>
            </a>
          </Reveal>
        </div>

        {/* ── right: the project + its result, given all the room ── */}
        <div className="relative flex items-center justify-center">
          <div className="animate-glow pointer-events-none absolute right-0 top-1/3 h-[480px] w-[480px] rounded-full bg-blue/25 blur-[130px]" />

          <Reveal delay={0.2} className="w-full">
            <div className="animate-float relative lg:ml-6 lg:scale-[1.18] xl:ml-10 xl:scale-[1.28]">
              <div className="chamf chamf-lg overflow-hidden border border-[var(--color-line-strong)] bg-s2 shadow-[0_44px_100px_-40px_rgba(1,48,253,0.5)]">
                <Image
                  src="/images/hero-eyk.png"
                  alt="Rebranding en website door Brandlift voor Hovenier Eykelenboom - laptop en merkgids"
                  width={1254}
                  height={1254}
                  priority
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="block w-full"
                />
              </div>
              <span className="absolute left-4 top-4 chamf-sm bg-s0/80 px-3 py-1.5 font-semibold text-[0.58rem] uppercase tracking-[0.08em] text-g300 backdrop-blur-sm">
                {showcase.label}
              </span>
              <div className="absolute -bottom-5 left-3 chamf-sm bg-blue px-5 py-3 shadow-[0_16px_40px_-12px_rgba(1,48,253,0.7)]">
                <div className="font-semibold text-[0.55rem] uppercase tracking-[0.08em] text-white/70">
                  Resultaat
                </div>
                <div className="mt-0.5 flex items-baseline gap-2 font-display font-extrabold text-white">
                  <span className="text-xl">{showcase.stat.from}</span>
                  <span className="text-white/60">→</span>
                  <span className="text-3xl">{showcase.stat.to}</span>
                  <span className="text-[0.7rem] font-semibold text-white/85">{showcase.stat.unit}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
