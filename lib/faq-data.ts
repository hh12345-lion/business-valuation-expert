import type { FaqItem } from "./types";

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What is a business valuation expert witness?",
    a: "A business valuation expert witness is a qualified financial professional - typically a chartered accountant, CFA, or certified valuation analyst - instructed to provide an independent, court-admissible opinion on the value of a business or shareholding in UK legal proceedings. Their primary duty is to the court under CPR Part 35 (civil) or FPR Part 25 (family), not to the instructing solicitor.",
  },
  {
    q: "What legal cases require a business valuation expert witness?",
    a: "Common cases include shareholder disputes (S994 petitions), divorce financial remedy proceedings, partnership dissolution, M&A warranty claims, insolvency and wrongful trading, HMRC share valuation disputes, professional negligence against valuers, IP litigation, management buyout disputes, and compulsory purchase compensation.",
  },
  {
    q: "What is the difference between CPR Part 35 and FPR Part 25?",
    a: "CPR Part 35 governs expert evidence in civil courts (High Court, County Court, arbitration) for commercial and shareholder disputes. FPR Part 25 governs expert evidence in the Family Court for divorce and related proceedings. Both impose the same overriding duty to the court and similar report requirements, but family cases often require court permission before instructing an expert.",
  },
  {
    q: "What valuation methods do UK expert witnesses use?",
    a: "The three primary methods are discounted cash flow (DCF), maintainable earnings (capitalisation of earnings), and net asset value (NAV). The appropriate method depends on the business type, purpose of valuation, and legal context. Experts must justify their choice and demonstrate it produces a reliable result.",
  },
  {
    q: "What is fair value vs fair market value in S994 disputes?",
    a: "Fair market value is the price a willing buyer would pay a willing seller without compulsion. Fair value in S994 unfair prejudice petitions is a legal standard - courts typically value shares without minority discount, reflecting proportionate share of the whole company where unfair prejudice is found.",
  },
  {
    q: "Should I use a Single Joint Expert or party-appointed expert?",
    a: "Single Joint Experts (SJE) are cost-effective and common in lower-value cases and where courts direct joint instruction under CPR 35.7 or FPR 25.11. Party-appointed experts are typical in high-value or complex disputes where valuations diverge significantly; experts must meet and produce a joint statement.",
  },
  {
    q: "How much does a business valuation expert witness cost in the UK?",
    a: "Hourly rates typically range from £250–£600 for experienced valuers, with leading specialists charging more. Draft reports often cost £3,000–£25,000 depending on complexity. SJE costs are usually shared between parties. See our fees page for indicative 2025 rates.",
  },
  {
    q: "What credentials should a UK business valuation expert witness hold?",
    a: "Look for ACA/FCA (ICAEW), ACCA, CFA, CVA, or RICS where property is material. Active professional practice, prior testimony experience, CPR Part 35 and FPR Part 25 knowledge, and professional indemnity insurance are essential.",
  },
  {
    q: "What is the Ikarian Reefer duty and how does it apply?",
    a: "Established in The Ikarian Reefer [1993], the expert's primary duty is to the court, not the instructing party. This is codified in CPR Part 35 and FPR Part 25. Experts must be independent, objective, and assist the court rather than advocate for their client - whether appointed as SJE or party expert.",
  },
  {
    q: "How early should I instruct a business valuation expert?",
    a: "Instruct as soon as the need for valuation is identified - early instruction allows better document gathering, joint expert meetings before trial, and compliance with court timetables. In family cases, obtain court permission before incurring fees where required under FPR Part 25.",
  },
  {
    q: "Can a business valuation expert be challenged (Daubert/CPR)?",
    a: "In UK civil proceedings, experts are challenged through cross-examination, criticism of methodology in joint statements, and CPR Part 35 compliance - not US Daubert hearings. Courts may exclude or discount evidence where the expert lacks independence, relevant expertise, or reliable methodology.",
  },
  {
    q: "What documents should I provide when instructing an expert?",
    a: "Typically three years audited accounts, management accounts, forecasts, board minutes, shareholders' agreement, partnership deed, prior valuations, and case-specific documents (Form E in family cases, disclosure in commercial litigation). A clear letter of instruction defining questions and scope is essential.",
  },
];
