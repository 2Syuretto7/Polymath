import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { TowerViz } from "@/components/viz/TowerViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m14.1.1",
  minutes: 80,
  links: {
    revisits: ["m7.7.4", "m3.4.4", "m8.1.1"],
    foreshadows: ["m14.1.2", "m14.1.4", "m14.3.4"],
  },

  puzzle: (
    <>
      <p>
        Every number of the form <M>{"a + b\\sqrt2"}</M> with rational <M>{"a, b"}</M> can be added, multiplied and divided
        without leaving that form. So <M>{"\\mathbb{Q}(\\sqrt2)"}</M> is a field, and it looks like a two-dimensional space
        over <M>{"\\mathbb{Q}"}</M>. What happens to the dimension when we adjoin <M>{"\\sqrt3"}</M> as well?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a tower of fields and multiply the bases of the two steps.</p>
      <TowerViz />
    </>
  ),

  theory: (
    <>
      <Definition title="field extension and degree">
        <p>
          A <strong>field extension</strong> <M>{"L/K"}</M> is a field <M>{"L"}</M> containing a subfield <M>{"K"}</M>. Then{" "}
          <M>{"L"}</M> is a vector space over <M>{"K"}</M>, and its dimension is the <strong>degree</strong>{" "}
          <M>{"[L : K]"}</M>. The extension is <strong>finite</strong> if the degree is finite.
        </p>
      </Definition>

      <Example title="first examples">
        <p>
          <M>{"[\\mathbb{C} : \\mathbb{R}] = 2"}</M>, with basis <M>{"1, i"}</M>.{" "}
          <M>{"[\\mathbb{Q}(\\sqrt2) : \\mathbb{Q}] = 2"}</M>, with basis <M>{"1, \\sqrt2"}</M>: these span, and they are
          independent because <M>{"\\sqrt2"}</M> is irrational. <M>{"[\\mathbb{R} : \\mathbb{Q}]"}</M> is infinite, since a
          finite-dimensional space over <M>{"\\mathbb{Q}"}</M> is countable.
        </p>
      </Example>

      <Theorem title="the tower law">
        <p>If <M>{"K \\subseteq L \\subseteq M"}</M> are fields, then</p>
        <MD>{"[M : K] = [M : L]\\,[L : K],"}</MD>
        <p>in the sense that the left side is finite exactly when both factors are.</p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"\\alpha_1, \\dots, \\alpha_m"}</M> be a basis of <M>{"L"}</M> over <M>{"K"}</M> and{" "}
          <M>{"\\beta_1, \\dots, \\beta_n"}</M> a basis of <M>{"M"}</M> over <M>{"L"}</M>. We claim the{" "}
          <M>{"mn"}</M> products <M>{"\\alpha_i \\beta_j"}</M> form a basis of <M>{"M"}</M> over <M>{"K"}</M>. They span: any{" "}
          <M>{"x \\in M"}</M> is <M>{"\\sum_j c_j \\beta_j"}</M> with <M>{"c_j \\in L"}</M>, and each{" "}
          <M>{"c_j = \\sum_i a_{ij}\\alpha_i"}</M> with <M>{"a_{ij} \\in K"}</M>. They are independent: if{" "}
          <M>{"\\sum_{i,j} a_{ij}\\alpha_i\\beta_j = 0"}</M>, then grouping by <M>{"\\beta_j"}</M> gives{" "}
          <M>{"\\sum_i a_{ij}\\alpha_i = 0"}</M> for each <M>{"j"}</M>, so every <M>{"a_{ij} = 0"}</M>.
        </p>
      </Proof>

      <Remark title="a first use">
        <p>
          The degree of an intermediate field divides the degree of the whole. So an extension of prime degree has no fields
          strictly between, and a field of degree 4 over <M>{"\\mathbb{Q}"}</M> cannot contain a number whose own field has
          degree 3. This simple divisibility is behind the impossibility proofs for ruler-and-compass constructions.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "c",
      rung: "check",
      prompt: <p>What is <M>{"[\\mathbb{C} : \\mathbb{R}]"}</M>?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "tower",
      rung: "check",
      prompt: <p>If <M>{"[L : K] = 3"}</M> and <M>{"[M : L] = 4"}</M>, what is <M>{"[M : K]"}</M>?</p>,
      answer: { kind: "numeric", value: 12, tolerance: 0 },
    },
    {
      key: "basis",
      rung: "apply",
      prompt: <p>Which set is a basis of <M>{"\\mathbb{Q}(\\sqrt2, \\sqrt3)"}</M> over <M>{"\\mathbb{Q}"}</M>?</p>,
      answer: {
        kind: "choice",
        options: ["1, √2, √3, √6", "1, √2, √3", "√2, √3", "1, √6"],
        correct: [0],
      },
    },
    {
      key: "divide",
      rung: "apply",
      prompt: <p>A field <M>{"L"}</M> has <M>{"[L : \\mathbb{Q}] = 6"}</M>. Which of these could <em>not</em> be the degree of a subfield of <M>{"L"}</M> over <M>{"\\mathbb{Q}"}</M>?</p>,
      answer: { kind: "choice", options: ["1", "2", "3", "4"], correct: [3] },
    },
    {
      key: "prime",
      rung: "apply",
      prompt: <p>How many fields lie strictly between <M>{"K"}</M> and <M>{"L"}</M> when <M>{"[L : K] = 5"}</M>?</p>,
      answer: { kind: "numeric", value: 0, tolerance: 0 },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>Prove the tower law for finite extensions.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes bases αᵢ of L over K and βⱼ of M over L.",
          "Shows the products αᵢβⱼ span M over K.",
          "Shows they are linearly independent over K, so [M : K] = mn.",
        ],
      },
    },
    {
      key: "sqrt3",
      rung: "stretch",
      prompt: <p>Show that <M>{"\\sqrt3 \\notin \\mathbb{Q}(\\sqrt2)"}</M>, and deduce that <M>{"[\\mathbb{Q}(\\sqrt2, \\sqrt3) : \\mathbb{Q}] = 4"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes √3 = a + b√2 and squares, comparing rational and irrational parts to reach a contradiction.",
          "Concludes [ℚ(√2, √3) : ℚ(√2)] = 2 and applies the tower law.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a field extension and its degree are, why ℚ(√2) has degree 2, how the tower law multiplies degrees with a basis of products, and why the degree of an intermediate field divides the whole.",

  glimpse: (
    <p>
      The next lesson studies algebraic elements and their minimal polynomials, which compute degrees. Later the tower law
      settles the ancient construction problems and underlies the Galois correspondence.
    </p>
  ),
};
