"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const FS = {
  abs: { name: "|x|", f: (x: number) => Math.abs(x), verdict: "The right quotients are all 1 and the left all −1. The two one-sided limits differ, so |x| is not differentiable at 0, though it is continuous there." },
  xabs: { name: "x|x|", f: (x: number) => x * Math.abs(x), verdict: "Both quotients equal |h| and tend to 0, so f′(0) = 0. Away from 0, f′(x) = 2|x|: a derivative that is continuous but not itself differentiable at 0." },
  wig: { name: "x² sin(1/x)", f: (x: number) => (x === 0 ? 0 : x * x * Math.sin(1 / x)), verdict: "The quotient is h sin(1/h), squeezed by |h|, so f′(0) = 0. But for x ≠ 0, f′(x) = 2x sin(1/x) − cos(1/x), which has no limit at 0: the derivative exists everywhere but is not continuous." },
};
type K = keyof typeof FS;
const W = 520, H = 200, X0 = 20, X1 = 500, Y0 = 100, S = 0.5;

/** Difference quotients at 0 from the left and from the right, for three functions with corners and wiggles. */
export function DiffQuotientViz() {
  const [k, setK] = useState<K>("abs");
  const [p, setP] = useState(1);
  const h = Math.pow(10, -p);
  const F = FS[k];
  const qr = (F.f(h) - F.f(0)) / h, ql = (F.f(-h) - F.f(0)) / -h;
  const X = (x: number) => X0 + ((x + S) / (2 * S)) * (X1 - X0);
  const Y = (y: number) => Y0 - y * 170;
  const pts = Array.from({ length: 1201 }, (_, i) => -S + (2 * S * i) / 1200).map((x) => `${X(x).toFixed(1)},${Y(F.f(x)).toFixed(1)}`).join(" ");
  const fm = (z: number) => fmtNum(Number(z.toFixed(5)));
  const sec = (x: number, q: number) => <line x1={X(0)} y1={Y(0)} x2={X(x)} y2={Y(q * x)} style={{ stroke: "var(--accent)", strokeWidth: 2 }} />;
  const hd = Math.min(h, S);

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {(Object.keys(FS) as K[]).map((x) => (
          <button key={x} type="button" className={x === k ? "seg is-on" : "seg"} aria-pressed={x === k} onClick={() => setK(x)}>f(x) = {FS[x].name}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The graph near 0 with two secant lines" style={{ width: "100%", display: "block", marginTop: 12 }}>
        <line x1={X0} y1={Y0} x2={X1} y2={Y0} className="viz-axis" />
        <line x1={X(0)} y1={6} x2={X(0)} y2={H - 6} className="viz-axis" />
        <polyline points={pts} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.2 }} />
        {sec(hd, qr)}
        {sec(-hd, ql)}
        <circle cx={X(hd)} cy={Y(F.f(hd))} r={4} style={{ fill: "var(--danger)" }} />
        <circle cx={X(-hd)} cy={Y(F.f(-hd))} r={4} style={{ fill: "var(--danger)" }} />
      </svg>
      <div className="viz-sliders">
        <label><span>h = 10<sup>−{p}</sup> = <span className="mono">{fm(h)}</span></span>
          <input type="range" min={0} max={5} step={1} value={p} onChange={(e) => setP(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>right quotient (f(h) − f(0))/h</td><td className="mono">{fm(qr)}</td></tr>
          <tr><td>left quotient (f(−h) − f(0))/(−h)</td><td className="mono">{fm(ql)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">{F.verdict}</figcaption>
    </figure>
  );
}
