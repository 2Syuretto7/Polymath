"use client";

import { useState } from "react";

/** Extending f(t, 0) = t from the x-axis to the plane, as φ(x, y) = x + c·y, dominated by the 1-norm. */
export function HahnExtendViz() {
  const [c10, setC] = useState(5);
  const c = c10 / 10;
  const norm = Math.max(1, Math.abs(c));
  const ok = norm <= 1 + 1e-9;
  const C = 140, S = 70;
  // level line φ = 1: x + c y = 1
  const ys = [-2, 2];
  const pts = ys.map((y) => [1 - c * y, y]);
  const P = (a: number, b: number) => [C + S * a, C - S * b];
  const [x1, y1] = P(pts[0][0], pts[0][1]), [x2, y2] = P(pts[1][0], pts[1][1]);
  return (
    <figure className="viz">
      <svg viewBox="0 0 280 280" role="img" aria-label="The 1-norm unit ball and the line where the extension equals 1" style={{ width: "100%", maxWidth: 320, display: "block", margin: "0 auto" }}>
        <defs><clipPath id="he-clip"><rect x={0} y={0} width={280} height={280} /></clipPath></defs>
        <line x1={0} y1={C} x2={280} y2={C} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />
        <line x1={C} y1={0} x2={C} y2={280} style={{ stroke: "var(--border)" }} />
        <polygon points={[P(1, 0), P(0, 1), P(-1, 0), P(0, -1)].map((p) => p.join(",")).join(" ")} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
        <line x1={x1} y1={y1} x2={x2} y2={y2} clipPath="url(#he-clip)" style={{ stroke: ok ? "var(--text)" : "var(--danger)", strokeWidth: 2, strokeDasharray: "6 4" }} />
        <circle cx={C + S} cy={C} r={5} style={{ fill: "var(--text)" }} />
        <text x={8} y={C - 8} style={{ fill: "var(--accent)", fontSize: 11 }}>M, the x-axis</text>
      </svg>
      <div className="viz-controls">
        <label className="mono" style={{ fontSize: 13 }}>
          c = {c.toFixed(1)}{" "}
          <input type="range" min={-20} max={20} value={c10} onChange={(e) => setC(Number(e.target.value))} aria-label="value of c" />
        </label>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        φ(x, y) = x + {c.toFixed(1)}y extends f. ‖φ‖ (dual to ‖·‖₁) = max(1, |c|) = {norm.toFixed(1)}. {ok ? "Norm preserved." : "Norm increased."}
      </p>
      <figcaption className="viz-caption">
        The dashed line is where φ = 1. The extension keeps the norm of f exactly when this line does not cut into the unit
        ball, which happens for every c between −1 and 1. Hahn-Banach guarantees at least one norm-preserving extension;
        here there are infinitely many.
      </figcaption>
    </figure>
  );
}
