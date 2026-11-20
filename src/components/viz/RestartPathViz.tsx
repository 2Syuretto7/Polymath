"use client";

import { useState } from "react";
import { normalDraw, seededRng } from "./seededRng";

/** Strong Markov property: after the hitting time of level a, the path starts afresh as a Brownian motion. */
export function RestartPathViz() {
  const [a10, setA] = useState(10);
  const [seed, setSeed] = useState(1);
  const a = a10 / 10;
  const N = 2000, T = 4, dt = T / N;
  const r = seededRng(seed * 7919 + 3);
  const paths: { pre: number[]; post: number[] }[] = [];
  const ends: number[] = [];
  for (let j = 0; j < 400; j++) {
    let b = 0, k = 0;
    const pre = [0];
    while (k < N && b < a) { b += Math.sqrt(dt) * normalDraw(r); k++; if (j < 6) pre.push(b); }
    if (b < a) continue;
    const post = [0];
    let c = 0;
    for (let m = 0; m < 400; m++) { c += Math.sqrt(dt) * normalDraw(r); if (j < 6) post.push(c); }
    ends.push(c);
    if (j < 6) paths.push({ pre, post });
  }
  const mean = ends.reduce((p, v) => p + v, 0) / ends.length;
  const vr = ends.reduce((p, v) => p + (v - mean) ** 2, 0) / ends.length;
  const X0 = 30, W = 230, Y0 = 12, H = 160, lo = -3, hi = 3;
  const y = (v: number) => Y0 + ((hi - Math.max(lo, Math.min(hi, v))) / (hi - lo)) * H;
  const xl = (k: number) => X0 + (k / N) * W, xr = (m: number) => 290 + (m / 400) * W;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>level a = {a.toFixed(1)} <input type="range" min={2} max={20} value={a10} onChange={(e) => setA(Number(e.target.value))} aria-label="level" /></label>
        <button type="button" className="btn btn-ghost" onClick={() => setSeed(seed + 1)}>new paths</button>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Paths up to the hitting time and their restarted continuations" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0} y1={y(a)} x2={X0 + W} y2={y(a)} style={{ stroke: "var(--success)", strokeDasharray: "4 3" }} />
        <text x={X0 + W} y={y(a) - 4} textAnchor="end" style={{ fill: "var(--success)", fontSize: 10 }}>level a</text>
        <line x1={X0} y1={y(0)} x2={X0 + W} y2={y(0)} style={{ stroke: "var(--border-strong)" }} />
        <line x1={290} y1={y(0)} x2={290 + W} y2={y(0)} style={{ stroke: "var(--border-strong)" }} />
        {paths.map((p, i) => <polyline key={`a${i}`} points={p.pre.map((v, k) => `${xl(k)},${y(v)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.2, opacity: 0.7 }} />)}
        {paths.map((p, i) => <polyline key={`b${i}`} points={p.post.map((v, m) => `${xr(m)},${y(v)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.2, opacity: 0.7 }} />)}
        <text x={X0} y={Y0 + H + 16} style={{ fill: "var(--text-muted)", fontSize: 10 }}>B up to T, the first time B reaches a</text>
        <text x={290} y={Y0 + H + 16} style={{ fill: "var(--text-muted)", fontSize: 10 }}>B at time T + s, minus a, for s ≤ 0.8</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Over {ends.length} paths that reached a by time 4: B at T + 0.8, minus a, has mean {mean.toFixed(3)} and variance {vr.toFixed(3)} (a fresh Brownian motion: 0 and 0.8).
      </p>
      <figcaption className="viz-caption">
        Left: paths of B until the stopping time T at which they first reach a. Right: what each path does afterwards,
        shifted to start at 0. Whatever happened before T, the continuation is a new Brownian motion independent of the
        past: the strong Markov property.
      </figcaption>
    </figure>
  );
}
