"use client";

import { useState } from "react";
import { fmtNum } from "./format";
import { Axes, curvePath, scales, type View } from "./Plot";

const V: View = { xmin: -12, xmax: 12, ymin: -2.5, ymax: 2.5, w: 520, h: 220 };

function partial(which: "sin" | "cos", terms: number, x: number) {
  // cos: sum (-1)^k x^(2k)/(2k)!, sin: sum (-1)^k x^(2k+1)/(2k+1)!
  let term = which === "cos" ? 1 : x;
  let sum = term;
  for (let k = 1; k < terms; k++) {
    const a = which === "cos" ? 2 * k - 1 : 2 * k, b = which === "cos" ? 2 * k : 2 * k + 1;
    term *= -(x * x) / (a * b);
    sum += term;
  }
  return sum;
}

/** Partial sums of the sine and cosine series, hugging the curve over a wider and wider stretch. */
export function TrigSeriesViz() {
  const [which, setWhich] = useState<"sin" | "cos">("cos");
  const [terms, setTerms] = useState(3);
  const [x, setX] = useState(3);
  const f = which === "cos" ? Math.cos : Math.sin;
  const deg = which === "cos" ? 2 * (terms - 1) : 2 * terms - 1;
  const { X, Y } = scales(V);
  const P = (t: number) => partial(which, terms, t);
  const shown = which === "cos"
    ? ["1", "x²/2!", "x⁴/4!", "x⁶/6!", "x⁸/8!", "x¹⁰/10!"]
    : ["x", "x³/3!", "x⁵/5!", "x⁷/7!", "x⁹/9!", "x¹¹/11!"];
  const formula = shown.slice(0, Math.min(terms, 4)).map((s, i) => (i === 0 ? s : `${i % 2 ? "−" : "+"} ${s}`)).join(" ") + (terms > 4 ? " ± …" : "");
  let good = 0;
  for (let t = 0; t <= 12; t += 0.01) { if (Math.abs(P(t) - f(t)) < 0.01) good = t; else break; }
  const four = (n: number) => fmtNum(Number(n.toPrecision(5)));

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Function">
        {(["cos", "sin"] as const).map((w) => (
          <button key={w} type="button" className={w === which ? "btn btn-primary" : "btn"} aria-pressed={w === which} onClick={() => setWhich(w)}>
            <span className="mono">{w} x</span>
          </button>
        ))}
      </div>
      <p className="mono" style={{ margin: "12px 0 4px" }}>{formula}</p>
      <Axes v={V} label={`${which} x and its series cut off after ${terms} terms`}>
        <rect x={X(-good)} y={0} width={X(good) - X(-good)} height={V.h} className="viz-region" style={{ strokeWidth: 0, opacity: 0.6 }} />
        <path d={curvePath(V, f, 800)} className="plot-ghost" style={{ strokeDasharray: "none", strokeWidth: 2 }} />
        <path d={curvePath(V, P, 1200)} className="plot-curve" />
        <circle cx={X(x)} cy={Y(Math.max(-2.6, Math.min(2.6, P(x))))} r={5} className="plot-hot" />
      </Axes>
      <div className="viz-controls">
        <label className="viz-stepper-label" style={{ flex: 1 }}>
          terms = <span className="mono">{terms}</span> (degree {deg})
          <input type="range" className="viz-range" min={1} max={12} step={1} value={terms} onChange={(e) => setTerms(Number(e.target.value))} />
        </label>
        <label className="viz-stepper-label" style={{ flex: 1 }}>
          x = <span className="mono">{fmtNum(x)}</span>
          <input type="range" className="viz-range" min={-11} max={11} step={0.5} value={x} onChange={(e) => setX(Number(e.target.value))} />
        </label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>the partial sum at x</td><td className="mono">{four(P(x))}</td></tr>
          <tr><td>{which} x</td><td className="mono">{four(f(x))}</td></tr>
          <tr><td>agrees to within 0.01 for |x| up to about (shaded)</td><td className="mono">{fmtNum(Number(good.toFixed(2)))}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The grey curve is {which} x; the coloured one is the polynomial. Each extra term lets the polynomial follow the
        waves one step further before it shoots off. With enough terms, any x at all is reached: the series converges
        everywhere.
      </figcaption>
    </figure>
  );
}
