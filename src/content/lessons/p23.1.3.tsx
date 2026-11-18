import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TimelessGodViz } from "@/components/viz/TimelessGodViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p23.1.3",
  minutes: 85,
  links: {
    revisits: ["p23.1.2", "p11.6.1", "p11.6.2"],
    foreshadows: ["p23.2.1", "p23.2.2", "p23.5.2"],
  },

  puzzle: (
    <>
      <p>
        Believers say God is eternal. That might mean God has always existed and always will, through all of time. Or it
        might mean God is not in time at all, with no past and no future. The two ideas look similar, but they lead to very
        different pictures of how God acts, knows and listens. Which is coherent?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare a God who moves along with time to a God present to all of it at once.</p>
      <TimelessGodViz />
    </>
  ),

  theory: (
    <>
      <Definition title="two conceptions">
        <p>
          On the <strong>timeless</strong> view, God exists but not at any time: in Boethius&rsquo;s definition, eternity is
          &lsquo;the complete possession all at once of illimitable life&rsquo;. Augustine, Anselm and Aquinas held versions
          of it. On the <strong>everlasting</strong> view, God exists at every time, without beginning or end, and has a past,
          present and future like us. Nicholas Wolterstorff, Richard Swinburne and many recent philosophers defend it.
        </p>
      </Definition>

      <Example title="arguments for timelessness">
        <p>
          A timeless God is fully actual, not losing the past or waiting for the future, which suits divine perfection and
          immutability. It supports Boethius&rsquo;s answer to foreknowledge. And if God created time, as many theists think,
          God seems to be outside it.
        </p>
      </Example>

      <Example title="objections">
        <p>
          A timeless being cannot know what time it is now, since &lsquo;it is now noon&rsquo; is true at some times and not
          others; so it seems not omniscient (Kretzmann, 1966, though he later changed his mind). It cannot respond to prayer,
          or act at one time rather than another. And if God&rsquo;s eternal present is simultaneous with every moment, then
          all moments are simultaneous with each other, since simultaneity is transitive.
        </p>
      </Example>

      <Definition title="ET-simultaneity">
        <p>
          Eleonore Stump and Norman Kretzmann (1981) answered the last objection with a new relation:{" "}
          <strong>eternal-temporal simultaneity</strong>. An eternal being and a temporal event are ET-simultaneous when each
          is present to the other, from the standpoint of each. The relation is not transitive, so it does not collapse time.
          Critics asked whether the relation is intelligible, or merely named.
        </p>
      </Definition>

      <Remark title="time decides">
        <p>
          The debate turns on the metaphysics of time. If the A-theory is true and only the present is real, a timeless God
          seems cut off from what is happening. If the B-theory is true, all times are equally real, and a God present to all
          of them at once is easier to picture. The doctrine of God and the theory of time constrain each other.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "boethius",
      rung: "check",
      prompt: <p>How did Boethius define eternity?</p>,
      answer: { kind: "choice", options: ["The complete possession all at once of illimitable life", "Existence at every time", "Existence before creation only", "A very long time"], correct: [0] },
    },
    {
      key: "ever",
      rung: "check",
      prompt: <p>What does the everlasting view say about God and time?</p>,
      answer: { kind: "choice", options: ["God exists at every time, without beginning or end", "God exists at no time", "God exists only in the present", "God created time and then left it"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation&rsquo;s everlasting view, what is tomorrow&rsquo;s choice for God?</p>,
      answer: { kind: "choice", options: ["Still future, so known only by foreknowledge", "Present", "Past", "Unreal"], correct: [0] },
    },
    {
      key: "now",
      rung: "apply",
      prompt: <p>Which objection says a timeless God cannot be omniscient?</p>,
      answer: { kind: "choice", options: ["A timeless being cannot know what time it is now", "A timeless being cannot exist", "A timeless being cannot be good", "A timeless being cannot create"], correct: [0] },
    },
    {
      key: "et",
      rung: "apply",
      prompt: <p>Why did Stump and Kretzmann need ET-simultaneity to be non-transitive?</p>,
      answer: { kind: "choice", options: ["Otherwise all events simultaneous with eternity would be simultaneous with each other", "So that God can change", "So that time can end", "So that prayer is unnecessary"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is a timeless God compatible with a God who answers prayers? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the worry that responding seems to require acting after hearing.",
          "Considers a reply, such as that God eternally wills an effect at a time in light of a prayer at an earlier time.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If presentism is true, can God be timeless? Explain.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States presentism: only the present exists.",
          "Considers what a timeless God would be related to, and whether eternity could be present to a moving now.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        From what God would be like, the course turns to whether God exists. The boldest argument tries to prove it from
        the concept of God alone, without any appeal to experience.
      </p>
      <p>
        Next, the ontological argument in depth: Anselm, Gaunilo&rsquo;s island, Kant&rsquo;s claim that existence is not a
        predicate, and Plantinga&rsquo;s modal version.
      </p>
    </>
  ),
};
