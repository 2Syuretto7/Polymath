"use client";

import { useState } from "react";

/** Two distances on C[0, 1]: the sup distance and the area between graphs. A narrow spike is far in one and near in the other. */
export function SupDistanceViz() {
  const [w, setW] = useState(0.2);
  const [h, setH] = useState(1);
  const [c, setC] = useState(0.5);
  const f = (x: number) => 0.3 + 0.2 * Math.sin(2 * Math.PI * x);
  const spike = (x: number) => Math.max(0, h * (1 - Math.abs(x - c) / (w / 2)));
  const g = (x: number) => f(x) + spike(x);
  const N = 400, xs = Array.from({ length: N + 1 }, (_, i) => i / N);
  const sup = h, l1 = (h * w) / 2;
  const W = 560, H = 220, pl = 30;
  const X = (x: number) => pl + x * (W - pl - 10), Y = (y: number) => H - 20 - (y / 2) * (H - 30);
  const line = (fn: (x: number) => number) => xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(fn(x)).toFixed(1)}`).join(" ");
  const area = xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(g(x)).toFixed(1)}`).join(" ") + " " + [...xs].reverse().map((x) => `L${X(x).toFixed(1)},${Y(f(x)).toFixed(1)}`).join(" ") + " Z";
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>spike width: <span className="mono">{w}</span></span><input type="range" min={0.01} max={0.5} step={0.01} value={w} onChange={(e) => setW(Number(e.target.value))} /></label>
        <label><span>spike height: <span className="mono">{h}</span></span><input type="range" min={0.1} max={1.5} step={0.1} value={h} onChange={(e) => setH(Number(e.target.value))} /></label>
        <label><span>spike position: <span className="mono">{c}</span></span><input type="range" min={0.25} max={0.75} step={0.05} value={c} onChange={(e) => setC(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Two functions, the area between them, and their largest gap" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={pl} y1={Y(0)} x2={W - 10} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <path d={area} style={{ fill: "var(--accent)", fillOpacity: 0.25 }} />
        <path d={line(f)} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <path d={line(g)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <line x1={X(c)} y1={Y(f(c))} x2={X(c)} y2={Y(g(c))} style={{ stroke: "var(--danger)", strokeWidth: 2, strokeDasharray: "4 3" }} />
        <text x={X(c) + 6} y={Y((f(c) + g(c)) / 2)} style={{ fill: "var(--danger)", fontSize: 12 }}>sup gap</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>d∞(f, g) = sup |f − g| = {sup.toFixed(3)}</div>
        <div>d₁(f, g) = ∫ |f − g| = {l1.toFixed(4)}</div>
      </div>
      <figcaption className="viz-caption">
        The dark curve is f and the other is g, which adds a spike. Shrink the width: the area between them, the d₁ distance,
        goes to 0, while the sup distance stays at the spike&rsquo;s height. Uniform convergence means convergence in d∞, and
        C[0, 1] is complete with d∞ but not with d₁.
      </figcaption>
    </figure>
  );
}
