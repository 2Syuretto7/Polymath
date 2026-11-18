import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { FlowCurveViz } from "@/components/viz/FlowCurveViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m26.4.2",
  minutes: 90,
  links: {
    revisits: ["m26.4.1", "m12.2.3", "m15.2.2"],
    foreshadows: ["m26.4.3", "m26.4.4", "m26.7.3"],
  },

  puzzle: (
    <>
      <p>
        Drop a leaf on a river and it follows the current. The current is a vector field; the leaf&rsquo;s path is an integral
        curve. On the plane, the field x² ∂/∂x looks harmless, yet a leaf placed at x = 1 is swept off to infinity by time 1.
        When do the curves last for ever?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a field, a starting point p and a time t. The curve follows the arrows from p for time t, and its end point is
        θₜ(p).
      </p>
      <FlowCurveViz />
    </>
  ),

  theory: (
    <>
      <Definition title="integral curves">
        <p>
          An <strong>integral curve</strong> of a vector field X is a smooth curve γ with{" "}
          <M>{"\\gamma'(t) = X_{\\gamma(t)}"}</M> for all t. In a chart this is a system of ordinary differential equations{" "}
          <M>{"\\dot{x}^i = X^i(x)"}</M>.
        </p>
      </Definition>

      <Theorem title="existence and uniqueness">
        <p>
          For every p there is a unique maximal integral curve <M>{"\\gamma_p"}</M> with <M>{"\\gamma_p(0) = p"}</M>, defined on an
          open interval containing 0. This is the Picard–Lindelöf theorem in charts, proved with the contraction mapping theorem, with uniqueness used to patch charts
          together.
        </p>
      </Theorem>

      <Definition title="the flow">
        <p>
          The <strong>flow</strong> of X is <M>{"\\theta(t, p) = \\theta_t(p) = \\gamma_p(t)"}</M>, defined on an open set of{" "}
          <M>{"\\mathbb{R} \\times M"}</M>. It is smooth, <M>{"\\theta_0 = \\mathrm{id}"}</M>, and{" "}
          <M>{"\\theta_t \\circ \\theta_s = \\theta_{t+s}"}</M> where defined. If every integral curve is defined for all t, X is{" "}
          <strong>complete</strong>, and <M>{"t \\mapsto \\theta_t"}</M> is a homomorphism from ℝ to the diffeomorphisms of M: a
          one-parameter group.
        </p>
      </Definition>

      <Example title="three flows">
        <p>
          The rotation field <M>{"-y \\, \\partial_x + x \\, \\partial_y"}</M> has flow rotation by angle t. The saddle{" "}
          <M>{"x \\, \\partial_x - y \\, \\partial_y"}</M> has flow <M>{"(x, y) \\mapsto (x e^t, y e^{-t})"}</M>. Both are complete.
          The field <M>{"x^2 \\, \\partial_x"}</M> has integral curves <M>{"x(t) = x_0 / (1 - t x_0)"}</M>, which for{" "}
          <M>{"x_0 > 0"}</M> blow up as t → <M>{"1/x_0"}</M>: not complete.
        </p>
      </Example>

      <Theorem title="compact support">
        <p>
          A vector field with compact support is complete. In particular, every vector field on a compact manifold is complete.
          The reason: on the support there is a uniform ε such that every curve exists for time ε, and outside the support the
          curves are constant, so curves can always be continued a further ε.
        </p>
      </Theorem>

      <Remark title="flows as symmetries">
        <p>
          Flows turn infinitesimal data into motion. A complete field generates a one-parameter group of diffeomorphisms, and
          conversely a smooth one-parameter group <M>{"\\theta_t"}</M> is the flow of the field{" "}
          <M>{"X_p = \\frac{d}{dt} \\theta_t(p) |_{t=0}"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is γ an integral curve of X?</p>,
      answer: { kind: "choice", options: ["When γ′(t) = X at γ(t), for all t", "When γ lies in a level set of X", "When γ is a closed loop", "When γ is a geodesic"], correct: [0] },
    },
    {
      key: "group",
      rung: "check",
      prompt: <p>What law does the flow satisfy?</p>,
      answer: { kind: "choice", options: ["θₜ ∘ θₛ = θₜ₊ₛ", "θₜ ∘ θₛ = θₜₛ", "θₜ = θ₋ₜ", "θₜ + θₛ = θₜ₊ₛ"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with the blow-up field and p = (1, 1), at what time does the integral curve escape to infinity?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "saddle",
      rung: "apply",
      prompt: <p>For the saddle flow, where is θₜ(1, 1) when t = ln 2?</p>,
      answer: { kind: "choice", options: ["(2, 1/2)", "(1/2, 2)", "(2, 2)", "(ln 2, −ln 2)"], correct: [0] },
    },
    {
      key: "cpt",
      rung: "apply",
      prompt: <p>Which vector field must be complete?</p>,
      answer: { kind: "choice", options: ["Any vector field on the torus", "x² ∂/∂x on ℝ", "Any vector field on the open interval (0, 1)", "Any vector field on ℝ²"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that θₜ(θₛ(p)) = θₜ₊ₛ(p), wherever the right side is defined.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Fixes s and considers the curve α(t) = θₜ₊ₛ(p) = γₚ(t + s).",
          "Checks α is an integral curve of X, with α(0) = θₛ(p).",
          "Uses uniqueness of integral curves to conclude α(t) = θₜ(θₛ(p)).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Restrict the rotation field to the punctured plane ℝ² minus the origin, and the field ∂/∂x to the same set. Which is complete?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes rotation keeps every point on its circle, which avoids the origin, so it stays complete.",
          "Notes ∂/∂x moves (−1, 0) into the missing origin at t = 1, so it is not complete.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Two flows may or may not commute. Flow along X, then Y, then back along X, then back along Y: the failure to return to
        the start is measured, to second order, by a new vector field.
      </p>
      <p>Next, the Lie bracket of vector fields.</p>
    </>
  ),
};
