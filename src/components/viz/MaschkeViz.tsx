"use client";

import { useState, type CSSProperties } from "react";

type M2 = [number, number, number, number];
const mm = (p: M2, q: M2): M2 => [p[0] * q[0] + p[1] * q[2], p[0] * q[1] + p[1] * q[3], p[2] * q[0] + p[3] * q[2], p[2] * q[1] + p[3] * q[3]];
const G: M2 = [1, 0, 1, -1]; // g² = 1; fixes the line through (2, 1) and negates the line through (0, 1)
const f = (x: number) => (Math.abs(x) < 0.005 ? "0" : x.toFixed(2).replace("-", "−"));

/** Maschke’s theorem by averaging: any projection onto an invariant line, averaged over the group, has an invariant kernel. */
export function MaschkeViz() {
  const [tab, setTab] = useState(0);
  const [deg, setDeg] = useState(150);
  const th = (deg * Math.PI) / 180, u: [number, number] = [Math.cos(th), Math.sin(th)];
  // projection onto W = span(2, 1) along U = span(u)
  const det = 2 * u[1] - 1 * u[0];
  const Pinv: M2 = [u[1] / det, -u[0] / det, -1 / det, 2 / det];
  const pi = mm([2, 0, 1, 0], Pinv);
  const gpg = mm(mm(G, pi), G);
  const avg: M2 = [0, 1, 2, 3].map((i) => (pi[i] + gpg[i]) / 2) as M2;
  const ker: [number, number] = Math.hypot(avg[0], avg[1]) > 1e-9 ? [-avg[1], avg[0]] : [-avg[3], avg[2]];
  const gu: [number, number] = [G[0] * u[0] + G[1] * u[1], G[2] * u[0] + G[3] * u[1]];
  const W = 300, B = 3, X = (x: number) => W / 2 + (x / B) * (W / 2), Y = (y: number) => W / 2 - (y / B) * (W / 2);
  const line = (v: [number, number], style: CSSProperties, key: string) => {
    const n = Math.hypot(v[0], v[1]), k = (B * 1.5) / n;
    return <line key={key} x1={X(-v[0] * k)} y1={Y(-v[1] * k)} x2={X(v[0] * k)} y2={Y(v[1] * k)} style={style} />;
  };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Field">
        {["over ℝ", "over 𝔽₂"].map((l, i) => <button key={l} type="button" aria-pressed={tab === i} className={tab === i ? "seg is-on" : "seg"} onClick={() => setTab(i)}>{l}</button>)}
      </div>
      {tab === 0 ? (
        <>
          <div className="viz-sliders" style={{ marginTop: 8 }}>
            <label><span>direction of the chosen complement U: <span className="mono">{deg}°</span></span>
              <input type="range" min={0} max={175} step={5} value={deg} onChange={(e) => setDeg(Number(e.target.value))} /></label>
          </div>
          {Math.abs(det) < 0.05 ? (
            <p>U lies along W here, so it is not a complement. Move the slider.</p>
          ) : (
            <>
              <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="The invariant line W, a chosen complement U, its image under g, and the averaged complement" style={{ width: "100%", maxWidth: 320, display: "block", margin: "6px auto" }}>
                {line([2, 1], { stroke: "var(--accent)", strokeWidth: 3 }, "w")}
                {line(u, { stroke: "var(--text-faint)", strokeWidth: 1.8 }, "u")}
                {line(gu, { stroke: "var(--text-faint)", strokeWidth: 1.8, strokeDasharray: "6 4" }, "gu")}
                {line(ker, { stroke: "var(--text)", strokeWidth: 2.5, strokeDasharray: "2 3" }, "k")}
                <text x={X(2.4)} y={Y(1.2) - 6} style={{ fill: "var(--text)", fontSize: 13 }}>W</text>
              </svg>
              <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
                <div>π, projection onto W along U: [[{f(pi[0])}, {f(pi[1])}], [{f(pi[2])}, {f(pi[3])}]]</div>
                <div>averaged ½(π + gπg⁻¹): [[{f(avg[0])}, {f(avg[1])}], [{f(avg[2])}, {f(avg[3])}]]</div>
                <div>U is invariant: <strong>{Math.abs(u[0] * gu[1] - u[1] * gu[0]) < 1e-6 ? "yes" : "no"}</strong>; kernel of the average: the line through (0, 1), invariant</div>
              </div>
            </>
          )}
        </>
      ) : (
        <div style={{ marginTop: 10, fontSize: 14 }}>
          <p style={{ margin: "0 0 6px" }}>The group of order 2 acts on 𝔽₂² by swapping coordinates. The line W = {"{00, 11}"} is invariant. Its complements are:</p>
          <div className="mono" style={{ display: "grid", gap: 4 }}>
            <div>{"{00, 10}"}: the swap sends it to {"{00, 01}"}, not invariant</div>
            <div>{"{00, 01}"}: the swap sends it to {"{00, 10}"}, not invariant</div>
          </div>
          <p style={{ margin: "6px 0 0" }}>No invariant complement exists. Averaging would divide by 2, which is 0 in 𝔽₂.</p>
        </div>
      )}
      <figcaption className="viz-caption">
        Here g is a reflection that fixes the solid line W and reverses the line through (0, 1). A complement U chosen at random
        is moved by g, shown dashed. Averaging the projection over the group gives a projection whose kernel, dotted, is
        invariant, wherever U started.
      </figcaption>
    </figure>
  );
}
