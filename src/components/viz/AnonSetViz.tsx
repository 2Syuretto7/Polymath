"use client";

import { useState } from "react";

const N = 100000;
const ATTR = [
  { name: "postcode", k: 20, note: "one of 20 postcodes" },
  { name: "birth year", k: 80, note: "one of 80 years" },
  { name: "day and month of birth", k: 365, note: "one of 365 days" },
  { name: "sex", k: 2, note: "one of 2 values, as recorded" },
];

/** How a few innocent facts single a person out of an invented town of 100 000. */
export function AnonSetViz() {
  const [on, setOn] = useState([true, false, false, false]);
  const prod = ATTR.reduce((p, a, i) => (on[i] ? p * a.k : p), 1);
  const share = N / prod;
  const unique = Math.pow(1 - 1 / prod, N - 1);
  const shown = share >= 10 ? Math.round(share).toLocaleString("en-IN") : share.toFixed(2);
  const dots = Math.min(400, Math.max(1, Math.round((share / N) * 400)));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="attributes" style={{ flexWrap: "wrap" }}>
        {ATTR.map((a, i) => <button key={a.name} type="button" aria-pressed={on[i]} className={on[i] ? "seg is-on" : "seg"} onClick={() => setOn(on.map((v, j) => (j === i ? !v : v)))}>{a.name}</button>)}
      </div>
      <svg viewBox="0 0 520 120" role="img" aria-label="A town of people, with those matching the released facts highlighted" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {Array.from({ length: 400 }, (_, i) => (
          <circle key={i} cx={14 + (i % 40) * 12.4} cy={14 + Math.floor(i / 40) * 10.5} r={3.2} style={{ fill: i < dots ? "var(--danger)" : "var(--border-strong)" }} />
        ))}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Expected people with your combination, you included: {shown}. Chance no one else shares it: {(unique * 100).toFixed(1)}%.
      </p>
      <p style={{ fontSize: 13, margin: "4px 0" }}>
        Released: {ATTR.filter((_, i) => on[i]).map((a) => a.note).join("; ") || "nothing"}.
      </p>
      <figcaption className="viz-caption">
        Each dot stands for 250 people in an invented town of 100 000, with every value equally likely. No single fact
        identifies anyone, but together they shrink the crowd. Latanya Sweeney estimated in 2000 that postcode, full date of
        birth and sex single out about 87% of people in the United States.
      </figcaption>
    </figure>
  );
}
