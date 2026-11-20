import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FrameworkViz } from "@/components/viz/FrameworkViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p27.5.1",
  minutes: 90,
  links: {
    revisits: ["p11.2.1", "p11.2.3", "p27.3.2"],
    foreshadows: ["p27.5.2", "p27.5.3", "p29.4.1"],
  },

  puzzle: (
    <>
      <p>
        &lsquo;Is there a prime between 10 and 20?&rsquo; Yes, 11. &lsquo;So are there numbers?&rsquo; It seems to follow
        at once. Yet philosophers have argued for centuries about whether numbers exist. Either they are missing something
        obvious, or the second question means something different when they ask it. Which?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick a question and compare how Carnap and Quine treat it.</p>
      <FrameworkViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Carnap's frameworks">
        <p>
          In &lsquo;Empiricism, Semantics, and Ontology&rsquo; (1950), Rudolf Carnap held that talk of a kind of entity
          requires a <strong>linguistic framework</strong> with rules for using the new terms. <strong>Internal
          questions</strong>, asked within a framework, are answered by its rules, logically or empirically.{" "}
          <strong>External questions</strong>, about whether the entities really exist apart from any framework, are
          pseudo-questions. What remains is a practical question: whether to adopt the framework, judged by its usefulness.
        </p>
      </Definition>

      <Definition title="Quine's reply">
        <p>
          Quine replied that the distinction rests on the analytic–synthetic distinction, which he rejected in &lsquo;Two
          Dogmas of Empiricism&rsquo; (1951). With no sharp line between questions settled by linguistic rules and questions
          settled by experience, all questions of existence are of one kind, answered by our total theory. A theory is
          committed to whatever its bound variables must range over: &lsquo;to be is to be the value of a variable&rsquo;.
          Since physics quantifies over numbers, we should believe in them.
        </p>
      </Definition>

      <Example title="neo-Carnapians and their critics">
        <ul>
          <li>Amie Thomasson&rsquo;s easy ontology: existence questions are answered by trivial inferences from uncontroversial truths, as from the prime to numbers, so no deep metaphysical work is needed.</li>
          <li>Eli Hirsch&rsquo;s quantifier variance: there are many equally good meanings for &lsquo;there is&rsquo;, and many ontological disputes are verbal.</li>
          <li>Theodore Sider replies that some meanings carve nature at its joints better than others, so there is a privileged question of what there is.</li>
        </ul>
      </Example>

      <Remark title="why it matters for this course">
        <p>
          The special composition question, the nature of possible worlds and the status of grounding all look like deep
          questions. If Carnap or Hirsch is right, some of them dissolve; if Quine or Sider is right, they are hard but
          genuine.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "int",
      rung: "check",
      prompt: <p>For Carnap, what is an internal question?</p>,
      answer: { kind: "choice", options: ["A question asked within a linguistic framework and answered by its rules", "A question about one’s own mind", "A question about reality beyond any framework", "A question that cannot be answered"], correct: [0] },
    },
    {
      key: "quine",
      rung: "check",
      prompt: <p>On what ground did Quine reject Carnap&rsquo;s distinction?</p>,
      answer: { kind: "choice", options: ["It depends on the analytic–synthetic distinction, which Quine rejected", "It makes ontology too easy for scientists", "Carnap misread Kant", "Frameworks cannot have rules"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how does Carnap treat &lsquo;Are there numbers?&rsquo;</p>,
      answer: { kind: "choice", options: ["Internally it is trivially true; externally it lacks cognitive content", "It is a deep empirical question", "It is false", "It is answered by physics alone"], correct: [0] },
    },
    {
      key: "crit",
      rung: "apply",
      prompt: <p>What is Quine&rsquo;s criterion of ontological commitment?</p>,
      answer: { kind: "choice", options: ["To be is to be the value of a bound variable", "To be is to be perceived", "To be is to have causal powers", "To be is to be named"], correct: [0] },
    },
    {
      key: "easy",
      rung: "apply",
      prompt: <p>What does Thomasson&rsquo;s easy ontology say?</p>,
      answer: { kind: "choice", options: ["Existence questions are answered by trivial inferences from uncontroversial truths", "Nothing exists", "Only physics can answer existence questions", "Existence questions are always verbal"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is Quine right that questions about what exists are continuous with science? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Carnap’s internal–external distinction and Quine’s reply fairly.",
          "Considers a point on either side, such as indispensability, easy ontology or quantifier variance.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does the idea of a joint-carving quantifier restore serious ontology?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains Sider’s idea that some meanings of ‘there is’ are privileged.",
          "Considers a doubt, such as whether we can grasp or know which meaning is privileged.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If two philosophers mean different things by their words, their dispute may be merely verbal. There are tests for
        that.
      </p>
      <p>Next, verbal disputes.</p>
    </>
  ),
};
