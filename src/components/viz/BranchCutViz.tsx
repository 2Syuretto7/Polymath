"use client";

import { useState } from "react";

const CUTS = [
  { name: "cut along the negative real axis", lo: -180 },
  { name: "cut along the positive imaginary axis", lo: -270 },
];

/** Following log z round 0: the continuous argument keeps growing, while a branch jumps by 2π at its cut. */
export function BranchCutViz() {
  const [deg, setDeg] = useState(150);
  const [ci, setCi] = useState(0);
  const [r, setR] = useState(1);
  const cut = CUTS[ci];
  // branch value of the argument in (lo, lo + 360]
  let b = deg; while (b > cut.lo + 360) b -= 360; while (b <= cut.lo) b += 360;
  const t = (deg * Math.PI) / 180;
  const W = 300, B = 2.2, X = (u: number) => W / 2 + (u / B) * (W / 2 - 8), Y = (v: number) => W / 2 - (v / B) * (W / 2 - 8), sc = (W / 2 - 8) / B;
  const GW = 320, GH = 300, gx = (d: number) => 30 + (d / 720) * (GW - 40), gy = (v: number) => GH - 20 - ((v + 270) / 990) * (GH - 40);
  const branchPts: string[] = [];
  let pen = false, last = 0;
  for (let d = 0; d <= deg; d += 2) {
    let v = d; while (v > cut.lo + 360) v -= 360; while (v <= cut.lo) v += 360;
    if (pen && Math.abs(v - last) > 180) pen = false;
    branchPts.push(`${pen ? "L" : "M"}${gx(d).toFixed(1)},${gy(v).toFixed(1)}`); pen = true; last = v;
  }
  const cutEnd = ci === 0 ? [X(-B), Y(0)] : [X(0), Y(B)];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Branch">
        {CUTS.map((c, i) => <button key={c.name} type="button" aria-pressed={ci === i} className={ci === i ? "seg is-on" : "seg"} onClick={() => setCi(i)}>{c.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>angle travelled: <span className="mono">{deg}°</span></span><input type="range" min={0} max={720} step={15} value={deg} onChange={(e) => setDeg(Number(e.target.value))} /></label>
        <label><span>radius |z|: <span className="mono">{r}</span></span><input type="range" min={0.5} max={2} step={0.25} value={r} onChange={(e) => setR(Number(e.target.value))} /></label>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 6 }}>
        <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="A point travelling round 0, and the branch cut" style={{ width: "100%", maxWidth: 300 }}>
          <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
          <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
          <line x1={X(0)} y1={Y(0)} x2={cutEnd[0]} y2={cutEnd[1]} style={{ stroke: "var(--danger)", strokeWidth: 4, strokeDasharray: "8 4" }} />
          <circle cx={X(0)} cy={Y(0)} r={r * sc} style={{ fill: "none", stroke: "var(--border)", strokeDasharray: "3 3" }} />
          <circle cx={X(r * Math.cos(t))} cy={Y(r * Math.sin(t))} r={6} style={{ fill: "var(--accent)" }} />
        </svg>
        <svg viewBox={`0 0 ${GW} ${GH}`} role="img" aria-label="Continuous argument and branch argument against angle travelled" style={{ width: "100%", maxWidth: 320 }}>
          {[-180, 0, 180, 360, 540, 720].map((v) => <g key={v}><line x1={30} y1={gy(v)} x2={GW - 10} y2={gy(v)} style={{ stroke: "var(--border)" }} /><text x={26} y={gy(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v === 0 ? "0" : `${v / 180}π`}</text></g>)}
          <line x1={gx(0)} y1={gy(0)} x2={gx(deg)} y2={gy(deg)} style={{ stroke: "var(--text-faint)", strokeWidth: 2 }} />
          <path d={branchPts.join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        </svg>
      </div>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>log|z| = {Math.log(r).toFixed(4)}</div>
        <div>continuous argument: {deg}°; branch value: {b}°</div>
        <div>log z on this branch = {Math.log(r).toFixed(4)} + {((b * Math.PI) / 180).toFixed(4)}i</div>
      </div>
      <figcaption className="viz-caption">
        Following log z continuously round 0, the imaginary part keeps growing (faint line): after one full turn it has gained
        2π, so no continuous logarithm exists on a loop round 0. A branch removes a ray from 0, the cut, and keeps the argument
        in a window of length 2π (bold line), at the price of a jump of 2π when the point crosses the cut.
      </figcaption>
    </figure>
  );
}
