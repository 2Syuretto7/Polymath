"use client";

import { useState } from "react";

const OPTS = [
  ["A: $1M for certain", "B: 89% $1M, 10% $5M, 1% nothing"],
  ["C: 11% $1M, 89% nothing", "D: 10% $5M, 90% nothing"],
];

/** The Allais choices, scored by expected utility with u(nothing) = 0 and u($5M) = 1. */
export function AllaisChoiceViz() {
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(1);
  const [x100, setX] = useState(95);
  const x = x100 / 100;
  const eu = [[x, 0.89 * x + 0.1], [0.11 * x, 0.1]];
  const consistent = c1 === c2;
  return (
    <figure className="viz">
      <div style={{ display: "grid", gap: 6 }}>
        {OPTS.map((pair, g) => (
          <div key={g} className="segmented" role="group" aria-label={`choice ${g + 1}`} style={{ flexWrap: "wrap" }}>
            {pair.map((o, i) => {
              const on = (g === 0 ? c1 : c2) === i;
              return <button key={o} type="button" aria-pressed={on} className={on ? "seg is-on" : "seg"} onClick={() => (g === 0 ? setC1(i) : setC2(i))}>{o}</button>;
            })}
          </div>
        ))}
      </div>
      <div className="viz-controls">
        <label>u($1M) = {x.toFixed(2)} <input type="range" min={0} max={100} value={x100} onChange={(e) => setX(Number(e.target.value))} aria-label="utility of 1M" /></label>
      </div>
      <div className="mono" style={{ fontSize: 13, display: "grid", gap: 3, marginTop: 6 }}>
        <div>EU(A) = {eu[0][0].toFixed(3)}, EU(B) = {eu[0][1].toFixed(3)}: expected utility prefers {Math.abs(eu[0][0] - eu[0][1]) < 1e-9 ? "neither" : eu[0][0] > eu[0][1] ? "A" : "B"}</div>
        <div>EU(C) = {eu[1][0].toFixed(3)}, EU(D) = {eu[1][1].toFixed(3)}: expected utility prefers {Math.abs(eu[1][0] - eu[1][1]) < 1e-9 ? "neither" : eu[1][0] > eu[1][1] ? "C" : "D"}</div>
        <div style={{ fontWeight: 700 }}>
          Your choices {c1 === 0 ? "A" : "B"} and {c2 === 0 ? "C" : "D"}: {consistent ? `consistent with expected utility, for u($1M) ${c1 === 0 ? "above" : "below"} 10/11 ≈ 0.909.` : "no utility function makes both strict choices maximise expected utility."}
        </div>
      </div>
      <figcaption className="viz-caption">
        Maurice Allais&rsquo;s 1953 choices. Many people pick A and D. But EU(A) − EU(B) = 0.11·u($1M) − 0.10 = EU(C) − EU(D),
        so whatever the utilities, expected utility ranks the two pairs the same way. Taking away a common 89% chance of
        $1M should not change the ranking: that is the independence axiom.
      </figcaption>
    </figure>
  );
}
