import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { QERealViz } from "@/components/viz/QERealViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m38.2.1",
  minutes: 90,
  links: {
    revisits: ["m38.1.3", "m38.1.1", "m20.3.2"],
    foreshadows: ["m38.2.2", "m38.2.3", "m38.5.1"],
  },

  puzzle: (
    <>
      <p>
        &lsquo;There is a real x with ax² + bx + c = 0&rsquo; quantifies over all real numbers. Yet you can decide it by a
        finite check on a, b and c, using the discriminant. Is this a lucky accident of quadratics, or can every statement
        about the real numbers in the language of ordered fields be stripped of its quantifiers?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change a, b and c, and compare the existential statement with its quantifier-free equivalent.</p>
      <QERealViz />
    </>
  ),

  theory: (
    <>
      <Definition title="quantifier elimination">
        <p>
          A theory T has <strong>quantifier elimination</strong> if every formula <M>{"\\varphi(\\bar{x})"}</M> is equivalent
          modulo T to a quantifier-free formula <M>{"\\psi(\\bar{x})"}</M>. By induction, it suffices to eliminate a single
          existential quantifier from formulas <M>{"\\exists y\\, \\theta(\\bar{x}, y)"}</M> with θ a conjunction of atomic and
          negated atomic formulas.
        </p>
      </Definition>

      <Theorem title="three classical cases">
        <p>
          The theory of dense linear orders without endpoints has quantifier elimination. So does the theory ACF of
          algebraically closed fields, in the language of rings (Tarski, and geometrically Chevalley). So does the theory RCF
          of real closed fields in the language of ordered rings, by Tarski&rsquo;s decision method, published in 1948 to 1951.
        </p>
      </Theorem>

      <Example title="consequences">
        <p>
          Quantifier elimination makes definable sets explicit: in ℂ they are the constructible sets, finite Boolean
          combinations of zero sets of polynomials, so the image of a polynomial map is constructible. In ℝ they are the
          semialgebraic sets. Since the quantifier-free sentences of ACF with fixed characteristic are settled by the prime
          field, ACF₀ and each ACFₚ are complete, and RCF is complete and decidable.
        </p>
      </Example>

      <Remark title="when it fails">
        <p>
          The ordered group (ℤ, +, &lt;) does not have quantifier elimination: &lsquo;x is even&rsquo; needs ∃y (y + y = x).
          Presburger showed in 1929 that adding predicates for divisibility by each n restores it, so Presburger arithmetic is
          decidable. With multiplication added, Gödel&rsquo;s theorems rule out any such result for ℕ.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does it mean for T to have quantifier elimination?</p>,
      answer: { kind: "choice", options: ["Every formula is equivalent modulo T to a quantifier-free formula", "T has no quantifiers in its axioms", "T has a finite model", "Every sentence of T is true"], correct: [0] },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Which theory has quantifier elimination in the language of rings?</p>,
      answer: { kind: "choice", options: ["Algebraically closed fields", "The integers", "All fields", "The rationals"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set a = 1, b = 2 and c = 3. What is b² − 4ac?</p>,
      answer: { kind: "numeric", value: -8, tolerance: 0 },
    },
    {
      key: "def2",
      rung: "apply",
      prompt: <p>What are the definable subsets of ℂⁿ in the field language?</p>,
      answer: { kind: "choice", options: ["The constructible sets: finite Boolean combinations of zero sets of polynomials", "All subsets", "Only finite sets", "Only open sets"], correct: [0] },
    },
    {
      key: "even",
      rung: "apply",
      prompt: <p>Why does (ℤ, +, &lt;) fail to have quantifier elimination?</p>,
      answer: { kind: "choice", options: ["Being even needs a quantifier, ∃y (y + y = x), and no quantifier-free formula defines it", "ℤ is infinite", "ℤ has no order", "Addition is not definable"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that ∃x (ax² + bx + c = 0) is equivalent over ℝ to a quantifier-free formula in a, b and c.</p>,
      answer: {
        kind: "written",
        rubric: [
          "If a ≠ 0, uses the quadratic formula: a real root exists exactly when b² − 4ac ≥ 0.",
          "If a = 0, notes a root exists exactly when b ≠ 0 or c = 0.",
          "Combines the cases into one quantifier-free formula.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use quantifier elimination for ACF to show that the image of a polynomial map ℂⁿ → ℂᵐ is constructible.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the image as the set of y with ∃x (f(x) = y), a definable set.",
          "Applies quantifier elimination to get a quantifier-free formula in y.",
          "Notes such formulas define finite Boolean combinations of zero sets. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        In the real field, every definable subset of the line is a finite union of points and intervals. Making that single
        property an axiom gives a far-reaching theory of tame geometry.
      </p>
      <p>Next, o-minimality, a first look.</p>
    </>
  ),
};
