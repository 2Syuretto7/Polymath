"use client";

import { useState } from "react";
import { fmtNum } from "./format";
import { Axes, curvePath, scales, type View } from "./Plot";

const PS = [0.5, 1, 2];

/** Area under 1/xᵖ over a tail [1, b] as b grows, or a spike [a, 1] as a shrinks. */
export function ImproperViz() {
  const [mode, setMode] = useState<"tail" | "spike">("tail");
  const [p, setP] = useState(1);
  const [s, setS] = useState(0.3);
  const f = (x: number) => x ** -p;
  // tail: b = 10^(3s) from 1 to 1000; spike: a = 10^(-3s) from 1 to 0.001
  const end = mode === "tail" ? 10 ** (3 * s) : 10 ** (-3 * s);
  const F = (x: number) => (p === 1 ? Math.log(x) : x ** (1 - p) / (1 - p));
  const area = mode === "tail" ? F(end) - F(1) : F(1) - F(end);
  const limit =
    mode === "tail" ? (p > 1 ? `${fmtNum(1 / (p - 1))}` : "none: the area grows without bound") : p < 1 ? `${fmtNum(1 / (1 - p))}` : "none: the area grows without bound";
  const v: View = mode === "tail" ? { xmin: -0.3, xmax: 12, ymin: -0.2, ymax: 2.2, w: 520, h: 200 } : { xmin: -0.1, xmax: 1.4, ymin: -0.5, ymax: 12, w: 520, h: 200 };
  const { X, Y } = scales(v);
  const lo = mode === "tail" ? 1 : end, hi = mode === "tail" ? Math.min(end, v.xmax) : 1;
  let d = `M${X(lo).toFixed(1)} ${Y(0).toFixed(1)} `;
  for (let i = 0; i <= 300; i++) {
    const x = lo * (hi / lo) ** (i / 300);
    d += `L${X(x).toFixed(1)} ${Y(Math.min(f(x), v.ymax + 1)).toFixed(1)} `;
  }
  d += `L${X(hi).toFixed(1)} ${Y(0).toFixed(1)} Z`;
  const four = (n: number) => fmtNum(Number(n.toPrecision(5)));
  const label = (q: number) => (q === 0.5 ? "1/√x" : q === 1 ? "1/x" : "1/x²");

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Kind of integral">
        <button type="button" className={mode === "tail" ? "btn btn-primary" : "btn"} aria-pressed={mode === "tail"} onClick={() => setMode("tail")}>An infinite tail</button>
        <button type="button" className={mode === "spike" ? "btn btn-primary" : "btn"} aria-pressed={mode === "spike"} onClick={() => setMode("spike")}>An infinite spike</button>
      </div>
      <div className="viz-controls" style={{ marginTop: 4, flexWrap: "wrap" }} role="group" aria-label="Function">
        {PS.map((q) => (
          <button key={q} type="button" className={q === p ? "btn btn-primary" : "btn"} aria-pressed={q === p} onClick={() => setP(q)}>
            <span className="mono">{label(q)}</span>
          </button>
        ))}
      </div>
      <Axes v={v} label={mode === "tail" ? `The area under ${label(p)} from 1 to ${four(end)}` : `The area under ${label(p)} from ${four(end)} to 1`}>
        <path d={d} className="viz-region" style={{ strokeWidth: 0 }} />
        <path d={curvePath(v, (x) => (x > 0 ? f(x) : NaN), 800)} className="plot-curve" />
      </Axes>
      <div className="viz-controls">
        <label className="viz-stepper-label" style={{ flex: 1 }}>
          {mode === "tail" ? "b" : "a"} = <span className="mono">{four(end)}</span>
          <input type="range" className="viz-range" min={0} max={1} step={0.005} value={s} onChange={(e) => setS(Number(e.target.value))} />
        </label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr>
            <td>{mode === "tail" ? `area from 1 to b = ${four(end)}` : `area from a = ${four(end)} to 1`}</td>
            <td className="mono">{four(area)}</td>
          </tr>
          <tr><td>{mode === "tail" ? "limit as b → ∞" : "limit as a → 0"}</td><td className="mono">{limit}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The slider moves {mode === "tail" ? "b from 1 to 1000" : "a from 1 down to 0.001"} on a logarithmic scale
        {mode === "tail" ? "; the picture shows only the part up to 12" : ""}. For a tail, the area stays finite only
        when the curve falls faster than 1/x. For a spike at 0 it is the other way round: the area is finite only when the
        curve rises more slowly than 1/x. The function 1/x itself fails both ways.
      </figcaption>
    </figure>
  );
}
