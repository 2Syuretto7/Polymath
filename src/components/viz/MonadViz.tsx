"use client";

import { useState } from "react";

const PTS: { name: string; x: number; y: number }[] = [
  { name: "a", x: 70, y: 70 }, { name: "b", x: 210, y: 50 }, { name: "c", x: 330, y: 110 },
  { name: "d", x: 120, y: 200 }, { name: "e", x: 260, y: 220 }, { name: "f", x: 400, y: 240 },
  { name: "g", x: 40, y: 270 }, { name: "h", x: 330, y: 300 },
];

/** Leibniz's monads: each one mirrors the whole universe from its own point of view, distinctly near at hand and confusedly far off, without any window through which anything passes. */
export function MonadViz() {
  const [k, setK] = useState(3);
  const me = PTS[k];
  const dist = (p: { x: number; y: number }) => Math.hypot(p.x - me.x, p.y - me.y);
  const others = PTS.filter((_, i) => i !== k).sort((p, q) => dist(p) - dist(q));
  const clarity = (d: number) => Math.max(0.12, 1 - d / 380);

  return (
    <figure className="viz">
      <svg viewBox="0 0 440 330" role="img" aria-label={`Monad ${me.name} and its perceptions of the others`} style={{ width: "100%", maxWidth: 520, display: "block", margin: "0 auto" }}>
        {others.map((p) => (
          <line key={p.name} x1={me.x} y1={me.y} x2={p.x} y2={p.y} style={{ stroke: "var(--accent)", strokeWidth: 3 * clarity(dist(p)), opacity: clarity(dist(p)), strokeDasharray: "1 5", strokeLinecap: "round" }} />
        ))}
        {PTS.map((p, i) => (
          <g key={p.name} onClick={() => setK(i)} style={{ cursor: "pointer" }}>
            <circle cx={p.x} cy={p.y} r={i === k ? 16 : 12} style={{ fill: i === k ? "var(--accent)" : "var(--bg-subtle)", stroke: i === k ? "var(--accent)" : "var(--border-strong)", strokeWidth: 1.5 }} />
            <text x={p.x} y={p.y + 4.5} textAnchor="middle" style={{ fontSize: 12.5, fill: i === k ? "var(--bg)" : "var(--text)" }}>{p.name}</text>
          </g>
        ))}
      </svg>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>monad {me.name} perceives distinctly</td><td className="mono">{others.filter((p) => clarity(dist(p)) > 0.55).map((p) => p.name).join(", ") || "none"}</td></tr>
          <tr><td>more confusedly</td><td className="mono">{others.filter((p) => clarity(dist(p)) <= 0.55 && clarity(dist(p)) > 0.3).map((p) => p.name).join(", ") || "none"}</td></tr>
          <tr><td>only very confusedly, but still perceives</td><td className="mono">{others.filter((p) => clarity(dist(p)) <= 0.3).map((p) => p.name).join(", ") || "none"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Click a monad to take its point of view. Every monad represents all the others, as a town looks different from each
        side yet is one town. The dotted lines are not channels: monads have no windows, and nothing passes between them. Each
        unfolds its perceptions from within, in harmony with all the rest.
      </figcaption>
    </figure>
  );
}
