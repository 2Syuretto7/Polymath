import { M, MD } from "@/components/Math";
import { Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CauchyFormulaViz } from "@/components/viz/CauchyFormulaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.2.3",
  minutes: 100,
  links: {
    revisits: ["m13.2.2", "m13.1.4", "m6.8.2"],
    foreshadows: ["m13.3.1", "m13.3.3", "m13.4.1"],
  },

  puzzle: (
    <>
      <p>
        Tell me the temperature at every point of the edge of a metal plate in equilibrium, and the temperature inside is
        fixed. Holomorphic functions behave the same way, only more so: their values on a circle determine their values, and
        all their derivatives, everywhere inside. How can a boundary know so much?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compute the integral over the circle and compare it with f(z₀). Then move z₀ outside the circle.</p>
      <CauchyFormulaViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the Cauchy integral formula">
        <p>
          Let <M>{"f"}</M> be holomorphic on an open set containing the closed disc <M>{"|\\zeta - a| \\le r"}</M>, and let{" "}
          <M>{"C"}</M> be its boundary circle, traversed anticlockwise. Then for <M>{"|z - a| < r"}</M>,
        </p>
        <MD>{"f(z) = \\frac{1}{2\\pi i} \\oint_C \\frac{f(\\zeta)}{\\zeta - z} \\, d\\zeta."}</MD>
      </Theorem>

      <Proof>
        <p>
          The integrand is holomorphic except at <M>{"\\zeta = z"}</M>. By the deformation form of Cauchy&rsquo;s theorem we may
          replace <M>{"C"}</M> by a small circle <M>{"C_\\varepsilon"}</M> of radius <M>{"\\varepsilon"}</M> about{" "}
          <M>{"z"}</M>. Write the integrand as{" "}
          <M>{"\\frac{f(\\zeta) - f(z)}{\\zeta - z} + \\frac{f(z)}{\\zeta - z}"}</M>. The second term integrates to{" "}
          <M>{"2\\pi i f(z)"}</M>. The first is bounded near <M>{"z"}</M>, since it tends to <M>{"f'(z)"}</M>, so by the ML
          inequality its integral is at most a constant times <M>{"2\\pi\\varepsilon"}</M>, which tends to 0.
        </p>
      </Proof>

      <Theorem title="holomorphic functions are analytic">
        <p>
          With <M>{"f"}</M> as above, for <M>{"|z - a| < r"}</M>,
        </p>
        <MD>{"f(z) = \\sum_{n \\ge 0} a_n (z - a)^n, \\qquad a_n = \\frac{1}{2\\pi i} \\oint_C \\frac{f(\\zeta)}{(\\zeta - a)^{n+1}} \\, d\\zeta = \\frac{f^{(n)}(a)}{n!}."}</MD>
        <p>
          So a holomorphic function is infinitely differentiable, and its Taylor series about <M>{"a"}</M> converges on the
          largest open disc about <M>{"a"}</M> inside its domain.
        </p>
      </Theorem>

      <Proof>
        <p>
          For <M>{"\\zeta"}</M> on <M>{"C"}</M>, expand{" "}
          <M>{"\\frac{1}{\\zeta - z} = \\frac{1}{\\zeta - a} \\cdot \\frac{1}{1 - \\frac{z - a}{\\zeta - a}} = \\sum_{n \\ge 0} \\frac{(z - a)^n}{(\\zeta - a)^{n+1}}"}</M>,
          a geometric series converging uniformly in <M>{"\\zeta"}</M> because{" "}
          <M>{"|z - a|/r < 1"}</M>. Multiply by <M>{"f(\\zeta)/2\\pi i"}</M> and integrate term by term. The identity{" "}
          <M>{"a_n = f^{(n)}(a)/n!"}</M> holds for any convergent power series.
        </p>
      </Proof>

      <Theorem title="Cauchy’s estimates">
        <p>
          If <M>{"|f| \\le M"}</M> on <M>{"C"}</M>, then <M>{"|f^{(n)}(a)| \\le n! \\, M / r^n"}</M>.
        </p>
      </Theorem>

      <Remark title="the mean value property">
        <p>
          Putting <M>{"z = a"}</M> and <M>{"\\zeta = a + re^{it}"}</M> gives{" "}
          <M>{"f(a) = \\frac{1}{2\\pi}\\int_0^{2\\pi} f(a + re^{it}) \\, dt"}</M>: the value at the centre is the average over
          the circle. This one fact drives the maximum modulus principle, and the estimates drive Liouville&rsquo;s theorem.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "exp",
      rung: "check",
      prompt: <p>Compute <M>{"\\frac{1}{2\\pi i}\\oint_{|z|=1} \\frac{e^z}{z} \\, dz"}</M>.</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0.001 },
    },
    {
      key: "sq",
      rung: "check",
      prompt: <p>Compute <M>{"\\oint_{|z|=3} \\frac{z^2}{z - 2} \\, dz"}</M>. It is purely imaginary; give its imaginary part to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 25.133, tolerance: 0.005 },
    },
    {
      key: "deriv",
      rung: "apply",
      prompt: <p>Use the formula for derivatives to compute <M>{"\\oint_{|z|=1} \\frac{e^z}{z^3} \\, dz"}</M>. Give its imaginary part to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 3.142, tolerance: 0.002 },
    },
    {
      key: "est",
      rung: "apply",
      prompt: <p>An entire function satisfies <M>{"|f| \\le 5"}</M> on <M>{"|z| = 2"}</M>. What upper bound do Cauchy&rsquo;s estimates give for <M>{"|f'(0)|"}</M>?</p>,
      answer: { kind: "numeric", value: 2.5, tolerance: 0.001 },
    },
    {
      key: "mean",
      rung: "apply",
      prompt: <p>Find the average of <M>{"f(z) = z^2 + 3"}</M> over the unit circle, that is, <M>{"\\frac{1}{2\\pi}\\int_0^{2\\pi} f(e^{it}) \\, dt"}</M>.</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0.001 },
    },
    {
      key: "estproof",
      rung: "prove",
      prompt: <p>Prove Cauchy&rsquo;s estimate <M>{"|f^{(n)}(a)| \\le n! \\, M / r^n"}</M> from the coefficient formula.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes f^{(n)}(a) = (n!/2πi) ∮ f(ζ)/(ζ − a)^{n+1} dζ.",
          "Bounds the integrand by M/r^{n+1} on the circle and the length by 2πr.",
          "Multiplies out to get n! M / r^n.",
        ],
      },
    },
    {
      key: "max",
      rung: "stretch",
      prompt: <p>Use the mean value property to argue that if <M>{"|f|"}</M> has a maximum at the centre of a disc on which <M>{"f"}</M> is holomorphic, then <M>{"|f|"}</M> is constant on that disc.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes |f(a)| ≤ average of |f| over each circle about a, which is at most |f(a)|.",
          "Concludes |f| = |f(a)| on every such circle by continuity, so |f| is constant on the disc.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the Cauchy integral formula and its proof by shrinking the circle, why it shows that holomorphic functions are power series and infinitely differentiable, and what Cauchy's estimates say.",

  glimpse: (
    <p>
      The next lessons harvest the formula: Liouville&rsquo;s theorem, the fundamental theorem of algebra and the maximum
      modulus principle. Laurent series extend the same expansion to annuli around singularities.
    </p>
  ),
};
