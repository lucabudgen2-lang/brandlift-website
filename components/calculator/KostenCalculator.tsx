"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { animate, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import {
  calcPrice,
  formatEuro,
  spectrumPos,
  TYPE_OPTIONS,
  PAGE_OPTIONS,
  EXTRA_OPTIONS,
  type CalcInput,
  type ExtraId,
} from "@/lib/calculator";

/* ── animated euro amount (count-up on change) ── */
function AnimatedAmount({ value }: { value: number }) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);
  const prev = useRef(value);

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      prev.current = value;
      return;
    }
    const controls = animate(prev.current, value, {
      duration: 0.55,
      ease: [0.22, 0.61, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v / 50) * 50),
    });
    prev.current = value;
    return () => controls.stop();
  }, [value, reduce]);

  return <>{formatEuro(display)}</>;
}

function Check({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

/* numbered section header inside the console */
function StepHead({ n, title, hint }: { n: string; title: string; hint?: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-display text-sm font-bold text-blue-text">{n}</span>
      <p className="font-display text-lg font-extrabold tracking-tight text-paper">{title}</p>
      {hint && <span className="text-xs text-g600">{hint}</span>}
    </div>
  );
}

/* selectable option card */
function OptionCard({
  on,
  onClick,
  label,
  desc,
  tag,
  disabled,
}: {
  on: boolean;
  onClick: () => void;
  label: string;
  desc?: string;
  tag?: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      disabled={disabled}
      className={`group relative w-full overflow-hidden chamf-sm border p-4 text-left transition-all duration-200 ${
        disabled
          ? "cursor-not-allowed border-white/5 bg-white/[0.02] opacity-50"
          : on
            ? "border-blue bg-blue/15 shadow-[0_0_28px_-6px_rgba(1,48,253,0.55)]"
            : "border-white/10 bg-white/[0.03] hover:border-blue/50 hover:bg-white/[0.05]"
      }`}
    >
      {on && (
        <span className="absolute right-0 top-0 h-4 w-4 bg-blue [clip-path:polygon(100%_0,0_0,100%_100%)]" aria-hidden />
      )}
      <span className="flex items-center gap-2.5">
        <span
          className={`grid h-[15px] w-[15px] shrink-0 place-items-center chamf-sm border transition-colors ${
            on ? "border-blue bg-blue text-white" : "border-white/25 bg-transparent text-transparent"
          }`}
        >
          <Check size={9} />
        </span>
        <span className={`text-sm font-semibold ${on ? "text-paper" : "text-g200"}`}>{label}</span>
        {tag && (
          <span className="ml-auto chamf-sm bg-white/[0.06] px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.08em] text-g500">
            {tag}
          </span>
        )}
      </span>
      {desc && <span className="mt-1.5 block pl-[27px] text-[0.8rem] leading-snug text-g500">{desc}</span>}
    </button>
  );
}

/* ══════════════════════ THE CONSOLE ══════════════════════ */
export function KostenCalculator() {
  const [input, setInput] = useState<CalcInput>({
    type: "vakbedrijf",
    pages: "1-5",
    extras: [],
    seoUitgebreid: false,
    contentKlaar: true,
  });
  const [email, setEmail] = useState("");
  const [sendState, setSendState] = useState<"idle" | "busy" | "done" | "error">("idle");

  const result = useMemo(() => calcPrice(input), [input]);

  const toggleExtra = (id: ExtraId) =>
    setInput((s) => ({
      ...s,
      extras: s.extras.includes(id) ? s.extras.filter((e) => e !== id) : [...s.extras, id],
    }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSendState("busy");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "calculator",
          email,
          config: input,
          indication: { low: result.low, high: result.high },
        }),
      });
      setSendState(res.ok ? "done" : "error");
    } catch {
      setSendState("error");
    }
  }

  /* spectrum geometry */
  const bandLeft = spectrumPos(result.low) * 100;
  const bandRight = spectrumPos(Math.min(result.high, 10000)) * 100;
  const overflow = result.high > 10000;

  return (
    <section className="relative overflow-hidden bg-s0 pb-20 md:pb-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
      <div className="animate-glow pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />

      <Container className="relative">
        <Reveal>
          <div className="overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1/60 shadow-[0_60px_120px_-60px_rgba(0,0,0,0.8)] backdrop-blur-md">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              {/* ════════ INPUTS ════════ */}
              <div className="space-y-9 p-6 sm:p-9 lg:border-r lg:border-[var(--color-line)]">
                {/* 01 · type */}
                <div>
                  <StepHead n="01" title="Wat voor website heb je nodig?" />
                  <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {TYPE_OPTIONS.map((t) => (
                      <OptionCard
                        key={t.id}
                        on={input.type === t.id}
                        onClick={() => setInput((s) => ({ ...s, type: t.id }))}
                        label={t.label}
                        desc={t.desc}
                        tag={t.vanafLabel}
                      />
                    ))}
                  </div>
                </div>

                {/* 02 · omvang */}
                <div>
                  <StepHead n="02" title="Hoeveel pagina's?" hint="diensten, werkgebieden, over, contact ..." />
                  <div className="mt-4 grid grid-cols-3 gap-2.5">
                    {PAGE_OPTIONS.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        aria-pressed={input.pages === p.id}
                        onClick={() => setInput((s) => ({ ...s, pages: p.id }))}
                        className={`chamf-sm border px-3 py-3 text-center text-sm font-semibold transition-all duration-200 ${
                          input.pages === p.id
                            ? "border-blue bg-blue/15 text-paper shadow-[0_0_24px_-6px_rgba(1,48,253,0.5)]"
                            : "border-white/10 bg-white/[0.03] text-g300 hover:border-blue/50"
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 03 · extra's */}
                <div>
                  <StepHead n="03" title="Wat moet er verder in?" hint="meerdere keuzes mogelijk" />
                  <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {EXTRA_OPTIONS.map((x) => {
                      const inbegrepen = x.id === "betalingen" && input.type === "webshop";
                      return (
                        <OptionCard
                          key={x.id}
                          on={inbegrepen || input.extras.includes(x.id)}
                          onClick={() => !inbegrepen && toggleExtra(x.id)}
                          label={x.label}
                          tag={inbegrepen ? "inbegrepen" : undefined}
                          disabled={inbegrepen}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* 04 · lokale SEO */}
                <div>
                  <StepHead n="04" title="Lokale SEO" />
                  <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    <OptionCard
                      on={!input.seoUitgebreid}
                      onClick={() => setInput((s) => ({ ...s, seoUitgebreid: false }))}
                      label="Basis"
                      desc="Schema, vermeldingen en Google Bedrijfsprofiel - zit er altijd in"
                      tag="inbegrepen"
                    />
                    <OptionCard
                      on={input.seoUitgebreid}
                      onClick={() => setInput((s) => ({ ...s, seoUitgebreid: true }))}
                      label="Uitgebreid met groei-retainer"
                      desc="Doorlopend werken aan posities en aanvragen"
                      tag="apart p/m"
                    />
                  </div>
                </div>

                {/* 05 · content */}
                <div>
                  <StepHead n="05" title="Heb je al teksten en beeld?" />
                  <div className="mt-4 grid grid-cols-2 gap-2.5">
                    <OptionCard
                      on={input.contentKlaar}
                      onClick={() => setInput((s) => ({ ...s, contentKlaar: true }))}
                      label="Ja, grotendeels"
                    />
                    <OptionCard
                      on={!input.contentKlaar}
                      onClick={() => setInput((s) => ({ ...s, contentKlaar: false }))}
                      label="Nee, hulp nodig"
                    />
                  </div>
                </div>
              </div>

              {/* ════════ RESULT ════════ */}
              <div className="relative bg-s0/60 p-6 sm:p-9">
                <div className="lg:sticky lg:top-28">
                  <p className="eyebrow">Jouw indicatie</p>

                  {/* the number */}
                  <p className="mt-5 font-display text-[2.4rem] font-extrabold leading-none tracking-tight text-paper sm:text-[2.9rem]" aria-live="polite">
                    <AnimatedAmount value={result.low} />
                    <span className="mx-2 text-g600">-</span>
                    <AnimatedAmount value={result.high} />
                  </p>
                  <p className="mt-2 text-sm text-g500">eenmalige bouwprijs, indicatie</p>

                  {/* spectrum */}
                  <div className="mt-7">
                    <div className="relative h-2.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="absolute inset-y-0 rounded-full bg-blue shadow-[0_0_18px_rgba(1,48,253,0.8)] transition-all duration-500 ease-[var(--ease-brand)]"
                        style={{ left: `${bandLeft}%`, width: `${Math.max(3, bandRight - bandLeft)}%` }}
                      />
                    </div>
                    <div className="mt-2 flex justify-between text-[0.7rem] font-semibold text-g600">
                      <span>€2.000</span>
                      <span className={overflow ? "text-blue-text" : ""}>€10.000+</span>
                    </div>
                  </div>

                  {/* wat zit erin */}
                  <div className="mt-7 border-t border-[var(--color-line)] pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-g600">Hier zit in</p>
                    <ul className="mt-3 space-y-2">
                      {result.included.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-g200">
                          <span className="mt-0.5 grid h-[17px] w-[17px] shrink-0 place-items-center chamf-sm bg-blue/15 text-blue-text">
                            <Check size={10} />
                          </span>
                          {item}
                        </li>
                      ))}
                      <li className="flex items-start gap-2.5 text-sm font-semibold text-paper">
                        <span className="mt-0.5 grid h-[17px] w-[17px] shrink-0 place-items-center chamf-sm bg-blue text-white">
                          <Check size={10} />
                        </span>
                        We werken door totdat je tevreden bent
                      </li>
                    </ul>
                    <ul className="mt-4 space-y-1.5 border-t border-[var(--color-line)] pt-3.5">
                      {result.monthly.map((m) => (
                        <li key={m} className="flex items-start gap-2.5 text-[0.8rem] text-g500">
                          <span className="mt-[7px] h-1 w-3 shrink-0 bg-white/20" />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* email gate */}
                  <div className="mt-7 chamf border border-[var(--color-line-strong)] bg-s1 p-5">
                    {sendState === "done" ? (
                      <div className="flex items-start gap-3">
                        <span className="grid h-8 w-8 shrink-0 place-items-center chamf-sm bg-blue text-white">
                          <Check size={15} />
                        </span>
                        <div>
                          <p className="text-sm font-bold text-paper">Verstuurd</p>
                          <p className="mt-1 text-[0.82rem] leading-relaxed text-g400">
                            We sturen je de berekening met een gespecificeerde opzet. Sneller weten waar je
                            staat? Plan direct een groeigesprek.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={submit}>
                        <p className="text-sm font-bold text-paper">Ontvang deze berekening per mail</p>
                        <p className="mt-1 text-[0.8rem] leading-snug text-g500">
                          Inclusief een gespecificeerde opzet voor jouw situatie.
                        </p>
                        <div className="mt-3.5 flex gap-2">
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="jouw@bedrijf.nl"
                            aria-label="E-mailadres"
                            className="min-w-0 flex-1 chamf-sm border border-white/15 bg-s0 px-3.5 py-2.5 text-sm text-paper placeholder:text-g600 focus:border-blue focus:outline-none"
                          />
                          <button
                            type="submit"
                            disabled={sendState === "busy"}
                            className="shrink-0 chamf-sm bg-blue px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-press disabled:opacity-60"
                          >
                            {sendState === "busy" ? "..." : "Stuur"}
                          </button>
                        </div>
                        {sendState === "error" && (
                          <p className="mt-2 text-xs text-red-400">
                            Versturen lukte niet - probeer het nog eens of mail ons direct.
                          </p>
                        )}
                      </form>
                    )}
                  </div>

                  {/* CTA's */}
                  <div className="mt-6 flex flex-col gap-3">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-2.5 chamf-sm bg-blue px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_48px_-16px_rgba(1,48,253,0.85)] transition-colors duration-150 hover:bg-blue-press"
                    >
                      Plan een gratis groeigesprek
                      <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                    </Link>
                    <p className="text-center text-xs leading-relaxed text-g600">
                      Dit is een indicatie - de exacte prijs volgt uit het gratis groeigesprek.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
