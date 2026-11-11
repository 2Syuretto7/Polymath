"use client";

import { useState } from "react";

const CASES: { name: string; maxim: string; universal: string; conceive: string; will: string; verdict: string }[] = [
  {
    name: "the lying promise",
    maxim: "When I need money, I will borrow it and promise to repay, though I know I never will.",
    universal: "Everyone in need makes promises they do not intend to keep.",
    conceive: "No. Nobody would believe such promises, so promising would no longer exist, and the maxim could not even be acted on. Kant calls this a contradiction in conception.",
    will: "The question does not arise.",
    verdict: "Forbidden. A perfect duty: never make a lying promise.",
  },
  {
    name: "neglecting one's talents",
    maxim: "I will let my talents rust and live for comfort and amusement.",
    universal: "Everyone neglects their talents.",
    conceive: "Yes. A world like that could exist, Kant admits.",
    will: "No. As a rational being, Kant says, you necessarily will that your capacities be developed, since they serve all sorts of possible purposes. This is a contradiction in the will.",
    verdict: "Forbidden as a general policy. An imperfect duty: develop some of your talents, with latitude about which and when.",
  },
  {
    name: "refusing to help",
    maxim: "I will never help anyone in need, though I will not harm them either.",
    universal: "Nobody ever helps anyone in need.",
    conceive: "Yes. The human race could survive like this.",
    will: "No. You will certainly need the love and help of others at some time, and by willing this law you would rob yourself of any hope of it.",
    verdict: "Forbidden as a general policy. An imperfect duty: help others, though not every person on every occasion.",
  },
  {
    name: "a puzzling case",
    maxim: "I will play tennis at 10 on Sunday mornings, because then the courts are empty.",
    universal: "Everyone plays tennis at 10 on Sunday mornings, because the courts are empty.",
    conceive: "Apparently not: if everyone did it, the courts would not be empty.",
    will: "The question does not arise.",
    verdict: "The test seems to forbid something obviously harmless. Kant's defenders reply that the maxim must be described more carefully, but the case shows that applying the formula takes judgement.",
  },
];

/** Kant's universal law test applied to his own examples, and one that causes trouble. */
export function MaximTestViz() {
  const [k, setK] = useState(0);
  const [step, setStep] = useState(0);
  const c = CASES[k];
  const rows: [string, string][] = [
    ["Maxim", c.maxim],
    ["As a universal law", c.universal],
    ["Can that world be conceived?", c.conceive],
    ["Can you will it?", c.will],
    ["Verdict", c.verdict],
  ];

  return (
    <figure className="viz">
      <div className="viz-controls">
        {CASES.map((x, i) => (
          <button key={x.name} type="button" className={i === k ? "viz-chip is-on" : "viz-chip"} aria-pressed={i === k} onClick={() => { setK(i); setStep(0); }}>{x.name}</button>
        ))}
      </div>
      <ol style={{ margin: "12px 0 0", paddingLeft: 22, lineHeight: 1.6 }}>
        {rows.slice(0, step + 1).map(([h, t], i) => (
          <li key={h} style={{ marginBottom: 6 }}>
            <span className="mono-meta" style={{ textTransform: "none" }}>{h}: </span>
            <span style={{ fontWeight: i === 4 ? 600 : 400 }}>{t}</span>
          </li>
        ))}
      </ol>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <button type="button" className="btn btn-primary" disabled={step >= rows.length - 1} onClick={() => setStep((s) => s + 1)}>Next step</button>
        <button type="button" className="btn" onClick={() => setStep(0)}>Start again</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        Act only on a maxim that you can at the same time will to become a universal law. Step through the test: first imagine everyone acting on the maxim, then ask whether that world is even possible, and whether you could consistently want it.
      </figcaption>
    </figure>
  );
}
