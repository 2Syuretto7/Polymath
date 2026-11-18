"use client";

import { useState } from "react";

type Ex = { key: string; label: string; f: (n: number, x: number) => number; int: (n: number) => number; lim: number; xmax: number; ymax: number; note: string };

const EXAMPLES: Ex[] = [
  {
    key: "mono", label: "rising: min(1/√x, n)", xmax: 1, ymax: 11,
    f: (n, x) => Math.min(1 / Math.sqrt(Math.max(x, 1e-9)), n), int: (n) => 2 - 1 / n, lim: 2,
    note: "The functions increase to 1/√x on (0, 1]. Monotone convergence: the integrals 2 − 1/n increase to 2, the integral of the limit.",
  },
  {
    key: "dom", label: "dominated: xⁿ", xmax: 1, ymax: 1.2,
    f: (n, x) => x ** n, int: (n) => 1 / (n + 1), lim: 0,
    note: "xⁿ → 0 for x < 1 and |xⁿ| ≤ 1, which is integrable on [0, 1]. Dominated convergence: the integrals 1/(n + 1) tend to 0.",
  },
  {
    key: "escape", label: "escaping: bump on [n, n+1]", xmax: 12, ymax: 1.2,
    f: (n, x) => (x >= n && x < n + 1 ? 1 : 0), int: () => 1, lim: 0,
    note: "Each point is eventually passed, so fₙ → 0 everywhere, yet every integral is 1. No integrable function lies above all the bumps.",
  },
  {
    key: "spike", label: "concentrating: n on (0, 1/n)", xmax: 1, ymax: 11,
    f: (n, x) => (x > 0 && x < 1 / n ? n : 0), int: () => 1, lim: 0,
    note: "fₙ → 0 at every point, yet every integral is 1. The only bound above all of them behaves like 1/x near 0, which is not integrable.",
  },
];

/** Pointwise limits and limits of integrals: when they agree, and two ways they fail to. */
export function ConvergenceTrapViz() {
  const [k, setK] = useState(0);
  const [n, setN] = useState(3);
  const E = EXAMPLES[k];
  const X = (x: number) => 40 + (x / E.xmax) * 460, Y = (y: number) => 170 - (Math.min(y, E.ymax) / E.ymax) * 150;
  const pts = Array.from({ length: 601 }, (_, i) => (i / 600) * E.xmax);
  const path = pts.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)} ${Y(E.f(n, x)).toFixed(1)}`).join(" ");
  const area = `M${X(0)} ${Y(0)} ` + pts.map((x) => `L${X(x).toFixed(1)} ${Y(E.f(n, x)).toFixed(1)}`).join(" ") + ` L${X(E.xmax)} ${Y(0)} Z`;
  const ok = E.key === "mono" || E.key === "dom";
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="example">
        {EXAMPLES.map((e, i) => <button key={e.key} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{e.label}</button>)}
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="Graph of the n-th function" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <path d={area} style={{ fill: "var(--accent-soft)", stroke: "none" }} />
        <path d={path} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <line x1={X(0)} y1={Y(0)} x2={X(E.xmax)} y2={Y(0)} style={{ stroke: "var(--text-muted)" }} />
        <line x1={X(0)} y1={Y(0)} x2={X(0)} y2={20} style={{ stroke: "var(--text-muted)" }} />
        <text x={X(0)} y={184} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>0</text>
        <text x={X(E.xmax)} y={184} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{E.xmax}</text>
      </svg>
      <div className="viz-controls">
        <label className="mono" style={{ fontSize: 13 }}>
          n = {n}{" "}
          <input type="range" min={1} max={10} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" />
        </label>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ∫fₙ = {E.int(n).toFixed(4)}. ∫(lim fₙ) = {E.lim}. {ok ? "As n grows, ∫fₙ tends to ∫(lim fₙ)." : "∫fₙ stays at 1 and never approaches 0."}
      </p>
      <p style={{ fontSize: 14, margin: "4px 0" }}>{E.note}</p>
      <figcaption className="viz-caption">
        Shaded: the area under fₙ. Mass can slip away to infinity or pile up on a shrinking set. Monotonicity or an
        integrable bound forbids both, and then the integral of the limit is the limit of the integrals.
      </figcaption>
    </figure>
  );
}
