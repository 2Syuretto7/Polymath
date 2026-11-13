import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { RationalBasisViz } from "@/components/viz/RationalBasisViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m15.3.1",
  minutes: 80,
  links: {
    revisits: ["m15.1.1", "m6.1.3", "m15.1.3"],
    foreshadows: ["m15.3.4", "m22.1.1", "m23.4.1"],
  },

  puzzle: (
    <>
      <p>
        In a metric space, a point lies in the closure of a set exactly when some sequence from the set converges to it. In a
        general topological space this can fail, and sequences are not enough to detect closures. What property of a space
        makes sequences do their job, and how many open sets does a space really need?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a point and an open interval round it, and find an interval with rational endpoints that fits between.</p>
      <RationalBasisViz />
    </>
  ),

  theory: (
    <>
      <Definition title="first and second countable">
        <p>
          A space is <strong>first countable</strong> if each point <M>{"x"}</M> has a countable collection of neighbourhoods{" "}
          <M>{"B_1, B_2, \\ldots"}</M> such that every neighbourhood of <M>{"x"}</M> contains some <M>{"B_n"}</M>. It is{" "}
          <strong>second countable</strong> if its whole topology has a countable basis.
        </p>
      </Definition>

      <Example title="metric spaces and ℝ">
        <p>
          Every metric space is first countable: use the balls <M>{"B(x, 1/n)"}</M>. The real line is second countable, with
          the intervals <M>{"(p, q)"}</M> for rational <M>{"p < q"}</M> as a basis, and so is <M>{"\\mathbb{R}^n"}</M>. A
          discrete uncountable space is first countable but not second countable, since each singleton must be a union of
          basic sets.
        </p>
      </Example>

      <Theorem title="sequences suffice in first countable spaces">
        <p>
          If <M>{"X"}</M> is first countable and <M>{"A \\subseteq X"}</M>, then <M>{"x \\in \\overline{A}"}</M> if and only
          if some sequence in <M>{"A"}</M> converges to <M>{"x"}</M>. Consequently a map out of <M>{"X"}</M> is continuous if
          and only if it preserves limits of sequences.
        </p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"x \\in \\overline{A}"}</M>, replace the countable neighbourhoods by <M>{"B_1 \\cap \\cdots \\cap B_n"}</M>{" "}
          so that they shrink, and choose <M>{"a_n \\in A"}</M> in the <M>{"n"}</M>th. Any neighbourhood of <M>{"x"}</M>{" "}
          contains some <M>{"B_N"}</M>, hence all <M>{"a_n"}</M> with <M>{"n \\geq N"}</M>. Conversely, if <M>{"a_n \\to x"}</M>,
          every neighbourhood of <M>{"x"}</M> meets <M>{"A"}</M>.
        </p>
      </Proof>

      <Theorem title="consequences of second countability">
        <p>
          A second countable space is <strong>separable</strong>, having a countable dense subset, and{" "}
          <strong>Lindelöf</strong>, every open cover having a countable subcover. For metric spaces the three properties
          are equivalent.
        </p>
      </Theorem>

      <Remark title="where sequences fail">
        <p>
          In an uncountable product of copies of <M>{"[0, 1]"}</M>, or in the cocountable topology on ℝ, closures are not
          reached by sequences. Nets, indexed by directed sets rather than by ℕ, repair this in every space. Manifolds are
          usually required to be second countable, which rules out pathological examples such as the long line.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "first",
      rung: "check",
      prompt: <p>What does it mean for a space to be first countable?</p>,
      answer: {
        kind: "choice",
        options: [
          "Each point has a countable collection of neighbourhoods such that every neighbourhood contains one of them.",
          "The space is countable.",
          "The topology has a countable basis.",
          "Every open cover has a countable subcover.",
        ],
        correct: [0],
      },
    },
    {
      key: "metric",
      rung: "check",
      prompt: <p>Which neighbourhoods show a metric space is first countable?</p>,
      answer: { kind: "choice", options: ["The balls B(x, 1/n)", "All open sets", "The singletons", "The closed sets"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, if U is made narrower around x, what tends to happen to the denominator of the basic interval found?</p>,
      answer: {
        kind: "choice",
        options: ["It grows, since rationals with small denominators are spread out", "It shrinks", "It stays the same", "No interval exists"],
        correct: [0],
      },
    },
    {
      key: "discrete",
      rung: "apply",
      prompt: <p>Why is an uncountable discrete space not second countable?</p>,
      answer: {
        kind: "choice",
        options: [
          "Each singleton is open, so a basis must contain every singleton, and there are uncountably many.",
          "It is not first countable.",
          "It is not Hausdorff.",
          "It has no open sets.",
        ],
        correct: [0],
      },
    },
    {
      key: "sep",
      rung: "apply",
      prompt: <p>Which countable set is dense in <M>{"\\mathbb{R}^2"}</M>?</p>,
      answer: { kind: "choice", options: ["ℚ × ℚ", "ℤ × ℤ", "ℚ × {0}", "{(1/n, 0) : n ≥ 1}"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a second countable space is separable.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes a countable basis and picks one point from each non-empty basic set.",
          "Notes the chosen set is countable.",
          "Shows it is dense: every non-empty open set contains a non-empty basic set, hence a chosen point.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that a separable metric space is second countable.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes a countable dense set D and considers the balls B(d, 1/n) for d in D and n ≥ 1, a countable collection.",
          "Shows they form a basis: for x in an open U with B(x, 2/n) ⊆ U, picks d in D within 1/n of x, so x ∈ B(d, 1/n) ⊆ U.",
          "Concludes the space is second countable. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend first and second countability, why metric spaces are first countable and ℝ is second countable, why sequences detect closures in first countable spaces, and how second countability gives separability.",

  glimpse: (
    <p>
      Next, the separation axioms ask how well open sets tell points apart. Combined with second countability, the strongest
      of them gives the Urysohn metrisation theorem, which says exactly when a topology comes from a metric.
    </p>
  ),
};
