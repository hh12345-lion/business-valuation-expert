import type { Metadata } from "next";
import Link from "next/link";
import { ContentClusterNav } from "@/components/ContentClusterNav";
import { GeoComparisonTable } from "@/components/GeoComparisonTable";
import { PageBottomCta } from "@/components/PageBottomCta";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoBreadcrumbs } from "@/components/SeoBreadcrumbs";
import { ContentSection, Prose } from "@/components/ContentSection";
import { WHAT_IS_CLUSTER } from "@/lib/seo/clusterLinks";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { pageGraph } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title:
    "What Is a Business Valuation Expert Witness? | UK Court Role & Definition",
  description:
    "A business valuation expert witness provides independent opinions on company value for UK courts. CPR Part 35, FPR Part 25, DCF, maintainable earnings explained.",
  path: "/what-is-a-business-valuation-expert-witness",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  {
    name: "What Is an Expert Witness",
    path: "/what-is-a-business-valuation-expert-witness",
  },
];

export default function WhatIsPage() {
  return (
    <>
      <JsonLd data={pageGraph(breadcrumbs)} />
      <PageHero>
        <SeoBreadcrumbs
          includeJsonLd={false}
          items={breadcrumbs.map((b) => ({ name: b.name, href: b.path }))}
        />
        <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          What Is a Business Valuation Expert Witness?
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-white/80">
          A business valuation expert witness is a qualified financial
          professional who gives independent, court-admissible opinions on the
          value of a company or shareholding in UK civil and family proceedings,
          with a primary duty to the court under CPR Part 35 or FPR Part 25, not
          to the instructing solicitor.
        </p>
      </PageHero>

      <ContentSection>
        <h2 className="text-2xl font-bold text-charcoal">Definition</h2>
        <Prose>
          <p className="mt-4">
            A business valuation expert witness is typically a chartered
            accountant, chartered financial analyst, or certified valuation
            analyst retained to provide an independent opinion on business value.
            Unlike a commercial valuer advising on a transaction, an expert
            witness owes their primary duty to the court, not to the instructing
            party - whether appointed as a single joint expert or by one party
            alone.
          </p>
        </Prose>

        <h2 className="mt-10 text-2xl font-bold text-charcoal">What They Do</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground">
          <li>Analyse financial statements, management accounts, and projections</li>
          <li>Apply appropriate valuation methodology (DCF, maintainable earnings, NAV)</li>
          <li>Prepare a written expert report compliant with CPR Part 35 (civil) or FPR Part 25 (family)</li>
          <li>Attend court or arbitration hearings to give oral evidence</li>
          <li>Participate in without prejudice joint expert meetings</li>
          <li>Prepare joint statements identifying agreed and disputed matters</li>
          <li>Rebut opposing expert valuations</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-charcoal">
          Two Legal Frameworks - CPR Part 35 vs FPR Part 25
        </h2>
        <GeoComparisonTable
          caption="CPR Part 35 vs FPR Part 25 for UK business valuation expert witnesses"
          colAHeader="CPR Part 35 (civil)"
          colBHeader="FPR Part 25 (family)"
          rows={[
            {
              label: "Courts",
              colA: "High Court, County Court, Commercial & Chancery",
              colB: "Family Court, Family Division of the High Court",
            },
            {
              label: "Typical cases",
              colA: "S994, M&A, insolvency, partnership, IP, negligence",
              colB: "Financial remedy, Schedule 1, business as matrimonial asset",
            },
            {
              label: "Court permission",
              colA: "Usually not required before instructing (case management)",
              colB: "Often required before expert fees incurred",
            },
            {
              label: "Expert duty",
              colA: "Primary duty to the court (Ikarian Reefer)",
              colB: "Same overriding duty to the court",
            },
            {
              label: "Joint experts",
              colA: "CPR 35.7 Single Joint Expert",
              colB: "FPR 25.11 Single Joint Expert",
            },
          ]}
        />

        <h2 className="mt-10 text-2xl font-bold text-charcoal">
          Single Joint Expert (SJE) vs Party-Appointed Expert (PAE)
        </h2>
        <Prose>
          <p className="mt-4">
            <strong>SJE:</strong> Both parties jointly instruct one expert. Common in
            lower-value cases and where the court exercises case management powers.
          </p>
          <p>
            <strong>PAE:</strong> Each party instructs their own expert. More common in
            high-value disputes. Requires joint meetings under CPR PD35 and FPR PD25A.{" "}
            <Link
              href="/guides/single-joint-expert-business-valuation"
              className="font-medium text-green hover:underline"
            >
              Read our SJE guide
            </Link>
            .
          </p>
        </Prose>

        <h2 className="mt-10 text-2xl font-bold text-charcoal">
          The Ikarian Reefer Duties
        </h2>
        <Prose>
          <p className="mt-4">
            A business valuation expert witness owes their primary duty to the
            court, not the instructing solicitor or client - established in{" "}
            <em>The Ikarian Reefer</em> [1993] and codified in CPR Part 35 and FPR
            Part 25. See our{" "}
            <Link href="/qualifications" className="text-green hover:underline">
              qualifications page
            </Link>
            .
          </p>
        </Prose>

        <h2 className="mt-10 text-2xl font-bold text-charcoal">
          When Do You Need a Business Valuation Expert Witness?
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground">
          <li>A business is an asset in divorce financial remedy proceedings</li>
          <li>Shareholders dispute the value of their shares (S994 petition)</li>
          <li>A partnership is being dissolved and assets are in dispute</li>
          <li>M&A warranty or completion accounts disputes</li>
          <li>Insolvency where business value is contested</li>
          <li>HMRC or First-tier Tribunal share valuation challenges</li>
          <li>Professional negligence against an accountant or valuer</li>
          <li>IP, goodwill, or compulsory purchase compensation</li>
        </ul>

        <ContentClusterNav links={WHAT_IS_CLUSTER} />
      </ContentSection>

      <PageBottomCta />
    </>
  );
}
