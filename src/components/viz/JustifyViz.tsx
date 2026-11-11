"use client";

import { useState } from "react";

const RULES = ["∧I", "∧E", "∨I", "DS", "→E", "↔E", "DN"] as const;
type Rule = (typeof RULES)[number];
type Line = { s: string; premise?: boolean; rule?: Rule; cites?: string };
type Proof = { name: string; goal: string; lines: Line[] };

const PROOFS: Proof[] = [
  {
    name: "Proof 1", goal: "C ∧ A",
    lines: [
      { s: "A ∧ B", premise: true }, { s: "B → C", premise: true },
      { s: "B", rule: "∧E", cites: "1" }, { s: "C", rule: "→E", cites: "2, 3" }, { s: "A", rule: "∧E", cites: "1" }, { s: "C ∧ A", rule: "∧I", cites: "4, 5" },
    ],
  },
  {
    name: "Proof 2", goal: "C ∨ D",
    lines: [
      { s: "A → (B ∨ C)", premise: true }, { s: "A", premise: true }, { s: "¬B", premise: true },
      { s: "B ∨ C", rule: "→E", cites: "1, 2" }, { s: "C", rule: "DS", cites: "4, 3" }, { s: "C ∨ D", rule: "∨I", cites: "5" },
    ],
  },
  {
    name: "Proof 3", goal: "C",
    lines: [
      { s: "¬¬(A ∧ B)", premise: true }, { s: "A ↔ C", premise: true },
      { s: "A ∧ B", rule: "DN", cites: "1" }, { s: "A", rule: "∧E", cites: "3" }, { s: "C", rule: "↔E", cites: "2, 4" },
    ],
  },
];

/** A finished derivation with its justifications blanked out: choose the rule for each line, then check. */
export function JustifyViz() {
  const [k, setK] = useState(0);
  const P = PROOFS[k];
  const [picks, setPicks] = useState<(Rule | "")[]>(P.lines.map(() => ""));
  const [checked, setChecked] = useState(false);
  const pick = (i: number) => { setK(i); setPicks(PROOFS[i].lines.map(() => "")); setChecked(false); };
  const todo = P.lines.map((l, i) => (l.premise ? -1 : i)).filter((i) => i >= 0);
  const score = todo.filter((i) => picks[i] === P.lines[i].rule).length;

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Proof">
        {PROOFS.map((p, i) => (
          <button key={p.name} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => pick(i)}>{p.name}</button>
        ))}
      </div>
      <p className="mono-meta" style={{ margin: "10px 0 0" }}>Goal: derive {P.goal}</p>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          {P.lines.map((l, i) => {
            const ok = checked && !l.premise && picks[i] === l.rule;
            const bad = checked && !l.premise && picks[i] !== l.rule;
            return (
              <tr key={i}>
                <td className="mono" style={{ width: 32, color: "var(--text-muted)" }}>{i + 1}</td>
                <td className="mono">{l.s}</td>
                <td style={{ width: 180 }}>
                  {l.premise ? (
                    <span className="mono-meta">premise</span>
                  ) : (
                    <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
                      <select aria-label={`Rule for line ${i + 1}`} value={picks[i]} className="mono"
                        onChange={(e) => { setChecked(false); const v = e.target.value as Rule | ""; setPicks((p) => p.map((x, j) => (j === i ? v : x))); }}
                        style={{ padding: "3px 6px", borderRadius: 6, background: "var(--surface)", color: "var(--text)", border: `1px solid ${ok ? "var(--accent)" : bad ? "var(--danger)" : "var(--border-strong)"}` }}>
                        <option value="">rule?</option>
                        {RULES.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                      {checked && <span className="mono-meta">{l.rule} {l.cites}</span>}
                    </span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={todo.some((i) => picks[i] === "")} onClick={() => setChecked(true)}>Check</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {checked
          ? `${score} of ${todo.length} right. The correct rule and the lines it cites are shown beside each choice.`
          : "Each line after the premises follows from earlier lines by one rule. Choose the rule for each, then check."}
      </figcaption>
    </figure>
  );
}
