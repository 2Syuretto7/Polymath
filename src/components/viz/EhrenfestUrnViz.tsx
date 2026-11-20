"use client";

import { useMemo, useState } from "react";

function rng(seed: number) {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

/** Ehrenfest’s urn: N particles start in the left half; at each step one, chosen at random, changes side. */
export function ehrenfestRun(n: number, steps: number, seed = 7) {
  const r = rng(seed + n);
  let left = n;
  const out = [left];
  for (let i = 0; i < steps; i++) { if (r() < left / n) left -= 1; else left += 1; out.push(left); }
  return out;
}

export function EhrenfestUrnViz() {
  const [n, setN] = useState(10);
  const [rev, setRev] = useState(false);
  const steps = 200;
  const run = useMemo(() => ehrenfestRun(n, steps), [n]);
  const shown = rev ? [...run].reverse() : run;
  const X = (i: number) => 40 + (i / steps) * 470;
  const Y = (f: number) => 160 - f * 140;
  const odds = Math.pow(2, n);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="direction">
        <button type="button" aria-pressed={!rev} className={!rev ? "seg is-on" : "seg"} onClick={() => setRev(false)}>forwards</button>
        <button type="button" aria-pressed={rev} className={rev ? "seg is-on" : "seg"} onClick={() => setRev(true)}>the same film reversed</button>
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <label>particles N = {n} <input type="range" min={4} max={100} step={2} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
      </div>
      <svg viewBox="0 0 540 185" role="img" aria-label="The fraction of particles in the left half over time" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={Y(0)} x2={510} y2={Y(0)} style={{ stroke: "var(--border-strong)" }} />
        <line x1={40} y1={Y(0.5)} x2={510} y2={Y(0.5)} style={{ stroke: "var(--grid-line)", strokeDasharray: "4 3" }} />
        <text x={34} y={Y(1) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>1</text>
        <text x={34} y={Y(0.5) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>½</text>
        <text x={34} y={Y(0) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>0</text>
        <text x={510} y={178} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>steps →</text>
        <polyline points={shown.map((l, i) => `${X(i)},${Y(l / n)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.8 }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {rev
          ? "Run backwards, the fraction climbs from about ½ to 1: every step obeys the same rule, but this is what an unlikely history looks like."
          : "Starting with all particles on the left, the fraction falls towards ½ and then fluctuates about it."}{" "}
        In equilibrium, all {n} are on the left about once in 2{String(n).split("").map((d) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(d)]).join("")}{n <= 20 ? ` = ${odds.toLocaleString("en-IN")}` : ""} observations.
      </p>
      <figcaption className="viz-caption">
        The rule treats left and right, and past and future, alike. The asymmetry comes from the start: almost all
        arrangements are near half and half, so from a special one the system almost certainly moves towards typical ones.
        Explaining the arrow of time needs an explanation of the special start.
      </figcaption>
    </figure>
  );
}
