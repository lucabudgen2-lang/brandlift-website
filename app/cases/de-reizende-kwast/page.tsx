import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Case: De Reizende Kwast",
  description:
    "Hoe Brandlift schildersbedrijf De Reizende Kwast een merkuitstraling en heldere dienstenstructuur gaf die vertrouwen opbouwt en tot aanvragen leidt.",
  alternates: { canonical: "/cases/de-reizende-kwast" },
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Case · Schilders / afwerking"
      title="De Reizende Kwast"
      intro="Een ambachtelijk schildersbedrijf een uitstraling gegeven die net zo sterk is als het vakwerk zelf."
    />
  );
}
