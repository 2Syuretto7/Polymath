"use client";

import { useState } from "react";

const X0 = 1;
const EXACT = Math.cos(X0);
const KS = Array.from({ length: 65 }, (_, i) => i / 4);
const fwd = (h: number) => (Math.sin(X0 + h) - Math.sin(X0)) / h;
const ctr = (h: number) => (Math.sin(X0 + h) - Math.sin(X0 - h)) / (2 * h);
const lg = (e: number) => Math.log10(Math.max(Math.abs(e), 1e-17));

/** Forward and central differences for sin′(1): truncation error falls as h shrinks, rounding error rises. */
export function FiniteDiffViz() {
  const [k, setK] = useState(4);
  const h = 10 ** -k;
  const X = (kk: number) => 40 + (kk / 16) * 460, Y = (le: number) => 10 + ((0 - le) / 17) * 170;
  const curve = (g: (h: number) => number) => KS.map((kk, i) => `${i ? "L" : "M"}${X(kk).toFixed(1)},${Y(lg(g(10 ** -kk) - EXACT)).toFixed(1)}`).join(" ");
  const ef = fwd(h) - EXACT, ec = ctr(h) - EXACT;
  return (
    <figure className="viz">
      <label className="viz-controls" style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span className="mono">h = 1e−{k.toFixed(2)}</span>
        <input type="range" min={0} max={16} step={0.25} value={k} onChange={(e) => setK(Number(e.target.value))} style={{ flex: 1 }} />
      </label>
      <svg viewBox="0 0 520 210" role="img" aria-label="Error of forward and central differences against step size" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[0, -4, -8, -12, -16].map((t) => (
          <g key={t}>
            <line x1={40} y1={Y(t)} x2={500} y2={Y(t)} style={{ stroke: "var(--border)" }} />
            <text x={34} y={Y(t) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{t === 0 ? "1" : `1e${t}`}</text>
          </g>
        ))}
        {[0, 4, 8, 12, 16].map((t) => <text key={t} x={X(t)} y={200} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{t === 0 ? "h = 1" : `1e−${t}`}</text>)}
        <line x1={X(k)} y1={10} x2={X(k)} y2={180} style={{ stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
        <path d={curve(fwd)} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 2 }} />
        <path d={curve(ctr)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <circle cx={X(k)} cy={Y(lg(ef))} r={4.5} style={{ fill: "var(--danger)" }} />
        <circle cx={X(k)} cy={Y(lg(ec))} r={4.5} style={{ fill: "var(--accent)" }} />
        <text x={50} y={150} style={{ fill: "var(--danger)", fontSize: 12 }}>forward</text>
        <text x={50} y={166} style={{ fill: "var(--accent)", fontSize: 12 }}>central</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 13 }}>
        <div>forward (f(1+h) − f(1))/h: error {Math.abs(ef).toExponential(2)}</div>
        <div>central (f(1+h) − f(1−h))/2h: error {Math.abs(ec).toExponential(2)}</div>
      </div>
      <figcaption className="viz-caption">
        Both formulas estimate the derivative of sin at 1, computed in ordinary double precision. Moving right, h shrinks:
        at first the error falls, with slope 1 for the forward difference and slope 2 for the central one, until rounding
        error, of size about 10⁻¹⁶/h, takes over and the error climbs again. The best h is a compromise, near 10⁻⁸ for
        the forward difference and near 10⁻⁵ for the central one.
      </figcaption>
    </figure>
  );
}
