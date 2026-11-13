"use client";

import { useState } from "react";

type V2 = [number, number];
type C = { label: string; p: (t: number) => V2; v: (t: number) => V2 };
const CURVES: C[] = [
  { label: "ellipse", p: (t) => [2 * Math.cos(t), Math.sin(t)], v: (t) => [-2 * Math.sin(t), Math.cos(t)] },
  { label: "limaçon", p: (t) => [(0.5 + Math.cos(t)) * Math.cos(t), (0.5 + Math.cos(t)) * Math.sin(t)], v: (t) => [-0.5 * Math.sin(t) - Math.sin(2 * t), 0.5 * Math.cos(t) + Math.cos(2 * t)] },
  { label: "figure eight", p: (t) => [Math.sin(t), Math.sin(t) * Math.cos(t)], v: (t) => [Math.cos(t), Math.cos(2 * t)] },
  { label: "clockwise circle", p: (t) => [Math.cos(t), -Math.sin(t)], v: (t) => [-Math.sin(t), -Math.cos(t)] },
];

/** The rotation index: the tangent of a closed curve turns through a whole number of full turns. */
export function TotalTurningViz() {
  const [ci, setCi] = useState(1);
  const [u, setU] = useState(1);
  const c = CURVES[ci];
  const T = 2 * Math.PI;
  const M = 600;
  const steps = Math.round(u * M);
  let turn = 0;
  let prev = Math.atan2(c.v(0)[1], c.v(0)[0]);
  for (let i = 1; i <= steps; i++) {
    const [vx, vy] = c.v((i / M) * T);
    const a = Math.atan2(vy, vx);
    let d = a - prev;
    while (d > Math.PI) d -= 2 * Math.PI;
    while (d < -Math.PI) d += 2 * Math.PI;
    turn += d;
    prev = a;
  }
  const t = u * T;
  const pts = Array.from({ length: 301 }, (_, i) => c.p((i / 300) * T));
  const xs = pts.map((q) => q[0]), ys = pts.map((q) => q[1]);
  const minX = Math.min(...xs) - 0.3, maxX = Math.max(...xs) + 0.3, minY = Math.min(...ys) - 0.3, maxY = Math.max(...ys) + 0.3;
  const W = 360, H = 240;
  const s = Math.min(W / (maxX - minX), H / (maxY - minY));
  const X = (x: number) => (W - s * (maxX - minX)) / 2 + (x - minX) * s, Y = (y: number) => H - (H - s * (maxY - minY)) / 2 - (y - minY) * s;
  const d = pts.map((q, i) => `${i ? "L" : "M"}${X(q[0]).toFixed(1)},${Y(q[1]).toFixed(1)}`).join(" ");
  const [px, py] = c.p(t), [vx, vy] = c.v(t);
  const sp = Math.hypot(vx, vy);
  const ex = X(px) + (40 * vx) / sp, ey = Y(py) - (40 * vy) / sp;
  const dialA = Math.atan2(vy, vx);
  const turns = turn / (2 * Math.PI);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Closed curve">
        {CURVES.map((q, i) => <button key={q.label} type="button" aria-pressed={ci === i} className={ci === i ? "seg is-on" : "seg"} onClick={() => { setCi(i); }}>{q.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>fraction of the curve travelled: <span className="mono">{u.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.01} value={u} onChange={(e) => setU(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 240" role="img" aria-label="The closed curve with its tangent, and a dial showing the tangent direction" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <path d={d} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2 }} />
        <line x1={X(px)} y1={Y(py)} x2={ex} y2={ey} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />
        <circle cx={X(px)} cy={Y(py)} r={5} style={{ fill: "var(--text)" }} />
        <circle cx={445} cy={110} r={50} style={{ fill: "none", stroke: "var(--border)", strokeWidth: 2 }} />
        <line x1={445} y1={110} x2={445 + 50 * Math.cos(dialA)} y2={110 - 50 * Math.sin(dialA)} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />
        <text x={445} y={185} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>tangent direction</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>tangent has turned through {(turn * 180 / Math.PI).toFixed(1)}°, that is {turns.toFixed(3)} full turns</div>
        <div style={{ fontWeight: 700 }}>{u === 1 ? `rotation index = ${Math.round(turns)}` : "travel the whole curve to read off the rotation index"}</div>
      </div>
      <figcaption className="viz-caption">
        The angle the unit tangent turns through equals the total signed curvature, the integral of κ ds. For a closed curve
        the tangent returns to where it started, so the total is 2π times a whole number, the rotation index. Hopf&rsquo;s
        Umlaufsatz says that a simple closed curve has index 1 or −1, depending on its direction.
      </figcaption>
    </figure>
  );
}
