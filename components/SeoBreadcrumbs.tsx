import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/json-ld";

export type BreadcrumbItem = { name: string; href: string };

export function SeoBreadcrumbs({
  items,
  tone = "inverse",
  includeJsonLd = true,
}: {
  items: readonly BreadcrumbItem[];
  tone?: "default" | "inverse";
  /** Set false when the page emits BreadcrumbList via JsonLd elsewhere */
  includeJsonLd?: boolean;
}) {
  const ld = breadcrumbJsonLd(
    items.map((i) => ({ name: i.name, path: i.href })),
  );

  const navClass =
    tone === "inverse" ? "text-sm text-white/60" : "text-sm text-foreground/60";
  const sepClass = tone === "inverse" ? "text-white/35" : "text-foreground/40";
  const currentClass =
    tone === "inverse" ? "font-medium text-white" : "font-medium text-heading";
  const linkClass =
    tone === "inverse"
      ? "text-white/70 underline-offset-2 hover:text-white hover:underline"
      : "text-foreground/70 underline-offset-2 hover:text-heading hover:underline";

  return (
    <>
      {includeJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ) : null}
      <nav aria-label="Breadcrumb" className={navClass}>
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, index) => {
            const last = index === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {index > 0 && (
                  <span className={sepClass} aria-hidden>
                    /
                  </span>
                )}
                {last ? (
                  <span className={currentClass} aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className={linkClass}>
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
