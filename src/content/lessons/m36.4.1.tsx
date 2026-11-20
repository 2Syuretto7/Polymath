import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { InvariantDensityViz } from "@/components/viz/InvariantDensityViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m36.4.1",
  minutes: 90,
  links: {
    revisits: ["m36.3.3", "m22.1.2", "m36.1.4"],
    foreshadows: ["m36.4.2", "m36.4.3", "m36.5.1"],
  },

  puzzle: (
    <>
      <p>
        Iterate the logistic map with r = 4 from almost any starting point and the orbit never settles. Yet if you record
        where it has been, a definite shape emerges: it spends far more time near 0 and 1 than near ½. Where does that
        shape come from, and why is it the same for almost every starting point?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a map and an orbit length, and compare the orbit&rsquo;s histogram with the invariant density.</p>
      <InvariantDensityViz />
    </>
  ),

  theory: (
    <>
      <Definition title="invariant measures">
        <p>
          A probability measure μ is <strong>invariant</strong> under a measurable map T if{" "}
          <M>{"\\mu(T^{-1}A) = \\mu(A)"}</M> for every measurable A. Equivalently,{" "}
          <M>{"\\int f \\circ T\\, d\\mu = \\int f\\, d\\mu"}</M> for every bounded measurable f. The quadruple (X, 𝓑, μ, T) is
          then a <strong>measure-preserving system</strong>.
        </p>
      </Definition>

      <Theorem title="Krylov and Bogolyubov (1937)">
        <p>
          Every continuous map of a compact metric space has an invariant Borel probability measure. Take the averages of
          point masses along an orbit, <M>{"\\frac1n \\sum_{k < n} \\delta_{T^k x}"}</M>; any weak-* limit point is invariant,
          and one exists by compactness.
        </p>
      </Theorem>

      <Definition title="ergodicity">
        <p>
          An invariant μ is <strong>ergodic</strong> if every invariant set has measure 0 or 1: the system cannot be split
          into two separate parts of positive measure. The ergodic measures are exactly the extreme points of the convex set
          of invariant measures.
        </p>
      </Definition>

      <Example title="examples">
        <p>
          Lebesgue measure is invariant for the doubling map and for every rotation. For the logistic map with r = 4 the
          invariant density is <M>{"1/(\\pi\\sqrt{x(1-x)})"}</M>, carried over from Lebesgue measure for the tent map by the
          conjugacy <M>{"x = \\sin^2(\\pi y/2)"}</M>. Gauss found the measure <M>{"dx/((1 + x)\\log 2)"}</M>, invariant for the
          continued fraction map <M>{"x \\mapsto 1/x \\bmod 1"}</M>.
        </p>
      </Example>

      <Remark title="many invariant measures">
        <p>
          A map usually has many invariant measures: the point mass at a fixed point, the average over a periodic orbit,
          and more. The doubling map has uncountably many ergodic ones. The physically relevant one is the measure seen by
          orbits of Lebesgue-almost every starting point, as in the visualisation.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is μ invariant under T?</p>,
      answer: { kind: "choice", options: ["When μ(T⁻¹A) = μ(A) for every measurable A", "When μ(TA) = 0 for every A", "When T is a bijection", "When μ is Lebesgue measure"], correct: [0] },
    },
    {
      key: "kb",
      rung: "check",
      prompt: <p>What does the Krylov–Bogolyubov theorem guarantee?</p>,
      answer: { kind: "choice", options: ["A continuous map of a compact metric space has an invariant probability measure", "Every invariant measure is ergodic", "Every map preserves Lebesgue measure", "Invariant measures are unique"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, for the logistic map, what mass does the invariant measure give to [0, 0.1], to three decimal places?</p>,
      answer: { kind: "numeric", value: 0.205, tolerance: 0.002 },
    },
    {
      key: "gauss",
      rung: "apply",
      prompt: <p>What is the Gauss measure of [0, ½], that is log₂(1.5), to three decimal places?</p>,
      answer: { kind: "numeric", value: 0.585, tolerance: 0.002 },
    },
    {
      key: "pre",
      rung: "apply",
      prompt: <p>For the doubling map, what is the Lebesgue measure of the preimage of [0, ¼]?</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that Lebesgue measure on [0, 1) is invariant under the doubling map, at least for intervals.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes the preimage of [a, b) as [a/2, b/2) together with [(a + 1)/2, (b + 1)/2).",
          "Notes that each has length (b − a)/2, so the preimage has measure b − a.",
          "Concludes the measures agree on intervals, which determine the measure.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that the doubling map has an invariant measure other than Lebesgue measure.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that 0 is a fixed point, so the point mass at 0 is invariant, or uses a periodic orbit such as {⅓, ⅔}.",
          "Checks invariance: T⁻¹A contains the fixed point exactly when A does.",
          "Notes this differs from Lebesgue measure. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The histogram matched the invariant density for one starting point. The ergodic theorems explain why time averages
        along almost every orbit equal averages over the space.
      </p>
      <p>Next, Birkhoff and von Neumann ergodic theorems.</p>
    </>
  ),
};
