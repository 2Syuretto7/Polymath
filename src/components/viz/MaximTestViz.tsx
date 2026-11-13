"use client";

import { useState } from "react";

const MAXIMS = [
  {
    name: "a false promise",
    maxim: "When I need money, I will borrow it and promise to repay, though I know I never will.",
    law: "Everyone in need makes promises they do not intend to keep.",
    conceive: "No. In such a world no one would believe a promise, so promising, and with it my plan, would be impossible. The universal maxim destroys itself.",
    will: null as string | null,
    verdict: "Forbidden: a perfect duty, owed to others, never to make lying promises.",
  },
  {
    name: "neglecting one's talents",
    maxim: "I will let my talents rust and spend my life in idle pleasure.",
    law: "Everyone neglects their talents and lives for pleasure.",
    conceive: "Yes. Such a world could exist, Kant says, as some societies have done.",
    will: "No. As a rational being I necessarily will that my capacities be developed, since they serve all sorts of possible purposes. I cannot will a law that every rational being neglects them.",
    verdict: "Forbidden: an imperfect duty to develop one's talents, which leaves room for choice in how and when.",
  },
  {
    name: "refusing to help",
    maxim: "I will never help others in need, though I ask nothing from them either.",
    law: "No one ever helps anyone in need.",
    conceive: "Yes. The human race could survive like that, perhaps better than with hypocritical kindness.",
    will: "No. I will surely need the love and help of others some day, and by such a law I would rob myself of all hope of it.",
    verdict: "Forbidden: an imperfect duty of beneficence, to make others' ends my own to some extent.",
  },
  {
    name: "daily exercise",
    maxim: "I will exercise every morning to keep healthy.",
    law: "Everyone exercises every morning to keep healthy.",
    conceive: "Yes. Nothing in the practice depends on others not doing it.",
    will: "Yes. There is no conflict in willing it as a law for all.",
    verdict: "Permitted. Most maxims pass; the test is meant to find the ones that fail.",
  },
];
const STEPS = ["the maxim", "universalise it", "can it be conceived as a law?", "can it be willed as a law?", "verdict"];

/** Test maxims with the formula of universal law: can the maxim be conceived, and willed, as a law for everyone? */
export function MaximTestViz() {
  const [i, setI] = useState(0);
  const [s, setS] = useState(0);
  const M = MAXIMS[i];
  const rows: [string, string][] = [
    [STEPS[0], M.maxim],
    [STEPS[1], M.law],
    [STEPS[2], M.conceive],
    [STEPS[3], M.will ?? "No need to ask: it already fails the first test."],
    [STEPS[4], M.verdict],
  ];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Maxim">
        {MAXIMS.map((m, j) => (
          <button key={j} type="button" className={j === i ? "seg is-on" : "seg"} aria-pressed={j === i} onClick={() => { setI(j); setS(0); }}>{m.name}</button>
        ))}
      </div>
      <table className="table" style={{ marginTop: 12 }}>
        <tbody>
          {rows.slice(0, s + 1).map(([k, v], j) => (
            <tr key={k}><td className="mono-meta" style={{ textTransform: "none", width: "30%" }}>{k}</td>
              <td style={{ color: j === 4 ? "var(--accent)" : "var(--text)" }}>{v}</td></tr>
          ))}
        </tbody>
      </table>
      <div className="viz-controls">
        <button type="button" className="btn" disabled={s === 0} onClick={() => setS(s - 1)}>Back</button>
        <button type="button" className="btn btn-primary" disabled={s === 4} onClick={() => setS(s + 1)}>Next test</button>
      </div>
      <figcaption className="viz-caption">
        Act only according to that maxim through which you can at the same time will that it become a universal law. A contradiction in conception marks a perfect duty, allowing no exceptions; a contradiction in the will marks an imperfect duty.
      </figcaption>
    </figure>
  );
}
