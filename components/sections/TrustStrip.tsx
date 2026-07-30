import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { clientLogos, trust } from "@/lib/site";

/* logos whose artwork is dark and needs a light plate to read */
const whitePlate = new Set(["Corda Solar"]);

/* BL-02 · TRUST-STRIP — "onze helden": full-color client logos in
   chamfered cards, moving. Layout mirrors the approved reference. */
export function TrustStrip() {
  return (
    <section aria-label="Onze klanten" className="relative overflow-hidden bg-s0 pb-16 pt-8 md:pb-20 md:pt-10">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />

      <Container className="relative">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            <span className="text-paper">{trust.headingA}</span>
            <br />
            <span className="italic text-blue-text">{trust.headingB}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-5 flex items-center justify-center gap-4">
            <span className="h-px w-14 bg-[var(--color-line-strong)]" />
            <span className="font-semibold text-xs italic tracking-[0.08em] text-g500">
              {trust.sub}
            </span>
            <span className="h-px w-14 bg-[var(--color-line-strong)]" />
          </div>
        </Reveal>
      </Container>

      <div className="relative mt-10">
        <Marquee speed={40}>
          {/* repeat the set so one sequence overflows even 4K/ultrawide
              screens (5 logos x ~248px x 4 = ~4960px) — otherwise a gap
              opens before the -50% loop repeats */}
          {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((c, i) => {
            const white = whitePlate.has(c.name);
            return (
              <div
                key={`${c.name}-${i}`}
                className="relative mx-3 flex h-32 w-56 items-center justify-center overflow-hidden chamf border border-[var(--color-line-strong)] bg-gradient-to-br from-s2 to-s0"
              >
                <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
                {white ? (
                  <div className="flex h-[68%] w-[78%] items-center justify-center chamf-sm bg-white p-3">
                    <Image
                      src={c.src}
                      alt={`${c.name} logo`}
                      width={200}
                      height={90}
                      className="max-h-full w-auto max-w-full object-contain"
                    />
                  </div>
                ) : (
                  <Image
                    src={c.src}
                    alt={`${c.name} logo`}
                    width={200}
                    height={90}
                    className="relative h-16 w-auto max-w-[78%] object-contain"
                  />
                )}
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
