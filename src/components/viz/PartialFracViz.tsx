"use client";

import { useState } from "react";
import { fmtNum } from "./format";
import { Axes, curvePath, scales, type View } from "./Plot";

type Piece = { label: string; f: (x: number) => number };
type Case = { name: string; poles: number[]; R: (x: number) => number; pieces: Piece[]; note: string };

const CASES: Case[] = [
  {
    name: "1 / (x² − 1)", poles: [-1, 1], R: (x) => 1 / (x * x - 1),
    pieces: [{ label: "(1/2) / (x − 1)", f: (x) => 0.5 / (x - 1) }, { label: "−(1/2) / (x + 1)", f: (x) => -0.5 / (x + 1) }],
    note: "Near x = 1 only the first piece blows up, and near x = −1 only the second.",
  },
  {
    name: "(x + 5) / (x² + x − 2)", poles: [-2, 1], R: (x) => (x + 5) / (x * x + x - 2),
    pieces: [{ label: "2 / (x − 1)", f: (x) => 2 / (x - 1) }, { label: "−1 / (x + 2)", f: (x) => -1 / (x + 2) }],
    note: "The coefficient 2 is (x + 5)/(x + 2) at x = 1: cover up the factor x − 1 and put x = 1.",
  },
  {
    name: "1 / (x(x − 1)²)", poles: [0, 1], R: (x) => 1 / (x * (x - 1) ** 2),
    pieces: [{ label: "1 / x", f: (x) => 1 / x }, { label: "−1 / (x − 1)", f: (x) => -1 / (x - 1) }, { label: "1 / (x − 1)²", f: (x) => 1 / (x - 1) ** 2 }],
    note: "A repeated factor needs a piece for each power. Near x = 1 the squared piece dominates, and keeps R positive on both sides.",
  },
  {
    name: "1 / (x(x² + 1))", poles: [0], R: (x) => 1 / (x * (x * x + 1)),
    pieces: [{ label: "1 / x", f: (x) => 1 / x }, { label: "−x / (x² + 1)", f: (x) => -x / (x * x + 1) }],
    note: "x² + 1 has no real roots, so its piece has a linear numerator and stays bounded.",
  },
];

const V: View = { xmin: -3, xmax: 3, ymin: -4, ymax: 4, w: 520, h: 300 };

/** A rational function and the simple fractions that add up to it. */
export function PartialFracViz() {
  const [k, setK] = useState(0);
  const [x, setX] = useState(1.6);
  const [show, setShow] = useState<number | null>(null);
  const C = CASES[k];
  const { X, Y } = scales(V);
  const cut = (f: (t: number) => number) => (t: number) => (C.poles.some((p) => Math.abs(t - p) < 0.03) ? NaN : f(t));
  const four = (n: number) => fmtNum(Number(n.toFixed(4)));
  const atPole = C.poles.some((p) => Math.abs(x - p) < 1e-6);
  const pick = (i: number) => { setK(i); setShow(null); };

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Rational function">
        {CASES.map((c, i) => (
          <button key={c.name} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => pick(i)}>
            <span className="mono">{c.name}</span>
          </button>
        ))}
      </div>
      <p className="mono" style={{ margin: "12px 0 4px" }}>
        {C.name} = {C.pieces.map((p) => p.label).join(" + ").replace(/\+ −/g, "− ")}
      </p>
      <div className="viz-controls" style={{ marginTop: 4, flexWrap: "wrap" }} role="group" aria-label="Highlight a piece">
        <span style={{ fontSize: 14 }}>Highlight:</span>
        {C.pieces.map((p, i) => (
          <button key={p.label} type="button" className={show === i ? "btn btn-primary" : "btn"} aria-pressed={show === i} onClick={() => setShow(show === i ? null : i)}>
            <span className="mono">{p.label}</span>
          </button>
        ))}
      </div>
      <Axes v={V} label={`The graph of ${C.name}, with its partial fractions as dashed curves`}>
        {C.poles.map((p) => <line key={p} x1={X(p)} y1={0} x2={X(p)} y2={V.h} className="plot-grid" style={{ strokeDasharray: "2 4" }} />)}
        {C.pieces.map((p, i) => (
          <path key={p.label} d={curvePath(V, cut(p.f), 900)} className={show === i ? "plot-line" : "plot-ghost"} style={show === i ? { strokeWidth: 2.5, fill: "none" } : undefined} />
        ))}
        <path d={curvePath(V, cut(C.R), 900)} className="plot-curve" />
        {!atPole && Number.isFinite(C.R(x)) && Math.abs(C.R(x)) < 4 && <circle cx={X(x)} cy={Y(C.R(x))} r={5} className="plot-hot" />}
        <line x1={X(x)} y1={0} x2={X(x)} y2={V.h} className="plot-ghost" />
      </Axes>
      <div className="viz-controls">
        <label className="viz-stepper-label" style={{ flex: 1 }}>
          x = <span className="mono">{four(x)}</span>
          <input type="range" className="viz-range" min={-2.9} max={2.9} step={0.05} value={x} onChange={(e) => setX(Number(e.target.value))} />
        </label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          {C.pieces.map((p) => <tr key={p.label}><td className="mono">{p.label}</td><td className="mono">{atPole ? "undefined" : four(p.f(x))}</td></tr>)}
          <tr><td>sum of the pieces</td><td className="mono">{atPole ? "undefined" : four(C.pieces.reduce((s, p) => s + p.f(x), 0))}</td></tr>
          <tr><td className="mono">{C.name}</td><td className="mono">{atPole ? "undefined" : four(C.R(x))}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The solid curve is the rational function; the dashed curves are the pieces, each easy to integrate. At every x the
        pieces add up to the function. {C.note}
      </figcaption>
    </figure>
  );
}
