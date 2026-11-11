"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const A = 50.2, B = 51.6;

/** How the starting point of a bar chart's axis changes the story. */
export function AxisTrickViz() {
  const [lo, setLo] = useState(0);
  const H = 180, top = 52;
  const h = (v: number) => (H * (v - lo)) / (top - lo);
  const ratio = h(B) / h(A);
  const f = (x: number) => fmtNum(Number(x.toFixed(2)));

  return (
    <figure className="viz">
      <svg viewBox={`0 0 520 ${H + 60}`} style={{ width: "100%", maxWidth: 420, display: "block", margin: "0 auto" }} role="img"
        aria-label={`Two bars, ${A}% and ${B}%, on an axis starting at ${lo}%. The second looks ${f(ratio)} times as tall.`}>
        {[{ v: A, x: 120, l: "last year" }, { v: B, x: 300, l: "this year" }].map((b) => (
          <g key={b.l}>
            <rect x={b.x} y={30 + H - h(b.v)} width={100} height={h(b.v)} style={{ fill: b.v === B ? "var(--accent)" : "var(--text-muted)" }} />
            <text x={b.x + 50} y={30 + H - h(b.v) - 6} textAnchor="middle" className="mono" style={{ fontSize: 13, fill: "var(--text)" }}>{b.v}%</text>
            <text x={b.x + 50} y={H + 50} textAnchor="middle" style={{ fontSize: 12, fill: "var(--text-muted)" }}>{b.l}</text>
          </g>
        ))}
        <line x1={90} x2={430} y1={30 + H} y2={30 + H} style={{ stroke: "var(--border-strong)" }} />
        <text x={84} y={34 + H} textAnchor="end" className="mono" style={{ fontSize: 11, fill: "var(--text-muted)" }}>{lo}%</text>
      </svg>
      <div className="viz-sliders">
        <label><span>vertical axis starts at <span className="mono">{lo}%</span></span>
          <input type="range" min={0} max={50} step={1} value={lo} onChange={(e) => setLo(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>how many times taller the second bar looks</td><td className="mono">{f(ratio)}</td></tr>
          <tr><td>how many times larger the second number is</td><td className="mono">{f(B / A)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {lo > 30 ? "Cutting off the bottom of the axis makes a rise of 1.4 points look like a landslide. Always read the numbers on the axis." : "With the axis starting at zero, the bars' heights are in proportion to the numbers. Now raise the starting point."}
      </figcaption>
    </figure>
  );
}
