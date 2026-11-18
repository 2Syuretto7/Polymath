"use client";

import { useState } from "react";

const CURVES: { name: string; g: (t: number) => [number, number]; d: (t: number) => [number, number]; range: [number, number]; verdict: string }[] = [
  { name: "circle", g: (t) => [Math.cos(t), Math.sin(t)], d: (t) => [-Math.sin(t), Math.cos(t)], range: [0, 2 * Math.PI], verdict: "An embedding: an injective immersion that is a homeomorphism onto its image." },
  { name: "figure eight", g: (t) => [Math.sin(2 * t), Math.sin(t)], d: (t) => [2 * Math.cos(2 * t), Math.cos(t)], range: [0, 2 * Math.PI], verdict: "An immersion, but not injective: the curve crosses itself at the origin." },
  { name: "cusp (t², t³)", g: (t) => [t * t, t * t * t], d: (t) => [2 * t, 3 * t * t], range: [-1.2, 1.2], verdict: "Injective and smooth, but not an immersion: the velocity vanishes at t = 0, and the image has a cusp." },
];

/** Immersions, embeddings and their failures, for curves in the plane: the velocity and the rank of the differential. */
export function RankViz() {
  const [k, setK] = useState(2);
  const [s, setS] = useState(0.5);
  const C = CURVES[k];
  const t = C.range[0] + s * (C.range[1] - C.range[0]);
  const N = 300;
  const pts = Array.from({ length: N + 1 }, (_, i) => C.g(C.range[0] + ((C.range[1] - C.range[0]) * i) / N));
  const [x, y] = C.g(t);
  const [vx, vy] = C.d(t);
  const speed = Math.hypot(vx, vy);
  const rank = speed > 1e-3 ? 1 : 0;
  const S = 70, cx = 140, cy = 110;
  const P = (a: number, b: number) => `${cx + S * a},${cy - S * b}`;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="curve">
        {CURVES.map((c, i) => <button key={c.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => { setK(i); setS(0.5); }}>{c.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>t = {t.toFixed(2)} <input type="range" min={0} max={1000} value={Math.round(s * 1000)} onChange={(e) => setS(Number(e.target.value) / 1000)} aria-label="t" /></label>
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="A curve in the plane with its velocity" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          <marker id="rv-arr" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={9} markerHeight={9} markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--accent)" }} /></marker>
        </defs>
        <polyline points={pts.map(([a, b]) => P(a, b)).join(" ")} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2.5 }} />
        {rank === 1 && <line x1={cx + S * x} y1={cy - S * y} x2={cx + S * (x + (0.5 * vx) / Math.max(1, speed / 1.5))} y2={cy - S * (y + (0.5 * vy) / Math.max(1, speed / 1.5))} markerEnd="url(#rv-arr)" style={{ stroke: "var(--accent)", strokeWidth: 3 }} />}
        <circle cx={cx + S * x} cy={cy - S * y} r={6} style={{ fill: rank ? "var(--bg)" : "var(--danger)", stroke: "var(--text)", strokeWidth: 2 }} />
        <text x={300} y={50} style={{ fill: "var(--text)", fontSize: 12 }}>γ(t) = ({x.toFixed(2)}, {y.toFixed(2)})</text>
        <text x={300} y={74} style={{ fill: "var(--accent)", fontSize: 12 }}>γ′(t) = ({vx.toFixed(2)}, {vy.toFixed(2)})</text>
        <text x={300} y={104} style={{ fill: rank ? "var(--accent)" : "var(--danger)", fontSize: 14, fontWeight: 700 }}>rank of dγ at t: {rank}</text>
        <text x={300} y={128} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{rank ? "injective differential: immersive here" : "differential zero: not an immersion here"}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{C.verdict}</p>
      <figcaption className="viz-caption">
        A smooth curve is an immersion when its velocity never vanishes, so that its differential, a 1 × 2 matrix, has full
        rank 1 everywhere. Immersions can still cross themselves; an embedding must also be a homeomorphism onto its image.
      </figcaption>
    </figure>
  );
}
