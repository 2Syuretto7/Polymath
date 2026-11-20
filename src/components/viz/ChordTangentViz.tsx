"use client";

import { useState } from "react";

/** Exact rationals as [numerator, denominator] with BigInt, denominator positive. */
type Q = [bigint, bigint];
const gcd = (a: bigint, b: bigint): bigint => { a = a < 0n ? -a : a; b = b < 0n ? -b : b; while (b) [a, b] = [b, a % b]; return a; };
const q = (n: bigint, d: bigint = 1n): Q => { if (d < 0n) { n = -n; d = -d; } const g = gcd(n, d) || 1n; return [n / g, d / g]; };
const add = (a: Q, b: Q) => q(a[0] * b[1] + b[0] * a[1], a[1] * b[1]);
const sub = (a: Q, b: Q) => q(a[0] * b[1] - b[0] * a[1], a[1] * b[1]);
const mul = (a: Q, b: Q) => q(a[0] * b[0], a[1] * b[1]);
const div = (a: Q, b: Q) => q(a[0] * b[1], a[1] * b[0]);
const eq = (a: Q, b: Q) => a[0] === b[0] && a[1] === b[1];
const num = (a: Q) => Number(a[0]) / Number(a[1]);
export const show = (a: Q) => (a[1] === 1n ? `${a[0]}` : `${a[0]}/${a[1]}`).replace("-", "−");

/** Points on E: y² = x³ + 17, or null for the point at infinity O. */
export type P = [Q, Q] | null;

/** The group law on y² = x³ + 17 by chord and tangent. */
export function addPoints(A: P, B: P): P {
  if (!A) return B;
  if (!B) return A;
  const [x1, y1] = A, [x2, y2] = B;
  let lam: Q;
  if (eq(x1, x2)) {
    if (!eq(y1, y2) || y1[0] === 0n) return null;
    lam = div(mul(q(3n), mul(x1, x1)), mul(q(2n), y1));
  } else lam = div(sub(y2, y1), sub(x2, x1));
  const x3 = sub(sub(mul(lam, lam), x1), x2);
  const y3 = sub(mul(lam, sub(x1, x3)), y1);
  return [x3, y3];
}

export const POINTS: [number, number][] = [[-2, 3], [-2, -3], [-1, 4], [-1, -4], [2, 5], [4, 9], [8, -23]];
const toP = ([x, y]: [number, number]): P => [q(BigInt(x)), q(BigInt(y))];

/** Adding rational points on y² = x³ + 17: draw the line through P and Q, find the third point, reflect. */
export function ChordTangentViz() {
  const [i, setI] = useState(0);
  const [j, setJ] = useState(2);
  const A = toP(POINTS[i]), B = toP(POINTS[j]);
  const R = addPoints(A, B);
  const third: P = R ? [R[0], q(-R[1][0], R[1][1])] : null;
  const X0 = 150, Y0 = 130, SX = 30, SY = 4.4;
  const px = (x: number) => X0 + x * SX, py = (y: number) => Y0 - y * SY;
  const branch = (s: number) => {
    let d = "";
    const x0 = -Math.cbrt(17);
    for (let k = 0; k <= 300; k++) {
      const x = x0 + Math.pow(k / 300, 2) * (12.5 - x0);
      const y = s * Math.sqrt(Math.max(0, x * x * x + 17));
      if (Math.abs(y) > 28) break;
      d += `${d ? "L" : "M"}${px(x).toFixed(1)},${py(y).toFixed(1)}`;
    }
    return d;
  };
  const visible = (p: P) => p && Math.abs(num(p[0])) < 12.5 && Math.abs(num(p[1])) < 28;
  const [ax, ay] = [num(A![0]), num(A![1])];
  let line = null;
  if (R) {
    const [bx, by] = [num(B![0]), num(B![1])];
    const dx = i === j ? 1 : bx - ax, dy = i === j ? (3 * ax * ax) / (2 * ay) : by - ay;
    const t0 = -6, t1 = 30;
    const L = Math.hypot(dx, dy);
    line = <line x1={px(ax + (dx / L) * t0)} y1={py(ay + (dy / L) * t0)} x2={px(ax + (dx / L) * t1)} y2={py(ay + (dy / L) * t1)} style={{ stroke: "var(--accent)", strokeDasharray: "5 4" }} />;
  }
  const lab = (p: P) => (p ? `(${show(p[0])}, ${show(p[1])})` : "O");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="P">
        {POINTS.map((v, k) => <button key={k} type="button" aria-pressed={i === k} className={i === k ? "seg is-on" : "seg"} onClick={() => setI(k)}>P = ({String(v[0]).replace("-", "−")}, {String(v[1]).replace("-", "−")})</button>)}
      </div>
      <div className="segmented" role="group" aria-label="Q" style={{ marginTop: 6 }}>
        {POINTS.map((v, k) => <button key={k} type="button" aria-pressed={j === k} className={j === k ? "seg is-on" : "seg"} onClick={() => setJ(k)}>Q = ({String(v[0]).replace("-", "−")}, {String(v[1]).replace("-", "−")})</button>)}
      </div>
      <svg viewBox="0 0 540 260" role="img" aria-label="Adding two points on the elliptic curve y squared equals x cubed plus 17" style={{ width: "100%", display: "block", marginTop: 8 }}>
        
        <line x1={10} y1={Y0} x2={530} y2={Y0} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X0} y1={4} x2={X0} y2={256} style={{ stroke: "var(--border-strong)" }} />
        <path d={branch(1)} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <path d={branch(-1)} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        {line}
        {R && visible(third) && visible(R) && <line x1={px(num(third![0]))} y1={py(num(third![1]))} x2={px(num(R[0]))} y2={py(num(R[1]))} style={{ stroke: "var(--success)", strokeDasharray: "2 3" }} />}
        {visible(third) && <circle cx={px(num(third![0]))} cy={py(num(third![1]))} r={5} style={{ fill: "var(--surface)", stroke: "var(--accent)", strokeWidth: 2 }} />}
        {visible(R) && <circle cx={px(num(R![0]))} cy={py(num(R![1]))} r={6} style={{ fill: "var(--success)" }} />}
        {visible(R) && <text x={px(num(R![0])) + 9} y={py(num(R![1])) + 4} style={{ fill: "var(--success)", fontSize: 11 }}>P + Q</text>}
        <circle cx={px(ax)} cy={py(ay)} r={5} style={{ fill: "var(--accent)" }} />
        <text x={px(ax) - 8} y={py(ay) - 6} textAnchor="end" style={{ fill: "var(--accent)", fontSize: 11 }}>P</text>
        <circle cx={px(num(B![0]))} cy={py(num(B![1]))} r={5} style={{ fill: "var(--accent)" }} />
        <text x={px(num(B![0])) + 8} y={py(num(B![1])) - 6} style={{ fill: "var(--accent)", fontSize: 11 }}>{i === j ? "" : "Q"}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        P + Q = {lab(A)} + {lab(B)} = {lab(R)}.{R && !visible(R) ? " (Outside the picture.)" : ""}{!R ? " The line is vertical and meets the curve again only at infinity." : ""}
      </p>
      <figcaption className="viz-caption">
        The line through two rational points of a cubic meets it in a third point, which is rational too. Reflecting that
        point in the x-axis gives P + Q. With the point at infinity O as zero, this makes the rational points into an
        abelian group; when P = Q the tangent line is used. Every point here has rational coordinates, computed exactly.
      </figcaption>
    </figure>
  );
}
