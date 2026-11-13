"use client";

import { useState } from "react";
import { factorise } from "./ntTools";

const reps = (n: number) => { const r: [number, number][] = []; for (let a = 0; a * a * 2 <= n; a++) { const b = Math.round(Math.sqrt(n - a * a)); if (b * b === n - a * a) r.push([a, b]); } return r; };

/** Which numbers are sums of two squares? Exactly those whose primes 3 mod 4 occur to even powers. */
export function TwoSquaresViz() {
  const [n, setN] = useState(65);
  const N = 200;
  const W = 560, cols = 20, cs = W / cols;
  const rs = reps(n);
  const fac = factorise(n);
  const bad = fac.filter(([p, k]) => p % 4 === 3 && k % 2 === 1);
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 6px", fontSize: 14 }}>Numbers 1 to 200. Filled numbers are sums of two squares. Click one.</p>
      <svg viewBox={`0 0 ${W} ${(N / cols) * cs}`} role="img" aria-label="Sums of two squares up to 200" style={{ width: "100%", display: "block" }}>
        {Array.from({ length: N }, (_, i) => i + 1).map((k) => {
          const s = reps(k).length > 0, on = k === n, x = ((k - 1) % cols) * cs, y = Math.floor((k - 1) / cols) * cs;
          const pr = factorise(k).length === 1 && factorise(k)[0][1] === 1;
          return (
            <g key={k} onClick={() => setN(k)} style={{ cursor: "pointer" }}>
              <rect x={x + 1} y={y + 1} width={cs - 2} height={cs - 2} rx={3} style={{ fill: s ? "var(--accent)" : "var(--bg)", fillOpacity: s ? (pr ? 0.95 : 0.45) : 1, stroke: on ? "var(--text)" : "var(--border)", strokeWidth: on ? 2.5 : 1 }} />
              <text x={x + cs / 2} y={y + cs / 2 + 4} textAnchor="middle" style={{ fill: s && pr ? "var(--bg)" : "var(--text)", fontSize: 10 }}>{k}</text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ margin: "8px 0 4px", fontSize: 14 }}>{n} = {fac.map(([p, k]) => (k > 1 ? `${p}^${k}` : `${p}`)).join(" · ") || "1"}</p>
      <p className={rs.length ? "viz-verdict viz-verdict-right" : "viz-verdict viz-verdict-wrong"} style={{ margin: "4px 0" }}>
        {rs.length
          ? `${n} = ${rs.map(([a, b]) => `${a}² + ${b}²`).join(" = ")}`
          : `${n} is not a sum of two squares: ${bad.map(([p, k]) => `${p}${k > 1 ? `^${k}` : ""}`).join(", ")} ${bad.length > 1 ? "are primes" : "is a prime"} ≡ 3 mod 4 to an odd power.`}
      </p>
      <figcaption className="viz-caption">
        Darker cells are primes that are sums of two squares: exactly 2 and the primes ≡ 1 mod 4. Since (a² + b²)(c² + d²) = (ac − bd)² + (ad + bc)², products of sums of two squares are again sums of two squares, which is why 65 = 5 · 13 has two representations.
      </figcaption>
    </figure>
  );
}
