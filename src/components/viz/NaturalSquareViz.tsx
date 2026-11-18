"use client";

import { useState } from "react";

const MAPS = [
  { key: "rot", label: "f = rotation by 90°", m: [0, -1, 1, 0] },
  { key: "scale", label: "f = scaling by 2", m: [2, 0, 0, 2] },
  { key: "shear", label: "f = shear", m: [1, 1, 0, 1] },
];
const v = [1, 2];
const phi = [3, -1];
const w = [1, 1];

/** Two squares for f : ℝ² → ℝ²: evaluation into the double dual always commutes; the basis map into the dual does not. */
export function NaturalSquareViz() {
  const [k, setK] = useState(1);
  const [a, b, c, d] = MAPS[k].m;
  const fv = [a * v[0] + b * v[1], c * v[0] + d * v[1]];
  const fw = [a * w[0] + b * w[1], c * w[0] + d * w[1]];
  // double dual: (f** ev_v)(φ) = ev_v(φ ∘ f) = φ(f v); ev_{f v}(φ) = φ(f v)
  const dd1 = phi[0] * fv[0] + phi[1] * fv[1];
  const dd2 = dd1;
  // dual via the standard basis: ι(v) = ⟨v, ·⟩. Square: ι_V(v) vs f*(ι_W(f v)), tested on w
  const d1 = v[0] * w[0] + v[1] * w[1];
  const d2 = fv[0] * fw[0] + fv[1] * fw[1];
  const ok = Math.abs(d1 - d2) < 1e-9;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="linear map">
        {MAPS.map((M, i) => <button key={M.key} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{M.label}</button>)}
      </div>
      <svg viewBox="0 0 520 170" role="img" aria-label="Two naturality squares" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs><marker id="ns-arr" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={8} markerHeight={8} markerUnits="userSpaceOnUse" orient="auto"><path d="M0 0 L10 5 L0 10 Z" style={{ fill: "var(--text-muted)" }} /></marker></defs>
        {[{ x: 20, t: "V", r: "V**", bl: "W", br: "W**", top: "ev", left: "f", right: "f**", good: true }, { x: 280, t: "V", r: "V*", bl: "W", br: "W*", top: "ι", left: "f", right: "f*", good: ok }].map((s, i) => (
          <g key={i}>
            <rect x={s.x} y={10} width={220} height={150} rx={10} style={{ fill: "none", stroke: s.good ? "var(--accent)" : "var(--danger)", strokeWidth: 2 }} />
            <text x={s.x + 40} y={45} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 14, fontWeight: 700 }}>{s.t}</text>
            <text x={s.x + 180} y={45} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 14, fontWeight: 700 }}>{s.r}</text>
            <text x={s.x + 40} y={135} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 14, fontWeight: 700 }}>{s.bl}</text>
            <text x={s.x + 180} y={135} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 14, fontWeight: 700 }}>{s.br}</text>
            <line x1={s.x + 60} y1={40} x2={s.x + 155} y2={40} markerEnd="url(#ns-arr)" style={{ stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
            <line x1={s.x + 60} y1={130} x2={s.x + 155} y2={130} markerEnd="url(#ns-arr)" style={{ stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
            <line x1={s.x + 40} y1={55} x2={s.x + 40} y2={115} markerEnd="url(#ns-arr)" style={{ stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
            {i === 0
              ? <line x1={s.x + 180} y1={55} x2={s.x + 180} y2={115} markerEnd="url(#ns-arr)" style={{ stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
              : <line x1={s.x + 180} y1={115} x2={s.x + 180} y2={55} markerEnd="url(#ns-arr)" style={{ stroke: "var(--text-muted)", strokeWidth: 1.5 }} />}
            <text x={s.x + 108} y={33} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{s.top}</text>
            <text x={s.x + 108} y={123} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{s.top}</text>
            <text x={s.x + 30} y={89} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{s.left}</text>
            <text x={s.x + 190} y={89} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{s.right}</text>
            <text x={s.x + 110} y={89} textAnchor="middle" style={{ fill: s.good ? "var(--accent)" : "var(--danger)", fontSize: 12, fontWeight: 700 }}>{s.good ? "commutes" : "fails"}</text>
          </g>
        ))}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        With v = (1, 2), φ = (3, −1), w = (1, 1). Double dual: both ways round give φ(fv) = {dd1} and {dd2}. Basis dual: ⟨v, w⟩ = {d1}, but ⟨fv, fw⟩ = {d2}. {ok ? "Equal for this f." : "Not equal."}
      </p>
      <figcaption className="viz-caption">
        Sending v to evaluation at v needs no choices, and the left square commutes for every linear f. Sending v to the
        functional ⟨v, ·⟩ uses the standard basis, and its square commutes only when f preserves the inner product, as a
        rotation does. That is the precise sense in which V ≅ V** is natural and V ≅ V* is not.
      </figcaption>
    </figure>
  );
}
