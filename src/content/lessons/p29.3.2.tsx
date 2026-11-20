import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SupervaluationViz } from "@/components/viz/SupervaluationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p29.3.2",
  minutes: 90,
  links: {
    revisits: ["p29.3.1", "p17.4.1", "p26.1.1"],
    foreshadows: ["p29.3.3", "p29.4.1", "p29.4.2"],
  },

  puzzle: (
    <>
      <p>
        Ravi is borderline tall. Is &lsquo;Ravi is tall or Ravi is not tall&rsquo; true? It seems so, whatever the facts.
        Yet neither disjunct seems true. Can a disjunction be true when neither of its parts is?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Set the range of admissible cutoffs for &lsquo;tall&rsquo; and Ravi&rsquo;s height, and see which sentences are super-true.</p>
      <SupervaluationViz />
    </>
  ),

  theory: (
    <>
      <Definition title="sharpenings and super-truth">
        <p>
          Bas van Fraassen introduced supervaluations for sentences with empty names; Kit Fine (1975) applied them to
          vagueness. A <strong>sharpening</strong> of the language makes each vague predicate precise in an admissible way,
          for instance by fixing a cutoff for &lsquo;tall&rsquo; within the range competent use allows. A sentence is{" "}
          <strong>super-true</strong> if it is true on every admissible sharpening, <strong>super-false</strong> if false on
          every one, and otherwise neither. Supervaluationism identifies truth with super-truth.
        </p>
      </Definition>

      <Definition title="penumbral connections">
        <p>
          Sharpenings must respect connections between vague words. On every admissible sharpening, anyone taller than a
          tall person is tall, and nothing is both red and orange. So &lsquo;if a is taller than b and b is tall, then a is
          tall&rsquo; is super-true even when b is borderline.
        </p>
      </Definition>

      <Example title="classical logic without bivalence">
        <p>
          Every classical tautology is true on each sharpening, hence super-true: &lsquo;Ravi is tall or not&rsquo; holds.
          But bivalence fails: &lsquo;Ravi is tall&rsquo; is neither super-true nor super-false. The sorites&rsquo;s universal
          tolerance premise is false on every sharpening, so super-false, and the paradox is unsound. Yet &lsquo;there is an
          n such that n cm is tall and n − 1 cm is not&rsquo; is super-true, though no instance of it is.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          Timothy Williamson argues that, with a &lsquo;definitely&rsquo; operator, supervaluational logic loses familiar
          rules such as conditional proof and reductio. The disquotational schema &lsquo;&ldquo;S&rdquo; is true if and only if
          S&rsquo; also fails for borderline S. Many find the super-truth of &lsquo;there is a sharp cutoff&rsquo;
          just as hard to accept as the epistemicist&rsquo;s sharp cutoff. And the range of admissible sharpenings is itself
          vague, so higher-order vagueness returns.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "super",
      rung: "check",
      prompt: <p>When is a sentence super-true?</p>,
      answer: { kind: "choice", options: ["When it is true on every admissible sharpening", "When it is true on at least one sharpening", "When most speakers accept it", "When it has a high degree of truth"], correct: [0] },
    },
    {
      key: "lem",
      rung: "check",
      prompt: <p>For a borderline case, which sentence is super-true?</p>,
      answer: { kind: "choice", options: ["‘Ravi is tall or Ravi is not tall’", "‘Ravi is tall’", "‘Ravi is not tall’", "‘“Ravi is tall” is true or “Ravi is tall” is false’"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with admissible cutoffs from 170 to 185 cm, how many whole-centimetre heights are borderline?</p>,
      answer: { kind: "numeric", value: 15, tolerance: 0 },
    },
    {
      key: "five",
      rung: "apply",
      prompt: <p>If the admissible cutoffs run from 175 to 180 cm, how many whole-centimetre heights are borderline?</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0 },
    },
    {
      key: "rule",
      rung: "apply",
      prompt: <p>Which classical rule fails in supervaluational logic once a &lsquo;definitely&rsquo; operator is added?</p>,
      answer: { kind: "choice", options: ["Conditional proof", "Modus ponens", "Conjunction introduction", "Double negation elimination for tautologies"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Should truth be identified with super-truth? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains super-truth as truth on every admissible sharpening.",
          "Considers an objection, such as the failure of the disquotational schema or of bivalence.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Supervaluationism makes &lsquo;there is a sharp cutoff for tall&rsquo; true. Does it really avoid a sharp boundary?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the existential claim is super-true while no instance is.",
          "Considers whether this difference from epistemicism is substantive or merely verbal.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The boldest answer to the sorites keeps both classical logic and bivalence. There is a last grain that makes a heap,
        it says; we simply cannot know which.
      </p>
      <p>Next, epistemicism.</p>
    </>
  ),
};
