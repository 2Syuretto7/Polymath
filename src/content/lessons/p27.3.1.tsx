import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SCQViz } from "@/components/viz/SCQViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p27.3.1",
  minutes: 90,
  links: {
    revisits: ["p11.5.2", "p11.5.3", "p27.1.3"],
    foreshadows: ["p27.3.2", "p27.5.2", "p27.5.3"],
  },

  puzzle: (
    <>
      <p>
        Some particles are arranged chair-wise. Is there, in addition to them, a chair? Most people say yes. Now take your
        left shoe and the Eiffel Tower. Is there an object made of exactly those two? Most people say no. What is the
        difference?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose an answer, move the blocks together or apart, and count the composite objects.</p>
      <SCQViz />
    </>
  ),

  theory: (
    <>
      <Definition title="composition">
        <p>
          Some things, the xs, <strong>compose</strong> an object y when each of the xs is part of y and every part of y
          overlaps at least one of the xs. In <em>Material Beings</em> (1990), Peter van Inwagen asked the{" "}
          <strong>special composition question</strong>: under what conditions do some things compose something?
        </p>
      </Definition>

      <Definition title="the answers">
        <ul>
          <li><strong>Nihilism</strong>: never. There are only simples, arranged in various ways.</li>
          <li><strong>Universalism</strong>: always. Any things whatever compose something, including the shoe and the Eiffel Tower.</li>
          <li><strong>Moderate answers</strong>: when the things are in contact, fastened together, or fused.</li>
          <li><strong>Organicism</strong>, van Inwagen&rsquo;s own view: when their activity constitutes a life. There are organisms and simples, but no chairs.</li>
        </ul>
      </Definition>

      <Example title="against the moderate answers">
        <p>
          Van Inwagen pressed counterexamples. If contact were enough, two people shaking hands would compose a new object
          that ceases when they let go. If fastening were enough, two people whose hands were glued together would compose
          one. Neither seems right, and each refinement meets a new case.
        </p>
      </Example>

      <Remark title="the vagueness argument">
        <p>
          Lewis and Theodore Sider argued as follows. Any moderate answer allows a sorites series running from a case of
          composition to a case without it, with no sharp cut-off. So it would be vague whether composition occurs. But
          then it would be vague how many things exist, and counting statements can be written in pure logic, which has no
          vague words. So composition is never vague, and the only answers left are universalism and nihilism. Critics
          question whether existence really cannot be vague.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "scq",
      rung: "check",
      prompt: <p>What does the special composition question ask?</p>,
      answer: { kind: "choice", options: ["Under what conditions some things compose something", "What things are made of", "Whether wholes are prior to parts", "How many simples exist"], correct: [0] },
    },
    {
      key: "vi",
      rung: "check",
      prompt: <p>What was van Inwagen&rsquo;s answer?</p>,
      answer: { kind: "choice", options: ["Things compose something when their activity constitutes a life", "Always", "Never", "When they are in contact"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set all three pairs to touching and choose the contact answer. How many composite objects are there?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "univ",
      rung: "apply",
      prompt: <p>Under universalism, how many composite objects do five simples compose, counting only pluralities with two or more members?</p>,
      answer: { kind: "numeric", value: 26, tolerance: 0 },
    },
    {
      key: "vague",
      rung: "apply",
      prompt: <p>What does the vagueness argument conclude?</p>,
      answer: { kind: "choice", options: ["That the true answer is either universalism or nihilism", "That composition is vague", "That organicism is true", "That there are no simples"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is the vagueness argument against moderate answers sound? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the argument from sorites series and the claim that existence cannot be vague.",
          "Considers at least one response, such as accepting vague existence or a sharp cut-off.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is there an object made of your left shoe and the Eiffel Tower?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Connects the question to an answer to the special composition question.",
          "Weighs the cost of saying yes, such as strange objects, against the cost of saying no, such as vagueness or arbitrariness.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The vagueness argument leaves two extreme answers standing. Each has costs: one denies that tables exist, the
        other says that very odd objects do.
      </p>
      <p>Next, mereological nihilism and universalism.</p>
    </>
  ),
};
