"use client";

import { useState } from "react";

type Cell = { ans: "same" | "different" | "unknown"; why: string };
type Case = { name: string; story: string; man: Cell; person: Cell; substance: Cell };

const CASES: Case[] = [
  {
    name: "the prince and the cobbler",
    story: "The soul of a prince, carrying the consciousness of the prince's past life, enters the body of a cobbler as soon as the cobbler's soul departs. Compare the man who wakes with the cobbler of yesterday.",
    man: { ans: "same", why: "The man is the living body, the organism. Everyone would call him the same man as the cobbler." },
    person: { ans: "different", why: "He remembers the prince's life and none of the cobbler's, so he is the same person as the prince, not the cobbler." },
    substance: { ans: "unknown", why: "Whether the thinking substance is the same is hidden from us, and for Locke it does not settle the question of the person." },
  },
  {
    name: "the day-man and the night-man",
    story: "One body is shared by two consciousnesses, one awake by day, one by night, neither knowing anything of the other. Compare the day-man and the night-man.",
    man: { ans: "same", why: "One continuing living body, so one man." },
    person: { ans: "different", why: "Locke says they would be as distinct persons as Socrates and Plato, since consciousness does not reach from one to the other." },
    substance: { ans: "unknown", why: "Perhaps one immaterial substance, perhaps not. Locke's point is that it would not matter." },
  },
  {
    name: "the drunkard",
    story: "A man commits a crime while drunk, and afterwards remembers nothing of it. Compare the sober man with the drunk one.",
    man: { ans: "same", why: "The same living body." },
    person: { ans: "different", why: "Strictly, on Locke's view, consciousness does not extend to the act. Yet human courts rightly punish him, since they cannot know that he truly forgets. At the Last Judgement, Locke says, nobody will answer for what they know nothing of." },
    substance: { ans: "same", why: "Presumably the same substance throughout, which shows that sameness of substance is not enough for sameness of person." },
  },
  {
    name: "the flood",
    story: "Suppose someone now remembers, as their own experience, seeing Noah's ark float on the Flood. Compare them with the person who saw it.",
    man: { ans: "different", why: "A body thousands of years later is not the same organism." },
    person: { ans: "same", why: "If the consciousness truly reaches back to the seeing, Locke says, it is the same person, however far back it reaches." },
    substance: { ans: "unknown", why: "Again, the substance may or may not be the same, and it does not matter for the person." },
  },
];

const COLS: { key: "man" | "person" | "substance"; label: string }[] = [
  { key: "man", label: "same man?" },
  { key: "person", label: "same person?" },
  { key: "substance", label: "same substance?" },
];

/** Locke separates three questions of identity: the same man, the same person and the same substance. Reveal his answers for four cases. */
export function ManPersonViz() {
  const [k, setK] = useState(0);
  const [shown, setShown] = useState<Record<string, boolean>>({});
  const c = CASES[k];

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Case">
        {CASES.map((x, i) => (
          <button key={x.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => setK(i)}>{x.name}</button>
        ))}
      </div>
      <p style={{ margin: "12px 0" }}>{c.story}</p>
      <table className="table">
        <tbody>
          {COLS.map((col) => {
            const id = `${k}-${col.key}`, cell = c[col.key];
            return (
              <tr key={col.key}>
                <td style={{ whiteSpace: "nowrap" }}>{col.label}</td>
                <td>
                  {shown[id] ? (
                    <span><strong>{cell.ans}.</strong> {cell.why}</span>
                  ) : (
                    <button type="button" className="viz-chip" style={{ cursor: "pointer" }} onClick={() => setShown({ ...shown, [id]: true })}>think, then reveal Locke&rsquo;s answer</button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        For Locke, a man is a living organism, a person is a thinking being that can consider itself as itself in different
        times and places, and the two can come apart. Personal identity reaches as far as consciousness reaches back.
      </figcaption>
    </figure>
  );
}
