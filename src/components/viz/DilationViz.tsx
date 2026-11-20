"use client";

import { useState } from "react";

/** White's dilation case: a fair coin, a proposition p with imprecise credence, and learning 'heads if and only if p'. */
export function DilationViz() {
  const [lo, setLo] = useState(0.2);
  const [hi, setHi] = useState(0.9);
  const [learnt, setLearnt] = useState(false);
  const L = Math.min(lo, hi), H = Math.max(lo, hi);
  const members = Array.from({ length: 9 }, (_, i) => L + ((H - L) * i) / 8);
  const px = (v: number) => 110 + v * 400;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>lowest credence in p = {lo.toFixed(2)} <input type="range" min={0} max={1} step={0.05} value={lo} onChange={(e) => setLo(Number(e.target.value))} aria-label="lower" /></label>
        <label>highest = {hi.toFixed(2)} <input type="range" min={0} max={1} step={0.05} value={hi} onChange={(e) => setHi(Number(e.target.value))} aria-label="upper" /></label>
      </div>
      <div className="viz-controls">
        <button type="button" className={learnt ? "btn btn-ghost" : "btn btn-primary"} onClick={() => setLearnt(!learnt)}>{learnt ? "Before learning" : "Learn: heads if and only if p"}</button>
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="Credences in heads for each member of the credal set" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={px(0)} y1={210} x2={px(1)} y2={210} style={{ stroke: "var(--border-strong)" }} />
        {[0, 0.25, 0.5, 0.75, 1].map((v) => <text key={v} x={px(v)} y={226} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text>)}
        <text x={px(0.5)} y={244} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>credence in heads</text>
        {members.map((m, i) => {
          const y = 30 + i * 20, v = learnt ? m : 0.5;
          return (
            <g key={i}>
              <text x={96} y={y + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>P(p) = {m.toFixed(2)}</text>
              <line x1={px(0.5)} y1={y} x2={px(v)} y2={y} style={{ stroke: "var(--grid-line)" }} />
              <circle cx={px(v)} cy={y} r={5} style={{ fill: learnt ? "var(--danger)" : "var(--accent)" }} />
            </g>
          );
        })}
        <rect x={px(learnt ? L : 0.5) - 2} y={22} width={px(learnt ? H : 0.5) - px(learnt ? L : 0.5) + 4} height={180} rx={4} style={{ fill: "var(--accent-soft)", opacity: 0.5 }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Credence in heads: {learnt ? `the interval [${L.toFixed(2)}, ${H.toFixed(2)}]` : "exactly 0.5 for every member"}. {learnt ? "Learning made it less precise." : ""}
      </p>
      <figcaption className="viz-caption">
        Represent a state of opinion by a set of probability functions, a credal set. Every member gives the fair coin
        probability ½ of heads, and p any value in the interval. Each member conditionalises on &lsquo;heads if and only
        if p&rsquo;, after which its credence in heads equals its credence in p. The sharp ½ dilates into the whole
        interval, though the evidence seems irrelevant to the coin.
      </figcaption>
    </figure>
  );
}
