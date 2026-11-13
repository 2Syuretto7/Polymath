"use client";

import { useState } from "react";
import { fmtNum } from "./format";

type V = [number, number];
const FIELDS = {
  uniform: { name: "steady flow F = (1, 0)", F: (_x: number, _y: number): V => [1, 0] },
  source: { name: "spreading flow F = (x, y)", F: (x: number, y: number): V => [x, y] },
};
type FK = keyof typeof FIELDS;

const S = 100, CX = 170, CY = 150;
const X = (x: number) => CX + S * x, Y = (y: number) => CY - S * y;

/** Flux of a flow in the plane across a window or out of a circle: ∫ F · n ds, the rate at which fluid crosses. */
export function FluxViz() {
  const [fk, setFk] = useState<FK>("uniform");
  const [shape, setShape] = useState<"window" | "circle">("window");
  const [ang, setAng] = useState(0);
  const [rad, setRad] = useState(0.8);
  const F = FIELDS[fk].F;
  const a = (ang * Math.PI) / 180;
  const n: V = [Math.cos(a), Math.sin(a)], dir: V = [-Math.sin(a), Math.cos(a)];
  const C: V = [0.5, 0], L = 1.2, N = 400;
  let flux = 0;
  if (shape === "window") {
    for (let i = 0; i < N; i++) {
      const s = -L / 2 + (L * (i + 0.5)) / N;
      const f = F(C[0] + s * dir[0], C[1] + s * dir[1]);
      flux += (f[0] * n[0] + f[1] * n[1]) * (L / N);
    }
  } else {
    for (let i = 0; i < N; i++) {
      const th = (2 * Math.PI * (i + 0.5)) / N;
      const f = F(rad * Math.cos(th), rad * Math.sin(th));
      flux += (f[0] * Math.cos(th) + f[1] * Math.sin(th)) * ((2 * Math.PI * rad) / N);
    }
  }
  const grid: V[] = [];
  for (let gx = -1.4; gx <= 1.41; gx += 0.35) for (let gy = -1.2; gy <= 1.21; gy += 0.35) grid.push([gx, gy]);
  const fm = (z: number) => fmtNum(Number(z.toFixed(3)));
  const nPts = [0, 1, 2, 3, 4, 5, 6, 7].map((k) => (k * Math.PI) / 4);

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Flow">
        {(Object.keys(FIELDS) as FK[]).map((k) => (
          <button key={k} type="button" className={k === fk ? "seg is-on" : "seg"} aria-pressed={k === fk} onClick={() => setFk(k)}>{FIELDS[k].name}</button>
        ))}
      </div>
      <div className="segmented" role="group" aria-label="Shape" style={{ marginTop: 8 }}>
        <button type="button" className={shape === "window" ? "seg is-on" : "seg"} aria-pressed={shape === "window"} onClick={() => setShape("window")}>a window</button>
        <button type="button" className={shape === "circle" ? "seg is-on" : "seg"} aria-pressed={shape === "circle"} onClick={() => setShape("circle")}>a closed circle</button>
      </div>
      <svg viewBox="0 0 340 300" role="img" aria-label="Flow arrows and a curve the flow crosses" style={{ width: "100%", maxWidth: 420, display: "block", margin: "12px auto 0" }}>
        <defs>
          <marker id="fx-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--text-faint)" }} />
          </marker>
          <marker id="fx-arrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--danger)" }} />
          </marker>
        </defs>
        {grid.map(([gx, gy]) => {
          const v = F(gx, gy); const m = Math.hypot(v[0], v[1]);
          if (m < 1e-6) return null;
          const k = 0.2 / Math.max(1, m);
          return <line key={`${gx}-${gy}`} x1={X(gx)} y1={Y(gy)} x2={X(gx + v[0] * k)} y2={Y(gy + v[1] * k)} markerEnd="url(#fx-arrow)" style={{ stroke: "var(--text-faint)", strokeWidth: 1.2 }} />;
        })}
        {shape === "window" ? (
          <>
            <line x1={X(C[0] - (L / 2) * dir[0])} y1={Y(C[1] - (L / 2) * dir[1])} x2={X(C[0] + (L / 2) * dir[0])} y2={Y(C[1] + (L / 2) * dir[1])} style={{ stroke: "var(--accent)", strokeWidth: 4 }} />
            <line x1={X(C[0])} y1={Y(C[1])} x2={X(C[0] + 0.4 * n[0])} y2={Y(C[1] + 0.4 * n[1])} markerEnd="url(#fx-arrow2)" style={{ stroke: "var(--danger)", strokeWidth: 2 }} />
          </>
        ) : (
          <>
            <circle cx={CX} cy={CY} r={rad * S} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 4 }} />
            {nPts.map((th) => (
              <line key={th} x1={X(rad * Math.cos(th))} y1={Y(rad * Math.sin(th))} x2={X((rad + 0.25) * Math.cos(th))} y2={Y((rad + 0.25) * Math.sin(th))} markerEnd="url(#fx-arrow2)" style={{ stroke: "var(--danger)", strokeWidth: 1.5 }} />
            ))}
          </>
        )}
      </svg>
      <div className="viz-sliders">
        {shape === "window" ? (
          <label><span>direction of the normal n: <span className="mono">{ang}°</span></span>
            <input type="range" min={0} max={180} step={5} value={ang} onChange={(e) => setAng(Number(e.target.value))} /></label>
        ) : (
          <label><span>radius of the circle: <span className="mono">{fm(rad)}</span></span>
            <input type="range" min={0.2} max={1.2} step={0.05} value={rad} onChange={(e) => setRad(Number(e.target.value))} /></label>
        )}
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>{shape === "window" ? "length of the window" : "length of the circle, 2πr"}</td><td className="mono">{shape === "window" ? fm(L) : fm(2 * Math.PI * rad)}</td></tr>
          <tr><td>flux ∫ F · n ds, in the direction of the red normals</td><td className="mono">{fm(flux)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {shape === "window"
          ? "Only the part of the flow along the normal carries fluid across. Turn the window edge-on to the flow and nothing crosses; turn it past 90° and the flux becomes negative."
          : fk === "uniform"
            ? "A steady flow enters one side of the circle and leaves the other at the same rate, so the net flux out is 0, whatever the radius."
            : "A spreading flow leaves every part of the circle. The net flux out is 2πr², twice the enclosed area: fluid is being created at a rate of 2 per unit area."}
      </figcaption>
    </figure>
  );
}
