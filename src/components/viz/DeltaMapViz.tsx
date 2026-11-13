"use client";

import { useState } from "react";
import { fmtNum } from "./format";

type F = { name: string; f: (x: number) => number; a: number; b: number; uniform: boolean; note: string };
const FS: F[] = [
  { name: "√x on [0, 1]", f: Math.sqrt, a: 0, b: 1, uniform: true, note: "The worst point is near 0, where the graph is steepest, but even there δ stays at about ε². One δ works everywhere: √x is uniformly continuous, though not Lipschitz." },
  { name: "x² on [0, 6]", f: (x) => x * x, a: 0, b: 6, uniform: true, note: "δ(x) shrinks as x grows, but on a bounded interval it has a positive minimum at the right end. On all of [0, ∞) it would tend to 0." },
  { name: "1/x on (0, 1]", f: (x) => 1 / x, a: 0.02, b: 1, uniform: false, note: "As x approaches 0 the graph steepens without bound, and δ(x) falls like εx². On (0, 1] its infimum is 0: no single δ works, so 1/x is not uniformly continuous there." },
];
const W = 520, H = 200, X0 = 40, X1 = 500, Y0 = 180, Y1 = 14;

function bestDelta(f: (x: number) => number, a: number, b: number, x: number, eps: number) {
  const ok = (d: number) => {
    for (let i = 0; i <= 60; i++) {
      const y = Math.min(b, Math.max(a, x - d + (2 * d * i) / 60));
      if (Math.abs(f(y) - f(x)) >= eps) return false;
    }
    return true;
  };
  let lo = 0, hi = b - a;
  if (ok(hi)) return hi;
  for (let t = 0; t < 28; t++) { const m = (lo + hi) / 2; if (ok(m)) lo = m; else hi = m; }
  return lo;
}

/** For each point x, the largest δ that works for a given ε. Uniform continuity asks whether these δ have a positive lower bound. */
export function DeltaMapViz() {
  const [k, setK] = useState(0);
  const [e, setE] = useState(0.2);
  const F = FS[k];
  const xs = Array.from({ length: 81 }, (_, i) => F.a + ((F.b - F.a) * i) / 80);
  const ds = xs.map((x) => bestDelta(F.f, F.a, F.b, x, e));
  const top = Math.max(...ds) * 1.1;
  const X = (x: number) => X0 + ((x - F.a) / (F.b - F.a)) * (X1 - X0);
  const Y = (d: number) => Y0 - (d / top) * (Y0 - Y1);
  const min = Math.min(...ds);
  const fm = (z: number) => fmtNum(Number(z.toPrecision(3)));

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {FS.map((d, i) => (
          <button key={d.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => setK(i)}>{d.name}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The largest delta at each point" style={{ width: "100%", display: "block", marginTop: 12 }}>
        <line x1={X0} y1={Y0} x2={X1} y2={Y0} className="viz-axis" />
        <line x1={X0} y1={Y0} x2={X0} y2={Y1} className="viz-axis" />
        <polyline points={xs.map((x, i) => `${X(x).toFixed(1)},${Y(ds[i]).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <line x1={X0} y1={Y(min)} x2={X1} y2={Y(min)} style={{ stroke: "var(--danger)", strokeDasharray: "4 4" }} />
        <text x={X0 + 4} y={Y1 + 4} style={{ fontSize: 11, fill: "var(--text-muted)" }}>largest δ(x)</text>
        <text x={X1} y={Y0 + 16} textAnchor="end" style={{ fontSize: 11, fill: "var(--text-muted)" }}>x = {fm(F.b)}</text>
        <text x={X0} y={Y0 + 16} style={{ fontSize: 11, fill: "var(--text-muted)" }}>x = {fm(F.a)}</text>
      </svg>
      <div className="viz-sliders">
        <label><span>ε: <span className="mono">{fm(e)}</span></span>
          <input type="range" min={0.05} max={0.5} step={0.05} value={e} onChange={(ev) => setE(Number(ev.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>smallest δ(x) over the domain shown</td><td className="mono">{fm(min)}</td></tr>
          <tr><td>uniformly continuous on the stated domain?</td><td>{F.uniform ? "yes" : "no"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">{F.note}</figcaption>
    </figure>
  );
}
