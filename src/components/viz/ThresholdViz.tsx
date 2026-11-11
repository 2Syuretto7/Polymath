"use client";

import { useState } from "react";
import { fmtNum } from "./format";
import { Axes, curvePath, scales, type View } from "./Plot";

function Phi(x: number) {
  const t = 1 / (1 + 0.3275911 * Math.abs(x) / Math.SQRT2);
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-(x * x) / 2);
  return x >= 0 ? (1 + y) / 2 : (1 - y) / 2;
}
const pdf = (x: number, m: number) => Math.exp(-((x - m) ** 2) / 2) / Math.sqrt(2 * Math.PI);
const GAP = 2.5;
const V: View = { xmin: -3.5, xmax: 6, ymin: -0.03, ymax: 0.45, w: 520, h: 200 };

/** Where to set the bar for conviction: wrongful convictions against wrongful acquittals. */
export function ThresholdViz() {
  const [t, setT] = useState(2);
  const [g, setG] = useState(0.5);
  const N = 1000, guilty = N * g, innocent = N - guilty;
  const wc = innocent * (1 - Phi(t));
  const wa = guilty * Phi(t - GAP);
  const { X, Y } = scales(V);
  const tail = (m: number, a: number, b: number) => {
    let d = `M${X(a)} ${Y(0)} `;
    for (let i = 0; i <= 60; i++) { const x = a + ((b - a) * i) / 60; d += `L${X(x).toFixed(1)} ${Y(pdf(x, m)).toFixed(1)} `; }
    return d + `L${X(b)} ${Y(0)} Z`;
  };
  const f = (x: number) => fmtNum(Number(x.toFixed(1)));

  return (
    <figure className="viz">
      <p className="mono-meta" style={{ margin: 0, textTransform: "none" }}>strength of the evidence against a defendant: innocent (left curve) and guilty (right curve)</p>
      <Axes v={V} yStep={0.1} label={`Two overlapping curves of evidence strength, with the bar for conviction at ${f(t)}`}>
        <path d={tail(0, t, V.xmax)} style={{ fill: "var(--danger)", opacity: 0.35 }} />
        <path d={tail(GAP, V.xmin, t)} style={{ fill: "var(--accent)", opacity: 0.3 }} />
        <path d={curvePath(V, (x) => pdf(x, 0), 400)} className="plot-curve" style={{ stroke: "var(--text-muted)" }} />
        <path d={curvePath(V, (x) => pdf(x, GAP), 400)} className="plot-curve" />
        <line x1={X(t)} x2={X(t)} y1={Y(0)} y2={Y(0.43)} className="plot-line" />
      </Axes>
      <div className="viz-sliders">
        <label><span>bar for conviction: <span className="mono">{f(t)}</span></span>
          <input type="range" min={-1} max={5} step={0.1} value={t} onChange={(e) => setT(Number(e.target.value))} /></label>
        <label><span>share of defendants who are guilty: <span className="mono">{Math.round(g * 100)}%</span></span>
          <input type="range" min={0.1} max={0.9} step={0.05} value={g} onChange={(e) => setG(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>innocent people convicted, per 1000 trials (red)</td><td className="mono">{f(wc)}</td></tr>
          <tr><td>guilty people acquitted, per 1000 trials (purple)</td><td className="mono">{f(wa)}</td></tr>
          <tr><td>guilty acquitted for each innocent convicted</td><td className="mono">{wc > 0.05 ? f(wa / wc) : "very many"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Because the curves overlap, no bar avoids both errors. Raising it trades wrongful convictions for wrongful acquittals; the law has to decide which error it fears more.
      </figcaption>
    </figure>
  );
}
