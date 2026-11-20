import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { PoissonSumViz } from "@/components/viz/PoissonSumViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m34.2.3",
  minutes: 90,
  links: {
    revisits: ["m34.2.2", "m23.6.2", "m23.4.1"],
    foreshadows: ["m34.4.3", "m33.3.1", "m33.1.1"],
  },

  puzzle: (
    <>
      <p>
        Physicists happily write that the Fourier transform of the constant 1 is 2π times a spike at 0, and that the
        transform of a spike is a constant. Neither object is a function, and the integral defining the transform of 1
        diverges. Is there a way to make these statements true rather than merely suggestive?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Vary the width of a Gaussian, and compare its samples at the integers with samples of its transform.</p>
      <PoissonSumViz />
    </>
  ),

  theory: (
    <>
      <Definition title="tempered distributions">
        <p>
          A <strong>tempered distribution</strong> is a continuous linear functional T on{" "}
          <M>{"\\mathcal S(\\mathbb R)"}</M>, written <M>{"\\varphi \\mapsto \\langle T, \\varphi\\rangle"}</M>. Their
          space is <M>{"\\mathcal S'(\\mathbb R)"}</M>. Every function f with{" "}
          <M>{"|f(x)| \\le C(1 + |x|)^N"}</M> defines one by <M>{"\\langle f, \\varphi\\rangle = \\int f\\varphi"}</M>,
          as does every <M>{"L^p"}</M> function; so does the point mass{" "}
          <M>{"\\langle \\delta, \\varphi\\rangle = \\varphi(0)"}</M>.
        </p>
      </Definition>

      <Definition title="operations by duality">
        <p>
          Each operation is defined so that it agrees with the usual one on functions:{" "}
          <M>{"\\langle T', \\varphi\\rangle = -\\langle T, \\varphi'\\rangle"}</M> and{" "}
          <M>{"\\langle \\hat T, \\varphi\\rangle = \\langle T, \\hat\\varphi\\rangle"}</M>. The second is forced by the
          identity <M>{"\\int \\hat f g = \\int f \\hat g"}</M> for Schwartz functions.
        </p>
      </Definition>

      <Theorem title="the transform on S′">
        <p>
          The Fourier transform is a continuous bijection of <M>{"\\mathcal S'"}</M> onto itself, extending the
          transform on <M>{"\\mathcal S"}</M> and on <M>{"L^2"}</M>. In particular{" "}
          <M>{"\\hat\\delta = 1"}</M>, <M>{"\\hat 1 = 2\\pi\\delta"}</M> and{" "}
          <M>{"\\widehat{\\delta'} = i\\xi"}</M>.
        </p>
      </Theorem>

      <Example title="Poisson summation">
        <p>
          The Dirac comb <M>{"\\text{Ш} = \\sum_{n} \\delta_n"}</M> is tempered, and{" "}
          <M>{"\\hat{\\text{Ш}} = 2\\pi \\sum_k \\delta_{2\\pi k}"}</M>. Pairing with a Schwartz function gives the{" "}
          <strong>Poisson summation formula</strong> <M>{"\\sum_n f(n) = \\sum_k \\hat f(2\\pi k)"}</M>. For a Gaussian
          it yields the transformation law of the theta function, which Riemann used to prove the functional equation of
          the zeta function.
        </p>
      </Example>

      <Remark title="limits">
        <p>
          Not everything is tempered: <M>{"e^x"}</M> grows too fast to pair with every Schwartz function. Distributions
          in general need only test functions of compact support, but then the Fourier transform is no longer available.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>How is the Fourier transform of a tempered distribution T defined?</p>,
      answer: { kind: "choice", options: ["By pairing T with the transform of each test function", "By integrating T against exp(−ixξ)", "Only when T is a function", "As a limit of Fourier series"], correct: [0] },
    },
    {
      key: "delta",
      rung: "check",
      prompt: <p>What is the Fourier transform of δ?</p>,
      answer: { kind: "choice", options: ["The constant 1", "δ itself", "2πδ", "0"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set s = 1. What is the sum of f(n), to three decimal places?</p>,
      answer: { kind: "numeric", value: 2.507, tolerance: 0.001 },
    },
    {
      key: "one",
      rung: "apply",
      prompt: <p>What is the Fourier transform of the constant function 1?</p>,
      answer: { kind: "choice", options: ["2πδ", "1", "δ′", "It does not exist"], correct: [0] },
    },
    {
      key: "exp",
      rung: "apply",
      prompt: <p>Which of these does not define a tempered distribution?</p>,
      answer: { kind: "choice", options: ["The function exp(x)", "The function x³", "The function sin x", "The point mass δ"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the Fourier transform of δ is the constant 1.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the transform of δ applied to φ as δ applied to φ̂, which is φ̂(0).",
          "Computes φ̂(0) as the integral of φ.",
          "Recognises the integral of φ as the pairing of the constant 1 with φ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Apply Poisson summation to exp(−πtx²) to relate the sum of exp(−πtn²) to the same sum with t replaced by 1/t.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes the transform of exp(−πtx²) at 2πk as t to the power −½ times exp(−πk²/t).",
          "Concludes the sum of exp(−πtn²) equals that factor times the sum of exp(−πk²/t).",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The transform behaves perfectly on L², where it preserves energy. On other Lᵖ spaces its behaviour is subtler, and
        a general method lets bounds at two endpoints be interpolated to everything in between.
      </p>
      <p>Next, Riesz–Thorin.</p>
    </>
  ),
};
