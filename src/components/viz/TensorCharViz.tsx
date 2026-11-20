"use client";

import { useState } from "react";

// classes of S₄: e, (12), (12)(34), (123), (1234)
const CLS = ["e", "(12)", "(12)(34)", "(123)", "(1234)"];
const SIZES = [1, 6, 3, 8, 6];
const SQ = [0, 0, 0, 3, 2]; // class of g²
const IRR = [
  { name: "trivial", chi: [1, 1, 1, 1, 1] },
  { name: "sign", chi: [1, -1, 1, 1, -1] },
  { name: "2-dim", chi: [2, 0, 2, -1, 0] },
  { name: "standard", chi: [3, 1, -1, 0, -1] },
  { name: "standard ⊗ sign", chi: [3, -1, -1, 0, 1] },
];
const ip = (a: number[], b: number[]) => a.reduce((s, x, i) => s + SIZES[i] * x * b[i], 0) / 24;
const sg = (x: number) => String(x).replace("-", "−");
const MODES = ["χ · ψ", "Sym² χ", "Λ² χ"];

/** Characters of S₄: products, symmetric and alternating squares, decomposed by inner products. */
export function TensorCharViz() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(3);
  const [mode, setMode] = useState(0);
  const x = IRR[a].chi, y = IRR[b].chi;
  const chi = x.map((v, i) => (mode === 0 ? v * y[i] : mode === 1 ? (v * v + x[SQ[i]]) / 2 : (v * v - x[SQ[i]]) / 2));
  const mult = IRR.map((r) => ip(chi, r.chi));
  const parts = mult.map((m, i) => (m ? `${m === 1 ? "" : m + "·"}${IRR[i].name}` : "")).filter(Boolean);
  const cw = 72, X0 = 120;
  const rows = [...IRR.map((r) => ({ name: r.name, chi: r.chi, hi: r.name === IRR[a].name || (mode === 0 && r.name === IRR[b].name) })), { name: MODES[mode], chi, hi: false }];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="construction">
        {MODES.map((m, i) => <button key={m} type="button" aria-pressed={mode === i} className={mode === i ? "seg is-on" : "seg"} onClick={() => setMode(i)}>{m}</button>)}
      </div>
      <div className="viz-controls">
        <label>χ <select value={a} onChange={(e) => setA(Number(e.target.value))} aria-label="first character">{IRR.map((r, i) => <option key={r.name} value={i}>{r.name}</option>)}</select></label>
        {mode === 0 && <label>ψ <select value={b} onChange={(e) => setB(Number(e.target.value))} aria-label="second character">{IRR.map((r, i) => <option key={r.name} value={i}>{r.name}</option>)}</select></label>}
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="Character table of S4 with a constructed character" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {CLS.map((c, j) => (
          <g key={c}>
            <text x={X0 + cw * (j + 0.5)} y={16} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{c}</text>
            <text x={X0 + cw * (j + 0.5)} y={30} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 10 }}>size {SIZES[j]}</text>
          </g>
        ))}
        {rows.map((r, i) => {
          const yy = 52 + i * 23 + (i === IRR.length ? 8 : 0);
          return (
            <g key={r.name + i}>
              {i === IRR.length && <line x1={8} y1={yy - 16} x2={X0 + cw * 5} y2={yy - 16} style={{ stroke: "var(--border-strong)" }} />}
              <text x={X0 - 8} y={yy} textAnchor="end" style={{ fill: i === IRR.length ? "var(--accent)" : r.hi ? "var(--text)" : "var(--text-muted)", fontSize: 12, fontWeight: r.hi || i === IRR.length ? 700 : 400 }}>{r.name}</text>
              {r.chi.map((v, j) => <text key={j} x={X0 + cw * (j + 0.5)} y={yy} textAnchor="middle" className="mono" style={{ fill: i === IRR.length ? "var(--accent)" : "var(--text)", fontSize: 12, fontWeight: i === IRR.length ? 700 : 400 }}>{sg(v)}</text>)}
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Dimension {chi[0]}; ⟨χ, χ⟩ = {ip(chi, chi)}. Decomposition: {parts.join(" + ")}.
      </p>
      <figcaption className="viz-caption">
        The character of a tensor product is the pointwise product of characters. The symmetric and alternating squares
        use χ(g²) as well: Sym² χ(g) = (χ(g)² + χ(g²))/2 and Λ² χ(g) = (χ(g)² − χ(g²))/2. Each multiplicity is an inner
        product ⟨χ, χᵢ⟩ = (1/24) Σ |class| χ χᵢ.
      </figcaption>
    </figure>
  );
}
