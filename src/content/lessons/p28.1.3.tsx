import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { EvidenceSetViz } from "@/components/viz/EvidenceSetViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p28.1.3",
  minutes: 90,
  links: {
    revisits: ["p28.1.2", "p10.3.2", "p10.3.3"],
    foreshadows: ["p28.2.1", "p28.3.2", "p28.4.1"],
  },

  puzzle: (
    <>
      <p>
        You see a red apple on the table. Your twin, in a perfect hallucination, has an experience you could not tell
        apart from yours. Do the two of you have the same evidence? Most philosophers have said yes, since evidence must
        be something one can tell one has. Williamson says no.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Switch between the good and the bad case, and between two views of evidence, and see what counts as evidence.</p>
      <EvidenceSetViz />
    </>
  ),

  theory: (
    <>
      <Definition title="E = K">
        <p>
          Williamson&rsquo;s thesis: one&rsquo;s total evidence is exactly the set of propositions one knows. Evidence is
          what evidential probabilities are conditional on: the probability of a hypothesis h on one&rsquo;s evidence is
          P(h | E) for a suitable prior P.
        </p>
      </Definition>

      <Definition title="the argument">
        <p>
          First, evidence is propositional: we use it in inference to the best explanation, in ruling hypotheses out, and
          in raising or lowering probabilities, and only propositions can do these jobs. Second, a proposition is part of
          one&rsquo;s evidence only if one knows it: a false or merely believed claim cannot serve as evidence. Third,
          whatever one knows can serve as evidence. So E = K.
        </p>
      </Definition>

      <Example title="good and bad cases">
        <p>
          In the good case you know there is a red apple, so that proposition is part of your evidence and has probability
          1 on your evidence. Your hallucinating twin knows only that it looks as if there is. Since your evidence differs,
          you need not agree with the twin about what is justified, and the sceptic cannot assume that we and the brains in
          vats share our evidence.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          Internalists find this hard to accept. The new evil demon problem says the victim of a demon is as justified as
          we are, which seems to require equal evidence. And since knowledge is not luminous, on E = K one cannot always
          tell what one&rsquo;s evidence is, so it seems one cannot always follow the rule to proportion belief to evidence.
          Williamson accepts this consequence: the anti-luminosity argument shows no useful condition is always detectable.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ek",
      rung: "check",
      prompt: <p>What does the thesis E = K say?</p>,
      answer: { kind: "choice", options: ["One’s total evidence is exactly what one knows", "Evidence is whatever one believes", "Evidence consists of experiences", "Knowledge is whatever one has evidence for"], correct: [0] },
    },
    {
      key: "prop",
      rung: "check",
      prompt: <p>Why does Williamson think evidence must be propositional?</p>,
      answer: { kind: "choice", options: ["Only propositions can be used in inference and in raising or lowering probabilities", "Experiences do not exist", "Propositions are always true", "Only scientists have evidence"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, in the bad case on E = K, is &lsquo;There is a red apple on the table&rsquo; part of the evidence?</p>,
      answer: { kind: "choice", options: ["No", "Yes", "Only on the rival view", "It depends on the prior"], correct: [0] },
    },
    {
      key: "fact",
      rung: "apply",
      prompt: <p>Which consequence follows from E = K?</p>,
      answer: { kind: "choice", options: ["All of one’s evidence is true", "One always knows what one’s evidence is", "Hallucinators have the same evidence as perceivers", "Evidence can be false"], correct: [0] },
    },
    {
      key: "demon",
      rung: "apply",
      prompt: <p>What does the new evil demon problem claim?</p>,
      answer: { kind: "choice", options: ["A deceived subject is just as justified as we are", "Demons cannot deceive us", "We know we are not deceived", "Justification requires truth"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is your evidence the same as that of your hallucinating twin? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States E = K or a rival view of evidence fairly.",
          "Considers what each view says about the good and bad cases.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can a false proposition ever be part of someone&rsquo;s evidence?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with the factivity of evidence on E = K.",
          "Considers a case, such as a scientist reasoning from a slightly false measurement.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Evidence is what we update on. The Bayesian tradition gives precise rules for credences and updating, and asks
        which further constraints, if any, rationality places on them.
      </p>
      <p>Next, Bayesian norms in depth.</p>
    </>
  ),
};
