import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { LargeSieveViz } from "@/components/viz/LargeSieveViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m35.5.3",
  minutes: 90,
  links: {
    revisits: ["m35.5.2", "m35.3.3", "m35.1.2"],
    foreshadows: ["m29.1.1", "m29.1.2", "m29.2.2"],
  },

  puzzle: (
    <>
      <p>
        The perfect squares avoid about half the residue classes modulo every prime: a square is never a non-residue. Such
        a set should be thin, and it is, with only √N members below N. Is there a general principle that turns
        &lsquo;avoids many residue classes&rsquo; into &lsquo;is small&rsquo;?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a set and a bound Q, and compare the sum of |S|² at the Farey fractions with the large sieve bound.</p>
      <LargeSieveViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the large sieve inequality">
        <p>
          For complex numbers <M>{"a_n"}</M> with M &lt; n ≤ M + N, let <M>{"S(\\alpha) = \\sum a_n e(n\\alpha)"}</M>, where{" "}
          <M>{"e(x) = e^{2\\pi i x}"}</M>. Then{" "}
          <M>{"\\sum_{q \\le Q}\\ \\sum_{\\substack{a \\bmod q \\\\ (a, q) = 1}} |S(a/q)|^2 \\le (N + Q^2)\\sum |a_n|^2"}</M>.
          Montgomery and Vaughan, and Selberg, sharpened the constant to N − 1 + Q².
        </p>
      </Theorem>

      <Remark title="why it holds">
        <p>
          The fractions a/q with q ≤ Q are spaced at least <M>{"1/Q^2"}</M> apart. An exponential sum of length N cannot be
          large at many well-separated points at once, roughly because <M>{"|S|^2"}</M> has average{" "}
          <M>{"\\sum|a_n|^2"}</M> over [0, 1] and cannot vary much over intervals shorter than 1/N.
        </p>
      </Remark>

      <Theorem title="the arithmetic large sieve">
        <p>
          If a set A of integers in an interval of length N avoids ω(p) residue classes mod p for every prime p ≤ Q, then{" "}
          <M>{"|A| \\le \\frac{N + Q^2}{L}"}</M>, where{" "}
          <M>{"L = \\sum_{q \\le Q}\\mu^2(q)\\prod_{p \\mid q}\\frac{\\omega(p)}{p - \\omega(p)}"}</M>. For the squares, with
          ω(p) about p/2, this gives a bound of order √N, up to logarithms; Gallagher used the same idea.
        </p>
      </Theorem>

      <Example title="Bombieri–Vinogradov (1965)">
        <p>
          The large sieve controls primes in progressions on average over the modulus:{" "}
          <M>{"\\sum_{q \\le Q}\\max_{(a,q)=1}\\Big|\\pi(x; q, a) - \\frac{\\operatorname{li}(x)}{\\varphi(q)}\\Big| \\ll \\frac{x}{(\\log x)^A}"}</M>{" "}
          for <M>{"Q = x^{1/2}/(\\log x)^B"}</M>. For many purposes this is as good as the generalised Riemann hypothesis, and
          it was a key input to Chen&rsquo;s theorem and to bounded gaps between primes.
        </p>
      </Example>

      <Remark title="Brun–Titchmarsh">
        <p>
          A simpler consequence is the upper bound <M>{"\\pi(x; q, a) \\le \\frac{2x}{\\varphi(q)\\log(x/q)}"}</M>, valid for
          every q &lt; x with no exceptions, which is often all that is needed.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "what",
      rung: "check",
      prompt: <p>What does the large sieve inequality bound?</p>,
      answer: { kind: "choice", options: ["The total of |S(a/q)|² over fractions a/q with q ≤ Q", "The largest prime below N", "The number of zeros of ζ", "The error in Legendre’s formula"], correct: [0] },
    },
    {
      key: "bv",
      rung: "check",
      prompt: <p>The Bombieri–Vinogradov theorem is often described as what?</p>,
      answer: { kind: "choice", options: ["The generalised Riemann hypothesis on average", "A proof of the twin prime conjecture", "The prime number theorem for short intervals", "A lower bound for L(1, χ)"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set Q = 10. How many Farey fractions are there?</p>,
      answer: { kind: "numeric", value: 32, tolerance: 0 },
    },
    {
      key: "five",
      rung: "apply",
      prompt: <p>How many fractions a/q in [0, 1) with q ≤ 5 and gcd(a, q) = 1 are there?</p>,
      answer: { kind: "numeric", value: 10, tolerance: 0 },
    },
    {
      key: "bt",
      rung: "apply",
      prompt: <p>Which bound is the Brun–Titchmarsh inequality?</p>,
      answer: { kind: "choice", options: ["π(x; q, a) ≤ 2x/(φ(q) log(x/q))", "π(x) ≥ x/(2 log x)", "π(x; q, a) ~ li(x)/φ(q)", "π(2x) − π(x) ≥ 1"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that two different fractions a/q and a′/q′ with q, q′ ≤ Q differ by at least 1/Q².</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the difference as |aq′ − a′q|/(qq′).",
          "Notes the numerator is a non-zero integer, so at least 1.",
          "Uses qq′ ≤ Q² to conclude the difference is at least 1/Q².",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain informally why a set avoiding many residue classes must make |S(a/q)| large at many fractions.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that equidistribution mod q makes the sums over residue classes balance, so S(a/q) is small.",
          "Explains that avoiding classes unbalances the distribution, which shows up as large values of S(a/q) for some a.",
          "Connects this with the inequality to bound the size of the set. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        This completes the course. Analytic methods treat primes as a whole; algebraic number theory studies how primes
        break apart in larger number systems, such as the Gaussian integers, and why unique factorisation can fail there.
      </p>
      <p>Next, the course on algebraic number theory begins with rings of integers.</p>
    </>
  ),
};
