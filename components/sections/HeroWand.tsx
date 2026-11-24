"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/* ============================================================
   De wand: de achtergrond van de homepage-hero.

   Een schuin gekantelde muur van echt werk van Brandlift: de hero's van
   websites die we bouwden, op desktop en op de telefoon. Zes kolommen schuiven
   eindeloos, om en om omhoog en omlaag, elk in een eigen tempo.

   Op een scherm met muis:
   - kantelt de wand een fractie mee met de cursor (parallax);
   - licht de wand rond de cursor op, als een lamp die over het werk
     strijkt. Het midden, waar de tekst staat, blijft altijd donker.
   Alles loopt via CSS-variabelen op één element (geen React-state per
   beweging), en onder prefers-reduced-motion staat de wand stil.

   Alleen herosecties van eigen klantsites; geen stock.
   ============================================================ */

/* Alleen herosecties van websites die Brandlift bouwde, live of nog in
   de maak: per klant de desktop- en de mobiele versie, vers vastgelegd
   op 24 nov 2026. */
const SITES = ["vanesch", "wurms", "koevoets", "merkelbag", "eykelenboom", "rotorswing", "partytrick", "giorgi", "kwast"] as const;
type Site = (typeof SITES)[number];
type Tegel = { site: Site; soort: "desktop" | "mobiel" };
const d = (site: Site): Tegel => ({ site, soort: "desktop" });
const m = (site: Site): Tegel => ({ site, soort: "mobiel" });

/* Zes kolommen; elke site staat in meerdere kolommen, steeds naast andere
   buren, en desktop en telefoon wisselen elkaar af. */
const KOLOMMEN: { tegels: Tegel[]; snelheid: number; richting: "omhoog" | "omlaag" }[] = [
  { tegels: [d("eykelenboom"), m("koevoets"), d("partytrick"), d("vanesch"), m("giorgi"), d("wurms")], snelheid: 95, richting: "omhoog" },
  { tegels: [m("merkelbag"), d("giorgi"), d("kwast"), m("rotorswing"), d("koevoets")], snelheid: 120, richting: "omlaag" },
  { tegels: [d("rotorswing"), d("merkelbag"), m("vanesch"), d("eykelenboom"), m("partytrick"), d("kwast")], snelheid: 88, richting: "omhoog" },
  { tegels: [m("wurms"), d("koevoets"), d("giorgi"), m("kwast"), d("partytrick")], snelheid: 112, richting: "omlaag" },
  { tegels: [d("vanesch"), m("eykelenboom"), d("wurms"), d("rotorswing"), m("merkelbag"), d("giorgi")], snelheid: 100, richting: "omhoog" },
  { tegels: [d("kwast"), m("partytrick"), d("merkelbag"), m("koevoets"), d("eykelenboom")], snelheid: 128, richting: "omlaag" },
];

function Tegel({ t }: { t: Tegel }) {
  const src = `/images/hero-wand/${t.site}-${t.soort}.jpg`;
  if (t.soort === "mobiel") {
    return (
      <div className="mx-auto w-[64%] overflow-hidden rounded-[22px] border-[5px] border-[#16181d] bg-s1 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]">
        <Image src={src} alt="" width={360} height={779} sizes="220px" quality={60} loading="eager" fetchPriority="low" className="block h-auto w-full" />
      </div>
    );
  }
  return (
    <div className="overflow-hidden chamf chamf-sm border border-white/[0.08] bg-s1 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-1 border-b border-white/[0.06] bg-[#16181d] px-2.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-blue" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
      </div>
      <Image src={src} alt="" width={640} height={400} sizes="340px" quality={60} loading="eager" fetchPriority="low" className="block h-auto w-full" />
    </div>
  );
}

export function HeroWand() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const sectie = el?.parentElement;
    if (!el || !sectie) return;
    /* alleen met een echte muis, en niet bij minder beweging */
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const beweeg = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = sectie.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        el.style.setProperty("--mx", `${x}px`);
        el.style.setProperty("--my", `${y}px`);
        el.style.setProperty("--px", `${(x / r.width - 0.5).toFixed(3)}`);
        el.style.setProperty("--py", `${(y / r.height - 0.5).toFixed(3)}`);
        el.style.setProperty("--lamp", "1");
      });
    };
    const weg = () => el.style.setProperty("--lamp", "0");
    sectie.addEventListener("pointermove", beweeg);
    sectie.addEventListener("pointerleave", weg);
    return () => {
      cancelAnimationFrame(frame);
      sectie.removeEventListener("pointermove", beweeg);
      sectie.removeEventListener("pointerleave", weg);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ "--mx": "50%", "--my": "40%", "--px": "0", "--py": "0", "--lamp": "0" } as React.CSSProperties}
    >
      {/* de wand zelf, gekanteld in de ruimte */}
      <div className="absolute inset-0 [perspective:1600px]">
        <div
          className="absolute left-1/2 top-1/2 grid w-[175%] grid-cols-4 gap-4 opacity-[0.85] transition-transform duration-700 ease-out sm:w-[150%] sm:grid-cols-5 md:gap-5 lg:w-[135%] lg:grid-cols-6"
          style={{
            transform:
              "translate(-50%, -50%) rotateX(calc(22deg + var(--py) * -4deg)) rotateZ(calc(-11deg + var(--px) * 2deg)) translate3d(calc(var(--px) * -28px), calc(var(--py) * -20px), 0) scale(1.18)",
            transformStyle: "preserve-3d",
            height: "190%",
          }}
        >
          {KOLOMMEN.map((k, i) => (
            <div key={i} className={`relative overflow-visible ${i >= 5 ? "hidden lg:block" : i >= 4 ? "hidden sm:block" : ""}`}>
              <div className="wand-kolom flex flex-col gap-4 md:gap-5" data-richting={k.richting} style={{ "--wand-snelheid": `${k.snelheid}s` } as React.CSSProperties}>
                {[...k.tegels, ...k.tegels].map((t, j) => (
                  <Tegel key={`${t.site}-${t.soort}-${j}`} t={t} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* donker over de hele wand, behalve waar de lamp schijnt */}
      <div
        className="absolute inset-0 bg-s0/50"
        style={{
          maskImage: "radial-gradient(circle 340px at var(--mx) var(--my), rgba(0,0,0,calc(1 - var(--lamp))) 0%, rgba(0,0,0,calc(1 - var(--lamp) * 0.6)) 45%, #000 100%)",
          WebkitMaskImage: "radial-gradient(circle 340px at var(--mx) var(--my), rgba(0,0,0,calc(1 - var(--lamp))) 0%, rgba(0,0,0,calc(1 - var(--lamp) * 0.6)) 45%, #000 100%)",
        }}
      />
      {/* het licht van de lamp zelf: een zachte, koele gloed op het werk */}
      <div
        className="absolute inset-0 mix-blend-screen"
        style={{ background: "radial-gradient(circle 320px at var(--mx) var(--my), rgba(140,160,255,calc(var(--lamp) * 0.22)) 0%, rgba(91,120,255,calc(var(--lamp) * 0.08)) 45%, transparent 75%)" }}
      />
      {/* de donkere kern waar de tekst staat; altijd leesbaar */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_95%_55%_at_50%_48%,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.15)_100%)] md:bg-[radial-gradient(ellipse_52%_50%_at_50%_50%,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.62)_55%,rgba(0,0,0,0)_100%)]" />
      {/* aansluiting op de navigatie en de volgende sectie */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-s0 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-s0 via-s0/80 to-transparent" />
    </div>
  );
}
