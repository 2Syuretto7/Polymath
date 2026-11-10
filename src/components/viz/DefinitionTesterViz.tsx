"use client";

import { useState } from "react";

type Verdict = "yes" | "no" | "unclear";

const DEFINITIONS = [
  "Something people sit on.",
  "A piece of furniture with four legs and a back, made for one person to sit on.",
  "A piece of furniture with a back, made for one person to sit on.",
] as const;

const CASES: { name: string; chair: Verdict; fits: [boolean, boolean, boolean] }[] = [
  { name: "An office chair on five wheels", chair: "yes", fits: [true, false, true] },
  { name: "A throne", chair: "yes", fits: [true, true, true] },
  { name: "An antique chair in a museum that nobody may sit on", chair: "yes", fits: [false, true, true] },
  { name: "A sofa", chair: "no", fits: [true, false, false] },
  { name: "A bar stool", chair: "no", fits: [true, false, false] },
  { name: "A tree stump a hiker rests on", chair: "no", fits: [true, false, false] },
  { name: "A beanbag", chair: "unclear", fits: [true, false, true] },
];

function judge(chair: Verdict, fits: boolean) {
  if (chair === "unclear") return { tone: "info", text: fits ? "fits; is it a chair?" : "excluded; is it a chair?" };
  if (chair === "yes" && fits) return { tone: "right", text: "fits" };
  if (chair === "no" && !fits) return { tone: "right", text: "excluded" };
  if (chair === "no") return { tone: "wrong", text: "fits, but is not a chair: too broad" };
  return { tone: "wrong", text: "a chair, but excluded: too narrow" };
}

/** Testing a definition the way Socrates did: against cases everyone already agrees on. */
export function DefinitionTesterViz() {
  const [d, setD] = useState(0);
  const verdicts = CASES.map((c) => judge(c.chair, c.fits[d]));
  const broad = verdicts.filter((v) => v.text.includes("too broad")).length;
  const narrow = verdicts.filter((v) => v.text.includes("too narrow")).length;

  return (
    <figure className="viz">
      <p className="viz-stepper-label" style={{ margin: "0 0 8px" }}>Choose a definition of &ldquo;chair&rdquo;</p>
      <div className="choices" role="radiogroup" aria-label="Definition">
        {DEFINITIONS.map((text, i) => (
          <label key={text} className={`choice ${i === d ? "is-picked" : ""}`}>
            <input type="radio" name="definition" checked={i === d} onChange={() => setD(i)} />
            <span>{text}</span>
          </label>
        ))}
      </div>
      <table className="table" style={{ marginTop: 16, marginBottom: 8 }}>
        <thead><tr><th>Case</th><th>Against this definition</th></tr></thead>
        <tbody>
          {CASES.map((c, i) => (
            <tr key={c.name}>
              <td>{c.name}</td>
              <td className={`viz-verdict viz-verdict-${verdicts[i].tone}`}>{verdicts[i].text}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {broad === 0 && narrow === 0
          ? "No clear counterexample. That does not prove the definition right; it only means these cases have not refuted it."
          : `${broad} case${broad === 1 ? "" : "s"} show${broad === 1 ? "s" : ""} it is too broad, and ${narrow} show${narrow === 1 ? "s" : ""} it is too narrow.`}{" "}
        The beanbag is a borderline case: deciding it is part of the philosophical work, not a failure of the test.
      </figcaption>
    </figure>
  );
}
