"use client";

import { useState } from "react";

function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const A = 2, B = 7;

/** Method of moments for the uniform distribution on [a, b]: match the mean and variance, and see what can go wrong. */
export function MomentFitViz() {
  const [n, setN] = useState(10);
  const [seed, setSeed] = useState(1);
  const r = rng(seed * 7717 + n);
  const xs = Array.from({ length: n }, () => A + (B - A) * r());
  const mean = xs.reduce((s, x) => s + x, 0) / n;
  const m2 = xs.reduce((s, x) => s + (x - mean) * (x - mean), 0) / n;
  const sd = Math.sqrt(m2);
  const aHat = mean - Math.sqrt(3) * sd, bHat = mean + Math.sqrt(3) * sd;
  const lo = Math.min(...xs), hi = Math.max(...xs);
  const outside = xs.filter((x) => x < aHat || x > bHat).length;
  const X = (v: number) => 30 + ((v - 0) / 9) * 460;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>sample size n: <span className="mono">{n}</span></span>
          <input type="range" min={3} max={60} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => setSeed((s) => s + 1)}>draw a new sample</button>
      </div>
      <svg viewBox="0 0 520 150" role="img" aria-label="A sample and two estimated intervals" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={70} x2={X(9)} y2={70} style={{ stroke: "var(--border)" }} />
        <rect x={X(A)} y={28} width={X(B) - X(A)} height={14} style={{ fill: "none", stroke: "var(--text-muted)", strokeDasharray: "4 3" }} />
        <text x={X(A)} y={22} style={{ fill: "var(--text-muted)", fontSize: 11 }}>true interval [2, 7]</text>
        <rect x={X(aHat)} y={98} width={X(bHat) - X(aHat)} height={14} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 1.5 }} />
        <text x={X(aHat)} y={128} style={{ fill: "var(--accent)", fontSize: 11 }}>method of moments [â, b̂]</text>
        {xs.map((x, i) => (
          <circle key={i} cx={X(x)} cy={70} r={4} style={{ fill: x < aHat || x > bHat ? "var(--danger-soft)" : "var(--text-faint)", stroke: x < aHat || x > bHat ? "var(--text)" : "none" }} />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((v) => <text key={v} x={X(v) - 3} y={146} style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text>)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>sample mean {mean.toFixed(3)}, sample sd σ̂ = {sd.toFixed(3)}</div>
        <div>â = mean − √3 × sd = {aHat.toFixed(3)}, b̂ = mean + √3 × sd = {bHat.toFixed(3)}</div>
        <div>smallest and largest observations: {lo.toFixed(3)} and {hi.toFixed(3)}</div>
        <div style={{ fontWeight: 700 }}>observations outside [â, b̂]: {outside}</div>
      </div>
      <figcaption className="viz-caption">
        The uniform distribution on [a, b] has mean (a + b)/2 and variance (b − a)²/12. Setting these equal to the sample
        mean and the sample second central moment σ̂² and solving gives â and b̂. The estimates are usually close to 2 and 7,
        and closer for larger n, but sometimes an observation falls outside [â, b̂], which is impossible if the estimates
        were right. Moments use the data only through averages and ignore what the sample plainly shows.
      </figcaption>
    </figure>
  );
}
