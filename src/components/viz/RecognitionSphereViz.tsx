"use client";

import { useState } from "react";

export const HARMS = [
  { label: "Domestic abuse", sphere: "love", respect: "basic self-confidence", fraser: "recognition", note: "An attack on bodily integrity that damages a person’s basic trust in themselves." },
  { label: "Denial of the vote", sphere: "rights", respect: "self-respect", fraser: "recognition", note: "Exclusion from equal legal status says the person is not a full member of the community." },
  { label: "A stigmatised caste occupation", sphere: "solidarity", respect: "self-esteem", fraser: "recognition and redistribution", note: "The work is denigrated and the people doing it are excluded from respect, and also from fair pay and opportunity." },
  { label: "Low pay for care work", sphere: "solidarity", respect: "self-esteem", fraser: "recognition and redistribution", note: "Care work is undervalued because it is coded as women’s work, and the result is an economic injustice too." },
];

/** Classifying harms by Honneth’s spheres of recognition and by Fraser’s remedies. */
export function RecognitionSphereViz() {
  const [k, setK] = useState(3);
  const H = HARMS[k];
  const spheres = [
    { key: "love", title: "love", sub: "self-confidence" },
    { key: "rights", title: "rights", sub: "self-respect" },
    { key: "solidarity", title: "solidarity", sub: "self-esteem" },
  ];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="harm">
        {HARMS.map((h, i) => <button key={h.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{h.label}</button>)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 10, marginTop: 12 }}>
        {spheres.map((s) => {
          const on = s.key === H.sphere;
          return (
            <div key={s.key} style={{ padding: "10px 12px", borderRadius: 8, border: `2px solid ${on ? "var(--accent)" : "var(--border)"}`, background: on ? "var(--accent-soft)" : "var(--surface)" }}>
              <div style={{ fontWeight: 700 }}>{s.title}</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>relation to self: {s.sub}</div>
            </div>
          );
        })}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 12 }}>
        Honneth: a denial of recognition in the sphere of {H.sphere}, damaging {H.respect}. Fraser: the remedy needed is {H.fraser}.
      </p>
      <p style={{ fontSize: 14, color: "var(--text-muted)" }}>{H.note}</p>
      <figcaption className="viz-caption">
        Axel Honneth distinguishes three forms of recognition, each supporting a relation to oneself. Nancy Fraser treats
        recognition as a matter of equal status, and holds that many injustices, such as those of gender and caste, are
        two-dimensional: they need both recognition and redistribution.
      </figcaption>
    </figure>
  );
}
