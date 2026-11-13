"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const S = 110, CX = 200, CY = 140;
const X = (x: number) => CX + S * x, Y = (z: number) => CY - S * z;

/** Archimedes' hat-box theorem: a band of the unit sphere between two heights has the same area as the matching band of the circumscribed cylinder, 2πh. */
export function HatBoxViz() {
  const [lo, setLo] = useState(0.2);
  const [h, setH] = useState(0.4);
  const hi = Math.min(1, lo + h);
  const hh = hi - lo;
  const arc = (side: 1 | -1) => {
    const pts = Array.from({ length: 41 }, (_, i) => { const z = lo + (hh * i) / 40; return `${X(side * Math.sqrt(Math.max(0, 1 - z * z))).toFixed(1)},${Y(z).toFixed(1)}`; });
    return "M" + pts.join("L");
  };
  const zm = (lo + hi) / 2, rm = Math.sqrt(Math.max(0, 1 - zm * zm));
  const fm = (z: number) => fmtNum(Number(z.toFixed(3)));

  return (
    <figure className="viz">
      <svg viewBox="0 0 400 280" role="img" aria-label="A sphere inside a cylinder, seen from the side, with a band between two heights" style={{ width: "100%", maxWidth: 480, display: "block", margin: "0 auto" }}>
        <rect x={X(-1)} y={Y(1)} width={2 * S} height={2 * S} style={{ fill: "none", stroke: "var(--border-strong)", strokeWidth: 1.5 }} />
        <circle cx={CX} cy={CY} r={S} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)", strokeWidth: 1.5 }} />
        <rect x={X(-1)} y={Y(hi)} width={2 * S} height={hh * S} style={{ fill: "var(--accent-soft)", opacity: 0.6 }} />
        <line x1={X(-1.15)} y1={Y(lo)} x2={X(1.15)} y2={Y(lo)} style={{ stroke: "var(--text-muted)", strokeDasharray: "4 3" }} />
        <line x1={X(-1.15)} y1={Y(hi)} x2={X(1.15)} y2={Y(hi)} style={{ stroke: "var(--text-muted)", strokeDasharray: "4 3" }} />
        <path d={arc(1)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 4 }} />
        <path d={arc(-1)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 4 }} />
        <line x1={X(1)} y1={Y(lo)} x2={X(1)} y2={Y(hi)} style={{ stroke: "var(--danger)", strokeWidth: 4 }} />
        <line x1={X(-1)} y1={Y(lo)} x2={X(-1)} y2={Y(hi)} style={{ stroke: "var(--danger)", strokeWidth: 4 }} />
        <text x={X(1.2)} y={Y(zm) + 4} style={{ fontSize: 12, fill: "var(--text-muted)" }}>h = {fm(hh)}</text>
      </svg>
      <div className="viz-sliders">
        <label><span>bottom of the band: <span className="mono">z = {fm(lo)}</span></span>
          <input type="range" min={-1} max={0.95} step={0.05} value={lo} onChange={(e) => setLo(Number(e.target.value))} /></label>
        <label><span>height of the band: <span className="mono">{fm(hh)}</span></span>
          <input type="range" min={0.05} max={2} step={0.05} value={h} onChange={(e) => setH(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>band of the sphere (thick curves), ∫ 2πr ds</td><td className="mono">{fm(2 * Math.PI * hh)}</td></tr>
          <tr><td>band of the cylinder (red), 2π · 1 · h</td><td className="mono">{fm(2 * Math.PI * hh)}</td></tr>
          <tr><td>at mid-height: circle radius r, slant factor ds/dz</td><td className="mono">{fm(rm)}, {rm > 1e-6 ? fm(1 / rm) : "∞"}</td></tr>
          <tr><td>fraction of the whole sphere, area 4π</td><td className="mono">{fm(hh / 2)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Near the poles the sphere&rsquo;s circles are small but the surface is steep, so a band of height h is wide along the
        surface. The two effects cancel exactly: r times ds/dz is always 1. So every band of height h has area 2πh, wherever
        it sits.
      </figcaption>
    </figure>
  );
}
