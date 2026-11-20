import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { WideScopeViz } from "@/components/viz/WideScopeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p30.1.2",
  minutes: 90,
  links: {
    revisits: ["p30.1.1", "p13.4.2", "p8.5.2"],
    foreshadows: ["p30.4.1", "p30.3.3", "p30.4.2"],
  },

  puzzle: (
    <>
      <p>
        Ravi believes he ought to visit his grandmother, but has no intention of going. Something has gone wrong in him. Now
        suppose his belief is false: he ought to stay and look after his sick child. Is he still required to intend the
        visit? And if rationality can require something we ought not to do, why should we care about being rational?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose Ravi&rsquo;s state and a reading of the requirement, and see which ways back to coherence are open.</p>
      <WideScopeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="rational requirements">
        <p>
          John Broome, in <em>Rationality Through Reasoning</em> (2013), lists requirements of coherence. The{" "}
          <strong>enkratic</strong> requirement: if you believe you ought to φ, you intend to φ. The{" "}
          <strong>instrumental</strong> requirement: if you intend an end and believe a means is necessary, you intend the
          means. <strong>Consistency</strong>: you do not believe both p and not-p. Violating any of these is irrational,
          whatever reasons there are.
        </p>
      </Definition>

      <Definition title="wide and narrow scope">
        <p>
          On the <strong>narrow-scope</strong> reading, if you believe you ought to φ, then you are rationally required to
          intend to φ. On the <strong>wide-scope</strong> reading, you are rationally required that (if you believe you ought
          to φ, you intend to φ). The narrow reading faces the <strong>bootstrapping</strong> problem: any belief, however
          absurd, would create a requirement to act on it. The wide reading avoids this, since one can comply by giving up
          the belief.
        </p>
      </Definition>

      <Example title="Kolodny’s question">
        <p>
          Niko Kolodny asked, in &lsquo;Why Be Rational?&rsquo; (2005), whether we have reason to comply with rational
          requirements. If the belief is false, there is no reason to intend the visit, and it is hard to see a reason to
          be coherent for its own sake. Kolodny concluded that rational requirements are not themselves normative: they
          only seem so because, from the inside, a belief about what you ought to do presents itself as true.
        </p>
      </Example>

      <Remark title="replies">
        <p>
          Some argue that the wide reading is too permissive, since it allows dropping a well-supported belief merely to
          avoid forming an intention; Kolodny proposed narrow-scope requirements on processes of reasoning instead. Others,
          such as Errol Lord and Benjamin Kiesewetter, reduce rationality to reasons: to be rational is to respond correctly
          to the reasons one possesses, and incoherence is irrational because it guarantees a failure of that kind.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "enkr",
      rung: "check",
      prompt: <p>What does the enkratic requirement say?</p>,
      answer: { kind: "choice", options: ["If you believe you ought to φ, you intend to φ", "You ought to do whatever you desire most", "You must never act against the law", "If you intend an end, you believe it is good"], correct: [0] },
    },
    {
      key: "boot",
      rung: "check",
      prompt: <p>Which reading of rational requirements faces the bootstrapping problem?</p>,
      answer: { kind: "choice", options: ["The narrow-scope reading", "The wide-scope reading", "Both equally", "Neither"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the wide-scope reading, with the belief on and the intention off. How many single changes restore coherence?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "kolodny",
      rung: "apply",
      prompt: <p>What did Kolodny conclude about rational requirements?</p>,
      answer: { kind: "choice", options: ["That they are not themselves normative, though they appear so from the inside", "That they are the source of all reasons", "That they are requirements of morality", "That they apply only to beliefs"], correct: [0] },
    },
    {
      key: "instr",
      rung: "apply",
      prompt: <p>Meera intends to catch the 8 o&rsquo;clock train and believes she must leave by 7.30 to do so, but does not intend to leave by then. Which requirement does she violate?</p>,
      answer: { kind: "choice", options: ["The instrumental requirement", "The enkratic requirement", "Consistency of belief", "None"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Do we have reason to be rational, in the sense of being coherent? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States what a requirement of coherence is, with an example.",
          "Considers Kolodny’s challenge, or a reply such as the reasons-responsiveness view.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Ravi falsely believes he ought to visit his grandmother. Is he irrational if he does not intend to go?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes what Ravi ought to do from what coherence requires of him.",
          "Uses the wide-scope or narrow-scope reading to assess his state.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Much of ethics assumes that each person persists through time and that their future is specially theirs. Parfit
        argued, through a series of puzzle cases, that identity is not what matters in survival.
      </p>
      <p>Next, Parfit on personal identity.</p>
    </>
  ),
};
