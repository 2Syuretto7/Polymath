"use client";

import { useState } from "react";

const XS = [
  { key: "fin", label: "(1, 1, 1, 0, 0, …)", x: (k: number) => (k <= 3 ? 1 : 0), note: "Finitely supported: nφₙ(x) is 0 from n = 4 on, so the values stay bounded." },
  { key: "inv", label: "xₖ = 1/k", x: (k: number) => 1 / k, note: "n · (1/n) = 1 for every n: bounded." },
  { key: "sqrt", label: "xₖ = 1/√k", x: (k: number) => 1 / Math.sqrt(k), note: "n · (1/√n) = √n grows without bound, though x is in c₀. This is the point the theorem promises." },
];
const N = 40;

/** φₙ(x) = n·xₙ: bounded at every finitely supported x, yet ‖φₙ‖ = n. Completeness forces a bad point. */
export function PointwiseBoundViz() {
  const [k, setK] = useState(0);
  const X = XS[k];
  const vals = Array.from({ length: N }, (_, i) => (i + 1) * X.x(i + 1));
  const top = Math.max(...vals);
  const H = 150, Y = (v: number) => 170 - (Math.min(v, 7) / 7) * H;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="test sequence">
        {XS.map((s, i) => <button key={s.key} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{s.label}</button>)}
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Bars of n times the nth term, for n from 1 to 40" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[1, 3, 5, 7].map((v) => <g key={v}><line x1={40} y1={Y(v)} x2={510} y2={Y(v)} style={{ stroke: "var(--border)", strokeDasharray: "3 4" }} /><text x={32} y={Y(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text></g>)}
        {vals.map((v, i) => <rect key={i} x={44 + i * 11.6} y={Y(v)} width={8} height={170 - Y(v)} style={{ fill: v > 6.99 ? "var(--danger)" : "var(--accent-soft)", stroke: v > 6.99 ? "var(--danger)" : "var(--accent)" }} />)}
        <line x1={40} y1={170} x2={510} y2={170} style={{ stroke: "var(--text-muted)" }} />
        <text x={275} y={192} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>n = 1 to {N}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        |φₙ(x)| = n·|xₙ|. Largest value for n ≤ {N}: {top.toFixed(2)}. Meanwhile ‖φₙ‖ = n. {X.note}
      </p>
      <figcaption className="viz-caption">
        On the finitely supported sequences, every φₙ(x) = n·xₙ is eventually 0, so the family is bounded at each point,
        though not uniformly. That space is not complete. In its completion c₀, the uniform boundedness principle says some
        x must make the values unbounded, and 1/√k is one.
      </figcaption>
    </figure>
  );
}
