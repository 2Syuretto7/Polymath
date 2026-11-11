import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { RelationGridViz } from "@/components/viz/RelationGridViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p2.4.2",
  minutes: 80,
  links: {
    revisits: ["p1.5.1", "m1.2.3"],
    parallels: ["m1.2.4"],
    foreshadows: ["p2.5.2", "p6.4.2"],
  },

  puzzle: (
    <>
      <p>Compare two sentences:</p>
      <ul>
        <li>Everyone has someone they admire.</li>
        <li>There is someone whom everyone admires.</li>
      </ul>
      <p>
        The first is believable about almost any group of people. The second claims there is a single hero. They use the
        same words, &ldquo;everyone&rdquo; and &ldquo;someone&rdquo;, in a different order. Does the second follow from the
        first? Does the first follow from the second?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A relation between people can be drawn as a grid: a mark in row x, column y means x likes y. &ldquo;Everyone likes
        someone&rdquo; asks for a mark somewhere in every row. &ldquo;Someone is liked by everyone&rdquo; asks for one
        whole column of marks. The second is a much stronger demand.
      </p>
      <RelationGridViz />
    </>
  ),

  theory: (
    <>
      <Definition title="relations">
        <p>
          A predicate may take two or more names: Lab says that a likes b. The order matters: Lab and Lba are different
          sentences, and either can be true without the other. A two-place predicate is a <strong>relation</strong>.
        </p>
      </Definition>

      <Definition title="scope, free and bound">
        <p>
          In ∀xφ and ∃xφ, the formula φ is the <strong>scope</strong> of the quantifier. An occurrence of x is{" "}
          <strong>bound</strong> if it lies in the scope of a quantifier on x, and <strong>free</strong> otherwise. A{" "}
          <strong>sentence</strong> is a formula with no free variables. Lxy is not a sentence, ∃yLxy is not either, but
          ∀x∃yLxy is.
        </p>
      </Definition>

      <Remark title="reading from the outside in">
        <p>
          Read a string of quantifiers from left to right, as a game. ∀x∃y Lxy: whoever you pick for x, I can then find a
          y that x likes. My choice of y may depend on x. ∃y∀x Lxy: I must name one y first, and then it must work for
          every x you pick. Going first is a handicap, which is why the second sentence is stronger.
        </p>
      </Remark>

      <Example title="what follows from what">
        <ul>
          <li>∃y∀x Lxy entails ∀x∃y Lxy: if one person is liked by everyone, then everyone likes someone, namely that person.</li>
          <li>
            ∀x∃y Lxy does not entail ∃y∀x Lxy. In the cycle where a likes b, b likes c, c likes d and d likes a, everyone
            likes someone, but nobody is liked by everyone.
          </li>
          <li>Quantifiers of the same kind can be swapped: ∀x∀y Lxy says the same as ∀y∀x Lxy, and likewise for ∃.</li>
        </ul>
      </Example>

      <Remark title="the quantifier shift fallacy">
        <p>
          Reasoning from ∀x∃y to ∃y∀x is a classic mistake. &ldquo;Everyone has a mother, so someone is everyone&rsquo;s
          mother.&rdquo; Put that way it is plainly absurd, but it can hide in longer arguments. Critics have accused some
          versions of the cosmological argument, met in Introduction to Philosophy, of this step: from &ldquo;every
          dependent thing has something it depends on&rdquo; to &ldquo;there is something on which every dependent thing
          depends&rdquo;. Whether a given version really commits the fallacy is a matter of close reading, and
          symbolising it is the best way to find out.
        </p>
      </Remark>

      <Example title="symbolising with several quantifiers">
        <p>Domain: people and books. Sx: x is a student. Bx: x is a book. Rxy: x reads y. Lxy: x likes y.</p>
        <ul>
          <li>&ldquo;Every student reads some book&rdquo;: ∀x(Sx → ∃y(By ∧ Rxy)).</li>
          <li>&ldquo;There is a book that every student reads&rdquo;: ∃y(By ∧ ∀x(Sx → Rxy)).</li>
          <li>&ldquo;Nobody likes everyone&rdquo;: ¬∃x∀y Lxy, or equivalently ∀x∃y ¬Lxy.</li>
          <li>&ldquo;Everyone likes someone who likes them&rdquo;: ∀x∃y(Lxy ∧ Lyx).</li>
        </ul>
        <p>
          Work from the outside in. For the first: every student is such that there is some book they read. Each
          &ldquo;some&rdquo; and &ldquo;every&rdquo; brings its own variable, restricted by ∧ or → as in the last lesson.
        </p>
      </Example>

      <Remark title="the same distinction in mathematics">
        <p>
          The order of quantifiers is the difference between continuity and uniform continuity. Continuity on an interval
          says: for every point and every ε there is a δ, which may depend on the point. Uniform continuity says: for every
          ε there is a δ that works at every point at once. Moving a single &ldquo;for every&rdquo; past a &ldquo;there
          is&rdquo; turns one definition into the other.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "everyone",
      rung: "check",
      prompt: <p>With Lxy: x likes y, symbolise &ldquo;Everyone likes someone.&rdquo;</p>,
      answer: { kind: "choice", options: ["∀x∃y Lxy", "∃y∀x Lxy", "∃x∀y Lxy", "∀x∀y Lxy"], correct: [0] },
    },
    {
      key: "entails",
      rung: "check",
      prompt: <p>Which of these is correct?</p>,
      answer: {
        kind: "choice",
        options: [
          "∀x∃y Lxy entails ∃y∀x Lxy",
          "∃y∀x Lxy entails ∀x∃y Lxy",
          "Each entails the other",
          "Neither entails the other",
        ],
        correct: [1],
      },
    },
    {
      key: "cycle",
      rung: "apply",
      prompt: (
        <p>
          In a domain of four people where a likes b, b likes c, c likes d, d likes a, and nothing else, which sentences
          are true? Choose all that apply.
        </p>
      ),
      answer: { kind: "choice", options: ["∀x∃y Lxy", "∃y∀x Lxy", "∀y∃x Lxy", "∃x Lxx"], correct: [0, 2] },
    },
    {
      key: "nobody",
      rung: "apply",
      prompt: <p>Which of these say &ldquo;Nobody likes everyone&rdquo;? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["¬∃x∀y Lxy", "∀x∃y ¬Lxy", "∃x∀y ¬Lxy", "¬∀x∃y Lxy"], correct: [0, 1] },
    },
    {
      key: "books",
      rung: "apply",
      prompt: <p>With Sx: x is a student, Bx: x is a book, Rxy: x reads y, symbolise &ldquo;Every student reads some book.&rdquo;</p>,
      answer: {
        kind: "choice",
        options: [
          "∀x(Sx → ∃y(By ∧ Rxy))",
          "∃y(By ∧ ∀x(Sx → Rxy))",
          "∀x∃y((Sx ∧ By) → Rxy)",
          "∀x(Sx ∧ ∃y(By ∧ Rxy))",
        ],
        correct: [0],
      },
    },
    {
      key: "counter",
      rung: "prove",
      prompt: (
        <p>
          Show that ∀x∃y Lxy does not entail ∃y∀x Lxy by describing a domain and a relation in which the first is true and
          the second false. Then explain in words why ∃y∀x Lxy does entail ∀x∃y Lxy.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Describes a specific domain and relation, such as a cycle or 'x likes y exactly when y = x', where every row has a mark but no column is full.",
          "Checks both sentences in that world.",
          "Explains that if some y is liked by every x, then for each x that same y is someone x likes.",
        ],
      },
    },
    {
      key: "cause",
      rung: "stretch",
      prompt: (
        <p>
          Consider the argument: &ldquo;Every event has a cause. So there is something that causes every event.&rdquo;
          Symbolise premise and conclusion, with Ex: x is an event and Cxy: x causes y. Is the argument valid? Then suggest
          an extra premise that would make it valid, and say whether you think a defender of the cosmological argument is
          entitled to it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Symbolises the premise as ∀y(Ey → ∃x Cxy) and the conclusion as ∃x∀y(Ey → Cxy), or equivalent.",
          "Says the argument is invalid, ideally with a world where each event has a different cause.",
          "Proposes a premise that bridges the gap (for example that all causes trace back to a single cause) and gives a thoughtful view on whether it can be assumed; any reasoned view is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between “everyone likes someone” and “someone is liked by everyone”, using a grid of who likes whom, and why the order of quantifiers matters.",

  glimpse: (
    <p>
      The next lessons add identity and definite descriptions to the language, and then give a precise account of truth in
      a world, so that the counterexamples you have been describing in words become exact. Medieval Philosophy reads
      Aquinas&rsquo;s five ways closely, with the order of quantifiers in mind.
    </p>
  ),
};
