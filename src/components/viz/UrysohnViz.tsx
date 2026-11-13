"use client";

import { useState } from "react";

const A: [number, number][] = [[0.05, 0.2], [0.72, 0.8]];
const B: [number, number][] = [[0.42, 0.56], [0.94, 1]];
const dist = (x: number, S: [number, number][]) => Math.min(...S.map(([a, b]) => (x < a ? a - x : x > b ? x - b : 0)));
const f = (x: number) => { const da = dist(x, A), db = dist(x, B); return da / (da + db); };

/** The Urysohn lemma: nested open sets U_r, one for each dyadic r, between a closed set A and the complement of a closed set B, define a continuous f with f = 0 on A and f = 1 on B. */
export function UrysohnViz() {
  const [n, setN] = useState(2);
  const levels = 2 ** n;
  const step = (x: number) => Math.ceil(f(x) * levels - 1e-9) / levels;
  const W = 520, H = 200, X0 = 80, X1 = 500, Y0 = 170, Y1 = 20;
  const X = (v: number) => X0 + v * (X1 - X0), Y = (v: number) => Y0 - v * (Y0 - Y1);
  const xs = Array.from({ length: 941 }, (_, i) => i / 940);
  const curve = xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(f(x)).toFixed(1)}`).join(" ");
  const stair = xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(step(x)).toFixed(1)}`).join(" ");
  const showSets = n <= 3;
  const rs = Array.from({ length: levels - 1 }, (_, k) => (k + 1) / levels);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>dyadic level n, using r = k/2ⁿ: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={6} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The closed sets A and B on an interval, the Urysohn function and its staircase approximation" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {A.map(([a, b]) => <rect key={`A${a}`} x={X(a)} y={Y1} width={X(b) - X(a)} height={Y0 - Y1} style={{ fill: "var(--accent-soft)" }} />)}
        {B.map(([a, b]) => <rect key={`B${a}`} x={X(a)} y={Y1} width={X(b) - X(a)} height={Y0 - Y1} style={{ fill: "var(--danger-soft)" }} />)}
        <line x1={X0} y1={Y0} x2={X1} y2={Y0} style={{ stroke: "var(--border)", strokeWidth: 1.5 }} />
        <line x1={X0} y1={Y1} x2={X0} y2={Y0} style={{ stroke: "var(--border)", strokeWidth: 1.5 }} />
        <text x={X0 - 6} y={Y0 + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>0</text>
        <text x={X0 - 6} y={Y1 + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>1</text>
        <path d={curve} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1.5, strokeDasharray: "4 3" }} />
        <path d={stair} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <text x={X(0.125)} y={Y0 + 20} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>A</text>
        <text x={X(0.76)} y={Y0 + 20} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>A</text>
        <text x={X(0.49)} y={Y0 + 20} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>B</text>
        <text x={X(0.97)} y={Y0 + 20} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>B</text>
      </svg>
      {showSets && (
        <svg viewBox={`0 0 ${W} ${rs.length * 18 + 8}`} role="img" aria-label="The nested open sets" style={{ width: "100%", display: "block" }}>
          {rs.map((r, i) => {
            const y = 10 + i * 18;
            const segs: [number, number][] = [];
            let start: number | null = null;
            xs.forEach((x) => { const inside = f(x) < r; if (inside && start === null) start = x; if (!inside && start !== null) { segs.push([start, x]); start = null; } });
            if (start !== null) segs.push([start, 1]);
            return (
              <g key={r}>
                <text x={X0 - 6} y={y + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{`U at r = ${r}`}</text>
                {segs.map(([a, b]) => <line key={a} x1={X(a)} y1={y} x2={X(b)} y2={y} style={{ stroke: "var(--accent)", strokeWidth: 6, opacity: 0.35 + 0.6 * (1 - r) }} />)}
              </g>
            );
          })}
        </svg>
      )}
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>
        {levels - 1} open sets Uᵣ, each containing the closure of the one below; the staircase is within {(1 / levels).toFixed(4)} of the limit everywhere
      </p>
      <figcaption className="viz-caption">
        A is shaded on the left and in the middle right, B in the other two places. Each set Uᵣ contains A, misses B, and
        contains the closure of every Uₛ with s &lt; r. Setting f(x) to the least r with x in Uᵣ gives a staircase; as the
        dyadic levels fill in, it becomes the continuous function shown dashed, 0 on A and 1 on B.
      </figcaption>
    </figure>
  );
}
