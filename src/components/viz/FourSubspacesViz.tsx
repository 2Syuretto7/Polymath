"use client";

import { useState } from "react";
import { fstr, nullBasis, rref, toF, type Frac, type FMatrix } from "./frac";

const PRESETS: { name: string; rows: number[][] }[] = [
  { name: "3 by 4, rank 2", rows: [[1, 2, 0, 1], [0, 0, 1, 1], [1, 2, 1, 2]] },
  { name: "3 by 2, rank 1", rows: [[1, 2], [2, 4], [3, 6]] },
  { name: "3 by 3, invertible", rows: [[1, 2, 3], [0, 1, 4], [5, 6, 0]] },
  { name: "2 by 3, rank 2", rows: [[1, 0, -1], [0, 1, 2]] },
];

const sup = (x: number) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[x];
const vec = (v: Frac[]) => `(${v.map(fstr).join(", ")})`;
const transpose = (M: FMatrix) => M[0].map((_, j) => M.map((r) => r[j]));

function Mat({ m, title }: { m: FMatrix; title: string }) {
  return (
    <div style={{ flex: "0 1 auto" }}>
      <p className="mono-meta" style={{ margin: "0 0 4px" }}>{title}</p>
      <table className="table mono" style={{ margin: 0, textAlign: "right" }}>
        <tbody>
          {m.map((row, i) => (
            <tr key={i}>{row.map((x, j) => <td key={j} style={{ padding: "6px 10px" }}>{fstr(x)}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Compute bases for the four fundamental subspaces of a matrix from its reduced echelon forms, and check the dimension count. */
export function FourSubspacesViz() {
  const [k, setK] = useState(0);
  const A = toF(PRESETS[k].rows);
  const m = A.length, n = A[0].length;
  const { R, pivots } = rref(A);
  const r = pivots.length;
  const At = transpose(A);
  const rt = rref(At);
  const col = pivots.map((j) => A.map((row) => row[j]));
  const row = R.slice(0, r);
  const nul = nullBasis(R, pivots, n);
  const left = nullBasis(rt.R, rt.pivots, m);
  const list = (vs: Frac[][]) => (vs.length ? vs.map(vec).join(", ") : "only the zero vector, no basis vectors");

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Matrix">
        {PRESETS.map((p, i) => (
          <button key={p.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => setK(i)}>{p.name}</button>
        ))}
      </div>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginTop: 12 }}>
        <Mat m={A} title="A" />
        <Mat m={R} title={`R = rref(A), pivot columns ${pivots.map((p) => p + 1).join(", ")}`} />
      </div>
      <table className="table" style={{ marginTop: 12 }}>
        <thead>
          <tr><th>subspace</th><th>lives in</th><th>dimension</th><th>a basis</th></tr>
        </thead>
        <tbody>
          <tr><td>column space C(A)</td><td className="mono">ℝ{sup(m)}</td><td className="mono">r = {r}</td><td className="mono">{list(col)}</td></tr>
          <tr><td>row space C(Aᵀ)</td><td className="mono">ℝ{sup(n)}</td><td className="mono">r = {r}</td><td className="mono">{list(row)}</td></tr>
          <tr><td>null space N(A)</td><td className="mono">ℝ{sup(n)}</td><td className="mono">n − r = {n - r}</td><td className="mono">{list(nul)}</td></tr>
          <tr><td>left null space N(Aᵀ)</td><td className="mono">ℝ{sup(m)}</td><td className="mono">m − r = {m - r}</td><td className="mono">{list(left)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {`A is ${m} by ${n} with rank ${r}. The column space basis is the pivot columns of A itself, not of R; the row space basis is the non-zero rows of R. `}
        {`In ℝ${sup(n)}, the row space and null space have dimensions ${r} + ${n - r} = ${n}; in ℝ${sup(m)}, the column space and left null space have ${r} + ${m - r} = ${m}. `}
        {nul.length ? "Each null space vector has dot product zero with every row of A: that is what Ax = 0 says." : "With no free columns, Ax = 0 forces x = 0."}
      </figcaption>
    </figure>
  );
}
