import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CompanionsViz } from "@/components/viz/CompanionsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p30.3.3",
  minutes: 90,
  links: {
    revisits: ["p30.3.2", "p13.3.3", "p13.3.4"],
    foreshadows: ["p30.4.1", "p30.4.2", "p33.1.1"],
  },

  puzzle: (
    <>
      <p>
        The error theorist says there are no moral facts, because a fact that tells you what to do whatever you want would
        be too strange to exist. But the evidence gives you reason to believe the earth is round, whatever you want. If
        that is not too strange, why is the moral case?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose the features a sceptic relies on, and see whether reasons for belief share them.</p>
      <CompanionsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="companions in guilt">
        <p>
          A <strong>companions-in-guilt</strong> argument defends a disputed category by showing that the objections to it
          apply equally to some category we cannot do without. If the objections would condemn the companion too, and the
          companion is innocent, the objections fail.
        </p>
      </Definition>

      <Example title="Cuneo’s argument">
        <p>
          Terence Cuneo, in <em>The Normative Web</em> (2007), argued: if moral facts do not exist, epistemic facts do not
          exist either, since they share every feature that makes moral facts objectionable, such as categorical authority
          and irreducibility. But epistemic facts exist: there is reason to believe what the evidence supports. So moral facts
          exist. An error theory about epistemic reasons would also leave the error theorist with no reason to believe their
          own theory.
        </p>
      </Example>

      <Definition title="other companions">
        <p>
          Some find companions in mathematics, which seems to involve abstract, causally inert truths that we nevertheless
          know, or in prudential reasons, such as the reason to avoid future pain. Derek Parfit pressed the point that a
          sceptic about practical reasons must also be a sceptic about the reasons that make belief in their scepticism
          rational.
        </p>
      </Definition>

      <Remark title="breaking the parity">
        <p>
          Critics look for a difference. Moral judgements may be necessarily motivating, while epistemic ones are not;
          epistemic reasons may be reducible to facts about truth and evidence, or be merely hypothetical, tied to the aim of
          believing truly; moral disagreement may be deeper than epistemic disagreement. Each reply must find a feature that
          the moral case has, the epistemic case lacks, and the sceptic&rsquo;s argument actually uses.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is a companions-in-guilt argument?</p>,
      answer: { kind: "choice", options: ["An argument that objections to a category would also condemn some category we must accept", "An argument that guilt is a moral emotion", "An argument from moral disagreement", "An argument that all facts are natural"], correct: [0] },
    },
    {
      key: "cuneo",
      rung: "check",
      prompt: <p>Which companion does Cuneo use?</p>,
      answer: { kind: "choice", options: ["Epistemic facts about what we have reason to believe", "Mathematical facts", "Aesthetic facts", "Legal facts"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, select all five features. How many are shared by epistemic facts?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "self",
      rung: "apply",
      prompt: <p>Why might an error theory about epistemic reasons be self-undermining?</p>,
      answer: { kind: "choice", options: ["It implies there is no reason to believe the error theory itself", "It contradicts science", "It implies all beliefs are true", "It requires moral facts"], correct: [0] },
    },
    {
      key: "break",
      rung: "apply",
      prompt: <p>Which reply tries to break the parity between moral and epistemic reasons?</p>,
      answer: { kind: "choice", options: ["Epistemic reasons are hypothetical, tied to the aim of believing truly", "Epistemic reasons are categorical too", "Moral facts are natural facts", "Both kinds of reason are queer"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does the existence of epistemic reasons show that moral facts exist? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the companions-in-guilt argument with epistemic reasons as the companion.",
          "Considers a way of breaking the parity, or a reason to think it holds.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is mathematics a good companion in guilt for moral realism?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes similarities, such as abstractness and knowledge without causal contact.",
          "Notes a possible difference, such as mathematics being indispensable to science.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Even if there are moral facts, we are often unsure what they are. What should we do when we do not know which moral
        theory is true?
      </p>
      <p>Next, acting under moral uncertainty.</p>
    </>
  ),
};
