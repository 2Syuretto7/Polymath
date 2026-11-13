import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { JordanGridViz } from "@/components/viz/JordanGridViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m12.5.1",
  minutes: 90,
  links: {
    revisits: ["m5.5.1", "m6.7.4", "m12.1.4"],
    foreshadows: ["m12.5.2", "m22.1.4", "m22.3.2"],
  },

  puzzle: (
    <>
      <p>
        On a line, a Riemann integral chops an interval into pieces. In the plane, regions are discs, triangles and blobs,
        not rectangles. If we chop a disc with a square grid, some squares straddle the edge. Do they spoil the integral?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Refine the grid and watch the gap between the upper and lower sums shrink as the boundary cells get thinner.</p>
      <JordanGridViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the integral over a box">
        <p>
          Let <M>{"Q = [a_1, b_1] \\times \\dots \\times [a_n, b_n]"}</M> and <M>{"f : Q \\to \\mathbb{R}"}</M> bounded. A
          partition of <M>{"Q"}</M> into sub-boxes <M>{"R"}</M> gives
        </p>
        <MD>{"L(f, P) = \\sum_R \\inf_R f \\cdot \\mathrm{vol}(R), \\qquad U(f, P) = \\sum_R \\sup_R f \\cdot \\mathrm{vol}(R)."}</MD>
        <p>
          <M>{"f"}</M> is <strong>integrable</strong> if <M>{"\\sup_P L = \\inf_P U"}</M>, and this common value is{" "}
          <M>{"\\int_Q f"}</M>. Equivalently, for every <M>{"\\varepsilon > 0"}</M> there is a partition with{" "}
          <M>{"U - L < \\varepsilon"}</M>.
        </p>
      </Definition>

      <Theorem title="continuous functions are integrable">
        <p>Every continuous function on a box is integrable.</p>
      </Theorem>

      <Proof>
        <p>
          A box is compact, so <M>{"f"}</M> is uniformly continuous. Given <M>{"\\varepsilon"}</M>, choose{" "}
          <M>{"\\delta"}</M> so that points within <M>{"\\delta"}</M> have values within{" "}
          <M>{"\\varepsilon / \\mathrm{vol}(Q)"}</M>. On a partition into boxes of diameter less than <M>{"\\delta"}</M>,{" "}
          <M>{"\\sup_R f - \\inf_R f \\le \\varepsilon/\\mathrm{vol}(Q)"}</M> on every box, so{" "}
          <M>{"U - L \\le \\varepsilon"}</M>.
        </p>
      </Proof>

      <Definition title="content zero and other regions">
        <p>
          A set <M>{"Z"}</M> has <strong>content zero</strong> if for each <M>{"\\varepsilon > 0"}</M> it is covered by
          finitely many boxes of total volume less than <M>{"\\varepsilon"}</M>. For a bounded region <M>{"S"}</M> whose
          boundary has content zero, define <M>{"\\int_S f = \\int_Q f \\chi_S"}</M>, with <M>{"f\\chi_S"}</M> equal to{" "}
          <M>{"f"}</M> on <M>{"S"}</M> and 0 elsewhere. A bounded function that is continuous except on a set of content zero
          is integrable, since the bad boxes contribute little.
        </p>
      </Definition>

      <Example title="the quarter disc">
        <p>
          The quarter circle is the graph of the continuous function <M>{"\\sqrt{1 - x^2}"}</M>, and the graph of a continuous
          function on <M>{"[0, 1]"}</M> has content zero: on a grid of mesh <M>{"1/n"}</M> it meets about <M>{"2n"}</M>{" "}
          squares of area <M>{"1/n^2"}</M>. So the quarter disc has a well-defined area, <M>{"\\pi/4"}</M>.
        </p>
      </Example>

      <Remark title="Fubini and beyond">
        <p>
          Fubini&rsquo;s theorem computes integrals over boxes as iterated one-variable integrals, for continuous functions. The
          Lebesgue criterion characterises Riemann integrability: bounded, and continuous except on a set of measure zero.
          Measure theory then replaces boxes with arbitrary measurable sets.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sum",
      rung: "check",
      prompt: <p>Split [0, 1]² into four equal squares. What is the upper sum of f(x, y) = x + y?</p>,
      answer: { kind: "numeric", value: 1.5, tolerance: 0.001 },
    },
    {
      key: "lower",
      rung: "check",
      prompt: <p>With the same four squares, what is the lower sum of f(x, y) = x + y?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "exact",
      rung: "apply",
      prompt: <p>What is ∫ over [0, 1]² of (x + y)?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0.001 },
    },
    {
      key: "content",
      rung: "apply",
      prompt: <p>Which set does not have content zero in the plane?</p>,
      answer: {
        kind: "choice",
        options: ["A line segment", "A circle", "The set of points with both coordinates rational in [0, 1]²", "A finite set of points"],
        correct: [2],
      },
    },
    {
      key: "dirichlet",
      rung: "apply",
      prompt: <p>f = 1 at points of [0, 1]² with both coordinates rational, and 0 elsewhere. What are its upper and lower integrals?</p>,
      answer: { kind: "choice", options: ["1 and 0", "0 and 0", "1 and 1", "½ and ½"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the graph of a continuous function g : [0, 1] → ℝ has content zero in the plane.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses uniform continuity to get δ with |g(x) − g(y)| < ε when |x − y| < δ.",
          "Covers the graph over each subinterval of width less than δ by a box of height 2ε.",
          "Sums the areas to at most 2ε times 1, which is arbitrarily small.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can a region in the plane have a boundary so wiggly that it has no Riemann area? What might such a boundary look like?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Suggests a boundary of positive area, such as one built from a fat Cantor set or the rational points.",
          "Notes that then upper and lower sums disagree.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how the Riemann integral is defined over a box in ℝⁿ, why continuous functions are integrable, what content zero means, and why a disc has a well-defined area.",

  glimpse: (
    <p>
      The next lesson proves the change of variables formula, which turns integrals over discs into integrals over
      rectangles. Lebesgue measure later allows far more general sets and functions.
    </p>
  ),
};
