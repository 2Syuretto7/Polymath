"use client";

import { useState } from "react";
import { Axes, scales, type View } from "./Plot";
import { fmtNum } from "./format";

type M2 = [[number, number], [number, number]];
const V: View = { xmin: -4, xmax: 4, ymin: -4, ymax: 4, w: 400, h: 400 };
const MATS: { name: string; m: M2 }[] = [
  { name: "rotate 90°", m: [[0, -1], [1, 0]] },
  { name: "reflect in x-axis", m: [[1, 0], [0, -1]] },
  { name: "stretch x by 2", m: [[2, 0], [0, 1]] },
  { name: "shear", m: [[1, 1], [0, 1]] },
];
const F: [number, number][] = [[0, 0], [0, 3], [2, 3], [2, 2.4], [0.6, 2.4], [0.6, 1.8], [1.6, 1.8], [1.6, 1.2], [0.6, 1.2], [0.6, 0]];

const mul = (a: M2, b: M2): M2 => [
  [a[0][0] * b[0][0] + a[0][1] * b[1][0], a[0][0] * b[0][1] + a[0][1] * b[1][1]],
  [a[1][0] * b[0][0] + a[1][1] * b[1][0], a[1][0] * b[0][1] + a[1][1] * b[1][1]],
];
const app = (m: M2, [x, y]: [number, number]): [number, number] => [m[0][0] * x + m[0][1] * y, m[1][0] * x + m[1][1] * y];
const same = (a: M2, b: M2) => a.every((r, i) => r.every((x, j) => x === b[i][j]));
const show = (m: M2) => `[${fmtNum(m[0][0])} ${fmtNum(m[0][1])}; ${fmtNum(m[1][0])} ${fmtNum(m[1][1])}]`;

/** Multiply two 2 by 2 matrices by doing one transformation after another, in either order. */
export function MatMulViz() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(1);
  const [ab, setAb] = useState(true);
  const { X, Y } = scales(V);
  const A = MATS[a].m, B = MATS[b].m;
  const first = ab ? B : A, second = ab ? A : B;
  const P = mul(A, B), Q = mul(B, A);
  const path = (pts: [number, number][]) => pts.map(([x, y], i) => `${i ? "L" : "M"}${X(x).toFixed(1)} ${Y(y).toFixed(1)}`).join(" ") + " Z";
  const mid = F.map((p) => app(first, p));
  const end = F.map((p) => app(second, app(first, p)));
  const pick = (val: number, set: (n: number) => void, name: string) => (
    <div className="segmented" role="group" aria-label={name}>
      {MATS.map((x, i) => (
        <button key={x.name} type="button" className={i === val ? "seg is-on" : "seg"} aria-pressed={i === val} onClick={() => set(i)}>{x.name}</button>
      ))}
    </div>
  );

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, alignItems: "center" }}><span className="mono-meta">A</span>{pick(a, setA, "Matrix A")}</div>
      <div className="viz-controls" style={{ alignItems: "center" }}><span className="mono-meta">B</span>{pick(b, setB, "Matrix B")}</div>
      <div className="viz-controls" style={{ alignItems: "center" }}>
        <div className="segmented" role="group" aria-label="Order">
          <button type="button" className={ab ? "seg is-on" : "seg"} aria-pressed={ab} onClick={() => setAb(true)}>AB: B first, then A</button>
          <button type="button" className={!ab ? "seg is-on" : "seg"} aria-pressed={!ab} onClick={() => setAb(false)}>BA: A first, then B</button>
        </div>
      </div>
      <Axes v={V} label={`The letter F, transformed by ${ab ? "AB" : "BA"}`}>
        <path d={path(F)} style={{ fill: "var(--overlay)", stroke: "var(--text-faint)", strokeWidth: 1.5 }} />
        <path d={path(mid)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "5 4" }} />
        <path d={path(end)} style={{ fill: "color-mix(in srgb, var(--accent) 25%, transparent)", stroke: "var(--accent)", strokeWidth: 2.5 }} />
      </Axes>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>A</td><td>{show(A)}</td><td>B</td><td>{show(B)}</td></tr>
          <tr><td>AB</td><td>{show(P)}</td><td>BA</td><td>{show(Q)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Grey: the original F. Dashed: after the first matrix. Coloured: after both.{" "}
        {same(P, Q)
          ? "Here AB = BA, so the order does not matter. That is the exception, not the rule."
          : `Here AB ≠ BA: switch the order and the final F lands somewhere else. Matrix multiplication is not commutative.`}
      </figcaption>
    </figure>
  );
}
