import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt = `${SITE_NAME} | Business Valuation Expert Witness UK`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#1C2B3A",
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#B8860B", marginBottom: 16 }}>
          UK Solicitors & Law Firms
        </div>
        <div style={{ fontSize: 52, fontWeight: 700, lineHeight: 1.15 }}>
          Business Valuation Expert Witness
        </div>
        <div style={{ fontSize: 26, marginTop: 24, color: "rgba(255,255,255,0.8)" }}>
          CPR Part 35 · FPR Part 25 · Court-Ready Reports
        </div>
      </div>
    ),
    { ...size },
  );
}
