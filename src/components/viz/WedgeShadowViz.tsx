"use client";

import { useState } from "react";

/** u ∧ v in Λ²ℝ³: its three coordinates are the signed areas of the shadows of the parallelogram on the coordinate planes. */
export function WedgeShadowViz() {
  const [u, setU] = useState([1.5, 0, 0.5]);
  const [v, setV] = useState([0.5, 1.5, 1]);
  const w12 = u[0] * v[1] - u[1] * v[0], w13 = u[0] * v[2] - u[2] * v[0], w23 = u[1] * v[2] - u[2] * v[1];
  const area = Math.hypot(w12, w13, w23);
  // oblique projection of 3D to the page
  const W = 340, H = 300, ox = 150, oy = 200, S = 55;
  const pr = (p: number[]) => [ox + (p[0] - 0.55 * p[1]) * S, oy - (p[2] - 0.35 * p[1]) * S];
  const poly = (pts: number[][]) => pts.map(pr).map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const quad = (f: (p: number[]) => number[]) => poly([[0, 0, 0], u, [u[0] + v[0], u[1] + v[1], u[2] + v[2]], v].map(f));
  const set = (which: "u" | "v", i: number, x: number) => (which === "u" ? setU(u.map((y, j) => (j === i ? x : y))) : setV(v.map((y, j) => (j === i ? x : y))));
  const axis = (p: number[], lbl: string) => { const [x, y] = pr(p); const [x0, y0] = pr([0, 0, 0]); return <g><line x1={x0} y1={y0} x2={x} y2={y} style={{ stroke: "var(--border-strong)" }} /><text x={x + 4} y={y} style={{ fill: "var(--text-faint)", fontSize: 11 }}>{lbl}</text></g>; };
  return (
    <figure className="viz">
      <div className="viz-sliders">
        {[0, 1, 2].map((i) => (
          <label key={`u${i}`}><span>u{["₁", "₂", "₃"][i]}: <span className="mono">{u[i]}</span></span>
            <input type="range" min={-2} max={2} step={0.25} value={u[i]} onChange={(e) => set("u", i, Number(e.target.value))} /></label>
        ))}
        {[0, 1, 2].map((i) => (
          <label key={`v${i}`}><span>v{["₁", "₂", "₃"][i]}: <span className="mono">{v[i]}</span></span>
            <input type="range" min={-2} max={2} step={0.25} value={v[i]} onChange={(e) => set("v", i, Number(e.target.value))} /></label>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A parallelogram in space and its shadow on the floor" style={{ width: "100%", maxWidth: 380, display: "block", margin: "6px auto" }}>
        {axis([2.6, 0, 0], "x₁")}{axis([0, 2.6, 0], "x₂")}{axis([0, 0, 2.6], "x₃")}
        <polygon points={quad((p) => [p[0], p[1], 0])} style={{ fill: "var(--text-faint)", fillOpacity: 0.25, stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
        <polygon points={quad((p) => p)} style={{ fill: "var(--accent-soft)", fillOpacity: 0.55, stroke: "var(--accent)", strokeWidth: 2 }} />
      </svg>
      <table className="table mono" style={{ width: "auto" }}>
        <tbody>
          <tr><td>e₁ ∧ e₂ coordinate (shadow on the floor)</td><td>{w12.toFixed(2)}</td></tr>
          <tr><td>e₁ ∧ e₃ coordinate</td><td>{w13.toFixed(2)}</td></tr>
          <tr><td>e₂ ∧ e₃ coordinate</td><td>{w23.toFixed(2)}</td></tr>
          <tr><td>area of the parallelogram</td><td style={{ color: "var(--accent)" }}>{area.toFixed(2)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Expanding u ∧ v by bilinearity, with eᵢ ∧ eᵢ = 0 and eⱼ ∧ eᵢ = −eᵢ ∧ eⱼ, leaves three coordinates, the 2 by 2 minors of the matrix with columns u and v. Each is the signed area of the shadow of the parallelogram on a coordinate plane; the dashed shadow on the floor has area |e₁ ∧ e₂ coordinate|. The square root of the sum of their squares is the area itself, a Pythagorean theorem for areas.
      </figcaption>
    </figure>
  );
}
