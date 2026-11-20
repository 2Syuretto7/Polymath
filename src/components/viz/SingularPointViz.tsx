"use client";

import { useState } from "react";

/** The tangent cone at the origin of y² = x²(x + a): the lowest-degree part y² − a x². */
export function tangentCone(a: number) {
  if (a > 0) return { kind: "node", lines: 2, text: `y = ±${Math.sqrt(a).toFixed(2)}x, two real tangent lines` };
  if (a === 0) return { kind: "cusp", lines: 1, text: "y² = 0, one tangent line counted twice" };
  return { kind: "isolated point", lines: 0, text: `y = ±${Math.sqrt(-a).toFixed(2)}i x, two complex tangent lines` };
}

/** The cubics y² = x²(x + a) and their singular point at the origin. */
export function SingularPointViz() {
  const [a, setA] = useState(1);
  const S = 70, X0 = 240, Y0 = 120;
  const px = (x: number) => X0 + x * S, py = (y: number) => Y0 - y * S;
  const branch = (sgn: number) => {
    let d = "";
    for (let k = 0; k <= 200; k++) {
      const x = -a + (k / 200) * (3.2 + a);
      const y = sgn * x * Math.sqrt(Math.max(0, x + a));
      if (Math.abs(y) > 1.8) break;
      d += `${d ? "L" : "M"}${px(x).toFixed(1)},${py(y).toFixed(1)}`;
    }
    return d;
  };
  const tc = tangentCone(a);
  const m = Math.sqrt(Math.max(a, 0));
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>a = {a.toFixed(2).replace("-", "−")} <input type="range" min={-1} max={1} step={0.25} value={a} onChange={(e) => setA(Number(e.target.value))} aria-label="a" /></label>
      </div>
      <svg viewBox="0 0 540 240" role="img" aria-label="The cubic y squared equals x squared times x plus a, with its tangent cone at the origin" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={10} y1={Y0} x2={530} y2={Y0} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X0} y1={4} x2={X0} y2={236} style={{ stroke: "var(--border-strong)" }} />
        {a >= 0 && [m, -m].map((s, i) => (a > 0 || i === 0) && (
          <line key={i} x1={px(-3)} y1={py(-3 * s)} x2={px(3)} y2={py(3 * s)} style={{ stroke: "var(--accent)", strokeDasharray: "5 4" }} />
        ))}
        <path d={branch(1)} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <path d={branch(-1)} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <circle cx={px(0)} cy={py(0)} r={5} style={{ fill: "var(--danger)" }} />
        <text x={px(0) - 6} y={py(0) - 30} textAnchor="end" style={{ fill: "var(--danger)", fontSize: 11 }}>{tc.kind}</text>
        {a < 0 && <text x={px(-a) + 6} y={py(0) + 16} style={{ fill: "var(--text-muted)", fontSize: 10 }}>curve begins at x = {(-a).toFixed(2)}</text>}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        y² = x²(x {a < 0 ? "−" : "+"} {Math.abs(a).toFixed(2)}): the origin is {tc.kind === "isolated point" ? "an" : "a"} {tc.kind} of multiplicity 2. Tangent cone {tc.text}.
      </p>
      <figcaption className="viz-caption">
        A point of a plane curve f = 0 is singular when both partial derivatives vanish there. Its multiplicity is the degree
        of the lowest-degree terms of f at the point, and those terms factor into the tangent lines. For a &gt; 0 the curve
        crosses itself with two tangents, at a = 0 it has a cusp with one double tangent, and for a &lt; 0 the origin is an
        isolated real point whose tangents are complex.
      </figcaption>
    </figure>
  );
}
