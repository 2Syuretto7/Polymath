"use client";

import { useState } from "react";

const LIMIT = 100000;
const sieve = (() => { const s = new Uint8Array(LIMIT + 1).fill(1); s[0] = 0; s[1] = 0; for (let i = 2; i * i <= LIMIT; i++) if (s[i]) for (let j = i * i; j <= LIMIT; j += i) s[j] = 0; return s; })();
const goldbach = (n: number) => { for (let p = 2; p <= n / 2; p++) if (sieve[p] && sieve[n - p]) return p; return 0; };

/** A Brouwerian weak counterexample: r = 0 if Goldbach holds, and r = 10⁻ⁿ if n is the first counterexample. */
export function FleeingNumberViz() {
  const [checked, setChecked] = useState(10);
  const evens = Array.from({ length: Math.min(6, (checked - 2) / 2) }, (_, i) => checked - 2 * i).filter((n) => n >= 4).reverse();
  return (
    <figure className="viz">
      <div className="viz-controls">
        {[10, 100, 1000, 10000, 100000].map((c) => <button key={c} type="button" className={checked === c ? "btn btn-primary" : "btn btn-ghost"} onClick={() => setChecked(c)}>check evens up to {c}</button>)}
      </div>
      <ul className="mono" style={{ fontSize: 13, margin: "6px 0", paddingLeft: 20 }}>
        {evens.map((n) => { const p = goldbach(n); return <li key={n}>{n} = {p} + {n - p}</li>; })}
      </ul>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Every even number from 4 to {checked} is a sum of two primes. So r agrees with 0 to the first {checked} decimal places: r = 0.000…0 (to {checked} places). Is r = 0, or r ≠ 0?
      </p>
      <figcaption className="viz-caption">
        Define r = 10⁻ⁿ if n is the first even number above 2 that is not a sum of two primes, and r = 0 if there is none.
        Each decimal digit of r can be computed, so r is a perfectly good real number. Classically, r = 0 or r ≠ 0. But
        asserting either, Brouwer argued, claims a proof we do not have: that disjunction would settle Goldbach&rsquo;s
        conjecture.
      </figcaption>
    </figure>
  );
}
