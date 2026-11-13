"use client";

import { useState } from "react";
import { gcd } from "./ntTools";

/** Integer points on the line ax + by = c: none unless gcd(a, b) divides c, then equally spaced along the line. */
export function DiophantineLineViz() {
  const [a, setA] = useState(6);
  const [b, setB] = useState(9);
  const [c, setC] = useState(21);
  const g = gcd(a, b);
  const R = 12;
  const sols: [number, number][] = [];
  for (let x = -R; x <= R; x++) { const r = c - a * x; if (r % b === 0) { const y = r / b; if (Math.abs(y) <= R) sols.push([x, y]); } }
  const W = 400, S = (W - 20) / (2 * R), X = (x: number) => W / 2 + x * S, Y = (y: number) => W / 2 - y * S;
  const y0 = (x: number) => (c - a * x) / b;
  const nonneg = sols.filter(([x, y]) => x >= 0 && y >= 0);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>a: <span className="mono">{a}</span></span><input type="range" min={1} max={15} step={1} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>b: <span className="mono">{b}</span></span><input type="range" min={1} max={15} step={1} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
        <label><span>c: <span className="mono">{c}</span></span><input type="range" min={0} max={60} step={1} value={c} onChange={(e) => setC(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label={`Integer points on ${a}x + ${b}y = ${c}`} style={{ width: "100%", maxWidth: 420, display: "block", margin: "6px auto" }}>
        <defs><clipPath id="dioclip"><rect x={0} y={0} width={W} height={W} /></clipPath></defs>
        {Array.from({ length: 2 * R + 1 }, (_, i) => i - R).map((t) => t % 2 === 0 && (
          <g key={t}>
            <line x1={X(t)} y1={0} x2={X(t)} y2={W} style={{ stroke: "var(--border)", strokeOpacity: t === 0 ? 1 : 0.35 }} />
            <line x1={0} y1={Y(t)} x2={W} y2={Y(t)} style={{ stroke: "var(--border)", strokeOpacity: t === 0 ? 1 : 0.35 }} />
          </g>
        ))}
        <line x1={X(-R - 1)} y1={Y(y0(-R - 1))} x2={X(R + 1)} y2={Y(y0(R + 1))} clipPath="url(#dioclip)" style={{ stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        {sols.map(([x, y]) => <circle key={x} cx={X(x)} cy={Y(y)} r={5} style={{ fill: x >= 0 && y >= 0 ? "var(--accent)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 2 }} />)}
      </svg>
      <p className="mono" style={{ margin: "4px 0", fontSize: 14 }}>gcd({a}, {b}) = {g}{c % g === 0 ? ` divides ${c}` : ` does not divide ${c}`}</p>
      <p className={sols.length ? "viz-verdict viz-verdict-right" : "viz-verdict viz-verdict-wrong"} style={{ margin: "4px 0" }}>
        {c % g !== 0
          ? "No integer solutions: the line passes between the lattice points."
          : sols.length
            ? `Solutions in view: ${sols.map(([x, y]) => `(${x}, ${y})`).join(", ")}. Consecutive ones differ by (${b / g}, −${a / g}).`
            : "Solutions exist, but none in this window."}
      </p>
      {c % g === 0 && <p className="mono" style={{ margin: "4px 0", fontSize: 13 }}>non-negative solutions: {nonneg.length ? nonneg.map(([x, y]) => `(${x}, ${y})`).join(", ") : "none"}</p>}
      <figcaption className="viz-caption">
        The line ax + by = c meets lattice points only when gcd(a, b) divides c. Then the solutions are equally spaced: from one solution (x₀, y₀) all others are (x₀ + (b/g)t, y₀ − (a/g)t). Filled points have x, y ≥ 0, as when paying c rupees with coins of a and b.
      </figcaption>
    </figure>
  );
}
