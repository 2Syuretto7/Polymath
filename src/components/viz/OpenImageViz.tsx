"use client";

import { useState } from "react";

/** The image of the unit disc under diag(1, s): an ellipse, which contains a disc about 0 exactly when s ≠ 0. */
export function OpenImageViz() {
  const [s100, setS] = useState(50);
  const s = s100 / 100;
  const r = Math.min(1, Math.abs(s));
  const C = 140, U = 80;
  return (
    <figure className="viz">
      <svg viewBox="0 0 280 280" role="img" aria-label="The image of the unit disc, and the largest disc about 0 inside it" style={{ width: "100%", maxWidth: 320, display: "block", margin: "0 auto" }}>
        <line x1={0} y1={C} x2={280} y2={C} style={{ stroke: "var(--border)" }} />
        <line x1={C} y1={0} x2={C} y2={280} style={{ stroke: "var(--border)" }} />
        <circle cx={C} cy={C} r={U} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "4 4" }} />
        {s === 0
          ? <line x1={C - U} y1={C} x2={C + U} y2={C} style={{ stroke: "var(--danger)", strokeWidth: 4 }} />
          : <ellipse cx={C} cy={C} rx={U} ry={U * Math.abs(s)} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />}
        {r > 0 && <circle cx={C} cy={C} r={U * r} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />}
        <circle cx={C} cy={C} r={3} style={{ fill: "var(--text)" }} />
      </svg>
      <div className="viz-controls">
        <label className="mono" style={{ fontSize: 13 }}>
          s = {s.toFixed(2)}{" "}
          <input type="range" min={0} max={150} value={s100} onChange={(e) => setS(Number(e.target.value))} aria-label="value of s" />
        </label>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        T(x, y) = (x, {s.toFixed(2)}y). {s === 0
          ? "T is not onto: the image of the disc is a segment, containing no disc about 0."
          : `T is onto. The image of the unit disc contains the disc of radius ${r.toFixed(2)} about 0.`}
      </p>
      <figcaption className="viz-caption">
        The dashed circle is the unit disc; the shaded ellipse is its image; the solid circle is the largest disc about 0
        inside the image. In finite dimensions a surjective linear map always leaves such a disc. In infinite dimensions,
        diag(1, 1/2, 1/3, …) on ℓ² squeezes the radius towards 0 and is not onto; the open mapping theorem says that for a
        surjection between Banach spaces, the radius can never collapse to 0.
      </figcaption>
    </figure>
  );
}
