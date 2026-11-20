import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ChartTransitionViz } from "@/components/viz/ChartTransitionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m28.4.1",
  minutes: 90,
  links: {
    revisits: ["m28.3.3", "m15.1.1", "m13.6.2"],
    foreshadows: ["m28.4.2", "m28.4.3", "m28.4.4"],
  },

  puzzle: (
    <>
      <p>
        √z cannot be defined continuously on the whole plane minus 0, and an elliptic function really lives on a torus,
        not on ℂ. Riemann&rsquo;s idea was to change the domain rather than the function. But what exactly is a space on
        which complex analysis makes sense?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move a point of the Riemann sphere, and see it in both charts.</p>
      <ChartTransitionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Riemann surface">
        <p>
          A <strong>Riemann surface</strong> is a connected Hausdorff space X with an atlas: an open cover by sets{" "}
          <M>{"U_i"}</M> with homeomorphisms <M>{"\\varphi_i"}</M> onto open subsets of ℂ, such that every{" "}
          <strong>transition map</strong> <M>{"\\varphi_j \\circ \\varphi_i^{-1}"}</M> is holomorphic where defined. A
          function on X is holomorphic if it is holomorphic in every chart, and a map between Riemann surfaces is
          holomorphic if it is holomorphic in charts on both sides.
        </p>
      </Definition>

      <Example title="first examples">
        <ul>
          <li>Any connected open subset of ℂ, with one chart.</li>
          <li>
            The Riemann sphere <M>{"\\hat{\\mathbb{C}} = \\mathbb{C} \\cup \\{\\infty\\}"}</M>, with charts z on ℂ and w = 1/z
            on <M>{"\\hat{\\mathbb{C}} \\setminus \\{0\\}"}</M>. On the overlap w = 1/z is holomorphic.
          </li>
          <li>A torus ℂ/Λ, with charts given by small discs in ℂ that meet no two points of the same orbit.</li>
          <li>A smooth plane curve P(z, w) = 0, using z or w as a local coordinate by the implicit function theorem.</li>
        </ul>
      </Example>

      <Theorem title="local normal form">
        <p>
          A non-constant holomorphic map f: X → Y is, in suitable charts near any point, the map{" "}
          <M>{"z \\mapsto z^k"}</M> for a unique k ≥ 1. Hence f is open, and if X is compact then f is surjective onto Y,
          which must then be compact too.
        </p>
      </Theorem>

      <Theorem title="compact surfaces">
        <p>
          On a compact Riemann surface every holomorphic function is constant: |f| has a maximum, so f is constant near it
          by the maximum modulus principle, and constant everywhere by the identity theorem. Meromorphic functions are the
          same as holomorphic maps to the sphere; on the sphere itself they are exactly the rational functions.
        </p>
      </Theorem>

      <Remark title="one dimension, two views">
        <p>
          A Riemann surface is a complex manifold of dimension 1 and a real surface of dimension 2. Holomorphic transition
          maps preserve orientation, so every Riemann surface is orientable: the Möbius band and the Klein bottle cannot be
          given a complex structure.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "trans",
      rung: "check",
      prompt: <p>What must the transition maps of a Riemann surface be?</p>,
      answer: { kind: "choice", options: ["Holomorphic", "Continuous only", "Linear", "Rational"], correct: [0] },
    },
    {
      key: "compact",
      rung: "check",
      prompt: <p>What are the holomorphic functions on a compact Riemann surface?</p>,
      answer: { kind: "choice", options: ["Only the constants", "All polynomials", "Exactly the rational functions", "There are none"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set z = 0.5 + 0.5i. What is |w|, to three decimal places?</p>,
      answer: { kind: "numeric", value: 1.414, tolerance: 0.001 },
    },
    {
      key: "charts",
      rung: "apply",
      prompt: <p>What is the least number of charts needed to cover the Riemann sphere?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "missing",
      rung: "apply",
      prompt: <p>Which point of the Riemann sphere does the chart w = 1/z miss?</p>,
      answer: { kind: "choice", options: ["The point z = 0", "The point ∞", "The unit circle", "No point"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that every holomorphic function on a compact Riemann surface is constant.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses compactness to find a point where |f| is largest.",
          "Applies the maximum modulus principle in a chart to show f is constant near that point.",
          "Uses the identity theorem and connectedness to conclude f is constant everywhere.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Could the map z ↦ z̄ serve as a transition map of a Riemann surface? Why does this matter?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that z ↦ z̄ is not holomorphic, since it fails the Cauchy-Riemann equations.",
          "Explains that holomorphic transitions are needed for holomorphy of functions to be independent of the chart.",
          "Mentions orientation, or another sensible consequence. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Riemann surfaces first appeared not as spaces with atlases but as the natural homes of multivalued functions, found
        by continuing a power series in every possible direction.
      </p>
      <p>Next, analytic continuation.</p>
    </>
  ),
};
