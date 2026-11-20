"use client";

import { useState } from "react";

const ATOMS = ["p", "q", "r", "s"];

/** Linguistic ersatz worlds: world-books over a language, and what an alien property does to them. */
export function WorldBookViz() {
  const [vals, setVals] = useState([true, false, true, false]);
  const [withS, setWithS] = useState(false);
  const lang = withS ? 4 : 3;
  const book = ATOMS.slice(0, lang).map((a, i) => (vals[i] ? a : `¬${a}`));
  const twin = [...vals.slice(0, 3), !vals[3]];
  const toggle = (i: number) => setVals(vals.map((v, j) => (j === i ? !v : v)));
  const worlds = 16, books = 2 ** lang;
  const X0 = 40;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label><input type="checkbox" checked={withS} onChange={(e) => setWithS(e.target.checked)} aria-label="add s to the language" /> add a word for s to the language</label>
      </div>
      <svg viewBox="0 0 520 170" role="img" aria-label="A concrete world's facts and the world-book that describes it" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={X0} y={18} style={{ fill: "var(--text-muted)", fontSize: 11 }}>how things are (click to change)</text>
        {ATOMS.map((a, i) => (
          <g key={a} role="button" tabIndex={0} aria-label={`${a} is ${vals[i] ? "true" : "false"}`} onClick={() => toggle(i)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") toggle(i); }} style={{ cursor: "pointer" }}>
            <rect x={X0 + i * 52} y={28} width={44} height={36} rx={6} style={{ fill: vals[i] ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: i === 3 && !withS ? "var(--danger)" : "var(--border-strong)", strokeDasharray: i === 3 && !withS ? "4 3" : undefined }} />
            <text x={X0 + i * 52 + 22} y={51} textAnchor="middle" className="mono" style={{ fill: "var(--text)", fontSize: 13 }}>{vals[i] ? a : `¬${a}`}</text>
          </g>
        ))}
        {!withS && <text x={X0 + 3 * 52 + 22} y={80} textAnchor="middle" style={{ fill: "var(--danger)", fontSize: 10 }}>alien</text>}
        <text x={290} y={18} style={{ fill: "var(--text-muted)", fontSize: 11 }}>the world-book</text>
        <rect x={290} y={28} width={200} height={36} rx={6} style={{ fill: "none", stroke: "var(--accent)" }} />
        <text x={390} y={51} textAnchor="middle" className="mono" style={{ fill: "var(--accent)", fontSize: 13, fontWeight: 700 }}>{`{ ${book.join(", ")}, … }`}</text>
        <text x={X0} y={112} style={{ fill: "var(--text-muted)", fontSize: 11 }}>
          {withS ? "The twin world, with s flipped, now gets a different book." : `The twin world ${twin.map((v, i) => (v ? ATOMS[i] : `¬${ATOMS[i]}`)).join(", ")} gets the very same book.`}
        </text>
        <text x={X0} y={132} style={{ fill: "var(--text-muted)", fontSize: 11 }}>The book is the set of all sentences of the language true there: it contains the</text>
        <text x={X0} y={148} style={{ fill: "var(--text-muted)", fontSize: 11 }}>literals shown and is closed under consequence, so it is consistent and maximal.</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Ways for p, q, r, s to be: {worlds}. Distinct world-books: {books}.{books < worlds ? " Some possibilities are lost." : " Every possibility has its own book."}
      </p>
      <figcaption className="viz-caption">
        The linguistic ersatzist identifies a possible world with a maximal consistent set of sentences. If the language
        lacks a word for some property s that could have been instantiated, an alien property, two genuinely different
        possibilities share one book. Adding the word helps only for properties we can name.
      </figcaption>
    </figure>
  );
}
