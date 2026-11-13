"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const W = 520, H = 220, X0 = 30, X1 = 500, Y0 = 200, Y1 = 14;
const FS = {
  sq: { name: "x²", f: (x: number) => x * x },
  step: { name: "a step at 1/2", f: (x: number) => (x < 0.5 ? 0.3 : 0.9) },
  dir: { name: "1 on rationals, 0 elsewhere", f: (_: number) => 0 },
};
type K = keyof typeof FS;

function bounds(k: K, a: number, b: number): [number, number] {
  if (k === "dir") return [0, 1];
  if (k === "sq") return [a * a, b * b];
  const f = FS.step.f;
  return a < 0.5 && b > 0.5 ? [0.3, 0.9] : [Math.min(f(a), f(b)), Math.max(f(a), f(b))];
}

/** Lower and upper Darboux sums. Refining the partition raises the lower sum and lowers the upper sum; the function is integrable when they meet. */
export function DarbouxRefineViz() {
  const [k, setK] = useState<K>("sq");
  const [pts, setPts] = useState<number[]>([0, 0.5, 1]);
  const X = (x: number) => X0 + x * (X1 - X0);
  const Y = (y: number) => Y0 - y * (Y0 - Y1);
  const cells = pts.slice(1).map((b, i) => { const a = pts[i]; const [m, M] = bounds(k, a, b); return { a, b, m, M }; });
  const L = cells.reduce((t, c) => t + c.m * (c.b - c.a), 0), U = cells.reduce((t, c) => t + c.M * (c.b - c.a), 0);
  const refine = () => {
    const next: number[] = [];
    pts.forEach((p, i) => { next.push(p); if (i < pts.length - 1) next.push((p + pts[i + 1]) / 2); });
    setPts(next);
  };
  const fm = (v: number) => fmtNum(Number(v.toFixed(4)));
  const curve = Array.from({ length: 201 }, (_, i) => i / 200);

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {(Object.keys(FS) as K[]).map((x) => (
          <button key={x} type="button" className={x === k ? "seg is-on" : "seg"} aria-pressed={x === k} onClick={() => { setK(x); setPts([0, 0.5, 1]); }}>{FS[x].name}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Upper and lower rectangles under a graph" style={{ width: "100%", display: "block", marginTop: 12 }}>
        <line x1={X0} y1={Y0} x2={X1} y2={Y0} className="viz-axis" />
        {cells.map((c, i) => (
          <g key={i}>
            <rect x={X(c.a)} y={Y(c.M)} width={X(c.b) - X(c.a)} height={Y0 - Y(c.M)} style={{ fill: "var(--danger-soft)", stroke: "var(--danger)", strokeWidth: 0.8 }} />
            <rect x={X(c.a)} y={Y(c.m)} width={X(c.b) - X(c.a)} height={Y0 - Y(c.m)} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 0.8 }} />
          </g>
        ))}
        {k === "dir" ? (
          <>
            {curve.map((x) => <circle key={`a${x}`} cx={X(x)} cy={Y(1)} r={1} style={{ fill: "var(--text)" }} />)}
            {curve.map((x) => <circle key={`b${x}`} cx={X(x)} cy={Y(0)} r={1} style={{ fill: "var(--text)" }} />)}
          </>
        ) : (
          <polyline points={curve.map((x) => `${X(x).toFixed(1)},${Y(FS[k].f(x)).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        )}
      </svg>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={pts.length > 257} onClick={refine}>Refine: halve every piece</button>
        <button type="button" className="btn" onClick={() => setPts([0, 0.5, 1])}>Start again</button>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>pieces in the partition</td><td className="mono">{cells.length}</td></tr>
          <tr><td>lower sum L(f, P)</td><td className="mono">{fm(L)}</td></tr>
          <tr><td>upper sum U(f, P)</td><td className="mono">{fm(U)}</td></tr>
          <tr><td>U − L</td><td className="mono">{fm(U - L)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {k === "dir"
          ? "Every piece, however small, contains rationals and irrationals, so the upper sum is always 1 and the lower sum always 0. The gap never closes: this function is not Riemann integrable."
          : k === "sq"
            ? "Each refinement raises the lower sum and lowers the upper sum. The gap U − L halves each time, so both tend to 1/3, the integral."
            : "Only the piece containing the jump contributes to U − L, and that piece shrinks with each refinement. A single jump does not stop a function being integrable."}
      </figcaption>
    </figure>
  );
}
