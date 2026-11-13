"use client";

import { useState } from "react";

const PRESETS: { name: string; U: number[][] }[] = [
  { name: "operator A", U: [[2, 1, 1], [0, 3, 1], [0, 0, 1]] },
  { name: "operator B", U: [[2, 0, 1], [0, 3, 1], [0, 0, 1]] },
  { name: "operator C", U: [[4, 1, 0], [0, 4, 1], [0, 0, 4]] },
];
const PERMS = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]];

/** The matrix of an operator in a reordered basis u₁, u₂, u₃: upper-triangular exactly when each initial span is invariant. */
export function FlagViz() {
  const [pi, setPi] = useState(0);
  const [qi, setQi] = useState(1);
  const U = PRESETS[pi].U;
  const order = PERMS[qi];
  const M = order.map((r) => order.map((c) => U[r][c]));
  const invariant = [1, 2].map((k) => {
    const first = order.slice(0, k);
    return first.every((j) => [0, 1, 2].every((i) => U[i][j] === 0 || first.includes(i)));
  });
  const tri = M.every((row, i) => row.every((x, j) => j >= i || x === 0));
  const name = (j: number) => `u${"₁₂₃"[j]}`;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Operator">
        {PRESETS.map((p, i) => <button key={p.name} type="button" aria-pressed={pi === i} className={pi === i ? "seg is-on" : "seg"} onClick={() => setPi(i)}>{p.name}</button>)}
      </div>
      <div className="viz-controls" style={{ flexWrap: "wrap", gap: 6, marginTop: 8 }}>
        {PERMS.map((p, i) => <button key={i} type="button" aria-pressed={qi === i} className={qi === i ? "viz-chip is-on" : "viz-chip"} onClick={() => setQi(i)}>{p.map(name).join(", ")}</button>)}
      </div>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginTop: 10, alignItems: "flex-start" }}>
        <table className="table" style={{ width: "auto" }}>
          <thead><tr><th></th>{order.map((j) => <th key={j} style={{ textTransform: "none" }}>T{name(j)}</th>)}</tr></thead>
          <tbody>
            {M.map((row, i) => <tr key={i}><td className="mono-meta" style={{ textTransform: "none" }}>{name(order[i])}</td>{row.map((x, j) => <td key={j} className="mono" style={{ textAlign: "center", color: j < i && x !== 0 ? "var(--danger)" : j === i ? "var(--accent)" : x === 0 ? "var(--text-faint)" : "var(--text)" }}>{x}</td>)}</tr>)}
          </tbody>
        </table>
        <div>
          {[1, 2].map((k, idx) => <p key={k} style={{ margin: "2px 0" }}>span({order.slice(0, k).map(name).join(", ")}) is {invariant[idx] ? "invariant" : <span style={{ color: "var(--danger)" }}>not invariant</span>}</p>)}
          <p style={{ margin: "8px 0 0" }}><strong>{tri ? "Upper-triangular." : "Not upper-triangular."}</strong> {tri ? `The diagonal entries ${M.map((r, i) => r[i]).join(", ")} are the eigenvalues.` : "Red entries lie below the diagonal."}</p>
        </div>
      </div>
      <figcaption className="viz-caption">
        Column j lists the coordinates of T applied to the j-th basis vector. The matrix is upper-triangular exactly when T sends each basis vector into the span of itself and the earlier ones, that is, when every initial span is an invariant subspace. Try every order for each operator.
      </figcaption>
    </figure>
  );
}
