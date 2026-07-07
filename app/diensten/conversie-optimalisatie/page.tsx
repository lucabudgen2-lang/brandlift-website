import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Conversie-optimalisatie voor meer aanvragen uit je website",
  description:
    "Meer halen uit je bestaande bezoekers. Brandlift optimaliseert formulieren, CTA's en gebruikersroutes zodat meer bezoekers contact opnemen.",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Diensten"
      title="Conversie-optimalisatie: meer aanvragen uit dezelfde bezoekers"
      intro="Je krijgt al bezoek, maar te weinig aanvragen? We verbeteren de route naar contact, stap voor stap."
    />
  );
}
