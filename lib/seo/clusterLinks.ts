import { glossaryHref } from "@/lib/seo/glossaryAnchor";

export type ClusterLink = { href: string; label: string };

const STANDARD_PROCESS: ClusterLink[] = [
  { href: "/how-to-instruct", label: "How to instruct a valuation expert" },
  { href: "/contact", label: "Instruct an expert witness" },
];

const STANDARD_GLOSSARY_HUB: ClusterLink = {
  href: "/glossary",
  label: "Business valuation glossary",
};

function mergeLinks(...groups: ClusterLink[][]): ClusterLink[] {
  const seen = new Set<string>();
  const out: ClusterLink[] = [];
  for (const group of groups) {
    for (const link of group) {
      if (seen.has(link.href)) continue;
      seen.add(link.href);
      out.push(link);
    }
  }
  return out;
}

const CASE_TYPE_CLUSTER: Record<string, ClusterLink[]> = {
  "shareholder-dispute-s994": [
    { href: "/services#shareholder-dispute-s994", label: "S994 shareholder dispute valuations" },
    { href: "/guides/shareholder-disputes-valuation-guide", label: "S994 fair value valuation guide" },
    { href: glossaryHref("Companies Act 2006 S994"), label: "Glossary: Companies Act s994" },
    { href: glossaryHref("Fair Value (S994 context)"), label: "Glossary: fair value in S994" },
    { href: glossaryHref("Minority Discount"), label: "Glossary: minority discount" },
    { href: "/valuation-methods", label: "Business valuation methods UK" },
  ],
  "divorce-financial-remedy": [
    { href: "/services#matrimonial-divorce-valuation", label: "Matrimonial & divorce valuations (FPR Part 25)" },
    { href: "/guides/divorce-business-valuation-guide", label: "Divorce business valuation guide" },
    { href: "/sectors/professional-practices", label: "Professional practice valuations" },
    { href: glossaryHref("FPR Part 25"), label: "Glossary: FPR Part 25" },
    { href: glossaryHref("Goodwill (Personal vs Business)"), label: "Glossary: personal vs business goodwill" },
  ],
  "partnership-dissolution": [
    { href: "/services#partnership-llp", label: "Partnership & LLP valuations" },
    { href: "/sectors/professional-practices", label: "Professional practice sector" },
    { href: "/services#expert-determination", label: "Expert determination" },
  ],
  "commercial-litigation-breach-of-warranty": [
    { href: "/services#share-equity-valuation", label: "Share & equity valuation" },
    { href: glossaryHref("Diminution in Value"), label: "Glossary: diminution in value" },
    { href: "/sectors/technology-saas-digital-businesses", label: "Technology & SaaS valuations" },
  ],
  "insolvency-administration": [
    { href: "/services#insolvency-administration", label: "Insolvency & administration valuations" },
    { href: glossaryHref("Going Concern Value"), label: "Glossary: going concern value" },
    { href: glossaryHref("Wrongful Trading (S214)"), label: "Glossary: wrongful trading s214" },
    { href: glossaryHref("Transaction at Undervalue (S238)"), label: "Glossary: transaction at undervalue" },
  ],
  "tax-tribunal-hmrc-valuation": [
    { href: "/services#share-equity-valuation", label: "Share valuation for tax disputes" },
    { href: "/guides/hmrc-share-valuation-disputes", label: "HMRC share valuation expert guide" },
    { href: "/sectors/financial-services", label: "Financial services valuations" },
  ],
  "professional-negligence-accountant": [
    { href: glossaryHref("But-For Value"), label: "Glossary: but-for value" },
    { href: "/qualifications", label: "Expert witness qualifications" },
  ],
  "intellectual-property-valuation": [
    { href: "/services#intellectual-property-valuation", label: "IP valuation services" },
    { href: "/sectors/creative-media-ip-businesses", label: "Creative & media IP businesses" },
  ],
  "management-buyout-dispute": [
    { href: "/case-types/shareholder-dispute-s994", label: "Shareholder dispute valuations" },
    { href: "/services#share-equity-valuation", label: "Share & equity valuation" },
  ],
  "compulsory-purchase-goodwill": [
    { href: "/services#goodwill-intangible", label: "Goodwill valuation" },
    { href: "/sectors/retail-hospitality-leisure", label: "Retail & hospitality sector" },
  ],
};

const SECTOR_CLUSTER: Record<string, ClusterLink[]> = {
  "technology-saas-digital-businesses": [
    { href: "/case-types/shareholder-dispute-s994", label: "Shareholder dispute (S994)" },
    { href: "/case-types/commercial-litigation-breach-of-warranty", label: "M&A warranty disputes" },
    { href: "/case-types/tax-tribunal-hmrc-valuation", label: "HMRC share valuation disputes" },
    { href: "/services#share-equity-valuation", label: "Share & equity valuation" },
    { href: "/valuation-methods", label: "DCF and valuation methods" },
    { href: "/qualifications", label: "Expert qualifications" },
  ],
  "professional-practices": [
    { href: "/case-types/divorce-financial-remedy", label: "Divorce financial remedy" },
    { href: "/case-types/partnership-dissolution", label: "Partnership dissolution" },
    { href: "/services#partnership-llp", label: "Partnership valuations" },
    { href: "/valuation-methods", label: "Valuation methods" },
    { href: "/qualifications", label: "Qualifications" },
  ],
  "retail-hospitality-leisure": [
    { href: "/case-types/compulsory-purchase-goodwill", label: "Compulsory purchase & goodwill" },
    { href: "/case-types/insolvency-administration", label: "Insolvency valuations" },
    { href: "/valuation-methods", label: "Maintainable earnings methodology" },
    { href: "/qualifications", label: "Qualifications" },
  ],
  "property-companies": [
    { href: "/case-types/tax-tribunal-hmrc-valuation", label: "HMRC valuation disputes" },
    { href: glossaryHref("NAV (Net Asset Value)"), label: "Glossary: net asset value" },
    { href: "/valuation-methods", label: "NAV methodology" },
    { href: "/qualifications", label: "RICS & qualifications" },
  ],
  "manufacturing-distribution": [
    { href: "/case-types/insolvency-administration", label: "Insolvency & administration" },
    { href: "/case-types/shareholder-dispute-s994", label: "Shareholder disputes" },
    { href: "/services#share-equity-valuation", label: "Share valuation" },
    { href: "/valuation-methods", label: "Valuation methods" },
  ],
  "financial-services": [
    { href: "/case-types/tax-tribunal-hmrc-valuation", label: "HMRC / tax tribunal" },
    { href: "/case-types/commercial-litigation-breach-of-warranty", label: "Commercial litigation" },
    { href: "/services#share-equity-valuation", label: "Share valuation" },
    { href: "/valuation-methods", label: "Valuation methods" },
  ],
  "healthcare-dental-medical": [
    { href: "/case-types/divorce-financial-remedy", label: "Divorce business valuation" },
    { href: "/case-types/partnership-dissolution", label: "Partnership dissolution" },
    { href: "/sectors/professional-practices", label: "Professional practices" },
    { href: "/services#partnership-llp", label: "Partnership valuations" },
  ],
  "creative-media-ip-businesses": [
    { href: "/case-types/intellectual-property-valuation", label: "IP valuation litigation" },
    { href: "/services#intellectual-property-valuation", label: "IP valuation services" },
    { href: "/valuation-methods", label: "Relief from royalty & DCF" },
  ],
};

const GUIDE_CLUSTER: Record<string, ClusterLink[]> = {
  "shareholder-disputes-valuation-guide": [
    { href: "/guides", label: "All solicitor guides" },
    { href: "/case-types/shareholder-dispute-s994", label: "S994 shareholder dispute valuations" },
    { href: "/services#shareholder-dispute-s994", label: "Shareholder dispute service" },
    { href: "/qualifications", label: "CPR Part 35 qualifications" },
  ],
  "divorce-business-valuation-guide": [
    { href: "/guides", label: "All solicitor guides" },
    { href: "/case-types/divorce-financial-remedy", label: "Divorce financial remedy valuations" },
    { href: "/sectors/professional-practices", label: "Professional practice sector" },
    { href: "/qualifications", label: "FPR Part 25 compliance" },
  ],
  "dcf-maintainable-earnings-expert-guide": [
    { href: "/guides", label: "All solicitor guides" },
    { href: "/valuation-methods", label: "DCF, maintainable earnings & NAV" },
    { href: "/case-types/shareholder-dispute-s994", label: "Shareholder dispute valuations" },
    { href: glossaryHref("DCF (Discounted Cash Flow)"), label: "Glossary: DCF" },
  ],
  "single-joint-expert-business-valuation": [
    { href: "/guides", label: "All solicitor guides" },
    { href: "/how-to-instruct", label: "How to instruct an expert" },
    { href: glossaryHref("Single Joint Expert (SJE)"), label: "Glossary: SJE" },
    { href: glossaryHref("Party-Appointed Expert (PAE)"), label: "Glossary: party-appointed expert" },
    { href: "/qualifications", label: "Expert qualifications" },
  ],
  "hmrc-share-valuation-disputes": [
    { href: "/guides", label: "All solicitor guides" },
    { href: "/case-types/tax-tribunal-hmrc-valuation", label: "HMRC tax tribunal valuations" },
    { href: "/services#share-equity-valuation", label: "Share valuation service" },
    { href: "/qualifications", label: "Expert qualifications" },
  ],
  "instructing-expert-witness-letter": [
    { href: "/guides", label: "All solicitor guides" },
    { href: "/how-to-instruct", label: "Seven-step instruction process" },
    { href: "/fees", label: "Expert witness fees UK" },
    { href: "/qualifications", label: "Qualifications & CPR Part 35" },
  ],
};

export function getCaseTypeClusterLinks(slug: string): ClusterLink[] {
  return mergeLinks(
    CASE_TYPE_CLUSTER[slug] ?? [],
    [STANDARD_GLOSSARY_HUB],
    STANDARD_PROCESS,
  );
}

export function getSectorClusterLinks(slug: string): ClusterLink[] {
  return mergeLinks(SECTOR_CLUSTER[slug] ?? [], STANDARD_PROCESS);
}

export function getGuideClusterLinks(slug: string): ClusterLink[] {
  return mergeLinks(GUIDE_CLUSTER[slug] ?? [], STANDARD_PROCESS);
}

export const VALUATION_METHODS_CLUSTER: ClusterLink[] = [
  { href: "#dcf", label: "Discounted cash flow (DCF)" },
  { href: "#maintainable-earnings", label: "Maintainable earnings" },
  { href: "#nav", label: "Net asset value (NAV)" },
  { href: "/guides/dcf-maintainable-earnings-expert-guide", label: "DCF vs maintainable earnings guide" },
  { href: "/case-types", label: "All case types" },
  { href: "/case-types/shareholder-dispute-s994", label: "S994 shareholder disputes" },
  { href: "/case-types/divorce-financial-remedy", label: "Divorce financial remedy" },
  { href: "/case-types/insolvency-administration", label: "Insolvency valuations" },
  { href: "/sectors", label: "Sector specialist experts" },
  { href: "/sectors/technology-saas-digital-businesses", label: "Technology & SaaS" },
  { href: "/sectors/property-companies", label: "Property companies" },
  { href: "/sectors/manufacturing-distribution", label: "Manufacturing & distribution" },
  { href: glossaryHref("DCF (Discounted Cash Flow)"), label: "Glossary: DCF" },
  { href: glossaryHref("Maintainable Earnings"), label: "Glossary: maintainable earnings" },
  { href: glossaryHref("NAV (Net Asset Value)"), label: "Glossary: NAV" },
  { href: glossaryHref("WACC (Weighted Average Cost of Capital)"), label: "Glossary: WACC" },
  { href: glossaryHref("Fair Value (S994 context)"), label: "Glossary: fair value (S994)" },
];

export const HOMEPAGE_CLUSTER: ClusterLink[] = [
  { href: "/valuation-methods", label: "Business valuation methods UK" },
  { href: "/case-types", label: "Case types requiring an expert" },
  { href: "/sectors", label: "Sector specialist expert witnesses" },
  { href: "/what-is-a-business-valuation-expert-witness", label: "What is a business valuation expert witness?" },
  { href: "/guides", label: "Solicitor guides" },
  { href: "/faq", label: "Expert witness FAQ" },
  { href: "/contact", label: "Instruct an expert witness" },
];

export const WHAT_IS_CLUSTER: ClusterLink[] = [
  { href: "/qualifications", label: "CPR Part 35 & FPR Part 25 qualifications" },
  { href: "/how-to-instruct", label: "How to instruct a business valuation expert witness UK" },
  { href: "/services", label: "CPR Part 35 business valuation expert services" },
  { href: "/case-types/shareholder-dispute-s994", label: "S994 shareholder dispute valuations" },
  { href: "/case-types/divorce-financial-remedy", label: "Divorce business valuation expert witness" },
  { href: "/guides/single-joint-expert-business-valuation", label: "Single joint expert guide" },
  { href: "/contact", label: "Instruct an expert witness" },
];

export const SERVICES_PAGE_CLUSTER: ClusterLink[] = [
  { href: "/what-is-a-business-valuation-expert-witness", label: "Business valuation expert for court UK" },
  { href: "/valuation-methods", label: "DCF, maintainable earnings & NAV" },
  { href: "/case-types/shareholder-dispute-s994", label: "Shareholder dispute (S994) valuations" },
  { href: "/case-types/divorce-financial-remedy", label: "Matrimonial valuations (FPR Part 25)" },
  { href: "/case-types/tax-tribunal-hmrc-valuation", label: "HMRC share valuation disputes" },
  { href: "/how-to-instruct", label: "How to instruct an expert" },
  { href: "/fees", label: "Expert witness fees UK" },
  { href: "/contact", label: "Instruct an expert witness" },
];

export const CASE_TYPES_HUB_CLUSTER: ClusterLink[] = [
  { href: "/case-types/shareholder-dispute-s994", label: "S994 shareholder dispute expert witness" },
  { href: "/case-types/divorce-financial-remedy", label: "Divorce business valuation expert witness" },
  { href: "/case-types/tax-tribunal-hmrc-valuation", label: "HMRC tax tribunal valuations" },
  { href: "/case-types/insolvency-administration", label: "Insolvency valuations" },
  { href: "/services", label: "All valuation services" },
  { href: "/how-to-instruct", label: "How to instruct" },
  { href: "/contact", label: "Instruct an expert" },
];

export const SECTORS_HUB_CLUSTER: ClusterLink[] = [
  { href: "/sectors/technology-saas-digital-businesses", label: "Technology & SaaS valuations" },
  { href: "/sectors/professional-practices", label: "Professional practice valuations" },
  { href: "/sectors/healthcare-dental-medical", label: "Dental practice valuation expert witness" },
  { href: "/sectors/retail-hospitality-leisure", label: "Hotel & hospitality valuations" },
  { href: "/valuation-methods", label: "Valuation methods" },
  { href: "/contact", label: "Instruct a sector specialist" },
];

export const GUIDES_HUB_CLUSTER: ClusterLink[] = [
  { href: "/guides/shareholder-disputes-valuation-guide", label: "S994 valuation guide" },
  { href: "/guides/divorce-business-valuation-guide", label: "FPR Part 25 divorce guide" },
  { href: "/guides/dcf-maintainable-earnings-expert-guide", label: "DCF vs maintainable earnings" },
  { href: "/guides/hmrc-share-valuation-disputes", label: "HMRC share valuation disputes" },
  { href: "/how-to-instruct", label: "How to instruct" },
  { href: "/contact", label: "Instruct an expert" },
];

export const FAQ_PAGE_CLUSTER: ClusterLink[] = [
  { href: "/fees", label: "Business valuation expert witness fees UK" },
  { href: "/valuation-methods", label: "Business valuation methods UK litigation" },
  { href: "/guides/single-joint-expert-business-valuation", label: "Single joint expert business valuation UK" },
  { href: "/qualifications", label: "Expert witness qualifications" },
  { href: "/contact", label: "Instruct an expert" },
];
