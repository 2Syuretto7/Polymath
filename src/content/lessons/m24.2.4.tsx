import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { NullstellenViz } from "@/components/viz/NullstellenViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m24.2.4",
  minutes: 95,
  links: {
    revisits: ["m24.2.3", "m24.2.1", "m7.7.4"],
    foreshadows: ["m24.3.1", "m24.3.2", "m24.4.3"],
  },

  puzzle: (
    <>
      <p>
        A system of polynomial equations has no common solution. Over the real numbers, x² + 1 = 0 is a single such equation,
        and nothing about it looks contradictory. Over the complex numbers, is there always an algebraic certificate of
        impossibility, polynomials that combine the equations into 1 = 0?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare the zeros of a polynomial with the ideal of everything that vanishes on them, over ℂ and over ℝ.</p>
      <NullstellenViz />
    </>
  ),

  theory: (
    <>
      <Definition title="varieties and their ideals">
        <p>
          Let <M>k</M> be a field and <M>{"A = k[x_1, \\ldots, x_n]"}</M>. For an ideal <M>J</M> of <M>A</M>, its{" "}
          <strong>zero set</strong> is <M>{"V(J) = \\{a \\in k^n : f(a) = 0 \\text{ for all } f \\in J\\}"}</M>. For a set{" "}
          <M>{"S \\subseteq k^n"}</M>, <M>{"I(S)"}</M> is the ideal of polynomials vanishing on all of <M>S</M>. By Hilbert&rsquo;s
          basis theorem, every <M>{"V(J)"}</M> is cut out by finitely many equations. The <strong>radical</strong> of <M>J</M>{" "}
          is <M>{"\\sqrt{J} = \\{f : f^m \\in J \\text{ for some } m\\}"}</M>, and always <M>{"\\sqrt{J} \\subseteq I(V(J))"}</M>.
        </p>
      </Definition>

      <Theorem title="Hilbert's Nullstellensatz (1893)">
        <p>Let <M>k</M> be algebraically closed.</p>
        <p>
          <strong>Weak form.</strong> If <M>J</M> is a proper ideal of <M>A</M>, then <M>{"V(J) \\ne \\varnothing"}</M>.
          Equivalently, the maximal ideals of <M>A</M> are exactly <M>{"(x_1 - a_1, \\ldots, x_n - a_n)"}</M>, one for each point.
        </p>
        <p><strong>Strong form.</strong> For every ideal <M>J</M>,</p>
        <MD>{"I(V(J)) = \\sqrt{J}."}</MD>
      </Theorem>

      <Example title="the certificate">
        <p>
          The weak form says: if <M>{"f_1, \\ldots, f_r"}</M> have no common zero in <M>{"\\mathbb{C}^n"}</M>, then there are
          polynomials <M>{"g_i"}</M> with <M>{"g_1 f_1 + \\cdots + g_r f_r = 1"}</M>. For <M>{"f_1 = x"}</M> and{" "}
          <M>{"f_2 = xy - 1"}</M>, take <M>{"y \\cdot f_1 - f_2 = 1"}</M>. Over ℝ this fails: <M>{"(x^2 + 1)"}</M> is a proper
          ideal with no real zeros.
        </p>
      </Example>

      <Remark title="how the proof goes">
        <p>
          The key is <strong>Zariski&rsquo;s lemma</strong>: a field that is finitely generated as a <M>k</M>-algebra is a
          finite extension of <M>k</M>. So <M>{"A/\\mathfrak{m}"}</M> is <M>k</M> itself when <M>k</M> is algebraically closed,
          and each <M>{"x_i"}</M> goes to some <M>{"a_i"}</M>: that is the point. The strong form follows by the Rabinowitsch
          trick: if <M>f</M> vanishes on <M>{"V(J)"}</M>, then <M>J</M> and <M>{"1 - yf"}</M> have no common zero in one more
          variable, so 1 lies in the ideal they generate; setting <M>{"y = 1/f"}</M> and clearing denominators gives{" "}
          <M>{"f^m \\in J"}</M>.
        </p>
      </Remark>

      <Remark title="the dictionary">
        <p>
          Over an algebraically closed field, <M>V</M> and <M>I</M> give an order-reversing bijection between radical ideals and
          zero sets, with prime ideals matching irreducible zero sets and maximal ideals matching points. Geometry becomes
          algebra; this is the founding dictionary of algebraic geometry.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "weak",
      rung: "check",
      prompt: <p>What does the weak Nullstellensatz say, over an algebraically closed field?</p>,
      answer: { kind: "choice", options: ["Every proper ideal of the polynomial ring has a common zero", "Every ideal is principal", "Every polynomial is irreducible", "Every zero set is finite"], correct: [0] },
    },
    {
      key: "strong",
      rung: "check",
      prompt: <p>What is the ideal of all polynomials vanishing on V(J), over an algebraically closed field?</p>,
      answer: { kind: "choice", options: ["The radical of J", "J itself", "The whole ring", "The zero ideal"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation over ℂ, with f = (x − 1)²(x + 2), what is the degree of the generator of I(V(f))?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "real",
      rung: "apply",
      prompt: <p>Why does the weak Nullstellensatz fail over ℝ?</p>,
      answer: { kind: "choice", options: ["The ideal (x² + 1) is proper but has no real zero", "ℝ is not a field", "ℝ[x] is not Noetherian", "Every real polynomial has a real root"], correct: [0] },
    },
    {
      key: "points",
      rung: "apply",
      prompt: <p>In ℂ[x, y], which maximal ideal corresponds to the point (2, −3)?</p>,
      answer: { kind: "choice", options: ["(x − 2, y + 3)", "(x + 2, y − 3)", "(x − 2)", "(xy + 6)"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that for any ideal J of k[x₁, …, xₙ], the radical of J is contained in I(V(J)).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes f with fᵐ in J for some m, and a point a in V(J).",
          "Notes fᵐ(a) = 0, so f(a)ᵐ = 0 in the field k.",
          "Concludes f(a) = 0, since a field has no non-zero nilpotents, so f lies in I(V(J)).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Find polynomials g and h in ℂ[x, y] with g · x + h · (xy − 1) = 1. Why must they exist?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives g = y and h = −1, or any other correct pair.",
          "Notes that x and xy − 1 have no common zero, so the weak Nullstellensatz forces 1 into the ideal.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Behind Zariski&rsquo;s lemma lies a notion that generalises algebraic numbers over ℚ: elements of a bigger ring that
        satisfy monic equations over a smaller one. Such extensions behave remarkably like finite field extensions.
      </p>
      <p>
        Next, integral dependence: integral elements and closures, why integral elements form a ring, the integers of a
        number field, and Noether normalisation.
      </p>
    </>
  ),
};
