import { type ReactNode } from "react";

/* Infinite horizontal marquee. Children are rendered twice (second pass
   aria-hidden) so the CSS -50% translate loops seamlessly. Keeps moving on
   hover; collapses to a static wrapped row under prefers-reduced-motion. */
export function Marquee({
  children,
  speed = 40,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  return (
    <div className={`marquee overflow-hidden ${className}`}>
      <div
        className="marquee-track items-center"
        style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
