"use client";

import { useState } from "react";

function rng(seed: number) {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

/** A fair game stays fair: flat bets and the doubling strategy both have mean fortune 0 after any fixed number of rounds. */
export function MartingaleBetViz() {
  const [mode, setMode] = useState(1);
  const [n, setN] = useState(6);
  const r = rng(5);
  const paths: number[][] = [];
  const M = 4000;
  let total = 0, wins = 0, worst = 0;
  for (let j = 0; j < M; j++) {
    let x = 0, bet = 1, done = false;
    const path = [0];
    for (let k = 0; k < n; k++) {
      if (!done) {
        const up = r() < 0.5;
        x += up ? bet : -bet;
        if (mode === 1) { if (up) done = true; else bet *= 2; }
      }
      path.push(x);
    }
    total += x; if (x > 0) wins++; worst = Math.min(worst, x);
    if (j < 10) paths.push(path);
  }
  const hi = mode === 1 ? 4 : 10;
  const lo2 = mode === 1 ? -(2 ** n) : -n;
  const X0 = 40, W = 450, Y0 = 12, H = 160;
  const x = (k: number) => X0 + (k / n) * W;
  const y = (v: number) => Y0 + H - ((v - lo2) / (Math.max(hi, n) - lo2)) * H;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="strategy">
        {["bet 1 every round", "double after each loss"].map((m, i) => <button key={m} type="button" aria-pressed={mode === i} className={mode === i ? "seg is-on" : "seg"} onClick={() => setMode(i)}>{m}</button>)}
      </div>
      <div className="viz-controls">
        <label>rounds n = {n} <input type="range" min={1} max={10} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="rounds" /></label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Sample paths of the gambler's fortune" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0} y1={y(0)} x2={X0 + W} y2={y(0)} style={{ stroke: "var(--border-strong)" }} />
        <text x={X0 - 6} y={y(0) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>0</text>
        <text x={X0 - 6} y={y(lo2) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>−{-lo2}</text>
        {paths.map((p, i) => <polyline key={i} points={p.map((v, k) => `${x(k)},${y(v)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.5, opacity: 0.6 }} />)}
        <text x={X0 + W} y={Y0 + H + 16} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>round {n}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Over 4000 players: average fortune {(total / M).toFixed(2)}; ahead {(100 * wins / M).toFixed(1)}%; worst {worst}.
        {mode === 1 ? ` Exactly: +1 with probability ${(1 - 2 ** -n).toFixed(4)}, −${2 ** n - 1} with probability ${(2 ** -n).toFixed(4)}.` : ""}
      </p>
      <figcaption className="viz-caption">
        Each round a fair coin decides whether you win or lose your stake. The doubling strategy stops at the first win, so
        almost every player ends one ahead, but the rare losers lose 2ⁿ − 1. Whatever stakes you choose from past
        results, your fortune is a martingale and its expectation after n rounds is still 0.
      </figcaption>
    </figure>
  );
}
