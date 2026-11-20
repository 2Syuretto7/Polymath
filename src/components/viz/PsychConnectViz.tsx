"use client";

import { useState } from "react";

/** In a simple model, each year keeps a fraction r of the direct psychological connections of the year before. */
export const direct = (r: number, n: number) => r ** n;
/** Strong connectedness, in the model: at least half the direct connections of an ordinary year-to-year link. */
export const STRONG = 0.5;

/** Psychological connectedness, which fades with time, and continuity, which is a chain of strong links. */
export function PsychConnectViz() {
  const [r, setR] = useState(0.8);
  const [n, setN] = useState(5);
  const c = direct(r, n);
  const continuous = r >= STRONG;
  const xs = Array.from({ length: n + 1 }, (_, i) => 40 + (i * 460) / n);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>kept each year = {Math.round(r * 100)}% <input type="range" min={0.3} max={0.95} step={0.05} value={r} onChange={(e) => setR(Number(e.target.value))} aria-label="fraction kept" /></label>
        <label>years = {n} <input type="range" min={1} max={20} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="years" /></label>
      </div>
      <svg viewBox="0 0 540 170" role="img" aria-label="A chain of yearly selves and the direct connection from first to last" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <path d={`M${xs[0]},110 Q270,${110 - 120} ${xs[n]},110`} style={{ fill: "none", stroke: c >= STRONG ? "var(--success)" : "var(--danger)", strokeWidth: 1 + 8 * c, strokeOpacity: 0.35 + 0.65 * c }} />
        {xs.slice(1).map((x, i) => <line key={i} x1={xs[i]} y1={110} x2={x} y2={110} style={{ stroke: continuous ? "var(--accent)" : "var(--danger)", strokeWidth: 1 + 8 * r }} />)}
        {xs.map((x, i) => <circle key={i} cx={x} cy={110} r={n > 12 ? 5 : 8} style={{ fill: i === 0 || i === n ? "var(--accent)" : "var(--surface)", stroke: "var(--accent)", strokeWidth: 2 }} />)}
        <text x={xs[0]} y={140} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>now</text>
        <text x={xs[n]} y={140} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{n} year{n > 1 ? "s" : ""} on</text>
        <text x={270} y={160} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>straight links: year to year; arc: direct connection from first to last</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Direct connectedness after {n} year{n > 1 ? "s" : ""}: {c.toFixed(3)} ({c >= STRONG ? "strong" : "weak"}). Continuity, an overlapping chain of strong links: {continuous ? "yes" : "no"}.
      </p>
      <figcaption className="viz-caption">
        Parfit&rsquo;s Relation R is psychological connectedness, such as memories of experiences and the carrying out of
        earlier intentions, and continuity, an overlapping chain of strong connectedness. In this model the yearly link
        keeps a fixed fraction of connections. Continuity can hold over a lifetime while connectedness between distant
        stages fades, which is why Parfit held that what matters can hold to different degrees.
      </figcaption>
    </figure>
  );
}
