"use client";

import { useState } from "react";

/** Probabilism as a test: do these credences in A, B, A and B, A or B obey the probability axioms? */
export function CredenceCoherenceViz() {
  const [a, setA] = useState(0.6);
  const [b, setB] = useState(0.5);
  const [ab, setAb] = useState(0.4);
  const [aob, setAob] = useState(0.9);
  const want = a + b - ab;
  const checks: [string, boolean, string][] = [
    ["Cr(A and B) ≤ Cr(A) and ≤ Cr(B)", ab <= Math.min(a, b) + 1e-9, "A conjunction can be no more likely than either conjunct."],
    ["Cr(A or B) ≥ Cr(A) and ≥ Cr(B)", aob >= Math.max(a, b) - 1e-9, "A disjunction is at least as likely as either disjunct."],
    ["Cr(A or B) = Cr(A) + Cr(B) − Cr(A and B)", Math.abs(aob - want) < 0.005, `Additivity requires Cr(A or B) = ${want.toFixed(2)}.`],
  ];
  const ok = checks.every((c) => c[1]);
  const sl = (lab: string, v: number, f: (n: number) => void) => (
    <label key={lab}><span>{lab}: <span className="mono">{v.toFixed(2)}</span></span>
      <input type="range" min={0} max={1} step={0.05} value={v} onChange={(e) => f(Number(e.target.value))} /></label>
  );
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>A: it rains in Mumbai tomorrow. B: tomorrow&rsquo;s match at the Wankhede is called off. Set your degrees of belief.</p>
      <div className="viz-sliders">
        {sl("Cr(A)", a, setA)}
        {sl("Cr(B)", b, setB)}
        {sl("Cr(A and B)", ab, setAb)}
        {sl("Cr(A or B)", aob, setAob)}
      </div>
      <div style={{ display: "grid", gap: 6, marginTop: 10 }}>
        {checks.map(([lab, pass, why]) => (
          <div key={lab} style={{ border: "1px solid var(--border)", borderRadius: 6, padding: "6px 10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8, fontSize: 14 }}>
              <span className="mono">{lab}</span>
              <span className="mono" style={{ color: pass ? "var(--accent)" : "var(--danger)", whiteSpace: "nowrap" }}>{pass ? "satisfied" : "violated"}</span>
            </div>
            {!pass && <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{why}</div>}
          </div>
        ))}
      </div>
      <p style={{ margin: "10px 0 4px", fontWeight: 600, color: ok ? "var(--accent)" : "var(--danger)" }}>
        {ok ? "These credences are coherent: they could be a probability function." : "These credences are incoherent: no probability function assigns them."}
      </p>
      <figcaption className="viz-caption">
        Probabilism says a rational agent&rsquo;s credences obey the probability axioms. That is a constraint on how beliefs fit together, not on any single one: any credence in A from 0 to 1 is allowed, but once it is fixed, the others are constrained.
      </figcaption>
    </figure>
  );
}
