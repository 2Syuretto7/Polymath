"use client";

import { useState } from "react";
import { fmtNum } from "./format";

type V = [number, number];
type FieldKey = "swirl" | "gradient";
const FIELDS: Record<FieldKey, { name: string; F: (x: number, y: number) => V }> = {
  swirl: { name: "F = (−y, x)", F: (x, y) => [-y, x] },
  gradient: { name: "F = (y, x) = ∇(xy)", F: (x, y) => [y, x] },
};

type Path = { name: string; r: (t: number) => V; dr: (t: number) => V; closed?: boolean };
const PATHS: Path[] = [
  { name: "quarter circle", r: (t) => [Math.cos((Math.PI * t) / 2), Math.sin((Math.PI * t) / 2)], dr: (t) => [(-Math.PI / 2) * Math.sin((Math.PI * t) / 2), (Math.PI / 2) * Math.cos((Math.PI * t) / 2)] },
  { name: "straight line", r: (t) => [1 - t, t], dr: () => [-1, 1] },
  { name: "via the corner (1, 1)", r: (t) => (t < 0.5 ? [1, 2 * t] : [2 - 2 * t, 1]), dr: (t) => (t < 0.5 ? [0, 2] : [-2, 0]) },
  { name: "full circle, closed", r: (t) => [Math.cos(2 * Math.PI * t), Math.sin(2 * Math.PI * t)], dr: (t) => [-2 * Math.PI * Math.sin(2 * Math.PI * t), 2 * Math.PI * Math.cos(2 * Math.PI * t)], closed: true },
];

const S = 105, CX = 150, CY = 175;
const X = (x: number) => CX + S * x, Y = (y: number) => CY - S * y;

/** Work done by a vector field along different paths: the line integral ∫ F · dr, accumulated as a point moves along. */
export function WorkPathViz({ fields = ["swirl"], loop = false }: { fields?: FieldKey[]; loop?: boolean }) {
  const [fk, setFk] = useState<FieldKey>(fields[0]);
  const [pi, setPi] = useState(0);
  const [t, setT] = useState(1);
  const paths = loop ? PATHS : PATHS.slice(0, 3);
  const P = paths[pi], F = FIELDS[fk].F;
  const N = 600;
  const integrand = (s: number) => { const [x, y] = P.r(s); const f = F(x, y), d = P.dr(s); return f[0] * d[0] + f[1] * d[1]; };
  let work = 0;
  const steps = Math.round(N * t);
  for (let i = 0; i < steps; i++) work += (integrand((i + 0.5) / N) * 1) / N;
  const p = P.r(t), d = P.dr(Math.min(t, 0.9999)), f = F(p[0], p[1]);
  const dl = Math.hypot(d[0], d[1]);
  const FT = (f[0] * d[0] + f[1] * d[1]) / dl;
  const grid: V[] = [];
  for (let gx = -1.2; gx <= 1.61; gx += 0.4) for (let gy = -1.2; gy <= 1.61; gy += 0.4) grid.push([gx, gy]);
  const pathD = Array.from({ length: 201 }, (_, i) => P.r(i / 200)).map((q, i) => `${i ? "L" : "M"}${X(q[0]).toFixed(1)},${Y(q[1]).toFixed(1)}`).join("");
  const doneD = Array.from({ length: 201 }, (_, i) => P.r((i / 200) * t)).map((q, i) => `${i ? "L" : "M"}${X(q[0]).toFixed(1)},${Y(q[1]).toFixed(1)}`).join("");
  const fm = (z: number) => fmtNum(Number(z.toFixed(3)));

  return (
    <figure className="viz">
      {fields.length > 1 && (
        <div className="segmented" role="group" aria-label="Field">
          {fields.map((k) => (
            <button key={k} type="button" className={k === fk ? "seg is-on" : "seg"} aria-pressed={k === fk} onClick={() => setFk(k)}>{FIELDS[k].name}</button>
          ))}
        </div>
      )}
      <div className="segmented" role="group" aria-label="Path" style={{ marginTop: 8 }}>
        {paths.map((q, i) => (
          <button key={q.name} type="button" className={i === pi ? "seg is-on" : "seg"} aria-pressed={i === pi} onClick={() => setPi(i)}>{q.name}</button>
        ))}
      </div>
      <svg viewBox="0 0 340 330" role="img" aria-label={`The field ${FIELDS[fk].name} and the path ${P.name}`} style={{ width: "100%", maxWidth: 420, display: "block", margin: "12px auto 0" }}>
        <defs>
          <marker id="wp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--text-faint)" }} />
          </marker>
          <marker id="wp-arrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--danger)" }} />
          </marker>
        </defs>
        <line x1={0} y1={CY} x2={340} y2={CY} className="viz-axis" />
        <line x1={CX} y1={0} x2={CX} y2={330} className="viz-axis" />
        {grid.map(([gx, gy]) => {
          const v = F(gx, gy); const m = Math.hypot(v[0], v[1]);
          if (m < 1e-6) return null;
          const k = 0.16 / Math.max(1, m * 0.6);
          return <line key={`${gx}-${gy}`} x1={X(gx)} y1={Y(gy)} x2={X(gx + v[0] * k)} y2={Y(gy + v[1] * k)} markerEnd="url(#wp-arrow)" style={{ stroke: "var(--text-faint)", strokeWidth: 1.2 }} />;
        })}
        <path d={pathD} style={{ fill: "none", stroke: "var(--border-strong)", strokeWidth: 2, strokeDasharray: "5 4" }} />
        <path d={doneD} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 3.5 }} />
        <line x1={X(p[0])} y1={Y(p[1])} x2={X(p[0] + f[0] * 0.35)} y2={Y(p[1] + f[1] * 0.35)} markerEnd="url(#wp-arrow2)" style={{ stroke: "var(--danger)", strokeWidth: 2 }} />
        <circle cx={X(p[0])} cy={Y(p[1])} r={5} style={{ fill: "var(--accent)" }} />
      </svg>
      <div className="viz-sliders">
        <label><span>how far along the path: <span className="mono">{Math.round(t * 100)}%</span></span>
          <input type="range" min={0} max={1} step={0.01} value={t} onChange={(e) => setT(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>F · T at the point: the push along the path</td><td className="mono">{fm(FT)}</td></tr>
          <tr><td>work so far, ∫ F · dr</td><td className="mono">{fm(work)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {t < 1
          ? "The red arrow is the field at the point. Only its component along the path does work. Move to the end of the path to see the total."
          : fk === "swirl"
            ? `Total work along the ${P.name}: ${fm(work)}. ${P.closed ? "Going once round a closed loop, this field does positive work." : "Try the other paths: they share their endpoints, but the work differs."}`
            : `Total work along the ${P.name}: ${fm(work)}. For this field every path from (1, 0) to (0, 1) gives the same answer, xy at the end minus xy at the start.`}
      </figcaption>
    </figure>
  );
}
