import type { ContentPage } from "./types";

export const VALUATION_METHOD_SLUGS = [
  "discounted-cash-flow",
  "maintainable-earnings",
  "net-asset-value",
] as const;

export type ValuationMethodSlug = (typeof VALUATION_METHOD_SLUGS)[number];

export const VALUATION_METHODS: ContentPage[] = [
  {
    slug: "discounted-cash-flow",
    pageTitle:
      "Discounted Cash Flow (DCF) Business Valuation UK | Expert Witness Methods",
    metaDescription:
      "How UK business valuation expert witnesses use discounted cash flow (DCF), WACC, terminal value, and cash flow projections in litigation and tax disputes.",
    hubLabel: "Discounted Cash Flow (DCF)",
    h1: "Discounted Cash Flow (DCF) - Business Valuation Method",
    paragraphs: [
      "Discounted cash flow (DCF) values a business by projecting future cash flows and discounting them to present value using a risk-adjusted discount rate, typically the weighted average cost of capital (WACC).",
      "UK expert witnesses use DCF for growing, profitable companies with reliable forecasts - particularly technology, professional services, and SaaS businesses. The method is forward-looking and captures growth potential, but it is highly sensitive to assumptions and is frequently contested between experts in litigation.",
    ],
    faq: [
      {
        q: "When do UK courts accept a DCF valuation?",
        a: "Courts accept DCF where forecasts are reliable and the expert can justify growth, margin, capex, and discount rate assumptions with evidence. DCF is less favoured for mature SMEs with volatile or owner-dependent earnings unless projections are well supported.",
      },
      {
        q: "What drives disagreement between DCF experts?",
        a: "Common disputes include revenue growth rates, EBITDA margins, terminal growth or exit multiples, WACC components, and the bridge from enterprise value to equity. Joint expert meetings under CPR PD35 often focus on these inputs.",
      },
    ],
    updatedAt: "2026-07-16",
    relatedLinks: [
      { href: "/valuation-methods", label: "All valuation methods" },
      { href: "/sectors/technology-saas-digital-businesses", label: "Technology / SaaS valuations" },
      { href: "/guides/dcf-maintainable-earnings-expert-guide", label: "DCF & earnings guide" },
    ],
  },
  {
    slug: "maintainable-earnings",
    pageTitle:
      "Maintainable Earnings Valuation UK | Capitalisation of Earnings",
    metaDescription:
      "Maintainable earnings and EV/EBITDA multiples used by UK business valuation expert witnesses for SMEs, professional practices, and litigation.",
    hubLabel: "Maintainable Earnings",
    h1: "Maintainable Earnings (Capitalisation of Earnings)",
    paragraphs: [
      "The maintainable earnings method values a business by applying an earnings multiple to a normalised, maintainable level of earnings (typically EBIT or EBITDA). The multiple reflects sector risk, size, and comparable transaction data.",
      "This approach is widely used for established trading companies and owner-managed SMEs with stable histories. It is relatively simple and market-referenced, but multiple selection and earnings normalisation are subjective and often contested between party-appointed experts.",
    ],
    faq: [
      {
        q: "How do experts normalise earnings?",
        a: "Experts adjust reported profits for excessive owner remuneration, related-party charges, one-off costs or income, and other non-recurring items to reach maintainable EBIT or EBITDA before applying a multiple.",
      },
      {
        q: "Where do sector multiples come from?",
        a: "Multiples may be drawn from listed comparables, private transaction databases, and sector-specific expert witness experience. The expert must explain why the chosen multiple is appropriate for the subject company.",
      },
    ],
    updatedAt: "2026-07-16",
    relatedLinks: [
      { href: "/valuation-methods", label: "All valuation methods" },
      { href: "/sectors/professional-practices", label: "Professional practice valuations" },
      { href: "/case-types/divorce-financial-remedy", label: "Divorce / financial remedy" },
    ],
  },
  {
    slug: "net-asset-value",
    pageTitle: "Net Asset Value (NAV) Business Valuation UK | Expert Witness",
    metaDescription:
      "Net asset value (NAV) valuations for property companies, investment holdings, loss-making businesses, and break-up scenarios in UK litigation.",
    hubLabel: "Net Asset Value (NAV)",
    h1: "Net Asset Value (NAV) - Asset-Based Valuation",
    paragraphs: [
      "Net asset value (NAV) values a business based on the fair value of its assets minus liabilities - at book value, fair value, or forced sale value depending on the legal context.",
      "NAV is commonly used for property-holding companies, investment vehicles, loss-making businesses, and winding-up scenarios. Experts revalue properties and investments, identify contingent liabilities, and conclude on going concern versus break-up basis.",
    ],
    faq: [
      {
        q: "When is NAV preferred over earnings-based methods?",
        a: "NAV is appropriate when the company's value is driven by tangible assets or investments rather than trading profits, or when the business is not a going concern. Property companies and SPVs are typical examples.",
      },
      {
        q: "Does NAV include goodwill?",
        a: "Pure NAV is asset-based; goodwill may be added separately where a going concern is justified. Experts must state whether the conclusion is on a break-up or going concern basis.",
      },
    ],
    updatedAt: "2026-07-16",
    relatedLinks: [
      { href: "/valuation-methods", label: "All valuation methods" },
      { href: "/sectors/property-companies", label: "Property company valuations" },
      { href: "/case-types/insolvency-administration", label: "Insolvency valuations" },
    ],
  },
];

export function getValuationMethod(
  slug: string,
): ContentPage | undefined {
  return VALUATION_METHODS.find((m) => m.slug === slug);
}
