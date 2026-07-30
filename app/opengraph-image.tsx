import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/* Site-brede social preview. Er was er nog geen enkele, dus elke gedeelde
   link - in WhatsApp, LinkedIn, Slack of een AI-antwoord - liet niets zien.
   Bewust zonder externe fonts: die moeten over het netwerk opgehaald worden
   tijdens het renderen en dat is precies waar deze route op stukloopt. */

export const alt = "Brandlift - strategische websites met lokale SEO";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BLUE = "#0130fd";
const INK = "#000000";
const PAPER = "#fdfdfd";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: INK,
          padding: 72,
          position: "relative",
        }}
      >
        {/* voltage-hoek rechtsboven, net als op de site */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 150,
            height: 150,
            background: BLUE,
            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
          }}
        />
        {/* gloed linksonder */}
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -120,
            width: 620,
            height: 620,
            borderRadius: 620,
            background: "rgba(1,48,253,0.35)",
            filter: "blur(120px)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 26, height: 26, background: BLUE, borderRadius: 6 }} />
          <div
            style={{
              color: PAPER,
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: 8,
              textTransform: "uppercase",
            }}
          >
            Brandlift
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: PAPER,
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            Online net zo sterk
          </div>
          <div
            style={{
              color: BLUE,
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -2,
              fontStyle: "italic",
            }}
          >
            als in het echt.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.16)",
            paddingTop: 28,
          }}
        >
          <div style={{ color: "#c7c9d3", fontSize: 26 }}>
            Strategische websites met lokale SEO
          </div>
          <div style={{ color: "#9aa0b5", fontSize: 24 }}>{site.domain}</div>
        </div>
      </div>
    ),
    size,
  );
}
