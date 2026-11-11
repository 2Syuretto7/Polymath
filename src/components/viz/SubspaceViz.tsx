"use client";

import { useState, type ReactNode } from "react";
import { Arrow, Axes, scales, type View } from "./Plot";
import { fmtNum } from "./format";

type Vec = [number, number];
type Cand = {
  name: string;
  pu: (s: number) => Vec;
  pv: (t: number) => Vec;
  has: (p: Vec) => boolean;
  verdict: string;
};

const E = 1e-9;
const CANDS: Cand[] = [
  {
    name: "line through 0",
    pu: (s) => [2 * s, s], pv: (t) => [2 * t, t],
    has: ([x, y]) => Math.abs(y - x / 2) < E,
    verdict: "The line y = x/2 is a subspace. Every vector on it is a multiple of (2, 1), and sums and multiples of multiples of (2, 1) are again multiples of (2, 1).",
  },
  {
    name: "line missing 0",
    pu: (s) => [2 * s, s + 1], pv: (t) => [2 * t, t + 1],
    has: ([x, y]) => Math.abs(y - x / 2 - 1) < E,
    verdict: "The line y = x/2 + 1 is not a subspace. It does not contain the zero vector, so c = 0 always fails, and u + v lands on the parallel line y = x/2 + 2.",
  },
  {
    name: "both axes",
    pu: (s) => [2 * s, 0], pv: (t) => [0, 2 * t],
    has: ([x, y]) => Math.abs(x) < E || Math.abs(y) < E,
    verdict: "The union of the two axes is closed under multiplication but not under addition: a vector on each axis adds up to a vector on neither. A union of subspaces is rarely a subspace.",
  },
  {
    name: "first quadrant",
    pu: (s) => [s + 2, 1], pv: (t) => [1, t + 2],
    has: ([x, y]) => x > -E && y > -E,
    verdict: "The quadrant x ≥ 0, y ≥ 0 is closed under addition but not under multiplication: any negative c throws u out of it.",
  },
  {
    name: "just 0",
    pu: () => [0, 0], pv: () => [0, 0],
    has: ([x, y]) => Math.abs(x) < E && Math.abs(y) < E,
    verdict: "The set containing only the zero vector is a subspace, the smallest one: 0 + 0 = 0 and c0 = 0.",
  },
  {
    name: "whole plane",
    pu: (s) => [s, 1.5], pv: (t) => [-1.5, t],
    has: () => true,
    verdict: "The whole plane is a subspace of itself, the largest one. Nothing you do can leave it.",
  },
];

const V: View = { xmin: -6, xmax: 6, ymin: -6, ymax: 6, w: 400, h: 400 };

/** Test candidate sets in the plane for closure under addition and scalar multiplication. */
export function SubspaceViz() {
  const [k, setK] = useState(0);
  const [s, setS] = useState(1);
  const [t, setT] = useState(-0.5);
  const [c, setC] = useState(-1);
  const { X, Y } = scales(V);
  const C = CANDS[k];
  const u = C.pu(s), v = C.pv(t);
  const sum: Vec = [u[0] + v[0], u[1] + v[1]];
  const cu: Vec = [c * u[0], c * u[1]];
  const sumIn = C.has(sum), cuIn = C.has(cu);
  const f = (x: number) => fmtNum(Number(x.toFixed(2)));
  const vs = (p: Vec) => `(${f(p[0])}, ${f(p[1])})`;
  const line = (a: Vec, b: Vec, key: string) => (
    <line key={key} x1={X(a[0])} y1={Y(a[1])} x2={X(b[0])} y2={Y(b[1])} style={{ stroke: "var(--accent)", strokeWidth: 6, opacity: 0.22 }} />
  );

  let set: ReactNode = null;
  if (k === 0) set = line([-12, -6], [12, 6], "l");
  if (k === 1) set = line([-14, -6], [10, 6], "l");
  if (k === 2) set = <>{line([-6, 0], [6, 0], "x")}{line([0, -6], [0, 6], "y")}</>;
  if (k === 3) set = <rect x={X(0)} y={Y(6)} width={X(6) - X(0)} height={Y(0) - Y(6)} style={{ fill: "var(--accent)", opacity: 0.12 }} />;
  if (k === 4) set = <circle cx={X(0)} cy={Y(0)} r={7} style={{ fill: "var(--accent)", opacity: 0.35 }} />;
  if (k === 5) set = <rect x={0} y={0} width={V.w} height={V.h} style={{ fill: "var(--accent)", opacity: 0.08 }} />;

  const arrow = (p: Vec, cls: string, key: string) => <Arrow key={key} x1={X(0)} y1={Y(0)} x2={X(p[0])} y2={Y(p[1])} className={cls} />;

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Candidate set">
        {CANDS.map((x, i) => (
          <button key={x.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => setK(i)}>{x.name}</button>
        ))}
      </div>
      <Axes v={V} label={`Candidate set: ${C.name}, with u, v, u + v and cu`}>
        {set}
        {arrow(u, "plot-arrow", "u")}
        {arrow(v, "plot-arrow", "v")}
        {arrow(sum, sumIn ? "plot-arrow is-muted" : "plot-arrow is-hot", "s")}
        {arrow(cu, cuIn ? "plot-arrow is-muted" : "plot-arrow is-hot", "c")}
        <line x1={X(u[0])} y1={Y(u[1])} x2={X(sum[0])} y2={Y(sum[1])} className="plot-ghost" />
        <line x1={X(v[0])} y1={Y(v[1])} x2={X(sum[0])} y2={Y(sum[1])} className="plot-ghost" />
      </Axes>
      <div className="viz-sliders">
        <label><span>move u within the set</span>
          <input type="range" min={-2} max={2} step={0.5} value={s} disabled={k === 4} onChange={(e) => setS(Number(e.target.value))} /></label>
        <label><span>move v within the set</span>
          <input type="range" min={-2} max={2} step={0.5} value={t} disabled={k === 4} onChange={(e) => setT(Number(e.target.value))} /></label>
        <label><span>c = <span className="mono">{f(c)}</span></span>
          <input type="range" min={-2} max={2} step={0.5} value={c} onChange={(e) => setC(Number(e.target.value))} /></label>
      </div>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>u, v</td><td>{vs(u)}, {vs(v)}</td></tr>
          <tr><td>u + v</td><td>{vs(sum)}: {sumIn ? "in the set" : "outside the set"}</td></tr>
          <tr><td>cu</td><td>{vs(cu)}: {cuIn ? "in the set" : "outside the set"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {sumIn && cuIn ? "This choice stays inside. " : "Red arrows have left the set. "}
        {C.verdict}
      </figcaption>
    </figure>
  );
}
