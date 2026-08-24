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
        className={`inline-flex min-h-[40px] items-center gap-1 whitespace-nowrap border-b-2 px-1.5 py-2 text-[13px] font-medium tracking-wide transition xl:text-sm ${
          active
            ? "border-green text-charcoal"
            : "border-transparent text-foreground/85 hover:border-border hover:text-charcoal"
        }`}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          className="h-3.5 w-3.5 opacity-55 transition group-hover:rotate-180 group-focus-within:rotate-180 motion-reduce:transition-none motion-reduce:group-hover:rotate-0"
          aria-hidden
        />
      </Link>
      <div
        className="invisible absolute left-0 top-full z-50 mt-0 w-72 max-w-[calc(100vw-2rem)] border border-border bg-panel py-1 opacity-0 shadow-card transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 motion-reduce:transition-none"
        role="menu"
      >
        <ul className="max-h-[min(70vh,22rem)] overflow-y-auto">
          {items.map(({ href: itemHref, label: itemLabel }) => (
            <li key={itemHref} role="none">
              <Link
                href={itemHref}
                role="menuitem"
                className="flex min-h-[44px] items-center border-l-2 border-transparent px-4 py-2.5 text-sm text-foreground transition hover:border-green hover:bg-muted hover:text-charcoal"
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
