"use client";

import { useState } from "react";

type V = "yes" | "no" | "unclear";
const THEORIES = ["imitation", "expression", "institutional"];
const CASES: { name: string; v: [V, string][] }[] = [
  { name: "Duchamp’s Fountain, a urinal signed ‘R. Mutt’ (1917)", v: [
    ["no", "It represents nothing; it is the thing itself."],
    ["unclear", "It expresses an attitude to art, perhaps, but no emotion in Tolstoy’s or Collingwood’s sense."],
    ["yes", "Submitted for exhibition and later accepted by the artworld: candidacy for appreciation was conferred on it."],
  ] },
  { name: "an identical urinal in a hardware shop", v: [
    ["no", "It imitates nothing."],
    ["no", "It expresses nothing."],
    ["no", "Nobody acting on behalf of the artworld has conferred any status on it."],
  ] },
  { name: "Warhol’s Brillo Box (1964)", v: [
    ["yes", "It closely imitates a supermarket Brillo carton, which is exactly the puzzle."],
    ["unclear", "Its feeling is cool and ironic, if anything."],
    ["yes", "Shown at the Stable Gallery; Danto’s ‘artworld’ of theory made it art."],
  ] },
  { name: "the cave paintings at Chauvet", v: [
    ["yes", "Horses, lions and rhinoceroses, vividly depicted."],
    ["yes", "Plausibly expressive of awe or ritual feeling, though we cannot ask."],
    ["unclear", "Was there an artworld 30 000 years ago? Dickie must say yes, or that we confer status now."],
  ] },
  { name: "a sunset over the sea", v: [
    ["no", "It is not an imitation, and not made."],
    ["no", "Nobody expresses anything through it."],
    ["no", "Not an artefact, which Dickie requires."],
  ] },
  { name: "driftwood placed on a gallery plinth", v: [
    ["no", "It represents nothing."],
    ["no", "No one made it to express anything."],
    ["yes", "Dickie’s own example: displayed by the artworld, it becomes an artefact in his extended sense, and art."],
  ] },
  { name: "a Tyāgarāja kriti sung in a Chennai concert", v: [
    ["no", "Music without a picture of anything, though the words have meaning."],
    ["yes", "Bhakti, devotional feeling, is central to its aim and its effect."],
    ["yes", "Performed within an established world of musicians, rasikas and sabhas."],
  ] },
];
const COL: Record<V, string> = { yes: "var(--accent)", no: "var(--danger)", unclear: "var(--text-muted)" };

/** Three theories of art tested against seven cases, each verdict with its reason. */
export function ArtTheoryViz() {
  const [sel, setSel] = useState<[number, number]>([0, 2]);
  const [r, c] = sel;
  const count = CASES.filter((x) => x.v[c][0] === "yes").length;
  return (
    <figure className="viz">
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", fontSize: 13, width: "100%" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: 6, color: "var(--text-muted)", fontWeight: 400 }}>case</th>
              {THEORIES.map((t) => <th key={t} style={{ padding: 6 }}>{t}</th>)}
            </tr>
          </thead>
          <tbody>
            {CASES.map((x, i) => (
              <tr key={x.name} style={{ borderTop: "1px solid var(--border)" }}>
                <td style={{ padding: 6 }}>{x.name}</td>
                {x.v.map(([v], j) => (
                  <td key={j} style={{ padding: 4, textAlign: "center" }}>
                    <button type="button" className={i === r && j === c ? "btn btn-primary" : "btn btn-ghost"} style={{ color: i === r && j === c ? undefined : COL[v], minWidth: 72 }} onClick={() => setSel([i, j])} aria-label={`${THEORIES[j]} theory on ${x.name}: ${v}`}>{v}</button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 10 }}>
        {THEORIES[c]} theory on {CASES[r].name}: <span style={{ color: COL[CASES[r].v[c][0]] }}>{CASES[r].v[c][0]}</span>. {CASES[r].v[c][1]} ({count} of {CASES.length} cases count as art on this theory.)
      </p>
      <figcaption className="viz-caption">
        Click any cell. Imitation theories fail on music and abstraction; expression theories fail on works that express
        nothing; the institutional theory handles Duchamp and Warhol easily, but at the price of saying little about why
        anything is valuable as art.
      </figcaption>
    </figure>
  );
}
