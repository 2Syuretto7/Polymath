"use client";

import { useState } from "react";

type C = [number, number];
const PS: { name: string; c: number[]; roots: C[] }[] = [
  { name: "z³ − 1", c: [-1, 0, 0, 1], roots: [[1, 0], [-0.5, Math.sqrt(3) / 2], [-0.5, -Math.sqrt(3) / 2]] },
  { name: "z² + z + 1", c: [1, 1, 1], roots: [[-0.5, Math.sqrt(3) / 2], [-0.5, -Math.sqrt(3) / 2]] },
  { name: "z³ − 2z + 2", c: [2, -2, 0, 1], roots: [[-1.7693, 0], [0.8846, 0.5897], [0.8846, -0.5897]] },
  { name: "z⁴ + 0.5", c: [0.5, 0, 0, 0, 1], roots: [0, 1, 2, 3].map((k) => { const t = Math.PI / 4 + (k * Math.PI) / 2, r = Math.pow(0.5, 0.25); return [r * Math.cos(t), r * Math.sin(t)] as C; }) },
];

/** The image of the circle |z| = R under a polynomial: it winds round 0 once for every root inside, n times for large R. */
export function WindingImageViz() {
  const [pi, setPi] = useState(0);
  const [R, setR] = useState(0.5);
  const P = PS[pi];
  const ev = ([x, y]: C): C => { let a = 0, b = 0; for (let k = P.c.length - 1; k >= 0; k--) { const na = a * x - b * y + P.c[k], nb = a * y + b * x; a = na; b = nb; } return [a, b]; };
  const N = 720;
  const img = Array.from({ length: N + 1 }, (_, k) => ev([R * Math.cos((2 * Math.PI * k) / N), R * Math.sin((2 * Math.PI * k) / N)]));
  let w = 0;
  for (let k = 0; k < N; k++) { let d = Math.atan2(img[k + 1][1], img[k + 1][0]) - Math.atan2(img[k][1], img[k][0]); if (d > Math.PI) d -= 2 * Math.PI; if (d < -Math.PI) d += 2 * Math.PI; w += d; }
  const wind = Math.round(w / (2 * Math.PI));
  const hit = img.some(([a, b]) => Math.hypot(a, b) < 1e-3);
  const inside = P.roots.filter(([a, b]) => Math.hypot(a, b) < R).length;
  let S = 0.5; for (const [a, b] of img) S = Math.max(S, Math.abs(a), Math.abs(b)); S *= 1.1;
  const Wd = 240;
  const panel = (pts: C[], s: number, extra: React.ReactNode) => {
    const X = (u: number) => Wd / 2 + (u / s) * (Wd / 2 - 6), Y = (v: number) => Wd / 2 - (v / s) * (Wd / 2 - 6);
    return (
      <>
        <rect x={0} y={0} width={Wd} height={Wd} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        <line x1={0} y1={Y(0)} x2={Wd} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={0} x2={X(0)} y2={Wd} style={{ stroke: "var(--border)" }} />
        <path d={pts.map(([a, b], k) => `${k ? "L" : "M"}${X(a).toFixed(1)},${Y(b).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <circle cx={X(0)} cy={Y(0)} r={3.5} style={{ fill: "var(--text)" }} />
        {extra}
      </>
    );
  };
  const ds = 2.4;
  const DX = (u: number) => Wd / 2 + (u / ds) * (Wd / 2 - 6), DY = (v: number) => Wd / 2 - (v / ds) * (Wd / 2 - 6);
  const circ = Array.from({ length: 121 }, (_, k) => [R * Math.cos((2 * Math.PI * k) / 120), R * Math.sin((2 * Math.PI * k) / 120)] as C);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Polynomial">
        {PS.map((p, i) => <button key={p.name} type="button" aria-pressed={pi === i} className={pi === i ? "seg is-on" : "seg"} onClick={() => setPi(i)}>p(z) = {p.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>radius R: <span className="mono">{R}</span></span>
          <input type="range" min={0.25} max={2.25} step={0.25} value={R} onChange={(e) => setR(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${2 * Wd + 30} ${Wd + 20}`} role="img" aria-label="A circle with the roots, and its image under the polynomial" style={{ width: "100%", maxWidth: 560, display: "block", margin: "6px auto" }}>
        <g>{panel(circ, ds, P.roots.map(([a, b], k) => <g key={k} style={{ stroke: "var(--danger)", strokeWidth: 2.5 }}><line x1={DX(a) - 5} y1={DY(b) - 5} x2={DX(a) + 5} y2={DY(b) + 5} /><line x1={DX(a) - 5} y1={DY(b) + 5} x2={DX(a) + 5} y2={DY(b) - 5} /></g>))}</g>
        <g transform={`translate(${Wd + 30},0)`}>{panel(img, S, null)}</g>
        <text x={Wd / 2} y={Wd + 15} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>the circle |z| = R and the roots</text>
        <text x={Wd + 30 + Wd / 2} y={Wd + 15} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>its image under p, and 0</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>roots inside the circle: {inside}</div>
        <div>{hit ? "The circle passes through a root: the image passes through 0." : `times the image winds round 0: ${wind}`}</div>
      </div>
      <figcaption className="viz-caption">
        For small R the image is a small loop near p(0), which misses 0. For large R the leading term dominates, so the image
        winds round 0 as many times as the degree. Since the winding number can only change when the loop passes through 0,
        some circle in between must pass through a root.
      </figcaption>
    </figure>
  );
}
