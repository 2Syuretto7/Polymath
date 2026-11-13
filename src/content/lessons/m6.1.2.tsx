import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ImplicationWebViz } from "@/components/viz/ImplicationWebViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.1.2",
  minutes: 90,
  links: {
    revisits: ["m6.1.1", "m2.1.3", "m2.9.1"],
    foreshadows: ["m6.2.2", "m6.2.3", "m6.2.4"],
  },

  puzzle: (
    <>
      <p>
        Calculus textbooks state completeness in different ways. Some say every set bounded above has a least upper bound.
        Others say every increasing bounded sequence converges, or that nested closed intervals have a common point, or that
        every Cauchy sequence converges. Are these the same axiom in different words, or genuinely different assumptions? And
        what exactly is it that the rational numbers lack?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Click each arrow to see why one property implies the next. Then switch to the rationals and see how each one fails.
      </p>
      <ImplicationWebViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the five properties">
        <p>
          In an ordered field <M>{"F"}</M>, consider: (LUB) every nonempty subset bounded above has a least upper bound; (MCT)
          every increasing sequence bounded above converges; (NIP) every nested sequence of closed bounded intervals has a
          point in common; (BW) every bounded sequence has a convergent subsequence; (C) every Cauchy sequence converges. A
          sequence is <strong>Cauchy</strong> if for every <M>{"\\varepsilon > 0"}</M> there is <M>{"N"}</M> with{" "}
          <M>{"|a_m - a_n| < \\varepsilon"}</M> for all <M>{"m, n \\ge N"}</M>: its terms eventually cluster together.
        </p>
      </Definition>

      <Theorem title="equivalence">
        <p>
          In an ordered field with the Archimedean property, that is, in which for every <M>{"x"}</M> there is a natural number{" "}
          <M>{"n > x"}</M>, the five properties are equivalent. LUB on its own implies the Archimedean property.
        </p>
      </Theorem>

      <Proof>
        <p>
          We prove LUB ⇒ MCT; the other links are in the picture. Let <M>{"(a_n)"}</M> be increasing and bounded above, and
          let <M>{"s = \\sup\\{a_n\\}"}</M>. Given <M>{"\\varepsilon > 0"}</M>, <M>{"s - \\varepsilon"}</M> is not an upper
          bound, so <M>{"a_N > s - \\varepsilon"}</M> for some <M>{"N"}</M>. For <M>{"n \\ge N"}</M>,{" "}
          <M>{"s - \\varepsilon < a_N \\le a_n \\le s"}</M>, so <M>{"|a_n - s| < \\varepsilon"}</M>. For the Archimedean
          property: if <M>{"\\mathbb{N}"}</M> were bounded above it would have a supremum <M>{"s"}</M>, and some{" "}
          <M>{"n > s - 1"}</M>, giving <M>{"n + 1 > s"}</M>, a contradiction.
        </p>
      </Proof>

      <Example title="why the Archimedean property matters">
        <p>
          There are ordered fields, such as fields of rational functions ordered suitably, containing infinitely large and
          infinitely small elements. In such a field the sequence <M>{"1/n"}</M> does not tend to <M>{"0"}</M>, since an
          infinitesimal lies below every <M>{"1/n"}</M>. Some of these fields have every Cauchy sequence converging, yet fail
          LUB. So (C) and (NIP) need the Archimedean property as an extra assumption to give the others.
        </p>
      </Example>

      <Remark title="choosing an axiom">
        <p>
          Which form to take as the axiom is a matter of taste. LUB is the most economical. NIP is closest to the intuition
          of a line without gaps. Cauchy completeness has the great advantage that it mentions no order, so it makes sense for
          metric spaces, such as spaces of functions, where it becomes the definition of a complete space. In the rationals
          all five fail, each time because of a missing point such as <M>{"\\sqrt{2}"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cauchy",
      rung: "check",
      prompt: <p>Which describes a Cauchy sequence?</p>,
      answer: {
        kind: "choice",
        options: [
          "Its terms get close to a given limit.",
          "For every ε > 0, all terms from some point on lie within ε of one another.",
          "It is increasing and bounded.",
          "Its differences of consecutive terms tend to 0.",
        ],
        correct: [1],
      },
    },
    {
      key: "qfail",
      rung: "check",
      prompt: <p>Which of the five properties hold in the rational numbers? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["Least upper bounds", "Monotone convergence", "Nested intervals", "None of them"],
        correct: [3],
      },
    },
    {
      key: "sup",
      rung: "apply",
      prompt: <p>The increasing sequence <M>{"a_n = 3 - 1/n"}</M> converges to its supremum. What is it?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "nest",
      rung: "apply",
      prompt: (
        <p>
          The intervals <M>{"[0, 1/n]"}</M> for <M>{"n = 1, 2, 3, \\ldots"}</M> are nested. How many real numbers lie in all
          of them?
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "open",
      rung: "apply",
      prompt: (
        <p>
          The open intervals <M>{"(0, 1/n)"}</M> are nested too. Why does NIP not give a common point?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Because NIP fails in the reals.",
          "Because the intervals are not closed: their intersection is empty, since any x > 0 is excluded once 1/n < x.",
          "Because the intervals are not bounded.",
          "Because they are not nested.",
        ],
        correct: [1],
      },
    },
    {
      key: "mct",
      rung: "prove",
      prompt: <p>Prove that an increasing sequence bounded above converges to its supremum.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Lets s be the supremum, which exists by LUB, and uses that s − ε is not an upper bound to find a_N > s − ε.",
          "Uses monotonicity to get s − ε < a_n ≤ s for all n ≥ N, so a_n → s.",
        ],
      },
    },
    {
      key: "bwc",
      rung: "stretch",
      prompt: (
        <p>
          Prove that a Cauchy sequence with a convergent subsequence converges, to the same limit.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Lets the subsequence tend to L and, given ε, chooses N from the Cauchy condition with ε/2 and a subsequence index n_k ≥ N with |a_{n_k} − L| < ε/2.",
          "Uses the triangle inequality: for n ≥ N, |a_n − L| ≤ |a_n − a_{n_k}| + |a_{n_k} − L| < ε.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend five forms of the completeness of the reals, why they are equivalent given the Archimedean property, how one implies the next, and how each fails in the rationals.",

  glimpse: (
    <p>
      The next chapter puts these forms to work on sequences: monotone convergence, the Bolzano–Weierstrass theorem and
      Cauchy sequences each get a lesson of their own. First, the next lesson asks how many real numbers there are.
    </p>
  ),
};
