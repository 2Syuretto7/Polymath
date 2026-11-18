import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TransworldViz } from "@/components/viz/TransworldViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p23.3.1",
  minutes: 90,
  links: {
    revisits: ["p1.5.3", "p11.7.3", "p11.3.1"],
    foreshadows: ["p23.3.2", "p23.3.3", "p23.4.2"],
  },

  puzzle: (
    <>
      <p>
        If God is all-powerful, God can prevent evil. If God is wholly good, God wants to. Yet there is evil. Epicurus is said
        to have posed the dilemma more than two thousand years ago. Is it a contradiction to believe all three, or only an
        uncomfortable fact that needs explaining?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Plantinga&rsquo;s reply turns on what God can and cannot do with free creatures. Set what Curley would freely do in
        each situation, then try to create a world with free Curley and no evil.
      </p>
      <TransworldViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the logical problem">
        <p>
          J. L. Mackie argued in &lsquo;Evil and omnipotence&rsquo; (1955) that the propositions &lsquo;God is omnipotent&rsquo;,
          &lsquo;God is wholly good&rsquo; and &lsquo;evil exists&rsquo; are inconsistent, given two quasi-logical rules: a good
          being eliminates evil as far as it can, and there are no limits to what an omnipotent being can do. If so, theism
          is not merely unsupported but positively irrational.
        </p>
      </Definition>

      <Definition title="defence and theodicy">
        <p>
          A <strong>theodicy</strong> claims to give God&rsquo;s actual reason for permitting evil. A{" "}
          <strong>defence</strong> claims less: it offers a story that is possibly true and consistent with God and evil. Since
          Mackie claimed inconsistency, a defence is enough to answer him; it need not be believed, only possible.
        </p>
      </Definition>

      <Example title="Plantinga’s free will defence">
        <p>
          A world with significantly free creatures who do more good than evil is better than a world with no free creatures.
          God can create free creatures, but cannot cause them to do only what is right, or they would not be free. Mackie
          asked why God did not create creatures who always freely choose the good. Plantinga answered with{" "}
          <strong>transworld depravity</strong>: possibly, every creaturely essence is such that, in every world God could
          actualise where it is free, it goes wrong at least once. If so, no world with free creatures and no moral evil was in
          God&rsquo;s power. Mackie&rsquo;s second rule fails: even an omnipotent being cannot do what depends on free choices
          not its own.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          The defence needs counterfactuals of freedom to have truth values before creation, which some deny (the grounding
          objection, from Robert Adams and William Hasker). It addresses moral evil; for natural evil Plantinga suggested that
          it is possible that fallen non-human persons cause it, which suffices for consistency but is a poor theodicy. And
          compatibilists can deny that freedom rules out God&rsquo;s determining us to do only good. Still, most philosophers,
          including many atheists, now accept that the logical problem fails, and attention has moved to the evidential one.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "mackie",
      rung: "check",
      prompt: <p>What did Mackie claim about God and evil?</p>,
      answer: { kind: "choice", options: ["That God’s existence is logically inconsistent with evil", "That evil makes God unlikely", "That evil proves God is not omniscient", "That evil is an illusion"], correct: [0] },
    },
    {
      key: "def",
      rung: "check",
      prompt: <p>How does a defence differ from a theodicy?</p>,
      answer: { kind: "choice", options: ["A defence needs only to be possibly true; a theodicy claims to give God’s actual reason", "A defence is about natural evil only", "A theodicy needs only to be possible", "There is no difference"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set all four situations to &lsquo;would do wrong&rsquo;. How many of the worlds with Curley free contain no moral evil?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "td",
      rung: "apply",
      prompt: <p>What is transworld depravity?</p>,
      answer: { kind: "choice", options: ["Going wrong at least once in every world God could actualise where one is free", "Being evil in every possible world", "Being created by an evil God", "Lacking freedom in every world"], correct: [0] },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>Which of Mackie&rsquo;s premises does the free will defence deny?</p>,
      answer: { kind: "choice", options: ["There are no limits to what an omnipotent being can do", "God is wholly good", "Evil exists", "A good being eliminates evil as far as it can"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does the free will defence succeed against the logical problem of evil? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the defence: possibly, God could not create free creatures who never do wrong.",
          "Considers an objection, such as the grounding objection, compatibilism, or natural evil.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If heaven contains free people who never sin, does that show God could have created such a world in the first place?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the tension: sinless freedom in heaven seems to show it is possible.",
          "Considers a reply, such as that heavenly character is formed through earthly freedom.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Showing that God and evil are consistent leaves open whether the evil we see is good evidence against God. Some evils
        seem pointless: no good we can think of requires them.
      </p>
      <p>
        Next, the evidential problem: Rowe&rsquo;s argument from pointless suffering, and the sceptical theist reply.
      </p>
    </>
  ),
};
