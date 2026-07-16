import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentClusterNav } from "@/components/ContentClusterNav";
import { GeoComparisonTable } from "@/components/GeoComparisonTable";
import { PageBottomCta } from "@/components/PageBottomCta";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoBreadcrumbs } from "@/components/SeoBreadcrumbs";
import { ContentSection, Prose } from "@/components/ContentSection";
import { getGuide } from "@/lib/guides-data";
import { GUIDE_ABOUT_SERVICE } from "@/lib/guide-about";
import { getGuideClusterLinks } from "@/lib/seo/clusterLinks";
import { guideSlugs } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo-metadata";
import {
  articleSchema,
  breadcrumbSchema,
  organizationSchema,
} from "@/lib/schema";

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return buildPageMetadata({
    title: guide.pageTitle,
    description: guide.metaDescription,
    path: `/guides/${slug}`,
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: guide.hubLabel, path: `/guides/${slug}` },
  ];

  const aboutId = GUIDE_ABOUT_SERVICE[slug];
  if (!aboutId) {
    throw new Error(`Missing GUIDE_ABOUT_SERVICE mapping for guide: ${slug}`);
  }

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          breadcrumbSchema(breadcrumbs),
          articleSchema({
            headline: guide.h1,
            description: guide.metaDescription,
            path: `/guides/${slug}`,
            aboutId,
          }),
        ]}
      />
      <PageHero>
        <SeoBreadcrumbs
          includeJsonLd={false}
          items={breadcrumbs.map((b) => ({ name: b.name, href: b.path }))}
        />
        <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          {guide.h1}
        </h1>
      </PageHero>

      <ContentSection>
        {guide.sections.map((section) => (
          <section key={section.h2} className="mb-10 last:mb-0">
            <h2 className="text-xl font-semibold text-charcoal">{section.h2}</h2>
            <Prose>
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Prose>
            {section.h3?.map((sub) => (
              <div key={sub.title} className="mt-6">
                <h3 className="text-lg font-semibold text-charcoal">{sub.title}</h3>
                <Prose>
                  {sub.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </Prose>
              </div>
            ))}
          </section>
        ))}

        {slug === "single-joint-expert-business-valuation" ? (
          <GeoComparisonTable
            caption="Single Joint Expert (SJE) vs party-appointed expert (PAE) in UK business valuation"
            colAHeader="Single Joint Expert (SJE)"
            colBHeader="Party-appointed expert (PAE)"
            rows={[
              {
                label: "Instruction",
                colA: "Joint letter by both parties or court appointment",
                colB: "Each party instructs their own expert",
              },
              {
                label: "Report",
                colA: "One shared report",
                colB: "Separate reports; joint statement after meeting",
              },
              {
                label: "Cost",
                colA: "Typically shared equally",
                colB: "Each party bears own expert costs (subject to costs order)",
              },
              {
                label: "Best for",
                colA: "Lower-value or narrow disputes; court-directed economy",
                colB: "High-value or materially divergent valuations",
              },
              {
                label: "Rules",
                colA: "CPR 35.7 / FPR 25.11",
                colB: "CPR PD35 / FPR PD25A joint meeting process",
              },
            ]}
          />
        ) : null}

        <ContentClusterNav links={getGuideClusterLinks(slug)} />
      </ContentSection>

      <PageBottomCta />
    </>
  );
}
