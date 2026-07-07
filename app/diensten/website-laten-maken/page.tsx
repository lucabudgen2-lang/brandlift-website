import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Website laten maken voor meer zichtbaarheid en aanvragen",
  description:
    "Laat een strategische website maken met sterke structuur, lokale SEO en conversiegerichte pagina's. Voor Nederlandse bedrijven die meer aanvragen willen.",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Diensten"
      title="Website laten maken die vertrouwen wekt en aanvragen oplevert"
      intro="Geen digitale brochure, maar een website die is gebouwd op strategie, vindbaarheid en conversie."
    />
  );
}
