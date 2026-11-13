"use client";

import { useState } from "react";

type Kind = "box" | "rough" | "triangle";

const N = 200;
const coef = (k: Kind, n: number): number => {
  if (k === "box") return (2 / (n * Math.PI)) * (Math.cos(0.3 * n * Math.PI) - Math.cos(0.7 * n * Math.PI));
  if (k === "triangle") return (8 * Math.sin((n * Math.PI) / 2)) / (n * n * Math.PI * Math.PI);
  return n === 1 ? 1 : n === 15 ? 0.4 : 0;
};
const phi = (k: Kind, x: number): number => {
  if (k === "box") return x > 0.3 && x < 0.7 ? 1 : 0;
  if (k === "triangle") return x <= 0.5 ? 2 * x : 2 * (1 - x);
  return Math.sin(Math.PI * x) + 0.4 * Math.sin(15 * Math.PI * x);
};
const LABEL: Record<Kind, string> = { box: "a block of heat", rough: "a rough profile", triangle: "a tent" };

/** The heat equation on [0, 1] with ends held at 0: rough initial data become smooth at once and then decay. */
export function HeatSmoothViz() {
  const [kind, setKind] = useState<Kind>("box");
  const [t, setT] = useState(0.002);
  const xs = Array.from({ length: 401 }, (_, i) => i / 400);
  const u = (x: number) => {
    if (t === 0) return phi(kind, x);
    let s = 0;
    for (let n = 1; n <= N; n++) {
      const b = coef(kind, n);
      if (b !== 0) s += b * Math.exp(-n * n * Math.PI * Math.PI * t) * Math.sin(n * Math.PI * x);
    }
    return s;
  };
  const vals = xs.map(u);
  const max = Math.max(...vals);
  const heat = vals.reduce((a, v, i) => a + (i === 0 || i === 400 ? v / 2 : v), 0) / 400;
  const X = (x: number) => 30 + x * 460, Y = (v: number) => 180 - v * 120;
  const path = (f: (x: number) => number) => xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(f(x)).toFixed(1)}`).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Initial temperature">
        {(["box", "rough", "triangle"] as Kind[]).map((k) => (
          <button key={k} type="button" aria-pressed={kind === k} className={kind === k ? "seg is-on" : "seg"} onClick={() => setKind(k)}>{LABEL[k]}</button>
        ))}
      </div>
      <div className="viz-sliders">
        <label><span>time t: <span className="mono">{t.toFixed(3)}</span></span>
          <input type="range" min={0} max={0.2} step={0.001} value={t} onChange={(e) => setT(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 210" role="img" aria-label="Temperature along a rod as time passes" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <path d={path((x) => phi(kind, x))} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "4 3" }} />
        <path d={vals.map((v, i) => `${i ? "L" : "M"}${X(xs[i]).toFixed(1)},${Y(v).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.4 }} />
        <text x={X(0)} y={200} style={{ fill: "var(--text-muted)", fontSize: 11 }}>rod from x = 0 to x = 1; both ends held at temperature 0; dashed: the initial temperature</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>hottest point: {max.toFixed(4)}</div>
        <div>total heat ∫u dx: {heat.toFixed(4)}</div>
        <div style={{ fontWeight: 700 }}>{t === 0 ? "at t = 0 the profile may have corners and jumps" : "for every t > 0 the profile is infinitely smooth"}</div>
      </div>
      <figcaption className="viz-caption">
        The solution of uₜ = uₓₓ is Σ bₙ exp(−n²π²t) sin(nπx), where bₙ are the sine coefficients of the initial temperature.
        Mode n decays at rate n²π², so high frequencies, which make jumps and wiggles, vanish almost at once: the rough
        profile loses its ripples long before the broad hump has cooled. Heat leaks out through the cold ends, so the total
        heat falls.
      </figcaption>
    </figure>
  );
}
