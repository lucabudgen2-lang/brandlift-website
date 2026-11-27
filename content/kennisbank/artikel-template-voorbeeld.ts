import type { Artikel } from "@/lib/kennisbank/types";

/* ============================================================
   VOORBEELD VAN HET TEMPLATE · altijd concept, nooit in productie.

   Laat elk bloktype één keer zien, zodat de blogpipeline en wie het
   template aanpast kunnen zien hoe alles eruitziet. De inhoud gaat over
   het template zelf; er staan bewust geen inhoudelijke claims in.
   ============================================================ */

export const artikelTemplateVoorbeeld: Artikel = {
  slug: "artikel-template-voorbeeld",
  titel: "Hoe ziet een kennisbankartikel van Brandlift eruit?",
  metaTitle: "Template-voorbeeld kennisbankartikel",
  metaDescription:
    "Interne voorbeeldpagina die elk bloktype van het kennisbanktemplate één keer laat zien. Niet bedoeld voor publicatie.",
  lead: "Interne voorbeeldpagina: elk bloktype van het template één keer, in de volgorde waarin een echt artikel ze meestal gebruikt.",
  tag: "Proces",
  zoekterm: "(geen: voorbeeldpagina)",
  gepubliceerd: "2026-11-27",
  bijgewerkt: "2026-11-27",
  concept: true,
  blokken: [
    {
      type: "antwoord",
      tekst:
        "Elk artikel begint met het antwoord in twee of drie zinnen. Daarna volgt de uitleg, met minstens één **bewijsblok** uit eigen werk. Dit kader is dat antwoord.",
    },
    { type: "kop", id: "opbouw", tekst: "Hoe een artikel is opgebouwd" },
    {
      type: "alinea",
      tekst:
        "Een alinea mag **vet** bevatten, een [interne link](/kennisbank) en een [externe link](https://developers.google.com/search/docs). Meer opmaak is er bewust niet: de tekst moet het werk doen.",
    },
    {
      type: "lijst",
      items: ["Een gewone lijst voor losse punten", "Kort, één gedachte per punt", "Geen opsomming als het eigenlijk een verhaal is"],
    },
    { type: "subkop", tekst: "Een subkop binnen een sectie" },
    { type: "lijst", genummerd: true, items: ["Een genummerde lijst", "voor stappen in een vaste volgorde"] },
    {
      type: "bewijs",
      label: "Uit eigen werk",
      titel: "Het bewijsblok",
      tekst:
        "Hier staat het stuk informatiewinst: een eigen meting, een screenshot uit een echt traject of een fout die we bij klanten zagen. Zonder dit blok gaat een artikel niet door de poort.",
      bron: "Bron: de bron van het bewijs, zo precies mogelijk (meting, datum, case).",
    },
    {
      type: "tabel",
      kop: ["Bloktype", "Waarvoor"],
      rijen: [
        ["antwoord", "het korte antwoord bovenaan"],
        ["bewijs", "informatiewinst uit eigen werk"],
        ["letop", "een nuance of waarschuwing"],
      ],
      bron: "Bron: lib/kennisbank/types.ts",
    },
    {
      type: "letop",
      titel: "Let op",
      tekst: "Een kader voor een nuance die de lezer niet mag missen, bijvoorbeeld wanneer iets níet voor hem geldt.",
    },
    {
      type: "citaat",
      tekst: "Een citaat staat er alleen letterlijk en met een bron.",
      wie: "Naam",
      bron: "waar en wanneer gezegd",
    },
  ],
  faq: [
    { q: "Waar komen de FAQ-vragen vandaan?", a: "Uit echte vragen: Google 'Mensen vragen ook', autocomplete en vragen van klanten. Het antwoord begint met het antwoord." },
    { q: "Wordt dit voorbeeld ooit gepubliceerd?", a: "Nee. Het staat altijd op concept en is alleen lokaal en op previews te zien, met noindex." },
  ],
  bronnen: [{ label: "Google Search Central: documentatie", url: "https://developers.google.com/search/docs" }],
  volgendeStap: { label: "Bekijk de kennisbank", href: "/kennisbank", tekst: "Terug naar alle gidsen." },
  gerelateerd: ["/kennisbank/wat-is-lokale-seo", "/kennisbank/wat-kost-een-website-laten-maken"],
};
