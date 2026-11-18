"use client";

import { useState } from "react";

/** Han Feizi’s matching of performance to claim (xingming): reward a match, punish any mismatch, either way. */
export function XingMingViz() {
  const [done, setDone] = useState(10);
  const [view, setView] = useState<"han" | "kong">("han");
  const claim = 10;
  const match = done === claim;
  const verdict = view === "han"
    ? match
      ? "Reward. Words and deeds match, so the minister is rewarded exactly as promised."
      : done < claim
        ? "Punish. The words were large and the results small."
        : "Punish. The words were small and the results large: not because more land is unwelcome, but because a mismatch between word and deed does more harm than the extra fields do good."
    : done >= claim
      ? "Praise the minister’s diligence and character, and trust them with more."
      : "Look into the minister’s intentions; a person of good character who fell short may deserve patience.";
  const W = 22;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="whose ruler">
        <button type="button" aria-pressed={view === "han"} className={view === "han" ? "seg is-on" : "seg"} onClick={() => setView("han")}>Han Feizi&rsquo;s ruler</button>
        <button type="button" aria-pressed={view === "kong"} className={view === "kong" ? "seg is-on" : "seg"} onClick={() => setView("kong")}>a Confucian ruler</button>
      </div>
      <p style={{ margin: "8px 0" }}><strong>A minister promised to bring {claim} new fields under the plough this year.</strong></p>
      <svg viewBox="0 0 520 90" role="img" aria-label="Fields promised and fields delivered" style={{ width: "100%", display: "block" }}>
        <text x={10} y={26} style={{ fill: "var(--text-muted)", fontSize: 11 }}>promised</text>
        <text x={10} y={66} style={{ fill: "var(--text-muted)", fontSize: 11 }}>delivered</text>
        {Array.from({ length: 20 }, (_, i) => (
          <g key={i}>
            <rect x={70 + i * W} y={12} width={W - 4} height={20} style={{ fill: i < claim ? "var(--accent-soft)" : "none", stroke: i < claim ? "var(--accent)" : "var(--border)" }} />
            <rect x={70 + i * W} y={52} width={W - 4} height={20} style={{ fill: i < done ? (match ? "var(--accent-soft)" : "var(--bg-subtle)") : "none", stroke: i < done ? (match ? "var(--accent)" : "var(--danger)") : "var(--border)" }} />
          </g>
        ))}
      </svg>
      <div className="viz-controls">
        <label className="mono" style={{ fontSize: 13 }}>
          fields delivered: {done}{" "}
          <input type="range" min={0} max={20} value={done} onChange={(e) => setDone(Number(e.target.value))} aria-label="fields delivered" />
        </label>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, color: view === "han" && !match ? "var(--danger)" : "var(--text)" }}>{verdict}</p>
      <figcaption className="viz-caption">
        Han Feizi&rsquo;s ruler does not judge character, which can be faked. He holds the two handles, reward and
        punishment, and checks only whether the deed (xing) matches the name or claim (ming). Even overperformance is
        punished, as when the keeper of the hat covered a sleeping ruler with a robe and was put to death for doing another
        officer&rsquo;s job.
      </figcaption>
    </figure>
  );
}
