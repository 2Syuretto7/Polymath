import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { TangentViz } from "@/components/viz/TangentViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m26.2.1",
  minutes: 90,
  links: {
    revisits: ["m26.1.2", "m5.2.4", "m5.2.2"],
    foreshadows: ["m26.2.2", "m26.2.3", "m26.4.1"],
  },

  puzzle: (
    <>
      <p>
        For a sphere in ℝ³, a tangent vector is an arrow touching the sphere. For an abstract manifold there is nowhere for
        the arrow to point. What, then, is a tangent vector? One answer: forget the arrow, and keep only what it does, which
        is to tell you how fast functions change in its direction.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a point on the circle, a speed for a curve through it, and a function. The tangent vector acts on the function
        by differentiating along the curve.
      </p>
      <TangentViz />
    </>
  ),

  theory: (
    <>
      <Definition title="derivations">
        <p>
          A <strong>tangent vector</strong> at p ∈ M is a linear map <M>{"v: C^\\infty(M) \\to \\mathbb{R}"}</M> satisfying the
          Leibniz rule <M>{"v(fg) = f(p)\\, v(g) + g(p)\\, v(f)"}</M>. They form a vector space <M>{"T_pM"}</M>, the{" "}
          <strong>tangent space</strong>. In ℝⁿ, the directional derivative in direction a,{" "}
          <M>{"f \\mapsto \\sum a_i \\, \\partial f / \\partial x_i (p)"}</M>, is a derivation, and every derivation is of this
          form.
        </p>
      </Definition>

      <Theorem title="dimension">
        <p>
          If M has dimension n, then <M>{"T_pM"}</M> has dimension n. In a chart with coordinates{" "}
          <M>{"(x^1, \\dots, x^n)"}</M>, the derivations <M>{"\\partial / \\partial x^i |_p"}</M>, which differentiate the
          coordinate representation of f, form a basis. A derivation kills constants, and depends only on f near p, by bump
          functions.
        </p>
        <p>
          <strong>Proof idea.</strong> Taylor&rsquo;s theorem with remainder writes{" "}
          <M>{"f(x) = f(p) + \\sum (x^i - p^i) g_i(x)"}</M> with <M>{"g_i(p) = \\partial f / \\partial x^i (p)"}</M>. Applying a
          derivation and the Leibniz rule gives <M>{"v(f) = \\sum v(x^i) \\, \\partial f / \\partial x^i (p)"}</M>.
        </p>
      </Theorem>

      <Definition title="velocity of curves">
        <p>
          A smooth curve <M>{"\\gamma: (-\\varepsilon, \\varepsilon) \\to M"}</M> with <M>{"\\gamma(0) = p"}</M> has velocity{" "}
          <M>{"\\gamma'(0) \\in T_pM"}</M>, defined by <M>{"\\gamma'(0) f = (f \\circ \\gamma)'(0)"}</M>. Every tangent vector is
          the velocity of some curve, and two curves have the same velocity exactly when they agree to first order in a chart.
          This is the second common definition, equivalent to the first.
        </p>
      </Definition>

      <Example title="change of coordinates">
        <p>
          If <M>{"(\\tilde{x}^j)"}</M> are other coordinates, the chain rule gives{" "}
          <M>{"\\partial / \\partial x^i = \\sum_j (\\partial \\tilde{x}^j / \\partial x^i) \\, \\partial / \\partial \\tilde{x}^j"}</M>.
          So the components of a vector transform by the Jacobian of the transition map: the rule physicists use to define a
          contravariant vector.
        </p>
      </Example>

      <Remark title="three definitions">
        <p>
          Tangent vectors can be defined as derivations, as equivalence classes of curves, or as lists of components in each
          chart transforming by the Jacobian. All three give the same space. Derivations are the most abstract but need no
          choices, which is why they are preferred.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "leib",
      rung: "check",
      prompt: <p>What rule must a tangent vector at p satisfy, besides linearity?</p>,
      answer: { kind: "choice", options: ["v(fg) = f(p)v(g) + g(p)v(f)", "v(fg) = v(f)v(g)", "v(f + g) = v(f) v(g)", "v(f) = f(p)"], correct: [0] },
    },
    {
      key: "dim",
      rung: "check",
      prompt: <p>What is the dimension of TₚM for an n-manifold M?</p>,
      answer: { kind: "choice", options: ["n", "n²", "1", "Infinite"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, take the point at 0°, speed 1 and f = x² + 2y. What is v(f)?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "const",
      rung: "apply",
      prompt: <p>What does a derivation do to a constant function c?</p>,
      answer: { kind: "choice", options: ["Gives 0, since v(1) = v(1 · 1) = 2v(1)", "Gives c", "Gives 1", "It is undefined"], correct: [0] },
    },
    {
      key: "speed",
      rung: "apply",
      prompt: <p>If a curve is traversed three times as fast, how does its velocity vector change?</p>,
      answer: { kind: "choice", options: ["It is multiplied by 3", "It is unchanged", "It is divided by 3", "It becomes zero"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a derivation v at p satisfies v(f) = 0 whenever f vanishes to second order, that is, f = gh with g(p) = h(p) = 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies the Leibniz rule: v(gh) = g(p)v(h) + h(p)v(g).",
          "Substitutes g(p) = h(p) = 0.",
          "Concludes v(f) = 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why might it be useful that a definition of tangent vector makes no use of charts?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes there is then nothing to check about independence of the chart.",
          "Notes it extends to settings without charts, such as algebraic geometry or infinite-dimensional spaces.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A smooth map between manifolds should induce a linear map between tangent spaces, the best linear approximation, as
        the derivative does in ℝⁿ. With derivations this is almost forced.
      </p>
      <p>Next, the differential of a smooth map, and the chain rule on manifolds.</p>
    </>
  ),
};
