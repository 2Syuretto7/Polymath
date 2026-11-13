"use client";

import { useState } from "react";

// T = [[2, 1, 0], [0, 2, 0], [0, 0, 3]]: eigenvalue 2 with a 2-dimensional generalised eigenspace, eigenvalue 3.
const T = [[2, 1, 0], [0, 2, 0], [0, 0, 3]];
const VECS: { name: string; v: number[] }[] = [
  { name: "(1, 0, 0)", v: [1, 0, 0] },
  { name: "(0, 1, 0)", v: [0, 1, 0] },
  { name: "(0, 0, 1)", v: [0, 0, 1] },
  { name: "(1, 1, 1)", v: [1, 1, 1] },
  { name: "(2, −3, 0)", v: [2, -3, 0] },
];
const fmt = (v: number[]) => `(${v.map((x) => (Object.is(x, -0) ? 0 : x)).join(", ")})`;

/** Repeatedly apply T − λI to a vector: generalised eigenvectors are sent to 0 eventually. */
export function GenEigViz() {
  const [li, setLi] = useState(0);
  const [vi, setVi] = useState(1);
  const lam = [2, 3][li];
  const step = (v: number[]) => T.map((r, i) => r.reduce((s, x, j) => s + x * v[j], 0) - lam * v[i]);
  const seq: number[][] = [VECS[vi].v];
  for (let k = 0; k < 3; k++) seq.push(step(seq[seq.length - 1]));
  const zero = (v: number[]) => v.every((x) => x === 0);
  const hit = seq.findIndex(zero);
  const isEig = hit === 1;
  const v = VECS[vi].v;
  return (
    <figure className="viz">
      <p className="mono" style={{ margin: "0 0 6px" }}>T = [2, 1, 0; 0, 2, 0; 0, 0, 3]</p>
      <div className="segmented" role="group" aria-label="Eigenvalue">
        {[2, 3].map((l, i) => <button key={l} type="button" aria-pressed={li === i} className={li === i ? "seg is-on" : "seg"} onClick={() => setLi(i)}>λ = {l}</button>)}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        {VECS.map((x, i) => <button key={x.name} type="button" aria-pressed={vi === i} className={vi === i ? "viz-chip is-on" : "viz-chip"} onClick={() => setVi(i)}>{x.name}</button>)}
      </div>
      <table className="table mono" style={{ width: "auto", marginTop: 8 }}>
        <tbody>
          {seq.map((x, k) => (
            <tr key={k}>
              <td>{k === 0 ? "v" : `(T − ${lam}I)${k > 1 ? ["", "", "²", "³"][k] : ""}v`}</td>
              <td style={{ color: zero(x) && (hit === k) ? "var(--accent)" : undefined }}>{fmt(x)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ margin: "6px 0", color: hit > 0 ? "var(--accent)" : "var(--text-muted)" }}>
        {hit > 0
          ? isEig
            ? `v is an eigenvector for ${lam}: one step reaches 0.`
            : `v is a generalised eigenvector for ${lam} but not an eigenvector: it takes ${hit} steps to reach 0.`
          : `v never reaches 0, so it is not a generalised eigenvector for ${lam}.`}
      </p>
      <p className="mono" style={{ margin: "4px 0" }}>
        v = ({v[0]}, {v[1]}, 0) + (0, 0, {v[2]}), a part in G(2, T) plus a part in G(3, T)
      </p>
      <figcaption className="viz-caption">
        A generalised eigenvector for λ is a nonzero v with (T − λI)ᵏv = 0 for some k. Here G(2, T) is the plane of the first two coordinates, though only the first axis consists of eigenvectors, and G(3, T) is the third axis. Every vector splits uniquely into parts in the generalised eigenspaces.
      </figcaption>
    </figure>
  );
}
