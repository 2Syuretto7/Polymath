"use client";

import { useState } from "react";
import { Axes, curvePath, scales, type View } from "./Plot";

const runge = (x: number) => 1 / (1 + 25 * x * x);
const V: View = { xmin: -1, xmax: 1, ymin: -0.6, ymax: 1.6, w: 560, h: 260 };

export function lagrange(nodes: number[], ys: number[]) {
  return (x: number) => {
    let s = 0;
    for (let i = 0; i < nodes.length; i++) {
      let L = 1;
      for (let j = 0; j < nodes.length; j++) if (j !== i) L *= (x - nodes[j]) / (nodes[i] - nodes[j]);
      s += ys[i] * L;
    }
    return s;
  };
}

/** Interpolating Runge’s function at equally spaced and at Chebyshev nodes. */
export function RungeViz() {
  const [n, setN] = useState(10);
  const [cheb, setCheb] = useState(false);
  const nodes = Array.from({ length: n + 1 }, (_, i) => (cheb ? Math.cos(((2 * i + 1) * Math.PI) / (2 * n + 2)) : -1 + (2 * i) / n));
  const p = lagrange(nodes, nodes.map(runge));
  let maxErr = 0;
  for (let k = 0; k <= 2000; k++) { const x = -1 + k / 1000; maxErr = Math.max(maxErr, Math.abs(p(x) - runge(x))); }
  const { X, Y } = scales(V);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>degree n: <span className="mono">{n}</span></span>
          <input type="range" min={2} max={20} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <div className="segmented" role="group" aria-label="nodes">
        <button type="button" aria-pressed={!cheb} className={!cheb ? "seg is-on" : "seg"} onClick={() => setCheb(false)}>equally spaced nodes</button>
        <button type="button" aria-pressed={cheb} className={cheb ? "seg is-on" : "seg"} onClick={() => setCheb(true)}>Chebyshev nodes</button>
      </div>
      <Axes v={V} label="Runge's function and its interpolating polynomial" xStep={0.5} yStep={0.5}>
        <path d={curvePath(V, runge)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2 }} />
        <path d={curvePath(V, p, 800)} className="plot-curve" />
        {nodes.map((x, i) => <circle key={i} cx={X(x)} cy={Y(runge(x))} r={4} className="plot-point" />)}
      </Axes>
      <div className="mono" style={{ fontSize: 14, fontWeight: 700 }}>
        {n + 1} nodes; largest error on [−1, 1]: {maxErr.toFixed(4)}
      </div>
      <figcaption className="viz-caption">
        The grey curve is 1/(1 + 25x²); the coloured curve is the unique polynomial of degree at most n through the marked
        points. With equally spaced nodes the polynomial swings wildly near the ends as n grows, and the error increases
        without bound: Runge&rsquo;s phenomenon. With Chebyshev nodes, clustered near the ends, the error goes to zero.
      </figcaption>
    </figure>
  );
}
