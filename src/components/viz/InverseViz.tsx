"use client";

import { useMemo, useState } from "react";
import { fdiv, fmul, fone, fstr, fsub, fzero, toF, type FMatrix } from "./frac";

const SYSTEMS: { name: string; a: number[][] }[] = [
  { name: "invertible", a: [[2, 1, 0], [1, 2, 1], [0, 1, 2]] },
  { name: "needs a swap", a: [[0, 1, 1], [1, 0, 1], [1, 1, 0]] },
  { name: "singular", a: [[1, 2, 3], [2, 4, 7], [3, 6, 10]] },
];
type Step = { text: string; m: FMatrix; hot: number[] };
const N = 3;

function run(a: number[][]): { steps: Step[]; ok: boolean } {
  let m: FMatrix = toF(a.map((row, i) => [...row, ...[0, 1, 2].map((j) => (i === j ? 1 : 0))]));
  const steps: Step[] = [{ text: "Write A next to the identity matrix I. Row operations will turn the left half into I; the right half then becomes the inverse.", m, hot: [] }];
  for (let c = 0; c < N; c++) {
    let p = c;
    while (p < N && fzero(m[p][c])) p++;
    if (p === N) {
      steps.push({ text: `Column ${c + 1} has no pivot: every entry at or below row ${c + 1} is 0. A has fewer than ${N} pivots, so it has no inverse. Stop.`, m, hot: [] });
      return { steps, ok: false };
    }
    if (p !== c) {
      m = m.map((row, i) => (i === c ? m[p] : i === p ? m[c] : row));
      steps.push({ text: `The pivot position holds 0, so swap rows ${c + 1} and ${p + 1}.`, m, hot: [c, p] });
    }
    if (!fone(m[c][c])) {
      const s = m[c][c];
      m = m.map((row, i) => (i === c ? row.map((x) => fdiv(x, s)) : row));
      steps.push({ text: `Divide row ${c + 1} by its pivot, ${fstr(s)}, to make the pivot 1.`, m, hot: [c] });
    }
    for (let i = 0; i < N; i++) {
      if (i === c || fzero(m[i][c])) continue;
      const l = m[i][c];
      m = m.map((row, k) => (k === i ? row.map((x, j) => fsub(x, fmul(l, m[c][j]))) : row));
      steps.push({ text: `Subtract ${fstr(l)} × row ${c + 1} from row ${i + 1}, clearing column ${c + 1} ${i < c ? "above" : "below"} the pivot.`, m, hot: [i] });
    }
  }
  steps.push({ text: "The left half is I. The right half is A⁻¹. Check: multiplying A by it gives I.", m, hot: [0, 1, 2] });
  return { steps, ok: true };
}

/** Gauss–Jordan elimination on [A | I], step by step. */
export function InverseViz() {
  const [k, setK] = useState(0);
  const [s, setS] = useState(0);
  const { steps } = useMemo(() => run(SYSTEMS[k].a), [k]);
  const st = steps[s];

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Choose a matrix">
        {SYSTEMS.map((x, i) => (
          <button key={x.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => { setK(i); setS(0); }}>{x.name}</button>
        ))}
      </div>
      <table className="table mono" style={{ marginTop: 12, marginBottom: 8, textAlign: "right" }}>
        <thead>
          <tr><th>row</th><th colSpan={3} style={{ textAlign: "center" }}>left half</th><th colSpan={3} style={{ textAlign: "center", borderLeft: "1px solid var(--border-strong)" }}>right half</th></tr>
        </thead>
        <tbody>
          {st.m.map((row, i) => (
            <tr key={i} style={st.hot.includes(i) && st.hot.length < 3 ? { background: "var(--overlay)" } : undefined}>
              <td style={{ color: "var(--text-faint)" }}>{i + 1}</td>
              {row.map((x, j) => (
                <td key={j} style={{
                  ...(j === N ? { borderLeft: "1px solid var(--border-strong)" } : {}),
                  ...(j < N && i === j && fone(x) ? { color: "var(--accent)", fontWeight: 600 } : {}),
                }}>{fstr(x)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mono-meta" style={{ margin: 0 }}>step {s + 1} of {steps.length}</p>
      <div className="viz-controls">
        <button type="button" className="btn" disabled={s === 0} onClick={() => setS(s - 1)}>Back</button>
        <button type="button" className="btn btn-primary" disabled={s === steps.length - 1} onClick={() => setS(s + 1)}>Next step</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">{st.text}</figcaption>
    </figure>
  );
}
