"use client";

import { useState } from "react";

/** The index k of the preimage e to the i(θ + 2πk)/n reached by lifting the path from angle 0 to angle θ under z ↦ zⁿ. */
export const liftIndex = (n: number, thetaDeg: number) => Math.floor(thetaDeg / 360 + 1e-9) % n;

/** The covering z ↦ zⁿ of the punctured plane: moving w round 0 permutes its n preimages. */
export function PowerCoverViz() {
  const [n, setN] = useState(3);
  const [th, setTh] = useState(0);
  const t = (th * Math.PI) / 180;
  const R = 80;
  const L = (cx: number, a: number): [number, number] => [cx + R * Math.cos(a), 120 - R * Math.sin(a)];
  const tp = t - 2 * Math.PI * Math.floor(th / 360 + 1e-9);
  const pre = Array.from({ length: n }, (_, j) => (tp + 2 * Math.PI * j) / n);
  const SUB = ["₀", "₁", "₂", "₃", "₄", "₅"];
  const lift = t / n;
  const k = liftIndex(n, th);
  const trail = Array.from({ length: 61 }, (_, i) => (lift * i) / 60);
  const wTrail = Array.from({ length: 121 }, (_, i) => (t * i) / 120);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>n = {n} <input type="range" min={2} max={6} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
        <label>arg w = {th}° <input type="range" min={0} max={720} step={15} value={th} onChange={(e) => setTh(Number(e.target.value))} aria-label="angle of w" /></label>
      </div>
      <svg viewBox="0 0 540 240" role="img" aria-label="Preimages of a point under z to the n" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[135, 405].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy={120} r={R} style={{ fill: "none", stroke: "var(--border-strong)" }} />
            <circle cx={cx} cy={120} r={3} style={{ fill: "var(--text-faint)" }} />
          </g>
        ))}
        <text x={135} y={228} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>z, the covering surface</text>
        <text x={405} y={228} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>w = zⁿ</text>
        {th > 0 && <path d={wTrail.map((a, i) => { const r = R - 10 + (10 * i) / 120 + (th > 360 ? -8 * (i / 120) : 0); const [u, v] = [405 + r * Math.cos(a), 120 - r * Math.sin(a)]; return `${i ? "L" : "M"}${u.toFixed(1)},${v.toFixed(1)}`; }).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeDasharray: "3 3" }} />}
        {th > 0 && <path d={trail.map((a, i) => { const [u, v] = L(135, a); return `${i ? "L" : "M"}${u.toFixed(1)},${v.toFixed(1)}`; }).join("")} style={{ fill: "none", stroke: "var(--success)", strokeWidth: 3 }} />}
        {pre.map((a, j) => {
          const [u, v] = L(135, a);
          return (
            <g key={j}>
              <circle cx={u} cy={v} r={j === k ? 7 : 5} style={{ fill: j === k ? "var(--success)" : "var(--accent)" }} />
              <text x={135 + (R + 16) * Math.cos(a)} y={124 - (R + 16) * Math.sin(a)} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>z{SUB[j]}</text>
            </g>
          );
        })}
        <circle cx={L(405, t)[0]} cy={L(405, t)[1]} r={6} style={{ fill: "var(--danger)" }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        w has {n} preimages. Lifting the path of w from angle 0, starting at z₀ = 1, ends at z{SUB[k]}, index {k}. Here zⱼ has argument (arg w + 2πj)/n, with arg w taken between 0° and 360°.
      </p>
      <figcaption className="viz-caption">
        z ↦ zⁿ is an n-sheeted covering of the punctured plane: each w ≠ 0 has n preimages, and near each of them the map
        is a homeomorphism. A path of w lifts uniquely once a starting preimage is chosen. Going once round 0 moves the lift
        on by one sheet, so the loop permutes the preimages cyclically: the monodromy of the covering.
      </figcaption>
    </figure>
  );
}
