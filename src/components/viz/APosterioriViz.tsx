"use client";

import { useState } from "react";

const WORLDS = [
  { label: "Actual world", evening: "Venus", morning: "Venus", watery: "H₂O", stick: "1 m" },
  { label: "World 2", evening: "Venus", morning: "Mars", watery: "H₂O", stick: "1.1 m" },
  { label: "World 3", evening: "Jupiter", morning: "Jupiter", watery: "XYZ", stick: "1 m" },
  { label: "World 4", evening: "Venus", morning: "Venus", watery: "XYZ", stick: "0.9 m" },
  { label: "World 5", evening: "Mars", morning: "Venus", watery: "H₂O", stick: "1.2 m" },
];
type W = (typeof WORLDS)[number];

export const STATEMENTS: { label: string; text: string; test: (w: W) => boolean; status: string }[] = [
  { label: "Hesperus", text: "Hesperus is Phosphorus.", test: () => true, status: "necessary and a posteriori" },
  { label: "Brightest bodies", text: "The brightest body in the evening sky is the brightest body in the morning sky.", test: (w) => w.evening === w.morning, status: "contingent and a posteriori" },
  { label: "Water", text: "Water is H₂O.", test: () => true, status: "necessary and a posteriori" },
  { label: "Watery stuff", text: "The clear drinkable stuff in the lakes is H₂O.", test: (w) => w.watery === "H₂O", status: "contingent and a posteriori" },
  { label: "Metre stick", text: "Stick S is one metre long.", test: (w) => w.stick === "1 m", status: "contingent and a priori (for whoever fixed the metre by S)" },
];
export const trueIn = (k: number) => WORLDS.filter((w) => STATEMENTS[k].test(w)).length;

/** Kripke’s cases: what a statement says about each possible world, and how it is known. */
export function APosterioriViz() {
  const [k, setK] = useState(0);
  const s = STATEMENTS[k];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Statement">
        {STATEMENTS.map((x, i) => <button key={x.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{x.label}</button>)}
      </div>
      <p style={{ margin: "10px 0 6px", fontWeight: 600 }}>{s.text}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 8 }}>
        {WORLDS.map((w) => {
          const v = s.test(w);
          return (
            <div key={w.label} style={{ border: "1px solid var(--border)", borderRadius: 8, padding: 8, background: v ? "var(--success-soft)" : "var(--danger-soft)", fontSize: 12.5 }}>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>{w.label}: {v ? "true" : "false"}</div>
              <div>Evening star: {w.evening}</div>
              <div>Morning star: {w.morning}</div>
              <div>Lakes hold: {w.watery}</div>
              <div>Stick S: {w.stick}</div>
            </div>
          );
        })}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 10 }}>
        True in {trueIn(k)} of 5 worlds: {s.status}.
      </p>
      <figcaption className="viz-caption">
        &lsquo;Hesperus&rsquo;, &lsquo;Phosphorus&rsquo; and &lsquo;water&rsquo; are rigid designators: in every world they
        pick out what they pick out here, Venus and H₂O, whatever happens to shine or fill the lakes there. A metre is
        likewise the actual length of S, so in a world where S is stretched, S is not a metre long.
      </figcaption>
    </figure>
  );
}
