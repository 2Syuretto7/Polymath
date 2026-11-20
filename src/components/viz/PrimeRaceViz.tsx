"use client";

import { useMemo, useState } from "react";

const MAX = 1000000;
/** π(x; q, b) − π(x; q, 1) sampled at every prime, for q = 4 (b = 3) or q = 3 (b = 2). */
export function race(q: number) {
  const c = new Uint8Array(MAX + 1);
  for (let p = 2; p * p <= MAX; p++) if (!c[p]) for (let j = p * p; j <= MAX; j += p) c[j] = 1;
  const pts: [number, number][] = [];
  let d = 0, firstLead = 0, leadCount = 0, last = 2;
  for (let n = 3; n <= MAX; n++) {
    if (c[n]) continue;
    if (d < 0) leadCount += n - last;
    last = n;
    if (n % q === 1) d--; else if (n % q === q - 1) d++;
    if (d < 0 && !firstLead) firstLead = n;
    pts.push([n, d]);
  }
  if (d < 0) leadCount += MAX - last;
  return { pts, firstLead, leadShare: leadCount / MAX };
}

/** Chebyshev’s bias: the race between primes in the two residue classes coprime to 4 or to 3. */
export function PrimeRaceViz() {
  const [q, setQ] = useState(4);
  const { pts, firstLead, leadShare } = useMemo(() => race(q), [q]);
  const thin = useMemo(() => pts.filter((_, i) => i % 20 === 0 || pts[i][1] < 0), [pts]);
  const ymax = Math.max(...pts.map((p) => p[1])), ymin = Math.min(0, ...pts.map((p) => p[1]));
  const px = (x: number) => 50 + (x / MAX) * 460, py = (v: number) => 190 - ((v - ymin) / (ymax - ymin)) * 160;
  const b = q - 1;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="modulus">
        {[4, 3].map((m) => <button key={m} type="button" aria-pressed={q === m} className={q === m ? "seg is-on" : "seg"} onClick={() => setQ(m)}>mod {m}</button>)}
      </div>
      <svg viewBox="0 0 540 222" role="img" aria-label="Difference between counts of primes in two residue classes" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={50} y1={py(0)} x2={510} y2={py(0)} style={{ stroke: "var(--border-strong)" }} />
        {[0, 250000, 500000, 750000, 1000000].map((x) => <text key={x} x={px(x)} y={214} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{x.toLocaleString("en-IN")}</text>)}
        {[ymax, 0, ymin].filter((v, i, a) => a.indexOf(v) === i).map((v) => <text key={v} x={44} y={py(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(v).replace("-", "−")}</text>)}
        <path d={thin.map((p, i) => `${i ? "L" : "M"}${px(p[0]).toFixed(1)},${py(p[1]).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.5 }} />
        {thin.filter((p) => p[1] < 0).map((p) => <circle key={p[0]} cx={px(p[0])} cy={py(p[1])} r={2} style={{ fill: "var(--danger)" }} />)}
        <text x={56} y={16} style={{ fill: "var(--text-muted)", fontSize: 10 }}>primes ≡ {b} minus primes ≡ 1 (mod {q}); red where the class of 1 leads</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {firstLead ? `The class of 1 first leads at x = ${firstLead.toLocaleString("en-IN")}, and leads for ${(leadShare * 100).toFixed(2)} per cent of x up to 10 lakh.` : "Up to 10 lakh the class of 1 never takes the lead."}
      </p>
      <figcaption className="viz-caption">
        Dirichlet&rsquo;s theorem says both classes get half the primes in the long run. Yet primes that are not squares
        modulo q stay ahead almost all the time, as Chebyshev noticed in 1853. Rubinstein and Sarnak explained the bias
        from the zeros of L-functions: the race mod 4 is led by the class of 3 for about 99.59 per cent of x, in a
        logarithmic sense. Mod 3, the class of 1 first leads near 6 × 10¹¹.
      </figcaption>
    </figure>
  );
}
