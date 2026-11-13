"use client";

import { useState } from "react";

/** Volume of the ball of radius r in Rⁿ, by the recursion Vₙ = Vₙ₋₂ · 2πr²/n. */
function ballVolume(n: number, r: number): number {
  if (n === 0) return 1;
  if (n === 1) return 2 * r;
  return ballVolume(n - 2, r) * (2 * Math.PI * r * r) / n;
}

const NS = [1, 2, 3, 4, 5, 10, 20, 50, 100];

/** The unit cube in Rⁿ: its diagonal grows like √n, the diagonal turns away from every axis, and the inscribed ball vanishes. */
export function HighDimViz() {
  const [k, setK] = useState(2);
  const n = NS[k];
  const diag = Math.sqrt(n);
  const angle = (Math.acos(1 / Math.sqrt(n)) * 180) / Math.PI;
  const frac = ballVolume(n, 0.5);
  const pct = (x: number) => (x >= 0.001 ? `${(x * 100).toFixed(1)}%` : x.toExponential(1).replace("e", " × 10^"));

  return (
    <figure className="viz">
      <svg viewBox="0 0 520 170" role="img" aria-label={`In ${n} dimensions the diagonal of the unit cube has length ${diag.toFixed(2)}.`} style={{ width: "100%", display: "block" }}>
        <text x={10} y={20} className="viz-label">length of the diagonal, √n, against the side of length 1</text>
        <rect x={10} y={32} width={40} height={14} rx={3} style={{ fill: "var(--text-muted)" }} />
        <rect x={10} y={54} width={Math.min(500, 40 * diag)} height={14} rx={3} style={{ fill: "var(--accent)" }} />
        <text x={Math.min(500, 40 * diag) + 16} y={65} className="viz-label">{diag > 12.4 ? "" : diag.toFixed(2)}</text>
        <text x={10} y={98} className="viz-label">share of the cube filled by the ball that touches every face</text>
        <rect x={10} y={110} width={500} height={14} rx={3} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        <rect x={10} y={110} width={Math.max(1, 500 * frac)} height={14} rx={3} style={{ fill: "var(--violet-300)" }} />
        <text x={10} y={150} className="viz-label">angle between the diagonal and each axis: {angle.toFixed(1)}°</text>
      </svg>
      <div className="viz-sliders">
        <label><span>dimension n = <span className="mono">{n}</span></span>
          <input type="range" min={0} max={NS.length - 1} value={k} onChange={(e) => setK(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>corners of the cube, 2ⁿ</td><td className="mono">{n <= 50 ? (2 ** n).toLocaleString("en-IN") : "about 1.3 × 10^30"}</td></tr>
          <tr><td>diagonal from (0, …, 0) to (1, …, 1)</td><td className="mono">√{n} ≈ {diag.toFixed(3)}</td></tr>
          <tr><td>angle between diagonal and an axis</td><td className="mono">{angle.toFixed(1)}°</td></tr>
          <tr><td>share of the cube inside the inscribed ball</td><td className="mono">{pct(frac)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The same formulas work in every dimension, but the pictures from two and three dimensions mislead. As n grows, the
        diagonal becomes almost perpendicular to every axis, and nearly all the volume of the cube lies in its corners,
        outside the ball.
      </figcaption>
    </figure>
  );
}
