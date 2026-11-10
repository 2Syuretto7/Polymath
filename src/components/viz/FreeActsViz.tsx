"use client";

import { useState } from "react";

const ACCOUNTS = [
  { name: "Doing what you want, unforced", who: "classical compatibilism (Hobbes, Hume)" },
  { name: "Acting on a desire you endorse", who: "hierarchical compatibilism (Frankfurt)" },
  { name: "Choosing in a way not fixed in advance", who: "libertarianism" },
] as const;

type Case = { text: string; common: boolean; classical: boolean; hierarchical: boolean; undetermined: boolean; note: [string, string, string] };

const CASES: Case[] = [
  {
    text: "Meera chooses tea over coffee because she prefers tea.",
    common: true, classical: true, hierarchical: true, undetermined: true,
    note: ["She does what she wants.", "She is happy to be someone who prefers tea.", ""],
  },
  {
    text: "After months of thought, Arjun decides to become a doctor.",
    common: true, classical: true, hierarchical: true, undetermined: true,
    note: ["He does what he wants.", "He endorses the desire on reflection.", ""],
  },
  {
    text: "Someone pushes Kabir into a pool.",
    common: false, classical: false, hierarchical: false, undetermined: false,
    note: ["Falling is not something he wanted or did.", "No desire of his is acted on at all.", "It is not a choice of his at all."],
  },
  {
    text: "A kleptomaniac steals, though she wishes she did not have the urge.",
    common: false, classical: true, hierarchical: false, undetermined: false,
    note: ["She does what she wants, and no one forces her: so, oddly, she counts as free.", "She does not endorse the urge, so it is not truly her will.", "A compulsion is not an open choice."],
  },
  {
    text: "A hypnotist plants in Dev a desire to open the window, and a liking for that desire.",
    common: false, classical: true, hierarchical: true, undetermined: false,
    note: ["He does what he wants: so he counts as free.", "He even endorses the desire, but the endorsement was planted too.", "The outcome was fixed by the hypnotist."],
  },
];

/** Three accounts of free action tested against cases, with and without determinism. */
export function FreeActsViz() {
  const [a, setA] = useState(0);
  const [det, setDet] = useState(true);
  const says = (c: Case) => (a === 0 ? c.classical : a === 1 ? c.hierarchical : det ? false : c.undetermined);
  const why = (c: Case) =>
    a < 2 ? c.note[a] : det ? "If determinism is true, every choice was fixed before you were born." : c.note[2] || "The choice was open until she or he made it.";
  const clashes = CASES.filter((c) => says(c) !== c.common).length;

  return (
    <figure className="viz">
      <div className="choices" role="radiogroup" aria-label="Account of free action">
        {ACCOUNTS.map((x, i) => (
          <label key={x.name} className={`choice ${i === a ? "is-picked" : ""}`}>
            <input type="radio" name="free-account" checked={i === a} onChange={() => setA(i)} />
            <span><strong>{x.name}</strong> <span className="viz-verdict viz-verdict-right">({x.who})</span></span>
          </label>
        ))}
      </div>
      <div className="viz-controls">
        <button type="button" className={det ? "btn btn-primary" : "btn"} aria-pressed={det} onClick={() => setDet(!det)}>
          Determinism is {det ? "true" : "false"}
        </button>
      </div>
      <table className="table" style={{ marginTop: 16, marginBottom: 8 }}>
        <thead><tr><th>Case</th><th>Most people say</th><th>This account says</th></tr></thead>
        <tbody>
          {CASES.map((c) => {
            const s = says(c);
            return (
              <tr key={c.text}>
                <td>{c.text}</td>
                <td className="viz-verdict viz-verdict-right">{c.common ? "free" : "not free"}</td>
                <td className={`viz-verdict viz-verdict-${s === c.common ? "right" : "wrong"}`}><strong>{s ? "free" : "not free"}.</strong> {why(c)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        This account disagrees with common opinion on {clashes} of {CASES.length} cases.{" "}
        {a < 2
          ? <>Flip determinism on and off: the verdicts do not move. That is what makes the account compatibilist.</>
          : det
            ? <>If determinism is true, the libertarian must say no one has ever acted freely. Turn it off to see the account at its best.</>
            : <>Without determinism the libertarian matches common opinion here. The hard question is whether an undetermined choice is any more yours than a random one.</>}
      </figcaption>
    </figure>
  );
}
