"use client";

import { useState } from "react";
import { fmtNum } from "./format";

/** Divide a stick in half again and again: the atomists' dilemma about infinite division. */
export function HalvingViz() {
  const [k, setK] = useState(3);
  const pieces = 2 ** k;
  const size = 1 / pieces;
  const shown = Math.min(pieces, 128);

  return (
    <figure className="viz">
      <svg viewBox="0 0 520 70" style={{ width: "100%", display: "block" }} role="img" aria-label={`A stick of length 1 cut into ${pieces} equal pieces`}>
        {Array.from({ length: shown }, (_, i) => (
          <rect key={i} x={10 + (i * 500) / shown} y={20} width={Math.max(500 / shown - (shown > 64 ? 0.5 : 2), 0.5)} height={30}
            style={{ fill: i % 2 ? "var(--accent)" : "var(--accent-soft)" }} />
        ))}
      </svg>
      <div className="viz-sliders">
        <label><span>number of halvings: <span className="mono">{k}</span></span>
          <input type="range" min={0} max={40} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>pieces</td><td className="mono">{fmtNum(pieces)}</td></tr>
          <tr><td>length of each</td><td className="mono">{size.toExponential(3)}</td></tr>
          <tr><td>pieces × length</td><td className="mono">1</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        At every finite stage the pieces still add up to the whole. Now imagine the division carried out &ldquo;all the way&rdquo;. If the final pieces have no size, how do they make a stick? If they have some size, however small, infinitely many of them make a stick of infinite length. The atomists concluded that division must stop somewhere.
      </figcaption>
    </figure>
  );
}
