import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["internal question", "external question"];
const ITEMS: SortItem[] = [
  { text: "Is there a prime number greater than 100?", cat: "internal question", why: "Asked within the framework of numbers and answered by its rules: yes, analytically." },
  { text: "Is there a white piece of paper on my desk?", cat: "internal question", why: "Asked within the framework of things and settled by observation." },
  { text: "Are unicorns real?", cat: "internal question", why: "The reality of a particular kind of thing is an empirical question inside the thing language." },
  { text: "Is 5 a number?", cat: "internal question", why: "Trivially yes, by the rules for the word ‘number’ in the framework." },
  { text: "Are there really numbers, as the Platonist says?", cat: "external question", why: "Asked as a question about the framework as a whole, it has no theoretical content for Carnap." },
  { text: "Is the world of things real?", cat: "external question", why: "Not a question within the thing language but about adopting it; the realist and the idealist argue over nothing." },
  { text: "Should physics use the language of real numbers?", cat: "external question", why: "A legitimate external question, but a practical one, settled by efficiency and fruitfulness, not truth." },
  { text: "Do propositions exist?", cat: "external question", why: "As a metaphysical question it is a pseudo-question; the real issue is whether a language with propositions is useful." },
];

export const lesson: LessonContent = {
  id: "p18.4.4",
  minutes: 80,
  links: {
    revisits: ["p18.4.2", "p18.4.3", "p11.2.1"],
    foreshadows: ["p18.6.1", "p18.6.3", "p27.5.1"],
  },

  puzzle: (
    <>
      <p>
        A mathematician says, without hesitation, that there are infinitely many primes. A philosopher asks whether numbers
        really exist. The mathematician&rsquo;s claim seems to imply that they do, yet the philosopher&rsquo;s question seems
        open and deep. Are the two talking about the same thing at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each question by whether it is asked within a framework or about one.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which kind of question is it?" />
    </>
  ),

  theory: (
    <>
      <Definition title="linguistic frameworks">
        <p>
          In &ldquo;Empiricism, Semantics, and Ontology&rdquo; (1950), Rudolf Carnap argued that to speak about a new kind of
          entity is to adopt a <strong>linguistic framework</strong>: a system of expressions with rules for using them.
          There is the framework of observable things, the framework of numbers, of propositions, of space-time points, and
          so on. Each introduces a general term, such as &ldquo;number&rdquo;, and variables ranging over its entities.
        </p>
      </Definition>

      <Definition title="internal and external questions">
        <p>
          <strong>Internal</strong> questions are asked within a framework and answered by its methods: logically, for
          numbers, or empirically, for things. <strong>External</strong> questions concern the framework itself. Taken as
          theoretical questions about whether the entities &ldquo;really&rdquo; exist, they are pseudo-questions, with no
          criteria for settling them. Taken as practical questions about whether to adopt the framework, they are legitimate,
          and are answered by expediency, fruitfulness and simplicity.
        </p>
      </Definition>

      <Example title="dissolving old disputes">
        <p>
          On this view, the debate between Platonists and nominalists about numbers, and between realists and idealists about
          the external world, is not a debate about any fact. Carnap concluded with a call for tolerance: &ldquo;Let us be
          cautious in making assertions and critical in examining them, but tolerant in permitting linguistic forms.&rdquo;
        </p>
      </Example>

      <Remark title="Quine’s reply">
        <p>
          Quine objected that the internal-external distinction rests on the analytic-synthetic distinction, which he rejected,
          and that choosing a framework for its usefulness is no different in kind from accepting a scientific theory for its
          usefulness. So ontological questions are continuous with science, not idle. Recent meta-ontology has revived both
          sides of this dispute.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "internal",
      rung: "check",
      prompt: <p>What is an internal question, for Carnap?</p>,
      answer: {
        kind: "choice",
        options: [
          "A question asked within a linguistic framework and answered by its rules or by observation.",
          "A question about one’s own mind.",
          "A question with no answer.",
          "A question about whether to adopt a framework.",
        ],
        correct: [0],
      },
    },
    {
      key: "external",
      rung: "check",
      prompt: <p>How should a legitimate external question be understood?</p>,
      answer: {
        kind: "choice",
        options: [
          "As a practical question about whether to adopt the framework, judged by usefulness.",
          "As a deep metaphysical question about reality.",
          "As an empirical question within the framework.",
          "As meaningless in every form.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many of the questions are internal?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "unicorn",
      rung: "apply",
      prompt: <p>Why is &ldquo;are unicorns real?&rdquo; an internal question rather than an external one?</p>,
      answer: {
        kind: "choice",
        options: [
          "It asks about a particular kind of thing within the thing language, and observation can settle it.",
          "Unicorns are numbers.",
          "It is about the whole framework of things.",
          "It is a practical question.",
        ],
        correct: [0],
      },
    },
    {
      key: "quine",
      rung: "apply",
      prompt: <p>What was Quine&rsquo;s main objection to Carnap&rsquo;s distinction?</p>,
      answer: {
        kind: "choice",
        options: [
          "It depends on the analytic-synthetic distinction, and choosing frameworks is like choosing scientific theories.",
          "It allows too few frameworks.",
          "Numbers obviously exist.",
          "External questions are always empirical.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is &ldquo;do numbers really exist?&rdquo; a pseudo-question? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Sets out Carnap’s distinction between internal and external questions.",
          "Considers Quine’s objection or another reason to think the question has content.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If adopting a framework is a practical decision, could one framework be better than another at describing how things really are?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains that for Carnap there is no framework-independent standpoint from which to compare frameworks with reality.",
          "Considers the worry that usefulness may itself be explained by the framework matching reality.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, ordinary language philosophy begins with the later Wittgenstein, who turned from ideal languages to the
      languages we actually speak.
    </p>
  ),
};
