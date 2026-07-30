import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";
import { caseSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Case: De Reizende Kwast",
  description:
    "Hoe Brandlift schildersbedrijf De Reizende Kwast een merkuitstraling en heldere dienstenstructuur gaf die vertrouwen opbouwt en tot aanvragen leidt.",
  alternates: { canonical: "/cases/de-reizende-kwast" },
};

export default function Page() {
  const schema = caseSchema({
    headline: "De Reizende Kwast",
    description: metadata.description as string,
    path: "/cases/de-reizende-kwast",
    image: "/logos/reizende-kwast.png",
    datePublished: "2026-07-13",
    clientName: "De Reizende Kwast",
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Cases", path: "/cases" },
      { name: "De Reizende Kwast", path: "/cases/de-reizende-kwast" },
    ],
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <PageStub
      eyebrow="Case · Schilders / afwerking"
      title="De Reizende Kwast"
      intro="Een ambachtelijk schildersbedrijf een uitstraling gegeven die net zo sterk is als het vakwerk zelf."
    />
    </>
  );
}
