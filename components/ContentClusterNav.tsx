import Link from "next/link";
import type { ClusterLink } from "@/lib/seo/clusterLinks";

export function ContentClusterNav({
  title = "Related resources",
  links,
}: {
  title?: string;
  links: ClusterLink[];
}) {
  if (!links.length) return null;

  return (
    <nav aria-label={title} className="mt-10 rounded-lg border border-border bg-muted/50 p-6">
      <h2 className="text-lg font-semibold text-charcoal">{title}</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm font-medium text-green hover:underline min-h-[44px] inline-flex items-center"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
