"use client";

import { useState } from "react";

/** Updating belief that a coin is biased, one toss at a time, by Bayes' rule. */
export function CoinBayesViz() {
  const [prior, setPrior] = useState(0.2);
  const [bias, setBias] = useState(0.8);
  const [tosses, setTosses] = useState<string[]>([]);
  const post: number[] = [prior];
  for (const t of tosses) {
    const p = post[post.length - 1];
    const lb = t === "H" ? bias : 1 - bias, lf = 0.5;
    post.push((lb * p) / (lb * p + lf * (1 - p)));
  }
  const last = post[post.length - 1];
  const W = 520, H = 180, n = Math.max(post.length, 12);
  const X = (k: number) => 30 + (k / (n - 1)) * (W - 50);
  const Y = (p: number) => 10 + (1 - p) * (H - 30);
  const path = post.map((p, k) => `${k ? "L" : "M"}${X(k).toFixed(1)},${Y(p).toFixed(1)}`).join(" ");
  const toss = (truth: "biased" | "fair") => {
    const ph = truth === "biased" ? bias : 0.5;
    setTosses([...tosses, Math.random() < ph ? "H" : "T"].slice(-40));
  };
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>prior P(biased): <span className="mono">{prior}</span></span>
          <input type="range" min={0.01} max={0.99} step={0.01} value={prior} onChange={(e) => setPrior(Number(e.target.value))} /></label>
        <label><span>biased coin&apos;s P(heads): <span className="mono">{bias}</span></span>
          <input type="range" min={0.55} max={0.95} step={0.05} value={bias} onChange={(e) => setBias(Number(e.target.value))} /></label>
      </div>
      <div className="viz-controls">
        <button type="button" className="btn" onClick={() => setTosses([...tosses, "H"])}>Record heads</button>
        <button type="button" className="btn" onClick={() => setTosses([...tosses, "T"])}>Record tails</button>
        <button type="button" className="btn" onClick={() => toss("biased")}>Toss a biased coin</button>
        <button type="button" className="btn" onClick={() => toss("fair")}>Toss a fair coin</button>
        <button type="button" className="btn" onClick={() => setTosses([])}>Start again</button>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Posterior probability that the coin is biased after each toss" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <line x1={X(0)} y1={Y(0)} x2={X(n - 1)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={Y(0.5)} x2={X(n - 1)} y2={Y(0.5)} style={{ stroke: "var(--text-faint)", strokeDasharray: "3 4" }} />
        <line x1={X(0)} y1={Y(1)} x2={X(n - 1)} y2={Y(1)} style={{ stroke: "var(--border)" }} />
        <path d={path} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        {post.map((p, k) => <circle key={k} cx={X(k)} cy={Y(p)} r={3} style={{ fill: k === 0 ? "var(--text-muted)" : tosses[k - 1] === "H" ? "var(--accent)" : "var(--danger)" }} />)}
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>tosses: {tosses.join(" ") || "none yet"}</p>
      <p className="mono" style={{ margin: "4px 0" }}>P(biased | tosses so far) = {last.toFixed(4)}</p>
      <figcaption className="viz-caption">
        Each toss multiplies the odds that the coin is biased by a likelihood ratio: P(heads | biased) / P(heads | fair) for heads, and the same with tails for tails, and Bayes&apos; rule turns the odds back into a probability. Heads are marked in the main colour and tails in red. The prior matters early on, but enough evidence overwhelms it.
      </figcaption>
    </figure>
  );
}
