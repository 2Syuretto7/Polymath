"use client";

import { useState } from "react";
import { fmtNum } from "./format";

type S = { name: string; open: boolean; closed: boolean };
const SETS: S[] = [
  { name: "(0, 1)", open: true, closed: false },
  { name: "[0, 1]", open: false, closed: true },
  { name: "[0, 1)", open: false, closed: false },
  { name: "{1/n : n ≥ 1}", open: false, closed: false },
];
const W = 520, H = 110, X0 = 30, X1 = 490, LO = -0.2, HI = 1.2, Y = 60;
const X = (v: number) => X0 + ((v - LO) / (HI - LO)) * (X1 - X0);
const isRecip = (x: number) => x > 0 && Math.abs(1 / x - Math.round(1 / x)) < 1e-6 && Math.round(1 / x) >= 1;

/** Move a point along the line and test it against a set: is it in the set, is some neighbourhood inside the set, and is it a limit point? */
export function NeighbourhoodViz() {
  const [k, setK] = useState(0);
  const [x, setX] = useState(0.5);
  const s = SETS[k];
  const eps = 1e-9;
  let inSet: boolean, interior = 0, limit: boolean;
  if (k === 3) {
    inSet = isRecip(x);
    limit = Math.abs(x) < eps;
  } else {
    const loIn = k !== 0, hiIn = k === 1;
    inSet = (x > eps && x < 1 - eps) || (Math.abs(x) < eps && loIn) || (Math.abs(x - 1) < eps && hiIn);
    if (x > eps && x < 1 - eps) interior = Math.min(x, 1 - x);
    limit = x > -eps && x < 1 + eps;
  }
  const fm = (z: number) => fmtNum(Number(z.toFixed(2)));
  const dot = (v: number, filled: boolean, key: string | number) => (
    <circle key={key} cx={X(v)} cy={Y} r={5} style={{ fill: filled ? "var(--accent)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 2 }} />
  );

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Set">
        {SETS.map((t, i) => (
          <button key={t.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => setK(i)}>{t.name}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The set on the number line, with the chosen point" style={{ width: "100%", display: "block", marginTop: 12 }}>
        <line x1={X0} y1={Y} x2={X1} y2={Y} className="viz-axis" />
        {[0, 1].map((v) => <text key={v} x={X(v)} y={Y + 24} textAnchor="middle" style={{ fontSize: 11, fill: "var(--text-muted)" }}>{v}</text>)}
        {k < 3 ? (
          <>
            <line x1={X(0)} y1={Y} x2={X(1)} y2={Y} style={{ stroke: "var(--accent)", strokeWidth: 4 }} />
            {dot(0, k !== 0, "a")}
            {dot(1, k === 1, "b")}
          </>
        ) : (
          Array.from({ length: 40 }, (_, i) => <circle key={i} cx={X(1 / (i + 1))} cy={Y} r={i < 10 ? 3.5 : 2} style={{ fill: "var(--accent)" }} />)
        )}
        {interior > 0 && (
          <rect x={X(x - interior)} y={Y - 14} width={X(x + interior) - X(x - interior)} height={28} rx={6} style={{ fill: "var(--accent-soft)", opacity: 0.6, stroke: "var(--accent)", strokeDasharray: "4 3" }} />
        )}
        <line x1={X(x)} y1={Y - 30} x2={X(x)} y2={Y + 8} style={{ stroke: "var(--text)", strokeWidth: 1.5 }} />
        <text x={X(x)} y={Y - 34} textAnchor="middle" style={{ fontSize: 12, fill: "var(--text)" }}>x = {fm(x)}</text>
      </svg>
      <div className="viz-sliders">
        <label><span>the point x: <span className="mono">{fm(x)}</span></span>
          <input type="range" min={LO} max={HI} step={0.01} value={x} onChange={(e) => setX(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>is x in the set?</td><td>{inSet ? "yes" : "no"}</td></tr>
          <tr><td>is x an interior point? (some (x − ε, x + ε) inside the set)</td><td>{interior > 0 ? `yes, any ε up to ${fm(interior)}` : "no"}</td></tr>
          <tr><td>is x a limit point? (every neighbourhood meets the set away from x)</td><td>{limit ? "yes" : "no"}</td></tr>
          <tr><td>is the set open? is it closed?</td><td>{s.open ? "open" : "not open"}, {s.closed ? "closed" : "not closed"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        A set is open when every point in it is an interior point, and closed when it contains all its limit points.
        {k === 3 ? " Here each 1/n is isolated, so the set is not open, and its one limit point, 0, is missing, so it is not closed either." : k === 2 ? " Here 0 is in the set but not interior, and 1 is a limit point that is missing: neither open nor closed." : ""}
      </figcaption>
    </figure>
  );
}
