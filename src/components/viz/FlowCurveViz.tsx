"use client";

import { useState } from "react";

const FIELDS: { name: string; sym: string; X: (x: number, y: number) => [number, number]; flow: (t: number, x: number, y: number) => [number, number] | null; formula: string }[] = [
  { name: "rotation", sym: "(−y, x)", X: (x, y) => [-y, x], flow: (t, x, y) => [x * Math.cos(t) - y * Math.sin(t), x * Math.sin(t) + y * Math.cos(t)], formula: "θₜ rotates by angle t" },
  { name: "saddle", sym: "(x, −y)", X: (x, y) => [x, -y], flow: (t, x, y) => [x * Math.exp(t), y * Math.exp(-t)], formula: "θₜ(x, y) = (x eᵗ, y e⁻ᵗ)" },
  { name: "blow-up", sym: "(x², 0)", X: (x) => [x * x, 0], flow: (t, x, y) => (t * x >= 1 ? null : [x / (1 - t * x), y]), formula: "θₜ(x, y) = (x / (1 − tx), y)" },
];
const f = (n: number) => (n < 0 ? `−${(-n).toFixed(2)}` : n.toFixed(2));

/** Integral curves and the flow of a vector field on the plane, including one that escapes in finite time. */
export function FlowCurveViz() {
  const [k, setK] = useState(2);
  const [px, setPx] = useState(1);
  const [py, setPy] = useState(1);
  const [t, setT] = useState(0.5);
  const F = FIELDS[k];
  const S = 36, CX = 140, CY = 110;
  const X = (x: number) => CX + S * x, Y = (y: number) => CY - S * y;
  const pts: string[] = [];
  let escaped = false;
  for (let i = 0; i <= 200; i++) {
    const q = F.flow((t * i) / 200, px, py);
    if (!q || Math.abs(q[0]) > 3.4 || Math.abs(q[1]) > 3.4) { escaped = !q; if (!q) break; break; }
    pts.push(`${X(q[0])},${Y(q[1])}`);
  }
  const end = F.flow(t, px, py);
  const arrows = [];
  for (let i = -3; i <= 3; i++) for (let j = -2; j <= 2; j++) {
    const [a, b] = F.X(i, j);
    const L = Math.hypot(a, b);
    if (L < 1e-9) continue;
    const s = 0.4 / Math.max(1, L * 0.5);
    arrows.push(<line key={`${i},${j}`} x1={X(i)} y1={Y(j)} x2={X(i + a * s)} y2={Y(j + b * s)} markerEnd="url(#fcv-h)" style={{ stroke: "var(--text-faint)", strokeWidth: 1.1 }} />);
  }
  const msg = end === null
    ? `The curve leaves every bounded set as t → 1/x = ${(1 / px).toFixed(2)}: the field is not complete.`
    : `θₜ(p) = (${f(end[0])}, ${f(end[1])})`;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="field">
        {FIELDS.map((g, i) => <button key={g.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{g.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>p₁ = {px.toFixed(1)} <input type="range" min={-4} max={4} value={px * 2} onChange={(e) => setPx(Number(e.target.value) / 2)} aria-label="p1" /></label>
        <label>p₂ = {py.toFixed(1)} <input type="range" min={-4} max={4} value={py * 2} onChange={(e) => setPy(Number(e.target.value) / 2)} aria-label="p2" /></label>
        <label>time t = {t.toFixed(2)} <input type="range" min={0} max={300} value={Math.round(t * 100)} onChange={(e) => setT(Number(e.target.value) / 100)} aria-label="time" /></label>
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="An integral curve of a vector field" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          <marker id="fcv-h" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={6} markerHeight={6} markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0L10,5L0,10z" style={{ fill: "var(--text-faint)" }} /></marker>
        </defs>
        <rect x={X(-3.6)} y={Y(2.8)} width={7.2 * S} height={5.6 * S} style={{ fill: "none", stroke: "var(--border)" }} />
        <line x1={X(-3.6)} y1={CY} x2={X(3.6)} y2={CY} style={{ stroke: "var(--border)" }} />
        <line x1={CX} y1={Y(-2.8)} x2={CX} y2={Y(2.8)} style={{ stroke: "var(--border)" }} />
        <g>{arrows}</g>
        <polyline points={pts.join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <circle cx={X(px)} cy={Y(py)} r={4} style={{ fill: "var(--text)" }} />
        {end && Math.abs(end[0]) < 3.6 && Math.abs(end[1]) < 2.8 && <circle cx={X(end[0])} cy={Y(end[1])} r={5} style={{ fill: "var(--accent)" }} />}
        <text x={X(px) + 6} y={Y(py) - 6} style={{ fill: "var(--text)", fontSize: 11 }}>p</text>
        <text x={420} y={36} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>X = {F.sym}</text>
        <text x={420} y={58} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{F.formula}</text>
        {escaped && <text x={420} y={90} textAnchor="middle" style={{ fill: "var(--danger)", fontSize: 12, fontWeight: 700 }}>escaped</text>}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, color: end === null ? "var(--danger)" : "var(--text)" }}>{msg}</p>
      <figcaption className="viz-caption">
        The integral curve through p follows the arrows, with velocity X at every moment. Moving every point for time t gives
        the flow θₜ. Rotation and the saddle flow forever; the field (x², 0) pushes points with x &gt; 0 off to infinity in
        finite time.
      </figcaption>
    </figure>
  );
}
