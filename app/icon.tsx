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
          background: "#0B1524",
          color: "#D9480F",
          fontSize: 16,
          fontWeight: 700,
          fontFamily: "Georgia, ui-serif, serif",
        }}
      >
        BV
      </div>
    ),
    { ...size },
  );
}
