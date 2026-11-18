"use client";

import { useState } from "react";

const deg = (a: number) => ((a % 360) + 360) % 360;
const f = (n: number) => (Math.abs(n) < 0.005 ? "0.00" : n < 0 ? `−${(-n).toFixed(2)}` : n.toFixed(2));

/** The circle group SO(2): rotation matrices multiply by adding angles, and the group is itself a circle. */
export function RotGroupViz() {
  const [a, setA] = useState(120);
  const [b, setB] = useState(300);
  const c = deg(a + b);
  const S = 70, CX = 110, CY = 105;
  const pt = (t: number) => [CX + S * Math.cos((t * Math.PI) / 180), CY - S * Math.sin((t * Math.PI) / 180)];
  const R = (t: number) => { const r = (t * Math.PI) / 180; return [Math.cos(r), -Math.sin(r), Math.sin(r), Math.cos(r)]; };
  const M = R(c);
  const dot = (t: number, col: string, label: string) => { const [x, y] = pt(t); return <g><circle cx={x} cy={y} r={6} style={{ fill: col }} /><text x={x + (x > CX ? 10 : -10)} y={y + 4} textAnchor={x > CX ? "start" : "end"} style={{ fill: col, fontSize: 12 }}>{label}</text></g>; };
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>a = {a}° <input type="range" min={0} max={359} value={a} onChange={(e) => setA(Number(e.target.value))} aria-label="a" /></label>
        <label>b = {b}° <input type="range" min={0} max={359} value={b} onChange={(e) => setB(Number(e.target.value))} aria-label="b" /></label>
      </div>
      <svg viewBox="0 0 520 210" role="img" aria-label="Rotations as points on a circle" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <circle cx={CX} cy={CY} r={S} style={{ fill: "none", stroke: "var(--border-strong)", strokeWidth: 2 }} />
        {dot(0, "var(--text-muted)", "identity")}
        {dot(a, "var(--success)", "R(a)")}
        {dot(b, "var(--text)", "R(b)")}
        {dot(c, "var(--accent)", "R(a)R(b)")}
        <text x={260} y={40} style={{ fill: "var(--text)", fontSize: 12 }}>R(t) = [cos t, −sin t; sin t, cos t]</text>
        <text x={260} y={66} style={{ fill: "var(--text)", fontSize: 12 }}>R(a) R(b) = R(a + b) = R({c}°)</text>
        <text x={260} y={92} style={{ fill: "var(--accent)", fontSize: 12, fontWeight: 700 }}>= [{f(M[0])}, {f(M[1])}; {f(M[2])}, {f(M[3])}]</text>
        <text x={260} y={122} style={{ fill: "var(--text-muted)", fontSize: 11 }}>multiplication and inversion are smooth in t,</text>
        <text x={260} y={138} style={{ fill: "var(--text-muted)", fontSize: 11 }}>and the group is the circle {"{"}x² + y² = 1{"}"}</text>
      </svg>
      <figcaption className="viz-caption">
        Each rotation of the plane is a point of the circle, and composing rotations adds their angles. SO(2) is both a group
        and a smooth manifold, with smooth operations: the simplest compact Lie group.
      </figcaption>
    </figure>
  );
}
