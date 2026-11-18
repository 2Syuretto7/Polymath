import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SubjectFreedomViz } from "@/components/viz/SubjectFreedomViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.7.6",
  minutes: 85,
  links: {
    revisits: ["p20.4.2", "p20.6.1", "p1.4.1"],
    foreshadows: ["p31.3.2", "p31.3.1", "p9.1.2"],
  },

  puzzle: (
    <>
      <p>
        Try to look at yourself. You can look at your hand, then at your feelings, then at your thoughts. But whatever you
        look at becomes something seen, and the one who looks has slipped behind it. Can the self ever be known? Or is it
        known only as the power to step back from everything else?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Withdraw the subject, step by step, from what it takes itself to be.</p>
      <SubjectFreedomViz />
    </>
  ),

  theory: (
    <>
      <Definition title="K. C. Bhattacharya">
        <p>
          Krishna Chandra Bhattacharya (1875&ndash;1949) taught at Calcutta and was among the most original Indian
          philosophers of the twentieth century, writing in English in close dialogue with Kant and with Vedānta, Sāṃkhya and
          Jaina thought. His major works include <em>The Subject as Freedom</em> (1930) and{" "}
          <em>The Concept of Philosophy</em> (1936).
        </p>
      </Definition>

      <Example title="the subject as freedom">
        <p>
          The subject can never be an object of knowledge, since whatever is known is distinguished from the knower. Yet it is
          not nothing. Bhattacharya traced grades of subjectivity: <strong>bodily</strong>, where I identify with the body as
          felt from within; <strong>psychic</strong>, where I identify with images, ideas and feelings; and{" "}
          <strong>spiritual</strong>, where even these are distanced. The subject is known only in this progressive freeing
          from objects: the subject as freedom.
        </p>
      </Example>

      <Definition title="Swaraj in ideas">
        <p>
          In a lecture of 1928, Bhattacharya warned of a slavery subtler than political rule: the uncritical adoption of
          Western ideas, which leaves a mind unable to think from its own tradition. Swaraj in ideas does not mean rejecting the
          West, but meeting it as an equal, with Indian concepts treated as live options to be tested.
        </p>
      </Definition>

      <Remark title="alternative absolutes">
        <p>
          In later work Bhattacharya argued that the absolute may be understood as truth, as freedom or as value, through
          knowing, willing or feeling, and that these are genuine alternatives none of which can be ranked above the others.
          The idea echoes the Jaina doctrine of many standpoints, which he wrote about, and it marks him as a philosopher of
          possibilities rather than of a single system.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "obj",
      rung: "check",
      prompt: <p>Why, for Bhattacharya, can the subject never be known as an object?</p>,
      answer: { kind: "choice", options: ["Whatever is known as an object is distinguished from the knower", "Because the subject does not exist", "Because perception is unreliable", "Because the Vedas forbid it"], correct: [0] },
    },
    {
      key: "swaraj",
      rung: "check",
      prompt: <p>What did Bhattacharya mean by Swaraj in ideas?</p>,
      answer: { kind: "choice", options: ["Thinking from one’s own tradition rather than adopting foreign ideas uncritically", "Rejecting all Western philosophy", "Political independence", "Teaching only in Sanskrit"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many grades of subjectivity follow the perceived object?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "psychic",
      rung: "apply",
      prompt: <p>At the grade of psychic subjectivity, what does the subject take itself to be?</p>,
      answer: { kind: "choice", options: ["Its images, ideas and feelings", "Its body as felt from within", "The perceived world", "Nothing at all"], correct: [0] },
    },
    {
      key: "alt",
      rung: "apply",
      prompt: <p>Which three alternative forms of the absolute did Bhattacharya describe?</p>,
      answer: { kind: "choice", options: ["Truth, freedom and value", "Matter, life and mind", "Being, consciousness and bliss", "God, soul and world"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the self known only as freedom from objects, or can it be known in some other way? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Bhattacharya’s view that the subject is known only through progressive withdrawal from objects.",
          "Considers an alternative, such as Buddhist no-self, or knowing oneself through one’s actions or body.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is Swaraj in ideas still a live problem today, in India or elsewhere? Discuss.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the idea of uncritical adoption of a dominant culture’s concepts.",
          "Gives a present-day example or argues that the problem has changed.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        This course has run from the Vedas through the darśanas, Buddhist and Jaina thought, Navya-Nyāya, and on to modern
        thinkers who met the West without giving up their own questions.
      </p>
      <p>
        The questions do not end here. The debates over the self, over testimony and inference, over non-violence and caste,
        return in courses on mind, knowledge, ethics and politics, where Indian and Western answers can be weighed side by
        side.
      </p>
    </>
  ),
};
