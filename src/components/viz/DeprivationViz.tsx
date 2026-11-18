"use client";

import { useState } from "react";

/** The deprivation account of death's badness: the goods a person would have had, had they not died when they did. */
export function DeprivationViz() {
  const [death, setDeath] = useState(30);
  const [would, setWould] = useState(80);
  const [level, setLevel] = useState(1);
  const lost = Math.max(0, would - death) * level;
  const X0 = 80, W = 410, A = 100;
  const X = (a: number) => X0 + (a / A) * W;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>age at death = {death} <input type="range" min={0} max={100} value={death} onChange={(e) => setDeath(Number(e.target.value))} aria-label="death" /></label>
        <label>would otherwise have lived to = {would} <input type="range" min={0} max={100} value={would} onChange={(e) => setWould(Number(e.target.value))} aria-label="would" /></label>
        <label>goods per year of that future = {level} <input type="range" min={-2} max={3} value={level} onChange={(e) => setLevel(Number(e.target.value))} aria-label="level" /></label>
      </div>
      <svg viewBox="0 0 520 150" role="img" aria-label="A life cut short, and the life it would have been" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={X0 - 30} y={40} width={30} height={30} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)", strokeDasharray: "3 3" }} />
        <text x={X0 - 15} y={86} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 10 }}>before birth</text>
        <rect x={X(0)} y={40} width={X(death) - X(0)} height={30} style={{ fill: "var(--accent)" }} />
        {would > death && <rect x={X(death)} y={40} width={X(would) - X(death)} height={30} style={{ fill: level >= 0 ? "var(--accent-soft)" : "var(--danger)", opacity: level >= 0 ? 1 : 0.35, stroke: "var(--accent)", strokeDasharray: "4 3" }} />}
        <line x1={X(death)} y1={30} x2={X(death)} y2={80} style={{ stroke: "var(--danger)", strokeWidth: 3 }} />
        <text x={X(death)} y={24} textAnchor="middle" style={{ fill: "var(--danger)", fontSize: 11 }}>death at {death}</text>
        {[0, 20, 40, 60, 80, 100].map((a) => <text key={a} x={X(a)} y={96} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 10 }}>{a}</text>)}
        <text x={260} y={126} textAnchor="middle" style={{ fill: lost > 0 ? "var(--danger)" : lost < 0 ? "var(--accent)" : "var(--text)", fontSize: 13, fontWeight: 700 }}>
          {lost > 0 ? `deprived of ${lost} units of good: death is bad for them` : lost < 0 ? `spared ${-lost} units of bad: death is good for them` : "deprived of nothing: on this account death is not bad for them"}
        </text>
        <text x={260} y={144} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 10 }}>Lucretius: the time before birth is also a time without goods, yet we do not mourn it</text>
      </svg>
      <figcaption className="viz-caption">
        On the deprivation account, death is bad for someone to the extent that it takes away goods they would otherwise
        have had. The dashed bar is the life they would have lived. Epicurus objects that when death is, we are not; Lucretius
        adds the symmetry with prenatal non-existence.
      </figcaption>
    </figure>
  );
}
