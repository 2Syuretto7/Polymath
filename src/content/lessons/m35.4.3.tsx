import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { HardyZViz } from "@/components/viz/HardyZViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m35.4.3",
  minutes: 90,
  links: {
    revisits: ["m35.4.2", "m35.2.3", "m13.5.1"],
    foreshadows: ["m35.5.1", "m28.2.3", "m35.5.3"],
  },

  puzzle: (
    <>
      <p>
        More than ten trillion zeros of ζ have been computed, and every one has real part exactly ½. No one can prove that
        the next one will. How can a computer check that a zero lies exactly on a line, when it can only compute
        approximately?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a height T, and compare the sign changes of Hardy&rsquo;s Z function with the predicted number of zeros.</p>
      <HardyZViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Riemann hypothesis">
        <p>
          Every zero of ζ(s) with 0 &lt; Re s &lt; 1 has real part ½. Equivalently, every zero of ξ lies on the critical
          line. The generalised Riemann hypothesis makes the same claim for every Dirichlet L-function.
        </p>
      </Definition>

      <Theorem title="counting zeros">
        <p>
          Let N(T) be the number of zeros with 0 &lt; Im s ≤ T. Applying the argument principle to ξ around a rectangle
          gives the Riemann–von Mangoldt formula{" "}
          <M>{"N(T) = \\frac{T}{2\\pi}\\log\\frac{T}{2\\pi e} + \\frac78 + O(\\log T)"}</M>.
        </p>
      </Theorem>

      <Definition title="Hardy’s Z function">
        <p>
          Let <M>{"\\vartheta(t) = \\arg\\Gamma(\\tfrac14 + \\tfrac{it}2) - \\tfrac t2 \\log\\pi"}</M> and{" "}
          <M>{"Z(t) = e^{i\\vartheta(t)}\\zeta(\\tfrac12 + it)"}</M>. The functional equation makes Z real for real t, and{" "}
          <M>{"|Z(t)| = |\\zeta(\\tfrac12 + it)|"}</M>. A sign change of Z, which survives small numerical errors, proves a zero
          on the line. If the sign changes up to T match N(T), computed separately by the argument principle, there are no
          zeros off the line below T.
        </p>
      </Definition>

      <Theorem title="what is known">
        <p>
          Hardy proved in 1914 that infinitely many zeros lie on the line. Selberg showed a positive proportion do, and
          Conrey (1989) more than two fifths. The hypothesis has been verified for all zeros up to height about{" "}
          <M>{"3 \\times 10^{12}"}</M>.
        </p>
      </Theorem>

      <Example title="equivalent statements">
        <p>
          The Riemann hypothesis holds if and only if <M>{"\\pi(x) = \\operatorname{li}(x) + O(\\sqrt x \\log x)"}</M>; if
          and only if the Mertens function <M>{"\\sum_{n \\le x}\\mu(n)"}</M> is <M>{"O(x^{1/2+\\varepsilon})"}</M> for every
          ε &gt; 0; and, by Robin&rsquo;s theorem, if and only if <M>{"\\sigma(n) < e^\\gamma n \\log\\log n"}</M> for every n
          &gt; 5040.
        </p>
      </Example>

      <Remark title="random matrices">
        <p>
          Montgomery found in 1973 that the spacings between zeros on the line appear to follow the same statistics as the
          eigenvalues of large random Hermitian matrices, and Odlyzko&rsquo;s computations confirmed this to remarkable
          precision. It hints, without yet proving anything, that the zeros may be eigenvalues of some hidden operator.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "rh",
      rung: "check",
      prompt: <p>What does the Riemann hypothesis assert?</p>,
      answer: { kind: "choice", options: ["Every non-trivial zero of ζ has real part ½", "ζ has no zeros at all", "Every zero of ζ is a negative even integer", "ζ(s) ≠ 0 on Re s = 1"], correct: [0] },
    },
    {
      key: "hardy",
      rung: "check",
      prompt: <p>What did Hardy prove in 1914?</p>,
      answer: { kind: "choice", options: ["Infinitely many zeros lie on the critical line", "All zeros lie on the critical line", "No zeros lie on the critical line", "There are finitely many zeros"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set T = 50. How many sign changes of Z are there?</p>,
      answer: { kind: "numeric", value: 10, tolerance: 0 },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>Use the main terms (T/2π) log(T/2πe) + 7/8 to estimate the number of zeros up to height 100, to the nearest whole number.</p>,
      answer: { kind: "numeric", value: 29, tolerance: 0.5 },
    },
    {
      key: "robin",
      rung: "apply",
      prompt: <p>Which inequality did Robin show to be equivalent to the Riemann hypothesis?</p>,
      answer: { kind: "choice", options: ["σ(n) < e to the γ times n log log n for all n > 5040", "π(x) < li(x) for all x", "ζ(s) > 0 for real s > 1", "φ(n) > n/2 for all n"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if ρ is a zero of ξ, then so are 1 − ρ, the conjugate of ρ, and 1 minus the conjugate of ρ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses ξ(s) = ξ(1 − s) to get ξ(1 − ρ) = 0.",
          "Uses that ξ is real on the real axis, so ξ(conj s) = conj ξ(s) by the reflection principle, giving a zero at conj ρ.",
          "Combines the two to get the fourth zero.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why can sign changes of Z prove that zeros lie on the line, but not on their own rule out zeros off it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that a sign change of a real continuous function forces a zero exactly on the line, despite rounding.",
          "Notes that zeros off the line are invisible to Z, so a separate count of all zeros up to T is needed.",
          "Explains that matching the two counts closes the gap. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Complex analysis has told us a great deal about primes in bulk. For finer questions, such as twin primes, a cruder
        and older idea returns: crossing out multiples.
      </p>
      <p>Next, the sieve of Eratosthenes-Legendre.</p>
    </>
  ),
};
