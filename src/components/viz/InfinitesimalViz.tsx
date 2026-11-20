"use client";

import { useState } from "react";

export const FNS = [
  { label: "f(x) = x²", f: (x: number) => x * x, d: (x: number) => 2 * x },
  { label: "f(x) = x³", f: (x: number) => x * x * x, d: (x: number) => 3 * x * x },
  { label: "f(x) = 1/x", f: (x: number) => 1 / x, d: (x: number) => -1 / (x * x) },
];

/** A hyperreal ε represented by the sequence (1, 1/2, 1/3, …); the difference quotient at x is computed term by term. */
export function InfinitesimalViz() {
  const [k, setK] = useState(0);
  const [x, setX] = useState(3);
  const [n, setN] = useState(6);
  const F = FNS[k];
  const terms = Array.from({ length: n }, (_, i) => {
    const e = 1 / (i + 1);
    return (F.f(x + e) - F.f(x)) / e;
  });
  const st = F.d(x);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="function">
        {FNS.map((f, i) => <button key={f.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{f.label}</button>)}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <label>x = {x} <input type="range" min={1} max={4} step={1} value={x} onChange={(e) => setX(Number(e.target.value))} aria-label="x" /></label>
        <label>terms shown = {n} <input type="range" min={3} max={12} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="terms" /></label>
      </div>
      <div style={{ overflowX: "auto", marginTop: 10 }}>
        <table style={{ borderCollapse: "collapse", fontSize: 13 }}>
          <tbody>
            <tr>
              <th style={{ textAlign: "left", padding: "4px 8px", color: "var(--text-muted)", fontWeight: 400 }}>ε</th>
              {terms.map((_, i) => <td key={i} style={{ padding: "4px 8px", textAlign: "right" }}>1/{i + 1}</td>)}
              <td style={{ padding: "4px 8px", color: "var(--text-faint)" }}>⋯</td>
            </tr>
            <tr>
              <th style={{ textAlign: "left", padding: "4px 8px", color: "var(--text-muted)", fontWeight: 400, whiteSpace: "nowrap" }}>(f(x + ε) − f(x))/ε</th>
              {terms.map((t, i) => <td key={i} style={{ padding: "4px 8px", textAlign: "right", color: "var(--accent)", fontWeight: 700 }}>{t.toFixed(3)}</td>)}
              <td style={{ padding: "4px 8px", color: "var(--text-faint)" }}>⋯</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        The quotient is a hyperreal infinitely close to {st.toFixed(0)}: its standard part, the derivative of {F.label.replace("f(x) = ", "")} at {x}, is {st.toFixed(0)}.
      </p>
      <figcaption className="viz-caption">
        In the ultrapower of ℝ, a sequence stands for a hyperreal, and two sequences are equal if they agree on a set in
        the ultrafilter. The sequence (1, 1/2, 1/3, …) is a positive infinitesimal. Computing term by term, the difference
        quotient differs from the derivative by an infinitesimal, which the standard part discards.
      </figcaption>
    </figure>
  );
}
