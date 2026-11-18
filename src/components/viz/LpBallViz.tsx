"use client";

import { useState } from "react";

const F = [3, 1, 2, 1];
const Gv = [1, 2, 1, 3];
const norm = (v: number[], p: number) => (p === Infinity ? Math.max(...v.map(Math.abs)) : v.reduce((s, x) => s + Math.abs(x) ** p, 0) ** (1 / p));

/** Unit balls of the p-norm in the plane, and Hölder’s inequality on two vectors. */
export function LpBallViz() {
  const PS = [1, 1.5, 2, 3, 6, Infinity];
  const [k, setK] = useState(2);
  const p = PS[k];
  const q = p === 1 ? Infinity : p === Infinity ? 1 : p / (p - 1);
  const C = 120, R = 90;
  const ball = (pp: number) => Array.from({ length: 361 }, (_, i) => {
    const t = (i / 360) * 2 * Math.PI, c = Math.cos(t), s = Math.sin(t);
    const r = pp === Infinity ? 1 / Math.max(Math.abs(c), Math.abs(s)) : 1 / (Math.abs(c) ** pp + Math.abs(s) ** pp) ** (1 / pp);
    return `${(C + R * r * c).toFixed(1)},${(C - R * r * s).toFixed(1)}`;
  }).join(" ");
  const lhs = F.reduce((s, x, i) => s + Math.abs(x * Gv[i]), 0);
  const rhs = norm(F, p) * norm(Gv, q);
  const show = (x: number) => (x === Infinity ? "∞" : Number.isInteger(x) ? String(x) : x.toFixed(2));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="p">
        {PS.map((x, i) => <button key={i} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>p = {show(x)}</button>)}
      </div>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center", marginTop: 8 }}>
        <svg viewBox="0 0 240 240" role="img" aria-label="Unit balls of p-norms" style={{ width: "100%", maxWidth: 260, display: "block" }}>
          <line x1={10} y1={C} x2={230} y2={C} style={{ stroke: "var(--border)" }} />
          <line x1={C} y1={10} x2={C} y2={230} style={{ stroke: "var(--border)" }} />
          {PS.map((x, i) => i !== k && <polygon key={i} points={ball(x)} style={{ fill: "none", stroke: "var(--border-strong)", strokeWidth: 1 }} />)}
          <polygon points={ball(p)} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        </svg>
        <div className="mono" style={{ fontSize: 13, flex: "1 1 220px" }}>
          <p>f = (3, 1, 2, 1), g = (1, 2, 1, 3)</p>
          <p>p = {show(p)}, conjugate q = {show(q)}</p>
          <p>Σ|fᵢgᵢ| = {lhs}</p>
          <p>‖f‖<sub>p</sub> · ‖g‖<sub>q</sub> = {rhs.toFixed(3)}</p>
          <p style={{ fontWeight: 700 }}>Hölder: {lhs} ≤ {rhs.toFixed(3)}</p>
        </div>
      </div>
      <figcaption className="viz-caption">
        Shaded: the set where |x|ᵖ + |y|ᵖ ≤ 1, the unit ball of the p-norm, from a diamond at p = 1 to a square at p = ∞.
        Each ball is convex for p ≥ 1, which is Minkowski&rsquo;s inequality in geometric form. Exponents p and q are
        conjugate when 1/p + 1/q = 1.
      </figcaption>
    </figure>
  );
}
