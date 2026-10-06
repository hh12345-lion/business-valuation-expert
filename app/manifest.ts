import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BusinessValuationExperts",
    short_name: "BVE",
    description:
      "UK business valuation expert witnesses for solicitors, CPR Part 35 and FPR Part 25.",
    start_url: "/",
    display: "standalone",
    background_color: "#EFEAE0",
    theme_color: "#1A1E1F",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
