"use client";

import { useState } from "react";

const TESTS = [
  { name: "Starlight passing the Sun is bent by 1.75 seconds of arc (1919)", p: 0.05 },
  { name: "Clocks on satellites run fast by about 38 microseconds a day", p: 0.02 },
  { name: "Mercury’s orbit precesses by 43 seconds of arc a century, already known", p: 0.95 },
  { name: "Dropped stones fall to the ground", p: 0.999 },
];

/** Popper’s corroboration: passing a test counts for more when, on background knowledge alone, the result was unlikely. */
export function SeverityViz() {
  const [pass, setPass] = useState<boolean[]>(TESTS.map(() => false));
  const total = TESTS.reduce((s, t, i) => s + (pass[i] ? 1 - t.p : 0), 0);
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px", fontSize: 14 }}>General relativity makes each prediction below. Mark the tests it passes.</p>
      <div style={{ display: "grid", gap: 6 }}>
        {TESTS.map((t, i) => (
          <label key={t.name} style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 8, alignItems: "center", padding: "6px 8px", border: "1px solid var(--border)", borderRadius: 6, background: pass[i] ? "var(--accent-soft)" : "var(--bg)", fontSize: 14 }}>
            <input type="checkbox" checked={pass[i]} onChange={() => setPass(pass.map((v, j) => (j === i ? !v : v)))} />
            <span>{t.name}</span>
            <span className="mono" style={{ fontSize: 13 }}>severity {(1 - t.p).toFixed(3)}</span>
          </label>
        ))}
      </div>
      <p className="mono" style={{ margin: "8px 0 4px", fontSize: 14 }}>
        corroboration from tests passed, in this simple measure: {total.toFixed(3)}
      </p>
      <figcaption className="viz-caption">
        The severity shown is one minus a rough probability of the result on background knowledge without the theory. It is an
        illustration, not Popper&rsquo;s own formula. Passing a test whose result was expected anyway adds almost nothing;
        surviving a risky prediction adds a great deal. Corroboration reports how a theory has fared, not how likely it is to
        be true.
      </figcaption>
    </figure>
  );
}
