import type { Metadata } from "next";
import Link from "next/link";
import { ContentClusterNav } from "@/components/ContentClusterNav";
import { PageBottomCta } from "@/components/PageBottomCta";
import { ContentSection } from "@/components/ContentSection";
import { HOMEPAGE_CLUSTER } from "@/lib/seo/clusterLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { homepageJsonLdGraph } from "@/lib/homepage-jsonld";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { SERVICES } from "@/lib/services-data";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Business Valuation Expert Witness UK | Shareholder Disputes & Divorce",
  description:
    "Find a qualified business valuation expert witness in the UK. CPR Part 35 and FPR Part 25 compliant reports for shareholder disputes, divorce, commercial litigation, and insolvency. Instruct an expert today.",
  path: "/",
});

const stats = [
  ["Typical expert hourly rate", "£250–£600/hr", "Industry average"],
  ["Typical report completion time", "15–25 hours", "Expert Evidence International"],
  ["Guide price for draft report", "£2,250–£10,000", "Expert Evidence International"],
  ["Court framework - civil cases", "CPR Part 35", "Civil Procedure Rules"],
  ["Court framework - family cases", "FPR Part 25", "Family Procedure Rules"],
  ["Primary valuation methods", "DCF, Maintainable Earnings, NAV", "UK court practice"],
  ["SJE appointments available", "Yes", "CPR 35.7 / FPR 25.11"],
] as const;

const trustPoints = [
  "Credentialed: ACA, FCA, CVA, CFA, RICS, ACCA",
  "CPR Part 35 AND FPR Part 25 compliant",
  "Experience in High Court, County Court, Family Court, and arbitration",
  "Available as Single Joint Expert (SJE) or party-appointed expert (PAE)",
  "Real M&A and transactional experience - not just academic valuation knowledge",
  "SME to mid-market expertise (£50,000 to £100M+ turnover)",
  "Sector specialists available (tech, professional practices, retail, property, manufacturing)",
] as const;

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageJsonLdGraph} />

      <section className="bg-charcoal text-white">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-20">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.35rem]">
            Business Valuation Expert Witness Services for UK Solicitors & Law
            Firms
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80">
            Whether your case involves a shareholder dispute, divorce financial
            remedy, insolvency, or commercial litigation, the value placed on a
            business can determine everything. BusinessValuationExperts.co.uk
            connects UK solicitors and barristers with qualified business
            valuation expert witnesses - CPR Part 35 and FPR Part 25 compliant,
            court-ready reports.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-[44px] items-center rounded bg-green px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-green/90"
          >
            Instruct an Expert Witness
          </Link>
        </div>
      </section>

      <ContentSection>
        <h2 className="text-2xl font-bold text-charcoal md:text-3xl">
          What Our Business Valuation Expert Witnesses Cover
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Link
              key={s.id}
              href={`/services#${s.anchor}`}
              className="rounded-lg border border-border bg-white p-5 shadow-card transition hover:border-green/30 min-h-[44px]"
            >
              <h3 className="font-semibold text-charcoal">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground">{s.summary}</p>
            </Link>
          ))}
        </div>
      </ContentSection>

      <ContentSection alt>
        <h2 className="text-2xl font-bold text-charcoal md:text-3xl">
          Business Valuation Expert Witness: Key UK Statistics
        </h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[320px] border-collapse text-left text-sm">
            <caption className="mb-3 text-left text-sm font-medium text-charcoal">
              Business valuation expert witness UK: indicative fees and court frameworks
            </caption>
            <thead>
              <tr className="border-b border-border bg-white">
                <th className="px-4 py-3 font-semibold text-charcoal">Metric</th>
                <th className="px-4 py-3 font-semibold text-charcoal">Figure</th>
                <th className="px-4 py-3 font-semibold text-charcoal">Source</th>
              </tr>
            </thead>
            <tbody>
              {stats.map(([metric, figure, source]) => (
                <tr key={metric} className="border-b border-border">
                  <td className="px-4 py-3 text-foreground">{metric}</td>
                  <td className="px-4 py-3 font-medium text-charcoal">{figure}</td>
                  <td className="px-4 py-3 text-foreground/80">{source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-foreground/70">
          Sources: Expert Evidence International; Civil Procedure Rules Part 35;
          Family Procedure Rules Part 25. Rates are indicative; actual fees vary
          by case complexity and expert seniority.
        </p>
      </ContentSection>

      <ContentSection>
        <h2 className="text-2xl font-bold text-charcoal md:text-3xl">
          Why UK Solicitors Trust Our Business Valuation Expert Witnesses
        </h2>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-foreground">
          {trustPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection alt>
        <h2 className="text-xl font-bold text-charcoal">
          What is a business valuation expert witness?
        </h2>
        <div className="mt-4 space-y-4 text-foreground leading-relaxed">
          <p>
            A business valuation expert witness is an independent financial
            professional instructed to provide a court-admissible opinion on the
            value of a company or shareholding. Unlike a transaction adviser,
            the expert&apos;s primary duty is to the court under CPR Part 35 or
            FPR Part 25 - whether appointed as a single joint expert or by one
            party alone.
          </p>
          <p>
            UK litigation turns on methodology (DCF, maintainable earnings, NAV),
            fair value versus fair market value in shareholder disputes, and
            sector-specific practice.{" "}
            <Link
              href="/what-is-a-business-valuation-expert-witness"
              className="font-medium text-green hover:underline"
            >
              Read our full definition and role guide
            </Link>{" "}
            for solicitors instructing experts for the first time.
          </p>
        </div>
      </ContentSection>

      <ContentSection>
        <ContentClusterNav title="Explore our UK expert witness resources" links={HOMEPAGE_CLUSTER} />
      </ContentSection>

      <PageBottomCta />
    </>
  );
}
