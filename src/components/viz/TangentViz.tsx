"use client";

import { useState } from "react";

const FUNCS: { name: string; f: (x: number, y: number) => number; g: (x: number, y: number) => [number, number] }[] = [
  { name: "f = x² + 2y", f: (x, y) => x * x + 2 * y, g: (x) => [2 * x, 2] },
  { name: "f = x", f: (x) => x, g: () => [1, 0] },
  { name: "f = xy", f: (x, y) => x * y, g: (x, y) => [y, x] },
];

/** A tangent vector to the circle acting on functions by differentiating along a curve. */
export function TangentViz() {
  const [deg, setDeg] = useState(0);
  const [s, setS] = useState(1);
  const [k, setK] = useState(0);
  const t = (deg * Math.PI) / 180;
  const p: [number, number] = [Math.cos(t), Math.sin(t)];
  const v: [number, number] = [-s * Math.sin(t), s * Math.cos(t)];
  const F = FUNCS[k];
  const [gx, gy] = F.g(p[0], p[1]);
  const vf = gx * v[0] + gy * v[1];
  const cx = 140, cy = 115, R = 75;
  const P = (a: number, b: number) => [cx + R * a, cy - R * b];
  const [px, py] = P(p[0], p[1]);
  const [qx, qy] = P(p[0] + 0.6 * v[0], p[1] + 0.6 * v[1]);
  const fmt = (n: number) => (Math.abs(n) < 5e-4 ? "0.000" : (n < 0 ? "−" : "") + Math.abs(n).toFixed(3));
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>point at angle {deg}° <input type="range" min={0} max={359} value={deg} onChange={(e) => setDeg(Number(e.target.value))} aria-label="angle" /></label>
        <label>speed of the curve = {s.toFixed(1)} <input type="range" min={-20} max={20} value={Math.round(s * 10)} onChange={(e) => setS(Number(e.target.value) / 10)} aria-label="speed" /></label>
      </div>
      <div className="segmented" role="group" aria-label="function">
        {FUNCS.map((x, i) => <button key={x.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{x.name}</button>)}
      </div>
      <svg viewBox="0 0 520 230" role="img" aria-label="A tangent vector on the circle" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          <marker id="tv-arr" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={9} markerHeight={9} markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--accent)" }} /></marker>
        </defs>
        <circle cx={cx} cy={cy} r={R} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2 }} />
        {Math.abs(s) > 0.01 && <line x1={px} y1={py} x2={qx} y2={qy} markerEnd="url(#tv-arr)" style={{ stroke: "var(--accent)", strokeWidth: 3 }} />}
        <circle cx={px} cy={py} r={6} style={{ fill: "var(--bg)", stroke: "var(--text)", strokeWidth: 2 }} />
        <text x={290} y={46} style={{ fill: "var(--text)", fontSize: 12 }}>p = ({fmt(p[0])}, {fmt(p[1])})</text>
        <text x={290} y={68} style={{ fill: "var(--text)", fontSize: 12 }}>γ(t) = (cos(θ + {s.toFixed(1)}t), sin(θ + {s.toFixed(1)}t))</text>
        <text x={290} y={90} style={{ fill: "var(--accent)", fontSize: 12 }}>v = γ′(0) = ({fmt(v[0])}, {fmt(v[1])})</text>
        <text x={290} y={122} style={{ fill: "var(--text)", fontSize: 12 }}>{F.name}</text>
        <text x={290} y={148} style={{ fill: "var(--accent)", fontSize: 14, fontWeight: 700 }}>v(f) = (f ∘ γ)′(0) = {fmt(vf)}</text>
        <text x={290} y={172} style={{ fill: "var(--text-muted)", fontSize: 11 }}>a linear map of f, obeying the Leibniz rule</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        The tangent vector is the operation f ↦ (f ∘ γ)′(0). Doubling the speed doubles v(f); reversing it changes the sign.
        Two curves with the same velocity at p give the same operation.
      </p>
      <figcaption className="viz-caption">
        On an abstract manifold there is no surrounding space for arrows to live in. Instead a tangent vector at p is defined
        by what it does: it differentiates functions at p. The arrow drawn here is just how that operation looks for a
        circle sitting in the plane.
      </figcaption>
    </figure>
  );
}
