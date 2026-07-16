import { SITE_NAME } from "@/lib/site";
import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgCard,
} from "@/lib/seo/ogImage";

export const alt = `${SITE_NAME} | Business Valuation Expert Witness UK`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return renderOgCard({
    eyebrow: "UK Solicitors & Law Firms",
    title: "Business Valuation Expert Witness",
  });
}
