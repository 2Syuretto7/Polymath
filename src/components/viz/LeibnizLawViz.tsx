"use client";

import { useState } from "react";

type Prop = { text: string; mind: string; body: string; verdict: "sound" | "flawed" | "disputed"; why: string };

const PROPS: Prop[] = [
  {
    text: "can be doubted to exist",
    mind: "no: I cannot doubt that I think",
    body: "yes: the demon may deceive me",
    verdict: "flawed",
    why: "Being doubted by me is not a property of the thing itself but of my relation to it. Compare: I know who my father is; I do not know who the masked man is; so the masked man is not my father. If my father is the masked man, the conclusion is false. Leibniz's law fails in such contexts.",
  },
  {
    text: "is divisible into parts",
    mind: "no: I cannot think of half a mind",
    body: "yes: any body can be divided",
    verdict: "disputed",
    why: "This is the argument of the Sixth Meditation: willing and understanding are not parts of the mind, but the same mind wills and understands. The property is genuine. But is the mind really indivisible? Split-brain cases suggest that a mind can come apart.",
  },
  {
    text: "can clearly and distinctly be conceived to exist without the other",
    mind: "yes: I conceive myself as thinking with no body",
    body: "yes: bodies can be conceived without minds",
    verdict: "disputed",
    why: "This is Descartes's main argument for the real distinction. Whatever I clearly and distinctly conceive apart, God could make apart, so they are distinct. The crucial step is from what is conceivable to what is possible, and a critic can ask whether Descartes's conception of himself is complete.",
  },
  {
    text: "is extended in length, breadth and depth",
    mind: "no: thought has no size or shape",
    body: "yes: extension is the essence of body",
    verdict: "disputed",
    why: "If the premise is granted, the conclusion follows. But a materialist will say that a thought could be a process in the brain, which is extended. To assert that the mind is unextended may assume what was to be proved.",
  },
];

/** Leibniz's law: if the mind has a property that the body lacks, they are not the same thing. Which properties can do the work? */
export function LeibnizLawViz() {
  const [open, setOpen] = useState<number | null>(null);
  const label = { sound: "sound", flawed: "flawed: the masked man fallacy", disputed: "valid in form, but a premise is disputed" };

  return (
    <figure className="viz">
      <p className="mono-meta" style={{ margin: 0, textTransform: "none" }}>
        Leibniz&rsquo;s law: if x is y, then whatever is true of x is true of y. So a difference in properties proves two things.
      </p>
      <table className="table" style={{ marginTop: 10 }}>
        <thead>
          <tr><th>property</th><th>my mind</th><th>my body</th><th></th></tr>
        </thead>
        <tbody>
          {PROPS.map((p, i) => (
            <tr key={p.text} style={open === i ? { background: "var(--bg-subtle)" } : undefined}>
              <td>{p.text}</td>
              <td>{p.mind}</td>
              <td>{p.body}</td>
              <td>
                <button type="button" style={{ cursor: "pointer", whiteSpace: "nowrap" }} className={open === i ? "viz-chip is-on" : "viz-chip"} aria-pressed={open === i} onClick={() => setOpen(open === i ? null : i)}>test it</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {open !== null && (
        <p className="tagger-why" style={{ marginTop: 12 }}>
          <strong>{label[PROPS[open].verdict]}.</strong> {PROPS[open].why}
        </p>
      )}
      <figcaption className="viz-caption" aria-live="polite">
        {open === null
          ? "Each row offers a difference between mind and body. Test each one: does it really show they are two things?"
          : "An argument from Leibniz's law needs a genuine property, and premises the other side can accept."}
      </figcaption>
    </figure>
  );
}
