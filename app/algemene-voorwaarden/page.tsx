import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description:
    "De algemene voorwaarden van Brandlift voor het laten maken van een website, branding, lokale SEO en conversie-optimalisatie. Helder en zonder verrassingen.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/algemene-voorwaarden" },
};

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
