import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Website laten maken Den Haag | Webdesign met lokale SEO",
  description:
    "Website laten maken in Den Haag? Brandlift bouwt strategische websites met webdesign, lokale SEO en conversie voor bedrijven die meer aanvragen willen.",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Den Haag · heel Nederland"
      title="Website laten maken in Den Haag voor meer zichtbaarheid en aanvragen"
      intro="Een lokale partner in Den Haag die verder kijkt dan design en je website bouwt als groeifundament - actief in heel Nederland."
    />
  );
}
