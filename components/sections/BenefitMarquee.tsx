import { Marquee } from "@/components/ui/Marquee";

/* ============================================================
   BENEFIT MARQUEE — Brandlift's moving trust strip.
   A full-bleed electric-blue band that scrolls a loop of short,
   true benefit labels with chamfer icon badges. Reused site-wide,
   directly under heroes and as a mid-page reinforcement.
   ============================================================ */

type Benefit = { icon: string; label: string };

const DEFAULT_BENEFITS: Benefit[] = [
  { icon: "calendar", label: "Founder-led sinds 2021" },
  { icon: "user", label: "Direct met de bouwer" },
  { icon: "star", label: "Beoordeeld met 5,0 op Google" },
  { icon: "search", label: "Lokale SEO inbegrepen" },
  { icon: "bolt", label: "Reactie binnen 1 werkdag" },
  { icon: "tools", label: "Gebouwd voor vakbedrijven" },
  { icon: "globe", label: "Nederlands, Engels en meer" },
  { icon: "check", label: "Geen wachtlijst" },
];

function BIcon({ name }: { name: string }) {
  const c = {
    width: 15,
    height: 15,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "calendar":
      return <svg {...c}><rect x="3" y="4.5" width="18" height="16" rx="2" /><path d="M3 9h18M8 2.5v4M16 2.5v4" /></svg>;
    case "user":
      return <svg {...c}><circle cx="12" cy="8" r="3.4" /><path d="M4.5 20c0-3.6 3.4-6 7.5-6s7.5 2.4 7.5 6" /></svg>;
    case "star":
      return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.8 6.1 20.2l1.2-6.6L2.5 9l6.6-.9L12 2z" /></svg>;
    case "search":
      return <svg {...c}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>;
    case "bolt":
      return <svg {...c}><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" /></svg>;
    case "tools":
      return <svg {...c}><path d="M14.5 5.5a3.5 3.5 0 0 0 4.7 4.3l-2 2 2.3 2.3a2 2 0 1 1-2.8 2.8L14.4 14l-6 6a2.1 2.1 0 0 1-3-3l6-6-2.9-2.9a2 2 0 0 1 2.8-2.8L15.8 7l-2-2a3.5 3.5 0 0 1 .7.5z" /></svg>;
    case "globe":
      return <svg {...c}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" /></svg>;
    default:
      return <svg {...c} strokeWidth="2.5"><path d="m5 12 4.5 4.5L19 7" /></svg>;
  }
}

export function BenefitMarquee({
  items = DEFAULT_BENEFITS,
  speed = 42,
}: {
  items?: Benefit[];
  speed?: number;
}) {
  return (
    <section aria-label="Voordelen van Brandlift" className="relative overflow-hidden border-y border-white/15 bg-blue">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
      {/* edge fades so items enter/exit softly */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-blue to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-blue to-transparent sm:w-24" />

      <Marquee speed={speed} className="relative py-4 md:py-[1.15rem]">
        {items.map((b) => (
          <span key={b.label} className="flex items-center">
            <span className="flex items-center gap-3 px-7">
              <span className="grid h-8 w-8 shrink-0 place-items-center chamf-sm bg-white text-blue">
                <BIcon name={b.icon} />
              </span>
              <span className="whitespace-nowrap font-display text-[0.82rem] font-extrabold uppercase tracking-[0.1em] text-white">
                {b.label}
              </span>
            </span>
            {/* voltage diamond separator */}
            <span aria-hidden className="h-1.5 w-1.5 shrink-0 rotate-45 bg-white/50" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
