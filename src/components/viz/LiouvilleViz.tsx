"use client";

import { useState } from "react";

type C = [number, number];
const FS: { name: string; f: (z: C) => C; d0: number; entire: boolean }[] = [
  { name: "z² + z", f: ([x, y]) => [x * x - y * y + x, 2 * x * y + y], d0: 1, entire: true },
  { name: "sin z", f: ([x, y]) => [Math.sin(x) * Math.cosh(y), Math.cos(x) * Math.sinh(y)], d0: 1, entire: true },
  { name: "3 (constant)", f: () => [3, 0], d0: 0, entire: true },
  { name: "1/(2 − z)", f: ([x, y]) => { const a = 2 - x, b = -y, d = a * a + b * b; return [a / d, -b / d]; }, d0: 0.25, entire: false },
];
const RS = [0.5, 1, 1.5, 2, 3, 4, 5, 6];

/** Cauchy’s estimate |f′(0)| ≤ M(R)/R on growing circles: for a bounded entire function the bound forces f′ = 0. */
export function LiouvilleViz() {
  const [fi, setFi] = useState(0);
  const [ri, setRi] = useState(3);
  const F = FS[fi];
  const M = (R: number) => { let m = 0; for (let k = 0; k < 360; k++) { const t = (2 * Math.PI * k) / 360; const [u, v] = F.f([R * Math.cos(t), R * Math.sin(t)]); m = Math.max(m, Math.hypot(u, v)); } return m; };
  const pts = RS.map((R) => ({ R, b: !F.entire && R >= 2 ? NaN : M(R) / R }));
  const R = RS[ri];
  const cur = pts[ri];
  const W = 460, H = 220, L = 50, B = 30, T = 14;
  const lx = (R: number) => L + (Math.log(R / 0.5) / Math.log(12)) * (W - L - 20);
  const ly = (v: number) => { const c = Math.max(-3, Math.min(3, Math.log10(Math.max(v, 1e-3)))); return T + ((3 - c) / 6) * (H - T - B); };
  const valid = pts.filter((p) => isFinite(p.b) && p.b > 0);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {FS.map((f, i) => <button key={f.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>{f.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>radius R: <span className="mono">{R}</span></span>
          <input type="range" min={0} max={RS.length - 1} step={1} value={ri} onChange={(e) => setRi(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Cauchy bound M(R)/R against R, on logarithmic scales" style={{ width: "100%", display: "block", marginTop: 6 }}>
        {[-3, -2, -1, 0, 1, 2, 3].map((e) => <g key={e}><line x1={L} y1={ly(10 ** e)} x2={W - 10} y2={ly(10 ** e)} style={{ stroke: "var(--border)" }} /><text x={L - 6} y={ly(10 ** e) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{e === 0 ? "1" : `10^${e}`}</text></g>)}
        {RS.map((r) => <text key={r} x={lx(r)} y={H - 10} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{r}</text>)}
        {F.d0 > 0 && <line x1={L} y1={ly(F.d0)} x2={W - 10} y2={ly(F.d0)} style={{ stroke: "var(--text)", strokeDasharray: "6 4", strokeWidth: 1.5 }} />}
        <path d={valid.map((p, k) => `${k ? "L" : "M"}${lx(p.R).toFixed(1)},${ly(p.b).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        {valid.map((p) => <circle key={p.R} cx={lx(p.R)} cy={ly(p.b)} r={p.R === R ? 6 : 3} style={{ fill: "var(--accent)" }} />)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>{isFinite(cur.b) ? `M(R) = max |f| on |z| = R: ${(cur.b * R).toFixed(4)}; bound M(R)/R = ${cur.b.toFixed(4)}` : "The circle |z| = R reaches the singularity at 2: no bound."}</div>
        <div>true |f′(0)| = {F.d0}</div>
      </div>
      <figcaption className="viz-caption">
        Cauchy&rsquo;s estimate on the circle of radius R gives |f′(0)| ≤ M(R)/R. The dashed line is the true value. For a
        bounded entire function, M(R) stays below a fixed bound, so M(R)/R tends to 0 and f′(0) must be 0, as for the constant.
        Unbounded entire functions escape because M(R) grows. The function 1/(2 − z) is bounded near 0 but is not entire, so
        the circles cannot grow past 2.
      </figcaption>
    </figure>
  );
}
