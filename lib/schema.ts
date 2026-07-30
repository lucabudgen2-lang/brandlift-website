import { site, reviews as siteReviews } from "@/lib/site";

/* ============================================================
   BRANDLIFT · gestructureerde data
   Eén samenhangende entiteitsgraaf, geen losse eilandjes per pagina.
   Elke node heeft een vast @id uit het register hieronder, zodat
   pagina's naar elkaars entiteiten kunnen verwijzen in plaats van
   dezelfde gegevens telkens opnieuw (en net iets anders) te herhalen.

   @id-register
     /#organization    Organization        het bedrijf
     /#localbusiness   ProfessionalService de lokale vestiging
     /#website         WebSite
     /#founder         Person              Luca (E-E-A-T-anker)
     {path}#webpage    WebPage
     {path}#breadcrumb BreadcrumbList
     {path}#service    Service
     {path}#faq        FAQPage

   REGEL: markeer alleen wat ook echt op de pagina staat, en verzin
   nooit een getal. Ontbreekt data, dan laten we het veld weg.
   ============================================================ */

const ORG = `${site.url}/#organization`;
const BIZ = `${site.url}/#localbusiness`;
const WEB = `${site.url}/#website`;
const FOUNDER = `${site.url}/#founder`;

const LANG = "nl-NL";

/* De steden waar we daadwerkelijk een pagina en werkgebied voor hebben. */
const SERVED_CITIES = ["Den Haag", "Rotterdam", "Utrecht", "Amsterdam", "Eindhoven", "Delft"];

const areaServedNodes = [
  ...SERVED_CITIES.map((name) => ({ "@type": "City", name })),
  { "@type": "Country", name: "Nederland" },
];

const socialProfiles = [
  site.socials.instagram,
  site.socials.facebook,
  site.socials.linkedinCompany,
  site.gbp.share,
];

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.street,
  postalCode: site.postalCode,
  addressLocality: site.city,
  addressRegion: site.region,
  addressCountry: site.country,
};

/* ── de vier globale entiteiten ── */

function organizationNode() {
  return {
    "@type": "Organization",
    "@id": ORG,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phoneE164,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/brand/logo-lockup.png`,
      caption: `${site.name} logo`,
    },
    image: `${site.url}/images/brandlift-aan-het-werk.jpg`,
    founder: { "@id": FOUNDER },
    foundingDate: "2021",
    description: site.oneLiner,
    slogan: site.tagline,
    address: postalAddress,
    identifier: {
      "@type": "PropertyValue",
      name: "KvK",
      value: site.kvk,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: site.phoneE164,
      email: site.email,
      areaServed: "NL",
      availableLanguage: ["nl", "en"],
    },
    sameAs: socialProfiles,
    areaServed: areaServedNodes,
    knowsAbout: [
      "Website laten maken",
      "Lokale SEO",
      "Branding",
      "Conversieoptimalisatie",
      "Webdesign Den Haag",
    ],
  };
}

/* ProfessionalService i.p.v. het generieke LocalBusiness: specifieker type
   = duidelijker entiteit. Storefront-listing, dus adres blijft zichtbaar en
   moet exact overeenkomen met het Google Bedrijfsprofiel. */
function localBusinessNode() {
  return {
    "@type": "ProfessionalService",
    "@id": BIZ,
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phoneE164,
    image: `${site.url}/images/brandlift-aan-het-werk.jpg`,
    logo: `${site.url}/brand/logo-lockup.png`,
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.gbp.map,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: site.hours.open,
      closes: site.hours.close,
    },
    sameAs: socialProfiles,
    areaServed: areaServedNodes,
    founder: { "@id": FOUNDER },
    parentOrganization: { "@id": ORG },
    currenciesAccepted: "EUR",
    hasOfferCatalog: offerCatalogNode(),
    aggregateRating: aggregateRatingNode(),
  };
}

/* Echte, publiek gecommuniceerde vanaf-prijzen. Exclusief BTW (B2B). */
function offerCatalogNode() {
  const offer = (name: string, description: string, path: string, minPrice?: number) => ({
    "@type": "Offer",
    name,
    description,
    url: `${site.url}${path}`,
    ...(minPrice
      ? {
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice,
            priceCurrency: "EUR",
            valueAddedTaxIncluded: false,
          },
        }
      : {}),
    itemOffered: {
      "@type": "Service",
      name,
      provider: { "@id": ORG },
    },
  });

  return {
    "@type": "OfferCatalog",
    name: "Diensten van Brandlift",
    itemListElement: [
      offer(
        "Website laten maken",
        "Strategische website met lokale SEO-basis, ontwerp en techniek.",
        "/diensten/website-laten-maken",
        1500,
      ),
      offer(
        "Lokale SEO",
        "Vindbaarheid per dienst en werkgebied, Google Bedrijfsprofiel, schema en vermeldingen.",
        "/diensten/lokale-seo",
      ),
      offer(
        "Branding",
        "Merk, huisstijl en beeldtaal die passen bij de kwaliteit die je levert.",
        "/diensten/branding",
      ),
      offer(
        "Conversie-optimalisatie",
        "Pagina's gericht op vertrouwen, duidelijkheid en contact.",
        "/diensten/conversie-optimalisatie",
      ),
    ],
  };
}

/* Alleen de echte Google-reviews. Nooit ophogen. */
function aggregateRatingNode() {
  return {
    "@type": "AggregateRating",
    ratingValue: siteReviews.rating,
    reviewCount: siteReviews.count,
    bestRating: 5,
    worstRating: 1,
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEB,
    url: site.url,
    name: site.name,
    description: site.oneLiner,
    inLanguage: LANG,
    publisher: { "@id": ORG },
  };
}

function founderNode() {
  return {
    "@type": "Person",
    "@id": FOUNDER,
    name: site.founder,
    jobTitle: "Oprichter",
    worksFor: { "@id": ORG },
    image: `${site.url}/images/portrait-luca.png`,
    email: site.email,
    knowsAbout: [
      "Webdesign",
      "Lokale SEO",
      "Branding",
      "Conversie-optimalisatie",
      "Fotografie",
      "Webdevelopment",
    ],
    sameAs: [site.socials.linkedinFounder, site.socials.instagram],
    workLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        addressCountry: site.country,
      },
    },
  };
}

/* De globale entiteiten staan in de root layout, dus op élke pagina. Losse
   pagina's verwijzen er alleen naar via @id en herhalen ze niet. */
export function siteSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), localBusinessNode(), websiteNode(), founderNode()],
  };
}

/* ── herbruikbare node-bouwers ── */

type Crumb = { name: string; path: string };

/* Let op: deze bouwers geven een NODE terug, geen los document. Alleen de
   buitenste wrapper zet @context - een @context op geneste nodes binnen een
   @graph is ruis. */
function breadcrumbNode(crumbs: Crumb[], path: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${site.url}${path}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.path}`,
    })),
  };
}

function faqNode(faqs: readonly { q: string; a: string }[], path: string) {
  return {
    "@type": "FAQPage",
    "@id": `${site.url}${path}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function webPageNode(opts: {
  path: string;
  name: string;
  description: string;
  type?: string;
  hasBreadcrumb?: boolean;
  primaryImage?: string;
  dateModified?: string;
}) {
  return {
    "@type": opts.type ?? "WebPage",
    "@id": `${site.url}${opts.path}#webpage`,
    url: `${site.url}${opts.path}`,
    name: opts.name,
    description: opts.description,
    inLanguage: LANG,
    isPartOf: { "@id": WEB },
    about: { "@id": ORG },
    ...(opts.primaryImage ? { primaryImageOfPage: `${site.url}${opts.primaryImage}` } : {}),
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
    ...(opts.hasBreadcrumb ? { breadcrumb: { "@id": `${site.url}${opts.path}#breadcrumb` } } : {}),
  };
}

/* Publieke, backwards-compatible varianten (losse documenten) voor pagina's
   die deze los inprikken. */
export function breadcrumbSchema(crumbs: Crumb[], path = "") {
  return { "@context": "https://schema.org", ...breadcrumbNode(crumbs, path) };
}

export function faqSchema(faqs: readonly { q: string; a: string }[], path = "") {
  return { "@context": "https://schema.org", ...faqNode(faqs, path) };
}

/* AggregateRating + losse Review-nodes - UITSLUITEND echte reviews. */
export function reviewsAggregate(
  reviews: {
    rating: number;
    count: number;
    source: string;
    items: readonly { name: string; text: string; stars: number }[];
  },
  itemReviewed: Record<string, unknown> = { "@id": ORG },
) {
  return {
    ...itemReviewed,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviews.rating,
      reviewCount: reviews.count,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.items.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.stars,
        bestRating: 5,
      },
      reviewBody: r.text,
      publisher: { "@type": "Organization", name: reviews.source },
    })),
  };
}

/* Dienst-/stadspagina: Service + WebPage + FAQ + kruimelpad. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
  faqs?: readonly { q: string; a: string }[];
  crumbs: Crumb[];
  withReviews?: Parameters<typeof reviewsAggregate>[0];
  dateModified?: string;
}) {
  const service: Record<string, unknown> = {
    "@type": "Service",
    "@id": `${site.url}${opts.path}#service`,
    name: opts.name,
    description: opts.description,
    serviceType: opts.name,
    provider: { "@id": ORG },
    areaServed: opts.areaServed
      ? { "@type": "City", name: opts.areaServed }
      : areaServedNodes,
    mainEntityOfPage: { "@id": `${site.url}${opts.path}#webpage` },
  };
  if (opts.withReviews) {
    const agg = reviewsAggregate(opts.withReviews, {});
    service.aggregateRating = agg.aggregateRating;
    service.review = agg.review;
  }

  const graph: Record<string, unknown>[] = [
    webPageNode({
      path: opts.path,
      name: opts.name,
      description: opts.description,
      hasBreadcrumb: true,
      dateModified: opts.dateModified,
    }),
    service,
    breadcrumbNode(opts.crumbs, opts.path),
  ];
  if (opts.faqs && opts.faqs.length) graph.push(faqNode(opts.faqs, opts.path));

  /* Een stadspagina beschrijft een echte plaats - geef die een eigen node. */
  if (opts.areaServed) {
    graph.push({
      "@type": "Place",
      name: opts.areaServed,
      address: { "@type": "PostalAddress", addressLocality: opts.areaServed, addressCountry: "NL" },
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

/* Hub-pagina: CollectionPage + ItemList van de echte onderliggende pagina's. */
export function collectionSchema(opts: {
  name: string;
  description: string;
  path: string;
  items: readonly { name: string; path: string; description?: string }[];
  crumbs: Crumb[];
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...webPageNode({
          path: opts.path,
          name: opts.name,
          description: opts.description,
          type: "CollectionPage",
          hasBreadcrumb: true,
        }),
        mainEntity: { "@id": `${site.url}${opts.path}#list` },
      },
      {
        "@type": "ItemList",
        "@id": `${site.url}${opts.path}#list`,
        name: opts.name,
        numberOfItems: opts.items.length,
        itemListElement: opts.items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          url: `${site.url}${it.path}`,
          ...(it.description ? { description: it.description } : {}),
        })),
      },
      breadcrumbNode(opts.crumbs, opts.path),
    ],
  };
}

/* Kennisbank-artikel: Article met een echte auteur en datums. */
export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  crumbs: Crumb[];
  faqs?: readonly { q: string; a: string }[];
}) {
  const graph: Record<string, unknown>[] = [
    {
      ...webPageNode({
        path: opts.path,
        name: opts.headline,
        description: opts.description,
        hasBreadcrumb: true,
        dateModified: opts.dateModified ?? opts.datePublished,
      }),
    },
    {
      "@type": "Article",
      "@id": `${site.url}${opts.path}#article`,
      headline: opts.headline,
      description: opts.description,
      ...(opts.image ? { image: `${site.url}${opts.image}` } : {}),
      datePublished: opts.datePublished,
      dateModified: opts.dateModified ?? opts.datePublished,
      author: { "@id": FOUNDER },
      publisher: { "@id": ORG },
      mainEntityOfPage: { "@id": `${site.url}${opts.path}#webpage` },
      inLanguage: LANG,
    },
    breadcrumbNode(opts.crumbs, opts.path),
  ];
  if (opts.faqs && opts.faqs.length) graph.push(faqNode(opts.faqs, opts.path));
  return { "@context": "https://schema.org", "@graph": graph };
}

/* Contactpagina. */
export function contactSchema(opts: { path: string; name: string; description: string; crumbs: Crumb[] }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...webPageNode({
          path: opts.path,
          name: opts.name,
          description: opts.description,
          type: "ContactPage",
          hasBreadcrumb: true,
        }),
        mainEntity: { "@id": BIZ },
      },
      breadcrumbNode(opts.crumbs, opts.path),
    ],
  };
}

/* Calculator: een echte webapplicatie, geen artikel. */
export function webAppSchema(opts: {
  name: string;
  description: string;
  path: string;
  crumbs: Crumb[];
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        path: opts.path,
        name: opts.name,
        description: opts.description,
        hasBreadcrumb: true,
      }),
      {
        "@type": "WebApplication",
        "@id": `${site.url}${opts.path}#app`,
        name: opts.name,
        description: opts.description,
        url: `${site.url}${opts.path}`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        browserRequirements: "Vereist JavaScript",
        inLanguage: LANG,
        publisher: { "@id": ORG },
        /* De tool zelf is gratis; dat is een feit, geen marketingclaim. */
        offers: { "@type": "Offer", price: 0, priceCurrency: "EUR" },
      },
      breadcrumbNode(opts.crumbs, opts.path),
    ],
  };
}

/* Over-pagina: AboutPage die naar de bestaande Person-node verwijst. */
export function aboutSchema() {
  const path = "/over-brandlift";
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Over Brandlift", path },
  ];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...webPageNode({
          path,
          name: "Over Brandlift - het bureau achter je website",
          description: site.oneLiner,
          type: "AboutPage",
          hasBreadcrumb: true,
        }),
        mainEntity: { "@id": FOUNDER },
      },
      breadcrumbNode(crumbs, path),
    ],
  };
}

/* Case: Article over een echte klant. */
export function caseSchema(opts: {
  headline: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  crumbs: Crumb[];
  clientName?: string;
}) {
  const graph: Record<string, unknown>[] = [
    webPageNode({
      path: opts.path,
      name: opts.headline,
      description: opts.description,
      hasBreadcrumb: true,
      primaryImage: opts.image,
    }),
    {
      "@type": "Article",
      "@id": `${site.url}${opts.path}#article`,
      headline: opts.headline,
      description: opts.description,
      image: `${site.url}${opts.image}`,
      datePublished: opts.datePublished,
      dateModified: opts.datePublished,
      author: { "@id": FOUNDER },
      publisher: { "@id": ORG },
      mainEntityOfPage: { "@id": `${site.url}${opts.path}#webpage` },
      inLanguage: LANG,
      ...(opts.clientName
        ? { about: { "@type": "Organization", name: opts.clientName } }
        : {}),
    },
    breadcrumbNode(opts.crumbs, opts.path),
  ];
  return { "@context": "https://schema.org", "@graph": graph };
}
