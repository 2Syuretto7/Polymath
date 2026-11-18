"use client";

import { useState } from "react";

/** The tangent bundle of the circle as a cylinder, with a vector field drawn as a section. */
export function BundleViz() {
  const [c, setC] = useState(0);
  const [a, setA] = useState(1);
  const [k, setK] = useState(2);
  const [flat, setFlat] = useState(false);
  const field = (t: number) => c + a * Math.sin(k * t);
  const N = 360;
  const ts = Array.from({ length: N + 1 }, (_, i) => (2 * Math.PI * i) / N);
  const zeros: number[] = [];
  for (let i = 0; i < N; i++) { const u = field(ts[i]), v = field(ts[i + 1]); if (u === 0 || u * v < 0) zeros.push(ts[i]); }
  const cx = 130, cy = 115, R = 60;
  const samples = Array.from({ length: 24 }, (_, i) => (2 * Math.PI * i) / 24);
  const X0 = 280, W = 220, Y0 = 115, Sy = 20;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>constant part c = {c.toFixed(1)} <input type="range" min={-20} max={20} value={Math.round(c * 10)} onChange={(e) => setC(Number(e.target.value) / 10)} aria-label="constant" /></label>
        <label>wiggle a = {a.toFixed(1)} <input type="range" min={0} max={20} value={Math.round(a * 10)} onChange={(e) => setA(Number(e.target.value) / 10)} aria-label="wiggle" /></label>
        <label>frequency k = {k} <input type="range" min={1} max={4} value={k} onChange={(e) => setK(Number(e.target.value))} aria-label="frequency" /></label>
      </div>
      <div className="segmented" role="group" aria-label="view">
        <button type="button" aria-pressed={!flat} className={!flat ? "seg is-on" : "seg"} onClick={() => setFlat(false)}>arrows on the circle</button>
        <button type="button" aria-pressed={flat} className={flat ? "seg is-on" : "seg"} onClick={() => setFlat(true)}>section of S¹ × ℝ</button>
      </div>
      <svg viewBox="0 0 520 230" role="img" aria-label="A vector field on the circle and the same field as a section of the tangent bundle" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          <marker id="bv-arr" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={7} markerHeight={7} markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--accent)" }} /></marker>
        </defs>
        <circle cx={cx} cy={cy} r={R} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2, opacity: flat ? 0.3 : 1 }} />
        {samples.map((t, i) => {
          const s = field(t) * 14;
          const x = cx + R * Math.cos(t), y = cy - R * Math.sin(t);
          const ex = x - s * Math.sin(t), ey = y - s * Math.cos(t);
          return Math.abs(s) > 1 ? <line key={i} x1={x} y1={y} x2={ex} y2={ey} markerEnd="url(#bv-arr)" style={{ stroke: "var(--accent)", strokeWidth: 2, opacity: flat ? 0.3 : 1 }} /> : <circle key={i} cx={x} cy={y} r={3} style={{ fill: "var(--danger)" }} />;
        })}
        <rect x={X0} y={Y0 - 4 * Sy} width={W} height={8 * Sy} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)", opacity: flat ? 1 : 0.4 }} />
        <line x1={X0} y1={Y0} x2={X0 + W} y2={Y0} style={{ stroke: "var(--border-strong)" }} />
        {samples.map((t, i) => <line key={i} x1={X0 + (W * t) / (2 * Math.PI)} y1={Y0 - 4 * Sy} x2={X0 + (W * t) / (2 * Math.PI)} y2={Y0 + 4 * Sy} style={{ stroke: "var(--border)", opacity: flat ? 1 : 0.4 }} />)}
        <polyline points={ts.map((t) => `${X0 + (W * t) / (2 * Math.PI)},${Y0 - Sy * Math.max(-4, Math.min(4, field(t)))}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5, opacity: flat ? 1 : 0.4 }} />
        <text x={X0} y={Y0 + 4 * Sy + 16} style={{ fill: "var(--text-muted)", fontSize: 11 }}>θ = 0</text>
        <text x={X0 + W} y={Y0 + 4 * Sy + 16} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>θ = 2π (glued to 0)</text>
        <text x={X0 + W + 6} y={Y0 + 4} style={{ fill: "var(--text-muted)", fontSize: 11 }}>0</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        The field has {zeros.length} zero{zeros.length === 1 ? "" : "s"} on the circle. {zeros.length === 0 ? "A nowhere-zero section: TS¹ is trivial, a product S¹ × ℝ." : "Each zero is where the section crosses the zero section."}
      </p>
      <figcaption className="viz-caption">
        Each tangent line of the circle is a copy of ℝ. Using the unit tangent (−sin θ, cos θ) as a basis at every point
        identifies the tangent bundle with the cylinder S¹ × ℝ, and a vector field becomes the graph of a function on the
        circle: a section of the bundle.
      </figcaption>
    </figure>
  );
}
