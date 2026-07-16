# SEO Full Context — businessvaluationexperts.co.uk

> **Purpose:** Complete SEO inventory for AI agents (Claude/Cursor). Read this file first when changing SEO, content, metadata, schema, sitemap, robots, internal links, or keywords.  
> **Related docs:** `docs/SEO-ARCHITECTURE.md` (strategy source of truth), `docs/SITEMAP-AND-ROBOTS.md` (pipeline).  
> **Last audited against codebase:** July 2026.

---

## 0. Site identity (hardcoded)

| Constant | Value | Source |
|----------|-------|--------|
| Canonical host | `https://www.businessvaluationexperts.co.uk` | `lib/site.ts` → `SITE_URL` |
| Site name | `BusinessValuationExperts` | `SITE_NAME` |
| Email (schema) | `contact@businessvaluationexperts.co.uk` | `SITE_EMAIL` |
| Region copy | United Kingdom / England and Wales | `SITE_REGION`, `UK_SERVICE_SUMMARY` |
| LinkedIn (`sameAs`) | `https://www.linkedin.com/company/businessvaluationexperts` | `LINKEDIN_URL` |
| Locale | `en-GB` (`html lang`, OG `en_GB`, schema `inLanguage`) | `app/layout.tsx`, schemas |
| Primary goal | Rank for *business valuation expert witness* + UK solicitor queries | `docs/SEO-ARCHITECTURE.md` |

**Important quirk:** `NEXT_PUBLIC_SITE_URL` / `PUBLIC_SITE_URL` are used for form redirects, **not** for metadata/sitemap. Metadata and sitemap always use hardcoded `SITE_URL`.

**Apex redirect:** `middleware.ts` 301s `businessvaluationexperts.co.uk` → `www.businessvaluationexperts.co.uk`.

---

## 1. How SEO is managed (architecture)

Centralized, inventory-driven App Router SEO (no `next/head`, no meta keywords tag).

```
┌─────────────────────────────────────────────────────────────────┐
│  DATA LAYER                                                      │
│  lib/*-data.ts → pageTitle, metaDescription, h1, faq, sections │
│  lib/site.ts → SITE_URL, slug arrays, nav inventories            │
└───────────────────────────┬─────────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────────┐
│  METADATA FACTORY                                                │
│  lib/seo-metadata.ts → buildPageMetadata()                       │
│  Every page: title, description, canonical, robots, OG, Twitter  │
└───────────────────────────┬─────────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────────┐
│  ROOT LAYOUT                                                     │
│  app/layout.tsx → metadataBase, title template, default desc,    │
│  hreflang en-GB + x-default, verification env vars               │
│  Title template: `%s | BusinessValuationExperts`                 │
└───────────────────────────┬─────────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────────┐
│  STRUCTURED DATA                                                 │
│  lib/schema.ts, lib/homepage-jsonld.ts, lib/guide-about.ts       │
│  components/seo/JsonLd.tsx                                       │
└───────────────────────────┬─────────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────────┐
│  SITEMAP / ROBOTS (dual)                                         │
│  Inventory: lib/seo/publicUrlInventory.ts                        │
│  Heuristics: lib/seo/sitemapHeuristics.ts                        │
│  Next routes: app/sitemap.ts, app/robots.ts                      │
│  Static copies: public/sitemap.xml, public/robots.txt            │
│  Scripts: seo:generate, seo:verify (also on npm run build)       │
└───────────────────────────┬─────────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────────┐
│  INTERNAL LINKING                                                │
│  lib/seo/clusterLinks.ts → ContentClusterNav                     │
│  lib/seo/glossaryAnchor.ts → glossary fragment IDs               │
│  Header mega-nav + Footer + relatedLinks on content pages        │
└─────────────────────────────────────────────────────────────────┘
```

### `buildPageMetadata()` contract (`lib/seo-metadata.ts`)

Every call sets:

| Field | Behaviour |
|-------|-----------|
| `title` | Page title string (root template appends ` \| BusinessValuationExperts`) |
| `description` | Meta description |
| `alternates.canonical` | `SITE_URL` + path |
| `robots` | Default `{ index: true, follow: true }` unless overridden |
| `openGraph` | title, description, url, siteName, `type: website`, `locale: en_GB`, image `/opengraph-image` 1200×630 |
| `twitter` | `summary_large_image`, same title/description/image |

**There is no `<meta name="keywords">` anywhere.** Keywords are strategy + on-page intent only.

### Root layout metadata (`app/layout.tsx`)

```
metadataBase: SITE_URL
title.default: "BusinessValuationExperts | Business Valuation Expert Witness UK"
title.template: "%s | BusinessValuationExperts"
description: "Find qualified business valuation expert witnesses for UK solicitors in England and Wales. CPR Part 35 and FPR Part 25 compliant reports for litigation and family law."
alternates.canonical: SITE_URL
alternates.languages: { "en-GB": SITE_URL, "x-default": SITE_URL }
openGraph: type website, locale en_GB, siteName, url SITE_URL
robots: index, follow
verification.google ← GOOGLE_SITE_VERIFICATION (if set)
other["msvalidate.01"] ← BING_SITE_VERIFICATION (if set)
html lang="en-GB"
```

### Open Graph image (`app/opengraph-image.tsx`)

- Size: 1200×630 PNG via `ImageResponse`
- Background: `#1C2B3A`, gold accent `#B8860B`
- Shared helper: `lib/seo/ogImage.tsx` → `renderOgCard()`
- Fallback: `app/opengraph-image.tsx` (hubs / static pages)
- Per-segment cards: `app/{guides,case-types,sectors,services,valuation-methods}/[slug]/opengraph-image.tsx`
- Alt: brand + route-type label

### Assets

- Favicon / apple-icon / web manifest: `app/icon.tsx`, `app/apple-icon.tsx`, `app/manifest.ts` (navy/gold)
- Almost no in-body content `<img>` / `next/image` → almost no image alt text beyond OG (deferred — see §14 / P3.2)
- No blog; content SEO surface = guides + hubs + detail pages (deferred — P3.1)

---

## 2. Keyword strategy (all tiers)

### Editorial rules

- One primary commercial/informational intent per URL; avoid competing H1s for the same Tier 1 phrase.
- Primary keyword in `<title>`, meta description (natural), **H1**, and first screen of body where natural.
- UK English spelling/terminology throughout.
- Semantic variants in H2s/anchors: share valuation, fair value, S994, CPR Part 35, FPR Part 25, SJE, maintainable earnings, DCF, NAV.
- E-E-A-T: ACA/FCA/CFA/CVA, CPR/FPR, *Ikarian Reefer*, sector experience, citeable methodology tables.
- Leverage `.co.uk` in copy where natural.

### Tier 1 — Transactional

| Keyword | Primary URL | Secondary URLs |
|---------|-------------|----------------|
| business valuation expert witness | `/` | `/what-is-a-business-valuation-expert-witness`, `/services` |
| business valuation expert witness UK | `/` | `/qualifications`, `/contact` |
| business valuation expert witness .co.uk | `/` | brand/domain in footer |
| share valuation expert witness UK | `/services#share-equity-valuation` (also `/services/share-equity-valuation`) | `/case-types/shareholder-dispute-s994`, `/case-types/tax-tribunal-hmrc-valuation` |
| business valuation expert witness divorce | `/services#matrimonial-divorce-valuation` | `/case-types/divorce-financial-remedy`, `/guides/divorce-business-valuation-guide` |
| shareholder dispute valuation expert witness | `/case-types/shareholder-dispute-s994` | `/services#shareholder-dispute-s994`, `/guides/shareholder-disputes-valuation-guide` |
| business valuation expert for court UK | `/what-is-a-business-valuation-expert-witness` | `/qualifications`, `/how-to-instruct` |
| S994 valuation expert witness | `/case-types/shareholder-dispute-s994` | glossary S994 / fair value anchors |
| FPR Part 25 business valuation expert | `/services#matrimonial-divorce-valuation` | divorce case-type + glossary |
| CPR Part 35 business valuation expert | `/services` | what-is, qualifications, glossary |

### Tier 2 — Informational

| Keyword | Primary URL |
|---------|-------------|
| how is a business valued in shareholder dispute UK | `/guides/shareholder-disputes-valuation-guide` |
| business valuation methods UK litigation | `/valuation-methods` |
| DCF vs maintainable earnings UK courts | `/guides/dcf-maintainable-earnings-expert-guide` |
| what is fair value S994 petition | `/case-types/shareholder-dispute-s994` |
| single joint expert business valuation UK | `/guides/single-joint-expert-business-valuation` |
| FPR Part 25 expert witness business valuation | `/guides/divorce-business-valuation-guide` |
| how to instruct business valuation expert witness UK | `/how-to-instruct` |
| business valuation expert witness fees UK | `/fees` |
| what is personal goodwill in divorce UK | `/case-types/divorce-financial-remedy` |
| HMRC share valuation dispute expert | `/guides/hmrc-share-valuation-disputes` |

### Tier 3 — Long-tail / sector

| Keyword | Primary URL |
|---------|-------------|
| technology business valuation expert witness UK | `/sectors/technology-saas-digital-businesses` |
| dental practice valuation expert witness | `/sectors/healthcare-dental-medical` |
| professional practice valuation expert witness UK | `/sectors/professional-practices` |
| SaaS business valuation expert witness | `/sectors/technology-saas-digital-businesses` |
| manufacturing business valuation expert witness UK | `/sectors/manufacturing-distribution` |
| hotel business valuation expert witness UK | `/sectors/retail-hospitality-leisure` |
| divorce business valuation expert witness London | `/case-types/divorce-financial-remedy` (geo in copy; no London slug) |
| S994 unfair prejudice valuation expert UK | `/case-types/shareholder-dispute-s994` |
| HMRC share valuation expert witness First-tier Tribunal | `/case-types/tax-tribunal-hmrc-valuation` |
| MBO dispute business valuation expert witness | `/case-types/management-buyout-dispute` |

### Full keyword → URL matrix (30)

| # | Keyword | Tier | Primary URL |
|---|---------|------|-------------|
| 1–10 | (Tier 1 above) | 1 | see Tier 1 |
| 11–20 | (Tier 2 above) | 2 | see Tier 2 |
| 21–30 | (Tier 3 above) | 3 | see Tier 3 |

---

## 3. Content clusters (8 hubs)

| Hub | Pillar URL | Key supporting URLs |
|-----|------------|---------------------|
| 1 Shareholder Disputes | `/case-types/shareholder-dispute-s994` | guide S994, `/services#shareholder-dispute-s994`, glossary s994/fair value/minority discount |
| 2 Divorce & Matrimonial | `/case-types/divorce-financial-remedy` | divorce guide, `/services#matrimonial-divorce-valuation`, FPR/goodwill glossary |
| 3 Valuation Methods | `/valuation-methods` (+ `/valuation-methods/{slug}`) | DCF vs ME guide, glossary DCF/ME/NAV/WACC |
| 4 Single Joint Expert | `/guides/single-joint-expert-business-valuation` | `/how-to-instruct`, what-is, SJE/PAE glossary |
| 5 HMRC & Tax | `/case-types/tax-tribunal-hmrc-valuation` | HMRC guide, share equity service, financial-services sector |
| 6 Sector Specialists | `/sectors` + 8 slugs | cross-links to case-types/services/methods |
| 7 Insolvency | `/case-types/insolvency-administration` | insolvency service, going concern / s214 / s238 glossary |
| 8 Instruction Process | `/how-to-instruct` | letter-of-instruction guide, `/fees`, `/qualifications`, `/contact` |

Cluster link maps are implemented in `lib/seo/clusterLinks.ts` and rendered via `components/ContentClusterNav.tsx` (“Related resources”).

---

## 4. Complete page inventory — metadata + H1

**Browser title note:** Values below are the `title` passed to `buildPageMetadata`. Final document title is usually `{title} | BusinessValuationExperts` via the root template (unless the title already includes brand-style suffixes).

### 4.1 Static / hub pages

| Path | Title (metadata) | Meta description | H1 (on page) | robots | Sitemap? |
|------|------------------|------------------|--------------|--------|----------|
| `/` | Business Valuation Expert Witness UK \| Shareholder Disputes & Divorce | Find a qualified business valuation expert witness in the UK. CPR Part 35 and FPR Part 25 compliant reports for shareholder disputes, divorce, commercial litigation, and insolvency. Instruct an expert today. | Business Valuation Expert Witness Services for UK Solicitors & Law Firms | index,follow | Yes (1.0) |
| `/what-is-a-business-valuation-expert-witness` | What Is a Business Valuation Expert Witness? \| UK Court Role & Definition | A business valuation expert witness provides independent opinions on company value for UK courts. CPR Part 35, FPR Part 25, DCF, maintainable earnings explained. | What Is a Business Valuation Expert Witness? | index,follow | Yes (0.90) |
| `/services` | Business Valuation Expert Witness Services UK \| Full Service List | CPR Part 35 and FPR Part 25 business valuation expert witness services UK: share valuation, matrimonial valuations, S994 petitions, goodwill, insolvency, and expert determination. | Business Valuation Expert Witness Services | index,follow | Yes (0.95) |
| `/valuation-methods` | Business Valuation Methods UK \| DCF, Maintainable Earnings & NAV | The three main business valuation methods used by UK expert witnesses: discounted cash flow (DCF), maintainable earnings, and net asset value - explained for solicitors and their clients. | Business Valuation Methods Used by UK Expert Witnesses | index,follow | Yes (0.93) |
| `/case-types` | Case Types Requiring a Business Valuation Expert Witness \| UK Guide | Which UK legal cases need a business valuation expert witness? Shareholder disputes, divorce, insolvency, commercial litigation, tax tribunals, and more explained. | Case Types Requiring a Business Valuation Expert Witness | index,follow | Yes (0.92) |
| `/sectors` | Business Valuation Expert Witnesses by Sector \| UK Industry Specialists | Sector-specialist business valuation expert witnesses for UK litigation. Technology, professional practices, retail, property, manufacturing, and more. | Business Valuation Expert Witnesses by Sector | index,follow | Yes (0.90) |
| `/guides` | Solicitor Guides: Business Valuation Expert Witnesses UK \| Methods & Disputes | In-depth guides for UK solicitors on business valuation expert witnesses - DCF methodology, shareholder disputes, matrimonial valuations, and more. | Solicitor Guides: Business Valuation Expert Witnesses UK | index,follow | Yes (0.87) |
| `/faq` | Business Valuation Expert Witness FAQ UK \| Common Questions Answered | Answers to common questions about UK business valuation expert witnesses - valuation methods, fees, SJE vs party expert, CPR Part 35, FPR Part 25, and more. | Business Valuation Expert Witness FAQ for UK Solicitors | index,follow | Yes (0.87) |
| `/fees` | Business Valuation Expert Witness Fees UK \| 2025 Hourly Rates & Costs | UK business valuation expert witnesses typically charge £250–£600/hour. Learn about fee structures, retainers, report costs, and what affects total engagement costs. | Business Valuation Expert Witness Fees UK | index,follow | Yes (0.88) |
| `/how-to-instruct` | How to Instruct a Business Valuation Expert Witness UK \| Step-by-Step Guide | Step-by-step guide for UK solicitors on finding, vetting, and instructing the right business valuation expert witness. SJE and party-appointed expert explained. | How to Instruct a Business Valuation Expert Witness | index,follow | Yes (0.88) |
| `/qualifications` | Business Valuation Expert Witness Qualifications UK \| ACA, CVA, CFA & RICS | What credentials should a UK business valuation expert witness hold? ACA, FCA, CVA, CFA, RICS explained - plus CPR Part 35 and FPR Part 25 compliance standards. | Business Valuation Expert Witness Qualifications & Credentials | index,follow | Yes (0.88) |
| `/experts` | Our Business Valuation Expert Witnesses \| UK Chartered Accountants | BusinessValuationExperts.co.uk connects UK solicitors with qualified business valuation expert witnesses - ACA, FCA, CVA, and CFA credentialed specialists for litigation and family law. | Our Business Valuation Expert Witnesses | index,follow | Yes (0.80) |
| `/glossary` | Business Valuation Expert Witness Glossary \| Key UK Legal & Finance Terms | Definitions of key business valuation and expert witness terms for UK litigation - from fair value to DCF, S994, FPR Part 25, and goodwill. | Business Valuation Expert Witness Glossary | index,follow | Yes (0.75) |
| `/contact` | Instruct a UK Business Valuation Expert Witness \| BusinessValuationExperts.co.uk | Submit your case details to be matched with a qualified UK business valuation expert witness for England and Wales. CPR Part 35 and FPR Part 25. Response within 1 business day. | Instruct a UK Business Valuation Expert Witness | index,follow | **No** |
| `/thank-you` | Thank You \| BusinessValuationExperts.co.uk | Your expert witness instruction request has been received. | Thank You | **noindex, nofollow** | **No** |
| `/privacy` | Privacy Policy \| BusinessValuationExperts.co.uk | Privacy policy for BusinessValuationExperts.co.uk - UK GDPR compliant data handling. | Privacy Policy | **noindex, follow** | **No** |
| `/terms` | Terms of Use \| BusinessValuationExperts.co.uk | Terms of use for the BusinessValuationExperts.co.uk expert witness matching service. | Terms of Use | **noindex, follow** | **No** |
| `/cookies` | Cookie Policy \| BusinessValuationExperts | How BusinessValuationExperts.co.uk uses cookies and similar technologies, how to manage consent, and which third-party tools may load when you opt in. | Cookie Policy | **noindex, follow** | **No** |

Root layout default description (fallback): *Find qualified business valuation expert witnesses for UK solicitors in England and Wales. CPR Part 35 and FPR Part 25 compliant reports for litigation and family law.*

### 4.2 Services — `/services/{slug}`

Metadata: `title = "{service.title} | Business Valuation Expert Witness UK"`, `description = service.summary`.  
H1 on detail pages comes from service title via `ServiceDetailLayout`.  
Sitemap priority: **0.85** (`/services/` prefix in `getSitemapMetaForPath`).

| Slug / anchor | Service title | Meta description (summary) |
|---------------|---------------|----------------------------|
| `share-equity-valuation` | Share & Equity Valuation | Minority and majority shareholding valuations for litigation, tax, and corporate disputes. |
| `matrimonial-divorce-valuation` | Matrimonial & Divorce Valuations (FPR Part 25) | Business assets in financial remedy proceedings with FPR Part 25 compliant reporting. |
| `shareholder-dispute-s994` | Shareholder Dispute Valuations (S994) | Fair value valuations for Companies Act 2006 unfair prejudice petitions. |
| `goodwill-intangible` | Goodwill & Intangible Asset Valuation | Personal and business goodwill, brands, and customer relationship valuations. |
| `intellectual-property-valuation` | Intellectual Property Valuation | Patents, trade marks, copyright, and brand valuations for UK litigation. |
| `insolvency-administration` | Insolvency & Administration Valuations | Going concern vs break-up value, wrongful trading, and transaction avoidance. |
| `partnership-llp` | Partnership & LLP Valuations | Goodwill on retirement, LLP interests, and professional practice multiples. |
| `expert-determination` | Expert Determination | Non-litigated valuations under shareholders' agreements and ICAEW schemes. |

Also linked as fragments on `/services#{anchor}` from homepage and clusters. Nav labels strip parentheticals via `serviceNavLabel()`.

### 4.3 Valuation methods — `/valuation-methods/{slug}`

Sitemap priority: **0.80** (`/valuation-methods/` prefix in `getSitemapMetaForPath`).

| Slug | pageTitle | metaDescription | H1 | hubLabel |
|------|-----------|-----------------|----|----------|
| `discounted-cash-flow` | Discounted Cash Flow (DCF) Business Valuation UK \| Expert Witness Methods | How UK business valuation expert witnesses use discounted cash flow (DCF), WACC, terminal value, and cash flow projections in litigation and tax disputes. | Discounted Cash Flow (DCF) - Business Valuation Method | Discounted Cash Flow (DCF) |
| `maintainable-earnings` | Maintainable Earnings Valuation UK \| Capitalisation of Earnings | Maintainable earnings and EV/EBITDA multiples used by UK business valuation expert witnesses for SMEs, professional practices, and litigation. | Maintainable Earnings (Capitalisation of Earnings) | Maintainable Earnings |
| `net-asset-value` | Net Asset Value (NAV) Business Valuation UK \| Expert Witness | Net asset value (NAV) valuations for property companies, investment holdings, loss-making businesses, and break-up scenarios in UK litigation. | Net Asset Value (NAV) - Asset-Based Valuation | Net Asset Value (NAV) |

Hub page also uses in-page anchors `#dcf`, `#maintainable-earnings`, `#nav` (see `VALUATION_METHODS_CLUSTER`).

### 4.4 Case types — `/case-types/{slug}` (priority 0.88)

| Slug | pageTitle | metaDescription | H1 | hubLabel |
|------|-----------|-----------------|----|----------|
| `shareholder-dispute-s994` | S994 Shareholder Dispute Valuation Expert Witness UK \| Fair Value | S994 unfair prejudice valuation expert witness UK. Fair value standard (not fair market value), minority discount, CPR Part 35 joint expert meetings. | Shareholder Dispute & S994 Petition Business Valuation Expert Witness | Shareholder Dispute (S994) |
| `divorce-financial-remedy` | Divorce Business Valuation Expert Witness UK \| FPR Part 25 | Business valuation expert witness divorce UK - FPR Part 25 financial remedy, personal goodwill, Form E disclosure. London & nationwide. | Divorce & Financial Remedy Business Valuation Expert Witness | Divorce / Financial Remedy |
| `partnership-dissolution` | Partnership Dissolution Business Valuation Expert Witness UK | Expert witness valuations for partnership and LLP dissolution - goodwill, restrictive covenants, equity partner interests. | Partnership Dissolution Business Valuation Expert Witness | Partnership Dissolution |
| `commercial-litigation-breach-of-warranty` | Breach of Warranty & M&A Dispute Business Valuation Expert Witness | Post-acquisition valuation disputes, warranty claims, locked box mechanisms, earn-out disputes, and diminution in value. | Breach of Warranty & M&A Dispute Business Valuation Expert Witness | Commercial Litigation / M&A |
| `insolvency-administration` | Insolvency & Administration Business Valuation Expert Witness UK | Going concern vs break-up value, wrongful trading, transactions at undervalue, and administrator conduct disputes. | Insolvency & Administration Business Valuation Expert Witness | Insolvency / Administration |
| `tax-tribunal-hmrc-valuation` | HMRC Share Valuation Expert Witness UK \| First-tier Tribunal (Tax) | HMRC share valuation expert witness for the First-tier Tribunal (Tax Chamber). Challenge SAV valuations - IHT, CGT, employment-related securities. | HMRC Valuation Dispute & Tax Tribunal Expert Witness | HMRC / Tax Tribunal |
| `professional-negligence-accountant` | Professional Negligence Business Valuation Expert Witness UK | But-for valuations in accountant and valuer negligence claims - causation, standard of care, quantum of loss. | Professional Negligence Business Valuation Expert Witness | Professional Negligence |
| `intellectual-property-valuation` | Intellectual Property Valuation Expert Witness UK | Patent, trade mark, and copyright valuation for litigation - relief from royalty, lost profits, brand value. | Intellectual Property Valuation Expert Witness UK | IP Valuation |
| `management-buyout-dispute` | MBO Dispute Business Valuation Expert Witness UK \| Management Buyout | MBO pricing disputes, fiduciary duties, minority shareholder fairness, transaction-date reconstruction. | Management Buyout Dispute Business Valuation Expert Witness | MBO Dispute |
| `compulsory-purchase-goodwill` | Compulsory Purchase & Goodwill Business Valuation Expert Witness UK | Disturbance compensation, business extinguishment, Upper Tribunal Lands Chamber, Rule 6 loss payments. | Compulsory Purchase & Goodwill Business Valuation Expert Witness | Compulsory Purchase |

Each case type has **2 FAQs** (FAQPage schema via `DetailPageLayout`) + `relatedLinks` in data.

### 4.5 Sectors — `/sectors/{slug}` (priority 0.86)

| Slug | pageTitle / H1 | metaDescription | hubLabel |
|------|----------------|-----------------|----------|
| `technology-saas-digital-businesses` | Technology & SaaS Business Valuation Expert Witness UK | Expert witness valuations for UK technology, SaaS, and digital businesses - ARR multiples, churn, DCF, option pool dilution. | Technology / SaaS |
| `professional-practices` | Professional Practice Business Valuation Expert Witness UK | Law firm, dental, GP, and accountancy practice valuations - personal goodwill, fee income multiples, restrictive covenants. | Professional Practices |
| `retail-hospitality-leisure` | Retail, Hospitality & Leisure Business Valuation Expert Witness UK | Site-specific trading valuations, IFRS 16 leases, COVID earnings normalisation, hospitality EBITDA disputes. | Retail / Hospitality |
| `property-companies` | Property Company Business Valuation Expert Witness UK | NAV valuations for property SPVs, RICS Red Book, SDLT and CGT discounts, investment vs trading companies. | Property Companies |
| `manufacturing-distribution` | Manufacturing & Distribution Business Valuation Expert Witness UK | Asset-heavy valuations, working capital normalisation, customer concentration, capex adjustments. | Manufacturing / Distribution |
| `financial-services` | Financial Services Business Valuation Expert Witness UK | Wealth management, IFA, and FCA-regulated business valuations - AUM multiples, trail commission, regulatory transfer risk. | Financial Services |
| `healthcare-dental-medical` | Healthcare, Dental & Medical Practice Valuation Expert Witness UK | Dental, GP, and medical practice valuations - NHS contracts, UDA income, CQC registration, patient list transferability. | Healthcare / Dental |
| `creative-media-ip-businesses` | Creative, Media & IP Business Valuation Expert Witness UK | Music catalogues, streaming revenue, copyright valuation, key person risk, royalty income multiples. | Creative / Media |

Each sector: **2 FAQs** + optional `sectorMultiples` GEO table + cluster links.

### 4.6 Guides — `/guides/{slug}` (priority 0.80)

| Slug | pageTitle / H1 | metaDescription | hubLabel | Article `about` @id (`lib/guide-about.ts`) |
|------|----------------|-----------------|----------|--------------------------------------------|
| `shareholder-disputes-valuation-guide` | Business Valuation in Shareholder Disputes: S994 Petitions Explained | Guide for UK solicitors on business valuation in Companies Act 2006 s994 unfair prejudice petitions - fair value, minority discount, joint experts. | Shareholder Disputes Guide | `/services#shareholder-dispute-s994` |
| `divorce-business-valuation-guide` | Business Valuation in Divorce Proceedings: FPR Part 25 Guide | FPR Part 25 business valuation guide for financial remedy proceedings - Form E, personal goodwill, add-backs, SJE. | Divorce Valuation Guide | `/services#matrimonial-divorce-valuation` |
| `dcf-maintainable-earnings-expert-guide` | DCF vs Maintainable Earnings: Which Method Courts Prefer | UK litigation guide comparing DCF and maintainable earnings - WACC disputes, multiple selection, judicial practice. | DCF vs Earnings Guide | `/services#share-equity-valuation` |
| `single-joint-expert-business-valuation` | Single Joint Expert in Business Valuation: A Solicitor's Guide | CPR 35.7 and FPR 25.11 guide to Single Joint Experts in business valuation - joint instruction, written questions, pros and cons. | SJE Guide | Organization `#organization` |
| `hmrc-share-valuation-disputes` | HMRC Share Valuation Disputes: Expert Witness Guide | SAV process, IHT, CGT, employment-related securities, and First-tier Tribunal expert evidence for HMRC valuation disputes. | HMRC Valuation Guide | `/services#share-equity-valuation` |
| `instructing-expert-witness-letter` | How to Draft a Letter of Instruction to a Business Valuation Expert Witness | Letter of instruction checklist for UK solicitors - scope, questions, documents, fees, CPR Part 35 and FPR Part 25. | Letter of Instruction Guide | Organization `#organization` |

Guides use H1 + section H2s + subsection H3s from `lib/guides-data.ts`. JSON-LD: Article + Organization + BreadcrumbList.

---

## 5. Heading structure patterns

| Pattern | Rule |
|---------|------|
| **H1** | Exactly one per page — hero / page title from static JSX or `page.h1` / `guide.h1` / service title |
| **H2** | Major sections; hub card titles; footer column titles (sitewide); ContentClusterNav “Related resources”; FAQ “Common questions” |
| **H3** | Homepage service cards; guide subsections |

**Footer caveat:** Footer uses multiple `<h2>` for nav columns on every page (including under page H1).

**How-to-instruct steps (H2-level content themes):** Identify Legal Context → Define Valuation Purpose → Identify Sector Expertise → Check Credentials → Conflicts Check → Letter of Instruction → Provide Documents.

---

## 6. Structured data / JSON-LD

**Renderer:** `components/seo/JsonLd.tsx` → `<script type="application/ld+json">`.

### Organization (root entity)

```
@type Organization
@id https://www.businessvaluationexperts.co.uk/#organization
name BusinessValuationExperts
url SITE_URL
email SITE_EMAIL
address PostalAddress addressCountry GB, addressRegion England and Wales
areaServed Country United Kingdom
sameAs [LinkedIn URL]
```

### Schema by route

| Route | JSON-LD types |
|-------|---------------|
| `/` | `@graph`: Organization, WebSite (+ SearchAction → `/glossary?q={search_term_string}`), ProfessionalService + OfferCatalog (8 services) |
| `/services` | `@graph`: Organization + Service ×8 (`@id` = `/services#{anchor}`) |
| `/services/[slug]` | Organization + Service (`@id` = `/services#{anchor}`) + BreadcrumbList + FAQPage |
| `/guides/[slug]` | Organization, Article (`inLanguage: en-GB`, author/publisher = Org, `about` → service/org @id from `lib/guide-about.ts`), BreadcrumbList |
| `/experts` | Organization + Person ×3 |
| `/case-types/[slug]`, `/sectors/[slug]`, `/valuation-methods/[slug]` | Organization + BreadcrumbList + FAQPage (via `DetailPageLayout`) |
| `/faq` | Organization, FAQPage, BreadcrumbList |
| `/glossary` | Organization, BreadcrumbList, FAQPage (from terms) |
| Static utility hubs | Organization + BreadcrumbList typically |
| `/thank-you`, `/privacy`, `/terms`, `/cookies` | No rich schema required |

### Experts (Person schema sources)

| Name (placeholder) | Credentials | Specialties |
|--------------------|-------------|-------------|
| Senior Valuation Expert | ACA, CFA, CVA | Shareholder Disputes, Matrimonial, DCF |
| Professional Practice Specialist | FCA, CVA | Partnership, Dental/Medical, Goodwill |
| Technology & M&A Valuation Expert | ACA, CFA | SaaS/Tech, M&A Warranty, HMRC |

### FAQPage sources

| Source | Count |
|--------|-------|
| `/faq` (`lib/faq-data.ts`) | 12 site-wide Q&As |
| Each case type | 2 FAQs |
| Each sector | 2 FAQs |
| Each valuation method | 2 FAQs |
| Each service (`/services/[slug]`) | 2 FAQs |
| Glossary | terms as definition FAQ-style |

**FAQ questions on `/faq`:**

1. What is a business valuation expert witness?
2. What legal cases require a business valuation expert witness?
3. What is the difference between CPR Part 35 and FPR Part 25?
4. What valuation methods do UK expert witnesses use?
5. What is fair value vs fair market value in S994 disputes?
6. Should I use a Single Joint Expert or party-appointed expert?
7. How much does a business valuation expert witness cost in the UK?
8. What credentials should a UK business valuation expert witness hold?
9. What is the Ikarian Reefer duty and how does it apply?
10. How early should I instruct a business valuation expert?
11. Can a business valuation expert be challenged (Daubert/CPR)?
12. What documents should I provide when instructing an expert?

---

## 7. Sitemap & robots

### Dual pipeline

| Output | Generator | Must stay in sync |
|--------|-----------|-------------------|
| `app/sitemap.ts` → `/sitemap.xml` | `buildAppSitemap()` | Yes — `seo:verify` |
| `public/sitemap.xml` | `scripts/generate-seo.ts` → `renderSitemapXml()` | Yes |
| `app/robots.ts` | Next MetadataRoute | Staging-aware |
| `public/robots.txt` | `renderRobotsTxt()` | Staging-aware (same gate as `app/robots.ts`) |

Commands: `npm run seo:generate`, `npm run seo:verify`. Build runs both before `next build`. CI: `.github/workflows/seo-checks.yml`.

### Sitemap inventory (`buildPublicUrlInventory`)

**In sitemap (~48 URLs):**

- 13 static hubs (`SITEMAP_STATIC_PATHS`)
- 8 `/services/{slug}`
- 3 `/valuation-methods/{slug}`
- 10 case-types, 8 sectors, 6 guides

**Excluded (`NON_SITEMAP_PATHS`):** `/contact`, `/thank-you`, `/privacy`, `/terms`, `/cookies`

### Priority / changefreq (`getSitemapMetaForPath`)

| Path pattern | Priority | changefreq |
|--------------|----------|------------|
| `/` | 1.0 | weekly |
| `/services` | 0.95 | monthly |
| `/valuation-methods` | 0.93 | monthly |
| `/case-types` | 0.92 | monthly |
| `/case-types/*` | 0.88 | monthly |
| `/sectors` | 0.90 | monthly |
| `/sectors/*` | 0.86 | monthly |
| `/what-is-…` | 0.90 | monthly |
| `/qualifications`, `/how-to-instruct`, `/fees` | 0.88 | monthly |
| `/faq`, `/guides` | 0.87 | monthly |
| `/guides/*` | 0.80 | monthly |
| `/services/*` | 0.85 | monthly |
| `/valuation-methods/*` | 0.80 | monthly |
| `/experts` | 0.80 | monthly |
| `/glossary` | 0.75 | monthly |
| **Everything else** | **0.50** | monthly |

`lastmod` = editorial `updatedAt` from data layer (`lib/seo/contentDates.ts`); hubs use `HUB_UPDATED_AT`. Not stamped at build time.

### robots.txt (`public/robots.txt`)

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /private/
Disallow: /_next/
Disallow: /thank-you
Sitemap: https://www.businessvaluationexperts.co.uk/sitemap.xml
```

`app/robots.ts`: production allow `/` + host + sitemap; if `VERCEL_ENV=preview` or `NEXT_PUBLIC_STAGING=true` → disallow all.

`renderRobotsTxt()` (static `public/robots.txt`) uses the **same** staging gate so generated static copies stay consistent with the Next route.

---

## 8. Internal linking system

### Mechanisms

| Mechanism | File / component |
|-----------|------------------|
| Cluster maps | `lib/seo/clusterLinks.ts` |
| UI grid | `components/ContentClusterNav.tsx` |
| Header mega-nav | `components/SiteHeader.tsx` (services, methods, case types, sectors, resources) |
| Footer | Services (all), subset of case types + hub, resources, about |
| Glossary anchors | `glossaryAnchorId()` / `glossaryHref()` |
| Data `relatedLinks` | case-types / sectors / methods |
| Breadcrumbs UI + schema | `components/SeoBreadcrumbs.tsx` |
| Homepage | 8 service links + `HOMEPAGE_CLUSTER` |

**Anchor text rule:** descriptive destination labels only — never “click here”.

### Standard process links appended to most clusters

- `/how-to-instruct` — “How to instruct a valuation expert”
- `/contact` — “Instruct an expert witness”
- Case-type clusters also append `/glossary` hub

### Named cluster exports

`HOMEPAGE_CLUSTER`, `WHAT_IS_CLUSTER`, `SERVICES_PAGE_CLUSTER`, `CASE_TYPES_HUB_CLUSTER`, `SECTORS_HUB_CLUSTER`, `GUIDES_HUB_CLUSTER`, `FAQ_PAGE_CLUSTER`, `VALUATION_METHODS_CLUSTER`, plus per-slug maps for case types, sectors, guides.

### Nav slug sources (`lib/site.ts`)

- `guideSlugs` (6), `caseTypeSlugs` (10), `sectorSlugs` (8)
- `serviceNavItems`, `valuationMethodNavItems`, `caseTypeNavItems`, `sectorNavItems`
- `resourcesNavItems`: Guides, Qualifications, How to Instruct

---

## 9. Glossary (30 terms) — anchors + default links

Anchor formula: `term.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")`

| Term | Anchor ID | Default link |
|------|-----------|--------------|
| Adjusted EBITDA | `adjusted-ebitda` | `/valuation-methods` |
| But-For Value | `but-for-value` | `/case-types/professional-negligence-accountant` |
| Capitalisation Rate | `capitalisation-rate` | `/valuation-methods` |
| Companies Act 2006 S994 | `companies-act-2006-s994` | `/case-types/shareholder-dispute-s994` |
| Control Premium | `control-premium` | `/valuation-methods` |
| CPR Part 35 | `cpr-part-35` | `/qualifications` |
| DCF (Discounted Cash Flow) | `dcf-discounted-cash-flow` | `/valuation-methods` |
| Diminution in Value | `diminution-in-value` | `/case-types/commercial-litigation-breach-of-warranty` |
| DLOM (Discount for Lack of Marketability) | `dlom-discount-for-lack-of-marketability` | `/valuation-methods` |
| EBITDA | `ebitda` | `/valuation-methods` |
| Enterprise Value | `enterprise-value` | `/valuation-methods` |
| Expert Determination | `expert-determination` | `/services#expert-determination` |
| Fair Market Value | `fair-market-value` | `/valuation-methods` |
| Fair Value (S994 context) | `fair-value-s994-context` | `/case-types/shareholder-dispute-s994` |
| FPR Part 25 | `fpr-part-25` | `/qualifications` |
| Going Concern Value | `going-concern-value` | `/case-types/insolvency-administration` |
| Goodwill (Personal vs Business) | `goodwill-personal-vs-business` | `/services#goodwill-intangible` |
| The Ikarian Reefer Duties | `the-ikarian-reefer-duties` | `/qualifications` |
| Intangible Assets | `intangible-assets` | `/services#goodwill-intangible` |
| Maintainable Earnings | `maintainable-earnings` | `/valuation-methods` |
| Minority Discount | `minority-discount` | `/case-types/shareholder-dispute-s994` |
| NAV (Net Asset Value) | `nav-net-asset-value` | `/valuation-methods` |
| Normalisation Adjustments | `normalisation-adjustments` | `/valuation-methods` |
| Party-Appointed Expert (PAE) | `party-appointed-expert-pae` | `/guides/single-joint-expert-business-valuation` |
| Professional Indemnity Insurance | `professional-indemnity-insurance` | `/qualifications` |
| Single Joint Expert (SJE) | `single-joint-expert-sje` | `/guides/single-joint-expert-business-valuation` |
| Terminal Value | `terminal-value` | `/valuation-methods` |
| Transaction at Undervalue (S238) | `transaction-at-undervalue-s238` | `/case-types/insolvency-administration` |
| WACC (Weighted Average Cost of Capital) | `wacc-weighted-average-cost-of-capital` | `/valuation-methods` |
| Wrongful Trading (S214) | `wrongful-trading-s214` | `/case-types/insolvency-administration` |

---

## 10. GEO (Generative Engine Optimization) targets

Content structured for AI citation / featured snippets:

| URL | Extractable artifact |
|-----|----------------------|
| `/` | UK fees & framework statistics table |
| `/valuation-methods` | DCF / maintainable earnings / NAV methodology tables; fair value vs FMV comparison |
| `/guides/single-joint-expert-business-valuation` | SJE vs PAE comparison table |
| `/what-is-a-business-valuation-expert-witness` | CPR Part 35 vs FPR Part 25 comparison (`GeoComparisonTable`) |
| `/sectors/*` | Sector multiples reference tables |
| `/glossary` | 30 definition-first terms with anchors |
| `/how-to-instruct` | Numbered 7-step instruction process |

GEO rules: lead with direct answer (40–60 words); semantic `<table>` + caption; cite sources; don’t hide primary facts only in accordions.

---

## 11. Environment variables (SEO-related)

| Variable | Role |
|----------|------|
| `NEXT_PUBLIC_SITE_URL` | Intended public URL (form redirect via `PUBLIC_SITE_URL`; **not** metadata/sitemap) |
| `GOOGLE_SITE_VERIFICATION` | GSC meta verification |
| `BING_SITE_VERIFICATION` | Bing `msvalidate.01` |
| `NEXT_PUBLIC_STAGING` | With Vercel preview → robots disallow all |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` / GTM / Meta / LinkedIn / Hotjar | Analytics after CMP consent — not meta SEO |

---

## 12. File map (every SEO-touching file)

| Path | Role |
|------|------|
| `docs/SEO-ARCHITECTURE.md` | Keyword strategy, clusters, schema matrix, GEO, off-page, competitors, `.co.uk` |
| `docs/SITEMAP-AND-ROBOTS.md` | Sitemap/robots pipeline documentation |
| `docs/SEO-FULL-CONTEXT.md` | **This file** — full AI context dump |
| `lib/site.ts` | SITE_URL, names, slugs, nav |
| `lib/seo-metadata.ts` | `buildPageMetadata` |
| `lib/schema.ts` | Organization, FAQ, Article, Service, breadcrumbs, services graph |
| `lib/homepage-jsonld.ts` | Homepage `@graph` |
| `lib/guide-about.ts` | Guide Article `about` IDs |
| `lib/json-ld.ts` | Deprecated/compat re-exports (breadcrumbs helper used by SeoBreadcrumbs) |
| `lib/seo/publicUrlInventory.ts` | Sitemap + route inventory |
| `lib/seo/sitemapHeuristics.ts` | priority / changefreq |
| `lib/seo/buildSitemap.ts` | Next MetadataRoute sitemap builder |
| `lib/seo/renderSitemap.ts` | XML for `public/` |
| `lib/seo/renderRobots.ts` | robots.txt template |
| `lib/seo/clusterLinks.ts` | Internal link clusters |
| `lib/seo/contentDates.ts` | Editorial `lastmod` lookup |
| `lib/seo/ogImage.tsx` | Shared OG ImageResponse card |
| `app/icon.tsx` / `apple-icon.tsx` / `manifest.ts` | Favicon + PWA manifest |
| `lib/case-types-data.ts` | 10 case types SEO fields |
| `lib/sectors-data.ts` | 8 sectors SEO fields |
| `lib/guides-data.ts` | 6 guides SEO + sections |
| `lib/valuation-methods-data.ts` | 3 methods SEO |
| `lib/services-data.ts` | 8 services |
| `lib/glossary-data.ts` | 30 terms |
| `lib/faq-data.ts` | 12 FAQ items |
| `lib/experts-data.ts` | 3 experts for Person schema |
| `lib/types.ts` | `pageTitle` / `metaDescription` / `h1` types |
| `app/layout.tsx` | Root metadata, lang, verification |
| `app/sitemap.ts` / `app/robots.ts` | Next SEO routes |
| `app/opengraph-image.tsx` | OG image |
| `app/**/page.tsx` | Per-route metadata + H1 |
| `components/seo/JsonLd.tsx` | JSON-LD script emitter |
| `components/SeoBreadcrumbs.tsx` | Visible crumbs + optional BreadcrumbList |
| `components/ContentClusterNav.tsx` | Related resources |
| `components/DetailPageLayout.tsx` | Case/sector/method shell + FAQ schema |
| `components/ServiceDetailLayout.tsx` | Service detail shell |
| `components/GeoComparisonTable.tsx` | GEO comparison tables |
| `middleware.ts` | www canonical host |
| `scripts/generate-seo.ts` | Write public sitemap/robots |
| `scripts/verify-seo.ts` | Drift checks |
| `.github/workflows/seo-checks.yml` | CI |
| `public/sitemap.xml` / `public/robots.txt` | Committed static copies |
| `netlify.toml` | Content-Type for sitemap/robots |
| `package.json` | `seo:generate`, `seo:verify`, build hooks |

---

## 13. Off-page / competitors / domain (strategy)

### Directories (P1/P2)

jspubs.com, Academy of Experts, EWI, ICAEW Business Valuation Community, Resolution, Law Society expert finder, Lexvisio.

### Competitors to monitor

Inquesta Forensic, Hilton Smythe, RA Valuation Services, jspubs listings, Lexvisio.

### `.co.uk` advantage

ccTLD = strong UK geotargeting. Include `en-GB` + `x-default` hreflang for completeness. Always canonical www. Do not launch duplicate `.com` without proper canonical/hreflang strategy.

---

## 14. Known implementation gaps / quirks (do not ignore)

**Closed in July 2026 gap-closure pass** (see `docs/PLan.md`): sitemap priorities for services/methods detail; `SITE_EMAIL` plural domain; Service + FAQPage on `/services/[slug]`; favicon/manifest; per-segment OG images; editorial `lastmod`; footer heading dilution; staging robots mirrored in `renderRobotsTxt()`; guide `about` IDs single-sourced via `lib/guide-about.ts`; docs URL counts/schema matrix reconciled.

**Still open / by design:**

1. **`SITE_URL` vs env:** Metadata/sitemap ignore `NEXT_PUBLIC_SITE_URL` — by design (hardcoded canonical host).
2. **No meta keywords / no blog / almost no content images or alt text.** Blog = P3.1; imagery = P3.2.
3. **Docs hygiene:** Prefer this file + code over stale narrative in older architecture appendix drafts when they conflict — keep Appendix A in `SEO-ARCHITECTURE.md` aligned after inventory changes.

---

## 15. Change checklist (when editing SEO)

When adding/changing a page:

1. Update data layer (`lib/*-data.ts`) or page `buildPageMetadata` + H1.
2. Update slug arrays in `lib/site.ts` if new dynamic route.
3. Update `clusterLinks.ts` / relatedLinks / glossary if linking changes.
4. Update schema builders if new entity type.
5. Run `npm run seo:generate` then `npm run seo:verify`.
6. Update `docs/SEO-ARCHITECTURE.md` keyword/cluster tables **and this file**.
7. Confirm robots (indexability) and sitemap include/exclude intentional.

---

*Generated as a complete SEO context dump for AI agents. For narrative strategy depth, also read `docs/SEO-ARCHITECTURE.md`.*
