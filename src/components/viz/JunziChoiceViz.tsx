"use client";

import { useState } from "react";

const CASES = [
  { situation: "A deal would bring you profit, but it is not quite right.", a: "Ask first whether it is right (yi).", b: "Ask first what you stand to gain.", why: "“The junzi understands what is right; the petty person understands profit.” (Analects 4.16)" },
  { situation: "Colleagues all agree on a plan you think is flawed.", a: "Go along, to keep the peace.", b: "Work with them, but say where you differ.", junziIsB: true, why: "“The junzi is harmonious but does not simply conform; the petty person conforms but is not harmonious.” (13.23)" },
  { situation: "Your project fails.", a: "Look for the fault in yourself.", b: "Look for someone else to blame.", why: "“The junzi seeks it in himself; the petty person seeks it in others.” (15.21)" },
  { situation: "No one recognises your abilities.", a: "Resent it and complain.", b: "Stay untroubled, and worry instead about whether you are able.", junziIsB: true, why: "“Do not worry that others do not know you; worry that you do not know others.” (1.16) The junzi is untroubled by obscurity." },
  { situation: "You must choose friends at court.", a: "Be fair to all, without forming a faction.", b: "Join the strongest faction.", why: "“The junzi is inclusive and not partisan; the petty person is partisan and not inclusive.” (2.14)" },
];

/** Choose the response of the junzi, the exemplary person, over that of the petty person. */
export function JunziChoiceViz() {
  const [picks, setPicks] = useState<Record<number, "a" | "b">>({});
  const right = CASES.filter((c, i) => picks[i] && (picks[i] === "b") === Boolean(c.junziIsB)).length;
  return (
    <figure className="viz">
      <ol style={{ paddingLeft: 20, margin: 0 }}>
        {CASES.map((c, i) => {
          const pick = picks[i];
          const ok = pick && (pick === "b") === Boolean(c.junziIsB);
          return (
            <li key={c.situation} style={{ marginBottom: 12 }}>
              <p style={{ margin: "0 0 6px" }}>{c.situation}</p>
              <div className="segmented" role="group" aria-label="response">
                {(["a", "b"] as const).map((x) => (
                  <button key={x} type="button" aria-pressed={pick === x} className={pick === x ? "seg is-on" : "seg"} onClick={() => setPicks({ ...picks, [i]: x })}>{c[x]}</button>
                ))}
              </div>
              {pick && <p style={{ fontSize: 14, margin: "6px 0 0", color: ok ? "var(--text)" : "var(--danger)" }}>{ok ? "The junzi’s way. " : "That is the petty person’s way. "}{c.why}</p>}
            </li>
          );
        })}
      </ol>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{Object.keys(picks).length} of {CASES.length} answered, {right} as the junzi would.</p>
      <figcaption className="viz-caption">
        The Analects defines the junzi, the exemplary person, largely by contrast with the xiaoren, the petty person. The
        difference lies less in what they know than in what they care about.
      </figcaption>
    </figure>
  );
}
