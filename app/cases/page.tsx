import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Cases & portfolio",
  description:
    "Het werk van Brandlift: strategische websites met branding en lokale SEO voor Nederlandse bedrijven. Bekijk de cases.",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Cases & portfolio"
      title="Strategisch gebouwd. Niet alleen mooi gemaakt."
      intro="Een greep uit het werk. Voor elk bedrijf begon het bij dezelfde vraag: hoe kom je online net zo sterk over als in het echt?"
    />
  );
}
