import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SyllogismViz } from "@/components/viz/SyllogismViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p4.5.2",
  minutes: 85,
  links: {
    revisits: ["p2.1.2", "p2.1.3", "p4.5.1"],
    foreshadows: ["p2.5.2", "p4.7.2", "p18.1.2"],
  },

  puzzle: (
    <>
      <p>
        Every Greek is mortal, and every Athenian is Greek, so every Athenian is mortal. Every Greek is mortal, and some
        mortal is a philosopher, so some Greek is a philosopher? The second sounds almost as good, and its conclusion is
        true, yet something is wrong with it.
      </p>
      <p>
        Aristotle was the first person to ask, in general, which arguments of this shape are valid and why, and to answer
        with a system. For more than two thousand years, logic largely meant his logic. How did it work?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a figure, the arrangement of the terms, and a mood, the types of the three sentences. The checker tries every
        way of filling the diagram. If some situation makes both premises true and the conclusion false, it marks that
        situation and the argument is invalid. Start with Barbara, then try to break it.
      </p>
      <SyllogismViz />
    </>
  ),

  theory: (
    <>
      <Definition title="what a syllogism is">
        <p>
          In the <em>Prior Analytics</em>, Aristotle defines a syllogism as an argument in which, certain things being
          laid down, something different from them follows of necessity because they are so. This is close to the modern
          notion of a valid argument. In practice he studies arguments with two premises and a conclusion, each a
          categorical sentence relating two terms.
        </p>
      </Definition>

      <Definition title="the four kinds of sentence">
        <p>Later logicians labelled them with vowels:</p>
        <ul>
          <li><strong>A</strong>, universal affirmative: every S is P;</li>
          <li><strong>E</strong>, universal negative: no S is P;</li>
          <li><strong>I</strong>, particular affirmative: some S is P;</li>
          <li><strong>O</strong>, particular negative: some S is not P.</li>
        </ul>
        <p>
          A and O contradict each other, as do E and I: exactly one of each pair is true. A and E cannot both be true. With
          Aristotle&rsquo;s assumption that terms are not empty, A implies I and E implies O.
        </p>
      </Definition>

      <Definition title="figures and moods">
        <p>
          A syllogism has three terms: the <strong>major</strong> P, the predicate of the conclusion; the{" "}
          <strong>minor</strong> S, its subject; and the <strong>middle</strong> M, which links them and disappears. The
          figure depends on where M stands: predicate of one premise and subject of the other (first figure), predicate of
          both (second), or subject of both (third). A fourth figure was added by later logicians.
        </p>
      </Definition>

      <Example title="perfect syllogisms and reduction">
        <p>
          Aristotle regards the first-figure moods as <strong>perfect</strong>: their validity is evident. The four main
          ones were later called Barbara (AAA), Celarent (EAE), Darii (AII) and Ferio (EIO). The others he proves by
          reducing them to these, using <strong>conversion</strong>: from &ldquo;no S is P&rdquo; infer &ldquo;no P is
          S&rdquo;; from &ldquo;some S is P&rdquo; infer &ldquo;some P is S&rdquo;; from &ldquo;every S is P&rdquo; infer
          only &ldquo;some P is S&rdquo;.
        </p>
        <p>
          For instance Cesare, in the second figure, is: no P is M, every S is M, so no S is P. Convert the first premise to
          &ldquo;no M is P&rdquo;, and the argument becomes Celarent. Two moods, Baroco and Bocardo, need a different method,
          reductio ad impossibile: assume the conclusion false and derive a contradiction with a premise.
        </p>
      </Example>

      <Example title="the puzzle again">
        <p>
          Put in standard order, with the premise containing the predicate of the conclusion first, the second argument
          reads: some mortal is a philosopher; every Greek is mortal; so some Greek is a philosopher. That is the first
          figure in the mood IAI, and Darii needs the first premise to be universal. Medieval logicians called the fault an
          undistributed middle: neither premise says anything about every mortal. Substitute terms: some mortal is a cat;
          every dog is mortal;
          so some dog is a cat. Same form, true premises, false conclusion.
        </p>
      </Example>

      <Remark title="achievement and limits">
        <p>
          Aristotle introduced letters as variables, separated form from content, and proved results about his system,
          including that every valid syllogism can be reduced to Barbara and Celarent. Kant remarked that since Aristotle logic
          had been unable to take a single step forward, and seemed complete. But the system cannot handle relations, as in Augustus De Morgan&rsquo;s example &ldquo;every horse is an
          animal, so every head of a horse is the head of an animal&rdquo;, or nested quantifiers. Frege&rsquo;s predicate logic, in 1879,
          contains the syllogistic as a small fragment.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "type",
      rung: "check",
      prompt: <p>&ldquo;Some philosophers are not Athenians&rdquo; is which type of sentence?</p>,
      answer: { kind: "choice", options: ["A", "E", "I", "O"], correct: [3] },
    },
    {
      key: "contra",
      rung: "check",
      prompt: <p>Which sentence contradicts &ldquo;every swan is white&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: ["No swan is white.", "Some swan is white.", "Some swan is not white.", "Every white thing is a swan."],
        correct: [2],
      },
    },
    {
      key: "conv",
      rung: "apply",
      prompt: <p>Which inferences are valid conversions? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "No fish is a mammal, so no mammal is a fish.",
          "Every dog is an animal, so every animal is a dog.",
          "Some Greek is a philosopher, so some philosopher is a Greek.",
          "Some animal is not a dog, so some dog is not an animal.",
        ],
        correct: [0, 2],
      },
    },
    {
      key: "middle",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;No reptile has fur; every snake is a reptile; so no snake has fur.&rdquo; What is the middle term, and
          what is the mood?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["reptile; Celarent (EAE)", "snake; Barbara (AAA)", "fur; Cesare (EAE)", "reptile; Ferio (EIO)"],
        correct: [0],
      },
    },
    {
      key: "darapti",
      rung: "apply",
      prompt: (
        <p>
          Darapti: every M is P, every M is S, so some S is P. Why does it fail if there may be no M at all?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Because then both premises are true trivially, while some S is P can be false.",
          "Because then the conclusion is automatically true.",
          "Because it is in the first figure.",
          "It does not fail.",
        ],
        correct: [0],
      },
    },
    {
      key: "reduce",
      rung: "prove",
      prompt: (
        <p>
          Reduce Camestres (every P is M, no S is M, so no S is P) to Celarent, explaining each conversion and why the
          premises may be swapped.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Converts 'no S is M' to 'no M is S' and uses it as the major premise with 'every P is M' as the minor.",
          "Applies Celarent to obtain 'no P is S'.",
          "Converts the conclusion to 'no S is P'. A clear sequence of steps earns full credit.",
        ],
      },
    },
    {
      key: "limits",
      rung: "stretch",
      prompt: (
        <p>
          &ldquo;Every horse is an animal, so every head of a horse is the head of an animal&rdquo; is valid but cannot be
          expressed as a syllogism. Explain why, and show how predicate logic captures it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that the argument depends on a relation, 'is the head of', which categorical sentences cannot express.",
          "Writes it with quantifiers, for example ∀x(Hx → Ax) ⊢ ∀y(∃x(Hx ∧ Byx) → ∃x(Ax ∧ Byx)).",
          "Explains briefly why the inference holds. Any reasonable attempt earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what Aristotle meant by a syllogism, the four kinds of categorical sentence, the three figures, why first-figure syllogisms are called perfect, and how the others are reduced to them.",

  glimpse: (
    <p>
      The Stoics, later in this course, built a rival logic of whole sentences. Logic I tests validity with models and
      counterexamples, just as the checker does, and Frege&rsquo;s <em>Begriffsschrift</em> replaced the syllogistic with
      predicate logic.
    </p>
  ),
};
