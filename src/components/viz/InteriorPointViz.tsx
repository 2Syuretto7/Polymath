"use client";

import { useState } from "react";

type S = { name: string; inside: (x: number, y: number) => boolean; dist: (x: number, y: number) => number; open: boolean; closed: boolean; draw: "disc" | "square" | "half" };
const sq = (x: number, y: number) => {
  const dx = Math.max(Math.abs(x) - 1, 0), dy = Math.max(Math.abs(y) - 1, 0);
  return dx > 0 || dy > 0 ? Math.hypot(dx, dy) : Math.min(1 - Math.abs(x), 1 - Math.abs(y));
};
const SETS: S[] = [
  { name: "open disc x² + y² < 1", inside: (x, y) => x * x + y * y < 1 - 1e-9, dist: (x, y) => Math.abs(1 - Math.hypot(x, y)), open: true, closed: false, draw: "disc" },
  { name: "closed disc x² + y² ≤ 1", inside: (x, y) => x * x + y * y <= 1 + 1e-9, dist: (x, y) => Math.abs(1 - Math.hypot(x, y)), open: false, closed: true, draw: "disc" },
  { name: "square −1 ≤ x, y < 1", inside: (x, y) => x >= -1 - 1e-9 && y >= -1 - 1e-9 && x < 1 - 1e-9 && y < 1 - 1e-9, dist: sq, open: false, closed: false, draw: "square" },
  { name: "half-plane y > 0", inside: (_x, y) => y > 1e-9, dist: (_x, y) => Math.abs(y), open: true, closed: false, draw: "half" },
];

/** Interior, exterior and boundary points: does some ball around the point stay inside the set, or outside it? */
export function InteriorPointViz() {
  const [si, setSi] = useState(0);
  const [x, setX] = useState(0.5);
  const [y, setY] = useState(0.25);
  const S = SETS[si];
  const W = 340, B = 2;
  const X = (v: number) => ((v + B) / (2 * B)) * W, Y = (v: number) => W - ((v + B) / (2 * B)) * W, L = (v: number) => (v / (2 * B)) * W;
  const inS = S.inside(x, y), d = Math.round(S.dist(x, y) * 1e6) / 1e6;
  const kind = d === 0 ? "boundary" : inS ? "interior" : "exterior";
  const solid = { fill: "var(--accent)", fillOpacity: 0.25 };
  const edge = (dashed: boolean) => ({ fill: "none", stroke: "var(--accent)", strokeWidth: 2, strokeDasharray: dashed ? "6 4" : undefined });
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Set">
        {SETS.map((s, i) => <button key={s.name} type="button" aria-pressed={si === i} className={si === i ? "seg is-on" : "seg"} onClick={() => setSi(i)}>{s.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>point x: <span className="mono">{x}</span></span><input type="range" min={-1.75} max={1.75} step={0.25} value={x} onChange={(e) => setX(Number(e.target.value))} /></label>
        <label><span>point y: <span className="mono">{y}</span></span><input type="range" min={-1.75} max={1.75} step={0.25} value={y} onChange={(e) => setY(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label={`The point (${x}, ${y}) is a ${kind} point`} style={{ width: "100%", maxWidth: 380, display: "block", margin: "8px auto" }}>
        <rect x={0} y={0} width={W} height={W} style={{ fill: "none", stroke: "var(--border)" }} />
        {S.draw === "disc" && <><circle cx={X(0)} cy={Y(0)} r={L(1)} style={solid} /><circle cx={X(0)} cy={Y(0)} r={L(1)} style={edge(S.open)} /></>}
        {S.draw === "square" && <>
          <rect x={X(-1)} y={Y(1)} width={L(2)} height={L(2)} style={solid} />
          <path d={`M${X(-1)},${Y(1)} L${X(-1)},${Y(-1)} L${X(1)},${Y(-1)}`} style={edge(false)} />
          <path d={`M${X(-1)},${Y(1)} L${X(1)},${Y(1)} L${X(1)},${Y(-1)}`} style={edge(true)} />
        </>}
        {S.draw === "half" && <><rect x={0} y={0} width={W} height={Y(0)} style={solid} /><line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={edge(true)} /></>}
        <circle cx={X(x)} cy={Y(y)} r={d > 0 ? L(d) * 0.95 : L(0.25)} style={{ fill: "none", stroke: d > 0 ? "var(--text)" : "var(--danger)", strokeWidth: 1.5 }} />
        <circle cx={X(x)} cy={Y(y)} r={4} style={{ fill: inS ? "var(--accent)" : "var(--bg)", stroke: "var(--text)", strokeWidth: 1.5 }} />
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>point in the set: <strong>{inS ? "yes" : "no"}</strong>; distance to the edge: {d}</div>
        <div>kind of point: <strong>{kind}</strong></div>
        <div>the set is open: <strong>{S.open ? "yes" : "no"}</strong>; the set is closed: <strong>{S.closed ? "yes" : "no"}</strong></div>
      </div>
      <p style={{ margin: "8px 0 4px", fontSize: 14 }}>
        {kind === "interior" && "A whole ball around the point lies inside the set."}
        {kind === "exterior" && "A whole ball around the point misses the set."}
        {kind === "boundary" && `Every ball around the point meets both the set and its complement, and this point ${inS ? "belongs" : "does not belong"} to the set.`}
      </p>
      <figcaption className="viz-caption">
        Solid edges belong to the set, dashed edges do not. A set is open when every point in it is an interior point, so it
        contains none of its boundary, and closed when it contains all of its boundary. The square contains part of its
        boundary, so it is neither.
      </figcaption>
    </figure>
  );
}
