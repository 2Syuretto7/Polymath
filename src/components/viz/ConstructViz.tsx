"use client";

import { useState } from "react";

const PROBLEMS = [
  { name: "double the cube", num: "∛2", poly: "x³ − 2", deg: "3", ok: false, why: "Its minimal polynomial has degree 3, which is not a power of 2." },
  { name: "trisect 60°", num: "cos 20°", poly: "8x³ − 6x − 1", deg: "3", ok: false, why: "From cos 3θ = 4cos³θ − 3cos θ with 3θ = 60°. Degree 3 again, so the general angle cannot be trisected." },
  { name: "square the circle", num: "√π", poly: "none", deg: "infinite", ok: false, why: "π is transcendental (Lindemann, 1882), so √π lies in no finite extension of ℚ." },
  { name: "regular 17-gon", num: "cos(2π/17)", poly: "degree 8", deg: "8 = 2³", ok: true, why: "Gauss showed the field ℚ(cos 2π/17) is reached by a tower of square roots, because 17 − 1 = 16 is a power of 2." },
  { name: "regular 7-gon", num: "cos(2π/7)", poly: "8x³ + 4x² − 4x − 1", deg: "3", ok: false, why: "Degree 3, so the regular heptagon cannot be constructed." },
];

/** Ruler-and-compass constructions: square roots can be constructed, and constructible numbers have degree a power of 2. */
export function ConstructViz() {
  const [mode, setMode] = useState(0);
  const [n, setN] = useState(3);
  const [pi, setPi] = useState(0);
  const W = 560, H = 230, u = (H - 40) / 6, x0 = 20, y0 = H - 30;
  const X = (x: number) => x0 + x * u, Y = (y: number) => y0 - y * u;
  const r = (1 + n) / 2, cx = r, h = Math.sqrt(n);
  const P = PROBLEMS[pi];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="View">
        {["construct √n", "the classical problems"].map((l, i) => <button key={l} type="button" aria-pressed={mode === i} className={mode === i ? "seg is-on" : "seg"} onClick={() => setMode(i)}>{l}</button>)}
      </div>
      {mode === 0 ? (
        <>
          <div className="viz-sliders" style={{ marginTop: 8 }}>
            <label><span>n: <span className="mono">{n}</span></span><input type="range" min={2} max={10} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
          </div>
          <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Constructing the square root of n with a semicircle" style={{ width: "100%", display: "block", marginTop: 6 }}>
            <path d={`M${X(0)},${Y(0)} A${r * u},${r * u} 0 0 1 ${X(1 + n)},${Y(0)}`} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1.5 }} />
            <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(0)} style={{ stroke: "var(--text)", strokeWidth: 3 }} />
            <line x1={X(1)} y1={Y(0)} x2={X(1 + n)} y2={Y(0)} style={{ stroke: "var(--text-muted)", strokeWidth: 3 }} />
            <line x1={X(1)} y1={Y(0)} x2={X(1)} y2={Y(h)} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />
            <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(h)} style={{ stroke: "var(--text-faint)", strokeDasharray: "4 4" }} />
            <line x1={X(1 + n)} y1={Y(0)} x2={X(1)} y2={Y(h)} style={{ stroke: "var(--text-faint)", strokeDasharray: "4 4" }} />
            <circle cx={X(cx)} cy={Y(0)} r={3} style={{ fill: "var(--text-muted)" }} />
            <circle cx={X(1)} cy={Y(h)} r={5} style={{ fill: "var(--accent)" }} />
            <text x={X(0.5)} y={Y(0) + 18} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>1</text>
            <text x={X(1 + n / 2)} y={Y(0) + 18} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>{n}</text>
            <text x={X(1) + 8} y={Y(h / 2)} style={{ fill: "var(--text)", fontSize: 13 }}>√{n} ≈ {h.toFixed(4)}</text>
          </svg>
          <p style={{ margin: "4px 0", fontSize: 14 }}>
            Lay segments of length 1 and {n} end to end, draw the semicircle on the whole, and raise a perpendicular at the
            join. The angle in a semicircle is a right angle, so similar triangles give h² = 1 · {n}.
          </p>
        </>
      ) : (
        <>
          <div className="viz-controls" style={{ marginTop: 8 }}>
            {PROBLEMS.map((p, i) => <button key={p.name} type="button" aria-pressed={pi === i} className={pi === i ? "viz-chip is-on" : "viz-chip"} onClick={() => setPi(i)}>{p.name}</button>)}
          </div>
          <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14, marginTop: 10 }}>
            <div>number needed: {P.num}</div>
            <div>minimal polynomial: {P.poly}; degree over ℚ: {P.deg}</div>
            <div><strong style={{ color: P.ok ? "var(--accent)" : "var(--danger)" }}>{P.ok ? "constructible" : "not constructible"}</strong></div>
          </div>
          <p style={{ margin: "6px 0", fontSize: 14 }}>{P.why}</p>
        </>
      )}
      <figcaption className="viz-caption">
        Each ruler-and-compass step solves equations of degree at most 2, so every constructible number lies at the top of a
        tower of quadratic extensions, and its degree over ℚ is a power of 2. Any number of degree 3 is out of reach.
      </figcaption>
    </figure>
  );
}
