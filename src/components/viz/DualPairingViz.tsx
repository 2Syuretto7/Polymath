"use client";

import { useState } from "react";

const PS = [1, 1.5, 2, 4, Infinity];
const show = (x: number) => (x === Infinity ? "∞" : Number.isInteger(x) ? String(x) : x.toFixed(2));
const pn = (x: number, y: number, p: number) => (p === Infinity ? Math.max(Math.abs(x), Math.abs(y)) : (Math.abs(x) ** p + Math.abs(y) ** p) ** (1 / p));

/** A functional f ↦ f₁g₁ + f₂g₂ on the p-norm ball: its largest value is the q-norm of g. */
export function DualPairingViz() {
  const [k, setK] = useState(2);
  const [deg, setDeg] = useState(30);
  const p = PS[k];
  const q = p === 1 ? Infinity : p === Infinity ? 1 : p / (p - 1);
  const t = (deg * Math.PI) / 180;
  const g = [1.2 * Math.cos(t), 1.2 * Math.sin(t)];
  let best = -Infinity, fb = [0, 0];
  const ball = Array.from({ length: 721 }, (_, i) => {
    const s = (i / 720) * 2 * Math.PI, c = Math.cos(s), d = Math.sin(s);
    const n = pn(c, d, p);
    const f = [c / n, d / n];
    const v = f[0] * g[0] + f[1] * g[1];
    if (v > best) { best = v; fb = f; }
    return f;
  });
  const C = 140, R = 85;
  const P = (x: number, y: number) => `${(C + R * x).toFixed(1)},${(C - R * y).toFixed(1)}`;
  // level line {f : f·g = best}
  const gn = Math.hypot(g[0], g[1]);
  const ux = -g[1] / gn, uy = g[0] / gn;
  const l1 = [fb[0] + 2 * ux, fb[1] + 2 * uy], l2 = [fb[0] - 2 * ux, fb[1] - 2 * uy];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="p">
        {PS.map((x, i) => <button key={i} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>p = {show(x)}</button>)}
      </div>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center", marginTop: 8 }}>
        <svg viewBox="0 0 280 280" role="img" aria-label="Unit ball, a direction g and a supporting line" style={{ width: "100%", maxWidth: 300, display: "block" }}>
          <defs>
            <marker id="dp-arr" markerUnits="userSpaceOnUse" markerWidth={10} markerHeight={10} refX={9} refY={5} orient="auto"><path d="M0 0 L10 5 L0 10 z" style={{ fill: "var(--accent)" }} /></marker>
          </defs>
          <line x1={0} y1={C} x2={280} y2={C} style={{ stroke: "var(--border)" }} />
          <line x1={C} y1={0} x2={C} y2={280} style={{ stroke: "var(--border)" }} />
          <polygon points={ball.map(([x, y]) => P(x, y)).join(" ")} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
          <line x1={C + R * l1[0]} y1={C - R * l1[1]} x2={C + R * l2[0]} y2={C - R * l2[1]} style={{ stroke: "var(--text-muted)", strokeDasharray: "5 4", strokeWidth: 1.5 }} />
          <line x1={C} y1={C} x2={C + R * g[0]} y2={C - R * g[1]} markerEnd="url(#dp-arr)" style={{ stroke: "var(--accent)", strokeWidth: 2.5 }} />
          <circle cx={C + R * fb[0]} cy={C - R * fb[1]} r={5} style={{ fill: "var(--text)" }} />
          <text x={C + R * g[0] + 6} y={C - R * g[1] - 6} style={{ fill: "var(--accent)", fontSize: 13 }}>g</text>
        </svg>
        <div className="mono" style={{ fontSize: 13, flex: "1 1 220px" }}>
          <p>g = ({g[0].toFixed(3)}, {g[1].toFixed(3)})</p>
          <p>largest f₁g₁ + f₂g₂ over the p-ball: {best.toFixed(3)}</p>
          <p>‖g‖<sub>q</sub> with q = {show(q)}: {pn(g[0], g[1], q).toFixed(3)}</p>
          <p style={{ fontWeight: 700 }}>The norm of the functional is ‖g‖<sub>q</sub>.</p>
        </div>
      </div>
      <div className="viz-controls">
        <label className="mono" style={{ fontSize: 13 }}>
          direction of g: {deg}°{" "}
          <input type="range" min={0} max={90} value={deg} onChange={(e) => setDeg(Number(e.target.value))} aria-label="direction of g" />
        </label>
      </div>
      <figcaption className="viz-caption">
        The dashed line is a level set of the functional, pushed out until it just touches the unit ball of the p-norm at the
        dot. Its value there, the norm of the functional, is exactly the q-norm of g. This is Hölder&rsquo;s inequality with
        its equality case, the heart of the duality between Lᵖ and L<sup>q</sup>.
      </figcaption>
    </figure>
  );
}
