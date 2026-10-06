"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
    pathname.startsWith("/blog") ||
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

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Masthead: logo, inline nav, cut-corner call to action, and the monogram's orange bar as the baseline. */}
      <header className="sticky top-0 z-40 bg-panel/95 backdrop-blur-md">
        <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center gap-6 px-4 sm:px-6 lg:h-[5.25rem] lg:px-8">
          <Link
            href="/"
            className="shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green"
            aria-label={`${SITE_NAME} home`}
          >
            <Image
              src="/brand/logo.svg"
              alt={SITE_NAME}
              width={934}
              height={293}
              preload
              className="w-[8.75rem] lg:w-[10.5rem]"
            />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden min-w-0 flex-1 items-center justify-center gap-2 lg:flex xl:gap-4"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`whitespace-nowrap border-b-2 px-1.5 py-2 text-[13px] font-medium transition xl:text-sm ${
                  pathActive(pathname, href)
                    ? "border-green text-charcoal"
                    : "border-transparent text-foreground hover:border-border hover:text-charcoal"
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
              label="Methods"
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

          <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0">
            <Link
              href="/contact"
              className="bve-cut-sm hidden min-h-[44px] items-center gap-2 bg-green px-5 py-2 font-display text-sm font-bold uppercase tracking-[0.08em] text-charcoal transition hover:bg-charcoal hover:text-background sm:inline-flex"
            >
              Instruct an expert
              <span aria-hidden>→</span>
            </Link>
            <button
              type="button"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border border-border bg-panel text-charcoal lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="bve-mobile-nav"
              onClick={() => setMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M4 7H20M4 12H16M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div aria-hidden className="h-px bg-charcoal/15">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="block h-[3px] w-20 -translate-y-px bg-green" />
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div
          className="fixed inset-0 z-[100] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <button
            type="button"
            className="absolute inset-0 bg-charcoal/50"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div
            id="bve-mobile-nav"
            className="absolute inset-y-0 right-0 flex w-[min(100vw-2.5rem,20rem)] flex-col border-l-4 border-green bg-panel shadow-card"
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-4">
              <span className="font-display text-base font-semibold text-charcoal">
                Menu
              </span>
              <button
                type="button"
                className="min-h-[44px] min-w-[44px] text-charcoal"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-2">
              <Link
                href="/"
                className={`block px-4 py-3 text-sm min-h-[44px] flex items-center ${
                  pathname === "/"
                    ? "font-semibold text-charcoal"
                    : "text-foreground"
                }`}
              >
                Home
              </Link>
              {mobileGroups.map((group) => (
                <div key={group.heading} className="border-t border-border">
                  <p className="px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
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
            </div>
            <div className="border-t border-border p-4">
              <Link
                href="/contact"
                className="flex min-h-[44px] w-full items-center justify-center bg-green font-display text-sm font-bold uppercase tracking-[0.08em] text-charcoal hover:bg-green/90"
              >
                Instruct an expert
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
