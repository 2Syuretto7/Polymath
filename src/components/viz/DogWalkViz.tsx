"use client";

import { useState } from "react";

type C = [number, number];

/** Rouché’s theorem as a dog on a leash: f = z⁵ walks round 0 five times, and f + g follows if |g| < |f| on the circle. */
export function DogWalkViz() {
  const [s, setS] = useState(0.2);
  const [R, setR] = useState(1);
  const pw = ([x, y]: C, n: number): C => { const r = Math.pow(Math.hypot(x, y), n), t = Math.atan2(y, x) * n; return [r * Math.cos(t), r * Math.sin(t)]; };
  // g(z) = s(3z + 1)
  const g = ([x, y]: C): C => [s * (3 * x + 1), s * 3 * y];
  const N = 1000;
  const fz: C[] = [], hz: C[] = [];
  let ratio = 0, w = 0, prev = 0, first = true, hit = false;
  for (let k = 0; k <= N; k++) {
    const t = (2 * Math.PI * k) / N, z: C = [R * Math.cos(t), R * Math.sin(t)];
    const F = pw(z, 5), G = g(z), H: C = [F[0] + G[0], F[1] + G[1]];
    fz.push(F); hz.push(H);
    ratio = Math.max(ratio, Math.hypot(G[0], G[1]) / Math.hypot(F[0], F[1]));
    if (Math.hypot(H[0], H[1]) < 1e-3) hit = true;
    const a = Math.atan2(H[1], H[0]);
    if (!first) { let d = a - prev; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; w += d; }
    prev = a; first = false;
  }
  let S = 1; for (const [a, b] of [...fz, ...hz]) S = Math.max(S, Math.abs(a), Math.abs(b)); S *= 1.08;
  const W = 380, X = (u: number) => W / 2 + (u / S) * (W / 2 - 8), Y = (v: number) => W / 2 - (v / S) * (W / 2 - 8);
  const path = (pts: C[]) => pts.map(([a, b], k) => `${k ? "L" : "M"}${X(a).toFixed(1)},${Y(b).toFixed(1)}`).join(" ");
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>f(z) = z⁵ and g(z) = s(3z + 1). How many zeros does f + g have inside |z| = R?</p>
      <div className="viz-sliders">
        <label><span>size s of g: <span className="mono">{s}</span></span><input type="range" min={0} max={1.5} step={0.05} value={s} onChange={(e) => setS(Number(e.target.value))} /></label>
        <label><span>radius R: <span className="mono">{R}</span></span><input type="range" min={0.5} max={1.5} step={0.25} value={R} onChange={(e) => setR(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Images of the circle under f and f + g" style={{ width: "100%", maxWidth: 400, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
        <path d={path(fz)} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1.5 }} />
        <path d={path(hz)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <circle cx={X(0)} cy={Y(0)} r={4} style={{ fill: "var(--text)" }} />
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>max of |g|/|f| on the circle: {ratio.toFixed(3)} {ratio < 1 ? "< 1: Rouché applies" : "≥ 1: Rouché does not apply"}</div>
        <div>{hit ? "f + g has a zero on the circle." : `zeros of f + g inside, by the winding of its image: ${Math.round(w / (2 * Math.PI))}`}</div>
      </div>
      <figcaption className="viz-caption">
        The faint curve is the image of the circle under f, the owner, winding five times round 0. The bold curve is f + g, the
        dog. When |g| &lt; |f| on the circle the leash is shorter than the owner&rsquo;s distance from 0, so the dog cannot get
        round the other side of 0, and both wind the same number of times: f + g has five zeros inside, like f.
      </figcaption>
    </figure>
  );
}
