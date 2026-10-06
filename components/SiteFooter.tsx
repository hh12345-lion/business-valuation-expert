import Image from "next/image";
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
      {/* Instruction band, light ledger panel, not dark 4-column charcoal */}
      <div className="bg-charcoal">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-12">
          <div className="max-w-xl">
            <Image
              src="/brand/logo-light.svg"
              alt={SITE_NAME}
              width={934}
              height={293}
              className="w-[13.5rem]"
            />
            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-green">
              Instruction desk
            </p>
            <p className="mt-2 font-display text-3xl font-bold leading-tight text-background sm:text-4xl">
              Match with a valuation expert witness
            </p>
            <p className="mt-3 text-sm leading-relaxed text-background/70">
              Confidential intake for UK solicitors. Response within one business
              day.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="text-sm font-medium text-background underline-offset-4 hover:underline"
            >
              {SITE_EMAIL}
            </a>
            <Link
              href="/contact"
              className="bve-cut-sm inline-flex min-h-[44px] items-center justify-center bg-green px-6 py-2.5 font-display text-sm font-bold uppercase tracking-[0.08em] text-charcoal transition hover:bg-background"
            >
              Start intake
            </Link>
          </div>
        </div>
      </div>

      {/* Index grid on cool paper */}
      <div className="border-t border-background/10 bg-charcoal">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-8">
          <div>
            <p className="max-w-sm text-sm leading-relaxed text-background/65">
              {UK_SERVICE_SUMMARY} We are not a law firm and do not provide legal
              advice.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green">
              Services
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.anchor}`}
                    className="inline-flex min-h-[40px] items-center text-background/85 hover:text-green"
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green">
              Case types
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {caseTypeFooter.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/case-types/${c.slug}`}
                    className="inline-flex min-h-[40px] items-center text-background/85 hover:text-green"
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green">
              Browse
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/blog"
                  className="inline-flex min-h-[40px] items-center text-background/85 hover:text-green"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="inline-flex min-h-[40px] items-center text-background/85 hover:text-green"
                >
                  Solicitor guides
                </Link>
              </li>
              <li>
                <Link
                  href="/glossary"
                  className="inline-flex min-h-[40px] items-center text-background/85 hover:text-green"
                >
                  Glossary
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="inline-flex min-h-[40px] items-center text-background/85 hover:text-green"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/fees"
                  className="inline-flex min-h-[40px] items-center text-background/85 hover:text-green"
                >
                  Fees guide
                </Link>
              </li>
              <li>
                <Link
                  href="/valuation-methods"
                  className="inline-flex min-h-[40px] items-center text-background/85 hover:text-green"
                >
                  Valuation methods
                </Link>
              </li>
              <li>
                <Link
                  href="/experts"
                  className="inline-flex min-h-[40px] items-center text-background/85 hover:text-green"
                >
                  Our experts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 bg-charcoal px-4 py-5 sm:px-6 lg:px-8">
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
            <Link href="/image-credits" className="hover:text-white">
              Image credits
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
