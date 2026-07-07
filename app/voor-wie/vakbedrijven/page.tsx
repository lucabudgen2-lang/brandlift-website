import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Websites voor vakbedrijven",
  description:
    "Websites met lokale SEO voor hoveniers, schilders, aannemers, installateurs en andere vakbedrijven. Beter gevonden, meer vertrouwen, meer aanvragen.",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Voor wie · Vakbedrijven"
      title="Websites voor vakbedrijven die meer klussen willen binnenhalen"
      intro="Hoveniers, schilders, aannemers, installateurs, dakdekkers en meer. We weten wat jouw klant zoekt en wat hem over de streep trekt."
    />
  );
}
