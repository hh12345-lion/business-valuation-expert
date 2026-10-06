import type { Metadata } from "next";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Image Credits",
  description: "Photography credits and licences for this website.",
  alternates: { canonical: "/image-credits" },
  robots: { index: false, follow: true },
};

export default function ImageCreditsPage() {
  return (
    <>
      <PageHero>
        <h1 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Image credits
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          Photographs on this site come from Wikimedia Commons and are used
          under the Creative Commons licences shown. They have been cropped
          and toned.
        </p>
      </PageHero>
      <ContentSection>
        <ul className="divide-y divide-border border-y border-border">
          {Object.values(siteImages).map((image) => (
            <li key={image.src} className="py-4 text-sm leading-relaxed text-foreground">
              <a
                href={image.source}
                rel="noopener noreferrer"
                className="font-semibold text-charcoal underline-offset-2 hover:underline"
              >
                {image.title}
              </a>{" "}
              by {image.artist},{" "}
              <a
                href={image.licenseUrl}
                rel="noopener noreferrer license"
                className="font-medium text-charcoal underline decoration-green underline-offset-2"
              >
                {image.license}
              </a>
              .
            </li>
          ))}
        </ul>
      </ContentSection>
    </>
  );
}
