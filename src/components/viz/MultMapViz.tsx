"use client";

import { useState } from "react";
import { subs } from "./groupOrder";

/** Multiplication by a in ℤₙ, drawn as arrows: injective exactly when a has no zero-divisor partner, and then it hits 1. */
export function MultMapViz() {
  const [n, setN] = useState(7);
  const [a, setA] = useState(3);
  const aa = Math.min(a, n - 1);
  const W = 520, top = 30, bot = 140;
  const xs = (i: number) => 30 + (i * (W - 60)) / Math.max(1, n - 1);
  const img = Array.from({ length: n }, (_, x) => (aa * x) % n);
  const hits = new Set(img);
  const inj = hits.size === n;
  const inv = img.indexOf(1);
  const clash = img.findIndex((v, x) => x > 0 && v === 0);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>n: <span className="mono">{n}</span></span>
          <input type="range" min={2} max={13} value={n} onChange={(ev) => setN(Math.round(Number(ev.target.value)))} /></label>
        <label><span>a: <span className="mono">{aa}</span></span>
          <input type="range" min={1} max={n - 1} value={aa} onChange={(ev) => setA(Math.round(Number(ev.target.value)))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} 170`} role="img" aria-label={`Multiplication by ${aa} in ℤ${subs(n)}`} style={{ width: "100%", display: "block" }}>
        {img.map((v, x) => (
          <line key={x} x1={xs(x)} y1={top + 8} x2={xs(v)} y2={bot - 8}
            style={{ stroke: x === inv ? "var(--accent)" : x > 0 && v === 0 ? "var(--danger)" : "var(--text-faint)", strokeWidth: x === inv || (x > 0 && v === 0) ? 2 : 1 }} />
        ))}
        {Array.from({ length: n }, (_, i) => (
          <g key={i}>
            <circle cx={xs(i)} cy={top} r={8} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
            <text x={xs(i)} y={top + 4} textAnchor="middle" className="mono" style={{ fill: "var(--text)", fontSize: 10 }}>{i}</text>
            <circle cx={xs(i)} cy={bot} r={8} style={{ fill: hits.has(i) ? "var(--accent-soft)" : "var(--bg)", stroke: "var(--border-strong)" }} />
            <text x={xs(i)} y={bot + 4} textAnchor="middle" className="mono" style={{ fill: "var(--text)", fontSize: 10 }}>{i}</text>
          </g>
        ))}
        <text x={4} y={top + 4} style={{ fill: "var(--text-muted)", fontSize: 11 }}>x</text>
        <text x={4} y={bot + 4} style={{ fill: "var(--text-muted)", fontSize: 11 }}>ax</text>
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        {inj ? `injective, so a bijection; ${aa} · ${inv} = 1, so ${aa} is a unit` : `not injective: ${aa} · ${clash} = 0, so ${aa} is a zero divisor and hits only ${hits.size} of ${n}`}
      </p>
      <figcaption className="viz-caption">
        If a is not a zero divisor, ax = ay forces a(x − y) = 0 and so x = y: the map is injective. A ring with finitely many elements cannot map injectively into itself without being onto, so some x has ax = 1. That is why every finite integral domain is a field. Try n prime, and then n composite.
      </figcaption>
    </figure>
  );
}
