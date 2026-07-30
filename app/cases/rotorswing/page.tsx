import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";
import { caseSchema } from "@/lib/schema";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case: RotorSwing Holland",
  description:
    "Hoe Brandlift RotorSwing Holland online positioneert als premium jachtmerk, met een adviestool die bezoekers naar de juiste stabilisator leidt. Dit traject loopt nog - de website gaat binnenkort live.",
  alternates: { canonical: "/cases/rotorswing" },
};

export default function Page() {
  const schema = caseSchema({
    headline: "RotorSwing Holland",
    description: metadata.description as string,
    path: "/cases/rotorswing",
    image: "/logos/rotorswing.png",
    datePublished: "2026-07-13",
    clientName: "RotorSwing Holland",
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Cases", path: "/cases" },
      { name: "RotorSwing Holland", path: "/cases/rotorswing" },
    ],
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <PageStub
      eyebrow="Case · Maritiem / jachttechniek"
      title="RotorSwing Holland"
      intro="Van technisch sterk product naar een premium online merk - met een adviestool die bezoekers naar de juiste stabilisator leidt."
    >
      <div className="max-w-xl">
        <div className="inline-flex w-fit items-center gap-2.5 chamf-sm bg-blue px-4 py-2.5 shadow-[0_0_24px_-6px_rgba(1,48,253,0.9)]">
          <span aria-hidden className="h-2 w-2 rounded-full bg-white" />
          <span className="text-sm font-semibold text-white">Website binnenkort live</span>
        </div>
        <p className="mt-5 text-lg leading-relaxed text-g300">
          Dit traject is nog in aanbouw. Zodra de nieuwe site live staat, werken we deze case hier
          volledig uit - met het eindresultaat erbij, niet met beloftes vooraf.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="/contact" variant="primary" className="group">
            Plan een gratis groeigesprek
          </Button>
          <Link
            href="/cases/hovenier-eykelenboom"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-text hover:underline"
          >
            Bekijk een afgeronde case
            <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </PageStub>
    </>
  );
}
