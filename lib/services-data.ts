export type ServicePhase = {
  phase: string;
  whatWeDo: string;
  deliverable: string;
};

export type Service = {
  id: string;
  anchor: string;
  title: string;
  summary: string;
  content: string;
  phases: ServicePhase[];
  caseTypeLink?: { href: string; label: string };
};

export const SERVICES: Service[] = [
  {
    id: "share-equity-valuation",
    anchor: "share-equity-valuation",
    title: "Share & Equity Valuation",
    summary:
      "Minority and majority shareholding valuations for litigation, tax, and corporate disputes.",
    content:
      "Our experts value minority and majority shareholdings using DCF, maintainable earnings, or NAV as appropriate. We address fair value versus fair market value, control premiums and minority discounts, HMRC share valuation disputes, and comparable company analysis for private and listed businesses.",
    phases: [
      {
        phase: "Financial Review",
        whatWeDo: "Analyse 3 years audited accounts + management accounts",
        deliverable: "Financial model",
      },
      {
        phase: "Method Selection",
        whatWeDo: "Apply DCF, maintainable earnings, or NAV as appropriate",
        deliverable: "Methodology justification",
      },
      {
        phase: "Comparable Analysis",
        whatWeDo: "Market comparables, sector multiples, precedent transactions",
        deliverable: "Valuation range",
      },
      {
        phase: "Report",
        whatWeDo: "CPR Part 35 / FPR Part 25 compliant expert report",
        deliverable: "Court-ready report",
      },
    ],
    caseTypeLink: {
      href: "/case-types/shareholder-dispute-s994",
      label: "Shareholder disputes (S994)",
    },
  },
  {
    id: "matrimonial-divorce-valuation",
    anchor: "matrimonial-divorce-valuation",
    title: "Matrimonial & Divorce Valuations (FPR Part 25)",
    summary:
      "Business assets in financial remedy proceedings with FPR Part 25 compliant reporting.",
    content:
      "We value businesses as matrimonial assets in financial remedy proceedings, Schedule 1 claims, and separation disputes. Experts address personal versus business goodwill, add-back arguments, hidden income in owner-managed companies, Form E disclosure, and realistic realisable value for the Family Court.",
    phases: [
      {
        phase: "Disclosure Review",
        whatWeDo: "Analyse Form E, accounts, and management information",
        deliverable: "Asset schedule",
      },
      {
        phase: "Normalisation",
        whatWeDo: "Adjust earnings for owner drawings and one-off items",
        deliverable: "Maintainable earnings analysis",
      },
      {
        phase: "Goodwill Split",
        whatWeDo: "Assess personal vs transferable goodwill",
        deliverable: "Goodwill allocation memo",
      },
      {
        phase: "Report",
        whatWeDo: "FPR Part 25 compliant expert report",
        deliverable: "Court-ready report",
      },
    ],
    caseTypeLink: {
      href: "/case-types/divorce-financial-remedy",
      label: "Divorce financial remedy",
    },
  },
  {
    id: "shareholder-dispute-s994",
    anchor: "shareholder-dispute-s994",
    title: "Shareholder Dispute Valuations (S994)",
    summary:
      "Fair value valuations for Companies Act 2006 unfair prejudice petitions.",
    content:
      "Experts value shares in s994 unfair prejudice petitions at fair value - typically without minority discount. We support joint expert meetings, joint statements under CPR PD35, and High Court Chancery Division trials where petitioner and respondent valuations diverge.",
    phases: [
      {
        phase: "Case Analysis",
        whatWeDo: "Review petition, defence, and prejudice allegations",
        deliverable: "Valuation brief",
      },
      {
        phase: "Fair Value Assessment",
        whatWeDo: "Apply court-directed valuation standard",
        deliverable: "Proportionate share valuation",
      },
      {
        phase: "Joint Expert Process",
        whatWeDo: "Meet opposing expert and prepare joint statement",
        deliverable: "Agreed/disputed issues schedule",
      },
      {
        phase: "Report",
        whatWeDo: "CPR Part 35 compliant report and oral evidence",
        deliverable: "Court-ready report",
      },
    ],
    caseTypeLink: {
      href: "/case-types/shareholder-dispute-s994",
      label: "S994 petitions",
    },
  },
  {
    id: "goodwill-intangible",
    anchor: "goodwill-intangible",
    title: "Goodwill & Intangible Asset Valuation",
    summary:
      "Personal and business goodwill, brands, and customer relationship valuations.",
    content:
      "We distinguish personal versus business goodwill, value brands and customer relationships, assess non-compete agreement value, and support HMRC goodwill disputes on incorporation and corporate restructuring.",
    phases: [
      {
        phase: "Intangible Identification",
        whatWeDo: "Map goodwill and intangible assets",
        deliverable: "Asset register",
      },
      {
        phase: "Method Selection",
        whatWeDo: "Earnings, market, or cost approach as appropriate",
        deliverable: "Methodology paper",
      },
      {
        phase: "Valuation",
        whatWeDo: "Quantify goodwill and intangibles",
        deliverable: "Valuation conclusion",
      },
      {
        phase: "Report",
        whatWeDo: "Litigation-ready expert report",
        deliverable: "Court-ready report",
      },
    ],
    caseTypeLink: {
      href: "/case-types/partnership-dissolution",
      label: "Partnership dissolution",
    },
  },
  {
    id: "intellectual-property-valuation",
    anchor: "intellectual-property-valuation",
    title: "Intellectual Property Valuation",
    summary:
      "Patents, trade marks, copyright, and brand valuations for UK litigation.",
    content:
      "Experts value patents, trade marks, and copyrights using relief from royalty and lost profits methods. We support IP infringement claims, IP as business assets in divorce, and dissolution where IP ownership is disputed.",
    phases: [
      {
        phase: "IP Audit",
        whatWeDo: "Identify owned and licensed IP rights",
        deliverable: "IP schedule",
      },
      {
        phase: "Royalty Analysis",
        whatWeDo: "Relief from royalty or lost profits modelling",
        deliverable: "Cash flow model",
      },
      {
        phase: "Market Evidence",
        whatWeDo: "Comparable licences and transactions",
        deliverable: "Benchmark analysis",
      },
      {
        phase: "Report",
        whatWeDo: "CPR Part 35 compliant IP valuation report",
        deliverable: "Court-ready report",
      },
    ],
    caseTypeLink: {
      href: "/case-types/intellectual-property-valuation",
      label: "IP litigation",
    },
  },
  {
    id: "insolvency-administration",
    anchor: "insolvency-administration",
    title: "Insolvency & Administration Valuations",
    summary:
      "Going concern vs break-up value, wrongful trading, and transaction avoidance.",
    content:
      "We value businesses in administration and liquidation, assess going concern versus forced sale value, support wrongful trading claims under IA 1986 s214, and analyse transactions at undervalue and preference payments.",
    phases: [
      {
        phase: "Solvency Review",
        whatWeDo: "Analyse financial position at key dates",
        deliverable: "Solvency timeline",
      },
      {
        phase: "Dual Valuation",
        whatWeDo: "Going concern and break-up scenarios",
        deliverable: "Value range",
      },
      {
        phase: "Transaction Review",
        whatWeDo: "Assess antecedent transactions",
        deliverable: "Transaction analysis",
      },
      {
        phase: "Report",
        whatWeDo: "Expert report for court or insolvency practitioner",
        deliverable: "Court-ready report",
      },
    ],
    caseTypeLink: {
      href: "/case-types/insolvency-administration",
      label: "Insolvency proceedings",
    },
  },
  {
    id: "partnership-llp",
    anchor: "partnership-llp",
    title: "Partnership & LLP Valuations",
    summary:
      "Goodwill on retirement, LLP interests, and professional practice multiples.",
    content:
      "Experts value partnership and LLP interests on retirement, dissolution, or expulsion. We address salaried versus equity partners, restrictive covenant value, and sector-specific multiples for law, accountancy, and medical practices.",
    phases: [
      {
        phase: "Deed Review",
        whatWeDo: "Analyse partnership/LLP agreement terms",
        deliverable: "Rights and obligations memo",
      },
      {
        phase: "Earnings Analysis",
        whatWeDo: "Normalise partner drawings and firm earnings",
        deliverable: "Maintainable earnings",
      },
      {
        phase: "Interest Valuation",
        whatWeDo: "Value partnership/LLP interest",
        deliverable: "Interest value conclusion",
      },
      {
        phase: "Report",
        whatWeDo: "Expert determination or court report",
        deliverable: "Court-ready report",
      },
    ],
    caseTypeLink: {
      href: "/case-types/partnership-dissolution",
      label: "Partnership dissolution",
    },
  },
  {
    id: "expert-determination",
    anchor: "expert-determination",
    title: "Expert Determination",
    summary:
      "Non-litigated valuations under shareholders' agreements and ICAEW schemes.",
    content:
      "We support binding and non-binding expert determination under shareholders' agreements, partnership deeds, and ICAEW appointment schemes - providing independent valuations without full court proceedings where parties have agreed a determination mechanism.",
    phases: [
      {
        phase: "Mandate Review",
        whatWeDo: "Confirm determination clause and scope",
        deliverable: "Terms of reference",
      },
      {
        phase: "Valuation",
        whatWeDo: "Apply agreed methodology",
        deliverable: "Determination valuation",
      },
      {
        phase: "Determination",
        whatWeDo: "Issue binding or non-binding determination",
        deliverable: "Determination award",
      },
      {
        phase: "Documentation",
        whatWeDo: "Full reasoning and supporting analysis",
        deliverable: "Determination report",
      },
    ],
    caseTypeLink: {
      href: "/how-to-instruct",
      label: "How to instruct",
    },
  },
];

export const serviceSlugs = SERVICES.map((s) => s.anchor);

/** Short label for navigation menus */
export function serviceNavLabel(title: string): string {
  return title.replace(/ \(.*\)$/, "").trim();
}

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.anchor === slug || s.id === slug);
}
