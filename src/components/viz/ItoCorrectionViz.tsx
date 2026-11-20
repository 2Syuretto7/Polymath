"use client";

import { useState } from "react";
import { normalDraw, seededRng } from "./seededRng";

const FNS = [
  { name: "f(x) = x²", f: (x: number) => x * x, d: (x: number) => 2 * x, dd: (_x: number) => 2 },
  { name: "f(x) = x³", f: (x: number) => x * x * x, d: (x: number) => 3 * x * x, dd: (x: number) => 6 * x },
  { name: "f(x) = eˣ", f: (x: number) => Math.exp(x), d: (x: number) => Math.exp(x), dd: (x: number) => Math.exp(x) },
  { name: "f(x) = cos x", f: (x: number) => Math.cos(x), d: (x: number) => -Math.sin(x), dd: (x: number) => -Math.cos(x) },
];

/** f(Bₜ) against the ordinary chain rule and against Itô's formula, along one path. */
export function ItoCorrectionViz() {
  const [m, setM] = useState(0);
  const [seed, setSeed] = useState(1);
  const N = 4000, dt = 1 / N, F = FNS[m];
  const r = seededRng(seed * 211 + 3);
  const B = [0], naive = [F.f(0)], ito = [F.f(0)];
  for (let k = 0; k < N; k++) {
    const d = Math.sqrt(dt) * normalDraw(r), b = B[k];
    B.push(b + d);
    naive.push(naive[k] + F.d(b) * d);
    ito.push(ito[k] + F.d(b) * d + 0.5 * F.dd(b) * dt);
  }
  const fB = B.map(F.f);
  const all = [...fB, ...naive, ...ito];
  const hi = Math.max(...all), lo = Math.min(...all), pad = (hi - lo) * 0.08 + 0.05;
  const X0 = 30, W = 460, Y0 = 60, H = 170;
  const x = (k: number) => X0 + (k / N) * W;
  const y = (v: number) => Y0 + ((hi + pad - v) / (hi - lo + 2 * pad)) * H;
  const pl = (a: number[]) => a.filter((_, i) => i % 10 === 0).map((v, i) => `${x(i * 10)},${y(v)}`).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="function">
        {FNS.map((d, i) => <button key={d.name} type="button" aria-pressed={m === i} className={m === i ? "seg is-on" : "seg"} onClick={() => setM(i)}>{d.name}</button>)}
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => setSeed(seed + 1)}>new path</button>
      </div>
      <svg viewBox="0 0 520 240" role="img" aria-label="f of Brownian motion compared with two stochastic sums" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {lo < 0 && hi > 0 && <line x1={X0} y1={y(0)} x2={X0 + W} y2={y(0)} style={{ stroke: "var(--border-strong)" }} />}
        <polyline points={pl(fB)} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 3 }} />
        <polyline points={pl(ito)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.4 }} />
        <polyline points={pl(naive)} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 1.5, strokeDasharray: "5 3" }} />
        <text x={X0 + 6} y={14} style={{ fill: "var(--text)", fontSize: 11 }}>black: f(Bₜ)</text>
        <text x={X0 + 6} y={30} style={{ fill: "var(--accent)", fontSize: 11 }}>violet: f(0) + ∫ f′(B) dB + ½ ∫ f″(B) ds</text>
        <text x={X0 + 6} y={46} style={{ fill: "var(--danger)", fontSize: 11 }}>red dashed: f(0) + ∫ f′(B) dB only</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        At t = 1: f(B₁) = {fB[N].toFixed(3)}; Itô {ito[N].toFixed(3)}; chain rule alone {naive[N].toFixed(3)}.
      </p>
      <figcaption className="viz-caption">
        The ordinary chain rule would say df(B) = f′(B) dB. Along a Brownian path it drifts away from f(B), because
        (dB)² is of size dt, not zero. Adding the correction ½ f″(B) dt, Itô&rsquo;s formula, tracks f(B) exactly up to
        discretisation error.
      </figcaption>
    </figure>
  );
}
