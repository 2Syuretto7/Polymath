"use client";

import { useState } from "react";

const T = 0.15, NX = 50, NT = 36, MODES = 150;

/** The weak maximum principle: on a space-time rectangle, a solution of the heat equation is largest on the bottom or the sides. */
export function MaxPrincipleViz() {
  const [c, setC] = useState(0.5);
  const [hot, setHot] = useState(false);
  const [t1, setT1] = useState(0.03);
  const a = hot ? 1.5 : 0;
  const phi = (x: number) => (x <= c ? x / c : (1 - x) / (1 - c));
  const b = Array.from({ length: MODES + 1 }, (_, n) =>
    n === 0 ? 0 : (2 * Math.sin(n * Math.PI * c)) / (n * n * Math.PI * Math.PI * c * (1 - c)) - (a * 2) / (n * Math.PI));
  const u = (x: number, t: number) => {
    if (t === 0) return phi(x);
    if (x === 0) return a;
    let s = a * (1 - x);
    for (let n = 1; n <= MODES; n++) s += b[n] * Math.exp(-n * n * Math.PI * Math.PI * t) * Math.sin(n * Math.PI * x);
    return s;
  };
  const grid: number[][] = Array.from({ length: NT + 1 }, (_, j) => Array.from({ length: NX + 1 }, (_, i) => u(i / NX, (j / NT) * T)));
  let gmax = -Infinity, gi = 0, gj = 0;
  grid.forEach((row, j) => row.forEach((v, i) => { if (v > gmax) { gmax = v; gi = i; gj = j; } }));
  const boundaryMax = Math.max(...grid[0], ...grid.map((r) => r[0]), ...grid.map((r) => r[NX]));
  const interiorMax = Math.max(...grid.slice(1).flatMap((r) => r.slice(1, NX)));
  const row1 = Array.from({ length: 201 }, (_, i) => u(i / 200, t1));
  const max1 = Math.max(...row1);
  const top = Math.max(gmax, 1e-9);
  const L = 40, R = 300, B = 230, Tp = 20;
  const cw = (R - L) / (NX + 1), ch = (B - Tp) / (NT + 1);
  const sx = (i: number) => L + i * cw, sy = (j: number) => B - (j + 1) * ch;
  const yOf = (t: number) => B - (t / T) * (B - Tp - ch) - ch / 2;
  const onBottom = gj === 0, onSide = gi === 0 || gi === NX;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Boundary condition">
        <button type="button" aria-pressed={!hot} className={!hot ? "seg is-on" : "seg"} onClick={() => setHot(false)}>both ends held at 0</button>
        <button type="button" aria-pressed={hot} className={hot ? "seg is-on" : "seg"} onClick={() => setHot(true)}>left end held at 1.5</button>
      </div>
      <div className="viz-sliders">
        <label><span>position of the initial peak: <span className="mono">{c.toFixed(2)}</span></span>
          <input type="range" min={0.1} max={0.9} step={0.05} value={c} onChange={(e) => setC(Number(e.target.value))} /></label>
        <label><span>time slice t₁: <span className="mono">{t1.toFixed(3)}</span></span>
          <input type="range" min={0} max={T} step={0.005} value={t1} onChange={(e) => setT1(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 260" role="img" aria-label="Temperature over a space-time rectangle, darker where hotter" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {grid.map((row, j) => row.map((v, i) => (
          <rect key={`${i}-${j}`} x={sx(i)} y={sy(j)} width={cw + 0.4} height={ch + 0.4} style={{ fill: "var(--accent)", opacity: Math.max(0, Math.min(1, v / top)) * 0.9 + 0.03 }} />
        )))}
        <rect x={L} y={Tp} width={R - L} height={B - Tp} style={{ fill: "none", stroke: "var(--border)" }} />
        <path d={`M${L},${Tp} L${L},${B} L${R},${B} L${R},${Tp}`} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 3 }} />
        <line x1={L} y1={yOf(t1)} x2={R} y2={yOf(t1)} style={{ stroke: "var(--text)", strokeDasharray: "4 3" }} />
        <circle cx={sx(gi) + cw / 2} cy={sy(gj) + ch / 2} r={5} style={{ fill: "var(--bg)", stroke: "var(--text)", strokeWidth: 2 }} />
        <text x={L} y={B + 16} style={{ fill: "var(--text-muted)", fontSize: 11 }}>x = 0</text>
        <text x={R - 30} y={B + 16} style={{ fill: "var(--text-muted)", fontSize: 11 }}>x = 1</text>
        <text x={L - 34} y={B - 2} style={{ fill: "var(--text-muted)", fontSize: 11 }}>t = 0</text>
        <text x={L - 38} y={Tp + 10} style={{ fill: "var(--text-muted)", fontSize: 11 }}>t = {T}</text>
        <text x={318} y={40} style={{ fill: "var(--text)", fontSize: 13 }}>thick line: bottom and sides,</text>
        <text x={318} y={58} style={{ fill: "var(--text)", fontSize: 13 }}>the parabolic boundary</text>
        <text x={318} y={90} style={{ fill: "var(--text)", fontSize: 13 }}>circle: the hottest point</text>
        <text x={318} y={108} style={{ fill: "var(--text)", fontSize: 13 }}>of the rectangle</text>
        <text x={318} y={140} style={{ fill: "var(--text)", fontSize: 13 }}>dashed: the slice t = t₁</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>max over the bottom and sides: {boundaryMax.toFixed(4)}</div>
        <div>max over the interior: {interiorMax.toFixed(4)}</div>
        <div>max along the slice t = t₁: {max1.toFixed(4)}</div>
        <div style={{ fontWeight: 700 }}>the hottest point lies on the {onBottom && onSide ? "bottom corner" : onBottom ? "bottom, at t = 0" : onSide ? "side, at an end of the rod" : "interior"}</div>
      </div>
      <figcaption className="viz-caption">
        Darker cells are hotter. The rod starts as a tent with its peak at the chosen point. With both ends at 0 the hottest
        point of the whole rectangle is the initial peak, and every later slice is cooler. Hold the left end at 1.5 and the
        maximum moves to that side. Either way it lies on the parabolic boundary, never strictly inside, as the weak maximum
        principle says.
      </figcaption>
    </figure>
  );
}
