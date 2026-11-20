"use client";

import { useState } from "react";

const fmt = (v: number) => (Math.abs(v) < 5e-4 ? "0.000" : v.toFixed(3).replace("-", "−"));

/** The sl(2) character as a sum over weights and as Weyl's ratio sin((n + 1)θ) / sin θ. */
export function WeylCharViz() {
  const [n, setN] = useState(4);
  const [deg, setDeg] = useState(60);
  const sum = (t: number) => { let s = 0; for (let k = 0; k <= n; k++) s += Math.cos((n - 2 * k) * t); return s; };
  const ratio = (t: number) => (Math.abs(Math.sin(t)) < 1e-9 ? n + 1 : Math.sin((n + 1) * t) / Math.sin(t));
  const W = 520, X0 = 40, X1 = 500, YM = 150, SY = 100 / Math.max(n + 1, 1);
  const px = (t: number) => X0 + (t / Math.PI) * (X1 - X0);
  const py = (v: number) => YM - v * SY;
  const curve = (f: (t: number) => number) => Array.from({ length: 241 }, (_, i) => { const t = (i / 240) * Math.PI; return `${i ? "L" : "M"}${px(t).toFixed(1)},${py(f(t)).toFixed(1)}`; }).join("");
  const th = (deg * Math.PI) / 180;
  const num = Math.sin((n + 1) * th), den = Math.sin(th);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>n = {n} <input type="range" min={0} max={8} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
        <label>θ = {deg}° <input type="range" min={0} max={180} step={15} value={deg} onChange={(e) => setDeg(Number(e.target.value))} aria-label="theta" /></label>
      </div>
      <svg viewBox={`0 0 ${W} 290`} role="img" aria-label="Character of an sl(2) representation" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0} y1={YM} x2={X1} y2={YM} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X0} y1={40} x2={X0} y2={260} style={{ stroke: "var(--border-strong)" }} />
        {[0, 45, 90, 135, 180].map((d) => (
          <text key={d} x={px((d * Math.PI) / 180)} y={YM + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{d}°</text>
        ))}
        <path d={curve((t) => Math.sin((n + 1) * t))} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "4 3" }} />
        <path d={curve(ratio)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        {Array.from({ length: 25 }, (_, i) => (i / 24) * Math.PI).map((t, i) => (
          <circle key={i} cx={px(t)} cy={py(sum(t))} r={3} style={{ fill: "var(--success)" }} />
        ))}
        <line x1={px(th)} y1={40} x2={px(th)} y2={260} style={{ stroke: "var(--danger)", strokeDasharray: "3 3" }} />
        <circle cx={px(th)} cy={py(sum(th))} r={6} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 2 }} />
        <text x={X0 + 6} y={24} style={{ fill: "var(--accent)", fontSize: 11 }}>blue: sin((n + 1)θ) / sin θ</text>
        <text x={X0 + 190} y={24} style={{ fill: "var(--success)", fontSize: 11 }}>green: sum of cos((n − 2k)θ)</text>
        <text x={X0 + 6} y={282} style={{ fill: "var(--text-muted)", fontSize: 11 }}>dashed: the numerator sin((n + 1)θ) alone</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        At θ = {deg}°: sum over weights = {fmt(sum(th))}; Weyl ratio = {fmt(num)} / {fmt(den)}{Math.abs(den) < 1e-9 ? ` (limit ${n + 1})` : ""} = {fmt(ratio(th))}.
      </p>
      <figcaption className="viz-caption">
        The character of V(n) on the element diag(exp(iθ), exp(−iθ)) is the sum of exp(i(n − 2k)θ) over its weights, a real number
        here. Weyl&rsquo;s formula writes it as an alternating sum over the Weyl group, exp(i(n + 1)θ) − exp(−i(n + 1)θ), divided by
        the same expression for n = 0. At θ = 0 the character is the dimension, n + 1.
      </figcaption>
    </figure>
  );
}
