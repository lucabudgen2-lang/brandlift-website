import { PhoneLink } from "@/components/ui/PhoneLink";
import Link from "next/link";
import { site } from "@/lib/site";
import { footerNav, footerLegal } from "@/lib/nav";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-s0 pt-16 pb-10">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/logo-lockup.png"
              alt="Brandlift logo"
              width={1672}
              height={941}
              className="h-14 w-auto md:h-16"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-g500">
              Strategische websites met branding en lokale SEO voor Nederlandse bedrijven.
              Meer zichtbaarheid, meer vertrouwen, meer aanvragen.
            </p>
            <div className="mt-5 space-y-1 text-sm text-g600">
              <p>
                {site.street} · {site.postalCode} {site.city}
              </p>
              <p>
                {site.hours.days} · {site.hours.open} - {site.hours.close}
              </p>
              <p className="font-semibold text-xs">KvK {site.kvk}</p>
            </div>
            <div className="mt-3 flex flex-col gap-1.5">
              <PhoneLink className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-text hover:underline" />
              <a href={`mailto:${site.email}`} className="inline-block text-sm text-blue-text hover:underline">
                {site.email}
              </a>
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-g300 transition-colors hover:text-paper"
              >
                Instagram
              </a>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-g300 transition-colors hover:text-paper"
              >
                Facebook
              </a>
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.heading}>
              <p className="eyebrow mb-4">{col.heading}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-g300 hover:text-paper">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--color-line)] pt-6 text-xs text-g600 md:flex-row md:items-center md:justify-between">
          <span className="font-semibold">
            © {new Date().getFullYear()} {site.name} · {site.domain}
          </span>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLegal.map((l) => (
              <Link key={l.href} href={l.href} className="font-semibold text-g600 hover:text-g300">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
