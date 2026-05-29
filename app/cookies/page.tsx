import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SeoBreadcrumbs } from "@/components/SeoBreadcrumbs";
import { ContentSection, Prose } from "@/components/ContentSection";
import { SITE_NAME } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: `Cookie Policy | ${SITE_NAME}`,
  description:
    "How BusinessValuationExperts.co.uk uses cookies and similar technologies, how to manage consent, and which third-party tools may load when you opt in.",
  path: "/cookies",
  robots: { index: false, follow: true },
});

/**
 * Cookie Policy (template): extend with your legal team’s final wording,
 * subprocessors, and retention tables. Categories align with the CMP UI.
 */
export default function CookiePolicyPage() {
  return (
    <>
      <PageHero>
        <SeoBreadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Cookie Policy", href: "/cookies" },
          ]}
        />
        <h1 className="mt-4 text-3xl font-bold text-white">Cookie Policy</h1>
        <p className="mt-3 max-w-2xl text-sm text-white/80">
          Last updated: May 2026 · Operated in line with UK GDPR, PECR, and
          common CCPA-style transparency practices for non-UK visitors.
        </p>
      </PageHero>
      <ContentSection>
        <Prose>
          <section>
            <h2 className="text-xl font-semibold text-charcoal">1. Who we are</h2>
            <p>
              {SITE_NAME} (&quot;we&quot;, &quot;us&quot;) operates this website.
              This Cookie Policy explains how we use cookies and similar
              technologies, how you can control them, and how this interacts with
              our{" "}
              <Link href="/privacy" className="font-medium text-green hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-charcoal">2. What are cookies?</h2>
            <p>
              Cookies are small text files stored on your device. Similar
              technologies include local storage (for example to remember your
              consent choices), pixels, and scripts that set identifiers in the
              browser.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-charcoal">3. How we obtain consent</h2>
            <p>
              On your first visit, we show a consent banner. Non-essential cookies
              and third-party scripts load only after you opt in through{" "}
              <strong>Accept all</strong>, granular toggles under{" "}
              <strong>Customise preferences</strong>, or equivalent saved choices.
              You can reopen the dialog anytime via{" "}
              <strong>Cookie settings</strong> in the site footer.
            </p>
            <p>
              Consent is stored locally in your browser (localStorage) with a
              version flag and an expiry date so we can re-prompt when appropriate.
              Strictly necessary operations do not require marketing or analytics
              consent.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-charcoal">4. Categories we use</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Necessary</strong> - required for security, consent storage,
                core navigation, and similar essential functions. Always active.
              </li>
              <li>
                <strong>Analytics</strong> - helps us measure traffic and improve
                the site (for example Google Analytics, Hotjar). Only if you allow
                this category.
              </li>
              <li>
                <strong>Marketing</strong> - may include advertising and social
                measurement tools (for example Meta Pixel, LinkedIn Insight Tag,
                tags fired through Google Tag Manager). Only if you allow this
                category.
              </li>
              <li>
                <strong>Preferences</strong> - remembers optional UI or feature
                choices when we offer them. Only if you allow this category.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-charcoal">
              5. Example third-party tools (when enabled)
            </h2>
            <p>
              The table below is illustrative. Actual vendors depend on your
              configuration and which environment variables are set in production.
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-border">
              <table className="min-w-full text-left text-xs sm:text-sm">
                <thead className="bg-muted text-charcoal">
                  <tr>
                    <th className="px-3 py-2 font-semibold">Technology</th>
                    <th className="px-3 py-2 font-semibold">Typical purpose</th>
                    <th className="px-3 py-2 font-semibold">Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-white">
                  <tr>
                    <td className="px-3 py-2">Google Analytics 4</td>
                    <td className="px-3 py-2">Audience measurement</td>
                    <td className="px-3 py-2">Analytics</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">Google Tag Manager</td>
                    <td className="px-3 py-2">Tag orchestration / marketing pixels</td>
                    <td className="px-3 py-2">Analytics / Marketing</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">Meta Pixel</td>
                    <td className="px-3 py-2">Advertising effectiveness</td>
                    <td className="px-3 py-2">Marketing</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">LinkedIn Insight Tag</td>
                    <td className="px-3 py-2">Professional audience measurement</td>
                    <td className="px-3 py-2">Marketing</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">Hotjar</td>
                    <td className="px-3 py-2">UX analytics / session insight</td>
                    <td className="px-3 py-2">Analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-charcoal">6. Google Consent Mode</h2>
            <p>
              Where Google tags are used, we align with Google Consent Mode signals
              (for example <code className="rounded bg-muted px-1">analytics_storage</code>,{" "}
              <code className="rounded bg-muted px-1">ad_storage</code>,{" "}
              <code className="rounded bg-muted px-1">ad_user_data</code>,{" "}
              <code className="rounded bg-muted px-1">ad_personalization</code>, and{" "}
              <code className="rounded bg-muted px-1">personalization_storage</code>)
              so consent updates apply when you change preferences without always
              requiring a full page reload.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-charcoal">7. Withdrawing consent</h2>
            <p>
              Use <strong>Cookie settings</strong> in the footer to change or
              withdraw optional categories. You can also clear site data for this
              origin in your browser settings. Withdrawing consent stops new
              non-essential reads/writes where technically feasible; some identifiers
              may persist until natural expiry unless you clear them manually.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-charcoal">8. Contact</h2>
            <p>
              Questions about this policy or our privacy practices should be sent
              using the details in our{" "}
              <Link href="/privacy" className="font-medium text-green hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section className="mt-8 rounded-lg border border-border bg-muted/50 p-5">
            <h2 className="text-lg font-semibold text-charcoal">
              Developer note: environment variables
            </h2>
            <p className="mt-2">
              Optional measurement IDs (only used when set and after consent):
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 font-mono text-xs text-foreground/80">
              <li>NEXT_PUBLIC_GA_MEASUREMENT_ID</li>
              <li>NEXT_PUBLIC_GTM_ID</li>
              <li>NEXT_PUBLIC_META_PIXEL_ID</li>
              <li>NEXT_PUBLIC_LINKEDIN_PARTNER_ID</li>
              <li>NEXT_PUBLIC_HOTJAR_SITE_ID</li>
              <li>NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION (optional, default 6)</li>
            </ul>
          </section>
        </Prose>
      </ContentSection>
    </>
  );
}
