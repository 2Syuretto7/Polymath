"use client";

import { useState } from "react";
import { Axes, scales, type View } from "./Plot";
import { fmtNum } from "./format";

const V: View = { xmin: -5, xmax: 5, ymin: -5, ymax: 5, w: 400, h: 400 };
const PRESETS: { name: string; a: number; b: number; c: number }[] = [
  { name: "crossing", a: 1, b: -1, c: 0 },
  { name: "parallel", a: 2, b: 2, c: -2 },
  { name: "the same line", a: 2, b: 2, c: 4 },
];

/** The line ax + by = c, clipped to a big box, as two end points. */
function seg(a: number, b: number, c: number): [number, number, number, number] | null {
  if (Math.abs(b) > 1e-12) return [-20, (c + 20 * a) / b, 20, (c - 20 * a) / b];
  if (Math.abs(a) > 1e-12) return [c / a, -20, c / a, 20];
  return null;
}

/** Two equations in two unknowns: change the second and see when they have one, no or infinitely many solutions. */
export function TwoLinesViz() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(-1);
  const [c, setC] = useState(0);
  const { X, Y } = scales(V);
  const f = (x: number) => fmtNum(Number(x.toFixed(2)));
  const p = b - a;
  const q = c - 2 * a;
  const kind = Math.abs(p) > 1e-12 ? "one" : Math.abs(q) > 1e-12 ? "none" : "many";
  const y0 = kind === "one" ? q / p : 0;
  const x0 = 2 - y0;
  const L1 = seg(1, 1, 2);
  const L2 = seg(a, b, c);
  const mag = (x: number, v: string) => (Math.abs(x) === 1 ? v : `${f(Math.abs(x))}${v}`);
  const lhs = `${a < 0 ? "−" : ""}${mag(a, "x")} ${b < 0 ? "−" : "+"} ${mag(b, "y")}`;

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Presets">
        {PRESETS.map((s) => (
          <button key={s.name} type="button" className="seg" onClick={() => { setA(s.a); setB(s.b); setC(s.c); }}>{s.name}</button>
        ))}
      </div>
      <Axes v={V} label={`Lines x + y = 2 and ${lhs} = ${f(c)}`}>
        {L1 && <line x1={X(L1[0])} y1={Y(L1[1])} x2={X(L1[2])} y2={Y(L1[3])} style={{ stroke: "var(--accent)", strokeWidth: 2.5 }} />}
        {L2 && <line x1={X(L2[0])} y1={Y(L2[1])} x2={X(L2[2])} y2={Y(L2[3])}
          style={{ stroke: "var(--danger)", strokeWidth: 2.5, strokeDasharray: kind === "many" ? "8 6" : undefined }} />}
        {kind === "one" && Math.abs(x0) <= 5 && Math.abs(y0) <= 5 && <circle cx={X(x0)} cy={Y(y0)} r={5} style={{ fill: "var(--text)" }} />}
      </Axes>
      <div className="viz-sliders">
        <label><span>a = <span className="mono">{f(a)}</span></span>
          <input type="range" min={-3} max={3} step={0.5} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>b = <span className="mono">{f(b)}</span></span>
          <input type="range" min={-3} max={3} step={0.5} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
        <label><span>c = <span className="mono">{f(c)}</span></span>
          <input type="range" min={-6} max={6} step={0.5} value={c} onChange={(e) => setC(Number(e.target.value))} /></label>
      </div>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>equations</td><td>x + y = 2 (fixed); {lhs} = {f(c)} (red, the one you move)</td></tr>
          <tr><td>after elimination</td><td>[1 1 | 2] and [0 {f(p)} | {f(q)}]</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {kind === "one"
          ? `One solution, (${f(x0)}, ${f(y0)}). The second row has a pivot, ${f(p)}, so y = ${f(q)} ÷ ${f(p)} and then x = 2 − y.`
          : kind === "none"
            ? a === 0 && b === 0
              ? `No solution. The second equation is 0 = ${f(c)}, false for every point, so it has no line at all.`
              : `No solution. The second row reads 0 = ${f(q)}, which is false: the lines are parallel and never meet.`
            : a === 0 && b === 0
              ? "Infinitely many solutions. The second equation is 0 = 0, true of every point, so only the fixed line constrains anything, and y is free."
              : "Infinitely many solutions. The second row reads 0 = 0, so it adds nothing: both equations describe the same line, and y is free."}
      </figcaption>
    </figure>
  );
}
