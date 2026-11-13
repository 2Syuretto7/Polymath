"use client";

import { useState } from "react";

const OBS = ["the bread looks, tastes and feels like bread", "it nourishes like bread", "it goes stale like bread"];
type Theory = { name: string; posits: string[]; explains: boolean[]; note: string };

const THEORIES: Theory[] = [
  {
    name: "individual things and their qualities",
    posits: ["this loaf", "its qualities"],
    explains: [true, true, true],
    note: "Ockham's own picture of the natural world: individual substances and individual qualities. Nothing more is needed for these observations.",
  },
  {
    name: "add a universal, breadness",
    posits: ["this loaf", "its qualities", "a universal, breadness, shared by all loaves"],
    explains: [true, true, true],
    note: "The universal explains nothing the individuals do not already explain. By the razor, it should not be posited.",
  },
  {
    name: "add a real relation of similarity",
    posits: ["this loaf", "its qualities", "a relation of similarity, as a further thing"],
    explains: [true, true, true],
    note: "Ockham argued that two white things are similar simply because each is white. A further thing, the relation, adds nothing.",
  },
  {
    name: "the loaf alone, with no qualities",
    posits: ["this loaf"],
    explains: [true, true, false],
    note: "Fewer posits, but Ockham himself kept some qualities as real things, needed to explain change: the loaf losing freshness while remaining the same loaf. The razor cuts only what is unnecessary.",
  },
];

/** Ockham's razor: among theories that explain the same observations, prefer the one that posits fewest kinds of thing. */
export function RazorViz() {
  const [k, setK] = useState(1);
  const t = THEORIES[k];
  const all = t.explains.every(Boolean);
  const best = THEORIES.filter((x) => x.explains.every(Boolean)).reduce((a, b) => (b.posits.length < a.posits.length ? b : a));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Theory" style={{ flexWrap: "wrap" }}>
        {THEORIES.map((x, i) => (
          <button key={x.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => setK(i)}>{x.name}</button>
        ))}
      </div>
      <table className="table" style={{ marginTop: 12 }}>
        <tbody>
          <tr><td>what the theory posits</td><td>{t.posits.join("; ")}</td></tr>
          {OBS.map((o, i) => (
            <tr key={o}><td>explains: {o}</td><td className="mono">{t.explains[i] ? "yes" : "no"}</td></tr>
          ))}
          <tr><td>number of things posited</td><td className="mono">{t.posits.length}</td></tr>
        </tbody>
      </table>
      <p className="tagger-why" style={{ marginTop: 12 }} aria-live="polite">
        {t === best ? "The razor's choice: it explains everything with the fewest posits. " : all ? "It explains everything, but posits more than it needs. " : "It posits less, but fails to explain everything, so the razor does not favour it. "}
        {t.note}
      </p>
      <figcaption className="viz-caption">
        Plurality should not be posited without necessity. The razor does not say the world is simple; it says not to add
        entities that do no explanatory work.
      </figcaption>
    </figure>
  );
}
