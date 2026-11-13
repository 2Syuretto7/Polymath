import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CurvatureTypeViz } from "@/components/viz/CurvatureTypeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m16.3.2",
  minutes: 90,
  links: {
    revisits: ["m16.3.1", "m8.4.2", "m16.1.3"],
    foreshadows: ["m16.3.3", "m16.4.2", "m16.5.1"],
  },

  puzzle: (
    <>
      <p>
        At a point on a doughnut&rsquo;s outer rim, the surface curves the same way in every direction, like a ball. On the
        inner rim, it curves up one way and down the other, like a saddle. A single number ought to tell these two kinds of
        point apart. Which number, and how does it come from the infinitely many normal curvatures at the point?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose two principal curvatures and see the normal curvature in every direction, and the two numbers that summarise it.</p>
      <CurvatureTypeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="principal curvatures">
        <p>
          The shape operator <M>{"-dN_p"}</M> is self-adjoint, so it has two real eigenvalues <M>{"\\kappa_1 \\geq \\kappa_2"}</M>,
          the <strong>principal curvatures</strong>, with orthonormal eigenvectors <M>{"e_1, e_2"}</M>, the{" "}
          <strong>principal directions</strong>. They are the maximum and minimum of the normal curvature over all unit
          directions.
        </p>
      </Definition>

      <Theorem title="Euler’s formula (1760)">
        <p>If the unit vector <M>{"w"}</M> makes angle <M>{"\\theta"}</M> with <M>{"e_1"}</M>, then</p>
        <MD>{"\\kappa_n(w) = \\kappa_1\\cos^2\\theta + \\kappa_2\\sin^2\\theta."}</MD>
      </Theorem>

      <Proof>
        <p>
          Write <M>{"w = \\cos\\theta\\, e_1 + \\sin\\theta\\, e_2"}</M>. Then{" "}
          <M>{"-dN_p(w) = \\kappa_1\\cos\\theta\\, e_1 + \\kappa_2\\sin\\theta\\, e_2"}</M>, and taking the dot product with{" "}
          <M>{"w"}</M>, using orthonormality, gives the formula. Since it is a weighted average of <M>{"\\kappa_1"}</M> and{" "}
          <M>{"\\kappa_2"}</M>, these are its extreme values.
        </p>
      </Proof>

      <Definition title="Gaussian and mean curvature">
        <p>
          The <strong>Gaussian curvature</strong> is <M>{"K = \\kappa_1\\kappa_2 = \\det(-dN_p)"}</M> and the{" "}
          <strong>mean curvature</strong> is <M>{"H = \\tfrac12(\\kappa_1 + \\kappa_2)"}</M>. In a chart,
        </p>
        <MD>{"K = \\frac{eg - f^2}{EG - F^2}, \\qquad H = \\frac{eG - 2fF + gE}{2(EG - F^2)}."}</MD>
        <p>
          Reversing the normal changes the sign of <M>{"H"}</M> but not of <M>{"K"}</M>. A point is{" "}
          <strong>elliptic</strong> if <M>{"K > 0"}</M>, <strong>hyperbolic</strong> if <M>{"K < 0"}</M>,{" "}
          <strong>parabolic</strong> if <M>{"K = 0"}</M> with <M>{"dN_p \\neq 0"}</M>, and <strong>planar</strong> if{" "}
          <M>{"dN_p = 0"}</M>. It is an <strong>umbilic</strong> if <M>{"\\kappa_1 = \\kappa_2"}</M>.
        </p>
      </Definition>

      <Example title="examples">
        <p>
          A sphere of radius <M>{"r"}</M>: every point is umbilic, <M>{"K = 1/r^2"}</M>. A cylinder of radius <M>{"r"}</M>:{" "}
          <M>{"\\kappa_1 = 1/r"}</M>, <M>{"\\kappa_2 = 0"}</M>, so <M>{"K = 0"}</M> and <M>{"|H| = 1/(2r)"}</M>. The saddle{" "}
          <M>{"z = xy"}</M> at the origin: <M>{"e = g = 0"}</M>, <M>{"f = 1"}</M>, so <M>{"K = -1"}</M>. On the torus with radii{" "}
          <M>{"R > r"}</M>, <M>{"K = \\cos v / (r(R + r\\cos v))"}</M>: positive on the outside, negative on the inside, zero on
          the top and bottom circles.
        </p>
      </Example>

      <Remark title="the Gauss map and area">
        <p>
          <M>{"K"}</M> is the factor by which the Gauss map stretches area: a small region of area <M>{"A"}</M> around{" "}
          <M>{"p"}</M> has normals filling a region of the unit sphere of area about <M>{"|K| A"}</M>, with orientation
          reversed where <M>{"K < 0"}</M>. This is Gauss&rsquo;s original definition.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "k",
      rung: "check",
      prompt: <p>How is the Gaussian curvature defined from the principal curvatures?</p>,
      answer: { kind: "choice", options: ["K = κ₁κ₂", "K = κ₁ + κ₂", "K = (κ₁ + κ₂)/2", "K = κ₁ − κ₂"], correct: [0] },
    },
    {
      key: "type",
      rung: "check",
      prompt: <p>A point where <M>{"K < 0"}</M> is called</p>,
      answer: { kind: "choice", options: ["hyperbolic", "elliptic", "parabolic", "umbilic"], correct: [0] },
    },
    {
      key: "euler",
      rung: "apply",
      prompt: <p>With <M>{"\\kappa_1 = 2"}</M> and <M>{"\\kappa_2 = -1"}</M>, what is the normal curvature at <M>{"\\theta = 60^\\circ"}</M>?</p>,
      answer: { kind: "numeric", value: -0.25, tolerance: 0.001 },
    },
    {
      key: "xy",
      rung: "apply",
      prompt: <p>What is the Gaussian curvature of <M>{"z = xy"}</M> at the origin?</p>,
      answer: { kind: "numeric", value: -1 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with <M>{"\\kappa_1 = 1"}</M> and <M>{"\\kappa_2 = -0.5"}</M>, at what angle <M>{"\\theta"}</M> between 0° and 90° is the normal curvature zero? Give the nearest degree.</p>,
      answer: { kind: "numeric", value: 55, tolerance: 1 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove Euler&rsquo;s formula from the fact that the principal directions are orthonormal eigenvectors of the shape operator.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes w = cos θ e₁ + sin θ e₂ and applies the shape operator to get κ₁ cos θ e₁ + κ₂ sin θ e₂.",
          "Takes the dot product with w, using e₁ · e₂ = 0 and |e₁| = |e₂| = 1.",
          "Obtains κₙ = κ₁ cos²θ + κ₂ sin²θ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that at a point where <M>{"H = 0"}</M>, the Gaussian curvature satisfies <M>{"K \\leq 0"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "From H = 0 deduces κ₂ = −κ₁.",
          "Computes K = κ₁κ₂ = −κ₁² ≤ 0.",
          "Notes equality only at a planar point. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the principal curvatures and directions, Euler's formula for normal curvature, the Gaussian and mean curvature, and how the sign of K distinguishes elliptic, hyperbolic and parabolic points.",

  glimpse: (
    <p>
      Next, minimal surfaces, where the mean curvature vanishes everywhere: the shapes of soap films.
    </p>
  ),
};
