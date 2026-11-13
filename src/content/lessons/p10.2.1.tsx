import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "A belief that is justified by inference is justified only if the beliefs it is inferred from are themselves justified.",
    kind: "premise",
    note: "Inferring from an unjustified belief cannot produce a justified one, any more than a bucket can be filled from an empty bucket.",
  },
  {
    claim: "So every justified inferred belief needs a chain of justified reasons behind it.",
    kind: "inference",
    note: "Ask why you believe it, then why you believe the reason, and so on.",
  },
  {
    claim: "The chain must either end somewhere, go on forever, or loop back on itself.",
    kind: "premise",
    note: "These are the only possibilities for a chain of reasons: Agrippa's trilemma, as reported by Sextus Empiricus.",
  },
  {
    claim: "If it ends, it ends in a belief with no reason behind it: an arbitrary assumption.",
    kind: "inference",
    note: "Foundationalism accepts that the chain ends, but denies the ending is arbitrary: basic beliefs are justified without inference.",
    objection: "A foundationalist: some beliefs, such as that I am in pain, are justified by experience, not by other beliefs. They are not arbitrary.",
  },
  {
    claim: "If it goes on forever, no belief is ever finally justified, since the justification is always deferred.",
    kind: "inference",
    note: "Infinitism accepts the infinite chain and argues that this is what reasons are like.",
    objection: "An infinitist: a belief can be justified to the degree that a long enough chain of available reasons stands behind it.",
  },
  {
    claim: "If it loops, the reasoning is circular, and assumes what it is meant to justify.",
    kind: "inference",
    note: "Coherentism denies that justification is linear at all: beliefs are justified by fitting into a coherent whole.",
    objection: "A coherentist: the circle is wide, and mutual support among many beliefs is not the same as a vicious circle.",
  },
  {
    claim: "So no belief is justified: suspend judgement on everything.",
    kind: "conclusion",
    note: "The ancient sceptics' conclusion. Each major theory of justification is a way of rejecting one of the three steps above.",
  },
];

export const lesson: LessonContent = {
  id: "p10.2.1",
  minutes: 75,
  links: {
    revisits: ["p10.1.4", "p7.1.1", "p1.1.1"],
    foreshadows: ["p10.2.2", "p10.2.3", "p10.2.4"],
  },

  puzzle: (
    <>
      <p>
        A small child asks why, and then why again, and again. Eventually every parent says: because it is. Is that the end
        of every chain of reasons? The ancient sceptics thought that the regress of reasons shows that nothing is justified.
        What are the alternatives?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through Agrippa&rsquo;s trilemma, and challenge each horn to hear how the main theories respond.</p>
      <ArgumentStepViz steps={STEPS} title="The regress of reasons" />
    </>
  ),

  theory: (
    <>
      <Definition title="the regress problem">
        <p>
          If justified beliefs need justified reasons, then the reasons need reasons, and so on. The structure of justification
          must be one of: a chain that stops at basic beliefs, an infinite chain, or a circle or web. Each has seemed
          unacceptable to someone.
        </p>
      </Definition>

      <Example title="the five modes of Agrippa">
        <p>
          The sceptic Agrippa, known through Sextus Empiricus, listed five modes for producing suspension of judgement:
          disagreement, infinite regress, relativity, hypothesis (assuming without proof), and circularity. The three
          relevant here form the trilemma: regress, hypothesis and circularity.
        </p>
      </Example>

      <Definition title="the three positions">
        <p>
          <strong>Foundationalism</strong>: some beliefs are basic, justified without inference, and all others rest on them.{" "}
          <strong>Coherentism</strong>: beliefs are justified by their place in a coherent system. <strong>Infinitism</strong>:
          justification requires an infinite, non-repeating series of available reasons. A fourth reply rejects the first
          premise: externalists say a belief can be justified by a reliable process, without reasons the believer can cite.
        </p>
      </Definition>

      <Remark title="a structural question">
        <p>
          The regress is a question about the shape of justification, not about any particular belief. It also arises in
          other forms: the Münchhausen trilemma in the philosophy of science, and the problem of the criterion, which asks
          whether we must know which beliefs are justified before we can know how to tell, or the other way round.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "three",
      rung: "check",
      prompt: <p>What are the three options for a chain of reasons in Agrippa&rsquo;s trilemma? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["It ends", "It goes on forever", "It loops back", "It branches randomly"], correct: [0, 1, 2] },
    },
    {
      key: "found",
      rung: "check",
      prompt: <p>Which position holds that some beliefs are justified without being inferred from others?</p>,
      answer: { kind: "choice", options: ["Foundationalism", "Coherentism", "Infinitism", "Scepticism"], correct: [0] },
    },
    {
      key: "match",
      rung: "apply",
      prompt: <p>Which position accepts the circle horn, arguing that mutual support in a whole system is not vicious?</p>,
      answer: { kind: "choice", options: ["Foundationalism", "Coherentism", "Infinitism", "Reliabilism"], correct: [1] },
    },
    {
      key: "ext",
      rung: "apply",
      prompt: <p>How does an externalist reliabilist respond to the regress?</p>,
      answer: {
        kind: "choice",
        options: [
          "By accepting scepticism.",
          "By denying that justification always requires reasons the believer can cite: a reliable process can justify.",
          "By accepting an infinite chain.",
          "By making all beliefs basic.",
        ],
        correct: [1],
      },
    },
    {
      key: "source",
      rung: "apply",
      prompt: <p>Through whose writings do we know Agrippa&rsquo;s modes?</p>,
      answer: { kind: "choice", options: ["Plato", "Sextus Empiricus", "Descartes", "Hume"], correct: [1] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Which horn of the trilemma is the least bad? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the trilemma.",
          "Defends one horn, answering the main objection to it.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "child",
      rung: "stretch",
      prompt: <p>When a parent finally answers &ldquo;because it is&rdquo;, has the chain ended in an arbitrary assumption? What would each of the three positions say?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes how a foundationalist might identify a basic belief at the end.",
          "Describes the coherentist or infinitist view of the same situation.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the regress problem, Agrippa's trilemma and its sceptical conclusion, and how foundationalism, coherentism, infinitism and externalism each respond.",

  glimpse: (
    <p>
      The next lesson examines foundationalism, then coherentism and infinitism. Externalist theories such as reliabilism come
      later in this course.
    </p>
  ),
};
