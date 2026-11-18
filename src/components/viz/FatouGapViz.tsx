"use client";

import { useState } from "react";

type Ex = { key: string; label: string; f: (n: number, x: number) => number; ymax: number; liminfInt: number; note: string };

const EXAMPLES: Ex[] = [
  {
    key: "alt", label: "alternating halves", ymax: 1.3,
    f: (n, x) => (n % 2 === 1 ? (x < 0.5 ? 1 : 0) : x >= 0.5 ? 1 : 0), liminfInt: 0,
    note: "Every point is switched off infinitely often, so lim inf fₙ = 0, while every ∫fₙ = 1/2. Fatou’s inequality is strict: 0 < 1/2.",
  },
  {
    key: "spike", label: "spikes n on (0, 1/n)", ymax: 11,
    f: (n, x) => (x > 0 && x < 1 / n ? n : 0), liminfInt: 0,
    note: "lim inf fₙ = 0 everywhere, while each ∫fₙ = 1. Again 0 < 1: the mass concentrates and vanishes in the limit.",
  },
  {
    key: "eq", label: "x(1 + 1/n)", ymax: 2.3,
    f: (n, x) => x * (1 + 1 / n), liminfInt: 0.5,
    note: "Here fₙ decreases to x and everything is bounded, so equality holds: ∫ lim inf fₙ = 1/2 = lim ∫fₙ.",
  },
];

const ints = (E: Ex, n: number) => {
  let s = 0;
  for (let i = 0; i < 4000; i++) s += E.f(n, (i + 0.5) / 4000);
  return s / 4000;
};

/** Fatou’s lemma: the tail infimum gₙ = inf over m ≥ n of fₘ sits below fₙ and rises to lim inf fₙ. */
export function FatouGapViz() {
  const [k, setK] = useState(0);
  const [n, setN] = useState(1);
  const E = EXAMPLES[k];
  const g = (x: number) => Math.min(...Array.from({ length: 1000 }, (_, j) => E.f(n + j, x)));
  const X = (x: number) => 40 + x * 460, Y = (y: number) => 170 - (Math.min(y, E.ymax) / E.ymax) * 150;
  const xs = Array.from({ length: 401 }, (_, i) => i / 400);
  const line = (h: (x: number) => number) => xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)} ${Y(h(x)).toFixed(1)}`).join(" ");
  const gArea = `M${X(0)} ${Y(0)} ` + xs.map((x) => `L${X(x).toFixed(1)} ${Y(g(x)).toFixed(1)}`).join(" ") + ` L${X(1)} ${Y(0)} Z`;
  const fn = ints(E, n);
  const gn = xs.reduce((s, x, i) => s + (i ? g(x) : 0), 0) / 400;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="example">
        {EXAMPLES.map((e, i) => <button key={e.key} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{e.label}</button>)}
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="fₙ and its tail infimum" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <path d={gArea} style={{ fill: "var(--accent-soft)", stroke: "none" }} />
        <path d={line((x) => E.f(n, x))} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <path d={line(g)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5, strokeDasharray: "6 4" }} />
        <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(0)} style={{ stroke: "var(--text-muted)" }} />
        <text x={X(0)} y={184} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>0</text>
        <text x={X(1)} y={184} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>1</text>
      </svg>
      <div className="viz-controls">
        <label className="mono" style={{ fontSize: 13 }}>
          n = {n}{" "}
          <input type="range" min={1} max={10} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" />
        </label>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ∫fₙ = {fn.toFixed(3)}. ∫gₙ = {gn.toFixed(3)}. ∫ lim inf fₙ = {E.liminfInt}.
      </p>
      <p style={{ fontSize: 14, margin: "4px 0" }}>{E.note}</p>
      <figcaption className="viz-caption">
        Solid: fₙ. Dashed and shaded: gₙ, the infimum of fₙ, fₙ₊₁, fₙ₊₂, and so on. The gₙ increase to lim inf fₙ, so monotone
        convergence applies to them, and gₙ ≤ fₙ gives Fatou&rsquo;s lemma: ∫ lim inf fₙ ≤ lim inf ∫fₙ.
      </figcaption>
    </figure>
  );
}
