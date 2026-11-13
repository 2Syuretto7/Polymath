import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { WatchTreeViz } from "@/components/viz/WatchTreeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p8.6.3",
  minutes: 85,
  links: {
    revisits: ["p8.6.2", "p4.6.1", "p7.5.6"],
    foreshadows: ["p16.7.3", "p9.1.1", "p9.1.4"],
  },

  puzzle: (
    <>
      <p>
        Newton explained the motions of the planets by mechanical laws, without any appeal to purpose. Yet when we study an
        eye, a leaf or a heart, we cannot help asking what each part is for. Is this a fact about living things, or a habit
        of our minds? Kant, who had already denied that we can know God or the soul, now asked what right we have to judge
        nature as if it had purposes, and where that judgement leads.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Do the same things to a watch and to a tree, and compare what happens.
      </p>
      <WatchTreeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="a natural purpose">
        <p>
          A thing exists as a <strong>natural purpose</strong> if it is cause and effect of itself. Kant&rsquo;s tree does
          this three times over: it produces another tree, preserving the species; it grows by working matter into its own
          substance; and its parts produce one another, leaves sustaining the tree that sustains the leaves. An organism is
          a being in which every part is both an end and a means.
        </p>
      </Definition>

      <Definition title="reflecting and regulative">
        <p>
          The concept of a natural purpose is not a category that makes experience possible. It is a principle of{" "}
          <strong>reflecting judgement</strong>, which looks for a universal to fit a given particular. It is{" "}
          <strong>regulative</strong>: we must investigate organisms as if they were designed, but this guides inquiry and
          does not tell us how they really came to be.
        </p>
      </Definition>

      <Example title="the antinomy of teleological judgement">
        <p>
          One maxim says everything in nature must be judged possible by mechanical laws alone. Another says some products of
          nature cannot be judged possible by those laws, and need the idea of purpose. As claims about things they
          contradict each other. As maxims of reflecting judgement they can coexist: pursue mechanism as far as it goes,
          while recognising that, for minds like ours, it will never fully explain the organism. Kant&rsquo;s famous line:
          there will never be a Newton who could explain the generation of a blade of grass by natural laws not ordered by
          intention.
        </p>
      </Example>

      <Remark title="from nature to morality">
        <p>
          If nature is a system of purposes, what is it all for? Physico-theology, Cleanthes&rsquo;s argument, cannot reach a
          wise and good God from the evidence, as Hume had shown. Kant&rsquo;s answer is that the final end of creation is
          the human being as a moral agent, and he grounds faith in God in this ethical role. The third Critique thus tries
          to unite nature and freedom, the subjects of the first two. Darwin later offered a natural account of adaptation,
          and Fichte, Schelling and Hegel took Kant&rsquo;s idea of a self-organising whole in new directions.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When does a thing exist as a natural purpose, according to Kant?</p>,
      answer: {
        kind: "choice",
        options: [
          "When a designer made it.",
          "When it is cause and effect of itself.",
          "When it is useful to human beings.",
          "When it obeys Newton's laws.",
        ],
        correct: [1],
      },
    },
    {
      key: "status",
      rung: "check",
      prompt: <p>What is the status of the principle that organisms are to be judged as purposive?</p>,
      answer: {
        kind: "choice",
        options: [
          "A category, constitutive of experience",
          "A regulative principle of reflecting judgement",
          "A truth proved by the design argument",
          "A rule of formal logic",
        ],
        correct: [1],
      },
    },
    {
      key: "tree",
      rung: "apply",
      prompt: <p>Which of these hold of Kant&rsquo;s tree but not of a watch? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "It produces another of its kind.",
          "Its parts produce one another.",
          "It was assembled from a prior idea of the whole.",
          "It repairs damage to itself.",
        ],
        correct: [0, 1, 3],
      },
    },
    {
      key: "newton",
      rung: "apply",
      prompt: <p>What does Kant mean by saying there will never be a Newton of a blade of grass?</p>,
      answer: {
        kind: "choice",
        options: [
          "That botany is not worth studying.",
          "That minds like ours can never fully explain organisms by mechanical laws alone, without the idea of purpose.",
          "That grass does not obey the law of gravity.",
          "That Newton had no interest in plants.",
        ],
        correct: [1],
      },
    },
    {
      key: "antinomy",
      rung: "apply",
      prompt: <p>How does Kant resolve the antinomy between mechanism and teleology?</p>,
      answer: {
        kind: "choice",
        options: [
          "Mechanism is simply false.",
          "Teleology is simply false.",
          "Both are maxims guiding reflecting judgement, not claims about how things are in themselves, so they need not conflict.",
          "God decides between them case by case.",
        ],
        correct: [2],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Why, for Kant, is a watch not a natural purpose? Answer briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that in a watch the parts exist for one another but are not produced by one another.",
          "Notes that a watch cannot make another watch, grow or repair itself; its cause is a designer outside it.",
          "Concludes that it lacks the self-causing organisation of a natural purpose.",
        ],
      },
    },
    {
      key: "darwin",
      rung: "stretch",
      prompt: <p>Did Darwin turn out to be the Newton of a blade of grass? Discuss.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that natural selection explains adaptation without an intending designer.",
          "Considers whether biologists still need purposive or functional language, as Kant's regulative principle suggests.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what Kant means by a natural purpose, using the tree and the watch, why judging nature as purposive is regulative rather than constitutive, how he resolves the antinomy of mechanism and teleology, and how the third Critique links nature to morality.",

  glimpse: (
    <p>
      This completes the course on Kant. The next course, on nineteenth-century philosophy, begins with Fichte and
      Schelling, who took Kant&rsquo;s system in directions he rejected, and with Hegel. The Philosophy of Science course
      returns to purpose and function in biology after Darwin.
    </p>
  ),
};
