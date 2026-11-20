"use client";

import { useState } from "react";

const WAYS = [
  { key: "side", label: "uniform in side length (0 to 2 cm)", P: (t: number) => t / 2, col: "var(--accent)" },
  { key: "area", label: "uniform in face area (0 to 4 cm²)", P: (t: number) => (t * t) / 4, col: "var(--success)" },
  { key: "vol", label: "uniform in volume (0 to 8 cm³)", P: (t: number) => (t * t * t) / 8, col: "var(--danger)" },
];

/** Van Fraassen's cube factory: the principle of indifference gives different answers for different parameters. */
export function CubeFactoryViz() {
  const [t, setT] = useState(1);
  const px = (s: number) => 50 + (s / 2) * 300, py = (p: number) => 220 - p * 180;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>side at most t = {t.toFixed(2)} cm <input type="range" min={0} max={2} step={0.05} value={t} onChange={(e) => setT(Number(e.target.value))} aria-label="t" /></label>
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="Probability that the side is at most t under three uniform priors" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={50} y1={220} x2={350} y2={220} style={{ stroke: "var(--border-strong)" }} />
        <line x1={50} y1={40} x2={50} y2={220} style={{ stroke: "var(--border-strong)" }} />
        {[0, 0.5, 1].map((p) => <text key={p} x={44} y={py(p) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{p}</text>)}
        {[0, 1, 2].map((s) => <text key={s} x={px(s)} y={236} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{s} cm</text>)}
        <line x1={px(t)} y1={40} x2={px(t)} y2={220} style={{ stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
        {WAYS.map((w, i) => (
          <g key={w.key}>
            <path d={Array.from({ length: 101 }, (_, k) => (2 * k) / 100).map((s, k) => `${k ? "L" : "M"}${px(s).toFixed(1)},${py(w.P(s)).toFixed(1)}`).join("")} style={{ fill: "none", stroke: w.col, strokeWidth: 2 }} />
            <circle cx={px(t)} cy={py(w.P(t))} r={5} style={{ fill: w.col }} />
            <rect x={370} y={70 + i * 40} width={14} height={14} style={{ fill: w.col }} />
            <text x={392} y={81 + i * 40} style={{ fill: "var(--text)", fontSize: 11 }}>{w.label.split(" (")[0]}</text>
            <text x={392} y={95 + i * 40} style={{ fill: "var(--text-muted)", fontSize: 11 }}>P(side ≤ t) = {w.P(t).toFixed(3)}</text>
          </g>
        ))}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Three equally &lsquo;indifferent&rsquo; priors give P(side ≤ {t.toFixed(2)}) = {WAYS.map((w) => w.P(t).toFixed(3)).join(", ")}.
      </p>
      <figcaption className="viz-caption">
        A factory makes cubes with side between 0 and 2 cm, and you know nothing more. The principle of indifference says
        to spread credence evenly. But evenly over side length, face area or volume? Each is a natural choice, and they
        disagree. Objective Bayesians must say which parameter is privileged; subjective Bayesians deny that rationality
        fixes priors at all.
      </figcaption>
    </figure>
  );
}
