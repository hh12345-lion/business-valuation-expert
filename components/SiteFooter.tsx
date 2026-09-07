import Link from "next/link";
import { CookieSettingsFooterLink } from "@/components/cookies/CookieSettingsFooterLink";
import { PreferredSourceButton } from "@/components/PreferredSourceButton";
import { CASE_TYPES } from "@/lib/case-types-data";
import { SERVICES } from "@/lib/services-data";
import { SITE_EMAIL, SITE_NAME, UK_SERVICE_SUMMARY } from "@/lib/site";

const caseTypeFooter = CASE_TYPES.slice(0, 5);

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      {/* Instruction band — light ledger panel, not dark 4-column charcoal */}
      <div className="border-y-2 border-charcoal/10 bg-panel">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-12">
          <div className="max-w-xl border-l-4 border-green pl-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              Instruction desk
            </p>
            <p className="mt-2 font-display text-2xl font-semibold leading-snug text-charcoal sm:text-[1.75rem]">
              Match with a valuation expert witness
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground">
              Confidential intake for UK solicitors. Response within one business
              day.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="text-sm font-medium text-gold underline-offset-4 hover:underline"
            >
              {SITE_EMAIL}
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center justify-center border-2 border-charcoal bg-charcoal px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:border-green hover:bg-green"
            >
              Start intake
            </Link>
          </div>
        </div>
      </div>

      {/* Index grid on cool paper */}
      <div className="bg-muted/80">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-8">
          <div>
            <p className="font-display text-xl font-semibold text-charcoal">
              {SITE_NAME}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground">
              {UK_SERVICE_SUMMARY} We are not a law firm and do not provide legal
              advice.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
              Services
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.anchor}`}
                    className="inline-flex min-h-[40px] items-center text-charcoal hover:text-green"
                  >
                    {s.title
                      .replace(/ \(.*\)$/, "")
                      .replace(/ Valuations? \(.*\)/, "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
              Case types
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {caseTypeFooter.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/case-types/${c.slug}`}
                    className="inline-flex min-h-[40px] items-center text-charcoal hover:text-green"
                  >
                    {c.hubLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/case-types"
                  className="inline-flex min-h-[40px] items-center font-semibold text-green hover:underline"
                >
                  View all 10 →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
              Browse
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/guides"
                  className="inline-flex min-h-[40px] items-center text-charcoal hover:text-green"
                >
                  Solicitor guides
                </Link>
              </li>
              <li>
                <Link
                  href="/glossary"
                  className="inline-flex min-h-[40px] items-center text-charcoal hover:text-green"
                >
                  Glossary
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="inline-flex min-h-[40px] items-center text-charcoal hover:text-green"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/fees"
                  className="inline-flex min-h-[40px] items-center text-charcoal hover:text-green"
                >
                  Fees guide
                </Link>
              </li>
              <li>
                <Link
                  href="/valuation-methods"
                  className="inline-flex min-h-[40px] items-center text-charcoal hover:text-green"
                >
                  Valuation methods
                </Link>
              </li>
              <li>
                <Link
                  href="/experts"
                  className="inline-flex min-h-[40px] items-center text-charcoal hover:text-green"
                >
                  Our experts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-charcoal px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. England and Wales.
          </p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <span aria-hidden>·</span>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <span aria-hidden>·</span>
            <Link href="/cookies" className="hover:text-white">
              Cookies
            </Link>
            <span aria-hidden>·</span>
            <CookieSettingsFooterLink />
            <span aria-hidden>·</span>
            <PreferredSourceButton theme="dark" />
          </p>
        </div>
      </div>
    </footer>
  );
}
