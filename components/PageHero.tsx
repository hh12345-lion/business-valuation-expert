import type { ReactNode } from "react";

export function PageHero({ children }: { children: ReactNode }) {
  return (
    <header className="relative overflow-hidden bg-charcoal text-white">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-green"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl min-w-0 px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
        {children}
      </div>
    </header>
  );
}
