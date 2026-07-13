import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero, ProseSections, FaqBlock, CtaBlock } from "@/components/page/blocks";
import { Reviews } from "@/components/sections/Reviews";
import { websiteHub, reviews } from "@/lib/site";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Website laten maken voor meer zichtbaarheid en aanvragen | Brandlift",
  description:
    "Laat een strategische website maken met sterke structuur, lokale SEO en conversiegerichte pagina's. Voor Nederlandse bedrijven die meer aanvragen willen.",
  alternates: { canonical: "/diensten/website-laten-maken" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Diensten", path: "/diensten" },
  { name: "Website laten maken", path: "/diensten/website-laten-maken" },
];

const links = [
  { label: "Lokale SEO", href: "/diensten/lokale-seo" },
  { label: "Branding", href: "/diensten/branding" },
  { label: "Conversie-optimalisatie", href: "/diensten/conversie-optimalisatie" },
  { label: "Website laten maken in Den Haag", href: "/website-laten-maken-den-haag" },
  { label: "Wat kost een website?", href: "/kennisbank/wat-kost-een-website-laten-maken" },
  { label: "Voor vakbedrijven", href: "/voor-wie/vakbedrijven" },
  { label: "De Brandlift Methode", href: "/werkwijze" },
  { label: "Bekijk de cases", href: "/cases" },
];

export default function Page() {
  const schema = serviceSchema({
    name: "Website laten maken",
    description: metadata.description as string,
    path: "/diensten/website-laten-maken",
    faqs: websiteHub.faqs,
    crumbs,
    withReviews: reviews,
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageHero
        crumbs={crumbs}
        eyebrow={websiteHub.eyebrow}
        h1={websiteHub.h1}
        intro={websiteHub.intro}
        updated={websiteHub.updated}
      />

      <ProseSections sections={websiteHub.sections} />

      <Reviews tone="dark" />

      {/* interne links naar het cluster */}
      <section className="on-light py-16 md:py-20">
        <Container>
          <Reveal>
            <Eyebrow>Verder lezen</Eyebrow>
          </Reveal>
          <div className="mt-6 flex flex-wrap gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group inline-flex items-center gap-2 chamf-sm border border-ink/12 bg-black/[0.02] px-4 py-2.5 text-sm font-medium text-g800 transition-colors hover:border-blue hover:text-blue"
              >
                {l.label}
                <span className="text-blue transition-transform duration-150 group-hover:translate-x-0.5">→</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FaqBlock faqs={websiteHub.faqs} />
      <CtaBlock />
    </main>
  );
}
