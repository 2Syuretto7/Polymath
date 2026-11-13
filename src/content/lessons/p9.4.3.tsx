import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["objective reflection", "subjective reflection"];
const ITEMS: SortItem[] = [
  { text: "What is the evidence that the soul is immortal?", cat: "objective reflection", why: "It asks about the what: a fact to be established, independent of the inquirer." },
  { text: "How should I live, knowing that I will die?", cat: "subjective reflection", why: "It asks about the how: the existing person's relation to a truth that concerns them." },
  { text: "Which historical sources about Jesus are most reliable?", cat: "objective reflection", why: "A scholarly question, approximate and never finished." },
  { text: "Am I really staking my life on what I say I believe?", cat: "subjective reflection", why: "Kierkegaard's question about passion and appropriation, not about content." },
  { text: "What does the theorem prove?", cat: "objective reflection", why: "Mathematical truth is indifferent to who knows it, which Kierkegaard fully grants." },
  { text: "Do I pray to the true God in an untrue spirit, or to an idol with the whole passion of the infinite?", cat: "subjective reflection", why: "Climacus's own example: he says the second prays in truth, though to an idol." },
];

export const lesson: LessonContent = {
  id: "p9.4.3",
  minutes: 85,
  links: {
    revisits: ["p9.4.2", "p9.1.4", "p10.1.1"],
    foreshadows: ["p19.3.1", "p9.6.1", "p19.2.3"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;Subjectivity is truth.&rdquo; Taken as a claim in epistemology, this sounds like relativism: whatever I
        believe sincerely is true for me. Kierkegaard meant something else. Some truths, he thought, cannot be known at a
        distance, like facts in a textbook; they exist only in being lived. A person who can recite every proof of
        immortality may be further from the truth than one who has never read a book of philosophy.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each question as an exercise of objective or of subjective reflection.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Does each question concern what is believed, or how?" />
    </>
  ),

  theory: (
    <>
      <Definition title="objective and subjective reflection">
        <p>
          In the <em>Concluding Unscientific Postscript</em> of 1846, Johannes Climacus distinguishes two directions of
          thought. <strong>Objective reflection</strong> attends to <em>what</em> is true, abstracting from the thinker; it
          is right for mathematics, science and history, and its results are always approximate when they concern
          existence. <strong>Subjective reflection</strong> attends to <em>how</em> the thinker relates to what they hold:
          with what passion, inwardness and commitment.
        </p>
      </Definition>

      <Definition title="truth as subjectivity">
        <p>
          For truths that bear on how to exist, such as ethical and religious truths, the decisive thing is the relation.
          Climacus defines such truth as &ldquo;an objective uncertainty, held fast through appropriation with the most
          passionate inwardness&rdquo;. The definition is also a definition of faith. Uncertainty is not an obstacle here
          but a condition: if it were certain, there would be nothing to hold fast to.
        </p>
      </Definition>

      <Example title="Socrates">
        <p>
          Climacus&rsquo;s model is Socrates, who staked his life on the immortality of the soul while admitting he did not
          know whether it was immortal. His ignorance was objective uncertainty; his whole existence was the passionate
          appropriation of that uncertainty. Climacus thinks he was in the truth, more than a professor with three proofs.
        </p>
      </Example>

      <Remark title="not relativism">
        <p>
          Kierkegaard does not say that believing makes things true, nor that mathematics depends on the knower. His target
          is a culture, influenced by Hegel, that treats Christianity as a doctrine to be understood rather than a life to be
          lived. Later, Heidegger&rsquo;s authenticity and Sartre&rsquo;s bad faith develop his theme of how the self relates to
          itself, often without his religious goal.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "what",
      rung: "check",
      prompt: <p>Objective reflection attends to which question?</p>,
      answer: { kind: "choice", options: ["How the thinker relates to the truth", "What is true, abstracting from the thinker", "Whether God exists", "Which feelings are strongest"], correct: [1] },
    },
    {
      key: "def",
      rung: "check",
      prompt: <p>How does Climacus define truth as subjectivity?</p>,
      answer: {
        kind: "choice",
        options: [
          "Whatever I believe is true for me.",
          "An objective uncertainty, held fast through appropriation with the most passionate inwardness.",
          "The agreement of thought with its object.",
          "What is useful to believe.",
        ],
        correct: [1],
      },
    },
    {
      key: "socrates",
      rung: "apply",
      prompt: <p>Why is Socrates Climacus&rsquo;s example of being in the truth?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because he proved the soul is immortal.",
          "Because he staked his life on immortality while admitting objective uncertainty.",
          "Because he wrote many books.",
          "Because he was a Christian.",
        ],
        correct: [1],
      },
    },
    {
      key: "math",
      rung: "apply",
      prompt: <p>Does Kierkegaard think mathematical truth depends on the knower?</p>,
      answer: {
        kind: "choice",
        options: [
          "Yes, all truth is subjective.",
          "No; objective reflection is right for mathematics, whose truths are indifferent to who knows them.",
          "Only for geometry.",
          "He never discusses it.",
        ],
        correct: [1],
      },
    },
    {
      key: "target",
      rung: "apply",
      prompt: <p>What was Kierkegaard&rsquo;s main target in stressing subjectivity?</p>,
      answer: {
        kind: "choice",
        options: [
          "Natural science.",
          "A culture that treated Christianity as a doctrine to be understood rather than a life to be lived.",
          "Ancient scepticism.",
          "Utilitarian ethics.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can someone be &ldquo;in the truth&rdquo; while believing something false? Argue briefly, with Climacus&rsquo;s idol example in mind.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Climacus's claim that one who prays to an idol with infinite passion prays in truth.",
          "Considers an objection, such as that truth must concern content, not attitude.",
          "Reaches a view with a reason. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "auth",
      rung: "stretch",
      prompt: <p>Is Kierkegaard&rsquo;s idea of subjective truth better understood as a theory of authenticity than a theory of truth?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the view concerns how a person relates to beliefs, not what makes beliefs true.",
          "Compares it with later ideas of authenticity, such as Heidegger's or Sartre's.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Kierkegaard's distinction between objective and subjective reflection, his definition of truth as subjectivity, the example of Socrates, and why the view is not simple relativism.",

  glimpse: (
    <p>
      The next chapter turns to John Stuart Mill, an empiricist in the opposite camp. Nietzsche&rsquo;s perspectivism offers
      another challenge to objective truth, and the existentialists develop authenticity and bad faith.
    </p>
  ),
};
