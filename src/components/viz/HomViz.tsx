"use client";

import { useState } from "react";

const MS = [2, 3, 4, 5, 6];
const SUBD = "₀₁₂₃₄₅₆₇₈₉";

/** Maps from ℤ₁₂ to ℤₘ given by x ↦ kx. Some are homomorphisms, some are not even well defined; for those that are, see the kernel and the image. */
export function HomViz() {
  const [m, setM] = useState(4);
  const [k, setK] = useState(1);
  const kk = k % m;
  const ok = (12 * kk) % m === 0;
  const phi = (x: number) => (kk * x) % m;
  const ker = Array.from({ length: 12 }, (_, x) => x).filter((x) => phi(x) === 0);
  const img = [...new Set(Array.from({ length: 12 }, (_, x) => phi(x)))].sort((a, b) => a - b);
  const L = (i: number) => [60, 18 + i * 16];
  const Rt = (j: number) => [380, 18 + ((j + 0.5) * 192) / m - 8];

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Target group">
        {MS.map((q) => (
          <button key={q} type="button" className={q === m ? "seg is-on" : "seg"} aria-pressed={q === m} onClick={() => { setM(q); setK(1); }}>ℤ₁₂ → ℤ{SUBD[q]}</button>
        ))}
      </div>
      <svg viewBox="0 0 520 210" role="img" aria-label="Arrows from the elements of Z12 to their images" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {ok && Array.from({ length: 12 }, (_, x) => {
          const [x1, y1] = L(x), [x2, y2] = Rt(phi(x));
          return <line key={x} x1={x1 + 10} y1={y1} x2={x2 - 12} y2={y2} style={{ stroke: phi(x) === 0 ? "var(--accent)" : "var(--text-faint)", strokeWidth: phi(x) === 0 ? 1.6 : 1 }} />;
        })}
        {Array.from({ length: 12 }, (_, x) => {
          const [cx, cy] = L(x);
          return <g key={x}><circle cx={cx} cy={cy} r={7} style={{ fill: ok && phi(x) === 0 ? "var(--accent)" : "var(--bg)", stroke: "var(--border-strong)" }} />
            <text x={cx - 14} y={cy + 4} textAnchor="end" style={{ fontSize: 10, fill: "var(--text-muted)" }}>{x}</text></g>;
        })}
        {Array.from({ length: m }, (_, j) => {
          const [cx, cy] = Rt(j);
          return <g key={j}><circle cx={cx} cy={cy} r={11} style={{ fill: ok && img.includes(j) ? "var(--accent-soft)" : "var(--bg)", stroke: "var(--accent)" }} />
            <text x={cx} y={cy + 4} textAnchor="middle" style={{ fontSize: 11, fill: "var(--text)" }}>{j}</text></g>;
        })}
        {!ok && <text x={220} y={105} textAnchor="middle" style={{ fontSize: 12, fill: "var(--danger)" }}>not well defined</text>}
      </svg>
      <div className="viz-sliders">
        <label><span>k, for the rule x ↦ kx mod {m}: <span className="mono">{kk}</span></span>
          <input type="range" min={0} max={m - 1} value={kk} onChange={(ev) => setK(Number(ev.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          {ok ? <>
            <tr><td>a homomorphism?</td><td>yes: k(x + y) = kx + ky</td></tr>
            <tr><td>kernel, the elements sent to 0</td><td className="mono">{`{${ker.join(", ")}}`}, order {ker.length}</td></tr>
            <tr><td>image</td><td className="mono">{`{${img.join(", ")}}`}, order {img.length}</td></tr>
            <tr><td>|kernel| × |image|</td><td className="mono">{ker.length} × {img.length} = 12</td></tr>
          </> : <tr><td>a homomorphism?</td><td>no: 0 and 12 are the same element of ℤ₁₂, but k·0 = 0 while k·12 = {(12 * kk) % m} mod {m}</td></tr>}
        </tbody>
      </table>
      <figcaption className="viz-caption">
        The rule x ↦ kx makes sense on ℤ₁₂ only if adding 12 to x changes nothing in ℤ{SUBD[m]}, that is, if {m} divides 12k. When it does, the kernel is a subgroup, and the sizes of kernel and image multiply to 12, as the first isomorphism theorem will explain.
      </figcaption>
    </figure>
  );
}
