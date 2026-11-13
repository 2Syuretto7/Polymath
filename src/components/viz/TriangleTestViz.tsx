"use client";

import { useState } from "react";

type C = [number, number];
const FS: { name: string; f: (z: C) => C; hol: boolean }[] = [
  { name: "z²", f: ([x, y]) => [x * x - y * y, 2 * x * y], hol: true },
  { name: "eᶻ", f: ([x, y]) => [Math.exp(x) * Math.cos(y), Math.exp(x) * Math.sin(y)], hol: true },
  { name: "Re z", f: ([x]) => [x, 0], hol: false },
  { name: "|z|", f: ([x, y]) => [Math.hypot(x, y), 0], hol: false },
  { name: "z̄²", f: ([x, y]) => [x * x - y * y, -2 * x * y], hol: false },
];

/** Morera’s test: the integral of f round every triangle. Holomorphic functions give 0 every time. */
export function TriangleTestViz() {
  const [fi, setFi] = useState(2);
  const [cx, setCx] = useState(0.5);
  const [cy, setCy] = useState(0);
  const [sz, setSz] = useState(1);
  const [rot, setRot] = useState(0);
  const F = FS[fi];
  const V: C[] = [0, 1, 2].map((k) => { const t = (rot * Math.PI) / 180 + (2 * Math.PI * k) / 3 + Math.PI / 2; return [cx + sz * Math.cos(t), cy + sz * Math.sin(t)]; });
  let re = 0, im = 0;
  const N = 400;
  for (let e = 0; e < 3; e++) {
    const a = V[e], b = V[(e + 1) % 3], dz: C = [(b[0] - a[0]) / N, (b[1] - a[1]) / N];
    for (let k = 0; k < N; k++) {
      const t = (k + 0.5) / N;
      const [u, v] = F.f([a[0] + t * (b[0] - a[0]), a[1] + t * (b[1] - a[1])]);
      re += u * dz[0] - v * dz[1]; im += u * dz[1] + v * dz[0];
    }
  }
  const area = (3 * Math.sqrt(3) / 4) * sz * sz;
  const W = 360, B = 3, X = (u: number) => W / 2 + (u / B) * (W / 2 - 8), Y = (v: number) => W / 2 - (v / B) * (W / 2 - 8);
  const fmt = (v: number) => (Math.abs(v) < 5e-4 ? "0.000" : v.toFixed(3));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {FS.map((f, i) => <button key={f.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>f(z) = {f.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>centre, real part: <span className="mono">{cx}</span></span><input type="range" min={-1.5} max={1.5} step={0.25} value={cx} onChange={(e) => setCx(Number(e.target.value))} /></label>
        <label><span>centre, imaginary part: <span className="mono">{cy}</span></span><input type="range" min={-1.5} max={1.5} step={0.25} value={cy} onChange={(e) => setCy(Number(e.target.value))} /></label>
        <label><span>size: <span className="mono">{sz}</span></span><input type="range" min={0.25} max={1.5} step={0.25} value={sz} onChange={(e) => setSz(Number(e.target.value))} /></label>
        <label><span>turn: <span className="mono">{rot}°</span></span><input type="range" min={0} max={115} step={5} value={rot} onChange={(e) => setRot(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="A triangle in the plane" style={{ width: "100%", maxWidth: 380, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
        <polygon points={V.map(([a, b]) => `${X(a)},${Y(b)}`).join(" ")} style={{ fill: "var(--accent)", fillOpacity: 0.12, stroke: "var(--accent)", strokeWidth: 2.5 }} />
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>∮ f(z) dz round the triangle = {fmt(re)} {im < -5e-4 ? "−" : "+"} {fmt(Math.abs(im))}i</div>
        <div>area of the triangle: {area.toFixed(3)}</div>
        <div>{F.hol ? "Holomorphic: the integral vanishes for every triangle." : "Not holomorphic: some triangles give a nonzero integral."}</div>
      </div>
      <figcaption className="viz-caption">
        Morera&rsquo;s theorem runs Goursat&rsquo;s theorem backwards: a continuous function whose integral round every
        triangle is 0 must be holomorphic. For Re z the integral is i times the area, by Green&rsquo;s theorem, so no triangle
        escapes.
      </figcaption>
    </figure>
  );
}
