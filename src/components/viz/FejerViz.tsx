"use client";

import { useState } from "react";

const FS = [
  { name: "triangle wave", f: (t: number) => { const u = ((t / (2 * Math.PI)) % 1 + 1) % 1; return 1 - 4 * Math.abs(u - 0.5); } },
  { name: "|sin t|", f: (t: number) => Math.abs(Math.sin(t)) * 2 - 1 },
  { name: "clipped cosine", f: (t: number) => 2 * Math.max(0, Math.cos(t)) - 1 },
];
const M = 512;

/** The Fejér means of the Fourier series: trigonometric polynomials converging uniformly to any continuous periodic function. */
export function FejerViz() {
  const [fi, setFi] = useState(0);
  const [n, setN] = useState(4);
  const F = FS[fi].f;
  const ts = Array.from({ length: M }, (_, i) => (2 * Math.PI * i) / M);
  const vals = ts.map(F);
  const coef = (k: number) => {
    let a = 0, b = 0;
    for (let i = 0; i < M; i++) { a += vals[i] * Math.cos(k * ts[i]); b += vals[i] * Math.sin(k * ts[i]); }
    return [(2 * a) / M, (2 * b) / M];
  };
  const cs = Array.from({ length: n + 1 }, (_, k) => coef(k));
  // Fejér mean: Fourier terms weighted by (1 − k/(n + 1))
  const fej = (t: number) => cs[0][0] / 2 + cs.slice(1).reduce((s, [a, b], j) => s + (1 - (j + 1) / (n + 1)) * (a * Math.cos((j + 1) * t) + b * Math.sin((j + 1) * t)), 0);
  const err = Math.max(...ts.map((t, i) => Math.abs(fej(t) - vals[i])));
  const W = 560, H = 200, pl = 10;
  const X = (t: number) => pl + (t / (2 * Math.PI)) * (W - 2 * pl), Y = (y: number) => H / 2 - y * (H / 2 - 14);
  const path = (fn: (t: number, i: number) => number) => ts.map((t, i) => `${i ? "L" : "M"}${X(t).toFixed(1)},${Y(fn(t, i)).toFixed(1)}`).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {FS.map((q, i) => <button key={q.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>{q.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>degree n: <span className="mono">{n}</span></span><input type="range" min={0} max={40} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A continuous periodic function and its trigonometric approximation" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={pl} y1={Y(0)} x2={W - pl} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <path d={path((_t, i) => vals[i])} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <path d={path((t) => fej(t))} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>sup error ‖f − σₙ‖∞ = {err.toFixed(4)}</p>
      <figcaption className="viz-caption">
        The dark curve is f, on one period; the other is the Fejér mean σₙ, the average of the first n + 1 partial sums of the
        Fourier series. It is a trigonometric polynomial of degree n, and the sup error tends to 0 as n grows. Trigonometric
        polynomials form an algebra that separates points of the circle, so Stone–Weierstrass predicts exactly this.
      </figcaption>
    </figure>
  );
}
