"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const A = { x: 80, y: 200 }, B = { x: 340, y: 200 };

/** Berkeley's challenge: try to draw a triangle that is no particular kind of triangle. Every picture is particular, but a proof can use a particular one as a sign for all. */
export function AbstractTriangleViz() {
  const [ax, setAx] = useState(150);
  const [h, setH] = useState(120);
  const [proof, setProof] = useState(false);
  const C = { x: ax, y: 200 - h };
  const d = (p: { x: number; y: number }, q: { x: number; y: number }) => Math.hypot(p.x - q.x, p.y - q.y);
  const a = d(B, C), b = d(A, C), c = d(A, B);
  const ang = (o: number, p: number, q: number) => (Math.acos((p * p + q * q - o * o) / (2 * p * q)) * 180) / Math.PI;
  const angA = ang(a, b, c), angB = ang(b, a, c), angC = 180 - angA - angB;
  const near = (u: number, v: number) => Math.abs(u - v) / Math.max(u, v) < 0.015;
  const sides = near(a, b) && near(b, c) ? "equilateral" : near(a, b) || near(b, c) || near(a, c) ? "isosceles" : "scalene";
  const big = Math.max(angA, angB, angC);
  const corner = Math.abs(big - 90) < 1 ? "right-angled" : big > 90 ? "obtuse" : "acute";
  const fm = (z: number) => fmtNum(Number(z.toFixed(1)));

  return (
    <figure className="viz">
      <svg viewBox="0 0 420 230" role="img" aria-label="A triangle whose apex you can move" style={{ width: "100%", maxWidth: 480, display: "block", margin: "0 auto" }}>
        {proof && <line x1={20} y1={C.y} x2={400} y2={C.y} style={{ stroke: "var(--accent)", strokeDasharray: "5 4" }} />}
        <polygon points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`} style={{ fill: "var(--accent-soft)", stroke: "var(--text)", strokeWidth: 2 }} />
        <text x={A.x - 6} y={A.y + 16} style={{ fontSize: 12, fill: "var(--text-muted)" }}>{fm(angA)}°</text>
        <text x={B.x - 14} y={B.y + 16} style={{ fontSize: 12, fill: "var(--text-muted)" }}>{fm(angB)}°</text>
        <text x={C.x} y={C.y - 8} textAnchor="middle" style={{ fontSize: 12, fill: "var(--text-muted)" }}>{fm(angC)}°</text>
      </svg>
      <div className="viz-sliders">
        <label><span>apex across: <span className="mono">{ax}</span></span>
          <input type="range" min={0} max={420} value={ax} onChange={(e) => setAx(Number(e.target.value))} /></label>
        <label><span>apex height: <span className="mono">{h}</span></span>
          <input type="range" min={30} max={190} value={h} onChange={(e) => setH(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>this triangle is</td><td>{sides} and {corner}</td></tr>
          <tr><td>its angles add up to</td><td className="mono">{fm(angA + angB + angC)}°</td></tr>
        </tbody>
      </table>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => setProof(!proof)}>{proof ? "Hide the proof" : "Prove the angle sum from this triangle"}</button>
      </div>
      {proof && (
        <p className="tagger-why" style={{ marginTop: 10 }}>
          Draw the line through the apex parallel to the base. The two angles it makes with the sides equal the base angles, as alternate angles, and the three angles at the apex lie along a straight line, so they sum to 180°. The proof never used that this triangle is {sides} or {corner}: so it holds of every triangle.
        </p>
      )}
      <figcaption className="viz-caption" aria-live="polite">
        Try to make a triangle that is neither equilateral, isosceles nor scalene, and neither acute, right-angled nor obtuse. Every image you can form is of some particular triangle, Berkeley says. A particular idea becomes general by being used to stand for all the others.
      </figcaption>
    </figure>
  );
}
