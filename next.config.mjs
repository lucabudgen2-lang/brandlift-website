/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    /* AVIF eerst, WebP als terugval. Zonder deze regel levert Next alleen
       WebP - de standaardwaarde is ['image/webp']. AVIF is doorgaans 20 tot
       30 procent kleiner bij gelijke kwaliteit, en wie het niet ondersteunt
       krijgt automatisch WebP. Dit kost dus niemand iets. */
    formats: ["image/avif", "image/webp"],

    /* Alleen de breedtes die dit ontwerp echt gebruikt. De standaardlijst van
       Next is breder en genereert varianten waar nooit iemand om vraagt; elke
       variant is een aparte optimalisatie-run op Vercel. */
    deviceSizes: [375, 640, 828, 1080, 1200, 1920],
    imageSizes: [32, 64, 96, 128, 256, 384],

    /* Een jaar cachen. In dit project geldt de regel dat een gewijzigde
       afbeelding een nieuwe bestandsnaam krijgt in plaats van dat we het oude
       bestand overschrijven, dus er valt nooit iets te verversen. */
    minimumCacheTTL: 31536000,
  },

  /* GEEN optimizePackageImports voor framer-motion. Geprobeerd en gemeten:
     de totale JS-omvang van de build was er tot op de kilobyte gelijk mee
     (1462 KB in beide gevallen), dus het levert hier niets op. Een
     experimentele vlag zonder meetbaar voordeel is alleen maar risico. */

  async redirects() {
    return [
      /* www -> apex, permanent.

         Aanleiding: www.brandliftagency.nl had wél een CNAME naar Vercel,
         maar stond niet als domein op het project. Daardoor dekte het
         certificaat alleen de kale domeinnaam en kreeg iedereen die
         "www.brandliftagency.nl" intypte een certificaatwaarschuwing -
         een volledige blokkadepagina van de browser, dus erger dan een 404.
         Gemeten met:
           openssl s_client -connect brandliftagency.nl:443 \
             | openssl x509 -noout -text | grep -A1 "Subject Alternative Name"
         Dat gaf alleen DNS:brandliftagency.nl.

         Nu staat www als domein op het project (dus wordt er een
         certificaat voor uitgegeven) en stuurt deze regel het door naar de
         kale variant. Zonder die redirect zou www dezelfde site serveren
         en had je duplicate content op twee hostnamen.

         De kale variant is de canonieke: dat is wat in lib/metadata.ts,
         app/sitemap.ts en site.url staat. */
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.brandliftagency.nl" }],
        destination: "https://brandliftagency.nl/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
