import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { TarskiVaughtViz } from "@/components/viz/TarskiVaughtViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m38.1.2",
  minutes: 90,
  links: {
    revisits: ["m38.1.1", "m20.3.4", "m20.2.1"],
    foreshadows: ["m38.1.3", "m38.3.3", "m38.5.2"],
  },

  puzzle: (
    <>
      <p>
        The even integers under addition form a copy of the integers, so the two groups satisfy exactly the same sentences.
        Yet inside ℤ, the element 2 is divisible by 2, and inside 2ℤ it is not. Being elementarily equivalent is not enough
        for a substructure to be a faithful miniature of the whole. What is the right notion?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a structure inside a larger one, and test a formula with parameters in both.</p>
      <TarskiVaughtViz />
    </>
  ),

  theory: (
    <>
      <Definition title="elementary substructures">
        <p>
          A substructure M ⊆ N is <strong>elementary</strong>, written <M>{"M \\preceq N"}</M>, if for every formula{" "}
          <M>{"\\varphi(\\bar{x})"}</M> and every tuple ā from M, <M>{"M \\models \\varphi(\\bar{a})"}</M> exactly when{" "}
          <M>{"N \\models \\varphi(\\bar{a})"}</M>. N is then an <strong>elementary extension</strong> of M. An embedding
          with this property is an <strong>elementary embedding</strong>.
        </p>
      </Definition>

      <Theorem title="the Tarski-Vaught test">
        <p>
          A substructure M of N is elementary if and only if, for every formula <M>{"\\varphi(\\bar{x}, y)"}</M> and every ā
          from M, whenever <M>{"N \\models \\exists y\\, \\varphi(\\bar{a}, y)"}</M> there is b in M with{" "}
          <M>{"N \\models \\varphi(\\bar{a}, b)"}</M>. The proof is an induction on formulas, where only the existential step
          needs the hypothesis.
        </p>
      </Theorem>

      <Theorem title="downward Löwenheim-Skolem and chains">
        <p>
          For any structure N in a countable language and any countable subset A, there is a countable elementary substructure
          containing A: close A under witnesses for all formulas, countably many times. The union of an{" "}
          <strong>elementary chain</strong> <M>{"M_0 \\preceq M_1 \\preceq \\cdots"}</M> is an elementary extension of each
          <M>{"M_i"}</M>.
        </p>
      </Theorem>

      <Example title="examples">
        <p>
          (ℚ, &lt;) is an elementary substructure of (ℝ, &lt;), since the theory of dense linear orders without endpoints is
          model complete. (ℕ, &lt;) inside (ℤ, &lt;) and (2ℤ, +) inside (ℤ, +) are substructures that are not elementary,
          though in the second case the two are isomorphic.
        </p>
      </Example>

      <Remark title="non-standard extensions">
        <p>
          By compactness applied to the elementary diagram of ℕ, true arithmetic has proper elementary extensions: structures
          with the same first-order truths about every standard number, plus infinite numbers beyond them. Robinson&rsquo;s
          non-standard analysis uses elementary extensions of ℝ in the same way.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is a substructure M of N elementary?</p>,
      answer: { kind: "choice", options: ["When every formula with parameters from M has the same truth value in M and in N", "When M and N are isomorphic", "When M is countable", "When M and N satisfy the same sentences"], correct: [0] },
    },
    {
      key: "tv",
      rung: "check",
      prompt: <p>What does the Tarski-Vaught test require?</p>,
      answer: { kind: "choice", options: ["Whenever N has a witness for an existential formula with parameters in M, M has one", "M must be finite", "Every element of N lies in M", "M must contain all constants"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, is (2ℤ, +) an elementary substructure of (ℤ, +)?</p>,
      answer: { kind: "choice", options: ["No: with parameter 2, ∃y (y + y = 2) is false in 2ℤ but true in ℤ", "Yes: the two groups are isomorphic", "Yes: every substructure of ℤ is elementary", "The question makes no sense"], correct: [0] },
    },
    {
      key: "nz",
      rung: "apply",
      prompt: <p>Which formula with a parameter shows (ℕ, &lt;) is not elementary in (ℤ, &lt;)?</p>,
      answer: { kind: "choice", options: ["∃x (x < 0)", "∀x (x = x)", "∃x (x = x)", "0 = 0"], correct: [0] },
    },
    {
      key: "dls",
      rung: "apply",
      prompt: <p>What does the downward Löwenheim-Skolem theorem give, for a countable language?</p>,
      answer: { kind: "choice", options: ["A countable elementary substructure containing any given countable set", "An uncountable elementary extension only", "A finite model", "An isomorphism with ℕ"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if M ⪯ N then M ≡ N.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a sentence is a formula with no free variables, so the empty tuple of parameters applies.",
          "Applies the definition of elementary substructure to each sentence.",
          "Concludes M and N satisfy exactly the same sentences.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Prove the easy direction of the Tarski-Vaught test: if M ⪯ N, then M has witnesses for existential formulas true in N.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Starts from N ⊨ ∃y φ(ā, y) with ā in M.",
          "Uses elementarity to get M ⊨ ∃y φ(ā, y), so some b in M has M ⊨ φ(ā, b).",
          "Uses elementarity again to conclude N ⊨ φ(ā, b). Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Compactness can be proved without any proof theory: take a product of models, one for each finite piece of a theory,
        and let an ultrafilter decide which coordinates count.
      </p>
      <p>Next, ultraproducts and Łoś&rsquo;s theorem.</p>
    </>
  ),
};
