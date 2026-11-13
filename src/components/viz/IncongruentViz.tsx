"use client";

import { useState } from "react";

// A right hand, drawn as a mitten with the thumb on the left when the palm faces you.
const HAND: [number, number][] = [[-22, 40], [-24, -10], [-26, -40], [-12, -48], [0, -50], [12, -48], [24, -40], [24, 0], [38, -12], [46, -6], [30, 22], [22, 40]];

/** Kant's incongruent counterparts: a hand and its mirror image agree in every internal relation, yet no motion in the plane brings one onto the other. */
export function IncongruentViz() {
  const [rot, setRot] = useState(0);
  const [flip, setFlip] = useState(false);
  const r = ((rot % 360) + 360) % 360;
  const match = flip && r === 0;
  const pts = (mirror: boolean) => HAND.map(([x, y]) => `${(mirror ? -x : x).toFixed(1)},${y.toFixed(1)}`).join(" ");

  return (
    <figure className="viz">
      <svg viewBox="0 0 520 170" role="img" aria-label="A hand and its mirror image" style={{ width: "100%", display: "block" }}>
        <line x1={260} y1={10} x2={260} y2={160} style={{ stroke: "var(--border)", strokeDasharray: "4 4" }} />
        <text x={130} y={162} textAnchor="middle" style={{ fontSize: 11, fill: "var(--text-muted)" }}>the hand you can move</text>
        <text x={390} y={162} textAnchor="middle" style={{ fontSize: 11, fill: "var(--text-muted)" }}>its mirror image, fixed</text>
        <g transform={`translate(390 85)`}>
          <polygon points={pts(true)} style={{ fill: "var(--bg-subtle)", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        </g>
        <g transform={`translate(130 85) rotate(${rot})`}>
          <polygon points={pts(flip)} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
        </g>
        <g transform={`translate(390 85) rotate(${rot})`}>
          <polygon points={pts(flip)} style={{ fill: "none", stroke: match ? "var(--accent)" : "var(--danger)", strokeWidth: 1.5, strokeDasharray: "5 3" }} />
        </g>
      </svg>
      <div className="viz-sliders">
        <label><span>rotate in the plane: <span className="mono">{r}°</span></span>
          <input type="range" min={0} max={359} step={1} value={rot} onChange={(ev) => setRot(Number(ev.target.value))} /></label>
      </div>
      <div className="viz-controls">
        <button type="button" className={flip ? "btn btn-primary" : "btn"} aria-pressed={flip} onClick={() => setFlip(!flip)}>
          {flip ? "Flipped over through a third dimension" : "Flip it over through a third dimension"}
        </button>
      </div>
      <p className="mono-meta" style={{ textTransform: "none", margin: "8px 0 0" }} aria-live="polite">
        {match ? "The two now coincide." : flip ? "Flipped. Now rotate it back to 0°." : "The dashed copy shows where your hand lands on the mirror image. No rotation makes them coincide."}
      </p>
      <figcaption className="viz-caption">
        Every distance and angle within one hand equals the corresponding one in the other, so no concept of their inner relations tells them apart. The difference shows only in how each sits in space as a whole. In the plane no rotation or sliding helps; a third dimension is needed, and a right glove in three dimensions could only be turned into a left one through a fourth.
      </figcaption>
    </figure>
  );
}
