import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1C2B3A",
          color: "#B8860B",
          fontSize: 18,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        B
      </div>
    ),
    { ...size },
  );
}
