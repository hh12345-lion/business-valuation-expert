import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BusinessValuationExperts",
    short_name: "BVE",
    description:
      "UK business valuation expert witnesses for solicitors — CPR Part 35 and FPR Part 25.",
    start_url: "/",
    display: "standalone",
    background_color: "#1C2B3A",
    theme_color: "#1C2B3A",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
