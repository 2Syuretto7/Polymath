import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { LebesgueConstViz } from "@/components/viz/LebesgueConstViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m34.1.1",
  minutes: 90,
  links: {
    revisits: ["m23.3.2", "m23.2.3", "m6.8.1"],
    foreshadows: ["m34.1.2", "m34.1.3", "m34.4.3"],
  },

  puzzle: (
    <>
      <p>
        Fourier claimed in 1807 that every periodic function is the sum of its Fourier series. For smooth functions he was
        right. In 1873 Paul du Bois-Reymond found a continuous function whose Fourier series diverges at a point. What
        goes wrong, and how far can it go wrong?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Vary n, and watch the Dirichlet kernel and the size of its average absolute value.</p>
      <LebesgueConstViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Fourier coefficients and partial sums">
        <p>
          For f integrable on the circle <M>{"\\mathbb T = \\mathbb R / 2\\pi\\mathbb Z"}</M>, put{" "}
          <M>{"\\hat f(n) = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} f(x) e^{-inx}\\, dx"}</M> and{" "}
          <M>{"S_N f(x) = \\sum_{|n| \\le N} \\hat f(n) e^{inx}"}</M>. Then{" "}
          <M>{"S_N f = D_N * f"}</M>, the convolution{" "}
          <M>{"\\frac{1}{2\\pi}\\int D_N(y) f(x - y)\\, dy"}</M> with the <strong>Dirichlet kernel</strong>{" "}
          <M>{"D_N(x) = \\sum_{|n| \\le N} e^{inx} = \\dfrac{\\sin (N + \\tfrac12)x}{\\sin \\tfrac12 x}"}</M>.
        </p>
      </Definition>

      <Theorem title="convergence for nice functions">
        <p>
          The <strong>Riemann–Lebesgue lemma</strong>: <M>{"\\hat f(n) \\to 0"}</M> as <M>{"|n| \\to \\infty"}</M> for
          every integrable f. From it, <strong>Dini&rsquo;s test</strong>: if{" "}
          <M>{"\\int |f(x + t) + f(x - t) - 2s| / |t|\\, dt < \\infty"}</M> near t = 0, then{" "}
          <M>{"S_N f(x) \\to s"}</M>. In particular, at a jump of a piecewise smooth function the series converges to the
          average of the two one-sided limits. Convergence at x depends only on f near x: the{" "}
          <strong>localisation principle</strong>.
        </p>
      </Theorem>

      <Theorem title="divergence">
        <p>
          The <strong>Lebesgue constants</strong>{" "}
          <M>{"L_N = \\frac{1}{2\\pi}\\int |D_N| = \\frac{4}{\\pi^2} \\log N + O(1)"}</M> are the norms of the maps{" "}
          <M>{"f \\mapsto S_N f(0)"}</M> on C(𝕋). Since they are unbounded, the uniform boundedness principle gives a
          continuous f with <M>{"\\sup_N |S_N f(0)| = \\infty"}</M>.
        </p>
      </Theorem>

      <Remark title="the end of the story">
        <p>
          Kolmogorov found in 1926 an integrable function whose Fourier series diverges everywhere. Lennart Carleson proved
          in 1966 that the Fourier series of every square-integrable function converges almost everywhere, a theorem long
          thought to be false.
        </p>
      </Remark>

      <Example title="the square wave">
        <p>
          For f = −1 on (−π, 0) and 1 on (0, π), Dini&rsquo;s test gives convergence to f(x) away from the jumps and to 0
          at them. The convergence is not uniform: near each jump the partial sums overshoot by about 9% of the jump, the
          Gibbs phenomenon.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "kern",
      rung: "check",
      prompt: <p>The partial sum Sₙf is the convolution of f with which kernel?</p>,
      answer: { kind: "choice", options: ["The Dirichlet kernel", "The Fejér kernel", "The Poisson kernel", "The heat kernel"], correct: [0] },
    },
    {
      key: "carl",
      rung: "check",
      prompt: <p>What does Carleson&rsquo;s theorem say?</p>,
      answer: { kind: "choice", options: ["The Fourier series of every square-integrable function converges almost everywhere", "Every continuous function has a convergent Fourier series", "Some integrable function has a Fourier series diverging everywhere", "Fourier series converge uniformly"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set n = 10. What is the Lebesgue constant, to two decimal places?</p>,
      answer: { kind: "numeric", value: 2.22, tolerance: 0.01 },
    },
    {
      key: "jump",
      rung: "apply",
      prompt: <p>To what does the Fourier series of the square wave converge at x = 0?</p>,
      answer: { kind: "choice", options: ["0, the average of the one-sided limits", "1", "−1", "It diverges"], correct: [0] },
    },
    {
      key: "rl",
      rung: "apply",
      prompt: <p>What does the Riemann–Lebesgue lemma say about the coefficients of an integrable function?</p>,
      answer: { kind: "choice", options: ["They tend to 0 as |n| grows", "They are summable", "They are square-summable", "They decay like 1/n²"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the sum of exp(inx) over |n| ≤ N equals sin((N + ½)x)/sin(x/2) when x is not a multiple of 2π.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Multiplies the sum by exp(ix/2) − exp(−ix/2) = 2i sin(x/2).",
          "Observes that the sum telescopes to exp(i(N + ½)x) − exp(−i(N + ½)x) = 2i sin((N + ½)x).",
          "Divides by 2i sin(x/2), which is non-zero.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain how unbounded Lebesgue constants lead to a continuous function whose Fourier series diverges at 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Views f ↦ Sₙf(0) as bounded linear functionals on the Banach space C(𝕋) with norms Lₙ.",
          "Applies the uniform boundedness principle: if sup |Sₙf(0)| were finite for every f, the Lₙ would be bounded.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The Dirichlet kernel is too wild: it takes both signs and its absolute averages grow. Averaging the partial sums
        replaces it by a positive kernel, and convergence is restored for every continuous function.
      </p>
      <p>Next, summability kernels.</p>
    </>
  ),
};
