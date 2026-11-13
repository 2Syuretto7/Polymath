"use client";

import { useState } from "react";

type Val = { p: number; q: number };
type Fm = { s: string; f: (v: Val) => number };
const PREMS: Fm[] = [
  { s: "p", f: (v) => v.p },
  { s: "¬p", f: (v) => 1 - v.p },
  { s: "p ∨ q", f: (v) => Math.max(v.p, v.q) },
  { s: "¬q", f: (v) => 1 - v.q },
];
const CONCS: Fm[] = [
  { s: "q", f: (v) => v.q },
  { s: "p ∧ ¬p", f: (v) => Math.min(v.p, 1 - v.p) },
  { s: "p ∨ q", f: (v) => Math.max(v.p, v.q) },
  { s: "¬p ∨ p", f: (v) => Math.max(1 - v.p, v.p) },
];
const name = (x: number) => (x === 1 ? "T" : x === 0 ? "F" : "B");

/** Consequence in classical logic and in Priest's LP: in LP a contradiction does not entail everything. */
export function ExplosionViz() {
  const [on, setOn] = useState<boolean[]>([true, true, false, false]);
  const [c, setC] = useState(0);
  const prem = PREMS.filter((_, i) => on[i]);
  const counter = (vals: number[], des: (x: number) => boolean): Val | null => {
    for (const p of vals) for (const q of vals) {
      const v = { p, q };
      if (prem.every((f) => des(f.f(v))) && !des(CONCS[c].f(v))) return v;
    }
    return null;
  };
  const cl = counter([1, 0], (x) => x === 1);
  const lp = counter([1, 0.5, 0], (x) => x >= 0.5);
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
        <span>premises:</span>
        {PREMS.map((f, i) => (
          <button key={f.s} type="button" aria-pressed={on[i]} className={on[i] ? "seg is-on" : "seg"} onClick={() => setOn(on.map((x, j) => (j === i ? !x : x)))}>{f.s}</button>
        ))}
      </div>
      <div className="segmented" role="group" aria-label="Conclusion" style={{ marginTop: 6 }}>
        {CONCS.map((f, i) => (
          <button key={f.s} type="button" aria-pressed={c === i} className={c === i ? "seg is-on" : "seg"} onClick={() => setC(i)}>conclude {f.s}</button>
        ))}
      </div>
      <div className="mono" style={{ display: "grid", gap: 6, fontSize: 14, marginTop: 12 }}>
        <div>argument: {prem.map((f) => f.s).join(", ") || "(no premises)"} ⊢ {CONCS[c].s}</div>
        <div style={{ fontWeight: 700 }}>classical logic: {cl ? `invalid; counter-model p = ${name(cl.p)}, q = ${name(cl.q)}` : "valid"}</div>
        <div style={{ fontWeight: 700 }}>LP: {lp ? `invalid; counter-model p = ${name(lp.p)}, q = ${name(lp.q)}` : "valid"}</div>
      </div>
      <figcaption className="viz-caption">
        An argument is valid when every assignment that makes all the premises designated makes the conclusion designated. In
        classical logic only T is designated and no assignment makes both p and ¬p true, so p, ¬p entail anything: explosion.
        In LP the value B, both true and false, is designated too. With p = B and q = F the premises p and ¬p hold and q does
        not, so the contradiction stays contained. The price is that disjunctive syllogism, from p ∨ q and ¬p to q, fails for
        the same reason.
      </figcaption>
    </figure>
  );
}
