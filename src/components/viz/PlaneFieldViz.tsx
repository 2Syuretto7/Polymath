"use client";

import { useState } from "react";

const FIELDS: { name: string; X: (x: number, y: number) => [number, number]; sym: string }[] = [
  { name: "rotation", X: (x, y) => [-y, x], sym: "−y ∂/∂x + x ∂/∂y" },
  { name: "source", X: (x, y) => [x, y], sym: "x ∂/∂x + y ∂/∂y" },
  { name: "saddle", X: (x, y) => [x, -y], sym: "x ∂/∂x − y ∂/∂y" },
];
const f = (n: number) => (n < 0 ? `−${(-n).toFixed(1)}` : n.toFixed(1));

/** A vector field on the plane as a derivation: X acts on f = x² + y² by differentiating along the arrows. */
export function PlaneFieldViz() {
  const [k, setK] = useState(0);
  const [px, setPx] = useState(1);
  const [py, setPy] = useState(1);
  const F = FIELDS[k];
  const S = 40, CX = 130, CY = 110;
  const X = (x: number) => CX + S * x, Y = (y: number) => CY - S * y;
  const arrows = [];
  for (let i = -2; i <= 2; i++) for (let j = -2; j <= 2; j++) {
    const [a, b] = F.X(i, j);
    const L = Math.hypot(a, b);
    if (L < 1e-9) continue;
    const s = 0.35 / Math.max(1, L * 0.5);
    arrows.push(<line key={`${i},${j}`} x1={X(i)} y1={Y(j)} x2={X(i + a * s)} y2={Y(j + b * s)} markerEnd="url(#pfv-h)" style={{ stroke: "var(--text-muted)", strokeWidth: 1.2 }} />);
  }
  const [a, b] = F.X(px, py);
  const Xf = 2 * px * a + 2 * py * b;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="field">
        {FIELDS.map((g, i) => <button key={g.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{g.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>p₁ = {f(px)} <input type="range" min={-4} max={4} value={px * 2} onChange={(e) => setPx(Number(e.target.value) / 2)} aria-label="p1" /></label>
        <label>p₂ = {f(py)} <input type="range" min={-4} max={4} value={py * 2} onChange={(e) => setPy(Number(e.target.value) / 2)} aria-label="p2" /></label>
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="A vector field on the plane" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          <marker id="pfv-h" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={6} markerHeight={6} markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0L10,5L0,10z" style={{ fill: "var(--text-muted)" }} /></marker>
          <marker id="pfv-a" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={9} markerHeight={9} markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0L10,5L0,10z" style={{ fill: "var(--accent)" }} /></marker>
        </defs>
        {[1, 2, 2.5].map((r) => <circle key={r} cx={CX} cy={CY} r={r * S} style={{ fill: "none", stroke: "var(--border)", strokeDasharray: "3 3" }} />)}
        <line x1={X(-2.6)} y1={CY} x2={X(2.6)} y2={CY} style={{ stroke: "var(--border)" }} />
        <line x1={CX} y1={Y(-2.6)} x2={CX} y2={Y(2.6)} style={{ stroke: "var(--border)" }} />
        {arrows}
        {Math.hypot(a, b) > 1e-9 && <line x1={X(px)} y1={Y(py)} x2={X(px + a * 0.4)} y2={Y(py + b * 0.4)} markerEnd="url(#pfv-a)" style={{ stroke: "var(--accent)", strokeWidth: 2.5 }} />}
        <circle cx={X(px)} cy={Y(py)} r={4} style={{ fill: "var(--accent)" }} />
        <text x={280} y={40} style={{ fill: "var(--text)", fontSize: 12 }}>X = {F.sym}</text>
        <text x={280} y={62} style={{ fill: "var(--text)", fontSize: 12 }}>X at p = ({f(a)}, {f(b)})</text>
        <text x={280} y={84} style={{ fill: "var(--text-muted)", fontSize: 11 }}>f = x² + y² (dashed circles are its level sets)</text>
        <text x={280} y={106} style={{ fill: "var(--text-muted)", fontSize: 11 }}>X(f) = X¹ · 2x + X² · 2y</text>
        <text x={280} y={134} style={{ fill: "var(--accent)", fontSize: 14, fontWeight: 700 }}>(Xf)(p) = {Xf < 0 ? `−${-Xf}` : Xf}</text>
      </svg>
      <figcaption className="viz-caption">
        A vector field is a derivation of smooth functions: at each point it differentiates f in the direction of its arrow.
        The rotation field runs along the circles, so it never changes f; the source crosses them outwards.
      </figcaption>
    </figure>
  );
}
