"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const FS = {
  abs: { name: "|x − ½|", f: (x: number) => Math.abs(x - 0.5) },
  wave: { name: "a wave", f: (x: number) => 0.5 + 0.35 * Math.sin(7 * x) },
  root: { name: "√x", f: (x: number) => Math.sqrt(x) },
};
type K = keyof typeof FS;
const W = 520, H = 210, X0 = 30, X1 = 500, Y0 = 190, Y1 = 14;

function bern(f: (x: number) => number, n: number, x: number) {
  if (x <= 0) return f(0);
  if (x >= 1) return f(1);
  const lx = Math.log(x), l1 = Math.log(1 - x);
  let lc = 0, s = 0;
  for (let k = 0; k <= n; k++) {
    if (k > 0) lc += Math.log((n - k + 1) / k);
    s += f(k / n) * Math.exp(lc + k * lx + (n - k) * l1);
  }
  return s;
}

/** Bernstein's proof of the Weierstrass theorem: average the values f(k/n) with binomial weights, and the polynomials converge uniformly to f. */
export function BernsteinViz() {
  const [k, setK] = useState<K>("abs");
  const [n, setN] = useState(8);
  const F = FS[k];
  const X = (x: number) => X0 + x * (X1 - X0);
  const Y = (y: number) => Y0 - (y / 1) * (Y0 - Y1);
  const grid = Array.from({ length: 201 }, (_, i) => i / 200);
  const bv = grid.map((x) => bern(F.f, n, x));
  let sup = 0, at = 0;
  grid.forEach((x, i) => { const d = Math.abs(bv[i] - F.f(x)); if (d > sup) { sup = d; at = x; } });
  const fm = (v: number) => fmtNum(Number(v.toFixed(4)));

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {(Object.keys(FS) as K[]).map((q) => (
          <button key={q} type="button" className={q === k ? "seg is-on" : "seg"} aria-pressed={q === k} onClick={() => setK(q)}>f(x) = {FS[q].name}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A continuous function and its Bernstein polynomial" style={{ width: "100%", display: "block", marginTop: 12 }}>
        <line x1={X0} y1={Y0} x2={X1} y2={Y0} className="viz-axis" />
        <polyline points={grid.map((x) => `${X(x).toFixed(1)},${Y(F.f(x)).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "5 4" }} />
        <polyline points={grid.map((x, i) => `${X(x).toFixed(1)},${Y(bv[i]).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        {n <= 40 && Array.from({ length: n + 1 }, (_, j) => <circle key={j} cx={X(j / n)} cy={Y(F.f(j / n))} r={2.5} style={{ fill: "var(--text)" }} />)}
        <line x1={X(at)} y1={Y(F.f(at))} x2={X(at)} y2={Y(bern(F.f, n, at))} style={{ stroke: "var(--danger)", strokeWidth: 2 }} />
      </svg>
      <div className="viz-sliders">
        <label><span>degree n: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={200} value={n} onChange={(ev) => setN(Number(ev.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>sup |Bₙf − f|, the largest gap</td><td className="mono">{fm(sup)}, at x ≈ {fm(at)}</td></tr>
          <tr><td>sample points used</td><td className="mono">f(0), f(1/{n}), …, f(1)</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Bₙf(x) is the expected value of f(S/n), where S counts successes in n trials with success probability x. As n grows, S/n concentrates near x, so Bₙf(x) approaches f(x), uniformly because f is uniformly continuous. Convergence is slow at a corner: the gap shrinks roughly like 1/√n.
      </figcaption>
    </figure>
  );
}
