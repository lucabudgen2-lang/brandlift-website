import { site } from "@/lib/site";

/* ============================================================
   TELEFOONLINK — één plek voor het nummer.
   Weergave is altijd site.phone (06 80 22 71 95), de href altijd
   site.phoneE164 (+31680227195). Dat laatste is ook exact wat er in
   de gestructureerde data staat, zodat NAP-gegevens op de site en in
   het Google Bedrijfsprofiel niet uit elkaar kunnen lopen.

   Server-component: het nummer staat dus gewoon in de HTML en niet
   pas na hydratatie. Nooit als afbeelding, nooit versleuteld.
   ============================================================ */

function PhoneIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6.3 3h3l1.5 4-2 1.3a12 12 0 0 0 5.4 5.4l1.3-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.3 5.2 2 2 0 0 1 6.3 3z" />
    </svg>
  );
}

export function PhoneLink({
  className = "",
  withIcon = true,
  iconSize = 16,
  label,
}: {
  className?: string;
  withIcon?: boolean;
  iconSize?: number;
  /** Vervangt het zichtbare nummer, bijv. voor een compacte mobiele knop. */
  label?: string;
}) {
  return (
    <a
      href={`tel:${site.phoneE164}`}
      className={className}
      aria-label={label ? `Bel ${site.phone}` : undefined}
    >
      {withIcon && <PhoneIcon size={iconSize} />}
      <span>{label ?? site.phone}</span>
    </a>
  );
}

/* Compacte variant voor de navigatiebalk op mobiel: alleen het icoon,
   maar met een toegankelijk label zodat het niet als lege link telt. */
export function PhoneIconLink({ className = "" }: { className?: string }) {
  return (
    <a href={`tel:${site.phoneE164}`} className={className} aria-label={`Bel ${site.phone}`}>
      <PhoneIcon size={18} />
      <span className="sr-only">{site.phone}</span>
    </a>
  );
}
