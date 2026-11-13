"use client";

import { useState } from "react";
import { fmtNum } from "./format";

// F = (xy, x²), so curl = Q_x − P_y = 2x − x = x
const P = (x: number, y: number) => x * y;
const Q = (x: number) => x * x;
const SZ = 260, PAD = 30;
const X = (x: number) => PAD + x * SZ, Y = (y: number) => PAD + SZ - y * SZ;

/** Circulation of a cell, anticlockwise, by integrating along its four edges (exact for this field up to rounding). */
function cellCirc(x0: number, y0: number, h: number) {
  const N = 40;
  let c = 0;
  for (let k = 0; k < N; k++) {
    const s = (k + 0.5) / N;
    c += P(x0 + s * h, y0) * h / N; // bottom, rightwards
    c += Q(x0 + h) * h / N; // right, upwards
    c -= P(x0 + s * h, y0 + h) * h / N; // top, leftwards
    c -= Q(x0) * h / N; // left, downwards
  }
  return c;
}

/** Green's theorem: the circulations of small cells add up to the circulation round the boundary, because inner edges cancel. */
export function GreenGridViz() {
  const [n, setN] = useState(3);
  const [pick, setPick] = useState<[number, number] | null>(null);
  const h = 1 / n;
  const cells: { i: number; j: number; c: number }[] = [];
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) cells.push({ i, j, c: cellCirc(i * h, j * h, h) });
  const total = cells.reduce((a, b) => a + b.c, 0);
  const curlSum = cells.reduce((a, { i }) => a + (i + 0.5) * h * h * h, 0);
  const maxC = Math.max(...cells.map((c) => Math.abs(c.c)));
  const fm = (z: number) => fmtNum(Number(z.toFixed(4)));
  const sel = pick && pick[0] < n && pick[1] < n ? cells.find((c) => c.i === pick[0] && c.j === pick[1]) : undefined;

  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${SZ + 2 * PAD} ${SZ + 2 * PAD}`} role="img" aria-label={`The unit square cut into ${n * n} cells`} style={{ width: "100%", maxWidth: 360, display: "block", margin: "0 auto" }}>
        {cells.map(({ i, j, c }) => (
          <rect key={`${i}-${j}`} x={X(i * h)} y={Y((j + 1) * h)} width={h * SZ} height={h * SZ}
            onClick={() => setPick([i, j])}
            style={{ fill: "var(--accent)", fillOpacity: 0.08 + 0.45 * (c / maxC), stroke: "var(--border-strong)", strokeWidth: 1, strokeDasharray: "3 3", cursor: "pointer" }} />
        ))}
        {sel && (
          <rect x={X(sel.i * h) + 3} y={Y((sel.j + 1) * h) + 3} width={h * SZ - 6} height={h * SZ - 6} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 2.5 }} />
        )}
        <rect x={X(0)} y={Y(1)} width={SZ} height={SZ} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 3 }} />
        <text x={X(0)} y={Y(0) + 18} textAnchor="middle" style={{ fontSize: 12, fill: "var(--text-muted)" }}>0</text>
        <text x={X(1)} y={Y(0) + 18} textAnchor="middle" style={{ fontSize: 12, fill: "var(--text-muted)" }}>1</text>
        <text x={X(0) - 8} y={Y(1) + 4} textAnchor="end" style={{ fontSize: 12, fill: "var(--text-muted)" }}>1</text>
      </svg>
      <div className="viz-sliders">
        <label><span>cells per side: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={10} value={n} onChange={(e) => { setN(Number(e.target.value)); setPick(null); }} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          {sel && <tr><td>circulation of the red cell</td><td className="mono">{fm(sel.c)}</td></tr>}
          <tr><td>sum of the circulations of all {n * n} cells</td><td className="mono">{fm(total)}</td></tr>
          <tr><td>circulation round the outer boundary, ∮ F · dr</td><td className="mono">0.5</td></tr>
          <tr><td>Σ curl at cell centre × cell area</td><td className="mono">{fm(curlSum)}</td></tr>
          <tr><td>∬ curl dA = ∬ x dA</td><td className="mono">0.5</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The field is F = (xy, x²), with curl ∂Q/∂x − ∂P/∂y = x. Each dashed inner edge is crossed once in each direction by the
        two cells beside it, so its contributions cancel and only the outer boundary is left. Click a cell: its circulation is
        close to the curl at its centre times its area, which is why the boundary integral equals the integral of the curl.
      </figcaption>
    </figure>
  );
}
