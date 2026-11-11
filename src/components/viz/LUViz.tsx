"use client";

import { useMemo, useState } from "react";
import { fdiv, fmul, fr, fstr, fsub, fzero, toF, type FMatrix, type Frac } from "./frac";

const MATS: { name: string; a: number[][] }[] = [
  { name: "A₁", a: [[2, 1, 1], [4, -6, 0], [-2, 7, 2]] },
  { name: "A₂", a: [[1, 2, 3], [2, 5, 7], [3, 8, 14]] },
];
type Step = { text: string; u: FMatrix; l: (Frac | null)[][]; hot: [number, number] | null };

function run(a: number[][]): Step[] {
  let u = toF(a);
  const l: (Frac | null)[][] = [0, 1, 2].map((i) => [0, 1, 2].map((j) => (i === j ? fr(1) : j > i ? fr(0) : null)));
  const steps: Step[] = [{ text: "Start elimination on A. L starts as the identity on and above its diagonal; the blanks below will hold the multipliers.", u, l: l.map((r) => [...r]), hot: null }];
  for (let c = 0; c < 3; c++) {
    for (let i = c + 1; i < 3; i++) {
      const m = fzero(u[i][c]) ? fr(0) : fdiv(u[i][c], u[c][c]);
      u = u.map((row, k) => (k === i ? row.map((x, j) => fsub(x, fmul(m, u[c][j]))) : row));
      l[i][c] = m;
      steps.push({ text: `Multiplier ℓ${i + 1}${c + 1} = ${fstr(m)}: subtract ${fstr(m)} × row ${c + 1} from row ${i + 1}, and record ${fstr(m)} in L at row ${i + 1}, column ${c + 1}.`, u, l: l.map((r) => [...r]), hot: [i, c] });
    }
  }
  steps.push({ text: "Elimination is finished: the result is upper triangular, U. L holds every multiplier in the place it was used. Multiply L by U and you get A back.", u, l: l.map((r) => [...r]), hot: null });
  return steps;
}

function Grid({ m, title, hot }: { m: (Frac | null)[][]; title: string; hot: [number, number] | null }) {
  return (
    <div style={{ flex: "1 1 160px" }}>
      <p className="mono-meta" style={{ margin: "0 0 4px" }}>{title}</p>
      <table className="table mono" style={{ margin: 0, textAlign: "right" }}>
        <tbody>
          {m.map((row, i) => (
            <tr key={i}>
              {row.map((x, j) => (
                <td key={j} style={{ padding: "8px 10px", ...(hot && hot[0] === i && hot[1] === j ? { color: "var(--accent)", fontWeight: 600 } : {}), ...(x === null ? { color: "var(--text-faint)" } : {}) }}>
                  {x === null ? "·" : fstr(x)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Elimination records its own multipliers: watch L fill in while A becomes U. */
export function LUViz() {
  const [k, setK] = useState(0);
  const [s, setS] = useState(0);
  const steps = useMemo(() => run(MATS[k].a), [k]);
  const st = steps[s];

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Choose a matrix">
        {MATS.map((x, i) => (
          <button key={x.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => { setK(i); setS(0); }}>{x.name} = [{x.a.map((r) => r.join(" ")).join("; ")}]</button>
        ))}
      </div>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 12 }}>
        <Grid m={st.l} title="L (multipliers)" hot={st.hot} />
        <Grid m={st.u} title={s === steps.length - 1 ? "U" : "A, being reduced"} hot={st.hot} />
      </div>
      <p className="mono-meta" style={{ margin: "8px 0 0" }}>step {s + 1} of {steps.length}</p>
      <div className="viz-controls">
        <button type="button" className="btn" disabled={s === 0} onClick={() => setS(s - 1)}>Back</button>
        <button type="button" className="btn btn-primary" disabled={s === steps.length - 1} onClick={() => setS(s + 1)}>Next step</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">{st.text}</figcaption>
    </figure>
  );
}
