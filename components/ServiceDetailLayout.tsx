import Link from "next/link";
import { ContentClusterNav } from "@/components/ContentClusterNav";
import { PageBottomCta } from "@/components/PageBottomCta";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoBreadcrumbs } from "@/components/SeoBreadcrumbs";
import { ContentSection, Prose } from "@/components/ContentSection";
import type { Service } from "@/lib/services-data";
import type { ClusterLink } from "@/lib/seo/clusterLinks";
import {
  breadcrumbSchema,
  buildServiceSchema,
  faqPageSchema,
  organizationSchema,
} from "@/lib/schema";

type Props = {
  service: Service;
  clusterLinks: ClusterLink[];
};

export function ServiceDetailLayout({ service, clusterLinks }: Props) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.anchor}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          breadcrumbSchema(breadcrumbs),
          buildServiceSchema(service),
          faqPageSchema(service.faq),
        ]}
      />
      <PageHero>
        <SeoBreadcrumbs
          includeJsonLd={false}
          items={breadcrumbs.map((b) => ({ name: b.name, href: b.path }))}
        />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          {service.title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
          {service.summary}
        </p>
      </PageHero>

      <ContentSection>
        <Prose>
          <p>{service.content}</p>
        </Prose>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[320px] border-collapse text-sm">
            <caption className="mb-3 text-left text-sm font-medium text-charcoal">
              Typical expert witness work phases
            </caption>
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="px-3 py-2 text-left font-semibold text-charcoal" scope="col">
                  Phase
                </th>
                <th className="px-3 py-2 text-left font-semibold text-charcoal" scope="col">
                  What we do
                </th>
                <th className="px-3 py-2 text-left font-semibold text-charcoal" scope="col">
                  Deliverable
                </th>
              </tr>
            </thead>
            <tbody>
              {service.phases.map((row) => (
                <tr key={row.phase} className="border-b border-border">
                  <td className="px-3 py-2 font-medium text-charcoal">{row.phase}</td>
                  <td className="px-3 py-2 text-foreground">{row.whatWeDo}</td>
                  <td className="px-3 py-2 text-foreground">{row.deliverable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {service.caseTypeLink ? (
          <p className="mt-8 text-foreground">
            Related case type:{" "}
            <Link
              href={service.caseTypeLink.href}
              className="font-medium text-green hover:underline"
            >
              {service.caseTypeLink.label}
            </Link>
          </p>
        ) : null}

        <ContentClusterNav links={clusterLinks} />

        <section className="mt-12 border-t border-border pt-10">
          <h2 className="text-xl font-semibold text-charcoal">Common questions</h2>
          <dl className="mt-6 space-y-8">
            {service.faq.map((item) => (
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
