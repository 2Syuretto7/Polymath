"use client";

import { useState } from "react";

type B = { name: string; kind: "zero" | "succ" | "limit"; steps: string[] };
const BS: B[] = [
  { name: "0", kind: "zero", steps: ["ω + 0 = ω   (zero clause)"] },
  { name: "1", kind: "succ", steps: ["ω + 1 = (ω + 0) + 1   (successor clause)", "= ω + 1"] },
  { name: "2", kind: "succ", steps: ["ω + 2 = (ω + 1) + 1   (successor clause)", "ω + 1 = (ω + 0) + 1 = ω + 1", "so ω + 2 is the successor of ω + 1"] },
  { name: "ω", kind: "limit", steps: ["ω + ω = sup { ω + n : n < ω }   (limit clause)", "= sup { ω, ω + 1, ω + 2, … }", "= ω · 2"] },
  { name: "ω + 1", kind: "succ", steps: ["ω + (ω + 1) = (ω + ω) + 1   (successor clause)", "ω + ω = ω · 2 by the limit clause", "= ω · 2 + 1"] },
];
const COL = { zero: "var(--text)", succ: "var(--accent)", limit: "var(--danger)" };

/** Ordinal addition by transfinite recursion: a zero clause, a successor clause and a limit clause. */
export function RecursionClauseViz() {
  const [bi, setBi] = useState(3);
  const B = BS[bi];
  return (
    <figure className="viz">
      <p className="mono" style={{ fontSize: 13, margin: "0 0 6px" }}>Compute ω + β, with β =</p>
      <div className="segmented" role="group" aria-label="beta">
        {BS.map((b, i) => <button key={b.name} type="button" aria-pressed={bi === i} className={bi === i ? "seg is-on" : "seg"} onClick={() => setBi(i)}>{b.name}</button>)}
      </div>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 13, margin: "10px 0" }}>
        <div><span style={{ color: COL.zero }}>α + 0 = α</span></div>
        <div><span style={{ color: COL.succ }}>α + (β + 1) = (α + β) + 1</span></div>
        <div><span style={{ color: COL.limit }}>α + λ = sup {"{"} α + β : β &lt; λ {"}"} for limit λ</span></div>
      </div>
      <ol className="mono" style={{ fontSize: 14, display: "grid", gap: 4, paddingLeft: 22 }}>
        {B.steps.map((s) => <li key={s}>{s}</li>)}
      </ol>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, color: COL[B.kind] }}>
        β = {B.name} is {B.kind === "zero" ? "zero" : B.kind === "succ" ? "a successor ordinal" : "a limit ordinal"}: the {B.kind === "zero" ? "zero" : B.kind === "succ" ? "successor" : "limit"} clause applies.
      </p>
      <figcaption className="viz-caption">
        Ordinary recursion has two clauses. Transfinite recursion needs a third, for limits, which have no immediate
        predecessor to build on: the value there is gathered from all earlier values at once.
      </figcaption>
    </figure>
  );
}
