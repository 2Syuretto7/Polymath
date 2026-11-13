import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CaseMatrixViz, type CaseVerdict } from "@/components/viz/CaseMatrixViz";
import type { LessonContent } from "@/lib/types";

const THEORIES = ["act utilitarianism", "Kantian ethics", "virtue ethics"];
const CASES = ["visiting a sick friend", "the murderer at the door", "a tragic dilemma", "guidance for a beginner"];
const V: CaseVerdict[][] = [
  [
    { ok: false, why: "If you visit because it maximises welfare, your friend may rightly feel that the visit was not really for them. Michael Stocker called this a split between reasons and motives." },
    { ok: true, why: "Lie to the murderer: the consequences of telling the truth are terrible." },
    { ok: false, why: "Pick the option with the best outcome, and that is the end of it. The view has no room for the regret or remainder a decent person would feel." },
    { ok: true, why: "In principle clear: work out which act has the best consequences, though doing so may be hard in practice." },
  ],
  [
    { ok: false, why: "Visiting from duty alone also seems cold, though many Kantians say duty should be a backstop, not the only motive." },
    { ok: false, why: "Kant himself said you may not lie even here, which most find wrong. Many contemporary Kantians disagree with him." },
    { ok: false, why: "Kant held that genuine conflicts of duty cannot occur, so the view struggles to describe a choice where every option wrongs someone." },
    { ok: true, why: "Test your maxim for universalisability: a clear procedure, if not always easy to apply." },
  ],
  [
    { ok: true, why: "The friend visits out of friendship and concern, which is exactly what a good friend would do and why." },
    { ok: true, why: "The honest person is also just and kind. Honesty does not require helping a murderer, so the virtuous agent misleads or refuses." },
    { ok: true, why: "Rosalind Hursthouse: the virtuous agent chooses, but with grief and regret, and may need to make amends. An action can be the best available without being good." },
    { ok: false, why: "“Do what a virtuous person would do” may not help someone who lacks virtue. Hursthouse replies with v-rules: be honest, be kind, do not be cruel." },
  ],
];

export const lesson: LessonContent = {
  id: "p13.1.4",
  minutes: 80,
  links: {
    revisits: ["p5.4.1", "p4.6.2", "p10.6.1"],
    foreshadows: ["p13.2.1", "p13.4.3", "p21.2.1"],
  },

  puzzle: (
    <>
      <p>
        In 1958 Elizabeth Anscombe told her fellow philosophers to stop doing moral philosophy until they had a decent
        psychology: an account of motives, character and human flourishing. Within a few decades virtue ethics was back as a
        rival to utilitarian and Kantian theories. What can it explain that they cannot?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Test the three theories against four cases. Click a cell to see the verdict and the reason.</p>
      <CaseMatrixViz
        theories={THEORIES}
        cases={CASES}
        verdicts={V}
        prompt="Does the theory handle the case well?"
        caption="These verdicts are contested; each theory has defenders who would answer differently. Ask whether you agree."
      />
    </>
  ),

  theory: (
    <>
      <Definition title="virtue ethics">
        <p>
          Virtue ethics makes character central. A <strong>virtue</strong> is a stable trait, such as honesty, courage or
          kindness, involving dispositions to perceive, feel and act well, and the practical wisdom (<em>phronesis</em>) to do
          so in the right way. Hursthouse&rsquo;s account of right action: an act is right if it is what a virtuous agent would
          characteristically do in the circumstances.
        </p>
      </Definition>

      <Example title="neo-Aristotelian naturalism">
        <p>
          Philippa Foot and Rosalind Hursthouse argue that virtues are traits a human being needs to flourish, as a wolf needs
          to hunt with its pack. Evaluations of character are then a kind of natural goodness, like judging a plant&rsquo;s
          roots, not a matter of mere preference.
        </p>
      </Example>

      <Remark title="other forms">
        <p>
          Not all virtue ethics is Aristotelian. Michael Slote develops an agent-based view from care and benevolence, close
          to the ethics of care. Christine Swanton&rsquo;s pluralistic view lets virtues respond to many kinds of value. Moral
          exemplars, such as figures one admires, play a central role in Linda Zagzebski&rsquo;s exemplarism.
        </p>
      </Remark>

      <Remark title="objections">
        <p>
          Besides action guidance, the <strong>situationist</strong> challenge, from John Doris and Gilbert Harman, draws on
          experiments in which trivial factors, such as being in a hurry, change whether people help. If behaviour depends so
          much on the situation, are there robust character traits at all? Defenders reply that virtue is rare and an ideal, and
          that the experiments test narrow behaviour rather than full virtues.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does Hursthouse say makes an act right?</p>,
      answer: {
        kind: "choice",
        options: [
          "It maximises happiness.",
          "It is what a virtuous agent would characteristically do in the circumstances.",
          "It follows a universalisable maxim.",
          "It is commanded by law.",
        ],
        correct: [1],
      },
    },
    {
      key: "anscombe",
      rung: "check",
      prompt: <p>Whose 1958 paper is often credited with reviving virtue ethics?</p>,
      answer: { kind: "choice", options: ["Elizabeth Anscombe", "John Rawls", "Peter Singer", "R. M. Hare"], correct: [0] },
    },
    {
      key: "phron",
      rung: "apply",
      prompt: <p>What is phronesis?</p>,
      answer: {
        kind: "choice",
        options: ["Practical wisdom", "Pleasure", "Courage", "Divine law"],
        correct: [0],
      },
    },
    {
      key: "vrules",
      rung: "apply",
      prompt: <p>How does Hursthouse answer the objection that virtue ethics gives no guidance?</p>,
      answer: {
        kind: "choice",
        options: [
          "With v-rules such as “be honest” and “do not be cruel”.",
          "By saying guidance is unimportant.",
          "By adopting utilitarian calculation.",
          "By appealing to the law.",
        ],
        correct: [0],
      },
    },
    {
      key: "situ",
      rung: "apply",
      prompt: <p>What is the situationist challenge?</p>,
      answer: {
        kind: "choice",
        options: [
          "Experiments suggest behaviour depends heavily on situations, casting doubt on robust character traits.",
          "That virtues differ between countries.",
          "That situations are not moral.",
          "That virtue requires wealth.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does virtue ethics handle the case of visiting a sick friend better than its rivals? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Stocker’s worry about motives and reasons.",
          "Compares the virtue ethics answer with at least one rival.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If being in a hurry makes most people pass by someone in need, what should we conclude about character?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes the situationist evidence.",
          "Considers a reply, such as virtue being rare or shaping one’s situations.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend contemporary virtue ethics, Hursthouse's account of right action, neo-Aristotelian naturalism, and the objections from action guidance and situationism.",

  glimpse: (
    <p>
      The next unit asks what makes a life go well, starting with hedonism. Moral luck and the ethics of care return to
      questions of character and motive.
    </p>
  ),
};
