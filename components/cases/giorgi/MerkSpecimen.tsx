import { Playfair_Display, Montserrat } from "next/font/google";
import { kleuren } from "@/lib/cases/giorgi";

/* ============================================================
   Kleur en letter van het Giorgi-merk, in hun echte vorm.

   De lettertypes worden alleen op deze route geladen (next/font zet
   ze niet in de globale bundel), en alleen de gewichten die hier
   staan. Een typografiestaal in een andere letter dan het merk zou
   precies het verkeerde bewijzen.
   ============================================================ */

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"], display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"], display: "swap" });

export function MerkSpecimen() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
      {/* kleur */}
      <div className="chamf chamf-lg border border-ink/10 bg-white p-6 md:p-7">
        <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-blue">Kleur</p>
        <ul className="mt-5 grid grid-cols-3 gap-x-2 gap-y-4 sm:grid-cols-5">
          {kleuren.map((k) => (
            <li key={k.hex} className="flex flex-col">
              <span
                className="block aspect-[3/4] w-full rounded-md border border-ink/10"
                style={{ backgroundColor: k.hex }}
                aria-hidden
              />
              <span className="mt-2.5 text-[0.78rem] font-bold leading-tight text-ink">{k.naam}</span>
              <span className="mt-0.5 font-mono text-[0.66rem] text-g600">{k.hex}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-[0.88rem] leading-relaxed text-g600">
          Nachtblauw en antraciet voor de avond, ivoor en linnen voor rust, en goud als het enige accent:
          voor het logo, de lijnen en de knoppen. Nooit als vlak.
        </p>
      </div>

      {/* letter */}
      <div className="relative overflow-hidden chamf chamf-lg border border-ink/10 p-6 md:p-7" style={{ backgroundColor: "#0D1B2A" }}>
        <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-[#E2CB7E]">Letter</p>
        <p className={`${playfair.className} mt-5 text-[2.1rem] leading-[1.1] text-[#F9F6F0] md:text-[2.4rem]`}>
          Een Italiaanse <span className="italic text-[#D4AF37]">zomernacht</span>
        </p>
        <p className={`${playfair.className} mt-1.5 text-sm text-[#F9F6F0]/60`}>Playfair Display - koppen en citaten</p>
        <div className="my-5 h-px w-16 bg-[#D4AF37]/60" />
        <p className={`${montserrat.className} text-[0.95rem] leading-relaxed text-[#F9F6F0]/85`}>
          Warm licht, goede wijn en muziek die precies klopt.
        </p>
        <p className={`${montserrat.className} mt-3 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#E2CB7E]`}>
          Luister &amp; beleef
        </p>
        <p className={`${montserrat.className} mt-1.5 text-sm text-[#F9F6F0]/60`}>Montserrat - lopende tekst en labels</p>
      </div>
    </div>
  );
}
