"use client";

import { useState } from "react";

/** The coordinate field ∂θ along a circle in polar coordinates, and its covariant derivative ∇∂θ ∂θ = −r ∂r. */
export function PolarChristoffelViz() {
  const [r10, setR10] = useState(15);
  const [deg, setDeg] = useState(40);
  const [d, setD] = useState(25);
  const r = r10 / 10;
  const th = (deg * Math.PI) / 180, dt = (d * Math.PI) / 180;
  const S = 55, cx = 160, cy = 120;
  const P = (x: number, y: number): [number, number] => [cx + S * x, cy - S * y];
  const v = (t: number): [number, number] => [-r * Math.sin(t), r * Math.cos(t)];
  const p0: [number, number] = [r * Math.cos(th), r * Math.sin(th)];
  const p1: [number, number] = [r * Math.cos(th + dt), r * Math.sin(th + dt)];
  const v0 = v(th), v1 = v(th + dt);
  const diff: [number, number] = [(v1[0] - v0[0]) / dt, (v1[1] - v0[1]) / dt];
  const sc = 0.5;
  const arrow = (from: [number, number], vec: [number, number], col: string, dash = false) => {
    const [x1, y1] = P(from[0], from[1]);
    const [x2, y2] = P(from[0] + sc * vec[0], from[1] + sc * vec[1]);
    return <line x1={x1} y1={y1} x2={x2} y2={y2} markerEnd={`url(#pc-${col})`} style={{ stroke: `var(--${col})`, strokeWidth: 2.5, strokeDasharray: dash ? "5 3" : undefined }} />;
  };
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>r = {r.toFixed(1)} <input type="range" min={5} max={20} value={r10} onChange={(e) => setR10(Number(e.target.value))} aria-label="r" /></label>
        <label>θ = {deg}° <input type="range" min={0} max={359} value={deg} onChange={(e) => setDeg(Number(e.target.value))} aria-label="theta" /></label>
        <label>Δθ = {d}° <input type="range" min={1} max={60} value={d} onChange={(e) => setD(Number(e.target.value))} aria-label="step" /></label>
      </div>
      <svg viewBox="0 0 520 240" role="img" aria-label="The field ∂θ at two points of a circle and the rate at which it turns" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          {["accent", "text-muted", "danger"].map((c) => <marker key={c} id={`pc-${c}`} viewBox="0 0 10 10" refX={9} refY={5} markerWidth={8} markerHeight={8} markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style={{ fill: `var(--${c})` }} /></marker>)}
        </defs>
        <circle cx={cx} cy={cy} r={S * r} style={{ fill: "none", stroke: "var(--border-strong)" }} />
        <circle cx={cx} cy={cy} r={3} style={{ fill: "var(--text-muted)" }} />
        {arrow(p0, v0, "accent")}
        {arrow(p1, v1, "text-muted")}
        {arrow(p0, diff, "danger", true)}
        <text x={340} y={40} style={{ fill: "var(--accent)", fontSize: 12 }}>∂θ at θ</text>
        <text x={340} y={60} style={{ fill: "var(--text-muted)", fontSize: 12 }}>∂θ at θ + Δθ</text>
        <text x={340} y={80} style={{ fill: "var(--danger)", fontSize: 12 }}>difference ÷ Δθ</text>
        <text x={340} y={116} style={{ fill: "var(--text)", fontSize: 12 }}>difference ÷ Δθ = ({diff[0].toFixed(2)}, {diff[1].toFixed(2)})</text>
        <text x={340} y={138} style={{ fill: "var(--text)", fontSize: 12 }}>−r ∂r = ({(-r * Math.cos(th)).toFixed(2)}, {(-r * Math.sin(th)).toFixed(2)})</text>
        <text x={340} y={170} style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>Γʳθθ = −r = {(-r).toFixed(1)}</text>
        <text x={340} y={192} style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>Γᶿrθ = 1/r = {(1 / r).toFixed(2)}</text>
      </svg>
      <figcaption className="viz-caption">
        In polar coordinates the coordinate field ∂θ = −y ∂x + x ∂y has length r and turns as θ changes. As Δθ shrinks, the
        difference quotient tends to −r ∂r, which is ∇∂θ ∂θ. The coordinate fields are not parallel, so the Christoffel
        symbols are not zero, even though the plane is flat.
      </figcaption>
    </figure>
  );
}
