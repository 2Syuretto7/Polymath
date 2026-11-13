"use client";

import { useState } from "react";

const FS = [
  { name: "xy / (x² + y²)", f: (x: number, y: number) => (x * y) / (x * x + y * y), cont: false, note: "Along the line at angle θ the value is sin θ cos θ, which depends on θ. There is no limit at the origin." },
  { name: "x²y / (x² + y²)", f: (x: number, y: number) => (x * x * y) / (x * x + y * y), cont: true, note: "|x²y / (x² + y²)| ≤ |y| → 0, so the limit is 0 along every path, and setting f(0, 0) = 0 makes f continuous." },
  { name: "x²y / (x⁴ + y²)", f: (x: number, y: number) => (x * x * y) / (x ** 4 + y * y), cont: false, note: "Along every straight line the limit is 0, but along the parabola y = x² the value is 1/2. Lines are not enough." },
];

/** Limits in the plane: approach the origin along lines at angle θ, or along a parabola. */
export function PathLimitViz() {
  const [fi, setFi] = useState(0);
  const [th, setTh] = useState(30);
  const [para, setPara] = useState(false);
  const F = FS[fi];
  const t = (th * Math.PI) / 180;
  const pt = (r: number): [number, number] => (para ? [r, r * r] : [r * Math.cos(t), r * Math.sin(t)]);
  const rs = Array.from({ length: 120 }, (_, i) => 0.005 + (i / 119) * 0.995);
  const W = 560, H = 220, pl = 40;
  const X = (r: number) => pl + r * (W - pl - 10), Y = (v: number) => H / 2 - v * (H / 2 - 14) / 0.7;
  const val = F.f(...pt(0.005));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {FS.map((q, i) => <button key={q.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>{q.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>direction θ: <span className="mono">{th}°</span></span><input type="range" min={0} max={180} step={5} value={th} disabled={para} onChange={(e) => setTh(Number(e.target.value))} /></label>
      </div>
      <div className="segmented" role="group" aria-label="Path" style={{ marginTop: 6 }}>
        <button type="button" aria-pressed={!para} className={!para ? "seg is-on" : "seg"} onClick={() => setPara(false)}>straight line</button>
        <button type="button" aria-pressed={para} className={para ? "seg is-on" : "seg"} onClick={() => setPara(true)}>parabola y = x²</button>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Value of the function as the point approaches the origin" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={pl} y1={Y(0)} x2={W - 10} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={pl} y1={10} x2={pl} y2={H - 10} style={{ stroke: "var(--border)" }} />
        {[-0.5, 0.5].map((v) => <text key={v} x={pl - 6} y={Y(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{v}</text>)}
        <text x={W - 10} y={Y(0) + 16} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>distance along the path →</text>
        <path d={rs.map((r, i) => `${i ? "L" : "M"}${X(r).toFixed(1)},${Y(F.f(...pt(r))).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <circle cx={X(0.005)} cy={Y(val)} r={5} style={{ fill: "var(--accent)" }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>value near the origin along this path: {val.toFixed(4)}</p>
      <p style={{ margin: "4px 0", fontSize: 14 }}>{F.note}</p>
      <figcaption className="viz-caption">
        A function on the plane is continuous at the origin when f(p) → f(0, 0) however p approaches, not just along the axes
        or along lines. Change θ and compare the values the curve approaches at the left edge.
      </figcaption>
    </figure>
  );
}
