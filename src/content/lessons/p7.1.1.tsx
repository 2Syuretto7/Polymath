import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { DoubtViz } from "@/components/viz/DoubtViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p7.1.1",
  minutes: 80,
  links: {
    revisits: ["p1.1.1", "p4.7.4", "p6.5.3"],
    foreshadows: ["p7.1.2", "p7.1.3", "p10.4.1"],
  },

  puzzle: (
    <>
      <p>
        René Descartes begins his Meditations on First Philosophy, published in 1641, with a confession: he had noticed
        how many false things he had accepted as true since childhood, and how doubtful was everything built on them. So,
        once in his life, he would demolish everything and start again from the foundations. Most of what he believed was
        probably true. Why tear it all down, and how can anyone doubt everything at once?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Follow the First Meditation. Choose each wave of doubt in turn and see which beliefs it sweeps away, and which
        survive it.
      </p>
      <DoubtViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the method of doubt">
        <p>
          The <strong>method of doubt</strong> is to withhold assent from anything in which there is the slightest reason
          for doubt, treating it for the moment as if it were false. Its aim is not scepticism but certainty: to find a
          foundation that no doubt can touch, and build on it. Descartes does not need to check each belief one by one.
          It is enough to undermine the foundations on which they rest, the senses and reason, since everything built on
          a doubtful foundation is doubtful too.
        </p>
      </Definition>

      <Example title="the basket of apples">
        <p>
          Replying to a critic, Descartes compared himself to someone with a basket of apples who fears some are rotten.
          The sensible thing is to tip out the whole basket, inspect the apples one by one, and put back only the sound
          ones. Rot spreads, and beliefs are linked: one false belief at the base can corrupt everything resting on it.
        </p>
      </Example>

      <Definition title="the three waves">
        <p>
          First, the senses sometimes deceive, about small or distant things. Second, I cannot be sure I am not dreaming,
          which reaches even my belief that I have a body. But dreams, like paintings, are composed from simple elements,
          such as extension, shape, number and time, so the truths of arithmetic and geometry survive. Third, perhaps an
          all-powerful God, or an evil demon &ldquo;as clever and deceitful as he is powerful&rdquo;, makes me go wrong
          even when I add two and three. This <strong>hyperbolic doubt</strong> is deliberately extreme. Descartes calls it
          a reason for doubt that is &ldquo;very slight and, so to speak, metaphysical&rdquo;.
        </p>
      </Definition>

      <Remark title="questions about the method">
        <p>
          The doubt is a tool, not a conviction. In the Discourse, Descartes adopts a provisional morality to live by
          meanwhile: obey the laws, be resolute, change himself rather than the world. Unlike the Pyrrhonists, he doubts
          in order to stop doubting. Critics ask whether the method can work. If my reasoning might be corrupted by a
          demon, how can I trust the reasoning that leads me out? And Charles Peirce objected that we cannot doubt by a
          decision: &ldquo;Let us not pretend to doubt in philosophy what we do not doubt in our hearts.&rdquo;
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "aim",
      rung: "check",
      prompt: <p>What is the aim of Descartes&rsquo;s method of doubt?</p>,
      answer: {
        kind: "choice",
        options: [
          "To show that nothing can be known.",
          "To find a foundation that cannot be doubted, and build knowledge on it.",
          "To reach peace of mind by suspending judgement.",
          "To prove that the senses never deceive.",
        ],
        correct: [1],
      },
    },
    {
      key: "maths",
      rung: "check",
      prompt: <p>Which wave of doubt is the first to cast doubt on the belief that two plus three makes five?</p>,
      answer: {
        kind: "choice",
        options: ["The senses sometimes deceive", "I might be dreaming", "An evil demon might deceive me", "None of them"],
        correct: [2],
      },
    },
    {
      key: "apples",
      rung: "apply",
      prompt: <p>What does the basket of apples comparison illustrate?</p>,
      answer: {
        kind: "choice",
        options: [
          "That most beliefs are false.",
          "That it is wiser to set all beliefs aside and readmit only those that pass inspection, since false ones can corrupt the rest.",
          "That beliefs should be judged by their usefulness.",
          "That doubt is a feeling we cannot control.",
        ],
        correct: [1],
      },
    },
    {
      key: "painter",
      rung: "apply",
      prompt: <p>Why does the dream argument leave arithmetic and geometry standing?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because we never dream about numbers.",
          "Because dreams, like paintings, are composed from simple general elements such as shape and number, whose truths hold waking or dreaming.",
          "Because mathematicians do not dream.",
          "Because arithmetic is learnt through the senses.",
        ],
        correct: [1],
      },
    },
    {
      key: "peirce",
      rung: "apply",
      prompt: <p>What is Peirce&rsquo;s objection to the method of doubt?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the evil demon exists.",
          "That genuine doubt cannot be produced by a decision, so universal doubt is a pretence.",
          "That we should doubt even more than Descartes did.",
          "That mathematics is uncertain.",
        ],
        correct: [1],
      },
    },
    {
      key: "dream",
      rung: "prove",
      prompt: <p>Set out the dream argument and say what, according to Descartes, it does not put in doubt.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the argument: there are no certain marks to distinguish waking from dreaming, so for all I know my present experience is a dream, and beliefs such as having a body are doubtful.",
          "Notes what survives: simple general things such as extension, shape and number, and so arithmetic and geometry.",
        ],
      },
    },
    {
      key: "circle",
      rung: "stretch",
      prompt: (
        <p>
          If an evil demon might corrupt my reasoning, can I trust the reasoning by which I hope to escape the doubt? Set
          out the worry and say whether Descartes can answer it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the worry that any argument out of the doubt relies on the very reasoning the demon hypothesis calls into question.",
          "Considers an answer, such as the claim that some truths cannot be doubted while they are attended to, or that the doubt is only methodical.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the method of doubt is and why Descartes used it, the three waves of doubt in the First Meditation, and one objection to the method.",

  glimpse: (
    <p>
      The next lesson finds the one thing the demon cannot touch: that I am thinking, and so that I exist. Epistemology
      returns to Cartesian scepticism and asks whether it can ever be answered.
    </p>
  ),
};
