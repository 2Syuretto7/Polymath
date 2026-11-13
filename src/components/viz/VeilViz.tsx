"use client";

import { useState } from "react";

const SOC: { name: string; inc: number[] }[] = [
  { name: "A", inc: [10, 10, 10, 10] },
  { name: "B", inc: [6, 14, 20, 40] },
  { name: "C", inc: [12, 16, 20, 24] },
  { name: "D", inc: [2, 20, 40, 70] },
];
const RULES: { name: string; score: (v: number[]) => number; note: string }[] = [
  { name: "maximin", score: (v) => Math.min(...v), note: "Choose the society whose worst position is best. Rawls argued that parties behind the veil would reason this way." },
  { name: "average income", score: (v) => v.reduce((a, b) => a + b, 0) / v.length, note: "Treat each position as equally likely and maximise expected income, as John Harsanyi argued." },
  { name: "expected log-utility", score: (v) => v.reduce((a, b) => a + Math.log(b), 0) / v.length, note: "Equally likely positions, with income worth less the more you have." },
  { name: "strongly risk-averse", score: (v) => v.reduce((a, b) => a - 1 / b, 0) / v.length, note: "Expected utility with utility −1/income, which punishes low incomes very heavily." },
];

/** Choosing a society behind the veil of ignorance: different decision rules pick different societies. */
export function VeilViz() {
  const [ri, setRi] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [draw, setDraw] = useState(0);
  const R = RULES[ri];
  const scores = SOC.map((s) => R.score(s.inc));
  const best = scores.indexOf(Math.max(...scores));
  const W = 520, H = 200, bw = 22, gx = (s: number, g: number) => 40 + s * 120 + g * (bw + 3), y = (v: number) => H - 24 - (v / 70) * (H - 40);
  const order = [2, 0, 3, 1];
  const place = order[draw % 4];
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>Four societies, each with four equal-sized groups. You will live in one of the four groups, but you do not know which.</p>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Incomes of four groups in four societies" style={{ width: "100%", display: "block" }}>
        {[0, 20, 40, 60].map((v) => <g key={v}><line x1={30} y1={y(v)} x2={W - 10} y2={y(v)} style={{ stroke: "var(--border)" }} /><text x={26} y={y(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text></g>)}
        {SOC.map((s, si) => (
          <g key={s.name}>
            {s.inc.map((v, g) => {
              const you = pick === si && draw > 0 && g === place;
              return <rect key={g} x={gx(si, g)} y={y(v)} width={bw} height={y(0) - y(v)} style={{ fill: si === best ? "var(--accent)" : "var(--text-faint)", fillOpacity: you ? 1 : 0.55, stroke: you ? "var(--text)" : "none", strokeWidth: 2 }} />;
            })}
            <text x={gx(si, 0) + 2 * (bw + 3) - 2} y={H - 6} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: si === best ? 700 : 400 }}>society {s.name}</text>
          </g>
        ))}
      </svg>
      <div className="segmented" role="group" aria-label="Decision rule" style={{ marginTop: 6 }}>
        {RULES.map((r, i) => <button key={r.name} type="button" aria-pressed={ri === i} className={ri === i ? "seg is-on" : "seg"} onClick={() => setRi(i)}>{r.name}</button>)}
      </div>
      <p style={{ margin: "8px 0", fontSize: 14 }}>{R.note} This rule chooses <strong>society {SOC[best].name}</strong>.</p>
      <div className="viz-controls">
        {SOC.map((s, i) => <button key={s.name} type="button" aria-pressed={pick === i} className={pick === i ? "viz-chip is-on" : "viz-chip"} onClick={() => { setPick(i); setDraw(0); }}>choose {s.name}</button>)}
        <button type="button" className="btn btn-primary" disabled={pick === null} onClick={() => setDraw(draw + 1)}>Lift the veil</button>
      </div>
      {pick !== null && draw > 0 && (
        <p className="mono" style={{ margin: "8px 0 4px" }}>You are in group {place + 1} of society {SOC[pick].name}, with income {SOC[pick].inc[place]}. Lift again to see another possible life.</p>
      )}
      <figcaption className="viz-caption">
        Bars show the income of each group; the chosen society under the current rule is shaded more strongly. Which rule
        would you use if the choice were irreversible and you knew nothing of the odds? Rawls thought that question favours
        maximin; critics reply that it is too cautious.
      </figcaption>
    </figure>
  );
}
