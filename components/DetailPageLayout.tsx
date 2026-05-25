import { ContentClusterNav } from "@/components/ContentClusterNav";
import { PageBottomCta } from "@/components/PageBottomCta";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoBreadcrumbs } from "@/components/SeoBreadcrumbs";
import { ContentSection, Prose } from "@/components/ContentSection";
import type { ClusterLink } from "@/lib/seo/clusterLinks";
import {
  faqPageSchema,
  organizationSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import type { ContentPage } from "@/lib/types";

type Props = {
  page: ContentPage;
  hubName: string;
  hubHref: string;
  clusterLinks: ClusterLink[];
};

export function DetailPageLayout({
  page,
  hubName,
  hubHref,
  clusterLinks,
}: Props) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: hubName, path: hubHref },
    { name: page.hubLabel, path: `${hubHref}/${page.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          breadcrumbSchema(breadcrumbs),
          faqPageSchema(page.faq),
        ]}
      />
      <PageHero>
        <SeoBreadcrumbs
          includeJsonLd={false}
          items={breadcrumbs.map((b) => ({
            name: b.name,
            href: b.path,
          }))}
        />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          {page.h1}
        </h1>
      </PageHero>

      <ContentSection>
        <Prose>
          {page.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Prose>

        {page.sectorMultiples?.length ? (
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[320px] border-collapse text-sm">
              <caption className="mb-3 text-left text-sm font-medium text-charcoal">
                Indicative UK sector valuation benchmarks (litigation reference)
              </caption>
              <thead>
                <tr className="border-b border-border bg-muted">
                  <th className="px-3 py-2 text-left font-semibold text-charcoal" scope="col">
                    Sector / asset
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-charcoal" scope="col">
                    Typical multiple / basis
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-charcoal" scope="col">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {page.sectorMultiples.map((row) => (
                  <tr key={row.sector} className="border-b border-border">
                    <td className="px-3 py-2 font-medium text-charcoal">{row.sector}</td>
                    <td className="px-3 py-2 text-foreground">{row.typicalMultiple}</td>
                    <td className="px-3 py-2 text-foreground">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-2 text-xs text-foreground/70">
              Indicative ranges from published transaction surveys and expert witness
              practice; case-specific evidence required for court.
            </p>
          </div>
        ) : null}

        <ContentClusterNav links={clusterLinks} />

        <section className="mt-12 border-t border-border pt-10">
          <h2 className="text-xl font-semibold text-charcoal">Common questions</h2>
          <dl className="mt-6 space-y-8">
            {page.faq.map((item) => (
              <div key={item.q}>
                <dt className="font-semibold text-charcoal">{item.q}</dt>
                <dd className="mt-2 leading-relaxed text-foreground">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      </ContentSection>

      <PageBottomCta />
    </>
  );
}
