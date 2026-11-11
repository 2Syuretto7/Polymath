"use client";

import { useState } from "react";

type Env = Record<"A" | "B" | "C", boolean>;
const imp = (p: boolean, q: boolean) => !p || q;
type Arg = { name: string; vars: (keyof Env)[]; premises: { s: string; f: (e: Env) => boolean }[]; conclusion: { s: string; f: (e: Env) => boolean } };

const ARGS: Arg[] = [
  { name: "Modus ponens", vars: ["A", "B"], premises: [{ s: "A → B", f: (e) => imp(e.A, e.B) }, { s: "A", f: (e) => e.A }], conclusion: { s: "B", f: (e) => e.B } },
  { name: "Affirming the consequent", vars: ["A", "B"], premises: [{ s: "A → B", f: (e) => imp(e.A, e.B) }, { s: "B", f: (e) => e.B }], conclusion: { s: "A", f: (e) => e.A } },
  { name: "Disjunctive syllogism", vars: ["A", "B"], premises: [{ s: "A ∨ B", f: (e) => e.A || e.B }, { s: "¬A", f: (e) => !e.A }], conclusion: { s: "B", f: (e) => e.B } },
  {
    name: "Chain", vars: ["A", "B", "C"],
    premises: [{ s: "A → B", f: (e) => imp(e.A, e.B) }, { s: "B → C", f: (e) => imp(e.B, e.C) }],
    conclusion: { s: "A → C", f: (e) => imp(e.A, e.C) },
  },
  { name: "Contradictory premises", vars: ["A", "B"], premises: [{ s: "A", f: (e) => e.A }, { s: "¬A", f: (e) => !e.A }], conclusion: { s: "B", f: (e) => e.B } },
];

function rowsFor(vars: (keyof Env)[]): Env[] {
  const n = vars.length;
  return Array.from({ length: 2 ** n }, (_, i) => {
    const e: Env = { A: false, B: false, C: false };
    vars.forEach((v, j) => { e[v] = ((i >> (n - 1 - j)) & 1) === 0; });
    return e;
  });
}

const TF = (b: boolean) => (b ? "T" : "F");

/** Test an argument for validity: look for a row with every premise true and the conclusion false. */
export function ValidityTableViz() {
  const [k, setK] = useState(0);
  const [shown, setShown] = useState(false);
  const [sel, setSel] = useState<number | null>(null);
  const A = ARGS[k];
  const rows = rowsFor(A.vars);
  const good = rows.map((e) => A.premises.every((p) => p.f(e)));
  const bad = rows.map((e, i) => good[i] && !A.conclusion.f(e));
  const valid = !bad.some(Boolean);
  const pick = (i: number) => { setK(i); setShown(false); setSel(null); };
  const row = sel === null ? null : rows[sel];

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Argument">
        {ARGS.map((a, i) => (
          <button key={a.name} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => pick(i)}>{a.name}</button>
        ))}
      </div>
      <p className="mono" style={{ margin: "12px 0 0" }}>
        {A.premises.map((p) => p.s).join(",  ")}  ∴  {A.conclusion.s}
      </p>
      <div style={{ overflowX: "auto" }}>
        <table className="table" style={{ marginTop: 10, marginBottom: 8 }}>
          <thead>
            <tr>
              {A.vars.map((v) => <th key={v} className="mono">{v}</th>)}
              {A.premises.map((p) => <th key={p.s} className="mono" style={{ textTransform: "none" }}>{p.s}</th>)}
              <th className="mono" style={{ textTransform: "none", borderLeft: "2px solid var(--border-strong)" }}>{A.conclusion.s}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((e, i) => {
              const tint = shown && good[i] ? (bad[i] ? "color-mix(in srgb, var(--danger) 16%, transparent)" : "var(--accent-soft)") : undefined;
              return (
                <tr key={i} onClick={() => setSel(i)} style={{ background: tint, cursor: "pointer", outline: sel === i ? "2px solid var(--accent)" : undefined }}
                  aria-selected={sel === i} tabIndex={0} onKeyDown={(ev) => { if (ev.key === "Enter" || ev.key === " ") setSel(i); }}>
                  {A.vars.map((v) => <td key={v} className="mono">{TF(e[v])}</td>)}
                  {A.premises.map((p) => <td key={p.s} className="mono">{TF(p.f(e))}</td>)}
                  <td className="mono" style={{ borderLeft: "2px solid var(--border-strong)" }}>{TF(A.conclusion.f(e))}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="viz-controls">
        <button type="button" className={shown ? "btn btn-primary" : "btn"} aria-pressed={shown} onClick={() => setShown(!shown)}>Highlight rows with all premises true</button>
      </div>
      {row && (
        <p className="viz-verdict viz-verdict-info" style={{ margin: "8px 0 0" }}>
          Row {sel! + 1}: premises {A.premises.map((p) => TF(p.f(row))).join(", ")}; conclusion {TF(A.conclusion.f(row))}.{" "}
          {bad[sel!] ? "Every premise true and the conclusion false: a counterexample." : good[sel!] ? "Every premise is true, and so is the conclusion." : "Some premise is false, so this row cannot be a counterexample."}
        </p>
      )}
      {shown && (
        <p className={`viz-verdict ${valid ? "viz-verdict-right" : "viz-verdict-wrong"}`} style={{ margin: "8px 0 0" }}>
          {valid
            ? good.some(Boolean)
              ? "In every row where the premises are all true, the conclusion is true. Valid."
              : "No row makes both premises true, so no row is a counterexample. Valid, though useless."
            : `${bad.filter(Boolean).length === 1 ? "One row has" : "Some rows have"} all premises true and the conclusion false. Invalid.`}
        </p>
      )}
      <figcaption className="viz-caption" aria-live="polite">
        Click a row to read it. An argument is valid exactly when no row makes every premise true and the conclusion false.
      </figcaption>
    </figure>
  );
}
