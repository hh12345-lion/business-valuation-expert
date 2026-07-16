import Link from "next/link";
import { CookieSettingsFooterLink } from "@/components/cookies/CookieSettingsFooterLink";
import { CASE_TYPES } from "@/lib/case-types-data";
import { SERVICES } from "@/lib/services-data";
import { SITE_EMAIL, SITE_NAME, UK_SERVICE_SUMMARY } from "@/lib/site";

const caseTypeFooter = CASE_TYPES.slice(0, 5);

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-charcoal text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="max-w-3xl text-sm leading-relaxed text-white/75">
          {SITE_NAME}.co.uk is a United Kingdom service for solicitors and law
          firms. {UK_SERVICE_SUMMARY} We are not a law firm and do not provide
          legal advice. Email{" "}
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="font-medium text-gold underline-offset-2 hover:underline"
          >
            {SITE_EMAIL}
          </a>
          .
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-white">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/services/${s.anchor}`}
                  className="hover:text-white min-h-[44px] inline-flex items-center"
                >
                  {s.title.replace(/ \(.*\)$/, "").replace(/ Valuations? \(.*\)/, "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Case Types</p>
          <ul className="mt-4 space-y-2 text-sm">
            {caseTypeFooter.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/case-types/${c.slug}`}
                  className="hover:text-white"
                >
                  {c.hubLabel}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/case-types" className="font-medium text-gold hover:text-gold/90">
                View all 10 →
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Resources</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/guides" className="hover:text-white">
                Solicitor Guides
              </Link>
            </li>
            <li>
              <Link href="/glossary" className="hover:text-white">
                Glossary
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/fees" className="hover:text-white">
                Fees Guide
              </Link>
            </li>
            <li>
              <Link href="/how-to-instruct" className="hover:text-white">
                How to Instruct
              </Link>
            </li>
            <li>
              <Link href="/valuation-methods" className="hover:text-white">
                Valuation Methods
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">About</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/experts" className="hover:text-white">
                Our Experts
              </Link>
            </li>
            <li>
              <Link href="/qualifications" className="hover:text-white">
                Qualifications
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center font-semibold text-gold hover:text-gold/90"
              >
                Instruct an Expert
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-7xl text-xs text-white/50">
          © 2025 {SITE_NAME}. England and Wales.{" "}
          <Link href="/privacy" className="underline hover:text-white">
            Privacy
          </Link>{" "}
          ·{" "}
          <Link href="/terms" className="underline hover:text-white">
            Terms
          </Link>{" "}
          ·{" "}
          <Link href="/cookies" className="underline hover:text-white">
            Cookies
          </Link>{" "}
          ·{" "}
          <CookieSettingsFooterLink />
        </p>
      </div>
    </footer>
  );
}
