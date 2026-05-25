import { ORGANIZATION_ID, serviceId } from "@/lib/schema";

/** Article `about` @id per SEO-ARCHITECTURE §4 */
export const GUIDE_ABOUT_SERVICE: Record<string, string> = {
  "shareholder-disputes-valuation-guide": serviceId("shareholder-dispute-s994"),
  "divorce-business-valuation-guide": serviceId("matrimonial-divorce-valuation"),
  "dcf-maintainable-earnings-expert-guide": serviceId("share-equity-valuation"),
  "single-joint-expert-business-valuation": ORGANIZATION_ID,
  "hmrc-share-valuation-disputes": serviceId("share-equity-valuation"),
  "instructing-expert-witness-letter": ORGANIZATION_ID,
};
