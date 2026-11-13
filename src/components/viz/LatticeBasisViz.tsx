"use client";

import { useState } from "react";

const gcd = (a: number, b: number): number => (b === 0 ? Math.abs(a) : gcd(b, a % b));
const R = 5;

/** Two vectors in ℤ²: when do they form a basis of the free module ℤ², and what is the quotient by the submodule they span? */
export function LatticeBasisViz() {
  const [a, setA] = useState(2);
  const [c, setC] = useState(1);
  const [b, setB] = useState(1);
  const [d, setD] = useState(1);
  const det = a * d - b * c;
  const inL = (x: number, y: number) => {
    if (det !== 0) {
      const s = (d * x - b * y) / det, t = (-c * x + a * y) / det;
      return Number.isInteger(s) && Number.isInteger(t);
    }
    // rank at most one: the span is the multiples of the gcd vector along one line
    const g1 = gcd(a, c), g2 = gcd(b, d);
    const [p, q] = g1 ? [a / g1, c / g1] : g2 ? [b / g2, d / g2] : [0, 0];
    if (!p && !q) return x === 0 && y === 0;
    if (p * y - q * x !== 0) return false;
    // u and w are ±g1·(p, q) and ±g2·(p, q), so they span the multiples of gcd(g1, g2)·(p, q)
    const k = p ? x / p : y / q, step = gcd(g1, g2);
    return Number.isInteger(k / step);
  };
  const W = 320, X = (x: number) => W / 2 + (x / (R + 0.5)) * (W / 2), Y = (y: number) => W / 2 - (y / (R + 0.5)) * (W / 2);
  const pts: [number, number][] = [];
  for (let x = -R; x <= R; x++) for (let y = -R; y <= R; y++) pts.push([x, y]);
  const d1 = gcd(gcd(a, b), gcd(c, d)), d2 = d1 ? Math.abs(det) / d1 : 0;
  const quotient = det === 0 ? "infinite: ℤ² / L contains a copy of ℤ" : Math.abs(det) === 1 ? "trivial" : d1 === 1 ? `ℤ/${d2}` : `ℤ/${d1} × ℤ/${d2}`;
  const sl = (label: string, val: number, set: (n: number) => void) => (
    <label><span>{label}: <span className="mono">{String(val).replace("-", "−")}</span></span>
      <input type="range" min={-3} max={3} step={1} value={val} onChange={(e) => set(Number(e.target.value))} /></label>
  );
  return (
    <figure className="viz">
      <div className="viz-sliders">
        {sl("u, first entry", a, setA)}
        {sl("u, second entry", c, setC)}
        {sl("w, first entry", b, setB)}
        {sl("w, second entry", d, setD)}
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="The integer lattice, with the points of the submodule spanned by u and w filled" style={{ width: "100%", maxWidth: 340, display: "block", margin: "6px auto" }}>
        <defs><marker id="lbA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--accent)" }} /></marker></defs>
        <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
        <polygon points={[[0, 0], [a, c], [a + b, c + d], [b, d]].map(([x, y]) => `${X(x)},${Y(y)}`).join(" ")} style={{ fill: "var(--accent)", fillOpacity: 0.15, stroke: "none" }} />
        {pts.map(([x, y]) => <circle key={`${x},${y}`} cx={X(x)} cy={Y(y)} r={inL(x, y) ? 4.5 : 2.5} style={{ fill: inL(x, y) ? "var(--accent)" : "var(--text-faint)" }} />)}
        {(a || c) ? <line x1={X(0)} y1={Y(0)} x2={X(a)} y2={Y(c)} markerEnd="url(#lbA)" style={{ stroke: "var(--accent)", strokeWidth: 2.5 }} /> : null}
        {(b || d) ? <line x1={X(0)} y1={Y(0)} x2={X(b)} y2={Y(d)} markerEnd="url(#lbA)" style={{ stroke: "var(--accent)", strokeWidth: 2.5 }} /> : null}
        <text x={X(a) + 6} y={Y(c) - 6} style={{ fill: "var(--text)", fontSize: 13 }}>u</text>
        <text x={X(b) + 6} y={Y(d) - 6} style={{ fill: "var(--text)", fontSize: 13 }}>w</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>u = ({a}, {c}), w = ({b}, {d}); det = {String(det).replace("-", "−")}</div>
        <div>basis of ℤ²: <strong>{Math.abs(det) === 1 ? "yes" : "no"}</strong>{det !== 0 && Math.abs(det) !== 1 ? `; they span a submodule L of index ${Math.abs(det)}` : ""}</div>
        <div>ℤ² / L ≅ {quotient}</div>
      </div>
      <figcaption className="viz-caption">
        Filled points make up L, the set of integer combinations of u and w. Over ℝ any two independent vectors form a basis, but
        over ℤ they must have determinant ±1: otherwise they span a smaller free submodule, and the shaded cell holds |det|
        points of ℤ² for each point of L.
      </figcaption>
    </figure>
  );
}
