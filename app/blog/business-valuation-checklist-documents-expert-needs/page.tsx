import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContentSection, Prose } from "@/components/ContentSection";
import { PageBottomCta } from "@/components/PageBottomCta";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoBreadcrumbs } from "@/components/SeoBreadcrumbs";
import { buildPageMetadata } from "@/lib/seo-metadata";
import {
  breadcrumbSchema,
  faqPageSchema,
  ORGANIZATION_ID,
  organizationSchema,
} from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const slug = "business-valuation-checklist-documents-expert-needs";
const path = `/blog/${slug}`;
const image = "/images/blog/business-valuation-checklist-documents-expert-needs.jpg";
const h1 = "Business Valuation Checklist: What Documents Does an Expert Need?";
const description =
  "Documents a business valuation expert may need: accounts, forecasts, ownership records, assets, contracts and management information.";

export const metadata: Metadata = buildPageMetadata({
  title: "Business Valuation Checklist: What Documents Does an Expert Need?",
  description,
  path,
});

const faqs = [
  {
    q: "How many years of accounts does a business valuation expert need?",
    a: "There is no fixed number of years that applies to every valuation. The period required depends on the circumstances, the nature of the business, the valuation date and the information needed for the valuation.",
  },
  {
    q: "What documents are needed to value a private company?",
    a: "Commonly requested information can include statutory accounts, management accounts, forecasts, ownership documents, details of assets and liabilities, and information about the company's operations and commercial activities. The exact requirements vary between assignments.",
  },
  {
    q: "Can a business be valued if some documents are missing?",
    a: "It may be possible, depending on the information that is unavailable and its significance to the valuation. An expert may request alternative information or consider appropriate assumptions where necessary.",
  },
  {
    q: "Do business forecasts form part of a valuation?",
    a: "They can. Forecasts may be relevant when considering future performance, particularly for valuation approaches that use projected cash flows. Their relevance depends on the circumstances and the methodology being considered.",
  },
  {
    q: "What information is needed to value company shares?",
    a: "In addition to financial and operational information about the company, an expert may need information about the shareholding structure, different share classes, shareholder rights, articles of association, shareholder agreements and previous share transactions.",
  },
  {
    q: "Does the valuation date affect the documents required?",
    a: "It can. The valuation date establishes the point in time to which the valuation relates, so financial and commercial information around that date may be relevant.",
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-1.5 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function BusinessValuationChecklistPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Document checklist", path },
  ];

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          breadcrumbSchema(breadcrumbs),
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: h1,
            description,
            image: `${SITE_URL}${image}`,
            datePublished: "2026-09-07",
            dateModified: "2026-09-07",
            inLanguage: "en-GB",
            author: { "@type": "Organization", "@id": ORGANIZATION_ID },
            publisher: { "@type": "Organization", "@id": ORGANIZATION_ID },
            mainEntityOfPage: `${SITE_URL}${path}`,
          },
          faqPageSchema(faqs),
        ]}
      />
      <PageHero>
        <SeoBreadcrumbs
          includeJsonLd={false}
          items={breadcrumbs.map((b) => ({ name: b.name, href: b.path }))}
        />
        <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">{h1}</h1>
      </PageHero>

      <ContentSection>
        <Prose>
          <p>
            A business valuation involves reviewing financial, commercial and other information to
            understand a company&apos;s position and the factors that may affect its value.
          </p>
          <p>
            The documents required can vary from one valuation to another. The nature of the
            business, what is being valued, the valuation date, the purpose of the valuation and the
            valuation approach can all affect the information an expert may need.
          </p>
          <p>
            Having the relevant records organised can make it easier to identify the information
            available and any areas that require further clarification.
          </p>
          <p>
            This business valuation checklist covers documents that may commonly be requested during
            a company or share valuation.
          </p>
          <p>
            <strong>Important:</strong> There is no universal document list for every business
            valuation. The information required depends on the circumstances of the particular
            valuation.
          </p>
        </Prose>

        <figure className="mt-8 overflow-hidden rounded-lg border border-border">
          <Image
            src={image}
            alt="Professionals reviewing financial documents and valuation records for a business valuation"
            width={1536}
            height={1024}
            priority
            className="h-auto w-full object-cover"
          />
        </figure>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-charcoal">
            Business Valuation Documents Checklist
          </h2>
          <Prose>
            <p>
              The following categories provide a useful starting point when preparing information for
              a business valuation.
            </p>
          </Prose>

          <h3 className="mt-8 text-lg font-semibold text-charcoal">1. Statutory Accounts</h3>
          <Prose>
            <p>
              Historical financial statements provide information about the company&apos;s financial
              performance and financial position.
            </p>
            <p>Depending on the circumstances, a business valuation expert may request:</p>
            <BulletList
              items={[
                "Statutory accounts for previous financial years",
                "Profit and loss accounts",
                "Balance sheets",
                "Notes to the accounts",
                "Directors' reports, where applicable",
                "Group accounts, where applicable",
                "Audit reports, where applicable",
              ]}
            />
            <p>
              The number of years required will depend on the valuation and the information
              available. More recent accounts and management information may also be relevant where
              the latest statutory accounts do not reflect the company&apos;s current position.
            </p>
            <p>
              The amount of information included in accounts filed at Companies House can also vary
              according to the company&apos;s size and reporting requirements. Some smaller companies
              can file accounts with less information than larger companies.
            </p>
          </Prose>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-charcoal">
            2. Management Accounts and Financial Reports
          </h2>
          <Prose>
            <p>
              Management accounts can provide more recent information than the latest annual
              accounts.
            </p>
            <p>These may include:</p>
            <BulletList
              items={[
                "Monthly or quarterly management accounts",
                "Current profit and loss information",
                "Current balance sheet information",
                "Revenue analysis",
                "Gross margin or operating margin analysis",
                "Management reporting",
                "Key performance indicators",
              ]}
            />
            <p>The information required will depend on the business and the valuation assignment.</p>
            <p>
              For example, where a company&apos;s trading position has changed significantly since
              its latest year end, more recent financial information may help an expert understand
              its current position.
            </p>
          </Prose>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-charcoal">
            3. Budgets, Forecasts and Business Plans
          </h2>
          <Prose>
            <p>
              Where future performance is relevant to the valuation, an expert may need to review
              the company&apos;s forecasts and the assumptions on which they are based.
            </p>
            <p>Potential documents include:</p>
            <BulletList
              items={[
                "Annual budgets",
                "Financial forecasts",
                "Cash flow forecasts",
                "Revenue projections",
                "Profit projections",
                "Capital expenditure plans",
                "Business plans",
                "Previous forecasts and actual results",
              ]}
            />
            <p>
              Forecasts should be supported by enough information to understand the assumptions
              used. For example, a projected increase in revenue may need to be considered alongside
              information about pricing, customers, capacity or expected changes in the business.
            </p>
            <p>
              The relevance of forecast information depends on the circumstances and the valuation
              approach being considered.
            </p>
            <p>
              For example, projected cash flows may be relevant where a discounted cash flow
              approach is being considered.
            </p>
            <p>
              For an overview of common approaches, see{" "}
              <Link href="/valuation-methods" className="font-medium text-green hover:underline">
                Business Valuation Methods UK
              </Link>
              .
            </p>
          </Prose>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-charcoal">4. Tax and Accounting Information</h2>
          <Prose>
            <p>
              Tax information may be relevant to some valuations, depending on the purpose and
              circumstances.
            </p>
            <p>Documents may include:</p>
            <BulletList
              items={[
                "Corporation Tax returns",
                "Tax computations",
                "VAT records",
                "Details of outstanding tax liabilities",
                "Information about tax losses or reliefs",
                "Correspondence concerning significant tax matters",
              ]}
            />
            <p>
              Not every valuation requires all of these documents. The expert can identify which tax
              information is relevant after considering the nature and scope of the assignment.
            </p>
          </Prose>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-charcoal">5. Company and Ownership Documents</h2>
          <Prose>
            <p>
              Where shares or an ownership interest are being valued, information about the
              company&apos;s structure and the rights attached to the relevant interest can be
              important.
            </p>
            <p>Potential documents include:</p>
            <BulletList
              items={[
                "Certificate of incorporation",
                "Articles of association",
                "Shareholder agreements",
                "Current shareholding information",
                "Details of different classes of shares",
                "Share option arrangements",
                "Details of previous share transactions",
                "Information about changes in ownership",
              ]}
            />
            <p>
              The rights attached to shares can differ between share classes. Voting rights,
              dividend rights and other provisions may therefore need to be considered when valuing
              a particular interest.
            </p>
            <p>
              For more information, see{" "}
              <Link
                href="/services/share-equity-valuation"
                className="font-medium text-green hover:underline"
              >
                Share &amp; Equity Valuation
              </Link>
              .
            </p>
          </Prose>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-charcoal">6. Information About the Business</h2>
          <Prose>
            <p>
              Financial statements do not necessarily provide all the information needed to
              understand how a business operates.
            </p>
            <p>An expert may therefore request information such as:</p>
            <BulletList
              items={[
                "A description of the business",
                "Main products or services",
                "Principal sources of revenue",
                "Major customers",
                "Key suppliers",
                "Main competitors",
                "Number of employees",
                "Management structure",
                "Operating locations",
                "Important commercial relationships",
                "Key contracts",
              ]}
            />
            <p>This information helps place the financial results in their wider commercial context.</p>
            <p>
              For example, a change in revenue may have a different significance depending on whether
              it resulted from changes in pricing, customer numbers, product mix, market conditions
              or another factor.
            </p>
          </Prose>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-charcoal">7. Assets and Liabilities</h2>
          <Prose>
            <p>The assets and liabilities of the business may also need to be considered.</p>
            <p>Relevant information can include:</p>
            <BulletList
              items={[
                "Property details",
                "Property valuation reports, where available",
                "Plant and machinery records",
                "Equipment registers",
                "Stock or inventory records",
                "Vehicle details",
                "Bank and loan information",
                "Lease agreements",
                "Significant creditors",
                "Other material liabilities",
                "Contingent liabilities, where relevant",
              ]}
            />
            <p>
              The extent of the review will depend on the nature of the business and the valuation
              approach.
            </p>
            <p>
              For an asset-backed company, information about property and other assets may be
              particularly relevant. A different business may require greater emphasis on earnings
              and future cash flows.
            </p>
          </Prose>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-charcoal">8. Goodwill and Intangible Assets</h2>
          <Prose>
            <p>Some businesses have value associated with assets that are not physical.</p>
            <p>Depending on the circumstances, information may be required about:</p>
            <BulletList
              items={[
                "Goodwill",
                "Brand names",
                "Trademarks",
                "Patents",
                "Copyright",
                "Software",
                "Licences",
                "Customer relationships",
                "Domain names",
                "Proprietary technology",
                "Other intellectual property",
              ]}
            />
            <p>
              Documents relating to the ownership, registration, licensing or transfer of these
              assets may also be relevant.
            </p>
            <p>
              The treatment of goodwill and other intangible assets depends on the circumstances of
              the valuation. Business goodwill and personal goodwill may need to be considered
              differently in some assignments.
            </p>
            <p>
              See{" "}
              <Link
                href="/services/goodwill-intangible"
                className="font-medium text-green hover:underline"
              >
                Goodwill &amp; Intangible Asset Valuation
              </Link>{" "}
              for further information.
            </p>
          </Prose>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-charcoal">
            9. Contracts and Commercial Agreements
          </h2>
          <Prose>
            <p>
              Material contracts can provide information about relationships that support the
              company&apos;s operations and revenue.
            </p>
            <p>Depending on the business, relevant documents may include:</p>
            <BulletList
              items={[
                "Major customer contracts",
                "Supplier agreements",
                "Distribution agreements",
                "Licensing agreements",
                "Franchise agreements",
                "Property leases",
                "Finance agreements",
                "Joint venture agreements",
                "Agreements relating to intellectual property",
              ]}
            />
            <p>
              It is not necessarily necessary to provide every contract held by the company. The
              relevant documents will depend on the nature of the valuation and the significance of
              particular agreements to the business.
            </p>
          </Prose>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-charcoal">
            10. Information About Directors and Key Management
          </h2>
          <Prose>
            <p>
              Information about directors, owners and key management can also be relevant,
              particularly in owner-managed businesses.
            </p>
            <p>This may include:</p>
            <BulletList
              items={[
                "Director remuneration",
                "Bonuses",
                "Benefits",
                "Shareholdings",
                "Employment arrangements",
                "Management responsibilities",
                "Changes in senior management",
                "Arrangements involving related parties",
              ]}
            />
            <p>
              An expert may need to understand how the company&apos;s reported results are affected
              by remuneration, benefits or transactions involving directors, shareholders or related
              parties.
            </p>
            <p>
              This can be relevant when considering whether adjustments to reported financial results
              are appropriate for the valuation.
            </p>
          </Prose>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-charcoal">
            Does Every Business Valuation Require the Same Documents?
          </h2>
          <Prose>
            <p>No. The documents required depend on the circumstances of the valuation.</p>
            <p>
              A small owner-managed company may require a different set of information from a larger
              group with subsidiaries, property, substantial borrowing or significant intellectual
              property.
            </p>
            <p>The information required may depend on:</p>
            <BulletList
              items={[
                "What is being valued",
                "The purpose of the valuation",
                "The valuation date",
                "The size and structure of the business",
                "The industry in which it operates",
                "The nature of the company's assets and liabilities",
                "The availability of historical information",
                "The valuation approach being considered",
              ]}
            />
            <p>
              The starting point for a valuation is to establish what is being valued, when it is
              being valued and why. The applicable basis of value and premise may also need to be
              established.
            </p>
            <p>
              The{" "}
              <Link href="/valuation-methods" className="font-medium text-green hover:underline">
                Business Valuation Methods UK
              </Link>{" "}
              guide provides further information about different valuation approaches.
            </p>
          </Prose>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-charcoal">What If Some Documents Are Missing?</h2>
          <Prose>
            <p>
              Some information may not be available, particularly where records are incomplete or a
              business has undergone changes over time.
            </p>
            <p>
              If a requested document cannot be provided, it is useful to identify this rather than
              assuming that it is unnecessary.
            </p>
            <p>
              Depending on the circumstances, an expert may request alternative information or make
              an appropriate assumption based on the available evidence.
            </p>
            <p>
              The significance of missing information will depend on what is unavailable and how
              relevant it is to the valuation.
            </p>
            <p>Missing information should therefore be identified as early as possible.</p>
          </Prose>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-charcoal">How to Prepare for a Business Valuation</h2>
          <Prose>
            <p>
              A simple preparation process can help organise the information before the valuation
              begins.
            </p>
          </Prose>
          <h3 className="mt-6 text-lg font-semibold text-charcoal">
            Business Valuation Preparation Checklist
          </h3>
          <Prose>
            <BulletList
              items={[
                "Confirm what business, asset or ownership interest is being valued.",
                "Confirm the valuation date.",
                "Confirm the purpose of the valuation.",
                "Gather historical statutory accounts.",
                "Collect recent management accounts.",
                "Gather relevant budgets and forecasts.",
                "Compile company and ownership documents.",
                "Prepare information about significant assets and liabilities.",
                "Gather relevant commercial agreements.",
                "Identify goodwill, intellectual property and other intangible assets.",
                "Compile information about directors and key management.",
                "Identify unusual or exceptional financial items.",
                "Make a note of any information that is unavailable.",
              ]}
            />
            <p>
              It can also be useful to keep documents clearly labelled and grouped by financial,
              corporate and commercial information.
            </p>
          </Prose>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-charcoal">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-6">
            {faqs.map((item) => (
              <div key={item.q}>
                <h3 className="text-lg font-semibold text-charcoal">{item.q}</h3>
                <p className="mt-2 leading-relaxed text-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-charcoal">Conclusion</h2>
          <Prose>
            <p>
              A business valuation can require more than a company&apos;s annual accounts. Financial
              records, management information, ownership documents, forecasts, assets, liabilities,
              contracts and information about the company&apos;s operations may all be relevant.
            </p>
            <p>
              There is no universal document list for every company valuation. The information
              required depends on what is being valued, the purpose of the valuation, the valuation
              date and the circumstances of the business.
            </p>
            <p>
              Preparing the main financial, corporate and commercial records in advance provides a
              practical starting point for identifying the information available and any areas that
              may need further clarification.
            </p>
          </Prose>
        </section>

        <p className="mt-10 text-sm leading-relaxed text-foreground">
          <strong>Disclaimer:</strong> This article provides general information only and is not
          legal, accounting or valuation advice. The documents required for a particular valuation
          should be established with the relevant professional based on the circumstances of the
          assignment.
        </p>
        <p className="mt-2 text-sm text-foreground">Last reviewed: September 2026</p>
      </ContentSection>

      <PageBottomCta />
    </>
  );
}
