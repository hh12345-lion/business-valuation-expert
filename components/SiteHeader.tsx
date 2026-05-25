"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavDropdown } from "@/components/NavDropdown";
import {
  caseTypeNavItems,
  navLinks,
  resourcesNavItems,
  sectorNavItems,
  serviceNavItems,
  SITE_NAME,
  valuationMethodNavItems,
} from "@/lib/site";

function pathActive(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  if (pathname === href) return true;
  if (href !== "/" && pathname.startsWith(`${href}/`)) return true;
  return false;
}

function resourcesActive(pathname: string | null): boolean {
  if (!pathname) return false;
  return (
    pathname.startsWith("/guides") ||
    pathname === "/how-to-instruct" ||
    pathname === "/qualifications"
  );
}

const mobileGroups: {
  heading: string;
  links: { href: string; label: string }[];
}[] = [
  {
    heading: "Services",
    links: [
      { href: "/services", label: "All services" },
      ...serviceNavItems.map((i) => ({ href: i.href, label: i.label })),
    ],
  },
  {
    heading: "Valuation methods",
    links: [
      { href: "/valuation-methods", label: "All methods" },
      ...valuationMethodNavItems.map((i) => ({ href: i.href, label: i.label })),
    ],
  },
  {
    heading: "Case types",
    links: [
      { href: "/case-types", label: "All case types" },
      ...caseTypeNavItems.map((i) => ({ href: i.href, label: i.label })),
    ],
  },
  {
    heading: "Sectors",
    links: [
      { href: "/sectors", label: "All sectors" },
      ...sectorNavItems.map((i) => ({ href: i.href, label: i.label })),
    ],
  },
  {
    heading: "Resources",
    links: [...resourcesNavItems],
  },
];

function mobileLinkActive(pathname: string | null, href: string): boolean {
  if (pathActive(pathname, href)) return true;
  if (href.includes("/") && pathname === href) return true;
  return false;
}

function MobileNav({ pathname }: { pathname: string | null }) {
  return (
    <details className="relative lg:hidden" suppressHydrationWarning>
      <summary className="flex min-h-[44px] min-w-[44px] cursor-pointer list-none items-center justify-center rounded border border-border bg-white px-3 text-sm font-semibold text-charcoal [&::-webkit-details-marker]:hidden">
        Menu
      </summary>
      <div className="absolute right-0 z-50 mt-2 max-h-[min(80vh,520px)] w-[min(100vw-2rem,18rem)] overflow-y-auto rounded-lg border border-border bg-white py-2 shadow-card">
        <Link
          href="/"
          className={`block px-4 py-3 text-sm min-h-[44px] flex items-center hover:bg-muted ${
            pathname === "/" ? "font-semibold text-charcoal" : "text-foreground"
          }`}
        >
          Home
        </Link>
        {mobileGroups.map((group) => (
          <div key={group.heading} className="border-t border-border">
            <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-foreground/50">
              {group.heading}
            </p>
            {group.links.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className={`block px-4 py-3 text-sm min-h-[44px] flex items-center hover:bg-muted ${
                  mobileLinkActive(pathname, link.href)
                    ? "font-semibold text-charcoal"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
        <div className="border-t border-border px-4 py-3">
          <Link
            href="/contact"
            className="flex min-h-[44px] w-full items-center justify-center rounded bg-green text-sm font-semibold text-white hover:bg-green/90"
          >
            Contact us
          </Link>
        </div>
      </div>
    </details>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto flex min-w-0 max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="min-w-0 shrink truncate text-sm font-bold text-charcoal sm:text-base lg:text-lg"
        >
          {SITE_NAME}
        </Link>

        <nav
          aria-label="Primary"
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`whitespace-nowrap rounded px-2 py-2 text-xs font-medium transition min-h-[44px] flex items-center xl:text-sm xl:px-2.5 ${
                pathActive(pathname, href)
                  ? "bg-muted text-charcoal"
                  : "text-foreground hover:bg-muted hover:text-charcoal"
              }`}
            >
              {label}
            </Link>
          ))}
          <NavDropdown
            label="Services"
            href="/services"
            items={serviceNavItems}
            active={pathActive(pathname, "/services")}
          />
          <NavDropdown
            label="Valuation Methods"
            href="/valuation-methods"
            items={valuationMethodNavItems}
            active={pathActive(pathname, "/valuation-methods")}
          />
          <NavDropdown
            label="Case Types"
            href="/case-types"
            items={caseTypeNavItems}
            active={pathActive(pathname, "/case-types")}
          />
          <NavDropdown
            label="Sectors"
            href="/sectors"
            items={sectorNavItems}
            active={pathActive(pathname, "/sectors")}
          />
          <NavDropdown
            label="Resources"
            href="/guides"
            items={resourcesNavItems}
            active={resourcesActive(pathname)}
          />
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/contact"
            className="hidden min-h-[44px] items-center rounded bg-green px-3 py-2 text-xs font-semibold text-white shadow-card transition hover:bg-green/90 sm:inline-flex sm:px-4 sm:text-sm"
          >
            Contact us
          </Link>
          <MobileNav pathname={pathname} />
        </div>
      </div>
    </header>
  );
}
