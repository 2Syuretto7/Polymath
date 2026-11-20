"use client";

import { useState } from "react";

export const UFUNCS = [
  { label: "u(x) = 1 + 2x", u: (x: number) => 1 + 2 * x, du: (_x: number) => 2 },
  { label: "u(x) = x² + x", u: (x: number) => x * x + x, du: (x: number) => 2 * x + 1 },
  { label: "u(x) = cos 3x", u: (x: number) => Math.cos(3 * x), du: (x: number) => -3 * Math.sin(3 * x) },
];

/** Extend u from [0, 1] to [−1, 0] by even reflection, or by the higher-order reflection −3u(−x) + 4u(−x/2). */
export function extend(u: (x: number) => number, x: number, higher: boolean) {
  if (x >= 0) return u(x);
  return higher ? -3 * u(-x) + 4 * u(-x / 2) : u(-x);
}

export function ReflectionExtensionViz() {
  const [k, setK] = useState(0);
  const [higher, setHigher] = useState(false);
  const F = UFUNCS[k];
  const X = (x: number) => 270 + x * 230;
  const Y = (y: number) => 100 - y * 28;
  const xs = Array.from({ length: 201 }, (_, i) => -1 + i * 0.01);
  const leftSlope = higher ? 3 * F.du(0) - 2 * F.du(0) : -F.du(0);
  const rightSlope = F.du(0);
  const jump = rightSlope - leftSlope;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="function">
        {UFUNCS.map((f, i) => <button key={f.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{f.label}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="extension" style={{ marginTop: 8 }}>
        <button type="button" aria-pressed={!higher} className={!higher ? "seg is-on" : "seg"} onClick={() => setHigher(false)}>even reflection</button>
        <button type="button" aria-pressed={higher} className={higher ? "seg is-on" : "seg"} onClick={() => setHigher(true)}>higher-order reflection</button>
      </div>
      <svg viewBox="0 0 540 200" role="img" aria-label="The function on the right and its extension to the left" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={X(-1)} y={10} width={X(0) - X(-1)} height={180} style={{ fill: "var(--bg-subtle)" }} />
        <line x1={30} y1={Y(0)} x2={510} y2={Y(0)} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X(0)} y1={10} x2={X(0)} y2={190} style={{ stroke: "var(--grid-line)" }} />
        <polyline points={xs.filter((x) => x <= 0).map((x) => `${X(x)},${Math.max(5, Math.min(195, Y(extend(F.u, x, higher))))}`).join(" ")} style={{ fill: "none", stroke: "var(--success)", strokeWidth: 2.5 }} />
        <polyline points={xs.filter((x) => x >= 0).map((x) => `${X(x)},${Y(F.u(x))}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <text x={X(-0.5)} y={185} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>extension</text>
        <text x={X(0.5)} y={185} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>original domain</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        At 0 the slope from the left is {leftSlope.toFixed(2)} and from the right {rightSlope.toFixed(2)}: {Math.abs(jump) < 1e-9 ? "the extension is C¹ across the boundary." : `the derivative jumps by ${jump.toFixed(2)}.`}
      </p>
      <figcaption className="viz-caption">
        Even reflection keeps u continuous, which is enough to extend W¹˒ᵖ functions, but the derivative flips sign. The
        reflection −3u(−x) + 4u(−x/2) is chosen so that values and first derivatives match at 0, so it extends C¹ functions
        to C¹ functions, and by approximation W¹˒ᵖ functions across a C¹ boundary.
      </figcaption>
    </figure>
  );
}
