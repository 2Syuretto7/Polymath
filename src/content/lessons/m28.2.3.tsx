import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { GrowthOrderViz } from "@/components/viz/GrowthOrderViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m28.2.3",
  minutes: 90,
  links: {
    revisits: ["m28.2.2", "m13.3.1", "m13.7.1"],
    foreshadows: ["m28.3.1", "m28.3.2", "m28.4.4"],
  },

  puzzle: (
    <>
      <p>
        eᶻ has no zeros, sin z has zeros spaced π apart, and cos √z has zeros that thin out like squares. Their rates of
        growth differ in a matching way. Is there a law connecting how fast an entire function grows with how many zeros it
        can have?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a function and a radius, and read off the estimated order of growth.</p>
      <GrowthOrderViz />
    </>
  ),

  theory: (
    <>
      <Definition title="order of growth">
        <p>
          Let <M>{"M(r) = \\max_{|z| = r}|f(z)|"}</M>. The <strong>order</strong> of an entire function f is{" "}
          <M>{"\\rho = \\limsup_{r\\to\\infty}\\frac{\\log\\log M(r)}{\\log r}"}</M>, so that{" "}
          <M>{"|f(z)| \\le \\exp(|z|^{\\rho+\\varepsilon})"}</M> for large |z|. Polynomials have order 0, eᶻ and sin z order 1,
          cos √z order ½, and <M>{"e^{z^2}"}</M> order 2.
        </p>
      </Definition>

      <Theorem title="Jensen’s formula">
        <p>
          If f(0) ≠ 0 and <M>{"a_1, \\dots, a_k"}</M> are the zeros in |z| &lt; r, then{" "}
          <M>{"\\log|f(0)| = \\sum_j \\log\\frac{|a_j|}{r} + \\frac1{2\\pi}\\int_0^{2\\pi}\\log|f(re^{i\\theta})|\\,d\\theta"}</M>.
          It follows that the number of zeros in |z| ≤ r is <M>{"O(r^{\\rho+\\varepsilon})"}</M>, so{" "}
          <M>{"\\sum |a_n|^{-s}"}</M> converges for every s &gt; ρ.
        </p>
      </Theorem>

      <Theorem title="Hadamard factorisation (1893)">
        <p>
          If f has finite order ρ, then <M>{"f(z) = z^m e^{P(z)}\\prod_n E_p(z/a_n)"}</M> with p = ⌊ρ⌋ and P a polynomial of
          degree at most ρ. The unknown factor in Weierstrass&rsquo;s theorem is pinned down to finitely many constants.
        </p>
      </Theorem>

      <Example title="ξ and the zeros of ζ">
        <p>
          Riemann&rsquo;s ξ(s) has order 1, so <M>{"\\xi(s) = e^{A + Bs}\\prod_\\rho(1 - s/\\rho)e^{s/\\rho}"}</M>. Hadamard
          proved this in 1893 to justify Riemann&rsquo;s formulas, and three years later used it in his proof of the prime
          number theorem. It also shows ξ has infinitely many zeros: otherwise ξ would be a polynomial times{" "}
          <M>{"e^{A + Bs}"}</M>, which grows too slowly along the real axis.
        </p>
      </Example>

      <Remark title="consequences">
        <p>
          An entire function of non-integer order has infinitely many zeros. An entire function of finite order that omits
          two values is constant, a special case of Picard&rsquo;s theorem that follows quickly from Hadamard: f − a = e
          to the P(z), and P must be constant.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "order",
      rung: "check",
      prompt: <p>What does it mean for an entire function to have order ρ?</p>,
      answer: { kind: "choice", options: ["Its maximum modulus grows roughly like exp(r to the ρ)", "It has exactly ρ zeros", "It is a polynomial of degree ρ", "Its Taylor coefficients are bounded by ρ"], correct: [0] },
    },
    {
      key: "jensen",
      rung: "check",
      prompt: <p>What does Jensen&rsquo;s formula relate?</p>,
      answer: { kind: "choice", options: ["The zeros of f in a disc and the average of log |f| on its boundary", "The poles and residues of f", "The derivative of f and its integral", "The real and imaginary parts of f"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose cos √z. What order does it suggest, to one decimal place?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.05 },
    },
    {
      key: "cube",
      rung: "apply",
      prompt: <p>What is the order of e to the z³?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "nozero",
      rung: "apply",
      prompt: <p>An entire function of order ½ has no zeros. What must it be?</p>,
      answer: { kind: "choice", options: ["A constant", "eᶻ times a constant", "cos √z", "It cannot exist"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that an entire function of finite order that is not an integer has infinitely many zeros.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes there are finitely many zeros and applies Hadamard to write f = Q(z) e to the P(z), with Q a polynomial.",
          "Notes that such a function has order equal to the degree of P, an integer, or 0 if P is constant.",
          "Concludes the contradiction with non-integer order.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why is it useful to know that ξ(s) has order 1?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that Hadamard then gives a product over the zeros of ξ with factors (1 − s/ρ) e to the s/ρ.",
          "Explains that taking logarithmic derivatives links ζ′/ζ to a sum over zeros, the basis of the explicit formula.",
          "Mentions that it forces infinitely many zeros. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Some meromorphic functions repeat themselves in two independent directions at once. Their study begins with the
        lattice of periods.
      </p>
      <p>Next, lattices and periodicity.</p>
    </>
  ),
};
