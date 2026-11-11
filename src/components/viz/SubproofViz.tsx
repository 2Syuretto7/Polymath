"use client";

import { useState } from "react";

type Line = { s: string; depth: number; why: string; note: string; assume?: boolean };
type Proof = { name: string; claim: string; lines: Line[] };

const PROOFS: Proof[] = [
  {
    name: "Chaining conditionals", claim: "A → B, B → C ⊢ A → C",
    lines: [
      { s: "A → B", depth: 0, why: "premise", note: "The premises come first." },
      { s: "B → C", depth: 0, why: "premise", note: "The goal is a conditional, A → C, so the plan is conditional proof: assume A and aim for C." },
      { s: "A", depth: 1, why: "assumption", assume: true, note: "Open a subproof by assuming the antecedent, A. The vertical bar shows how long the assumption is in force." },
      { s: "B", depth: 1, why: "→E 1, 3", note: "Inside the subproof, use A with premise 1." },
      { s: "C", depth: 1, why: "→E 2, 4", note: "Then B with premise 2. We have reached the consequent." },
      { s: "A → C", depth: 0, why: "→I 3–5", note: "Close the subproof. Since assuming A led to C, we may assert A → C outright. The assumption is discharged: line 6 depends only on the premises." },
    ],
  },
  {
    name: "A tautology", claim: "⊢ A → (B → A)",
    lines: [
      { s: "A", depth: 1, why: "assumption", assume: true, note: "There are no premises. The goal is a conditional, so assume its antecedent, A." },
      { s: "B", depth: 2, why: "assumption", assume: true, note: "The new goal, B → A, is again a conditional, so open a second subproof inside the first, assuming B." },
      { s: "A", depth: 2, why: "R 1", note: "A was assumed in an outer subproof that is still open, so it may be repeated (reiterated) here." },
      { s: "B → A", depth: 1, why: "→I 2–3", note: "Close the inner subproof: from B we reached A." },
      { s: "A → (B → A)", depth: 0, why: "→I 1–4", note: "Close the outer subproof. Every assumption is now discharged, so the conclusion depends on nothing at all: it is a theorem." },
    ],
  },
  {
    name: "Proof by cases", claim: "A ∨ B, A → C, B → C ⊢ C",
    lines: [
      { s: "A ∨ B", depth: 0, why: "premise", note: "We know A or B, but not which." },
      { s: "A → C", depth: 0, why: "premise", note: "" },
      { s: "B → C", depth: 0, why: "premise", note: "The plan: show C follows in either case." },
      { s: "A", depth: 1, why: "assumption", assume: true, note: "Case 1: assume A." },
      { s: "C", depth: 1, why: "→E 2, 4", note: "In this case, C." },
      { s: "B", depth: 1, why: "assumption", assume: true, note: "Case 2: a fresh subproof, assuming B. The first subproof is closed; its lines may no longer be used." },
      { s: "C", depth: 1, why: "→E 3, 6", note: "In this case too, C." },
      { s: "C", depth: 0, why: "∨E 1, 4–5, 6–7", note: "C follows from each disjunct, so it follows from the disjunction. Both assumptions are discharged." },
    ],
  },
];

/** Fitch-style proofs with subproofs, revealed one line at a time. */
export function SubproofViz() {
  const [k, setK] = useState(0);
  const [n, setN] = useState(1);
  const P = PROOFS[k];
  const pick = (i: number) => { setK(i); setN(1); };
  const cur = P.lines[n - 1];

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Proof">
        {PROOFS.map((p, i) => (
          <button key={p.name} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => pick(i)}>{p.name}</button>
        ))}
      </div>
      <p className="mono" style={{ margin: "12px 0 8px" }}>{P.claim}</p>
      <div style={{ border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "8px 12px" }}>
        {P.lines.slice(0, n).map((l, i) => (
          <div key={i} style={{ display: "flex", alignItems: "stretch", minHeight: 28, background: i === n - 1 ? "var(--accent-soft)" : undefined }}>
            <span className="mono" style={{ width: 28, color: "var(--text-muted)", alignSelf: "center" }}>{i + 1}</span>
            <span style={{ width: 10, borderLeft: "2px solid var(--text-muted)" }} />
            {Array.from({ length: l.depth }, (_, d) => <span key={d} style={{ width: 14, borderLeft: "2px solid var(--accent)" }} />)}
            <span className="mono" style={{ flex: 1, alignSelf: "center", paddingBottom: l.assume ? 2 : 0, borderBottom: l.assume ? "1.5px solid var(--accent)" : undefined, maxWidth: "max-content", paddingRight: 12 }}>{l.s}</span>
            <span className="mono-meta" style={{ marginLeft: "auto", alignSelf: "center" }}>{l.why}</span>
          </div>
        ))}
      </div>
      <div className="viz-controls">
        <button type="button" className="btn" onClick={() => setN(1)} disabled={n === 1}>Start again</button>
        <button type="button" className="btn btn-primary" onClick={() => setN(n + 1)} disabled={n === P.lines.length}>Next line</button>
        <span className="mono-meta">line {n} of {P.lines.length}</span>
      </div>
      <figcaption className="viz-caption" aria-live="polite">{cur.note || "Another premise."}</figcaption>
    </figure>
  );
}
