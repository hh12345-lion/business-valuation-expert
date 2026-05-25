import type { ContentPage } from "./types";
export const SECTORS: ContentPage[] = [
  {
    slug: "technology-saas-digital-businesses",
    pageTitle: "Technology & SaaS Business Valuation Expert Witness UK",
    metaDescription:
      "Expert witness valuations for UK technology, SaaS, and digital businesses — ARR multiples, churn, DCF, option pool dilution.",
    hubLabel: "Technology / SaaS",
    h1: "Technology & SaaS Business Valuation Expert Witness UK",
    paragraphs: [
      "Technology and SaaS businesses present distinct valuation challenges in UK litigation: recurring revenue quality, churn and net revenue retention, customer acquisition costs, and the durability of subscription income all drive whether ARR multiples or DCF is appropriate.",
      "Expert witnesses analyse revenue recognition policies, option pool dilution, and IP-heavy balance sheets where intangible assets dominate. Disputes arise in shareholder conflicts between co-founders, M&A warranty claims where ARR was misrepresented, matrimonial cases, and HMRC employment-related securities valuations.",
      "UK courts do not mandate a single method — experts must justify assumptions on growth rates, WACC, and terminal value, which are frequently contested between party-appointed experts.",
    ],
    faq: [
      {
        q: "How are SaaS businesses valued for litigation in the UK?",
        a: "SaaS and subscription businesses are typically valued using revenue multiples (EV/ARR) or DCF based on projected recurring revenue. Expert witnesses analyse churn rates, net revenue retention, customer acquisition costs, and the durability of recurring revenue — all of which affect the appropriate multiple or growth assumption.",
      },
      {
        q: "What disputes commonly arise in technology company valuations?",
        a: "Technology valuation disputes arise in shareholder disputes (where co-founders disagree on company value); M&A warranty claims (where ARR was misrepresented); divorce proceedings (where a technology business is a matrimonial asset); and HMRC share option disputes (EMI scheme valuations).",
      },
    ],
    sectorMultiples: [
      {
        sector: "SaaS / subscription",
        typicalMultiple: "EV/ARR 3×–8×+ (stage-dependent)",
        notes: "Churn, NRR, and revenue quality drive range in litigation",
      },
      {
        sector: "Growth tech (DCF)",
        typicalMultiple: "DCF-led; WACC and terminal value heavily contested",
        notes: "Party experts often disagree on forecast assumptions",
      },
    ],
    relatedLinks: [
      { href: "/valuation-methods", label: "DCF methodology" },
      { href: "/case-types/shareholder-dispute-s994", label: "Shareholder disputes" },
      { href: "/services#share-equity-valuation", label: "Share valuation" },
    ],
  },
  {
    slug: "professional-practices",
    pageTitle: "Professional Practice Business Valuation Expert Witness UK",
    metaDescription:
      "Law firm, dental, GP, and accountancy practice valuations — personal goodwill, fee income multiples, restrictive covenants.",
    hubLabel: "Professional Practices",
    h1: "Professional Practice Business Valuation Expert Witness UK",
    paragraphs: [
      "Professional practices are valued primarily on recurring fee income or patient and client lists, not generic EBITDA multiples. The critical litigation issue is personal versus transferable goodwill — value attributable to an individual partner may not survive a sale and may be excluded in divorce or dissolution.",
      "Restrictive covenant enforceability and value feature heavily in partnership retirement and dissolution disputes. Regulatory constraints on ownership (SRA, GDC, ICAEW) affect marketability and the pool of potential purchasers.",
      "Experts benchmark against sector transaction data: dental practices often trade at 0.7–1.2× annual fee income; accountancy practices at 0.75–1.5× recurring fees; law firms require detailed WIP and client concentration analysis.",
    ],
    faq: [
      {
        q: "How is a professional practice valued differently from a trading company?",
        a: "Professional practices (law firms, dental practices, GP surgeries, accountancy firms) are valued primarily on recurring fee income or patient/client lists. Key issues are: how much goodwill is personal (and therefore lost on sale) vs transferable; the enforceability and value of restrictive covenants; and sector-specific regulatory constraints on ownership.",
      },
      {
        q: "What multiples are used for professional practice valuations?",
        a: "Multiples vary significantly by profession: dental practices typically sell at 0.7–1.2× annual fee income; accountancy practices at 0.75–1.5× recurring fees; law firms are more complex given WIP, client concentration, and regulatory constraints. Expert witnesses benchmark against comparable transaction data and published sector surveys.",
      },
    ],
    sectorMultiples: [
      {
        sector: "Dental practice",
        typicalMultiple: "0.7×–1.2× annual fee income",
        notes: "NHS/private mix, lease, and personal goodwill",
      },
      {
        sector: "Accountancy practice",
        typicalMultiple: "0.75×–1.5× recurring fees",
        notes: "Client concentration and WIP affect multiple",
      },
      {
        sector: "Law firm",
        typicalMultiple: "Case-specific / earnings-based",
        notes: "WIP, regulatory constraints; often no simple multiple",
      },
    ],
    relatedLinks: [
      { href: "/case-types/partnership-dissolution", label: "Partnership dissolution" },
      { href: "/case-types/divorce-financial-remedy", label: "Divorce valuations" },
      { href: "/services#partnership-llp", label: "Partnership valuations" },
    ],
  },
  {
    slug: "retail-hospitality-leisure",
    pageTitle: "Retail, Hospitality & Leisure Business Valuation Expert Witness UK",
    metaDescription:
      "Site-specific trading valuations, IFRS 16 leases, COVID earnings normalisation, hospitality EBITDA disputes.",
    hubLabel: "Retail / Hospitality",
    h1: "Retail, Hospitality & Leisure Business Valuation Expert Witness UK",
    paragraphs: [
      "Retail and hospitality businesses are site-specific: location, lease terms, and local competition drive value as much as headline EBITDA. IFRS 16 right-of-use assets and lease liabilities require experts to address whether EBITDA or EBITDAR is the appropriate earnings measure.",
      "Litigation involving pandemic-period accounts demands clear normalisation — adjusting for forced closures, furlough, bounce-back loans, and recovery trajectories. Courts require justification of why historic COVID-era earnings are or are not representative of maintainable future earnings.",
      "Compulsory purchase, lease renewal, and landlord-tenant disputes may also require goodwill valuation for extinguished or relocated businesses.",
    ],
    faq: [
      {
        q: "How does COVID affect retail and hospitality valuations in litigation?",
        a: "For businesses valued in or around the pandemic period, expert witnesses must normalise earnings — adjusting for forced closures, furlough income, bounce-back loan distortions, and the subsequent recovery. Courts require a clear explanation of why historic earnings during COVID are or are not representative of maintainable future earnings.",
      },
      {
        q: "What role do leases play in hospitality valuations?",
        a: "Under IFRS 16, long leases appear on the balance sheet as right-of-use assets and lease liabilities. Expert witnesses must address whether EBITDA or EBITDAR is the appropriate earnings measure and how lease terms affect the business's value compared to freehold alternatives.",
      },
    ],
    sectorMultiples: [
      {
        sector: "Hospitality / hotel (UK)",
        typicalMultiple: "EBITDA 4×–8× (lease-adjusted); EBITDAR where IFRS 16 applies",
        notes: "Site-specific; long leases reduce marketable value",
      },
      {
        sector: "Retail (multi-site)",
        typicalMultiple: "Maintainable earnings × sector multiple",
        notes: "COVID-era earnings require normalisation in litigation",
      },
    ],
    relatedLinks: [
      { href: "/case-types/compulsory-purchase-goodwill", label: "Compulsory purchase" },
      { href: "/valuation-methods", label: "Maintainable earnings" },
      { href: "/services#insolvency-administration", label: "Insolvency valuations" },
    ],
  },
  {
    slug: "property-companies",
    pageTitle: "Property Company Business Valuation Expert Witness UK",
    metaDescription:
      "NAV valuations for property SPVs, RICS Red Book, SDLT and CGT discounts, investment vs trading companies.",
    hubLabel: "Property Companies",
    h1: "Property Company Business Valuation Expert Witness UK",
    paragraphs: [
      "Property investment companies and SPVs are typically valued on a Net Asset Value basis: underlying properties are valued by RICS-qualified surveyors, with net equity after debt and latent tax liabilities representing business value.",
      "Shares in property companies often trade at a discount to NAV reflecting lack of marketability, latent stamp duty land tax on property acquisition, and capital gains tax on unrealised gains. Experts quantify the appropriate discount for litigation and tax disputes.",
      "The distinction between property trading companies (stock in trade) and investment holding companies affects tax treatment and methodology — critical in HMRC and shareholder disputes.",
    ],
    faq: [
      {
        q: "How are property investment companies valued for litigation?",
        a: "Property investment companies (SPVs, property holding companies) are typically valued on a Net Asset Value basis — the underlying properties are valued by an RICS-qualified surveyor and the business value is the net equity after deducting debt and latent tax liabilities.",
      },
      {
        q: "What is the discount for shares vs direct property?",
        a: "Shares in a property company typically trade at a discount to NAV — reflecting lack of marketability, latent SDLT on property acquisition, and capital gains tax on unrealised gains. Expert witnesses quantify the appropriate discount based on comparable data and the specific structure of the company.",
      },
    ],
    sectorMultiples: [
      {
        sector: "Property SPV / investment co.",
        typicalMultiple: "NAV (RICS Red Book properties)",
        notes: "Share discount to NAV often 10%–30%+ for latent tax/illiquidity",
      },
      {
        sector: "Property trading company",
        typicalMultiple: "Stock-in-trade / earnings hybrid",
        notes: "Tax treatment differs from investment holding",
      },
    ],
    relatedLinks: [
      { href: "/valuation-methods", label: "NAV methodology" },
      { href: "/qualifications", label: "RICS qualifications" },
      { href: "/case-types/tax-tribunal-hmrc-valuation", label: "HMRC disputes" },
    ],
  },
  {
    slug: "manufacturing-distribution",
    pageTitle: "Manufacturing & Distribution Business Valuation Expert Witness UK",
    metaDescription:
      "Asset-heavy valuations, working capital normalisation, customer concentration, capex adjustments.",
    hubLabel: "Manufacturing / Distribution",
    h1: "Manufacturing & Distribution Business Valuation Expert Witness UK",
    paragraphs: [
      "Manufacturing and distribution businesses often require a hybrid approach: maintainable earnings multiples combined with net asset value where plant, machinery, and inventory are material. Working capital normalisation and maintenance versus growth capex are frequent areas of expert disagreement.",
      "Customer concentration risk — for example a single customer representing over half of revenue — reduces the applicable multiple unless long-term contracts and switching costs mitigate the risk. Supply chain disruption evidence may affect maintainable earnings assumptions.",
      "Experts assess replacement cost of assets and whether earnings yield supports asset-backed value, particularly in insolvency and shareholder disputes.",
    ],
    faq: [
      {
        q: "What valuation method is used for manufacturing businesses?",
        a: "Manufacturing and distribution businesses are typically valued using a combination of maintainable earnings (EBITDA × sector multiple) and net asset value — particularly where significant plant, machinery, and inventory exists. Expert witnesses assess the replacement cost of assets and whether the earnings yield supports the asset value.",
      },
      {
        q: "How is customer concentration treated in manufacturing valuations?",
        a: "High customer concentration (e.g. one customer representing 50%+ of revenue) is treated as a risk factor that reduces the applicable multiple. Expert witnesses analyse contract duration, switching costs, and historic retention rates to assess the real risk and its impact on value.",
      },
    ],
    sectorMultiples: [
      {
        sector: "Manufacturing SME",
        typicalMultiple: "EV/EBITDA 4×–7× (sector-dependent)",
        notes: "Often cross-checked against NAV for asset-heavy plants",
      },
      {
        sector: "Distribution",
        typicalMultiple: "EV/EBITDA 3×–6×",
        notes: "Customer concentration reduces multiple",
      },
    ],
    relatedLinks: [
      { href: "/valuation-methods", label: "Valuation methods" },
      { href: "/case-types/insolvency-administration", label: "Insolvency" },
      { href: "/services#share-equity-valuation", label: "Share valuation" },
    ],
  },
  {
    slug: "financial-services",
    pageTitle: "Financial Services Business Valuation Expert Witness UK",
    metaDescription:
      "Wealth management, IFA, and FCA-regulated business valuations — AUM multiples, trail commission, regulatory transfer risk.",
    hubLabel: "Financial Services",
    h1: "Financial Services Business Valuation Expert Witness UK",
    paragraphs: [
      "Wealth management, IFA, and insurance brokerage businesses are valued on recurring assets under management, trail commission, or renewal income — typically as a percentage of AUM or a multiple of recurring revenue. Client retention, adviser age profile, and FCA change-of-control constraints materially affect value.",
      "FCA authorisation cannot be freely transferred; buyers must obtain their own permissions or regulatory approval, creating uncertainty that experts must reflect compared with unregulated trading businesses.",
      "Regulatory capital requirements and contingent liabilities from past advice may require balance sheet adjustments in NAV-style analyses.",
    ],
    faq: [
      {
        q: "How are wealth management businesses valued for litigation?",
        a: "Wealth management and IFA businesses are primarily valued on recurring assets under management (AUM) — typically as a percentage of AUM or a multiple of trail income. Expert witnesses assess client retention rates, the age profile of the adviser and client base, and any FCA regulatory constraints on the transfer of clients and permissions.",
      },
      {
        q: "What FCA issues affect financial services business valuations?",
        a: "FCA authorisation cannot be freely transferred — a buyer must obtain their own permissions or apply for change of control approval. This creates uncertainty that expert witnesses must address in valuation — reducing the marketable value compared to an unregulated business.",
      },
    ],
    sectorMultiples: [
      {
        sector: "IFA / wealth management",
        typicalMultiple: "2%–4% of AUM or 6×–12× recurring income",
        notes: "FCA change-of-control risk affects realisable value",
      },
      {
        sector: "Insurance broker (renewal income)",
        typicalMultiple: "1.5×–2.5× annual commission",
        notes: "Client retention and regulatory transfer key issues",
      },
    ],
    relatedLinks: [
      { href: "/services#share-equity-valuation", label: "Share valuation" },
      { href: "/case-types/commercial-litigation-breach-of-warranty", label: "M&A disputes" },
      { href: "/valuation-methods", label: "DCF and earnings methods" },
    ],
  },
  {
    slug: "healthcare-dental-medical",
    pageTitle: "Healthcare, Dental & Medical Practice Valuation Expert Witness UK",
    metaDescription:
      "Dental, GP, and medical practice valuations — NHS contracts, UDA income, CQC registration, patient list transferability.",
    hubLabel: "Healthcare / Dental",
    h1: "Healthcare, Dental & Medical Practice Valuation Expert Witness UK",
    paragraphs: [
      "Dental practices are valued by reference to annual fee income (NHS UDA plus private fees) with multiples reflecting NHS/private mix, lease terms, and competition. GP surgeries involve GMS/PMS contract analysis and NHS England approval risk for contract transfer.",
      "CQC registration and patient list transferability affect realisable value in matrimonial and partnership disputes. Goodwill on retirement remains contentious where personal goodwill attributable to the clinician is substantial.",
      "Experts benchmark against BDA, Christie & Co, and other published transaction data while adjusting for practice-specific risk factors.",
    ],
    faq: [
      {
        q: "How is a dental practice valued for litigation?",
        a: "Dental practices are valued by reference to annual fee income (NHS UDA income plus private fees), applying a multiple that reflects the mix of NHS/private income, lease terms, patient retention, and competition. Expert witnesses benchmark against published BDA/Christie & Co transaction data and any available comparable sales.",
      },
      {
        q: "What NHS contract issues affect medical practice valuations?",
        a: "NHS contracts (GMS/PMS for GPs, UDA allocations for dentists) are not freely transferable — they require NHS England approval. Expert witnesses assess the likelihood of contract retention, the NHS income's contribution to maintainable earnings, and the impact of any NHS contract risk on value.",
      },
    ],
    sectorMultiples: [
      {
        sector: "Dental practice (UK)",
        typicalMultiple: "0.7×–1.2× annual fee income",
        notes: "BDA / Christie & Co transaction benchmarks",
      },
      {
        sector: "GP surgery",
        typicalMultiple: "Earnings / NHS contract value",
        notes: "GMS/PMS contract transfer risk affects value",
      },
    ],
    relatedLinks: [
      { href: "/sectors/professional-practices", label: "Professional practices" },
      { href: "/case-types/divorce-financial-remedy", label: "Divorce valuations" },
      { href: "/services#partnership-llp", label: "Partnership valuations" },
    ],
  },
  {
    slug: "creative-media-ip-businesses",
    pageTitle: "Creative, Media & IP Business Valuation Expert Witness UK",
    metaDescription:
      "Music catalogues, streaming revenue, copyright valuation, key person risk, royalty income multiples.",
    hubLabel: "Creative / Media",
    h1: "Creative, Media & IP Business Valuation Expert Witness UK",
    paragraphs: [
      "Creative and media businesses depend on copyright, catalogue ownership, and talent relationships. Music catalogues and streaming revenue are valued using relief from royalty methods and comparable catalogue transactions, with careful analysis of copyright duration and revenue decay curves.",
      "Key person risk — dependence on a named designer, author, or performer — attracts significant discounts unless contractual protections and brand transferability support maintainable earnings without that individual.",
      "IP ownership clarity (work-for-hire, assignment chains) is often disputed in litigation and must be resolved before valuation conclusions are reliable.",
    ],
    faq: [
      {
        q: "How are music catalogues and creative IP valued for litigation?",
        a: "Music catalogues and creative IP are valued using the relief from royalty method — estimating the royalty payments the owner avoids by owning the IP outright, discounted to present value. Expert witnesses analyse historic and projected royalty streams, copyright duration, and comparable catalogue sale transactions.",
      },
      {
        q: "What is the impact of key man risk on creative business valuations?",
        a: "Creative businesses dependent on a single individual (a named designer, author, or performer) typically attract a significant discount reflecting the risk that the business's value departs with that person. Expert witnesses assess contractual protections, the transferability of the brand and IP, and whether a successor could maintain the revenue stream.",
      },
    ],
    sectorMultiples: [
      {
        sector: "Music / media catalogue",
        typicalMultiple: "Relief-from-royalty NPV; 10×–20× annual net royalties (indicative)",
        notes: "Copyright duration and decay curves drive value",
      },
      {
        sector: "Creative agency (key person)",
        typicalMultiple: "EBITDA multiple with key-person discount",
        notes: "Talent dependency often reduces marketable value",
      },
    ],
    relatedLinks: [
      { href: "/services#intellectual-property-valuation", label: "IP valuation" },
      { href: "/case-types/intellectual-property-valuation", label: "IP litigation" },
      { href: "/valuation-methods", label: "Valuation methods" },
    ],
  },
];

export function getSector(slug: string): ContentPage | undefined {
  return SECTORS.find((s) => s.slug === slug);
}
