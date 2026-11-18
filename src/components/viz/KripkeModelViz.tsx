"use client";

import { useState } from "react";

const POS: [number, number][] = [[90, 150], [260, 40], [430, 150]];
const NAMES = ["w₁", "w₂", "w₃"];

/** A three-world Kripke model: toggle accessibility and the truth of p, and read off □p and ◇p at each world. */
export function KripkeModelViz() {
  const [R, setR] = useState<boolean[][]>([[false, true, true], [false, true, false], [false, false, false]]);
  const [p, setP] = useState([false, true, false]);
  const box = (w: number) => R[w].every((r, v) => !r || p[v]);
  const dia = (w: number) => R[w].some((r, v) => r && p[v]);
  const refl = R.every((row, i) => row[i]);
  const sym = R.every((row, i) => row.every((r, j) => !r || R[j][i]));
  const trans = R.every((row, i) => row.every((r, j) => !r || R[j].every((s, k) => !s || R[i][k])));
  const toggle = (i: number, j: number) => setR(R.map((row, a) => row.map((r, b) => (a === i && b === j ? !r : r))));
  const yes = (b: boolean) => <span style={{ color: b ? "var(--accent)" : "var(--danger)", fontWeight: 700 }}>{b ? "true" : "false"}</span>;
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ flexWrap: "wrap" }}>
        <span style={{ fontSize: 13 }}>arrows:</span>
        {R.map((row, i) => row.map((r, j) => (
          <button key={`${i}${j}`} type="button" aria-pressed={r} className={r ? "btn btn-primary" : "btn btn-ghost"} onClick={() => toggle(i, j)} style={{ minWidth: 64 }}>{NAMES[i]}→{NAMES[j]}</button>
        )))}
      </div>
      <div className="viz-controls">
        <span style={{ fontSize: 13 }}>p true at:</span>
        {p.map((v, i) => <button key={i} type="button" aria-pressed={v} className={v ? "btn btn-primary" : "btn btn-ghost"} onClick={() => setP(p.map((x, j) => (j === i ? !x : x)))}>{NAMES[i]}</button>)}
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Three worlds and the accessibility relation" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          <marker id="km-arr" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={9} markerHeight={9} markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--text-muted)" }} /></marker>
        </defs>
        {R.map((row, i) => row.map((r, j) => {
          if (!r) return null;
          const [x1, y1] = POS[i], [x2, y2] = POS[j];
          if (i === j) return <circle key={`${i}${j}`} cx={x1} cy={y1 - 34} r={13} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />;
          const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy);
          const nx = -dy / L, ny = dx / L, off = R[j][i] ? 6 : 0;
          return <line key={`${i}${j}`} x1={x1 + (dx / L) * 24 + nx * off} y1={y1 + (dy / L) * 24 + ny * off} x2={x2 - (dx / L) * 26 + nx * off} y2={y2 - (dy / L) * 26 + ny * off} markerEnd="url(#km-arr)" style={{ stroke: "var(--text-muted)", strokeWidth: 1.5 }} />;
        }))}
        {POS.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={22} style={{ fill: p[i] ? "var(--accent-soft)" : "var(--bg)", stroke: p[i] ? "var(--accent)" : "var(--border-strong)", strokeWidth: 2 }} />
            <text x={x} y={y - 2} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>{NAMES[i]}</text>
            <text x={x} y={y + 12} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{p[i] ? "p" : "¬p"}</text>
          </g>
        ))}
      </svg>
      <table style={{ width: "100%", fontSize: 13, borderCollapse: "collapse" }}>
        <thead><tr><th style={{ textAlign: "left", padding: 4, fontWeight: 400, color: "var(--text-muted)" }}>world</th><th style={{ padding: 4 }}>p</th><th style={{ padding: 4 }}>□p</th><th style={{ padding: 4 }}>◇p</th></tr></thead>
        <tbody>
          {NAMES.map((n, i) => (
            <tr key={n} style={{ borderTop: "1px solid var(--border)", textAlign: "center" }}>
              <td style={{ padding: 4, textAlign: "left" }}>{n}</td><td style={{ padding: 4 }}>{yes(p[i])}</td><td style={{ padding: 4 }}>{yes(box(i))}</td><td style={{ padding: 4 }}>{yes(dia(i))}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 8 }}>
        The relation is {refl ? "" : "not "}reflexive, {sym ? "" : "not "}symmetric and {trans ? "" : "not "}transitive.
      </p>
      <figcaption className="viz-caption">
        □p is true at a world when p is true at every world it can see; ◇p when p is true at some world it can see. A world
        that sees nothing makes every □ sentence true and every ◇ sentence false.
      </figcaption>
    </figure>
  );
}
