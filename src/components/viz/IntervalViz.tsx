"use client";

import { useState } from "react";
import { Arrow } from "./Plot";

const X0 = 60, X1 = 560, YT = 56, YB = 176;
const X = (t: number) => X0 + t * (X1 - X0);
const MODES = ["f: [0, 1] → (0, 1)", "g: (0, 1) → [0, 1]", "A bijection h"] as const;
const frac = (n: number) => (n === 0 ? "0" : n === 1 ? "1" : `1/${n}`);

/** Two injections between [0, 1] and (0, 1), and the bijection that Schröder–Bernstein promises. */
export function IntervalViz() {
  const [mode, setMode] = useState(2);
  const [k, setK] = useState(5);
  // special points 0, 1, 1/2, 1/3, ... 1/k and where h sends them
  const special: [number, number, string, string][] = [[0, 0.5, "0", "1/2"], [1, 1 / 3, "1", "1/3"]];
  for (let n = 2; n <= k; n++) special.push([1 / n, 1 / (n + 2), frac(n), frac(n + 2)]);
  const samples = [0, 0.2, 0.4, 0.6, 0.8, 1];
  const top = mode === 1 ? "(0, 1)" : "[0, 1]", bottom = mode === 1 ? "[0, 1]" : "(0, 1)";
  const topOpen = mode === 1, botOpen = mode !== 1;

  const end = (x: number, y: number, open: boolean) => <circle cx={x} cy={y} r={5} style={{ fill: open ? "var(--surface)" : "var(--text)", stroke: "var(--text)", strokeWidth: 1.5 }} />;

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }}>
        {MODES.map((m, i) => (
          <button key={m} type="button" className={i === mode ? "btn btn-primary" : "btn"} aria-pressed={i === mode} onClick={() => setMode(i)}>{m}</button>
        ))}
      </div>
      <svg viewBox="0 0 620 220" role="img" aria-label={`${MODES[mode]}, drawn as arrows between two intervals`}>
        <line x1={X0} x2={X1} y1={YT} y2={YT} className="viz-axis" />
        <line x1={X0} x2={X1} y1={YB} y2={YB} className="viz-axis" />
        <text x={X1 + 14} y={YT + 4} className="viz-label">{top}</text>
        <text x={X1 + 14} y={YB + 4} className="viz-label">{bottom}</text>
        {mode === 0 && samples.map((t) => <Arrow key={t} x1={X(t)} y1={YT + 8} x2={X(0.25 + t / 2)} y2={YB - 8} head={7} />)}
        {mode === 1 && samples.slice(1, -1).map((t) => <Arrow key={t} x1={X(t)} y1={YT + 8} x2={X(t)} y2={YB - 8} head={7} />)}
        {mode === 2 && (
          <>
            {[0.6, 0.75, 0.9].map((t) => <Arrow key={t} x1={X(t)} y1={YT + 8} x2={X(t)} y2={YB - 8} className="plot-arrow is-muted" head={7} />)}
            {special.map(([a, b]) => <Arrow key={a} x1={X(a)} y1={YT + 8} x2={X(b)} y2={YB - 8} className="plot-arrow is-hot" head={7} />)}
            {special.slice(0, 4).map(([a, , la]) => <text key={`t${a}`} x={X(a)} y={YT - 12} textAnchor="middle" className="plot-tick">{la}</text>)}
            {special.slice(0, 4).map(([a, b, , lb]) => <text key={`b${a}`} x={X(b)} y={YB + 22} textAnchor="middle" className="plot-tick">{lb}</text>)}
          </>
        )}
        {mode !== 2 && [0, 0.5, 1].map((t) => <text key={`t${t}`} x={X(t)} y={YT - 12} textAnchor="middle" className="plot-tick">{t}</text>)}
        {mode !== 2 && [0, 0.5, 1].map((t) => <text key={`b${t}`} x={X(t)} y={YB + 22} textAnchor="middle" className="plot-tick">{t}</text>)}
        {end(X0, YT, topOpen)}{end(X1, YT, topOpen)}{end(X0, YB, botOpen)}{end(X1, YB, botOpen)}
      </svg>
      {mode === 2 && (
        <div className="viz-controls">
          <span className="viz-stepper"><span className="viz-stepper-label">Shifted points shown</span>
            <button type="button" className="btn" onClick={() => setK(Math.max(2, k - 1))} disabled={k <= 2} aria-label="Show fewer">−</button>
            <span className="mono viz-stepper-value">{k + 1}</span>
            <button type="button" className="btn" onClick={() => setK(Math.min(9, k + 1))} disabled={k >= 9} aria-label="Show more">+</button>
          </span>
        </div>
      )}
      <figcaption className="viz-caption" aria-live="polite">
        {mode === 0 && <>f(x) = 1/4 + x/2 squeezes the closed interval into [1/4, 3/4], well inside the open one. Different points go to different points: f is injective.</>}
        {mode === 1 && <>g(x) = x simply includes the open interval in the closed one. It is injective, though it misses 0 and 1.</>}
        {mode === 2 && <>h sends 0 to 1/2, 1 to 1/3, and each 1/n to 1/(n + 2); every other point stays put (grey). Like guests in a full hotel moving two rooms along, the red points shift to make room for the two endpoints, and h is a bijection from [0, 1] onto (0, 1).</>}
      </figcaption>
    </figure>
  );
}
