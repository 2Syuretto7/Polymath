"use client";

import { useState } from "react";

const bump = (t: number) => (t > 0 ? Math.exp(-1 / t) : 0);
// a smooth function equal to 1 near the centre of (a, b) region, zero outside (a, b)
const psi = (x: number, a: number, b: number) => { const t = (x - a) / (b - a); return t <= 0 || t >= 1 ? 0 : bump(t) * bump(1 - t); };

/** A smooth partition of unity on [0, 1] subordinate to overlapping intervals, used to glue local pieces into one smooth function. */
export function BumpPartitionViz() {
  const [k, setK] = useState(4);
  const [glue, setGlue] = useState(false);
  const L = 1 / k, ov = L * 0.6;
  const ivs = Array.from({ length: k }, (_, i) => [i * L - ov, (i + 1) * L + ov] as [number, number]);
  const xs = Array.from({ length: 401 }, (_, i) => i / 400);
  const psis = xs.map((x) => ivs.map(([a, b]) => psi(x, a, b)));
  const phis = psis.map((row) => { const s = row.reduce((p, q) => p + q, 0) || 1; return row.map((v) => v / s); });
  // local models: on each interval, the tangent line of sin(2πx) at its centre
  const g = (x: number) => Math.sin(2 * Math.PI * x);
  const local = (i: number, x: number) => { const c = (ivs[i][0] + ivs[i][1]) / 2; return g(c) + 2 * Math.PI * Math.cos(2 * Math.PI * c) * (x - c); };
  const glued = xs.map((x, j) => phis[j].reduce((s, p, i) => s + p * local(i, x), 0));
  const W = 560, H = 200, pl = 20;
  const X = (x: number) => pl + x * (W - 2 * pl);
  const Y1 = (v: number) => H - 20 - v * (H - 40);
  const Y2 = (v: number) => H / 2 - (v / 1.3) * (H / 2 - 12);
  const err = Math.max(...xs.map((x, j) => Math.abs(glued[j] - g(x))));
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>number of intervals: <span className="mono">{k}</span></span><input type="range" min={2} max={12} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} /></label>
      </div>
      <div className="segmented" role="group" aria-label="View" style={{ marginTop: 6 }}>
        <button type="button" aria-pressed={!glue} className={!glue ? "seg is-on" : "seg"} onClick={() => setGlue(false)}>the partition of unity</button>
        <button type="button" aria-pressed={glue} className={glue ? "seg is-on" : "seg"} onClick={() => setGlue(true)}>gluing local pieces</button>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={glue ? "Local linear pieces glued by the partition of unity" : "Smooth functions on overlapping intervals summing to 1"} style={{ width: "100%", display: "block", marginTop: 8 }}>
        {!glue && <>
          <line x1={pl} y1={Y1(1)} x2={W - pl} y2={Y1(1)} style={{ stroke: "var(--text-faint)", strokeDasharray: "5 4" }} />
          <line x1={pl} y1={Y1(0)} x2={W - pl} y2={Y1(0)} style={{ stroke: "var(--border)" }} />
          {ivs.map((_, i) => <path key={i} d={xs.map((x, j) => `${j ? "L" : "M"}${X(x).toFixed(1)},${Y1(phis[j][i]).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: i % 2 ? "var(--accent)" : "var(--text)", strokeWidth: 2 }} />)}
        </>}
        {glue && <>
          <line x1={pl} y1={Y2(0)} x2={W - pl} y2={Y2(0)} style={{ stroke: "var(--border)" }} />
          {ivs.map((iv, i) => { const a = Math.max(0, iv[0]), b = Math.min(1, iv[1]); return <line key={i} x1={X(a)} y1={Y2(local(i, a))} x2={X(b)} y2={Y2(local(i, b))} style={{ stroke: "var(--text-faint)", strokeWidth: 1.2 }} />; })}
          <path d={xs.map((x, j) => `${j ? "L" : "M"}${X(x).toFixed(1)},${Y2(g(x)).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 1.5, strokeDasharray: "4 3" }} />
          <path d={xs.map((x, j) => `${j ? "L" : "M"}${X(x).toFixed(1)},${Y2(glued[j]).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        </>}
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        {glue ? `glued function Σ φᵢ·(local line i); largest distance from sin 2πx: ${err.toFixed(4)}` : `Σ φᵢ(x) = 1 at every x; each φᵢ vanishes outside its interval`}
      </p>
      <figcaption className="viz-caption">
        Each φᵢ is a smooth bump on one interval divided by the sum of all bumps, so the φᵢ add up to exactly 1. Multiplying
        local objects by φᵢ and adding glues them into one smooth global object. Here the local objects are tangent lines to
        sin 2πx, shown faintly; more intervals give a better glued approximation.
      </figcaption>
    </figure>
  );
}
