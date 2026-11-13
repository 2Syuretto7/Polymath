"use client";

import { useState } from "react";

const N = 12;
const DS = [6, 4, 3, 2];

/** Add cosets by adding representatives. Whichever representatives you pick, the answer lands in the same coset, so ℤ₁₂/H is a group. */
export function QuotientViz() {
  const [d, setD] = useState(4);
  const [a, setA] = useState(5);
  const [b, setB] = useState(6);
  const s = (a + b) % N;
  const lab = (x: number) => `${x % d} + H`;
  const cell = { padding: "5px 9px", textAlign: "center" as const, border: "1px solid var(--border)" };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Subgroup H">
        {DS.map((q) => (
          <button key={q} type="button" className={q === d ? "seg is-on" : "seg"} aria-pressed={q === d} onClick={() => setD(q)}>H = ⟨{q}⟩</button>
        ))}
      </div>
      <div className="viz-sliders" style={{ marginTop: 12 }}>
        <label><span>a representative of the first coset: <span className="mono">{a}</span></span>
          <input type="range" min={0} max={11} value={a} onChange={(ev) => setA(Number(ev.target.value))} /></label>
        <label><span>a representative of the second coset: <span className="mono">{b}</span></span>
          <input type="range" min={0} max={11} value={b} onChange={(ev) => setB(Number(ev.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>the cosets</td><td className="mono">{lab(a)} and {lab(b)}</td></tr>
          <tr><td>add the representatives</td><td className="mono">{a} + {b} = {s} in ℤ₁₂</td></tr>
          <tr><td>the coset of the sum</td><td className="mono">{lab(s)}</td></tr>
        </tbody>
      </table>
      <p className="mono-meta" style={{ textTransform: "none", margin: "10px 0 6px" }}>the group ℤ₁₂/H, with {d} elements</p>
      <div style={{ overflowX: "auto" }}>
        <table className="mono" style={{ borderCollapse: "collapse", margin: "0 auto" }}>
          <thead><tr><th style={{ ...cell, color: "var(--text-muted)" }}>+</th>{Array.from({ length: d }, (_, j) => <th key={j} style={{ ...cell, background: "var(--bg-subtle)" }}>{j}+H</th>)}</tr></thead>
          <tbody>
            {Array.from({ length: d }, (_, i) => (
              <tr key={i}><th style={{ ...cell, background: "var(--bg-subtle)" }}>{i}+H</th>
                {Array.from({ length: d }, (_, j) => {
                  const on = i === a % d && j === b % d;
                  return <td key={j} style={{ ...cell, background: on ? "var(--accent-soft)" : "transparent", color: on ? "var(--accent)" : "var(--text)" }}>{(i + j) % d}+H</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption className="viz-caption">
        Move a representative by a multiple of {d} and it stays in the same coset; the sum moves by a multiple of {d} too, so its coset does not change. The quotient behaves exactly like ℤ{["", "", "₂", "₃", "₄", "", "₆"][d]}.
      </figcaption>
    </figure>
  );
}
