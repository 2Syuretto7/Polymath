"use client";

import { useState } from "react";

const DIST = [
  { name: "fair ±1 coin", phi: (t: number) => Math.cos(t), note: "φ(t) = cos t" },
  { name: "uniform on [−√3, √3]", phi: (t: number) => (Math.abs(t) < 1e-9 ? 1 : Math.sin(Math.sqrt(3) * t) / (Math.sqrt(3) * t)), note: "φ(t) = sin(√3 t)/(√3 t)" },
  { name: "standard normal", phi: (t: number) => Math.exp(-t * t / 2), note: "φ(t) = exp(−t²/2)" },
];

/** Characteristic functions of mean-zero, variance-one laws, and of standardised sums: φ(t/√n)ⁿ tends to exp(−t²/2). */
export function CharFnViz() {
  const [k, setK] = useState(0);
  const [n, setN] = useState(1);
  const D = DIST[k];
  const X0 = 30, W = 460, Y0 = 20, H = 160, T = 8;
  const x = (t: number) => X0 + ((t + T) / (2 * T)) * W;
  const y = (v: number) => Y0 + H / 2 - v * (H / 2) * 0.9;
  const ts = Array.from({ length: 401 }, (_, i) => -T + (2 * T * i) / 400);
  const f = (t: number) => Math.pow(D.phi(t / Math.sqrt(n)), n);
  const gap = Math.max(...ts.map((t) => Math.abs(f(t) - Math.exp(-t * t / 2))));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="distribution">
        {DIST.map((d, i) => <button key={d.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{d.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>n = {n} <input type="range" min={1} max={60} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Characteristic function of the standardised sum" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0} y1={y(0)} x2={X0 + W} y2={y(0)} style={{ stroke: "var(--border-strong)" }} />
        <line x1={x(0)} y1={Y0} x2={x(0)} y2={Y0 + H} style={{ stroke: "var(--border-strong)" }} />
        <polyline points={ts.map((t) => `${x(t)},${y(Math.exp(-t * t / 2))}`).join(" ")} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2, strokeDasharray: "5 4" }} />
        <polyline points={ts.map((t) => `${x(t)},${y(f(t))}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        {[-8, -4, 0, 4, 8].map((t) => <text key={t} x={x(t)} y={Y0 + H + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{t < 0 ? `−${-t}` : t}</text>)}
        <text x={x(0) + 4} y={y(1) - 2} style={{ fill: "var(--text-muted)", fontSize: 10 }}>1</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {D.note}. Solid: φ(t/√n)ⁿ, the characteristic function of Sₙ/√n. Largest gap from exp(−t²/2) on the window: {gap.toFixed(3)}.
      </p>
      <figcaption className="viz-caption">
        Each law here has mean 0 and variance 1. The characteristic function of a sum of independent variables is the
        product of theirs, so Sₙ/√n has φ(t/√n)ⁿ. As n grows it tends to the dashed curve exp(−t²/2), the characteristic
        function of the standard normal. For the coin, it stays periodic, but its period grows like √n, so the bumps leave
        any fixed window.
      </figcaption>
    </figure>
  );
}
