"use client";

import { useState } from "react";

/** Which lines through the origin does a 2 × 2 matrix map to themselves? */
export function InvariantLinesViz() {
  const [m, setM] = useState([1.5, 0.5, 0.5, 1]);
  const [a, b, c, d] = m;
  const tr = a + d, det = a * d - b * c, disc = tr * tr - 4 * det;
  const S = 60, W = 400, o = W / 2;
  const N = 36;
  const vecs = Array.from({ length: N }, (_, k) => {
    const t = (k * Math.PI) / N;
    const v = [Math.cos(t), Math.sin(t)];
    const Tv = [a * v[0] + b * v[1], c * v[0] + d * v[1]];
    const cross = v[0] * Tv[1] - v[1] * Tv[0];
    const len = Math.hypot(Tv[0], Tv[1]);
    return { v, Tv, par: len < 1e-9 || Math.abs(cross) / (len || 1) < 0.06 };
  });
  const eig: number[] = disc >= 0 ? [(tr + Math.sqrt(disc)) / 2, (tr - Math.sqrt(disc)) / 2] : [];
  const lines = eig.map((l) => { const v = Math.abs(b) > 1e-9 ? [b, l - a] : Math.abs(c) > 1e-9 ? [l - d, c] : null; return { l, v }; });
  const P = (x: number, y: number) => [o + x * S, o - y * S];
  const lab = ["a", "b", "c", "d"];
  return (
    <figure className="viz">
      <div className="viz-sliders">
        {m.map((x, k) => (
          <label key={k}><span>{lab[k]}: <span className="mono">{x}</span></span>
            <input type="range" min={-2} max={2} step={0.25} value={x} onChange={(e) => setM((y) => y.map((z, j) => (j === k ? Number(e.target.value) : z)))} /></label>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Vectors and their images" style={{ width: "100%", maxWidth: 420, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={o} x2={W} y2={o} style={{ stroke: "var(--border)" }} />
        <line x1={o} y1={0} x2={o} y2={W} style={{ stroke: "var(--border)" }} />
        {lines.map(({ v }, i) => v && (() => { const n = Math.hypot(v[0], v[1]) || 1; const u = [v[0] / n, v[1] / n]; const [x1, y1] = P(-4 * u[0], -4 * u[1]); const [x2, y2] = P(4 * u[0], 4 * u[1]); return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} style={{ stroke: "var(--accent)", strokeWidth: 2, opacity: 0.6 }} />; })())}
        {vecs.map(({ v, Tv, par }, k) => {
          const [x0, y0] = P(v[0], v[1]); const [x1, y1] = P(Math.max(-3.2, Math.min(3.2, Tv[0])), Math.max(-3.2, Math.min(3.2, Tv[1])));
          return <g key={k}>
            <circle cx={x0} cy={y0} r={2} style={{ fill: "var(--text-faint)" }} />
            <line x1={x0} y1={y0} x2={x1} y2={y1} style={{ stroke: par ? "var(--accent)" : "var(--text-faint)", strokeWidth: par ? 2 : 1 }} />
            <circle cx={x1} cy={y1} r={par ? 3 : 1.8} style={{ fill: par ? "var(--accent)" : "var(--text-muted)" }} />
          </g>;
        })}
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        T = [[{a}, {b}], [{c}, {d}]]; {disc >= 0 ? `real eigenvalues ${eig.map((x) => x.toFixed(2)).join(" and ")}: ${eig[0] === eig[1] ? "at least one" : "two"} invariant line${eig[0] === eig[1] ? "" : "s"}` : `no real eigenvalue (complex ${(tr / 2).toFixed(2)} ± ${(Math.sqrt(-disc) / 2).toFixed(2)}i): no invariant line in ℝ²`}
      </p>
      <figcaption className="viz-caption">
        Each faint dot on the unit circle is joined to its image. A line through the origin is invariant when T maps it into itself, so the image lies on the same line, highlighted. These are the eigenvector directions. A rotation moves every line, so it has no invariant line over ℝ, though over ℂ it has eigenvalues.
      </figcaption>
    </figure>
  );
}
