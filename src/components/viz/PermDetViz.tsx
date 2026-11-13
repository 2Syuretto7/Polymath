"use client";

import { useState } from "react";

const PERMS = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]];
const SIGN = [1, -1, -1, 1, 1, -1];
const MATS = [
  [[2, 1, 0], [1, 3, 1], [0, 1, 4]],
  [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
  [[0, 1, 0], [0, 0, 1], [1, 0, 0]],
  [[3, 0, 0], [5, 2, 0], [-1, 4, 1]],
];

/** The determinant as a signed sum over permutations: each term picks one entry from every row and every column. */
export function PermDetViz() {
  const [mi, setMi] = useState(0);
  const [pi, setPi] = useState(0);
  const A = MATS[mi];
  const terms = PERMS.map((p, k) => SIGN[k] * A[0][p[0]] * A[1][p[1]] * A[2][p[2]]);
  const det = terms.reduce((s, x) => s + x, 0);
  const p = PERMS[pi];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Matrix">
        {MATS.map((_, i) => <button key={i} type="button" aria-pressed={mi === i} className={mi === i ? "seg is-on" : "seg"} onClick={() => setMi(i)}>matrix {i + 1}</button>)}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "flex-start", marginTop: 8 }}>
        <table className="table mono" style={{ width: "auto" }}>
          <tbody>
            {A.map((r, i) => <tr key={i}>{r.map((x, j) => <td key={j} style={{ padding: "6px 12px", background: p[i] === j ? "var(--accent-soft)" : undefined, color: p[i] === j ? "var(--accent)" : "var(--text)" }}>{x}</td>)}</tr>)}
          </tbody>
        </table>
        <table className="table mono" style={{ width: "auto" }}>
          <tbody>
            <tr><td>permutation</td><td>sign</td><td>term</td></tr>
            {PERMS.map((q, k) => (
              <tr key={k} style={{ background: pi === k ? "var(--bg-subtle)" : undefined }}>
                <td>
                  <button type="button" className={pi === k ? "viz-chip is-on" : "viz-chip"} aria-pressed={pi === k} onClick={() => setPi(k)}>
                    ({q.map((x) => x + 1).join(" ")})
                  </button>
                </td>
                <td>{SIGN[k] > 0 ? "+" : "−"}</td>
                <td style={{ color: terms[k] === 0 ? "var(--text-faint)" : undefined }}>{terms[k]}</td>
              </tr>
            ))}
            <tr><td>det</td><td></td><td style={{ color: "var(--accent)" }}>{det}</td></tr>
          </tbody>
        </table>
      </div>
      <figcaption className="viz-caption">
        Each permutation σ picks the entries in positions (1, σ(1)), (2, σ(2)), (3, σ(3)), one from every row and every column, shaded in the matrix. Multiply them, attach the sign of σ, and add over all six permutations: that is the determinant. A triangular matrix leaves only one nonzero term, the product of the diagonal.
      </figcaption>
    </figure>
  );
}
