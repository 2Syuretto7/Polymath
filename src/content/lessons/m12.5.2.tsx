import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { GaussSquareViz } from "@/components/viz/GaussSquareViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m12.5.2",
  minutes: 95,
  links: {
    revisits: ["m5.5.3", "m12.5.1", "m12.4.2"],
    foreshadows: ["m12.5.3", "m22.3.3", "m26.6.1"],
  },

  puzzle: (
    <>
      <p>
        The bell curve <M>{"e^{-x^2}"}</M> has no elementary antiderivative, yet its total area is exactly{" "}
        <M>{"\\sqrt\\pi"}</M>. The trick is to square the integral, view it as an integral over the plane, and switch to polar
        coordinates. Why is that switch allowed, and where does the extra factor r come from?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The integral over the square is trapped between integrals over two discs, which are easy in polar coordinates. Grow
        the square and see all three approach π.
      </p>
      <GaussSquareViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="change of variables">
        <p>
          Let <M>{"\\Phi : U \\to V"}</M> be a <M>{"C^1"}</M> bijection between open sets in <M>{"\\mathbb{R}^n"}</M> with{" "}
          <M>{"\\det D\\Phi \\ne 0"}</M> everywhere, and let <M>{"f"}</M> be integrable on a region in <M>{"V"}</M> with
          boundary of content zero. Then
        </p>
        <MD>{"\\int_{\\Phi(S)} f(y) \\, dy = \\int_S f(\\Phi(x)) \\, |\\det D\\Phi(x)| \\, dx."}</MD>
      </Theorem>

      <Proof>
        <p>
          An outline. For a linear map <M>{"A"}</M>, <M>{"\\mathrm{vol}(A(R)) = |\\det A| \\, \\mathrm{vol}(R)"}</M> for every
          box <M>{"R"}</M>: check it for elementary matrices, then use multiplicativity of the determinant. For a nonlinear{" "}
          <M>{"\\Phi"}</M>, on a small box <M>{"R"}</M> around <M>{"x"}</M> the map is close to its linearisation, so{" "}
          <M>{"\\mathrm{vol}(\\Phi(R)) \\approx |\\det D\\Phi(x)| \\, \\mathrm{vol}(R)"}</M>, with relative error that tends to
          0 uniformly as boxes shrink, by uniform continuity of <M>{"D\\Phi"}</M> on compact sets. Summing over a fine
          partition, the Riemann sums of the two sides differ by an amount that tends to 0. A cleaner route proves the
          formula for maps that change one coordinate at a time, and writes any <M>{"\\Phi"}</M> locally as a composite of
          such maps.
        </p>
      </Proof>

      <Example title="polar coordinates and the Gaussian">
        <p>
          For <M>{"\\Phi(r, \\theta) = (r\\cos\\theta, r\\sin\\theta)"}</M>, <M>{"\\det D\\Phi = r"}</M>, so{" "}
          <M>{"dx \\, dy = r \\, dr \\, d\\theta"}</M>. Then
        </p>
        <MD>{"\\int_{x^2 + y^2 \\le R^2} e^{-x^2 - y^2} \\, dx \\, dy = \\int_0^{2\\pi}\\!\\! \\int_0^R e^{-r^2} r \\, dr \\, d\\theta = \\pi(1 - e^{-R^2})."}</MD>
        <p>
          Squeezing the square between discs of radius <M>{"R"}</M> and <M>{"R\\sqrt2"}</M> and letting{" "}
          <M>{"R \\to \\infty"}</M> gives <M>{"\\left(\\int_{-\\infty}^{\\infty} e^{-x^2} dx\\right)^2 = \\pi"}</M>.
        </p>
      </Example>

      <Remark title="the determinant as volume">
        <p>
          The factor <M>{"|\\det D\\Phi|"}</M> is the local stretching of volume. The polar map fails to be injective at{" "}
          <M>{"r = 0"}</M>, but that is a set of content zero, so it does not affect the integral. The same formula, written for
          differential forms, gives integration on manifolds.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "polar",
      rung: "check",
      prompt: <p>In polar coordinates, dx dy becomes what?</p>,
      answer: { kind: "choice", options: ["r dr dθ", "dr dθ", "r² dr dθ", "sin θ dr dθ"], correct: [0] },
    },
    {
      key: "linear",
      rung: "check",
      prompt: <p>The linear map A = [[2, 1], [0, 3]] maps the unit square to a parallelogram. What is its area?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "disc",
      rung: "apply",
      prompt: <p>Use polar coordinates to compute ∫∫ over the unit disc of (x² + y²) dx dy. Give 3 decimal places.</p>,
      answer: { kind: "numeric", value: 1.571, tolerance: 0.002 },
    },
    {
      key: "gauss",
      rung: "apply",
      prompt: <p>What is ∫ from −∞ to ∞ of e^(−x²) dx, to 3 decimal places?</p>,
      answer: { kind: "numeric", value: 1.772, tolerance: 0.002 },
    },
    {
      key: "ellipse",
      rung: "apply",
      prompt: <p>Using (u, v) ↦ (3u, 2v), what is the area of the ellipse x²/9 + y²/4 ≤ 1, to 2 decimal places?</p>,
      answer: { kind: "numeric", value: 18.85, tolerance: 0.01 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Verify that the Jacobian determinant of the polar coordinate map is r.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes the partial derivatives cos θ, −r sin θ, sin θ, r cos θ.",
          "Forms the determinant r cos²θ + r sin²θ.",
          "Concludes it equals r.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>What is the Jacobian determinant of spherical coordinates, and how does it give the volume of a ball?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States or derives the factor r² sin φ.",
          "Integrates r² sin φ over 0 ≤ r ≤ R, 0 ≤ φ ≤ π, 0 ≤ θ ≤ 2π to get 4πR³/3.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the change of variables formula, why the absolute value of the Jacobian determinant appears, and how polar coordinates show that the Gaussian integral is √π.",

  glimpse: (
    <p>
      The next lesson builds partitions of unity, the tool for gluing local calculations into global ones. In measure theory
      the formula holds for Lebesgue integrals, and on manifolds it becomes the reason integrals of forms are well defined.
    </p>
  ),
};
