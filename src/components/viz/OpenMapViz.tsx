"use client";

import { useState } from "react";

type C = [number, number];
const FS: { name: string; f: (z: C) => C; k: number; hol: boolean }[] = [
  { name: "z²", f: ([x, y]) => [x * x - y * y, 2 * x * y], k: 2, hol: true },
  { name: "z³", f: ([x, y]) => [x * x * x - 3 * x * y * y, 3 * x * x * y - y * y * y], k: 3, hol: true },
  { name: "z + z²", f: ([x, y]) => [x + x * x - y * y, y + 2 * x * y], k: 1, hol: true },
  { name: "Re z", f: ([x]) => [x, 0], k: 0, hol: false },
];

/** The open mapping theorem near z₀ = 0: a small disc goes onto a neighbourhood of f(0), covered k times where f − f(0) has a zero of order k. */
export function OpenMapViz() {
  const [fi, setFi] = useState(0);
  const [r, setR] = useState(0.5);
  const [turn, setTurn] = useState(360);
  const F = FS[fi];
  const N = 360;
  const circ: C[] = Array.from({ length: Math.round((N * turn) / 360) + 1 }, (_, k) => { const t = (2 * Math.PI * k) / N; return [r * Math.cos(t), r * Math.sin(t)]; });
  const img = circ.map(F.f);
  const disc: C[] = [];
  for (let i = 0; i <= 12; i++) for (let j = 0; j < 24; j++) { const rr = (r * i) / 12, t = (2 * Math.PI * j) / 24; disc.push([rr * Math.cos(t), rr * Math.sin(t)]); }
  const dimg = disc.map(F.f);
  const W = 260, B = 1, X = (u: number) => W / 2 + (u / B) * (W / 2 - 8), Y = (v: number) => W / 2 - (v / B) * (W / 2 - 8);
  const path = (pts: C[]) => pts.map(([a, b], k) => `${k ? "L" : "M"}${X(a).toFixed(1)},${Y(b).toFixed(1)}`).join(" ");
  const panel = (pts: C[], dots: C[]) => (
    <>
      <rect x={0} y={0} width={W} height={W} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
      <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
      <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
      {dots.map(([a, b], k) => <circle key={k} cx={X(a)} cy={Y(b)} r={1.4} style={{ fill: "var(--accent)", fillOpacity: 0.45 }} />)}
      <path d={path(pts)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
      {pts.length > 0 && <circle cx={X(pts[pts.length - 1][0])} cy={Y(pts[pts.length - 1][1])} r={5} style={{ fill: "var(--text)" }} />}
    </>
  );
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {FS.map((f, i) => <button key={f.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>f(z) = {f.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>radius r: <span className="mono">{r}</span></span><input type="range" min={0.25} max={0.75} step={0.05} value={r} onChange={(e) => setR(Number(e.target.value))} /></label>
        <label><span>travel round the circle: <span className="mono">{turn}°</span></span><input type="range" min={0} max={360} step={15} value={turn} onChange={(e) => setTurn(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${2 * W + 30} ${W + 20}`} role="img" aria-label="A small disc about 0 and its image" style={{ width: "100%", maxWidth: 560, display: "block", margin: "6px auto" }}>
        <g>{panel(circ, disc)}</g>
        <g transform={`translate(${W + 30},0)`}>{panel(img, dimg)}</g>
        <text x={W / 2} y={W + 15} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>disc |z| ≤ r</text>
        <text x={W + 30 + W / 2} y={W + 15} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>its image under f</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>{F.hol ? `f(z) − f(0) has a zero of order ${F.k} at 0: each point near f(0) has ${F.k} preimage${F.k > 1 ? "s" : ""} near 0` : "Re z is not holomorphic: the disc is squashed onto a segment, which is not open"}</div>
      </div>
      <figcaption className="viz-caption">
        Move the dark point round the circle. Its image goes round f(0) k times, so the image of the disc fills a whole
        neighbourhood of f(0), covered k times. That is why a non-constant holomorphic function maps open sets to open sets.
      </figcaption>
    </figure>
  );
}
