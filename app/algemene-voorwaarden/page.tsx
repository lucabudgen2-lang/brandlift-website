import { buildPageMetadata } from "@/lib/metadata";
import { PageStub } from "@/components/layout/PageStub";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildPageMetadata({
  title: "Algemene voorwaarden",
  description:
    "De algemene voorwaarden van Brandlift voor het laten maken van een website, branding, lokale SEO en conversie-optimalisatie. Helder en zonder verrassingen.",
  path: "/algemene-voorwaarden",
  noindex: true,
});

export default function Page() {
  const schema = breadcrumbSchema(
    [
      { name: "Home", path: "/" },
      { name: "Algemene voorwaarden", path: "/algemene-voorwaarden" },
    ],
    "/algemene-voorwaarden",
  );
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <PageStub
      eyebrow="Juridisch"
      title="Algemene voorwaarden"
      intro="Hier komen de algemene voorwaarden van Brandlift."
    />
    </>
  );
}
