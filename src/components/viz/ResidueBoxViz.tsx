"use client";

import { useState } from "react";

type C = [number, number];
const mul = (a: C, b: C): C => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
const inv = (a: C): C => { const d = a[0] * a[0] + a[1] * a[1]; return [a[0] / d, -a[1] / d]; };
// f(z) = 1/(z(z − 1)(z − 2i))
const f = (z: C): C => inv(mul(mul(z, [z[0] - 1, z[1]]), [z[0], z[1] - 2]));
const POLES: { p: C; res: C; label: string }[] = [
  { p: [0, 0], res: [0, -0.5], label: "0" },
  { p: [1, 0], res: [0.2, 0.4], label: "1" },
  { p: [0, 2], res: [-0.2, 0.1], label: "2i" },
];

/** The residue theorem on a rectangle: the contour integral equals 2πi times the residues of the poles inside. */
export function ResidueBoxViz() {
  const [l, setL] = useState(-0.75);
  const [rt, setRt] = useState(1.25);
  const [b, setB] = useState(-0.75);
  const [t, setT] = useState(0.75);
  const ok = l < rt && b < t;
  const V: C[] = [[l, b], [rt, b], [rt, t], [l, t]];
  let I: C = [0, 0];
  if (ok) for (let e = 0; e < 4; e++) {
    const a = V[e], c = V[(e + 1) % 4], N = 2000, dz: C = [(c[0] - a[0]) / N, (c[1] - a[1]) / N];
    for (let k = 0; k < N; k++) { const s = (k + 0.5) / N; const v = mul(f([a[0] + s * (c[0] - a[0]), a[1] + s * (c[1] - a[1])]), dz); I = [I[0] + v[0], I[1] + v[1]]; }
  }
  const inside = POLES.filter(({ p }) => p[0] > l && p[0] < rt && p[1] > b && p[1] < t);
  const sum = inside.reduce<C>((s, q) => [s[0] + q.res[0], s[1] + q.res[1]], [0, 0]);
  const pred: C = [-2 * Math.PI * sum[1], 2 * Math.PI * sum[0]];
  const W = 400, Bd = 3, X = (u: number) => W / 2 + (u / Bd) * (W / 2 - 8), Y = (v: number) => W / 2 - (v / Bd) * (W / 2 - 8);
  const fmt = (v: number) => (Math.abs(v) < 5e-4 ? "0.000" : v.toFixed(3));
  const cs = (z: C) => `${fmt(z[0])} ${z[1] < -5e-4 ? "−" : "+"} ${fmt(Math.abs(z[1]))}i`;
  const sl = (lab: string, v: number, set: (x: number) => void) => (
    <label><span>{lab}: <span className="mono">{v}</span></span><input type="range" min={-2.75} max={2.75} step={0.5} value={v} onChange={(e) => set(Number(e.target.value))} /></label>
  );
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>f(z) = 1/(z(z − 1)(z − 2i)), with simple poles at 0, 1 and 2i.</p>
      <div className="viz-sliders">
        {sl("left edge", l, setL)}{sl("right edge", rt, setRt)}{sl("bottom edge", b, setB)}{sl("top edge", t, setT)}
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="A rectangular contour and the poles of f" style={{ width: "100%", maxWidth: 420, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
        {ok && <polygon points={V.map(([a, c]) => `${X(a)},${Y(c)}`).join(" ")} style={{ fill: "var(--accent)", fillOpacity: 0.1, stroke: "var(--accent)", strokeWidth: 2.5 }} />}
        {POLES.map(({ p, label }) => { const inn = inside.some((q) => q.label === label); return (
          <g key={label}>
            <g style={{ stroke: inn ? "var(--danger)" : "var(--text-faint)", strokeWidth: 3 }}><line x1={X(p[0]) - 6} y1={Y(p[1]) - 6} x2={X(p[0]) + 6} y2={Y(p[1]) + 6} /><line x1={X(p[0]) - 6} y1={Y(p[1]) + 6} x2={X(p[0]) + 6} y2={Y(p[1]) - 6} /></g>
            <text x={X(p[0]) + 9} y={Y(p[1]) - 8} style={{ fill: "var(--text-muted)", fontSize: 12 }}>{label}</text>
          </g>
        ); })}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>residues: at 0, −0.5i; at 1, 0.2 + 0.4i; at 2i, −0.2 + 0.1i</div>
        <div>{ok ? `∮ f dz round the rectangle = ${cs(I)}` : "Make the right edge exceed the left, and the top exceed the bottom."}</div>
        <div>2πi × (sum of residues inside) = {cs(pred)}</div>
      </div>
      <figcaption className="viz-caption">
        Stretch the rectangle to enclose different poles. The numerically computed integral always matches 2πi times the sum of
        the residues inside. Enclose all three and the integral is 0: the residues sum to 0, because f decays like 1/z³.
      </figcaption>
    </figure>
  );
}
