"use client";

import { useState } from "react";

export const FACTS = ["It is raining in Pune.", "The library is open.", "Chess began in India.", "The train is late."];
export const SAID = [0, 1, 3];
export const allTrue = (on: boolean[]) => SAID.every((i) => on[i]);

/** Truth as a device of generalisation: ‘everything Asha said is true’ against the conjunction of what she said. */
export function DisquotationViz() {
  const [on, setOn] = useState([true, true, true, true]);
  const flip = (i: number) => setOn(on.map((v, j) => (j === i ? !v : v)));
  const all = allTrue(on);
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 6px", fontWeight: 600 }}>Set the facts:</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 6 }}>
        {FACTS.map((f, i) => (
          <button key={f} type="button" aria-pressed={on[i]} className={on[i] ? "btn btn-primary" : "btn btn-ghost"} onClick={() => flip(i)} style={{ textAlign: "left" }}>
            {on[i] ? "Fact: " : "Not so: "}{f}
          </button>
        ))}
      </div>
      <p style={{ margin: "12px 0 4px", fontWeight: 600 }}>Asha said three things. The T-sentences give:</p>
      <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
        {SAID.map((i) => <li key={i}>&lsquo;{FACTS[i]}&rsquo; is true if and only if {FACTS[i].charAt(0).toLowerCase() + FACTS[i].slice(1, -1)}: here {on[i] ? "true" : "false"}.</li>)}
      </ul>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 10 }}>
        &lsquo;Everything Asha said is true&rsquo;: {all ? "true" : "false"}. The conjunction of her three claims: {all ? "true" : "false"}.
      </p>
      <figcaption className="viz-caption">
        The two always agree, because each T-sentence lets &lsquo;is true&rsquo; be traded for the sentence itself. The
        deflationist says this is all truth does: it lets us endorse sentences we cannot list, such as everything Asha
        said, or every theorem of arithmetic, without adding any substantial property.
      </figcaption>
    </figure>
  );
}
