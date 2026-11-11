import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["material", "formal", "efficient", "final"];
const ITEMS: SortItem[] = [
  { text: "The bronze, as the cause of a statue.", cat: "material", why: "Aristotle's first example: that out of which the statue comes to be, and which is in it." },
  { text: "The letters, as the cause of a syllable.", cat: "material", why: "Aristotle lists letters for syllables, along with bricks for houses, as things out of which something is made." },
  { text: "The ratio of 2 to 1, as the cause of the octave.", cat: "formal", why: "Aristotle's own example: the account of what the octave is." },
  { text: "The design of a house, which the builder has in mind.", cat: "formal", why: "The form, or plan, that makes these bricks a house." },
  { text: "The father, as the cause of the child.", cat: "efficient", why: "Aristotle's example of 'the source of the change', along with the person who gives advice." },
  { text: "The sculptor's art of casting bronze.", cat: "efficient", why: "Aristotle says that the art is, strictly, the more precise efficient cause than the sculptor." },
  { text: "Health, as the cause of someone's walking after dinner.", cat: "final", why: "Aristotle's example: 'Why is he walking?' 'To be healthy.' That for the sake of which." },
  { text: "Shelter, as the cause of a house.", cat: "final", why: "The house exists for the sake of sheltering people and goods." },
];

export const lesson: LessonContent = {
  id: "p4.5.4",
  minutes: 75,
  links: {
    revisits: ["p4.5.3", "p4.1.1", "p4.1.5"],
    foreshadows: ["p4.5.5", "p6.4.2", "p16.7.3"],
  },

  puzzle: (
    <>
      <p>
        Why is there a statue in the temple? Because someone carved it. Because it is made of marble. Because that is what
        a statue of Athena looks like. Because the city wanted to honour the goddess. Each answer is correct; none is
        complete. Is there a fixed number of kinds of answer to a &ldquo;why&rdquo; question, and does every kind apply to
        nature, which has no sculptor and no plans?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        In <em>Physics</em> II.3, Aristotle says we think we know something only when we grasp its &ldquo;why&rdquo;, and
        lists four ways of answering. Sort these into his four causes. Most are his own examples.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which kind of cause is each?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the four causes">
        <p>
          The Greek word <em>aitia</em> is wider than our &ldquo;cause&rdquo;; it means whatever answers the question why,
          something closer to an explanation. Aristotle lists four:
        </p>
        <ul>
          <li><strong>material</strong>: that out of which a thing comes to be and which persists in it, like the bronze of a statue;</li>
          <li><strong>formal</strong>: the form or pattern, the account of what the thing is, like the ratio 2 to 1 for the octave;</li>
          <li><strong>efficient</strong>: the primary source of the change or rest, like the father of the child;</li>
          <li><strong>final</strong>: the end, that for the sake of which, like health for walking.</li>
        </ul>
      </Definition>

      <Example title="the causes in nature">
        <p>
          In natural things, three of the causes often coincide. The form of a horse, the end that a foal grows towards,
          and the source of its coming to be, a horse that begets it, are one in kind: a horse produces a horse, for the
          sake of being a horse. Only the matter stays distinct. The natural philosopher, Aristotle says, must know all
          four, and especially form and end.
        </p>
      </Example>

      <Example title="is nature for the sake of something?">
        <p>
          In <em>Physics</em> II.8, Aristotle states an objection. Zeus does not send rain to make the corn grow; rain falls
          of necessity, as vapour cools, and the corn&rsquo;s growing is a coincidence. Perhaps animal parts too arose by
          chance, and those that happened to suit survived, as Empedocles said of his &ldquo;man-faced oxen&rdquo;. Aristotle
          replies that teeth, and the other parts, come about in the same useful way always or for the most part, and what
          happens always or usually is not a matter of chance. So nature acts for an end. And, he adds, it does so without
          deliberating: art does not deliberate either, and if the shipbuilding art were in the wood, it would act as
          nature does.
        </p>
      </Example>

      <Remark title="the earlier philosophers">
        <p>
          In <em>Metaphysics</em> A, Aristotle reads the history of philosophy through the four causes. The Milesians found
          only the material cause, water or air. Empedocles and Anaxagoras added sources of change, Love and Strife, or Mind.
          Plato used the formal cause, the Forms. None, he says, clearly grasped the final cause, though Anaxagoras came
          close and then did not use it.
        </p>
      </Remark>

      <Remark title="after Aristotle">
        <p>
          Early modern science, with Bacon and Descartes, cast final causes out of physics, and modern physics explains with
          something like efficient causes and laws. Yet biology still asks what an organ is <em>for</em>, and since Darwin
          many philosophers think talk of functions can be understood in terms of natural selection, a kind of answer to
          Empedocles that Aristotle did not foresee.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "list",
      rung: "check",
      prompt: <p>Which are among Aristotle&rsquo;s four causes? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["material", "accidental", "efficient", "final"], correct: [0, 2, 3] },
    },
    {
      key: "aitia",
      rung: "check",
      prompt: <p>What is the best rendering of Aristotle&rsquo;s word <em>aitia</em>?</p>,
      answer: {
        kind: "choice",
        options: ["A prior event that makes another happen.", "Whatever answers the question why: an explanation.", "A law of nature.", "A material element."],
        correct: [1],
      },
    },
    {
      key: "knife",
      rung: "apply",
      prompt: <p>A knife is made of steel, shaped with a sharp edge by a smith, in order to cut. What is its final cause?</p>,
      answer: { kind: "choice", options: ["the steel", "the sharp-edged shape", "the smith", "cutting"], correct: [3] },
    },
    {
      key: "coincide",
      rung: "apply",
      prompt: <p>Which causes often coincide in natural things, according to Aristotle?</p>,
      answer: {
        kind: "choice",
        options: [
          "Material, formal and efficient.",
          "Formal, efficient and final.",
          "Material and final only.",
          "None ever coincide.",
        ],
        correct: [1],
      },
    },
    {
      key: "rain",
      rung: "apply",
      prompt: <p>What is Aristotle&rsquo;s main reason for rejecting the idea that useful animal parts arise by chance?</p>,
      answer: {
        kind: "choice",
        options: [
          "Zeus designs them.",
          "They come about the same way always or for the most part, and chance is what happens rarely.",
          "Empedocles was wrong about everything.",
          "Animals deliberate about their parts.",
        ],
        correct: [1],
      },
    },
    {
      key: "fourwhy",
      rung: "prove",
      prompt: (
        <p>
          Choose an object or event of your own, such as a bicycle or a heartbeat, and give all four causes of it. Then say
          which of the four, if any, a modern scientist would reject, and why.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives a plausible material, formal, efficient and final cause for the chosen example.",
          "Identifies which cause modern science is most suspicious of, usually the final cause outside artefacts and biology.",
          "Gives a reason. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "darwin",
      rung: "stretch",
      prompt: (
        <p>
          Aristotle argues that what happens always or for the most part is not by chance. Does Darwin&rsquo;s theory of
          natural selection refute this argument, vindicate it, or do something in between? Defend your answer.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States Aristotle's argument and the Empedoclean alternative accurately.",
          "Explains how natural selection makes adaptations regular without design, combining chance variation with non-random selection.",
          "Reaches a reasoned verdict, for example that it keeps the regularity and the talk of function while rejecting nature acting for an end in Aristotle's sense. Any thoughtful position earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Aristotle's four causes with an example of each, why three of them often coincide in nature, his argument that nature acts for an end, and how later science treated final causes.",

  glimpse: (
    <p>
      Potentiality and actuality, next, give the vocabulary for how matter becomes formed. Aquinas builds one of his five
      ways on final causes, and Philosophy of Science asks whether biology needs functions.
    </p>
  ),
};
