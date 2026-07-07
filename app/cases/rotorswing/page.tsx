import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Case: RotorSwing Holland",
  description:
    "Hoe Brandlift RotorSwing Holland online positioneerde als premium jachtmerk, met een adviestool die bezoekers naar de juiste stabilisator leidt.",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Case · Maritiem / jachttechniek"
      title="RotorSwing Holland"
      intro="Van technisch sterk product naar een premium online merk - met een adviestool die bezoekers naar de juiste stabilisator leidt."
    />
  );
}
