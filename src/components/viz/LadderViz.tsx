"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const L = 5;

/** A 5 m ladder whose foot is pulled away from a wall at 1 m per second. */
export function LadderViz() {
  const [x, setX] = useState(3);
  const y = Math.sqrt(Math.max(L * L - x * x, 0));
  const vy = y > 1e-9 ? x / y : Infinity;
  const P = 52, ox = 40, oy = 300;
  const n3 = (t: number) => fmtNum(Number(t.toFixed(3)));

  return (
    <figure className="viz">
      <svg viewBox="0 0 420 330" role="img" aria-label={`A ladder with its foot ${n3(x)} m from the wall and its top ${n3(y)} m up`}>
        <line x1={ox} y1={oy} x2={ox} y2={20} className="viz-axis" style={{ strokeWidth: 3 }} />
        <line x1={ox} y1={oy} x2={410} y2={oy} className="viz-axis" style={{ strokeWidth: 3 }} />
        <line x1={ox + x * P} y1={oy} x2={ox} y2={oy - y * P} style={{ stroke: "var(--accent)", strokeWidth: 5, strokeLinecap: "round" }} />
        <circle cx={ox + x * P} cy={oy} r={6} className="plot-point" />
        <circle cx={ox} cy={oy - y * P} r={6} className="plot-hot" />
        <line x1={ox + x * P + 10} y1={oy - 14} x2={ox + x * P + 44} y2={oy - 14} style={{ stroke: "var(--accent)", strokeWidth: 2 }} markerEnd="url(#ladder-arrow)" />
        <defs>
          <marker id="ladder-arrow" viewBox="0 0 10 10" refX={8} refY={5} markerWidth={7} markerHeight={7} orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" style={{ fill: "var(--accent)" }} />
          </marker>
        </defs>
        <text x={ox + (x * P) / 2} y={oy + 20} textAnchor="middle" className="viz-label">x = {n3(x)} m</text>
        <text x={ox + 8} y={oy - (y * P) / 2} className="viz-label">y = {n3(y)} m</text>
        <text x={ox + (x * P) / 2 + 12} y={oy - (y * P) / 2 - 8} className="viz-label">5 m</text>
      </svg>
      <div className="viz-controls">
        <label className="viz-stepper-label" style={{ flex: 1 }}>
          Distance of the foot from the wall, x = <span className="mono">{n3(x)}</span> m
          <input type="range" className="viz-range" min={0.2} max={4.99} step={0.01} value={x} onChange={(e) => setX(Number(e.target.value))} />
        </label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>speed of the foot, dx/dt</td><td className="mono">1 m/s</td></tr>
          <tr><td>speed of the top, −dy/dt = (x/y)(dx/dt)</td><td className="mono">{Number.isFinite(vy) ? `${n3(vy)} m/s` : "unbounded"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        From <span className="mono">x² + y² = 25</span>, differentiating in time gives{" "}
        <span className="mono">2x·dx/dt + 2y·dy/dt = 0</span>. The foot moves steadily, but the top falls faster and faster
        as it nears the ground{vy > 5 ? ", which is a sign that the model has stopped describing a real ladder." : "."}
      </figcaption>
    </figure>
  );
}
