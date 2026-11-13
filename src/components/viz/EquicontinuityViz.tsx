"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const FAM = {
  shift: { name: "sin(x + n)", f: (x: number, n: number) => Math.sin(x + n) },
  fast: { name: "sin(nx)", f: (x: number, n: number) => Math.sin(n * x) },
};
type K = keyof typeof FAM;
const W = 520, H = 200, X0 = 20, X1 = 500, Y0 = 185, Y1 = 15, B = Math.PI;

/** For a fixed point and ε, find the δ each member of the family needs. Equicontinuity asks for one δ that serves them all. */
export function EquicontinuityViz() {
  const [k, setK] = useState<K>("shift");
  const [N, setN] = useState(6);
  const [x0, setX0] = useState(1.2);
  const [e, setE] = useState(0.5);
  const F = FAM[k];
  const X = (x: number) => X0 + (x / B) * (X1 - X0);
  const Y = (y: number) => Y0 - ((y + 1.1) / 2.2) * (Y0 - Y1);
  const grid = Array.from({ length: 601 }, (_, i) => (B * i) / 600);
  const delta = (n: number) => {
    const v = F.f(x0, n);
    for (let d = 0.001; d <= B; d += 0.001) {
      if (Math.abs(F.f(x0 + d, n) - v) >= e || Math.abs(F.f(x0 - d, n) - v) >= e) return d;
    }
    return B;
  };
  const ds = Array.from({ length: N }, (_, i) => delta(i + 1));
  const min = Math.min(...ds);
  const worst = ds.indexOf(min) + 1;
  const fm = (v: number) => fmtNum(Number(v.toFixed(3)));

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Family">
        {(Object.keys(FAM) as K[]).map((q) => (
          <button key={q} type="button" className={q === k ? "seg is-on" : "seg"} aria-pressed={q === k} onClick={() => setK(q)}>fₙ(x) = {FAM[q].name}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Members of a family of functions with the smallest delta window marked" style={{ width: "100%", display: "block", marginTop: 12 }}>
        <rect x={X(Math.max(0, x0 - min))} y={Y1} width={X(Math.min(B, x0 + min)) - X(Math.max(0, x0 - min))} height={Y0 - Y1} style={{ fill: "var(--accent-soft)", opacity: 0.7 }} />
        <line x1={X0} y1={Y(0)} x2={X1} y2={Y(0)} className="viz-axis" />
        {Array.from({ length: N }, (_, i) => i + 1).map((n) => (
          <polyline key={n} points={grid.map((x) => `${X(x).toFixed(1)},${Y(F.f(x, n)).toFixed(1)}`).join(" ")}
            style={{ fill: "none", stroke: n === worst ? "var(--accent)" : "var(--text-faint)", strokeWidth: n === worst ? 2 : 1 }} />
        ))}
        <line x1={X(x0)} y1={Y1} x2={X(x0)} y2={Y0} style={{ stroke: "var(--text)", strokeDasharray: "3 3" }} />
      </svg>
      <div className="viz-sliders">
        <label><span>members shown: <span className="mono">{N}</span></span>
          <input type="range" min={1} max={20} value={N} onChange={(ev) => setN(Number(ev.target.value))} /></label>
        <label><span>point x₀: <span className="mono">{fm(x0)}</span></span>
          <input type="range" min={0.2} max={2.9} step={0.1} value={x0} onChange={(ev) => setX0(Math.round(Number(ev.target.value) * 10) / 10)} /></label>
        <label><span>ε: <span className="mono">{fm(e)}</span></span>
          <input type="range" min={0.1} max={0.9} step={0.1} value={e} onChange={(ev) => setE(Math.round(Number(ev.target.value) * 10) / 10)} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>δ needed by f₁</td><td className="mono">{fm(ds[0])}</td></tr>
          <tr><td>smallest δ among f₁, …, f{N}</td><td className="mono">{fm(min)}, needed by f{worst}</td></tr>
          <tr><td>is there one δ for the whole family?</td><td>{k === "shift" ? "yes: |fₙ(x) − fₙ(y)| ≤ |x − y|, so δ = ε works for every n" : "no: fₙ needs δ about ε/n, which tends to 0"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {k === "shift"
          ? "Every member has slope at most 1, so the shaded window never needs to shrink as more members are added. The family is bounded and equicontinuous, and Arzelà-Ascoli promises a uniformly convergent subsequence."
          : "Each sin(nx) is continuous, but they oscillate ever faster, so the window shrinks as members are added. The family is bounded but not equicontinuous, and indeed no subsequence converges uniformly."}
      </figcaption>
    </figure>
  );
}
