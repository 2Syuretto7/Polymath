"use client";

import { useState } from "react";

const STEPS = [
  "If I know that I am sitting by the fire, then I know that I am not dreaming that I am.",
  "I do not know that I am not dreaming.",
  "So I do not know that I am sitting by the fire.",
];

const RESPONSES = [
  {
    label: "Accept everything",
    who: "The sceptic",
    rejects: -1,
    text: "The argument is valid and both premises seem true, so the conclusion stands: you do not know even the most ordinary things about the world around you.",
    cost: "The same argument works for almost any belief about the world, so the cost is nearly all of your knowledge.",
  },
  {
    label: "Reject premise 1",
    who: "Fred Dretske, Robert Nozick",
    rejects: 0,
    text: "Knowing something does not require knowing everything that obviously follows from it. You can know you are by the fire without knowing you are not dreaming.",
    cost: "You must then accept 'abominable conjunctions': I know I am by the fire, and I know that being by the fire means I am not dreaming in bed, but I do not know I am not dreaming in bed.",
  },
  {
    label: "Reject premise 2",
    who: "G. E. Moore",
    rejects: 1,
    text: "I am more certain that I am sitting here than I could ever be of a philosophical premise. So run the argument backwards: I know I am by the fire, so by premise 1 I know I am not dreaming.",
    cost: "It can seem to beg the question: the sceptic asked how you know, and the answer is only that you do.",
  },
  {
    label: "Say 'know' shifts",
    who: "Contextualists, such as Keith DeRose",
    rejects: -2,
    text: "Whether 'I know' is true depends on the standards in play. In ordinary talk you know you are by the fire; once dreaming is raised, the standards rise and you do not. Both claims can be true in their own contexts.",
    cost: "It concedes that in the philosophy seminar the sceptic speaks truly, and some find that 'know' does not really behave this way.",
  },
];

/** The dream argument as a valid argument, and the main ways of escaping its conclusion. */
export function DreamArgumentViz() {
  const [k, setK] = useState(0);
  const r = RESPONSES[k];

  return (
    <figure className="viz">
      <ol style={{ margin: "0 0 14px", paddingLeft: 22 }}>
        {STEPS.map((s, i) => {
          const struck = r.rejects === i;
          const conclusionKept = i === 2 && r.rejects !== -1;
          return (
            <li key={i} style={{ margin: "6px 0", opacity: struck || conclusionKept ? 0.55 : 1 }}>
              <span style={{ textDecoration: struck ? "line-through" : "none" }}>{s}</span>
              {struck && <span className="viz-verdict viz-verdict-wrong"> rejected</span>}
              {i === 2 && r.rejects >= 0 && <span className="viz-verdict viz-verdict-info"> no longer follows</span>}
              {i === 2 && r.rejects === -2 && <span className="viz-verdict viz-verdict-info"> true only in demanding contexts</span>}
            </li>
          );
        })}
      </ol>
      <div className="viz-controls" style={{ marginTop: 0 }}>
        {RESPONSES.map((x, i) => (
          <button key={x.label} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => setK(i)}>{x.label}</button>
        ))}
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        <strong>{r.who}.</strong> {r.text} <em>The price:</em> {r.cost}
      </figcaption>
    </figure>
  );
}
