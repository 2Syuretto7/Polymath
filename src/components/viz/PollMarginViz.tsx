"use client";

import { useMemo, useState } from "react";
import { seededRng } from "./seededRng";

const POLLS = 40;

/** Opinion polls: 95% intervals from repeated samples, and how often they contain the true proportion. */
export function PollMarginViz() {
  const [p, setP] = useState(0.42);
  const [n, setN] = useState(400);
  const [seed, setSeed] = useState(3);
  const polls = useMemo(() => {
    const r = seededRng(seed * 7919 + n);
    return Array.from({ length: POLLS }, () => {
      let k = 0;
      for (let i = 0; i < n; i++) if (r() < p) k++;
      const ph = k / n, m = 1.96 * Math.sqrt((ph * (1 - ph)) / n);
      return [ph, m];
    });
  }, [p, n, seed]);
  const hits = polls.filter(([ph, m]) => Math.abs(ph - p) <= m).length;
  const W = 520, H = 40 + POLLS * 8, pad = 30;
  const X = (v: number) => pad + v * (W - 2 * pad);
  const moe = 1.96 * Math.sqrt((p * (1 - p)) / n);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>true support p: <span className="mono">{p.toFixed(2)}</span></span>
          <input type="range" min={0.05} max={0.95} step={0.01} value={p} onChange={(e) => setP(Number(e.target.value))} /></label>
        <label><span>people asked in each poll n: <span className="mono">{n}</span></span>
          <input type="range" min={50} max={3000} step={50} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => setSeed(1 + Math.floor(Math.random() * 1e6))}>Run 40 new polls</button>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Forty poll estimates with 95 percent intervals" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <line x1={X(p)} y1={10} x2={X(p)} y2={H - 22} style={{ stroke: "var(--text)", strokeWidth: 1.5 }} />
        {polls.map(([ph, m], i) => {
          const ok = Math.abs(ph - p) <= m, y = 16 + i * 8;
          return (
            <g key={i}>
              <line x1={X(Math.max(0, ph - m))} y1={y} x2={X(Math.min(1, ph + m))} y2={y} style={{ stroke: ok ? "var(--accent)" : "var(--danger)", strokeWidth: 2.5 }} />
              <circle cx={X(ph)} cy={y} r={2.5} style={{ fill: ok ? "var(--accent)" : "var(--danger)" }} />
            </g>
          );
        })}
        {[0, 0.25, 0.5, 0.75, 1].map((t) => <text key={t} x={X(t)} y={H - 6} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{t}</text>)}
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        margin of error 1.96√(p(1 − p)/n) ≈ ±{(moe * 100).toFixed(1)} points; intervals containing the true p: {hits} of {POLLS}
      </p>
      <figcaption className="viz-caption">
        Each line is one poll: its estimate p̂ and the interval p̂ ± 1.96√(p̂(1 − p̂)/n). By the central limit theorem about 95% of such intervals contain the true proportion, the vertical line; the ones that miss are marked differently. Quadrupling n halves the margin.
      </figcaption>
    </figure>
  );
}
