import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { RevisionViz } from "@/components/viz/RevisionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p17.5.1",
  minutes: 80,
  links: {
    revisits: ["p17.4.4", "p22.2.2", "p17.3.1"],
    foreshadows: ["p17.5.2", "p17.5.3", "p29.4.2"],
  },

  puzzle: (
    <>
      <p>
        Consider the sentence &ldquo;This sentence is not true.&rdquo; If it is true, then what it says holds, so it is not
        true. If it is not true, then what it says holds, so it is true. Ordinary words, a principle about truth that seems
        undeniable, and a contradiction. Which of them must go?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Guess which sentences are true, then apply the rule for truth again and again. Which sentences settle?</p>
      <RevisionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the ingredients">
        <p>
          The paradox needs three things. <strong>Self-reference</strong>: a sentence L that says of itself that it is not
          true, which can be built by naming, by demonstratives, or, as Gödel showed, by diagonalisation in arithmetic. The{" "}
          <strong>T-schema</strong>: for every sentence A, &ldquo;A&rdquo; is true if and only if A. And{" "}
          <strong>classical logic</strong>, in particular excluded middle and the rule that a contradiction is unacceptable.
          From the T-schema for L, L is true if and only if L is not true, and classically that is a contradiction.
        </p>
      </Definition>

      <Example title="relatives">
        <p>
          The truth-teller, &ldquo;this sentence is true&rdquo;, is not contradictory but seems baseless: nothing settles
          whether it is true. Pairs such as &ldquo;the next sentence is true; the previous sentence is not true&rdquo;
          contradict without either speaking of itself. Yablo&rsquo;s paradox (1993) uses an infinite sequence, each sentence
          saying that all later ones are untrue, and arguably has no self-reference at all. Curry&rsquo;s paradox, &ldquo;if
          this sentence is true, then the moon is cheese&rdquo;, needs no negation.
        </p>
      </Example>

      <Definition title="the main responses">
        <p>
          Restrict the language: Tarski bans a language from containing its own truth predicate. Restrict the T-schema:
          Kripke lets some sentences be neither true nor false, so the schema fails for them. Change the logic: Priest&rsquo;s
          dialetheism accepts that L is both true and false and blocks explosion. Or treat truth as revision: Gupta and Belnap
          study the pattern of repeated revision, as in the visualisation, rather than a single verdict.
        </p>
      </Definition>

      <Remark title="revenge">
        <p>
          Every response seems to invite a new paradox in its own terms. If L is &ldquo;neither true nor false&rdquo;, consider
          &ldquo;this sentence is false or neither&rdquo;. If L is &ldquo;both&rdquo;, consider &ldquo;this sentence is only
          false&rdquo;. These <strong>revenge</strong> liars suggest that no language can describe its own semantics
          completely.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ingred",
      rung: "check",
      prompt: <p>Which principle about truth does the liar argument use?</p>,
      answer: {
        kind: "choice",
        options: ["The T-schema: “A” is true if and only if A", "Truth is correspondence to facts", "Every sentence is meaningful", "Truth is what works"],
        correct: [0],
      },
    },
    {
      key: "tt",
      rung: "check",
      prompt: <p>What is odd about the truth-teller, &ldquo;this sentence is true&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "It can be consistently taken as true or as false, and nothing decides which.",
          "It leads to a contradiction like the liar.",
          "It is plainly false.",
          "It cannot be written down.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how often does the pair A and B return to the same pattern of values?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "curry",
      rung: "apply",
      prompt: <p>What makes Curry&rsquo;s paradox especially troubling for responses that change negation?</p>,
      answer: {
        kind: "choice",
        options: [
          "It uses only the conditional and the T-schema, with no negation at all.",
          "It uses infinitely many sentences.",
          "It concerns only arithmetic.",
          "It is not self-referential.",
        ],
        correct: [0],
      },
    },
    {
      key: "revenge",
      rung: "apply",
      prompt: <p>A theorist says the liar is neither true nor false. Which sentence is the revenge liar for this view?</p>,
      answer: {
        kind: "choice",
        options: ["“This sentence is false or neither true nor false.”", "“This sentence is true.”", "“Snow is white.”", "“This sentence has five words.”"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Which ingredient of the liar paradox should we give up? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Sets out the paradox from self-reference, the T-schema and classical logic.",
          "Defends giving up one ingredient and considers a cost, such as a revenge paradox.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Yablo&rsquo;s infinite sequence produces a paradox without any sentence referring to itself. Does that show self-reference is not the problem?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes Yablo’s sequence and why every assignment of truth values fails.",
          "Considers the reply, by Priest and others, that the sequence involves a hidden circularity in its description.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the liar paradox, the three ingredients it needs, the main ways of responding, and what a revenge paradox is.",

  glimpse: (
    <p>
      Next, Tarski&rsquo;s theory of truth: his adequacy condition, the definition of truth for a formal language in a richer
      metalanguage, and his theorem that no sufficiently strong language can define its own truth.
    </p>
  ),
};
