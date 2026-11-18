"use client";

import { useState } from "react";

const STAGES = [
  {
    name: "at the keyhole",
    text: "Absorbed in what is happening behind the door, I am not an object to myself at all. There is only the scene, organised around my project of seeing. Consciousness is aware of itself, but not as a thing.",
  },
  {
    name: "footsteps: I am seen",
    text: "Someone is in the corridor. Suddenly I exist as an object: a jealous eavesdropper, bent at a keyhole. This self is mine, yet it is in the other’s hands, and I feel it in shame. The world drains away towards the other’s point of view.",
  },
  {
    name: "I look back",
    text: "I turn and stare. Now the other becomes an object in my world, a mere busybody. But this reversal is unstable: at any moment their look can make me an object again. Sartre calls this conflict the original meaning of being-for-others.",
  },
];

/** Sartre’s keyhole: the look of another turns me from a pure subject into an object for them. */
export function LookViz() {
  const [s, setS] = useState(0);
  const meObj = s === 1, otherObj = s === 2;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="moment">
        {STAGES.map((st, i) => <button key={st.name} type="button" aria-pressed={s === i} className={s === i ? "seg is-on" : "seg"} onClick={() => setS(i)}>{st.name}</button>)}
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="Me, the door, and the other in the corridor" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          <marker id="look-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--danger)" }} />
          </marker>
          <marker id="see-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--accent)" }} />
          </marker>
        </defs>
        <rect x={20} y={40} width={110} height={110} rx={8} style={{ fill: "var(--accent-soft)", stroke: "var(--border)" }} />
        <text x={75} y={98} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>the scene</text>
        <text x={75} y={114} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>behind the door</text>
        <line x1={150} y1={30} x2={150} y2={165} style={{ stroke: "var(--text)", strokeWidth: 4 }} />
        <circle cx={150} cy={95} r={4} style={{ fill: "var(--bg)", stroke: "var(--text)" }} />
        {s === 0 && <line x1={225} y1={95} x2={140} y2={95} markerEnd="url(#see-arrow)" style={{ stroke: "var(--accent)", strokeWidth: 2.5 }} />}
        <g>
          <rect x={200} y={70} width={90} height={50} rx={meObj ? 4 : 25}
            style={{ fill: meObj ? "var(--danger-soft)" : "none", stroke: meObj ? "var(--danger)" : "var(--text-faint)", strokeWidth: meObj ? 2.5 : 1.5, strokeDasharray: meObj ? undefined : "4 4" }} />
          <text x={245} y={92} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: meObj ? 700 : 400 }}>{meObj ? "me, an object:" : "me"}</text>
          <text x={245} y={108} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{meObj ? "an eavesdropper" : s === 0 ? "(not an object)" : "looking"}</text>
          {meObj && <text x={245} y={140} textAnchor="middle" style={{ fill: "var(--danger)", fontSize: 13, fontWeight: 700 }}>shame</text>}
        </g>
        {s > 0 && (
          <g>
            <rect x={380} y={70} width={134} height={50} rx={otherObj ? 4 : 25}
              style={{ fill: otherObj ? "var(--accent-soft)" : "none", stroke: otherObj ? "var(--accent)" : "var(--text-faint)", strokeWidth: otherObj ? 2.5 : 1.5, strokeDasharray: otherObj ? undefined : "4 4" }} />
            <text x={447} y={92} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: otherObj ? 700 : 400 }}>{otherObj ? "the other, an object:" : "the other"}</text>
            <text x={447} y={108} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{otherObj ? "a busybody" : "a subject who sees me"}</text>
            {meObj
              ? <line x1={378} y1={95} x2={295} y2={95} markerEnd="url(#look-arrow)" style={{ stroke: "var(--danger)", strokeWidth: 2.5 }} />
              : <line x1={292} y1={95} x2={376} y2={95} markerEnd="url(#see-arrow)" style={{ stroke: "var(--accent)", strokeWidth: 2.5 }} />}
            <text x={336} y={86} textAnchor="middle" style={{ fill: meObj ? "var(--danger)" : "var(--accent)", fontSize: 11 }}>the look</text>
          </g>
        )}
      </svg>
      <p className="viz-caption" style={{ fontWeight: 600 }}>{STAGES[s].text}</p>
      <figcaption className="viz-caption">
        Dashed shapes are subjects, which are never objects to themselves; solid shapes are objects. The look does not
        prove that other minds exist by argument: in shame I experience the other directly, as the one for whom I am an
        object.
      </figcaption>
    </figure>
  );
}
