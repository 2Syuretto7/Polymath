import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { DarwinianDilemmaViz } from "@/components/viz/DarwinianDilemmaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p30.3.2",
  minutes: 90,
  links: {
    revisits: ["p30.3.1", "p13.3.4", "p13.3.3"],
    foreshadows: ["p30.3.3", "p30.4.1", "p30.4.2"],
  },

  puzzle: (
    <>
      <p>
        That pain is bad seems as certain as anything. A robust realist says it is a fact, not made true by anyone&rsquo;s
        attitudes and not reducible to physics or psychology. But our sense that pain is bad was shaped by evolution, which
        cares only about reproduction. Why should a process blind to moral facts have given us true beliefs about them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change how closely fitness tracks value, and count the evolved beliefs that come out true.</p>
      <DarwinianDilemmaViz />
    </>
  ),

  theory: (
    <>
      <Definition title="robust realism">
        <p>
          David Enoch, in <em>Taking Morality Seriously</em> (2011), defends <strong>robust realism</strong>: there are
          objective, response-independent normative truths, and they are irreducibly normative, not identical to any
          natural facts. Parfit, in <em>On What Matters</em>, held a similar view while denying that such truths have
          ontological weight: like truths of mathematics, they need not describe things that exist in space and time.
        </p>
      </Definition>

      <Example title="the deliberative indispensability argument">
        <p>
          Enoch argues that when we deliberate, we try to find out what we have most reason to do, not to express or
          discover our own preferences. Deliberation is indispensable to rational agency, and it is committed to normative
          facts, much as explanation in science is committed to the entities it posits. So we are entitled to believe in
          them.
        </p>
      </Example>

      <Definition title="the Darwinian dilemma">
        <p>
          Sharon Street argued in 2006 that evolution has had a huge influence on our evaluative attitudes. Either realist
          truths bear no relation to these influences, in which case it would be a coincidence if our moral beliefs were
          true, and scepticism follows; or they do bear a relation, in which case the realist must say that evolution
          favoured tracking the truth, which is a worse scientific explanation than that it favoured attitudes that helped
          our ancestors reproduce.
        </p>
      </Definition>

      <Remark title="replies and other worries">
        <p>
          Enoch offers a third-factor reply: survival and reproduction are, by and large, good, so selection for them
          pushed our beliefs towards the truth without tracking it directly. Critics reply that this assumes the very
          evaluative beliefs in question. Robust realism also faces the supervenience challenge: why should the normative
          facts vary only with the natural facts, if they are distinct from them?
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "rr",
      rung: "check",
      prompt: <p>What does robust realism hold?</p>,
      answer: { kind: "choice", options: ["There are objective normative truths that are not reducible to natural facts", "Moral truths are made true by attitudes", "There are no moral truths", "Moral truths are facts about evolution"], correct: [0] },
    },
    {
      key: "street",
      rung: "check",
      prompt: <p>What does Street&rsquo;s Darwinian dilemma target?</p>,
      answer: { kind: "choice", options: ["Realist theories of value, by asking how evolved beliefs could track independent evaluative truths", "Evolutionary biology", "Expressivism", "Utilitarianism"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with no link between fitness and value, how many of the 40 evolved beliefs are true?</p>,
      answer: { kind: "numeric", value: 16, tolerance: 0 },
    },
    {
      key: "third",
      rung: "apply",
      prompt: <p>What is Enoch&rsquo;s third-factor reply?</p>,
      answer: { kind: "choice", options: ["Survival is in fact good, so selection for survival tended towards true evaluative beliefs", "Evolution directly detects moral facts", "Moral beliefs are not influenced by evolution", "There are no moral facts to track"], correct: [0] },
    },
    {
      key: "delib",
      rung: "apply",
      prompt: <p>What does Enoch&rsquo;s deliberative indispensability argument claim?</p>,
      answer: { kind: "choice", options: ["Deliberation commits us to normative facts, as science commits us to the entities it posits", "We never deliberate", "Deliberation is only about our desires", "Moral facts are observable"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does the Darwinian dilemma refute robust realism? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the two horns of the dilemma.",
          "Considers a reply such as the third-factor reply, or a reason to think it fails.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is our knowledge of moral truths any more puzzling than our knowledge of mathematical truths?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Compares the two cases, such as their independence from the physical world.",
          "Considers a disanalogy, such as the role of evolution or of usefulness in science.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Sceptics about moral facts often accept other normative facts, such as facts about what one has reason to believe.
        If those are acceptable, perhaps moral facts are too.
      </p>
      <p>Next, companions-in-guilt arguments.</p>
    </>
  ),
};
