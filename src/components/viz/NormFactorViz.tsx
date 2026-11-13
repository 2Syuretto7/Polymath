"use client";

import { useState } from "react";

type E = [number, number];
const CASES: { n: number; facts: E[][] }[] = [
  { n: 6, facts: [[[2, 0], [3, 0]], [[1, 1], [1, -1]]] },
  { n: 9, facts: [[[3, 0], [3, 0]], [[2, 1], [2, -1]]] },
  { n: 14, facts: [[[2, 0], [7, 0]], [[3, 1], [3, -1]]] },
  { n: 21, facts: [[[3, 0], [7, 0]], [[1, 2], [1, -2]], [[4, 1], [4, -1]]] },
];
const N = ([a, b]: E) => a * a + 5 * b * b;
const show = ([a, b]: E) => (b === 0 ? `${a}` : `${a} ${b < 0 ? "−" : "+"} ${Math.abs(b) === 1 ? "" : Math.abs(b)}√−5`);
const norms = new Set<number>();
for (let a = 0; a <= 8; a++) for (let b = 0; b <= 3; b++) norms.add(a * a + 5 * b * b);

/** Two genuinely different factorisations in ℤ[√−5], checked by the norm N(a + b√−5) = a² + 5b². */
export function NormFactorViz() {
  const [i, setI] = useState(0);
  const c = CASES[i];
  const needed = (x: E) => { const m = N(x); return Array.from({ length: m - 1 }, (_, k) => k + 1).filter((d) => d > 1 && d < m && m % d === 0); };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Number to factor">
        {CASES.map((x, j) => <button key={x.n} type="button" aria-pressed={i === j} className={i === j ? "seg is-on" : "seg"} onClick={() => setI(j)}>{x.n}</button>)}
      </div>
      <table className="table" style={{ marginTop: 10 }}>
        <thead><tr><th>factorisation</th><th>norms of factors</th><th>why each factor is irreducible</th></tr></thead>
        <tbody>
          {c.facts.map((f, j) => (
            <tr key={j}>
              <td className="mono">{c.n} = {f.map((x) => `(${show(x)})`).join(" · ")}</td>
              <td className="mono">{f.map(N).join(" × ")} = {f.map(N).reduce((p, q) => p * q, 1)}</td>
              <td>{f.map((x) => { const d = needed(x).filter((k) => k * k <= N(x)); return `${show(x)}: a proper factor would have norm ${d.join(" or ")}, which no element has`; }).join("; ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mono-meta" style={{ textTransform: "none", margin: "8px 0 0" }}>
        norms below 30 that occur: {Array.from(norms).filter((k) => k > 0 && k < 30).sort((p, q) => p - q).join(", ")}. Missing: 2, 3, 7, 8, 10 and more.
      </p>
      <figcaption className="viz-caption">
        The norm is multiplicative, so if x = yz then N(x) = N(y)N(z). An element of norm 4, 9 or 49 could split only into factors of norm 2, 3 or 7, and a² + 5b² never takes those values. So each factor shown is irreducible, and none is a unit times another, since the units are only ±1. Unique factorisation fails.
      </figcaption>
    </figure>
  );
}
