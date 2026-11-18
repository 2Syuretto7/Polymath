"use client";

import { useState } from "react";

const VARS = ["x", "y", "z", "u", "v", "w"];
const exactly = (n: number, P: string) => {
  if (n === 0) return `¬∃x ${P}x`;
  const xs = VARS.slice(0, n);
  const t = VARS[n];
  const dist: string[] = [];
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) dist.push(`${xs[i]} ≠ ${xs[j]}`);
  const body = [...dist, ...xs.map((x) => `${P}${x}`)].join(" ∧ ");
  return `${xs.map((x) => "∃" + x).join("")} (${body} ∧ ∀${t}(${P}${t} → ${xs.map((x) => `${t} = ${x}`).join(" ∨ ")}))`;
};

/** Saying ‘there are exactly n Fs’ without numbers, as Field’s nominalist must. */
export function CountingQuantViz() {
  const [n, setN] = useState(3);
  const f = exactly(n, "A");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="n">
        {[0, 1, 2, 3, 4].map((j) => <button key={j} type="button" aria-pressed={n === j} className={n === j ? "seg is-on" : "seg"} onClick={() => setN(j)}>exactly {j}</button>)}
      </div>
      <p style={{ fontSize: 14, margin: "8px 0 4px" }}><strong>With numbers:</strong> the number of apples is {n}.</p>
      <p style={{ fontSize: 14, margin: "4px 0" }}><strong>Without numbers</strong> (A for &lsquo;is an apple&rsquo;):</p>
      <p className="mono" style={{ fontSize: 13, margin: "4px 0", overflowWrap: "anywhere", color: "var(--accent)" }}>{f}</p>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {n === 0 ? "1 variable" : `${n + 1} variables`}, {f.length} symbols. The inference &lsquo;exactly 3 apples and exactly 2 pears, none both, so exactly 5 fruits&rsquo; is valid in pure logic, but the proof is long; 3 + 2 = 5 is a shortcut.
      </p>
      <figcaption className="viz-caption">
        Field&rsquo;s nominalist keeps only the physical objects and logic. Numerical claims become sentences built from
        quantifiers and identity, which grow quickly with n. Mathematics then serves as a conservative device: it proves no
        new nominalistic conclusions, but it shortens proofs enormously.
      </figcaption>
    </figure>
  );
}
