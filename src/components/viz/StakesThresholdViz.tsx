"use client";

import { useState } from "react";

/** Acting on p is better in expectation exactly when credence exceeds cost / (cost + gain). */
export const threshold = (cost: number, gain: number) => cost / (cost + gain);

/** The bank case: the same evidence, different stakes. */
export function StakesThresholdViz() {
  const [cred, setCred] = useState(0.95);
  const [cost, setCost] = useState(1);
  const gain = 1;
  const t = threshold(cost, gain);
  const act = cred > t;
  const px = (v: number) => 40 + v * 460;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>credence that the bank opens Saturday = {cred.toFixed(2)} <input type="range" min={0.5} max={0.99} step={0.01} value={cred} onChange={(e) => setCred(Number(e.target.value))} aria-label="credence" /></label>
        <label>cost if wrong = {cost} <input type="range" min={1} max={50} step={1} value={cost} onChange={(e) => setCost(Number(e.target.value))} aria-label="cost" /></label>
      </div>
      <svg viewBox="0 0 540 150" role="img" aria-label="Credence against the threshold for acting" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={px(t)} y={50} width={px(1) - px(t)} height={30} style={{ fill: "var(--success-soft)" }} />
        <rect x={px(0)} y={50} width={px(t) - px(0)} height={30} style={{ fill: "var(--danger-soft)" }} />
        <line x1={px(t)} y1={40} x2={px(t)} y2={90} style={{ stroke: "var(--text)", strokeWidth: 2 }} />
        <text x={px(t)} y={34} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>threshold {t.toFixed(3)}</text>
        <circle cx={px(cred)} cy={65} r={7} style={{ fill: act ? "var(--success)" : "var(--danger)" }} />
        {[0, 0.25, 0.5, 0.75, 1].map((v) => <text key={v} x={px(v)} y={106} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text>)}
        <text x={px(0.5)} y={124} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>credence; green region: waiting until Saturday maximises expected value</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Gain from waiting 1, cost if wrong {cost}. {act ? "Rational to act on p: wait until Saturday." : "Not rational to act on p: deposit today and check."}
      </p>
      <figcaption className="viz-caption">
        Hannah remembers the bank opening on a Saturday. When little hangs on it, she can rely on that memory; when a
        missed deposit would be ruinous, the same evidence no longer makes waiting rational. If knowledge is what one may
        act on, then whether she knows seems to depend on the stakes.
      </figcaption>
    </figure>
  );
}
