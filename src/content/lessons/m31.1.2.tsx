import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { PolarChristoffelViz } from "@/components/viz/PolarChristoffelViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m31.1.2",
  minutes: 90,
  links: {
    revisits: ["m31.1.1", "m16.4.4", "m26.4.3"],
    foreshadows: ["m31.1.3", "m31.2.1", "m31.3.1"],
  },

  puzzle: (
    <>
      <p>
        In ℝⁿ a vector field Y is differentiated in the direction X by differentiating its components. On a manifold the
        components depend on the chart, and the naive derivative is not even a vector. How can we differentiate one vector
        field along another, in a way that does not depend on coordinates?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        In polar coordinates on the flat plane, the field ∂θ turns as you go round a circle. Shrink Δθ and watch the
        difference quotient.
      </p>
      <PolarChristoffelViz />
    </>
  ),

  theory: (
    <>
      <Definition title="affine connection">
        <p>
          A <strong>connection</strong> on M is a map <M>{"(X, Y) \\mapsto \\nabla_X Y"}</M> on vector fields that is{" "}
          <M>{"C^\\infty"}</M>-linear in X, ℝ-linear in Y, and satisfies the Leibniz rule{" "}
          <M>{"\\nabla_X (fY) = (Xf) Y + f \\nabla_X Y"}</M>. In coordinates it is determined by the{" "}
          <strong>Christoffel symbols</strong>: <M>{"\\nabla_{\\partial_i} \\partial_j = \\Gamma^k_{ij} \\, \\partial_k"}</M>.
        </p>
      </Definition>

      <Theorem title="the fundamental theorem of Riemannian geometry">
        <p>
          On a Riemannian manifold there is exactly one connection that is <strong>compatible with g</strong>,{" "}
          <M>{"X g(Y, Z) = g(\\nabla_X Y, Z) + g(Y, \\nabla_X Z)"}</M>, and <strong>torsion-free</strong>,{" "}
          <M>{"\\nabla_X Y - \\nabla_Y X = [X, Y]"}</M>. It is the <strong>Levi-Civita connection</strong>.
        </p>
        <p>
          <strong>Proof idea.</strong> Write compatibility for the three cyclic orders of X, Y, Z, add two and subtract the
          third, and use torsion-freeness. This gives the <strong>Koszul formula</strong>, which expresses{" "}
          <M>{"g(\\nabla_X Y, Z)"}</M> in terms of g and brackets alone. So ∇ is unique, and defining it by the formula
          proves existence.
        </p>
      </Theorem>

      <Theorem title="Christoffel symbols">
        <p>
          In coordinates,{" "}
          <M>{"\\Gamma^k_{ij} = \\tfrac{1}{2} g^{kl} \\left( \\partial_i g_{jl} + \\partial_j g_{il} - \\partial_l g_{ij} \\right)"}</M>.
          They are symmetric in i and j, and vanish where all first derivatives of g vanish.
        </p>
      </Theorem>

      <Example title="polar coordinates">
        <p>
          For <M>{"g = dr^2 + r^2 d\\theta^2"}</M>, the only nonzero symbols are{" "}
          <M>{"\\Gamma^r_{\\theta\\theta} = -r"}</M> and <M>{"\\Gamma^\\theta_{r\\theta} = \\Gamma^\\theta_{\\theta r} = 1/r"}</M>.
          So <M>{"\\nabla_{\\partial_\\theta} \\partial_\\theta = -r \\, \\partial_r"}</M>: the coordinate field turns inward as
          we go round. The plane is flat, but polar coordinates are curved, and the Christoffel symbols record the curving of
          the coordinates, not of the space.
        </p>
      </Example>

      <Remark title="submanifolds">
        <p>
          For a submanifold of ℝᴺ with the induced metric, the Levi-Civita connection is the tangential part of the ordinary
          derivative: differentiate in ℝᴺ and project onto the tangent space. This is the covariant derivative met for
          surfaces, now defined with no surrounding space.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Which two conditions characterise the Levi-Civita connection?</p>,
      answer: { kind: "choice", options: ["Compatible with the metric and torsion-free", "Flat and complete", "Linear and symmetric in X and Y", "Zero Christoffel symbols in every chart"], correct: [0] },
    },
    {
      key: "flat",
      rung: "check",
      prompt: <p>For the Euclidean metric in Cartesian coordinates, what are the Christoffel symbols?</p>,
      answer: { kind: "choice", options: ["All zero", "All equal to 1", "Γᵏᵢⱼ = δᵢⱼ", "They are undefined"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set r = 2. What is Γʳθθ?</p>,
      answer: { kind: "numeric", value: -2 },
    },
    {
      key: "torsion",
      rung: "apply",
      prompt: <p>Torsion-freeness in coordinates says what about the Christoffel symbols?</p>,
      answer: { kind: "choice", options: ["Γᵏᵢⱼ = Γᵏⱼᵢ", "Γᵏᵢⱼ = 0", "Γᵏᵢⱼ = −Γᵏⱼᵢ", "Σ Γᵏᵢᵢ = 0"], correct: [0] },
    },
    {
      key: "rtheta",
      rung: "apply",
      prompt: <p>In polar coordinates, ∇ in the direction ∂r of ∂θ equals (1/r) ∂θ. At r = 4, what is the coefficient?</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Derive Γʳθθ = −r for the metric dr² + r² dθ² from the coordinate formula.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Reads off the metric components: 1 for dr², r² for dθ², and 0 for the cross term, so the inverse metric has rr-entry 1.",
          "Applies the formula: the two θ-derivatives of the cross term vanish, and the r-derivative of r² is 2r, giving Γʳθθ = ½ · (0 + 0 − 2r).",
          "Concludes Γʳθθ = −r.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that if ∇ and ∇′ are two connections, then ∇ − ∇′ is linear over smooth functions in both arguments, and so is a tensor.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes both are linear over smooth functions in X, so the difference is.",
          "Expands the difference applied to X and fY, and notes the (Xf)Y terms from the Leibniz rule cancel.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A connection tells us how to carry a vector along a curve without turning it. On the unit sphere, carry a vector round a
        triangle and it comes back rotated, by an angle equal to the area enclosed.
      </p>
      <p>Next, parallel transport.</p>
    </>
  ),
};
