import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { DedekindCutViz } from "@/components/viz/DedekindCutViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.1.1",
  minutes: 90,
  links: {
    revisits: ["m2.1.3", "m0.1.4", "m0.1.5"],
    foreshadows: ["m6.1.2", "m6.2.4", "m12.1.3"],
  },

  puzzle: (
    <>
      <p>
        Calculus has so far rested on axioms: the real numbers form an ordered field in which every nonempty set bounded
        above has a least upper bound. But is there any such thing? Perhaps the axioms contradict one another, as some
        innocent-looking axiom systems do. In 1858, teaching calculus in Zurich, Richard Dedekind was troubled that he could
        not prove even that <M>{"\\sqrt{2} \\cdot \\sqrt{3} = \\sqrt{6}"}</M> from anything clearer. Starting only from the
        rational numbers, can we build the reals?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Every rational number is either below <M>{"\\sqrt{2}"}</M>, in the sense that it is negative or its square is less
        than 2, or above it. Allow larger denominators and watch the two sides close in.
      </p>
      <DedekindCutViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Dedekind cuts">
        <p>
          A <strong>cut</strong> is a subset <M>{"A \\subseteq \\mathbb{Q}"}</M> such that
        </p>
        <MD>{"A \\ne \\varnothing, \\quad A \\ne \\mathbb{Q}, \\quad q \\in A \\text{ and } p < q \\implies p \\in A, \\quad A \\text{ has no largest element.}"}</MD>
        <p>
          A real number is defined to be a cut. Each rational <M>{"r"}</M> gives the cut{" "}
          <M>{"\\{q \\in \\mathbb{Q} : q < r\\}"}</M>, and <M>{"\\sqrt{2}"}</M> is the cut{" "}
          <M>{"\\{q \\in \\mathbb{Q} : q < 0 \\text{ or } q^2 < 2\\}"}</M>, which is not of that form. Cuts are ordered by
          inclusion: <M>{"A \\le B"}</M> means <M>{"A \\subseteq B"}</M>. Addition is{" "}
          <M>{"A + B = \\{a + b : a \\in A,\\ b \\in B\\}"}</M>; multiplication is defined first for positive cuts and then
          extended by signs.
        </p>
      </Definition>

      <Theorem title="the least upper bound property">
        <p>
          Every nonempty set <M>{"S"}</M> of cuts that is bounded above has a least upper bound, namely the union{" "}
          <M>{"\\bigcup_{A \\in S} A"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"U"}</M> be the union and <M>{"B"}</M> an upper bound for <M>{"S"}</M>. Then <M>{"U"}</M> is nonempty, and{" "}
          <M>{"U \\subseteq B \\ne \\mathbb{Q}"}</M>. If <M>{"q \\in U"}</M> and <M>{"p < q"}</M>, then <M>{"q"}</M> is in some{" "}
          <M>{"A \\in S"}</M>, so <M>{"p \\in A \\subseteq U"}</M>. If <M>{"q \\in U"}</M>, then <M>{"q \\in A"}</M> for some{" "}
          <M>{"A"}</M>, which has an element larger than <M>{"q"}</M>, also in <M>{"U"}</M>; so <M>{"U"}</M> has no largest
          element. So <M>{"U"}</M> is a cut. It contains every <M>{"A \\in S"}</M>, so it is an upper bound; and any upper
          bound contains every <M>{"A"}</M>, hence contains <M>{"U"}</M>. So <M>{"U"}</M> is the least upper bound.
        </p>
      </Proof>

      <Example title="checking the field axioms">
        <p>
          With these definitions one can check, patiently, that the cuts form an ordered field: addition is associative and
          commutative, the cut of <M>{"0"}</M> is the identity, and so on. The negative of <M>{"A"}</M> is the set of{" "}
          <M>{"-b"}</M> for rationals <M>{"b"}</M> above <M>{"A"}</M> that are not the least such. The tedium is the point: every
          step uses only facts about <M>{"\\mathbb{Q}"}</M>, so the reals are as consistent as the rationals.
        </p>
      </Example>

      <Remark title="Cauchy's way and uniqueness">
        <p>
          Georg Cantor built the reals differently, as equivalence classes of Cauchy sequences of rationals: two sequences
          name the same real when their difference tends to <M>{"0"}</M>. The two constructions give the same structure.
          Indeed, any two complete ordered fields are isomorphic by a unique order-preserving map, so the axioms describe one
          structure, and a construction only shows that it exists. After this lesson we can forget cuts and use the axioms.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cuts",
      rung: "check",
      prompt: <p>Which of these subsets of <M>{"\\mathbb{Q}"}</M> are cuts? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["{q : q < 1/2}", "{q : q ≤ 1/2}", "{q : q < 0 or q² < 3}", "Q itself"],
        correct: [0, 2],
      },
    },
    {
      key: "sum",
      rung: "check",
      prompt: (
        <p>
          The cuts for <M>{"1/2"}</M> and <M>{"1/3"}</M> are added. Their sum is the cut of which rational? Give a fraction or
          a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 5 / 6, tolerance: 0.002 },
    },
    {
      key: "denom",
      rung: "apply",
      prompt: (
        <p>
          What is the smallest positive denominator <M>{"q"}</M> for which some fraction <M>{"p/q"}</M> lies strictly between{" "}
          <M>{"1.41"}</M> and <M>{"1.42"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 12 },
    },
    {
      key: "order",
      rung: "apply",
      prompt: <p>How are two cuts <M>{"A"}</M> and <M>{"B"}</M> compared?</p>,
      answer: {
        kind: "choice",
        options: [
          "By comparing their largest elements.",
          "A ≤ B means A ⊆ B.",
          "By comparing how many elements they have.",
          "They cannot be compared.",
        ],
        correct: [1],
      },
    },
    {
      key: "union",
      rung: "apply",
      prompt: (
        <p>
          For <M>{"n = 1, 2, 3, \\ldots"}</M> let <M>{"A_n"}</M> be the cut of the rational <M>{"1 - 1/n"}</M>. Their union is
          the cut of which rational?
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "nolargest",
      rung: "prove",
      prompt: (
        <p>
          Prove that <M>{"A = \\{q \\in \\mathbb{Q} : q < 0 \\text{ or } q^2 < 2\\}"}</M> has no largest element.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Handles q ≤ 0 or q < 1 easily, for example since 1 ∈ A is larger.",
          "For q > 0 with q² < 2, exhibits a rational h > 0 with (q + h)² < 2, such as h = min(1, (2 − q²)/(2q + 1)), and checks it.",
        ],
      },
    },
    {
      key: "lub",
      rung: "stretch",
      prompt: (
        <p>
          Prove that the union of a nonempty set of cuts that is bounded above is a cut, and that it is the least upper bound
          of the set.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Checks the four conditions for a cut: nonempty, not all of Q because it lies inside an upper bound, closed downwards, no largest element.",
          "Shows it is an upper bound because it contains each cut, and least because every upper bound contains each cut and so contains the union.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why one might want to construct the real numbers, what a Dedekind cut is, how cuts are ordered and added, and why the least upper bound property holds for them.",

  glimpse: (
    <p>
      The next lesson shows that the least upper bound property can be replaced by several other properties, each
      equivalent to it. Cauchy sequences, Cantor&rsquo;s alternative route to the reals, return as a test of convergence
      later in the chapter on sequences.
    </p>
  ),
};
