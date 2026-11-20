"use client";

import { useState } from "react";

type Q = "none" | "∃" | "∀";
const EXAMPLES: Record<string, string> = {
  "Δ0": "a decidable relation, such as ‘x is prime’",
  "Σ1": "K = {e : ∃s, machine e halts on e within s steps}",
  "Π1": "the complement of K: machine e never halts on e",
  "Σ2": "Fin = {e : ∃n ∀s, no element above n has entered Wₑ by stage s}",
  "Π2": "Tot = {e : ∀x ∃s, machine e halts on x within s steps}",
  "Σ3": "Cof = {e : Wₑ is cofinite}",
  "Π3": "the complement of Cof",
};

/** Classify a quantifier prefix over a decidable matrix: count blocks of alike quantifiers. */
export function classify(prefix: Q[]) {
  const qs = prefix.filter((q) => q !== "none");
  const blocks: Q[] = [];
  qs.forEach((q) => { if (blocks[blocks.length - 1] !== q) blocks.push(q); });
  if (blocks.length === 0) return { name: "Δ0", label: "Δ₀", n: 0 };
  const n = blocks.length;
  const sub = "₀₁₂₃₄"[n];
  return blocks[0] === "∃" ? { name: `Σ${n}`, label: `Σ${sub}`, n } : { name: `Π${n}`, label: `Π${sub}`, n };
}

function describe(label: string, n: number) {
  if (n === 0) return ", which is decidable";
  const ce = n === 1 ? "a c.e. set" : `a set c.e. relative to ∅${"′".repeat(n - 1)}`;
  return label.startsWith("Σ") ? `: by Post’s theorem, ${ce}` : `: by Post’s theorem, the complement of ${ce}`;
}

export function ArithHierarchyViz() {
  const [prefix, setPrefix] = useState<Q[]>(["∀", "∃", "none"]);
  const c = classify(prefix);
  const set = (i: number, q: Q) => setPrefix(prefix.map((p, j) => (j === i ? q : p)));
  const vars = ["x", "y", "z"];
  const shown = prefix.map((q, i) => (q === "none" ? "" : `${q}${vars[i]} `)).join("");
  return (
    <figure className="viz">
      {prefix.map((q, i) => (
        <div key={i} className="segmented" role="group" aria-label={`quantifier ${i + 1}`} style={{ marginRight: 8, marginBottom: 6 }}>
          {(["none", "∃", "∀"] as Q[]).map((o) => <button key={o} type="button" aria-pressed={q === o} className={q === o ? "seg is-on" : "seg"} onClick={() => set(i, o)}>{o === "none" ? `no ${vars[i]}` : `${o}${vars[i]}`}</button>)}
        </div>
      ))}
      <div style={{ marginTop: 10, padding: "12px 14px", border: "1px solid var(--border)", borderRadius: 8, background: "var(--bg-subtle)", fontSize: 18 }}>
        {shown}R(e, {vars.filter((_, i) => prefix[i] !== "none").join(", ") || "…"}) <span style={{ fontSize: 13, color: "var(--text-muted)" }}>with R decidable</span>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        This prefix defines a {c.label} set{describe(c.label, c.n)}. Example: {EXAMPLES[c.name] ?? "a set at a higher level"}.
      </p>
      <figcaption className="viz-caption">
        Adjacent quantifiers of the same kind merge into one, by coding pairs of numbers as single numbers, so only the
        number of alternations matters. A set is Σₙ if defined by a formula beginning with ∃ and with n blocks, Πₙ if it
        begins with ∀, and Δₙ if it is both.
      </figcaption>
    </figure>
  );
}
