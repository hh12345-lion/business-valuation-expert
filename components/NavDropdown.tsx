"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export type NavDropdownItem = { href: string; label: string };

export function NavDropdown({
  label,
  href,
  items,
  active,
}: {
  label: string;
  href: string;
  items: readonly NavDropdownItem[];
  active?: boolean;
}) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className={`inline-flex min-h-[44px] items-center gap-0.5 whitespace-nowrap rounded px-2 py-2 text-xs font-medium transition xl:text-sm xl:px-2.5 ${
          active
            ? "bg-muted text-charcoal"
            : "text-foreground hover:bg-muted hover:text-charcoal"
        }`}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          className="h-3.5 w-3.5 opacity-60 transition group-hover:rotate-180 group-focus-within:rotate-180 motion-reduce:transition-none motion-reduce:group-hover:rotate-0"
          aria-hidden
        />
      </Link>
      <div
        className="invisible absolute left-1/2 top-full z-50 mt-1 w-72 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-lg border border-border bg-white py-2 opacity-0 shadow-card transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 motion-reduce:transition-none"
        role="menu"
      >
        <ul className="max-h-[min(70vh,22rem)] overflow-y-auto">
          {items.map(({ href: itemHref, label: itemLabel }) => (
            <li key={itemHref} role="none">
              <Link
                href={itemHref}
                role="menuitem"
                className="block px-4 py-2.5 text-sm text-foreground transition hover:bg-muted hover:text-charcoal min-h-[44px] flex items-center"
              >
                {itemLabel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
