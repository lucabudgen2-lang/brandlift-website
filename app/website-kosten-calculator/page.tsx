import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Website kosten berekenen | Wat kost jouw website? - Brandlift",
  description:
    "Bereken in een paar klikken wat een nieuwe website kost. Een eerlijke prijsindicatie afgestemd op wat jouw bedrijf nodig heeft, zonder verplichtingen.",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Tool"
      title="Bereken wat jouw website gaat kosten"
      intro="Een eerlijke prijsindicatie in een paar klikken - afgestemd op het type website en de functies die jouw bedrijf nodig heeft."
    />
  );
}
