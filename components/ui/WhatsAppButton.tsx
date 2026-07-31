import Image from "next/image";
import { site } from "@/lib/site";

/* ============================================================
   ZWEVENDE WHATSAPP-KNOP
   Servercomponent: staat dus gewoon in de HTML en werkt ook als
   JavaScript nog niet geladen is. Uitklappen gebeurt met CSS
   (group-hover / group-focus-within), niet met state.

   Nummer komt uit site.phoneE164, dezelfde bron als de tel:-links
   en de gestructureerde data - wa.me wil het zonder + en zonder
   spaties, dus die strippen we hier één keer.
   ============================================================ */

const WA_NUMBER = site.phoneE164.replace(/[^0-9]/g, "");
const WA_TEXT = encodeURIComponent(
  "Hoi Luca, ik heb een vraag over mijn website.",
);
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;

function WhatsAppGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43l-.47-.01c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
    </svg>
  );
}

export function WhatsAppButton() {
  return (
    /* z-40: onder de nav (z-50) en onder de groeigesprek-modal, zodat hij
       nooit over een geopend paneel of dialoog heen valt. */
    <div className="fixed bottom-5 right-5 z-40 print:hidden sm:bottom-7 sm:right-7">
      <a
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Stuur een WhatsApp-bericht naar ${site.founder}`}
        className="group relative flex items-center gap-0 chamf chamf-lg border border-blue/40 bg-s1/90 py-2 pl-2 pr-2 shadow-[0_18px_44px_-14px_rgba(1,48,253,0.75)] backdrop-blur-md transition-all duration-300 ease-[var(--ease-brand)] hover:border-blue hover:bg-s1 hover:pr-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-s0"
      >
        {/* voltage-hoek, zoals op de kaarten elders */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 h-3 w-3 bg-blue opacity-0 transition-opacity duration-200 [clip-path:polygon(100%_0,0_0,100%_100%)] group-hover:opacity-100"
        />

        {/* portret + WhatsApp-badge */}
        <span className="relative block h-11 w-11 shrink-0 overflow-hidden chamf-sm sm:h-12 sm:w-12">
          <Image
            src="/images/portrait-luca-chip.jpg"
            alt=""
            fill
            sizes="48px"
            className="object-cover object-top"
          />
        </span>
        <span
          aria-hidden
          className="absolute -bottom-1 left-8 grid h-6 w-6 place-items-center rounded-full border-2 border-s1 bg-blue text-white shadow-[0_0_12px_rgba(1,48,253,0.8)] sm:left-9"
        >
          <WhatsAppGlyph className="h-3.5 w-3.5" />
        </span>

        {/* label - schuift open op hover/focus, blijft leesbaar voor
            schermlezers via aria-label hierboven */}
        <span className="grid max-w-0 grid-rows-[1fr] overflow-hidden transition-all duration-300 ease-[var(--ease-brand)] group-hover:ml-3 group-hover:max-w-[13rem] group-focus-within:ml-3 group-focus-within:max-w-[13rem]">
          <span className="min-w-0 whitespace-nowrap">
            <span className="block font-display text-[0.82rem] font-extrabold leading-tight tracking-tight text-paper">
              Even appen?
            </span>
            <span className="block text-[0.72rem] leading-tight text-g500">
              Je krijgt {site.founder.split(" ")[0]} zelf
            </span>
          </span>
        </span>
      </a>
    </div>
  );
}
