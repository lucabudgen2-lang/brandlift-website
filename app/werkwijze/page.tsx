import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Werkwijze - De Brandlift Methode",
  description:
    "De Brandlift Methode: van groeigesprek naar een website die klopt. Positionering, structuur, branding, lokale SEO, conversie, techniek en groei.",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Werkwijze"
      title="De Brandlift Methode: van groeigesprek naar een website die klopt"
      intro="Geen website die toevallig werkt. Een vaste aanpak in zeven stappen, gebouwd op vindbaarheid, vertrouwen en conversie."
    />
  );
}
