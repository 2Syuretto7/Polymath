import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { SineProductViz } from "@/components/viz/SineProductViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m28.2.1",
  minutes: 90,
  links: {
    revisits: ["m28.1.2", "m13.1.4", "m13.4.2"],
    foreshadows: ["m28.2.2", "m28.2.3", "m28.3.2"],
  },

  puzzle: (
    <>
      <p>
        A polynomial with roots 1, 2 and 3 is c(z − 1)(z − 2)(z − 3). Euler boldly treated sin πx as a polynomial with
        roots at every integer and wrote it as an infinite product, then read off that 1 + 1/4 + 1/9 + ⋯ = π²/6. When is
        such reasoning legitimate, and can any sequence of points be the zeros of an entire function?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Add factors one at a time, and watch the partial products approach sin πx.</p>
      <SineProductViz />
    </>
  ),

  theory: (
    <>
      <Definition title="infinite products">
        <p>
          A product <M>{"\\prod (1 + u_n(z))"}</M> of holomorphic functions converges absolutely and locally uniformly, to a
          holomorphic function, if <M>{"\\sum |u_n(z)|"}</M> converges locally uniformly. Its zeros are then exactly the
          zeros of the factors.
        </p>
      </Definition>

      <Definition title="elementary factors">
        <p>
          The naive product <M>{"\\prod(1 - z/a_n)"}</M> converges only if <M>{"\\sum 1/|a_n|"}</M> does. Weierstrass
          introduced <M>{"E_0(z) = 1 - z"}</M> and{" "}
          <M>{"E_p(z) = (1 - z)\\exp\\big(z + \\tfrac{z^2}{2} + \\cdots + \\tfrac{z^p}{p}\\big)"}</M>. The exponential cancels the
          start of the Taylor series of log(1 − z), so <M>{"|1 - E_p(z)| \\le |z|^{p+1}"}</M> for |z| ≤ 1.
        </p>
      </Definition>

      <Theorem title="Weierstrass factorisation (1876)">
        <p>
          For any sequence <M>{"a_n \\to \\infty"}</M> of non-zero complex numbers,{" "}
          <M>{"\\prod_n E_{n}(z/a_n)"}</M> converges to an entire function with zeros exactly at the <M>{"a_n"}</M>, with
          multiplicity. Every entire function f has the form <M>{"z^m e^{g(z)}\\prod E_{p_n}(z/a_n)"}</M>, with g entire. In
          particular every meromorphic function on ℂ is a quotient of two entire functions.
        </p>
      </Theorem>

      <Example title="sine and Gamma">
        <p>
          Here <M>{"\\sum 1/n^2"}</M> converges, so pairing the factors at ±n needs no exponentials:{" "}
          <M>{"\\sin \\pi z = \\pi z\\prod_{n \\ge 1}\\big(1 - z^2/n^2\\big)"}</M>. Similarly{" "}
          <M>{"\\frac{1}{\\Gamma(z)} = z e^{\\gamma z}\\prod_{n \\ge 1}(1 + z/n)e^{-z/n}"}</M>, with zeros at 0, −1, −2, …
        </p>
      </Example>

      <Remark title="Euler’s argument made honest">
        <p>
          Comparing the coefficient of <M>{"z^3"}</M> in the product, <M>{"-\\pi\\sum 1/n^2"}</M>, with that in{" "}
          <M>{"\\sin\\pi z = \\pi z - \\pi^3 z^3/6 + \\cdots"}</M> gives <M>{"\\zeta(2) = \\pi^2/6"}</M>. The step Euler could
          not justify was that the product has no extra factor <M>{"e^{g(z)}"}</M>; that needs the growth estimates of
          Hadamard&rsquo;s theorem, or a direct argument.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "why",
      rung: "check",
      prompt: <p>Why does Weierstrass multiply each factor 1 − z/aₙ by an exponential?</p>,
      answer: { kind: "choice", options: ["To make the infinite product converge", "To add new zeros", "To make the function bounded", "To remove the zeros"], correct: [0] },
    },
    {
      key: "quot",
      rung: "check",
      prompt: <p>Which statement follows from the Weierstrass factorisation theorem?</p>,
      answer: { kind: "choice", options: ["Every meromorphic function on ℂ is a quotient of two entire functions", "Every entire function is a polynomial", "Every entire function has infinitely many zeros", "Every entire function is bounded"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, the product of (1 − 1/(4n²)) tends to 2/π. What is this limit, to three decimal places?</p>,
      answer: { kind: "numeric", value: 0.637, tolerance: 0.001 },
    },
    {
      key: "e1",
      rung: "apply",
      prompt: <p>What is the elementary factor E₁(z)?</p>,
      answer: { kind: "choice", options: ["(1 − z) eᶻ", "1 − z", "(1 − z) e to the z²/2", "eᶻ − 1"], correct: [0] },
    },
    {
      key: "zeta2",
      rung: "apply",
      prompt: <p>Using the sine product, compute 1 + 1/4 + 1/9 + ⋯ = π²/6 to three decimal places.</p>,
      answer: { kind: "numeric", value: 1.645, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Assuming sin πz = πz Π (1 − z²/n²), deduce that the sum of 1/n² is π²/6.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Expands the product and finds the coefficient of z³ is −π times the sum of 1/n².",
          "Expands sin πz as πz − π³z³/6 + ⋯.",
          "Equates the two coefficients of z³ to get the sum π²/6.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why can the product for sin πz be written without exponential convergence factors, while 1/Γ needs them?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that pairing the zeros at n and −n gives factors 1 − z²/n², and the sum of 1/n² converges.",
          "Notes that the zeros of 1/Γ lie only at 0, −1, −2, …, so no pairing is possible and the sum of 1/n diverges.",
          "Concludes that factors with e to the −z/n are needed there. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Zeros can be prescribed at will. What about poles? A meromorphic function can be built with any poles and any
        principal parts, by a similar trick of subtracting what would spoil convergence.
      </p>
      <p>Next, Mittag-Leffler.</p>
    </>
  ),
};
