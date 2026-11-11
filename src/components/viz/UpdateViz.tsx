"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const PH = { fair: 0.5, biased: 0.8 };

/** Update the probability that a coin is biased as heads and tails come in. */
export function UpdateViz() {
  const [prior, setPrior] = useState(0.2);
  const [flips, setFlips] = useState<("H" | "T")[]>([]);
  const post: number[] = [prior];
  for (const x of flips) {
    const p = post[post.length - 1];
    const lb = x === "H" ? PH.biased : 1 - PH.biased, lf = x === "H" ? PH.fair : 1 - PH.fair;
    post.push((p * lb) / (p * lb + (1 - p) * lf));
  }
  const now = post[post.length - 1];
  const f = (x: number) => fmtNum(Number(x.toFixed(3)));
  const w = 520, h = 160, n = Math.max(flips.length, 10);
  const X = (i: number) => 30 + (i * (w - 40)) / n, Y = (p: number) => 10 + (1 - p) * (h - 30);

  return (
    <figure className="viz">
      <p style={{ margin: 0 }}>
        A coin is either fair (heads half the time) or biased (heads 80% of the time). Set how likely you think it is
        biased, then flip.
      </p>
      <div className="viz-sliders">
        <label><span>prior probability it is biased: <span className="mono">{f(prior)}</span></span>
          <input type="range" min={0.01} max={0.99} step={0.01} value={prior} onChange={(e) => { setPrior(Number(e.target.value)); }} /></label>
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => setFlips((s) => [...s, "H"])}>Heads</button>
        <button type="button" className="btn btn-primary" onClick={() => setFlips((s) => [...s, "T"])}>Tails</button>
        <button type="button" className="btn" onClick={() => setFlips([])}>Reset</button>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", display: "block", marginTop: 8 }} role="img"
        aria-label={`After ${flips.length} flips, the probability that the coin is biased is ${f(now)}`}>
        {[0, 0.5, 1].map((p) => (
          <g key={p}>
            <line x1={30} x2={w - 10} y1={Y(p)} y2={Y(p)} style={{ stroke: "var(--border)" }} />
            <text x={4} y={Y(p) + 4} style={{ fontSize: 10, fill: "var(--text-muted)" }}>{p}</text>
          </g>
        ))}
        <polyline points={post.map((p, i) => `${X(i)},${Y(p)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        {post.map((p, i) => <circle key={i} cx={X(i)} cy={Y(p)} r={3} style={{ fill: "var(--accent)" }} />)}
        {flips.map((x, i) => (
          <text key={i} x={X(i + 1)} y={h - 4} textAnchor="middle" className="mono" style={{ fontSize: 10, fill: "var(--text-muted)" }}>{x}</text>
        ))}
      </svg>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>flips so far</td><td className="mono">{flips.length ? flips.join(" ") : "none"}</td></tr>
          <tr><td>probability the coin is biased now</td><td className="mono">{f(now)}</td></tr>
          <tr><td>each heads multiplies the odds by</td><td className="mono">0.8 / 0.5 = 1.6</td></tr>
          <tr><td>each tails multiplies the odds by</td><td className="mono">0.2 / 0.5 = 0.4</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Each result nudges the probability, and yesterday&rsquo;s posterior is today&rsquo;s prior. Two people with different priors who see the same long run of flips end up agreeing.
      </figcaption>
    </figure>
  );
}
