"use client";

import { useState } from "react";

const FS: { name: string; poles: [number, number][] }[] = [
  { name: "1/(1 + z²)", poles: [[0, 1], [0, -1]] },
  { name: "1/(1 − z)", poles: [[1, 0]] },
  { name: "1/(z² − 2z + 2)", poles: [[1, 1], [1, -1]] },
  { name: "eᶻ", poles: [] },
];

/** The disc of convergence of a Taylor series reaches out to the nearest singularity, even one off the real line. */
export function PoleDiscViz() {
  const [fi, setFi] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const F = FS[fi];
  const R = F.poles.length ? Math.min(...F.poles.map(([p, q]) => Math.hypot(p - a, q - b))) : Infinity;
  const W = 400, B = 3, pad = 10;
  const X = (u: number) => W / 2 + (u / B) * (W / 2 - pad);
  const Y = (v: number) => W / 2 - (v / B) * (W / 2 - pad);
  const sc = (W / 2 - pad) / B;
  const real = R > Math.abs(b) ? Math.sqrt(R * R - b * b) : null;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {FS.map((f, i) => <button key={f.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>{f.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>centre, real part: <span className="mono">{a}</span></span><input type="range" min={-2} max={2} step={0.25} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>centre, imaginary part: <span className="mono">{b}</span></span><input type="range" min={-2} max={2} step={0.25} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Disc of convergence and the singularities of the function" style={{ width: "100%", maxWidth: 440, display: "block", margin: "6px auto" }}>
        {isFinite(R) ? <circle cx={X(a)} cy={Y(b)} r={R * sc} style={{ fill: "var(--accent)", fillOpacity: 0.15, stroke: "var(--accent)", strokeWidth: 2 }} /> : <rect x={0} y={0} width={W} height={W} style={{ fill: "var(--accent)", fillOpacity: 0.1 }} />}
        <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
        {real !== null && isFinite(R) && <line x1={X(a - real)} y1={Y(0)} x2={X(a + real)} y2={Y(0)} style={{ stroke: "var(--text)", strokeWidth: 4 }} />}
        {F.poles.map(([p, q]) => (
          <g key={`${p},${q}`} style={{ stroke: "var(--danger)", strokeWidth: 3 }}>
            <line x1={X(p) - 7} y1={Y(q) - 7} x2={X(p) + 7} y2={Y(q) + 7} />
            <line x1={X(p) - 7} y1={Y(q) + 7} x2={X(p) + 7} y2={Y(q) - 7} />
          </g>
        ))}
        <circle cx={X(a)} cy={Y(b)} r={5} style={{ fill: "var(--text)" }} />
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>radius of convergence about {a} {b < 0 ? "−" : "+"} {Math.abs(b)}i: {R === 0 ? "none, the centre is a singularity" : isFinite(R) ? R.toFixed(4) : "infinite"}</div>
        <div>{R === 0 ? "No Taylor series exists here." : !isFinite(R) ? "The series converges on the whole real line." : real !== null ? `On the real line it converges for ${(a - real).toFixed(3)} < x < ${(a + real).toFixed(3)}.` : "The disc does not reach the real line."}</div>
      </div>
      <figcaption className="viz-caption">
        The crosses mark where the function blows up. The Taylor series about the centre converges in the largest disc that
        avoids them. That is why 1/(1 + x²), smooth on the whole real line, has a series about 0 of radius only 1: its
        singularities sit at ±i.
      </figcaption>
    </figure>
  );
}
