"use client";

import { useState } from "react";

/** A Frankfurt case: Black's device would make Jones vote for the same candidate, so Jones could not have done otherwise. Is he responsible? */
export function FrankfurtViz() {
  const [device, setDevice] = useState(true);
  const [incl, setIncl] = useState<"A" | "B">("A");
  const [link, setLink] = useState<"det" | "indet">("det");
  const intervene = device && incl === "B";
  const vote = intervene ? "A" : incl;
  const couldOtherwise = !device ? "yes" : intervene ? "no: the device made sure of A" : link === "det" ? "no: had he begun to lean towards B, the twitch would have warned Black, who would have stepped in" : "yes: the twitch does not settle his decision, so he could still have chosen B at the last moment";
  const own = !intervene;
  const frankfurt = own;
  const pap = !device || link === "indet" ? own : false;
  const clash = frankfurt !== pap;
  const row = (k: string, v: string, strong?: boolean) => (
    <tr key={k}><td style={{ fontSize: 14 }}>{k}</td><td style={{ fontSize: 14, fontWeight: strong ? 600 : 400 }}>{v}</td></tr>
  );
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>
        Jones is deciding whether to vote for candidate A or B. Black wants him to vote for A and has secretly fitted a device. If Jones shows a twitch, the sign that he is about to choose B, the device will make him choose A.
      </p>
      <div className="viz-controls" style={{ marginTop: 0 }}>
        <span style={{ fontSize: 13, color: "var(--text-muted)" }}>device:</span>
        {[true, false].map((d) => <button key={String(d)} type="button" aria-pressed={device === d} className={device === d ? "viz-chip is-on" : "viz-chip"} onClick={() => setDevice(d)}>{d ? "fitted" : "absent"}</button>)}
        <span style={{ fontSize: 13, color: "var(--text-muted)", marginLeft: 8 }}>Jones by himself would choose:</span>
        {(["A", "B"] as const).map((c) => <button key={c} type="button" aria-pressed={incl === c} className={incl === c ? "viz-chip is-on" : "viz-chip"} onClick={() => setIncl(c)}>{c}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="Link between the twitch and the choice" style={{ marginTop: 8 }}>
        {([["det", "twitch determines the choice"], ["indet", "twitch only makes the choice likely"]] as const).map(([k, l]) => <button key={k} type="button" aria-pressed={link === k} className={link === k ? "seg is-on" : "seg"} onClick={() => setLink(k)}>{l}</button>)}
      </div>
      <table className="table" style={{ marginTop: 10 }}>
        <tbody>
          {row("Jones votes for", vote, true)}
          {row("Black intervenes", intervene ? "yes" : "no")}
          {row("Could Jones have done otherwise?", couldOtherwise)}
          {row("Did Jones choose on his own?", own ? "yes" : "no: the device chose for him")}
          {row("Responsible, by Frankfurt’s test (acted on his own)", frankfurt ? "yes" : "no", true)}
          {row("Responsible, by the principle of alternate possibilities", pap ? "yes" : "no", true)}
        </tbody>
      </table>
      <p className={clash ? "viz-verdict viz-verdict-wrong" : "viz-verdict viz-verdict-right"} style={{ margin: "6px 0" }}>
        {clash ? "The two tests disagree: Jones chose A on his own, yet could not have done otherwise." : "The two tests agree here."}
      </p>
      <figcaption className="viz-caption">
        With the device fitted and Jones choosing A by himself, Black never acts, and Jones seems responsible though he had no alternative. The Widerker–Kane dilemma presses on the twitch: if it determines the choice, the case assumes determinism and begs the question against the libertarian; if it does not, Jones could have done otherwise after all.
      </figcaption>
    </figure>
  );
}
