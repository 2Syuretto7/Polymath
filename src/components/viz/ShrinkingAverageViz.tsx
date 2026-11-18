"use client";

import { useState } from "react";

/** The function before one value is altered: rising, then a jump at 1/2. */
const g = (x: number) => (x < 0.5 ? 0.2 + 0.6 * x : 0.9 - 0.2 * (x - 0.5));
/** Exact integral of g from a to b. */
const G = (x: number) => (x < 0.5 ? 0.2 * x + 0.3 * x * x : 0.2 * 0.5 + 0.3 * 0.25 + 0.9 * (x - 0.5) - 0.1 * (x - 0.5) ** 2);
export const average = (x: number, r: number) => (G(x + r) - G(x - r)) / (2 * r);

const POINTS = [
  { label: "x = 0.2, a point of continuity", x: 0.2, fx: g(0.2), note: "f is continuous here, so the averages tend to f(x). A Lebesgue point." },
  { label: "x = 0.5, the jump", x: 0.5, fx: g(0.5), note: "The averages tend to the midpoint of the jump, 0.7, not to f(0.5) = 0.9. Not a Lebesgue point, but it is a single point: measure 0." },
  { label: "x = 0.75, value altered", x: 0.75, fx: 0.15, note: "f(0.75) was changed to 0.15. Averages ignore a single point, so they tend to 0.85. Changing f on a null set cannot change any average." },
];

/** Averages of f over [x − r, x + r] as r shrinks. */
export function ShrinkingAverageViz() {
  const [k, setK] = useState(0);
  const [e, setE] = useState(1);
  const r = 0.2 / 2 ** e;
  const P = POINTS[k];
  const avg = average(P.x, r);
  const X = (x: number) => 30 + x * 460, Y = (y: number) => 170 - y * 150;
  const xs = Array.from({ length: 201 }, (_, i) => i / 200);
  const left = xs.filter((x) => x < 0.5), right = xs.filter((x) => x >= 0.5);
  const line = (a: number[]) => a.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)} ${Y(g(x)).toFixed(1)}`).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="point">
        {POINTS.map((p, i) => <button key={p.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{p.label}</button>)}
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="A function and an averaging window" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={X(P.x - r)} y={Y(avg)} width={X(P.x + r) - X(P.x - r)} height={Y(0) - Y(avg)} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
        <path d={line(left)} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <path d={line(right)} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <circle cx={X(0.5)} cy={Y(g(0.5))} r={4} style={{ fill: "var(--text)" }} />
        <circle cx={X(0.5)} cy={Y(0.5)} r={4} style={{ fill: "var(--bg)", stroke: "var(--text)", strokeWidth: 1.5 }} />
        {k === 2 && <><circle cx={X(0.75)} cy={Y(g(0.75))} r={4} style={{ fill: "var(--bg)", stroke: "var(--text)", strokeWidth: 1.5 }} /><circle cx={X(0.75)} cy={Y(0.15)} r={4} style={{ fill: "var(--danger)" }} /></>}
        <line x1={X(P.x)} y1={Y(0)} x2={X(P.x)} y2={20} style={{ stroke: "var(--text-muted)", strokeDasharray: "3 3" }} />
        <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(0)} style={{ stroke: "var(--text-muted)" }} />
      </svg>
      <div className="viz-controls">
        <label className="mono" style={{ fontSize: 13 }}>
          r = {r.toPrecision(3)}{" "}
          <input type="range" min={0} max={10} value={e} onChange={(ev) => setE(Number(ev.target.value))} aria-label="shrink the radius" />
        </label>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        average over [x − r, x + r] = {avg.toFixed(4)}. f(x) = {P.fx.toFixed(4)}.
      </p>
      <p style={{ fontSize: 14, margin: "4px 0" }}>{P.note}</p>
      <figcaption className="viz-caption">
        The shaded rectangle has the same area as the graph over the window, so its height is the average. Lebesgue&rsquo;s
        theorem: for integrable f, the averages tend to f(x) at almost every x.
      </figcaption>
    </figure>
  );
}
