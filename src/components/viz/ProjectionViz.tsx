"use client";

import { useState } from "react";
import { Arrow, Axes, scales, type View } from "./Plot";
import { fmtNum } from "./format";
import { fr, fstr, type Frac } from "./frac";

const DIRS: [number, number][] = [[1, 0], [1, 1], [2, 1], [1, 2], [-1, 2], [1, 3]];
const V: View = { xmin: -5, xmax: 5, ymin: -5, ymax: 5, w: 400, h: 400 };

/** Project b onto the line through a: p = (aᵀb / aᵀa) a, and the error e = b − p is perpendicular to a. */
export function ProjectionViz() {
  const [k, setK] = useState(2);
  const [bx, setBx] = useState(1);
  const [by, setBy] = useState(3);
  const { X, Y } = scales(V);
  const [ax, ay] = DIRS[k];
  const atb = ax * bx + ay * by, ata = ax * ax + ay * ay;
  const xhat = fr(atb, ata);
  const p: [Frac, Frac] = [fr(atb * ax, ata), fr(atb * ay, ata)];
  const e: [Frac, Frac] = [fr(bx * ata - atb * ax, ata), fr(by * ata - atb * ay, ata)];
  const num = (z: Frac) => z.n / z.d;
  const px = num(p[0]), py = num(p[1]);
  const elen = Math.hypot(num(e[0]), num(e[1]));
  const P = [[fr(ax * ax, ata), fr(ax * ay, ata)], [fr(ay * ax, ata), fr(ay * ay, ata)]];
  const vec = (v: [Frac, Frac]) => `(${fstr(v[0])}, ${fstr(v[1])})`;
  // right-angle marker at p, if e is long enough to show it
  const ux = ax / Math.sqrt(ata), uy = ay / Math.sqrt(ata);
  const ex = elen > 1e-9 ? num(e[0]) / elen : 0, ey = elen > 1e-9 ? num(e[1]) / elen : 0;
  const s = 0.3;
  const corner = `M${X(px + s * ex)} ${Y(py + s * ey)} L${X(px + s * ex - s * ux)} ${Y(py + s * ey - s * uy)} L${X(px - s * ux)} ${Y(py - s * uy)}`;

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Direction a">
        {DIRS.map((d, i) => (
          <button key={d.join()} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => setK(i)}>
            a = ({fmtNum(d[0])}, {fmtNum(d[1])})
          </button>
        ))}
      </div>
      <Axes v={V} label="Projection of b onto the line through a">
        <line x1={X(-10 * ax)} y1={Y(-10 * ay)} x2={X(10 * ax)} y2={Y(10 * ay)} style={{ stroke: "var(--accent)", strokeWidth: 6, opacity: 0.22 }} />
        <Arrow x1={X(0)} y1={Y(0)} x2={X(ax)} y2={Y(ay)} />
        <Arrow x1={X(0)} y1={Y(0)} x2={X(bx)} y2={Y(by)} className="plot-arrow is-muted" />
        <Arrow x1={X(px)} y1={Y(py)} x2={X(bx)} y2={Y(by)} className="plot-arrow is-hot" />
        {elen > 0.4 && <path d={corner} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />}
        <circle cx={X(px)} cy={Y(py)} r={5.5} className="plot-point" />
      </Axes>
      <div className="viz-sliders">
        <label><span>b, first entry = <span className="mono">{fmtNum(bx)}</span></span>
          <input type="range" min={-4} max={4} step={1} value={bx} onChange={(e) => setBx(Number(e.target.value))} /></label>
        <label><span>b, second entry = <span className="mono">{fmtNum(by)}</span></span>
          <input type="range" min={-4} max={4} step={1} value={by} onChange={(e) => setBy(Number(e.target.value))} /></label>
      </div>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>aᵀb / aᵀa</td><td>{fmtNum(atb)} / {fmtNum(ata)} = {fstr(xhat)}</td></tr>
          <tr><td>p = x̂ a</td><td>{vec(p)}</td></tr>
          <tr><td>e = b − p</td><td>{vec(e)}, and aᵀe = 0</td></tr>
          <tr><td>P = aaᵀ / aᵀa</td><td>[{fstr(P[0][0])} {fstr(P[0][1])}; {fstr(P[1][0])} {fstr(P[1][1])}]</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {elen < 1e-9
          ? "b already lies on the line, so its projection is b itself and the error is zero."
          : atb === 0
            ? "b is perpendicular to a, so its projection is the zero vector and all of b is error."
            : `The point p on the line nearest to b is ${vec(p)}. The red error e runs from p to b and meets the line at a right angle; any other point on the line is further from b.`}
      </figcaption>
    </figure>
  );
}
