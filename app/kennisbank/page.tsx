import { buildPageMetadata } from "@/lib/metadata";
import { PageStub } from "@/components/layout/PageStub";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildPageMetadata({
  title: "Kennisbank - gidsen over websites en SEO",
  description:
    "Praktische gidsen over websites, lokale SEO en kosten. Eerlijke uitleg zonder salespraat, zodat je met vertrouwen kiest wat je bedrijf nodig heeft.",
  path: "/kennisbank",
  noindex: true,
});

export default function Page() {
/* TODO: schema + indexering terugzetten zodra deze pagina echt is
   gebouwd. Zolang er alleen een stub staat, beschreef de CollectionPage/
   Article-markup inhoud die niet op de pagina stond - dat is precies wat
   een handmatige maatregel voor gestructureerde data uitlokt. */
  const schema = breadcrumbSchema(
    [
      { name: "Home", path: "/" },
      { name: "Kennisbank", path: "/kennisbank" },
    ],
    "/kennisbank",
  );
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <PageStub
      eyebrow="Kennisbank"
      title="Praktische gidsen voor betere keuzes online"
      intro="Geen dichtgetimmerde salespraat. Eerlijke uitleg over websites, lokale SEO en kosten, zodat je met vertrouwen kiest."
    />
    </>
  );
}
