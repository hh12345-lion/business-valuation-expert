import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Thank You | BusinessValuationExperts.co.uk",
  description: "Your expert witness instruction request has been received.",
  path: "/thank-you",
  robots: { index: false, follow: false },
});

export default function ThankYouPage() {
  return (
    <>
      <PageHero>
        <h1 className="text-3xl font-bold text-white md:text-4xl">Thank You</h1>
        <p className="mt-4 text-lg text-white/80">
          Your instruction request has been received. We will respond within one
          business day.
        </p>
      </PageHero>
      <ContentSection>
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center rounded bg-green px-6 py-3 text-sm font-semibold text-white"
        >
          Return to Homepage
        </Link>
      </ContentSection>
    </>
  );
}
