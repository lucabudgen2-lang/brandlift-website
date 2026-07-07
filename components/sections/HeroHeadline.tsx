"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const ease = [0.22, 0.61, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};
const line: Variants = {
  hidden: { y: "115%" },
  show: { y: 0, transition: { duration: 0.6, ease } },
};
const marker: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.55, delay: 0.5, ease } },
};

/* Marker sits BEHIND the text (rendered first) and is raised so ~30% of it
   overlaps the glyphs - a highlighter through the word, not just under it. */
const markerClass =
  "pointer-events-none absolute bottom-[0.24em] left-0 right-0 h-[0.3em] origin-left rounded-[2px] bg-blue";

/* Hero headline: three one-line statements, masked rise, staggered.
   The final line is italic and carries the electric-blue marker. */
export function HeroHeadline({
  lines,
  className = "",
}: {
  lines: readonly string[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const last = lines.length - 1;

  if (reduce) {
    return (
      <h1 className={className}>
        {lines.map((t, i) => (
          <span
            key={i}
            className={`block whitespace-nowrap ${i === last ? "relative w-fit italic" : ""}`}
          >
            {i === last && <span aria-hidden className={markerClass} />}
            <span className="relative">{t}</span>
          </span>
        ))}
      </h1>
    );
  }

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      {lines.map((t, i) =>
        i === last ? (
          <span key={i} className="relative block w-fit whitespace-nowrap italic">
            <motion.span aria-hidden variants={marker} className={markerClass} />
            <span className="relative block overflow-hidden pb-[0.14em]">
              <motion.span variants={line} className="block">
                {t}
              </motion.span>
            </span>
          </span>
        ) : (
          <span key={i} className="block overflow-hidden whitespace-nowrap">
            <motion.span variants={line} className="block">
              {t}
            </motion.span>
          </span>
        ),
      )}
    </motion.h1>
  );
}
