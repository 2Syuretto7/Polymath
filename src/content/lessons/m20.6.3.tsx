import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["countable (ℵ₀)", "size of ℝ", "larger than ℝ"];
const ITEMS: SortItem[] = [
  { text: "The integers ℤ.", cat: "countable (ℵ₀)", why: "List them as 0, 1, −1, 2, −2, …" },
  { text: "The rational numbers ℚ.", cat: "countable (ℵ₀)", why: "Cantor’s zigzag through the grid of fractions." },
  { text: "The algebraic numbers.", cat: "countable (ℵ₀)", why: "Countably many polynomials, each with finitely many roots." },
  { text: "The real numbers ℝ.", cat: "size of ℝ", why: "The continuum itself; uncountable by the diagonal argument." },
  { text: "All subsets of ℕ.", cat: "size of ℝ", why: "A subset is an infinite 0-1 sequence, and these match the reals." },
  { text: "The points of the plane ℝ × ℝ.", cat: "size of ℝ", why: "Interleave decimal digits to match the plane with the line. Cantor wrote ‘I see it, but I don’t believe it.’" },
  { text: "All subsets of ℝ.", cat: "larger than ℝ", why: "Cantor’s theorem: a power set is always strictly larger." },
  { text: "All functions from ℝ to ℝ.", cat: "larger than ℝ", why: "As many as the subsets of ℝ, so more than ℝ." },
];

export const lesson: LessonContent = {
  id: "m20.6.3",
  minutes: 85,
  links: {
    revisits: ["m20.6.2", "m1.8.4", "m1.8.3"],
    foreshadows: ["m20.6.4", "m20.6.5", "m20.6.6"],
  },

  puzzle: (
    <>
      <p>
        The plane seems to have far more points than a line: a whole extra dimension of them. Yet Cantor found a bijection
        between the two. Which infinite sets really are bigger than others, and is there a largest?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each set by its size.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which size is this set?" />
    </>
  ),

  theory: (
    <>
      <Definition title="cardinality">
        <p>
          Sets A and B have the same <strong>cardinality</strong>, |A| = |B|, if there is a bijection between them, and{" "}
          <M>{"|A| \\le |B|"}</M> if there is an injection from A to B. By Schröder-Bernstein, injections both ways give a
          bijection. Assuming choice, every set is in bijection with some ordinal, and its <strong>cardinal</strong> is the
          least such ordinal.
        </p>
      </Definition>

      <Theorem title="Cantor's theorem">
        <p>
          For every set A, <M>{"|A| < |\\mathcal P(A)|"}</M>. If f : A → 𝒫(A), the set D = {"{"}a ∈ A : a ∉ f(a){"}"} is not
          in the range of f, since D differs from each f(a) at a. So there is no largest cardinal.
        </p>
      </Theorem>

      <Definition title="the alephs">
        <p>
          The infinite cardinals are well-ordered: <M>{"\\aleph_0 = |\\omega|"}</M>, then <M>{"\\aleph_1"}</M>, the least
          uncountable cardinal, then <M>{"\\aleph_2"}</M>, and so on through all the ordinals. The cardinality of the reals is{" "}
          <M>{"\\mathfrak c = 2^{\\aleph_0}"}</M>, the size of 𝒫(ℕ).
        </p>
      </Definition>

      <Example title="cardinal arithmetic">
        <p>
          <M>{"\\kappa + \\lambda"}</M> and <M>{"\\kappa \\cdot \\lambda"}</M> are the sizes of a disjoint union and a product.
          For infinite cardinals, assuming choice, both equal the larger of the two: <M>{"\\aleph_0 + \\aleph_0 = \\aleph_0 \\cdot \\aleph_0 = \\aleph_0"}</M>{" "}
          and <M>{"\\mathfrak c \\cdot \\mathfrak c = \\mathfrak c"}</M>. Exponentiation is where things become hard:{" "}
          <M>{"2^{\\aleph_0}"}</M> is at least <M>{"\\aleph_1"}</M>, but ZFC does not say which aleph it is.
        </p>
      </Example>

      <Remark title="ordinals and cardinals">
        <p>
          ω, ω + 1, ω · 2 and ω² are different ordinals but the same cardinal, ℵ₀. Cardinal arithmetic is commutative, unlike
          ordinal arithmetic, because it forgets order. The notations differ, too: ω for the order, ℵ₀ for the size.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "same",
      rung: "check",
      prompt: <p>When do two sets have the same cardinality?</p>,
      answer: { kind: "choice", options: ["When there is a bijection between them", "When they have the same elements", "When one is a subset of the other", "When both are infinite"], correct: [0] },
    },
    {
      key: "cantor",
      rung: "check",
      prompt: <p>What does Cantor&rsquo;s theorem show?</p>,
      answer: { kind: "choice", options: ["Every set is strictly smaller than its power set", "All infinite sets are the same size", "ℝ is countable", "ℵ₁ is the size of ℝ"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many of the sets have the size of the continuum?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "omega2",
      rung: "apply",
      prompt: <p>What is the cardinality of the ordinal ω · 2?</p>,
      answer: { kind: "choice", options: ["ℵ₀", "ℵ₁", "2", "the size of ℝ"], correct: [0] },
    },
    {
      key: "prod",
      rung: "apply",
      prompt: <p>What is ℵ₀ · ℵ₀?</p>,
      answer: { kind: "choice", options: ["ℵ₀", "ℵ₁", "the size of ℝ", "It is undefined"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that no function from a set A to its power set is onto.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Defines D as the set of a in A with a not in f(a).",
          "Supposes D = f(d) for some d and asks whether d ∈ D.",
          "Derives that d ∈ D if and only if d ∉ D, so D is not in the range.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Galileo noticed the squares can be matched with all numbers and concluded infinite sizes cannot be compared. Was Cantor right to disagree?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States that Cantor took bijection as the criterion of equal size and gave up ‘the whole is larger than the part’ for infinite sets.",
          "Weighs whether this is a discovery or a choice of definition.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Ordinals and cardinals stretch through the transfinite, and to prove things about all of them we need induction and
        recursion that do not stop at ω. They pass through limit stages, where there is no immediate predecessor to step
        from.
      </p>
      <p>
        Next, transfinite induction and recursion: how to prove a property of every ordinal, how the cumulative hierarchy and
        ordinal arithmetic are defined by recursion, and why well-foundedness is all that induction really needs.
      </p>
    </>
  ),
};
