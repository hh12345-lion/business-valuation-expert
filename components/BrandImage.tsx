import Image from "next/image";
import { siteImages, type SiteImageSlug } from "@/lib/site-images";

/**
 * Photograph toned warm to sit on the cream page, with the monogram's
 * diagonal corner cut and its orange bar. Size it with className.
 */
export function BrandImage({
  image,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 480px",
  preload = false,
  caption,
}: {
  image: SiteImageSlug;
  className?: string;
  sizes?: string;
  preload?: boolean;
  caption?: string;
}) {
  const { src, alt } = siteImages[image];

  return (
    <figure>
      <div className="relative">
        <div className={`bve-cut relative overflow-hidden bg-charcoal ${className}`}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            preload={preload}
            className="object-cover grayscale contrast-[1.05]"
          />
          <span aria-hidden className="absolute inset-0 bg-tan mix-blend-multiply" />
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-charcoal/45 to-transparent"
          />
        </div>
        <span aria-hidden className="absolute -bottom-2 left-6 h-2 w-24 bg-green" />
      </div>
      {caption ? (
        <figcaption className="mt-4 pl-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/80">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
