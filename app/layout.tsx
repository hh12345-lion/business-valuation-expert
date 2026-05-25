import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConsentModeBootstrap } from "@/components/cookies/ConsentModeBootstrap";
import { CookieConsentRoot } from "@/components/cookies/CookieConsentRoot";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Business Valuation Expert Witness UK`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Find a qualified business valuation expert witness in the UK. CPR Part 35 and FPR Part 25 compliant reports for litigation and family law.",
  alternates: {
    canonical: SITE_URL,
    languages: { "en-GB": SITE_URL, "x-default": SITE_URL },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  robots: { index: true, follow: true },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
  ...(process.env.BING_SITE_VERIFICATION
    ? { other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="flex min-h-full min-w-0 flex-col overflow-x-clip font-sans antialiased text-foreground">
        <ConsentModeBootstrap />
        <CookieConsentRoot>
          <SiteHeader />
          <main className="flex flex-1 flex-col">{children}</main>
          <SiteFooter />
        </CookieConsentRoot>
      </body>
    </html>
  );
}
