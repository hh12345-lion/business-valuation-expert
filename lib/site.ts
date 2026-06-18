export const SITE_URL = "https://www.businessvaluationexperts.co.uk";
export const SITE_NAME = "BusinessValuationExperts";
export const SITE_EMAIL = "contact@businessvaluationexpert.co.uk";
export const SITE_REGION = "United Kingdom";
/** Natural prose for footer and page copy (not displayed as a banner). */
export const UK_SERVICE_SUMMARY =
  "We connect solicitors and law firms in England and Wales with business valuation expert witnesses for CPR Part 35 civil and FPR Part 25 family proceedings. This service is limited to the United Kingdom.";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/businessvaluationexperts";

export const PUBLIC_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL;

export const guideSlugs = [
  "shareholder-disputes-valuation-guide",
  "divorce-business-valuation-guide",
  "dcf-maintainable-earnings-expert-guide",
  "single-joint-expert-business-valuation",
  "hmrc-share-valuation-disputes",
  "instructing-expert-witness-letter",
] as const;

export const caseTypeSlugs = [
  "shareholder-dispute-s994",
  "divorce-financial-remedy",
  "partnership-dissolution",
  "commercial-litigation-breach-of-warranty",
  "insolvency-administration",
  "tax-tribunal-hmrc-valuation",
  "professional-negligence-accountant",
  "intellectual-property-valuation",
  "management-buyout-dispute",
  "compulsory-purchase-goodwill",
] as const;

export const sectorSlugs = [
  "technology-saas-digital-businesses",
  "professional-practices",
  "retail-hospitality-leisure",
  "property-companies",
  "manufacturing-distribution",
  "financial-services",
  "healthcare-dental-medical",
  "creative-media-ip-businesses",
] as const;

import { CASE_TYPES } from "@/lib/case-types-data";
import { SECTORS } from "@/lib/sectors-data";
import {
  SERVICES,
  serviceNavLabel,
} from "@/lib/services-data";
import { VALUATION_METHODS } from "@/lib/valuation-methods-data";

export const navLinks = [{ href: "/", label: "Home" }] as const;

export const serviceNavItems = SERVICES.map((s) => ({
  href: `/services/${s.anchor}`,
  label: serviceNavLabel(s.title),
}));

export const valuationMethodNavItems = VALUATION_METHODS.map((m) => ({
  href: `/valuation-methods/${m.slug}`,
  label: m.hubLabel,
}));

export const caseTypeNavItems = CASE_TYPES.map((c) => ({
  href: `/case-types/${c.slug}`,
  label: c.hubLabel,
}));

export const sectorNavItems = SECTORS.map((s) => ({
  href: `/sectors/${s.slug}`,
  label: s.hubLabel,
}));

export const resourcesNavItems = [
  { href: "/guides", label: "Guides" },
  { href: "/qualifications", label: "Qualifications" },
  { href: "/how-to-instruct", label: "How to Instruct" },
] as const;
