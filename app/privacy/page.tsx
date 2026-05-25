import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SeoBreadcrumbs } from "@/components/SeoBreadcrumbs";
import { ContentSection, Prose } from "@/components/ContentSection";
import { SITE_EMAIL } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy | BusinessValuationExperts.co.uk",
  description: "Privacy policy for BusinessValuationExperts.co.uk — UK GDPR compliant data handling.",
  path: "/privacy",
  robots: { index: false, follow: true },
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero>
        <SeoBreadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Privacy", href: "/privacy" },
          ]}
        />
        <h1 className="mt-4 text-3xl font-bold text-white">Privacy Policy</h1>
      </PageHero>
      <ContentSection>
        <Prose>
          <p>
            BusinessValuationExperts.co.uk (&quot;we&quot;, &quot;us&quot;) is the data
            controller for personal data submitted through this website. This policy
            explains how we process data under UK GDPR and the Data Protection Act 2018.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-charcoal">Data we collect</h2>
          <p>
            When you submit our contact form we may collect: your name, email address,
            phone number, law firm or organisation, case type, sector, legal framework,
            turnover range, hearing dates, case description, and urgency. We use this to
            match you with appropriate business valuation expert witnesses.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-charcoal">Lawful basis</h2>
          <p>
            We process data on the basis of legitimate interests (responding to
            instruction enquiries) and, where applicable, pre-contractual steps at your
            request.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-charcoal">Retention</h2>
          <p>
            Enquiry data is retained only as long as necessary to handle your request and
            meet legal obligations, typically up to six years where relevant to professional
            records.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-charcoal">Your rights</h2>
          <p>
            You may request access, correction, erasure, restriction, or objection to
            processing, and lodge a complaint with the ICO. Contact:{" "}
            <a href={`mailto:${SITE_EMAIL}`} className="text-green hover:underline">
              {SITE_EMAIL}
            </a>
            .
          </p>
          <h2 className="mt-8 text-xl font-semibold text-charcoal">Processors</h2>
          <p>
            Form submissions may be processed by Formspree (form hosting) and analytics
            providers if enabled. Transfers outside the UK are subject to appropriate
            safeguards where applicable.
          </p>
          <p className="text-sm text-foreground/70">Last updated: May 2025.</p>
        </Prose>
      </ContentSection>
    </>
  );
}
