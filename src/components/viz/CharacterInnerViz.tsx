"use client";

import { useState } from "react";

// classes of S₃: identity (1 element), transpositions (3), 3-cycles (2)
const SIZES = [1, 3, 2];
const IRR = [
  { name: "trivial", chi: [1, 1, 1] },
  { name: "sign", chi: [1, -1, 1] },
  { name: "standard", chi: [2, 0, -1] },
];
const PRESETS = [
  { label: "permutation on 3 points", m: [1, 0, 1] },
  { label: "regular", m: [1, 1, 2] },
  { label: "standard ⊗ standard", m: [1, 1, 1] },
];
const ip = (a: number[], b: number[]) => a.reduce((s, x, i) => s + SIZES[i] * x * b[i], 0) / 6;
const sgn = (x: number) => String(x).replace("-", "−");

/** Characters of S₃: build a representation from irreducibles and recover the multiplicities by inner products. */
export function CharacterInnerViz() {
  const [m, setM] = useState([1, 0, 1]);
  const chi = [0, 1, 2].map((c) => IRR.reduce((s, r, i) => s + m[i] * r.chi[c], 0));
  const norm = ip(chi, chi);
  const set = (i: number, v: number) => setM(m.map((x, j) => (j === i ? v : x)));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Preset">
        {PRESETS.map((p) => {
          const on = p.m.every((x, i) => x === m[i]);
          return <button key={p.label} type="button" aria-pressed={on} className={on ? "seg is-on" : "seg"} onClick={() => setM(p.m)}>{p.label}</button>;
        })}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        {IRR.map((r, i) => (
          <label key={r.name}><span>copies of the {r.name} representation: <span className="mono">{m[i]}</span></span>
            <input type="range" min={0} max={3} step={1} value={m[i]} onChange={(e) => set(i, Number(e.target.value))} /></label>
        ))}
      </div>
      <div style={{ overflowX: "auto", marginTop: 8 }}>
        <table className="table" style={{ fontSize: 14 }}>
          <thead>
            <tr><th style={{ textTransform: "none" }}>class (size)</th><th style={{ textTransform: "none" }}>1 (1)</th><th style={{ textTransform: "none" }}>transpositions (3)</th><th style={{ textTransform: "none" }}>3-cycles (2)</th><th style={{ textTransform: "none" }}>⟨χ, χᵢ⟩</th></tr>
          </thead>
          <tbody>
            {IRR.map((r) => (
              <tr key={r.name}><td>χ of {r.name}</td>{r.chi.map((x, i) => <td key={i} className="mono">{sgn(x)}</td>)}<td className="mono">{sgn(ip(chi, r.chi))}</td></tr>
            ))}
            <tr style={{ fontWeight: 600 }}><td>your χ</td>{chi.map((x, i) => <td key={i} className="mono">{sgn(x)}</td>)}<td /></tr>
          </tbody>
        </table>
      </div>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14, marginTop: 6 }}>
        <div>degree χ(1) = {chi[0]}</div>
        <div>⟨χ, χ⟩ = (1·{sgn(chi[0])}² + 3·{sgn(chi[1])}² + 2·{sgn(chi[2])}²) / 6 = {sgn(norm)}{norm === 1 ? ": irreducible" : norm === 0 ? ": the zero representation" : ": not irreducible"}</div>
      </div>
      <figcaption className="viz-caption">
        A character is the trace of each matrix, and it is constant on conjugacy classes. The inner product ⟨χ, ψ⟩ averages χ(g)
        times the conjugate of ψ(g) over the group. Against each irreducible character it returns exactly how many copies of that
        irreducible your representation contains, and ⟨χ, χ⟩ is the sum of the squares of those numbers.
      </figcaption>
    </figure>
  );
}
