"use client";

import { useRef, useState } from "react";
import { seizoen } from "@/lib/cases/giorgi";

/* ============================================================
   Seizoen: Google Trends-index voor "bruiloft", dertien maanden.

   Verandering over tijd, één reeks - dus een lijn met een zachte
   vlakvulling, geen staven. Alleen de piek en het dal krijgen een
   label; de rest leest je af met de hulplijn (hover, of pijltjes-
   toetsen als de grafiek focus heeft). Rasterlijnen recessief.
   De tabel eronder is de toegankelijke weergave.
   ============================================================ */

const W = 640, H = 240, PL = 34, PR = 16, PT = 22, PB = 30;
const pw = W - PL - PR, ph = H - PT - PB;
const x = (i: number) => PL + (i / (seizoen.length - 1)) * pw;
const y = (v: number) => PT + ph - (v / 100) * ph;

export function SeizoenChart() {
  const [i, setI] = useState<number | null>(null);
  const svg = useRef<SVGSVGElement>(null);

  const lijn = seizoen.map((d, k) => `${k ? "L" : "M"}${x(k).toFixed(1)},${y(d.v).toFixed(1)}`).join(" ");
  const vlak = `${lijn} L${x(seizoen.length - 1)},${PT + ph} L${x(0)},${PT + ph} Z`;
  const piek = seizoen.reduce((a, d, k) => (d.v > seizoen[a].v ? k : a), 0);
  const dal = seizoen.reduce((a, d, k) => (d.v < seizoen[a].v ? k : a), 0);

  const beweeg = (e: React.PointerEvent<SVGSVGElement>) => {
    const r = svg.current!.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * W;
    const k = Math.round(((px - PL) / pw) * (seizoen.length - 1));
    setI(Math.max(0, Math.min(seizoen.length - 1, k)));
  };
  const toets = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") setI((v) => Math.min(seizoen.length - 1, (v ?? -1) + 1));
    if (e.key === "ArrowLeft") setI((v) => Math.max(0, (v ?? 1) - 1));
  };

  return (
    <figure>
      <svg
        ref={svg}
        viewBox={`0 0 ${W} ${H}`}
        className="w-full touch-none select-none outline-none focus-visible:ring-2 focus-visible:ring-blue"
        role="img"
        aria-label="Zoekinteresse in bruiloft per maand: piek in mei en juni, dal in november en december"
        tabIndex={0}
        onPointerMove={beweeg}
        onPointerLeave={() => setI(null)}
        onKeyDown={toets}
        onBlur={() => setI(null)}
      >
        <defs>
          <linearGradient id="seizoen-vlak" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0130fd" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#0130fd" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[0, 50, 100].map((v) => (
          <g key={v}>
            <line x1={PL} x2={W - PR} y1={y(v)} y2={y(v)} stroke="rgba(0,0,0,0.07)" />
            <text x={PL - 8} y={y(v) + 3.5} textAnchor="end" className="fill-g600 text-[10px]">{v}</text>
          </g>
        ))}
        {seizoen.map((d, k) => (k % 2 === 0 || k === seizoen.length - 1) && (
          <text key={d.m} x={x(k)} y={H - 8} textAnchor="middle" className="fill-g600 text-[10px]">{d.m}</text>
        ))}

        <path d={vlak} fill="url(#seizoen-vlak)" />
        <path d={lijn} fill="none" stroke="#0130fd" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />

        {/* alleen piek en dal gelabeld */}
        {[{ k: piek, t: "piek" }, { k: dal, t: "dal" }].map(({ k, t }) => (
          <g key={t}>
            <circle cx={x(k)} cy={y(seizoen[k].v)} r="4.5" fill="#fdfdfd" stroke="#0130fd" strokeWidth="2" />
            <text x={x(k)} y={y(seizoen[k].v) - 11} textAnchor="middle" className="fill-ink text-[11px] font-bold">
              {seizoen[k].v} · {t}
            </text>
          </g>
        ))}

        {i !== null && (
          <g>
            <line x1={x(i)} x2={x(i)} y1={PT} y2={PT + ph} stroke="rgba(0,0,0,0.25)" strokeDasharray="3 3" />
            <circle cx={x(i)} cy={y(seizoen[i].v)} r="5" fill="#0130fd" stroke="#fdfdfd" strokeWidth="2" />
            <g transform={`translate(${Math.min(Math.max(x(i), PL + 44), W - PR - 44)}, ${PT - 4})`}>
              <rect x="-44" y="-16" width="88" height="22" rx="4" fill="#000" />
              <text x="0" y="-1" textAnchor="middle" className="fill-white text-[11px] font-semibold">
                {seizoen[i].m}: {seizoen[i].v}
              </text>
            </g>
          </g>
        )}
      </svg>

      <figcaption className="mt-3 text-xs leading-relaxed text-g600">
        Google Trends, Nederland, zoekterm &quot;bruiloft&quot; (index, 100 = hoogste punt). Juli 2025 tot en met juli 2026.
      </figcaption>

      <details className="mt-3 text-xs text-g600">
        <summary className="cursor-pointer font-semibold text-blue">Bekijk als tabel</summary>
        <table className="mt-2 w-full max-w-sm text-left">
          <thead>
            <tr><th scope="col" className="py-1 font-bold">Maand</th><th scope="col" className="py-1 text-right font-bold">Index</th></tr>
          </thead>
          <tbody>
            {seizoen.map((d) => (
              <tr key={d.m} className="border-t border-ink/[0.06]"><td className="py-1">{d.m}</td><td className="py-1 text-right tabular-nums">{d.v}</td></tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}
