import type { Metadata } from "next";
import Link from "next/link";
import { PageBottomCta } from "@/components/PageBottomCta";
import { PageHero } from "@/components/PageHero";
import { SeoBreadcrumbs } from "@/components/SeoBreadcrumbs";
import { ContentSection } from "@/components/ContentSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { EXPERTS } from "@/lib/experts-data";
import { SITE_URL } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo-metadata";
import {
  ORGANIZATION_ID,
  breadcrumbSchema,
  organizationSchema,
} from "@/lib/schema";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Experts", path: "/experts" },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Our Business Valuation Expert Witnesses | UK Chartered Accountants",
  description:
    "BusinessValuationExperts.co.uk connects UK solicitors with qualified business valuation expert witnesses — ACA, FCA, CVA, and CFA credentialed specialists for litigation and family law.",
  path: "/experts",
});

export default function ExpertsPage() {
  const persons = EXPERTS.map((e) => ({
    "@type": "Person",
    "@id": `${SITE_URL}/experts#${e.id}`,
    name: e.name,
    jobTitle: "Business Valuation Expert Witness",
    knowsAbout: e.specialties,
    hasCredential: e.credentials,
    worksFor: { "@id": ORGANIZATION_ID },
    workLocation: { "@type": "Place", name: e.location },
    description: e.summary,
  }));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            organizationSchema(),
            breadcrumbSchema(breadcrumbs),
            ...persons,
          ],
        }}
      />
      <PageHero>
        <SeoBreadcrumbs
          includeJsonLd={false}
          items={breadcrumbs.map((b) => ({ name: b.name, href: b.path }))}
        />
        <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          Our Business Valuation Expert Witnesses
        </h1>
        <p className="mt-4 text-lg text-white/80">
          UK chartered accountants and valuation specialists. Profiles available upon
          instruction — submit your case details for a matched introduction.
        </p>
      </PageHero>

      <ContentSection>
        <div className="grid gap-6 md:grid-cols-3">
          {EXPERTS.map((e) => (
            <article
              key={e.id}
              id={e.id}
              className="rounded-lg border border-border bg-white p-6 shadow-card"
            >
              <h2 className="text-lg font-semibold text-charcoal">{e.name}</h2>
              <p className="mt-1 text-sm font-medium text-green">{e.credentials}</p>
              <p className="mt-1 text-sm text-foreground/80">{e.location}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {e.specialties.map((s) => (
                  <li
                    key={s}
                    className="rounded bg-muted px-2 py-1 text-xs font-medium text-charcoal"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-foreground">{e.summary}</p>
              <p className="mt-4 text-sm font-medium text-charcoal">
                Profiles available upon instruction
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center rounded bg-green px-6 py-3 text-sm font-semibold text-white"
          >
            Instruct an Expert Witness
          </Link>
        </p>
      </ContentSection>

      <PageBottomCta />
    </>
  );
}
