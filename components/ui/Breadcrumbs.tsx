import Link from "next/link";

/* Visual breadcrumb trail. Pair with breadcrumbSchema() for the JSON-LD.
   The last crumb is the current page (not a link). */
export function Breadcrumbs({
  crumbs,
  tone = "dark",
}: {
  crumbs: { name: string; path: string }[];
  tone?: "dark" | "light";
}) {
  const muted = tone === "dark" ? "text-g500" : "text-g600";
  const active = tone === "dark" ? "text-g300" : "text-ink";
  const hover = tone === "dark" ? "hover:text-paper" : "hover:text-blue";

  return (
    <nav aria-label="Kruimelpad" className="text-sm">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-2">
              {last ? (
                <span className={`font-medium ${active}`} aria-current="page">
                  {c.name}
                </span>
              ) : (
                <>
                  <Link href={c.path} className={`${muted} ${hover} transition-colors`}>
                    {c.name}
                  </Link>
                  <span aria-hidden className={muted}>
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
