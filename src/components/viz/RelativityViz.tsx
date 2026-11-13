"use client";

import { useState } from "react";

const ROWS: { q: string; kind: "primary" | "secondary"; case: string }[] = [
  { q: "heat", kind: "secondary", case: "The same water feels warm to one hand and cold to the other." },
  { q: "taste", kind: "secondary", case: "What tastes sweet to a healthy tongue tastes bitter to someone in fever." },
  { q: "colour", kind: "secondary", case: "Distant clouds look red and purple; up close they are a grey mist. Under a microscope colours change again." },
  { q: "size", kind: "primary", case: "A mite's foot, too small for us to see, must seem a considerable size to the mite itself." },
  { q: "shape", kind: "primary", case: "A coin seen from above is round; seen at an angle it is oval. A microscope shows edges the eye never saw." },
  { q: "motion", kind: "primary", case: "Speed is judged by the succession of ideas in a mind: the same motion would seem slow to a mind whose ideas came twice as fast." },
  { q: "solidity", kind: "primary", case: "Hard and soft are relative to the strength of the one who presses: what resists us may give way to a stronger creature." },
];

/** Berkeley's reply to Locke: every argument from variation that puts the secondary qualities in the mind works just as well for the primary ones. */
export function RelativityViz() {
  const [shown, setShown] = useState<boolean[]>(ROWS.map(() => false));
  const n = shown.filter(Boolean).length;
  const prim = ROWS.filter((r, i) => r.kind === "primary" && shown[i]).length;

  return (
    <figure className="viz">
      <table className="table">
        <thead>
          <tr><th>quality</th><th>Locke&rsquo;s class</th><th>does it vary with the perceiver?</th></tr>
        </thead>
        <tbody>
          {ROWS.map((r, i) => (
            <tr key={r.q}>
              <td style={{ whiteSpace: "nowrap" }}>{r.q}</td>
              <td>{r.kind}</td>
              <td>
                {shown[i] ? (
                  <span><strong>Yes.</strong> {r.case}</span>
                ) : (
                  <button type="button" className="viz-chip" style={{ cursor: "pointer" }} onClick={() => setShown(shown.map((v, j) => (j === i ? true : v)))}>
                    vary the perceiver
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {n === 0
          ? "Locke put heat, taste and colour in the mind because they vary with the perceiver. Test each quality in turn."
          : prim === 0
            ? `${n} tested so far, all secondary. Now try a primary quality.`
            : `${n} tested, ${prim} of them primary, and every one varies. If variation shows that heat exists only in the mind, Berkeley argues, it shows the same of size, shape and motion.`}
      </figcaption>
    </figure>
  );
}
