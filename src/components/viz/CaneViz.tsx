"use client";

import { useState } from "react";

const TEXT = [
  "First day: the cane is an object in the hand. What you feel is pressure and jolts in the palm, and you must work out what they mean.",
  "With practice the jolts begin to mean things. You still notice the handle, but attention is shifting along the cane.",
  "The cane has been taken into the body schema. You no longer feel the handle at all: you feel the kerb, the gravel, the edge of the step, out at the tip.",
];

/** Merleau-Ponty’s blind man’s cane: with habit, the felt boundary of the body moves from the palm to the tip of the cane. */
export function CaneViz() {
  const [p, setP] = useState(0);
  const t = Math.min(1, p / 8);
  const hx = 120, hy = 70, tipX = 444, tipY = 150;
  const fx = hx + (tipX - hx) * t, fy = hy + (tipY - hy) * t;
  const stage = p < 3 ? 0 : p < 8 ? 1 : 2;
  return (
    <figure className="viz">
      <label className="viz-controls" style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span className="mono" style={{ minWidth: 150 }}>weeks of practice: {p}</span>
        <input type="range" min={0} max={10} step={1} value={p} onChange={(e) => setP(Number(e.target.value))} style={{ flex: 1 }} />
      </label>
      <svg viewBox="0 0 520 200" role="img" aria-label="A hand holding a cane, with the place where touch is felt" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={20} y1={172} x2={500} y2={172} style={{ stroke: "var(--border)", strokeWidth: 2 }} />
        <rect x={440} y={150} width={60} height={22} style={{ fill: "var(--accent-soft)", stroke: "var(--border)" }} />
        <text x={470} y={192} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>kerb</text>
        <path d="M40,40 Q80,30 110,58 L130,82 Q100,100 60,90 Z" style={{ fill: "var(--bg)", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        <text x={62} y={116} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>hand</text>
        <line x1={hx} y1={hy} x2={tipX} y2={tipY} style={{ stroke: "var(--text)", strokeWidth: 4, strokeLinecap: "round" }} />
        <circle cx={fx} cy={fy} r={16} style={{ fill: "var(--accent)", opacity: 0.25 }} />
        <circle cx={fx} cy={fy} r={6} style={{ fill: "var(--accent)" }} />
        <text x={fx} y={fy - 22} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 12, fontWeight: 700 }}>felt here</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{TEXT[stage]}</p>
      <figcaption className="viz-caption">
        The physical contact is always at the palm. What changes with habit is where the world is felt to begin. For
        Merleau-Ponty this shows that the body is not a thing we observe but our means of having a world, and that it can
        extend itself into instruments.
      </figcaption>
    </figure>
  );
}
