"use client";

import { useState } from "react";

type V3 = [number, number, number];
const FACES: { n: number; normal: V3; corners: V3[] }[] = [
  { n: 1, normal: [0, 0, 1], corners: [[-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]] },
  { n: 6, normal: [0, 0, -1], corners: [[-1, -1, -1], [-1, 1, -1], [1, 1, -1], [1, -1, -1]] },
  { n: 2, normal: [1, 0, 0], corners: [[1, -1, -1], [1, 1, -1], [1, 1, 1], [1, -1, 1]] },
  { n: 5, normal: [-1, 0, 0], corners: [[-1, -1, -1], [-1, -1, 1], [-1, 1, 1], [-1, 1, -1]] },
  { n: 3, normal: [0, 1, 0], corners: [[-1, 1, -1], [-1, 1, 1], [1, 1, 1], [1, 1, -1]] },
  { n: 4, normal: [0, -1, 0], corners: [[-1, -1, -1], [1, -1, -1], [1, -1, 1], [-1, -1, 1]] },
];

/** A die seen from different sides: only some faces are given at once; the rest are meant without being seen. */
export function AdumbrationViz() {
  const [deg, setDeg] = useState(30);
  const [tilt, setTilt] = useState(25);
  const th = (deg * Math.PI) / 180, ph = (tilt * Math.PI) / 180;
  const rot = ([x, y, z]: V3): V3 => {
    const x1 = x * Math.cos(th) + z * Math.sin(th), z1 = -x * Math.sin(th) + z * Math.cos(th);
    return [x1, y * Math.cos(ph) - z1 * Math.sin(ph), y * Math.sin(ph) + z1 * Math.cos(ph)];
  };
  const P = (v: V3) => [130 + 55 * rot(v)[0], 110 - 55 * rot(v)[1]] as const;
  const shown = FACES.filter((f) => rot(f.normal)[2] > 1e-6);
  const hidden = FACES.filter((f) => rot(f.normal)[2] <= 1e-6).map((f) => f.n).sort();
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ display: "grid", gap: 6 }}>
        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span className="mono" style={{ minWidth: 120 }}>walk round: {deg}°</span>
          <input type="range" min={0} max={360} step={5} value={deg} onChange={(e) => setDeg(Number(e.target.value))} style={{ flex: 1 }} />
        </label>
        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span className="mono" style={{ minWidth: 120 }}>look from above: {tilt}°</span>
          <input type="range" min={-60} max={60} step={5} value={tilt} onChange={(e) => setTilt(Number(e.target.value))} style={{ flex: 1 }} />
        </label>
      </div>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
        <svg viewBox="0 0 260 220" role="img" aria-label="A die seen from one side" style={{ width: 260, maxWidth: "100%", display: "block" }}>
          {shown.map((f) => {
            const pts = f.corners.map(P);
            const c = f.corners.reduce((a, v) => [a[0] + v[0] / 4, a[1] + v[1] / 4, a[2] + v[2] / 4] as V3, [0, 0, 0] as V3);
            const [cx, cy] = P(c);
            const light = 0.35 + 0.65 * rot(f.normal)[2];
            return (
              <g key={f.n}>
                <polygon points={pts.map((p) => p.join(",")).join(" ")} style={{ fill: "var(--accent-soft)", stroke: "var(--text)", strokeWidth: 1.5, opacity: 0.4 + 0.6 * light }} />
                <text x={cx} y={cy + 6} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 18 * light + 4, fontWeight: 700 }}>{f.n}</text>
              </g>
            );
          })}
        </svg>
        <div className="mono" style={{ display: "grid", gap: 6, fontSize: 14 }}>
          <div style={{ fontWeight: 700 }}>given in this profile: {shown.map((f) => f.n).sort().join(", ")}</div>
          <div>meant but not seen: {hidden.join(", ")}</div>
          <div style={{ color: "var(--text-muted)" }}>the object meant throughout: one die</div>
        </div>
      </div>
      <figcaption className="viz-caption">
        However you turn it, you never see more than three faces of the die. Yet what you perceive is a whole die, not three
        squares: the hidden faces are intended emptily, as the back you would see by walking round. Each turn fulfils some
        of those empty intentions and empties others. Husserl called the one-sided appearances adumbrations.
      </figcaption>
    </figure>
  );
}
