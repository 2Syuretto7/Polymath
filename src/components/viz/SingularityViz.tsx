"use client";

import { useState } from "react";

type C = [number, number];
const cexp = ([x, y]: C): C => [Math.exp(x) * Math.cos(y), Math.exp(x) * Math.sin(y)];
const inv = ([a, b]: C): C => { const d = a * a + b * b; return [a / d, -b / d]; };
const FS: { name: string; f: (z: C) => C; kind: string }[] = [
  { name: "sin z / z", f: ([x, y]) => { const s: C = [Math.sin(x) * Math.cosh(y), Math.cos(x) * Math.sinh(y)]; const q = inv([x, y]); return [s[0] * q[0] - s[1] * q[1], s[0] * q[1] + s[1] * q[0]]; }, kind: "removable: |f| stays bounded, and f(0) can be defined as 1" },
  { name: "1/z²", f: ([x, y]) => inv([x * x - y * y, 2 * x * y]), kind: "pole of order 2: |f| → ∞ uniformly, like 1/r²" },
  { name: "e^(1/z)", f: (z) => cexp(inv(z)), kind: "essential: on every small circle |f| is both huge and tiny" },
];
const RS = [1, 0.5, 0.3, 0.2, 0.15, 0.1];

/** Behaviour of f on small circles about an isolated singularity at 0: removable, pole or essential. */
export function SingularityViz() {
  const [fi, setFi] = useState(0);
  const [ri, setRi] = useState(2);
  const F = FS[fi];
  const r = RS[ri];
  const N = 720;
  const vals = Array.from({ length: N + 1 }, (_, k) => { const t = (2 * Math.PI * k) / N; const [u, v] = F.f([r * Math.cos(t), r * Math.sin(t)]); return Math.log10(Math.max(Math.hypot(u, v), 1e-300)); });
  const mx = Math.max(...vals), mn = Math.min(...vals);
  const W = 460, H = 200, L = 46;
  const cl = (v: number) => Math.max(-6, Math.min(6, v));
  const X = (k: number) => L + (k / N) * (W - L - 10), Y = (v: number) => 10 + ((6 - cl(v)) / 12) * (H - 30);
  const fmt = (v: number) => (Math.abs(v) >= 1e5 || Math.abs(v) < 1e-3 ? `10^${v.toFixed(1)}` : (10 ** v).toFixed(4));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {FS.map((f, i) => <button key={f.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>f(z) = {f.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>radius r of the circle about 0: <span className="mono">{r}</span></span>
          <input type="range" min={0} max={RS.length - 1} step={1} value={ri} onChange={(e) => setRi(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="log of |f| round the circle" style={{ width: "100%", display: "block", marginTop: 6 }}>
        {[-6, -3, 0, 3, 6].map((e) => <g key={e}><line x1={L} y1={Y(e)} x2={W - 10} y2={Y(e)} style={{ stroke: "var(--border)" }} /><text x={L - 6} y={Y(e) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{e === 0 ? "1" : `10^${e}`}</text></g>)}
        <path d={vals.map((v, k) => `${k ? "L" : "M"}${X(k).toFixed(1)},${Y(v).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        {["0", "π/2", "π", "3π/2", "2π"].map((t, k) => <text key={t} x={X((k * N) / 4)} y={H - 4} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{t}</text>)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>on |z| = {r}: max |f| = {fmt(mx)}, min |f| = {fmt(mn)}</div>
        <div>{F.kind}</div>
      </div>
      <figcaption className="viz-caption">
        The curve shows |f(re^(it))| on a logarithmic scale as t goes once round the circle; values beyond 10^6 or below
        10^−6 are cut off. Shrink r: a removable singularity keeps the curve level, a pole lifts all of it, and an essential
        singularity stretches it both ways at once, as the Casorati&ndash;Weierstrass theorem predicts.
      </figcaption>
    </figure>
  );
}
