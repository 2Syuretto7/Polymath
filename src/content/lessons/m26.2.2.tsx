import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { DifferentialViz } from "@/components/viz/DifferentialViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m26.2.2",
  minutes: 90,
  links: {
    revisits: ["m26.2.1", "m12.4.1", "m5.4.1"],
    foreshadows: ["m26.2.3", "m26.3.1", "m26.4.1"],
  },

  puzzle: (
    <>
      <p>
        Zoom in far enough on a smooth map and it looks linear: a tiny square goes to a tiny parallelogram. In ℝⁿ that linear
        map is the Jacobian matrix. On a manifold there are no coordinates to make a matrix from, yet the same zooming
        happens. Which linear map is it, and between which spaces?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Pick a map and a point p. The small square near p is sent to a curved patch; the parallelogram is its linear
        approximation, the image of the square under dF at p.
      </p>
      <DifferentialViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the differential">
        <p>
          Let <M>{"F: M \\to N"}</M> be smooth and p ∈ M. The <strong>differential</strong> of F at p is the map{" "}
          <M>{"dF_p: T_pM \\to T_{F(p)}N"}</M> defined on derivations by <M>{"(dF_p v)(g) = v(g \\circ F)"}</M> for every smooth
          function g on N. It is linear, and <M>{"dF_p v"}</M> is again a derivation, by the Leibniz rule for v.
        </p>
      </Definition>

      <Theorem title="the chain rule">
        <p>
          If <M>{"F: M \\to N"}</M> and <M>{"G: N \\to P"}</M> are smooth, then <M>{"d(G \\circ F)_p = dG_{F(p)} \\circ dF_p"}</M>,
          and <M>{"d(\\mathrm{id})_p"}</M> is the identity. So a diffeomorphism has invertible differential at every point, and
          the dimensions of M and N must agree.
        </p>
        <p>
          <strong>Proof.</strong> For a function h on P,{" "}
          <M>{"(d(G \\circ F)_p v)(h) = v(h \\circ G \\circ F) = (dF_p v)(h \\circ G) = (dG_{F(p)}(dF_p v))(h)"}</M>.
        </p>
      </Theorem>

      <Example title="in coordinates">
        <p>
          In charts with coordinates <M>{"x^i"}</M> near p and <M>{"y^j"}</M> near F(p), write <M>{"F^j = y^j \\circ F"}</M>.
          Then <M>{"dF_p(\\partial / \\partial x^i) = \\sum_j (\\partial F^j / \\partial x^i)(p) \\, \\partial / \\partial y^j"}</M>.
          So in the coordinate bases dF is the Jacobian matrix: the abstract definition recovers the familiar one, and the
          chain rule becomes multiplication of Jacobians.
        </p>
      </Example>

      <Example title="velocities">
        <p>
          If γ is a curve with γ(0) = p and velocity v, then <M>{"dF_p v"}</M> is the velocity of F ∘ γ at 0. This gives a
          practical recipe: to find where dF sends v, push a curve with velocity v through F and differentiate.
        </p>
      </Example>

      <Remark title="what the differential detects">
        <p>
          The rank of <M>{"dF_p"}</M> controls what F looks like near p. Full rank and equal dimensions gives a local
          diffeomorphism, by the inverse function theorem. Injective dF gives an immersion; surjective dF gives a submersion. The
          determinant of the Jacobian is the factor by which F scales small areas, with its sign telling whether orientation is
          kept.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "where",
      rung: "check",
      prompt: <p>Between which spaces does the differential dFₚ of F: M → N act?</p>,
      answer: { kind: "choice", options: ["From TₚM to the tangent space of N at F(p)", "From M to N", "From TₚM to TₚM", "From the functions on M to the functions on N"], correct: [0] },
    },
    {
      key: "chain",
      rung: "check",
      prompt: <p>What does the chain rule say about d(G ∘ F) at p?</p>,
      answer: { kind: "choice", options: ["It equals dG at F(p) composed with dF at p", "It equals dF composed with dG", "It equals dG + dF", "It is always the identity"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose squaring at p = (1, 1). What is the determinant of the Jacobian?</p>,
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "fold",
      rung: "apply",
      prompt: <p>For the fold (x, y) ↦ (x², y), at which points is dF not invertible?</p>,
      answer: { kind: "choice", options: ["Along the line x = 0", "Only at the origin", "Along the line y = 0", "Nowhere"], correct: [0] },
    },
    {
      key: "curve",
      rung: "apply",
      prompt: <p>Let F(x, y) = (x + y, xy) and let γ(t) = (1 + t, 2). What is the velocity of F ∘ γ at t = 0?</p>,
      answer: { kind: "choice", options: ["(1, 2)", "(1, 1)", "(2, 1)", "(3, 2)"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if F: M → N is a diffeomorphism, then dFₚ is an isomorphism for every p.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies the chain rule to F⁻¹ ∘ F = id and F ∘ F⁻¹ = id.",
          "Uses that the differential of the identity is the identity.",
          "Concludes dFₚ has a two-sided inverse, the differential of F⁻¹ at F(p).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The differential of squaring z ↦ z² at z is multiplication by 2z, a rotation and scaling. What does that say about angles under complex-differentiable maps?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes rotation and scaling preserve angles between vectors.",
          "Concludes such maps are conformal where the derivative is non-zero.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Each point has its own tangent space, and the differential moves vectors between them one point at a time. To speak of
        vector fields, or of how tangent spaces vary, we need to assemble them into a single manifold.
      </p>
      <p>Next, the tangent bundle: all tangent spaces glued together.</p>
    </>
  ),
};
