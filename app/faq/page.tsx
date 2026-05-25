import type { Metadata } from "next";
import { ContentClusterNav } from "@/components/ContentClusterNav";
import { PageBottomCta } from "@/components/PageBottomCta";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoBreadcrumbs } from "@/components/SeoBreadcrumbs";
import { ContentSection } from "@/components/ContentSection";
import { FAQ_ITEMS } from "@/lib/faq-data";
import { FAQ_PAGE_CLUSTER } from "@/lib/seo/clusterLinks";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { faqPageSchema, pageGraph } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Business Valuation Expert Witness FAQ UK | Common Questions Answered",
  description:
    "Answers to common questions about UK business valuation expert witnesses — valuation methods, fees, SJE vs party expert, CPR Part 35, FPR Part 25, and more.",
  path: "/faq",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          pageGraph(breadcrumbs, [faqPageSchema(FAQ_ITEMS)]),
        ]}
      />
      <PageHero>
        <SeoBreadcrumbs
          includeJsonLd={false}
          items={breadcrumbs.map((b) => ({ name: b.name, href: b.path }))}
        />
        <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          Business Valuation Expert Witness FAQ for UK Solicitors
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-white/80">
          Answers on UK business valuation expert witnesses — fees, CPR Part 35,
          FPR Part 25, valuation methods, and instructing single joint experts.
        </p>
      </PageHero>

      <ContentSection>
        <dl className="space-y-10">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q}>
              <dt className="text-lg font-semibold text-charcoal">{item.q}</dt>
              <dd className="mt-2 leading-relaxed text-foreground">{item.a}</dd>
            </div>
          ))}
        </dl>
        <ContentClusterNav links={FAQ_PAGE_CLUSTER} />
      </ContentSection>

      <PageBottomCta />
    </>
  );
}
