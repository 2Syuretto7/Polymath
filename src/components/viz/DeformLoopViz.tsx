"use client";

import { useState } from "react";

/** ∮ dz/(1 + z²) round a movable circle: the value changes only when the circle crosses a singularity. */
export function DeformLoopViz() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0.5);
  const [r, setR] = useState(1);
  const poles: [number, number][] = [[0, 1], [0, -1]];
  const dist = poles.map(([p, q]) => Math.hypot(p - a, q - b));
  const on = dist.some((d) => Math.abs(d - r) < 0.02);
  // trapezoid rule on the circle, which is very accurate for smooth periodic integrands
  const N = 800;
  let re = 0, im = 0;
  for (let k = 0; k < N; k++) {
    const t = (2 * Math.PI * k) / N;
    const x = a + r * Math.cos(t), y = b + r * Math.sin(t);
    // f = 1/(1 + z²), z² = x² − y² + 2ixy
    const dr = 1 + x * x - y * y, di = 2 * x * y, dd = dr * dr + di * di;
    const fr = dr / dd, fi = -di / dd;
    const zr = -r * Math.sin(t), zi = r * Math.cos(t); // dz/dt
    re += (fr * zr - fi * zi) * ((2 * Math.PI) / N);
    im += (fr * zi + fi * zr) * ((2 * Math.PI) / N);
  }
  const inside = dist.map((d) => d < r);
  const W = 400, B = 3, pad = 10;
  const X = (u: number) => W / 2 + (u / B) * (W / 2 - pad);
  const Y = (v: number) => W / 2 - (v / B) * (W / 2 - pad);
  const sc = (W / 2 - pad) / B;
  const fmt = (v: number) => (Math.abs(v) < 5e-4 ? "0.000" : v.toFixed(3));
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>centre, real part: <span className="mono">{a}</span></span><input type="range" min={-2} max={2} step={0.25} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>centre, imaginary part: <span className="mono">{b}</span></span><input type="range" min={-2} max={2} step={0.25} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
        <label><span>radius: <span className="mono">{r}</span></span><input type="range" min={0.25} max={2.5} step={0.25} value={r} onChange={(e) => setR(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="A circle and the two singularities of 1/(1 + z²)" style={{ width: "100%", maxWidth: 440, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
        <circle cx={X(a)} cy={Y(b)} r={r * sc} style={{ fill: "var(--accent)", fillOpacity: 0.1, stroke: "var(--accent)", strokeWidth: 2.5 }} />
        {poles.map(([p, q], i) => (
          <g key={i} style={{ stroke: inside[i] ? "var(--danger)" : "var(--text-faint)", strokeWidth: 3 }}>
            <line x1={X(p) - 7} y1={Y(q) - 7} x2={X(p) + 7} y2={Y(q) + 7} />
            <line x1={X(p) - 7} y1={Y(q) + 7} x2={X(p) + 7} y2={Y(q) - 7} />
          </g>
        ))}
        <text x={X(0) + 12} y={Y(1) + 4} style={{ fill: "var(--text-muted)", fontSize: 12 }}>i</text>
        <text x={X(0) + 12} y={Y(-1) + 4} style={{ fill: "var(--text-muted)", fontSize: 12 }}>−i</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>inside the circle: {inside[0] && inside[1] ? "both i and −i" : inside[0] ? "i only" : inside[1] ? "−i only" : "neither"}</div>
        <div>{on ? "The circle passes through a singularity, so the integral is not defined." : `∮ dz/(1 + z²) = ${fmt(re)} ${im < -5e-4 ? "−" : "+"} ${fmt(Math.abs(im))}i`}</div>
      </div>
      <figcaption className="viz-caption">
        Slide the circle about. The integral stays exactly the same as long as the circle does not cross i or −i: that is
        Cauchy&rsquo;s theorem at work, since the difference between two such loops bounds a region where the function is
        holomorphic. With neither singularity inside it is 0; with i inside it is π; with −i inside it is −π; with both it is 0
        again.
      </figcaption>
    </figure>
  );
}
