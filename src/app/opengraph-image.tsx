import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  const title = "Maninder Dev";
  const subtitle = "Next.js • React • Tailwind";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: 64,
          background: "linear-gradient(135deg, #111 0%, #1f2937 50%, #111 100%)",
          color: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "6px 10px",
            borderRadius: 8,
            background: "#111827",
            color: "#9ca3af",
            fontSize: 24,
          }}
        >
          maninder.dev
        </div>
        <div style={{ height: 24 }} />
        <h1
          style={{
            fontSize: 80,
            fontWeight: 700,
            letterSpacing: -1,
            margin: 0,
          }}
        >
          {title}
        </h1>
        <div style={{ height: 12 }} />
        <p style={{ fontSize: 32, color: "#d1d5db", margin: 0 }}>{subtitle}</p>
      </div>
    ),
    {
      ...size,
    }
  );
}