"use client";

import { useState } from "react";

const BUMPS: [number, number][] = [[0.5, 0.5], [0.25, 0.25], [0.75, 0.25], [0.125, 0.125], [0.375, 0.125], [0.625, 0.125], [0.875, 0.125], [0.0625, 0.0625], [0.3125, 0.0625], [0.5625, 0.0625]];
const bump = ([c, w]: [number, number], x: number) => Math.max(0, 1 - Math.abs(x - c) / w);

/** Urysohn metrisation in miniature: countably many continuous functions into [0, 1] embed a space in the Hilbert cube, and the cube's metric pulls back. */
export function HilbertCubeViz() {
  const [x, setX] = useState(0.3);
  const [y, setY] = useState(0.34);
  const rows = BUMPS.map((b, i) => { const fx = bump(b, x), fy = bump(b, y); return { i: i + 1, fx, fy, term: Math.abs(fx - fy) / 2 ** (i + 1) }; });
  const D = rows.reduce((s, r) => s + r.term, 0);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>point x: <span className="mono">{x.toFixed(3)}</span></span>
          <input type="range" min={0} max={1} step={0.001} value={x} onChange={(e) => setX(Number(e.target.value))} /></label>
        <label><span>point y: <span className="mono">{y.toFixed(3)}</span></span>
          <input type="range" min={0} max={1} step={0.001} value={y} onChange={(e) => setY(Number(e.target.value))} /></label>
      </div>
      <div style={{ overflowX: "auto", marginTop: 8 }}>
        <table className="table" style={{ fontSize: 14 }}>
          <thead>
            <tr><th style={{ textTransform: "none" }}>n</th><th style={{ textTransform: "none" }}>fₙ(x)</th><th style={{ textTransform: "none" }}>fₙ(y)</th><th style={{ textTransform: "none" }}>|fₙ(x) − fₙ(y)| / 2ⁿ</th></tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.i} style={r.term > 0 ? { background: "var(--accent-soft)" } : undefined}>
                <td className="mono">{r.i}</td><td className="mono">{r.fx.toFixed(3)}</td><td className="mono">{r.fy.toFixed(3)}</td><td className="mono">{r.term.toFixed(5)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>
        distance in the cube D(x, y) = {D.toFixed(5)}, while |x − y| = {Math.abs(x - y).toFixed(3)}
      </p>
      <figcaption className="viz-caption">
        Each fₙ is a tent function, 1 at the centre of one dyadic interval and 0 outside it. Sending a point to the sequence of
        its values puts the space inside the Hilbert cube, the product of countably many copies of [0, 1], whose metric weights the nth coordinate by 1/2ⁿ. Distinct points
        are told apart by some fₙ, and nearby points have nearby values in every coordinate, so the pulled-back metric gives
        back the original topology. Here only the first ten functions are shown.
      </figcaption>
    </figure>
  );
}
