"use client";

import { useState } from "react";

type C = [number, number];
const mul = (a: C, b: C): C => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
const inv = (a: C): C => { const d = a[0] * a[0] + a[1] * a[1]; return [a[0] / d, -a[1] / d]; };
const cexp = ([x, y]: C): C => [Math.exp(x) * Math.cos(y), Math.exp(x) * Math.sin(y)];
const FS: { name: string; g: (z: C) => C; poles: C[]; exact: number; exactS: string }[] = [
  { name: "1/(1 + x²)", g: (z) => inv([1 + z[0] * z[0] - z[1] * z[1], 2 * z[0] * z[1]]), poles: [[0, 1]], exact: Math.PI, exactS: "π" },
  { name: "1/(1 + x⁴)", g: (z) => { const z2 = mul(z, z); const z4 = mul(z2, z2); return inv([1 + z4[0], z4[1]]); }, poles: [[Math.SQRT1_2, Math.SQRT1_2], [-Math.SQRT1_2, Math.SQRT1_2]], exact: Math.PI / Math.SQRT2, exactS: "π/√2" },
  { name: "cos x/(1 + x²)", g: (z) => mul(cexp([-z[1], z[0]]), inv([1 + z[0] * z[0] - z[1] * z[1], 2 * z[0] * z[1]])), poles: [[0, 1]], exact: Math.PI / Math.E, exactS: "π/e" },
];

/** Closing a real integral with a large semicircle: the arc's contribution dies away and the residues give the answer. */
export function SemicircleViz() {
  const [fi, setFi] = useState(0);
  const [R, setR] = useState(3);
  const F = FS[fi];
  const N = 4000;
  let seg: C = [0, 0], arc: C = [0, 0];
  for (let k = 0; k < N; k++) { const x = -R + ((k + 0.5) * 2 * R) / N; const v = F.g([x, 0]); seg = [seg[0] + (v[0] * 2 * R) / N, seg[1] + (v[1] * 2 * R) / N]; }
  for (let k = 0; k < N; k++) { const t = ((k + 0.5) * Math.PI) / N; const z: C = [R * Math.cos(t), R * Math.sin(t)]; const dz: C = [(-R * Math.sin(t) * Math.PI) / N, (R * Math.cos(t) * Math.PI) / N]; const v = mul(F.g(z), dz); arc = [arc[0] + v[0], arc[1] + v[1]]; }
  const W = 440, H = 240, B = 5.2, X = (u: number) => W / 2 + (u / B) * (W / 2 - 10), Y = (v: number) => H - 24 - (v / B) * (W / 2 - 10), sc = (W / 2 - 10) / B;
  const fmt = (v: number) => (Math.abs(v) < 5e-5 ? "0.0000" : v.toFixed(4));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Integrand">
        {FS.map((f, i) => <button key={f.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>{f.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>radius R: <span className="mono">{R}</span></span>
          <input type="range" min={1.5} max={5} step={0.5} value={R} onChange={(e) => setR(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Semicircular contour in the upper half-plane" style={{ width: "100%", maxWidth: 480, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={0} x2={X(0)} y2={H} style={{ stroke: "var(--border)" }} />
        <path d={`M ${X(-R)} ${Y(0)} L ${X(R)} ${Y(0)} A ${R * sc} ${R * sc} 0 0 0 ${X(-R)} ${Y(0)}`} style={{ fill: "var(--accent)", fillOpacity: 0.1, stroke: "var(--accent)", strokeWidth: 2.5 }} />
        {F.poles.map(([a, b], k) => <g key={k} style={{ stroke: "var(--danger)", strokeWidth: 3 }}><line x1={X(a) - 6} y1={Y(b) - 6} x2={X(a) + 6} y2={Y(b) + 6} /><line x1={X(a) - 6} y1={Y(b) + 6} x2={X(a) + 6} y2={Y(b) - 6} /></g>)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>along [−R, R]: {fmt(seg[0])}</div>
        <div>along the arc: {fmt(arc[0])} {arc[1] < -5e-5 ? "−" : "+"} {fmt(Math.abs(arc[1]))}i</div>
        <div>total = 2πi × residues in the upper half-plane = {F.exactS} ≈ {F.exact.toFixed(4)}</div>
      </div>
      <figcaption className="viz-caption">
        For R larger than the poles&rsquo; distance from 0, the closed contour always gives the same total, by the residue
        theorem. As R grows the arc&rsquo;s share shrinks to 0, so the integral over the whole real line equals the residue
        sum. For the cosine, integrate e^(iz)/(1 + z²), which is small on the upper arc, and take the real part.
      </figcaption>
    </figure>
  );
}
