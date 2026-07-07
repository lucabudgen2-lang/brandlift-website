import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap chamf font-semibold tracking-tight transition-colors duration-150 ease-[var(--ease-brand)] px-6 py-3.5 text-[0.95rem]";

const variants: Record<Variant, string> = {
  // electric blue as a fill only — never blue text on dark
  primary: "chamf-sm bg-blue text-white hover:bg-blue-press",
  // outlined, works on dark surfaces
  secondary:
    "chamf-sm border border-[var(--color-line-strong,rgba(255,255,255,.16))] text-white hover:border-white/40 hover:bg-white/[0.04]",
  ghost: "text-blue-text hover:underline underline-offset-4 px-0 py-0",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...rest
}: {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
} & Omit<React.ComponentProps<typeof Link>, "href">) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
      {variant !== "ghost" && (
        <span aria-hidden className="translate-y-px transition-transform duration-150 group-hover:translate-x-0.5">
          →
        </span>
      )}
    </Link>
  );
}
