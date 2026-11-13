"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const S = 110, CX = 40, CY = 270;
const P = (r: number, a: number) => `${(CX + S * r * Math.cos(a)).toFixed(1)},${(CY - S * r * Math.sin(a)).toFixed(1)}`;

/** A polar cell: r from r to r + Δr, θ from θ to θ + Δθ. Its area is close to r Δr Δθ, not Δr Δθ. */
export function PolarCellViz() {
  const [r, setR] = useState(1.2);
  const [d, setD] = useState(0.3);
  const th = 0.5;
  const exact = (d / 2) * ((r + d) ** 2 - r * r);
  const approx = r * d * d;
  const arc = (rad: number, a0: number, a1: number) => `A${(S * rad).toFixed(1)},${(S * rad).toFixed(1)} 0 0 0 ${P(rad, a1)}`;
  const cell = `M${P(r, th)} L${P(r + d, th)} ${arc(r + d, th, th + d)} L${P(r, th + d)} A${(S * r).toFixed(1)},${(S * r).toFixed(1)} 0 0 1 ${P(r, th)} Z`;
  const fm = (z: number) => fmtNum(Number(z.toFixed(4)));

  return (
    <figure className="viz">
      <svg viewBox="0 0 500 290" role="img" aria-label="A polar cell in the plane" style={{ width: "100%", display: "block" }}>
        <line x1={CX} y1={CY} x2={490} y2={CY} className="viz-axis" />
        <line x1={CX} y1={CY} x2={CX} y2={10} className="viz-axis" />
        {[0.5, 1, 1.5, 2].map((q) => (
          <path key={q} d={`M${P(q, 0)} ${arc(q, 0, Math.PI / 2)}`} style={{ fill: "none", stroke: "var(--border)", strokeWidth: 1 }} />
        ))}
        {[0.25, 0.5, 0.75, 1, 1.25].map((a) => (
          <line key={a} x1={CX} y1={CY} x2={CX + S * 2.2 * Math.cos(a)} y2={CY - S * 2.2 * Math.sin(a)} style={{ stroke: "var(--border)", strokeWidth: 1 }} />
        ))}
        <path d={cell} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
        <line x1={CX} y1={CY} x2={CX + S * r * Math.cos(th)} y2={CY - S * r * Math.sin(th)} style={{ stroke: "var(--text-muted)", strokeDasharray: "4 3" }} />
        <text x={CX + S * (r / 2) * Math.cos(th) + 6} y={CY - S * (r / 2) * Math.sin(th) + 14} style={{ fontSize: 12, fill: "var(--text-muted)" }}>r</text>
      </svg>
      <div className="viz-sliders">
        <label><span>distance from the origin r: <span className="mono">{fm(r)}</span></span>
          <input type="range" min={0.1} max={1.8} step={0.05} value={r} onChange={(e) => setR(Number(e.target.value))} /></label>
        <label><span>cell size Δr = Δθ: <span className="mono">{fm(d)}</span></span>
          <input type="range" min={0.02} max={0.4} step={0.02} value={d} onChange={(e) => setD(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>area of the cell in the (r, θ) rectangle, Δr Δθ</td><td className="mono">{fm(d * d)}</td></tr>
          <tr><td>true area in the plane, (Δθ/2)((r + Δr)² − r²)</td><td className="mono">{fm(exact)}</td></tr>
          <tr><td>the estimate r Δr Δθ</td><td className="mono">{fm(approx)}</td></tr>
          <tr><td>true area ÷ estimate</td><td className="mono">{fm(exact / approx)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The same small rectangle of (r, θ) values becomes a larger cell the further it is from the origin, stretched by a
        factor of r. As the cell shrinks, the ratio tends to 1: this factor r is the Jacobian determinant of the polar map,
        and it is why dA = r dr dθ.
      </figcaption>
    </figure>
  );
}
