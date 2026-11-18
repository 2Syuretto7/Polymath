"use client";

import { useState } from "react";

const FNS = [
  { name: "double", f: (n: number) => 2 * n, tm: "Copy each 1 to the right of a separator, then erase the separator: 2n ones.", rec: "d(0) = 0, d(n + 1) = S(S(d(n)))", lam: "λn. λf. λx. n f (n f x)", reg: "loop n times: add 2 to R1" },
  { name: "factorial", f: (n: number) => { let r = 1; for (let k = 2; k <= n; k++) r *= k; return r; }, tm: "Repeatedly multiply by unary copying, counting down a second tape.", rec: "fact(0) = 1, fact(n + 1) = (n + 1) · fact(n)", lam: "Y (λg. λn. if n = 0 then 1 else n · g(n − 1))", reg: "R1 := 1; loop k from 1 to n: R1 := R1 · k" },
  { name: "square", f: (n: number) => n * n, tm: "For each 1 of the input, write a copy of the input: n · n ones.", rec: "sq(n) = mult(n, n), with mult by primitive recursion", lam: "λn. λf. n (n f)", reg: "loop n times: loop n times: add 1 to R1" },
];
const MODELS = [
  { name: "Turing machine", who: "Turing 1936", key: "tm" as const },
  { name: "recursive functions", who: "Gödel, Herbrand, Kleene 1934–36", key: "rec" as const },
  { name: "λ-calculus", who: "Church 1936", key: "lam" as const },
  { name: "register machine", who: "Shepherdson, Sturgis 1963", key: "reg" as const },
];

/** Four independent models of computation, each computing the same function in its own way. */
export function ModelsAgreeViz() {
  const [fi, setFi] = useState(0);
  const [n, setN] = useState(4);
  const F = FNS[fi];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="function">
        {FNS.map((x, i) => <button key={x.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>{x.name}</button>)}
      </div>
      <label className="viz-controls" style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 8 }}>
        <span className="mono" style={{ minWidth: 60 }}>n = {n}</span>
        <input type="range" min={0} max={7} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} style={{ flex: 1 }} />
      </label>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 8, marginTop: 8 }}>
        {MODELS.map((m) => (
          <div key={m.name} style={{ border: "1px solid var(--border)", borderRadius: 8, padding: 10 }}>
            <div style={{ fontWeight: 700 }}>{m.name}</div>
            <div style={{ color: "var(--text-muted)", fontSize: 12 }}>{m.who}</div>
            <div className="mono" style={{ fontSize: 12, margin: "6px 0" }}>{F[m.key]}</div>
            <div className="mono" style={{ fontWeight: 700, color: "var(--accent)" }}>output: {F.f(n)}</div>
          </div>
        ))}
      </div>
      <figcaption className="viz-caption">
        The four formalisms look nothing alike: tapes, equations, function terms, counters. Yet each one computes exactly the
        same class of functions, and each can simulate the others. This convergence is a main piece of evidence for the
        Church-Turing thesis.
      </figcaption>
    </figure>
  );
}
