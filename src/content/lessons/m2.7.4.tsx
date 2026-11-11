import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { ImproperViz } from "@/components/viz/ImproperViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.7.4",
  minutes: 85,
  links: {
    revisits: ["m2.2.4", "m2.6.2"],
    foreshadows: ["m2.9.2", "m2.10.4", "m9.3.1"],
  },

  puzzle: (
    <>
      <p>
        The region under <M>{"1/x^2"}</M> to the right of <M>{"x = 1"}</M> stretches out for ever. Can an infinitely long
        region have a finite area? And what of <M>{"1/x"}</M>, which looks almost the same?
      </p>
      <p>
        The definite integral, as defined in the last chapter, needs a bounded function on a closed, bounded interval. Both
        conditions fail here. Is there a sensible way to extend it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Integrate as far as you can, and take a limit. The area under <M>{"1/x^2"}</M> from 1 to b is{" "}
        <M>{"1 - 1/b"}</M>, which approaches 1 however large b becomes: the infinite region has area 1. Under{" "}
        <M>{"1/x"}</M> the area from 1 to b is <M>{"\\ln b"}</M>, which grows without bound, if very slowly. Explore both,
        and the spikes at 0, below.
      </p>
      <ImproperViz />
    </>
  ),

  theory: (
    <>
      <Definition title="improper integrals">
        <ul>
          <li>
            If f is integrable on <M>{"[a, b]"}</M> for every <M>{"b > a"}</M>, define{" "}
            <M>{"\\int_a^\\infty f = \\lim_{b \\to \\infty} \\int_a^b f"}</M>, when the limit exists.
          </li>
          <li>
            If f is integrable on <M>{"[c, b]"}</M> for every c with <M>{"a < c < b"}</M>, but unbounded near a, define{" "}
            <M>{"\\int_a^b f = \\lim_{c \\to a^+} \\int_c^b f"}</M>, when the limit exists.
          </li>
        </ul>
        <p>
          If the limit exists and is finite, the integral <strong>converges</strong>; otherwise it{" "}
          <strong>diverges</strong>. An integral improper at both ends, or at an interior point, is split into pieces, each
          improper at one end only, and converges when every piece does.
        </p>
      </Definition>

      <Theorem title="the p-integrals">
        <MD>{"\\int_1^\\infty \\frac{dx}{x^p} \\text{ converges exactly when } p > 1, \\qquad \\int_0^1 \\frac{dx}{x^p} \\text{ converges exactly when } p < 1."}</MD>
        <p>
          For <M>{"p \\ne 1"}</M>, <M>{"\\int_1^b x^{-p}\\,dx = \\frac{b^{1-p} - 1}{1 - p}"}</M>. As{" "}
          <M>{"b \\to \\infty"}</M>, <M>{"b^{1-p} \\to 0"}</M> if <M>{"p > 1"}</M> and <M>{"\\to \\infty"}</M> if{" "}
          <M>{"p < 1"}</M>. For <M>{"p = 1"}</M> the integral is <M>{"\\ln b \\to \\infty"}</M>. The spike at 0 is the
          mirror case.
        </p>
      </Theorem>

      <Theorem title="comparison">
        <p>
          Suppose <M>{"0 \\le f(x) \\le g(x)"}</M> for <M>{"x \\ge a"}</M>, and both are integrable on each{" "}
          <M>{"[a, b]"}</M>. If <M>{"\\int_a^\\infty g"}</M> converges, so does <M>{"\\int_a^\\infty f"}</M>. If{" "}
          <M>{"\\int_a^\\infty f"}</M> diverges, so does <M>{"\\int_a^\\infty g"}</M>.
        </p>
      </Theorem>
      <p>
        The function <M>{"F(b) = \\int_a^b f"}</M> is increasing, since f is not negative, and bounded above by{" "}
        <M>{"\\int_a^\\infty g"}</M>. An increasing function that is bounded above has a limit, by the completeness of the
        real numbers. Comparison is the main tool when no antiderivative is available.
      </p>

      <Example title="the bell curve">
        <p>
          <M>{"e^{-x^2}"}</M> has no elementary antiderivative, but for <M>{"x \\ge 1"}</M>,{" "}
          <M>{"e^{-x^2} \\le e^{-x}"}</M>, and <M>{"\\int_1^\\infty e^{-x}\\,dx = e^{-1}"}</M> converges. So{" "}
          <M>{"\\int_0^\\infty e^{-x^2}\\,dx"}</M> converges. Its value, <M>{"\\sqrt{\\pi}/2"}</M>, needs a cleverer idea,
          found in Multivariable Calculus and Vector Analysis.
        </p>
      </Example>

      <Example title="the gamma function">
        <p>
          With integration by parts, <M>{"\\int_0^\\infty x^n e^{-x}\\,dx = n \\int_0^\\infty x^{n-1} e^{-x}\\,dx"}</M>,
          because the boundary term <M>{"x^n e^{-x}"}</M> vanishes at 0 and tends to 0 as <M>{"x \\to \\infty"}</M>.
          Since <M>{"\\int_0^\\infty e^{-x}\\,dx = 1"}</M>, the integral is <M>{"n!"}</M>. The same integral makes sense
          for non-integer n, and so defines factorials of fractions: this is Euler&rsquo;s gamma function.
        </p>
      </Example>

      <Remark title="a trumpet with finite volume">
        <p>
          Rotate the curve <M>{"y = 1/x"}</M>, for <M>{"x \\ge 1"}</M>, about the x-axis. The solid has volume{" "}
          <M>{"\\int_1^\\infty \\pi/x^2\\,dx = \\pi"}</M>, but its surface area is infinite, since it is at least{" "}
          <M>{"\\int_1^\\infty 2\\pi/x\\,dx"}</M>. Evangelista Torricelli found this in the 1640s, and it unsettled
          philosophers: a horn that can be filled with paint but never painted. The paradox dissolves once you remember that
          a finite volume of paint spread ever thinner can cover an infinite area.
        </p>
      </Remark>

      <Remark title="a warning">
        <p>
          <M>{"\\int_{-1}^{1} dx/x^2"}</M> is improper at 0, inside the interval. Each piece diverges, so the integral
          diverges. Ignoring the problem point gives the nonsense answer <M>{"-2"}</M> met with the fundamental theorem.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "p",
      rung: "check",
      prompt: <p>Which of these integrals converge? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["∫ from 1 to ∞ of 1/x³", "∫ from 1 to ∞ of 1/√x", "∫ from 0 to 1 of 1/√x", "∫ from 0 to 1 of 1/x²"],
        correct: [0, 2],
      },
    },
    {
      key: "value",
      rung: "check",
      prompt: (
        <p>
          Find <M>{"\\int_1^\\infty \\frac{dx}{x^3}"}</M>. (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 0.5 },
    },
    {
      key: "spike",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\int_0^4 \\frac{dx}{\\sqrt{x}}"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "exp",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\int_0^\\infty x e^{-x}\\,dx"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "arctan",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\int_{-\\infty}^{\\infty} \\frac{dx}{1 + x^2}"}</M>. (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: Math.PI, tolerance: 0.001 },
    },
    {
      key: "compare",
      rung: "prove",
      prompt: (
        <p>
          Prove that <M>{"\\int_1^\\infty \\frac{\\sin^2 x}{x^2}\\,dx"}</M> converges, and that{" "}
          <M>{"\\int_2^\\infty \\frac{dx}{\\ln x}"}</M> diverges.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Bounds sin²x / x² above by 1/x², whose integral from 1 to ∞ converges, and applies comparison.",
          "Notes that ln x < x for x ≥ 2, so 1/ln x > 1/x, whose integral diverges.",
          "Applies the divergence half of the comparison theorem, noting both integrands are positive.",
        ],
      },
    },
    {
      key: "gamma",
      rung: "stretch",
      prompt: (
        <p>
          Let <M>{"\\Gamma(s) = \\int_0^\\infty x^{s-1}e^{-x}\\,dx"}</M>. Show that the integral converges for{" "}
          <M>{"s > 0"}</M> (consider the pieces from 0 to 1 and from 1 to ∞ separately), and that{" "}
          <M>{"\\Gamma(s + 1) = s\\,\\Gamma(s)"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "On [0, 1], bounds the integrand by x^(s−1), which converges near 0 because 1 − s < 1.",
          "On [1, ∞), notes that x^(s−1) e^(−x) ≤ C e^(−x/2) for some constant C, or another valid comparison, so the tail converges.",
          "Integrates by parts with u = xˢ and dv = e^(−x) dx, and checks that the boundary terms vanish. A sketch that gets the main ideas right is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how an infinitely long region can have a finite area, why 1/x² gives a finite area and 1/x does not, and how comparison settles convergence without computing anything.",

  glimpse: (
    <p>
      Improper integrals return in the chapter on series, where the integral test compares a sum with an integral. In
      Probability, a density must have total integral 1 over the whole line, and expectations are improper integrals. The
      bell curve&rsquo;s integral is computed in Multivariable Calculus and Vector Analysis by squaring it and switching to
      polar coordinates.
    </p>
  ),
};
