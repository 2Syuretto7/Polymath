"use client";

import { useState } from "react";

/** A vector in ℝ³ split into its projection onto a plane U and the part in the line U⊥. */
export function ComplementViz() {
  const [tilt, setTilt] = useState(20);
  const [vx, setVx] = useState(1);
  const [vy, setVy] = useState(0.5);
  const [vz, setVz] = useState(1.5);
  const t = (tilt * Math.PI) / 180;
  const n = [0, -Math.sin(t), Math.cos(t)];
  const v = [vx, vy, vz];
  const dot = v[0] * n[0] + v[1] * n[1] + v[2] * n[2];
  const perp = n.map((c) => dot * c);
  const par = v.map((c, i) => c - perp[i]);
  const W = 420, H = 340, o = [W / 2, H / 2 + 30], S = 70;
  const P = ([x, y, z]: number[]) => [o[0] + S * (x - 0.55 * y), o[1] - S * (z - 0.3 * y)];
  const e1 = [1, 0, 0], e2 = [0, Math.cos(t), Math.sin(t)];
  const corner = (a: number, b: number) => P([a * e1[0] + b * e2[0], a * e1[1] + b * e2[1], a * e1[2] + b * e2[2]]);
  const plane = [corner(-2, -2), corner(2, -2), corner(2, 2), corner(-2, 2)].map((p) => p.join(",")).join(" ");
  const seg = (a: number[], b: number[], col: string, w = 2.5, dash?: string) => { const [x1, y1] = P(a), [x2, y2] = P(b); return <line x1={x1} y1={y1} x2={x2} y2={y2} style={{ stroke: col, strokeWidth: w, strokeDasharray: dash }} />; };
  const f = (x: number) => x.toFixed(2).replace("-", "−");
  const nl1 = n.map((c) => -2.2 * c), nl2 = n.map((c) => 2.2 * c);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>tilt of the plane U: <span className="mono">{tilt}°</span></span><input type="range" min={-60} max={60} step={5} value={tilt} onChange={(e) => setTilt(Math.round(Number(e.target.value)))} /></label>
        <label><span>v₁: <span className="mono">{vx}</span></span><input type="range" min={-2} max={2} step={0.25} value={vx} onChange={(e) => setVx(Number(e.target.value))} /></label>
        <label><span>v₂: <span className="mono">{vy}</span></span><input type="range" min={-2} max={2} step={0.25} value={vy} onChange={(e) => setVy(Number(e.target.value))} /></label>
        <label><span>v₃: <span className="mono">{vz}</span></span><input type="range" min={-2} max={2} step={0.25} value={vz} onChange={(e) => setVz(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A plane, its orthogonal complement and a vector split between them" style={{ width: "100%", maxWidth: 440, display: "block", margin: "6px auto" }}>
        <polygon points={plane} style={{ fill: "var(--accent-soft)", fillOpacity: 0.45, stroke: "var(--accent)" }} />
        {seg(nl1, nl2, "var(--text-muted)", 1.5, "4 3")}
        {seg([0, 0, 0], par, "var(--accent)")}
        {seg(par, v, "var(--danger)", 2, "5 3")}
        {seg([0, 0, 0], perp, "var(--danger)")}
        {seg([0, 0, 0], v, "var(--text)", 3)}
        {(() => { const [x, y] = P(v); return <text x={x + 6} y={y - 6} style={{ fill: "var(--text)", fontSize: 13 }}>v</text>; })()}
        {(() => { const [x, y] = P(par); return <text x={x + 6} y={y + 14} style={{ fill: "var(--accent)", fontSize: 12 }}>P_U v</text>; })()}
        {(() => { const [x, y] = P(nl2); return <text x={x + 4} y={y} style={{ fill: "var(--text-muted)", fontSize: 12 }}>U⊥</text>; })()}
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>v = ({f(par[0])}, {f(par[1])}, {f(par[2])}) + ({f(perp[0])}, {f(perp[1])}, {f(perp[2])}), and the two parts have inner product {f(par.reduce((s, c, i) => s + c * perp[i], 0))}</p>
      <figcaption className="viz-caption">
        Every vector splits uniquely as a part in the plane U plus a part in its orthogonal complement U⊥, the line of vectors perpendicular to U. The first part, P_U v, is the point of U closest to v; the dashed red segment is the shortest route from v to the plane. Dimensions add: 2 + 1 = 3.
      </figcaption>
    </figure>
  );
}
