"use client";

import { useState } from "react";
import { fmtNum } from "./format";

type V = [number, number];
const FIELDS: { name: string; F: (x: number, y: number) => V; div: (x: number, y: number) => number; divText: string }[] = [
  { name: "F = (x, y)", F: (x, y) => [x, y], div: () => 2, divText: "2" },
  { name: "F = (−y, x)", F: (x, y) => [-y, x], div: () => 0, divText: "0" },
  { name: "F = (x², 0)", F: (x) => [x * x, 0], div: (x) => 2 * x, divText: "2x" },
];

const S = 90, CX = 170, CY = 150;
const X = (x: number) => CX + S * x, Y = (y: number) => CY - S * y;

/** The divergence theorem in the plane: the net flux out of a box equals the integral of the divergence inside it. */
export function DivergenceBoxViz() {
  const [k, setK] = useState(0);
  const [cx, setCx] = useState(0.4);
  const [s, setS] = useState(0.8);
  const f = FIELDS[k];
  const x0 = cx - s / 2, y0 = -s / 2, x1 = cx + s / 2, y1 = s / 2;
  const N = 200;
  let right = 0, left = 0, top = 0, bottom = 0, inside = 0;
  for (let i = 0; i < N; i++) {
    const t = (i + 0.5) / N;
    right += f.F(x1, y0 + t * s)[0] * (s / N);
    left -= f.F(x0, y0 + t * s)[0] * (s / N);
    top += f.F(x0 + t * s, y1)[1] * (s / N);
    bottom -= f.F(x0 + t * s, y0)[1] * (s / N);
  }
  const M = 60;
  for (let i = 0; i < M; i++) for (let j = 0; j < M; j++) inside += f.div(x0 + ((i + 0.5) * s) / M, y0 + ((j + 0.5) * s) / M) * (s / M) ** 2;
  const out = right + left + top + bottom;
  const grid: V[] = [];
  for (let gx = -1.6; gx <= 1.61; gx += 0.4) for (let gy = -1.4; gy <= 1.41; gy += 0.4) grid.push([gx, gy]);
  const fm = (z: number) => fmtNum(Number(z.toFixed(3)));

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Field">
        {FIELDS.map((g, i) => (
          <button key={g.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => setK(i)}>{g.name}</button>
        ))}
      </div>
      <svg viewBox="0 0 340 300" role="img" aria-label="A vector field and a square box" style={{ width: "100%", maxWidth: 420, display: "block", margin: "12px auto 0" }}>
        <defs>
          <marker id="dv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--text-faint)" }} />
          </marker>
        </defs>
        {grid.map(([gx, gy]) => {
          const v = f.F(gx, gy); const m = Math.hypot(v[0], v[1]);
          if (m < 1e-6) return null;
          const kk = 0.22 / Math.max(1, m);
          return <line key={`${gx}-${gy}`} x1={X(gx)} y1={Y(gy)} x2={X(gx + v[0] * kk)} y2={Y(gy + v[1] * kk)} markerEnd="url(#dv-arrow)" style={{ stroke: "var(--text-faint)", strokeWidth: 1.2 }} />;
        })}
        <rect x={X(x0)} y={Y(y1)} width={s * S} height={s * S} style={{ fill: "var(--accent-soft)", fillOpacity: 0.5, stroke: "var(--accent)", strokeWidth: 3 }} />
      </svg>
      <div className="viz-sliders">
        <label><span>centre of the box: <span className="mono">x = {fm(cx)}</span></span>
          <input type="range" min={-1} max={1} step={0.05} value={cx} onChange={(e) => setCx(Number(e.target.value))} /></label>
        <label><span>side of the box: <span className="mono">{fm(s)}</span></span>
          <input type="range" min={0.2} max={1.6} step={0.05} value={s} onChange={(e) => setS(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>flux out of the right, left, top and bottom sides</td><td className="mono">{fm(right)}, {fm(left)}, {fm(top)}, {fm(bottom)}</td></tr>
          <tr><td>net flux out, ∮ F · n ds</td><td className="mono">{fm(out)}</td></tr>
          <tr><td>∬ div F dA, with div F = {f.divText}</td><td className="mono">{fm(inside)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {k === 0
          ? "This flow spreads out everywhere at the same rate, so the flux out of any box is twice its area."
          : k === 1
            ? "This flow only turns. Whatever enters a box leaves it, so the net flux out is 0 wherever the box is."
            : "This flow speeds up as x grows, so it leaves a box faster than it enters on the right of the axis. Left of the axis the divergence is negative: the box is a sink."}
      </figcaption>
    </figure>
  );
}
