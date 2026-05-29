import type { GlossaryTerm } from "./types";
import { glossaryAnchorId } from "./seo/glossaryAnchor";

function term(
  name: string,
  definition: string,
  link?: { href: string; label: string },
): GlossaryTerm {
  return {
    term: name,
    anchorId: glossaryAnchorId(name),
    definition,
    link,
  };
}

/** Appendix C - default internal links per term */
export const GLOSSARY_TERMS: GlossaryTerm[] = [
  term(
    "Adjusted EBITDA",
    "EBITDA after normalising adjustments for owner remuneration, one-off costs, related party transactions, and other items that do not reflect maintainable earnings. UK expert witnesses use adjusted EBITDA as the earnings base for capitalisation of earnings valuations.",
    { href: "/valuation-methods", label: "Valuation methods" },
  ),
  term(
    "But-For Value",
    "The value a business or asset would have had but for the alleged wrong - used in professional negligence and breach claims to quantify loss by comparing but-for value to actual value.",
    { href: "/case-types/professional-negligence-accountant", label: "Professional negligence valuations" },
  ),
  term(
    "Capitalisation Rate",
    "The divisor applied to maintainable earnings (the inverse of the earnings multiple). A capitalisation rate of 20% implies a 5× earnings multiple.",
    { href: "/valuation-methods", label: "Valuation methods" },
  ),
  term(
    "Companies Act 2006 S994",
    "The statutory basis for unfair prejudice petitions by shareholders. Valuation at fair value (often without minority discount) is central to buy-out orders.",
    { href: "/case-types/shareholder-dispute-s994", label: "S994 shareholder disputes" },
  ),
  term(
    "Control Premium",
    "An uplift applied when valuing a controlling stake, reflecting the ability to direct strategy, appoint directors, and realise synergies.",
    { href: "/valuation-methods", label: "Valuation methods" },
  ),
  term(
    "CPR Part 35",
    "Civil Procedure Rules Part 35 - governs expert evidence in UK civil proceedings. Sets duties to the court, report requirements, and joint expert procedures.",
    { href: "/qualifications", label: "CPR Part 35 qualifications" },
  ),
  term(
    "DCF (Discounted Cash Flow)",
    "A forward-looking valuation method projecting future cash flows and discounting them to present value using WACC. Common for growth and technology businesses.",
    { href: "/valuation-methods", label: "DCF methodology" },
  ),
  term(
    "Diminution in Value",
    "The reduction in value caused by a breach, misrepresentation, or wrongful act - quantified by comparing value with and without the alleged defect.",
    { href: "/case-types/commercial-litigation-breach-of-warranty", label: "M&A warranty disputes" },
  ),
  term(
    "DLOM (Discount for Lack of Marketability)",
    "A reduction applied to reflect that private company shares cannot be sold quickly on a public market. More common in US practice; applied selectively in UK courts.",
    { href: "/valuation-methods", label: "Valuation methods" },
  ),
  term(
    "EBITDA",
    "Earnings before interest, tax, depreciation, and amortisation - a widely used proxy for operating cash generation in maintainable earnings valuations.",
    { href: "/valuation-methods", label: "Valuation methods" },
  ),
  term(
    "Enterprise Value",
    "The value of the business operations (debt-free, cash-free basis). Equity value is enterprise value minus net debt plus surplus assets.",
    { href: "/valuation-methods", label: "Valuation methods" },
  ),
  term(
    "Expert Determination",
    "A contractual or agreed process where an independent expert determines a value or dispute, often binding. Used in shareholders' agreements and partnership deeds.",
    { href: "/services#expert-determination", label: "Expert determination service" },
  ),
  term(
    "Fair Market Value",
    "The price a willing buyer would pay a willing seller, both acting knowledgeably and without compulsion. Standard in many commercial and tax contexts.",
    { href: "/valuation-methods", label: "Fair value vs fair market value" },
  ),
  term(
    "Fair Value (S994 context)",
    "A legal valuation standard in unfair prejudice cases - typically proportionate share of whole company value without minority discount where prejudice is found.",
    { href: "/case-types/shareholder-dispute-s994", label: "S994 fair value standard" },
  ),
  term(
    "FPR Part 25",
    "Family Procedure Rules Part 25 - governs expert evidence in UK family proceedings including divorce financial remedy. May require court permission to instruct experts.",
    { href: "/qualifications", label: "FPR Part 25 compliance" },
  ),
  term(
    "Going Concern Value",
    "Value assuming the business continues trading and assets retain operational value - contrasted with break-up or forced sale value in insolvency.",
    { href: "/case-types/insolvency-administration", label: "Insolvency valuations" },
  ),
  term(
    "Goodwill (Personal vs Business)",
    "Business goodwill attaches to the enterprise and may transfer on sale; personal goodwill attaches to an individual and is often excluded in divorce and practice valuations.",
    { href: "/services#goodwill-intangible", label: "Goodwill valuation" },
  ),
  term(
    "The Ikarian Reefer Duties",
    "The foundational duty that expert witnesses owe their primary obligation to the court, not the instructing party - established in The Ikarian Reefer [1993] and codified in CPR 35 and FPR 25.",
    { href: "/qualifications", label: "Expert witness duties" },
  ),
  term(
    "Intangible Assets",
    "Non-physical assets including goodwill, brands, customer relationships, patents, and trade marks - often central to valuation disputes.",
    { href: "/services#goodwill-intangible", label: "Intangible asset valuation" },
  ),
  term(
    "Maintainable Earnings",
    "Normalised, sustainable earnings expected to continue - the earnings base for capitalisation of earnings and EBITDA multiple valuations.",
    { href: "/valuation-methods", label: "Maintainable earnings method" },
  ),
  term(
    "Minority Discount",
    "A reduction for lack of control in a minority stake. Often disapplied in S994 fair value valuations where unfair prejudice is established.",
    { href: "/case-types/shareholder-dispute-s994", label: "Shareholder disputes" },
  ),
  term(
    "NAV (Net Asset Value)",
    "Value based on underlying assets minus liabilities, at book, fair, or forced sale values. Primary method for property and investment companies.",
    { href: "/valuation-methods", label: "NAV methodology" },
  ),
  term(
    "Normalisation Adjustments",
    "Adjustments to reported profits to reflect maintainable earnings - removing non-recurring items, excessive owner benefits, and related party distortions.",
    { href: "/valuation-methods", label: "Valuation methods" },
  ),
  term(
    "Party-Appointed Expert (PAE)",
    "An expert instructed by one party in litigation. Owes the same duty to the court as an SJE but prepares reports for the instructing party subject to CPR/FPR rules.",
    { href: "/guides/single-joint-expert-business-valuation", label: "SJE vs party-appointed guide" },
  ),
  term(
    "Professional Indemnity Insurance",
    "Insurance covering negligence in professional work. Essential for practising valuation experts and a factor in vetting expert witnesses.",
    { href: "/qualifications", label: "Qualifications" },
  ),
  term(
    "Single Joint Expert (SJE)",
    "One expert instructed jointly by both parties (or appointed by the court). Report is shared; costs typically split. Governed by CPR 35.7 and FPR 25.11.",
    { href: "/guides/single-joint-expert-business-valuation", label: "Single joint expert guide" },
  ),
  term(
    "Terminal Value",
    "The present value of cash flows beyond the explicit forecast period in a DCF - often calculated using Gordon Growth or exit multiples.",
    { href: "/valuation-methods", label: "DCF methodology" },
  ),
  term(
    "Transaction at Undervalue (S238)",
    "Insolvency Act 1986 section 238 - allows avoidance of gifts and transactions at undervalue in the relevant period before insolvency.",
    { href: "/case-types/insolvency-administration", label: "Insolvency valuations" },
  ),
  term(
    "WACC (Weighted Average Cost of Capital)",
    "The blended cost of equity and debt used as the discount rate in DCF valuations. Assumptions are frequently contested in litigation.",
    { href: "/valuation-methods", label: "DCF and WACC" },
  ),
  term(
    "Wrongful Trading (S214)",
    "Insolvency Act 1986 section 214 - directors may be liable to contribute to assets if they continued trading when insolvent liquidation was unavoidable.",
    { href: "/case-types/insolvency-administration", label: "Insolvency expert witness" },
  ),
];
