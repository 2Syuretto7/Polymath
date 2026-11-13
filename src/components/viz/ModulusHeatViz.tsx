"use client";

import { useState } from "react";

type C = [number, number];
const FS: { name: string; f: (z: C) => C }[] = [
  { name: "eᶻ", f: ([x, y]) => [Math.exp(x) * Math.cos(y), Math.exp(x) * Math.sin(y)] },
  { name: "z² + 0.5", f: ([x, y]) => [x * x - y * y + 0.5, 2 * x * y] },
  { name: "cos z", f: ([x, y]) => [Math.cos(x) * Math.cosh(y), -Math.sin(x) * Math.sinh(y)] },
  { name: "z − 0.4i", f: ([x, y]) => [x, y - 0.4] },
];

/** |f| on the unit disc, shaded: its maximum always lies on the boundary circle. */
export function ModulusHeatViz() {
  const [fi, setFi] = useState(0);
  const [rad, setRad] = useState(1);
  const F = FS[fi];
  const n = 36, W = 380, s = W / 2 - 10;
  const cells: { x: number; y: number; v: number }[] = [];
  let mx = 0, mn = Infinity, at: C = [0, 0], atMin: C = [0, 0];
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    const x = -rad + ((i + 0.5) * 2 * rad) / n, y = -rad + ((j + 0.5) * 2 * rad) / n;
    if (Math.hypot(x, y) > rad) continue;
    const [u, v] = F.f([x, y]); const m = Math.hypot(u, v);
    cells.push({ x, y, v: m });
  }
  for (let k = 0; k < 720; k++) { const t = (2 * Math.PI * k) / 720; const p: C = [rad * Math.cos(t), rad * Math.sin(t)]; const [u, v] = F.f(p); const m = Math.hypot(u, v); if (m > mx) { mx = m; at = p; } }
  for (const c of cells) if (c.v < mn) { mn = c.v; atMin = [c.x, c.y]; }
  let interiorMax = 0; for (const c of cells) interiorMax = Math.max(interiorMax, c.v);
  const X = (u: number) => W / 2 + (u / rad) * s, Y = (v: number) => W / 2 - (v / rad) * s;
  const cw = (2 * s) / n;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {FS.map((f, i) => <button key={f.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>f(z) = {f.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>radius of disc: <span className="mono">{rad}</span></span>
          <input type="range" min={0.5} max={2} step={0.25} value={rad} onChange={(e) => setRad(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Shading of |f| over a disc, with its maximum marked" style={{ width: "100%", maxWidth: 400, display: "block", margin: "6px auto" }}>
        {cells.map((c, k) => <rect key={k} x={X(c.x) - cw / 2} y={Y(c.y) - cw / 2} width={cw + 0.5} height={cw + 0.5} style={{ fill: "var(--accent)", fillOpacity: 0.05 + 0.85 * (c.v / mx) }} />)}
        <circle cx={W / 2} cy={W / 2} r={s} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 1.5 }} />
        <circle cx={X(at[0])} cy={Y(at[1])} r={7} style={{ fill: "var(--bg)", stroke: "var(--text)", strokeWidth: 3 }} />
        <circle cx={X(atMin[0])} cy={Y(atMin[1])} r={5} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2, strokeDasharray: "2 2" }} />
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>largest |f| on the boundary circle: {mx.toFixed(4)}, at {at[0].toFixed(2)} {at[1] < 0 ? "−" : "+"} {Math.abs(at[1]).toFixed(2)}i</div>
        <div>largest |f| at sampled interior points: {interiorMax.toFixed(4)}</div>
        <div>smallest |f| sampled: {mn.toFixed(4)}</div>
      </div>
      <figcaption className="viz-caption">
        More strongly shaded cells have larger |f|. The solid ring marks where |f| is largest: always on the boundary. The dashed ring marks
        the smallest sampled value, which can be inside only where f has a zero, or else it is on the boundary too.
      </figcaption>
    </figure>
  );
}
