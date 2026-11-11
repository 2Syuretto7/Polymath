import { M, MD } from "@/components/Math";
import { Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { TrigPowerViz } from "@/components/viz/TrigPowerViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.7.2",
  minutes: 85,
  links: {
    revisits: ["m2.6.4", "m2.4.5"],
    foreshadows: ["m17.4.1", "m5.5.3"],
  },

  puzzle: (
    <>
      <p>
        The area of a quarter of the unit circle came down to <M>{"\\int_0^{\\pi/2} \\cos^2\\theta\\,d\\theta"}</M>, and
        there it stuck. No obvious function has derivative <M>{"\\cos^2\\theta"}</M>. Yet the answer must be{" "}
        <M>{"\\pi/4"}</M>.
      </p>
      <p>
        Odd and even powers of sine and cosine, products of them, tangents and secants: is there an orderly way through all
        of these, or is each one its own trick?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Two ideas handle almost everything. An odd power can spare one factor to be the du of a substitution. An even power
        can be rewritten with the double angle formulas, turning <M>{"\\cos^2\\theta"}</M> into a constant,{" "}
        <M>{"\\tfrac{1}{2}"}</M>, plus a wave, <M>{"\\tfrac{1}{2}\\cos 2\\theta"}</M>. The wave integrates to almost
        nothing, and over a whole number of half-periods to exactly nothing. Below, compare each integral with b times the
        average.
      </p>
      <TrigPowerViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the half-angle identities">
        <p>From <M>{"\\cos 2x = \\cos^2 x - \\sin^2 x"}</M> and <M>{"\\cos^2 x + \\sin^2 x = 1"}</M>,</p>
        <MD>{"\\cos^2 x = \\frac{1 + \\cos 2x}{2}, \\qquad \\sin^2 x = \\frac{1 - \\cos 2x}{2}."}</MD>
        <p>Hence</p>
        <MD>{"\\int \\cos^2 x\\,dx = \\frac{x}{2} + \\frac{\\sin 2x}{4} + C, \\qquad \\int \\sin^2 x\\,dx = \\frac{x}{2} - \\frac{\\sin 2x}{4} + C."}</MD>
      </Theorem>
      <p>
        So <M>{"\\int_0^{\\pi/2} \\cos^2\\theta\\,d\\theta = \\frac{\\pi}{4} + 0"}</M>, and the quarter circle has area{" "}
        <M>{"\\pi/4"}</M>, as it should.
      </p>

      <Example title="odd powers">
        <p>
          In <M>{"\\int \\sin^3 x\\,dx"}</M>, keep one sine for the substitution and turn the rest into cosines:
        </p>
        <MD>{"\\int \\sin^3 x\\,dx = \\int (1 - \\cos^2 x)\\sin x\\,dx = -\\int (1 - u^2)\\,du = -\\cos x + \\frac{\\cos^3 x}{3} + C,"}</MD>
        <p>
          with <M>{"u = \\cos x"}</M>, <M>{"du = -\\sin x\\,dx"}</M>. The same works for <M>{"\\int \\sin^m x \\cos^n x\\,dx"}</M>{" "}
          whenever m or n is odd. When both are even, use the half-angle identities, perhaps more than once.
        </p>
      </Example>

      <Example title="tangent and secant">
        <ul>
          <li>
            <M>{"\\int \\tan x\\,dx = -\\ln|\\cos x| + C = \\ln|\\sec x| + C"}</M>, by <M>{"u = \\cos x"}</M>.
          </li>
          <li>
            <M>{"\\int \\sec^2 x\\,dx = \\tan x + C"}</M>, since <M>{"(\\tan x)' = \\sec^2 x"}</M>.
          </li>
          <li>
            <M>{"\\int \\sec x\\,dx = \\ln|\\sec x + \\tan x| + C"}</M>, which can be checked by differentiating.
          </li>
        </ul>
        <p>
          The last formula has a history. Mercator&rsquo;s map of 1569 needed the integral of the secant to place its lines of
          latitude, and navigators computed it by adding up tables. In the 1640s it was noticed that these tables agreed
          with tables of logarithms of tangents. The fact was proved only some decades later, once calculus had arrived.
        </p>
      </Example>

      <Theorem title="trigonometric substitution">
        <p>For a constant <M>{"a > 0"}</M>, an identity removes the square root:</p>
        <ul>
          <li><M>{"\\sqrt{a^2 - x^2}"}</M>: put <M>{"x = a\\sin\\theta"}</M>, since <M>{"1 - \\sin^2\\theta = \\cos^2\\theta"}</M>;</li>
          <li><M>{"\\sqrt{a^2 + x^2}"}</M>: put <M>{"x = a\\tan\\theta"}</M>, since <M>{"1 + \\tan^2\\theta = \\sec^2\\theta"}</M>;</li>
          <li><M>{"\\sqrt{x^2 - a^2}"}</M>: put <M>{"x = a\\sec\\theta"}</M>, since <M>{"\\sec^2\\theta - 1 = \\tan^2\\theta"}</M>.</li>
        </ul>
      </Theorem>

      <Example title="an arctangent">
        <p>
          In <M>{"\\int \\frac{dx}{1 + x^2}"}</M>, put <M>{"x = \\tan\\theta"}</M>: then{" "}
          <M>{"dx = \\sec^2\\theta\\,d\\theta"}</M> and <M>{"1 + x^2 = \\sec^2\\theta"}</M>, so the integral is{" "}
          <M>{"\\int d\\theta = \\theta + C = \\arctan x + C"}</M>. This matches the derivative of the arctangent found in
          the chapter on differentiation, and gives a surprising formula: <M>{"\\int_0^1 \\frac{dx}{1 + x^2} = \\frac{\\pi}{4}"}</M>.
        </p>
      </Example>

      <Remark title="orthogonality">
        <p>
          The product formulas, such as <M>{"\\sin mx \\sin nx = \\tfrac{1}{2}[\\cos(m - n)x - \\cos(m + n)x]"}</M>, show
          that for whole numbers <M>{"m \\ne n"}</M>, <M>{"\\int_0^{2\\pi} \\sin mx \\sin nx\\,dx = 0"}</M>, while for{" "}
          <M>{"m = n \\ge 1"}</M> the integral is π. Waves of different frequencies cancel out over a full period. This
          fact is the foundation of Fourier series, which build almost any periodic function out of sines and cosines.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "half",
      rung: "check",
      prompt: (
        <p>
          Find <M>{"\\int_0^\\pi \\sin^2 x\\,dx"}</M>. (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: Math.PI / 2, tolerance: 0.001 },
    },
    {
      key: "which",
      rung: "check",
      prompt: (
        <p>
          For <M>{"\\int \\sin^2 x \\cos x\\,dx"}</M>, which substitution works?
        </p>
      ),
      answer: { kind: "choice", options: ["u = sin x", "u = cos x", "u = sin²x", "x = tan θ"], correct: [0] },
    },
    {
      key: "cube",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\int_0^{\\pi/2} \\sin^3 x\\,dx"}</M>. (Give a decimal or a fraction.)
        </p>
      ),
      answer: { kind: "numeric", value: 2 / 3, tolerance: 0.001 },
    },
    {
      key: "freq",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\int_0^{2\\pi} \\cos^2(3x)\\,dx"}</M>. (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: Math.PI, tolerance: 0.001 },
    },
    {
      key: "arctan",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\int_0^{\\sqrt{3}} \\frac{dx}{1 + x^2}"}</M>. (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: Math.PI / 3, tolerance: 0.001 },
    },
    {
      key: "orth",
      rung: "prove",
      prompt: (
        <p>
          Prove that <M>{"\\int_0^{2\\pi} \\sin mx \\sin nx\\,dx = 0"}</M> for whole numbers <M>{"m \\ne n"}</M>, both at
          least 1, and find its value when <M>{"m = n"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Uses the product formula to write the integrand as half the difference of cos(m − n)x and cos(m + n)x.",
          "Notes that the integral of cos kx over [0, 2π] is 0 for any non-zero whole number k.",
          "For m = n, gets the integral of (1 − cos 2nx)/2, which is π.",
        ],
      },
    },
    {
      key: "secant",
      rung: "stretch",
      prompt: (
        <p>
          Derive <M>{"\\int \\sec x\\,dx = \\ln|\\sec x + \\tan x| + C"}</M> by multiplying the integrand by{" "}
          <M>{"\\frac{\\sec x + \\tan x}{\\sec x + \\tan x}"}</M> and making a substitution. Then explain why the trick
          works, by differentiating <M>{"\\sec x + \\tan x"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes the integrand as (sec²x + sec x tan x)/(sec x + tan x).",
          "Puts u = sec x + tan x and notes that du = (sec x tan x + sec²x) dx, which is exactly the numerator.",
          "Concludes the integral is ln|u| + C. Any clear explanation of why the numerator is the derivative of the denominator earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how to integrate powers of sine and cosine, odd powers by substitution and even powers by the half-angle identities, and why waves integrate to nothing over a full period.",

  glimpse: (
    <p>
      Orthogonality of sines and cosines is the starting point of Fourier series, which Partial Differential Equations
      uses to solve the heat and wave equations. In Multivariable Calculus and Vector Analysis, polar coordinates make many
      of these integrals unnecessary: the area of a disc is found without any trigonometric substitution.
    </p>
  ),
};
