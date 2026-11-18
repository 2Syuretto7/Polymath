"use client";

import { useState } from "react";

type Line = { f: string; why: string; uses?: number[] };
const PROOFS: { name: string; hyps: string[]; lines: Line[] }[] = [
  {
    name: "⊢ A → A",
    hyps: [],
    lines: [
      { f: "(A → ((A → A) → A)) → ((A → (A → A)) → (A → A))", why: "axiom 2" },
      { f: "A → ((A → A) → A)", why: "axiom 1" },
      { f: "(A → (A → A)) → (A → A)", why: "modus ponens", uses: [1, 2] },
      { f: "A → (A → A)", why: "axiom 1" },
      { f: "A → A", why: "modus ponens", uses: [3, 4] },
    ],
  },
  {
    name: "A → B, B → C ⊢ A → C",
    hyps: ["A → B", "B → C"],
    lines: [
      { f: "B → C", why: "hypothesis" },
      { f: "(B → C) → (A → (B → C))", why: "axiom 1" },
      { f: "A → (B → C)", why: "modus ponens", uses: [1, 2] },
      { f: "(A → (B → C)) → ((A → B) → (A → C))", why: "axiom 2" },
      { f: "(A → B) → (A → C)", why: "modus ponens", uses: [3, 4] },
      { f: "A → B", why: "hypothesis" },
      { f: "A → C", why: "modus ponens", uses: [5, 6] },
    ],
  },
];

type V = Record<string, boolean>;
/** Evaluate a formula built from letters, ¬, → and parentheses, with → associating to the right. */
export function evalF(s: string, v: V): boolean {
  const t = s.replace(/\s+/g, "").split("");
  let i = 0;
  const imp = (): boolean => { const a = un(); if (t[i] === "→") { i++; const b = imp(); return !a || b; } return a; };
  const un = (): boolean => {
    if (t[i] === "¬") { i++; return !un(); }
    if (t[i] === "(") { i++; const r = imp(); i++; return r; }
    return v[t[i++]];
  };
  return imp();
}
const ROWS: V[] = [];
for (const A of [true, false]) for (const B of [true, false]) for (const C of [true, false]) ROWS.push({ A, B, C });
export const followsFrom = (hyps: string[], f: string) => ROWS.every((v) => !hyps.every((h) => evalF(h, v)) || evalF(f, v));

/** Step through a Hilbert-style derivation; every line is a tautological consequence of the hypotheses. */
export function DerivationViz() {
  const [pi, setPi] = useState(0);
  const [n, setN] = useState(1);
  const P = PROOFS[pi];
  const last = P.lines[n - 1];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="derivation">
        {PROOFS.map((p, i) => <button key={p.name} type="button" aria-pressed={pi === i} className={pi === i ? "seg is-on" : "seg"} onClick={() => { setPi(i); setN(1); }}>{p.name}</button>)}
      </div>
      <p className="mono" style={{ fontSize: 12, color: "var(--text-muted)", margin: "6px 0" }}>
        axiom 1: φ → (ψ → φ); axiom 2: (φ → (ψ → χ)) → ((φ → ψ) → (φ → χ)); axiom 3: (¬ψ → ¬φ) → (φ → ψ); rule: from φ and φ → ψ infer ψ
      </p>
      <div className="viz-controls" style={{ display: "flex", gap: 8 }}>
        <button type="button" className="btn btn-primary" disabled={n >= P.lines.length} onClick={() => setN(n + 1)}>Next line</button>
        <button type="button" className="btn btn-ghost" onClick={() => setN(1)}>Start again</button>
      </div>
      <ol className="mono" style={{ fontSize: 13, display: "grid", gap: 4, paddingLeft: 28, marginTop: 8 }}>
        {P.lines.slice(0, n).map((l, k) => {
          const used = last.uses?.includes(k + 1);
          return (
            <li key={k} style={{ padding: "2px 6px", borderRadius: 4, background: k === n - 1 ? "var(--accent-soft)" : used ? "var(--danger-soft)" : undefined }}>
              {l.f} <span style={{ color: "var(--text-muted)" }}>[{l.why}{l.uses ? ` ${l.uses.join(", ")}` : ""}]</span>
            </li>
          );
        })}
      </ol>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        line {n} is {P.hyps.length ? "a tautological consequence of the hypotheses" : "a tautology"}: {followsFrom(P.hyps, last.f) ? "yes" : "no"}
        {n === P.lines.length ? ". Derivation complete." : ""}
      </p>
      <figcaption className="viz-caption">
        A derivation is a finite list, each line an axiom, a hypothesis, or obtained from two earlier lines by modus ponens
        (the lines used are marked). Checking a derivation is mechanical. Soundness says every derived line is a
        tautological consequence of the hypotheses; completeness says every tautological consequence can be derived.
      </figcaption>
    </figure>
  );
}
