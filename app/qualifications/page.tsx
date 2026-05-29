import type { Metadata } from "next";
import { ContentClusterNav } from "@/components/ContentClusterNav";
import { PageBottomCta } from "@/components/PageBottomCta";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoBreadcrumbs } from "@/components/SeoBreadcrumbs";
import { ContentSection, Prose } from "@/components/ContentSection";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { pageGraph } from "@/lib/schema";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Qualifications", path: "/qualifications" },
];

const QUALIFICATIONS_CLUSTER = [
  { href: "/what-is-a-business-valuation-expert-witness", label: "What is an expert witness?" },
  { href: "/how-to-instruct", label: "How to instruct" },
  { href: "/services", label: "Expert witness services" },
  { href: "/contact", label: "Instruct an expert" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Business Valuation Expert Witness Qualifications UK | ACA, CVA, CFA & RICS",
  description:
    "What credentials should a UK business valuation expert witness hold? ACA, FCA, CVA, CFA, RICS explained - plus CPR Part 35 and FPR Part 25 compliance standards.",
  path: "/qualifications",
});

export default function QualificationsPage() {
  return (
    <>
      <JsonLd data={pageGraph(breadcrumbs)} />
      <PageHero>
        <SeoBreadcrumbs
          includeJsonLd={false}
          items={breadcrumbs.map((b) => ({ name: b.name, href: b.path }))}
        />
        <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          Business Valuation Expert Witness Qualifications & Credentials
        </h1>
      </PageHero>

      <ContentSection>
        <h2 className="text-2xl font-bold text-charcoal">
          How BusinessValuationExperts Vets Our Experts
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground">
          <li>Active professional practice (not full-time expert witness only)</li>
          <li>Relevant credentials verified</li>
          <li>CPR Part 35 AND FPR Part 25 experience confirmed</li>
          <li>Prior testimony history reviewed</li>
          <li>No conflicts of interest</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-charcoal">Key UK Credentials</h2>
        <dl className="mt-6 space-y-6 text-foreground">
          <div>
            <dt className="font-semibold text-charcoal">ACA / FCA (ICAEW)</dt>
            <dd className="mt-1">
              Chartered Accountant - the primary UK accountancy qualification. Essential baseline for financial expert witnesses.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-charcoal">ACCA / FCCA</dt>
            <dd className="mt-1">
              Association of Chartered Certified Accountants - widely recognised for forensic and valuation work.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-charcoal">CFA (Chartered Financial Analyst)</dt>
            <dd className="mt-1">
              International qualification covering valuation, investment analysis, and financial modelling - particularly relevant for DCF-heavy valuations.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-charcoal">CVA (Certified Valuation Analyst)</dt>
            <dd className="mt-1">
              US-originated NACVA credential increasingly recognised in UK litigation, especially cross-border disputes.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-charcoal">ABV (Accredited in Business Valuation - AICPA)</dt>
            <dd className="mt-1">US credential recognised in international litigation.</dd>
          </div>
          <div>
            <dt className="font-semibold text-charcoal">RICS</dt>
            <dd className="mt-1">
              Royal Institution of Chartered Surveyors - relevant for property-holding companies and real estate businesses.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-charcoal">ICAEW Business Valuation Community</dt>
            <dd className="mt-1">
              ICAEW members specialising in business valuation - recognised by UK courts as a marker of specialist expertise.
            </dd>
          </div>
        </dl>

        <h2 className="mt-10 text-2xl font-bold text-charcoal">Experience Requirements</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground">
          <li>10+ years active practice in business valuation</li>
          <li>Prior court or arbitration testimony experience</li>
          <li>Knowledge of UK court procedures (CPR Part 35, FPR Part 25)</li>
          <li>Sector-specific experience relevant to the case</li>
          <li>Professional indemnity insurance</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-charcoal">
          CPR Part 35 & FPR Part 25 Compliance
        </h2>
        <Prose>
          <p className="mt-4">
            Business valuation expert witnesses in UK civil proceedings owe their
            primary duty to the court under CPR Part 35. In family proceedings, FPR
            Part 25 applies the same principle. The expert must be independent,
            objective, and assist the court rather than advocate for the instructing
            party - even when appointed by one party alone.
          </p>
        </Prose>

        <h2 className="mt-10 text-2xl font-bold text-charcoal">Red Flags to Avoid</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground">
          <li>Expert with no active professional practice (full-time expert witnesses attract judicial scepticism)</li>
          <li>No prior testimony experience</li>
          <li>Cannot explain methodology clearly to a non-specialist</li>
          <li>Prior adverse judicial comments on methodology</li>
          <li>No professional indemnity insurance</li>
          <li>Conflict of interest with the company or parties</li>
        </ul>
        <ContentClusterNav links={[...QUALIFICATIONS_CLUSTER]} />
      </ContentSection>

      <PageBottomCta />
    </>
  );
}
