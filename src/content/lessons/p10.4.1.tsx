import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["illusion", "dreaming", "the demon"];
const ITEMS: SortItem[] = [
  {
    text: "That distant tower is round.",
    cat: "illusion",
    why: "Descartes's own example: square towers look round from far away. Ordinary illusion is enough to doubt it.",
  },
  {
    text: "The stick half in the water is bent.",
    cat: "illusion",
    why: "Refraction makes straight sticks look bent, so perception under these conditions can mislead.",
  },
  {
    text: "I am sitting by the fire in a dressing gown.",
    cat: "dreaming",
    why: "Close, clear perception survives illusion, but Descartes notes he has dreamt exactly this while lying in bed.",
  },
  {
    text: "I have hands.",
    cat: "dreaming",
    why: "In a dream I could seem to have hands, or a body at all, without having them.",
  },
  {
    text: "Shapes, sizes and colours exist.",
    cat: "the demon",
    why: "Even dreams are made of such simple elements, like a painter's colours, so dreaming does not touch them. Only a deceiver could.",
  },
  {
    text: "2 + 3 = 5.",
    cat: "the demon",
    why: "True whether I am awake or asleep. Only a powerful deceiver who makes me go wrong whenever I add could cast doubt on it.",
  },
  {
    text: "A square has four sides.",
    cat: "the demon",
    why: "Another simple truth of reason that survives the dream; only the deceiving God or demon threatens it.",
  },
];

export const lesson: LessonContent = {
  id: "p10.4.1",
  minutes: 80,
  links: {
    revisits: ["p7.1.1", "p1.1.1", "p10.3.3"],
    foreshadows: ["p10.4.2", "p10.4.4", "p10.4.3"],
  },

  puzzle: (
    <>
      <p>
        Everything you are experiencing now could be produced by electrodes stimulating a brain in a vat, and it would feel
        exactly the same. You cannot point to anything in your experience that rules this out. So how can you know you are
        reading a screen, or that there is a world at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Descartes raised his doubts in three waves of increasing strength. Sort each belief by the weakest doubt that
        threatens it.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which doubt is needed to undermine it?" />
    </>
  ),

  theory: (
    <>
      <Definition title="sceptical hypotheses">
        <p>
          A <strong>sceptical hypothesis</strong> is a scenario in which your experiences are exactly as they are now but most
          of your beliefs about the world are false: that you are dreaming, deceived by an evil demon, or a brain in a vat.
          Cartesian scepticism says that since you cannot rule such hypotheses out, you do not know the things they threaten.
        </p>
      </Definition>

      <Example title="the underdetermination argument">
        <p>
          Your evidence is your experience. It is the same whether the world is as you think or you are a brain in a vat. So
          your evidence does not favour the ordinary view over the sceptical one, and you are not justified in believing the
          ordinary view rather than the alternative.
        </p>
      </Example>

      <Remark title="Descartes's way out, and the circle">
        <p>
          Descartes found certainty in the cogito, then argued that God exists and is no deceiver, so clear and distinct
          perceptions are true. Antoine Arnauld objected that he relied on clear and distinct perception to prove that God
          exists: the Cartesian circle.
        </p>
      </Remark>

      <Remark title="modern responses">
        <p>
          Some argue that the real world is the best explanation of the order in our experience, better than an elaborate
          deception. Hilary Putnam argued that a brain in a vat could not even think the thought that it is a brain in a vat,
          since its word &ldquo;vat&rdquo; would refer to images, not real vats. Others deny that knowledge requires ruling
          out every possibility, or deny the closure principle that the next lesson examines.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is a sceptical hypothesis?</p>,
      answer: {
        kind: "choice",
        options: [
          "A hypothesis that is probably false.",
          "A scenario where your experiences are as they are now but most of your beliefs about the world are false.",
          "A doubt about one particular belief.",
          "A theory of perception.",
        ],
        correct: [1],
      },
    },
    {
      key: "waves",
      rung: "check",
      prompt: <p>Why does Descartes need the demon after the dream argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because dreams are always pleasant.",
          "Because simple truths, such as those of arithmetic, hold whether one is dreaming or not.",
          "Because the demon is more vivid.",
          "Because dreams prove the external world exists.",
        ],
        correct: [1],
      },
    },
    {
      key: "under",
      rung: "apply",
      prompt: <p>What is the key premise of the underdetermination argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the external world does not exist.",
          "That your evidence is the same in the ordinary and the sceptical scenarios, so it does not favour either.",
          "That dreams are less vivid than waking life.",
          "That God is a deceiver.",
        ],
        correct: [1],
      },
    },
    {
      key: "circle",
      rung: "apply",
      prompt: <p>What is the Cartesian circle?</p>,
      answer: {
        kind: "choice",
        options: [
          "Descartes's map of the mind.",
          "Using clear and distinct perception to prove God exists, then using God to guarantee clear and distinct perception.",
          "The cycle of the three waves of doubt.",
          "The circular shape of the distant tower.",
        ],
        correct: [1],
      },
    },
    {
      key: "putnam",
      rung: "apply",
      prompt: <p>What does Putnam argue about brains in vats?</p>,
      answer: {
        kind: "choice",
        options: [
          "That we are probably brains in vats.",
          "That a brain in a vat could not truly think that it is a brain in a vat, since its words would not refer to real vats.",
          "That vats cannot keep brains alive.",
          "That scepticism is unanswerable.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the real world a better explanation of your experience than the brain-in-a-vat hypothesis? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the inference to the best explanation reply.",
          "Considers the sceptic's response, for example that a vat hypothesis can copy any explanation.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "matter",
      rung: "stretch",
      prompt: <p>If you could never tell whether you were a brain in a vat, would it matter to how you should live?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes theoretical doubt from practical life.",
          "Considers a reason it might or might not matter.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend sceptical hypotheses, Descartes's three waves of doubt and why the demon is needed, the underdetermination argument, the Cartesian circle, and one modern response such as the best explanation reply or Putnam's argument.",

  glimpse: (
    <p>
      The next lesson states the sceptic&rsquo;s argument through the closure principle. Moore will reply that he knows he has
      hands, and contextualism that the standards for knowing shift.
    </p>
  ),
};
