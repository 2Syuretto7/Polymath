import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { RiemannRochViz } from "@/components/viz/RiemannRochViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m28.4.4",
  minutes: 90,
  links: {
    revisits: ["m28.4.3", "m28.3.2", "m15.5.3"],
    foreshadows: ["m30.2.3", "m30.5.3", "m30.6.3"],
  },

  puzzle: (
    <>
      <p>
        On the sphere there are meromorphic functions with a single simple pole, such as 1/z. On a torus there are none,
        but ℘ has a single double pole. On a surface of genus 2 even a double pole may be impossible at a given point. How
        does the shape of a surface limit the functions it carries?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a genus and a pole order, and read the dimension of the space of functions.</p>
      <RiemannRochViz />
    </>
  ),

  theory: (
    <>
      <Definition title="divisors">
        <p>
          A <strong>divisor</strong> on a compact Riemann surface X is a finite formal sum{" "}
          <M>{"D = \\sum n_P P"}</M> of points, with degree <M>{"\\deg D = \\sum n_P"}</M>. A non-zero meromorphic function f
          has divisor (f), its zeros minus its poles, of degree 0. Let{" "}
          <M>{"L(D) = \\{f : (f) + D \\ge 0\\} \\cup \\{0\\}"}</M>, the functions whose poles are no worse than D allows,
          and <M>{"\\ell(D) = \\dim L(D)"}</M>, which is finite.
        </p>
      </Definition>

      <Definition title="genus and canonical divisor">
        <p>
          A compact Riemann surface is topologically a sphere with g handles; g is its <strong>genus</strong>. The divisor K
          of any non-zero meromorphic 1-form is a <strong>canonical divisor</strong>, and{" "}
          <M>{"\\deg K = 2g - 2"}</M>; the holomorphic 1-forms form a space of dimension <M>{"\\ell(K) = g"}</M>.
        </p>
      </Definition>

      <Theorem title="the Riemann-Roch theorem">
        <p>
          For every divisor D, <M>{"\\ell(D) - \\ell(K - D) = \\deg D - g + 1"}</M>. Riemann proved the inequality{" "}
          <M>{"\\ell(D) \\ge \\deg D - g + 1"}</M>; his student Roch identified the correction term. When{" "}
          <M>{"\\deg D > 2g - 2"}</M>, K − D has negative degree, so <M>{"\\ell(D) = \\deg D - g + 1"}</M> exactly.
        </p>
      </Theorem>

      <Example title="consequences">
        <ul>
          <li>If g = 0, ℓ(P) = 2, so there is f with one simple pole, and f maps X isomorphically onto the sphere.</li>
          <li>
            If g = 1, ℓ(2P) = 2 and ℓ(3P) = 3, giving functions x and y with poles of order 2 and 3 that satisfy a cubic:
            every torus is an elliptic curve.
          </li>
          <li>
            For g ≥ 2, ℓ(dP) = 1 for d = 1, …, g at a general point, so the first g pole orders are &lsquo;gaps&rsquo;.
          </li>
          <li>Every compact Riemann surface has non-constant meromorphic functions, and embeds in projective space.</li>
        </ul>
      </Example>

      <Remark title="analysis meets algebra">
        <p>
          By Riemann-Roch, every compact Riemann surface is the set of complex points of a smooth projective algebraic
          curve, and holomorphic maps between them are algebraic. Complex analysis on compact surfaces and the algebraic
          geometry of curves are the same subject, a fact that algebraic geometry generalises to all dimensions.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "rr",
      rung: "check",
      prompt: <p>What does the Riemann-Roch theorem state?</p>,
      answer: { kind: "choice", options: ["ℓ(D) − ℓ(K − D) = deg D − g + 1", "ℓ(D) = deg D for every D", "deg K = g", "Every divisor is principal"], correct: [0] },
    },
    {
      key: "deg",
      rung: "check",
      prompt: <p>What is the degree of the divisor of a non-zero meromorphic function on a compact Riemann surface?</p>,
      answer: { kind: "choice", options: ["0", "The genus", "2g − 2", "1"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, take g = 2 and d = 5. What is ℓ(D)?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "canon",
      rung: "apply",
      prompt: <p>What is the degree of a canonical divisor on a surface of genus 3?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "torus",
      rung: "apply",
      prompt: <p>On a torus, which functions span L(2P), where P is the point 0?</p>,
      answer: { kind: "choice", options: ["1 and ℘", "1 alone", "℘ and ℘′", "1, ℘ and ℘′"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Use Riemann-Roch to show that a compact Riemann surface of genus 0 is isomorphic to the Riemann sphere.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies Riemann-Roch to D = P with g = 0: deg K = −2, so ℓ(K − P) = 0 and ℓ(P) = 2.",
          "Concludes there is a non-constant f with at most a simple pole at P, so exactly one simple pole.",
          "Notes f is a holomorphic map to the sphere of degree 1, hence an isomorphism.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why are there no meromorphic functions on a torus with a single simple pole?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses Riemann-Roch with g = 1: ℓ(P) = 1 − 1 + 1 + ℓ(K − P), and K has degree 0, so K − P has negative degree.",
          "Concludes ℓ(P) = 1, so only constants qualify.",
          "Or argues directly from the residue theorem for elliptic functions. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Riemann surfaces are curves, the one-dimensional case of algebraic geometry, which studies the solution sets of
        polynomial equations in any number of variables and over any field.
      </p>
      <p>Next, the course on algebraic geometry begins with affine varieties.</p>
    </>
  ),
};
