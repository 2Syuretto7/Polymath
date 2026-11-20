"use client";

import { useState } from "react";

/** Three arcs covering the unit circle, as angle intervals in degrees (each may run past 360). */
export const ARCS: [number, number][] = [[10, 170], [130, 290], [250, 410]];

/**
 * On arc i the local section is s_i(θ) = ε_i · e^{iθ/2}, with θ lifted into the arc's interval.
 * On each overlap, the two lifts differ by 0 or 360 degrees, so the sections agree exactly when
 * ε_i ε_j times that factor is +1.
 */
export const OVERLAPS = [
  { i: 0, j: 1, from: 130, to: 170, factor: 1 },
  { i: 1, j: 2, from: 250, to: 290, factor: 1 },
  { i: 2, j: 0, from: 10, to: 50, factor: -1 },
];

/** Which overlaps agree, for signs ε. */
export function agreements(eps: number[]) {
  return OVERLAPS.map((o) => eps[o.i] * eps[o.j] * o.factor === 1);
}

const COL = ["var(--accent)", "var(--success)", "var(--danger)"];

/** Local square roots of z on a cover of the circle, and why they never glue. */
export function SqrtGluingViz() {
  const [eps, setEps] = useState([1, 1, 1]);
  const ag = agreements(eps);
  const n = ag.filter(Boolean).length;
  const cx = 270, cy = 125, R = [70, 85, 100];
  const pt = (deg: number, r: number) => [cx + r * Math.cos((deg * Math.PI) / 180), cy - r * Math.sin((deg * Math.PI) / 180)];
  const arc = (a: number, b: number, r: number) => {
    const [x1, y1] = pt(a, r), [x2, y2] = pt(b, r);
    return `M${x1.toFixed(1)},${y1.toFixed(1)} A${r},${r} 0 ${b - a > 180 ? 1 : 0} 0 ${x2.toFixed(1)},${y2.toFixed(1)}`;
  };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="signs">
        {[0, 1, 2].map((k) => (
          <button key={k} type="button" aria-pressed={eps[k] === -1} className={eps[k] === -1 ? "seg is-on" : "seg"} onClick={() => setEps((e) => e.map((v, i) => (i === k ? -v : v)))}>
            U{["₁", "₂", "₃"][k]}: {eps[k] === 1 ? "+" : "−"}√z
          </button>
        ))}
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="Three arcs covering a circle, with local square roots compared on the overlaps" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <circle cx={cx} cy={cy} r={55} style={{ fill: "none", stroke: "var(--border-strong)" }} />
        {ARCS.map(([a, b], k) => (
          <g key={k}>
            <path d={arc(a, b, R[k])} style={{ fill: "none", stroke: COL[k], strokeWidth: 5, strokeLinecap: "round", opacity: 0.8 }} />
            {(() => { const [x, y] = pt((a + b) / 2, R[k] + 18); return <text x={x} y={y + 4} textAnchor="middle" style={{ fill: COL[k], fontSize: 12, fontWeight: 700 }}>U{["₁", "₂", "₃"][k]}</text>; })()}
          </g>
        ))}
        {OVERLAPS.map((o, k) => {
          const [x, y] = pt((o.from + o.to) / 2, 38);
          return (
            <g key={k}>
              <path d={arc(o.from, o.to, 55)} style={{ fill: "none", stroke: ag[k] ? "var(--success)" : "var(--danger)", strokeWidth: 8, opacity: 0.6 }} />
              <text x={x} y={y + 4} textAnchor="middle" style={{ fill: ag[k] ? "var(--success)" : "var(--danger)", fontSize: 14, fontWeight: 700 }}>{ag[k] ? "=" : "≠"}</text>
            </g>
          );
        })}
        <text x={14} y={240} style={{ fill: "var(--text-muted)", fontSize: 11 }}>overlaps where the chosen local roots agree are green; where they differ by a sign, red</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {n} of 3 overlaps agree. {n === 3 ? "" : "The local square roots do not glue to a continuous square root on the whole circle."}
      </p>
      <figcaption className="viz-caption">
        On each arc there are exactly two continuous square roots of z, differing by sign. Choose one on each arc. Going
        once round the circle multiplies a square root by −1, so however the signs are chosen, at least one overlap
        disagrees: the presheaf of continuous square roots has local sections everywhere but no global one.
      </figcaption>
    </figure>
  );
}
