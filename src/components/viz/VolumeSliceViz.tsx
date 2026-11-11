"use client";

import { useState } from "react";
import { fmtNum } from "./format";
import { Axes, curvePath, scales, type View } from "./Plot";

type Solid = { name: string; f: (x: number) => number; a: number; b: number; exact: number; exactLabel: string; v: View };
const SOLIDS: Solid[] = [
  { name: "cone: y = x/2", f: (x) => x / 2, a: 0, b: 4, exact: (16 * Math.PI) / 3, exactLabel: "16π/3", v: { xmin: -0.5, xmax: 4.5, ymin: -2.5, ymax: 2.5, w: 520, h: 260 } },
  { name: "paraboloid: y = √x", f: Math.sqrt, a: 0, b: 4, exact: 8 * Math.PI, exactLabel: "8π", v: { xmin: -0.5, xmax: 4.5, ymin: -2.5, ymax: 2.5, w: 520, h: 260 } },
  { name: "ball: y = √(4 − x²)", f: (x) => Math.sqrt(Math.max(0, 4 - x * x)), a: -2, b: 2, exact: (32 * Math.PI) / 3, exactLabel: "32π/3", v: { xmin: -2.5, xmax: 2.5, ymin: -2.5, ymax: 2.5, w: 520, h: 260 } },
];

/** A solid of revolution sliced into discs; the discs' volumes add up to an integral. */
export function VolumeSliceViz() {
  const [k, setK] = useState(0);
  const [n, setN] = useState(6);
  const S = SOLIDS[k];
  const { X, Y } = scales(S.v);
  const h = (S.b - S.a) / n;
  const discs = Array.from({ length: n }, (_, i) => { const x0 = S.a + i * h; return { x0, r: S.f(x0 + h / 2) }; });
  const sum = discs.reduce((s, d) => s + Math.PI * d.r * d.r * h, 0);
  const six = (v: number) => fmtNum(Number(v.toPrecision(6)));
  const inside = (t: number) => (t >= S.a && t <= S.b ? S.f(t) : NaN);

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Solid">
        {SOLIDS.map((s, i) => (
          <button key={s.name} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => setK(i)}>
            <span className="mono">{s.name}</span>
          </button>
        ))}
      </div>
      <Axes v={S.v} label={`The ${S.name} rotated about the x-axis, approximated by ${n} discs`}>
        {discs.map((d, i) => (
          <g key={i}>
            <rect x={X(d.x0)} y={Y(d.r)} width={X(d.x0 + h) - X(d.x0)} height={Y(-d.r) - Y(d.r)} className="viz-region" style={{ strokeWidth: 1 }} />
            <ellipse cx={X(d.x0 + h)} cy={Y(0)} rx={Math.max(2, (X(d.x0 + h) - X(d.x0)) * 0.25)} ry={(Y(-d.r) - Y(d.r)) / 2} style={{ fill: "var(--accent)", fillOpacity: 0.25, stroke: "var(--accent)", strokeWidth: 1 }} />
          </g>
        ))}
        <path d={curvePath(S.v, inside, 600)} className="plot-curve" />
        <path d={curvePath(S.v, (t) => -inside(t), 600)} className="plot-mirror" style={{ fill: "none" }} />
      </Axes>
      <div className="viz-controls">
        <label className="viz-stepper-label" style={{ flex: 1 }}>
          discs n = <span className="mono">{n}</span>
          <input type="range" className="viz-range" min={1} max={60} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} />
        </label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>total volume of the {n} discs, Σ π r² Δx</td><td className="mono">{six(sum)}</td></tr>
          <tr><td>exact volume, π ∫ f(x)² dx = {S.exactLabel}</td><td className="mono">{six(S.exact)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Spin the curve about the x-axis and it sweeps out a solid. A thin slice at x is nearly a disc of radius f(x) and
        thickness Δx, with volume π f(x)² Δx. Adding the discs gives a Riemann sum, and as the slices thin it becomes the
        integral of π f(x)².
      </figcaption>
    </figure>
  );
}
