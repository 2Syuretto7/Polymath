"use client";

import { useState } from "react";

type Conn = "nac" | "na" | "nand" | "ao";
const ROWS: [boolean, boolean][] = [[true, true], [true, false], [false, true], [false, false]];
const SETS: { k: Conn; label: string }[] = [
  { k: "nac", label: "{¬, ∧, ∨}" },
  { k: "na", label: "{¬, ∧}" },
  { k: "nand", label: "{↑} alone" },
  { k: "ao", label: "{∧, ∨}" },
];
const tf = (b: boolean) => (b ? "T" : "F");

/** Any truth function can be written with ¬, ∧ and ∨, and so with ↑ alone; but not with ∧ and ∨ alone. */
export function AdequacyViz() {
  const [out, setOut] = useState<boolean[]>([false, true, true, false]);
  const [set, setSet] = useState<Conn>("nac");
  const lit = (row: [boolean, boolean]) => [row[0] ? "P" : "¬P", row[1] ? "Q" : "¬Q"];
  const trueRows = ROWS.filter((_, i) => out[i]);
  const conj = (row: [boolean, boolean]) => `(${lit(row).join(" ∧ ")})`;
  let formula = "";
  let note = "";
  if (set === "nac") {
    formula = trueRows.length ? trueRows.map(conj).join(" ∨ ") : "P ∧ ¬P";
    note = "disjunctive normal form: one conjunction for each row where the function is true";
  } else if (set === "na") {
    formula = trueRows.length === 0 ? "P ∧ ¬P" : trueRows.length === 1 ? conj(trueRows[0]) : `¬(${trueRows.map((r) => `¬${conj(r)}`).join(" ∧ ")})`;
    note = "replace each A ∨ B by ¬(¬A ∧ ¬B)";
  } else if (set === "nand") {
    const n = (a: string) => `(${a} ↑ ${a})`;
    const and = (a: string, b: string) => `((${a} ↑ ${b}) ↑ (${a} ↑ ${b}))`;
    const L = (row: [boolean, boolean]) => [row[0] ? "P" : n("P"), row[1] ? "Q" : n("Q")];
    const terms = trueRows.map((r) => { const [a, b] = L(r); return and(a, b); });
    const or = (a: string, b: string) => `(${n(a)} ↑ ${n(b)})`;
    formula = terms.length === 0 ? and("P", n("P")) : terms.reduce((acc, t) => or(acc, t));
    note = `using ¬A = A ↑ A, A ∧ B = (A ↑ B) ↑ (A ↑ B) and A ∨ B = ¬A ↑ ¬B; ${formula.length} symbols`;
  } else {
    const [tt, tfr, ft, ff] = out;
    const mono = (!tfr || tt) && (!ft || tt) && (!ff || (tfr && ft));
    if (!tt) { formula = "not expressible"; note = "every formula built from ∧ and ∨ alone is true when P and Q are both true, but this function is false there"; }
    else if (ff) { formula = "not expressible"; note = "every formula built from ∧ and ∨ alone is false when P and Q are both false, but this function is true there"; }
    else if (!mono) { formula = "not expressible"; note = "formulas built from ∧ and ∨ are monotone: making an atom true never makes them false"; }
    else {
      const parts: string[] = [];
      if (tfr && ft) parts.push("P", "Q");
      else if (tfr) parts.push("P");
      else if (ft) parts.push("Q");
      else parts.push("(P ∧ Q)");
      formula = parts.join(" ∨ ");
      note = "this function is monotone, so ∧ and ∨ suffice";
    }
  }
  return (
    <figure className="viz">
      <div className="mono" style={{ fontSize: 13, marginBottom: 6 }}>click the outputs to choose a truth function of P and Q</div>
      <div style={{ overflowX: "auto" }}>
        <table className="mono" style={{ borderCollapse: "collapse", fontSize: 14 }}>
          <thead><tr>{["P", "Q", "f(P, Q)"].map((h) => <th key={h} style={{ padding: "3px 12px", borderBottom: "1px solid var(--border)" }}>{h}</th>)}</tr></thead>
          <tbody>
            {ROWS.map((r, i) => (
              <tr key={i}>
                <td style={{ padding: "3px 12px", textAlign: "center" }}>{tf(r[0])}</td>
                <td style={{ padding: "3px 12px", textAlign: "center" }}>{tf(r[1])}</td>
                <td style={{ padding: "3px 12px", textAlign: "center" }}>
                  <button type="button" className={out[i] ? "seg is-on" : "seg"} aria-pressed={out[i]} onClick={() => setOut(out.map((o, j) => (j === i ? !o : o)))}>{tf(out[i])}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="segmented" role="group" aria-label="Connectives allowed" style={{ marginTop: 10 }}>
        {SETS.map((s) => <button key={s.k} type="button" aria-pressed={set === s.k} className={set === s.k ? "seg is-on" : "seg"} onClick={() => setSet(s.k)}>{s.label}</button>)}
      </div>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14, marginTop: 10, overflowWrap: "anywhere" }}>
        <div style={{ fontWeight: 700 }}>{formula}</div>
        <div style={{ color: "var(--text-muted)" }}>{note}</div>
      </div>
      <figcaption className="viz-caption">
        A set of connectives is expressively adequate if every truth function can be expressed with it. Disjunctive normal
        form shows that {"{¬, ∧, ∨}"} is adequate; since ∨ can be defined from ¬ and ∧, so is {"{¬, ∧}"}; and since ¬ and ∧ can
        be defined from ↑ (not both), so is {"{↑}"} alone. The set {"{∧, ∨}"} is not adequate: it cannot even express ¬P.
      </figcaption>
    </figure>
  );
}
