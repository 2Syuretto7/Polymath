"use client";

import { useState } from "react";

const O = { x: 310, y: 170 }, R = 140;
const at = (t: number) => ({ x: O.x + R * Math.cos((t * Math.PI) / 180), y: O.y - R * Math.sin((t * Math.PI) / 180) });
const TA = 200, TB = 340; // A and B, in degrees round the circle
const A = at(TA), B = at(TB);

function angleAt(P: { x: number; y: number }, Q: { x: number; y: number }, S: { x: number; y: number }) {
  const a = Math.atan2(Q.y - P.y, Q.x - P.x), b = Math.atan2(S.y - P.y, S.x - P.x);
  let d = Math.abs(a - b);
  if (d > Math.PI) d = 2 * Math.PI - d;
  return (d * 180) / Math.PI;
}

/** The inscribed angle theorem: as P moves round the circle, the angle APB stays fixed on each arc. */
export function InscribedAngleViz() {
  const [t, setT] = useState(90);
  const P = at(t);
  const onMinor = t > TA && t < TB;
  const ang = angleAt(P, A, B);
  const central = TB - TA; // the short arc AB, through the bottom of the circle, subtends 140 degrees at O

  return (
    <figure className="viz">
      <svg viewBox="0 0 620 340" role="img" aria-label={`Inscribed angle APB is ${Math.round(ang)} degrees`}>
        <circle cx={O.x} cy={O.y} r={R} className="plot-mirror" style={{ strokeDasharray: "none", fill: "none" }} />
        <path d={`M${A.x} ${A.y} L${O.x} ${O.y} L${B.x} ${B.y}`} className="plot-curve-2" />
        <path d={`M${A.x} ${A.y} L${P.x} ${P.y} L${B.x} ${B.y}`} className="plot-curve" />
        <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} className="plot-ghost" />
        <circle cx={O.x} cy={O.y} r={4} className="plot-point" />
        <circle cx={A.x} cy={A.y} r={5} className="plot-point" />
        <circle cx={B.x} cy={B.y} r={5} className="plot-point" />
        <circle cx={P.x} cy={P.y} r={6} className="plot-hot" />
        <text x={O.x + 8} y={O.y - 6} className="viz-label">O</text>
        <text x={A.x - 18} y={A.y + 16} className="viz-label">A</text>
        <text x={B.x + 8} y={B.y + 16} className="viz-label">B</text>
        <text x={P.x + (P.x >= O.x ? 10 : -20)} y={P.y + (P.y >= O.y ? 18 : -8)} className="viz-label">P</text>
      </svg>
      <div className="viz-sliders">
        <label>
          <span>Move P round the circle</span>
          <input type="range" min={0} max={359} step={1} value={t} onChange={(e) => setT(Number(e.target.value))} />
        </label>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {Math.abs(t - TA) < 2 || Math.abs(t - TB) < 2
          ? <>P is sitting on A or B, so there is no angle to measure.</>
          : onMinor
            ? <>P is on the short arc below AB. Angle <span className="mono">APB ≈ {Math.round(ang)}°</span>, the same wherever P is on this arc, and it adds with the angle from the long arc to <span className="mono">180°</span>.</>
            : <>Angle <span className="mono">APB ≈ {Math.round(ang)}°</span>, the same wherever P is on this arc. The dashed angle AOB at the centre is <span className="mono">{central}°</span>, exactly twice as large.</>}
      </figcaption>
    </figure>
  );
}
