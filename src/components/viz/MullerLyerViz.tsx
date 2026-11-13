"use client";

import { useState } from "react";

/** A visual illusion that survives knowing the truth: the illusionist's model for the appearance of phenomenal properties. */
export function MullerLyerViz() {
  const [ang, setAng] = useState(40);
  const [fin, setFin] = useState(26);
  const [meas, setMeas] = useState(false);
  const W = 560, H = 200, x1 = 160, x2 = 400, a = (ang * Math.PI) / 180;
  const dx = fin * Math.cos(a), dy = fin * Math.sin(a);
  const arrow = (y: number, out: boolean) => {
    const s = out ? 1 : -1; // out: fins point outward, making the line look longer
    return (
      <g style={{ stroke: "var(--text)", strokeWidth: 2.5, fill: "none", strokeLinecap: "round" }}>
        <line x1={x1} y1={y} x2={x2} y2={y} />
        <path d={`M${x1 - s * dx},${y - dy} L${x1},${y} L${x1 - s * dx},${y + dy}`} />
        <path d={`M${x2 + s * dx},${y - dy} L${x2},${y} L${x2 + s * dx},${y + dy}`} />
      </g>
    );
  };
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>fin angle: <span className="mono">{ang}°</span></span><input type="range" min={15} max={75} step={5} value={ang} onChange={(e) => setAng(Number(e.target.value))} /></label>
        <label><span>fin length: <span className="mono">{fin}</span></span><input type="range" min={0} max={50} step={2} value={fin} onChange={(e) => setFin(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Two equal lines, one with inward fins and one with outward fins" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {arrow(60, true)}
        {arrow(140, false)}
        {meas && <g style={{ stroke: "var(--accent)", strokeWidth: 1.5, strokeDasharray: "5 4" }}>
          <line x1={x1} y1={20} x2={x1} y2={180} />
          <line x1={x2} y1={20} x2={x2} y2={180} />
        </g>}
      </svg>
      <div className="viz-controls">
        <button type="button" className={meas ? "btn" : "btn btn-primary"} onClick={() => setMeas(!meas)}>{meas ? "Hide the measuring lines" : "Measure the lines"}</button>
      </div>
      <p style={{ margin: "8px 0 4px", fontSize: 14 }}>
        {meas
          ? "The guides show both lines have exactly the same length. Look again: the upper line probably still looks longer. Knowing the truth does not change how it looks."
          : "Which horizontal line looks longer?"}
      </p>
      <figcaption className="viz-caption">
        Illusionists such as Keith Frankish and Daniel Dennett claim introspection works in a similar way. It represents our
        experiences as having special, ineffable phenomenal qualities, and the representation persists, but nothing has those
        qualities. Experiences are real; their seeming phenomenality is the illusion.
      </figcaption>
    </figure>
  );
}
