"use client";

import { useState } from "react";

const CARES = [
  { k: "do", label: "actually doing things, not just seeming to" },
  { k: "be", label: "being a certain kind of person" },
  { k: "real", label: "contact with a deeper reality, and real people" },
];

/** Nozick’s experience machine: if only experiences matter to how well your life goes, you should plug in. */
export function ExperienceMachineViz() {
  const [real, setReal] = useState(60);
  const [mach, setMach] = useState(90);
  const [care, setCare] = useState<string[]>([]);
  const [choice, setChoice] = useState<"in" | "out" | null>(null);
  const hedon = mach > real ? "in" : "out";
  const toggle = (k: string) => setCare(care.includes(k) ? care.filter((x) => x !== k) : [...care, k]);
  const bar = (v: number, label: string) => (
    <div style={{ display: "grid", gap: 4 }}>
      <div className="mono" style={{ fontSize: 13 }}>{label}: {v}</div>
      <div style={{ height: 12, background: "var(--bg-subtle)", border: "1px solid var(--border)", borderRadius: 3 }}>
        <div style={{ width: `${v}%`, height: "100%", background: "var(--accent)" }} />
      </div>
    </div>
  );
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>
        Neuroscientists offer to plug you into a machine for life. It will give you any experiences you like: writing a great
        novel, making friends, climbing a mountain. You will not know you are in it.
      </p>
      <div className="viz-sliders">
        <label><span>lifetime pleasure, real life: <span className="mono">{real}</span></span><input type="range" min={0} max={100} step={5} value={real} onChange={(e) => setReal(Number(e.target.value))} /></label>
        <label><span>lifetime pleasure, machine: <span className="mono">{mach}</span></span><input type="range" min={0} max={100} step={5} value={mach} onChange={(e) => setMach(Number(e.target.value))} /></label>
      </div>
      <div style={{ display: "grid", gap: 8, marginTop: 10 }}>{bar(real, "real life")}{bar(mach, "machine")}</div>
      <p style={{ margin: "10px 0 4px", fontSize: 14 }}>Besides pleasure, do you care about any of these?</p>
      <div className="viz-controls">
        {CARES.map((c) => <button key={c.k} type="button" aria-pressed={care.includes(c.k)} className={care.includes(c.k) ? "viz-chip is-on" : "viz-chip"} onClick={() => toggle(c.k)}>{c.label}</button>)}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <button type="button" className={choice === "in" ? "btn btn-primary" : "btn"} onClick={() => setChoice("in")}>Plug in</button>
        <button type="button" className={choice === "out" ? "btn btn-primary" : "btn"} onClick={() => setChoice("out")}>Stay out</button>
      </div>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14, marginTop: 8 }}>
        <div>hedonism says: <strong>{hedon === "in" ? "plug in" : "stay out"}</strong> (only experiences count)</div>
        {choice && <div>you chose: <strong>{choice === "in" ? "plug in" : "stay out"}</strong></div>}
      </div>
      {choice && (
        <p style={{ margin: "8px 0 4px", fontSize: 14 }}>
          {choice === hedon
            ? choice === "in"
              ? "You agree with hedonism here. Some hedonists accept this and say the reluctance others feel is status quo bias."
              : "You agree with hedonism here, since the real life has at least as much pleasure."
            : care.length
              ? "You chose against what pleasure alone recommends, and you care about more than experience. This is Nozick’s point: something other than how life feels from inside matters to how well it goes."
              : "You chose against hedonism without naming another value. Ask what your reason is: perhaps one of the items above, or doubt that the machine would work."}
        </p>
      )}
      <figcaption className="viz-caption">
        Robert Nozick, <em>Anarchy, State, and Utopia</em> (1974). Hedonism about wellbeing says a life goes well for you
        exactly to the extent that it contains pleasure and lacks pain. If most people would not plug in, even for more
        pleasure, that suggests wellbeing includes more than experiences.
      </figcaption>
    </figure>
  );
}
