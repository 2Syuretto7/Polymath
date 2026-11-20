"use client";

import { useState } from "react";

const PAIRS: [number, number][] = [[0, 1], [1, 2], [0, 2], [1, 0], [2, 1], [2, 0]];
const sub = ["₁", "₂", "₃"];

/** For h = diag(h₁, h₂, h₃) in sl(3), ad h acts on each E_ij by the root value hᵢ − hⱼ. */
export function RootValuesViz() {
  const [a, setA] = useState(2);
  const [b, setB] = useState(-0.5);
  const h = [a, b, -a - b];
  const vals = PAIRS.map(([i, j]) => h[i] - h[j]);
  const regular = vals.every((v) => Math.abs(v) > 1e-9);
  const X0 = 260, S = 34;
  const x = (v: number) => X0 + v * S;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>h₁ = {a.toFixed(1)} <input type="range" min={-3} max={3} step={0.5} value={a} onChange={(e) => setA(Number(e.target.value))} aria-label="h1" /></label>
        <label>h₂ = {b.toFixed(1)} <input type="range" min={-3} max={3} step={0.5} value={b} onChange={(e) => setB(Number(e.target.value))} aria-label="h2" /></label>
      </div>
      <svg viewBox="0 0 520 196" role="img" aria-label="Eigenvalues of ad h on the root vectors of sl(3)" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={30} y1={150} x2={490} y2={150} style={{ stroke: "var(--border-strong)" }} />
        {[-6, -4, -2, 0, 2, 4, 6].map((v) => (
          <g key={v}>
            <line x1={x(v)} y1={146} x2={x(v)} y2={154} style={{ stroke: "var(--border-strong)" }} />
            <text x={x(v)} y={170} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(v).replace("-", "−")}</text>
          </g>
        ))}
        <circle cx={x(0)} cy={150} r={7} style={{ fill: "var(--text-faint)" }} />
        <text x={x(0)} y={186} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>grey: h itself, eigenvalue 0 (twice)</text>
        {PAIRS.map(([i, j], k) => {
          const v = vals[k], yy = 24 + k * 17;
          const cx = x(Math.max(-6.8, Math.min(6.8, v)));
          return (
            <g key={k}>
              <line x1={cx} y1={yy + 4} x2={cx} y2={146} style={{ stroke: Math.abs(v) < 1e-9 ? "var(--danger)" : "var(--accent)", strokeDasharray: "2 3" }} />
              <circle cx={cx} cy={yy} r={5} style={{ fill: Math.abs(v) < 1e-9 ? "var(--danger)" : "var(--accent)" }} />
              <text x={cx + 9} y={yy + 4} style={{ fill: "var(--text)", fontSize: 11 }}>E{sub[i]}{sub[j]}: {v.toFixed(1).replace("-", "−")}</text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        h = diag({h.map((v) => v.toFixed(1).replace("-", "−")).join(", ")}). {regular ? "Regular: the six root values are non-zero, so the diagonal matrices are exactly the centraliser of h." : "Singular: some root value is 0, so h commutes with more than the diagonal matrices."}
      </p>
      <figcaption className="viz-caption">
        The diagonal matrices of trace 0 form a Cartan subalgebra h of sl(3). Each off-diagonal unit matrix Eᵢⱼ is a
        common eigenvector of every ad h, with eigenvalue hᵢ − hⱼ. These linear functions on h are the roots: six of
        them, in pairs ±α.
      </figcaption>
    </figure>
  );
}
