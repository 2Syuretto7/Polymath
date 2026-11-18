"use client";

import { useState } from "react";
import { fmtNum } from "./format";
import { Axes, curvePath, scales, type View } from "./Plot";

type Sub = {
  name: string; integrand: string; uName: string; fName: string;
  g: (x: number) => number; dg: (x: number) => number; f: (u: number) => number; F: (u: number) => number;
  a: number; b: number; vx: View; vu: View; exact: string;
};

const W = 520, H = 170;
const SUBS: Sub[] = [
  {
    name: "2x cos(x²)", integrand: "2x cos(x²)", uName: "u = x²", fName: "cos u",
    g: (x) => x * x, dg: (x) => 2 * x, f: Math.cos, F: Math.sin,
    a: 0, b: 1.5, vx: { xmin: -0.2, xmax: 1.7, ymin: -2.1, ymax: 1.5, w: W, h: H }, vu: { xmin: -0.2, xmax: 2.5, ymin: -1.2, ymax: 1.3, w: W, h: H }, exact: "sin(2.25)",
  },
  {
    name: "2x / (1 + x²)", integrand: "2x / (1 + x²)", uName: "u = 1 + x²", fName: "1/u",
    g: (x) => 1 + x * x, dg: (x) => 2 * x, f: (u) => 1 / u, F: Math.log,
    a: 0, b: 2, vx: { xmin: -0.2, xmax: 2.2, ymin: -0.2, ymax: 1.2, w: W, h: H }, vu: { xmin: -0.2, xmax: 5.4, ymin: -0.2, ymax: 1.2, w: W, h: H }, exact: "ln 5",
  },
  {
    name: "sin x cos x", integrand: "sin x cos x", uName: "u = sin x", fName: "u",
    g: Math.sin, dg: Math.cos, f: (u) => u, F: (u) => (u * u) / 2,
    a: 0, b: Math.PI / 2, vx: { xmin: -0.2, xmax: 1.8, ymin: -0.2, ymax: 1.1, w: W, h: H }, vu: { xmin: -0.2, xmax: 1.8, ymin: -0.2, ymax: 1.1, w: W, h: H }, exact: "1/2",
  },
];

const N = 8;

function region(v: View, f: (t: number) => number, t0: number, t1: number) {
  const { X, Y } = scales(v);
  let d = `M${X(t0).toFixed(1)} ${Y(0).toFixed(1)} `;
  for (let i = 0; i <= 60; i++) { const t = t0 + ((t1 - t0) * i) / 60; d += `L${X(t).toFixed(1)} ${Y(f(t)).toFixed(1)} `; }
  return d + `L${X(t1).toFixed(1)} ${Y(0).toFixed(1)} Z`;
}

/** Each strip under f(g(x))g′(x) is carried by u = g(x) to a strip under f(u) with the same area. */
export function SubstitutionViz() {
  const [k, setK] = useState(0);
  const [j, setJ] = useState(3);
  const S = SUBS[k];
  const h = (x: number) => S.f(S.g(x)) * S.dg(x);
  const dx = (S.b - S.a) / N;
  const x0 = S.a + j * dx, x1 = x0 + dx;
  const u0 = S.g(x0), u1 = S.g(x1);
  const strip = S.F(u1) - S.F(u0);
  const total = S.F(S.g(S.b)) - S.F(S.g(S.a));
  const xm = (x0 + x1) / 2;
  const sx = scales(S.vx), su = scales(S.vu);
  const four = (t: number) => fmtNum(Number(t.toFixed(4)));
  const hot = { fill: "var(--accent)", fillOpacity: 0.45, strokeWidth: 0 };

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Integral">
        {SUBS.map((s, i) => (
          <button key={s.name} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => setK(i)}>
            <span className="mono">{s.name}</span>
          </button>
        ))}
      </div>
      <p className="mono-meta" style={{ margin: "10px 0 0", textTransform: "none" }}>
        In x: the area under {S.integrand} from {fmtNum(Number(S.a.toFixed(3)))} to {fmtNum(Number(S.b.toFixed(3)))}, cut into {N} equal strips
      </p>
      <Axes v={S.vx} label={`The graph of ${S.integrand} with strip ${j + 1} highlighted`}>
        <path d={region(S.vx, h, S.a, S.b)} className="viz-region" style={{ strokeWidth: 0 }} />
        <path d={region(S.vx, h, x0, x1)} style={hot} />
        {Array.from({ length: N + 1 }, (_, i) => S.a + i * dx).map((t) => (
          <line key={t} x1={sx.X(t)} y1={sx.Y(0)} x2={sx.X(t)} y2={sx.Y(h(t))} className="plot-ghost" />
        ))}
        <path d={curvePath(S.vx, h, 500)} className="plot-curve" />
      </Axes>
      <p className="mono-meta" style={{ margin: "10px 0 0", textTransform: "none" }}>
        In u, with {S.uName}: the area under {S.fName} from {four(S.g(S.a))} to {four(S.g(S.b))}, with the image of each strip
      </p>
      <Axes v={S.vu} label={`The graph of ${S.fName} with the image of strip ${j + 1} highlighted`}>
        <path d={region(S.vu, S.f, S.g(S.a), S.g(S.b))} className="viz-region" style={{ strokeWidth: 0 }} />
        <path d={region(S.vu, S.f, u0, u1)} style={hot} />
        {Array.from({ length: N + 1 }, (_, i) => S.g(S.a + i * dx)).map((u, i) => (
          <line key={i} x1={su.X(u)} y1={su.Y(0)} x2={su.X(u)} y2={su.Y(S.f(u))} className="plot-ghost" />
        ))}
        <path d={curvePath(S.vu, S.f, 500)} className="plot-curve" />
      </Axes>
      <div className="viz-controls">
        <label className="viz-stepper-label" style={{ flex: 1 }}>
          Strip <span className="mono">{j + 1}</span> of {N}
          <input type="range" className="viz-range" min={0} max={N - 1} step={1} value={j} onChange={(e) => setJ(Number(e.target.value))} />
        </label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>width of the strip in x, Δx</td><td className="mono">{four(dx)}</td></tr>
          <tr><td>width of its image in u, Δu</td><td className="mono">{four(u1 - u0)}</td></tr>
          <tr><td>stretch factor g′(x) at the middle of the strip, times Δx</td><td className="mono">{four(S.dg(xm) * dx)}</td></tr>
          <tr><td>area of the strip, in x and in u (always equal)</td><td className="mono">{four(strip)}</td></tr>
          <tr><td>whole area, in x and in u ({S.exact})</td><td className="mono">{four(total)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The change of variable carries each strip of width Δx to a strip of width about g′(x)Δx. The factor g′(x) in the
        integrand is exactly what pays for that stretching, so the two highlighted areas agree, strip by strip, and so do
        the totals. Where g′ is small, as near the right end of sin x cos x, the strips are squeezed together in u.
      </figcaption>
    </figure>
  );
}
