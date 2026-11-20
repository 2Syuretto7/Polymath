"use client";

import { useState } from "react";

type Mat = number[][];
const mul = (a: Mat, b: Mat) => a.map((r) => [0, 1, 2].map((j) => r[0] * b[0][j] + r[1] * b[1][j] + r[2] * b[2][j]));
/** Rotation by angle a about the unit axis u (Rodrigues). */
function rot(u: number[], a: number): Mat {
  const [x, y, z] = u, c = Math.cos(a), s = Math.sin(a), C = 1 - c;
  return [
    [c + x * x * C, x * y * C - z * s, x * z * C + y * s],
    [y * x * C + z * s, c + y * y * C, y * z * C - x * s],
    [z * x * C - y * s, z * y * C + x * s, c + z * z * C],
  ];
}
const angleOf = (m: Mat) => Math.acos(Math.max(-1, Math.min(1, (m[0][0] + m[1][1] + m[2][2] - 1) / 2)));
const THETAS = [90, 45, 0];

/** The group commutator of exp(tX) and exp(tY) in SO(3) is a rotation by about t²|[X, Y]|. */
export function GroupCommViz() {
  const [th, setTh] = useState(0);
  const [t, setT] = useState(0.5);
  const deg = THETAS[th], phi = (deg * Math.PI) / 180;
  const u = [1, 0, 0], v = [Math.cos(phi), Math.sin(phi), 0];
  const comm = (s: number) => angleOf(mul(mul(rot(u, s), rot(v, s)), mul(rot(u, -s), rot(v, -s))));
  const k = Math.sin(phi);
  const X0 = 40, W = 440, Y0 = 14, H = 160, TM = 1.5, AM = 2.4;
  const px = (s: number) => X0 + (s / TM) * W;
  const py = (a: number) => Y0 + H - (Math.min(a, AM) / AM) * H;
  const ss = Array.from({ length: 151 }, (_, i) => (i / 150) * TM);
  const exact = comm(t), approx = t * t * k;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="angle between the axes of X and Y">
        {THETAS.map((d, i) => <button key={d} type="button" aria-pressed={th === i} className={th === i ? "seg is-on" : "seg"} onClick={() => setTh(i)}>axes {d}° apart</button>)}
      </div>
      <div className="viz-controls">
        <label>t = {t.toFixed(2)} <input type="range" min={0} max={1.5} step={0.05} value={t} onChange={(e) => setT(Number(e.target.value))} aria-label="t" /></label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Rotation angle of the group commutator against t" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0} y1={Y0 + H} x2={X0 + W} y2={Y0 + H} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X0} y1={Y0} x2={X0} y2={Y0 + H} style={{ stroke: "var(--border-strong)" }} />
        {[0.5, 1, 1.5].map((s) => <text key={s} x={px(s)} y={Y0 + H + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{s}</text>)}
        {[1, 2].map((a) => <text key={a} x={X0 - 6} y={py(a) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{a}</text>)}
        <polyline points={ss.filter((s) => s * s * k <= AM).map((s) => `${px(s)},${py(s * s * k)}`).join(" ")} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 1.6, strokeDasharray: "5 3" }} />
        <polyline points={ss.map((s) => `${px(s)},${py(comm(s))}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.2 }} />
        <circle cx={px(t)} cy={py(exact)} r={4.5} style={{ fill: "var(--accent)" }} />
        <text x={X0 + 8} y={Y0 + 12} style={{ fill: "var(--accent)", fontSize: 11 }}>violet: angle of the commutator</text>
        <text x={X0 + 8} y={Y0 + 28} style={{ fill: "var(--danger)", fontSize: 11 }}>red dashed: t² |[X, Y]| = t² sin {deg}°</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Commutator rotates by {exact.toFixed(4)} rad; t²|[X, Y]| = {approx.toFixed(4)}.
      </p>
      <figcaption className="viz-caption">
        X and Y generate rotations about two axes. The group commutator exp(tX) exp(tY) exp(−tX) exp(−tY) is again a
        rotation. For small t its angle is close to t² times the length of the bracket [X, Y], whose axis is
        perpendicular to both. When the axes coincide the rotations commute and the bracket is zero.
      </figcaption>
    </figure>
  );
}
