"use client";

import { useState } from "react";

/** Carrying a small oriented circle round a band: on the cylinder it comes back the same way, on the Möbius band reversed. */
export function OrientFrameViz() {
  const [twist, setTwist] = useState(true);
  const [s, setS] = useState(0.3);
  const laps = Math.floor(s);
  const u = s - laps;
  const flips = twist ? laps % 2 : 0;
  const W = 400, H = 100, X0 = 60, Y0 = 50;
  const px = X0 + u * W;
  const py = Y0 + H / 2 + (flips ? -1 : 1) * 18;
  const cw = flips === 1;
  const arc = (cx: number, cy: number, r: number, clockwise: boolean) => {
    const a0 = -Math.PI / 2, a1 = a0 + (clockwise ? 1 : -1) * 1.6 * Math.PI;
    const p = (a: number) => `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    return `M${p(a0)} A${r},${r} 0 1 ${clockwise ? 1 : 0} ${p(a1)}`;
  };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="band">
        <button type="button" aria-pressed={!twist} className={!twist ? "seg is-on" : "seg"} onClick={() => setTwist(false)}>cylinder: ends glued straight</button>
        <button type="button" aria-pressed={twist} className={twist ? "seg is-on" : "seg"} onClick={() => setTwist(true)}>Möbius band: ends glued with a flip</button>
      </div>
      <div className="viz-controls">
        <label>distance travelled = {s.toFixed(2)} laps <input type="range" min={0} max={200} value={Math.round(s * 100)} onChange={(e) => setS(Number(e.target.value) / 100)} aria-label="laps" /></label>
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="A band drawn as a rectangle with glued ends" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          <marker id="of-h" viewBox="0 0 10 10" refX={8} refY={5} markerWidth={9} markerHeight={9} markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0L10,5L0,10z" style={{ fill: cw ? "var(--danger)" : "var(--accent)" }} /></marker>
          <marker id="of-e" viewBox="0 0 10 10" refX={5} refY={5} markerWidth={10} markerHeight={10} markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0L10,5L0,10z" style={{ fill: "var(--text-muted)" }} /></marker>
        </defs>
        <rect x={X0} y={Y0} width={W} height={H} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        <line x1={X0} y1={Y0 + H} x2={X0} y2={Y0 + H / 2} markerEnd="url(#of-e)" style={{ stroke: "var(--text-muted)", strokeWidth: 3 }} />
        <line x1={X0} y1={Y0 + H / 2} x2={X0} y2={Y0} style={{ stroke: "var(--text-muted)", strokeWidth: 3 }} />
        {twist ? (
          <>
            <line x1={X0 + W} y1={Y0} x2={X0 + W} y2={Y0 + H / 2} markerEnd="url(#of-e)" style={{ stroke: "var(--text-muted)", strokeWidth: 3 }} />
            <line x1={X0 + W} y1={Y0 + H / 2} x2={X0 + W} y2={Y0 + H} style={{ stroke: "var(--text-muted)", strokeWidth: 3 }} />
          </>
        ) : (
          <>
            <line x1={X0 + W} y1={Y0 + H} x2={X0 + W} y2={Y0 + H / 2} markerEnd="url(#of-e)" style={{ stroke: "var(--text-muted)", strokeWidth: 3 }} />
            <line x1={X0 + W} y1={Y0 + H / 2} x2={X0 + W} y2={Y0} style={{ stroke: "var(--text-muted)", strokeWidth: 3 }} />
          </>
        )}
        <circle cx={px} cy={py} r={4} style={{ fill: cw ? "var(--danger)" : "var(--accent)" }} />
        <path d={arc(px, py, 16, cw)} markerEnd="url(#of-h)" style={{ fill: "none", stroke: cw ? "var(--danger)" : "var(--accent)", strokeWidth: 2.5 }} />
        <text x={X0} y={Y0 + H + 22} style={{ fill: "var(--text-faint)", fontSize: 11 }}>the edges marked by arrows are glued, arrow to arrow</text>
        <text x={260} y={30} textAnchor="middle" style={{ fill: cw ? "var(--danger)" : "var(--accent)", fontSize: 13, fontWeight: 700 }}>
          {cw ? "the circle now turns clockwise: orientation reversed" : "the circle turns anticlockwise, as at the start"}
        </text>
      </svg>
      <figcaption className="viz-caption">
        Slide the small turning circle along the band. Crossing the glued edge of the Möbius band also flips it top to bottom,
        so its sense of rotation reverses; after a second lap it is restored. No consistent choice of &lsquo;anticlockwise&rsquo;
        exists on the Möbius band: it is not orientable.
      </figcaption>
    </figure>
  );
}
