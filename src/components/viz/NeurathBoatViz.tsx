"use client";

import { useState } from "react";

const N = 12;

/** Neurath’s boat: rebuild plank by plank while staying afloat. */
export function NeurathBoatViz() {
  const [gen, setGen] = useState<number[]>(() => Array(N).fill(0));
  const [step, setStep] = useState(0);
  const replaced = gen.filter((g) => g > 0).length;
  const original = N - replaced;
  const replace = (i: number) => {
    const s = step + 1;
    setStep(s);
    setGen(gen.map((g, j) => (j === i ? s : g)));
  };
  return (
    <figure className="viz">
      <p className="viz-caption" style={{ marginTop: 0 }}>Click a plank to replace it. Only one plank is out at any time, so the boat stays afloat.</p>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${N}, 1fr)`, gap: 3, maxWidth: 520 }}>
        {gen.map((g, i) => (
          <button
            key={i}
            type="button"
            aria-label={`plank ${i + 1}`}
            onClick={() => replace(i)}
            style={{ height: 44, borderRadius: 4, border: "1px solid var(--border)", cursor: "pointer", background: g > 0 ? "var(--accent-soft)" : "var(--bg)", color: "var(--text)", fontSize: 11 }}
          >
            {g > 0 ? g : "old"}
          </button>
        ))}
      </div>
      <div style={{ height: 10, maxWidth: 520, marginTop: 2, borderRadius: "0 0 40px 40px", background: "var(--border)" }} />
      <div className="mono" style={{ fontSize: 14, marginTop: 10, fontWeight: 700 }}>
        replacements made: {step} &nbsp; planks replaced: {replaced} &nbsp; original planks left: {original}
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => { setGen(Array(N).fill(0)); setStep(0); }}>Launch a new boat</button>
      </div>
      <figcaption className="viz-caption">
        {original === 0
          ? "Every plank has been replaced, yet the boat never left the water. There was no dry dock in which to start again from scratch."
          : "Each new plank is fitted while the rest hold it in place. Numbers show the order of replacement."}{" "}
        Neurath: we are like sailors who must rebuild their ship on the open sea, never able to take it into dock and
        rebuild it from the best materials.
      </figcaption>
    </figure>
  );
}
