import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SeoBreadcrumbs } from "@/components/SeoBreadcrumbs";
import { ContentSection, Prose } from "@/components/ContentSection";
import { SITE_EMAIL } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Use | BusinessValuationExperts.co.uk",
  description: "Terms of use for the BusinessValuationExperts.co.uk expert witness matching service.",
  path: "/terms",
  robots: { index: false, follow: true },
});

export default function TermsPage() {
  return (
    <>
      <PageHero>
        <SeoBreadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Terms", href: "/terms" },
          ]}
        />
        <h1 className="mt-4 text-3xl font-bold text-white">Terms of Use</h1>
      </PageHero>
      <ContentSection>
        <Prose>
          <p>
            BusinessValuationExperts.co.uk provides a referral and matching service
            connecting UK solicitors and law firms with independent business valuation
            expert witnesses. We are not a law firm and do not provide legal advice,
            valuation opinions, or expert reports ourselves.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-charcoal">No client relationship</h2>
          <p>
            Submitting an enquiry does not create a solicitor-client relationship with us.
            Any engagement is directly between you and the introduced expert, subject to
            their terms and professional obligations.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-charcoal">No guarantee</h2>
          <p>
            We do not guarantee availability, outcome of litigation, or court acceptance of
            any expert. You remain responsible for vetting conflicts, credentials, and
            suitability.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-charcoal">Governing law</h2>
          <p>
            These terms are governed by the laws of England and Wales. Courts of England and
            Wales have exclusive jurisdiction.
          </p>
          <p>
            Contact:{" "}
            <a href={`mailto:${SITE_EMAIL}`} className="text-green hover:underline">
              {SITE_EMAIL}
            </a>
            .
          </p>
          <p className="text-sm text-foreground/70">Last updated: May 2025.</p>
        </Prose>
      </ContentSection>
    </>
  );
}
