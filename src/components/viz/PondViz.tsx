"use client";

import { useState } from "react";

type Diff = { key: string; label: string; pond: string; aid: string; singer: string; critic: string };
const DIFFS: Diff[] = [
  {
    key: "distance", label: "distance",
    pond: "The child is a few metres away.",
    aid: "The people in need are thousands of kilometres away.",
    singer: "Distance does not change the moral facts. It once limited what we could do; now a transfer reaches the other side of the world in seconds.",
    critic: "Some argue that special responsibilities fall on those nearby, so that a community owes more to its own members. Others reply that this cannot outweigh a life.",
  },
  {
    key: "others", label: "others could help",
    pond: "You are the only person at the pond.",
    aid: "Millions of other people could give, and most do not.",
    singer: "Imagine other adults standing by the pond doing nothing. That does not make it all right for you to walk past too.",
    critic: "Liam Murphy argues that you should do only your fair share: what would be required if everyone did theirs. Singer replies that you would then let a child drown whom you could easily save.",
  },
  {
    key: "identified", label: "no identified victim",
    pond: "You can see the child.",
    aid: "You will never know whom your gift helped.",
    singer: "The child who dies abroad is as real as the one in front of you. The pull of the identified victim is a psychological fact, not a moral reason.",
    critic: "Some think the immediacy of an emergency in front of us creates a special duty of rescue that ongoing need does not.",
  },
  {
    key: "repeated", label: "it never ends",
    pond: "One rescue, and a ruined suit.",
    aid: "There is always another child to save, and each gift leaves you able to give again.",
    singer: "In his strong version, we should give until we would sacrifice something of comparable moral importance. In a moderate version, until we would sacrifice something morally significant.",
    critic: "This is the demandingness objection: a morality that asks nearly everything leaves no room for a life of one's own. Bernard Williams pressed a related point about integrity.",
  },
  {
    key: "effect", label: "uncertain effect",
    pond: "You can see that the child is saved.",
    aid: "Aid can be wasted, stolen or harmful.",
    singer: "This is a reason to give wisely, not to give nothing. Charities differ enormously in effectiveness, which is the idea behind effective altruism.",
    critic: "Some economists, such as Angus Deaton, argue that foreign aid can weaken the accountability of governments to their own citizens, so the harder question is how to help.",
  },
];

/** Singer's drowning child: turn on the differences between the pond and famine relief, one by one, and see whether the obligation survives. */
export function PondViz() {
  const [on, setOn] = useState<string[]>([]);
  const [focus, setFocus] = useState<string | null>(null);
  const toggle = (k: string) => {
    setOn(on.includes(k) ? on.filter((x) => x !== k) : [...on, k]);
    setFocus(k);
  };
  const f = DIFFS.find((d) => d.key === focus);
  const all = on.length === DIFFS.length;

  return (
    <figure className="viz">
      <p className="mono-meta" style={{ margin: 0, textTransform: "none" }}>the case, as it now stands</p>
      <ul className="tagger">
        {DIFFS.map((d) => {
          const changed = on.includes(d.key);
          return (
            <li key={d.key} className={changed ? "tagger-row is-right" : "tagger-row"}>
              <p className="tagger-text" style={{ margin: 0 }}>{changed ? d.aid : d.pond}</p>
            </li>
          );
        })}
      </ul>
      <div className="viz-controls" style={{ marginTop: 12, flexWrap: "wrap" }}>
        {DIFFS.map((d) => (
          <button key={d.key} type="button" className={on.includes(d.key) ? "viz-chip is-on" : "viz-chip"} aria-pressed={on.includes(d.key)}
            style={{ cursor: "pointer" }} onClick={() => toggle(d.key)}>{d.label}</button>
        ))}
      </div>
      {f && (
        <div style={{ marginTop: 12 }}>
          <p className="tagger-why"><strong>Singer:</strong> {f.singer}</p>
          <p className="tagger-why"><strong>A critic:</strong> {f.critic}</p>
        </div>
      )}
      <figcaption className="viz-caption" aria-live="polite">
        {on.length === 0
          ? "A child is drowning in a shallow pond. Wading in will ruin your expensive clothes. Almost everyone agrees you must save the child. Now turn on the differences between this case and giving to relieve poverty, one at a time."
          : all
            ? "Every difference is on: this is giving to relieve severe poverty. Singer argues that none of the differences, alone or together, removes the obligation. If you disagree, which difference carries the weight?"
            : `${on.length} of ${DIFFS.length} differences are on. Does the obligation still hold? Singer says yes.`}
      </figcaption>
    </figure>
  );
}
