"use client";

import { useState } from "react";
import { Arrow, Axes, scales, type View } from "./Plot";
import { fmtNum } from "./format";

const V: View = { xmin: -4, xmax: 4, ymin: -4, ymax: 4, w: 400, h: 400 };
const STEPS = [
  "Start with independent vectors a and b.",
  "Step 1: divide a by its length to get the unit vector q₁.",
  "Step 2: subtract from b its component along q₁. What is left, B = b − (q₁ᵀb)q₁, is perpendicular to q₁.",
  "Step 3: divide B by its length to get q₂. Now q₁ and q₂ are orthonormal and span the same plane as a and b.",
];

/** Gram–Schmidt in the plane, one step at a time, with the triangular matrix R of A = QR. */
export function GramSchmidtViz() {
  const [a, setA] = useState<[number, number]>([3, 1]);
  const [b, setB] = useState<[number, number]>([1, 2]);
  const [step, setStep] = useState(0);
  const { X, Y } = scales(V);
  const la = Math.hypot(a[0], a[1]);
  const q1: [number, number] = la ? [a[0] / la, a[1] / la] : [0, 0];
  const r12 = q1[0] * b[0] + q1[1] * b[1];
  const proj: [number, number] = [r12 * q1[0], r12 * q1[1]];
  const B: [number, number] = [b[0] - proj[0], b[1] - proj[1]];
  const lB = Math.hypot(B[0], B[1]);
  const dep = la < 1e-9 || lB < 1e-9;
  const q2: [number, number] = lB > 1e-9 ? [B[0] / lB, B[1] / lB] : [0, 0];
  const f = (x: number) => fmtNum(Number(x.toFixed(3)));
  const v = (p: [number, number]) => `(${f(p[0])}, ${f(p[1])})`;
  const ar = (p: [number, number], cls = "plot-arrow", from: [number, number] = [0, 0]) => (
    <Arrow x1={X(from[0])} y1={Y(from[1])} x2={X(p[0])} y2={Y(p[1])} className={cls} />
  );
  const slider = (label: string, val: number, set: (n: number) => void) => (
    <label><span>{label} = <span className="mono">{fmtNum(val)}</span></span>
      <input type="range" min={-3} max={3} step={1} value={val} onChange={(e) => { set(Number(e.target.value)); }} /></label>
  );

  return (
    <figure className="viz">
      <Axes v={V} label="Gram–Schmidt on two vectors">
        <circle cx={X(0)} cy={Y(0)} r={X(1) - X(0)} style={{ fill: "none", stroke: "var(--border)", strokeDasharray: "4 4" }} />
        {ar(a, "plot-arrow is-muted")}
        {ar(b, "plot-arrow is-muted")}
        {step >= 1 && !dep && ar(q1)}
        {step >= 2 && !dep && <line x1={X(b[0])} y1={Y(b[1])} x2={X(proj[0])} y2={Y(proj[1])} className="plot-ghost" />}
        {step >= 2 && !dep && ar(B, "plot-arrow is-hot")}
        {step >= 3 && !dep && ar(q2)}
      </Axes>
      <div className="viz-sliders">
        {slider("a, first entry", a[0], (n) => setA([n, a[1]]))}
        {slider("a, second entry", a[1], (n) => setA([a[0], n]))}
        {slider("b, first entry", b[0], (n) => setB([n, b[1]]))}
        {slider("b, second entry", b[1], (n) => setB([b[0], n]))}
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={step >= 3 || dep} onClick={() => setStep(step + 1)}>Next step</button>
        <button type="button" className="btn" onClick={() => setStep(0)}>Start again</button>
      </div>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>q₁ = a / ‖a‖</td><td>{step >= 1 && !dep ? `${v(a)} / ${f(la)} = ${v(q1)}` : "…"}</td></tr>
          <tr><td>B = b − (q₁ᵀb) q₁</td><td>{step >= 2 && !dep ? `${v(b)} − ${f(r12)}·q₁ = ${v(B)}` : "…"}</td></tr>
          <tr><td>q₂ = B / ‖B‖</td><td>{step >= 3 && !dep ? v(q2) : "…"}</td></tr>
          <tr><td>R</td><td>{step >= 3 && !dep ? `[${f(la)} ${f(r12)}; 0 ${f(lB)}]` : "…"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {dep
          ? "These vectors are dependent (or one is zero), so after removing the component along a nothing is left: B = 0, and there is no q₂ to find. Gram–Schmidt needs independent columns."
          : step === 3
            ? `${STEPS[3]} In A = QR, the columns of A are a = ${f(la)}q₁ and b = ${f(r12)}q₁ + ${f(lB)}q₂, so R is upper triangular.`
            : STEPS[step]}
      </figcaption>
    </figure>
  );
}
