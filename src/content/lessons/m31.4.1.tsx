import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { JacobiFieldViz } from "@/components/viz/JacobiFieldViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m31.4.1",
  minutes: 90,
  links: {
    revisits: ["m31.3.2", "m31.2.1", "m26.4.2"],
    foreshadows: ["m31.4.2", "m31.5.1", "m31.5.3"],
  },

  puzzle: (
    <>
      <p>
        Two travellers leave the North Pole along meridians a degree apart. At first they drift apart; at the equator they
        are farthest apart; at the South Pole they meet again. On a flat plane they would separate for ever. How does
        curvature control the distance between nearby geodesics?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the curvature and follow the separation between two nearby geodesics leaving the same point.</p>
      <JacobiFieldViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Jacobi fields">
        <p>
          Let γ be a geodesic. A vector field J along γ is a <strong>Jacobi field</strong> if it satisfies the{" "}
          <strong>Jacobi equation</strong> <M>{"D_t^2 J + R(J, \\dot\\gamma)\\dot\\gamma = 0"}</M>, where{" "}
          <M>{"D_t"}</M> is covariant differentiation along γ.
        </p>
      </Definition>

      <Theorem title="variations through geodesics">
        <p>
          If <M>{"\\Gamma(s, t)"}</M> is a smooth family of geodesics <M>{"t \\mapsto \\Gamma(s, t)"}</M> with{" "}
          <M>{"\\Gamma(0, t) = \\gamma(t)"}</M>, then the variation field <M>{"J(t) = \\partial_s \\Gamma(0, t)"}</M> is a
          Jacobi field. Conversely every Jacobi field arises this way. <strong>Proof idea:</strong> differentiate{" "}
          <M>{"D_t \\partial_t \\Gamma = 0"}</M> in s, swap <M>{"D_s"}</M> and <M>{"D_t"}</M> at the cost of a curvature
          term, and use that the connection is symmetric.
        </p>
      </Theorem>

      <Theorem title="existence and uniqueness">
        <p>
          The Jacobi equation is a linear second-order ODE, so J is determined by J(0) and <M>{"D_tJ(0)"}</M>. The Jacobi
          fields along a geodesic in an n-manifold form a 2n-dimensional vector space. Those vanishing at t = 0 are{" "}
          <M>{"J(t) = d(\\exp_p)_{t v}(t w)"}</M> with <M>{"v = \\dot\\gamma(0)"}</M> and <M>{"w = D_tJ(0)"}</M>.
        </p>
      </Theorem>

      <Example title="constant curvature">
        <p>
          If K is constant and E(t) is a parallel unit field perpendicular to γ, then{" "}
          <M>{"J(t) = \\operatorname{sn}_K(t) E(t)"}</M> is a Jacobi field, where{" "}
          <M>{"\\operatorname{sn}_K"}</M> solves f″ + Kf = 0 with f(0) = 0, f′(0) = 1: sin t on the unit sphere, t in the
          plane, sinh t in the hyperbolic plane.
        </p>
      </Example>

      <Remark title="tangential fields">
        <p>
          The fields <M>{"(a + bt)\\dot\\gamma(t)"}</M> are always Jacobi fields; they come from reparametrising γ. Every
          Jacobi field splits into such a tangential part and a part normal to γ, and only the normal part carries geometric
          information.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "eq",
      rung: "check",
      prompt: <p>Which equation does a Jacobi field satisfy?</p>,
      answer: { kind: "choice", options: ["D²J + R(J, γ′)γ′ = 0", "DJ = 0", "J″ = J", "R(J, J) = 0"], correct: [0] },
    },
    {
      key: "dim",
      rung: "check",
      prompt: <p>What is the dimension of the space of Jacobi fields along a geodesic in a 3-manifold?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set K = 0.25. At what t does |J(t)| first return to zero? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 6.28, tolerance: 0.02 },
    },
    {
      key: "hyp",
      rung: "apply",
      prompt: <p>In the hyperbolic plane, what is |J(2)| for the normal Jacobi field with J(0) = 0 and |J′(0)| = 1? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 3.63, tolerance: 0.02 },
    },
    {
      key: "tan",
      rung: "apply",
      prompt: <p>Which of these is always a Jacobi field along a geodesic γ?</p>,
      answer: { kind: "choice", options: ["t·γ′(t)", "t²·γ′(t)", "sin t·γ′(t)", "Any parallel field"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>On the unit sphere, check that J(t) = sin t·E(t) is a Jacobi field, where E is a parallel unit field perpendicular to γ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes D²J = −sin t·E, since E is parallel.",
          "Uses constant curvature 1: R(J, γ′)γ′ = ⟨γ′, γ′⟩J − ⟨J, γ′⟩γ′ = J.",
          "Adds the two to get 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that if J is a Jacobi field, then ⟨J, γ′⟩ is a linear function of t.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Differentiates twice, using that γ′ is parallel along a geodesic.",
          "Uses the Jacobi equation and Rm(J, γ′, γ′, γ′) = 0 by antisymmetry to get second derivative 0.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        On the sphere the Jacobi field returns to zero at the antipode. Points where this happens are where the exponential
        map stops being a local diffeomorphism, and where geodesics stop minimising.
      </p>
      <p>Next, conjugate points.</p>
    </>
  ),
};
