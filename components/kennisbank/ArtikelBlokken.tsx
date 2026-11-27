import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import type { Blok, Beeld } from "@/lib/kennisbank/types";

/* ============================================================
   Rendert de blokken van een kennisbankartikel.
   Leesbreedte ±68 tekens, rustige typografie, op een lichte ondergrond.
   ============================================================ */

/* **vet** en [label](href) -> React; verder niets. */
export function Inline({ tekst }: { tekst: string }) {
  const delen: ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let laatste = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(tekst))) {
    if (m.index > laatste) delen.push(tekst.slice(laatste, m.index));
    if (m[1]) delen.push(<strong key={k++} className="font-semibold">{m[1]}</strong>);
    else {
      const href = m[3];
      const extern = /^https?:\/\//.test(href);
      delen.push(
        extern ? (
          <a key={k++} href={href} target="_blank" rel="noopener" className="font-semibold text-blue underline decoration-blue/30 underline-offset-2 hover:decoration-blue">
            {m[2]}
          </a>
        ) : (
          <Link key={k++} href={href} className="font-semibold text-blue underline decoration-blue/30 underline-offset-2 hover:decoration-blue">
            {m[2]}
          </Link>
        ),
      );
    }
    laatste = re.lastIndex;
  }
  if (laatste < tekst.length) delen.push(tekst.slice(laatste));
  return <>{delen}</>;
}

function Figuur({ beeld }: { beeld: Beeld }) {
  return (
    <figure className="my-8">
      <div className="overflow-hidden chamf chamf-lg border border-ink/10 bg-white">
        <Image src={beeld.src} alt={beeld.alt} width={beeld.breed} height={beeld.hoog} sizes="(max-width: 768px) 92vw, 720px" className="block h-auto w-full" />
      </div>
      {beeld.onderschrift && <figcaption className="mt-2.5 text-sm text-g600">{beeld.onderschrift}</figcaption>}
    </figure>
  );
}

export function ArtikelBlokken({ blokken }: { blokken: Blok[] }) {
  return (
    <div className="text-[1.075rem] leading-[1.75] text-g700 [&_strong]:text-ink">
      {blokken.map((b, i) => {
        switch (b.type) {
          case "antwoord":
            return (
              <div key={i} className="relative mb-10 chamf chamf-lg border border-blue/25 bg-blue/[0.05] p-6 md:p-7">
                <span className="absolute left-0 top-0 h-full w-1 bg-blue" aria-hidden />
                <p className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-blue">Het korte antwoord</p>
                <p className="mt-2 text-[1.1rem] font-medium leading-relaxed text-ink">
                  <Inline tekst={b.tekst} />
                </p>
              </div>
            );
          case "kop":
            return (
              <h2 key={i} id={b.id} className="mt-14 scroll-mt-28 font-display text-[1.7rem] font-extrabold leading-tight tracking-tight text-ink md:text-[2rem]">
                {b.tekst}
              </h2>
            );
          case "subkop":
            return (
              <h3 key={i} className="mt-9 font-display text-xl font-extrabold leading-snug tracking-tight text-ink">
                {b.tekst}
              </h3>
            );
          case "alinea":
            return (
              <p key={i} className="mt-5">
                <Inline tekst={b.tekst} />
              </p>
            );
          case "lijst": {
            const Tag = b.genummerd ? "ol" : "ul";
            return (
              <Tag key={i} className="mt-5 space-y-2.5">
                {b.items.map((it, j) => (
                  <li key={j} className="flex gap-3">
                    {b.genummerd ? (
                      <span className="mt-[0.2rem] grid h-6 w-6 shrink-0 place-items-center chamf-sm bg-blue font-display text-[0.72rem] font-bold text-white">{j + 1}</span>
                    ) : (
                      <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 chamf-sm bg-blue" aria-hidden />
                    )}
                    <span>
                      <Inline tekst={it} />
                    </span>
                  </li>
                ))}
              </Tag>
            );
          }
          case "bewijs":
            return (
              <aside key={i} className="my-10 overflow-hidden chamf chamf-lg bg-s0 text-g200 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.6)] [&_strong]:!text-paper">
                {b.beeld && (
                  <Image src={b.beeld.src} alt={b.beeld.alt} width={b.beeld.breed} height={b.beeld.hoog} sizes="(max-width: 768px) 92vw, 720px" className="block h-auto w-full border-b border-white/10" />
                )}
                <div className="p-6 md:p-8">
                  <p className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-blue-text">{b.label}</p>
                  <p className="mt-2 font-display text-xl font-extrabold leading-snug text-paper">{b.titel}</p>
                  <p className="mt-3 text-[1rem] leading-relaxed">
                    <Inline tekst={b.tekst} />
                  </p>
                  <p className="mt-4 border-t border-white/10 pt-3 text-[0.8rem] text-g500">{b.bron}</p>
                </div>
              </aside>
            );
          case "tabel":
            return (
              <figure key={i} className="my-8">
                <div className="overflow-x-auto chamf chamf-lg border border-ink/10 bg-white">
                  <table className="w-full min-w-[480px] border-collapse text-left text-[0.95rem]">
                    <thead>
                      <tr className="bg-ink/[0.03]">
                        {b.kop.map((k) => (
                          <th key={k} className="border-b border-ink/10 px-4 py-3 font-display text-[0.8rem] font-bold uppercase tracking-[0.04em] text-ink">
                            {k}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {b.rijen.map((r, j) => (
                        <tr key={j} className="border-b border-ink/[0.06] last:border-0">
                          {r.map((c, n) => (
                            <td key={n} className={`px-4 py-3 align-top ${n === 0 ? "font-semibold text-ink" : ""}`}>
                              <Inline tekst={c} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {b.bron && <figcaption className="mt-2.5 text-sm text-g600">{b.bron}</figcaption>}
              </figure>
            );
          case "citaat":
            return (
              <figure key={i} className="my-10 border-l-[3px] border-blue pl-6">
                <blockquote className="font-display text-xl font-bold leading-snug text-ink md:text-[1.35rem]">{b.tekst}</blockquote>
                <figcaption className="mt-3 text-sm text-g600">
                  <span className="font-semibold text-ink">{b.wie}</span> · {b.bron}
                </figcaption>
              </figure>
            );
          case "beeld":
            return <Figuur key={i} beeld={b.beeld} />;
          case "letop":
            return (
              <div key={i} className="my-8 chamf chamf-lg border border-ink/10 bg-paper p-6">
                <p className="font-display text-[0.95rem] font-extrabold text-ink">{b.titel}</p>
                <p className="mt-1.5 text-[1rem] leading-relaxed">
                  <Inline tekst={b.tekst} />
                </p>
              </div>
            );
        }
      })}
    </div>
  );
}
