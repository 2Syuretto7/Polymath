"use client";

import { useState } from "react";
import { add, div, liftPath, mul, type C } from "./complexTools";

type T4 = [C, C, C, C];
const PRESETS: { name: string; coef: (a: number) => T4; note: string }[] = [
  { name: "1/z", coef: () => [[0, 0], [1, 0], [1, 0], [0, 0]], note: "1/z swaps 0 and ∞ and fixes the unit circle as a set; lines not through 0 become circles through 0." },
  { name: "(z − i)/(z + i)", coef: () => [[1, 0], [0, -1], [1, 0], [0, 1]], note: "The Cayley map sends the real axis onto the unit circle and the upper half-plane onto the disc." },
  { name: "(z − a)/(1 − az)", coef: (a) => [[1, 0], [-a, 0], [-a, 0], [1, 0]], note: "This maps the unit disc onto itself and sends a to 0; the unit circle goes to itself." },
];

/** Möbius transformations: lines and circles go to lines and circles. */
export function MobiusViz() {
  const [pi, setPi] = useState(0);
  const [a, setA] = useState(0.5);
  const P = PRESETS[pi];
  const [ca, cb, cc, cd] = P.coef(a);
  const T = (z: C): C => div(add(mul(ca, z), cb), add(mul(cc, z), cd));
  const B = 2.5, W = 260;
  const X = (x: number) => W / 2 + (x / B) * (W / 2 - 8), Y = (y: number) => W / 2 - (y / B) * (W / 2 - 8);
  const S = 700;
  const tans = Array.from({ length: S + 1 }, (_, k) => Math.tan(-1.565 + (3.13 * k) / S));
  const hline = (y: number): C[] => tans.map((t) => [t, y]);
  const vline = (x: number): C[] => tans.map((t) => [x, t]);
  const circle: C[] = Array.from({ length: 361 }, (_, k) => [Math.cos((Math.PI * k) / 180), Math.sin((Math.PI * k) / 180)]);
  const cs = [-2, -1.5, -1, -0.5, 0.5, 1, 1.5, 2];
  const faint = { fill: "none", stroke: "var(--text-faint)", strokeWidth: 1 };
  const axis = { fill: "none", stroke: "var(--text)", strokeWidth: 2.5 };
  const circ = { fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 };
  const panel = (f: (z: C) => C) => {
    const d = (pts: C[]) => liftPath(pts.map(f), X, Y, B);
    return (
      <>
        <rect x={0} y={0} width={W} height={W} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        {cs.map((c) => <path key={`h${c}`} d={d(hline(c))} style={faint} />)}
        {[0, ...cs].map((c) => <path key={`v${c}`} d={d(vline(c))} style={faint} />)}
        <path d={d(hline(0))} style={axis} />
        <path d={d(circle)} style={circ} />
      </>
    );
  };
  const show = (w: C) => {
    if (!Number.isFinite(w[0]) || !Number.isFinite(w[1]) || Math.hypot(w[0], w[1]) > 1e6) return "∞";
    const r = (v: number) => (Math.abs(v) < 5e-4 ? 0 : v);
    const x = r(w[0]), y = r(w[1]);
    if (y === 0) return x.toFixed(2);
    if (x === 0) return `${y.toFixed(2)}i`;
    return `${x.toFixed(2)} ${y < 0 ? "−" : "+"} ${Math.abs(y).toFixed(2)}i`;
  };
  const atInf: C = cc[0] === 0 && cc[1] === 0 ? [Infinity, Infinity] : div(ca, cc);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Transformation">
        {PRESETS.map((p, k) => <button key={p.name} type="button" aria-pressed={pi === k} className={pi === k ? "seg is-on" : "seg"} onClick={() => setPi(k)}>T(z) = {p.name}</button>)}
      </div>
      {pi === 2 && (
        <div className="viz-sliders" style={{ marginTop: 8 }}>
          <label><span>a: <span className="mono">{a.toFixed(1)}</span></span><input type="range" min={-0.8} max={0.8} step={0.1} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        </div>
      )}
      <svg viewBox={`0 0 ${2 * W + 30} ${W + 20}`} role="img" aria-label="Lines and the unit circle, and their images" style={{ width: "100%", maxWidth: 560, display: "block", margin: "6px auto" }}>
        <g>{panel((z) => z)}</g>
        <g transform={`translate(${W + 30},0)`}>{panel(T)}</g>
        <text x={W / 2} y={W + 15} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>z-plane</text>
        <text x={W + 30 + W / 2} y={W + 15} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>image under T</text>
      </svg>
      <p className="mono" style={{ margin: "4px 0", fontSize: 14 }}>
        T(0) = {show(T([0, 0]))}; T(1) = {show(T([1, 0]))}; T(i) = {show(T([0, 1]))}; T(∞) = {show(atInf)}
      </p>
      <p style={{ margin: "4px 0", fontSize: 14 }}>{P.note}</p>
      <figcaption className="viz-caption">
        The thick straight line is the real axis and the thick circle is the unit circle. Every line and circle on the left
        goes to a line or a circle on the right: a line is just a circle through ∞.
      </figcaption>
    </figure>
  );
}
