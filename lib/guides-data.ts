import type { GuidePage } from "./types";
import { SITE_URL } from "./site";

export const GUIDES: GuidePage[] = [
  {
    slug: "shareholder-disputes-valuation-guide",
    pageTitle:
      "Business Valuation in Shareholder Disputes: S994 Petitions Explained",
    metaDescription:
      "Guide for UK solicitors on business valuation in Companies Act 2006 s994 unfair prejudice petitions - fair value, minority discount, joint experts.",
    hubLabel: "Shareholder Disputes Guide",
    h1: "Business Valuation in Shareholder Disputes: S994 Petitions Explained",
    aboutServiceId: `${SITE_URL}/services#shareholder-dispute-s994`,
    sections: [
      {
        h2: "Introduction to S994 and valuation",
        paragraphs: [
          "Companies Act 2006 section 994 allows shareholders to petition the court where the company's affairs are conducted in a manner unfairly prejudicial to their interests. When the court orders a buy-out of the petitioner's shares, valuation becomes the central financial issue - and both parties typically instruct business valuation expert witnesses.",
          "Unlike commercial transactions negotiated at arm's length, S994 valuations are governed by the legal concept of fair value. This is not always synonymous with fair market value, and UK courts have repeatedly held that minority discounts may be inappropriate where unfair prejudice is established.",
        ],
      },
      {
        h2: "Fair value standard",
        paragraphs: [
          "Fair value in unfair prejudice cases generally requires valuing the petitioner's shares as a proportionate share of the whole company's value, without applying a minority discount that would reward the oppressor. The expert must understand the court's directions - some orders specify the valuation basis explicitly.",
          "Expert witnesses justify their methodology in CPR Part 35 compliant reports. Maintainable earnings multiples are common for trading companies; NAV may apply where the company is asset-backed; DCF is used where growth projections are reliable and contested.",
        ],
        h3: [
          {
            title: "Minority discount debate",
            paragraphs: [
              "The minority discount reflects lack of control. In S994 cases, respondents often argue for a discount; petitioners argue for pro-rata fair value. Joint expert meetings frequently focus on this single issue. Experts must cite relevant case law and explain their position clearly for non-specialist judges.",
            ],
          },
        ],
      },
      {
        h2: "Joint expert process",
        paragraphs: [
          "In High Court proceedings, party-appointed experts are standard. Under CPR Practice Direction 35, experts must meet, identify agreed facts and methodology, and produce a joint statement listing remaining disputes before trial. Oral evidence at trial is confined largely to disputed areas.",
          "Single Joint Experts are possible in lower-value cases or where the court directs joint instruction under CPR 35.7. Costs are shared but both parties may put written questions to the SJE.",
        ],
      },
      {
        h2: "Practical steps for solicitors",
        paragraphs: [
          "Instruct experts early with a clear letter of instruction defining the valuation date, share class, and questions to address. Provide three years accounts, shareholders' agreement, and any prior offers or valuations. Consider sector specialists for technology, professional practices, or property holding companies.",
          "Review our case type page on shareholder disputes and our valuation methods guide for methodology context before drafting directions or consenting to joint expert appointment.",
        ],
      },
    ],
  },
  {
    slug: "divorce-business-valuation-guide",
    pageTitle:
      "Business Valuation in Divorce Proceedings: FPR Part 25 Guide",
    metaDescription:
      "FPR Part 25 business valuation guide for financial remedy proceedings - Form E, personal goodwill, add-backs, SJE.",
    hubLabel: "Divorce Valuation Guide",
    h1: "Business Valuation in Divorce Proceedings: FPR Part 25 Guide",
    aboutServiceId: `${SITE_URL}/services#matrimonial-divorce-valuation`,
    sections: [
      {
        h2: "Financial remedy and business assets",
        paragraphs: [
          "In divorce financial remedy proceedings, a spouse's interest in a company is a matrimonial asset subject to sharing principles under the Matrimonial Causes Act 1973. The Family Procedure Rules Part 25 govern how valuation experts are instructed, what their reports must contain, and their duty to the court.",
          "Court permission may be required before instructing an expert in family proceedings - check the current practice direction and case management directions before incurring fees.",
        ],
      },
      {
        h2: "FPR Part 25 requirements",
        paragraphs: [
          "Expert reports must be independent, address the questions in the letter of instruction, and comply with FPR Part 25 and Practice Direction 25A. The expert's primary duty is to the court, mirroring CPR Part 35 principles established in The Ikarian Reefer.",
          "Form E disclosure should include business accounts, tax returns, and commentary on company value. Experts often receive incomplete information - the letter of instruction should specify what further disclosure is required.",
        ],
      },
      {
        h2: "Personal goodwill and add-backs",
        paragraphs: [
          "Courts frequently exclude personal goodwill - value tied to one spouse's reputation and skills - on the basis it would not transfer on sale. Experts must analyse whether goodwill is personal, business, or mixed, with clear reasoning.",
          "Add-back arguments address excessive salary, perks, or unexplained drawings treated as available income. Normalisation adjustments must be evidenced and reasonable; contested add-backs are a common source of expert disagreement.",
        ],
      },
      {
        h2: "SJE in family cases",
        paragraphs: [
          "Single Joint Experts under FPR 25.11 can reduce costs where both parties agree or the court directs joint instruction. Written questions may be put to the SJE. Party-appointed experts remain common in high-net-worth cases with complex corporate structures.",
          "Link matrimonial valuation to sector guides for professional practices and technology businesses where standard EBITDA multiples may not apply.",
        ],
      },
    ],
  },
  {
    slug: "dcf-maintainable-earnings-expert-guide",
    pageTitle: "DCF vs Maintainable Earnings: Which Method Courts Prefer",
    metaDescription:
      "UK litigation guide comparing DCF and maintainable earnings - WACC disputes, multiple selection, judicial practice.",
    hubLabel: "DCF vs Earnings Guide",
    h1: "DCF vs Maintainable Earnings: Which Method Courts Prefer",
    aboutServiceId: `${SITE_URL}/valuation-methods`,
    sections: [
      {
        h2: "No single prescribed method",
        paragraphs: [
          "UK courts do not mandate one valuation method for all businesses. Expert witnesses must select the method most appropriate to the company, purpose of valuation, and available data - then justify that choice in their report.",
          "Disputes between experts often arise not from which method category is used, but from assumptions within that method: growth rates and WACC in DCF; normalised earnings and multiple selection in capitalisation of earnings.",
        ],
      },
      {
        h2: "When DCF is appropriate",
        paragraphs: [
          "DCF suits growing companies with reliable forecasts - technology, SaaS, and professional services with contracted recurring revenue. It is forward-looking and captures growth potential but is highly sensitive to assumptions, making it contentious in adversarial litigation.",
          "WACC calculation requires defensible cost of equity (often CAPM-based), cost of debt, and capital structure. Terminal value using Gordon Growth or exit multiples is frequently the largest disputed component.",
        ],
      },
      {
        h2: "When maintainable earnings is appropriate",
        paragraphs: [
          "Established SMEs with stable historic earnings are often valued using normalised EBIT or EBITDA multiplied by a sector-appropriate multiple. The method is market-referenced and intuitive for courts, but multiple selection remains subjective.",
          "Normalisation for owner remuneration, one-off costs, and related party transactions is critical. Experts should show adjusted earnings bridges clearly in reports.",
        ],
      },
      {
        h2: "Judicial scrutiny",
        paragraphs: [
          "Judges may prefer simpler methods where assumptions in DCF are speculative. Conversely, courts accept DCF where forecasts are supported by contracts and historic performance. Experts should present sensitivity analysis for key assumptions.",
          "See our valuation methods page for step-by-step methodology tables and fair value versus fair market value in S994 contexts.",
        ],
      },
    ],
  },
  {
    slug: "single-joint-expert-business-valuation",
    pageTitle: "Single Joint Expert in Business Valuation: A Solicitor's Guide",
    metaDescription:
      "CPR 35.7 and FPR 25.11 guide to Single Joint Experts in business valuation - joint instruction, written questions, pros and cons.",
    hubLabel: "SJE Guide",
    h1: "Single Joint Expert in Business Valuation: A Solicitor's Guide",
    aboutServiceId: `${SITE_URL}/services#share-equity-valuation`,
    sections: [
      {
        h2: "What is a Single Joint Expert?",
        paragraphs: [
          "A Single Joint Expert (SJE) is one expert instructed jointly by both parties - or appointed by the court - to provide a single valuation report shared by all parties. In business valuation disputes, SJEs are used in civil proceedings under CPR 35.7 and family proceedings under FPR 25.11.",
          "The SJE owes duties to both parties and the court. Costs are typically shared equally unless the court orders otherwise.",
        ],
      },
      {
        h2: "When courts order SJE appointment",
        paragraphs: [
          "Courts favour SJEs where expert costs would be disproportionate, issues are narrow, or parties agree on joint instruction. Case management directions may specify the expert's identity or require parties to agree a shortlist.",
          "High-value shareholder disputes and complex M&A litigation more often feature party-appointed experts with joint meetings - but SJE remains available where appropriate.",
        ],
      },
      {
        h2: "Joint letter of instruction",
        paragraphs: [
          "Both parties should agree a joint letter of instruction defining scope, valuation date, documents, questions, timetable, and fee arrangements. Disputes over instruction should be referred to the court promptly - experts should not proceed on conflicting instructions.",
        ],
      },
      {
        h2: "Written questions and limitations",
        paragraphs: [
          "Parties may put written questions to the SJE after the report. The SJE is not an advocate for either side - if the report is unfavourable, challenge through cross-examination or criticism of methodology, not improper pressure on the expert.",
          "Compare SJE versus party-appointed experts on cost, control, and adversarial testing when deciding instruction strategy at the outset of litigation.",
        ],
      },
    ],
  },
  {
    slug: "hmrc-share-valuation-disputes",
    pageTitle: "HMRC Share Valuation Disputes: Expert Witness Guide",
    metaDescription:
      "SAV process, IHT, CGT, employment-related securities, and First-tier Tribunal expert evidence for HMRC valuation disputes.",
    hubLabel: "HMRC Valuation Guide",
    h1: "HMRC Share Valuation Disputes: Expert Witness Guide",
    aboutServiceId: `${SITE_URL}/services#share-equity-valuation`,
    sections: [
      {
        h2: "Shares and Assets Valuation (SAV)",
        paragraphs: [
          "HMRC's Shares and Assets Valuation team provides valuations for tax purposes including Inheritance Tax, Capital Gains Tax, and employment-related securities. Taxpayers may accept SAV's valuation, negotiate, or challenge via tribunal with independent expert evidence.",
          "Expert witnesses prepare open market value analyses using DCF, earnings multiples, or NAV consistent with the tax charge in question.",
        ],
      },
      {
        h2: "Common tax scenarios",
        paragraphs: [
          "Inheritance Tax disputes often involve business property relief - whether a company qualifies and the open market value of shares if relief is restricted. CGT on private company disposals requires valuation at disposal date. ITEPA 2003 covers restricted shares, EMI options, and growth shares.",
          "Section 431 elections and corporate reorganisations may trigger valuation disagreements requiring specialist input.",
        ],
      },
      {
        h2: "First-tier Tribunal (Tax Chamber)",
        paragraphs: [
          "Unresolved disputes proceed to the First-tier Tribunal. Expert witnesses give written reports and may attend hearing. Tribunals assess methodology and assumptions - clear explanation for non-specialist members is essential.",
        ],
      },
      {
        h2: "Working with solicitors and HMRC",
        paragraphs: [
          "Early expert involvement can support without prejudice negotiation with SAV before litigation. Ensure the expert understands the statutory valuation standard applicable to each tax - open market value definitions may differ from fair value in company law contexts.",
        ],
      },
    ],
  },
  {
    slug: "instructing-expert-witness-letter",
    pageTitle:
      "How to Draft a Letter of Instruction to a Business Valuation Expert Witness",
    metaDescription:
      "Letter of instruction checklist for UK solicitors - scope, questions, documents, fees, CPR Part 35 and FPR Part 25.",
    hubLabel: "Letter of Instruction Guide",
    h1: "How to Draft a Letter of Instruction to a Business Valuation Expert Witness",
    aboutServiceId: `${SITE_URL}/how-to-instruct`,
    sections: [
      {
        h2: "Purpose of the letter",
        paragraphs: [
          "The letter of instruction defines the expert's mandate, questions to answer, documents provided, timetable, and fee basis. It forms part of the expert's report appendix and may be scrutinised by the court and opposing party.",
          "In joint expert cases, both parties should sign a joint letter to avoid scope disputes.",
        ],
      },
      {
        h2: "Essential contents",
        paragraphs: [
          "Include: parties and proceedings reference; expert's duty to the court under CPR Part 35 or FPR Part 25; background facts (neutral, not argumentative); valuation date and share class; specific questions; list of documents; whether SJE or party expert; timetable for report and meetings; fee arrangement and cap if agreed.",
        ],
      },
      {
        h2: "Questions to address",
        paragraphs: [
          "Good questions are specific: What was the fair value of X ordinary shares on [date]? What methodology do you adopt and why? What is personal versus business goodwill? What normalisation adjustments do you apply? Avoid asking the expert to opine on legal conclusions.",
        ],
      },
      {
        h2: "Documents to provide",
        paragraphs: [
          "Provide three years audited accounts, management accounts, forecasts, shareholders' agreement, board minutes, prior valuations, and pleadings where appropriate. In family cases include Form E and replies. Flag incomplete disclosure so the expert can note limitations in the report.",
          "See our how to instruct page for the full seven-step process from identifying legal context to document production.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string): GuidePage | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
