import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/* Placeholder page - real content is Phase 3. Kept on-brand so the whole
   site is navigable and consistent while individual pages are built out. */
export function PageStub({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: React.ReactNode;
}) {
  return (
    <main className="relative overflow-hidden bg-s0">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-blue/15 blur-[150px]" />
      <Container className="relative flex min-h-[70vh] flex-col justify-center py-24 md:py-32">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-g300">{intro}</p>

        {children ? (
          <div className="mt-10">{children}</div>
        ) : (
          <>
            <div className="mt-8 inline-flex w-fit items-center gap-2 chamf-sm border border-[var(--color-line-strong)] bg-s1 px-4 py-2">
              <span className="h-2 w-2 chamf-sm bg-blue" />
              <span className="text-sm text-g500">
                Deze pagina wordt binnenkort gebouwd
              </span>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contact" variant="primary" className="group">
                Plan een gratis groeigesprek
              </Button>
              <Link href="/" className="text-sm font-semibold text-blue-text hover:underline">
                Terug naar home →
              </Link>
            </div>
          </>
        )}
      </Container>
    </main>
  );
}
