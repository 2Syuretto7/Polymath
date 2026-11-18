"use client";

import { useState } from "react";

/** The inclusion ℤ → ℝ has a right adjoint, floor, and a left adjoint, ceiling. */
export function FloorAdjointViz() {
  const [x10, setX] = useState(27);
  const [n, setN] = useState(2);
  const x = x10 / 10;
  const fl = Math.floor(x), ce = Math.ceil(x);
  const X = (v: number) => 40 + (v + 4) * 55;
  const row = (l: boolean, r: boolean, text1: string, text2: string) => (
    <tr>
      <td style={{ padding: "2px 8px" }}>{text1}</td>
      <td style={{ padding: "2px 8px", color: l ? "var(--accent)" : "var(--text-muted)" }}>{l ? "true" : "false"}</td>
      <td style={{ padding: "2px 8px" }}>{text2}</td>
      <td style={{ padding: "2px 8px", color: r ? "var(--accent)" : "var(--text-muted)" }}>{r ? "true" : "false"}</td>
    </tr>
  );
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 90" role="img" aria-label="The real line with integers, x, its floor and ceiling" style={{ width: "100%", display: "block" }}>
        <line x1={20} y1={50} x2={500} y2={50} style={{ stroke: "var(--text-muted)" }} />
        {Array.from({ length: 9 }, (_, i) => i - 4).map((k) => (
          <g key={k}>
            <circle cx={X(k)} cy={50} r={k === n ? 7 : 4} style={{ fill: k === n ? "var(--text)" : "var(--bg)", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
            <text x={X(k)} y={72} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{k}</text>
          </g>
        ))}
        <line x1={X(x)} y1={25} x2={X(x)} y2={50} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />
        <text x={X(x)} y={18} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 12, fontWeight: 700 }}>x = {x.toFixed(1)}</text>
        <text x={X(fl)} y={88} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 10 }}>floor</text>
        {ce !== fl && <text x={X(ce)} y={88} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 10 }}>ceiling</text>}
      </svg>
      <div className="viz-controls">
        <label className="mono" style={{ fontSize: 13 }}>
          x{" "}
          <input type="range" min={-35} max={35} value={x10} onChange={(e) => setX(Number(e.target.value))} aria-label="real number x" />
        </label>
        <label className="mono" style={{ fontSize: 13 }}>
          n = {n}{" "}
          <input type="range" min={-4} max={4} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="integer n" />
        </label>
      </div>
      <table className="mono" style={{ fontSize: 13, margin: "6px 0" }}>
        <tbody>
          {row(n <= x, n <= fl, `n ≤ x in ℝ`, `n ≤ floor(x) = ${fl} in ℤ`)}
          {row(ce <= n, x <= n, `ceiling(x) = ${ce} ≤ n in ℤ`, `x ≤ n in ℝ`)}
        </tbody>
      </table>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        In each row the two sides always agree: arrows n → x correspond to arrows n → floor(x), and arrows x → n to arrows ceiling(x) → n.
      </p>
      <figcaption className="viz-caption">
        Ordered sets are categories, and order-preserving maps are functors. An adjunction between them is a Galois
        connection: here ceiling ⊣ inclusion ⊣ floor. Floor is the best integer approximation from below, defined by a
        universal property rather than a formula.
      </figcaption>
    </figure>
  );
}
