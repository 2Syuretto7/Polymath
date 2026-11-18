import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ManifoldOrbitViz } from "@/components/viz/ManifoldOrbitViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m26.7.4",
  minutes: 90,
  links: {
    revisits: ["m26.7.3", "m7.4.2", "m26.4.2"],
    foreshadows: ["m32.1.1", "m31.1.1", "m32.2.2"],
  },

  puzzle: (
    <>
      <p>
        The rotation group SO(3) moves the sphere S² onto itself, and any point can be carried to any other. The stabiliser
        of the north pole is the circle of rotations about the vertical axis. Is S² then, in some precise sense, SO(3) divided
        by SO(2)? And when is the space of orbits of an action itself a manifold?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose an action. Each shows how points move, which points they fix, and what the space of orbits looks like.
      </p>
      <ManifoldOrbitViz />
    </>
  ),

  theory: (
    <>
      <Definition title="smooth actions">
        <p>
          A <strong>smooth left action</strong> of a Lie group G on a manifold M is a smooth map{" "}
          <M>{"G \\times M \\to M"}</M>, written <M>{"(g, p) \\mapsto g \\cdot p"}</M>, with <M>{"e \\cdot p = p"}</M> and{" "}
          <M>{"g \\cdot (h \\cdot p) = (gh) \\cdot p"}</M>. The <strong>orbit</strong> of p is <M>{"G \\cdot p"}</M>; the{" "}
          <strong>stabiliser</strong> <M>{"G_p = \\{g : g \\cdot p = p\\}"}</M> is a closed subgroup. The action is{" "}
          <strong>free</strong> if every stabiliser is trivial, and <strong>transitive</strong> if there is one orbit.
        </p>
      </Definition>

      <Example title="flows are actions of ℝ">
        <p>
          A complete vector field X has a flow <M>{"\\theta_t"}</M> with <M>{"\\theta_{s+t} = \\theta_s \\circ \\theta_t"}</M>, which
          is exactly a smooth action of ℝ. Conversely, an action of ℝ gives a vector field by differentiating at t = 0. Orbits
          are the integral curves.
        </p>
      </Example>

      <Theorem title="homogeneous spaces">
        <p>
          If H is a closed subgroup of G, the coset space G/H has a unique smooth structure making{" "}
          <M>{"G \\to G/H"}</M> a submersion, and G acts smoothly on it. If G acts transitively on M, then for any p the map{" "}
          <M>{"gG_p \\mapsto g \\cdot p"}</M> is a diffeomorphism <M>{"G/G_p \\cong M"}</M>. For instance{" "}
          <M>{"SO(3)/SO(2) \\cong S^2"}</M> and <M>{"SO(n+1)/SO(n) \\cong S^n"}</M>.
        </p>
        <p>
          This is the smooth form of the orbit-stabiliser theorem. Counting dimensions,{" "}
          <M>{"\\dim G \\cdot p = \\dim G - \\dim G_p"}</M>; for the sphere, 3 − 1 = 2.
        </p>
      </Theorem>

      <Theorem title="the quotient manifold theorem">
        <p>
          If a Lie group G acts smoothly, freely and properly on M, then M/G is a manifold of dimension{" "}
          <M>{"\\dim M - \\dim G"}</M>, and <M>{"M \\to M/G"}</M> is a submersion. <strong>Proper</strong> means that{" "}
          <M>{"(g, p) \\mapsto (g \\cdot p, p)"}</M> is a proper map; every action of a compact group is proper.
        </p>
      </Theorem>

      <Example title="projective space">
        <p>
          The group <M>{"\\{\\pm 1\\}"}</M> acts freely on Sⁿ by <M>{"x \\mapsto -x"}</M>, and it is compact, so{" "}
          <M>{"\\mathbb{RP}^n = S^n/\\{\\pm 1\\}"}</M> is an n-manifold. The circle acts freely on{" "}
          <M>{"S^3 \\subset \\mathbb{C}^2"}</M> by <M>{"\\lambda \\cdot (z, w) = (\\lambda z, \\lambda w)"}</M>, and the quotient is
          the 2-sphere <M>{"\\mathbb{CP}^1"}</M>: the Hopf fibration.
        </p>
      </Example>

      <Remark title="when quotients fail">
        <p>
          The flow of slope √2 on the torus is free, but not proper. Its orbits are dense, and the orbit space has only two
          open sets. Rotations of the plane are proper but not free, and the quotient [0, ∞) has a boundary point at the
          fixed origin.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is the stabiliser of a point p under an action of G?</p>,
      answer: { kind: "choice", options: ["The subgroup of g with g · p = p", "The orbit of p", "The set of points fixed by every g", "The quotient G/p"], correct: [0] },
    },
    {
      key: "flow",
      rung: "check",
      prompt: <p>A smooth action of ℝ on M is the same thing as what?</p>,
      answer: { kind: "choice", options: ["The flow of a complete vector field", "A Riemannian metric", "A differential form", "A covering map"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the flow of slope 1/2 on the torus. What is the smallest positive time T after which a point returns to where it started?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "dim",
      rung: "apply",
      prompt: <p>SO(4) acts transitively on S³ with stabiliser SO(3). Using dimensions 6 and 3, what is the dimension of the orbit?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "quot",
      rung: "apply",
      prompt: <p>ℤ acts on ℝ by n · x = x + n. What is the quotient manifold?</p>,
      answer: { kind: "choice", options: ["A circle", "A line", "A point", "Not a manifold"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that every stabiliser of a smooth action is a closed subgroup of G.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows the stabiliser contains e and is closed under products and inverses, using the action axioms.",
          "Writes the stabiliser as the preimage of the point p under the continuous map g ↦ g · p.",
          "Concludes it is closed, since points of a manifold are closed.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why SO(n + 1) acts transitively on Sⁿ, and identify the stabiliser of the north pole.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows any unit vector can be extended to an oriented orthonormal basis, giving a rotation taking the north pole to it.",
          "Notes rotations fixing the north pole act as rotations of the orthogonal ℝⁿ, a copy of SO(n).",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Manifolds have now been given tangent spaces, flows, forms and symmetries, but no way to measure lengths or angles.
        Choose an inner product on each tangent space, varying smoothly, and geometry begins.
      </p>
      <p>Next, the course on Riemannian geometry starts with Riemannian metrics.</p>
    </>
  ),
};
