"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const S = 120, CX = 200, CY = 190;
const X = (x: number) => CX + S * x, Z = (z: number) => CY - S * z;

/** Stokes' theorem: caps z = h(1 − x² − y²) over the unit circle all have the same flux of curl F, though their areas differ. */
export function CapSurfaceViz() {
  const [h, setH] = useState(0.8);
  // F = (z − y, x + z, y): curl F = (0, 1, 2). On the cap, curl F · (−g_x, −g_y, 1) = 2hy + 2.
  const N = 120;
  let flux = 0, area = 0;
  for (let a = 0; a < N; a++) for (let b = 0; b < N; b++) {
    const r = (a + 0.5) / N, th = (2 * Math.PI * (b + 0.5)) / N;
    const dA = r * (1 / N) * ((2 * Math.PI) / N);
    const y = r * Math.sin(th);
    flux += (2 * h * y + 2) * dA;
    area += Math.sqrt(1 + 4 * h * h * r * r) * dA;
  }
  const curve = Array.from({ length: 81 }, (_, i) => { const x = -1 + i / 40; return `${i ? "L" : "M"}${X(x).toFixed(1)},${Z(h * (1 - x * x)).toFixed(1)}`; }).join("");
  const fm = (z: number) => fmtNum(Number(z.toFixed(3)));

  return (
    <figure className="viz">
      <svg viewBox="0 0 400 330" role="img" aria-label="A cap spanning a circle, seen from the side" style={{ width: "100%", maxWidth: 460, display: "block", margin: "0 auto" }}>
        <line x1={20} y1={Z(0)} x2={380} y2={Z(0)} className="viz-axis" />
        <line x1={CX} y1={10} x2={CX} y2={320} className="viz-axis" />
        <ellipse cx={CX} cy={Z(0)} rx={S} ry={18} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 3 }} />
        <path d={curve} style={{ fill: "var(--accent-soft)", fillOpacity: 0.5, stroke: "var(--accent)", strokeWidth: 3 }} />
        <text x={X(1) + 6} y={Z(0) + 4} style={{ fontSize: 12, fill: "var(--text-muted)" }}>the edge</text>
      </svg>
      <div className="viz-sliders">
        <label><span>height of the cap h: <span className="mono">{fm(h)}</span></span>
          <input type="range" min={-1} max={1.5} step={0.05} value={h} onChange={(e) => setH(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>area of the cap</td><td className="mono">{fm(area)}</td></tr>
          <tr><td>flux of curl F through the cap, upward normal</td><td className="mono">{fm(flux)}</td></tr>
          <tr><td>circulation ∮ F · dr round the boundary circle</td><td className="mono">2π ≈ {fm(2 * Math.PI)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The field is F = (z − y, x + z, y), with curl F = (0, 1, 2). Raise, flatten or invert the cap: its area changes, but
        the flux of the curl through it never does, because it equals the circulation round the edge, which every cap shares.
      </figcaption>
    </figure>
  );
}
