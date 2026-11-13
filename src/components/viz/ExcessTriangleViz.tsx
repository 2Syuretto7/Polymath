"use client";

import { useState } from "react";

type V3 = [number, number, number];

/** Measuring curvature from inside: on a sphere of radius R, angle excess divided by area is 1/R². */
export function ExcessTriangleViz() {
  const [th, setTh] = useState(60);
  const [ph, setPh] = useState(70);
  const [R, setR] = useState(1);
  const t = (th * Math.PI) / 180, p = (ph * Math.PI) / 180;
  const cosc = Math.cos(t) ** 2 + Math.sin(t) ** 2 * Math.cos(p);
  const c = Math.acos(Math.max(-1, Math.min(1, cosc)));
  const cosB = (Math.cos(t) * (1 - cosc)) / (Math.sin(t) * Math.sin(c));
  const B = Math.acos(Math.max(-1, Math.min(1, cosB)));
  const sum = p + 2 * B;
  const excess = sum - Math.PI;
  const P: V3 = [0, 0, 1];
  const Q: V3 = [Math.sin(t), 0, Math.cos(t)];
  const S: V3 = [Math.sin(t) * Math.cos(p), Math.sin(t) * Math.sin(p), Math.cos(t)];
  const n: V3 = [Q[1] * S[2] - Q[2] * S[1], Q[2] * S[0] - Q[0] * S[2], Q[0] * S[1] - Q[1] * S[0]];
  let unitArea = 0;
  const M = 600;
  for (let i = 0; i < M; i++) {
    const lam = ((i + 0.5) / M) * p;
    const den = n[0] * Math.cos(lam) + n[1] * Math.sin(lam);
    let tb = Math.atan2(-n[2], den);
    if (tb < 0) tb += Math.PI;
    unitArea += (1 - Math.cos(tb)) * (p / M);
  }
  const area = unitArea * R * R;
  const slerp = (a: V3, b: V3, s: number): V3 => {
    const om = Math.acos(Math.max(-1, Math.min(1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2])));
    if (om < 1e-6) return a;
    const k1 = Math.sin((1 - s) * om) / Math.sin(om), k2 = Math.sin(s * om) / Math.sin(om);
    return [k1 * a[0] + k2 * b[0], k1 * a[1] + k2 * b[1], k1 * a[2] + k2 * b[2]];
  };
  const az = -0.9, el = 0.45;
  const proj = ([x, y, z]: V3): [number, number, number] => {
    const x1 = x * Math.cos(az) - y * Math.sin(az), y1 = x * Math.sin(az) + y * Math.cos(az);
    return [x1, -(y1 * Math.sin(el) + z * Math.cos(el)), y1 * Math.cos(el) - z * Math.sin(el)];
  };
  const cx = 150, cy = 130, r = 100;
  const arc = (a: V3, b: V3) => Array.from({ length: 41 }, (_, i) => proj(slerp(a, b, i / 40))).map((q, i) => `${i ? "L" : "M"}${(cx + r * q[0]).toFixed(1)},${(cy + r * q[1]).toFixed(1)}`).join(" ");
  const eq = Array.from({ length: 121 }, (_, i) => { const a = (i / 120) * 2 * Math.PI; return proj([Math.cos(a), Math.sin(a), 0]); }).map((q, i) => `${i ? "L" : "M"}${(cx + r * q[0]).toFixed(1)},${(cy + r * q[1]).toFixed(1)}`).join(" ");
  const deg = (x: number) => ((x * 180) / Math.PI).toFixed(1);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>length of the two sides from the pole (degrees of arc): <span className="mono">{th}°</span></span>
          <input type="range" min={5} max={90} step={1} value={th} onChange={(e) => setTh(Number(e.target.value))} /></label>
        <label><span>angle at the pole: <span className="mono">{ph}°</span></span>
          <input type="range" min={5} max={170} step={1} value={ph} onChange={(e) => setPh(Number(e.target.value))} /></label>
        <label><span>radius of the sphere R: <span className="mono">{R.toFixed(1)}</span></span>
          <input type="range" min={0.5} max={3} step={0.1} value={R} onChange={(e) => setR(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 260" role="img" aria-label="A geodesic triangle on a sphere with one vertex at the pole" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <circle cx={cx} cy={cy} r={r} style={{ fill: "var(--bg)", stroke: "var(--border)", strokeWidth: 1.5 }} />
        <path d={eq} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
        <path d={`${arc(P, Q)} ${arc(Q, S).replace("M", "L")} ${arc(S, P).replace("M", "L")} Z`} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        {[P, Q, S].map((v, i) => { const q = proj(v); return <circle key={i} cx={cx + r * q[0]} cy={cy + r * q[1]} r={4} style={{ fill: "var(--text)" }} />; })}
        <text x={300} y={50} style={{ fill: "var(--text)", fontSize: 13 }}>angles: {deg(p)}°, {deg(B)}°, {deg(B)}°</text>
        <text x={300} y={80} style={{ fill: "var(--text)", fontSize: 13 }}>angle sum: {deg(sum)}°</text>
        <text x={300} y={110} style={{ fill: "var(--text)", fontSize: 13 }}>excess: {excess.toFixed(4)} rad</text>
        <text x={300} y={140} style={{ fill: "var(--text)", fontSize: 13 }}>area: {area.toFixed(4)}</text>
        <text x={300} y={175} style={{ fill: "var(--text)", fontSize: 14, fontWeight: 700 }}>excess ÷ area = {(excess / area).toFixed(4)}</text>
        <text x={300} y={200} style={{ fill: "var(--text)", fontSize: 13 }}>1/R² = {(1 / (R * R)).toFixed(4)}</text>
      </svg>
      <figcaption className="viz-caption">
        The sides are arcs of great circles, the straightest paths on the sphere. The angles always add up to more than 180°,
        and Girard&rsquo;s theorem says the excess equals area ÷ R²; here the area is measured separately, by integrating. A surveyor who never leaves the surface can therefore
        measure the curvature K = 1/R² from angles and areas alone, which is what Gauss&rsquo;s Theorema Egregium promises.
      </figcaption>
    </figure>
  );
}
