"use client";

import { useState } from "react";

const SPROUTS = [
  { feeling: "compassion", virtue: "ren, humaneness" },
  { feeling: "shame", virtue: "yi, rightness" },
  { feeling: "deference", virtue: "li, propriety" },
  { feeling: "approving and disapproving", virtue: "zhi, wisdom" },
];

/** Mencius’s sprouts and Xunzi’s warped wood: two models of how virtue comes about. */
export function NatureModelsViz() {
  const [who, setWho] = useState<"mencius" | "xunzi">("mencius");
  const [g, setG] = useState(3);
  const f = g / 10;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="thinker">
        <button type="button" aria-pressed={who === "mencius"} className={who === "mencius" ? "seg is-on" : "seg"} onClick={() => setWho("mencius")}>Mencius: nature is good</button>
        <button type="button" aria-pressed={who === "xunzi"} className={who === "xunzi" ? "seg is-on" : "seg"} onClick={() => setWho("xunzi")}>Xunzi: nature is bad</button>
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label={who === "mencius" ? "Four sprouts growing" : "A warped board being straightened"} style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={20} y1={180} x2={500} y2={180} style={{ stroke: "var(--text-muted)", strokeWidth: 2 }} />
        {who === "mencius"
          ? SPROUTS.map((s, i) => {
              const x = 80 + i * 120, h = 20 + 130 * f;
              return (
                <g key={s.feeling}>
                  <path d={`M${x} 180 Q${x - 6} ${180 - h / 2} ${x} ${180 - h}`} style={{ fill: "none", stroke: "var(--success)", strokeWidth: 3 + 3 * f }} />
                  <ellipse cx={x - 12} cy={180 - h * 0.6} rx={10 + 8 * f} ry={4 + 3 * f} transform={`rotate(-30 ${x - 12} ${180 - h * 0.6})`} style={{ fill: "var(--success)", opacity: 0.7 }} />
                  <ellipse cx={x + 12} cy={180 - h * 0.8} rx={10 + 8 * f} ry={4 + 3 * f} transform={`rotate(30 ${x + 12} ${180 - h * 0.8})`} style={{ fill: "var(--success)", opacity: 0.7 }} />
                  <text x={x} y={198} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{s.feeling}</text>
                  <text x={x} y={214} textAnchor="middle" style={{ fill: f > 0.7 ? "var(--accent)" : "var(--text-faint)", fontSize: 11, fontWeight: 700 }}>{s.virtue}</text>
                </g>
              );
            })
          : (
            <g>
              <path d={`M60 120 Q260 ${120 - 80 * (1 - f)} 460 120`} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 14, strokeLinecap: "round" }} />
              <rect x={40} y={128} width={440} height={10} rx={3} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
              {[0, 1, 2, 3].map((i) => <rect key={i} x={100 + i * 100} y={60 - 30 * (1 - f)} width={16} height={60 + 30 * (1 - f)} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", opacity: f > 0.05 ? 1 : 0.3 }} />)}
              <text x={260} y={204} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>warped wood in the press-frame: ritual, teachers and law</text>
            </g>
          )}
      </svg>
      <div className="viz-controls">
        <label className="mono" style={{ fontSize: 13 }}>
          {who === "mencius" ? "nourishment" : "time in the press-frame"}: {g * 10}%{" "}
          <input type="range" min={0} max={10} value={g} onChange={(e) => setG(Number(e.target.value))} aria-label="amount of cultivation" />
        </label>
      </div>
      <p style={{ fontSize: 14, margin: "4px 0" }}>
        {who === "mencius"
          ? f > 0.7
            ? "Fully nourished, the four sprouts become the four virtues. Goodness was there from the start, as a beginning."
            : "Everyone has these four sprouts, as everyone has four limbs. They need nourishing, not adding from outside."
          : f > 0.9
            ? "Straight at last: but the straightness came from the frame, not the wood. Goodness is the product of deliberate effort (wei)."
            : "Left alone, desire leads to strife. Like warped wood, human nature must be steamed and pressed straight."}
      </p>
      <figcaption className="viz-caption">
        Both thinkers agree that cultivation is needed. They disagree about what it works on: Mencius sees virtue growing from
        within, like a sprout; Xunzi sees it imposed from without, like a carpenter&rsquo;s frame on wood.
      </figcaption>
    </figure>
  );
}
