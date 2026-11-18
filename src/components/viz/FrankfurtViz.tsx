"use client";

import { useState } from "react";
import { Arrow } from "./Plot";

/** Frankfurt's case: Black would force Jones to vote for Asha, but Jones does so on his own. */
export function FrankfurtViz() {
  const [lean, setLean] = useState(false);
  const box = (x: number, y: number, w: number, label: string, sub: string, hot = false) => (
    <g>
      <rect x={x} y={y} width={w} height={54} rx={10} className={hot ? "viz-cell is-on" : "viz-cell"} />
      <text x={x + w / 2} y={y + 23} textAnchor="middle" className={hot ? "viz-label is-on" : "viz-label"}>{label}</text>
      <text x={x + w / 2} y={y + 42} textAnchor="middle" className="plot-tick">{sub}</text>
    </g>
  );

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0 }}>
        <button type="button" className={!lean ? "btn btn-primary" : "btn"} aria-pressed={!lean} onClick={() => setLean(false)}>Jones decides by himself</button>
        <button type="button" className={lean ? "btn btn-primary" : "btn"} aria-pressed={lean} onClick={() => setLean(true)}>Jones starts to lean the other way</button>
      </div>
      <svg viewBox="0 0 620 230" role="img" aria-label={lean ? "Black's device takes over and Jones votes for Asha" : "Jones decides on his own and votes for Asha; the device does nothing"}>
        {box(20, 30, 150, "Jones deliberates", lean ? "leans towards Bilal" : "weighs his reasons", !lean)}
        {box(235, 30, 150, "Decision", lean ? "made by the device" : "made by Jones", true)}
        {box(450, 30, 150, "Vote for Asha", "the same either way", true)}
        {box(235, 150, 150, "Black's device", lean ? "intervenes" : "watches, does nothing", lean)}
        <Arrow x1={172} y1={57} x2={231} y2={57} className={lean ? "plot-arrow is-muted" : "plot-arrow"} />
        <Arrow x1={387} y1={57} x2={446} y2={57} />
        <Arrow x1={310} y1={148} x2={310} y2={88} className={lean ? "plot-arrow is-hot" : "plot-arrow is-muted"} />
        {!lean && <text x={322} y={124} className="plot-tick">ready, never used</text>}
        {lean && <text x={322} y={124} className="plot-tick" style={{ fill: "var(--danger)" }}>forces the decision</text>}
      </svg>
      <table className="table" style={{ marginTop: 8, marginBottom: 8 }}>
        <tbody>
          <tr><td>Could Jones have voted otherwise?</td><td className="viz-verdict viz-verdict-wrong">No</td></tr>
          <tr><td>Did the decision come from Jones himself?</td><td className={`viz-verdict viz-verdict-${lean ? "wrong" : "info"}`}>{lean ? "No" : "Yes"}</td></tr>
          <tr><td>Is Jones responsible for his vote?</td><td className={`viz-verdict viz-verdict-${lean ? "wrong" : "info"}`}>{lean ? "Most say no" : "Most say yes"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {lean
          ? <>Here Jones is not responsible: the device made the decision. But notice that in both versions he could not have done otherwise.</>
          : <>Jones could not have voted otherwise, since the device would have stopped him. Yet the device did nothing, and the vote came from his own reasons. If he is responsible, then being able to do otherwise is not needed for responsibility.</>}
      </figcaption>
    </figure>
  );
}
