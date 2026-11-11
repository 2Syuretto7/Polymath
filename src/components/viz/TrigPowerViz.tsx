"use client";

import { useState } from "react";
import { fmtNum } from "./format";
import { Axes, curvePath, scales, type View } from "./Plot";

const FNS: { name: string; f: (x: number) => number; F: (x: number) => number; avg: number; avgLabel: string; identity: string }[] = [
  { name: "sin²x", f: (x) => Math.sin(x) ** 2, F: (x) => x / 2 - Math.sin(2 * x) / 4, avg: 1 / 2, avgLabel: "1/2", identity: "sin²x = (1 − cos 2x)/2" },
  { name: "cos²x", f: (x) => Math.cos(x) ** 2, F: (x) => x / 2 + Math.sin(2 * x) / 4, avg: 1 / 2, avgLabel: "1/2", identity: "cos²x = (1 + cos 2x)/2" },
  { name: "sin²x cos²x", f: (x) => (Math.sin(x) * Math.cos(x)) ** 2, F: (x) => x / 8 - Math.sin(4 * x) / 32, avg: 1 / 8, avgLabel: "1/8", identity: "sin²x cos²x = (sin 2x)²/4 = (1 − cos 4x)/8" },
  { name: "sin⁴x", f: (x) => Math.sin(x) ** 4, F: (x) => (3 * x) / 8 - Math.sin(2 * x) / 4 + Math.sin(4 * x) / 32, avg: 3 / 8, avgLabel: "3/8", identity: "sin⁴x = 3/8 − (cos 2x)/2 + (cos 4x)/8" },
];

const V: View = { xmin: -0.3, xmax: 6.6, ymin: -0.15, ymax: 1.15, w: 520, h: 200 };

/** Even powers of sine and cosine oscillate about a constant average: the bumps above it fill the dips below. */
export function TrigPowerViz() {
  const [k, setK] = useState(0);
  const [b, setB] = useState(Math.PI);
  const F = FNS[k];
  const { X, Y } = scales(V);
  const N = 200;
  let above = "", below = "";
  for (let i = 0; i <= N; i++) {
    const x = (b * i) / N, y = F.f(x);
    above += `${i ? "L" : "M"}${X(x).toFixed(1)} ${Y(Math.max(y, F.avg)).toFixed(1)} `;
    below += `${i ? "L" : "M"}${X(x).toFixed(1)} ${Y(Math.min(y, F.avg)).toFixed(1)} `;
  }
  above += `L${X(b)} ${Y(F.avg)} L${X(0)} ${Y(F.avg)} Z`;
  below += `L${X(b)} ${Y(F.avg)} L${X(0)} ${Y(F.avg)} Z`;
  const four = (n: number) => fmtNum(Number(n.toFixed(4)));
  const exact = F.F(b) - F.F(0);

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Integrand">
        {FNS.map((g, i) => (
          <button key={g.name} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => setK(i)}>
            <span className="mono">{g.name}</span>
          </button>
        ))}
      </div>
      <p className="mono-meta" style={{ margin: "10px 0 0", textTransform: "none" }}>
        {F.identity}; the dashed line is its average, {F.avgLabel}
      </p>
      <Axes v={V} label={`The graph of ${F.name} from 0 to ${four(b)}, with its average value marked`}>
        <path d={below} className="viz-region" style={{ strokeWidth: 0 }} />
        <path d={above} style={{ fill: "var(--accent)", fillOpacity: 0.4, strokeWidth: 0 }} />
        <line x1={X(0)} y1={Y(F.avg)} x2={X(V.xmax)} y2={Y(F.avg)} className="plot-ghost" />
        <path d={curvePath(V, F.f, 600)} className="plot-curve" />
        <line x1={X(b)} y1={Y(0)} x2={X(b)} y2={Y(F.f(b))} className="plot-line" />
      </Axes>
      <div className="viz-controls">
        <label className="viz-stepper-label" style={{ flex: 1 }}>
          upper limit b = <span className="mono">{four(b)}</span> (π ≈ 3.1416)
          <input type="range" className="viz-range" min={0.1} max={6.2832} step={0.0001} value={b} onChange={(e) => setB(Number(e.target.value))} />
        </label>
      </div>
      <div className="viz-controls" style={{ marginTop: 4 }}>
        {[["π/2", Math.PI / 2], ["π", Math.PI], ["2π", 2 * Math.PI]].map(([l, v]) => (
          <button key={l as string} type="button" className="btn" onClick={() => setB(v as number)}>b = {l}</button>
        ))}
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>the integral from 0 to b</td><td className="mono">{four(exact)}</td></tr>
          <tr><td>b times the average, {F.avgLabel}</td><td className="mono">{four(b * F.avg)}</td></tr>
          <tr><td>difference: the bumps above the line (dark) minus the dips below it</td><td className="mono">{four(exact - b * F.avg)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Rewriting a power of sine or cosine with double angles turns it into a constant plus waves. Over a whole number of
        waves the waves contribute nothing: the dark bumps exactly fill the light dips. Try b = π/2, π and 2π, and then a
        value in between.
      </figcaption>
    </figure>
  );
}
