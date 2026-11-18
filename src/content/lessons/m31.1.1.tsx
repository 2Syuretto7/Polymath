import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { MetricBallsViz } from "@/components/viz/MetricBallsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m31.1.1",
  minutes: 90,
  links: {
    revisits: ["m16.2.3", "m26.5.1", "m26.6.1"],
    foreshadows: ["m31.1.2", "m31.2.2", "m31.3.1"],
  },

  puzzle: (
    <>
      <p>
        For a surface in ℝ³, Gauss measured lengths with the first fundamental form, inherited from space. But the
        Theorema Egregium showed curvature depends only on that form. Could we then start with an abstract manifold, with no
        surrounding space at all, and simply declare how long each tangent vector is?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Each ellipse shows the tangent vectors of length 1 at a point. Choose a metric and move the red path up and down.
      </p>
      <MetricBallsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Riemannian metric">
        <p>
          A <strong>Riemannian metric</strong> g on a smooth manifold M is a smooth symmetric 2-tensor field that is positive
          definite at each point: <M>{"g_p"}</M> is an inner product on <M>{"T_p M"}</M>. In coordinates,{" "}
          <M>{"g = g_{ij} \\, dx^i \\, dx^j"}</M>, with <M>{"(g_{ij})"}</M> a smooth positive definite symmetric matrix.
          The pair (M, g) is a <strong>Riemannian manifold</strong>.
        </p>
      </Definition>

      <Definition title="lengths, angles and volume">
        <p>
          The length of a piecewise smooth curve γ : [a, b] → M is{" "}
          <M>{"L(\\gamma) = \\int_a^b \\sqrt{g(\\gamma'(t), \\gamma'(t))} \\, dt"}</M>, independent of parametrisation. The
          angle between tangent vectors comes from <M>{"g_p"}</M>. On an oriented manifold the{" "}
          <strong>volume form</strong> is <M>{"\\sqrt{\\det(g_{ij})} \\, dx^1 \\wedge \\dots \\wedge dx^n"}</M> in positively
          oriented coordinates.
        </p>
      </Definition>

      <Example title="first examples">
        <p>
          Euclidean space with <M>{"\\sum (dx^i)^2"}</M>. Any submanifold of ℝᴺ with the induced metric, as for surfaces. The
          hyperbolic half-plane <M>{"\\{y > 0\\}"}</M> with <M>{"(dx^2 + dy^2)/y^2"}</M>: the horizontal path from (−1, y) to
          (1, y) has length 2/y, which blows up as y → 0, so the boundary line is infinitely far away.
        </p>
      </Example>

      <Theorem title="existence">
        <p>
          Every smooth manifold has a Riemannian metric.
        </p>
        <p>
          <strong>Proof.</strong> Take a cover by charts and a subordinate partition of unity <M>{"\\psi_\\alpha"}</M>. Let{" "}
          <M>{"g_\\alpha"}</M> be the Euclidean metric pulled back by the chart. Then{" "}
          <M>{"g = \\sum \\psi_\\alpha g_\\alpha"}</M> is smooth and symmetric, and positive definite because a sum of positive
          semidefinite forms, at least one of them positive definite, is positive definite.
        </p>
      </Theorem>

      <Definition title="isometries and distance">
        <p>
          A diffeomorphism F : (M, g) → (N, h) is an <strong>isometry</strong> if <M>{"F^* h = g"}</M>. On a connected
          manifold, the <strong>Riemannian distance</strong> d(p, q) is the infimum of lengths of curves from p to q. It is a
          metric in the sense of metric spaces, and it induces the manifold topology.
        </p>
      </Definition>

      <Remark title="local flatness fails">
        <p>
          At any one point, coordinates can be chosen so that <M>{"g_{ij} = \\delta_{ij}"}</M> there. But in general they
          cannot be chosen so on a whole neighbourhood: the obstruction is curvature, as Gauss found for surfaces.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is a Riemannian metric?</p>,
      answer: { kind: "choice", options: ["A smooth choice of inner product on each tangent space", "A distance function on M with no smoothness", "A nowhere vanishing vector field", "A volume form"], correct: [0] },
    },
    {
      key: "exist",
      rung: "check",
      prompt: <p>Which tool proves that every smooth manifold has a Riemannian metric?</p>,
      answer: { kind: "choice", options: ["Partitions of unity", "Stokes’ theorem", "The hairy ball theorem", "De Rham cohomology"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the hyperbolic half-plane and set y = 0.5. What is the length of the red path?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0.01 },
    },
    {
      key: "stretch1",
      rung: "apply",
      prompt: <p>For g = (1 + x²)² dx² + dy², what is the length of the segment from (−1, 0) to (1, 0)?</p>,
      answer: { kind: "numeric", value: 2.6667, tolerance: 0.01 },
    },
    {
      key: "vol",
      rung: "apply",
      prompt: <p>For the hyperbolic metric (dx² + dy²)/y², what is the area form?</p>,
      answer: { kind: "choice", options: ["dx ∧ dy / y²", "dx ∧ dy / y", "y² dx ∧ dy", "dx ∧ dy"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the length of a curve does not depend on its parametrisation.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes a reparametrisation γ ∘ φ with φ a diffeomorphism of intervals.",
          "Uses the chain rule: (γ ∘ φ)′(s) = φ′(s) γ′(φ(s)), so the speed is multiplied by |φ′(s)|.",
          "Applies the change of variables formula to show the integrals agree.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that the map (x, y) ↦ (ax + b, ay) with a &gt; 0 is an isometry of the hyperbolic half-plane.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes the pullback: dx ↦ a dx, dy ↦ a dy and y ↦ ay.",
          "Notes the factor a² cancels in (a² dx² + a² dy²)/(a² y²).",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        To speak of acceleration, of straight lines and of curvature, we must differentiate vector fields along curves. On
        a manifold there is no single way to compare vectors at different points, but a metric picks out a best one.
      </p>
      <p>Next, the Levi-Civita connection.</p>
    </>
  ),
};
