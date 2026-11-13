"use client";

import { useState } from "react";
import { gcd } from "./ntTools";

/** Lines through (−1, 0) with rational slope m/n meet the unit circle in rational points, which give Pythagorean triples. */
export function RationalPointsViz() {
  const [m, setM] = useState(1);
  const [n, setN] = useState(2);
  const M = Math.min(m, n - 1);
  const t = M / n;
  const px = (1 - t * t) / (1 + t * t), py = (2 * t) / (1 + t * t);
  let a = n * n - M * M, b = 2 * M * n, c = n * n + M * M;
  const g = gcd(gcd(a, b), c);
  a /= g; b /= g; c /= g;
  const W = 360, o = W / 2, R = 140;
  const X = (x: number) => o + x * R, Y = (y: number) => o - y * R;
  const list: string[] = [];
  for (let q = 2; q <= 7; q++) for (let p = 1; p < q; p++) if (gcd(p, q) === 1 && (q - p) % 2 === 1) list.push(`(${q * q - p * p}, ${2 * p * q}, ${q * q + p * p})`);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>m: <span className="mono">{M}</span></span><input type="range" min={1} max={11} step={1} value={m} onChange={(e) => setM(Number(e.target.value))} /></label>
        <label><span>n: <span className="mono">{n}</span></span><input type="range" min={2} max={12} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="A line through (−1, 0) meeting the unit circle" style={{ width: "100%", maxWidth: 380, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={o} x2={W} y2={o} style={{ stroke: "var(--border)" }} />
        <line x1={o} y1={0} x2={o} y2={W} style={{ stroke: "var(--border)" }} />
        <circle cx={o} cy={o} r={R} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        <line x1={X(-1)} y1={Y(0)} x2={X(-1 + 2.3)} y2={Y(2.3 * t)} style={{ stroke: "var(--accent)", strokeWidth: 1.5 }} />
        <line x1={X(px)} y1={Y(0)} x2={X(px)} y2={Y(py)} style={{ stroke: "var(--text-faint)", strokeDasharray: "4 3" }} />
        <circle cx={X(-1)} cy={Y(0)} r={5} style={{ fill: "var(--text)" }} />
        <circle cx={X(px)} cy={Y(py)} r={6} style={{ fill: "var(--accent)" }} />
        <text x={X(px) + (px > 0.2 ? -10 : 10)} y={Y(py) - 8} textAnchor={px > 0.2 ? "end" : "start"} style={{ fill: "var(--text)", fontSize: 12 }}>({a}/{c}, {b}/{c})</text>
        <text x={X(-1) + 6} y={Y(0) + 16} style={{ fill: "var(--text-muted)", fontSize: 11 }}>(−1, 0)</text>
      </svg>
      <p className="mono" style={{ margin: "4px 0", fontSize: 14 }}>
        slope {M}/{n}: point ({a}/{c}, {b}/{c}), triple {a}² + {b}² = {c}² ({a * a} + {b * b} = {c * c})
      </p>
      <p style={{ margin: "4px 0", fontSize: 13, color: "var(--text-muted)" }}>primitive triples from n ≤ 7: {list.join(", ")}</p>
      <figcaption className="viz-caption">
        Every line through (−1, 0) with rational slope meets the circle x² + y² = 1 at a second rational point, and every rational point arises this way. Clearing denominators turns the point into a Pythagorean triple (n² − m², 2mn, n² + m²).
      </figcaption>
    </figure>
  );
}
