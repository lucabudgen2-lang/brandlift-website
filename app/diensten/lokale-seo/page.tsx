import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Lokale SEO voor meer zichtbaarheid in Google",
  description:
    "Verbeter je lokale vindbaarheid met lokale SEO, een sterke websitestructuur, Google Bedrijfsprofiel en pagina's die aanvragen opleveren.",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Diensten"
      title="Lokale SEO voor bedrijven die beter gevonden willen worden"
      intro="Lokaal beter gevonden worden begint bij je website. Wij bouwen de basis waarmee de juiste klanten je vinden."
    />
  );
}
