import type { Metadata } from "next";
import Link from "next/link";
import { ContentClusterNav } from "@/components/ContentClusterNav";
import { GeoComparisonTable } from "@/components/GeoComparisonTable";
import { PageBottomCta } from "@/components/PageBottomCta";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoBreadcrumbs } from "@/components/SeoBreadcrumbs";
import { ContentSection, Prose } from "@/components/ContentSection";
import { VALUATION_METHODS_CLUSTER } from "@/lib/seo/clusterLinks";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Business Valuation Methods UK | DCF, Maintainable Earnings & NAV",
  description:
    "The three main business valuation methods used by UK expert witnesses: discounted cash flow (DCF), maintainable earnings, and net asset value — explained for solicitors and their clients.",
  path: "/valuation-methods",
});

function MethodTable({
  caption,
  rows,
}: {
  caption: string;
  rows: [string, string, string][];
}) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full min-w-[320px] border-collapse text-sm">
        <caption className="mb-3 text-left text-sm font-medium text-charcoal">
          {caption}
        </caption>
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-3 py-2 text-left font-semibold text-charcoal">Step</th>
            <th className="px-3 py-2 text-left font-semibold text-charcoal">Description</th>
            <th className="px-3 py-2 text-left font-semibold text-charcoal">Key Variable</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([step, desc, variable]) => (
            <tr key={step} className="border-b border-border">
              <td className="px-3 py-2 font-medium text-charcoal">{step}</td>
              <td className="px-3 py-2 text-foreground">{desc}</td>
              <td className="px-3 py-2 text-foreground">{variable}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ValuationMethodsPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Valuation Methods", path: "/valuation-methods" },
  ];

  return (
    <>
      <JsonLd
        data={[organizationSchema(), breadcrumbSchema(breadcrumbs)]}
      />
      <PageHero>
        <SeoBreadcrumbs
          includeJsonLd={false}
          items={breadcrumbs.map((b) => ({ name: b.name, href: b.path }))}
        />
        <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          Business Valuation Methods Used by UK Expert Witnesses
        </h1>
      </PageHero>

      <ContentSection>
        <h2 className="text-2xl font-bold text-charcoal">The Three Primary Methods</h2>
        <Prose>
          <p className="mt-4">
            UK courts do not prescribe a single valuation method — the appropriate
            method depends on the type of business, the purpose of the valuation,
            and the legal context. Expert witnesses must justify their choice of
            method and demonstrate that it produces a reliable result.
          </p>
        </Prose>

        <h2 id="dcf" className="mt-12 scroll-mt-24 text-2xl font-bold text-charcoal">
          <Link
            href="/valuation-methods/discounted-cash-flow"
            className="hover:text-green hover:underline"
          >
            1. Discounted Cash Flow (DCF)
          </Link>
        </h2>
        <Prose>
          <p className="mt-4">
            <strong>Definition:</strong> DCF values a business by projecting future
            cash flows and discounting them back to present value using a
            risk-adjusted discount rate (typically the Weighted Average Cost of
            Capital — WACC).
          </p>
          <p>
            <strong>When used:</strong> Growing, profitable companies with reliable
            forecast data — particularly technology firms, professional services,
            and SaaS businesses.
          </p>
        </Prose>
        <MethodTable
          caption="DCF methodology steps used by UK business valuation expert witnesses"
          rows={[
            ["1. Revenue forecast", "Project 3–5 year revenue", "Growth rate assumptions"],
            ["2. Free cash flow", "Calculate EBITDA → FCF", "EBITDA margin, capex"],
            ["3. Discount rate", "Calculate WACC", "Cost of equity, cost of debt"],
            ["4. Terminal value", "Gordon Growth Model or exit multiple", "Long-term growth rate"],
            ["5. Enterprise value", "Sum PV of FCFs + terminal value", "EV to equity bridge"],
          ]}
        />
        <p className="mt-4 text-foreground">
          <strong>Strengths:</strong> forward-looking; captures growth potential.{" "}
          <strong>Weaknesses:</strong> highly sensitive to assumptions; contested in litigation.
        </p>

        <h2
          id="maintainable-earnings"
          className="mt-12 scroll-mt-24 text-2xl font-bold text-charcoal"
        >
          <Link
            href="/valuation-methods/maintainable-earnings"
            className="hover:text-green hover:underline"
          >
            2. Maintainable Earnings (Capitalisation of Earnings)
          </Link>
        </h2>
        <Prose>
          <p className="mt-4">
            <strong>Definition:</strong> Values a business by applying an earnings
            multiple to a normalised, maintainable level of earnings (typically EBIT
            or EBITDA). The multiple reflects sector, risk, and comparable transaction
            data.
          </p>
          <p>
            <strong>When used:</strong> Established trading companies with stable
            earnings — traditional businesses and owner-managed SMEs.
          </p>
        </Prose>
        <MethodTable
          caption="Maintainable earnings (capitalisation of earnings) methodology"
          rows={[
            ["1. Normalise earnings", "Adjust for owner salary, one-off items, related party transactions", "Maintainable EBIT/EBITDA"],
            ["2. Select multiple", "Sector comparables, market data, transaction multiples", "EV/EBITDA multiple"],
            ["3. Apply multiple", "Maintainable earnings × multiple", "Enterprise value"],
            ["4. Equity bridge", "Deduct net debt, add surplus assets", "Equity value"],
          ]}
        />
        <p className="mt-4 text-foreground">
          <strong>Strengths:</strong> simple, market-referenced.{" "}
          <strong>Weaknesses:</strong> multiple selection is subjective; contested between experts.
        </p>

        <h2 id="nav" className="mt-12 scroll-mt-24 text-2xl font-bold text-charcoal">
          <Link
            href="/valuation-methods/net-asset-value"
            className="hover:text-green hover:underline"
          >
            3. Net Asset Value (NAV)
          </Link>
        </h2>
        <Prose>
          <p className="mt-4">
            <strong>Definition:</strong> Values a business based on the value of its
            underlying assets minus liabilities — at book value, fair value, or
            forced sale value.
          </p>
          <p>
            <strong>When used:</strong> Property-holding companies, investment
            companies, loss-making businesses, and businesses being wound up.
          </p>
        </Prose>
        <MethodTable
          caption="Net asset value (NAV) methodology for UK litigation"
          rows={[
            ["1. Asset schedule", "List all assets (tangible + intangible)", "Balance sheet"],
            ["2. Revalue assets", "Mark to market (properties, investments)", "Independent valuations"],
            ["3. Identify liabilities", "All debts, contingent liabilities", "Legal due diligence"],
            ["4. NAV", "Assets minus liabilities", "Going concern or break-up"],
          ]}
        />

        <h2 className="mt-12 text-2xl font-bold text-charcoal">
          Fair Value vs Fair Market Value — UK Legal Context
        </h2>
        <p className="mt-4 leading-relaxed text-foreground">
          UK business valuation expert witnesses must apply the valuation standard
          directed by the court or statute — fair market value in many commercial and
          tax matters, fair value in S994 unfair prejudice petitions.
        </p>
        <GeoComparisonTable
          caption="Fair market value vs fair value (S994) for UK shareholder disputes"
          colAHeader="Fair market value"
          colBHeader="Fair value (S994)"
          rows={[
            {
              label: "Definition",
              colA: "Price between willing buyer and seller without compulsion",
              colB: "Legal standard for unfair prejudice buy-out orders",
            },
            {
              label: "Minority discount",
              colA: "Often applied to minority stakes",
              colB: "Typically disapplied where prejudice is found",
            },
            {
              label: "Typical use",
              colA: "Tax, M&A, commercial transactions",
              colB: "Companies Act 2006 s994 petitions",
            },
            {
              label: "Expert report",
              colA: "CPR Part 35 / open market basis",
              colB: "CPR Part 35; proportionate share of whole company",
            },
          ]}
        />
        <p className="mt-4 text-foreground">
          See our{" "}
          <Link href="/case-types/shareholder-dispute-s994" className="font-medium text-green hover:underline">
            S994 shareholder dispute valuation guide
          </Link>{" "}
          and{" "}
          <Link href="/guides/shareholder-disputes-valuation-guide" className="font-medium text-green hover:underline">
            solicitor guide to fair value
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-bold text-charcoal">Discounts & Premiums</h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-foreground">
          <li>
            <strong>Minority Discount:</strong> reduction for lack of control;
            contested in S994 — courts often disapply where unfair prejudice is found.
          </li>
          <li>
            <strong>Control Premium:</strong> uplift for majority or controlling stakes.
          </li>
          <li>
            <strong>Marketability Discount (DLOM):</strong> reduction for illiquid
            private shares; more common in US courts, applied selectively in the UK.
          </li>
        </ul>

        <ContentClusterNav links={VALUATION_METHODS_CLUSTER} />
      </ContentSection>

      <PageBottomCta />
    </>
  );
}
