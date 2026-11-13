"use client";

import { useState } from "react";

const WHO = ["a student crossing the quad", "the gardener", "God"] as const;

/** The tree in the quad: does it exist when nobody is looking? Compare Locke, Berkeley without God, and Berkeley with God. */
export function QuadTreeViz() {
  const [on, setOn] = useState<boolean[]>([true, false, false]);
  const [tried, setTried] = useState(false);
  const humans = on[0] || on[1];
  const god = on[2];
  const row = (who: string, exists: boolean, why: string) => (
    <tr key={who}><td>{who}</td><td><strong>{exists ? "exists" : "does not exist"}</strong>. {why}</td></tr>
  );

  return (
    <figure className="viz">
      <p className="mono-meta" style={{ margin: "0 0 6px", textTransform: "none" }}>Who is perceiving the tree?</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {WHO.map((w, i) => (
          <button key={w} type="button" style={{ cursor: "pointer" }} className={on[i] ? "viz-chip is-on" : "viz-chip"} aria-pressed={on[i]}
            onClick={() => setOn(on.map((v, j) => (j === i ? !v : v)))}>{w}</button>
        ))}
      </div>
      <svg viewBox="0 0 520 130" role="img" aria-label="A tree in a college quad" style={{ width: "100%", display: "block", marginTop: 10 }}>
        <rect x={150} y={20} width={220} height={100} rx={6} style={{ fill: "none", stroke: "var(--border-strong)" }} />
        <g style={{ opacity: humans || god ? 1 : 0.25 }}>
          <rect x={255} y={88} width={10} height={22} style={{ fill: "var(--text-muted)" }} />
          <circle cx={260} cy={62} r={26} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
        </g>
        {on[0] && <circle cx={180} cy={100} r={6} style={{ fill: "var(--text)" }} />}
        {on[1] && <circle cx={340} cy={100} r={6} style={{ fill: "var(--text)" }} />}
        {god && <text x={260} y={14} textAnchor="middle" style={{ fontSize: 12, fill: "var(--text-muted)" }}>perceived always, by an infinite mind</text>}
      </svg>
      <table className="table" style={{ marginTop: 4 }}>
        <tbody>
          {row("Locke", true, "A material thing exists whether or not anyone perceives it.")}
          {row("Berkeley, without God", humans, humans ? "It is being perceived, and to be is to be perceived." : "With no perceiver, the collection of ideas that is the tree is not had by anyone.")}
          {row("Berkeley, with God", humans || god, god ? "God perceives everything, always, so the tree continues when no human looks." : humans ? "It is being perceived." : "Add God as a perceiver, as Berkeley does.")}
        </tbody>
      </table>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => setTried(true)}>Try to conceive the tree existing unperceived</button>
      </div>
      {tried && (
        <p className="tagger-why" style={{ marginTop: 10 }}>
          You pictured a tree with nobody there. But in doing so you were conceiving it: the tree was an idea in your mind all
          along. This is Berkeley&rsquo;s master argument. Critics reply that conceiving a tree unperceived is not the same as
          conceiving the tree being perceived by me.
        </p>
      )}
      <figcaption className="viz-caption" aria-live="polite">
        Turn the perceivers on and off. Berkeley&rsquo;s slogan, esse est percipi, makes existence depend on being perceived, and God keeps the world going between human glances.
      </figcaption>
    </figure>
  );
}
