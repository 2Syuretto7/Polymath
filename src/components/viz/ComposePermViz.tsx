"use client";

import { useState } from "react";
import { cycleString } from "./permUtil";

const PRESETS: number[][] = [
  [0, 1, 2, 3], [1, 0, 2, 3], [0, 2, 1, 3], [1, 2, 0, 3], [0, 2, 3, 1], [1, 2, 3, 0], [2, 3, 0, 1],
];
const comp = (s: number[], t: number[]) => t.map((x) => s[x]);

/** Compose two permutations of four objects in both orders: the symmetric group is not commutative. */
export function ComposePermViz() {
  const [si, setSi] = useState(1);
  const [ti, setTi] = useState(4);
  const s = PRESETS[si], t = PRESETS[ti];
  const st = comp(s, t), ts = comp(t, s);
  const X = (i: number) => 70 + i * 60;
  const rowY = [30, 90, 150];
  const chips = (sel: number, set: (n: number) => void, label: string) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 6, alignItems: "center" }}>
      <span className="mono-meta" style={{ textTransform: "none", width: 24 }}>{label}</span>
      {PRESETS.map((p, j) => <button key={j} type="button" style={{ cursor: "pointer" }} className={j === sel ? "viz-chip is-on" : "viz-chip"} aria-pressed={j === sel} onClick={() => set(j)}>{cycleString(p)}</button>)}
    </div>
  );
  return (
    <figure className="viz">
      {chips(ti, setTi, "τ")}
      {chips(si, setSi, "σ")}
      <svg viewBox="0 0 520 180" role="img" aria-label="Arrow diagram of tau followed by sigma" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[0, 1, 2, 3].map((i) => <line key={`a${i}`} x1={X(i)} y1={rowY[0] + 9} x2={X(t[i])} y2={rowY[1] - 9} style={{ stroke: "var(--text-muted)", strokeWidth: 1.5 }} />)}
        {[0, 1, 2, 3].map((i) => <line key={`b${i}`} x1={X(i)} y1={rowY[1] + 9} x2={X(s[i])} y2={rowY[2] - 9} style={{ stroke: "var(--accent)", strokeWidth: 1.5 }} />)}
        {rowY.map((y, r) => [0, 1, 2, 3].map((i) => (
          <g key={`${r}${i}`}><circle cx={X(i)} cy={y} r={9} style={{ fill: "var(--bg)", stroke: "var(--border-strong)" }} />
            <text x={X(i)} y={y + 4} textAnchor="middle" style={{ fontSize: 11, fill: "var(--text)" }}>{i + 1}</text></g>
        )))}
        <text x={330} y={64} style={{ fontSize: 12, fill: "var(--text-muted)" }}>first τ</text>
        <text x={330} y={124} style={{ fontSize: 12, fill: "var(--accent)" }}>then σ</text>
      </svg>
      <table className="table" style={{ marginTop: 4 }}>
        <tbody>
          <tr><td>σ ∘ τ, doing τ first</td><td className="mono">{cycleString(st)}</td></tr>
          <tr><td>τ ∘ σ, doing σ first</td><td className="mono">{cycleString(ts)}</td></tr>
          <tr><td>equal?</td><td>{cycleString(st) === cycleString(ts) ? "yes: these two commute" : "no: the order matters"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Follow each number down the arrows: τ moves it to the middle row, σ to the bottom. The composite is read right to left, like functions. S₄ has 24 elements, and most pairs do not commute.
      </figcaption>
    </figure>
  );
}
