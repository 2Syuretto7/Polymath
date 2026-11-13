"use client";

import { useState } from "react";
import { subs, sups } from "./groupOrder";

type Block = [number, number]; // [eigenvalue, size]
const PRESETS: Block[][] = [
  [[2, 4]],
  [[2, 3], [2, 1]],
  [[2, 2], [2, 2]],
  [[2, 2], [2, 1], [2, 1]],
  [[2, 1], [2, 1], [2, 1], [2, 1]],
  [[2, 2], [3, 2]],
  [[2, 1], [3, 1], [5, 2]],
];

const label = (bs: Block[]) => bs.map(([l, s]) => `J${subs(s)}(${l})`).join(" ⊕ ");
const poly = (m: Map<number, number>) => [...m.entries()].map(([l, e]) => `(z − ${l})${e > 1 ? sups(e) : ""}`).join("");

/** Jordan matrices on a 4-dimensional space, with their characteristic and minimal polynomials. */
export function JordanViz() {
  const [pi, setPi] = useState(1);
  const bs = PRESETS[pi];
  const n = 4;
  const J = Array.from({ length: n }, () => Array(n).fill(0));
  const blockOf: number[] = [];
  let off = 0;
  bs.forEach(([l, s], b) => {
    for (let i = 0; i < s; i++) { J[off + i][off + i] = l; blockOf[off + i] = b; if (i < s - 1) J[off + i][off + i + 1] = 1; }
    off += s;
  });
  const ch = new Map<number, number>(), mn = new Map<number, number>(), geo = new Map<number, number>();
  for (const [l, s] of bs) { ch.set(l, (ch.get(l) ?? 0) + s); mn.set(l, Math.max(mn.get(l) ?? 0, s)); geo.set(l, (geo.get(l) ?? 0) + 1); }
  const diag = [...mn.values()].every((e) => e === 1);
  return (
    <figure className="viz">
      <div className="viz-controls">
        {PRESETS.map((p, i) => <button key={i} type="button" aria-pressed={pi === i} className={pi === i ? "viz-chip is-on" : "viz-chip"} onClick={() => setPi(i)}>{label(p)}</button>)}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", marginTop: 8 }}>
        <table className="table mono" style={{ width: "auto" }}>
          <tbody>
            {J.map((r, i) => (
              <tr key={i}>
                {r.map((x, j) => {
                  const inBlock = blockOf[i] === blockOf[j];
                  return <td key={j} style={{ padding: "4px 10px", background: inBlock ? "var(--accent-soft)" : undefined, color: x === 0 ? "var(--text-faint)" : i === j ? "var(--text)" : "var(--accent)" }}>{x}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <p className="mono" style={{ margin: "4px 0" }}>characteristic polynomial: {poly(ch)}</p>
          <p className="mono" style={{ margin: "4px 0" }}>minimal polynomial: {poly(mn)}</p>
          {[...geo.entries()].map(([l, g]) => (
            <p key={l} className="mono" style={{ margin: "4px 0" }}>eigenvalue {l}: {g} block{g > 1 ? "s" : ""}, eigenspace of dimension {g}, multiplicity {ch.get(l)}</p>
          ))}
          <p style={{ margin: "8px 0", color: diag ? "var(--accent)" : "var(--text-muted)" }}>
            {diag ? "Every block has size 1: the operator is diagonalisable." : "Some block has size above 1: not diagonalisable."}
          </p>
        </div>
      </div>
      <figcaption className="viz-caption">
        Each shaded block is λI plus a single nilpotent chain, with 1s just above the diagonal. The number of blocks for λ is the dimension of its eigenspace, their total size is the multiplicity of λ, and the largest block gives the power of z − λ in the minimal polynomial. Notice that the third and fourth choices share both polynomials, yet are not similar.
      </figcaption>
    </figure>
  );
}
