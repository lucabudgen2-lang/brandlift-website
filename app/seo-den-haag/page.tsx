import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "SEO Den Haag | Lokale SEO die klanten oplevert - Brandlift",
  description:
    "SEO in Den Haag die aanvragen oplevert in plaats van een rapport met groene vinkjes. Lokale vindbaarheid voor Haagse bedrijven die willen groeien.",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Lokale SEO · Den Haag"
      title="SEO in Den Haag die klanten oplevert"
      intro="Beter gevonden worden in Den Haag met een lokale SEO-aanpak die aanvragen oplevert - geen rapport met groene vinkjes, maar vindbaarheid die telt."
    />
  );
}
