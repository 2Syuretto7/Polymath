import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { RemainderPointViz } from "@/components/viz/RemainderPointViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.6.3",
  minutes: 90,
  links: {
    revisits: ["m6.6.2", "m2.9.5", "m6.6.1"],
    foreshadows: ["m6.8.3", "m6.8.4", "m13.1.4"],
  },

  puzzle: (
    <>
      <p>
        Your calculator computes <M>{"e^{1.5}"}</M> from additions and multiplications. Somewhere inside, a polynomial
        approximates the exponential. But how good is the approximation, and how do we know? A Taylor polynomial matches a
        function and its first <M>{"n"}</M> derivatives at a point. To trust it away from that point we need to control the
        error, and the mean value theorem, used <M>{"n + 1"}</M> times over, is exactly the tool.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The remainder of the Taylor polynomial of <M>{"e^x"}</M> at 0 always takes the form{" "}
        <M>{"e^c x^{n+1}/(n+1)!"}</M>. Change <M>{"n"}</M> and <M>{"x"}</M>, and watch where the point <M>{"c"}</M> falls.
      </p>
      <RemainderPointViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Taylor polynomials">
        <p>
          If <M>{"f"}</M> has <M>{"n"}</M> derivatives at <M>{"a"}</M>, its Taylor polynomial of degree <M>{"n"}</M> is
        </p>
        <MD>{"P_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x - a)^k."}</MD>
        <p>
          It is the unique polynomial of degree at most <M>{"n"}</M> with <M>{"P_n^{(k)}(a) = f^{(k)}(a)"}</M> for{" "}
          <M>{"k = 0, \\ldots, n"}</M>. The remainder is <M>{"R_n(x) = f(x) - P_n(x)"}</M>.
        </p>
      </Definition>

      <Theorem title="Taylor's theorem with Lagrange remainder">
        <p>
          If <M>{"f"}</M> has <M>{"n + 1"}</M> derivatives on an interval containing <M>{"a"}</M> and <M>{"x"}</M>, then for
          some <M>{"c"}</M> strictly between <M>{"a"}</M> and <M>{"x"}</M>,
        </p>
        <MD>{"R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x - a)^{n+1}."}</MD>
      </Theorem>

      <Proof>
        <p>
          Fix <M>{"x \\ne a"}</M> and choose <M>{"M"}</M> so that <M>{"R_n(x) = M (x - a)^{n+1}"}</M>. Let{" "}
          <M>{"g(t) = R_n(t) - M (t - a)^{n+1}"}</M>. Then <M>{"g"}</M> and its first <M>{"n"}</M> derivatives vanish at{" "}
          <M>{"a"}</M>, and <M>{"g(x) = 0"}</M>. Rolle gives <M>{"x_1"}</M> between <M>{"a"}</M> and <M>{"x"}</M> with{" "}
          <M>{"g'(x_1) = 0"}</M>; since also <M>{"g'(a) = 0"}</M>, Rolle again gives <M>{"x_2"}</M> with{" "}
          <M>{"g''(x_2) = 0"}</M>; and so on, until <M>{"g^{(n+1)}(c) = 0"}</M>. But{" "}
          <M>{"g^{(n+1)}(t) = f^{(n+1)}(t) - (n+1)!\\,M"}</M>, since <M>{"P_n^{(n+1)} = 0"}</M>. So{" "}
          <M>{"M = f^{(n+1)}(c)/(n+1)!"}</M>.
        </p>
      </Proof>

      <Example title="the exponential series converges">
        <p>
          For <M>{"f = e^x"}</M> at <M>{"a = 0"}</M>, every derivative is <M>{"e^x"}</M>, so{" "}
          <M>{"|R_n(x)| \\le e^{|x|}\\,|x|^{n+1}/(n+1)!"}</M>. For fixed <M>{"x"}</M>, the factorial eventually beats the
          power, so <M>{"R_n(x) \\to 0"}</M>, and
        </p>
        <MD>{"e^x = \\sum_{k=0}^{\\infty} \\frac{x^k}{k!} \\quad \\text{for every real } x."}</MD>
        <p>The same argument works for sine and cosine, whose derivatives are bounded by 1.</p>
      </Example>

      <Remark title="when Taylor series fail">
        <p>
          A function can have derivatives of every order whose Taylor series converges, but to the wrong function. Cauchy&rsquo;s
          example <M>{"f(x) = e^{-1/x^2}"}</M>, with <M>{"f(0) = 0"}</M>, has every derivative equal to 0 at 0, so its Taylor
          series is identically 0, yet <M>{"f(x) > 0"}</M> for <M>{"x \\ne 0"}</M>. The remainder does not tend to 0. Functions
          equal to their Taylor series near every point are called analytic; in complex analysis, every differentiable
          function turns out to be analytic.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "p2",
      rung: "check",
      prompt: (
        <p>
          What is the Taylor polynomial of degree 2 of <M>{"e^x"}</M> at 0, evaluated at <M>{"x = 1"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 2.5, tolerance: 0.0001 },
    },
    {
      key: "form",
      rung: "check",
      prompt: <p>In the Lagrange form of the remainder, where does the point c lie?</p>,
      answer: {
        kind: "choice",
        options: ["Always at a", "Always at x", "Strictly between a and x", "Anywhere on the real line"],
        correct: [2],
      },
    },
    {
      key: "bound",
      rung: "apply",
      prompt: (
        <p>
          Using <M>{"|\\sin^{(k)}| \\le 1"}</M>, bound the error in approximating <M>{"\\sin(0.5)"}</M> by{" "}
          <M>{"0.5 - 0.5^3/6"}</M>, which is <M>{"P_4"}</M>. Give <M>{"0.5^5/5!"}</M> as a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 0.00026, tolerance: 0.00001 },
    },
    {
      key: "n",
      rung: "apply",
      prompt: (
        <p>
          To compute <M>{"e"}</M> to within <M>{"10^{-3}"}</M> using <M>{"P_n(1)"}</M> and the bound{" "}
          <M>{"3/(n+1)!"}</M>, what is the smallest <M>{"n"}</M> that suffices?
        </p>
      ),
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "flat",
      rung: "apply",
      prompt: (
        <p>
          Why does the Taylor series of <M>{"e^{-1/x^2}"}</M> at 0 fail to represent the function?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "The series diverges.",
          "Every derivative at 0 is 0, so the series is identically 0, but the function is positive away from 0.",
          "The function is not continuous.",
          "The function has no derivatives.",
        ],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Prove that the Taylor series of <M>{"\\cos x"}</M> at 0 converges to <M>{"\\cos x"}</M> for every real{" "}
          <M>{"x"}</M>. A few lines will do.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes every derivative of cos is ±sin or ±cos, so bounded by 1.",
          "Bounds the remainder: |R_n(x)| ≤ |x|^(n+1)/(n+1)!.",
          "Notes this tends to 0 for fixed x, so the series converges to cos x.",
        ],
      },
    },
    {
      key: "second",
      rung: "stretch",
      prompt: (
        <p>
          Use Taylor&rsquo;s theorem with <M>{"n = 1"}</M> to prove the second derivative test: if{" "}
          <M>{"f'(a) = 0"}</M> and <M>{"f''"}</M> is continuous with <M>{"f''(a) > 0"}</M>, then <M>{"a"}</M> is a local
          minimum.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes f(x) = f(a) + f″(c)(x − a)²/2 for some c between a and x.",
          "Uses continuity of f″ to get f″(c) > 0 for x near a.",
          "Concludes f(x) ≥ f(a) near a.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a Taylor polynomial is, how Taylor's theorem with Lagrange remainder is proved by repeated use of Rolle's theorem, how it proves the exponential series converges, and why some smooth functions are not equal to their Taylor series.",

  glimpse: (
    <p>
      The next lesson builds a continuous function with no derivative anywhere, the opposite extreme from the smooth
      functions here. Taylor series return as power series later in the course, beside the Weierstrass theorem that every
      continuous function is a uniform limit of polynomials, and in complex analysis.
    </p>
  ),
};
