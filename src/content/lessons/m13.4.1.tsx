import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { LaurentAnnulusViz } from "@/components/viz/LaurentAnnulusViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.4.1",
  minutes: 90,
  links: {
    revisits: ["m13.2.3", "m13.1.4", "m13.3.4"],
    foreshadows: ["m13.4.2", "m13.4.3", "m13.7.2"],
  },

  puzzle: (
    <>
      <p>
        A Taylor series lives on a disc and stops at the nearest singularity. But <M>{"1/z"}</M>, or{" "}
        <M>{"e^{1/z}"}</M>, are perfectly holomorphic on a ring around 0 that avoids the trouble at the centre. Is there a
        series adapted to rings instead of discs?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a region about 0 and compare the series, then add terms and watch them converge.</p>
      <LaurentAnnulusViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Laurent’s theorem">
        <p>
          Let <M>{"f"}</M> be holomorphic on the annulus <M>{"A = \\{r < |z - a| < R\\}"}</M>, with{" "}
          <M>{"0 \\le r < R \\le \\infty"}</M>. Then
        </p>
        <MD>{"f(z) = \\sum_{n = -\\infty}^{\\infty} a_n (z - a)^n, \\qquad a_n = \\frac{1}{2\\pi i}\\oint_{|\\zeta - a| = \\rho} \\frac{f(\\zeta)}{(\\zeta - a)^{n+1}} \\, d\\zeta"}</MD>
        <p>
          for any <M>{"\\rho \\in (r, R)"}</M>, the series converging absolutely and uniformly on every closed sub-annulus. The
          coefficients are unique.
        </p>
      </Theorem>

      <Proof>
        <p>
          For <M>{"z"}</M> in a sub-annulus <M>{"\\rho_1 < |z - a| < \\rho_2"}</M>, the Cauchy integral formula for the region
          between the two circles gives{" "}
          <M>{"f(z) = \\frac{1}{2\\pi i}\\oint_{\\rho_2} \\frac{f(\\zeta)}{\\zeta - z} d\\zeta - \\frac{1}{2\\pi i}\\oint_{\\rho_1} \\frac{f(\\zeta)}{\\zeta - z} d\\zeta"}</M>.
          On the outer circle expand <M>{"\\frac{1}{\\zeta - z}"}</M> in powers of <M>{"(z - a)/(\\zeta - a)"}</M>, as for
          Taylor series. On the inner circle expand <M>{"-\\frac{1}{\\zeta - z} = \\frac{1}{z - a}\\cdot\\frac{1}{1 - (\\zeta - a)/(z - a)}"}</M>{" "}
          in powers of <M>{"(\\zeta - a)/(z - a)"}</M>, which gives the negative powers. Integrating term by term gives the
          formula. Uniqueness: divide the series by <M>{"(z - a)^{m+1}"}</M> and integrate round a circle; only the term{" "}
          <M>{"n = m"}</M> survives.
        </p>
      </Proof>

      <Example title="one function, three series">
        <p>
          <M>{"\\frac{1}{(z-1)(z-2)} = \\frac{1}{z-2} - \\frac{1}{z-1}"}</M>. Each fraction is expanded as a geometric series
          in <M>{"z"}</M> or in <M>{"1/z"}</M>, depending on which of <M>{"|z|"}</M> and the pole&rsquo;s modulus is larger.
          This gives a power series on <M>{"|z| < 1"}</M>, a two-sided series on <M>{"1 < |z| < 2"}</M>, and a series in{" "}
          <M>{"1/z"}</M> on <M>{"|z| > 2"}</M>.
        </p>
      </Example>

      <Remark title="the coefficient that matters">
        <p>
          Integrating the series round a circle in the annulus kills every term except <M>{"a_{-1}(z - a)^{-1}"}</M>, so{" "}
          <M>{"\\oint f \\, dz = 2\\pi i \\, a_{-1}"}</M>. This one coefficient, the residue, will make contour integrals
          computable by algebra.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "exp",
      rung: "check",
      prompt: <p>Find the coefficient of <M>{"z^{-1}"}</M> in the Laurent series of <M>{"z^2 e^{1/z}"}</M> about 0, to 4 decimal places.</p>,
      answer: { kind: "numeric", value: 0.1667, tolerance: 0.0005 },
    },
    {
      key: "outer",
      rung: "check",
      prompt: <p>In the region <M>{"|z| > 1"}</M>, find the coefficient of <M>{"z^{-3}"}</M> in the Laurent series of <M>{"\\frac{1}{z(1 - z)}"}</M>.</p>,
      answer: { kind: "numeric", value: -1, tolerance: 0.001 },
    },
    {
      key: "mid",
      rung: "apply",
      prompt: <p>For <M>{"\\frac{1}{(z-1)(z-2)}"}</M> on <M>{"1 < |z| < 2"}</M>, find the constant coefficient <M>{"a_0"}</M>.</p>,
      answer: { kind: "numeric", value: -0.5, tolerance: 0.001 },
    },
    {
      key: "far",
      rung: "apply",
      prompt: <p>For the same function on <M>{"|z| > 2"}</M>, find the coefficient of <M>{"z^{-3}"}</M>.</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0.001 },
    },
    {
      key: "int",
      rung: "apply",
      prompt: <p>Compute <M>{"\\oint_{|z|=1} z^2 e^{1/z} \\, dz"}</M>. It is purely imaginary; give its imaginary part to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 1.047, tolerance: 0.002 },
    },
    {
      key: "unique",
      rung: "prove",
      prompt: <p>Prove that the coefficients of a Laurent series converging on an annulus are determined by the function.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Divides the series by (z − a)^{m+1} and integrates round a circle in the annulus.",
          "Justifies term-by-term integration by uniform convergence on the circle.",
          "Notes only the term n = m gives a nonzero integral, 2πi a_m, so a_m is fixed by f.",
        ],
      },
    },
    {
      key: "csc",
      rung: "stretch",
      prompt: <p>Find the first two nonzero terms of the Laurent series of <M>{"1/\\sin z"}</M> about 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes sin z = z(1 − z²/6 + …) and inverts the bracket as a geometric series.",
          "Obtains 1/sin z = 1/z + z/6 + ….",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a Laurent series is, why a function can have different Laurent series in different annuli, how the coefficients are given by integrals, and why the coefficient of 1/(z − a) is special.",

  glimpse: (
    <p>
      The next lesson uses Laurent series to classify isolated singularities, and the residue theorem turns the coefficient
      of 1/(z − a) into a tool for computing integrals. The zeta function&rsquo;s pole at 1 is studied the same way.
    </p>
  ),
};
