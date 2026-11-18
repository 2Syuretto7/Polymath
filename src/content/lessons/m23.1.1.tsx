import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { NormCheckViz } from "@/components/viz/NormCheckViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m23.1.1",
  minutes: 85,
  links: {
    revisits: ["m8.3.1", "m22.5.1", "m12.1.3"],
    foreshadows: ["m23.1.2", "m23.1.3", "m23.2.1"],
  },

  puzzle: (
    <>
      <p>
        How big is a function? Its greatest height, its average height, the energy under its square: each is a reasonable
        answer, and they disagree. What must any notion of &lsquo;size&rsquo; for vectors satisfy, and can you see from a
        single picture whether a proposed size qualifies?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Draw the set of vectors of size at most 1 for five candidates.</p>
      <NormCheckViz />
    </>
  ),

  theory: (
    <>
      <Definition title="normed and Banach spaces">
        <p>
          A <strong>norm</strong> on a real or complex vector space <M>X</M> is a map <M>{"\\|\\cdot\\| : X \\to [0, \\infty)"}</M>{" "}
          with <M>{"\\|x\\| = 0"}</M> only for <M>{"x = 0"}</M>, <M>{"\\|cx\\| = |c|\\,\\|x\\|"}</M>, and{" "}
          <M>{"\\|x + y\\| \\le \\|x\\| + \\|y\\|"}</M>. It gives a metric <M>{"d(x, y) = \\|x - y\\|"}</M>. A{" "}
          <strong>Banach space</strong> is a normed space complete in this metric.
        </p>
      </Definition>

      <Example title="the main examples">
        <p>
          <M>{"\\ell^p"}</M> and <M>{"L^p(\\mu)"}</M> for <M>{"1 \\le p \\le \\infty"}</M>; <M>{"C(K)"}</M>, continuous
          functions on a compact space with the sup norm; <M>{"c_0"}</M>, sequences tending to 0, with the sup norm. Not
          Banach: polynomials on <M>{"[0, 1]"}</M> with the sup norm, whose completion is <M>{"C[0, 1]"}</M> by Weierstrass, and{" "}
          <M>{"C[0, 1]"}</M> with the <M>{"L^1"}</M> norm.
        </p>
      </Example>

      <Theorem title="a test for completeness">
        <p>A normed space is complete exactly when every absolutely convergent series converges:</p>
        <MD>{"\\sum_n \\|x_n\\| < \\infty \\implies \\sum_n x_n \\text{ converges}."}</MD>
        <p>
          This is often the quickest route, and it is the idea behind the proof of Riesz-Fischer.
        </p>
      </Theorem>

      <Remark title="balls and equivalence">
        <p>
          The unit ball <M>{"\\{x : \\|x\\| \\le 1\\}"}</M> is convex, symmetric and absorbing, and conversely every such
          bounded set is the unit ball of a norm, its Minkowski functional. Two norms are <strong>equivalent</strong> if{" "}
          <M>{"c\\|x\\|_a \\le \\|x\\|_b \\le C\\|x\\|_a"}</M> for constants <M>{"c, C > 0"}</M>: they have the same
          convergent sequences and the same open sets.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "axioms",
      rung: "check",
      prompt: <p>Which property makes the unit ball of a norm convex?</p>,
      answer: { kind: "choice", options: ["The triangle inequality, with homogeneity", "Positivity alone", "Completeness", "Symmetry alone"], correct: [0] },
    },
    {
      key: "banach",
      rung: "check",
      prompt: <p>What is a Banach space?</p>,
      answer: { kind: "choice", options: ["A normed space that is complete", "A space with an inner product", "A finite-dimensional normed space", "A space of continuous functions"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>For the visualisation&rsquo;s last candidate, (√|x| + √|y|)², what is the size of (1, 1)?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "l1",
      rung: "apply",
      prompt: <p>What is ‖(3, −4)‖₁?</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "notb",
      rung: "apply",
      prompt: <p>Which of these is not a Banach space?</p>,
      answer: { kind: "choice", options: ["Polynomials on [0, 1] with the sup norm", "C[0, 1] with the sup norm", "ℓ²", "L¹[0, 1]"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove the reverse triangle inequality | ‖x‖ − ‖y‖ | ≤ ‖x − y‖, and deduce that a norm is continuous.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes x = (x − y) + y and applies the triangle inequality to get ‖x‖ − ‖y‖ ≤ ‖x − y‖.",
          "Swaps x and y for the other sign.",
          "Concludes the norm is 1-Lipschitz, hence continuous.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Outline why a normed space in which every absolutely convergent series converges is complete.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes a Cauchy sequence and extracts a subsequence with consecutive distances below 2⁻ᵏ.",
          "Writes the subsequence as partial sums of an absolutely convergent series, which converges, and notes a Cauchy sequence with a convergent subsequence converges.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Spaces are only half the story. Linear maps between normed spaces can be tame, never stretching vectors by more than a
        fixed factor, or wild.
      </p>
      <p>
        Next, bounded linear operators: why bounded means continuous, the operator norm, integral operators and shifts, and
        differentiation as the standard unbounded operator.
      </p>
    </>
  ),
};
