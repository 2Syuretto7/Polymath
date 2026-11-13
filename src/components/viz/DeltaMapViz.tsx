"use client";

import { useState } from "react";

const FS = [
  { name: "1/x on (0, 1]", f: (x: number) => 1 / x, a: 0.02, b: 1, unif: false, note: "Near 0 the graph is so steep that δ must shrink to 0. Not uniformly continuous." },
  { name: "x² on [0, 3]", f: (x: number) => x * x, a: 0, b: 3, unif: true, note: "A continuous function on a compact interval is uniformly continuous: δ never drops below a positive floor." },
  { name: "√x on [0, 3]", f: (x: number) => Math.sqrt(x), a: 0, b: 3, unif: true, note: "Infinitely steep at 0, yet uniformly continuous: |√x − √y| ≤ √|x − y|, so δ = ε² works everywhere." },
  { name: "sin(1/x) on (0, 1]", f: (x: number) => Math.sin(1 / x), a: 0.02, b: 1, unif: false, note: "Oscillates faster and faster near 0, so no single δ works. Not uniformly continuous." },
];

/** For each point x, the largest δ that keeps f within ε; uniform continuity asks for a positive δ that works at every x. */
export function DeltaMapViz() {
  const [fi, setFi] = useState(0);
  const [eps, setEps] = useState(0.2);
  const F = FS[fi];
  const M = 160;
  const pts = Array.from({ length: M }, (_, i) => F.a + (i / (M - 1)) * (F.b - F.a));
  // the largest δ (searched on a fine grid) with |f(y) − f(x)| < ε for all y in the domain with |y − x| < δ
  const delta = (x: number) => {
    const fx = F.f(x), step = (F.b - F.a) / 3000;
    for (let d = step; d < F.b - F.a; d += step) {
      for (const y of [x - d, x + d]) {
        if (y < F.a || y > F.b) continue;
        if (Math.abs(F.f(y) - fx) >= eps) return d;
      }
    }
    return F.b - F.a;
  };
  const ds = pts.map(delta);
  const dmax = Math.max(...ds), dmin = Math.min(...ds);
  const W = 560, H = 200, pl = 40;
  const X = (x: number) => pl + ((x - F.a) / (F.b - F.a)) * (W - pl - 10), Y = (d: number) => H - 20 - (d / dmax) * (H - 40);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {FS.map((q, i) => <button key={q.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>{q.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>ε: <span className="mono">{eps}</span></span><input type="range" min={0.05} max={0.5} step={0.05} value={eps} onChange={(e) => setEps(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Largest delta at each point" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={pl} y1={H - 20} x2={W - 10} y2={H - 20} style={{ stroke: "var(--border)" }} />
        <line x1={pl} y1={10} x2={pl} y2={H - 20} style={{ stroke: "var(--border)" }} />
        <text x={pl - 6} y={Y(dmax) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{dmax.toFixed(2)}</text>
        <text x={pl - 6} y={H - 16} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>0</text>
        <text x={W - 10} y={H - 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>x from {F.a === 0 ? "0" : "near 0"} to {F.b}</text>
        <path d={pts.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(ds[i]).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <line x1={pl} y1={Y(dmin)} x2={W - 10} y2={Y(dmin)} style={{ stroke: "var(--danger)", strokeDasharray: "5 4" }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>smallest δ over the sampled points: {dmin.toFixed(4)}</p>
      <p style={{ margin: "4px 0", fontSize: 14 }}>{F.note}</p>
      <figcaption className="viz-caption">
        The curve shows, for each x, the largest δ such that every y within δ of x has |f(y) − f(x)| &lt; ε. Continuity says each
        such δ is positive. Uniform continuity says one δ works for all x at once, so the dashed floor must stay above 0 as the
        sampling approaches the ends of the domain.
      </figcaption>
    </figure>
  );
}
