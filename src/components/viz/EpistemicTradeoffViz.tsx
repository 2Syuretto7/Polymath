"use client";

import { useState } from "react";

/** Total Brier inaccuracy, (1 − credence in the truth)² summed, for the honest and the trade-off policy. */
export const honest = (k: number) => k * 0.25;
export const trade = (k: number, c: number) => 1 + k * (1 - c) ** 2;

/** Berker's worry: accepting one falsehood buys accuracy elsewhere. */
export function EpistemicTradeoffViz() {
  const [k, setK] = useState(3);
  const [c, setC] = useState(0.9);
  const H = honest(k), T = trade(k, c);
  const better = T < H;
  const max = Math.max(H, T, 1);
  const bar = (v: number) => (v / max) * 360;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>other questions k = {k} <input type="range" min={0} max={20} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} aria-label="k" /></label>
        <label>credence in their answers after the grant = {c.toFixed(2)} <input type="range" min={0.5} max={1} step={0.05} value={c} onChange={(e) => setC(Number(e.target.value))} aria-label="credence" /></label>
      </div>
      <svg viewBox="0 0 540 150" role="img" aria-label="Total inaccuracy of two policies" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={10} y={40} style={{ fill: "var(--text)", fontSize: 11 }}>honest</text>
        <rect x={150} y={28} width={bar(H)} height={18} rx={3} style={{ fill: better ? "var(--text-faint)" : "var(--success)" }} />
        <text x={156 + bar(H)} y={41} style={{ fill: "var(--text)", fontSize: 11 }}>{H.toFixed(2)}</text>
        <text x={10} y={90} style={{ fill: "var(--text)", fontSize: 11 }}>believe the falsehood</text>
        <rect x={150} y={78} width={bar(T)} height={18} rx={3} style={{ fill: better ? "var(--danger)" : "var(--text-faint)" }} />
        <text x={156 + bar(T)} y={91} style={{ fill: "var(--text)", fontSize: 11 }}>{T.toFixed(2)}</text>
        <text x={10} y={130} style={{ fill: "var(--text-muted)", fontSize: 10 }}>total inaccuracy: shorter is better</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {better ? "Believing the falsehood leaves the agent more accurate overall." : "The honest policy is more accurate overall."}
      </p>
      <figcaption className="viz-caption">
        A scientist is offered a grant on condition that they believe a falsehood. Honestly they stay at credence 0.5 on k
        other questions; with the grant, they would research those questions and become confident of the truth. The
        falsehood costs inaccuracy 1, but enough gains elsewhere outweigh it. A consequentialist epistemology seems to
        recommend the belief; intuition says it would not be justified.
      </figcaption>
    </figure>
  );
}
