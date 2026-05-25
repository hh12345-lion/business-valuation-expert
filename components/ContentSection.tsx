import type { ReactNode } from "react";

export function ContentSection({
  children,
  alt = false,
  wide = false,
  className = "",
  id,
}: {
  children: ReactNode;
  alt?: boolean;
  /** Wider container for dense layouts (e.g. contact form + sidebar). */
  wide?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 ${alt ? "bg-muted" : "bg-white"} ${className}`}
    >
      <div
        className={`mx-auto min-w-0 px-4 sm:px-6 lg:px-8 ${
          wide ? "max-w-7xl" : "max-w-5xl"
        }`}
      >
        {children}
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-4 text-base leading-relaxed text-foreground">
      {children}
    </div>
  );
}
