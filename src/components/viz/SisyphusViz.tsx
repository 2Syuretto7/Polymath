"use client";

import { useState } from "react";

const VERSIONS = [
  { name: "The myth", text: "Sisyphus rolls a stone up a hill; it rolls down; he rolls it up again, forever. He hates it.", cares: false, worth: false },
  { name: "A temple", text: "Each stone stays at the top, and over the ages they form a magnificent temple. He still hates the work.", cares: false, worth: true },
  { name: "The gods' gift", text: "The stone rolls down as before, but the gods have given him a burning desire to roll stones. He loves it.", cares: true, worth: false },
  { name: "Both", text: "The stones build a temple, and he loves the work of building it.", cares: true, worth: true },
];

const VIEWS = [
  { name: "Subjectivism", rule: "A life is meaningful if the person cares about what they do and finds it fulfilling.", m: (c: boolean) => c },
  { name: "Objectivism", rule: "A life is meaningful if it achieves or engages with something of real worth, whatever the person feels.", m: (_: boolean, w: boolean) => w },
  { name: "Hybrid (Susan Wolf)", rule: "Meaning arises when subjective attraction meets objective attractiveness: loving what is worth loving.", m: (c: boolean, w: boolean) => c && w },
];

/** Richard Taylor's variations on Sisyphus, judged by three theories of meaning. */
export function SisyphusViz() {
  const [v, setV] = useState(2);
  const V = VERSIONS[v];

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }}>
        {VERSIONS.map((x, i) => (
          <button key={x.name} type="button" className={i === v ? "btn btn-primary" : "btn"} aria-pressed={i === v} onClick={() => setV(i)}>{x.name}</button>
        ))}
      </div>
      <p style={{ margin: "14px 0 6px" }}>{V.text}</p>
      <p className="viz-verdict viz-verdict-right" style={{ margin: "0 0 8px" }}>
        He cares about his task: <strong>{V.cares ? "yes" : "no"}</strong>. The task achieves something of lasting worth: <strong>{V.worth ? "yes" : "no"}</strong>.
      </p>
      <table className="table" style={{ marginTop: 8, marginBottom: 8 }}>
        <thead><tr><th>Theory</th><th>Is this life meaningful?</th></tr></thead>
        <tbody>
          {VIEWS.map((w) => {
            const yes = w.m(V.cares, V.worth);
            return (
              <tr key={w.name}>
                <td><strong>{w.name}</strong><br /><span className="viz-verdict viz-verdict-right">{w.rule}</span></td>
                <td className={`viz-verdict viz-verdict-${yes ? "info" : "wrong"}`}>{yes ? "Yes" : "No"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {v === 2
          ? <>Taylor thought the gods&rsquo; gift gives Sisyphus all the meaning a life can have. Many readers resist: a man who loves rolling pointless stones seems content, but is his life meaningful? Your answer shows which theory you hold.</>
          : v === 1
            ? <>Here something great is achieved, but Sisyphus is alienated from it. Does a temple he hates give his life meaning?</>
            : v === 3
              ? <>Every theory says yes. The hard cases are the ones where caring and worth come apart.</>
              : <>On every theory, the original myth is the very picture of meaninglessness.</>}
      </figcaption>
    </figure>
  );
}
