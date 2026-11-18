"use client";

import { useState } from "react";

const BEINGS = ["human", "eel", "monkey", "deer"] as const;
type Being = (typeof BEINGS)[number];
const ROWS: { q: string; v: Record<Being, string>; good: Record<Being, Being[]> }[] = [
  {
    q: "Where is the right place to sleep?",
    v: { human: "a dry house", eel: "the damp mud", monkey: "high in a tree", deer: "a grassy thicket" },
    good: { human: ["human"], eel: ["eel"], monkey: ["monkey"], deer: ["deer"] },
  },
  {
    q: "What is the right thing to eat?",
    v: { human: "cooked meat", eel: "small fish", monkey: "fruit", deer: "fresh grass" },
    good: { human: ["human"], eel: ["eel"], monkey: ["monkey"], deer: ["deer"] },
  },
  {
    q: "Who is beautiful?",
    v: { human: "the famous beauties Maoqiang and Lady Li", eel: "dives deep at the sight of them", monkey: "flees into the trees", deer: "runs away" },
    good: { human: ["human"], eel: [], monkey: [], deer: [] },
  },
];

/** After Zhuangzi, chapter 2: each creature’s standard of right place, taste and beauty. */
export function PerspectiveTableViz() {
  const [view, setView] = useState<Being>("human");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="whose standard">
        {BEINGS.map((b) => <button key={b} type="button" aria-pressed={view === b} className={view === b ? "seg is-on" : "seg"} onClick={() => setView(b)}>judge as a {b}</button>)}
      </div>
      <div style={{ overflowX: "auto", marginTop: 10 }}>
        <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 13 }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: 6, borderBottom: "1px solid var(--border)" }}></th>
              {BEINGS.map((b) => <th key={b} style={{ textAlign: "left", padding: 6, borderBottom: "1px solid var(--border)", color: b === view ? "var(--accent)" : "var(--text)" }}>{b}</th>)}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.q}>
                <td style={{ padding: 6, fontWeight: 700, borderBottom: "1px solid var(--border)" }}>{r.q}</td>
                {BEINGS.map((b) => {
                  const right = r.good[view].includes(b);
                  return <td key={b} style={{ padding: 6, borderBottom: "1px solid var(--border)", background: right ? "var(--accent-soft)" : undefined, color: right ? "var(--text)" : "var(--text-muted)" }}>{r.v[b]}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: 14, margin: "8px 0 4px" }}>
        Judged as a {view}, only the shaded answers are right. Switch the judge, and the verdicts move with it. Of the four,
        which knows the correct standard?
      </p>
      <figcaption className="viz-caption">
        After Wang Ni&rsquo;s reply in the Zhuangzi&rsquo;s second chapter, &lsquo;Discussion on making all things
        equal&rsquo;. Each standard is right from where it stands, and no creature has a standpoint outside all the others
        from which to judge.
      </figcaption>
    </figure>
  );
}
