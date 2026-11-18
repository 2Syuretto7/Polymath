"use client";

import { useState } from "react";

/** Hume on miracles as Bayesian reasoning: a tiny prior against the reliability and number of independent witnesses. */
export function MiracleViz() {
  const [lp, setLp] = useState(3);
  const [r, setR] = useState(0.9);
  const [n, setN] = useState(1);
  const [indep, setIndep] = useState(true);
  const p = Math.pow(10, -lp);
  const m = indep ? n : 1;
  const a = p * Math.pow(r, m), b = (1 - p) * Math.pow(1 - r, m);
  const post = a / (a + b);
  const W = 400;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>prior chance of the miracle = 10<sup>−{lp}</sup> <input type="range" min={1} max={12} value={lp} onChange={(e) => setLp(Number(e.target.value))} aria-label="prior" /></label>
        <label>each witness tells the truth with chance {r.toFixed(2)} <input type="range" min={50} max={99} value={Math.round(r * 100)} onChange={(e) => setR(Number(e.target.value) / 100)} aria-label="reliability" /></label>
        <label>witnesses = {n} <input type="range" min={1} max={12} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="witnesses" /></label>
      </div>
      <div className="segmented" role="group" aria-label="independence">
        <button type="button" aria-pressed={indep} className={indep ? "seg is-on" : "seg"} onClick={() => setIndep(true)}>witnesses independent</button>
        <button type="button" aria-pressed={!indep} className={!indep ? "seg is-on" : "seg"} onClick={() => setIndep(false)}>all repeating one source</button>
      </div>
      <svg viewBox="0 0 520 80" role="img" aria-label="The probability of the miracle given the testimony" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={60} y={14} width={W} height={24} rx={4} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        <rect x={60} y={14} width={W * post} height={24} rx={4} style={{ fill: "var(--accent)" }} />
        <line x1={60 + W / 2} y1={8} x2={60 + W / 2} y2={44} style={{ stroke: "var(--text-muted)", strokeDasharray: "3 2" }} />
        <text x={56} y={31} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>miracle</text>
        <text x={64 + W} y={31} style={{ fill: "var(--text-muted)", fontSize: 11 }}>not</text>
        <text x={260} y={66} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>P(miracle | testimony) = {post < 1e-4 ? post.toExponential(2) : post.toFixed(4)}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13 }}>
        {post > 0.5 ? "The testimony makes the miracle more likely than not: its falsehood would be the greater wonder." : "The falsehood of the testimony remains more probable than the miracle. On Hume’s maxim, do not believe it."}
        {!indep && n > 1 ? " Repetition of one source adds nothing: it counts as a single witness." : ""}
      </p>
      <figcaption className="viz-caption">
        Hume: no testimony suffices to establish a miracle unless its falsehood would be more miraculous than the fact it
        reports. In Bayesian terms, the prior must be overcome by the likelihood ratio of the testimony, which grows
        quickly with independent witnesses, as Babbage and others pointed out, but not at all with dependent ones.
      </figcaption>
    </figure>
  );
}
