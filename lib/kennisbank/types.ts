/* ============================================================
   KENNISBANK · het artikelformaat

   Eén artikel = één databestand in content/kennisbank/<slug>.ts dat
   een `Artikel` exporteert. De pagina app/kennisbank/[slug] rendert
   het met vaste blokken. Zo kan de blogpipeline (docs/blogstrategie-
   2026.md) artikelen aanleveren als data, zonder per artikel nieuwe
   pagina-code, en blijft elk artikel aan dezelfde standaard gebonden.

   Inline opmaak in tekstvelden (bewust klein gehouden):
     **vet**              -> <strong>
     [label](/pad)        -> interne link (Next Link)
     [label](https://..)  -> externe link, opent in nieuw tabblad
   ============================================================ */

export type Beeld = { src: string; alt: string; breed: number; hoog: number; onderschrift?: string };

export type Blok =
  /* het antwoord in 2-3 zinnen, bovenaan: dit is wat een AI-overzicht
     of een haastige lezer eruit tilt */
  | { type: "antwoord"; tekst: string }
  /* H2; `id` wordt het anker in de inhoudsopgave */
  | { type: "kop"; tekst: string; id: string }
  | { type: "subkop"; tekst: string }
  | { type: "alinea"; tekst: string }
  | { type: "lijst"; items: string[]; genummerd?: boolean }
  /* het stuk informatiewinst: iets uit eigen werk of eigen meting dat
     nergens anders staat. Verplicht minstens één per artikel. */
  | { type: "bewijs"; label: string; titel: string; tekst: string; bron: string; beeld?: Beeld }
  | { type: "tabel"; kop: string[]; rijen: string[][]; bron?: string }
  | { type: "citaat"; tekst: string; wie: string; bron: string }
  | { type: "beeld"; beeld: Beeld }
  /* korte waarschuwing of nuance in een kader */
  | { type: "letop"; titel: string; tekst: string };

export type Bron = { label: string; url?: string };

export type Artikel = {
  slug: string;
  /* H1: de vraag in de woorden van de lezer */
  titel: string;
  metaTitle: string;
  metaDescription: string;
  /* korte inleiding onder de H1, ook de teaser op /kennisbank */
  lead: string;
  tag: "Kosten" | "Lokale SEO" | "Google-profiel" | "Conversie" | "Branding" | "Per vak" | "Onderzoek" | "Proces";
  /* de zoekterm waar dit artikel eigenaar van is (één eigenaar per term,
     zie docs/brandlift-master-keyword-map.csv) */
  zoekterm: string;
  gepubliceerd: string; // ISO-datum
  bijgewerkt: string; // ISO-datum, eerlijk: alleen ophogen bij een echte inhoudelijke update
  /* concept = alleen zichtbaar lokaal en op Vercel-previews, met noindex;
     nooit in productie. Publiceren = concept op false, via een PR met go. */
  concept: boolean;
  beeld?: Beeld; // og-beeld + beeld in de kop
  blokken: Blok[];
  faq: { q: string; a: string }[];
  bronnen: Bron[];
  /* de volgende stap: de dienst of case die erbij hoort */
  volgendeStap: { label: string; href: string; tekst: string };
  gerelateerd: string[]; // slugs of vaste paden ("/kennisbank/wat-is-lokale-seo")
};
