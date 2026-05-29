import type { Metadata } from "next";
import { ContentClusterNav } from "@/components/ContentClusterNav";
import { PageBottomCta } from "@/components/PageBottomCta";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoBreadcrumbs } from "@/components/SeoBreadcrumbs";
import { ContentSection } from "@/components/ContentSection";
import { FAQ_PAGE_CLUSTER } from "@/lib/seo/clusterLinks";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { pageGraph } from "@/lib/schema";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Fees", path: "/fees" },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Business Valuation Expert Witness Fees UK | 2025 Hourly Rates & Costs",
  description:
    "UK business valuation expert witnesses typically charge £250–£600/hour. Learn about fee structures, retainers, report costs, and what affects total engagement costs.",
  path: "/fees",
});

export default function FeesPage() {
  return (
    <>
      <JsonLd data={pageGraph(breadcrumbs)} />
      <PageHero>
        <SeoBreadcrumbs
          includeJsonLd={false}
          items={breadcrumbs.map((b) => ({ name: b.name, href: b.path }))}
        />
        <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          Business Valuation Expert Witness Fees UK
        </h1>
      </PageHero>

      <ContentSection>
        <h2 className="text-2xl font-bold text-charcoal">Hourly Rates</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground">
          <li>General valuation expert: £250–£400/hour</li>
          <li>Senior partner level: £400–£600/hour</li>
          <li>Leading specialists (High Court, complex disputes): £600–£1,000+/hour</li>
          <li>SME / lower court specialists: £150–£300/hour</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-charcoal">Report Costs</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground">
          <li>Standard valuation report (straightforward SME): £3,000–£8,000</li>
          <li>Complex multi-method report (High Court quality): £8,000–£25,000+</li>
          <li>SJE report (shared cost): typically 50% of above per party</li>
          <li>Rebuttal report: £2,000–£8,000</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-charcoal">Fee Structures</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground">
          <li>Hourly billing (most common)</li>
          <li>Fixed fee for defined scope</li>
          <li>Retainer for ongoing disputes</li>
          <li>No contingency fee (prohibited for expert witnesses)</li>
          <li>Court permission required for family cases before fees incurred (FPR Part 25)</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-charcoal">What Affects Cost</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground">
          <li>Company size and complexity</li>
          <li>Number of years of accounts to review</li>
          <li>Whether multiple valuation methods are required</li>
          <li>Whether oral evidence is needed</li>
          <li>Whether rebuttal is required</li>
          <li>Sector complexity</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-charcoal">Legal Aid</h2>
        <p className="mt-4 text-foreground">
          Business valuation expert witnesses are rarely instructed on Legal Aid given
          the commercial nature of the disputes involved.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-charcoal">Cost Recovery</h2>
        <p className="mt-4 text-foreground">
          In civil proceedings, the successful party may recover expert witness costs.
          In family proceedings, costs of expert evidence (especially SJE) may be shared.
        </p>

        <p className="mt-8 text-sm text-foreground/70">
          Sources: Expert Evidence International; Academy of Experts; industry benchmarks.
          Indicative rates for 2025 - confirm fees with the instructed expert.
        </p>
        <ContentClusterNav links={FAQ_PAGE_CLUSTER} />
      </ContentSection>

      <PageBottomCta />
    </>
  );
}
