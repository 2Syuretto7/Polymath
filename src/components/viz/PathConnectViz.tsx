"use client";

import { useState } from "react";

const SETS = [
  { name: "annulus", conn: true, path: true, note: "Any two points can be joined by a path that runs round the ring, so it is path-connected, hence connected." },
  { name: "two discs", conn: false, path: false, note: "The two discs are disjoint open pieces, so the set splits: colour one disc 0 and the other 1, a continuous map onto {0, 1}." },
  { name: "two discs and a segment", conn: true, path: true, note: "The segment joins the discs, so every pair of points has a path between them." },
  { name: "topologist’s sine curve", conn: true, path: false, note: "The curve y = sin(1/x) for 0 < x ≤ 1, together with the segment {0} × [−1, 1]. It is connected, since the segment lies in the closure of the curve, but no path reaches the segment from the curve." },
];

/** Connected and path-connected sets in the plane, including one that is connected but not path-connected. */
export function PathConnectViz() {
  const [si, setSi] = useState(0);
  const [show, setShow] = useState(false);
  const S = SETS[si];
  const W = 400, H = 240;
  const st = { fill: "var(--accent)", fillOpacity: 0.3, stroke: "var(--accent)", strokeWidth: 1.5 };
  const sine = () => {
    // x from 1 down to a small value, mapped to the box [60, 340]
    const pts: string[] = [];
    for (let i = 0; i <= 3000; i++) {
      const x = 1 - (i / 3000) * (1 - 0.012);
      pts.push(`${i ? "L" : "M"}${(60 + x * 280).toFixed(1)},${(120 - 80 * Math.sin(1 / x)).toFixed(1)}`);
    }
    return pts.join(" ");
  };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Set">
        {SETS.map((s, i) => <button key={s.name} type="button" aria-pressed={si === i} className={si === i ? "seg is-on" : "seg"} onClick={() => { setSi(i); setShow(false); }}>{s.name}</button>)}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`The set: ${S.name}`} style={{ width: "100%", maxWidth: 460, display: "block", margin: "8px auto" }}>
        {si === 0 && <path d="M120,120 a80,80 0 1,0 160,0 a80,80 0 1,0 -160,0 M160,120 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" style={{ ...st, fillRule: "evenodd" }} />}
        {(si === 1 || si === 2) && <>
          <circle cx={110} cy={120} r={60} style={show && si === 1 ? { ...st, fill: "var(--text-faint)" } : st} />
          <circle cx={290} cy={120} r={60} style={st} />
          {si === 2 && <line x1={170} y1={120} x2={230} y2={120} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />}
        </>}
        {si === 3 && <>
          <path d={sine()} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1 }} />
          <line x1={60} y1={40} x2={60} y2={200} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />
        </>}
        {show && si === 0 && <path d="M140,120 A60,60 0 0,1 260,120" style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2.5, strokeDasharray: "6 4" }} />}
        {show && si === 2 && <path d="M90,100 L170,120 L230,120 L310,140" style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2.5, strokeDasharray: "6 4" }} />}
        {show && si === 1 && <>
          <text x={110} y={124} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 16 }}>0</text>
          <text x={290} y={124} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 16 }}>1</text>
        </>}
        {show && si === 3 && <text x={200} y={228} textAnchor="middle" style={{ fill: "var(--danger)", fontSize: 12 }}>a path from the curve must oscillate infinitely often before reaching x = 0</text>}
      </svg>
      <div className="viz-controls">
        <button type="button" className={show ? "btn" : "btn btn-primary"} onClick={() => setShow(!show)}>{show ? "Hide" : S.path ? "Show a path" : S.conn ? "Try to find a path" : "Show a separation"}</button>
      </div>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14, marginTop: 8 }}>
        <div>connected: <strong>{S.conn ? "yes" : "no"}</strong>; path-connected: <strong>{S.path ? "yes" : "no"}</strong></div>
      </div>
      <p style={{ margin: "6px 0 4px", fontSize: 14 }}>{S.note}</p>
      <figcaption className="viz-caption">
        A space is connected if it cannot be split into two disjoint non-empty open pieces, equivalently if every continuous map
        to {"{0, 1}"} is constant. Path-connected spaces are connected, but the topologist&rsquo;s sine curve shows the converse fails.
      </figcaption>
    </figure>
  );
}
