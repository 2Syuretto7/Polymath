"use client";

import { useState } from "react";

type Seg = string | { x: "free"; binders: string[] } | { x: "bound" };
const FORMS: { name: string; segs: Seg[] }[] = [
  { name: "∃y ¬(x = y)", segs: ["∃y ¬(", { x: "free", binders: ["y"] }, " = y)"] },
  { name: "Px → ∀y Qxy", segs: ["P", { x: "free", binders: [] }, " → ∀y Q", { x: "free", binders: ["y"] }, "y"] },
  { name: "∀x Px ∧ Qx", segs: ["∀x P", { x: "bound" }, " ∧ Q", { x: "free", binders: [] }] },
];
const TERMS = ["z", "y", "f(z)", "f(y)"];
const varsOf = (t: string) => ["x", "y", "z"].filter((v) => t.includes(v));

/** Replace the free occurrences of x by a term t, and check whether any variable of t is captured. */
export function substitute(segs: Seg[], t: string) {
  let text = "", captured: string[] = [];
  for (const s of segs) {
    if (typeof s === "string") text += s;
    else if (s.x === "bound") text += "x";
    else { text += t; captured = captured.concat(varsOf(t).filter((v) => s.binders.includes(v))); }
  }
  return { text, captured: [...new Set(captured)] };
}

/** Substitution of a term for x, and when the axiom ∀x φ → φ with t for x is safe. */
export function CaptureViz() {
  const [fi, setFi] = useState(0);
  const [ti, setTi] = useState(1);
  const F = FORMS[fi], t = TERMS[ti];
  const { text, captured } = substitute(F.segs, t);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="formula">
        {FORMS.map((f, i) => <button key={f.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>φ = {f.name}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="term" style={{ marginTop: 6 }}>
        {TERMS.map((tt, i) => <button key={tt} type="button" aria-pressed={ti === i} className={ti === i ? "seg is-on" : "seg"} onClick={() => setTi(i)}>t = {tt}</button>)}
      </div>
      <div className="mono" style={{ fontSize: 20, margin: "14px 0 6px" }}>
        φ with x replaced:{" "}
        {F.segs.map((s, k) => typeof s === "string" ? <span key={k}>{s}</span> : s.x === "bound" ? <span key={k}>x</span> : (
          <span key={k} style={{ padding: "0 3px", borderRadius: 4, background: varsOf(t).some((v) => s.binders.includes(v)) ? "var(--danger-soft)" : "var(--accent-soft)" }}>{t}</span>
        ))}
      </div>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 13 }}>
        <div>result as text: {text}</div>
        <div style={{ fontWeight: 700, color: captured.length ? "var(--danger)" : "var(--accent)" }}>
          {captured.length
            ? `Not substitutable: ${captured.join(", ")} in t would be captured by a quantifier, so ∀x φ → φ(t) is not valid.`
            : "Substitutable: no variable of t is captured, so ∀x φ → φ(t) is a valid axiom."}
        </div>
        {fi === 0 && ti === 1 && <div>For example, ∀x ∃y ¬(x = y) is true in any structure with two elements, but ∃y ¬(y = y) is false in every structure.</div>}
      </div>
      <figcaption className="viz-caption">
        Only free occurrences of x are replaced (shaded). If t contains a variable that a quantifier around the occurrence
        binds, the meaning changes: the term is captured. The quantifier axioms are restricted to substitutable terms.
      </figcaption>
    </figure>
  );
}
