import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { LiErrorViz } from "@/components/viz/LiErrorViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m35.2.3",
  minutes: 90,
  links: {
    revisits: ["m35.2.2", "m13.7.3", "m35.1.1"],
    foreshadows: ["m35.4.3", "m35.3.3", "m35.5.3"],
  },

  puzzle: (
    <>
      <p>
        Up to ten lakh there are 78,498 primes. The estimate x/log x misses by about 6,100, while Gauss&rsquo;s logarithmic
        integral misses by about 130. Why is one approximation so much better, and how small can the error be made?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose x, and compare π(x) with x/log x and with li(x).</p>
      <LiErrorViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the logarithmic integral">
        <p>
          <M>{"\\operatorname{li}(x) = \\int_2^x \\frac{dt}{\\log t}"}</M> plus the constant li(2) ≈ 1.045. It is the count
          predicted if each integer t is prime with probability 1/log t. Repeated integration by parts gives{" "}
          <M>{"\\operatorname{li}(x) = \\frac{x}{\\log x} + \\frac{x}{(\\log x)^2} + \\frac{2x}{(\\log x)^3} + \\cdots"}</M>, so
          x/log x drops a term of size <M>{"x/(\\log x)^2"}</M>, which is why its error is so large.
        </p>
      </Definition>

      <Theorem title="the explicit formula">
        <p>
          For x &gt; 1 not a prime power,{" "}
          <M>{"\\psi(x) = x - \\sum_\\rho \\frac{x^\\rho}{\\rho} - \\log 2\\pi - \\tfrac12 \\log(1 - x^{-2})"}</M>, the sum
          running over the non-trivial zeros ρ of ζ, taken in symmetric pairs. Each zero ρ = β + iγ contributes an
          oscillation of size about <M>{"x^\\beta/|\\rho|"}</M>. The primes are a sum of waves, one for each zero.
        </p>
      </Theorem>

      <Theorem title="de la Vallée Poussin (1899)">
        <p>
          ζ has no zeros with <M>{"\\sigma > 1 - c/\\log(|t| + 2)"}</M> for some c &gt; 0. Consequently{" "}
          <M>{"\\pi(x) = \\operatorname{li}(x) + O\\big(x\\, e^{-c'\\sqrt{\\log x}}\\big)"}</M>. Vinogradov and Korobov
          widened the zero-free region in 1958, and that is still essentially the best known.
        </p>
      </Theorem>

      <Theorem title="von Koch (1901)">
        <p>
          The Riemann hypothesis, that every non-trivial zero has real part ½, holds if and only if{" "}
          <M>{"\\pi(x) = \\operatorname{li}(x) + O(\\sqrt{x}\\log x)"}</M>. The error term is a direct measurement of where
          the zeros lie.
        </p>
      </Theorem>

      <Remark title="Littlewood’s surprise">
        <p>
          In every table ever computed, π(x) &lt; li(x). Littlewood proved in 1914 that the difference nevertheless changes
          sign infinitely often. Skewes showed the first change occurs below an astronomically large bound; it is now
          known to lie somewhere beyond <M>{"10^{19}"}</M> and below about <M>{"1.4 \\times 10^{316}"}</M>.
        </p>
      </Remark>

      <Example title="the visualisation">
        <p>
          The blue curve li(x)/π(x) is already within 0.2 per cent of 1 at x = 10⁶. The red curve x/(π(x) log x) is about 8 per
          cent low and approaches 1 only like 1 − 1/log x.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "better",
      rung: "check",
      prompt: <p>Which approximation to π(x) has the smaller error for large x?</p>,
      answer: { kind: "choice", options: ["li(x)", "x/log x", "They are equally good", "Neither tends to π(x)"], correct: [0] },
    },
    {
      key: "zeros",
      rung: "check",
      prompt: <p>According to the explicit formula, what controls the size of the error in the prime number theorem?</p>,
      answer: { kind: "choice", options: ["The real parts of the zeros of ζ", "The number of twin primes", "The value ζ(2)", "The constant li(2)"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set x = 10,00,000. What is π(x)?</p>,
      answer: { kind: "numeric", value: 78498, tolerance: 0 },
    },
    {
      key: "second",
      rung: "apply",
      prompt: <p>Compute x/(log x)², the second term in the expansion of li(x), at x = 10⁶, to the nearest whole number.</p>,
      answer: { kind: "numeric", value: 5239, tolerance: 2 },
    },
    {
      key: "rh",
      rung: "apply",
      prompt: <p>If the Riemann hypothesis holds, what is the real part β of every non-trivial zero?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show by integration by parts that ∫ from 2 to x of dt/log t equals x/log x − 2/log 2 + ∫ from 2 to x of dt/(log t)².</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes u = 1/log t and dv = dt, so v = t.",
          "Computes du = −dt/(t (log t)²), so −∫ v du = ∫ dt/(log t)².",
          "Evaluates the boundary term t/log t from 2 to x and assembles the identity.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why would a zero of ζ with real part 0.8 rule out an error term of size √x log x?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the explicit formula: the zero contributes a wave of size about x to the power 0.8.",
          "Argues that such a wave cannot be cancelled by the others for all large x, so the error is at least about x to the 0.8 − ε infinitely often.",
          "Compares this with √x log x, which is much smaller. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Dirichlet asked a finer question: are primes ending in 1, 3, 7 and 9 equally common? Answering it needs a way to
        pick out one residue class at a time.
      </p>
      <p>Next, Dirichlet characters.</p>
    </>
  ),
};
