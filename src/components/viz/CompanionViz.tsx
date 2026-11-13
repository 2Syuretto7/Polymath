"use client";

import { useState } from "react";

const combo = (cs: number[], names: string[]) => {
  const parts = cs.map((c, i) => [c, names[i]] as const).filter(([c]) => c !== 0);
  if (!parts.length) return "0";
  return parts.map(([c, n], k) => `${c < 0 ? (k ? " − " : "−") : k ? " + " : ""}${Math.abs(c) === 1 ? "" : Math.abs(c)}${n}`).join("");
};

/** The companion matrix of a monic cubic: a cyclic vector e₁ → e₂ → e₃ → back into their span. */
export function CompanionViz() {
  const [a, setA] = useState([-6, 11, -6]); // a0, a1, a2 for z³ + a2 z² + a1 z + a0; default (z−1)(z−2)(z−3)
  const [a0, a1, a2] = a;
  const C = [[0, 0, -a0], [1, 0, -a1], [0, 1, -a2]];
  const ap = (v: number[]) => C.map((r) => r.reduce((s, x, j) => s + x * v[j], 0));
  const e1 = [1, 0, 0], e2 = ap(e1), e3 = ap(e2), e4 = ap(e3);
  const check = e4.map((x, i) => x + a2 * e3[i] + a1 * e2[i] + a0 * e1[i]);
  const set = (i: number, x: number) => setA(a.map((y, j) => (j === i ? x : y)));
  const term = (c: number, p: string) => (c === 0 ? "" : `${c < 0 ? " − " : " + "}${Math.abs(c) === 1 && p ? "" : Math.abs(c)}${p}`);
  const polyStr = `z³${term(a2, "z²")}${term(a1, "z")}${term(a0, "")}`;
  const v = (x: number[]) => `(${x.join(", ")})`;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        {["a₀", "a₁", "a₂"].map((nm, i) => (
          <label key={nm}><span>{nm}: <span className="mono">{a[i]}</span></span>
            <input type="range" min={-12} max={12} step={1} value={a[i]} onChange={(e) => set(i, Number(e.target.value))} /></label>
        ))}
      </div>
      <p className="mono" style={{ margin: "6px 0" }}>p(z) = {polyStr}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "flex-start" }}>
        <table className="table mono" style={{ width: "auto" }}>
          <tbody>
            {C.map((r, i) => <tr key={i}>{r.map((x, j) => <td key={j} style={{ padding: "4px 10px", color: j === 2 ? "var(--accent)" : x ? "var(--text)" : "var(--text-faint)" }}>{x}</td>)}</tr>)}
          </tbody>
        </table>
        <table className="table mono" style={{ width: "auto" }}>
          <tbody>
            <tr><td>e₁</td><td>{v(e1)}</td></tr>
            <tr><td>Te₁ = e₂</td><td>{v(e2)}</td></tr>
            <tr><td>T²e₁ = e₃</td><td>{v(e3)}</td></tr>
            <tr><td>T³e₁</td><td>{v(e4)}</td></tr>
            <tr><td>p(T)e₁</td><td style={{ color: "var(--accent)" }}>{v(check)}</td></tr>
          </tbody>
        </table>
      </div>
      <p style={{ margin: "6px 0" }}>
        T³e₁ = {combo([-a0, -a1, -a2], ["e₁", "e₂", "e₃"])}, so p(T) sends e₁ to 0, and hence every vector, since every vector is a combination of e₁, Te₁, T²e₁.
      </p>
      <figcaption className="viz-caption">
        The companion matrix shifts e₁ to e₂ to e₃, and its last column, the coefficients of p with signs reversed, sends e₃ back into their span. Its characteristic and minimal polynomials are both p, over any field, whether or not p has roots there. Rational canonical form builds every operator from blocks like this one.
      </figcaption>
    </figure>
  );
}
