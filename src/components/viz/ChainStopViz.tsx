"use client";

import { useState } from "react";

const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
const ADD = [480, 300, 270, 84, 50, 45, 7];

/** Ascending chains of ideals: in ℤ they must stop; in a polynomial ring in infinitely many variables they need not. */
export function ChainStopViz() {
  const [mode, setMode] = useState<"z" | "poly">("z");
  const [chain, setChain] = useState<number[]>([720]);
  const [vars, setVars] = useState(1);
  const g = chain[chain.length - 1];
  const add = (m: number) => { const h = gcd(g, m); if (h !== g) setChain([...chain, h]); };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="ring">
        <button type="button" aria-pressed={mode === "z"} className={mode === "z" ? "seg is-on" : "seg"} onClick={() => setMode("z")}>ideals of ℤ</button>
        <button type="button" aria-pressed={mode === "poly"} className={mode === "poly" ? "seg is-on" : "seg"} onClick={() => setMode("poly")}>k[x₁, x₂, x₃, …]</button>
      </div>
      {mode === "z" ? (
        <>
          <div className="viz-controls">
            {ADD.map((m) => <button key={m} type="button" className="btn btn-ghost" onClick={() => add(m)} disabled={gcd(g, m) === g}>add {m}</button>)}
            <button type="button" className="btn btn-ghost" onClick={() => setChain([720])}>reset</button>
          </div>
          <p className="mono" style={{ fontSize: 14, margin: "8px 0", overflowWrap: "anywhere" }}>{chain.map((c) => `(${c})`).join(" ⊊ ")}</p>
          <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
            The ideal generated so far is ({g}), since adding m replaces the generator by gcd. Strict steps: {chain.length - 1}. {g === 1 ? "The chain has reached the whole ring." : `At most ${countFactors(g)} more strict steps are possible.`}
          </p>
        </>
      ) : (
        <>
          <div className="viz-controls">
            <button type="button" className="btn btn-primary" onClick={() => setVars(vars + 1)}>add the next variable</button>
            <button type="button" className="btn btn-ghost" onClick={() => setVars(1)}>reset</button>
          </div>
          <p className="mono" style={{ fontSize: 14, margin: "8px 0", overflowWrap: "anywhere" }}>
            {Array.from({ length: vars }, (_, i) => `(${Array.from({ length: i + 1 }, (_, j) => `x${String(j + 1).split("").map((c) => "₀₁₂₃₄₅₆₇₈₉"[Number(c)]).join("")}`).join(", ")})`).join(" ⊊ ")} ⊊ …
          </p>
          <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>Strict steps: {vars - 1}, and there is always another. This ring is not Noetherian.</p>
        </>
      )}
      <figcaption className="viz-caption">
        Each step in ℤ divides the generator by at least one prime, so a chain starting at (720) = (2⁴·3²·5) has at most
        seven strict steps. In a ring of polynomials in infinitely many variables, adjoining one more variable to the ideal
        is always a strict step, and the chain never stops.
      </figcaption>
    </figure>
  );
}

function countFactors(n: number) { let c = 0, m = n; for (let p = 2; m > 1; p++) while (m % p === 0) { m /= p; c++; } return c; }
