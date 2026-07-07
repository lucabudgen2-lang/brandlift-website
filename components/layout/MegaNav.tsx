"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { megaNav, isMega, megaSpotlight } from "@/lib/nav";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function MegaNav() {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const activeItem = megaNav.find((i) => isMega(i) && i.key === active);

  return (
    <>
    <header
      className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-s0/85 backdrop-blur-md"
      onMouseLeave={() => setActive(null)}
    >
      <Container className="flex h-24 items-center justify-between md:h-32">
        <Link href="/" className="flex items-center" aria-label="Brandlift home" onClick={() => setActive(null)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-lockup.png" alt="Brandlift" className="h-16 w-auto md:h-20" />
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {megaNav.map((item) =>
            isMega(item) ? (
              <button
                key={item.key}
                className={`flex items-center gap-1.5 py-2 text-sm font-medium transition-colors ${
                  active === item.key ? "text-paper" : "text-g300 hover:text-paper"
                }`}
                onMouseEnter={() => setActive(item.key)}
                onFocus={() => setActive(item.key)}
                aria-expanded={active === item.key}
              >
                {item.label}
                <span
                  aria-hidden
                  className={`text-[0.6rem] transition-transform duration-200 ${
                    active === item.key ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-sm font-medium text-g300 transition-colors hover:text-paper"
                onMouseEnter={() => setActive(null)}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary" className="group">
            Plan een gratis groeigesprek
          </Button>
        </div>

        {/* mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center text-paper lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          <span className="text-2xl leading-none">{mobileOpen ? "×" : "≡"}</span>
        </button>
      </Container>

      {/* desktop mega panel */}
      {activeItem && isMega(activeItem) && (
        <div className="animate-panel absolute inset-x-0 top-full hidden overflow-hidden rounded-b-2xl border-t border-[var(--color-line-strong)] bg-s2 shadow-[0_40px_70px_-30px_rgba(0,0,0,0.85)] lg:block">
          <Container className="grid grid-cols-[0.76fr_2fr] gap-10 py-9">
            {/* ── left rail: founder spotlight (constant across the site) ── */}
            <div className="flex flex-col border-r border-[var(--color-line)] pr-10">
              <Link
                href={megaSpotlight.href}
                onClick={() => setActive(null)}
                className="group relative block aspect-[4/5] overflow-hidden rounded-xl border border-[var(--color-line-strong)] bg-gradient-to-b from-s3 to-s0"
              >
                <Image
                  src={megaSpotlight.photo}
                  alt={`${megaSpotlight.name}, ${megaSpotlight.role} van Brandlift`}
                  fill
                  sizes="320px"
                  className="object-cover object-center transition-transform duration-500 ease-[var(--ease-brand)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-s0 via-s0/20 to-transparent" />
                <div className="absolute inset-x-4 bottom-4">
                  <p className="font-display text-lg font-extrabold tracking-tight text-paper">
                    {megaSpotlight.name}
                  </p>
                  <p className="mt-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-blue-text">
                    {megaSpotlight.role}
                  </p>
                </div>
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-g500">
                {megaSpotlight.tagline}
              </p>
              <Link
                href="/contact"
                onClick={() => setActive(null)}
                className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-text hover:underline"
              >
                Plan een groeigesprek
                <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
              </Link>
            </div>

            {/* ── right: only the pages that fall under this section ── */}
            <div>
              <div className="mb-6 flex items-center justify-between border-b border-[var(--color-line)] pb-4">
                <p className="eyebrow">{activeItem.label}</p>
                <Link
                  href={activeItem.href}
                  onClick={() => setActive(null)}
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-blue-text hover:underline"
                >
                  {activeItem.overview}
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {activeItem.pages.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={() => setActive(null)}
                    className="group -mx-3 block rounded-lg px-3 py-3 transition-colors hover:bg-white/[0.03]"
                  >
                    <span className="flex items-center gap-1.5 text-[0.98rem] font-semibold text-g100 transition-colors group-hover:text-blue-text">
                      {p.label}
                      <span className="-translate-x-1 text-blue-text opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                        →
                      </span>
                    </span>
                    {p.desc && (
                      <span className="mt-1 block text-sm leading-snug text-g600">{p.desc}</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </div>
      )}

    </header>

      {/* mobile full-screen menu — rendered OUTSIDE <header> so it stays fixed
          to the viewport (the header's backdrop-filter would otherwise become
          its containing block and collapse it to a sliver) */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-24 bottom-0 z-40 overflow-y-auto border-t border-[var(--color-line)] bg-s0 md:top-32 lg:hidden">
          <Container className="py-6">
            <ul className="divide-y divide-[var(--color-line)]">
              {megaNav.map((item) => (
                <li key={isMega(item) ? item.key : item.href} className="py-1">
                  {isMega(item) ? (
                    <>
                      <button
                        className="flex w-full items-center justify-between py-3.5 text-left text-base font-semibold text-paper"
                        onClick={() =>
                          setMobileExpanded((v) => (v === item.key ? null : item.key))
                        }
                        aria-expanded={mobileExpanded === item.key}
                      >
                        {item.label}
                        <span className={`transition-transform ${mobileExpanded === item.key ? "rotate-45" : ""}`}>
                          +
                        </span>
                      </button>
                      {mobileExpanded === item.key && (
                        <div className="pb-3">
                          {item.pages.map((l) => (
                            <Link
                              key={l.href}
                              href={l.href}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-lg px-3 py-2.5 text-sm text-g300 hover:bg-white/[0.04] hover:text-paper"
                            >
                              {l.label}
                            </Link>
                          ))}
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-blue-text"
                          >
                            {item.overview} →
                          </Link>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3.5 text-base font-semibold text-paper"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Button href="/contact" variant="primary" className="group mt-6 w-full" onClick={() => setMobileOpen(false)}>
              Plan een gratis groeigesprek
            </Button>
          </Container>
        </div>
      )}
    </>
  );
}
