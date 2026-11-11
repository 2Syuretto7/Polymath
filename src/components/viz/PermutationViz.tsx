"use client";

import { useState } from "react";

const A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const SWAPS: [number, number][] = [[0, 1], [1, 2], [0, 2]];

function Grid({ m, title, hot }: { m: number[][]; title: string; hot?: boolean }) {
  return (
    <div style={{ flex: "1 1 120px" }}>
      <p className="mono-meta" style={{ margin: "0 0 4px" }}>{title}</p>
      <table className="table mono" style={{ margin: 0, textAlign: "right" }}>
        <tbody>
          {m.map((row, i) => (
            <tr key={i}>
              {row.map((x, j) => (
                <td key={j} style={{ padding: "8px 10px", ...(hot && x === 1 ? { color: "var(--accent)", fontWeight: 600 } : {}), ...(hot && x === 0 ? { color: "var(--text-faint)" } : {}) }}>{x}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Reorder the rows of the identity to get a permutation matrix P; PA reorders the rows of A the same way, and the transpose undoes it. */
export function PermutationViz() {
  const [order, setOrder] = useState([0, 1, 2]);
  const [swaps, setSwaps] = useState(0);
  const P = order.map((r) => [0, 1, 2].map((j) => (j === r ? 1 : 0)));
  const PT = [0, 1, 2].map((i) => [0, 1, 2].map((j) => P[j][i]));
  const PA = order.map((r) => A[r]);
  const ident = order.every((r, i) => r === i);
  const swap = ([i, j]: [number, number]) => {
    const o = [...order];
    [o[i], o[j]] = [o[j], o[i]];
    setOrder(o);
    setSwaps(swaps + 1);
  };

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0 }}>
        {SWAPS.map((s) => (
          <button key={s.join()} type="button" className="btn" onClick={() => swap(s)}>swap rows {s[0] + 1} and {s[1] + 1}</button>
        ))}
        <button type="button" className="btn" onClick={() => { setOrder([0, 1, 2]); setSwaps(0); }}>Reset</button>
      </div>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 12 }}>
        <Grid m={P} title="P" hot />
        <Grid m={PA} title="PA" />
        <Grid m={PT} title="Pᵀ" hot />
      </div>
      <p className="mono-meta" style={{ margin: "8px 0 0" }}>
        A = [1 2 3; 4 5 6; 7 8 9]; swaps made: {swaps} ({swaps % 2 === 0 ? "even" : "odd"}); row order of PA: {order.map((r) => r + 1).join(", ")}
      </p>
      <figcaption className="viz-caption" aria-live="polite">
        {ident
          ? "P is the identity. Swap some rows: each swap applied to I gives a permutation matrix, and PA applies the same swaps to the rows of A."
          : `Row i of P has its 1 in column ${order.map((r) => r + 1).join(", ")} respectively, so row i of PA is that row of A. Pᵀ is the reverse reordering: PᵀP = I, so the inverse of a permutation matrix is its transpose.`}
      </figcaption>
    </figure>
  );
}
