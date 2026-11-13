"use client";

import { useState } from "react";

type P = { label: string; f: (t: number) => number; F: (s: number) => number; Fs: string };
const PS: P[] = [
  { label: "f = 1", f: () => 1, F: (s) => 1 / s, Fs: "1/s" },
  { label: "f = e^(−t)", f: (t) => Math.exp(-t), F: (s) => 1 / (s + 1), Fs: "1/(s + 1)" },
  { label: "f = sin t", f: (t) => Math.sin(t), F: (s) => 1 / (s * s + 1), Fs: "1/(s² + 1)" },
  { label: "f = t", f: (t) => t, F: (s) => 1 / (s * s), Fs: "1/s²" },
];
const T = 12;

/** The Laplace transform F(s) as the area under e^(−st) f(t). */
export function LaplaceTransformViz() {
  const [pi, setPi] = useState(2);
  const [s, setS] = useState(1);
  const P = PS[pi];
  const n = 600, ts = Array.from({ length: n + 1 }, (_, i) => (i / n) * T);
  const g = ts.map((t) => Math.exp(-s * t) * P.f(t));
  let area = 0;
  for (let i = 1; i <= n; i++) area += ((ts[i] - ts[i - 1]) * (g[i] + g[i - 1])) / 2;
  const fv = ts.map(P.f);
  const hi = Math.max(1, ...fv.map((v) => Math.min(v, 3))), lo = Math.min(0, ...fv);
  const W = 520, H = 220, L = 30;
  const X = (t: number) => L + (t / T) * (W - L - 10), Y = (v: number) => 8 + ((hi - Math.min(v, hi + 0.2)) / (hi - lo)) * (H - 28);
  const area0 = `M${X(0)},${Y(0)} ` + g.map((v, i) => `L${X(ts[i]).toFixed(1)},${Y(v).toFixed(1)}`).join(" ") + ` L${X(T)},${Y(0)} Z`;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {PS.map((x, i) => <button key={x.label} type="button" aria-pressed={pi === i} className={pi === i ? "seg is-on" : "seg"} onClick={() => setPi(i)}>{x.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>s: <span className="mono">{s.toFixed(2)}</span></span>
          <input type="range" min={0.3} max={4} step={0.05} value={s} onChange={(e) => setS(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="f(t) and the shaded area under e^(−st) f(t)" style={{ width: "100%", display: "block" }}>
        <path d={area0} style={{ fill: "var(--accent)", fillOpacity: 0.3, stroke: "none" }} />
        <line x1={L} y1={Y(0)} x2={W - 10} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={L} y1={8} x2={L} y2={H - 20} style={{ stroke: "var(--border)" }} />
        {[0, 4, 8, 12].map((v) => <text key={v} x={X(v)} y={H - 4} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{v}</text>)}
        <path d={fv.map((v, i) => `${i ? "L" : "M"}${X(ts[i]).toFixed(1)},${Y(v).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "6 4" }} />
        <path d={g.map((v, i) => `${i ? "L" : "M"}${X(ts[i]).toFixed(1)},${Y(v).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.2 }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>shaded area ∫₀¹² e^(−st) f(t) dt = {area.toFixed(4)}; F(s) = {P.Fs} = {P.F(s).toFixed(4)}</p>
      <figcaption className="viz-caption">
        The dashed curve is f, the thick curve is f damped by e^(−st), and the shaded area is the Laplace transform F(s) (the tail beyond t = 12 is tiny unless s is small). Larger s damps more strongly, so F(s) shrinks. Each function gets its own curve F, and differentiating f corresponds to multiplying F by s.
      </figcaption>
    </figure>
  );
}
