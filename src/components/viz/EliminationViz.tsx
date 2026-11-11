"use client";

import { useMemo, useState } from "react";
import { fdiv, fmul, fr, fstr, fsub, fzero, toF, type FMatrix, type Frac } from "./frac";

type Sys = { name: string; rows: number[][] };
const SYSTEMS: Sys[] = [
  { name: "one solution", rows: [[1, 2, 1, 2], [3, 8, 1, 12], [0, 4, 1, 2]] },
  { name: "needs a row swap", rows: [[0, 1, 1, 5], [1, 1, 1, 6], [2, 1, 3, 13]] },
  { name: "no solution", rows: [[1, 1, 1, 3], [2, 3, 1, 6], [3, 4, 2, 10]] },
];
const VARS = ["x", "y", "z"];

type Step = { text: string; m: FMatrix; hot: number[]; pivot?: [number, number] };

/** Forward elimination, recording every row operation, then back substitution if the system has a unique solution. */
function run(rows: number[][]): { steps: Step[]; sol: Frac[] | null; verdict: string } {
  let m = toF(rows);
  const steps: Step[] = [{ text: "Start with the augmented matrix: the coefficients, then the right-hand sides.", m, hot: [] }];
  const n = 3;
  let r = 0;
  for (let c = 0; c < n && r < n; c++) {
    let p = r;
    while (p < n && fzero(m[p][c])) p++;
    if (p === n) {
      steps.push({ text: `Column ${c + 1} has no non-zero entry at or below row ${r + 1}, so there is no pivot here. Move on.`, m, hot: [] });
      continue;
    }
    if (p !== r) {
      m = m.map((row, i) => (i === r ? m[p] : i === p ? m[r] : row));
      steps.push({ text: `The entry in the pivot position is 0, so swap rows ${r + 1} and ${p + 1}.`, m, hot: [r, p], pivot: [r, c] });
    }
    for (let i = r + 1; i < n; i++) {
      if (fzero(m[i][c])) continue;
      const l = fdiv(m[i][c], m[r][c]);
      m = m.map((row, k) => (k === i ? row.map((x, j) => fsub(x, fmul(l, m[r][j]))) : row));
      const how = l.n > 0 ? `Subtract ${fstr(l)} × row ${r + 1} from row ${i + 1}.` : `Add ${fstr(fr(-l.n, l.d))} × row ${r + 1} to row ${i + 1}, which is subtracting ${fstr(l)} × row ${r + 1}.`;
      steps.push({ text: `${how} The multiplier is (entry to clear) ÷ (pivot) = ${fstr(l)}.`, m, hot: [i], pivot: [r, c] });
    }
    r++;
  }
  const bad = m.findIndex((row) => row.slice(0, n).every(fzero) && !fzero(row[n]));
  if (bad >= 0) {
    steps.push({ text: `Row ${bad + 1} now says 0x + 0y + 0z = ${fstr(m[bad][n])}. No numbers satisfy that, so the system has no solution.`, m, hot: [bad] });
    return { steps, sol: null, verdict: "no solution" };
  }
  if (r < n) return { steps, sol: null, verdict: "infinitely many solutions" };
  const sol: Frac[] = [fr(0), fr(0), fr(0)];
  for (let i = n - 1; i >= 0; i--) {
    let rhs = m[i][n];
    for (let j = i + 1; j < n; j++) rhs = fsub(rhs, fmul(m[i][j], sol[j]));
    sol[i] = fdiv(rhs, m[i][i]);
    steps.push({ text: `Back substitution: row ${i + 1} gives ${VARS[i]} = ${fstr(sol[i])}.`, m, hot: [i] });
  }
  return { steps, sol, verdict: "one solution" };
}

/** Step through Gaussian elimination on a 3 by 3 system. */
export function EliminationViz() {
  const [k, setK] = useState(0);
  const [s, setS] = useState(0);
  const { steps, sol } = useMemo(() => run(SYSTEMS[k].rows), [k]);
  const st = steps[s];
  const done = s === steps.length - 1;

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Choose a system">
        {SYSTEMS.map((x, i) => (
          <button key={x.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k}
            onClick={() => { setK(i); setS(0); }}>{x.name}</button>
        ))}
      </div>
      <table className="table mono" style={{ marginTop: 12, marginBottom: 8, textAlign: "right" }}>
        <thead>
          <tr><th>row</th><th>x</th><th>y</th><th>z</th><th style={{ borderLeft: "1px solid var(--border-strong)" }}>=</th></tr>
        </thead>
        <tbody>
          {st.m.map((row, i) => (
            <tr key={i} style={st.hot.includes(i) ? { background: "var(--overlay)" } : undefined}>
              <td style={{ color: "var(--text-faint)" }}>{i + 1}</td>
              {row.map((x, j) => {
                const piv = st.pivot && st.pivot[0] === i && st.pivot[1] === j;
                return (
                  <td key={j} style={{
                    ...(j === 3 ? { borderLeft: "1px solid var(--border-strong)" } : {}),
                    ...(piv ? { color: "var(--accent)", fontWeight: 600 } : {}),
                  }}>{fstr(x)}</td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mono-meta" style={{ margin: 0 }}>step {s + 1} of {steps.length}{st.pivot ? `; pivot in row ${st.pivot[0] + 1}, column ${st.pivot[1] + 1} (coloured)` : ""}</p>
      <div className="viz-controls">
        <button type="button" className="btn" disabled={s === 0} onClick={() => setS(s - 1)}>Back</button>
        <button type="button" className="btn btn-primary" disabled={done} onClick={() => setS(s + 1)}>Next step</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {st.text}
        {done && sol ? ` Check it in the original equations: every one holds at (${sol.map(fstr).join(", ")}).` : ""}
      </figcaption>
    </figure>
  );
}
