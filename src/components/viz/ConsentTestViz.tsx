"use client";

import { useState } from "react";

const CASES = [
  { name: "taking a taxi", consent: true, mere: false, note: "You use the driver as a means to get home, but they agree to the deal and can share your end. Using someone is not the same as using them merely as a means." },
  { name: "a lying promise to repay a loan", consent: false, mere: true, note: "The lender cannot consent to being deceived, since if they knew the truth the deception would fail. O’Neill: the act makes their consent impossible." },
  { name: "threatening a shopkeeper", consent: false, mere: true, note: "Coercion overrides the other person’s choice, so it treats their agency as an obstacle to be removed." },
  { name: "a surprise party", consent: true, mere: false, note: "The secret is kept, but the friend could share the purpose and would endorse it. Some deception of this kind seems compatible with respect." },
  { name: "paying a very poor worker a pittance", consent: true, mere: true, note: "They say yes, but only because they have no real alternative. Many Kantians hold that consent under desperate conditions does not show the worker is treated as an end." },
];

/** Kant’s formula of humanity, read through possible consent: are you treating someone merely as a means? */
export function ConsentTestViz() {
  const [ci, setCi] = useState(1);
  const C = CASES[ci];
  return (
    <figure className="viz">
      <div className="viz-controls">
        {CASES.map((c, i) => <button key={c.name} type="button" aria-pressed={ci === i} className={ci === i ? "viz-chip is-on" : "viz-chip"} onClick={() => setCi(i)}>{c.name}</button>)}
      </div>
      <table className="table" style={{ fontSize: 14, marginTop: 10 }}>
        <tbody>
          <tr><td>could the other person consent to the way they are being treated?</td><td style={{ color: C.consent ? "var(--accent)" : "var(--danger)" }}>{C.consent ? "yes" : "no"}</td></tr>
          <tr><td>treated merely as a means?</td><td style={{ color: C.mere ? "var(--danger)" : "var(--accent)" }}>{C.mere ? "yes" : "no"}</td></tr>
        </tbody>
      </table>
      <p style={{ margin: "8px 0 4px", fontSize: 14 }}>{C.note}</p>
      <figcaption className="viz-caption">
        &ldquo;Act so that you treat humanity, whether in your own person or in that of another, always at the same time as an
        end and never merely as a means.&rdquo; Onora O&rsquo;Neill and Christine Korsgaard read this as forbidding acts that
        make others&rsquo; consent impossible, such as deception and coercion. The last case shows where actual consent and
        possible consent can come apart.
      </figcaption>
    </figure>
  );
}
