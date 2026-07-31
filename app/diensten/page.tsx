import { buildPageMetadata } from "@/lib/metadata";
import { PageStub } from "@/components/layout/PageStub";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildPageMetadata({
  title: "Diensten - website, lokale SEO en branding",
  description:
    "Website laten maken, lokale SEO, branding en conversie-optimalisatie. Eén groeifundament voor Nederlandse bedrijven die meer aanvragen willen.",
  path: "/diensten",
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
      { name: "Diensten", path: "/diensten" },
    ],
    "/diensten",
  );
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <PageStub
      eyebrow="Diensten"
      title="Alles wat je website nodig heeft om te presteren"
      intro="Website, lokale SEO, branding en conversie - los inzetbaar, maar het sterkst als één groeifundament."
    />
    </>
  );
}
