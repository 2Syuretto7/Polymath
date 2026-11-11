"use client";

import { useState } from "react";

const N = 100;
const PRIMES = [2, 3, 5, 7];

/** The sieve of Eratosthenes on 2 to 100: cross out the multiples of each prime in turn. */
export function SieveViz() {
  const [step, setStep] = useState(0);
  const used = PRIMES.slice(0, step);
  const crossedBy = (k: number) => used.find((p) => k !== p && k % p === 0);
  const done = step === PRIMES.length;
  const left = Array.from({ length: N - 1 }, (_, i) => i + 2).filter((k) => !crossedBy(k));

  return (
    <figure className="viz">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(10, 1fr)", gap: 3, fontFamily: "var(--font-mono)", fontSize: 13 }}>
        {Array.from({ length: N }, (_, i) => i + 1).map((k) => {
          const by = k > 1 ? crossedBy(k) : undefined;
          const isP = k > 1 && !by && (done || used.includes(k));
          const current = step > 0 && k === PRIMES[step - 1];
          return (
            <div key={k} style={{
              textAlign: "center", padding: "5px 0", borderRadius: 4,
              border: `1px solid ${current ? "var(--accent)" : "var(--border)"}`,
              background: isP ? "var(--accent-soft)" : "transparent",
              color: k === 1 || by ? "var(--text-faint)" : "var(--text)",
              textDecoration: by ? "line-through" : undefined,
              fontWeight: isP ? 600 : 400,
            }}>{k}</div>
          );
        })}
      </div>
      <div className="viz-controls" style={{ marginTop: 12 }}>
        <button type="button" className="btn btn-primary" disabled={done} onClick={() => setStep(step + 1)}>
          {done ? "Done" : `Cross out multiples of ${PRIMES[step]}`}
        </button>
        <button type="button" className="btn" onClick={() => setStep(0)}>Start again</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {step === 0
          ? "The smallest number not yet crossed out is 2, so it is prime. Cross out its other multiples."
          : done
            ? `After 7, the next survivor is 11, and 11 × 11 = 121 > 100. Every composite number up to 100 has a prime factor at most 10, so it has already been crossed out. The ${left.length} survivors are the primes up to 100.`
            : `${left.length} numbers survive so far. The next survivor, ${PRIMES[step]}, has no smaller prime factor, so it is prime.`}
      </figcaption>
    </figure>
  );
}
