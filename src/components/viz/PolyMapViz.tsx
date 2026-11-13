"use client";

import { useState } from "react";

const sup = (k: number) => (k <= 1 ? "" : "⁰¹²³⁴⁵⁶⁷⁸⁹"[k]);
function show(c: number[]) {
  const parts = c.map((a, k) => ({ a, k })).filter(({ a }) => a !== 0).reverse();
  if (!parts.length) return "0";
  return parts.map(({ a, k }, j) => {
    const sign = a < 0 ? (j === 0 ? "−" : " − ") : j === 0 ? "" : " + ";
    const m = Math.abs(a);
    return sign + (m === 1 && k > 0 ? "" : m) + (k === 0 ? "" : `x${sup(k)}`);
  }).join("");
}
const binom = (n: number, k: number): number => (k < 0 || k > n ? 0 : k === 0 || k === n ? 1 : binom(n - 1, k - 1) + binom(n - 1, k));

/** Columns are images of basis vectors, in coefficient order 1, x, x², x³. */
const MAPS: { name: string; desc: string; M: number[][] }[] = [
  { name: "differentiate", desc: "p ↦ p′", M: [[0, 1, 0, 0], [0, 0, 2, 0], [0, 0, 0, 3], [0, 0, 0, 0]] },
  { name: "shift", desc: "p(x) ↦ p(x + 1)", M: Array.from({ length: 4 }, (_, i) => Array.from({ length: 4 }, (_, j) => binom(j, i))) },
  { name: "x times derivative", desc: "p ↦ x p′", M: [[0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 2, 0], [0, 0, 0, 3]] },
  { name: "difference", desc: "p(x) ↦ p(x + 1) − p(x)", M: Array.from({ length: 4 }, (_, i) => Array.from({ length: 4 }, (_, j) => binom(j, i) - (i === j ? 1 : 0))) },
];
const BASIS = ["1", "x", "x²", "x³"];

/** A linear map on polynomials of degree at most 3, and its matrix in the basis 1, x, x², x³. */
export function PolyMapViz() {
  const [m, setM] = useState(0);
  const [c, setC] = useState([1, -2, 0, 1]);
  const M = MAPS[m].M;
  const out = M.map((row) => row.reduce((s, a, j) => s + a * c[j], 0));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Linear map">
        {MAPS.map((x, i) => <button key={x.name} type="button" aria-pressed={m === i} className={m === i ? "seg is-on" : "seg"} onClick={() => setM(i)}>{x.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        {c.map((a, k) => (
          <label key={k}><span>coefficient of {BASIS[k]}: <span className="mono">{a}</span></span>
            <input type="range" min={-3} max={3} value={a} onChange={(ev) => setC((cc) => cc.map((x, j) => (j === k ? Math.round(Number(ev.target.value)) : x)))} /></label>
        ))}
      </div>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center", marginTop: 8 }}>
        <table className="table" style={{ width: "auto" }}>
          <thead><tr><th></th>{BASIS.map((b) => <th key={b} style={{ textTransform: "none" }}>T({b})</th>)}</tr></thead>
          <tbody>
            {M.map((row, i) => <tr key={i}><td className="mono-meta" style={{ textTransform: "none" }}>{BASIS[i]}</td>{row.map((a, j) => <td key={j} className="mono" style={{ textAlign: "center", color: a === 0 ? "var(--text-faint)" : "var(--text)" }}>{a}</td>)}</tr>)}
          </tbody>
        </table>
        <div>
          <p className="mono" style={{ margin: "2px 0" }}>p = {show(c)}</p>
          <p className="mono" style={{ margin: "2px 0" }}>T(p) = {show(out)}</p>
          <p className="mono-meta" style={{ textTransform: "none", margin: "6px 0 0" }}>{MAPS[m].desc}; coordinates ({c.join(", ")}) ↦ ({out.join(", ")})</p>
        </div>
      </div>
      <figcaption className="viz-caption">
        Column j of the matrix lists the coordinates of the image of the j-th basis polynomial. Multiplying the matrix by the coordinate vector of p gives the coordinates of T(p). The map is defined without coordinates; the matrix depends on the chosen basis.
      </figcaption>
    </figure>
  );
}
