"use client";

import { useState } from "react";

const f = (x: number, y: number) => y * y - x * x * (x + 1);
const CRIT = [{ p: [0, 0], v: 0 }, { p: [-2 / 3, 0], v: -4 / 27 }];

/** Level sets of f(x, y) = y² − x²(x + 1): regular values give smooth curves, critical values do not. */
export function RegularLevelViz() {
  const [c, setC] = useState(0.1);
  const X0 = -1.6, X1 = 1.4, Y0 = -1.4, Y1 = 1.4, NX = 150, NY = 140;
  const W = 300, H = 200;
  const sx = (x: number) => 10 + ((x - X0) / (X1 - X0)) * W;
  const sy = (y: number) => 10 + ((Y1 - y) / (Y1 - Y0)) * H;
  const segs: string[] = [];
  const dx = (X1 - X0) / NX, dy = (Y1 - Y0) / NY;
  for (let i = 0; i < NX; i++) for (let j = 0; j < NY; j++) {
    const x = X0 + i * dx, y = Y0 + j * dy;
    const v = [f(x, y) - c, f(x + dx, y) - c, f(x + dx, y + dy) - c, f(x, y + dy) - c];
    const corners: [number, number][] = [[x, y], [x + dx, y], [x + dx, y + dy], [x, y + dy]];
    const cross: [number, number][] = [];
    for (let e = 0; e < 4; e++) {
      const a = v[e], b = v[(e + 1) % 4];
      if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) {
        const t = a / (a - b);
        const [x1, y1] = corners[e], [x2, y2] = corners[(e + 1) % 4];
        cross.push([x1 + t * (x2 - x1), y1 + t * (y2 - y1)]);
      }
    }
    if (cross.length >= 2) segs.push(`M${sx(cross[0][0])},${sy(cross[0][1])}L${sx(cross[1][0])},${sy(cross[1][1])}`);
    if (cross.length === 4) segs.push(`M${sx(cross[2][0])},${sy(cross[2][1])}L${sx(cross[3][0])},${sy(cross[3][1])}`);
  }
  const hit = CRIT.find((q) => Math.abs(q.v - c) < 0.006);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>level c = {c.toFixed(3)} <input type="range" min={-400} max={400} value={Math.round(c * 1000)} onChange={(e) => setC(Number(e.target.value) / 1000)} aria-label="level" /></label>
        <button type="button" className="btn btn-ghost" onClick={() => setC(0)}>c = 0</button>
        <button type="button" className="btn btn-ghost" onClick={() => setC(-4 / 27)}>c = −4/27</button>
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="A level set of a function of two variables" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={10} y={10} width={W} height={H} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        <line x1={sx(X0)} y1={sy(0)} x2={sx(X1)} y2={sy(0)} style={{ stroke: "var(--border)" }} />
        <line x1={sx(0)} y1={sy(Y0)} x2={sx(0)} y2={sy(Y1)} style={{ stroke: "var(--border)" }} />
        <path d={segs.join("")} style={{ fill: "none", stroke: hit ? "var(--danger)" : "var(--accent)", strokeWidth: 2.5 }} />
        {CRIT.map((q, i) => <circle key={i} cx={sx(q.p[0])} cy={sy(q.p[1])} r={4} style={{ fill: "var(--text)" }} />)}
        <text x={330} y={40} style={{ fill: "var(--text)", fontSize: 12 }}>f(x, y) = y² − x²(x + 1)</text>
        <text x={330} y={62} style={{ fill: "var(--text)", fontSize: 12 }}>∇f = (−3x² − 2x, 2y)</text>
        <text x={330} y={86} style={{ fill: "var(--text-muted)", fontSize: 11 }}>critical points (dots): (0, 0), (−2/3, 0)</text>
        <text x={330} y={104} style={{ fill: "var(--text-muted)", fontSize: 11 }}>critical values: 0 and −4/27</text>
        <text x={330} y={136} style={{ fill: hit ? "var(--danger)" : "var(--accent)", fontSize: 13, fontWeight: 700 }}>{hit ? "c is a critical value" : "c is a regular value"}</text>
        <text x={330} y={156} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{hit ? "the level set has a singular point" : "the level set is a smooth curve"}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {hit ? (Math.abs(c) < 0.006 ? "At c = 0 the curve crosses itself at the origin: a node, not a submanifold there." : "At c = −4/27 an isolated point appears at (−2/3, 0) beside the curve.") : "Every point of the level set has ∇f ≠ 0, so the regular level set theorem makes it a smooth embedded curve."}
      </p>
      <figcaption className="viz-caption">
        If dF has full rank at every point of F⁻¹(c), the level set is an embedded submanifold of codimension equal to the
        dimension of the target. Move c through the two critical values and watch the topology of the level set change.
      </figcaption>
    </figure>
  );
}
