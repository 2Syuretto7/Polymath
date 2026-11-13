"use client";

import { useState, type CSSProperties } from "react";

type P = { label: string; g: (t: number) => number; T: number };
const PS: P[] = [
  { label: "g = tan t", g: (t) => Math.tan(t), T: 1.45 },
  { label: "a short push near t = 3", g: (t) => 3 * Math.exp(-((t - 3) ** 2) / 0.1), T: 15 },
  { label: "g = cos t (resonant)", g: (t) => Math.cos(t), T: 15 },
];
const N = 600;

/** Variation of parameters for y″ + y = g(t) from rest: the constants in C₁cos t + C₂sin t become functions. */
export function VaryParamViz() {
  const [pi, setPi] = useState(1);
  const P = PS[pi];
  const ts = Array.from({ length: N + 1 }, (_, i) => (i / N) * P.T);
  const u1 = [0], u2 = [0];
  for (let i = 1; i <= N; i++) {
    const h = ts[i] - ts[i - 1], a = ts[i - 1], b = ts[i];
    u1.push(u1[i - 1] - (h / 2) * (Math.sin(a) * P.g(a) + Math.sin(b) * P.g(b)));
    u2.push(u2[i - 1] + (h / 2) * (Math.cos(a) * P.g(a) + Math.cos(b) * P.g(b)));
  }
  const ys = ts.map((t, i) => u1[i] * Math.cos(t) + u2[i] * Math.sin(t));
  const W = 520, H = 150, L = 38;
  const X = (t: number) => L + (t / P.T) * (W - L - 10);
  const panel = (series: { vs: number[]; style: CSSProperties; name: string }[], label: string) => {
    const all = series.flatMap((s) => s.vs);
    const hi = Math.max(0.2, ...all), lo = Math.min(-0.2, ...all);
    const Y = (v: number) => 8 + ((hi - v) / (hi - lo)) * (H - 28);
    return (
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label} style={{ width: "100%", display: "block" }}>
        <line x1={L} y1={Y(0)} x2={W - 10} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={L} y1={8} x2={L} y2={H - 20} style={{ stroke: "var(--border)" }} />
        {[hi, lo].map((v) => <text key={v} x={L - 6} y={Y(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{v.toFixed(1)}</text>)}
        {[0, P.T / 2, P.T].map((v) => <text key={v} x={X(v)} y={H - 4} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{Number(v.toFixed(2))}</text>)}
        {series.map((s) => <path key={s.name} d={s.vs.map((v, i) => `${i ? "L" : "M"}${X(ts[i]).toFixed(1)},${Y(v).toFixed(1)}`).join(" ")} style={{ fill: "none", ...s.style }} />)}
      </svg>
    );
  };
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>Solve y″ + y = g(t), starting at rest, as y = u₁(t) cos t + u₂(t) sin t.</p>
      <div className="segmented" role="group" aria-label="Forcing">
        {PS.map((x, i) => <button key={x.label} type="button" aria-pressed={pi === i} className={pi === i ? "seg is-on" : "seg"} onClick={() => setPi(i)}>{x.label}</button>)}
      </div>
      <p className="mono" style={{ margin: "8px 0 0", fontSize: 13 }}>u₁ = −∫ g sin (solid) and u₂ = ∫ g cos (dashed)</p>
      {panel([{ vs: u1, style: { stroke: "var(--accent)", strokeWidth: 2 }, name: "u1" }, { vs: u2, style: { stroke: "var(--text-muted)", strokeWidth: 2, strokeDasharray: "6 4" }, name: "u2" }], "The varying parameters")}
      <p className="mono" style={{ margin: "8px 0 0", fontSize: 13 }}>the solution y = u₁ cos t + u₂ sin t</p>
      {panel([{ vs: ys, style: { stroke: "var(--accent)", strokeWidth: 2.5 }, name: "y" }], "The solution")}
      <figcaption className="viz-caption">
        For the homogeneous equation, C₁ and C₂ are constant. Letting them vary absorbs the forcing: they change only while g acts. After the short push they freeze, and the solution is again a pure oscillation. With resonant forcing, u₂ keeps growing like t/2, and so does the oscillation.
      </figcaption>
    </figure>
  );
}
