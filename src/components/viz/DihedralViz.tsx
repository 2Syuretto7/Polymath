"use client";

import { useState } from "react";

const SUP = ["", "", "²", "³", "⁴", "⁵"];
const mod = (a: number, n: number) => ((a % n) + n) % n;
const name = (k: number, f: boolean) => (k === 0 ? (f ? "s" : "e") : `r${SUP[k]}${f ? "s" : ""}`);

/** The symmetries of a regular polygon: rotate and reflect, and see every combination collapse to one of 2n elements. */
export function DihedralViz() {
  const [n, setN] = useState(4);
  const [k, setK] = useState(0);
  const [f, setF] = useState(false);
  const [hist, setHist] = useState<string[]>([]);
  const cx = 130, cy = 110, R = 80;
  const pos = (p: number) => { const a = Math.PI / 2 - (2 * Math.PI * p) / n; return [cx + R * Math.cos(a), cy - R * Math.sin(a)]; };
  const g = (x: number) => mod((f ? -x : x) + k, n);
  const doR = () => { setK(mod(k + 1, n)); setHist([...hist, "r"].slice(-12)); };
  const doS = () => { setF(!f); setK(mod(-k, n)); setHist([...hist, "s"].slice(-12)); };
  const reset = (m = n) => { setN(m); setK(0); setF(false); setHist([]); };
  const pts = Array.from({ length: n }, (_, p) => pos(p));
  const all = [...Array.from({ length: n }, (_, j) => [j, false] as const), ...Array.from({ length: n }, (_, j) => [j, true] as const)];

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Polygon">
        {[3, 4, 5, 6].map((m) => (
          <button key={m} type="button" className={m === n ? "seg is-on" : "seg"} aria-pressed={m === n} onClick={() => reset(m)}>{["triangle", "square", "pentagon", "hexagon"][m - 3]}</button>
        ))}
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="A regular polygon with labelled corners" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={cx} y1={cy - R - 18} x2={cx} y2={cy + R + 18} style={{ stroke: "var(--text-faint)", strokeDasharray: "4 4" }} />
        <polygon points={pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ")} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
        {Array.from({ length: n }, (_, L) => {
          const [x, y] = pos(g(L));
          return <g key={L}><circle cx={x} cy={y} r={12} style={{ fill: L === 0 ? "var(--accent)" : "var(--bg)", stroke: "var(--accent)" }} />
            <text x={x} y={y + 4} textAnchor="middle" style={{ fontSize: 12, fill: L === 0 ? "var(--bg)" : "var(--text)" }}>{L + 1}</text></g>;
        })}
        <text x={270} y={40} style={{ fontSize: 12, fill: "var(--text-muted)" }}>moves so far</text>
        <text x={270} y={62} className="mono" style={{ fontSize: 14, fill: "var(--text)" }}>{hist.length ? hist.join(" then ") : "none"}</text>
        <text x={270} y={100} style={{ fontSize: 12, fill: "var(--text-muted)" }}>the same as the single symmetry</text>
        <text x={270} y={126} className="mono" style={{ fontSize: 20, fill: "var(--accent)" }}>{name(k, f)}</text>
        <text x={270} y={170} style={{ fontSize: 11, fill: "var(--text-muted)" }}>r: rotate by 360°/{n}, clockwise</text>
        <text x={270} y={188} style={{ fontSize: 11, fill: "var(--text-muted)" }}>s: reflect in the dashed line</text>
      </svg>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={doR}>Rotate (r)</button>
        <button type="button" className="btn btn-primary" onClick={doS}>Reflect (s)</button>
        <button type="button" className="btn" onClick={() => reset()}>Reset</button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }} aria-label={`The ${2 * n} elements of the group`}>
        {all.map(([j, ff]) => <span key={`${j}${ff}`} className={j === k && ff === f ? "viz-chip is-on" : "viz-chip"}>{name(j, ff)}</span>)}
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        However long the sequence of moves, the result is one of {2 * n} symmetries: {n} rotations and {n} reflections. Try r then s, and then s then r from the start: they differ, so the group is not commutative. Here rᵏs means reflect first, then rotate k times.
      </figcaption>
    </figure>
  );
}
