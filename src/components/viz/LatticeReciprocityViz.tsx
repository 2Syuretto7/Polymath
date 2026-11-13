"use client";

import { useState } from "react";

const PR = [3, 5, 7, 11, 13, 17];

/** Eisenstein's lattice-point proof of quadratic reciprocity: count points under and over the diagonal of a (p/2) × (q/2) rectangle. */
export function LatticeReciprocityViz() {
  const [p, setP] = useState(7);
  const [q, setQ] = useState(11);
  const hp = (p - 1) / 2, hq = (q - 1) / 2;
  const S = 360 / Math.max(p, q) * 2;
  const W = (p / 2) * S + 50, H = (q / 2) * S + 40;
  const X = (x: number) => 30 + x * S, Y = (y: number) => H - 24 - y * S;
  const pts: { x: number; y: number; below: boolean }[] = [];
  for (let x = 1; x <= hp; x++) for (let y = 1; y <= hq; y++) pts.push({ x, y, below: q * x > p * y });
  const below = pts.filter((t) => t.below).length, above = pts.length - below;
  const ok = p !== q;
  return (
    <figure className="viz">
      {(["p", "q"] as const).map((lab) => (
        <div key={lab} className="viz-controls" style={{ marginTop: lab === "p" ? 0 : 6 }}>
          <span style={{ fontSize: 13, color: "var(--text-muted)", minWidth: 16 }}>{lab}:</span>
          {PR.map((x) => {
            const cur = lab === "p" ? p : q;
            return <button key={x} type="button" aria-pressed={cur === x} disabled={x === (lab === "p" ? q : p)} className={cur === x ? "viz-chip is-on" : "viz-chip"} onClick={() => (lab === "p" ? setP(x) : setQ(x))}>{x}</button>;
          })}
        </div>
      ))}
      {ok && (
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Lattice points in a rectangle split by a diagonal" style={{ width: "100%", maxWidth: Math.min(480, W * 1.3), display: "block", margin: "8px auto" }}>
          <rect x={X(0)} y={Y(q / 2)} width={(p / 2) * S} height={(q / 2) * S} style={{ fill: "none", stroke: "var(--border)" }} />
          <line x1={X(0)} y1={Y(0)} x2={X(p / 2)} y2={Y(q / 2)} style={{ stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
          {pts.map((t) => <circle key={`${t.x},${t.y}`} cx={X(t.x)} cy={Y(t.y)} r={Math.min(6, S / 5)} style={{ fill: t.below ? "var(--accent)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 1.5 }} />)}
          <text x={X(p / 2)} y={Y(0) + 16} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>p/2</text>
          <text x={X(0) - 6} y={Y(q / 2) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>q/2</text>
        </svg>
      )}
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14 }}>
        <div>points below the diagonal: {below} = Σ ⌊qk/p⌋, so (q / p) = (−1)^{below} = {below % 2 ? "−1" : "+1"}</div>
        <div>points above the diagonal: {above} = Σ ⌊pk/q⌋, so (p / q) = (−1)^{above} = {above % 2 ? "−1" : "+1"}</div>
        <div>total: {pts.length} = {hp} · {hq}, so (p / q)(q / p) = (−1)^{pts.length} = {pts.length % 2 ? "−1" : "+1"}</div>
      </div>
      <figcaption className="viz-caption">
        No lattice point lies on the diagonal, because p and q are distinct primes. So the points split into those below and those above, and their numbers add up to (p − 1)/2 · (q − 1)/2. By Gauss&rsquo;s lemma each count gives one Legendre symbol, and the total gives the law of quadratic reciprocity.
      </figcaption>
    </figure>
  );
}
