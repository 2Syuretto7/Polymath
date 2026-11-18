"use client";

import { useState } from "react";

const ELTS = [
  { name: "√2", poly: "x² − 2", ok: true, note: "Monic with integer coefficients: integral. ℤ[√2] is a finitely generated ℤ-module, with basis 1, √2." },
  { name: "(1 + √5)/2", poly: "x² − x − 1", ok: true, note: "The golden ratio is integral, though it is not in ℤ[√5]. The integers of ℚ(√5) are ℤ[(1 + √5)/2]." },
  { name: "1/2", poly: "x − 1/2", ok: false, note: "Not integral: ℤ is integrally closed, so the only rationals integral over ℤ are the integers." },
  { name: "√2/2", poly: "x² − 1/2", ok: false, note: "Not integral: the minimal polynomial over ℚ has a non-integer coefficient." },
  { name: "(1 + √−3)/2", poly: "x² − x + 1", ok: true, note: "Integral: a primitive sixth root of unity, and any root of unity is a root of a monic xⁿ − 1." },
  { name: "(1 + √3)/2", poly: "x² − x − 1/2", ok: false, note: "Not integral, unlike its cousin (1 + √5)/2: the shape of the answer depends on the remainder of 3 mod 4." },
  { name: "∛2", poly: "x³ − 2", ok: true, note: "Integral, with ℤ[∛2] spanned by 1, ∛2 and ∛4." },
];

/** Is α integral over ℤ? Exactly when its minimal polynomial over ℚ has integer coefficients. */
export function IntegralCheckViz() {
  const [k, setK] = useState(0);
  const [seen, setSeen] = useState<number[]>([0]);
  const E = ELTS[k];
  const pick = (i: number) => { setK(i); setSeen((s) => (s.includes(i) ? s : [...s, i])); };
  const found = seen.filter((i) => ELTS[i].ok).length;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="element">
        {ELTS.map((e, i) => <button key={e.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => pick(i)}>α = {e.name}</button>)}
      </div>
      <svg viewBox="0 0 520 90" role="img" aria-label="Minimal polynomial and verdict" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={10} y={10} width={240} height={70} rx={8} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        <text x={130} y={32} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>minimal polynomial over ℚ</text>
        <text x={130} y={60} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 18, fontWeight: 700 }}>{E.poly}</text>
        <rect x={270} y={10} width={240} height={70} rx={8} style={{ fill: E.ok ? "var(--accent-soft)" : "var(--bg)", stroke: E.ok ? "var(--accent)" : "var(--danger)", strokeWidth: 2 }} />
        <text x={390} y={32} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>integral over ℤ?</text>
        <text x={390} y={60} textAnchor="middle" style={{ fill: E.ok ? "var(--accent)" : "var(--danger)", fontSize: 18, fontWeight: 700 }}>{E.ok ? "yes" : "no"}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{E.note}</p>
      <p className="mono" style={{ fontSize: 13 }}>Examined {seen.length} of {ELTS.length}; integral so far: {found}.</p>
      <figcaption className="viz-caption">
        An algebraic number is integral over ℤ when it is a root of a monic polynomial with integer coefficients. By
        Gauss&rsquo;s lemma it is enough to look at the minimal polynomial over ℚ: integral exactly when all its coefficients
        are integers.
      </figcaption>
    </figure>
  );
}
