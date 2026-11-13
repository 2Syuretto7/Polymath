"use client";

import { useState } from "react";
import { fmtNum } from "./format";

type P3 = [number, number, number];
const U: P3 = [2, 0, 0];
const cross = (a: P3, b: P3): P3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const len = (a: P3) => Math.hypot(a[0], a[1], a[2]);

/** Two vectors, the parallelogram they span, and their cross product, which stands perpendicular with length equal to the area. */
export function CrossProductViz() {
  const [theta, setTheta] = useState(60);
  const [lift, setLift] = useState(0);
  const [turn, setTurn] = useState(30);
  const th = (theta * Math.PI) / 180;
  const V: P3 = [2 * Math.cos(th), 2 * Math.sin(th), lift];
  const W = cross(U, V);
  const a = (turn * Math.PI) / 180;
  const proj = (p: P3): [number, number] => {
    const x = p[0] * Math.cos(a) - p[1] * Math.sin(a);
    const y = p[0] * Math.sin(a) + p[1] * Math.cos(a);
    return [250 + 40 * x, 200 - 40 * (p[2] * 0.95 + y * 0.45)];
  };
  const pt = (p: P3) => proj(p).join(",");
  const add = (p: P3, q: P3): P3 => [p[0] + q[0], p[1] + q[1], p[2] + q[2]];
  const O: P3 = [0, 0, 0];
  const f = (x: number) => fmtNum(Number(x.toFixed(2)));
  const arrow = (to: P3, cls: string, label: string, dx = 6) => {
    const [x0, y0] = proj(O), [x1, y1] = proj(to);
    return (
      <g>
        <line x1={x0} y1={y0} x2={x1} y2={y1} style={{ stroke: cls, strokeWidth: 2.5 }} />
        <circle cx={x1} cy={y1} r={4} style={{ fill: cls }} />
        <text x={x1 + dx} y={y1 - 4} className="viz-label" style={{ fill: cls, fontWeight: 600 }}>{label}</text>
      </g>
    );
  };

  return (
    <figure className="viz">
      <svg viewBox="0 0 500 330" role="img" aria-label={`The cross product has length ${f(len(W))}, the area of the parallelogram.`} style={{ width: "100%", display: "block" }}>
        {([[[3, 0, 0], "x"], [[0, 3, 0], "y"], [[0, 0, 3], "z"]] as [P3, string][]).map(([p, l]) => (
          <g key={l}>
            <line x1={proj(O)[0]} y1={proj(O)[1]} x2={proj(p)[0]} y2={proj(p)[1]} className="viz-axis" />
            <text x={proj(p)[0] + 4} y={proj(p)[1] - 4} className="viz-label">{l}</text>
          </g>
        ))}
        <polygon points={[O, U, add(U, V), V].map(pt).join(" ")} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 1, opacity: 0.85 }} />
        {arrow(U, "var(--text)", "u")}
        {arrow(V, "var(--text)", "v")}
        {len(W) > 0.01 && arrow([W[0] / 2, W[1] / 2, W[2] / 2], "var(--accent)", "u × v (half scale)")}
      </svg>
      <div className="viz-sliders">
        <label><span>angle of v from u in the floor: <span className="mono">{theta}°</span></span>
          <input type="range" min={0} max={180} value={theta} onChange={(e) => setTheta(Number(e.target.value))} /></label>
        <label><span>lift v upwards: <span className="mono">{lift}</span></span>
          <input type="range" min={-2} max={2} step={0.5} value={lift} onChange={(e) => setLift(Number(e.target.value))} /></label>
        <label><span>turn the view: <span className="mono">{turn}°</span></span>
          <input type="range" min={-80} max={80} value={turn} onChange={(e) => setTurn(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>u, v</td><td className="mono">(2, 0, 0), ({f(V[0])}, {f(V[1])}, {f(V[2])})</td></tr>
          <tr><td>u × v</td><td className="mono">({f(W[0])}, {f(W[1])}, {f(W[2])})</td></tr>
          <tr><td>|u × v|, the area of the parallelogram</td><td className="mono">{f(len(W))}</td></tr>
          <tr><td>(u × v) · u and (u × v) · v</td><td className="mono">{f(W[0] * U[0])}, {f(W[0] * V[0] + W[1] * V[1] + W[2] * V[2])}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {len(W) < 0.01
          ? "When u and v point along the same line, the parallelogram collapses and the cross product is the zero vector."
          : "The cross product is perpendicular to both u and v, both dot products are 0, and its length is the area of the shaded parallelogram. Its direction follows the right-hand rule."}
      </figcaption>
    </figure>
  );
}
