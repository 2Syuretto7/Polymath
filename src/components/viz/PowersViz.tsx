"use client";

import { useState } from "react";
import { Axes, scales, type View } from "./Plot";

const V: View = { xmin: -2.5, xmax: 2.5, ymin: -2.5, ymax: 2.5, w: 380, h: 380 };
const N = 12;
const ordinal = (n: number) => `${n}${n % 10 === 1 && n !== 11 ? "st" : n % 10 === 2 && n !== 12 ? "nd" : n % 10 === 3 && n !== 13 ? "rd" : "th"}`;

/** Powers of z = r(cos θ + i sin θ): each multiplication by z stretches by r and turns by θ. */
export function PowersViz() {
  const [r, setR] = useState(1);
  const [deg, setDeg] = useState(40);
  const { X, Y } = scales(V);
  const t = (deg * Math.PI) / 180;
  const pts = Array.from({ length: N + 1 }, (_, k) => ({ x: r ** k * Math.cos(k * t), y: r ** k * Math.sin(k * t) }));
  const unit = Array.from({ length: 121 }, (_, i) => {
    const s = (2 * Math.PI * i) / 120;
    return `${i ? "L" : "M"}${X(Math.cos(s)).toFixed(1)} ${Y(Math.sin(s)).toFixed(1)}`;
  }).join(" ");
  const back = r === 1 ? Array.from({ length: N }, (_, k) => k + 1).find((k) => (k * deg) % 360 === 0) : undefined;

  return (
    <figure className="viz">
      <Axes v={V} label={`The first ${N} powers of a complex number with modulus ${r} and argument ${deg} degrees`}>
        <path d={unit} className="plot-ghost" />
        <path d={pts.map((p, k) => `${k ? "L" : "M"}${X(p.x).toFixed(1)} ${Y(p.y).toFixed(1)}`).join(" ")} className="plot-curve" style={{ strokeWidth: 1.5, opacity: 0.55 }} />
        {pts.map((p, k) => (
          <circle key={k} cx={X(p.x)} cy={Y(p.y)} r={k === 1 ? 6 : 4} className={k === 1 ? "plot-hot" : "plot-point"} />
        ))}
        {pts.slice(0, 4).map((p, k) => (
          <text key={k} x={X(p.x) + 8} y={Y(p.y) - 6} className="viz-label">{k === 0 ? "1" : k === 1 ? "z" : <>z<tspan dy={-5} fontSize={10}>{k}</tspan></>}</text>
        ))}
      </Axes>
      <div className="viz-sliders">
        <label>
          <span>Modulus <span className="mono">r = {r.toFixed(2)}</span></span>
          <input type="range" min={0.85} max={1.15} step={0.01} value={r} onChange={(e) => setR(Number(Number(e.target.value).toFixed(2)))} />
        </label>
        <label>
          <span>Argument <span className="mono">θ = {deg}°</span></span>
          <input type="range" min={0} max={180} step={1} value={deg} onChange={(e) => setDeg(Number(e.target.value))} />
        </label>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        The power <span className="mono">z<sup>k</sup></span> has modulus <span className="mono">r<sup>k</sup></span> and argument{" "}
        <span className="mono">kθ</span>, so the powers {r > 1 ? "spiral outwards" : r < 1 ? "spiral inwards" : "walk round the unit circle"}.{" "}
        {back
          ? <>After {back} steps they return exactly to 1: <span className="mono">z</span> is {back === 8 || back === 11 ? "an" : "a"} {ordinal(back)} root of unity.</>
          : r === 1
            ? <>Try <span className="mono">θ = 60°</span> or <span className="mono">θ = 72°</span>, where they come back to 1.</>
            : <>Set <span className="mono">r = 1</span> to keep them on the circle.</>}
      </figcaption>
    </figure>
  );
}
