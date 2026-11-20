"use client";

import { useState } from "react";

/** Duplicator wins the k-round Ehrenfeucht-Fraïssé game on finite linear orders of lengths m and n exactly when m = n or both are at least 2ᵏ − 1. */
export function duplicatorWins(m: number, n: number, k: number) {
  const t = 2 ** k - 1;
  return m === n || (m >= t && n >= t);
}

export function EFGameViz() {
  const [m, setM] = useState(7);
  const [n, setN] = useState(8);
  const [k, setK] = useState(3);
  const win = duplicatorWins(m, n, k);
  const t = 2 ** k - 1;
  const row = (len: number, y: number, col: string) =>
    Array.from({ length: len }, (_, i) => <circle key={i} cx={30 + i * 32} cy={y} r={9} style={{ fill: col }} />);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>m = {m} <input type="range" min={1} max={15} step={1} value={m} onChange={(e) => setM(Number(e.target.value))} aria-label="m" /></label>
        <label>n = {n} <input type="range" min={1} max={15} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
        <label>rounds k = {k} <input type="range" min={1} max={4} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} aria-label="k" /></label>
      </div>
      <svg viewBox="0 0 540 150" role="img" aria-label="Two finite linear orders of lengths m and n" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={14} y={20} style={{ fill: "var(--text-muted)", fontSize: 11 }}>a linear order with {m} points</text>
        {row(m, 40, "var(--accent)")}
        <text x={14} y={80} style={{ fill: "var(--text-muted)", fontSize: 11 }}>a linear order with {n} points</text>
        {row(n, 100, "var(--success)")}
        <text x={14} y={138} style={{ fill: win ? "var(--success)" : "var(--danger)", fontSize: 13, fontWeight: 700 }}>
          {win ? "Duplicator wins: no sentence of quantifier depth " + k + " tells them apart" : "Spoiler wins: some sentence of quantifier depth " + k + " tells them apart"}
        </text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        k = {k}: threshold 2ᵏ − 1 = {t}. {m === n ? "The orders are isomorphic." : win ? `Both have at least ${t} points.` : `${Math.min(m, n)} < ${t}, so Spoiler can exploit the shorter order.`}
      </p>
      <figcaption className="viz-caption">
        In each round Spoiler picks a point in either order and Duplicator answers in the other, trying to keep the chosen
        points in the same order. Duplicator survives k rounds exactly when the two structures satisfy the same sentences of
        quantifier depth k. The integers and two copies of the integers placed one after the other satisfy the same
        sentences of every depth, without being isomorphic.
      </figcaption>
    </figure>
  );
}
