import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CaseMatrixViz, type CaseVerdict } from "@/components/viz/CaseMatrixViz";
import type { LessonContent } from "@/lib/types";

const THEORIES = ["Simple reliabilism", "Evidentialism", "Actual-world reliabilism"];
const CASES = ["You, here", "Your deceived twin", "Norman", "Chicken sexer"];
const V: CaseVerdict[][] = [
  [
    { ok: true, why: "Your perception and memory are reliable here, so your ordinary beliefs are justified, as they should be." },
    { ok: false, why: "In the demon world the twin's perception almost always produces false beliefs, so it is unreliable and the theory calls the twin unjustified. Yet the twin reasons exactly as carefully as you do." },
    { ok: false, why: "Norman's clairvoyance is reliable, so the theory calls his belief justified, though from his own point of view it comes from nowhere." },
    { ok: true, why: "The sexer's method is reliable, so their verdicts are justified, which most people accept." },
  ],
  [
    { ok: true, why: "Your belief fits your experiences and memories, so it is justified." },
    { ok: true, why: "The twin has exactly your experiences, so the same beliefs fit the same evidence: justified, as intuition says." },
    { ok: true, why: "Norman has no evidence for his belief, so it is unjustified." },
    { ok: false, why: "If the sexer has no accessible evidence for their verdicts, evidentialism must call them unjustified. Evidentialists may reply that the chick looks a certain way to them, even if they cannot say how." },
  ],
  [
    { ok: true, why: "Your processes are reliable in the actual world, so your beliefs are justified." },
    { ok: true, why: "Judge the twin's processes by how reliable they are in the actual world, where perception works. Then the twin is justified, which answers the demon problem." },
    { ok: false, why: "Norman's clairvoyance is reliable in his actual world, so this version still calls him justified." },
    { ok: true, why: "The method is reliable in the actual world, so the verdicts are justified." },
  ],
];

export const lesson: LessonContent = {
  id: "p10.3.3",
  minutes: 75,
  links: {
    revisits: ["p10.3.1", "p10.3.2", "p7.1.1"],
    foreshadows: ["p10.4.1", "p10.6.1", "p12.6.2"],
  },

  puzzle: (
    <>
      <p>
        Imagine your exact twin, with all your experiences, memories and habits of reasoning, but deceived by a demon so that
        nearly everything they believe about the world is false. They check their sums, weigh their evidence and listen to
        good advice, just as you do. Are their beliefs any less justified than yours?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Test each theory of justification against each case.</p>
      <CaseMatrixViz
        theories={THEORIES}
        cases={CASES}
        verdicts={V}
        prompt="Does each theory give the intuitive verdict about justification?"
        caption="A theory does well only if it matches the intuitive verdict in every case. Notice that the deceived twin and Norman pull in opposite directions."
      />
    </>
  ),

  theory: (
    <>
      <Definition title="the new evil demon problem">
        <p>
          Keith Lehrer and Stewart Cohen (1983): a person deceived by a demon, internally just like you, is as justified as
          you are. Their processes are unreliable in their world. So reliability is <strong>not necessary</strong> for
          justification, and process reliabilism is false.
        </p>
      </Definition>

      <Example title="a pair of objections">
        <p>
          Norman the clairvoyant suggests that reliability is not sufficient; the deceived twin suggests that it is not
          necessary. Together they push towards internalism: what matters is how things are from the believer&rsquo;s own
          point of view.
        </p>
      </Example>

      <Remark title="reliabilist replies">
        <p>
          Some reliabilists measure reliability in the actual world, or in &ldquo;normal worlds&rdquo; that fit our general
          beliefs, rather than in the world of the believer. Others distinguish two notions: the twin is blameless, having
          done their best, but their beliefs are not well founded. Ernest Sosa separates beliefs that are adroit, skilfully
          formed, from those that are apt, true because of that skill: the twin&rsquo;s are adroit but not apt.
        </p>
      </Remark>

      <Remark title="why it matters">
        <p>
          The case is called new because Descartes&rsquo;s demon was used to threaten knowledge; this one is used to test
          theories of justification. If the twin is justified, justification depends only on the mind, and the twin and you
          are equal in what you have done right, even if the world rewards you and not them.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "point",
      rung: "check",
      prompt: <p>What is the new evil demon problem meant to show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That knowledge is impossible.",
          "That reliability is not necessary for justification.",
          "That reliability is not sufficient for justification.",
          "That demons exist.",
        ],
        correct: [1],
      },
    },
    {
      key: "twin",
      rung: "check",
      prompt: <p>What does evidentialism say about the deceived twin?</p>,
      answer: {
        kind: "choice",
        options: ["Justified, because they have the same evidence as you", "Unjustified, because their beliefs are false", "Justified only if they suspect the demon", "Evidentialism cannot say"],
        correct: [0],
      },
    },
    {
      key: "pair",
      rung: "apply",
      prompt: <p>Norman the clairvoyant and the deceived twin together suggest what about reliability and justification?</p>,
      answer: {
        kind: "choice",
        options: [
          "Reliability is necessary and sufficient.",
          "Reliability is neither necessary nor sufficient.",
          "Reliability is sufficient but not necessary.",
          "Reliability is necessary but not sufficient.",
        ],
        correct: [1],
      },
    },
    {
      key: "actual",
      rung: "apply",
      prompt: <p>How does measuring reliability in the actual world help the reliabilist with the twin?</p>,
      answer: {
        kind: "choice",
        options: [
          "It makes the twin's beliefs true.",
          "The twin's processes, such as perception, are reliable in the actual world, so the twin counts as justified.",
          "It shows the demon is unreliable.",
          "It does not help at all.",
        ],
        correct: [1],
      },
    },
    {
      key: "sosa",
      rung: "apply",
      prompt: <p>In Sosa&rsquo;s terms, the twin&rsquo;s beliefs are:</p>,
      answer: { kind: "choice", options: ["Apt but not adroit", "Adroit but not apt", "Both apt and adroit", "Neither"], correct: [1] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the deceived twin justified? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the case and the intuition that the twin is justified.",
          "Considers a reliabilist reply, such as the distinction between blamelessness and justification.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "bothways",
      rung: "stretch",
      prompt: <p>Can a single theory say that the deceived twin is justified and that Norman is not? Sketch one, or say why not.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the tension between the two verdicts for reliabilism.",
          "Offers a candidate, such as evidentialism or a reliabilism with a no-defeater clause measured in the actual world.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the new evil demon problem, why it suggests reliability is not necessary for justification, how it pairs with Norman the clairvoyant, and the reliabilist replies of actual-world reliability and the distinction between adroit and apt belief.",

  glimpse: (
    <p>
      The next chapter turns to the demon&rsquo;s original job: Cartesian scepticism. Virtue epistemology develops Sosa&rsquo;s
      ideas, and externalism about content asks whether the twin even has the same thoughts as you.
    </p>
  ),
};
