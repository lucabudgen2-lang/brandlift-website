import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Branding bureau voor merkstrategie en visuele identiteit",
  description:
    "Brandlift helpt bedrijven met merkstrategie, visuele identiteit en huisstijl die zorgen voor herkenning, vertrouwen en een sterkere website.",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Diensten"
      title="Branding die je bedrijf herkenbaar en geloofwaardig maakt"
      intro="Een scherpere uitstraling die past bij de kwaliteit van je werk - en je website meteen geloofwaardiger maakt."
    />
  );
}
