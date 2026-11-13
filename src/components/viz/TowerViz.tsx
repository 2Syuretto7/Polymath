"use client";

import { useState } from "react";

type Tower = { name: string; fields: string[]; degs: number[]; bases: string[][] };
const TOWERS: Tower[] = [
  { name: "ℚ ⊂ ℚ(√2) ⊂ ℚ(√2, √3)", fields: ["ℚ", "ℚ(√2)", "ℚ(√2, √3)"], degs: [2, 2], bases: [["1", "√2"], ["1", "√3"]] },
  { name: "ℚ ⊂ ℚ(∛2) ⊂ ℚ(∛2, ω)", fields: ["ℚ", "ℚ(∛2)", "ℚ(∛2, ω)"], degs: [3, 2], bases: [["1", "∛2", "∛4"], ["1", "ω"]] },
  { name: "ℚ ⊂ ℚ(√2) ⊂ ℚ(⁴√2)", fields: ["ℚ", "ℚ(√2)", "ℚ(⁴√2)"], degs: [2, 2], bases: [["1", "√2"], ["1", "⁴√2"]] },
  { name: "ℚ ⊂ ℚ(i) ⊂ ℚ(i, ∛2)", fields: ["ℚ", "ℚ(i)", "ℚ(i, ∛2)"], degs: [2, 3], bases: [["1", "i"], ["1", "∛2", "∛4"]] },
];

const prod = (a: string, b: string) => {
  if (a === "1") return b;
  if (b === "1") return a;
  const known: Record<string, string> = { "√2·√3": "√6", "√2·⁴√2": "⁴√8", "∛2·ω": "ω∛2", "∛4·ω": "ω∛4", "i·∛2": "i∛2", "i·∛4": "i∛4" };
  return known[`${a}·${b}`] ?? `${a}${b}`;
};

/** The tower law: degrees multiply, and products of bases give a basis. */
export function TowerViz() {
  const [ti, setTi] = useState(0);
  const [show, setShow] = useState(false);
  const T = TOWERS[ti];
  const W = 240, H = 250, ny = (k: number) => H - 30 - k * 95;
  const total = T.degs[0] * T.degs[1];
  const basis = T.bases[0].flatMap((a) => T.bases[1].map((b) => prod(a, b)));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Tower">
        {TOWERS.map((t, i) => <button key={t.name} type="button" aria-pressed={ti === i} className={ti === i ? "seg is-on" : "seg"} onClick={() => { setTi(i); setShow(false); }}>{t.name}</button>)}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", marginTop: 8 }}>
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A tower of three fields with the degree of each step" style={{ width: "100%", maxWidth: 260, display: "block" }}>
          {[0, 1].map((k) => (
            <g key={k}>
              <line x1={W / 2} y1={ny(k) - 14} x2={W / 2} y2={ny(k + 1) + 14} style={{ stroke: "var(--accent)", strokeWidth: 2.5 }} />
              <text x={W / 2 + 10} y={(ny(k) + ny(k + 1)) / 2 + 4} style={{ fill: "var(--text)", fontSize: 13 }}>degree {T.degs[k]}</text>
            </g>
          ))}
          <path d={`M${W / 2 - 20},${ny(0)} C${20},${ny(0)} ${20},${ny(2)} ${W / 2 - 20},${ny(2)}`} style={{ fill: "none", stroke: "var(--text-muted)", strokeDasharray: "5 4" }} />
          <text x={14} y={ny(1) + 4} style={{ fill: "var(--text-muted)", fontSize: 13 }}>{total}</text>
          {T.fields.map((f, k) => (
            <g key={f}>
              <rect x={W / 2 - 60} y={ny(k) - 14} width={120} height={28} rx={6} style={{ fill: "var(--bg)", stroke: "var(--border)" }} />
              <text x={W / 2} y={ny(k) + 5} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 14 }}>{f}</text>
            </g>
          ))}
        </svg>
        <div style={{ flex: "1 1 220px", fontSize: 14 }}>
          <p style={{ margin: "0 0 6px" }}>Basis of {T.fields[1]} over ℚ: <span className="mono">{T.bases[0].join(", ")}</span></p>
          <p style={{ margin: "0 0 6px" }}>Basis of {T.fields[2]} over {T.fields[1]}: <span className="mono">{T.bases[1].join(", ")}</span></p>
          <button type="button" className="btn btn-primary" onClick={() => setShow(!show)}>{show ? "Hide the products" : "Multiply the bases"}</button>
          {show && (
            <p style={{ margin: "8px 0 0" }}>
              Basis of {T.fields[2]} over ℚ: <span className="mono">{basis.join(", ")}</span>, so the degree is {T.degs[0]} × {T.degs[1]} = {total}.
            </p>
          )}
        </div>
      </div>
      <figcaption className="viz-caption">
        Each step is a vector space over the field below it. Multiplying a basis of each step by a basis of the next gives a
        basis of the whole, which is why degrees multiply up a tower.
      </figcaption>
    </figure>
  );
}
