import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Voor wie werkt Brandlift",
  description:
    "Brandlift bouwt websites voor Nederlandse vakbedrijven en servicebedrijven, en voor visuele en premium bedrijven die professioneel willen overkomen.",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Voor wie"
      title="Voor bedrijven die al goed werk leveren - en online willen groeien"
      intro="Van vakbedrijven en servicebedrijven tot visuele en premium merken. Als kwaliteit en vertrouwen tellen, past Brandlift."
    />
  );
}
