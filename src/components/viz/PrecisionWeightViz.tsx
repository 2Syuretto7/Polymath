"use client";

import { useState } from "react";

export const PRIOR_MEAN = 0;
export const INPUT = 10;

/** The precision-weighted combination of a prediction and a sensory signal. */
export function combine(pp: number, ps: number) {
  const post = (pp * PRIOR_MEAN + ps * INPUT) / (pp + ps);
  return { post, error: INPUT - PRIOR_MEAN, update: post - PRIOR_MEAN, precision: pp + ps };
}

const gauss = (x: number, m: number, prec: number) => Math.sqrt(prec / (2 * Math.PI)) * Math.exp((-prec * (x - m) * (x - m)) / 2);

/** Perception as precision-weighted prediction error minimisation, with Gaussian beliefs. */
export function PrecisionWeightViz() {
  const [pp, setPp] = useState(0.3);
  const [ps, setPs] = useState(0.1);
  const { post, error, update, precision } = combine(pp, ps);
  const X0 = 40, W = 460, Y0 = 190, H = 160;
  const px = (x: number) => X0 + ((x + 6) / 22) * W;
  const ymax = Math.max(gauss(0, 0, Math.max(pp, ps, precision)), 0.01);
  const py = (v: number) => Y0 - (v / ymax) * H;
  const curve = (m: number, prec: number) => {
    let d = "";
    for (let k = 0; k <= 220; k++) { const x = -6 + (k / 220) * 22; d += `${k ? "L" : "M"}${px(x).toFixed(1)},${py(gauss(x, m, prec)).toFixed(1)}`; }
    return d;
  };
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>precision of prediction = {pp.toFixed(1)} <input type="range" min={0.1} max={1} step={0.1} value={pp} onChange={(e) => setPp(Number(e.target.value))} aria-label="prior precision" /></label>
        <label>precision of the senses = {ps.toFixed(1)} <input type="range" min={0.1} max={1} step={0.1} value={ps} onChange={(e) => setPs(Number(e.target.value))} aria-label="sensory precision" /></label>
      </div>
      <svg viewBox="0 0 540 222" role="img" aria-label="Prior prediction, sensory evidence and the resulting percept as probability curves" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0} y1={Y0} x2={X0 + W} y2={Y0} style={{ stroke: "var(--border-strong)" }} />
        {[-5, 0, 5, 10, 15].map((v) => <text key={v} x={px(v)} y={Y0 + 16} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(v).replace("-", "−")}</text>)}
        <path d={curve(PRIOR_MEAN, pp)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <path d={curve(INPUT, ps)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2, strokeDasharray: "5 4" }} />
        <path d={curve(post, precision)} style={{ fill: "none", stroke: "var(--success)", strokeWidth: 2.5 }} />
        <line x1={px(PRIOR_MEAN)} y1={Y0 - H - 8} x2={px(post)} y2={Y0 - H - 8} style={{ stroke: "var(--danger)", strokeWidth: 2 }} />
        <text x={px(PRIOR_MEAN) - 4} y={Y0 - H - 4} textAnchor="end" style={{ fill: "var(--danger)", fontSize: 10 }}>update</text>
        <text x={X0 + W} y={18} textAnchor="end" style={{ fill: "var(--accent)", fontSize: 11 }}>prediction</text>
        <text x={X0 + W} y={32} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>sensory signal</text>
        <text x={X0 + W} y={46} textAnchor="end" style={{ fill: "var(--success)", fontSize: 11 }}>percept</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Prediction {PRIOR_MEAN}, signal {INPUT}: prediction error {error}. Percept {post.toFixed(2)}, so the error moves the estimate by {update.toFixed(2)}, a weight of {(ps / (pp + ps)).toFixed(2)}.
      </p>
      <figcaption className="viz-caption">
        On predictive processing, the brain predicts its input and passes forward only the prediction error. How far the
        error revises the estimate depends on the relative precision, or reliability, of prediction and signal. Precise
        senses dominate; in noise or darkness, expectation wins.
      </figcaption>
    </figure>
  );
}
