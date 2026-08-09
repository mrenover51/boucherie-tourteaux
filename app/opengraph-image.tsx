import { ImageResponse } from "next/og";
export const alt = "Boucherie Tourteaux — Avize";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() { return new ImageResponse(<div style={{ background: "#5B0F18", color: "#FAF8F5", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}><div style={{ fontSize: 82, letterSpacing: ".08em" }}>TOURTEAUX</div><div style={{ color: "#C8A96A", fontSize: 24, letterSpacing: ".3em", marginTop: 20 }}>BOUCHERIE · AVIZE</div></div>); }
