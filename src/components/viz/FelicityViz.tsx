"use client";

import { useState } from "react";

const CONDS: { key: string; text: string; kind: "misfire" | "abuse" }[] = [
  { key: "proc", text: "there is an accepted procedure for naming ships", kind: "misfire" },
  { key: "person", text: "the speaker is the person appointed to name it", kind: "misfire" },
  { key: "complete", text: "the bottle is smashed and the words are said in full", kind: "misfire" },
  { key: "sincere", text: "the speaker intends the ship to bear the name", kind: "abuse" },
];

/** Austin’s felicity conditions for “I name this ship the Queen Elizabeth”. */
export function FelicityViz() {
  const [ok, setOk] = useState<Record<string, boolean>>({ proc: true, person: true, complete: true, sincere: true });
  const misfire = CONDS.filter((c) => c.kind === "misfire" && !ok[c.key]);
  const abuse = CONDS.filter((c) => c.kind === "abuse" && !ok[c.key]);
  const verdict = misfire.length
    ? "misfire: the act is void; the ship has not been named"
    : abuse.length
    ? "abuse: the ship is named, but the act is hollow"
    : "happy: the ship is named";
  return (
    <figure className="viz">
      <p className="viz-caption" style={{ marginTop: 0 }}>At the launch, someone says: &ldquo;I name this ship the Queen Elizabeth.&rdquo; Which conditions hold?</p>
      <div style={{ display: "grid", gap: 6 }}>
        {CONDS.map((c) => (
          <div key={c.key} style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <span style={{ minWidth: 320, flex: "1 1 320px" }}>{c.text}</span>
            <div className="segmented" role="group" aria-label={c.text}>
              <button type="button" aria-pressed={ok[c.key]} className={ok[c.key] ? "seg is-on" : "seg"} onClick={() => setOk({ ...ok, [c.key]: true })}>holds</button>
              <button type="button" aria-pressed={!ok[c.key]} className={!ok[c.key] ? "seg is-on" : "seg"} onClick={() => setOk({ ...ok, [c.key]: false })}>fails</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mono" style={{ marginTop: 12, padding: "6px 10px", borderRadius: 6, fontWeight: 700, background: misfire.length ? "var(--danger-soft)" : abuse.length ? "var(--danger-soft)" : "var(--accent-soft)" }}>
        {verdict}
      </div>
      <figcaption className="viz-caption">
        The utterance is not true or false; it does something, if it comes off. Austin called the ways it can fail{" "}
        <em>infelicities</em>. When the procedure, the person or the execution goes wrong, the act misfires and nothing is
        done; when the speaker lacks the required intention or feeling, the act is done but abused.
      </figcaption>
    </figure>
  );
}
