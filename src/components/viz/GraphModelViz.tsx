"use client";

import { useState } from "react";

const N = 4;
type G = boolean[][];
const R = [0, 1, 2, 3];
const SENTENCES: { s: string; f: (E: G) => boolean }[] = [
  { s: "∀x ∃y Exy", f: (E) => R.every((x) => R.some((y) => E[x][y])) },
  { s: "∃x ∀y Exy", f: (E) => R.some((x) => R.every((y) => E[x][y])) },
  { s: "∀x ¬Exx", f: (E) => R.every((x) => !E[x][x]) },
  { s: "∀x ∀y (Exy → Eyx)", f: (E) => R.every((x) => R.every((y) => !E[x][y] || E[y][x])) },
  { s: "∀x ∀y ∀z ((Exy ∧ Eyz) → Exz)", f: (E) => R.every((x) => R.every((y) => R.every((z) => !(E[x][y] && E[y][z]) || E[x][z]))) },
  { s: "∃x ∀y ¬Eyx", f: (E) => R.some((x) => R.every((y) => !E[y][x])) },
];
const POS = [[90, 40], [190, 40], [190, 140], [90, 140]];
const start = (): G => R.map((i) => R.map((j) => j === (i + 1) % N));

/** A four-element directed graph: toggle edges and see which first-order sentences it satisfies. */
export function GraphModelViz() {
  const [E, setE] = useState<G>(start);
  const toggle = (i: number, j: number) => setE(E.map((row, a) => row.map((v, b) => (a === i && b === j ? !v : v))));
  return (
    <figure className="viz">
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>
        <svg viewBox="0 0 280 180" role="img" aria-label="The directed graph" style={{ width: 280, maxWidth: "100%", display: "block" }}>
          <defs>
            <marker id="gm-arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--accent)" }} />
            </marker>
          </defs>
          {R.flatMap((i) => R.map((j) => {
            if (!E[i][j]) return null;
            const [x1, y1] = POS[i], [x2, y2] = POS[j];
            if (i === j) return <circle key={`${i}${j}`} cx={x1 + (x1 < 140 ? -22 : 22)} cy={y1 + (y1 < 90 ? -14 : 14)} r={12} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />;
            const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), ox = (-dy / L) * 6, oy = (dx / L) * 6;
            return <line key={`${i}${j}`} x1={x1 + (dx / L) * 18 + ox} y1={y1 + (dy / L) * 18 + oy} x2={x2 - (dx / L) * 18 + ox} y2={y2 - (dy / L) * 18 + oy} markerEnd="url(#gm-arrow)" style={{ stroke: "var(--accent)", strokeWidth: 2 }} />;
          }))}
          {R.map((i) => (
            <g key={i}>
              <circle cx={POS[i][0]} cy={POS[i][1]} r={16} style={{ fill: "var(--bg)", stroke: "var(--text)", strokeWidth: 1.5 }} />
              <text x={POS[i][0]} y={POS[i][1] + 5} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 14 }}>{i}</text>
            </g>
          ))}
        </svg>
        <div>
          <div className="mono" style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 4 }}>edge from row to column: click to toggle</div>
          <table className="mono" style={{ borderCollapse: "collapse", fontSize: 13 }}>
            <thead><tr><th />{R.map((j) => <th key={j} style={{ padding: "2px 8px" }}>{j}</th>)}</tr></thead>
            <tbody>
              {R.map((i) => (
                <tr key={i}>
                  <th style={{ padding: "2px 8px" }}>{i}</th>
                  {R.map((j) => (
                    <td key={j} style={{ padding: 2 }}>
                      <button type="button" aria-pressed={E[i][j]} aria-label={`edge ${i} to ${j}`} onClick={() => toggle(i, j)}
                        style={{ width: 28, height: 26, borderRadius: 4, border: "1px solid var(--border)", background: E[i][j] ? "var(--accent)" : "var(--bg)", color: E[i][j] ? "var(--bg)" : "var(--text-muted)", cursor: "pointer" }}>
                        {E[i][j] ? "1" : "0"}
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 13, marginTop: 10 }}>
        {SENTENCES.map((S) => {
          const v = S.f(E);
          return <div key={S.s} style={{ color: v ? "var(--accent)" : "var(--danger)" }}><span style={{ display: "inline-block", width: 52 }}>{v ? "true" : "false"}</span>{S.s}</div>;
        })}
      </div>
      <figcaption className="viz-caption">
        The language has one binary relation symbol E. A structure for it is any set with a binary relation; here the set is{" "}
        {"{0, 1, 2, 3}"} and E holds from a to b when there is an arrow. Each sentence is true or false in the structure,
        evaluated by running over all elements for each quantifier.
      </figcaption>
    </figure>
  );
}
