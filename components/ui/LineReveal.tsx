"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

/* Kinetic headline: each line rises out of an overflow mask, staggered.
   The in-view trigger lives on the (unclipped) container — children animate
   via variants, since a fully-masked line never intersects the viewport. */
export function LineReveal({
  lines,
  as: Tag = "h1",
  className = "",
  lineClassName = "",
  delay = 0,
}: {
  lines: { text: string; className?: string }[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  lineClassName?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className={`block ${lineClassName}`}>
            <span className={`block ${line.className ?? ""}`}>{line.text}</span>
          </span>
        ))}
      </Tag>
    );
  }

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.09, delayChildren: delay },
    },
  };
  const line: Variants = {
    hidden: { y: "110%" },
    show: {
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
    },
  };

  return (
    <Tag className={className}>
      <motion.span
        className="block"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        {lines.map((l, i) => (
          <span key={i} className={`block overflow-hidden ${lineClassName}`}>
            <motion.span className={`block ${l.className ?? ""}`} variants={line}>
              {l.text}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
