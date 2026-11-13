"use client";

import { useState } from "react";

/** The base rate objection to the no-miracles argument: success is evidence of truth only relative to how many candidate theories are true. */
export function MiracleBaseRateViz() {
  const [base, setBase] = useState(0.1);
  const [hit, setHit] = useState(0.95);
  const [luck, setLuck] = useState(0.05);
  const pS = base * hit + (1 - base) * luck;
  const post = pS > 0 ? (base * hit) / pS : 0;
  const n = 400;
  const nTrue = Math.round(base * n);
  const cols = 25;
  const succ = (i: number) => (i < nTrue ? i < Math.round(nTrue * hit) : i - nTrue < Math.round((n - nTrue) * luck));
  const nSuccTrue = Math.round(nTrue * hit), nSuccFalse = Math.round((n - nTrue) * luck);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>share of candidate theories that are approximately true: <span className="mono">{base.toFixed(2)}</span></span>
          <input type="range" min={0.01} max={0.9} step={0.01} value={base} onChange={(e) => setBase(Number(e.target.value))} /></label>
        <label><span>chance a true theory succeeds: <span className="mono">{hit.toFixed(2)}</span></span>
          <input type="range" min={0.5} max={1} step={0.01} value={hit} onChange={(e) => setHit(Number(e.target.value))} /></label>
        <label><span>chance a false theory succeeds anyway: <span className="mono">{luck.toFixed(2)}</span></span>
          <input type="range" min={0} max={0.5} step={0.01} value={luck} onChange={(e) => setLuck(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 176" role="img" aria-label="Four hundred candidate theories, true or false, successful or not" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {Array.from({ length: n }, (_, i) => {
          const x = 10 + (i % cols) * 20.4, y = 8 + Math.floor(i / cols) * 10.4;
          const t = i < nTrue;
          return (
            <rect key={i} x={x} y={y} width={18} height={8} rx={2}
              style={{ fill: succ(i) ? (t ? "var(--accent)" : "var(--text-faint)") : "var(--bg)", stroke: t ? "var(--accent)" : "var(--border)" }} />
          );
        })}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>successful and true: {nSuccTrue}, successful but false: {nSuccFalse}</div>
        <div style={{ fontWeight: 700 }}>P(approximately true | successful) = {post.toFixed(3)}</div>
      </div>
      <figcaption className="viz-caption">
        Each block is a candidate theory; outlined blocks are approximately true, filled blocks are successful. Even if false
        theories rarely succeed, when true ones are rare among the candidates many successful theories may still be false.
        The no-miracles argument needs a base rate it does not supply, as P. D. Magnus and Craig Callender argued.
      </figcaption>
    </figure>
  );
}
