"use client";

import { useMemo, useState } from "react";
import { seededRng } from "./seededRng";

const PATHS = 12;

/** Gambler's ruin: a random walk from k stopped at 0 or N, with the exact chance of reaching N. */
export function GamblerRuinViz() {
  const [k, setK] = useState(10);
  const [Nn, setNn] = useState(20);
  const [p, setP] = useState(0.5);
  const [seed, setSeed] = useState(9);
  const kk = Math.min(k, Nn - 1);
  const walks = useMemo(() => Array.from({ length: PATHS }, (_, j) => {
    const r = seededRng(seed * 31 + j);
    const w = [kk];
    let x = kk;
    while (x > 0 && x < Nn && w.length < 2000) { x += r() < p ? 1 : -1; w.push(x); }
    return w;
  }), [kk, Nn, p, seed]);
  const q = 1 - p;
  const win = Math.abs(p - 0.5) < 1e-9 ? kk / Nn : (1 - (q / p) ** kk) / (1 - (q / p) ** Nn);
  const wins = walks.filter((w) => w[w.length - 1] === Nn).length;
  const T = Math.max(...walks.map((w) => w.length), 50);
  const W = 520, H = 220, pad = 30;
  const X = (t: number) => pad + (t / T) * (W - 2 * pad);
  const Y = (x: number) => H - 20 - (x / Nn) * (H - 40);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>starting money k: <span className="mono">{kk}</span></span>
          <input type="range" min={1} max={39} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} /></label>
        <label><span>target N: <span className="mono">{Nn}</span></span>
          <input type="range" min={5} max={40} step={1} value={Nn} onChange={(e) => setNn(Number(e.target.value))} /></label>
        <label><span>chance of winning each bet p: <span className="mono">{p.toFixed(2)}</span></span>
          <input type="range" min={0.4} max={0.6} step={0.01} value={p} onChange={(e) => setP(Number(e.target.value))} /></label>
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => setSeed(1 + Math.floor(Math.random() * 1e6))}>Play {PATHS} new games</button>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Random walks stopped at zero or at the target" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <line x1={pad} y1={Y(0)} x2={W - pad} y2={Y(0)} style={{ stroke: "var(--danger)", strokeOpacity: 0.6 }} />
        <line x1={pad} y1={Y(Nn)} x2={W - pad} y2={Y(Nn)} style={{ stroke: "var(--accent)", strokeOpacity: 0.8 }} />
        {walks.map((w, j) => <path key={j} d={w.map((x, t) => `${t ? "L" : "M"}${X(t).toFixed(1)},${Y(x).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: w[w.length - 1] === Nn ? "var(--accent)" : "var(--text-faint)", strokeWidth: 1.3 }} />)}
        <text x={pad - 6} y={Y(Nn) + 4} textAnchor="end" style={{ fill: "var(--text-faint)", fontSize: 11 }}>N</text>
        <text x={pad - 6} y={Y(0) + 4} textAnchor="end" style={{ fill: "var(--text-faint)", fontSize: 11 }}>0</text>
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        exact P(reach N before 0) = {win.toFixed(4)}; games won here: {wins} of {PATHS}
      </p>
      <figcaption className="viz-caption">
        A gambler with k rupees bets one rupee at a time, winning with probability p, until they reach N or go broke. For a fair game the chance of reaching N is k/N. A slight disadvantage, such as p = 0.47, makes ruin far more likely when N is large, which is why casinos need only a small edge.
      </figcaption>
    </figure>
  );
}
