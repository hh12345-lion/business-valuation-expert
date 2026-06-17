import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SeoBreadcrumbs } from "@/components/SeoBreadcrumbs";
import { ContentSection } from "@/components/ContentSection";
import { SITE_EMAIL, SITE_REGION, UK_SERVICE_NOTICE } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Instruct a UK Business Valuation Expert Witness | BusinessValuationExperts.co.uk",
  description:
    "United Kingdom only. Submit your case details to be matched with a qualified UK business valuation expert witness. CPR Part 35 and FPR Part 25. Response within 1 business day.",
  path: "/contact",
});

const trustPoints = [
  "United Kingdom & England and Wales courts only",
  "CPR Part 35 & FPR Part 25 compliant",
  "SJE and party-appointed available",
  "Response within 1 UK business day",
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero>
        <SeoBreadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Contact", href: "/contact" },
          ]}
        />
        <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          Instruct a UK Business Valuation Expert Witness
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-white/85 sm:text-base">
          {SITE_REGION} only. {UK_SERVICE_NOTICE}
        </p>
      </PageHero>

      <ContentSection wide>
        <div className="grid min-w-0 gap-8 lg:grid-cols-3 lg:gap-10">
          <div className="min-w-0 lg:col-span-2">
            <ContactForm />
          </div>
          <aside className="min-w-0 rounded-lg border border-border bg-muted p-5 sm:p-6 lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-lg font-semibold text-charcoal">Why instruct via us</h2>
            <ul className="mt-4 space-y-3 text-sm text-foreground">
              {trustPoints.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-green" aria-hidden>
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-border pt-4 text-sm text-foreground">
              Questions? Email{" "}
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="font-medium text-green hover:underline"
              >
                {SITE_EMAIL}
              </a>
            </p>
          </aside>
        </div>
      </ContentSection>
    </>
  );
}
