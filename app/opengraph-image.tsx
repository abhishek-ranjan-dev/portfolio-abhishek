import { ImageResponse } from "next/og";

export const alt =
  "Abhishek Ranjan — Senior Next.js + Java Developer. Ex-Flipkart, currently at New Relic. IIT (ISM) Dhanbad 2022.";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #020617 0%, #0f172a 60%, #020617 100%)",
          color: "#f1f5f9",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: "18px",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#34d399",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background: "#34d399",
            }}
          />
          Available for full-stack &amp; architecture contracts
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "36px",
              color: "#94a3b8",
              letterSpacing: "-0.01em",
            }}
          >
            Abhishek Ranjan
          </div>
          <div
            style={{
              fontSize: "78px",
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span>Engineering&nbsp;Premium&nbsp;</span>
            <span
              style={{
                background:
                  "linear-gradient(135deg, #6ee7b7 0%, #34d399 50%, #818cf8 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Full-Stack&nbsp;Web&nbsp;Apps
            </span>
            <span>&nbsp;&amp;&nbsp;Enterprise&nbsp;Architecture.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #1e293b",
            paddingTop: "32px",
            fontSize: "22px",
            color: "#cbd5e1",
          }}
        >
          <div style={{ display: "flex", gap: "26px" }}>
            <span>Next.js</span>
            <span style={{ color: "#334155" }}>·</span>
            <span>Java · Spring</span>
            <span style={{ color: "#334155" }}>·</span>
            <span>AI Integrations</span>
          </div>
          <div style={{ color: "#64748b", fontSize: "18px" }}>
            abhishekranjan.dev
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
