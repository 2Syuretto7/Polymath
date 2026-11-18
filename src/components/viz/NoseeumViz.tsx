"use client";

import { useState } from "react";

/** Rowe's evidential argument as Bayesian updating, with the sceptical theist's variable: would we see God's reasons? */
export function NoseeumViz() {
  const [prior, setPrior] = useState(0.5);
  const [r, setR] = useState(0.5);
  const [n, setN] = useState(1);
  const likeG = Math.pow(1 - r, n);
  const post = (prior * likeG) / (prior * likeG + (1 - prior));
  const W = 400;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>prior for theism = {prior.toFixed(2)} <input type="range" min={1} max={99} value={Math.round(prior * 100)} onChange={(e) => setPrior(Number(e.target.value) / 100)} aria-label="prior" /></label>
        <label>chance we would see God&rsquo;s reason, if there is one = {r.toFixed(2)} <input type="range" min={0} max={99} value={Math.round(r * 100)} onChange={(e) => setR(Number(e.target.value) / 100)} aria-label="visibility" /></label>
        <label>apparently pointless evils = {n} <input type="range" min={1} max={20} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="evils" /></label>
      </div>
      <svg viewBox="0 0 520 80" role="img" aria-label="The posterior probability of theism" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={60} y={14} width={W} height={24} rx={4} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        <rect x={60} y={14} width={W * post} height={24} rx={4} style={{ fill: "var(--accent)" }} />
        <line x1={60 + W * prior} y1={8} x2={60 + W * prior} y2={44} style={{ stroke: "var(--text)", strokeWidth: 2, strokeDasharray: "3 2" }} />
        <text x={56} y={31} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>theism</text>
        <text x={64 + W} y={31} style={{ fill: "var(--text-muted)", fontSize: 11 }}>not</text>
        <text x={260} y={66} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>P(theism | {n} evil{n === 1 ? "" : "s"} with no reason we can see) = {post.toFixed(4)}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13 }}>
        If God exists, each evil has a justifying reason, which we would see with chance {r.toFixed(2)}; so seeing none in {n} case{n === 1 ? "" : "s"} has
        likelihood {likeG < 1e-4 ? likeG.toExponential(2) : likeG.toFixed(4)}. Without God there is no reason to see, so the likelihood is 1. The dashed line marks the prior.
      </p>
      <figcaption className="viz-caption">
        Rowe infers from &lsquo;we see no reason&rsquo; to &lsquo;there is no reason&rsquo;. That inference is strong when
        the chance of seeing a reason is high, and almost worthless when it is low. Sceptical theists argue it is low: a
        God&rsquo;s reasons would often be beyond us, as a toddler cannot see the point of an injection.
      </figcaption>
    </figure>
  );
}
