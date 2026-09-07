import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { PageBottomCta } from "@/components/PageBottomCta";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoBreadcrumbs } from "@/components/SeoBreadcrumbs";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { pageGraph } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog: Business Valuation Expert Insights",
  description:
    "Articles for solicitors and companies on business valuation documents, methods, and what an expert may need to review.",
  path: "/blog",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

const posts = [
  {
    slug: "business-valuation-checklist-documents-expert-needs",
    title: "Business Valuation Checklist: What Documents Does an Expert Need?",
    blurb:
      "A practical starting list of financial, ownership, commercial and forecast documents a business valuation expert may request.",
    image: "/images/blog/business-valuation-checklist-documents-expert-needs.jpg",
  },
] as const;

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd data={pageGraph(breadcrumbs)} />
      <PageHero>
        <SeoBreadcrumbs
          includeJsonLd={false}
          items={breadcrumbs.map((b) => ({ name: b.name, href: b.path }))}
        />
        <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">Blog</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80">
          Articles on business valuation documents, methods and the information an expert may need
          to review.
        </p>
      </PageHero>

      <ContentSection>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="overflow-hidden rounded-lg border border-border bg-white shadow-card"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <Image
                  src={post.image}
                  alt=""
                  width={1536}
                  height={1024}
                  className="h-56 w-full object-cover"
                />
              </Link>
              <div className="p-6">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-lg font-semibold text-charcoal hover:text-green"
                >
                  {post.title}
                </Link>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{post.blurb}</p>
                <p className="mt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-green hover:underline"
                  >
                    Read article →
                  </Link>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </ContentSection>

      <PageBottomCta />
    </>
  );
}
