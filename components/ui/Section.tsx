import { type ReactNode } from "react";
import { Container } from "./Container";

type Tone = "black" | "s1" | "light";

const tones: Record<Tone, string> = {
  black: "bg-s0 text-paper",
  s1: "bg-s1 text-paper",
  light: "on-light",
};

export function Section({
  children,
  id,
  tone = "black",
  className = "",
  container = true,
}: {
  children: ReactNode;
  id?: string;
  tone?: Tone;
  className?: string;
  container?: boolean;
}) {
  return (
    <section id={id} className={`${tones[tone]} py-20 md:py-28 ${className}`}>
      {container ? <Container>{children}</Container> : children}
    </section>
  );
}
