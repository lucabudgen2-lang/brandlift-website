import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/* AI-crawlers: bewust TOEGESTAAN.

   Dit is een expliciete keuze, geen standaardinstelling. Brandlift verkoopt
   gevonden worden, en antwoordmachines (ChatGPT, Claude, Perplexity, Google
   AI-overzichten) zijn inmiddels een echt vindkanaal. Wie zich daar afsluit,
   verdwijnt uit precies het soort antwoord waarin een bureau genoemd wil
   worden. De site bevat geen persoonsgegevens of betaalde content, dus er
   valt niets af te schermen.

   Wil je dit ooit terugdraaien, dan is het per bot een disallow-regel - maar
   besef dat je dan ook uit die aanbevelingen verdwijnt. */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-User",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "CCBot",
          "meta-externalagent",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
