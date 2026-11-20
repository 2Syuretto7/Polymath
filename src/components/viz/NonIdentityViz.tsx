"use client";

import { useState } from "react";

/** Verdicts on conceiving a child now (welfare a) rather than later (a different child, welfare b). */
export function verdicts(a: number, b: number) {
  return {
    worseForSomeone: a < 0,
    impersonalGain: b - a,
  };
}

/** The non-identity problem: a choice that makes no one worse off but produces a less good outcome. */
export function NonIdentityViz() {
  const [a, setA] = useState(40);
  const [b, setB] = useState(70);
  const v = verdicts(a, b);
  const py = (w: number) => 130 - w;
  const bar = (x: number, w: number, label: string, col: string) => (
    <g>
      <rect x={x} y={Math.min(py(w), py(0))} width={90} height={Math.abs(w)} style={{ fill: col, opacity: 0.85 }} />
      <text x={x + 45} y={182} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>{label}</text>
      <text x={x + 45} y={w >= 0 ? py(w) - 6 : py(0) - 6} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>{String(w).replace("-", "−")}</text>
    </g>
  );
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>Child conceived now: welfare {String(a).replace("-", "−")} <input type="range" min={-30} max={100} step={10} value={a} onChange={(e) => setA(Number(e.target.value))} aria-label="welfare now" /></label>
        <label>Child conceived later: welfare {b} <input type="range" min={0} max={100} step={10} value={b} onChange={(e) => setB(Number(e.target.value))} aria-label="welfare later" /></label>
      </div>
      <svg viewBox="0 0 540 192" role="img" aria-label="Welfare of the two possible children" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={60} y1={py(0)} x2={400} y2={py(0)} style={{ stroke: "var(--border-strong)" }} />
        <text x={404} y={py(0) + 4} style={{ fill: "var(--text-muted)", fontSize: 10 }}>a life barely worth living</text>
        {bar(110, a, "Conceive now", "var(--danger)")}
        {bar(250, b, "Wait three months", "var(--success)")}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Person-affecting: {v.worseForSomeone ? "the child conceived now is harmed, since their life is not worth living." : "no one is worse off; the child conceived now could not have existed otherwise."} Impersonal: waiting is better by {String(v.impersonalGain).replace("-", "−")}.
      </p>
      <figcaption className="viz-caption">
        A woman can conceive now, when the child will have a condition that lowers their quality of life, or wait and have a
        different, healthier child. If she conceives now, the child has a life worth living and would not exist otherwise,
        so it seems they are not wronged. Yet most people judge that she should wait. Parfit&rsquo;s Same Number Quality
        Claim explains this impersonally.
      </figcaption>
    </figure>
  );
}
