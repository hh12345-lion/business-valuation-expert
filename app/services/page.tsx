import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  Building2,
  Calculator,
  FileCheck,
  Handshake,
  Landmark,
  Scale,
  Sparkles,
} from "lucide-react";
import { ContentClusterNav } from "@/components/ContentClusterNav";
import { PageBottomCta } from "@/components/PageBottomCta";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoBreadcrumbs } from "@/components/SeoBreadcrumbs";
import { ContentSection } from "@/components/ContentSection";
import { SERVICES } from "@/lib/services-data";
import { SERVICES_PAGE_CLUSTER } from "@/lib/seo/clusterLinks";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { breadcrumbSchema, servicesPageGraph } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Business Valuation Expert Witness Services UK | Full Service List",
  description:
    "CPR Part 35 and FPR Part 25 business valuation expert witness services UK: share valuation, matrimonial valuations, S994 petitions, goodwill, insolvency, and expert determination.",
  path: "/services",
});

const icons = [
  BarChart3,
  Scale,
  Building2,
  Sparkles,
  Calculator,
  Landmark,
  Handshake,
  FileCheck,
] as const;

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesPage() {
  const servicesGraph = servicesPageGraph();

  return (
    <>
      <JsonLd
        data={[
          servicesGraph,
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <PageHero>
        <SeoBreadcrumbs
          includeJsonLd={false}
          items={breadcrumbs.map((b) => ({ name: b.name, href: b.path }))}
        />
        <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          Business Valuation Expert Witness Services
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-white/80">
          CPR Part 35 civil and FPR Part 25 family proceedings — court-ready
          valuation reports from qualified UK experts for solicitors and law firms.
        </p>
      </PageHero>

      <ContentSection>
        <p className="leading-relaxed text-foreground">
          BusinessValuationExperts.co.uk matches UK solicitors with credentialed
          business valuation expert witnesses across shareholder disputes, divorce
          financial remedy, HMRC challenges, insolvency, and commercial litigation.
          Every engagement follows CPR Part 35 or FPR Part 25 reporting standards and
          the expert&apos;s overriding duty to the court.{" "}
          <Link href="/what-is-a-business-valuation-expert-witness" className="text-green hover:underline">
            What is an expert witness?
          </Link>
        </p>
      </ContentSection>

      {SERVICES.map((service, idx) => {
        const Icon = icons[idx] ?? BarChart3;
        return (
          <ContentSection key={service.id} alt={idx % 2 === 1} id={service.anchor}>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-green/10 text-green">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold text-charcoal">
                  <Link
                    href={`/services/${service.anchor}`}
                    className="hover:text-green hover:underline"
                  >
                    {service.title}
                  </Link>
                </h2>
                <p className="mt-4 leading-relaxed text-foreground">{service.content}</p>
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full min-w-[320px] border-collapse text-sm">
                    <caption className="mb-3 text-left text-sm font-medium text-charcoal">
                      {service.title} — expert witness methodology (UK)
                    </caption>
                    <thead>
                      <tr className="border-b border-border bg-muted">
                        <th className="px-3 py-2 text-left font-semibold text-charcoal" scope="col">
                          Phase
                        </th>
                        <th className="px-3 py-2 text-left font-semibold text-charcoal" scope="col">
                          What We Do
                        </th>
                        <th className="px-3 py-2 text-left font-semibold text-charcoal" scope="col">
                          Deliverable
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {service.phases.map((row) => (
                        <tr key={row.phase} className="border-b border-border">
                          <td className="px-3 py-2 font-medium text-charcoal">
                            {row.phase}
                          </td>
                          <td className="px-3 py-2 text-foreground">{row.whatWeDo}</td>
                          <td className="px-3 py-2 text-foreground">{row.deliverable}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {service.caseTypeLink ? (
                  <p className="mt-4 text-sm">
                    Related:{" "}
                    <Link
                      href={service.caseTypeLink.href}
                      className="font-medium text-green hover:underline"
                    >
                      {service.caseTypeLink.label}
                    </Link>
                  </p>
                ) : null}
              </div>
            </div>
          </ContentSection>
        );
      })}

      <ContentSection alt>
        <ContentClusterNav links={SERVICES_PAGE_CLUSTER} />
      </ContentSection>

      <PageBottomCta />
    </>
  );
}
