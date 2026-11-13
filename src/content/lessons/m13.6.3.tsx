import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SchwarzViz } from "@/components/viz/SchwarzViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.6.3",
  minutes: 80,
  links: {
    revisits: ["m13.3.3", "m13.6.2", "m13.4.2"],
    foreshadows: ["m13.6.4", "m17.5.1", "m17.5.2"],
  },

  puzzle: (
    <>
      <p>
        A holomorphic function maps the unit disc into itself and fixes the centre. How fast can it be stretching at 0? Could
        it, for instance, have <M>{"f'(0) = 2"}</M>, pushing points away from the centre before they hit the edge?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>For each map of the disc into itself fixing 0, compare the image of the circle of radius r with the circle itself.</p>
      <SchwarzViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the Schwarz lemma">
        <p>
          Let <M>{"f"}</M> be holomorphic on the unit disc <M>{"\\mathbb{D}"}</M>, with <M>{"|f(z)| < 1"}</M> and{" "}
          <M>{"f(0) = 0"}</M>. Then
        </p>
        <MD>{"|f(z)| \\le |z| \\text{ for all } z \\in \\mathbb{D}, \\qquad |f'(0)| \\le 1."}</MD>
        <p>
          If <M>{"|f(z)| = |z|"}</M> for some <M>{"z \\ne 0"}</M>, or <M>{"|f'(0)| = 1"}</M>, then{" "}
          <M>{"f(z) = e^{i\\theta} z"}</M> is a rotation.
        </p>
      </Theorem>

      <Proof>
        <p>
          Since <M>{"f(0) = 0"}</M>, the function <M>{"g(z) = f(z)/z"}</M> has a removable singularity at 0, with{" "}
          <M>{"g(0) = f'(0)"}</M>. On the circle <M>{"|z| = r < 1"}</M>, <M>{"|g(z)| < 1/r"}</M>. By the maximum modulus
          principle the same bound holds inside that circle. Letting <M>{"r \\to 1"}</M> gives <M>{"|g| \\le 1"}</M> on the
          disc, which is both inequalities. If <M>{"|g|"}</M> reaches 1 at an interior point, maximum modulus forces{" "}
          <M>{"g"}</M> to be a constant of modulus 1.
        </p>
      </Proof>

      <Theorem title="automorphisms of the disc">
        <p>Every conformal bijection of the unit disc onto itself has the form</p>
        <MD>{"\\varphi(z) = e^{i\\theta} \\frac{z - a}{1 - \\bar a z}, \\qquad |a| < 1."}</MD>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"h"}</M> be a conformal bijection and <M>{"a = h^{-1}(0)"}</M>. With{" "}
          <M>{"\\varphi_a(z) = (z - a)/(1 - \\bar a z)"}</M>, the map <M>{"k = h \\circ \\varphi_a^{-1}"}</M> is a bijection of
          the disc fixing 0. Schwarz applied to <M>{"k"}</M> and to <M>{"k^{-1}"}</M> gives <M>{"|k(z)| \\le |z|"}</M> and{" "}
          <M>{"|z| \\le |k(z)|"}</M>, so <M>{"|k(z)| = |z|"}</M> and <M>{"k"}</M> is a rotation. Then{" "}
          <M>{"h = k \\circ \\varphi_a"}</M>.
        </p>
      </Proof>

      <Example title="a bound away from 0">
        <p>
          If <M>{"f"}</M> maps the disc into itself with <M>{"f(0) = 0"}</M>, then <M>{"|f(1/2)| \\le 1/2"}</M>. The map{" "}
          <M>{"z^2"}</M> gives <M>{"1/4"}</M>, and only rotations reach <M>{"1/2"}</M>.
        </p>
      </Example>

      <Remark title="Schwarz-Pick">
        <p>
          Composing with the disc automorphisms removes the condition <M>{"f(0) = 0"}</M>: every holomorphic map of the disc
          into itself does not increase the hyperbolic distance, and the automorphisms are exactly its isometries. This is the
          start of hyperbolic geometry in complex analysis.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "bound",
      rung: "check",
      prompt: <p>If <M>{"f"}</M> maps the unit disc into itself with <M>{"f(0) = 0"}</M>, what is the largest possible value of <M>{"|f(0.3)|"}</M>?</p>,
      answer: { kind: "numeric", value: 0.3, tolerance: 0.001 },
    },
    {
      key: "deriv",
      rung: "check",
      prompt: <p>Under the same hypotheses, can <M>{"f'(0) = 2"}</M>?</p>,
      answer: { kind: "choice", options: ["Yes", "No, since |f′(0)| ≤ 1", "Only if f is a polynomial", "Only if f(z) = 2z"], correct: [1] },
    },
    {
      key: "eq",
      rung: "apply",
      prompt: <p>Such an <M>{"f"}</M> has <M>{"f(1/2) = i/2"}</M>. What is <M>{"f'(0)"}</M>?</p>,
      answer: { kind: "choice", options: ["1", "i", "1/2", "Cannot be determined"], correct: [1] },
    },
    {
      key: "auto",
      rung: "apply",
      prompt: <p>The automorphism <M>{"\\varphi(z) = (z - 1/2)/(1 - z/2)"}</M> of the disc sends which point to 0?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "auto2",
      rung: "apply",
      prompt: <p>What is <M>{"|\\varphi'(0)|"}</M> for that same <M>{"\\varphi"}</M>?</p>,
      answer: { kind: "numeric", value: 0.75, tolerance: 0.001 },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>Prove that <M>{"|f(z)| \\le |z|"}</M> for a holomorphic <M>{"f"}</M> from the unit disc into itself with <M>{"f(0) = 0"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Defines g(z) = f(z)/z and notes the singularity at 0 is removable.",
          "Bounds |g| ≤ 1/r on |z| = r and applies maximum modulus inside.",
          "Lets r → 1 to get |g| ≤ 1, so |f(z)| ≤ |z|.",
        ],
      },
    },
    {
      key: "fixed",
      rung: "stretch",
      prompt: <p>Show that a holomorphic map of the disc into itself with two distinct fixed points is the identity.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Moves one fixed point to 0 with a disc automorphism, keeping two fixed points.",
          "Applies the equality case of Schwarz at the other fixed point to get a rotation, which then must be the identity.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the Schwarz lemma and its proof by maximum modulus, what happens in the case of equality, and how it shows that the disc automorphisms are exactly the maps e^{iθ}(z − a)/(1 − āz).",

  glimpse: (
    <p>
      The next lesson states the Riemann mapping theorem, whose uniqueness part rests on this lemma. Harmonic functions,
      studied later, satisfy a maximum principle of the same kind.
    </p>
  ),
};
