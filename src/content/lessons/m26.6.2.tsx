import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { StokesGridViz } from "@/components/viz/StokesGridViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m26.6.2",
  minutes: 90,
  links: {
    revisits: ["m26.6.1", "m12.6.3", "m5.7.2"],
    foreshadows: ["m26.6.3", "m26.7.2", "m26.7.3"],
  },

  puzzle: (
    <>
      <p>
        The fundamental theorem of calculus says <M>{"\\int_a^b f'(x) \\, dx = f(b) - f(a)"}</M>: the integral of a derivative
        over an interval depends only on the endpoints. Green, Stokes and Gauss found versions for surfaces and solids. On
        manifolds all of them become one short formula.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Cut the unit square into cells. Each cell&rsquo;s circulation approximates dω times its area, and when you add them up
        the interior edges cancel.
      </p>
      <StokesGridViz />
    </>
  ),

  theory: (
    <>
      <Definition title="manifolds with boundary">
        <p>
          A <strong>manifold with boundary</strong> is modelled on the half-space{" "}
          <M>{"\\mathbb{H}^n = \\{x \\in \\mathbb{R}^n : x^n \\ge 0\\}"}</M>. Points sent to <M>{"x^n = 0"}</M> form the boundary{" "}
          <M>{"\\partial M"}</M>, an (n − 1)-manifold without boundary. If M is oriented, ∂M gets the outward-normal-first
          orientation.
        </p>
      </Definition>

      <Theorem title="Stokes' theorem">
        <p>
          Let M be an oriented n-manifold with boundary, and ω a compactly supported (n − 1)-form. Then{" "}
          <M>{"\\int_M d\\omega = \\int_{\\partial M} \\omega"}</M>. If M has no boundary, the right side is 0.
        </p>
        <p>
          <strong>Proof idea.</strong> By a partition of unity, assume the support lies in one chart, either of ℝⁿ or of{" "}
          <M>{"\\mathbb{H}^n"}</M>. Write ω as a sum of terms{" "}
          <M>{"f \\, dx^1 \\wedge \\dots \\widehat{dx^i} \\dots \\wedge dx^n"}</M>. Integrate{" "}
          <M>{"d\\omega"}</M> first in the <M>{"x^i"}</M> direction by the fundamental theorem of calculus. Compact support kills
          every term except, in the half-space, the one with i = n, which gives exactly the boundary integral.
        </p>
      </Theorem>

      <Example title="the classical theorems">
        <p>
          For M = [a, b] and a function f, Stokes is the fundamental theorem of calculus. For a region D in the plane and{" "}
          <M>{"\\omega = P \\, dx + Q \\, dy"}</M>, it is Green&rsquo;s theorem{" "}
          <M>{"\\iint_D (Q_x - P_y) \\, dx \\, dy = \\oint_{\\partial D} P \\, dx + Q \\, dy"}</M>. For a surface in ℝ³ it is the
          Kelvin–Stokes theorem, and for a solid it is the divergence theorem.
        </p>
      </Example>

      <Theorem title="consequences">
        <p>
          On a compact oriented manifold without boundary, the integral of an exact n-form is zero. So a volume form, whose
          integral is positive, is never exact. And if ω is closed, its integrals over two submanifolds that together bound a
          region are equal: integrals of closed forms depend only on the homology class.
        </p>
      </Theorem>

      <Remark title="a duality">
        <p>
          Stokes&rsquo; theorem pairs d with ∂: <M>{"\\langle d\\omega, M \\rangle = \\langle \\omega, \\partial M \\rangle"}</M>.
          Since <M>{"d^2 = 0"}</M> and <M>{"\\partial^2 = 0"}</M>, closed forms pair with cycles, exact forms with boundaries.
          De Rham&rsquo;s theorem makes this precise: the cohomology built from forms matches singular cohomology with real
          coefficients.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does Stokes&rsquo; theorem say?</p>,
      answer: { kind: "choice", options: ["The integral of dω over M equals the integral of ω over ∂M", "The integral of ω over M equals the integral of dω over ∂M", "Every closed form is exact", "∂M is always empty"], correct: [0] },
    },
    {
      key: "closed",
      rung: "check",
      prompt: <p>On a compact oriented manifold without boundary, what is the integral of an exact top-degree form?</p>,
      answer: { kind: "choice", options: ["0", "The volume", "1", "It depends on the form"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the integral of −y dx + x dy round the boundary of the unit square?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0.01 },
    },
    {
      key: "green",
      rung: "apply",
      prompt: <p>Using Green&rsquo;s theorem, what is the integral of x dy round the boundary of a region D, anticlockwise?</p>,
      answer: { kind: "choice", options: ["The area of D", "Zero", "Twice the area of D", "The perimeter of D"], correct: [0] },
    },
    {
      key: "cyl",
      rung: "apply",
      prompt: <p>Let ω be a closed 1-form on the annulus 1 ≤ |x| ≤ 2. How do its integrals over the two boundary circles, both anticlockwise, compare?</p>,
      answer: { kind: "choice", options: ["They are equal", "They are negatives of each other", "Both are zero", "They have no relation"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the 1-form dθ = (−y dx + x dy)/(x² + y²) on the punctured plane is not exact.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes its integral over the unit circle anticlockwise as 2π, pulling back along (cos t, sin t).",
          "Notes that if dθ = df, the integral over a closed curve would be zero, by Stokes or the fundamental theorem of calculus.",
          "Concludes dθ is not exact, though it is closed.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use Stokes to explain why a compact manifold without boundary has no nowhere vanishing exact top-degree form.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a nowhere vanishing top form on a connected manifold has a fixed sign, so with that orientation its integral is positive.",
          "Notes the integral of an exact form dη over a manifold without boundary is zero.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Closed forms modulo exact forms form a vector space for each degree. It is a diffeomorphism invariant, computed by
        calculus, and it detects holes just as singular homology does.
      </p>
      <p>Next, de Rham cohomology.</p>
    </>
  ),
};
