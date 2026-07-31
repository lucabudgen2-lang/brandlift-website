import { buildPageMetadata } from "@/lib/metadata";
import { PageStub } from "@/components/layout/PageStub";
import { articleSchema } from "@/lib/schema";

export const metadata = buildPageMetadata({
  title: "Wat is lokale SEO?",
  description:
    "Wat is lokale SEO en waarom begint lokale vindbaarheid bij je eigen website? Een heldere uitleg voor lokale bedrijven en dienstverleners.",
  path: "/kennisbank/wat-is-lokale-seo",
  noindex: true,
});

export default function Page() {
  const schema = articleSchema({
    headline: "Wat is lokale SEO?",
    description: metadata.description as string,
    path: "/kennisbank/wat-is-lokale-seo",
    datePublished: "2026-07-13",
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Kennisbank", path: "/kennisbank" },
      { name: "Wat is lokale SEO?", path: "/kennisbank/wat-is-lokale-seo" },
    ],
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <PageStub
      eyebrow="Kennisbank · Lokale SEO"
      title="Wat is lokale SEO?"
      intro="Hoe lokale vindbaarheid werkt, en waarom die begint bij je eigen website in plaats van alleen bij Google Maps."
    />
    </>
  );
}
