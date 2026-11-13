"use client";

import { useMemo, useState } from "react";

type Mat = [[number, number], [number, number]];
type Step = { m: Mat; note: string };
const neg = (x: number) => String(x).replace("-", "−");

/** Row and column operations over ℤ that bring a 2 × 2 matrix to Smith normal form, recorded one at a time. */
function smith(start: Mat): Step[] {
  let m: Mat = [[...start[0]], [...start[1]]] as Mat;
  const steps: Step[] = [{ m: [[...m[0]], [...m[1]]] as Mat, note: "start: the columns are the relations" }];
  const push = (note: string) => steps.push({ m: [[...m[0]], [...m[1]]] as Mat, note });
  for (let guard = 0; guard < 40; guard++) {
    const entries = [[0, 0], [0, 1], [1, 0], [1, 1]].filter(([i, j]) => m[i][j] !== 0);
    if (!entries.length) break;
    // move the smallest non-zero entry to the top left
    const [si, sj] = entries.reduce((b, e) => (Math.abs(m[e[0]][e[1]]) < Math.abs(m[b[0]][b[1]]) ? e : b));
    if (si !== 0) { m = [m[1], m[0]]; push("swap the rows to bring the smallest entry to the top"); }
    if (sj !== 0) { m = [[m[0][1], m[0][0]], [m[1][1], m[1][0]]]; push("swap the columns to bring the smallest entry to the left"); }
    const p = m[0][0];
    let changed = false;
    if (m[1][0] !== 0) {
      const q = Math.trunc(m[1][0] / p);
      if (q !== 0) { m = [m[0], [m[1][0] - q * m[0][0], m[1][1] - q * m[0][1]]]; push(`row 2 − ${neg(q)} × row 1`); changed = true; }
    }
    if (m[0][1] !== 0) {
      const q = Math.trunc(m[0][1] / p);
      if (q !== 0) { m = [[m[0][0], m[0][1] - q * m[0][0]], [m[1][0], m[1][1] - q * m[1][0]]]; push(`column 2 − ${neg(q)} × column 1`); changed = true; }
    }
    if (m[1][0] === 0 && m[0][1] === 0) {
      if (m[1][1] !== 0 && m[1][1] % m[0][0] !== 0) { m = [[m[0][0], m[0][1] + m[1][1]], m[1]]; push("row 1 + row 2, so that the top left must divide the rest"); continue; }
      break;
    }
    if (!changed && m[1][0] === 0 && m[0][1] === 0) break;
  }
  if (m[0][0] < 0) { m = [[-m[0][0], -m[0][1]], m[1]]; push("multiply row 1 by −1, a unit"); }
  if (m[1][1] < 0) { m = [m[0], [-m[1][0], -m[1][1]]]; push("multiply row 2 by −1, a unit"); }
  return steps;
}

const PRESETS: { label: string; m: Mat }[] = [
  { label: "[[2, 4], [6, 8]]", m: [[2, 4], [6, 8]] },
  { label: "[[4, 6], [6, 4]]", m: [[4, 6], [6, 4]] },
  { label: "[[2, 0], [0, 3]]", m: [[2, 0], [0, 3]] },
  { label: "[[6, 4], [3, 2]]", m: [[6, 4], [3, 2]] },
];

/** Smith normal form over ℤ, and the abelian group ℤ² modulo the columns of the matrix. */
export function SmithFormViz() {
  const [pi, setPi] = useState(0);
  const [k, setK] = useState(0);
  const steps = useMemo(() => smith(PRESETS[pi].m), [pi]);
  const s = steps[Math.min(k, steps.length - 1)];
  const done = k >= steps.length - 1;
  const [d1, d2] = [steps[steps.length - 1].m[0][0], steps[steps.length - 1].m[1][1]];
  const part = (d: number) => (d === 0 ? "ℤ" : d === 1 ? "" : `ℤ/${d}`);
  const group = [part(d1), part(d2)].filter(Boolean).join(" × ") || "0";
  const cell = (x: number, i: number) => (
    <div key={i} className="mono" style={{ width: 54, height: 40, display: "grid", placeItems: "center", fontSize: 17, border: "1px solid var(--border)", borderRadius: 4, background: "var(--bg)" }}>{neg(x)}</div>
  );
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Matrix">
        {PRESETS.map((p, i) => <button key={p.label} type="button" aria-pressed={pi === i} className={pi === i ? "seg is-on" : "seg"} onClick={() => { setPi(i); setK(0); }}>{p.label.replace(/-/g, "−")}</button>)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 54px)", gap: 4, justifyContent: "center", margin: "14px 0" }}>
        {[s.m[0][0], s.m[0][1], s.m[1][0], s.m[1][1]].map(cell)}
      </div>
      <p style={{ textAlign: "center", margin: "0 0 8px" }}>step {Math.min(k, steps.length - 1)} of {steps.length - 1}: {s.note}</p>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={done} onClick={() => setK(k + 1)}>Next operation</button>
        <button type="button" className="btn" onClick={() => setK(0)}>Start again</button>
      </div>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14, marginTop: 8 }}>
        <div>Smith normal form: diag({neg(d1)}, {neg(d2)}), with {neg(d1)} dividing {neg(d2)}</div>
        <div>{done ? `ℤ² / (columns) ≅ ${group}` : "ℤ² / (columns) ≅ ?"}</div>
      </div>
      <figcaption className="viz-caption">
        Think of an abelian group with two generators and two relations, given by the columns. Integer row and column operations
        that can be undone change the bases but not the group. They bring the matrix to a diagonal form in which each entry
        divides the next, and the group can then be read off.
      </figcaption>
    </figure>
  );
}
