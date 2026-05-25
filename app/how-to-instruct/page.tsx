import type { Metadata } from "next";
import Link from "next/link";
import { ContentClusterNav } from "@/components/ContentClusterNav";
import { PageBottomCta } from "@/components/PageBottomCta";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoBreadcrumbs } from "@/components/SeoBreadcrumbs";
import { ContentSection } from "@/components/ContentSection";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { pageGraph } from "@/lib/schema";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "How to Instruct", path: "/how-to-instruct" },
];

export const metadata: Metadata = buildPageMetadata({
  title: "How to Instruct a Business Valuation Expert Witness UK | Step-by-Step Guide",
  description:
    "Step-by-step guide for UK solicitors on finding, vetting, and instructing the right business valuation expert witness. SJE and party-appointed expert explained.",
  path: "/how-to-instruct",
});

const steps = [
  {
    n: 1,
    title: "Identify the Legal Context",
    body: "Civil (CPR Part 35) or Family (FPR Part 25)? Is court permission required for family cases before instructing?",
  },
  {
    n: 2,
    title: "Define the Valuation Purpose",
    body: "Share valuation? Goodwill? IP? Going concern vs break-up? Single Joint Expert or party-appointed?",
  },
  {
    n: 3,
    title: "Identify Sector Expertise",
    body: "Tech, professional practice, retail, property, manufacturing? Does the expert know sector comparable transaction data?",
  },
  {
    n: 4,
    title: "Check Credentials & Experience",
    body: "ACA/FCA, CFA, CVA, RICS? Prior CPR Part 35 / FPR Part 25 testimony? Active practice?",
  },
  {
    n: 5,
    title: "Conflicts Check",
    body: "Prior relationship with the company, shareholders, or their advisers?",
  },
  {
    n: 6,
    title: "Letter of Instruction",
    body: "Scope, specific questions, financial documents to provide, fee structure, timetable.",
  },
  {
    n: 7,
    title: "Provide Documents",
    body: "3 years audited accounts, management accounts, board minutes, shareholders' agreement, any prior valuations.",
  },
] as const;

const matchingTimeline = [
  "Submit case details via our contact form",
  "We review legal framework, sector, and urgency",
  "Shortlist credentialed experts with relevant testimony history",
  "Introduce expert for conflicts check and fee discussion",
  "You issue letter of instruction directly to the expert",
  "Expert commences work under agreed timetable",
  "Report delivered CPR/FPR compliant; joint meetings as directed",
] as const;

const sjeSteps = [
  "Both parties agree on expert (or court appoints)",
  "Joint letter of instruction",
  "Expert produces single report",
  "Both parties may put written questions",
  "Expert determination or court hearing",
] as const;

export default function HowToInstructPage() {
  return (
    <>
      <JsonLd data={pageGraph(breadcrumbs)} />
      <PageHero>
        <SeoBreadcrumbs
          includeJsonLd={false}
          items={breadcrumbs.map((b) => ({ name: b.name, href: b.path }))}
        />
        <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          How to Instruct a Business Valuation Expert Witness
        </h1>
      </PageHero>

      <ContentSection>
        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-lg border border-border bg-white p-6 shadow-card"
            >
              <span className="text-sm font-bold text-gold">Step {s.n}</span>
              <h2 className="mt-2 text-lg font-semibold text-charcoal">{s.title}</h2>
              <p className="mt-2 text-sm text-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-charcoal">
          Our Matching Process
        </h2>
        <ol className="mt-6 list-decimal space-y-3 pl-5 text-foreground">
          {matchingTimeline.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>

        <h2 className="mt-12 text-2xl font-bold text-charcoal">
          Single Joint Expert Process
        </h2>
        <ol className="mt-6 list-decimal space-y-3 pl-5 text-foreground">
          {sjeSteps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>

        <h2 className="mt-12 text-2xl font-bold text-charcoal">Red Flags</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground">
          <li>No active practice outside expert work</li>
          <li>No CPR Part 35 or FPR Part 25 experience</li>
          <li>Unable to explain methodology to a judge</li>
          <li>Conflict of interest not disclosed</li>
          <li>No professional indemnity insurance</li>
        </ul>
        <p className="mt-6">
          <Link
            href="/guides/instructing-expert-witness-letter"
            className="font-medium text-green hover:underline"
          >
            Guide: drafting a letter of instruction →
          </Link>
        </p>
      </ContentSection>

      <PageBottomCta />
    </>
  );
}
