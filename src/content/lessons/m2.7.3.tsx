import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { PartialFracViz } from "@/components/viz/PartialFracViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.7.3",
  minutes: 85,
  links: {
    revisits: ["m0.2.5", "m2.6.4"],
    foreshadows: ["m10.1.1", "m13.3.2"],
  },

  puzzle: (
    <>
      <p>
        Adding fractions is a school exercise: <M>{"\\frac{1}{x - 1} - \\frac{1}{x + 1} = \\frac{2}{x^2 - 1}"}</M>. Each
        fraction on the left is easy to integrate; the one on the right is not obviously so.
      </p>
      <p>
        So run the exercise backwards. Can every rational function be split into simple pieces like these, and if so, how
        do you find them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A rational function blows up where its denominator vanishes. Near each such point it behaves like a simple fraction
        with just that factor in the denominator. Partial fractions make this exact: the function is a sum of pieces, one
        for each factor of the denominator, and each piece integrates to a logarithm, a power or an arctangent. Below, the
        dashed pieces add up to the solid curve at every point.
      </p>
      <PartialFracViz />
    </>
  ),

  theory: (
    <>
      <Definition title="proper rational functions">
        <p>
          A rational function <M>{"P(x)/Q(x)"}</M> is <strong>proper</strong> if the degree of P is less than the degree of
          Q. If it is not, polynomial long division writes it as a polynomial plus a proper one, as in{" "}
          <M>{"\\frac{x^2}{x + 1} = x - 1 + \\frac{1}{x + 1}"}</M>.
        </p>
      </Definition>

      <Theorem title="partial fractions">
        <p>
          Let <M>{"P/Q"}</M> be proper, with Q factored into real linear factors and irreducible quadratic factors. Then{" "}
          <M>{"P/Q"}</M> is a sum of terms of these forms:
        </p>
        <ul>
          <li>
            for each factor <M>{"(x - a)^k"}</M>: <M>{"\\dfrac{A_1}{x - a} + \\dfrac{A_2}{(x - a)^2} + \\cdots + \\dfrac{A_k}{(x - a)^k}"}</M>;
          </li>
          <li>
            for each factor <M>{"(x^2 + px + q)^k"}</M>: terms <M>{"\\dfrac{B_j x + C_j}{(x^2 + px + q)^j}"}</M> for{" "}
            <M>{"j = 1, \\ldots, k"}</M>.
          </li>
        </ul>
        <p>The constants are unique.</p>
      </Theorem>
      <p>
        We do not prove the theorem here; it is a fact about polynomials, proved in algebra. In practice, write down the
        form, multiply through by Q, and compare both sides.
      </p>

      <Example title="the cover-up rule">
        <p>
          For distinct linear factors there is a shortcut. To split <M>{"\\frac{x + 5}{(x - 1)(x + 2)} = \\frac{A}{x - 1} + \\frac{B}{x + 2}"}</M>,
          multiply by <M>{"x - 1"}</M> and put <M>{"x = 1"}</M>: every term but A vanishes, so{" "}
          <M>{"A = \\frac{1 + 5}{1 + 2} = 2"}</M>. In effect, cover up the factor <M>{"x - 1"}</M> and evaluate the rest at
          1. Likewise <M>{"B = \\frac{-2 + 5}{-2 - 1} = -1"}</M>. Then
        </p>
        <MD>{"\\int \\frac{x + 5}{x^2 + x - 2}\\,dx = 2\\ln|x - 1| - \\ln|x + 2| + C."}</MD>
      </Example>

      <Example title="a repeated factor">
        <p>
          <M>{"\\frac{1}{x(x - 1)^2} = \\frac{A}{x} + \\frac{B}{x - 1} + \\frac{C}{(x - 1)^2}"}</M>. Multiply by the
          denominator: <M>{"1 = A(x - 1)^2 + Bx(x - 1) + Cx"}</M>. Putting <M>{"x = 0"}</M> gives <M>{"A = 1"}</M>;{" "}
          <M>{"x = 1"}</M> gives <M>{"C = 1"}</M>; comparing the coefficients of <M>{"x^2"}</M> gives{" "}
          <M>{"A + B = 0"}</M>, so <M>{"B = -1"}</M>. Hence
        </p>
        <MD>{"\\int \\frac{dx}{x(x - 1)^2} = \\ln|x| - \\ln|x - 1| - \\frac{1}{x - 1} + C."}</MD>
      </Example>

      <Example title="an irreducible quadratic">
        <p>
          <M>{"\\frac{1}{x(x^2 + 1)} = \\frac{1}{x} - \\frac{x}{x^2 + 1}"}</M>, as you can check by adding. The second
          piece integrates by the substitution <M>{"u = x^2 + 1"}</M>:
        </p>
        <MD>{"\\int \\frac{dx}{x(x^2 + 1)} = \\ln|x| - \\tfrac{1}{2}\\ln(x^2 + 1) + C."}</MD>
        <p>
          A piece <M>{"\\frac{C}{x^2 + 1}"}</M> would integrate to <M>{"C\\arctan x"}</M>; a general quadratic is first put
          in the form <M>{"(x + h)^2 + k^2"}</M> by completing the square.
        </p>
      </Example>

      <Remark title="every rational function can be integrated">
        <p>
          Together, these steps integrate every rational function, and the answer always consists of rational functions,
          logarithms and arctangents. Leibniz and Johann Bernoulli worked out the method in the early 1700s. There is one
          catch: you must be able to factor the denominator. That every real polynomial factors into real linear and
          quadratic pieces is a consequence of the fundamental theorem of algebra; actually finding the factors may need
          numerical methods.
        </p>
      </Remark>

      <Remark title="a telescoping sum">
        <p>
          Partial fractions also help with sums. Since <M>{"\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}"}</M>,
          the sum <M>{"\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\cdots + \\frac{1}{N(N + 1)}"}</M> collapses to{" "}
          <M>{"1 - \\frac{1}{N + 1}"}</M>, a first example for the chapter on series.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "form",
      rung: "check",
      prompt: (
        <p>
          What is the right form for the partial fractions of <M>{"\\frac{3x + 1}{(x - 1)^2 (x + 2)}"}</M>?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "A/(x − 1) + B/(x − 1)² + C/(x + 2)",
          "A/(x − 1)² + B/(x + 2)",
          "A/(x − 1) + B/(x + 2)",
          "(Ax + B)/(x − 1)² + C/(x + 2)",
        ],
        correct: [0],
      },
    },
    {
      key: "cover",
      rung: "check",
      prompt: (
        <p>
          In <M>{"\\frac{1}{(x - 2)(x + 3)} = \\frac{A}{x - 2} + \\frac{B}{x + 3}"}</M>, find A. (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 0.2 },
    },
    {
      key: "diff",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\int_2^3 \\frac{dx}{x^2 - 1}"}</M>. (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 0.5 * Math.log(1.5), tolerance: 0.001 },
    },
    {
      key: "cases",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\int_2^3 \\frac{x + 5}{x^2 + x - 2}\\,dx"}</M>. (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: Math.log(16 / 5), tolerance: 0.001 },
    },
    {
      key: "divide",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\int_0^1 \\frac{x^2}{x + 1}\\,dx"}</M>. (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: Math.log(2) - 0.5, tolerance: 0.001 },
    },
    {
      key: "telescope",
      rung: "prove",
      prompt: (
        <p>
          Show that <M>{"\\int_1^N \\frac{dx}{x(x + 1)} = \\ln\\frac{2N}{N + 1}"}</M>, and find the limit as{" "}
          <M>{"N \\to \\infty"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Splits the integrand as 1/x − 1/(x + 1), by cover-up or by comparing coefficients.",
          "Integrates to ln x − ln(x + 1) and evaluates from 1 to N to get ln(N/(N + 1)) + ln 2.",
          "Notes that N/(N + 1) tends to 1, so the limit is ln 2.",
        ],
      },
    },
    {
      key: "logistic",
      rung: "stretch",
      prompt: (
        <p>
          A population, measured as a fraction of its maximum, satisfies <M>{"\\frac{dP}{dt} = P(1 - P)"}</M> with{" "}
          <M>{"P(0) = \\tfrac{1}{2}"}</M>. Separate the variables, writing{" "}
          <M>{"\\int \\frac{dP}{P(1 - P)} = \\int dt"}</M>, use partial fractions, and show that{" "}
          <M>{"P(t) = \\frac{1}{1 + e^{-t}}"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Splits 1/(P(1 − P)) as 1/P + 1/(1 − P).",
          "Integrates to ln P − ln(1 − P) = t + C, and uses P(0) = 1/2 to find C = 0.",
          "Solves P/(1 − P) = eᵗ for P. Any correct route to the formula is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how partial fractions split a rational function into simple pieces, how the cover-up rule finds the constants, and why every rational function can then be integrated.",

  glimpse: (
    <p>
      Partial fractions return in Ordinary Differential Equations, where they solve the logistic equation and many others
      by separation of variables. Complex Analysis proves the fundamental theorem of algebra, which guarantees the
      factorisation the method needs, and finds an even simpler form: over the complex numbers every denominator splits
      into linear factors.
    </p>
  ),
};
