"use client";

import { useMemo, useState } from "react";
import { normalDraw, seededRng } from "./seededRng";

const N = 300;
const DATA = (() => { const r = seededRng(21); return Array.from({ length: N }, () => { const x = 2 * r() - 1; return [x, x + x * x + 0.2 * normalDraw(r)]; }); })();
const KINDS = ["a constant", "your line", "the best line", "E(Y | X)"];

/** Predicting Y from X: compare the mean squared error of a constant, a line, and the conditional mean. */
export function PredictorErrorViz() {
  const [k, setK] = useState(1);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0.5);
  const stats = useMemo(() => {
    const mx = DATA.reduce((s, p) => s + p[0], 0) / N, my = DATA.reduce((s, p) => s + p[1], 0) / N;
    const sxy = DATA.reduce((s, p) => s + (p[0] - mx) * (p[1] - my), 0), sxx = DATA.reduce((s, p) => s + (p[0] - mx) ** 2, 0);
    const slope = sxy / sxx;
    return { my, slope, icpt: my - slope * mx };
  }, []);
  const preds: ((x: number) => number)[] = [() => stats.my, (x) => a + b * x, (x) => stats.icpt + stats.slope * x, (x) => x + x * x];
  const mse = preds.map((h) => DATA.reduce((s, p) => s + (p[1] - h(p[0])) ** 2, 0) / N);
  const h = preds[k];
  const W = 420, H = 300, pad = 24;
  const X = (x: number) => W / 2 + x * (W / 2 - pad);
  const Y = (y: number) => H - pad - ((y + 1.2) / 3.6) * (H - 2 * pad);
  const xs = Array.from({ length: 101 }, (_, i) => -1 + i / 50);
  const path = xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(h(x)).toFixed(1)}`).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Predictor">
        {KINDS.map((nm, i) => <button key={nm} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{nm}</button>)}
      </div>
      {k === 1 && (
        <div className="viz-sliders" style={{ marginTop: 8 }}>
          <label><span>intercept: <span className="mono">{a.toFixed(2)}</span></span>
            <input type="range" min={-0.5} max={1} step={0.05} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
          <label><span>slope: <span className="mono">{b.toFixed(2)}</span></span>
            <input type="range" min={-1} max={2} step={0.05} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
        </div>
      )}
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Scatter of data with the chosen predictor and its errors" style={{ width: "100%", maxWidth: 460, display: "block", margin: "6px auto" }}>
        <line x1={pad} y1={Y(0)} x2={W - pad} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={pad} x2={X(0)} y2={H - pad} style={{ stroke: "var(--border)" }} />
        {DATA.slice(0, 60).map(([x, y], i) => <line key={`e${i}`} x1={X(x)} y1={Y(y)} x2={X(x)} y2={Y(h(x))} style={{ stroke: "var(--danger)", strokeOpacity: 0.35 }} />)}
        {DATA.map(([x, y], i) => <circle key={i} cx={X(x)} cy={Y(y)} r={2.3} style={{ fill: "var(--text-muted)", fillOpacity: 0.55 }} />)}
        <path d={path} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
      </svg>
      <table className="table mono" style={{ width: "auto", margin: "0 auto" }}>
        <tbody>
          {KINDS.map((nm, i) => <tr key={nm} style={{ fontWeight: i === k ? 700 : 400 }}><td>{nm}</td><td>mean squared error {mse[i].toFixed(4)}</td></tr>)}
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Here Y = X + X² + noise, with X uniform on (−1, 1) and noise of standard deviation 0.2. Thin vertical segments show some of the errors. The best constant is the mean of Y, the best line is the least squares line, and the best function of all is E(Y | X) = X + X², whose error is just the noise variance, about 0.04.
      </figcaption>
    </figure>
  );
}
