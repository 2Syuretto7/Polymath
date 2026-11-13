"use client";

import { useState } from "react";

const PEOPLE: [number, number][] = [[0.85, 0.25], [0.2, 0.8], [0.6, 0.55], [0.9, 0.9], [0.3, 0.15], [0.7, 0.35], [0.15, 0.6], [0.5, 0.85]];

/** Kant's highest good: happiness in exact proportion to virtue. Compare a person's virtue and happiness, and see how far this world is from that proportion. */
export function HighestGoodViz() {
  const [v, setV] = useState(0.7);
  const [h, setH] = useState(0.3);
  const X = (a: number) => 40 + a * 200, Y = (b: number) => 200 - b * 180;
  const gap = Math.round((h - v) * 100) / 100;
  const label = Math.abs(gap) < 0.06 ? "happiness matches worthiness: the highest good, for this person" : gap < 0 ? "worthy of more happiness than they have" : "happier than they are worthy to be";
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 225" role="img" aria-label="Virtue against happiness, with the line of exact proportion" style={{ width: "100%", display: "block" }}>
        <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(0)} className="viz-axis" />
        <line x1={X(0)} y1={Y(0)} x2={X(0)} y2={Y(1)} className="viz-axis" />
        <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(1)} style={{ stroke: "var(--accent)", strokeWidth: 2, strokeDasharray: "6 4" }} />
        <text x={X(1)} y={Y(0) + 16} textAnchor="end" style={{ fontSize: 11, fill: "var(--text-muted)" }}>virtue, worthiness to be happy</text>
        <text x={X(0) - 6} y={Y(1) - 4} style={{ fontSize: 11, fill: "var(--text-muted)" }}>happiness</text>
        {PEOPLE.map(([a, b], i) => <circle key={i} cx={X(a)} cy={Y(b)} r={4} style={{ fill: "var(--text-faint)" }} />)}
        <line x1={X(v)} y1={Y(v)} x2={X(v)} y2={Y(h)} style={{ stroke: "var(--danger)", strokeWidth: 1.5 }} />
        <circle cx={X(v)} cy={Y(h)} r={7} style={{ fill: "var(--accent)" }} />
        <text x={300} y={50} style={{ fontSize: 12, fill: "var(--text-muted)" }}>this person is</text>
        <foreignObject x={300} y={58} width={210} height={80}><p style={{ margin: 0, fontSize: 14, color: "var(--text)" }}>{label}</p></foreignObject>
        <text x={300} y={160} style={{ fontSize: 11, fill: "var(--text-muted)" }}>grey dots: people as the world finds them</text>
        <text x={300} y={178} style={{ fontSize: 11, fill: "var(--accent)" }}>dashed line: the highest good</text>
      </svg>
      <div className="viz-sliders">
        <label><span>virtue: <span className="mono">{v.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.05} value={v} onChange={(ev) => setV(Math.round(Number(ev.target.value) * 100) / 100)} /></label>
        <label><span>happiness: <span className="mono">{h.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.05} value={h} onChange={(ev) => setH(Math.round(Number(ev.target.value) * 100) / 100)} /></label>
      </div>
      <figcaption className="viz-caption">
        Morality commands us to promote the highest good, a world in which happiness is distributed in proportion to virtue. Nothing in nature guarantees it: the virtuous often suffer and the wicked prosper. If it must be possible, Kant argues, we must postulate endless progress in virtue, and a moral author of nature who brings happiness into line with it.
      </figcaption>
    </figure>
  );
}
