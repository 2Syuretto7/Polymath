"use client";

import { useState } from "react";

/** Two proofs that 1 + 2 + … + n = n(n + 1)/2: one checks, the other shows why. */
export function GaussPairViz() {
  const [n, setN] = useState(6);
  const [mode, setMode] = useState<"pair" | "ind">("pair");
  const S = 22, ox = 40, oy = 16;
  const sum = (n * (n + 1)) / 2;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="proof">
        <button type="button" aria-pressed={mode === "pair"} className={mode === "pair" ? "seg is-on" : "seg"} onClick={() => setMode("pair")}>proof by pairing</button>
        <button type="button" aria-pressed={mode === "ind"} className={mode === "ind" ? "seg is-on" : "seg"} onClick={() => setMode("ind")}>proof by induction</button>
      </div>
      <div className="viz-controls">
        <label>n = {n} <input type="range" min={1} max={8} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
      </div>
      {mode === "pair" ? (
        <svg viewBox={`0 0 520 ${Math.max(80, oy + n * S + 12)}`} role="img" aria-label="Two staircases of dots forming a rectangle" style={{ width: "100%", display: "block" }}>
          {Array.from({ length: n }, (_, r) => Array.from({ length: n + 1 }, (_, c) => {
            const mine = c <= r;
            return <circle key={`${r}-${c}`} cx={ox + c * S} cy={oy + r * S + 8} r={8} style={{ fill: mine ? "var(--accent)" : "var(--accent-soft)", stroke: "var(--accent)" }} />;
          }))}
          <text x={ox + (n + 1) * S + 16} y={oy + 20} style={{ fill: "var(--text)", fontSize: 12 }}>dark: 1 + 2 + … + {n}</text>
          <text x={ox + (n + 1) * S + 16} y={oy + 40} style={{ fill: "var(--text)", fontSize: 12 }}>light: the same staircase, turned round</text>
          <text x={ox + (n + 1) * S + 16} y={oy + 60} style={{ fill: "var(--text)", fontSize: 12 }}>together: {n} × {n + 1} = {n * (n + 1)} dots</text>
        </svg>
      ) : (
        <ol className="mono" style={{ fontSize: 13, paddingLeft: 22 }}>
          <li>Base: 1 = 1 · 2/2.</li>
          {Array.from({ length: n - 1 }, (_, i) => i + 1).map((k) => (
            <li key={k}>If 1 + … + {k} = {(k * (k + 1)) / 2}, then adding {k + 1} gives {(k * (k + 1)) / 2} + {k + 1} = {((k + 1) * (k + 2)) / 2} = {k + 1} · {k + 2}/2.</li>
          ))}
        </ol>
      )}
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>1 + 2 + … + {n} = {n} · {n + 1}/2 = {sum}.</p>
      <figcaption className="viz-caption">
        Induction confirms the formula one step at a time, but the formula had to be known in advance. Pairing shows where
        it comes from: two staircases make a rectangle, so the sum is half of n(n + 1). Many mathematicians feel the second
        proof explains and the first only verifies.
      </figcaption>
    </figure>
  );
}
