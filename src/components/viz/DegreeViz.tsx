"use client";

import { useState } from "react";

/** Degree as a signed count of preimages, for maps of the circle with lifted angle F(θ) = dθ + c sin θ. */
export function DegreeViz() {
  const [d, setD] = useState(2);
  const [c, setC] = useState(2.5);
  const [alpha, setAlpha] = useState(1);
  const TAU = 2 * Math.PI;
  const F = (t: number) => d * t + c * Math.sin(t);
  const N = 720;
  const ts = Array.from({ length: N + 1 }, (_, i) => (TAU * i) / N);
  const vals = ts.map(F);
  const lo = Math.min(...vals) - 0.5, hi = Math.max(...vals) + 0.5;
  const X0 = 50, W = 300, Y0 = 16, H = 200;
  const sx = (t: number) => X0 + (W * t) / TAU;
  const sy = (v: number) => Y0 + H - (H * (v - lo)) / (hi - lo);
  const levels: number[] = [];
  for (let k = Math.floor((lo - alpha) / TAU); alpha + k * TAU <= hi; k++) if (alpha + k * TAU >= lo) levels.push(alpha + k * TAU);
  const hits: { t: number; s: number }[] = [];
  for (let i = 0; i < N; i++) {
    for (const L of levels) {
      const a = vals[i] - L, b = vals[i + 1] - L;
      if (a === 0 || (a < 0 && b > 0) || (a > 0 && b < 0)) hits.push({ t: ts[i] + (ts[i + 1] - ts[i]) * (a / (a - b || 1)), s: b > a ? 1 : -1 });
    }
  }
  const plus = hits.filter((h) => h.s > 0).length, minus = hits.length - plus;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="degree">
        {[-3, -2, -1, 0, 1, 2, 3].map((m) => <button key={m} type="button" aria-pressed={d === m} className={d === m ? "seg is-on" : "seg"} onClick={() => setD(m)}>d = {m}</button>)}
      </div>
      <div className="viz-controls">
        <label>wiggle c = {c.toFixed(1)} <input type="range" min={0} max={40} value={Math.round(c * 10)} onChange={(e) => setC(Number(e.target.value) / 10)} aria-label="wiggle" /></label>
        <label>target angle = {alpha.toFixed(2)} <input type="range" min={0} max={628} value={Math.round(alpha * 100)} onChange={(e) => setAlpha(Number(e.target.value) / 100)} aria-label="target" /></label>
      </div>
      <svg viewBox="0 0 520 240" role="img" aria-label="The lifted angle of a circle map and its crossings of a target level" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={X0} y={Y0} width={W} height={H} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        {levels.map((L) => <line key={L} x1={X0} y1={sy(L)} x2={X0 + W} y2={sy(L)} style={{ stroke: "var(--text-faint)", strokeDasharray: "4 4" }} />)}
        <polyline points={ts.map((t, i) => `${sx(t)},${sy(vals[i])}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        {hits.map((h, i) => <circle key={i} cx={sx(h.t)} cy={sy(F(h.t))} r={5} style={{ fill: h.s > 0 ? "var(--success)" : "var(--danger)", stroke: "var(--bg)", strokeWidth: 1 }} />)}
        <text x={X0} y={Y0 + H + 18} style={{ fill: "var(--text-muted)", fontSize: 11 }}>θ = 0</text>
        <text x={X0 + W} y={Y0 + H + 18} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>θ = 2π</text>
        <text x={370} y={40} style={{ fill: "var(--text)", fontSize: 12 }}>lifted angle F(θ)</text>
        <text x={370} y={58} style={{ fill: "var(--text-muted)", fontSize: 11 }}>dashed: the target, mod 2π</text>
        <text x={370} y={92} style={{ fill: "var(--success)", fontSize: 13, fontWeight: 700 }}>+1 crossings: {plus}</text>
        <text x={370} y={114} style={{ fill: "var(--danger)", fontSize: 13, fontWeight: 700 }}>−1 crossings: {minus}</text>
        <text x={370} y={142} style={{ fill: "var(--accent)", fontSize: 14, fontWeight: 700 }}>signed count = {plus - minus}</text>
        <text x={370} y={164} style={{ fill: "var(--text-muted)", fontSize: 11 }}>(F(2π) − F(0)) / 2π = {d}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {hits.length} preimage{hits.length === 1 ? "" : "s"} of the target, counted with sign: {plus} − {minus} = {plus - minus}. The degree is {d}{plus - minus === d ? ", as it must be." : "."}
      </p>
      <figcaption className="viz-caption">
        The map sends angle θ to angle F(θ). Each preimage of the target counts +1 where the map preserves orientation and −1
        where it reverses it. Wiggling the map, or moving the target, changes how many preimages there are, but never the
        signed count: that is the degree.
      </figcaption>
    </figure>
  );
}
