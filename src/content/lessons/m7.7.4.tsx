import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { PolyDivViz } from "@/components/viz/PolyDivViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.7.4",
  minutes: 85,
  links: {
    revisits: ["m7.7.1", "m0.2.5", "m8.2.1"],
    foreshadows: ["m7.7.5", "m14.1.2", "m30.1.1"],
  },

  puzzle: (
    <>
      <p>
        At school, a polynomial of degree <M>{"n"}</M> has at most <M>{"n"}</M> roots. But in <M>{"\\mathbb{Z}_8"}</M>, the
        quadratic <M>{"x^2 - 1"}</M> has four roots: 1, 3, 5 and 7. So the school fact depends on where the coefficients
        live. Which properties of polynomials come from the coefficient ring, and which from the polynomials themselves?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Step through long division of polynomials. Watch the degree of the remainder fall at each step until it is below the
        degree of the divisor.
      </p>
      <PolyDivViz />
    </>
  ),

  theory: (
    <>
      <Definition title="polynomial rings">
        <p>
          For a commutative ring <M>{"R"}</M>, <M>{"R[x]"}</M> consists of expressions{" "}
          <M>{"a_0 + a_1x + \\cdots + a_nx^n"}</M> with <M>{"a_i \\in R"}</M>, added and multiplied in the usual way. If{" "}
          <M>{"R"}</M> is a domain, the leading coefficients of a product are the product of the leading coefficients, so{" "}
          <M>{"\\deg(fg) = \\deg f + \\deg g"}</M>, and <M>{"R[x]"}</M> is again a domain, with the same units as{" "}
          <M>{"R"}</M>.
        </p>
      </Definition>

      <Theorem title="division with remainder">
        <p>
          If <M>{"F"}</M> is a field and <M>{"g \\ne 0"}</M> in <M>{"F[x]"}</M>, then for each <M>{"f"}</M> there are unique{" "}
          <M>{"q, r"}</M> with <M>{"f = qg + r"}</M> and <M>{"r = 0"}</M> or <M>{"\\deg r < \\deg g"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"\\deg f \\ge \\deg g"}</M>, subtract <M>{"(a/b)x^{k}g"}</M>, where <M>{"a"}</M> and <M>{"b"}</M> are the
          leading coefficients and <M>{"k = \\deg f - \\deg g"}</M>; this kills the leading term of <M>{"f"}</M>. Repeat;
          the degree falls each time. Dividing by <M>{"b"}</M> is where we need a field. For uniqueness, if{" "}
          <M>{"qg + r = q'g + r'"}</M>, then <M>{"(q - q')g = r' - r"}</M>, and the degrees force both sides to be 0.
        </p>
      </Proof>

      <Theorem title="roots and factors">
        <p>
          In <M>{"F[x]"}</M>, <M>{"f(a) = 0"}</M> exactly when <M>{"x - a"}</M> divides <M>{"f"}</M>. A non-zero polynomial
          of degree <M>{"n"}</M> over a field, or any integral domain, has at most <M>{"n"}</M> roots.
        </p>
      </Theorem>

      <Proof>
        <p>
          Divide by <M>{"x - a"}</M>: <M>{"f = q(x - a) + r"}</M> with <M>{"r"}</M> a constant, and evaluating at{" "}
          <M>{"a"}</M> gives <M>{"r = f(a)"}</M>. For the count, each root <M>{"a"}</M> gives{" "}
          <M>{"f = (x - a)q"}</M>; another root <M>{"b \\ne a"}</M> satisfies <M>{"(b - a)q(b) = 0"}</M>, so{" "}
          <M>{"q(b) = 0"}</M> since there are no zero divisors. Induction on the degree finishes it.
        </p>
      </Proof>

      <Example title="ℤ₈ and the role of domains">
        <p>
          In <M>{"\\mathbb{Z}_8"}</M>, <M>{"x^2 - 1 = (x - 1)(x + 1)"}</M>, and <M>{"(3 - 1)(3 + 1) = 8 = 0"}</M> though
          neither factor is 0. Zero divisors break the counting argument. Over a field such as <M>{"\\mathbb{Z}_7"}</M>,{" "}
          <M>{"x^2 - 1"}</M> has just the roots 1 and 6.
        </p>
      </Example>

      <Remark title="Gauss's lemma and beyond">
        <p>
          Since <M>{"F[x]"}</M> is Euclidean, it is a PID and a UFD, and <M>{"F[x]/(f)"}</M> is a field exactly when{" "}
          <M>{"f"}</M> is irreducible. <M>{"\\mathbb{Z}[x]"}</M> is not a PID, but Gauss&rsquo;s lemma, that a product of
          polynomials whose coefficients have no common factor again has none, shows that <M>{"R[x]"}</M> is a UFD whenever{" "}
          <M>{"R"}</M> is. So <M>{"\\mathbb{Z}[x]"}</M> and <M>{"F[x, y, z]"}</M> have unique factorisation.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "rem",
      rung: "check",
      prompt: <p>What is the remainder when x³ − 2x² − 4 is divided by x − 3?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "deg",
      rung: "check",
      prompt: <p>Over ℚ, a polynomial of degree 3 times one of degree 4 has what degree?</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "z8",
      rung: "apply",
      prompt: <p>How many roots does x² − 1 have in ℤ₁₅?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "factor",
      rung: "apply",
      prompt: <p>x³ − 7x + 6 has the root 1. Dividing by x − 1 leaves a quadratic. What is the sum of its two roots?</p>,
      answer: { kind: "numeric", value: -1 },
    },
    {
      key: "field",
      rung: "apply",
      prompt: <p>For which of these is ℚ[x]/(f) a field? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["f = x² − 2", "f = x² − 4", "f = x² + 1", "f = x³"], correct: [0, 2] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that f(a) = 0 if and only if x − a divides f, for f in F[x]. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Divides f by x − a to get f = q(x − a) + r with r a constant.",
          "Evaluates at a to get f(a) = r.",
          "Concludes x − a divides f exactly when r = 0, that is, when f(a) = 0.",
        ],
      },
    },
    {
      key: "units",
      rung: "stretch",
      prompt: <p>In ℤ₄[x], show that 1 + 2x is a unit. Why does this not happen in R[x] when R is an integral domain?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes (1 + 2x)(1 + 2x) = 1 + 4x + 4x² = 1 in ℤ₄[x].",
          "Notes that over a domain, deg(fg) = deg f + deg g, so a product equal to 1 forces both degrees to be 0.",
          "Concludes the units of R[x] are the units of R when R is a domain. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend polynomial long division over a field and why it needs a field, why x − a divides f exactly when f(a) = 0, why a polynomial of degree n over a domain has at most n roots, and what goes wrong in ℤ₈.",

  glimpse: (
    <p>
      The next lesson gives tests for irreducibility, such as Eisenstein&rsquo;s criterion and reduction mod p. In field
      theory, F[x]/(f) for irreducible f builds new fields containing a root of f, and in algebraic geometry polynomial
      rings in several variables describe curves and surfaces.
    </p>
  ),
};
