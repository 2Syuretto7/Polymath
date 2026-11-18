"use client";

import { useState } from "react";

const REPLIES = [
  { name: "by perception", text: "Perception shows only present, particular cases: this smoke with this fire. It cannot reach all smoke, past, future and far away." },
  { name: "by inference", text: "Then that inference needs its own universal connection, which needs another inference, and so on without end." },
  { name: "by testimony", text: "Testimony is trusted only by inferring that the speaker is reliable, so it needs inference too; and the Vedas, the Cārvāka adds, were composed by buffoons, knaves and demons." },
  { name: "by a universal", text: "Smokehood and firehood are not perceived either, and the link between universals is no easier to know than the link between instances." },
];

/** The Cārvāka challenge: how is a universal connection ever known? */
export function CarvakaViz() {
  const [seen, setSeen] = useState(5);
  const [r, setR] = useState<number | null>(null);
  return (
    <figure className="viz">
      <p style={{ margin: "4px 0" }}><strong>Claim: wherever there is smoke, there is fire. How do you know?</strong></p>
      <svg viewBox="0 0 520 90" role="img" aria-label="Observed cases of smoke with fire, among endless unobserved cases" style={{ width: "100%", display: "block", marginTop: 4 }}>
        {Array.from({ length: 38 }, (_, i) => (
          <circle key={i} cx={20 + i * 12.5} cy={40} r={5} style={{ fill: i < seen ? "var(--accent)" : "var(--bg)", stroke: i < seen ? "var(--accent)" : "var(--border)", strokeWidth: 1.5 }} />
        ))}
        <text x={505} y={44} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 16 }}>…</text>
        <text x={20} y={75} style={{ fill: "var(--text-muted)", fontSize: 11 }}>filled: cases of smoke you have seen with fire; open: cases you never will see</text>
      </svg>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={seen >= 35} onClick={() => setSeen(seen + 5)}>See five more cases</button>
      </div>
      <div className="segmented" role="group" aria-label="reply" style={{ flexWrap: "wrap", marginTop: 6 }}>
        {REPLIES.map((x, i) => <button key={x.name} type="button" aria-pressed={r === i} className={r === i ? "seg is-on" : "seg"} onClick={() => setR(i)}>{x.name}</button>)}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {r === null ? `${seen} cases seen, unlimited cases unseen. Choose how you would defend the universal claim.` : `Cārvāka: ${REPLIES[r].text}`}
      </p>
      <figcaption className="viz-caption">
        However many cases you see, the open ones remain. The Cārvākas concluded that only perception is a means of knowledge,
        and inference at best a useful guess: an argument that anticipates Hume&rsquo;s problem of induction by two thousand years.
      </figcaption>
    </figure>
  );
}
