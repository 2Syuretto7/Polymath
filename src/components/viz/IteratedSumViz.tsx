"use client";

import { useState } from "react";

const N = 7;
type Kind = "bad" | "good";
/** Entry a(m, n) of each double array; rows m, columns n, from 0. */
export const entry = (kind: Kind, m: number, n: number): number =>
  kind === "bad" ? (m === n ? 1 : n === m + 1 ? -1 : 0) : 1 / 2 ** (m + n + 2);

const fmt = (x: number, kind: Kind) => (kind === "bad" ? (x === 0 ? "0" : x > 0 ? "1" : "−1") : x === 0 ? "0" : `1/${Math.round(1 / x)}`);

/** Summing a double array by rows, then by columns: Fubini for counting measure. */
export function IteratedSumViz() {
  const [kind, setKind] = useState<Kind>("bad");
  const C = 50, O = 46;
  const rowsTotal = kind === "bad" ? 0 : 1, colsTotal = 1;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="array">
        <button type="button" aria-pressed={kind === "bad"} className={kind === "bad" ? "seg is-on" : "seg"} onClick={() => setKind("bad")}>1 on the diagonal, −1 just right of it</button>
        <button type="button" aria-pressed={kind === "good"} className={kind === "good" ? "seg is-on" : "seg"} onClick={() => setKind("good")}>1/2ᵐ⁺ⁿ⁺²</button>
      </div>
      <svg viewBox="0 0 520 452" role="img" aria-label="A double array with row and column sums" style={{ width: "100%", maxWidth: 560, display: "block", margin: "8px auto" }}>
        {Array.from({ length: N }, (_, m) => Array.from({ length: N }, (_, n) => {
          const v = entry(kind, m, n);
          return (
            <g key={`${m}-${n}`}>
              <rect x={O + n * C} y={O + m * C} width={C} height={C} style={{ fill: v > 0 ? "var(--accent-soft)" : v < 0 ? "var(--bg-subtle)" : "var(--bg)", stroke: "var(--border)" }} />
              <text x={O + n * C + C / 2} y={O + m * C + C / 2 + 4} textAnchor="middle" style={{ fill: v < 0 ? "var(--danger)" : v > 0 ? "var(--text)" : "var(--text-faint)", fontSize: kind === "bad" ? 14 : 10, fontFamily: "var(--font-mono)" }}>{fmt(v, kind)}</text>
            </g>
          );
        }))}
        <text x={O + N * C + 36} y={O - 10} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>row sum</text>
        {Array.from({ length: N }, (_, m) => <text key={`r${m}`} x={O + N * C + 36} y={O + m * C + C / 2 + 4} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 12, fontFamily: "var(--font-mono)" }}>{kind === "bad" ? "0" : `1/${2 ** (m + 1)}`}</text>)}
        <text x={20} y={O + N * C + 22} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>col</text>
        {Array.from({ length: N }, (_, n) => <text key={`c${n}`} x={O + n * C + C / 2} y={O + N * C + 22} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 12, fontFamily: "var(--font-mono)" }}>{kind === "bad" ? (n === 0 ? "1" : "0") : `1/${2 ** (n + 1)}`}</text>)}
        <text x={O + (N * C) / 2} y={O + N * C + 46} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>The array continues forever to the right and downwards.</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        sum of row sums = {rowsTotal}. sum of column sums = {colsTotal}. {kind === "bad" ? "The orders disagree." : "The orders agree."}
      </p>
      <p style={{ fontSize: 14, margin: "4px 0" }}>
        {kind === "bad"
          ? "Each row holds one 1 and one −1, so sums to 0. The first column holds only a 1; every later column holds a 1 and a −1. The sum of |entries| is infinite, so Fubini does not apply."
          : "Every entry is positive, so Tonelli applies: both orders give the same total, 1. Here the sum of |entries| is finite, so Fubini applies too."}
      </p>
      <figcaption className="viz-caption">
        A double series is an integral against counting measure on ℕ × ℕ. Row sums then their total, or column sums then
        their total, are the two iterated integrals. The first seven rows and columns are shown; the sums count every term.
      </figcaption>
    </figure>
  );
}
