"use client";

import { useState } from "react";
import { Axes, curvePath, scales, type View } from "./Plot";
import { lagrange } from "./RungeViz";

const runge = (x: number) => 1 / (1 + 25 * x * x);
const V: View = { xmin: -1, xmax: 1, ymin: -0.6, ymax: 1.6, w: 560, h: 260 };

function naturalSpline(xs: number[], ys: number[]) {
  const n = xs.length - 1;
  const h = Array.from({ length: n }, (_, i) => xs[i + 1] - xs[i]);
  const M = Array(n + 1).fill(0);
  if (n >= 2) {
    const a: number[] = [], b: number[] = [], c: number[] = [], d: number[] = [];
    for (let i = 1; i < n; i++) {
      a.push(h[i - 1]); b.push(2 * (h[i - 1] + h[i])); c.push(h[i]);
      d.push(6 * ((ys[i + 1] - ys[i]) / h[i] - (ys[i] - ys[i - 1]) / h[i - 1]));
    }
    const m = b.length;
    for (let i = 1; i < m; i++) { const w = a[i] / b[i - 1]; b[i] -= w * c[i - 1]; d[i] -= w * d[i - 1]; }
    const sol = Array(m).fill(0);
    sol[m - 1] = d[m - 1] / b[m - 1];
    for (let i = m - 2; i >= 0; i--) sol[i] = (d[i] - c[i] * sol[i + 1]) / b[i];
    for (let i = 0; i < m; i++) M[i + 1] = sol[i];
  }
  return (x: number) => {
    let i = Math.min(n - 1, Math.max(0, xs.findIndex((t, k) => k < n && x <= xs[k + 1])));
    if (i < 0) i = n - 1;
    const t0 = xs[i], t1 = xs[i + 1], hh = h[i];
    const A = (t1 - x) / hh, B = (x - t0) / hh;
    return A * ys[i] + B * ys[i + 1] + ((A ** 3 - A) * M[i] + (B ** 3 - B) * M[i + 1]) * (hh * hh) / 6;
  };
}

/** A natural cubic spline against a single polynomial through the same equally spaced points. */
export function SplineViz() {
  const [n, setN] = useState(12);
  const [show, setShow] = useState<"spline" | "poly">("spline");
  const xs = Array.from({ length: n + 1 }, (_, i) => -1 + (2 * i) / n);
  const ys = xs.map(runge);
  const s = naturalSpline(xs, ys);
  const p = lagrange(xs, ys);
  const g = show === "spline" ? s : p;
  let es = 0, ep = 0;
  for (let k = 0; k <= 2000; k++) { const x = -1 + k / 1000; es = Math.max(es, Math.abs(s(x) - runge(x))); ep = Math.max(ep, Math.abs(p(x) - runge(x))); }
  const { X, Y } = scales(V);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>intervals n: <span className="mono">{n}</span></span>
          <input type="range" min={2} max={30} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <div className="segmented" role="group" aria-label="interpolant">
        <button type="button" aria-pressed={show === "spline"} className={show === "spline" ? "seg is-on" : "seg"} onClick={() => setShow("spline")}>natural cubic spline</button>
        <button type="button" aria-pressed={show === "poly"} className={show === "poly" ? "seg is-on" : "seg"} onClick={() => setShow("poly")}>single polynomial</button>
      </div>
      <Axes v={V} label="Runge's function with a spline or polynomial interpolant" xStep={0.5} yStep={0.5}>
        <path d={curvePath(V, runge)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2 }} />
        <path d={curvePath(V, g, 800)} className="plot-curve" />
        {xs.map((x, i) => <circle key={i} cx={X(x)} cy={Y(ys[i])} r={4} className="plot-point" />)}
      </Axes>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14 }}>
        <div>largest error, spline: {es.toFixed(4)}</div>
        <div>largest error, polynomial of degree {n}: {ep.toFixed(4)}</div>
      </div>
      <figcaption className="viz-caption">
        The spline is a separate cubic on each interval, joined so that the value, slope and curvature are continuous, with
        zero curvature at the two ends. Adding points only refines it locally, so its error falls steadily, roughly like h⁴,
        while the single polynomial through the same points oscillates more and more.
      </figcaption>
    </figure>
  );
}
