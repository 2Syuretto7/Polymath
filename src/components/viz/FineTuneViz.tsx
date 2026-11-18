"use client";

import { useState } from "react";

const Q = 0.5;

/** Fine-tuning as Bayesian confirmation: a tiny chance of life-permitting constants, against design and against a multiverse. */
export function FineTuneViz() {
  const [prior, setPrior] = useState(0.5);
  const [k, setK] = useState(1);
  const [m, setM] = useState(0);
  const eps = Math.pow(10, -k);
  const N = Math.pow(10, m);
  const chance = m === 0 ? eps : 1 - Math.pow(1 - eps, N);
  const post = (prior * Q) / (prior * Q + (1 - prior) * chance);
  const W = 400;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>prior for design = {prior.toFixed(2)} <input type="range" min={1} max={99} value={Math.round(prior * 100)} onChange={(e) => setPrior(Number(e.target.value) / 100)} aria-label="prior" /></label>
        <label>chance one universe permits life = 10<sup>−{k}</sup> <input type="range" min={1} max={12} value={k} onChange={(e) => setK(Number(e.target.value))} aria-label="chance" /></label>
        <label>universes = 10<sup>{m}</sup> <input type="range" min={0} max={14} value={m} onChange={(e) => setM(Number(e.target.value))} aria-label="universes" /></label>
      </div>
      <svg viewBox="0 0 520 70" role="img" aria-label="Posterior probability of design" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={60} y={20} width={W} height={24} rx={4} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        <rect x={60} y={20} width={W * post} height={24} rx={4} style={{ fill: "var(--accent)" }} />
        <text x={56} y={37} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>design</text>
        <text x={60 + W + 4} y={37} style={{ fill: "var(--text-muted)", fontSize: 11 }}>chance</text>
        <text x={260} y={62} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>P(design | some universe permits life) = {post.toFixed(4)}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13 }}>
        Likelihoods: on design, {Q}; on chance, {chance < 1e-4 ? chance.toExponential(2) : chance.toFixed(4)}{m > 0 ? `, the chance that at least one of 10${String(m).split("").map((c) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(c)]).join("")} universes permits life` : ""}. Bayes: {prior.toFixed(2)} × {Q} ÷ ({prior.toFixed(2)} × {Q} + {(1 - prior).toFixed(2)} × {chance < 1e-4 ? chance.toExponential(2) : chance.toFixed(4)}).
      </p>
      <figcaption className="viz-caption">
        With one universe, a tiny chance of life-permitting constants strongly confirms design. With enough universes,
        some universe almost surely permits life, and the evidence that some universe does no longer favours design. Critics
        of the multiverse reply that our evidence is that this universe permits life: the inverse gambler&rsquo;s fallacy.
      </figcaption>
    </figure>
  );
}
