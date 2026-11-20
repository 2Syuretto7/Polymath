"use client";

import { useState } from "react";

/** The Lorentz factor for speed v, as a fraction of the speed of light. */
export function gamma(v: number) {
  return 1 / Math.sqrt(1 - v * v);
}

/** A Minkowski diagram: the axes of a frame moving at speed v tilt towards the light cone. */
export function LorentzBoostViz() {
  const [v, setV] = useState(0.6);
  const g = gamma(v);
  const E = { t: 2, x: 1 };
  const t2 = g * (E.t - v * E.x);
  const x2 = g * (E.x - v * E.t);
  const O = { x: 200, y: 200 };
  const s = 55;
  const P = (x: number, t: number) => [O.x + x * s, O.y - t * s];
  const [ax, ay] = P(v * 3, 3);
  const [bx, by] = P(3, v * 3);
  const [ex, ey] = P(E.x, E.t);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>v = {v.toFixed(2)}c <input type="range" min={0} max={0.9} step={0.05} value={v} onChange={(e) => setV(Number(e.target.value))} aria-label="v" /></label>
      </div>
      <svg viewBox="0 0 540 230" role="img" aria-label="Spacetime diagram with the rest frame, the moving frame and the light cone" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={O.x - 160} y1={O.y} x2={O.x + 180} y2={O.y} style={{ stroke: "var(--border-strong)" }} />
        <line x1={O.x} y1={O.y + 20} x2={O.x} y2={O.y - 185} style={{ stroke: "var(--border-strong)" }} />
        <text x={O.x + 184} y={O.y + 4} style={{ fill: "var(--text-muted)", fontSize: 11 }}>x</text>
        <text x={O.x - 4} y={12} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>t</text>
        <line x1={O.x - 180} y1={O.y - 180} x2={O.x} y2={O.y} style={{ stroke: "var(--text-faint)", strokeDasharray: "4 3" }} />
        <line x1={O.x} y1={O.y} x2={O.x + 180} y2={O.y - 180} style={{ stroke: "var(--text-faint)", strokeDasharray: "4 3" }} />
        <text x={O.x + 160} y={O.y - 140} style={{ fill: "var(--text-faint)", fontSize: 10 }}>light</text>
        <line x1={O.x} y1={O.y} x2={ax} y2={ay} style={{ stroke: "var(--accent)", strokeWidth: 2 }} />
        <line x1={O.x} y1={O.y} x2={bx} y2={by} style={{ stroke: "var(--accent)", strokeWidth: 2 }} />
        <text x={ax + 4} y={ay} style={{ fill: "var(--accent)", fontSize: 11 }}>t′</text>
        <text x={bx + 4} y={by} style={{ fill: "var(--accent)", fontSize: 11 }}>x′</text>
        <circle cx={ex} cy={ey} r={5} style={{ fill: "var(--success)" }} />
        <text x={ex + 8} y={ey - 6} style={{ fill: "var(--success)", fontSize: 11 }}>E</text>
        <text x={400} y={60} style={{ fill: "var(--text)", fontSize: 12 }}>γ = {g.toFixed(3)}</text>
        <text x={400} y={86} style={{ fill: "var(--text)", fontSize: 12 }}>E in rest frame: t = 2, x = 1</text>
        <text x={400} y={112} style={{ fill: "var(--accent)", fontSize: 12 }}>moving frame:</text>
        <text x={400} y={132} style={{ fill: "var(--accent)", fontSize: 12 }}>t′ = {t2.toFixed(2)}, x′ = {x2.toFixed(2)}</text>
        <text x={400} y={158} style={{ fill: "var(--text-muted)", fontSize: 11 }}>interval t² − x² = 3</text>
        <text x={400} y={176} style={{ fill: "var(--text-muted)", fontSize: 11 }}>t′² − x′² = {(t2 * t2 - x2 * x2).toFixed(2)}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        v = {v.toFixed(2)}c: γ = {g.toFixed(3)}. The moving frame&rsquo;s line of simultaneity tilts, so events simultaneous in one frame are not in the other.
      </p>
      <figcaption className="viz-caption">
        In units where c = 1, a boost sends (t, x) to (γ(t − vx), γ(x − vt)). The two frames disagree about times, lengths
        and simultaneity, but agree on the interval t² − x², and on the light cone, which is the same in every frame.
      </figcaption>
    </figure>
  );
}
