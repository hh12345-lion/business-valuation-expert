import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export function renderOgCard(input: {
  eyebrow: string;
  title: string;
  footer?: string;
}): ImageResponse {
  const footer =
    input.footer ?? "CPR Part 35 · FPR Part 25 · Court-Ready Reports";

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
          position: "relative",
          background: "#0B1524",
          color: "#fff",
          fontFamily: "Georgia, ui-serif, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 12,
            background: "#D9480F",
          }}
        />
        <div style={{ fontSize: 28, color: "#0B6E99", marginBottom: 16 }}>
          {input.eyebrow}
        </div>
        <div style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.15 }}>
          {input.title}
        </div>
        <div
          style={{
            fontSize: 24,
            marginTop: 24,
            color: "rgba(255,255,255,0.8)",
          }}
        >
          {footer}
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
