"use client";

import { useState } from "react";

type Env = Record<"A" | "B" | "C", boolean>;
const imp = (p: boolean, q: boolean) => !p || q;

const FORMULAS: { label: string; vars: (keyof Env)[]; steps: { head: string; f: (e: Env) => boolean }[] }[] = [
  { label: "A → B", vars: ["A", "B"], steps: [{ head: "A → B", f: (e) => imp(e.A, e.B) }] },
  { label: "¬A ∨ B", vars: ["A", "B"], steps: [{ head: "¬A", f: (e) => !e.A }, { head: "¬A ∨ B", f: (e) => !e.A || e.B }] },
  { label: "¬(A ∧ B)", vars: ["A", "B"], steps: [{ head: "A ∧ B", f: (e) => e.A && e.B }, { head: "¬(A ∧ B)", f: (e) => !(e.A && e.B) }] },
  {
    label: "(A → B) ∨ (B → A)", vars: ["A", "B"],
    steps: [{ head: "A → B", f: (e) => imp(e.A, e.B) }, { head: "B → A", f: (e) => imp(e.B, e.A) }, { head: "(A → B) ∨ (B → A)", f: (e) => imp(e.A, e.B) || imp(e.B, e.A) }],
  },
  {
    label: "A ∧ (B ∨ C)", vars: ["A", "B", "C"],
    steps: [{ head: "B ∨ C", f: (e) => e.B || e.C }, { head: "A ∧ (B ∨ C)", f: (e) => e.A && (e.B || e.C) }],
  },
];

function rowsFor(vars: (keyof Env)[]): Env[] {
  const n = vars.length;
  return Array.from({ length: 2 ** n }, (_, i) => {
    const e: Env = { A: false, B: false, C: false };
    vars.forEach((v, j) => { e[v] = ((i >> (n - 1 - j)) & 1) === 0; });
    return e;
  });
}

/** Fill in the main column of a truth table yourself, then check it. */
export function TruthFillViz() {
  const [k, setK] = useState(0);
  const F = FORMULAS[k];
  const rows = rowsFor(F.vars);
  const [vals, setVals] = useState<(boolean | null)[]>(rows.map(() => null));
  const [checked, setChecked] = useState(false);
  const [work, setWork] = useState(false);
  const main = F.steps[F.steps.length - 1];
  const helpers = work ? F.steps.slice(0, -1) : [];
  const pick = (i: number) => { setK(i); setVals(rowsFor(FORMULAS[i].vars).map(() => null)); setChecked(false); setWork(false); };
  const cycle = (r: number) => { setChecked(false); setVals((v) => v.map((x, j) => (j === r ? (x === null ? true : !x) : x))); };
  const score = vals.filter((x, r) => x === main.f(rows[r])).length;
  const outs = rows.map((e) => main.f(e));
  const kind = outs.every(Boolean) ? "a tautology" : outs.some(Boolean) ? "contingent" : "a contradiction";

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Formula">
        {FORMULAS.map((f, i) => (
          <button key={f.label} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => pick(i)}>
            <span className="mono">{f.label}</span>
          </button>
        ))}
      </div>
      <table className="table" style={{ marginTop: 16, marginBottom: 8 }}>
        <thead>
          <tr>
            {F.vars.map((v) => <th key={v} className="mono">{v}</th>)}
            {helpers.map((c) => <th key={c.head} className="mono" style={{ textTransform: "none" }}>{c.head}</th>)}
            <th className="mono" style={{ textTransform: "none" }}>{main.head}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((e, r) => {
            const v = vals[r];
            const bad = checked && v !== main.f(e);
            return (
              <tr key={r}>
                {F.vars.map((x) => <td key={x} className="mono">{e[x] ? "T" : "F"}</td>)}
                {helpers.map((c) => <td key={c.head} className="mono" style={{ color: "var(--text-muted)" }}>{c.f(e) ? "T" : "F"}</td>)}
                <td>
                  <button type="button" className="btn" onClick={() => cycle(r)} aria-label={`Row ${r + 1}: ${v === null ? "blank" : v ? "true" : "false"}`}
                    style={{ width: 44, height: 30, padding: 0, justifyContent: "center", borderColor: checked ? (bad ? "var(--danger)" : "var(--accent)") : undefined }}>
                    <span className="mono">{v === null ? "?" : v ? "T" : "F"}</span>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={vals.some((x) => x === null)} onClick={() => setChecked(true)}>Check</button>
        {F.steps.length > 1 && <button type="button" className="btn" aria-pressed={work} onClick={() => setWork(!work)}>{work ? "Hide the working" : "Show the working"}</button>}
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {checked
          ? score === rows.length
            ? `All ${rows.length} rows right. The formula is ${kind}.`
            : `${score} of ${rows.length} rows right; the wrong ones are outlined in red. Work from the inside out: the smallest parts first, then the main connective.`
          : "Click each cell of the last column to set it to T or F. Each row is one way the letters could be true or false."}
      </figcaption>
    </figure>
  );
}
