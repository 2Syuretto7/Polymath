"use client";

import { useState } from "react";
import { Arrow } from "./Plot";

type Scenario = {
  name: string;
  story: string;
  outs: string[];
  psych: string;
  body: string;
  verdict: [string, string];
};

const SCENARIOS: Scenario[] = [
  {
    name: "An ordinary night's sleep",
    story: "You fall asleep and wake up in your bed.",
    outs: ["you, next morning"],
    psych: "yes", body: "yes",
    verdict: ["It is you.", "It is you."],
  },
  {
    name: "The teletransporter",
    story: "A scanner records every cell of your body and destroys it; on Mars an exact copy is built from new matter.",
    outs: ["the person on Mars"],
    psych: "yes", body: "no",
    verdict: ["It is you: your memories and character continue.", "It is not you: your body was destroyed. You died, and a replica was made."],
  },
  {
    name: "The branch line",
    story: "The scanner records you but fails to destroy you. The copy is built on Mars, and you walk out of the booth on Earth.",
    outs: ["the person on Earth", "the person on Mars"],
    psych: "both", body: "Earth only",
    verdict: ["Both seem continuous with you, yet surely you are the one on Earth.", "You are the one on Earth; the one on Mars is a replica."],
  },
  {
    name: "Fission",
    story: "Your brain's two halves are transplanted into two different bodies. Each person who wakes up has your memories and character.",
    outs: ["the person on the left", "the person on the right"],
    psych: "both, equally", body: "half each",
    verdict: ["Each has equal claim. Both cannot be you, as they are two people; one alone would be arbitrary.", "Each has half your brain, so neither has a better claim."],
  },
];

/** Parfit's cases: psychological and bodily theories of personal identity, and where they come apart. */
export function SurvivalViz() {
  const [s, setS] = useState(1);
  const S = SCENARIOS[s];
  const two = S.outs.length === 2;

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }}>
        {SCENARIOS.map((x, i) => (
          <button key={x.name} type="button" className={i === s ? "btn btn-primary" : "btn"} aria-pressed={i === s} onClick={() => setS(i)}>{x.name}</button>
        ))}
      </div>
      <p style={{ margin: "16px 0 0" }}>{S.story}</p>
      <svg viewBox="0 0 620 170" role="img" aria-label={`You before, and ${S.outs.join(" and ")} after`}>
        <rect x={40} y={55} width={150} height={56} rx={10} className="viz-cell is-on" />
        <text x={115} y={88} textAnchor="middle" className="viz-label is-on">you, before</text>
        {S.outs.map((o, i) => {
          const y = two ? 15 + i * 85 : 55;
          return (
            <g key={o}>
              <rect x={410} y={y} width={180} height={56} rx={10} className="viz-cell" />
              <text x={500} y={y + 33} textAnchor="middle" className="viz-label">{o}</text>
              <Arrow x1={194} y1={83} x2={404} y2={y + 28} className={s === 2 && i === 1 ? "plot-arrow is-muted" : "plot-arrow"} />
            </g>
          );
        })}
      </svg>
      <table className="table" style={{ marginTop: 8, marginBottom: 8 }}>
        <tbody>
          <tr><td>Psychologically continuous with you?</td><td>{S.psych}</td></tr>
          <tr><td>Same body or brain?</td><td>{S.body}</td></tr>
          <tr><td>Psychological theory says</td><td className="viz-verdict viz-verdict-info">{S.verdict[0]}</td></tr>
          <tr><td>Bodily theory says</td><td className="viz-verdict viz-verdict-info">{S.verdict[1]}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {s === 3
          ? <>Parfit&rsquo;s conclusion: in fission there may be no answer to &ldquo;which one is me?&rdquo;, yet nothing that matters is missing. Each person who wakes up has everything you would want from survival. Perhaps identity is not what matters.</>
          : s === 0
            ? <>In ordinary life every condition comes together, so the theories agree. Try the other cases, where they come apart.</>
            : <>Here the theories disagree. Would you step into the teletransporter to travel to Mars? Your answer reveals which theory you hold.</>}
      </figcaption>
    </figure>
  );
}
