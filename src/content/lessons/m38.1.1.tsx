import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { EFGameViz } from "@/components/viz/EFGameViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m38.1.1",
  minutes: 90,
  links: {
    revisits: ["m20.2.2", "m20.3.3", "m20.3.4"],
    foreshadows: ["m38.1.2", "m38.1.3", "m38.2.1"],
  },

  puzzle: (
    <>
      <p>
        The rational numbers and the real numbers, both ordered by size, are not isomorphic: one is countable and the other
        is not. Yet no sentence of first-order logic about the order can tell them apart. When do two structures look the
        same to first-order logic, and how could you ever prove that they do?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose two finite linear orders and a number of rounds, and see who wins the comparison game.</p>
      <EFGameViz />
    </>
  ),

  theory: (
    <>
      <Definition title="elementary equivalence">
        <p>
          The <strong>theory</strong> Th(M) of an L-structure M is the set of L-sentences true in M. Two structures are{" "}
          <strong>elementarily equivalent</strong>, M ≡ N, if Th(M) = Th(N). Isomorphic structures are elementarily
          equivalent, but by the Löwenheim-Skolem theorems every infinite structure is elementarily equivalent to structures
          of every infinite cardinality, so the converse fails badly.
        </p>
      </Definition>

      <Theorem title="Ehrenfeucht-Fraïssé games">
        <p>
          In the k-round game on M and N, Spoiler picks an element of either structure and Duplicator replies in the other;
          Duplicator wins if the chosen tuples satisfy the same atomic formulas. For finite relational languages, Duplicator
          has a winning strategy for every k exactly when M ≡ N, and for a given k exactly when M and N agree on all sentences
          of quantifier depth at most k.
        </p>
      </Theorem>

      <Example title="dense orders">
        <p>
          (ℚ, &lt;) and (ℝ, &lt;) are both dense linear orders without endpoints. Cantor&rsquo;s back-and-forth argument shows
          every two countable such orders are isomorphic, and by the <strong>Łoś-Vaught test</strong>, a theory with no finite
          models that is categorical in some infinite cardinal is complete. So the theory of dense linear orders without
          endpoints is complete, and (ℚ, &lt;) ≡ (ℝ, &lt;).
        </p>
      </Example>

      <Remark title="what first-order logic cannot see">
        <p>
          (ℤ, &lt;) is elementarily equivalent to the order ℤ + ℤ of two copies of the integers placed one after another, and
          the natural numbers to ℕ + ℤ. By compactness, true arithmetic has non-standard models containing elements larger
          than every numeral. First-order logic sees local patterns, not global facts such as well-foundedness or
          cardinality.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does it mean for M and N to be elementarily equivalent?</p>,
      answer: { kind: "choice", options: ["They satisfy exactly the same first-order sentences", "They are isomorphic", "They have the same cardinality", "One is a substructure of the other"], correct: [0] },
    },
    {
      key: "iso",
      rung: "check",
      prompt: <p>How are isomorphism and elementary equivalence related?</p>,
      answer: { kind: "choice", options: ["Isomorphic structures are elementarily equivalent, but not conversely", "They are the same relation", "Elementary equivalence implies isomorphism, but not conversely", "Neither implies the other"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with k = 3, what is the least length L such that any two linear orders of length at least L agree on sentences of depth 3?</p>,
      answer: { kind: "numeric", value: 7, tolerance: 0 },
    },
    {
      key: "qr",
      rung: "apply",
      prompt: <p>Are (ℚ, &lt;) and (ℝ, &lt;) elementarily equivalent?</p>,
      answer: { kind: "choice", options: ["Yes: both model the complete theory of dense linear orders without endpoints", "No: they have different cardinalities", "No: ℝ is complete and ℚ is not, and first-order logic sees this", "Only if the continuum hypothesis holds"], correct: [0] },
    },
    {
      key: "lv",
      rung: "apply",
      prompt: <p>What does the Łoś-Vaught test require of a theory to conclude it is complete?</p>,
      answer: { kind: "choice", options: ["No finite models, and categoricity in some infinite cardinal", "Finitely many axioms", "A decidable set of axioms only", "A unique model up to isomorphism in every cardinality"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that (ℤ, &lt;) and (ℚ, &lt;) are not elementarily equivalent.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes a first-order sentence true in one and false in the other, such as density: for all x < y there is z with x < z < y.",
          "Checks it holds in ℚ, taking the midpoint.",
          "Checks it fails in ℤ, for x = 0 and y = 1.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use compactness to show there is a structure elementarily equivalent to (ℕ, &lt;) that is not isomorphic to it.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Adds a new constant c and the sentences saying c is greater than the n-th element, for each n.",
          "Notes every finite subset together with Th(ℕ, <) has a model, so the whole set has one.",
          "Notes c has infinitely many predecessors, so the model is not isomorphic to ℕ. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Elementary equivalence compares two structures from outside. When one structure sits inside another, a stronger
        relation asks that every formula, with parameters from the smaller one, means the same in both.
      </p>
      <p>Next, elementary extensions.</p>
    </>
  ),
};
