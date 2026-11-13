"use client";

import { useMemo, useState } from "react";
import { add, div, mul, sub, type C } from "./complexTools";
import { cycleString } from "./permUtil";

// p(x) = x⁵ − 5x + c has a repeated root exactly when c = 4x with x⁴ = 1
const BRANCH: { label: string; b: C }[] = [
  { label: "4", b: [4, 0] },
  { label: "4i", b: [0, 4] },
  { label: "−4", b: [-4, 0] },
  { label: "−4i", b: [0, -4] },
];
const q = Math.pow(5, 0.25);
const START: C[] = [[q, 0], [0, q], [-q, 0], [0, -q], [0, 0]];
const N = 900, R = 1.5;

/** The point at time t ∈ [0, 1] on the loop from 0 out to the branch point b, once round it anticlockwise, and back. */
function loopPoint(b: C, t: number): C {
  const m = Math.hypot(b[0], b[1]), u: C = [b[0] / m, b[1] / m], reach = m - R;
  if (t < 0.25) { const s = (t / 0.25) * reach; return [u[0] * s, u[1] * s]; }
  if (t > 0.75) { const s = ((1 - t) / 0.25) * reach; return [u[0] * s, u[1] * s]; }
  const a = Math.atan2(u[1], u[0]) + Math.PI + ((t - 0.25) / 0.5) * 2 * Math.PI;
  return [b[0] + R * Math.cos(a), b[1] + R * Math.sin(a)];
}

/** Follow the five roots continuously as c runs once round the loop, by Newton's method from the previous positions. */
function track(b: C, start: C[]): C[][] {
  const paths: C[][] = start.map((z) => [z]);
  let cur = start.map((z) => [...z] as C);
  for (let k = 1; k <= N; k++) {
    const c = loopPoint(b, k / N);
    cur = cur.map((z0) => {
      let z = z0;
      for (let it = 0; it < 6; it++) {
        const z2 = mul(z, z), z4 = mul(z2, z2);
        const f = add(sub(mul(z4, z), [5 * z[0], 5 * z[1]]), c);
        const df = sub([5 * z4[0], 5 * z4[1]], [5, 0]);
        z = sub(z, div(f, df));
      }
      return z;
    });
    cur.forEach((z, i) => paths[i].push(z));
  }
  return paths;
}

const nearest = (z: C) => START.reduce((bi, s, i) => (Math.hypot(z[0] - s[0], z[1] - s[1]) < Math.hypot(z[0] - START[bi][0], z[1] - START[bi][1]) ? i : bi), 0);
const PATHS = BRANCH.map((br) => track(br.b, START));
const PERMS = PATHS.map((ps) => ps.map((p) => nearest(p[p.length - 1])));

/** Monodromy of the roots of x⁵ − 5x + c: loops of c round the branch points permute the roots, and generate all of S₅. */
export function RootMonodromyViz() {
  const [li, setLi] = useState(0);
  const [t, setT] = useState(1);
  const [total, setTotal] = useState([0, 1, 2, 3, 4]);
  const [word, setWord] = useState<string[]>([]);
  const paths = PATHS[li];
  const k = Math.round(t * N);
  const c = loopPoint(BRANCH[li].b, t);
  const S = 240, B1 = 6, B2 = 2.1;
  const X1 = (x: number) => S / 2 + (x / B1) * (S / 2 - 8), Y1 = (y: number) => S / 2 - (y / B1) * (S / 2 - 8);
  const X2 = (x: number) => S / 2 + (x / B2) * (S / 2 - 8), Y2 = (y: number) => S / 2 - (y / B2) * (S / 2 - 8);
  const loopD = useMemo(() => Array.from({ length: 201 }, (_, i) => loopPoint(BRANCH[li].b, i / 200)).map(([x, y], i) => `${i ? "L" : "M"}${X1(x).toFixed(1)},${Y1(y).toFixed(1)}`).join(" "), [li]); // eslint-disable-line react-hooks/exhaustive-deps
  const apply = (i: number) => {
    setLi(i); setT(1);
    setTotal(total.map((x) => PERMS[i][x]));
    setWord([...word, BRANCH[i].label]);
  };
  const axes = (X: (x: number) => number, Y: (y: number) => number) => (
    <>
      <line x1={0} y1={Y(0)} x2={S} y2={Y(0)} style={{ stroke: "var(--border)" }} />
      <line x1={X(0)} y1={0} x2={X(0)} y2={S} style={{ stroke: "var(--border)" }} />
    </>
  );
  return (
    <figure className="viz">
      <div className="viz-controls">
        {BRANCH.map((br, i) => <button key={br.label} type="button" className="btn btn-primary" onClick={() => apply(i)}>Loop round {br.label}</button>)}
        <button type="button" className="btn" onClick={() => { setTotal([0, 1, 2, 3, 4]); setWord([]); setT(1); }}>Reset</button>
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>position along the last loop: <span className="mono">{t.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.01} value={t} onChange={(e) => setT(Number(e.target.value))} /></label>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 6 }}>
        <div style={{ textAlign: "center" }}>
          <svg viewBox={`0 0 ${S} ${S}`} role="img" aria-label="The plane of the coefficient c, with the loop and the four branch points" style={{ width: 240, maxWidth: "100%", display: "block" }}>
            {axes(X1, Y1)}
            <path d={loopD} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1.5 }} />
            {BRANCH.map((br) => (
              <g key={br.label}>
                <path d={`M${X1(br.b[0]) - 5},${Y1(br.b[1]) - 5} L${X1(br.b[0]) + 5},${Y1(br.b[1]) + 5} M${X1(br.b[0]) - 5},${Y1(br.b[1]) + 5} L${X1(br.b[0]) + 5},${Y1(br.b[1]) - 5}`} style={{ stroke: "var(--text)", strokeWidth: 2 }} />
                <text x={X1(br.b[0]) + (br.b[0] < 0 ? 0 : 6)} y={Y1(br.b[1]) - 9} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{br.label}</text>
              </g>
            ))}
            <circle cx={X1(c[0])} cy={Y1(c[1])} r={6} style={{ fill: "var(--accent)" }} />
          </svg>
          <div style={{ fontSize: 13, color: "var(--text-muted)" }}>the coefficient c</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <svg viewBox={`0 0 ${S} ${S}`} role="img" aria-label="The five roots, numbered, and the paths they follow" style={{ width: 240, maxWidth: "100%", display: "block" }}>
            {axes(X2, Y2)}
            {paths.map((p, i) => <path key={i} d={p.map(([x, y], j) => `${j ? "L" : "M"}${X2(x).toFixed(1)},${Y2(y).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: PERMS[li][i] === i ? "var(--text-faint)" : "var(--accent)", strokeWidth: 1.5, strokeOpacity: 0.7 }} />)}
            {START.map((s, i) => <text key={i} x={X2(s[0]) + 10} y={Y2(s[1]) - 8} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{i + 1}</text>)}
            {paths.map((p, i) => <circle key={i} cx={X2(p[k][0])} cy={Y2(p[k][1])} r={5} style={{ fill: "var(--accent)" }} />)}
          </svg>
          <div style={{ fontSize: 13, color: "var(--text-muted)" }}>the roots of x⁵ − 5x + c</div>
        </div>
      </div>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14, marginTop: 6 }}>
        <div>this loop swaps the roots {cycleString(PERMS[li])}</div>
        <div>loops so far: {word.length ? word.join(", ") : "none"}; total permutation {cycleString(total)}</div>
      </div>
      <figcaption className="viz-caption">
        At c = 0 the roots are 0 and the four fourth roots of 5, numbered at their starting places. Two roots collide only when c
        is 4, 4i, −4 or −4i. Carrying c once round one of these points brings the roots back as a set, but two of them have
        swapped. These swaps generate all of S₅, which is not solvable.
      </figcaption>
    </figure>
  );
}
