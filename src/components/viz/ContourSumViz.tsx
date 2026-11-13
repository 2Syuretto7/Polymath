"use client";

import { useState } from "react";

type C = [number, number];
const mul = (a: C, b: C): C => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
const inv = (a: C): C => { const d = a[0] * a[0] + a[1] * a[1]; return [a[0] / d, -a[1] / d]; };
const FS: { name: string; f: (z: C) => C; exact: string }[] = [
  { name: "z̄", f: (z) => [z[0], -z[1]], exact: "2πi ≈ 6.2832i" },
  { name: "z²", f: (z) => mul(z, z), exact: "0" },
  { name: "1/z", f: inv, exact: "2πi ≈ 6.2832i" },
  { name: "1/z²", f: (z) => inv(mul(z, z)), exact: "0" },
];
const NS = [4, 6, 8, 12, 16, 32, 64];

/** A contour integral as a limit of sums f(z_k)(z_{k+1} − z_k) along a polygon inscribed in the unit circle. */
export function ContourSumViz() {
  const [fi, setFi] = useState(0);
  const [ni, setNi] = useState(1);
  const F = FS[fi];
  const N = NS[ni];
  const z = Array.from({ length: N + 1 }, (_, k) => [Math.cos((2 * Math.PI * k) / N), Math.sin((2 * Math.PI * k) / N)] as C);
  let s: C = [0, 0];
  for (let k = 0; k < N; k++) { const t = mul(F.f(z[k]), [z[k + 1][0] - z[k][0], z[k + 1][1] - z[k][1]]); s = [s[0] + t[0], s[1] + t[1]]; }
  const W = 360, B = 1.35;
  const X = (u: number) => W / 2 + (u / B) * (W / 2);
  const Y = (v: number) => W / 2 - (v / B) * (W / 2);
  const fmt = (v: number) => (Math.abs(v) < 5e-5 ? "0.0000" : v.toFixed(4));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {FS.map((f, i) => <button key={f.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>f(z) = {f.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>number of points N: <span className="mono">{N}</span></span>
          <input type="range" min={0} max={NS.length - 1} step={1} value={ni} onChange={(e) => setNi(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="A polygon inscribed in the unit circle" style={{ width: "100%", maxWidth: 380, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
        <circle cx={X(0)} cy={Y(0)} r={X(1) - X(0)} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "4 4" }} />
        <path d={z.map(([a, b], k) => `${k ? "L" : "M"}${X(a).toFixed(1)},${Y(b).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        {z.slice(0, N).map(([a, b], k) => <circle key={k} cx={X(a)} cy={Y(b)} r={N > 16 ? 2 : 4} style={{ fill: "var(--accent)" }} />)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>Σ f(z_k)(z_(k+1) − z_k) = {fmt(s[0])} {s[1] < -5e-5 ? "−" : "+"} {fmt(Math.abs(s[1]))}i</div>
        <div>∮ f(z) dz round the unit circle = {F.exact}</div>
      </div>
      <figcaption className="viz-caption">
        The points z_k go once round the unit circle anticlockwise. As N grows, the sums approach the contour integral, just as
        Riemann sums approach an ordinary integral. Of the four functions only 1/z and z̄ give a nonzero answer, for very
        different reasons.
      </figcaption>
    </figure>
  );
}
