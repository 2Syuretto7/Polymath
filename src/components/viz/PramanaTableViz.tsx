"use client";

import { useState } from "react";

const P = ["perception", "inference", "comparison", "testimony", "postulation", "non-apprehension"];
const SCHOOLS: { name: string; n: number; note: string }[] = [
  { name: "Cārvāka", n: 1, note: "Only perception. Inference needs a universal connection that perception can never establish." },
  { name: "Buddhist (Dignāga)", n: 2, note: "Perception and inference. Testimony is a kind of inference from a reliable speaker." },
  { name: "Vaiśeṣika", n: 2, note: "Perception and inference, with testimony reduced to inference." },
  { name: "Sāṃkhya, Yoga", n: 3, note: "Perception, inference and reliable testimony." },
  { name: "Nyāya", n: 4, note: "Adds comparison: learning that a word names an animal by being told it resembles a cow." },
  { name: "Prābhākara Mīmāṃsā", n: 5, note: "Adds postulation: Devadatta is fat but does not eat by day, so he eats at night." },
  { name: "Bhāṭṭa Mīmāṃsā, Advaita", n: 6, note: "Adds non-apprehension: I know there is no pot here by not perceiving one." },
];
const order = (si: number) => (si === 1 || si === 2 ? [0, 1] : si === 3 ? [0, 1, 3] : Array.from({ length: SCHOOLS[si].n }, (_, j) => j));

/** Which means of knowledge (pramāṇa) each school accepts. */
export function PramanaTableViz() {
  const [s, setS] = useState(4);
  return (
    <figure className="viz">
      <table className="mono" style={{ borderCollapse: "collapse", fontSize: 12, width: "100%" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: 4 }}>school</th>
            {P.map((p) => <th key={p} style={{ padding: 4, fontWeight: 400, color: "var(--text-muted)" }}>{p}</th>)}
            <th style={{ padding: 4 }}>#</th>
          </tr>
        </thead>
        <tbody>
          {SCHOOLS.map((sc, i) => {
            const acc = order(i);
            return (
              <tr key={sc.name} onClick={() => setS(i)} style={{ cursor: "pointer", background: i === s ? "var(--accent-soft)" : "transparent" }}>
                <td style={{ padding: 4, borderTop: "1px solid var(--border)" }}>
                  <button type="button" aria-pressed={i === s} onClick={() => setS(i)} style={{ background: "none", border: "none", padding: 0, font: "inherit", color: "var(--text)", fontWeight: i === s ? 700 : 400, cursor: "pointer", textAlign: "left" }}>{sc.name}</button>
                </td>
                {P.map((p, j) => (
                  <td key={p} style={{ padding: 4, textAlign: "center", borderTop: "1px solid var(--border)", color: acc.includes(j) ? "var(--accent)" : "var(--text-faint)" }}>{acc.includes(j) ? "✓" : "·"}</td>
                ))}
                <td style={{ padding: 4, textAlign: "center", borderTop: "1px solid var(--border)" }}>{acc.length}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 8 }}>{SCHOOLS[s].note}</p>
      <figcaption className="viz-caption">
        The schools agree that perception is a means of knowledge and disagree about almost everything else. Each extra
        pramāṇa is argued for by showing that some knowledge cannot be reduced to the others, and argued against by
        reducing it.
      </figcaption>
    </figure>
  );
}
