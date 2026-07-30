import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Diensten - website, lokale SEO en branding",
  description:
    "Website laten maken, lokale SEO, branding en conversie-optimalisatie. Eén groeifundament voor Nederlandse bedrijven die meer aanvragen willen.",
  alternates: { canonical: "/diensten" },
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Diensten"
      title="Alles wat je website nodig heeft om te presteren"
      intro="Website, lokale SEO, branding en conversie - los inzetbaar, maar het sterkst als één groeifundament."
    />
  );
}
