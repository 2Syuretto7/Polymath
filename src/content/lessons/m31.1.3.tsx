import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { SphereTransportViz } from "@/components/viz/SphereTransportViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m31.1.3",
  minutes: 90,
  links: {
    revisits: ["m31.1.2", "m16.4.4", "m16.5.1"],
    foreshadows: ["m31.2.1", "m31.3.1", "m31.4.1"],
  },

  puzzle: (
    <>
      <p>
        Walk from the North Pole down to the equator holding a spear pointing straight ahead. Walk a quarter of the way
        round the equator, never turning the spear, then walk back up to the pole. The spear now points at right angles to
        where it started, though you never turned it. What does &lsquo;never turned&rsquo; mean on a curved surface?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move the vector along the three legs of the triangle. Change the angle at the pole and compare.</p>
      <SphereTransportViz />
    </>
  ),

  theory: (
    <>
      <Definition title="covariant derivative along a curve">
        <p>
          For a curve γ and a vector field V along it, the connection gives a derivative <M>{"D_t V"}</M>, also a vector
          field along γ. In coordinates,{" "}
          <M>{"D_t V = \\left( \\dot V^k + \\Gamma^k_{ij} \\dot\\gamma^i V^j \\right) \\partial_k"}</M>. When V extends to a
          vector field Y, <M>{"D_t V = \\nabla_{\\dot\\gamma} Y"}</M>.
        </p>
      </Definition>

      <Definition title="parallel transport">
        <p>
          V is <strong>parallel</strong> along γ if <M>{"D_t V = 0"}</M>. This is a linear first-order ODE in the components,
          so for each initial vector <M>{"v \\in T_{\\gamma(a)} M"}</M> there is exactly one parallel field with V(a) = v. The
          map <M>{"P : T_{\\gamma(a)} M \\to T_{\\gamma(b)} M"}</M>, v ↦ V(b), is <strong>parallel transport</strong>.
        </p>
      </Definition>

      <Theorem title="transport is an isometry">
        <p>
          For the Levi-Civita connection, parallel transport is a linear isometry between tangent spaces.
        </p>
        <p>
          <strong>Proof.</strong> If V and W are parallel, compatibility with g gives{" "}
          <M>{"\\tfrac{d}{dt} g(V, W) = g(D_t V, W) + g(V, D_t W) = 0"}</M>. So inner products, and hence lengths and angles,
          are preserved.
        </p>
      </Theorem>

      <Example title="holonomy on the sphere">
        <p>
          On the unit sphere, transport round the boundary of a geodesic triangle rotates vectors by its angle excess, which
          by Gauss–Bonnet is its area. Round a circle of latitude λ, the rotation is the area of the cap above it,{" "}
          <M>{"2\\pi(1 - \\sin\\lambda)"}</M>, which is <M>{"-2\\pi \\sin\\lambda"}</M> modulo a full turn. This is the turning of
          Foucault&rsquo;s pendulum each sidereal day: at the latitude of Delhi, about 28.6° N, roughly 172°.
        </p>
      </Example>

      <Remark title="recovering the connection">
        <p>
          Transport determines the connection: <M>{"\\nabla_X Y(p) = \\frac{d}{dt}\\big|_{t=0} P_{t \\to 0} \\, Y(\\gamma(t))"}</M>,
          where γ has velocity X(p) and <M>{"P_{t \\to 0}"}</M> carries vectors back to p. The dependence of transport on the
          path, called <strong>holonomy</strong>, is the first sign of curvature.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is a vector field V along a curve γ parallel?</p>,
      answer: { kind: "choice", options: ["When its covariant derivative along γ is zero", "When its components are constant in every chart", "When it is tangent to γ", "When it has constant length"], correct: [0] },
    },
    {
      key: "iso",
      rung: "check",
      prompt: <p>Which property of the Levi-Civita connection makes parallel transport an isometry?</p>,
      answer: { kind: "choice", options: ["Compatibility with the metric", "Torsion-freeness", "Completeness", "Flatness"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set the angle at the pole to 90° and carry the vector all the way round. By how many degrees has it turned?</p>,
      answer: { kind: "numeric", value: 90 },
    },
    {
      key: "area",
      rung: "apply",
      prompt: <p>On the unit sphere, a geodesic triangle has angles 90°, 90° and 60°. What is its area, in radians? Give 3 decimal places.</p>,
      answer: { kind: "numeric", value: 1.047, tolerance: 0.002 },
    },
    {
      key: "plane",
      rung: "apply",
      prompt: <p>What is the holonomy of parallel transport round any closed loop in the Euclidean plane?</p>,
      answer: { kind: "choice", options: ["The identity: vectors return unchanged", "A rotation by the enclosed area", "A reflection", "It depends on the loop’s length"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that parallel transport for the Levi-Civita connection preserves the length of vectors.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes a parallel field V along γ.",
          "Differentiates g(V, V) along γ, using compatibility, to get 2g(DₜV, V).",
          "Concludes the derivative is 0 since DₜV = 0, so the length is constant.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why the velocity of a great circle, travelled at constant speed, is parallel along it.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the acceleration of a great circle in ℝ³ points towards the centre, normal to the sphere.",
          "Uses that the covariant derivative is the tangential part of the ambient derivative, which is zero here.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A curve whose own velocity is parallel never turns: it is as straight as the manifold allows. Following such curves
        from a point in every direction gives a map from the tangent space onto the manifold.
      </p>
      <p>Next, the exponential map.</p>
    </>
  ),
};
