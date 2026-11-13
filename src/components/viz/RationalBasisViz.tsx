"use client";

import { useState } from "react";

/** A countable basis for ℝ: inside any open interval round x sits an interval with rational endpoints that still contains x. */
export function RationalBasisViz() {
  const [x, setX] = useState(0.618);
  const [a, setA] = useState(0.55);
  const [b, setB] = useState(0.7);
  const ok = a < x && x < b;
  let found: [number, number, number] | null = null;
  if (ok) {
    for (let q = 1; q <= 2000 && !found; q++) {
      const p = Math.ceil(x * q - 1e-12) - 1, r = Math.floor(x * q + 1e-12) + 1;
      if (p / q >= a && r / q <= b) found = [p, r, q];
    }
  }
  const W = 520, X0 = 20, X1 = 500, X = (v: number) => X0 + v * (X1 - X0);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>the point x: <span className="mono">{x.toFixed(3)}</span></span>
          <input type="range" min={0.01} max={0.99} step={0.001} value={x} onChange={(e) => setX(Number(e.target.value))} /></label>
        <label><span>left end of the open set U: <span className="mono">{a.toFixed(3)}</span></span>
          <input type="range" min={0} max={0.99} step={0.001} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>right end of U: <span className="mono">{b.toFixed(3)}</span></span>
          <input type="range" min={0.01} max={1} step={0.001} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} 90`} role="img" aria-label="The open set U, the point x, and a rational interval between them" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={50} x2={X(1)} y2={50} style={{ stroke: "var(--border)", strokeWidth: 2 }} />
        {[0, 1].map((t) => <text key={t} x={X(t)} y={78} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{t}</text>)}
        {a < b && <rect x={X(a)} y={36} width={X(b) - X(a)} height={28} rx={4} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeDasharray: "4 3" }} />}
        {found && <line x1={X(found[0] / found[2])} y1={50} x2={X(found[1] / found[2])} y2={50} style={{ stroke: "var(--accent)", strokeWidth: 6 }} />}
        <circle cx={X(x)} cy={50} r={5} style={{ fill: "var(--text)" }} />
        <text x={X(x)} y={26} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>x</text>
      </svg>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>
        {!ok
          ? "move U so that it contains x"
          : found
            ? `basic interval (${found[0]}/${found[2]}, ${found[1]}/${found[2]}) contains x and lies inside U`
            : "U is too narrow for denominators up to 2000; a larger denominator would do"}
      </p>
      <figcaption className="viz-caption">
        The intervals with rational endpoints can be listed one after another, so they form a countable basis: whatever open
        set U contains x, one of them fits between. This makes ℝ second countable. The search tries denominators 1, 2, 3, … and
        stops at the first that fits, so narrow sets need large denominators.
      </figcaption>
    </figure>
  );
}
