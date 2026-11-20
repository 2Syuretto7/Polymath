import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ExpGeodesicViz } from "@/components/viz/ExpGeodesicViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m31.2.1",
  minutes: 90,
  links: {
    revisits: ["m31.1.3", "m26.7.3", "m16.4.3"],
    foreshadows: ["m31.2.2", "m31.2.3", "m31.4.2"],
  },

  puzzle: (
    <>
      <p>
        Stand at a point of a curved surface and pick a direction and a distance. Walk straight, never turning, for that
        distance. Every tangent vector thus names a point. Does this give a chart around you, and how far out does it stay
        one-to-one?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A tangent vector at the North Pole of the unit sphere, and the point its geodesic reaches. Lengthen the vector past
        π.
      </p>
      <ExpGeodesicViz />
    </>
  ),

  theory: (
    <>
      <Definition title="geodesics">
        <p>
          A curve γ is a <strong>geodesic</strong> if its velocity is parallel along it: <M>{"D_t \\dot\\gamma = 0"}</M>. In
          coordinates, <M>{"\\ddot\\gamma^k + \\Gamma^k_{ij} \\dot\\gamma^i \\dot\\gamma^j = 0"}</M>. Geodesics have constant
          speed, and by ODE theory there is a unique maximal geodesic <M>{"\\gamma_v"}</M> with <M>{"\\gamma_v(0) = p"}</M>{" "}
          and <M>{"\\dot\\gamma_v(0) = v"}</M>.
        </p>
      </Definition>

      <Theorem title="rescaling">
        <p>
          <M>{"\\gamma_{cv}(t) = \\gamma_v(ct)"}</M> wherever either side is defined. Both are geodesics with the same initial
          point and velocity, since the geodesic equation is quadratic in the velocity.
        </p>
      </Theorem>

      <Definition title="the exponential map">
        <p>
          <M>{"\\exp_p(v) = \\gamma_v(1)"}</M>, defined on an open star-shaped neighbourhood of 0 in <M>{"T_p M"}</M>. By
          rescaling, <M>{"\\exp_p(tv) = \\gamma_v(t)"}</M>: straight lines through 0 go to geodesics through p.
        </p>
      </Definition>

      <Theorem title="normal neighbourhoods">
        <p>
          <M>{"d(\\exp_p)_0"}</M> is the identity of <M>{"T_p M"}</M>, so by the inverse function theorem{" "}
          <M>{"\\exp_p"}</M> maps a ball around 0 diffeomorphically onto a neighbourhood of p. Choosing an orthonormal basis
          gives <strong>normal coordinates</strong>, in which <M>{"g_{ij}(p) = \\delta_{ij}"}</M> and all{" "}
          <M>{"\\Gamma^k_{ij}(p) = 0"}</M>.
        </p>
      </Theorem>

      <Example title="the sphere">
        <p>
          On the unit sphere, <M>{"\\exp_p"}</M> sends the circle of radius r in <M>{"T_p S^2"}</M> to a circle of latitude
          with length <M>{"2\\pi \\sin r"}</M>. It is a diffeomorphism on the open ball of radius π, and sends the whole circle
          of radius π to the antipodal point. The largest such radius is the <strong>injectivity radius</strong>, here π.
        </p>
      </Example>

      <Remark title="Lie groups again">
        <p>
          For a compact Lie group with a bi-invariant metric, geodesics through the identity are exactly the one-parameter
          subgroups. So the Riemannian exponential map agrees with the Lie group exponential: the same name is no accident.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "geo",
      rung: "check",
      prompt: <p>What is a geodesic?</p>,
      answer: { kind: "choice", options: ["A curve whose velocity is parallel along itself", "Any shortest curve between two points", "A curve of constant curvature in ℝ³", "A closed curve"], correct: [0] },
    },
    {
      key: "d0",
      rung: "check",
      prompt: <p>What is the differential of expₚ at 0?</p>,
      answer: { kind: "choice", options: ["The identity of TₚM", "Zero", "Multiplication by 2", "The curvature tensor"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set |v| = 1.57, about π/2. What is the length of the geodesic circle, to 2 decimal places?</p>,
      answer: { kind: "numeric", value: 6.28, tolerance: 0.02 },
    },
    {
      key: "inj",
      rung: "apply",
      prompt: <p>What is the injectivity radius of the unit sphere?</p>,
      answer: { kind: "choice", options: ["π", "π/2", "2π", "1"], correct: [0] },
    },
    {
      key: "rescale",
      rung: "apply",
      prompt: <p>If γᵥ(1) is defined, what is γ₂ᵥ(1/2)?</p>,
      answer: { kind: "choice", options: ["γᵥ(1)", "γᵥ(1/2)", "γᵥ(2)", "p"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a geodesic has constant speed.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Differentiates g(γ̇, γ̇) along γ using compatibility with the metric.",
          "Gets 2g(Dₜγ̇, γ̇), which is 0 since γ is a geodesic.",
          "Concludes the speed is constant.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that in the Euclidean plane, expₚ(v) = p + v, and that its injectivity radius is infinite.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the Christoffel symbols vanish in Cartesian coordinates, so geodesics are straight lines t ↦ p + tv.",
          "Concludes expₚ(v) = p + v, a bijection on all of TₚM.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Geodesics are locally straight. Are they also locally shortest? And past the antipodal point, a geodesic on the
        sphere is no longer the shortest way home.
      </p>
      <p>Next, the minimising properties of geodesics.</p>
    </>
  ),
};
