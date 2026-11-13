import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ContourSumViz } from "@/components/viz/ContourSumViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.2.1",
  minutes: 90,
  links: {
    revisits: ["m5.6.1", "m12.6.2", "m13.1.2"],
    foreshadows: ["m13.2.2", "m13.4.3", "m13.5.1"],
  },

  puzzle: (
    <>
      <p>
        On the real line there is only one way to get from 0 to 1. In the plane there are infinitely many. So an integral of a
        complex function from one point to another must be taken along a path, and it may depend on the path. When does it,
        and when does it not?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Approximate the integral round the unit circle by sums over inscribed polygons, and increase the number of points.</p>
      <ContourSumViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the contour integral">
        <p>
          For a piecewise continuously differentiable curve <M>{"\\gamma: [a, b] \\to \\mathbb{C}"}</M> and{" "}
          <M>{"f"}</M> continuous on its image,
        </p>
        <MD>{"\\int_\\gamma f(z) \\, dz = \\int_a^b f(\\gamma(t)) \\, \\gamma'(t) \\, dt."}</MD>
        <p>
          It is the limit of the sums <M>{"\\sum f(z_k)(z_{k+1} - z_k)"}</M>. It does not change under reparametrisations
          that keep the direction, and changes sign when the direction is reversed. In the language of forms it is the
          integral of the complex 1-form <M>{"f \\, dz = f \\, dx + if \\, dy"}</M>.
        </p>
      </Definition>

      <Theorem title="the ML inequality">
        <p>
          If <M>{"|f| \\le M"}</M> on <M>{"\\gamma"}</M> and <M>{"\\gamma"}</M> has length <M>{"L"}</M>, then{" "}
          <M>{"\\left| \\int_\\gamma f \\, dz \\right| \\le ML"}</M>.
        </p>
      </Theorem>

      <Theorem title="primitives">
        <p>
          If <M>{"F' = f"}</M> on an open set containing <M>{"\\gamma"}</M>, then{" "}
          <M>{"\\int_\\gamma f \\, dz = F(\\gamma(b)) - F(\\gamma(a))"}</M>. In particular the integral of{" "}
          <M>{"f"}</M> round any closed curve is 0.
        </p>
      </Theorem>

      <Proof>
        <p>
          By the chain rule <M>{"(F \\circ \\gamma)'(t) = F'(\\gamma(t))\\gamma'(t) = f(\\gamma(t))\\gamma'(t)"}</M>, so the
          fundamental theorem of calculus, applied to real and imaginary parts on each smooth piece, gives the result.
        </p>
      </Proof>

      <Example title="the most important integral">
        <p>
          Let <M>{"\\gamma(t) = re^{it}"}</M> for <M>{"0 \\le t \\le 2\\pi"}</M>. Then{" "}
          <M>{"\\oint_\\gamma z^n \\, dz = \\int_0^{2\\pi} i r^{n+1} e^{i(n+1)t} \\, dt"}</M>, which is 0 unless{" "}
          <M>{"n = -1"}</M>, when it is <M>{"2\\pi i"}</M>. For <M>{"n \\ne -1"}</M> this also follows from the primitive{" "}
          <M>{"z^{n+1}/(n+1)"}</M>; for <M>{"n = -1"}</M> it shows that <M>{"1/z"}</M> has no primitive on{" "}
          <M>{"\\mathbb{C} \\setminus \\{0\\}"}</M>.
        </p>
      </Example>

      <Remark title="two kinds of nonzero answer">
        <p>
          In the visualisation, <M>{"\\oint z^{-1} dz = 2\\pi i"}</M> because 1/z is singular inside the circle.{" "}
          <M>{"\\oint \\bar z \\, dz"}</M> is also <M>{"2\\pi i"}</M>, for a different reason: <M>{"\\bar z"}</M> is not
          holomorphic anywhere, and by Green&rsquo;s theorem its integral round a closed curve is{" "}
          <M>{"2i"}</M> times the enclosed area.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "recip",
      rung: "check",
      prompt: <p><M>{"\\oint_{|z|=1} dz/z"}</M> is purely imaginary. Give its imaginary part to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 6.283, tolerance: 0.002 },
    },
    {
      key: "seg",
      rung: "check",
      prompt: <p>Compute <M>{"\\int_\\gamma z \\, dz"}</M> along the segment from 0 to <M>{"1 + i"}</M>. It is purely imaginary; give its imaginary part.</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0.001 },
    },
    {
      key: "ml",
      rung: "apply",
      prompt: <p>Use the ML inequality to bound <M>{"\\left|\\oint_{|z|=2} \\frac{dz}{z^2 + 1}\\right|"}</M>, using <M>{"|z^2 + 1| \\ge |z|^2 - 1"}</M>. Give the bound to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 4.189, tolerance: 0.002 },
    },
    {
      key: "conj",
      rung: "apply",
      prompt: <p>Compute <M>{"\\oint_{|z|=3} \\bar z \\, dz"}</M>, using <M>{"\\bar z = 9/z"}</M> on that circle. Give its imaginary part to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 56.549, tolerance: 0.005 },
    },
    {
      key: "prim",
      rung: "apply",
      prompt: <p>Compute <M>{"\\int_\\gamma z^2 \\, dz"}</M> along any path from 0 to 2, to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 2.667, tolerance: 0.002 },
    },
    {
      key: "powers",
      rung: "prove",
      prompt: <p>Prove that <M>{"\\oint_{|z|=r} z^n \\, dz"}</M> is 0 for every integer <M>{"n \\ne -1"}</M> and <M>{"2\\pi i"}</M> for <M>{"n = -1"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Parametrises z = re^{it}, dz = ire^{it} dt.",
          "Reduces the integral to i r^{n+1} ∫₀^{2π} e^{i(n+1)t} dt.",
          "Evaluates: 0 when n + 1 ≠ 0 since the exponential is periodic, and 2πi when n = −1.",
        ],
      },
    },
    {
      key: "noprim",
      rung: "stretch",
      prompt: <p>Show that <M>{"1/z"}</M> has no primitive on <M>{"\\mathbb{C} \\setminus \\{0\\}"}</M>. What does this say about defining <M>{"\\log z"}</M> there?</p>,
      answer: {
        kind: "written",
        rubric: [
          "If F′ = 1/z, the integral round the unit circle would be 0, but it is 2πi.",
          "Concludes no holomorphic logarithm exists on the whole punctured plane; one must cut the plane.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how a complex integral along a curve is defined, the ML inequality, why a primitive makes integrals path-independent, and why ∮ dz/z round a circle is 2πi.",

  glimpse: (
    <p>
      The next lesson proves Cauchy&rsquo;s theorem: holomorphic functions on a disc have primitives, so their integrals
      round closed curves vanish. The residue theorem and the argument principle grow out of the integral of 1/z.
    </p>
  ),
};
