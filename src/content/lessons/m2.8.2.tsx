import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ExpMirrorViz } from "@/components/viz/ExpMirrorViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.8.2",
  minutes: 85,
  links: {
    revisits: ["m2.4.5", "m0.4.2"],
    foreshadows: ["m10.1.2", "m10.4.2", "m13.1.1"],
  },

  puzzle: (
    <>
      <p>
        A bank pays 100% interest a year. Compounded once, ₹1 becomes ₹2. Compounded monthly, it becomes{" "}
        <M>{"(1 + 1/12)^{12} \\approx"}</M> ₹2.61. Daily, about ₹2.71. Does the amount grow without limit as the
        compounding gets more frequent, or settle down?
      </p>
      <p>
        And now that the logarithm is defined, what does <M>{"2^{\\sqrt{2}}"}</M> actually mean?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        ln is strictly increasing, so it has an inverse: the exponential function. The graph of an inverse is the mirror
        image of the original in the line <M>{"y = x"}</M>, and mirroring turns every slope into its reciprocal. Since ln
        has slope <M>{"1/y"}</M> at height x, its inverse has slope y at the mirrored point: the exponential is its own
        derivative. Move the point below.
      </p>
      <ExpMirrorViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the exponential function">
        <p>
          ln is a strictly increasing function from <M>{"(0, \\infty)"}</M> onto all of <M>{"\\mathbb{R}"}</M>. Its inverse
          is the exponential function, <M>{"\\exp: \\mathbb{R} \\to (0, \\infty)"}</M>. So{" "}
          <M>{"\\exp(\\ln x) = x"}</M> for <M>{"x > 0"}</M>, and <M>{"\\ln(\\exp y) = y"}</M> for all y.
        </p>
      </Definition>

      <Theorem title="properties of exp">
        <ol>
          <li><M>{"\\exp' = \\exp"}</M>, and <M>{"\\exp 0 = 1"}</M>.</li>
          <li><M>{"\\exp(a + b) = \\exp a \\cdot \\exp b"}</M>.</li>
          <li>exp is positive and strictly increasing, with <M>{"\\exp x \\to \\infty"}</M> as <M>{"x \\to \\infty"}</M> and <M>{"\\to 0"}</M> as <M>{"x \\to -\\infty"}</M>.</li>
        </ol>
      </Theorem>
      <Proof>
        <p>
          (1) By the theorem on derivatives of inverse functions, at <M>{"y = \\exp x"}</M>,{" "}
          <M>{"\\exp'(x) = 1/\\ln'(y) = 1/(1/y) = y = \\exp x"}</M>. And <M>{"\\ln 1 = 0"}</M> gives{" "}
          <M>{"\\exp 0 = 1"}</M>. (2) Put <M>{"A = \\exp a"}</M>, <M>{"B = \\exp b"}</M>. Then{" "}
          <M>{"\\ln(AB) = \\ln A + \\ln B = a + b"}</M>, so <M>{"AB = \\exp(a + b)"}</M>. (3) follows from the
          corresponding facts about ln.
        </p>
      </Proof>

      <Definition title="real powers">
        <p>For <M>{"a > 0"}</M> and any real x, define</p>
        <MD>{"a^x = \\exp(x \\ln a)."}</MD>
        <p>
          When x is an integer, this agrees with repeated multiplication, because <M>{"\\ln(a^n) = n\\ln a"}</M>; for{" "}
          <M>{"x = 1/n"}</M> it gives the positive n-th root. So the definition extends the old one. In particular{" "}
          <M>{"e^x = \\exp(x \\ln e) = \\exp x"}</M>, which justifies the usual notation, and{" "}
          <M>{"2^{\\sqrt 2} = \\exp(\\sqrt 2 \\ln 2) \\approx 2.665"}</M>.
        </p>
      </Definition>

      <Example title="derivatives of powers">
        <ul>
          <li><M>{"\\frac{d}{dx} a^x = \\frac{d}{dx}e^{x\\ln a} = (\\ln a)\\, a^x"}</M>.</li>
          <li>
            For any real r and <M>{"x > 0"}</M>, <M>{"\\frac{d}{dx} x^r = \\frac{d}{dx} e^{r\\ln x} = \\frac{r}{x}e^{r\\ln x} = r x^{r-1}"}</M>.
            The power rule, proved earlier for rational exponents, now holds for all real ones.
          </li>
        </ul>
      </Example>

      <Theorem title="compound interest">
        <MD>{"\\lim_{n \\to \\infty} \\left(1 + \\frac{x}{n}\\right)^n = e^x."}</MD>
      </Theorem>
      <Proof>
        <p>
          Take logarithms: <M>{"n \\ln(1 + x/n) = x \\cdot \\frac{\\ln(1 + h) - \\ln 1}{h}"}</M> with{" "}
          <M>{"h = x/n"}</M> (for <M>{"x \\ne 0"}</M>). As <M>{"n \\to \\infty"}</M>, <M>{"h \\to 0"}</M>, and the
          difference quotient tends to <M>{"\\ln'(1) = 1"}</M>. So the logarithm tends to x, and since exp is continuous,
          the expression tends to <M>{"e^x"}</M>.
        </p>
      </Proof>
      <p>So the bank&rsquo;s ₹1 approaches e ≈ ₹2.718, and no more, however often the interest is compounded.</p>

      <Theorem title="uniqueness">
        <p>
          If <M>{"f' = kf"}</M> on an interval containing 0, for a constant k, then <M>{"f(x) = f(0)e^{kx}"}</M>.
        </p>
      </Theorem>
      <Proof>
        <p>
          Let <M>{"g(x) = f(x)e^{-kx}"}</M>. Then <M>{"g' = f'e^{-kx} - kfe^{-kx} = 0"}</M>, so g is constant, equal to{" "}
          <M>{"g(0) = f(0)"}</M>.
        </p>
      </Proof>

      <Remark title="why exponentials are everywhere">
        <p>
          The uniqueness theorem says that whenever a quantity grows or decays at a rate proportional to its size, it is an
          exponential: money at compound interest, bacteria with room to spare, radioactive nuclei, a cooling cup of tea
          approaching room temperature. A half-life of T means <M>{"e^{-kT} = \\tfrac{1}{2}"}</M>, so{" "}
          <M>{"k = (\\ln 2)/T"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "deriv",
      rung: "check",
      prompt: (
        <p>
          What is the derivative of <M>{"e^{3x}"}</M>?
        </p>
      ),
      answer: { kind: "expression", value: "3e^(3x)", variables: ["x"] },
    },
    {
      key: "power",
      rung: "check",
      prompt: (
        <p>
          Write <M>{"10^x"}</M> in terms of exp. Which is correct?
        </p>
      ),
      answer: { kind: "choice", options: ["exp(x ln 10)", "exp(10 ln x)", "10 exp(x)", "exp(x) ln 10"], correct: [0] },
    },
    {
      key: "two",
      rung: "apply",
      prompt: (
        <p>
          Find the derivative of <M>{"2^x"}</M> at <M>{"x = 0"}</M>. (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: Math.LN2, tolerance: 0.001 },
    },
    {
      key: "xx",
      rung: "apply",
      prompt: (
        <p>
          Find the derivative of <M>{"x^x"}</M> for <M>{"x > 0"}</M>, by writing it as <M>{"e^{x \\ln x}"}</M>.
        </p>
      ),
      answer: { kind: "expression", value: "x^x (ln(x) + 1)", variables: ["x"] },
    },
    {
      key: "half",
      rung: "apply",
      prompt: (
        <p>
          A substance has a half-life of 10 years, so its amount is <M>{"A_0 e^{-kt}"}</M>. What is k? (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: Math.LN2 / 10, tolerance: 0.001 },
    },
    {
      key: "unique",
      rung: "prove",
      prompt: (
        <p>
          Prove that if <M>{"f' = f"}</M> everywhere and <M>{"f(0) = 1"}</M>, then <M>{"f(x)f(-x) = 1"}</M> for all x,
          without using the formula for f. (Differentiate the product.)
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Sets h(x) = f(x)f(−x) and differentiates with the product and chain rules.",
          "Gets h′(x) = f(x)f(−x) − f(x)f(−x) = 0, so h is constant.",
          "Evaluates h(0) = 1.",
        ],
      },
    },
    {
      key: "beats",
      rung: "stretch",
      prompt: (
        <p>
          Show that <M>{"e^x \\ge 1 + x"}</M> for all real x. Use it to show that <M>{"e^x > x^2/2"}</M> for{" "}
          <M>{"x > 0"}</M>, and deduce that <M>{"x/e^x \\to 0"}</M> as <M>{"x \\to \\infty"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Shows e^x ≥ 1 + x, for example because e^x is convex and 1 + x is its tangent at 0, or by studying e^x − 1 − x.",
          "Obtains e^x > x²/2 for x > 0, for instance by integrating e^t ≥ 1 + t from 0 to x.",
          "Concludes that x/e^x < 2/x, which tends to 0.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how the exponential function is defined as the inverse of the logarithm, why it is its own derivative, and how this gives a meaning to powers like 2 to the power √2.",

  glimpse: (
    <p>
      The uniqueness theorem is the first theorem of Ordinary Differential Equations, which extends it to linear
      equations and then, through the matrix exponential, to whole systems. Complex Analysis defines exp for complex
      numbers, where Euler&rsquo;s formula, <M>{"e^{i\\theta} = \\cos\\theta + i\\sin\\theta"}</M>, ties it to the
      trigonometric functions that the next lesson rebuilds from series.
    </p>
  ),
};
