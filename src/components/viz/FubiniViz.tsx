"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const SZ = 260, PAD = 30;
const X = (x: number) => PAD + x * SZ, Y = (y: number) => PAD + SZ - y * SZ;

/** The region between y = x² and y = x, sliced vertically or horizontally. Both iterated integrals give its area, 1/6. */
export function FubiniViz() {
  const [order, setOrder] = useState<"v" | "h">("v");
  const [t, setT] = useState(0.5);
  const N = 80;
  const lower = Array.from({ length: N + 1 }, (_, i) => i / N);
  const region = `M${X(0)},${Y(0)} ` + lower.map((x) => `L${X(x)},${Y(x * x)}`).join(" ") + ` L${X(0)},${Y(0)} Z`;
  // the part swept so far
  const swept = order === "v"
    ? `M${X(0)},${Y(0)} ` + lower.filter((x) => x <= t).map((x) => `L${X(x)},${Y(x * x)}`).join(" ") + ` L${X(t)},${Y(t * t)} L${X(t)},${Y(t)} Z`
    : `M${X(0)},${Y(0)} ` + lower.filter((y) => y <= t).map((y) => `L${X(Math.sqrt(y))},${Y(y)}`).join(" ") + ` L${X(Math.sqrt(t))},${Y(t)} L${X(t)},${Y(t)} Z`;
  const len = order === "v" ? t - t * t : Math.sqrt(t) - t;
  const acc = order === "v" ? t * t / 2 - t ** 3 / 3 : (2 / 3) * t ** 1.5 - t * t / 2;
  const fm = (z: number) => fmtNum(Number(z.toFixed(4)));

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Order of integration">
        <button type="button" className={order === "v" ? "seg is-on" : "seg"} aria-pressed={order === "v"} onClick={() => setOrder("v")}>vertical slices: dy, then dx</button>
        <button type="button" className={order === "h" ? "seg is-on" : "seg"} aria-pressed={order === "h"} onClick={() => setOrder("h")}>horizontal slices: dx, then dy</button>
      </div>
      <svg viewBox={`0 0 ${SZ + 2 * PAD} ${SZ + 2 * PAD}`} role="img" aria-label="The region between the parabola and the line, with one slice drawn" style={{ width: "100%", maxWidth: 360, display: "block", margin: "12px auto 0" }}>
        <line x1={X(0)} y1={Y(0)} x2={X(1.05)} y2={Y(0)} className="viz-axis" />
        <line x1={X(0)} y1={Y(0)} x2={X(0)} y2={Y(1.05)} className="viz-axis" />
        <path d={region} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)", strokeWidth: 1.5 }} />
        <path d={swept} style={{ fill: "var(--accent-soft)" }} />
        {order === "v"
          ? <line x1={X(t)} y1={Y(t * t)} x2={X(t)} y2={Y(t)} style={{ stroke: "var(--accent)", strokeWidth: 3.5 }} />
          : <line x1={X(t)} y1={Y(t)} x2={X(Math.sqrt(t))} y2={Y(t)} style={{ stroke: "var(--accent)", strokeWidth: 3.5 }} />}
        <text x={X(0.62)} y={Y(0.72)} style={{ fontSize: 12, fill: "var(--text-muted)" }}>y = x</text>
        <text x={X(0.78)} y={Y(0.5)} style={{ fontSize: 12, fill: "var(--text-muted)" }}>y = x²</text>
        <text x={X(1)} y={Y(0) + 18} textAnchor="middle" style={{ fontSize: 12, fill: "var(--text-muted)" }}>1</text>
        <text x={X(0) - 8} y={Y(1) + 4} textAnchor="end" style={{ fontSize: 12, fill: "var(--text-muted)" }}>1</text>
      </svg>
      <div className="viz-sliders">
        <label><span>slice at {order === "v" ? "x" : "y"} = <span className="mono">{fm(t)}</span></span>
          <input type="range" min={0} max={1} step={0.01} value={t} onChange={(e) => setT(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>the slice runs</td><td className="mono">{order === "v" ? `from y = x² = ${fm(t * t)} to y = x = ${fm(t)}` : `from x = y = ${fm(t)} to x = √y = ${fm(Math.sqrt(t))}`}</td></tr>
          <tr><td>inner integral: length of the slice</td><td className="mono">{fm(len)}</td></tr>
          <tr><td>outer integral so far: shaded area</td><td className="mono">{fm(acc)}</td></tr>
          <tr><td>at the end of the sweep</td><td className="mono">1/6 ≈ {fm(1 / 6)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {order === "v"
          ? "∫₀¹ ∫ from x² to x of dy dx: each vertical slice has length x − x², and adding the slices gives 1/2 − 1/3."
          : "∫₀¹ ∫ from y to √y of dx dy: the limits change, because each horizontal slice runs from the line to the parabola, but the total is still 2/3 − 1/2."}
      </figcaption>
    </figure>
  );
}
