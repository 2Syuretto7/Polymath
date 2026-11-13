"use client";

import { useState } from "react";
import { abs, add, cexp, div, liftPath, mul, sub, type C } from "./complexTools";

type F = { name: string; f: (z: C) => C; c: C; h: number; B: number };
const FS: F[] = [
  { name: "z²", f: (z) => mul(z, z), c: [0, 0], h: 1.2, B: 2 },
  { name: "eᶻ", f: cexp, c: [0, 0], h: 1.5, B: 4.6 },
  { name: "1/z", f: (z) => div([1, 0], z), c: [1, 0], h: 0.8, B: 3 },
  { name: "z + 1/z", f: (z) => add(z, div([1, 0], z)), c: [0, 1.2], h: 1, B: 3 },
];

/** Conformal maps: a square grid and its image, with the two grid lines through a chosen point picked out. */
export function ConformalGridViz() {
  const [fi, setFi] = useState(0);
  const [i, setI] = useState(1);
  const [j, setJ] = useState(1);
  const F = FS[fi];
  const st = F.h / 4;
  const z0: C = [F.c[0] + i * st, F.c[1] + j * st];
  const W = 260;
  const Xd = (x: number) => W / 2 + ((x - F.c[0]) / F.h) * (W / 2 - 8), Yd = (y: number) => W / 2 - ((y - F.c[1]) / F.h) * (W / 2 - 8);
  const Xi = (x: number) => W / 2 + (x / F.B) * (W / 2 - 8), Yi = (y: number) => W / 2 - (y / F.B) * (W / 2 - 8);
  const N = 240;
  const hline = (y: number): C[] => Array.from({ length: N + 1 }, (_, k) => [F.c[0] - F.h + (2 * F.h * k) / N, y]);
  const vline = (x: number): C[] => Array.from({ length: N + 1 }, (_, k) => [x, F.c[1] - F.h + (2 * F.h * k) / N]);
  const ks = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
  const faint = { fill: "none", stroke: "var(--text-faint)", strokeWidth: 1 };
  const hiH = { fill: "none", stroke: "var(--text)", strokeWidth: 2.5 };
  const hiV = { fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 };
  const dom = (pts: C[]) => pts.map(([a, b], k) => `${k ? "L" : "M"}${Xd(a).toFixed(1)},${Yd(b).toFixed(1)}`).join(" ");
  const img = (pts: C[]) => liftPath(pts.map(F.f), Xi, Yi, F.B);
  const e = 1e-4;
  const w0 = F.f(z0);
  const d1 = sub(F.f([z0[0] + e, z0[1]]), w0), d2 = sub(F.f([z0[0], z0[1] + e]), w0);
  let ang = Math.abs(Math.atan2(d2[1], d2[0]) - Math.atan2(d1[1], d1[0])) * (180 / Math.PI);
  if (ang > 180) ang = 360 - ang;
  const deriv = abs(d1) / e;
  const crit = deriv < 0.01;
  const fmt = (v: number) => (Math.abs(v) < 5e-4 ? "0" : v.toFixed(2));
  const frame = (
    <rect x={0} y={0} width={W} height={W} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
  );
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {FS.map((f, k) => <button key={f.name} type="button" aria-pressed={fi === k} className={fi === k ? "seg is-on" : "seg"} onClick={() => { setFi(k); setI(1); setJ(1); }}>f(z) = {f.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>point x₀: <span className="mono">{fmt(z0[0])}</span></span><input type="range" min={-4} max={4} step={1} value={i} onChange={(ev) => setI(Number(ev.target.value))} /></label>
        <label><span>point y₀: <span className="mono">{fmt(z0[1])}</span></span><input type="range" min={-4} max={4} step={1} value={j} onChange={(ev) => setJ(Number(ev.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${2 * W + 30} ${W + 20}`} role="img" aria-label="A square grid and its image under f" style={{ width: "100%", maxWidth: 560, display: "block", margin: "6px auto" }}>
        <g>
          {frame}
          {ks.map((k) => <path key={`h${k}`} d={dom(hline(F.c[1] + k * st))} style={faint} />)}
          {ks.map((k) => <path key={`v${k}`} d={dom(vline(F.c[0] + k * st))} style={faint} />)}
          <path d={dom(hline(z0[1]))} style={hiH} />
          <path d={dom(vline(z0[0]))} style={hiV} />
          <circle cx={Xd(z0[0])} cy={Yd(z0[1])} r={5} style={{ fill: "var(--text)" }} />
        </g>
        <g transform={`translate(${W + 30},0)`}>
          {frame}
          {ks.map((k) => <path key={`h${k}`} d={img(hline(F.c[1] + k * st))} style={faint} />)}
          {ks.map((k) => <path key={`v${k}`} d={img(vline(F.c[0] + k * st))} style={faint} />)}
          <path d={img(hline(z0[1]))} style={hiH} />
          <path d={img(vline(z0[0]))} style={hiV} />
          {Math.abs(w0[0]) < F.B && Math.abs(w0[1]) < F.B && <circle cx={Xi(w0[0])} cy={Yi(w0[1])} r={5} style={{ fill: "var(--text)" }} />}
        </g>
        <text x={W / 2} y={W + 15} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>grid in the z-plane</text>
        <text x={W + 30 + W / 2} y={W + 15} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>its image under f</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>|f′(z₀)| = {deriv.toFixed(3)}; angle between the two image curves at f(z₀): {ang.toFixed(1)}°</div>
        <div>{crit ? "f′(z₀) = 0: angles at this point are doubled, so the map is not conformal here" : "f′(z₀) ≠ 0: the right angle survives, so f is conformal here"}</div>
      </div>
      <figcaption className="viz-caption">
        The two thick lines cross at right angles at the chosen point. Near that point f acts like multiplication by
        f′(z₀), a rotation and a scaling, so their images still cross at right angles wherever f′(z₀) is not 0. For z², try
        the point 0.
      </figcaption>
    </figure>
  );
}
