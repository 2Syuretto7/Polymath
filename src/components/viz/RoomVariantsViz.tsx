"use client";

import { useState } from "react";

const V = [
  {
    name: "the original room",
    setup: "Searle, who knows no Chinese, sits in a room with a rulebook in English for manipulating Chinese symbols. Questions come in; following the rules, he passes out fluent answers.",
    claim: "Searle: I understand no Chinese, and I am doing everything the computer does. So running the program is not enough for understanding.",
    reply: "Critics: the question is not whether Searle understands, but whether anything does.",
  },
  {
    name: "the systems reply",
    setup: "Understanding belongs not to the man but to the whole system: man, rulebook, paper and pencils.",
    claim: "Searle: let the man memorise the rulebook and work in his head. Now he is the whole system, and still understands nothing.",
    reply: "Critics: a second system may be running in the same head, as one computer can run another, and its understanding need not be his.",
  },
  {
    name: "the robot reply",
    setup: "Put the program in a robot with cameras and arms, so that the symbols are caused by things in the world and cause actions on them.",
    claim: "Searle: the camera input arrives as more symbols. The man still just shuffles them, without knowing what they are about.",
    reply: "Critics: meaning may consist in exactly these causal links to the world, so the robot’s symbols would mean something.",
  },
  {
    name: "the brain simulator reply",
    setup: "Let the program simulate, neuron by neuron, the brain of a native Chinese speaker.",
    claim: "Searle: have the man operate water pipes that mimic the neurons. He still understands nothing; simulating the brain’s form is not having its causal powers.",
    reply: "Critics: if the simulation preserves all the brain’s functional organisation, denying it understanding looks like prejudice for biology.",
  },
];

/** The Chinese room and three famous replies, with Searle's answer to each. */
export function RoomVariantsViz() {
  const [i, setI] = useState(0);
  const [verdict, setVerdict] = useState<(string | null)[]>([null, null, null, null]);
  const v = V[i];
  const vote = (x: string) => setVerdict(verdict.map((y, j) => (j === i ? x : y)));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Version">
        {V.map((x, j) => <button key={x.name} type="button" aria-pressed={i === j} className={i === j ? "seg is-on" : "seg"} onClick={() => setI(j)}>{x.name}</button>)}
      </div>
      <p style={{ margin: "10px 0 6px" }}>{v.setup}</p>
      <p style={{ margin: "6px 0", fontSize: 14 }}><strong>{v.claim}</strong></p>
      <p style={{ margin: "6px 0", fontSize: 14, color: "var(--text-muted)" }}>{v.reply}</p>
      <div className="viz-controls">
        <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Does anything here understand Chinese?</span>
        {["yes", "no", "unsure"].map((x) => <button key={x} type="button" aria-pressed={verdict[i] === x} className={verdict[i] === x ? "viz-chip is-on" : "viz-chip"} onClick={() => vote(x)}>{x}</button>)}
      </div>
      <p className="mono" style={{ margin: "6px 0", fontSize: 13 }}>
        your verdicts: {V.map((x, j) => `${x.name}: ${verdict[j] ?? "–"}`).join("; ")}
      </p>
      <figcaption className="viz-caption">
        Searle&rsquo;s point is that symbol manipulation is syntax, and syntax alone does not give meaning. If your verdict changes from one version to the next, ask what was added: a larger system, links to the world, or the brain&rsquo;s organisation. That is where you think meaning comes from.
      </figcaption>
    </figure>
  );
}
