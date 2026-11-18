"use client";

import { useState } from "react";

const STAGES = [
  { name: "1. Prov", text: "Arithmetisation gives a formula Prov(x) that holds of n exactly when n codes a sentence provable in T. It says “there is a number coding a proof of x”." },
  { name: "2. diagonal lemma", text: "For any formula φ(x) there is a sentence σ with T ⊢ σ ↔ φ(⌜σ⌝). Some sentence says of itself, via its own code, that it has property φ." },
  { name: "3. take ¬Prov", text: "Apply the lemma to ¬Prov(x). The result is G with T ⊢ G ↔ ¬Prov(⌜G⌝): G says “I am not provable in T”." },
  { name: "4. G is unprovable", text: "If T proved G, it would prove Prov(⌜G⌝), since proofs are checkable, and also ¬Prov(⌜G⌝) by the equivalence: T would be inconsistent. So if T is consistent, G is unprovable, and therefore true." },
];

/** The shape of Gödel’s first incompleteness theorem: G lies in the true sentences but outside the provable ones. */
export function GodelSentenceViz() {
  const [s, setS] = useState(0);
  const showG = s >= 2;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="stage">
        {STAGES.map((st, i) => <button key={st.name} type="button" aria-pressed={s === i} className={s === i ? "seg is-on" : "seg"} onClick={() => setS(i)}>{st.name}</button>)}
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Provable sentences inside true sentences" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={10} y={10} width={500} height={180} rx={10} style={{ fill: "none", stroke: "var(--border)" }} />
        <text x={22} y={30} style={{ fill: "var(--text-muted)", fontSize: 12 }}>all sentences of arithmetic</text>
        <ellipse cx={230} cy={110} rx={190} ry={70} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
        <text x={230} y={58} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 12 }}>true in ℕ</text>
        <ellipse cx={190} cy={115} rx={100} ry={45} style={{ fill: "var(--bg)", stroke: "var(--text)", strokeDasharray: s === 0 ? undefined : "0" }} />
        <text x={190} y={119} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>provable in T{s === 0 ? ": Prov" : ""}</text>
        {showG && (
          <g>
            <circle cx={360} cy={110} r={6} style={{ fill: s === 3 ? "var(--danger)" : "var(--text)" }} />
            <text x={372} y={114} style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>G</text>
            <circle cx={470} cy={160} r={6} style={{ fill: "var(--text-muted)" }} />
            <text x={460} y={164} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 13 }}>¬G</text>
          </g>
        )}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{STAGES[s].text}</p>
      <figcaption className="viz-caption">
        For a consistent, effectively axiomatised T containing Q whose theorems are all true, the provable sentences sit
        strictly inside the true ones. G is the witness: true, unprovable, and neither it nor its negation a theorem.
      </figcaption>
    </figure>
  );
}
