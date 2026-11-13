"use client";

import { useState, type CSSProperties } from "react";

type V3 = [number, number, number];
const BANDS = [
  { k: 0, label: "cylinder" },
  { k: 1, label: "Möbius band" },
  { k: 2, label: "two half-twists" },
];

/** Carry a unit normal once round the core of a band. On the Möbius band it comes back pointing the other way. */
export function MobiusNormalViz() {
  const [bi, setBi] = useState(1);
  const [u, setU] = useState(0.5);
  const [phi, setPhi] = useState(0.6);
  const k = BANDS[bi].k;
  const x = (s: number, v: number): V3 => {
    const c = Math.cos((k * s) / 2), d = Math.sin((k * s) / 2);
    return [(1.6 + v * c) * Math.cos(s), (1.6 + v * c) * Math.sin(s), v * d];
  };
  const normal = (s: number): V3 => {
    const xu: V3 = [-Math.sin(s), Math.cos(s), 0];
    const c = Math.cos((k * s) / 2), d = Math.sin((k * s) / 2);
    const xv: V3 = [c * Math.cos(s), c * Math.sin(s), d];
    return [xu[1] * xv[2] - xu[2] * xv[1], xu[2] * xv[0] - xu[0] * xv[2], xu[0] * xv[1] - xu[1] * xv[0]];
  };
  const el = 0.5;
  const proj = ([a, b, c]: V3): [number, number] => {
    const x1 = a * Math.cos(phi) - b * Math.sin(phi), y1 = a * Math.sin(phi) + b * Math.cos(phi);
    return [x1, -(y1 * Math.sin(el) + c * Math.cos(el))];
  };
  const T = 2 * Math.PI, s = u * T;
  const W = 520, H = 280, sc = 95;
  const X = (p: number) => W / 2 + p * sc, Y = (p: number) => H / 2 + 10 + p * sc;
  const rungs = Array.from({ length: 48 }, (_, i) => (i / 48) * T);
  const edge = (v: number) => Array.from({ length: 241 }, (_, i) => proj(x((i / 240) * T, v))).map((q, i) => `${i ? "L" : "M"}${X(q[0]).toFixed(1)},${Y(q[1]).toFixed(1)}`).join(" ");
  const arrow = (t: number, style: CSSProperties, label: string) => {
    const p = x(t, 0), n = normal(t);
    const [ax, ay] = proj(p), [bx, by] = proj([p[0] + 0.7 * n[0], p[1] + 0.7 * n[1], p[2] + 0.7 * n[2]]);
    return (
      <g>
        <line x1={X(ax)} y1={Y(ay)} x2={X(bx)} y2={Y(by)} style={{ strokeWidth: 3, ...style }} />
        <circle cx={X(bx)} cy={Y(by)} r={4} style={{ fill: style.stroke as string }} />
        <text x={X(bx) + 6} y={Y(by) - 4} style={{ fill: "var(--text)", fontSize: 12 }}>{label}</text>
      </g>
    );
  };
  const n0 = normal(0), nT = normal(T);
  const flipped = n0[0] * nT[0] + n0[1] * nT[1] + n0[2] * nT[2] < 0;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Band">
        {BANDS.map((b, i) => <button key={b.label} type="button" aria-pressed={bi === i} className={bi === i ? "seg is-on" : "seg"} onClick={() => setBi(i)}>{b.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>distance travelled round the core: <span className="mono">{(u * 360).toFixed(0)}°</span></span>
          <input type="range" min={0} max={1} step={0.005} value={u} onChange={(e) => setU(Number(e.target.value))} /></label>
        <label><span>turn the view: <span className="mono">{phi.toFixed(2)}</span></span>
          <input type="range" min={0} max={6.28} step={0.01} value={phi} onChange={(e) => setPhi(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A band with a normal vector carried round its core" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {rungs.map((t, i) => {
          const [a1, b1] = proj(x(t, -0.5)), [a2, b2] = proj(x(t, 0.5));
          return <line key={i} x1={X(a1)} y1={Y(b1)} x2={X(a2)} y2={Y(b2)} style={{ stroke: "var(--text-faint)", strokeWidth: 1 }} />;
        })}
        <path d={edge(-0.5)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        <path d={edge(0.5)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        <path d={edge(0)} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "4 3" }} />
        {arrow(0, { stroke: "var(--text-muted)" }, "start")}
        {arrow(s, { stroke: "var(--accent)" }, "N")}
      </svg>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14, fontWeight: 700 }}>
        {u < 1
          ? "keep going: the normal varies continuously as it travels"
          : flipped
            ? "back at the start, the normal points the opposite way: no continuous choice of normal exists"
            : "back at the start, the normal agrees with where it began"}
      </p>
      <figcaption className="viz-caption">
        A surface is orientable if it has a continuous unit normal field. Following the normal round the core circle, the
        cylinder and the band with two half-twists bring it back unchanged, but the Möbius band returns it reversed. So the
        Möbius band has only one side and is not orientable.
      </figcaption>
    </figure>
  );
}
