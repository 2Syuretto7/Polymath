"use client";

import { useState } from "react";

const CLAIMS = [
  "God is all-powerful: God can prevent any evil.",
  "God is all-knowing: God knows about every evil.",
  "God is wholly good: God prevents every evil God can.",
  "Evil exists.",
];

const RESPONSES = [
  {
    name: "No extra premise",
    adds: "",
    text: "If God can prevent every evil, knows about it, and wants to, then there is no evil. But there is. So the four claims cannot all be true: this is the logical problem of evil.",
    natural: "",
    consistent: false,
  },
  {
    name: "The free will defence",
    adds: "A good God may allow evil for the sake of a greater good that could not exist without permitting it, and a world of free creatures who sometimes choose wrongly can be better than a world of puppets.",
    text: "Claim 3 is revised: God prevents every evil God can, unless allowing it serves a greater good. Alvin Plantinga argued in 1974 that this shows the claims are consistent: even an all-powerful God cannot make free creatures who are guaranteed never to do wrong.",
    natural: "Earthquakes and diseases are not chosen by anyone. The defence must say something more about them.",
    consistent: true,
  },
  {
    name: "Soul-making",
    adds: "Suffering and struggle are needed to grow courage, compassion and wisdom; a world without hardship could not produce them.",
    text: "John Hick, following Irenaeus, argued that the world is a place for making souls, not a paradise for pets. Natural evils give the challenges against which character grows.",
    natural: "Much suffering seems to crush rather than build: a fawn dying slowly in a forest fire that no one ever sees.",
    consistent: true,
  },
  {
    name: "Sceptical theism",
    adds: "God may have reasons for permitting evil that lie beyond human understanding.",
    text: "If God exists, we should expect God's reasons often to be hidden from us, as a parent's reasons are hidden from an infant. So our failing to see a reason is little evidence that there is none.",
    natural: "If we cannot judge God's reasons, can we judge that the world shows design, or that God is good?",
    consistent: true,
  },
];

/** The logical problem of evil: four claims that seem inconsistent, and responses that add a premise to reconcile them. */
export function EvilViz() {
  const [r, setR] = useState(0);
  const R = RESPONSES[r];

  return (
    <figure className="viz">
      <ol style={{ margin: "0 0 12px", paddingLeft: 22 }}>
        {CLAIMS.map((c, i) => (
          <li key={c} style={i === 2 && r > 0 ? { textDecoration: "line-through", color: "var(--text-muted)" } : undefined}>{c}</li>
        ))}
        {r > 0 && <li style={{ color: "var(--accent)" }}>{R.adds}</li>}
      </ol>
      <div className="viz-controls" style={{ flexWrap: "wrap" }}>
        {RESPONSES.map((x, i) => (
          <button key={x.name} type="button" className={i === r ? "btn btn-primary" : "btn"} aria-pressed={i === r} onClick={() => setR(i)}>{x.name}</button>
        ))}
      </div>
      <table className="table" style={{ marginTop: 16, marginBottom: 8 }}>
        <tbody>
          <tr><td>Can all the claims be true together?</td><td className={`viz-verdict viz-verdict-${R.consistent ? "info" : "wrong"}`}>{R.consistent ? "Yes, if the new premise is possible" : "No"}</td></tr>
          <tr><td>The idea</td><td>{R.text}</td></tr>
          {R.natural && <tr><td>A hard case</td><td className="viz-verdict viz-verdict-wrong">{R.natural}</td></tr>}
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {r === 0
          ? <>Choose a response to see how it tries to restore consistency, and what it still has to explain.</>
          : <>Showing that the claims are consistent answers the logical problem. The evidential problem remains: does the amount and kind of evil we see make God&rsquo;s existence less likely?</>}
      </figcaption>
    </figure>
  );
}
