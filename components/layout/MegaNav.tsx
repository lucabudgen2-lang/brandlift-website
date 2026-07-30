"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { megaNav, isMega, megaSpotlight } from "@/lib/nav";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/* ============================================================
   DE CONSOLE — Brandlift's zwevende commandobalk.
   Een chamfered console van drie cellen met keylines ertussen:
   [ logo-plaat ][ navigatie ][ CTA ]. De logo-cel is een massieve
   blauwe plaat met het witte schild - de "power cell" van de balk.
   De mega-panelen vallen uit de balk zelf en vormen er één
   geopende console mee.
   ============================================================ */

export function MegaNav() {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeItem = megaNav.find((i) => isMega(i) && i.key === active);
  const open = Boolean(activeItem);

  return (
    <>
      {/* Op mobiel (<lg) blijft dit de klassieke volle balk, zoals voorheen:
          geen zweven, geen chamfer, gewoon een sticky bar met backdrop-blur.
          Vanaf lg wordt het de zwevende console met eigen marge-compensatie
          (zie `main > section:first-of-type` in globals.css, alleen actief
          via --nav-gap op lg+ schermen - de mobiele bar duwt de pagina op de
          normale manier omlaag omdat hij geen negatieve marge heeft). */}
      <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-s0/85 backdrop-blur-md transition-all duration-300 lg:border-b-0 lg:bg-transparent lg:pt-6 lg:backdrop-blur-none lg:-mb-[6.5rem]">
        <Container>
          <div className="relative" onMouseLeave={() => setActive(null)}>
            {/* ── de balk ── */}
            <div
              /* let op: `.chamf` is een gewone CSS-klasse, geen Tailwind-utility,
                 dus `lg:chamf` bestaat niet. Op lg+ zetten we de radius met een
                 echte utility die wél varianten ondersteunt. */
              className={`relative flex h-24 items-stretch overflow-hidden transition-all duration-300 ease-[var(--ease-brand)] md:h-32 lg:h-[5.5rem] lg:rounded-[var(--r-lg)] lg:border lg:backdrop-blur-xl ${
                scrolled || open
                  ? "lg:border-[var(--color-line-strong)] lg:bg-s0/90 lg:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)]"
                  : "lg:border-[var(--color-line)] lg:bg-s0/70 lg:shadow-[0_18px_50px_-28px_rgba(1,48,253,0.45)]"
              }`}
            >
              {/* blauwdruk-textuur in de balk (alleen desktop-console) */}
              <div aria-hidden className="pointer-events-none absolute inset-0 hidden grid-lines opacity-20 lg:block" />
              {/* voltage-hoek rechtsboven (alleen desktop-console) */}
              <span
                aria-hidden
                className="pointer-events-none absolute right-0 top-0 hidden h-4 w-4 bg-blue [clip-path:polygon(100%_0,0_0,100%_100%)] lg:block"
              />

              {/* ── cel 1 · logo ── */}
              <Link
                href="/"
                aria-label="Brandlift home"
                onClick={() => setActive(null)}
                className="group relative flex shrink-0 items-center pl-4 pr-4 sm:pl-6 lg:pl-7 lg:pr-8"
              >
                {/* Bewust een <img> en geen next/image: het logo staat in de
                    sticky balk op elke pagina en moet direct meekomen.
                    width/height staan er expliciet op zodat de browser de
                    ruimte kan reserveren - anders springt de balk (CLS). */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/logo-lockup.png"
                  alt="Brandlift logo"
                  width={1672}
                  height={941}
                  className="h-16 w-auto transition-opacity duration-200 group-hover:opacity-90 md:h-20 lg:h-16 lg:md:h-[4.5rem]"
                />
              </Link>

              {/* keyline */}
              <span aria-hidden className="hidden w-px self-stretch bg-[var(--color-line)] lg:block" />

              {/* ── cel 2 · navigatie ── */}
              <nav className="hidden min-w-0 flex-1 items-stretch justify-center px-5 lg:flex">
                {megaNav.map((item) =>
                  isMega(item) ? (
                    <button
                      key={item.key}
                      className={`group/nav relative flex items-center gap-1.5 whitespace-nowrap px-3 text-sm font-medium transition-colors xl:px-5 ${
                        active === item.key ? "text-paper" : "text-g300 hover:text-paper"
                      }`}
                      onMouseEnter={() => setActive(item.key)}
                      onFocus={() => setActive(item.key)}
                      onClick={() => setActive((v) => (v === item.key ? null : item.key))}
                      aria-expanded={active === item.key}
                    >
                      {item.label}
                      <span
                        aria-hidden
                        className={`text-[0.55rem] transition-transform duration-200 ${
                          active === item.key ? "rotate-180 text-blue-text" : "text-g600"
                        }`}
                      >
                        ▾
                      </span>
                      {/* voltage-strip onderin */}
                      <span
                        aria-hidden
                        className={`absolute inset-x-3 bottom-0 h-[2px] bg-blue shadow-[0_0_10px_rgba(1,48,253,0.9)] transition-all duration-200 ${
                          active === item.key
                            ? "scale-x-100 opacity-100"
                            : "scale-x-0 opacity-0 group-hover/nav:scale-x-100 group-hover/nav:opacity-60"
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group/nav relative flex items-center whitespace-nowrap px-3 text-sm font-medium text-g300 transition-colors hover:text-paper xl:px-5"
                      onMouseEnter={() => setActive(null)}
                    >
                      {item.label}
                      <span
                        aria-hidden
                        className="absolute inset-x-3 bottom-0 h-[2px] scale-x-0 bg-blue opacity-0 shadow-[0_0_10px_rgba(1,48,253,0.9)] transition-all duration-200 group-hover/nav:scale-x-100 group-hover/nav:opacity-60"
                      />
                    </Link>
                  ),
                )}
              </nav>

              {/* keyline */}
              <span aria-hidden className="hidden w-px self-stretch bg-[var(--color-line)] lg:block" />

              {/* ── cel 3 · CTA ── */}
              {/* shrink-0: zonder dit duwt de flex-1 nav de knop voorbij de
                  (overflow-hidden) rand van de balk op brede schermen */}
              <div className="hidden shrink-0 items-center pl-5 pr-6 lg:flex">
                <Button
                  href="/contact"
                  variant="primary"
                  className="group whitespace-nowrap !px-4 !py-2.5 text-[0.82rem] xl:!px-5"
                >
                  <span className="hidden xl:inline">Plan een gratis groeigesprek</span>
                  <span className="xl:hidden">Gratis groeigesprek</span>
                </Button>
              </div>

              {/* mobile toggle */}
              {/* mobile toggle — zoals de oorspronkelijke balk */}
              <button
                className="ml-auto flex h-10 w-10 items-center justify-center self-center text-paper lg:hidden"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Menu"
                aria-expanded={mobileOpen}
              >
                <span className="text-2xl leading-none">{mobileOpen ? "×" : "≡"}</span>
              </button>
            </div>

            {/* ── mega-paneel: valt uit de balk, zelfde breedte, één console ── */}
            {activeItem && isMega(activeItem) && (
              <div className="animate-panel absolute inset-x-0 top-full hidden pt-3 lg:block">
                <div className="relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1/95 shadow-[0_50px_90px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl">
                  <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines opacity-15" />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-0 top-0 h-5 w-5 bg-blue [clip-path:polygon(100%_0,0_0,100%_100%)]"
                  />
                  <div className="relative grid grid-cols-[0.76fr_2fr] gap-10 px-8 py-8 xl:px-10">
                  {/* ── links: founder-spotlight ── */}
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
                    <p className="mt-4 text-sm leading-relaxed text-g500">{megaSpotlight.tagline}</p>
                    <Link
                      href="/contact"
                      onClick={() => setActive(null)}
                      className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-text hover:underline"
                    >
                      Plan een groeigesprek
                      <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                    </Link>
                  </div>

                  {/* ── rechts: de pagina's onder deze sectie ── */}
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
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </header>

      {/* mobile full-screen menu — buiten <header> (backdrop-filter zou hem
          anders tot containing block maken en laten inklappen) */}
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
                        onClick={() => setMobileExpanded((v) => (v === item.key ? null : item.key))}
                        aria-expanded={mobileExpanded === item.key}
                      >
                        {item.label}
                        <span
                          className={`transition-transform ${mobileExpanded === item.key ? "rotate-45" : ""}`}
                        >
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
            <Button
              href="/contact"
              variant="primary"
              className="group mt-6 w-full"
              onClick={() => setMobileOpen(false)}
            >
              Plan een gratis groeigesprek
            </Button>
          </Container>
        </div>
      )}
    </>
  );
}
