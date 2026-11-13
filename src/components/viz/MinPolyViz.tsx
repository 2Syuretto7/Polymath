"use client";

import { useState } from "react";

type Field = { name: string; basis: string[]; table: [number, number][][] };
// table[i][j] = [coefficient, index]: e_i · e_j = coefficient · e_index
const F4: Field = {
  name: "ℚ(√2, √3)",
  basis: ["1", "√2", "√3", "√6"],
  table: [
    [[1, 0], [1, 1], [1, 2], [1, 3]],
    [[1, 1], [2, 0], [1, 3], [2, 2]],
    [[1, 2], [1, 3], [3, 0], [3, 1]],
    [[1, 3], [2, 2], [3, 1], [6, 0]],
  ],
};
const F3: Field = {
  name: "ℚ(∛2)",
  basis: ["1", "∛2", "∛4"],
  table: [
    [[1, 0], [1, 1], [1, 2]],
    [[1, 1], [1, 2], [2, 0]],
    [[1, 2], [2, 0], [2, 1]],
  ],
};
const PRESETS: { label: string; F: Field; v: number[] }[] = [
  { label: "√2 + √3", F: F4, v: [0, 1, 1, 0] },
  { label: "1 + √2", F: F4, v: [1, 1, 0, 0] },
  { label: "√6", F: F4, v: [0, 0, 0, 1] },
  { label: "1 + ∛2", F: F3, v: [1, 1, 0] },
  { label: "∛4", F: F3, v: [0, 0, 1] },
];

const mul = (F: Field, a: number[], b: number[]) => {
  const out = Array(a.length).fill(0);
  a.forEach((x, i) => b.forEach((y, j) => { if (x && y) { const [c, k] = F.table[i][j]; out[k] += c * x * y; } }));
  return out;
};

/** Solve for c with Σ c_j v_j = w, or return null if w is not in the span of the vs. */
const solve = (vs: number[][], w: number[]): number[] | null => {
  const n = w.length, m = vs.length;
  const A = Array.from({ length: n }, (_, r) => [...vs.map((v) => v[r]), w[r]]);
  const piv: number[] = [];
  let row = 0;
  for (let c = 0; c < m && row < n; c++) {
    let p = row;
    for (let r = row; r < n; r++) if (Math.abs(A[r][c]) > Math.abs(A[p][c])) p = r;
    if (Math.abs(A[p][c]) < 1e-9) continue;
    [A[row], A[p]] = [A[p], A[row]];
    for (let r = 0; r < n; r++) if (r !== row) { const f = A[r][c] / A[row][c]; for (let k = c; k <= m; k++) A[r][k] -= f * A[row][k]; }
    piv.push(c); row++;
  }
  for (let r = row; r < n; r++) if (Math.abs(A[r][m]) > 1e-9) return null;
  const c = Array(m).fill(0);
  piv.forEach((col, r) => { c[col] = A[r][m] / A[r][col]; });
  return c;
};

const num = (x: number) => (Math.abs(x - Math.round(x)) < 1e-9 ? String(Math.round(x)) : x.toFixed(3));

/** Finding a minimal polynomial: take powers of α until one is a combination of the earlier ones. */
export function MinPolyViz() {
  const [pi, setPi] = useState(0);
  const [k, setK] = useState(2);
  const P = PRESETS[pi];
  const pows: number[][] = [P.F.basis.map((_, i) => (i === 0 ? 1 : 0))];
  let rel: number[] | null = null;
  let deg = 0;
  for (let j = 1; j <= P.F.basis.length; j++) {
    const next = mul(P.F, pows[j - 1], P.v);
    const c = solve(pows, next);
    pows.push(next);
    if (c) { rel = c; deg = j; break; }
  }
  const shown = Math.min(k, pows.length);
  const found = rel && shown === pows.length;
  const term = (c: number, e: number) => (e === 0 ? num(c) : `${c === 1 ? "" : num(c)}x${e > 1 ? ["", "", "²", "³", "⁴"][e] : ""}`);
  let poly = "";
  if (rel) {
    poly = `x${["", "", "²", "³", "⁴"][deg]}`;
    for (let e = deg - 1; e >= 0; e--) {
      const c = -rel[e];
      if (Math.abs(c) < 1e-9) continue;
      poly += ` ${c < 0 ? "−" : "+"} ${term(Math.abs(c), e)}`;
    }
  }
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Element">
        {PRESETS.map((p, i) => <button key={p.label} type="button" aria-pressed={pi === i} className={pi === i ? "seg is-on" : "seg"} onClick={() => { setPi(i); setK(2); }}>α = {p.label}</button>)}
      </div>
      <p style={{ margin: "8px 0", fontSize: 14 }}>Coordinates of the powers of α in the basis {P.F.basis.join(", ")} of {P.F.name} over ℚ.</p>
      <div style={{ overflowX: "auto" }}>
        <table className="table" style={{ width: "auto" }}>
          <thead><tr><th style={{ textTransform: "none" }}>power</th>{P.F.basis.map((b) => <th key={b} style={{ textTransform: "none" }}>{b}</th>)}</tr></thead>
          <tbody>
            {pows.slice(0, shown).map((v, j) => (
              <tr key={j} style={found && j === shown - 1 ? { color: "var(--accent)", fontWeight: 600 } : undefined}>
                <td>α{["⁰", "¹", "²", "³", "⁴"][j]}</td>
                {v.map((x, i) => <td key={i} className="mono">{num(x)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <button type="button" className="btn btn-primary" disabled={shown >= pows.length} onClick={() => setK(k + 1)}>Add the next power</button>
        <button type="button" className="btn" onClick={() => setK(2)}>Start again</button>
      </div>
      <p className="mono" style={{ margin: "8px 0 4px", fontSize: 14 }}>
        {found ? `α${["", "", "²", "³", "⁴"][deg] || ""} is a combination of lower powers: minimal polynomial ${poly}, degree ${deg}` : `${shown} powers so far, all linearly independent over ℚ`}
      </p>
      <figcaption className="viz-caption">
        The powers of α live in a finite-dimensional space, so eventually one is a rational combination of the earlier ones.
        The first such relation is the minimal polynomial, and its degree is [ℚ(α) : ℚ]. It always divides the dimension of
        the field containing α.
      </figcaption>
    </figure>
  );
}
