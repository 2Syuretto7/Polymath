import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { RootPermViz } from "@/components/viz/RootPermViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m14.3.4",
  minutes: 90,
  links: {
    revisits: ["m14.3.3", "m7.2.3", "m7.3.1"],
    foreshadows: ["m14.4.1", "m14.4.2", "m14.4.3"],
  },

  puzzle: (
    <>
      <p>
        Inside the splitting field of <M>{"x^3 - 2"}</M>, the field <M>{"\\mathbb{Q}(\\omega)"}</M> is normal over{" "}
        <M>{"\\mathbb{Q}"}</M>, but <M>{"\\mathbb{Q}(\\sqrt[3]{2})"}</M> is not. Can the Galois group tell these apart without
        looking at the fields?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Apply σ and τ in different orders and watch how the three roots are permuted.</p>
      <RootPermViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the fundamental theorem of Galois theory">
        <p>
          Let <M>{"L/K"}</M> be finite Galois with group <M>{"G"}</M>, and let <M>{"E"}</M> correspond to{" "}
          <M>{"H = \\mathrm{Gal}(L/E)"}</M>. Then:
        </p>
        <ul>
          <li><M>{"E/K"}</M> is normal if and only if <M>{"H"}</M> is a normal subgroup of <M>{"G"}</M>;</li>
          <li>in that case restriction gives an isomorphism <M>{"G/H \\cong \\mathrm{Gal}(E/K)"}</M>;</li>
          <li>for <M>{"\\sigma \\in G"}</M>, the field <M>{"\\sigma(E)"}</M> corresponds to <M>{"\\sigma H \\sigma^{-1}"}</M>.</li>
        </ul>
      </Theorem>

      <Proof>
        <p>
          An automorphism fixing <M>{"\\sigma(E)"}</M> pointwise is exactly one of the form{" "}
          <M>{"\\sigma h \\sigma^{-1}"}</M> with <M>{"h"}</M> fixing <M>{"E"}</M>, which gives the third point. Now{" "}
          <M>{"E/K"}</M> is normal exactly when every <M>{"K"}</M>-embedding of <M>{"E"}</M> into <M>{"L"}</M> maps{" "}
          <M>{"E"}</M> to itself, since these embeddings send each element to the roots of its minimal polynomial. Every such
          embedding is the restriction of some <M>{"\\sigma \\in G"}</M>. So <M>{"E"}</M> is normal iff{" "}
          <M>{"\\sigma(E) = E"}</M> for all <M>{"\\sigma"}</M>, iff <M>{"\\sigma H \\sigma^{-1} = H"}</M> for all{" "}
          <M>{"\\sigma"}</M>. Then restriction <M>{"G \\to \\mathrm{Gal}(E/K)"}</M> is a homomorphism with kernel{" "}
          <M>{"H"}</M>, onto because both sides have order <M>{"[E : K]"}</M>.
        </p>
      </Proof>

      <Example title="x³ − 2 again">
        <p>
          The Galois group permutes the three roots and is all of <M>{"S_3"}</M>, of order 6. Its normal subgroups are{" "}
          <M>{"\\{1\\}"}</M>, <M>{"A_3 = \\langle\\sigma\\rangle"}</M> and <M>{"S_3"}</M>, matching the normal subfields{" "}
          <M>{"\\mathbb{Q}(\\sqrt[3]{2}, \\omega)"}</M>, <M>{"\\mathbb{Q}(\\omega)"}</M> and <M>{"\\mathbb{Q}"}</M>. The three
          subgroups of order 2 are conjugate, and their fields <M>{"\\mathbb{Q}(\\sqrt[3]{2})"}</M>,{" "}
          <M>{"\\mathbb{Q}(\\omega\\sqrt[3]{2})"}</M>, <M>{"\\mathbb{Q}(\\omega^2\\sqrt[3]{2})"}</M> are carried to one another
          by <M>{"\\sigma"}</M>. And
        </p>
        <MD>{"\\mathrm{Gal}(\\mathbb{Q}(\\omega)/\\mathbb{Q}) \\cong S_3 / A_3 \\cong \\mathbb{Z}/2."}</MD>
      </Example>

      <Remark title="the Galois group of a polynomial">
        <p>
          The Galois group of a separable polynomial of degree <M>{"n"}</M> acts faithfully on its <M>{"n"}</M> roots, so it
          is a subgroup of <M>{"S_n"}</M>, transitive when the polynomial is irreducible. Computing it is a central practical
          problem; the discriminant decides whether it lies in <M>{"A_n"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "normal",
      rung: "check",
      prompt: <p>In the splitting field of <M>{"x^3 - 2"}</M>, which intermediate field is normal over <M>{"\\mathbb{Q}"}</M>?</p>,
      answer: { kind: "choice", options: ["ℚ(ω)", "ℚ(∛2)", "ℚ(ω∛2)", "None"], correct: [0] },
    },
    {
      key: "quot",
      rung: "check",
      prompt: <p>What is the order of <M>{"\\mathrm{Gal}(\\mathbb{Q}(\\omega)/\\mathbb{Q})"}</M>?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "abelian",
      rung: "apply",
      prompt: <p>If <M>{"\\mathrm{Gal}(L/K)"}</M> is abelian, which intermediate fields are normal over <M>{"K"}</M>?</p>,
      answer: { kind: "choice", options: ["All of them", "None", "Only K and L", "Only those of prime degree"], correct: [0] },
    },
    {
      key: "sn",
      rung: "apply",
      prompt: <p>The Galois group of an irreducible separable quartic is a subgroup of <M>{"S_4"}</M>. What is the largest order it can have?</p>,
      answer: { kind: "numeric", value: 24, tolerance: 0 },
    },
    {
      key: "conj",
      rung: "apply",
      prompt: <p>In the visualisation, apply σ and then τ. Which root does the resulting automorphism fix?</p>,
      answer: { kind: "choice", options: ["ω∛2", "∛2", "ω²∛2", "None"], correct: [0] },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>Prove that if <M>{"H = \\mathrm{Gal}(L/E)"}</M> is normal in <M>{"G"}</M>, then <M>{"\\sigma(E) = E"}</M> for every <M>{"\\sigma \\in G"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows the field σ(E) has Galois group σHσ⁻¹.",
          "Uses normality, σHσ⁻¹ = H, and the bijectivity of the correspondence.",
          "Concludes σ(E) = E.",
        ],
      },
    },
    {
      key: "v4",
      rung: "stretch",
      prompt: <p>Explain why every intermediate field of <M>{"\\mathbb{Q}(\\sqrt2, \\sqrt3)/\\mathbb{Q}"}</M> is normal over <M>{"\\mathbb{Q}"}</M>, in two ways: by the group and by the fields.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the Galois group ℤ/2 × ℤ/2 is abelian, so every subgroup is normal.",
          "Notes each intermediate field has degree 1, 2 or 4, and degree 2 extensions are normal.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the fundamental theorem of Galois theory: normal intermediate fields match normal subgroups, Gal(E/K) ≅ G/H, and conjugate subgroups match conjugate fields, using x³ − 2 as the example.",

  glimpse: (
    <p>
      The next lessons apply the theorem to cyclotomic fields and to solvable groups, leading to the insolvability of the
      quintic.
    </p>
  ),
};
