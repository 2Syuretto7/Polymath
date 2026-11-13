"use client";

import { useState } from "react";

const PRESETS = [
  { label: "risky prediction", p: 0.2, a: 0.95, b: 0.05 },
  { label: "expected anyway", p: 0.2, a: 0.95, b: 0.85 },
  { label: "old evidence", p: 0.2, a: 1, b: 1 },
  { label: "against H", p: 0.6, a: 0.2, b: 0.7 },
];

/** Bayesian confirmation: E confirms H when it raises H’s probability; three measures of how much. */
export function ConfirmMeasureViz() {
  const [p, setP] = useState(0.2);
  const [a, setA] = useState(0.95);
  const [b, setB] = useState(0.05);
  const pe = p * a + (1 - p) * b;
  const post = pe > 0 ? (p * a) / pe : p;
  const d = post - p;
  const r = post > 0 ? Math.log(post / p) : -Infinity;
  const l = a > 0 && b > 0 ? Math.log(a / b) : a > 0 ? Infinity : b > 0 ? -Infinity : 0;
  const verdict = Math.abs(d) < 5e-4 ? "E is irrelevant to H: no confirmation" : d > 0 ? "E confirms H" : "E disconfirms H";
  const W = 520, X = (v: number) => 120 + v * 380;
  const f = (v: number) => (Number.isFinite(v) ? (v >= 0 ? "+" : "−") + Math.abs(v).toFixed(3) : v > 0 ? "+∞" : "−∞");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Preset">
        {PRESETS.map((q) => (
          <button key={q.label} type="button" className="seg" onClick={() => { setP(q.p); setA(q.a); setB(q.b); }}>{q.label}</button>
        ))}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>prior P(H): <span className="mono">{p.toFixed(2)}</span></span>
          <input type="range" min={0.01} max={0.99} step={0.01} value={p} onChange={(e) => setP(Number(e.target.value))} /></label>
        <label><span>P(E | H): <span className="mono">{a.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.01} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>P(E | not H): <span className="mono">{b.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.01} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} 80`} role="img" aria-label="Prior and posterior probability of H" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[["prior P(H)", p, 10], ["posterior P(H | E)", post, 44]].map(([lab, v, y]) => (
          <g key={lab as string}>
            <text x={4} y={(y as number) + 15} style={{ fill: "var(--text)", fontSize: 12 }}>{lab as string}</text>
            <rect x={X(0)} y={y as number} width={380} height={22} rx={4} style={{ fill: "var(--bg)", stroke: "var(--border)" }} />
            <rect x={X(0)} y={y as number} width={(v as number) * 380} height={22} rx={4} style={{ fill: lab === "prior P(H)" ? "var(--text-faint)" : "var(--accent)" }} />
            <text x={X(v as number) + 4 > 470 ? X(v as number) - 40 : X(v as number) + 4} y={(y as number) + 15} style={{ fill: "var(--text)", fontSize: 12 }}>{(v as number).toFixed(3)}</text>
          </g>
        ))}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>P(E) = {pe.toFixed(3)}{pe === 0 ? ", so E cannot be observed at all" : ""}</div>
        <div>difference d = P(H | E) − P(H) = {f(d)}</div>
        <div>log ratio r = log [P(H | E) / P(H)] = {f(r)}</div>
        <div>log likelihood ratio l = log [P(E | H) / P(E | not H)] = {f(l)}</div>
        <div style={{ fontWeight: 700 }}>{verdict}</div>
      </div>
      <figcaption className="viz-caption">
        The three measures always agree on whether E confirms H, since each is positive exactly when P(E | H) &gt; P(E | not H).
        They disagree about how much. Evidence that was expected anyway confirms little, and evidence already known, with
        probability 1, confirms nothing: Glymour&rsquo;s problem of old evidence.
      </figcaption>
    </figure>
  );
}
