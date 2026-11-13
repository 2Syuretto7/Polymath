"use client";

import { useState } from "react";

const VECS: number[][] = [[1, 0, 0], [0, 1, 0], [1, 1, 0], [1, 2, 3], [2, -1, 1]];
const name = (v: number[]) => `(${v.join(", ")})`;

function rank(M: number[][]): number {
  const A = M.map((r) => [...r]);
  let rk = 0;
  for (let c = 0; c < 3 && rk < 3; c++) {
    let p = -1;
    for (let r = rk; r < 3; r++) if (Math.abs(A[r][c]) > 1e-9) { p = r; break; }
    if (p < 0) continue;
    [A[rk], A[p]] = [A[p], A[rk]];
    for (let r = 0; r < 3; r++) if (r !== rk) { const f = A[r][c] / A[rk][c]; for (let k = 0; k < 3; k++) A[r][k] -= f * A[rk][k]; }
    rk++;
  }
  return rk;
}

/** Elements of ℝ³ ⊗ ℝ³ as 3 by 3 arrays: pure tensors u ⊗ v have rank 1, and sums can have more. */
export function OuterProductViz() {
  const [u1, setU1] = useState(0);
  const [v1, setV1] = useState(3);
  const [u2, setU2] = useState(1);
  const [v2, setV2] = useState(4);
  const [two, setTwo] = useState(true);
  const T = Array.from({ length: 3 }, (_, i) => Array.from({ length: 3 }, (_, j) => VECS[u1][i] * VECS[v1][j] + (two ? VECS[u2][i] * VECS[v2][j] : 0)));
  const rk = rank(T);
  const chips = (sel: number, set: (k: number) => void, lbl: string) => (
    <div className="viz-controls" role="group" aria-label={lbl} style={{ alignItems: "center" }}>
      <span className="mono-meta" style={{ minWidth: 24 }}>{lbl}</span>
      {VECS.map((v, k) => <button key={k} type="button" aria-pressed={sel === k} className={sel === k ? "viz-chip is-on" : "viz-chip"} onClick={() => set(k)}>{name(v)}</button>)}
    </div>
  );
  return (
    <figure className="viz">
      {chips(u1, setU1, "u₁")}
      {chips(v1, setV1, "v₁")}
      <div className="segmented" role="group" aria-label="Number of terms" style={{ margin: "8px 0" }}>
        <button type="button" aria-pressed={!two} className={!two ? "seg is-on" : "seg"} onClick={() => setTwo(false)}>u₁ ⊗ v₁</button>
        <button type="button" aria-pressed={two} className={two ? "seg is-on" : "seg"} onClick={() => setTwo(true)}>u₁ ⊗ v₁ + u₂ ⊗ v₂</button>
      </div>
      {two && chips(u2, setU2, "u₂")}
      {two && chips(v2, setV2, "v₂")}
      <table className="table mono" style={{ width: "auto", marginTop: 8 }}>
        <tbody>
          {T.map((r, i) => <tr key={i}>{r.map((x, j) => <td key={j} style={{ padding: "4px 12px", color: x ? "var(--text)" : "var(--text-faint)" }}>{x}</td>)}</tr>)}
        </tbody>
      </table>
      <p style={{ margin: "6px 0", color: rk <= 1 ? "var(--accent)" : "var(--text)" }}>
        Rank {rk}. {rk === 0 ? "This is the zero tensor." : rk === 1 ? "This is a pure tensor: a single u ⊗ v." : `It is not a pure tensor: it needs ${rk} terms of the form u ⊗ v.`}
      </p>
      <figcaption className="viz-caption">
        With the basis eᵢ ⊗ eⱼ, a tensor in ℝ³ ⊗ ℝ³ is a 3 by 3 array, and u ⊗ v has entries uᵢvⱼ. Pure tensors are exactly the arrays of rank 1. Most tensors are not pure; the fewest pure tensors that add up to a given one is its rank, here the rank of the matrix.
      </figcaption>
    </figure>
  );
}
