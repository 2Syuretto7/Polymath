import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { KripkeFixViz } from "@/components/viz/KripkeFixViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p17.5.3",
  minutes: 80,
  links: {
    revisits: ["p17.5.2", "p17.4.1", "p17.5.1"],
    foreshadows: ["p29.4.2", "p29.4.1", "p18.7.2"],
  },

  puzzle: (
    <>
      <p>
        A child learns to say &ldquo;true&rdquo; of sentences that do not themselves mention truth, then of sentences that
        say those are true, and so on. Most of what we say about truth can be traced back to facts about the world in this
        way. What about the sentences that never can?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Watch the truth predicate fill in stage by stage, then start with the truth-teller counted true.</p>
      <KripkeFixViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the construction">
        <p>
          In &ldquo;Outline of a Theory of Truth&rdquo; (1975), Saul Kripke took a language with a predicate T and interpreted it
          partially: T has an extension, sentences counted true, and an anti-extension, sentences counted false, and others are
          left out of both. Sentences are evaluated by the strong Kleene tables, so a sentence can be true, false or
          undefined. Start with both sets empty. At each stage, put into the extension every sentence true under the current
          interpretation, and into the anti-extension every false one.
        </p>
      </Definition>

      <Example title="the fixed point">
        <p>
          Because the Kleene tables are monotone, the sets only grow, and by a cardinality argument the process reaches a{" "}
          <strong>fixed point</strong>: an interpretation in which the extension of T is exactly the set of true sentences.
          At it, T(&ldquo;A&rdquo;) and A always have the same value. Sentences settled in the least fixed point are{" "}
          <strong>grounded</strong>. The liar is ungrounded and receives no value in any fixed point; the truth-teller is
          ungrounded but receives a value in some larger fixed points.
        </p>
      </Example>

      <Definition title="what is gained">
        <p>
          The language contains its own truth predicate, with no hierarchy, and the Nixon and Dean case is handled by the
          facts: whether their statements are grounded depends on what else they said. The theory gives a precise sense to
          the idea that paradoxical sentences fail to say anything that is true or false.
        </p>
      </Definition>

      <Remark title="the revenge problem">
        <p>
          Within the language one cannot say that the liar is &ldquo;not true&rdquo; in the sense that includes being
          ungrounded, for &ldquo;this sentence is not true&rdquo;, read that way, would be true if ungrounded. Kripke admitted
          that &ldquo;the ghost of the Tarski hierarchy is still with us&rdquo;: the notion of groundedness is expressed only in
          a metalanguage. Later work, by Field, Maudlin and others, tries to lay this ghost.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "partial",
      rung: "check",
      prompt: <p>In Kripke&rsquo;s construction, what is the extension of the truth predicate at stage 0?</p>,
      answer: { kind: "choice", options: ["Empty", "All sentences", "All sentences without the word true", "All arithmetical truths"], correct: [0] },
    },
    {
      key: "fixed",
      rung: "check",
      prompt: <p>What holds at a fixed point of Kripke&rsquo;s construction?</p>,
      answer: {
        kind: "choice",
        options: [
          "T(“A”) and A always have the same value.",
          "Every sentence is true or false.",
          "The liar is true.",
          "The truth predicate is empty.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, starting with nothing settled, how many sentences are never settled?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "s6",
      rung: "apply",
      prompt: <p>Why does s₆, &ldquo;s₄ is true or s₇ is true&rdquo;, become true even though s₇ never settles?</p>,
      answer: {
        kind: "choice",
        options: [
          "In the strong Kleene tables a disjunction with one true disjunct is true, whatever the other.",
          "Because s₇ is true.",
          "Because every disjunction is true.",
          "Because s₆ is about itself.",
        ],
        correct: [0],
      },
    },
    {
      key: "tt",
      rung: "apply",
      prompt: <p>What does the second option in the visualisation show about the truth-teller s₈?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is ungrounded, yet some fixed points make it true.",
          "It is grounded and true.",
          "It is paradoxical like the liar.",
          "It is false in every fixed point.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does Kripke&rsquo;s theory solve the liar paradox? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the idea of building truth in stages to a fixed point, leaving the liar ungrounded.",
          "States the revenge problem, that ungroundedness cannot be expressed in the language itself.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>s₉, &ldquo;s₇ is true or s₇ is not true&rdquo;, is never settled under strong Kleene. Should it be counted true anyway?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that it is an instance of excluded middle, which seems true whatever s₇ is.",
          "Considers the alternative of supervaluation schemes, in which s₉ comes out true, and their cost.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Kripke’s construction of a truth predicate in stages, the least fixed point and groundedness, and why the liar remains a problem in the form of revenge.",

  glimpse: (
    <p>
      Next, the course turns to the history of analytic philosophy, beginning with logicism: Frege&rsquo;s and Russell&rsquo;s
      attempt to reduce arithmetic to logic, and what became of it.
    </p>
  ),
};
