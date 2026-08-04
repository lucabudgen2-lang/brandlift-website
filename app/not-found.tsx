import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  description: "Deze pagina bestaat niet - of niet meer. Ga terug naar de homepage van Brandlift.",
  robots: { index: false, follow: true },
};

/* 404 — full-viewport impact sheet: duotone backdrop, voltage beams,
   glowing numerals, one glass action. Global nav + footer wrap this. */
export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100vh-6rem)] flex-col overflow-hidden bg-s0 md:min-h-[calc(100vh-8rem)]">
      {/* backdrop — earth from space (self-hosted), settled into the brand.
          Was een 4K-video van 13 MB die automatisch begon te spelen zodra
          iemand op een dode link klikte: verreweg het zwaarste bestand op
          de site, voor decoratie op de pagina waar iemand al gefrustreerd
          landt. De draaiing was over tien seconden nauwelijks zichtbaar
          onder de drie overlays hieronder, dus een stilstaand frame uit
          diezelfde video geeft praktisch hetzelfde beeld. Via next/image
          gaat er nu enkele tientallen KB's over de lijn in plaats van 13 MB. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/earth-poster.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-deep/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-s0/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-s0 via-transparent to-s0/60" />
      </div>

      {/* hero */}
      <Container className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-14 text-center sm:px-6 sm:py-16 md:py-12">
        <Reveal>
          <h1 className="text-lg font-light leading-snug tracking-tight text-white/80 sm:text-3xl md:text-4xl">
            Deze pagina lijkt buiten
            <br />
            <span className="mt-1 block sm:mt-2">ons bereik geraakt :/</span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mb-8 mt-8 flex w-full justify-center overflow-visible sm:mb-12 sm:mt-12">
            <span
              aria-hidden
              className="four-oh-four select-none font-display text-[100px] font-extrabold leading-none tracking-tighter text-paper sm:text-[160px] md:text-[220px] lg:text-[260px]"
            >
              404
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="flex flex-col items-center gap-5">
            <Link
              href="/"
              className="liquid-glass chamf-sm px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-white sm:px-8 sm:text-sm"
            >
              Terug naar de homepage
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-text hover:underline"
            >
              Of plan een gratis groeigesprek
              <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}
