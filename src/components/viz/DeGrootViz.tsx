"use client";

import { useState } from "react";

export const START = [0.9, 0.7, 0.3, 0.2];
const MODES: { label: string; W: number[][] }[] = [
  { label: "equal weight", W: [0, 1, 2, 3].map(() => [0.25, 0.25, 0.25, 0.25]) },
  { label: "mostly self-trust", W: [0, 1, 2, 3].map((i) => [0, 1, 2, 3].map((j) => (i === j ? 0.7 : 0.1))) },
  { label: "everyone defers to A", W: [[1, 0, 0, 0], [0.5, 0.5, 0, 0], [0.5, 0, 0.5, 0], [0.5, 0, 0, 0.5]] },
  { label: "steadfast", W: [0, 1, 2, 3].map((i) => [0, 1, 2, 3].map((j) => (i === j ? 1 : 0))) },
];
/** Credences after n rounds of each agent replacing their credence by a weighted average of everyone's. */
export function degroot(mode: number, n: number) {
  let c = START.slice();
  for (let k = 0; k < n; k++) c = MODES[mode].W.map((row) => row.reduce((s, w, j) => s + w * c[j], 0));
  return c;
}

/** Repeated averaging among four peers who disagree. */
export function DeGrootViz() {
  const [mode, setMode] = useState(0);
  const [n, setN] = useState(1);
  const hist = Array.from({ length: 11 }, (_, k) => degroot(mode, k));
  const c = hist[n];
  const px = (k: number) => 50 + k * 44, py = (v: number) => 210 - v * 180;
  const names = ["A", "B", "C", "D"];
  const cols = ["var(--accent)", "var(--success)", "var(--text)", "var(--danger)"];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="weights">
        {MODES.map((m, i) => <button key={m.label} type="button" aria-pressed={mode === i} className={mode === i ? "seg is-on" : "seg"} onClick={() => setMode(i)}>{m.label}</button>)}
      </div>
      <div className="viz-controls">
        <label>rounds of revision = {n} <input type="range" min={0} max={10} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="rounds" /></label>
      </div>
      <svg viewBox="0 0 540 240" role="img" aria-label="Credences of four peers over rounds of revision" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={50} y1={210} x2={490} y2={210} style={{ stroke: "var(--border-strong)" }} />
        <line x1={50} y1={30} x2={50} y2={210} style={{ stroke: "var(--border-strong)" }} />
        {[0, 0.5, 1].map((v) => <text key={v} x={44} y={py(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text>)}
        {[0, 5, 10].map((k) => <text key={k} x={px(k)} y={226} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{k}</text>)}
        <text x={270} y={238} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>round</text>
        <line x1={px(n)} y1={30} x2={px(n)} y2={210} style={{ stroke: "var(--grid-line)" }} />
        {START.map((_, a) => (
          <g key={a}>
            <path d={hist.map((h, k) => `${k ? "L" : "M"}${px(k)},${py(h[a]).toFixed(1)}`).join("")} style={{ fill: "none", stroke: cols[a], strokeWidth: 1.8 }} />
            <circle cx={px(n)} cy={py(c[a])} r={4.5} style={{ fill: cols[a] }} />
            <text x={px(10) + 10} y={py(hist[10][a]) + 4 + (a - 1.5) * 9} style={{ fill: cols[a], fontSize: 11 }}>{names[a]}</text>
          </g>
        ))}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        After {n} round{n === 1 ? "" : "s"}: {c.map((v, a) => `${names[a]} ${v.toFixed(3)}`).join(", ")}.
      </p>
      <figcaption className="viz-caption">
        Four peers start with credences 0.9, 0.7, 0.3 and 0.2 in the same claim. In each round every agent replaces their
        credence with a weighted average of all four. Equal weight reaches the average at once. Any weighting in which
        each agent keeps some trust in others converges to a consensus, but which consensus depends on the weights;
        steadfast agents never move.
      </figcaption>
    </figure>
  );
}
