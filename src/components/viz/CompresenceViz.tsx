"use client";

import { useState } from "react";

const STICK = 5;

/** The same stick is large compared with one thing and small compared with another; the Large itself never is small. */
export function CompresenceViz() {
  const [c, setC] = useState(3);
  const W = 520, X = (x: number) => 20 + x * 50;
  const rel = c < STICK ? "larger" : c > STICK ? "smaller" : "equal";

  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${W} 150`} role="img" aria-label={`A stick of length ${STICK} compared with one of length ${c}`} style={{ width: "100%" }}>
        <rect x={X(0)} y={30} width={STICK * 50} height={16} rx={3} style={{ fill: "var(--accent)" }} />
        <text x={X(0)} y={22} className="viz-label is-on">this stick: {STICK}</text>
        <rect x={X(0)} y={90} width={c * 50} height={16} rx={3} style={{ fill: "var(--text-muted)" }} />
        <text x={X(0)} y={82} className="viz-label">comparison: {c}</text>
        <line x1={X(STICK)} y1={20} x2={X(STICK)} y2={130} style={{ stroke: "var(--border-strong)", strokeDasharray: "4 4" }} />
      </svg>
      <div className="viz-sliders">
        <label><span>length of the comparison stick <span className="mono">{c}</span></span>
          <input type="range" min={1} max={9} step={1} value={c} onChange={(e) => setC(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>Is this stick large?</td><td>{rel === "larger" ? "Yes, compared with this one." : rel === "smaller" ? "No, it is small compared with this one." : "Neither: they are equal."}</td></tr>
          <tr><td>Is the Form of Large ever small?</td><td>Never, in any comparison.</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The stick does not change, yet it is large compared with shorter sticks and small compared with longer ones. Plato
        concludes that whatever largeness is, it cannot simply be this stick, or any visible thing, since each of them is
        also small. What is large and in no way small is the Form.
      </figcaption>
    </figure>
  );
}
