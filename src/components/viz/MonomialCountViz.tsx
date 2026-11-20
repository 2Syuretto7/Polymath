"use client";

import { useState } from "react";

/** Quotients of polynomial rings by monomial ideals; each generator is an exponent vector. */
export const RINGS = [
  { label: "k[x]", n: 1, gens: [] as number[][], dim: 1, geom: "a line" },
  { label: "k[x, y]", n: 2, gens: [], dim: 2, geom: "the plane" },
  { label: "k[x, y]/(xy)", n: 2, gens: [[1, 1]], dim: 1, geom: "two crossing lines" },
  { label: "k[x, y, z]", n: 3, gens: [], dim: 3, geom: "space" },
  { label: "k[x, y, z]/(xz, yz)", n: 3, gens: [[1, 0, 1], [0, 1, 1]], dim: 2, geom: "a plane and a line through it" },
  { label: "k[x, y, z]/(xyz)", n: 3, gens: [[1, 1, 1]], dim: 2, geom: "three coordinate planes" },
];

/** Number of monomials of degree at most d not divisible by any generator. */
export function countMonomials(ri: number, d: number) {
  const { n, gens } = RINGS[ri];
  let c = 0;
  const e = new Array(n).fill(0);
  const rec = (i: number, left: number) => {
    if (i === n) {
      if (!gens.some((g) => g.every((v, j) => e[j] >= v))) c++;
      return;
    }
    for (let k = 0; k <= left; k++) { e[i] = k; rec(i + 1, left - k); }
  };
  rec(0, d);
  return c;
}

/** The growth of the number of surviving monomials of degree at most d detects the dimension. */
export function MonomialCountViz() {
  const [ri, setRi] = useState(2);
  const [d, setD] = useState(10);
  const r = RINGS[ri];
  const D = 40;
  const counts = Array.from({ length: D }, (_, i) => countMonomials(ri, i + 1));
  const X0 = 50, Y0 = 180, W = 450, H = 160;
  const lx = (e: number) => X0 + (Math.log(e) / Math.log(D)) * W;
  const ly = (c: number) => Y0 - (Math.log(c) / Math.log(15000)) * H;
  const c = counts[d - 1], c2 = countMonomials(ri, 2 * d);
  const slope = Math.log(c2 / c) / Math.log(2);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="ring">
        {RINGS.map((v, i) => <button key={v.label} type="button" aria-pressed={ri === i} className={ri === i ? "seg is-on" : "seg"} onClick={() => setRi(i)}>{v.label}</button>)}
      </div>
      <div className="viz-controls">
        <label>degree at most d = {d} <input type="range" min={1} max={D} step={1} value={d} onChange={(e) => setD(Number(e.target.value))} aria-label="d" /></label>
      </div>
      <svg viewBox="0 0 540 206" role="img" aria-label="Number of monomials of degree at most d, on logarithmic axes" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0} y1={Y0} x2={X0 + W} y2={Y0} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X0} y1={Y0} x2={X0} y2={Y0 - H} style={{ stroke: "var(--border-strong)" }} />
        {[1, 10, 100, 1000, 10000].map((v) => (
          <g key={v}>
            <line x1={X0 - 4} y1={ly(v)} x2={X0} y2={ly(v)} style={{ stroke: "var(--border-strong)" }} />
            <text x={X0 - 7} y={ly(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text>
          </g>
        ))}
        {[1, 2, 5, 10, 20, 40].map((v) => (
          <g key={v}>
            <line x1={lx(v)} y1={Y0} x2={lx(v)} y2={Y0 + 4} style={{ stroke: "var(--border-strong)" }} />
            <text x={lx(v)} y={Y0 + 16} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text>
          </g>
        ))}
        {[1, 2, 3].map((k) => (
          <g key={k}>
            <line x1={lx(1)} y1={ly(1)} x2={lx(D)} y2={ly(Math.pow(D, k))} style={{ stroke: "var(--grid-line)", strokeDasharray: "4 4" }} />
            <text x={lx(D) + 4} y={ly(Math.pow(D, k)) + 4} style={{ fill: "var(--text-faint)", fontSize: 10 }}>d{["", "", "²", "³"][k]}</text>
          </g>
        ))}
        {counts.map((v, i) => <circle key={i} cx={lx(i + 1)} cy={ly(v)} r={i + 1 === d ? 5 : 2.5} style={{ fill: i + 1 === d ? "var(--accent)" : "var(--text-muted)" }} />)}
        <text x={X0 + 6} y={14} style={{ fill: "var(--text-muted)", fontSize: 10 }}>surviving monomials of degree at most d</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {r.label}, {r.geom}: {c} monomials of degree at most {d}; doubling d multiplies the count by {(c2 / c).toFixed(2)}, about 2 to the power {slope.toFixed(2)}. Dimension {r.dim}.
      </p>
      <figcaption className="viz-caption">
        For a quotient of a polynomial ring, the number of independent polynomials of degree at most d grows like a
        polynomial in d, the Hilbert polynomial, whose degree is the dimension of the variety. On logarithmic axes the
        points line up with slope equal to the dimension. A union of pieces has the dimension of its largest piece.
      </figcaption>
    </figure>
  );
}
