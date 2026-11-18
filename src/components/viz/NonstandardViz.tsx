"use client";

import { useState } from "react";

/** Finitely many of the sentences c > 0, c > 1, … are satisfied in ℕ by a large c; all of them need a nonstandard element. */
export function NonstandardViz() {
  const [n, setN] = useState(5);
  const [allOn, setAllOn] = useState(false);
  const X = (k: number) => 30 + k * 19;
  const cPos = allOn ? 500 : X(n);
  return (
    <figure className="viz">
      <label className="viz-controls" style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span className="mono" style={{ minWidth: 200 }}>take c &gt; 0, …, c &gt; {n - 1}</span>
        <input type="range" min={1} max={22} step={1} value={n} disabled={allOn} onChange={(e) => setN(Number(e.target.value))} style={{ flex: 1 }} />
      </label>
      <div className="viz-controls" style={{ display: "flex", gap: 8 }}>
        <button type="button" className={allOn ? "btn btn-ghost" : "btn btn-primary"} onClick={() => setAllOn(!allOn)}>{allOn ? "Back to finitely many" : "Take all of them"}</button>
      </div>
      <svg viewBox="0 0 520 120" role="img" aria-label="The natural numbers and the interpretation of c" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={20} y1={60} x2={460} y2={60} style={{ stroke: "var(--border)", strokeWidth: 2 }} />
        {Array.from({ length: 23 }, (_, k) => (
          <g key={k}>
            <circle cx={X(k)} cy={60} r={4} style={{ fill: !allOn && k < n ? "var(--accent)" : "var(--text-muted)" }} />
            {k % 5 === 0 && <text x={X(k)} y={84} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{k}</text>}
          </g>
        ))}
        <text x={470} y={64} style={{ fill: "var(--text-muted)", fontSize: 14 }}>…</text>
        {allOn && <line x1={485} y1={60} x2={515} y2={60} style={{ stroke: "var(--danger)", strokeWidth: 2, strokeDasharray: "3 3" }} />}
        <g>
          <line x1={cPos} y1={22} x2={cPos} y2={52} style={{ stroke: allOn ? "var(--danger)" : "var(--accent)", strokeWidth: 2 }} />
          <circle cx={cPos} cy={60} r={7} style={{ fill: allOn ? "var(--danger)" : "var(--accent)" }} />
          <text x={cPos} y={16} textAnchor="middle" style={{ fill: allOn ? "var(--danger)" : "var(--accent)", fontSize: 13, fontWeight: 700 }}>c</text>
        </g>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {allOn
          ? "No natural number exceeds every numeral. Yet every finite subset has a model, so by compactness the whole set does: in it, c is a nonstandard element, beyond 0, 1, 2, … ."
          : `In the standard natural numbers, interpreting c as ${n} satisfies all ${n} sentences taken so far, together with every true sentence of arithmetic.`}
      </p>
      <figcaption className="viz-caption">
        Let Σ be all sentences true in (ℕ, 0, S, +, ·, &lt;), plus c &gt; 0, c &gt; 1, c &gt; 2, and so on, one for every numeral.
        Any finite part mentions only finitely many numerals, so a large enough number serves as c. Compactness then gives a
        model of all of Σ: it satisfies every truth of arithmetic, yet contains an element larger than every standard
        number.
      </figcaption>
    </figure>
  );
}
