"use client";

import { useState } from "react";

type Item = { name: string; a: boolean; b: boolean; merely?: boolean };
type Pair = { a: string; b: string; items: Item[]; note: string };
const PAIRS: Pair[] = [
  {
    a: "has a heart", b: "has kidneys",
    items: [
      { name: "a cow", a: true, b: true }, { name: "a sparrow", a: true, b: true }, { name: "a mahseer fish", a: true, b: true },
      { name: "a jellyfish", a: false, b: false }, { name: "a banyan tree", a: false, b: false },
      { name: "a possible creature with a heart but no kidneys", a: true, b: false, merely: true },
    ],
    note: "In this standard example the actual classes coincide: every creature with a heart has kidneys and conversely. Yet having a heart and having kidneys are different properties. Counting merely possible creatures, as Lewis does, separates the classes.",
  },
  {
    a: "triangular", b: "trilateral",
    items: [
      { name: "a samosa’s outline", a: true, b: true }, { name: "a set square", a: true, b: true }, { name: "a road sign", a: true, b: true },
      { name: "a cricket pitch", a: false, b: false }, { name: "a bangle", a: false, b: false },
      { name: "any possible figure", a: true, b: true, merely: true },
    ],
    note: "Every possible figure with three angles has three sides, and conversely, so the classes coincide in every world. Even possible objects cannot separate them, though many think these are still two properties.",
  },
];

/** The problem of coextension for class nominalism: different properties, same class. */
export function CoextensionViz() {
  const [pi, setPi] = useState(0);
  const [poss, setPoss] = useState(false);
  const P = PAIRS[pi];
  const shown = P.items.filter((x) => poss || !x.merely);
  const A = shown.filter((x) => x.a).map((x) => x.name), B = shown.filter((x) => x.b).map((x) => x.name);
  const same = A.length === B.length && A.every((x) => B.includes(x));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Pair of properties">
        {PAIRS.map((x, i) => <button key={x.a} type="button" aria-pressed={pi === i} className={pi === i ? "seg is-on" : "seg"} onClick={() => setPi(i)}>{x.a} / {x.b}</button>)}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <button type="button" aria-pressed={poss} className={poss ? "viz-chip is-on" : "viz-chip"} onClick={() => setPoss(!poss)}>{poss ? "including possible things" : "actual things only"}</button>
      </div>
      <div style={{ overflowX: "auto", marginTop: 8 }}>
        <table className="table">
          <thead><tr><th style={{ textTransform: "none" }}>thing</th><th style={{ textTransform: "none" }}>{P.a}</th><th style={{ textTransform: "none" }}>{P.b}</th></tr></thead>
          <tbody>
            {shown.map((x) => (
              <tr key={x.name} style={{ fontStyle: x.merely ? "italic" : undefined }}>
                <td>{x.name}</td>
                <td className="mono">{x.a ? "yes" : "no"}</td>
                <td className="mono" style={{ color: x.a !== x.b ? "var(--danger)" : undefined }}>{x.b ? "yes" : "no"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ margin: "8px 0 4px", fontWeight: 600, color: same ? "var(--danger)" : "var(--accent)" }}>
        {same ? "Same class: class nominalism says these are one property." : "Different classes: class nominalism can tell these properties apart."}
      </p>
      <p style={{ margin: "4px 0", fontSize: 14 }}>{P.note}</p>
      <figcaption className="viz-caption">
        Class nominalism identifies a property with the class of things that have it. Then two properties had by exactly the same things would be one property. Switch on possible things to see how far the reply from possible objects goes.
      </figcaption>
    </figure>
  );
}
