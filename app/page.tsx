import type { Metadata } from "next";
import Link from "next/link";
import { BrandImage } from "@/components/BrandImage";
import { ServiceLedger } from "@/components/ServiceLedger";
import { ValuationRange } from "@/components/ValuationRange";
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

const headlineStats = [
  { label: "Typical expert rate", figure: "£250–£600", unit: "per hour", source: "Industry average" },
  { label: "Typical report time", figure: "15–25", unit: "hours", source: "Expert Evidence International" },
  { label: "Guide price, draft report", figure: "£2,250–£10k", unit: "", source: "Expert Evidence International" },
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

      <section className="relative overflow-hidden border-b-2 border-charcoal/10 bg-panel">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-green"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] lg:items-end lg:gap-14 lg:px-8">
          <div>
            <p className="animate-bve-fade-up text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              UK expert witness matching
            </p>
            <div
              className="animate-bve-rule-in mt-4 h-0.5 w-16 bg-green"
              aria-hidden
            />
            <h1 className="animate-bve-fade-up-delay mt-5 font-display text-3xl font-semibold tracking-tight text-charcoal md:text-4xl lg:text-[2.55rem] lg:leading-[1.15]">
              Business Valuation Expert Witness Services for UK Solicitors &amp;
              Law Firms
            </h1>
            <p className="animate-bve-fade-up-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-foreground md:text-lg">
              BusinessValuationExperts.co.uk helps solicitors and law firms in
              England and Wales instruct qualified business valuation expert
              witnesses for shareholder disputes, divorce financial remedy,
              insolvency, and commercial litigation. Reports are CPR Part 35 and
              FPR Part 25 compliant and prepared for English and Welsh courts.
              We do not provide expert witness matching outside the United
              Kingdom.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-[44px] items-center border-2 border-charcoal bg-charcoal px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:border-green hover:bg-green"
            >
              Instruct an Expert Witness
            </Link>
          </div>

          <div className="relative pb-10 lg:pb-0">
            <BrandImage
              image="city-of-london-skyline"
              className="aspect-[4/3] lg:aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 440px"
              preload
            />
            <ValuationRange className="relative z-10 -mt-16 ml-4 sm:ml-8 lg:absolute lg:-left-16 lg:bottom-8 lg:mt-0 lg:w-80" />
          </div>
        </div>
      </section>

      <ContentSection wide>
        <h2 className="font-display text-2xl font-semibold text-charcoal md:text-3xl">
          What Our Business Valuation Expert Witnesses Cover
        </h2>
        <BrandImage
          image="rolls-building-london"
          className="mt-8 aspect-[16/9] md:aspect-[21/8]"
          sizes="(max-width: 1024px) 100vw, 960px"
          caption="The Rolls Building, Business and Property Courts of England and Wales"
        />
        <ServiceLedger services={SERVICES} />
      </ContentSection>

      <ContentSection alt slash>
        <h2 className="font-display text-2xl font-semibold text-charcoal md:text-3xl">
          Business Valuation Expert Witness: Key UK Statistics
        </h2>
        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          {headlineStats.map((stat) => (
            <div key={stat.label} className="relative bg-panel p-6 shadow-card">
              <span aria-hidden className="absolute left-6 top-0 h-1.5 w-12 bg-green" />
              <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
                {stat.label}
              </dt>
              <dd className="mt-3 font-display text-4xl font-bold leading-none tracking-tight text-charcoal lg:text-[2.75rem]">
                {stat.figure}
                <span className="mt-2 block min-h-[1.25rem] text-sm font-semibold tracking-normal text-foreground">
                  {stat.unit}
                </span>
              </dd>
              <dd className="mt-3 text-xs text-foreground/80">{stat.source}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 overflow-x-auto border border-border">
          <table className="w-full min-w-[320px] border-collapse text-left text-sm">
            <caption className="mb-3 text-left text-sm font-medium text-charcoal">
              Business valuation expert witness UK: indicative fees and court frameworks
            </caption>
            <thead>
              <tr className="border-b border-border bg-charcoal text-white">
                <th className="px-4 py-3 font-semibold">Metric</th>
                <th className="px-4 py-3 font-semibold">Figure</th>
                <th className="px-4 py-3 font-semibold">Source</th>
              </tr>
            </thead>
            <tbody>
              {stats.map(([metric, figure, source]) => (
                <tr key={metric} className="border-b border-border bg-panel">
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
        <h2 className="font-display text-2xl font-semibold text-charcoal md:text-3xl">
          Why UK Solicitors Trust Our Business Valuation Expert Witnesses
        </h2>
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <ul className="space-y-0 border-l-2 border-green/40 pl-0">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="border-b border-border py-3 pl-5 text-foreground last:border-b-0"
              >
                {point}
              </li>
            ))}
          </ul>
          <BrandImage
            image="lincolns-inn-new-square"
            className="aspect-[4/3] lg:aspect-[4/5]"
            sizes="(max-width: 1024px) 100vw, 400px"
            caption="New Square, Lincoln's Inn"
          />
        </div>
      </ContentSection>

      <ContentSection alt slash>
        <h2 className="font-display text-xl font-semibold text-charcoal">
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
