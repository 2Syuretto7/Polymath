"use client";

import { useState } from "react";

type Q = { label: string; f: (y: number) => number; sol: (t: number, c: number) => number; lip: boolean; form: string };
const QS: Q[] = [
  { label: "y′ = 2√|y|", f: (y) => 2 * Math.sqrt(Math.abs(y)), sol: (t, c) => (t > c ? (t - c) ** 2 : 0), lip: false, form: "y = 0 until t = c, then y = (t − c)²" },
  { label: "y′ = 3|y|^(2/3)", f: (y) => 3 * Math.cbrt(y * y), sol: (t, c) => (t > c ? (t - c) ** 3 : 0), lip: false, form: "y = 0 until t = c, then y = (t − c)³" },
  { label: "y′ = sin y", f: (y) => Math.sin(y), sol: () => 0, lip: true, form: "only y = 0" },
];

/** Without a Lipschitz condition, y′ = f(y), y(0) = 0 can have many solutions. */
export function NonUniqueViz() {
  const [qi, setQi] = useState(0);
  const [c, setC] = useState(1.5);
  const Q = QS[qi];
  const W = 520, H = 240, L = 30, T = 4, YM = 4;
  const X = (t: number) => L + (t / T) * (W - L - 10);
  const Y = (y: number) => 10 + ((YM - Math.min(y, YM + 0.5)) / YM) * (H - 30);
  const path = (cc: number) => Array.from({ length: 201 }, (_, i) => { const t = (i / 200) * T; return `${i ? "L" : "M"}${X(t).toFixed(1)},${Y(Q.sol(t, cc)).toFixed(1)}`; }).join(" ");
  const cs = Q.lip ? [] : [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Equation">
        {QS.map((q, i) => <button key={q.label} type="button" aria-pressed={qi === i} className={qi === i ? "seg is-on" : "seg"} onClick={() => setQi(i)}>{q.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>moment c the solution leaves 0: <span className="mono">{Q.lip ? "never" : c}</span></span>
          <input type="range" min={0} max={4} step={0.25} value={c} disabled={Q.lip} onChange={(e) => setC(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Solutions through the origin" style={{ width: "100%", display: "block" }}>
        <defs><clipPath id="nonuniq-clip"><rect x={L} y={0} width={W - L} height={H - 20} /></clipPath></defs>
        <line x1={L} y1={Y(0)} x2={W - 10} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={L} y1={10} x2={L} y2={H - 20} style={{ stroke: "var(--border)" }} />
        {[0, 1, 2, 3, 4].map((v) => <text key={v} x={X(v)} y={H - 4} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{v}</text>)}
        <g clipPath="url(#nonuniq-clip)">
          {cs.map((cc) => <path key={cc} d={path(cc)} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1 }} />)}
          <path d={path(c)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        </g>
        <circle cx={X(0)} cy={Y(0)} r={4} style={{ fill: "var(--accent)" }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>solutions with y(0) = 0: {Q.form}</p>
      <p className="mono" style={{ margin: "4px 0" }}>
        slope of f between 0 and h, f(h)/h: {[0.1, 0.01, 0.0001].map((h) => `h = ${h}: ${(Q.f(h) / h).toFixed(2)}`).join("; ")}
      </p>
      <p style={{ margin: "4px 0", color: Q.lip ? "var(--accent)" : "var(--danger)" }}>
        {Q.lip ? "f is Lipschitz (|sin a − sin b| ≤ |a − b|), so the solution is unique." : "The slopes f(h)/h grow without bound near 0: f is not Lipschitz there, and uniqueness fails."}
      </p>
      <figcaption className="viz-caption">
        Every curve shown solves the same initial value problem. A solution can rest at 0 for as long as it likes and then leave, because f(y) is so steep near 0 that leaving takes no push at all. A Lipschitz bound |f(a) − f(b)| ≤ L|a − b| rules this out.
      </figcaption>
    </figure>
  );
}
