"use client";

import { useState } from "react";

/** Brier inaccuracy of credences a in A and b in not-A, in the world where A is true and where it is false. */
export const brier = (a: number, b: number) => ({ ifA: (1 - a) ** 2 + b ** 2, ifNotA: a ** 2 + (1 - b) ** 2 });

/** Joyce's accuracy argument in two dimensions: project incoherent credences onto the line a + b = 1. */
export function BrierDominanceViz() {
  const [a, setA] = useState(0.6);
  const [b, setB] = useState(0.6);
  const d = (a + b - 1) / 2;
  const pa = Math.min(1, Math.max(0, a - d)), pb = 1 - pa;
  const now = brier(a, b), proj = brier(pa, pb);
  const coherent = Math.abs(a + b - 1) < 1e-9;
  const S = 200, X0 = 40, Y0 = 230;
  const px = (v: number) => X0 + v * S, py = (v: number) => Y0 - v * S;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>credence in A = {a.toFixed(2)} <input type="range" min={0} max={1} step={0.05} value={a} onChange={(e) => setA(Number(e.target.value))} aria-label="credence in A" /></label>
        <label>credence in not-A = {b.toFixed(2)} <input type="range" min={0} max={1} step={0.05} value={b} onChange={(e) => setB(Number(e.target.value))} aria-label="credence in not-A" /></label>
      </div>
      <svg viewBox="0 0 540 250" overflow="hidden" role="img" aria-label="Credences as a point in the square" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={X0} y={Y0 - S} width={S} height={S} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        <line x1={px(0)} y1={py(1)} x2={px(1)} y2={py(0)} style={{ stroke: "var(--success)", strokeWidth: 2 }} />
        <circle cx={px(1)} cy={py(0)} r={5} style={{ fill: "var(--text)" }} />
        <text x={px(1) + 8} y={py(0) + 4} style={{ fill: "var(--text-muted)", fontSize: 10 }}>world: A true</text>
        <circle cx={px(0)} cy={py(1)} r={5} style={{ fill: "var(--text)" }} />
        <text x={px(0) + 8} y={py(1) - 6} style={{ fill: "var(--text-muted)", fontSize: 10 }}>world: A false</text>
        {!coherent && <circle cx={px(1)} cy={py(0)} r={Math.sqrt(now.ifA) * S} style={{ fill: "none", stroke: "var(--danger)", strokeDasharray: "3 3" }} />}
        {!coherent && <circle cx={px(0)} cy={py(1)} r={Math.sqrt(now.ifNotA) * S} style={{ fill: "none", stroke: "var(--danger)", strokeDasharray: "3 3" }} />}
        {!coherent && <line x1={px(a)} y1={py(b)} x2={px(pa)} y2={py(pb)} style={{ stroke: "var(--text-faint)", strokeDasharray: "2 2" }} />}
        <circle cx={px(a)} cy={py(b)} r={6} style={{ fill: "var(--danger)" }} />
        <circle cx={px(pa)} cy={py(pb)} r={6} style={{ fill: "var(--success)" }} />
        <text x={X0} y={Y0 + 16} style={{ fill: "var(--text-muted)", fontSize: 10 }}>credence in A →</text>
        <text x={290} y={50} style={{ fill: "var(--danger)", fontSize: 12 }}>red: your credences ({a.toFixed(2)}, {b.toFixed(2)})</text>
        <text x={290} y={68} style={{ fill: "var(--text)", fontSize: 12 }}>inaccuracy if A: {now.ifA.toFixed(3)}; if not-A: {now.ifNotA.toFixed(3)}</text>
        <text x={290} y={104} style={{ fill: "var(--success)", fontSize: 12 }}>green: nearest coherent ({pa.toFixed(2)}, {pb.toFixed(2)})</text>
        <text x={290} y={122} style={{ fill: "var(--text)", fontSize: 12 }}>inaccuracy if A: {proj.ifA.toFixed(3)}; if not-A: {proj.ifNotA.toFixed(3)}</text>
        <text x={290} y={160} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{coherent ? "Coherent: nothing beats it in both worlds." : "Green beats red in both worlds."}</text>
      </svg>
      <figcaption className="viz-caption">
        Inaccuracy is measured by the Brier score, the squared distance from the credences to the truth values: (1, 0) if
        A is true and (0, 1) if it is false. Coherent credences lie on the green line. Any point off the line has a
        projection onto it that is closer to both corners, so incoherent credences are less accurate whatever the world
        is like: Joyce&rsquo;s argument for probabilism.
      </figcaption>
    </figure>
  );
}
