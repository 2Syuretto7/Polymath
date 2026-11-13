"use client";

import { useState } from "react";

/** A repeated root is a common root of f and f′: watch the roots of f = (x − a)(x − b)(x − c) and of f′. */
export function RepeatedRootViz() {
  const [a, setA] = useState(-1.5);
  const [b, setB] = useState(0.5);
  const [c, setC] = useState(1.5);
  const f = (x: number) => (x - a) * (x - b) * (x - c);
  const s1 = a + b + c, s2 = a * b + b * c + c * a;
  const fp = (x: number) => 3 * x * x - 2 * s1 * x + s2;
  const disc = ((a - b) * (b - c) * (c - a)) ** 2;
  const dd = s1 * s1 - 3 * s2;
  const crit = dd >= 0 ? [(s1 - Math.sqrt(dd)) / 3, (s1 + Math.sqrt(dd)) / 3] : [];
  const shared = [a, b, c].filter((r) => Math.abs(fp(r)) < 1e-9);
  const W = 560, H = 240, B = 2.5, V = 4;
  const X = (x: number) => 20 + ((x + B) / (2 * B)) * (W - 40), Y = (y: number) => H / 2 - (y / V) * (H / 2 - 10);
  const path = (g: (x: number) => number) => Array.from({ length: 301 }, (_, k) => { const x = -B + (2 * B * k) / 300; const y = Math.max(-V * 1.2, Math.min(V * 1.2, g(x))); return `${k ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)}`; }).join(" ");
  const sl = (label: string, v: number, set: (x: number) => void) => (
    <label><span>{label}: <span className="mono">{v.toFixed(1)}</span></span><input type="range" min={-2} max={2} step={0.1} value={v} onChange={(e) => set(Math.round(Number(e.target.value) * 10) / 10)} /></label>
  );
  return (
    <figure className="viz">
      <div className="viz-sliders">{sl("root a", a, setA)}{sl("root b", b, setB)}{sl("root c", c, setC)}</div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Graphs of f and its derivative" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <defs><clipPath id="rrclip"><rect x={0} y={0} width={W} height={H} /></clipPath></defs>
        <line x1={20} y1={Y(0)} x2={W - 20} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <g clipPath="url(#rrclip)">
          <path d={path(fp)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "5 4" }} />
          <path d={path(f)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        </g>
        {[a, b, c].map((r, i) => <circle key={i} cx={X(r)} cy={Y(0)} r={5} style={{ fill: "var(--accent)" }} />)}
        {crit.map((r, i) => <circle key={`c${i}`} cx={X(r)} cy={Y(0)} r={7} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 1.5 }} />)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>roots of f (filled): {[a, b, c].map((r) => r.toFixed(1)).join(", ")}; roots of f′ (rings): {crit.map((r) => r.toFixed(2)).join(", ") || "none real"}</div>
        <div>discriminant (a − b)²(b − c)²(c − a)² = {disc.toFixed(3)}</div>
        <div>{shared.length ? `repeated root at ${shared[0].toFixed(1)}: it is also a root of f′, so gcd(f, f′) ≠ 1` : "no repeated root: f and f′ have no common root, so gcd(f, f′) = 1"}</div>
      </div>
      <figcaption className="viz-caption">
        Drag two roots together. The solid curve f then touches the axis, the dashed derivative f′ passes through the same
        point, and the discriminant becomes 0. Testing gcd(f, f′) finds repeated roots without knowing the roots at all.
      </figcaption>
    </figure>
  );
}
