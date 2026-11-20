import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { PolyPermutationViz } from "@/components/viz/PolyPermutationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m38.5.1",
  minutes: 90,
  links: {
    revisits: ["m38.2.3", "m38.1.3", "m7.6.4"],
    foreshadows: ["m38.5.2", "m30.1.2", "m38.2.2"],
  },

  puzzle: (
    <>
      <p>
        A polynomial map from ℂ² to itself, such as (x, y) ↦ (x + y³, y), happens to be injective. Must it also be
        surjective? For a map from a finite set to itself the answer is obviously yes. ℂ is far from finite. Yet there is a
        proof that reduces the question for ℂ to the trivial case of finite sets.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a polynomial and a finite field, and compare injectivity with surjectivity.</p>
      <PolyPermutationViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Ax-Grothendieck">
        <p>
          Every injective polynomial map <M>{"F : \\mathbb{C}^n \\to \\mathbb{C}^n"}</M> is surjective. James Ax proved this
          in 1968 by model theory, and Alexander Grothendieck independently by algebraic geometry. The same holds for any
          algebraically closed field.
        </p>
      </Theorem>

      <Definition title="the statement as a sentence">
        <p>
          Fix n and a bound d on the degrees. &lsquo;Every polynomial map of degree at most d, if injective, is
          surjective&rsquo; is a single first-order sentence <M>{"\\varphi_{n,d}"}</M> in the language of rings: quantify
          over the finitely many coefficients, write injectivity as{" "}
          <M>{"\\forall \\bar{x}\\, \\forall \\bar{y}\\, (F(\\bar{x}) = F(\\bar{y}) \\to \\bar{x} = \\bar{y})"}</M>, and
          surjectivity as <M>{"\\forall \\bar{z}\\, \\exists \\bar{x}\\, F(\\bar{x}) = \\bar{z}"}</M>.
        </p>
      </Definition>

      <Example title="the proof">
        <p>
          In a finite field, an injective map from <M>{"\\mathbb{F}_q^n"}</M> to itself is surjective. The algebraic
          closure of <M>{"\\mathbb{F}_p"}</M> is the union of the finite fields <M>{"\\mathbb{F}_{p^k}"}</M>. Given an
          injective F over it, its coefficients and any target point lie in some <M>{"\\mathbb{F}_{p^k}"}</M>, F maps each
          larger finite field injectively into itself, hence onto itself, and so the target is hit. Thus{" "}
          <M>{"\\varphi_{n,d}"}</M> holds in <M>{"\\overline{\\mathbb{F}_p}"}</M>, and by completeness of{" "}
          <M>{"\\mathrm{ACF}_p"}</M> in every algebraically closed field of characteristic p. By the Lefschetz principle,
          it holds in ℂ.
        </p>
      </Example>

      <Theorem title="the general pattern">
        <p>
          The proof illustrates a common strategy: a statement about ℂ that is first-order and true in positive
          characteristic for all large p is true in ℂ. Ultraproducts make the same move concrete: a non-principal
          ultraproduct of the fields <M>{"\\overline{\\mathbb{F}_p}"}</M> is an algebraically closed field of
          characteristic 0, and by Łoś&rsquo;s theorem it satisfies whatever holds for almost all p.
        </p>
      </Theorem>

      <Remark title="related questions">
        <p>
          The converse direction is the <strong>Jacobian conjecture</strong>: if the Jacobian determinant of a polynomial
          map <M>{"\\mathbb{C}^n \\to \\mathbb{C}^n"}</M> is a non-zero constant, is the map invertible? It is open for every
          n ≥ 2. Ax-Grothendieck also holds for constructible maps and has analogues in other settings, such as surjunctivity
          of cellular automata on sofic groups.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "stmt",
      rung: "check",
      prompt: <p>What does the Ax-Grothendieck theorem say?</p>,
      answer: { kind: "choice", options: ["An injective polynomial map from ℂⁿ to itself is surjective", "Every polynomial map is injective", "A surjective polynomial map is injective", "Polynomial maps are never injective"], correct: [0] },
    },
    {
      key: "finite",
      rung: "check",
      prompt: <p>Why is the statement easy for finite fields?</p>,
      answer: { kind: "choice", options: ["An injective map from a finite set to itself is surjective", "Finite fields are algebraically closed", "Polynomials over finite fields are linear", "Finite fields have characteristic 0"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose f(x) = x³ and 𝔽₁₁. How many distinct values does f take?</p>,
      answer: { kind: "numeric", value: 11, tolerance: 0 },
    },
    {
      key: "fo",
      rung: "apply",
      prompt: <p>Why does the proof fix a bound d on the degrees?</p>,
      answer: { kind: "choice", options: ["So that the statement is a single first-order sentence, with finitely many coefficients", "Because high degree maps are never injective", "To make the field finite", "To avoid characteristic p"], correct: [0] },
    },
    {
      key: "transfer",
      rung: "apply",
      prompt: <p>Which principle moves the result from characteristic p to ℂ?</p>,
      answer: { kind: "choice", options: ["The Lefschetz principle, from completeness of ACF₀ and compactness", "The Nullstellensatz", "The fundamental theorem of algebra", "Zorn’s lemma"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that an injective polynomial map F with coefficients in the algebraic closure of 𝔽ₚ is surjective.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes a target point b, and a finite field 𝔽 containing b and all coefficients of F.",
          "Notes that F maps 𝔽ⁿ into itself, and injectively, so it is a bijection of the finite set 𝔽ⁿ.",
          "Concludes that b has a preimage.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain how compactness turns &lsquo;true in characteristic p for all large p&rsquo; into &lsquo;true in characteristic 0&rsquo;.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes the sentence φ fails in ℂ, so ¬φ is consistent with ACF₀ and, by completeness, ACF₀ proves ¬φ.",
          "Notes that a proof uses finitely many axioms 1 + ⋯ + 1 ≠ 0, so ¬φ holds in ACFₚ for all large p.",
          "Gets a contradiction. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Ultraproducts of fields gave a field of characteristic 0. An ultrapower of ℝ itself gives a field with infinitely
        small and infinitely large elements, in which Leibniz&rsquo;s infinitesimals become rigorous.
      </p>
      <p>Next, non-standard analysis.</p>
    </>
  ),
};
