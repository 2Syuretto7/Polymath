"use client";

import { useState } from "react";

/** The first m rationals in [0, 1], listed by denominator, without repeats. */
export function rationals(m: number): [number, number][] {
  const out: [number, number][] = [];
  const g = (a: number, b: number): number => (b ? g(b, a % b) : a);
  for (let q = 1; out.length < m; q++) for (let p = 0; p <= q && out.length < m; p++) if (g(p, q) === 1) out.push([p, q]);
  return out;
}

/** Cover the rationals in [0, 1] by intervals of total length at most ε. */
export function RationalCoverViz() {
  const [eps, setEps] = useState(0.5);
  const [m, setM] = useState(12);
  const Q = rationals(m);
  const X = (x: number) => 30 + x * 460;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="epsilon">
        {[1, 0.5, 0.1].map((x) => <button key={x} type="button" aria-pressed={eps === x} className={eps === x ? "seg is-on" : "seg"} onClick={() => setEps(x)}>ε = {x}</button>)}
      </div>
      <svg viewBox="0 0 520 170" role="img" aria-label="Small intervals around rational points in the unit interval" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={150} x2={X(1)} y2={150} style={{ stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        <text x={X(0)} y={166} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>0</text>
        <text x={X(1)} y={166} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>1</text>
        {Q.map(([p, q], k) => {
          const x = p / q, w = eps / 2 ** (k + 1);
          const y = 140 - (k % 12) * 10;
          return (
            <g key={k}>
              <rect x={X(x - w / 2)} y={y - 3} width={Math.max(1, w * 460)} height={6} rx={2} style={{ fill: "var(--accent)", opacity: 0.75 }} />
              <circle cx={X(x)} cy={150} r={2.5} style={{ fill: "var(--danger)" }} />
            </g>
          );
        })}
      </svg>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={m >= 48} onClick={() => setM(m + 12)}>Twelve more rationals</button>
        <button type="button" className="btn btn-ghost" onClick={() => setM(12)}>Reset</button>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {m} rationals covered; total length used is ε minus {(eps / 2 ** m).toExponential(2)}, so less than ε = {eps}. However many we list, the total stays below ε.
      </p>
      <figcaption className="viz-caption">
        The kth rational in the list gets an interval of length ε/2ᵏ, drawn above its point. The lengths sum to ε, so the
        outer measure of the rationals in [0, 1] is at most every ε: it is 0. Most intervals soon become too thin to see.
      </figcaption>
    </figure>
  );
}
