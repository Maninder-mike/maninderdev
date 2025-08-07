import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  const title = "Maninder Dev";
  const subtitle = "Web developer";

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
          background: "linear-gradient(135deg, #111 0%, #374151 50%, #111 100%)",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: 84, fontWeight: 800, margin: 0 }}>{title}</h1>
        <p style={{ fontSize: 32, color: "#d1d5db", margin: 0 }}>{subtitle}</p>
      </div>
    ),
    {
      ...size,
    }
  );
}