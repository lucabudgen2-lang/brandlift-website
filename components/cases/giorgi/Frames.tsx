import Image from "next/image";

/* ============================================================
   Apparaatframes voor schermafbeeldingen in de Giorgi-case.

   Bewust sober: een dunne balk met drie punten en de URL, geen
   nagebouwde Safari-knoppen. Het frame moet zeggen "dit is een echte
   website", niet de aandacht van de site zelf wegtrekken.
   ============================================================ */

export function BrowserFrame({
  url,
  src,
  alt,
  priority = false,
  sizes = "(max-width: 1024px) 92vw, 50vw",
  ratio = "aspect-[16/10]",
  tone = "dark",
  objectPosition = "object-top",
}: {
  url: string;
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  ratio?: string;
  tone?: "dark" | "light";
  objectPosition?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`overflow-hidden chamf chamf-lg border shadow-[0_44px_100px_-45px_rgba(0,0,0,0.8)] ${
        dark ? "border-[var(--color-line-strong)] bg-s1" : "border-ink/10 bg-white"
      }`}
    >
      <div className={`flex items-center gap-2 border-b px-4 py-2.5 ${dark ? "border-[var(--color-line)] bg-s2/70" : "border-ink/[0.07] bg-black/[0.02]"}`}>
        <span className="h-2 w-2 rounded-full bg-blue" />
        <span className={`h-2 w-2 rounded-full ${dark ? "bg-white/15" : "bg-black/15"}`} />
        <span className={`h-2 w-2 rounded-full ${dark ? "bg-white/15" : "bg-black/15"}`} />
        <span className={`ml-2 flex-1 truncate chamf-sm px-3 py-1 text-[0.6rem] font-semibold tracking-[0.08em] text-g500 ${dark ? "bg-white/[0.04]" : "bg-black/[0.04]"}`}>
          {url}
        </span>
      </div>
      <div className={`relative ${ratio}`}>
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className={`object-cover ${objectPosition}`} />
      </div>
    </div>
  );
}

export function PhoneFrame({ src, alt, sizes = "200px" }: { src: string; alt: string; sizes?: string }) {
  return (
    <div className="rounded-[26px] border border-white/15 bg-[#0b0c10] p-[5px] shadow-[0_30px_70px_-25px_rgba(0,0,0,0.9)]">
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[21px]">
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover object-top" />
        <span aria-hidden className="absolute left-1/2 top-1.5 h-[5%] w-[30%] -translate-x-1/2 rounded-full bg-black/85" />
      </div>
    </div>
  );
}
