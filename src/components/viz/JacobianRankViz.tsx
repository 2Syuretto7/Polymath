"use client";

import { useState } from "react";

const PX = 2, PY = 3;
const ELTS: { name: string; grad: [number, number] }[] = [
  { name: "x", grad: [1, 0] },
  { name: "y", grad: [0, 1] },
  { name: "x²", grad: [2 * PX, 0] },
  { name: "x + y", grad: [1, 1] },
  { name: "xy", grad: [PY, PX] },
  { name: "x²y", grad: [2 * PX * PY, PX * PX] },
];
const rank = (rows: [number, number][]) => {
  const nz = rows.filter(([a, b]) => a !== 0 || b !== 0);
  if (!nz.length) return 0;
  const [a0, b0] = nz[0];
  return nz.some(([a, b]) => a * b0 - b * a0 !== 0) ? 2 : 1;
};

/** Algebraic independence in k(x, y), tested by the rank of the Jacobian (valid in characteristic 0). */
export function JacobianRankViz() {
  const [sel, setSel] = useState<number[]>([0, 2]);
  const toggle = (i: number) => setSel((s) => (s.includes(i) ? s.filter((j) => j !== i) : [...s, i].sort((a, b) => a - b)));
  const rows = sel.map((i) => ELTS[i].grad);
  const r = rank(rows);
  const indep = r === sel.length;
  const basis = indep && sel.length === 2;
  return (
    <figure className="viz">
      <div className="viz-controls">
        {ELTS.map((e, i) => <button key={e.name} type="button" className={sel.includes(i) ? "btn btn-primary" : "btn btn-ghost"} onClick={() => toggle(i)}>{e.name}</button>)}
      </div>
      <table className="mono" style={{ fontSize: 13, borderCollapse: "collapse", margin: "8px 0" }}>
        <thead>
          <tr>
            <th style={{ padding: "3px 12px", borderBottom: "1px solid var(--border)", textAlign: "left" }}>element</th>
            <th style={{ padding: "3px 12px", borderBottom: "1px solid var(--border)" }}>∂/∂x at (2, 3)</th>
            <th style={{ padding: "3px 12px", borderBottom: "1px solid var(--border)" }}>∂/∂y at (2, 3)</th>
          </tr>
        </thead>
        <tbody>
          {sel.map((i) => (
            <tr key={i}>
              <td style={{ padding: "3px 12px" }}>{ELTS[i].name}</td>
              <td style={{ padding: "3px 12px", textAlign: "center" }}>{ELTS[i].grad[0]}</td>
              <td style={{ padding: "3px 12px", textAlign: "center" }}>{ELTS[i].grad[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, color: indep ? "var(--text)" : "var(--danger)" }}>
        {sel.length} element{sel.length === 1 ? "" : "s"}, Jacobian rank {r}.{" "}
        {sel.length === 0 ? "The empty set is independent, but not a basis." : indep ? (basis ? "Algebraically independent and maximal: a transcendence basis of k(x, y) over k." : "Algebraically independent, but not maximal: k(x, y) is not algebraic over the field it generates.") : "Algebraically dependent: some non-zero polynomial relation holds among them."}
      </p>
      <figcaption className="viz-caption">
        In characteristic 0, polynomials are algebraically independent exactly when their Jacobian matrix has full rank at a
        generic point. Every transcendence basis of k(x, y) has two elements, though very different pairs qualify: x and y,
        or x² and xy, or x + y and xy.
      </figcaption>
    </figure>
  );
}
