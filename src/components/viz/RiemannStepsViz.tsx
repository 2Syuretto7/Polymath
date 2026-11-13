"use client";

import { useState } from "react";
import { add, cexp, div, liftPath, mul, sub, type C } from "./complexTools";

type Map1 = { name: string; f: (z: C) => C };
type Dom = { name: string; grid: C[][]; bdry: C[][]; z0: C; maps: Map1[]; views: { c: C; B: number }[] };

const N = 400;
const seg = (a: C, b: C, n = N): C[] => Array.from({ length: n + 1 }, (_, k) => [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]);
const ray = (p: C, d: C, L: number): C[] => Array.from({ length: N + 1 }, (_, k) => { const t = L * (k / N) ** 3; return [p[0] + d[0] * t, p[1] + d[1] * t]; });
const arc = (r: number): C[] => Array.from({ length: 181 }, (_, k) => [r * Math.cos((Math.PI * k) / 180), r * Math.sin((Math.PI * k) / 180)]);
const cayley: Map1 = { name: "w ↦ (w − i)/(w + i)", f: (w) => div(sub(w, [0, 1]), add(w, [0, 1])) };
const square: Map1 = { name: "z ↦ z²", f: (z) => mul(z, z) };
const PI = Math.PI;

const DOMS: Dom[] = [
  {
    name: "strip 0 < Im z < π",
    grid: [...[1, 2, 3, 4, 5].map((k) => seg([-6, (k * PI) / 6], [6, (k * PI) / 6])), ...[-2, -1, 0, 1, 2].map((x) => seg([x, 0], [x, PI]))],
    bdry: [seg([-6, 0], [6, 0]), seg([-6, PI], [6, PI])],
    z0: [0, PI / 2],
    maps: [{ name: "z ↦ eᶻ", f: cexp }, cayley],
    views: [{ c: [0, PI / 2], B: 2.4 }, { c: [0, 1.2], B: 1.8 }, { c: [0, 0], B: 1.15 }],
  },
  {
    name: "first quadrant",
    grid: [...[0.4, 0.8, 1.2, 1.6, 2].map((y) => ray([0, y], [1, 0], 30)), ...[0.4, 0.8, 1.2, 1.6, 2].map((x) => ray([x, 0], [0, 1], 30))],
    bdry: [ray([0, 0], [1, 0], 30), ray([0, 0], [0, 1], 30)],
    z0: [Math.SQRT1_2, Math.SQRT1_2],
    maps: [square, cayley],
    views: [{ c: [1.2, 1.2], B: 1.4 }, { c: [0, 1.2], B: 1.8 }, { c: [0, 0], B: 1.15 }],
  },
  {
    name: "upper half-disc",
    grid: [...[1, 2, 3, 4, 5].map((k) => seg([0, 0], [Math.cos((k * PI) / 6), Math.sin((k * PI) / 6)])), ...[0.25, 0.5, 0.75].map(arc)],
    bdry: [seg([-1, 0], [1, 0], 2000), arc(1)],
    z0: [0, Math.tan(PI / 8)],
    maps: [{ name: "z ↦ (1 + z)/(1 − z)", f: (z) => div(add([1, 0], z), sub([1, 0], z)) }, square, cayley],
    views: [{ c: [0, 0.5], B: 0.7 }, { c: [1.2, 1.2], B: 1.4 }, { c: [0, 1.2], B: 1.8 }, { c: [0, 0], B: 1.15 }],
  },
];

/** The Riemann mapping theorem by hand: explicit maps carrying simple regions onto the unit disc, one step at a time. */
export function RiemannStepsViz() {
  const [di, setDi] = useState(0);
  const [k, setK] = useState(0);
  const D = DOMS[di];
  const V = D.views[k];
  const W = 320;
  const X = (x: number) => W / 2 + (x / V.B) * (W / 2 - 10), Y = (y: number) => W / 2 - (y / V.B) * (W / 2 - 10);
  const F = (z: C) => D.maps.slice(0, k).reduce((w, m) => m.f(w), z);
  const d = (pts: C[]) => liftPath(pts.map((p) => sub(F(p), V.c)), X, Y, V.B);
  const w0 = sub(F(D.z0), V.c);
  const done = k === D.maps.length;
  const fmt = (v: number) => (Math.abs(v) < 5e-4 ? "0.000" : v.toFixed(3));
  const p0 = F(D.z0);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Region">
        {DOMS.map((dm, i) => <button key={dm.name} type="button" aria-pressed={di === i} className={di === i ? "seg is-on" : "seg"} onClick={() => { setDi(i); setK(0); }}>{dm.name}</button>)}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <button type="button" className="btn" disabled={k === 0} onClick={() => setK(k - 1)}>Undo a map</button>
        <button type="button" className="btn btn-primary" disabled={done} onClick={() => setK(k + 1)}>Apply the next map</button>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="The region after the maps applied so far" style={{ width: "100%", maxWidth: 360, display: "block", margin: "6px auto" }}>
        <rect x={0} y={0} width={W} height={W} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        <line x1={0} y1={Y(-V.c[1])} x2={W} y2={Y(-V.c[1])} style={{ stroke: "var(--border)" }} />
        <line x1={X(-V.c[0])} y1={0} x2={X(-V.c[0])} y2={W} style={{ stroke: "var(--border)" }} />
        {D.grid.map((g, i) => <path key={i} d={d(g)} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1 }} />)}
        {D.bdry.map((g, i) => <path key={`b${i}`} d={d(g)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />)}
        <circle cx={X(w0[0])} cy={Y(w0[1])} r={5} style={{ fill: "var(--text)" }} />
      </svg>
      <ol style={{ margin: "4px 0", paddingLeft: 22, fontSize: 14 }}>
        {D.maps.map((m, i) => <li key={m.name} style={{ fontWeight: i < k ? 600 : 400, color: i < k ? "var(--text)" : "var(--text-muted)" }}>{m.name}{i < k ? " (applied)" : ""}</li>)}
      </ol>
      <p className="mono" style={{ margin: "4px 0", fontSize: 14 }}>
        marked point now at {fmt(p0[0])} {p0[1] < -5e-4 ? "−" : "+"} {fmt(Math.abs(p0[1]))}i{done ? ": the region is now the unit disc, with the marked point at its centre" : ""}
      </p>
      <figcaption className="viz-caption">
        Thick curves are the boundary of the region, thin ones a grid inside it. Each step is a conformal bijection, so the
        composite is a conformal bijection onto the disc. The Riemann mapping theorem says such a map exists for every simply
        connected open region other than the whole plane, even when no formula is known.
      </figcaption>
    </figure>
  );
}
