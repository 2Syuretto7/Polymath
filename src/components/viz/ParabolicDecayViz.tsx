"use client";

import { useState } from "react";

/** The heat equation on (0, π) with zero boundary values, solved by sine series, with the energy bound e^(−t)‖g‖. */
const DATA: { label: string; coef: (k: number) => number }[] = [
  { label: "g = sin x", coef: (k) => (k === 1 ? 1 : 0) },
  { label: "g = sin x + sin 4x", coef: (k) => (k === 1 || k === 4 ? 1 : 0) },
  { label: "g = a square pulse", coef: (k) => ((2 / (Math.PI * k)) * (Math.cos((k * Math.PI) / 3) - Math.cos((2 * k * Math.PI) / 3))) * 2 },
];

export function ParabolicDecayViz() {
  const [k, setK] = useState(0);
  const [t10, setT10] = useState(0);
  const t = t10 / 10;
  const K = 60;
  const c = Array.from({ length: K }, (_, i) => DATA[k].coef(i + 1));
  const u = (x: number, s: number) => c.reduce((a, ck, i) => a + ck * Math.exp(-((i + 1) ** 2) * s) * Math.sin((i + 1) * x), 0);
  const norm = (s: number) => Math.sqrt((Math.PI / 2) * c.reduce((a, ck, i) => a + ck * ck * Math.exp(-2 * (i + 1) ** 2 * s), 0));
  const g0 = norm(0);
  const nt = norm(t);
  const xs = Array.from({ length: 181 }, (_, i) => (i * Math.PI) / 180);
  const X = (x: number) => 30 + (x / Math.PI) * 300;
  const Y = (y: number) => 110 - y * 45;
  const TX = (s: number) => 370 + (s / 3) * 150;
  const TY = (r: number) => 170 - r * 140;
  const ts = Array.from({ length: 61 }, (_, i) => (i * 3) / 60);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="initial data">
        {DATA.map((d, i) => (
          <button key={d.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{d.label}</button>
        ))}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <label>t = {t.toFixed(1)} <input type="range" min={0} max={30} step={1} value={t10} onChange={(e) => setT10(Number(e.target.value))} aria-label="t" /></label>
      </div>
      <svg viewBox="0 0 540 190" role="img" aria-label="The solution at time t, and its size against the energy bound" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={Y(0)} x2={X(Math.PI)} y2={Y(0)} style={{ stroke: "var(--border-strong)" }} />
        <polyline points={xs.map((x) => `${X(x)},${Y(u(x, 0))}`).join(" ")} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1.5, strokeDasharray: "4 3" }} />
        <polyline points={xs.map((x) => `${X(x)},${Y(u(x, t))}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 3 }} />
        <text x={X(0)} y={182} style={{ fill: "var(--text-faint)", fontSize: 11 }}>0</text>
        <text x={X(Math.PI)} y={182} textAnchor="end" style={{ fill: "var(--text-faint)", fontSize: 11 }}>π</text>
        <line x1={TX(0)} y1={TY(0)} x2={TX(3)} y2={TY(0)} style={{ stroke: "var(--border-strong)" }} />
        <line x1={TX(0)} y1={TY(0)} x2={TX(0)} y2={TY(1)} style={{ stroke: "var(--border-strong)" }} />
        <polyline points={ts.map((s) => `${TX(s)},${TY(Math.exp(-s))}`).join(" ")} style={{ fill: "none", stroke: "var(--success)", strokeWidth: 2, strokeDasharray: "5 3" }} />
        <polyline points={ts.map((s) => `${TX(s)},${TY(norm(s) / g0)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <circle cx={TX(t)} cy={TY(nt / g0)} r={5} style={{ fill: "var(--accent)" }} />
        <text x={TX(3)} y={TY(0) + 14} textAnchor="end" style={{ fill: "var(--text-faint)", fontSize: 11 }}>t</text>
        <text x={TX(0) + 12} y={TY(1) - 10} style={{ fill: "var(--text-muted)", fontSize: 11 }}>‖u(t)‖ / ‖g‖</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ‖u(t)‖ / ‖g‖ = {(nt / g0).toFixed(3)}, within the energy bound e⁻ᵗ = {Math.exp(-t).toFixed(3)}.
      </p>
      <figcaption className="viz-caption">
        Each sine mode sin kx decays like e to the power −k²t, so rough data, made of high modes, smooths out at once while
        the first mode lingers. The energy estimate, from Poincaré&rsquo;s inequality with constant 1 on (0, π), bounds the
        whole solution by e⁻ᵗ‖g‖, dashed; equality holds only when g is a multiple of sin x.
      </figcaption>
    </figure>
  );
}
