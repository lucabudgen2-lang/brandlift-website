import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Over Brandlift",
  description:
    "Brandlift is geen anoniem bureau. Achter elke strategie zit Luca Budgen, die ervaring uit de Amerikaanse markt combineert met fotografie, branding en development.",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Over Brandlift"
      title="Geen anoniem bureau. Gewoon Luca - en een obsessie met resultaat."
      intro="Achter elke strategie zit Luca Budgen: ervaring uit de Amerikaanse markt, gecombineerd met een achtergrond in fotografie, branding en development."
    />
  );
}
