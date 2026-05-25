import type { ReactNode } from "react";

export function PageHero({ children }: { children: ReactNode }) {
  return (
    <header className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl min-w-0 px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
        {children}
      </div>
    </header>
  );
}
