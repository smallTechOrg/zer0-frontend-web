// opengraph-image.tsx — generates a static OG/Twitter card image at build time.
// Next.js static export runs ImageResponse during `next build` and outputs
// a PNG to code/out/opengraph-image.png, served at https://zer0.smalltech.in/opengraph-image.png
// Referenced automatically by Next.js via the metadata in layout.tsx.
// No `runtime = 'edge'` — that's incompatible with static export.
// Colours follow the smallTech brand tokens (readme / ink / gold). Flat, no effects,
// except the approved gold-70 -> gold gradient on the accent phrase.

import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Zer0 — Operationalising Agentic AI for Small Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F5F1EE",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
          padding: "72px 80px",
          color: "#1C1B18",
        }}
      >
        <div style={{ display: "flex", fontSize: "44px", fontWeight: 700 }}>Zer0</div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: "20px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#4F4D4A",
              marginBottom: "24px",
            }}
          >
            Zer0 by smallTech
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: "72px", fontWeight: 700, lineHeight: 1.1 }}>
            <span>Your business, rewired for the</span>
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #83602E, #D68A2E)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              agentic age.
            </span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "28px", color: "#4F4D4A" }}>
            Operationalising agentic AI for small businesses.
          </span>
          <span style={{ fontSize: "24px", fontWeight: 600 }}>zer0.smalltech.in</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
