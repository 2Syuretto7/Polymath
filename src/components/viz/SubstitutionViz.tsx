"use client";

import { useState } from "react";

type Pair = { a: string; b: string; ref: string; senseA: string; senseB: string };
const PAIRS: Pair[] = [
  { a: "Hesperus", b: "Phosphorus", ref: "the planet Venus", senseA: "the bright body seen in the evening", senseB: "the bright body seen in the morning" },
  { a: "Mark Twain", b: "Samuel Clemens", ref: "one American writer", senseA: "the author of Huckleberry Finn", senseB: "the man born in Florida, Missouri, in 1835" },
  { a: "the author of Gitanjali", b: "the composer of Jana Gana Mana", ref: "Rabindranath Tagore", senseA: "whoever wrote Gitanjali", senseB: "whoever composed the national anthem" },
];
type Frame = { name: string; make: (x: string, y: string) => [string, string]; truth: [boolean, boolean]; kind: string; note: string };
const FRAMES: Frame[] = [
  { name: "simple predication", make: (x) => [`${x} is visible from Earth.`, ""], truth: [true, true], kind: "extensional", note: "Swapping co-referring names never changes the truth value: the sentence is about the object, whatever we call it." },
  { name: "identity", make: (x, y) => [`${x} is ${x}.`, `${x} is ${y}.`], truth: [true, true], kind: "identity", note: "Both are true, but the first is trivial and knowable a priori, while the second can be an empirical discovery. If meaning were only reference, they would say the same thing." },
  { name: "belief report", make: (x, y) => [`Meera believes that ${x} appears in the evening.`, `Meera believes that ${y} appears in the evening.`], truth: [true, false], kind: "indirect", note: "Meera may not know the two names pick out the same thing. In belief contexts, Frege said, a name refers to its customary sense, so substitution can fail." },
];

/** Frege's puzzles: substitute co-referring names in different sentence frames and watch truth and informativeness. */
export function SubstitutionViz() {
  const [pi, setPi] = useState(0);
  const [fi, setFi] = useState(1);
  const [swap, setSwap] = useState(true);
  const P = PAIRS[pi], F = FRAMES[fi];
  const [s1, s2] = F.make(P.a, P.b);
  const second = fi === 0 ? F.make(P.b, P.a)[0] : s2;
  const shown = swap ? second : s1;
  const truth = swap ? F.truth[1] : F.truth[0];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Names">
        {PAIRS.map((p, i) => <button key={p.a} type="button" aria-pressed={pi === i} className={pi === i ? "seg is-on" : "seg"} onClick={() => setPi(i)}>{p.a} / {p.b}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="Sentence frame" style={{ marginTop: 8 }}>
        {FRAMES.map((f, i) => <button key={f.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>{f.name}</button>)}
      </div>
      <table className="table" style={{ width: "auto", marginTop: 10 }}>
        <thead><tr><th style={{ textTransform: "none" }}>expression</th><th style={{ textTransform: "none" }}>sense (mode of presentation)</th><th style={{ textTransform: "none" }}>reference</th></tr></thead>
        <tbody>
          <tr><td>{P.a}</td><td>{P.senseA}</td><td>{P.ref}</td></tr>
          <tr><td>{P.b}</td><td>{P.senseB}</td><td>{P.ref}</td></tr>
        </tbody>
      </table>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <button type="button" className={!swap ? "viz-chip is-on" : "viz-chip"} aria-pressed={!swap} onClick={() => setSwap(false)}>original sentence</button>
        <button type="button" className={swap ? "viz-chip is-on" : "viz-chip"} aria-pressed={swap} onClick={() => setSwap(true)}>after substituting</button>
      </div>
      <p style={{ margin: "10px 0 4px", fontSize: 17 }}>&ldquo;{shown}&rdquo;</p>
      <p className="mono" style={{ margin: "4px 0", fontSize: 14 }}>
        truth value: {truth ? "true" : "possibly false"}; context: {F.kind}
      </p>
      <p style={{ margin: "4px 0", fontSize: 14 }}>{F.note}</p>
      <figcaption className="viz-caption">
        Frege distinguished the reference of an expression, the object it picks out, from its sense, the way that object is
        presented. Sense explains informativeness and the failure of substitution in belief reports; reference fixes truth
        value in ordinary contexts.
      </figcaption>
    </figure>
  );
}
