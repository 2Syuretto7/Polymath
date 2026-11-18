"use client";

import { useState } from "react";

const IDEALS = ["P = (2, 1 + √−5)", "Q = (3, 1 + √−5)", "Q′ = (3, 1 − √−5)"];
const ELTS: Record<string, { norm: number; exp: number[]; how: string }> = {
  "2": { norm: 4, exp: [2, 0, 0], how: "(2) = P²" },
  "3": { norm: 9, exp: [0, 1, 1], how: "(3) = QQ′" },
  "1 + √−5": { norm: 6, exp: [1, 1, 0], how: "(1 + √−5) = PQ" },
  "1 − √−5": { norm: 6, exp: [1, 0, 1], how: "(1 − √−5) = PQ′" },
};
const WAYS = [["2", "3"], ["1 + √−5", "1 − √−5"]];

/** In ℤ[√−5], 6 has two factorisations into irreducibles, but one into prime ideals. */
export function IdealFactorViz() {
  const [w, setW] = useState(0);
  const [ideals, setIdeals] = useState(false);
  const pair = WAYS[w];
  const total = [0, 1, 2].map((j) => pair.reduce((s, e) => s + ELTS[e].exp[j], 0));
  const cell = { padding: "4px 10px", borderBottom: "1px solid var(--border)", textAlign: "center" as const };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="factorisation">
        <button type="button" aria-pressed={w === 0} className={w === 0 ? "seg is-on" : "seg"} onClick={() => setW(0)}>6 = 2 · 3</button>
        <button type="button" aria-pressed={w === 1} className={w === 1 ? "seg is-on" : "seg"} onClick={() => setW(1)}>6 = (1 + √−5)(1 − √−5)</button>
      </div>
      <div className="viz-controls">
        <button type="button" className={ideals ? "btn btn-ghost" : "btn btn-primary"} onClick={() => setIdeals(!ideals)}>{ideals ? "hide prime ideals" : "refine into prime ideals"}</button>
      </div>
      <table className="mono" style={{ fontSize: 13, borderCollapse: "collapse", margin: "8px 0", width: "100%" }}>
        <thead>
          <tr>
            <th style={cell}>factor</th>
            <th style={cell}>norm</th>
            {ideals && IDEALS.map((I) => <th key={I} style={{ ...cell, color: "var(--accent)" }}>{I}</th>)}
          </tr>
        </thead>
        <tbody>
          {pair.map((e) => (
            <tr key={e}>
              <td style={cell}>{e}</td>
              <td style={cell}>{ELTS[e].norm}</td>
              {ideals && ELTS[e].exp.map((x, j) => <td key={j} style={cell}>{x}</td>)}
            </tr>
          ))}
          {ideals && (
            <tr>
              <td style={{ ...cell, fontWeight: 700 }}>(6)</td>
              <td style={{ ...cell, fontWeight: 700 }}>36</td>
              {total.map((x, j) => <td key={j} style={{ ...cell, fontWeight: 700, color: "var(--accent)" }}>{x}</td>)}
            </tr>
          )}
        </tbody>
      </table>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {ideals
          ? `${pair.map((e) => ELTS[e].how).join(" and ")}. Either way, (6) = P²QQ′: exponents 2, 1, 1.`
          : "Each factor is irreducible: no element has norm 2 or 3, since a² + 5b² never equals 2 or 3. And 2 is not an associate of 1 ± √−5. Unique factorisation of elements fails."}
      </p>
      <figcaption className="viz-caption">
        The norm of a + b√−5 is a² + 5b², and it is multiplicative. Kummer&rsquo;s ideal numbers, made precise by Dedekind as
        ideals, restore uniqueness: in a Dedekind domain every non-zero ideal is a product of prime ideals in exactly one way.
        P, Q and Q′ have norms 2, 3 and 3, and none is principal.
      </figcaption>
    </figure>
  );
}
