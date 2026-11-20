"use client";

import { useState } from "react";

type G = { name: string; s: [string, string]; pay: [number, number][][] };
const GAMES: G[] = [
  { name: "prisoner’s dilemma", s: ["cooperate", "defect"], pay: [[[3, 3], [0, 5]], [[5, 0], [1, 1]]] },
  { name: "stag hunt", s: ["stag", "hare"], pay: [[[4, 4], [0, 3]], [[3, 0], [3, 3]]] },
  { name: "chicken", s: ["swerve", "straight"], pay: [[[3, 3], [2, 4]], [[4, 2], [0, 0]]] },
];

/** Symmetric 2×2 games: best responses, pure Nash equilibria and the mixed equilibrium. */
export function NashMatrixViz() {
  const [g, setG] = useState(0);
  const [p100, setP] = useState(50);
  const G0 = GAMES[g], P = G0.pay, p = p100 / 100;
  const rowBest = (j: number) => [0, 1].filter((i) => P[i][j][0] === Math.max(P[0][j][0], P[1][j][0]));
  const colBest = (i: number) => [0, 1].filter((j) => P[i][j][1] === Math.max(P[i][0][1], P[i][1][1]));
  const nash = (i: number, j: number) => rowBest(j).includes(i) && colBest(i).includes(j);
  const eu = [0, 1].map((i) => p * P[i][0][0] + (1 - p) * P[i][1][0]);
  const d = P[0][0][0] - P[0][1][0] - P[1][0][0] + P[1][1][0];
  const pm = d !== 0 ? (P[1][1][0] - P[0][1][0]) / d : NaN;
  const mixed = pm > 0 && pm < 1 ? pm : null;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="game">
        {GAMES.map((x, i) => <button key={x.name} type="button" aria-pressed={g === i} className={g === i ? "seg is-on" : "seg"} onClick={() => setG(i)}>{x.name}</button>)}
      </div>
      <table className="mono" style={{ fontSize: 13, borderCollapse: "collapse", marginTop: 10 }}>
        <thead><tr><th style={{ padding: "4px 10px" }}>row \ column</th>{G0.s.map((s) => <th key={s} style={{ padding: "4px 10px" }}>{s}</th>)}</tr></thead>
        <tbody>
          {[0, 1].map((i) => (
            <tr key={i}>
              <th style={{ padding: "4px 10px", textAlign: "left" }}>{G0.s[i]}</th>
              {[0, 1].map((j) => (
                <td key={j} style={{ padding: "6px 14px", border: nash(i, j) ? "2px solid var(--accent)" : "1px solid var(--border)", background: nash(i, j) ? "var(--accent-soft)" : "transparent" }}>
                  <span style={{ textDecoration: rowBest(j).includes(i) ? "underline" : "none" }}>{P[i][j][0]}</span>,{" "}
                  <span style={{ textDecoration: colBest(i).includes(j) ? "underline" : "none" }}>{P[i][j][1]}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="viz-controls">
        <label>column plays {G0.s[0]} with probability {p.toFixed(2)} <input type="range" min={0} max={100} value={p100} onChange={(e) => setP(Number(e.target.value))} aria-label="p" /></label>
      </div>
      <div className="mono" style={{ fontSize: 13, display: "grid", gap: 3 }}>
        <div>Row&rsquo;s expected payoff: {G0.s[0]} {eu[0].toFixed(2)}, {G0.s[1]} {eu[1].toFixed(2)}.</div>
        <div style={{ fontWeight: 700 }}>
          Pure equilibria: {[0, 1].flatMap((i) => [0, 1].filter((j) => nash(i, j)).map((j) => `(${G0.s[i]}, ${G0.s[j]})`)).join(", ")}.{" "}
          {mixed !== null ? `Mixed equilibrium: each plays ${G0.s[0]} with probability ${mixed.toFixed(2)}.` : "No mixed equilibrium: one strategy dominates."}
        </div>
      </div>
      <figcaption className="viz-caption">
        Each cell lists row&rsquo;s payoff, then column&rsquo;s. An underlined payoff is a best response to the other
        player&rsquo;s strategy; a cell with both underlined, outlined in violet, is a Nash equilibrium. Move the slider to
        find where row is indifferent between its two strategies: that is the mixed equilibrium.
      </figcaption>
    </figure>
  );
}
