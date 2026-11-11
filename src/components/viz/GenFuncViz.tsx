"use client";

import { useState } from "react";

const COINS = [1, 2, 5, 10];
const N = 20;

/** Ways to pay n rupees with chosen coins: the coefficients of a product of geometric series. */
export function GenFuncViz() {
  const [on, setOn] = useState([true, true, true, false]);
  const [n, setN] = useState(10);
  const used = COINS.filter((_, i) => on[i]);
  // Multiply the series 1/(1 − x^c) one coin at a time, keeping coefficients up to x^N.
  const rows: number[][] = [];
  let coef = Array.from({ length: N + 1 }, (_, i) => (i === 0 ? 1 : 0));
  for (const c of used) {
    const next = coef.slice();
    for (let i = c; i <= N; i++) next[i] += next[i - c];
    coef = next;
    rows.push(coef);
  }

  return (
    <figure className="viz">
      <div className="viz-controls">
        {COINS.map((c, i) => (
          <button key={c} type="button" className={on[i] ? "viz-chip is-on" : "viz-chip"} aria-pressed={on[i]}
            onClick={() => setOn((o) => o.map((x, j) => (j === i ? !x : x)))}>₹{c} coin</button>
        ))}
      </div>
      <div className="viz-sliders">
        <label><span>amount n = <span className="mono">₹{n}</span></span><input type="range" min={0} max={N} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="table mono" style={{ marginTop: 8, fontSize: 12 }}>
          <thead>
            <tr><th>coins so far, then the coefficient of xⁿ for n =</th>{Array.from({ length: N + 1 }, (_, i) => <th key={i} style={{ background: i === n ? "var(--accent-soft)" : undefined }}>{i}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r, k) => (
              <tr key={k}>
                <td>{used.slice(0, k + 1).map((c) => `₹${c}`).join(", ")}</td>
                {r.map((x, i) => <td key={i} style={{ background: i === n ? "var(--accent-soft)" : undefined, fontWeight: k === rows.length - 1 && i === n ? 700 : 400 }}>{x}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {used.length === 0
          ? "Choose at least one coin."
          : `The generating function is ${used.map((c) => `1/(1 − x${c === 1 ? "" : c === 2 ? "²" : c === 5 ? "⁵" : "¹⁰"})`).join(" · ")}. Each row multiplies in one more coin, and the coefficient of xⁿ in the last row, ${coef[n]}, is the number of ways to pay ₹${n}. Multiplying by 1/(1 − xᶜ) adds to each coefficient the one c places to its left, the rule used to build each row.`}
      </figcaption>
    </figure>
  );
}
