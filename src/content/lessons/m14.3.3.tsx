import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { GaloisLatticeViz } from "@/components/viz/GaloisLatticeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m14.3.3",
  minutes: 90,
  links: {
    revisits: ["m14.3.2", "m7.2.2", "m14.1.1"],
    foreshadows: ["m14.3.4", "m14.4.2", "m14.4.3"],
  },

  puzzle: (
    <>
      <p>
        Between <M>{"\\mathbb{Q}"}</M> and <M>{"\\mathbb{Q}(\\sqrt2, \\sqrt3)"}</M> there are fields like{" "}
        <M>{"\\mathbb{Q}(\\sqrt2)"}</M>, <M>{"\\mathbb{Q}(\\sqrt3)"}</M> and <M>{"\\mathbb{Q}(\\sqrt6)"}</M>. Are there any
        others? Finding all intermediate fields directly looks hopeless, since a field has infinitely many elements. Galois
        found a way to count them with a finite group.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Click a subgroup to see the field it fixes, and compare the two diagrams.</p>
      <GaloisLatticeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="fixed field">
        <p>
          For a group <M>{"H"}</M> of automorphisms of <M>{"L"}</M>, the <strong>fixed field</strong> is{" "}
          <M>{"L^H = \\{x \\in L : \\sigma(x) = x \\text{ for all } \\sigma \\in H\\}"}</M>. For an intermediate field{" "}
          <M>{"E"}</M>, write <M>{"\\mathrm{Gal}(L/E)"}</M> for the automorphisms of <M>{"L"}</M> fixing <M>{"E"}</M>.
        </p>
      </Definition>

      <Theorem title="Artin's theorem">
        <p>
          If <M>{"H"}</M> is a finite group of automorphisms of a field <M>{"L"}</M>, then <M>{"L/L^H"}</M> is Galois with
          group <M>{"H"}</M>, and <M>{"[L : L^H] = |H|"}</M>.
        </p>
      </Theorem>

      <Theorem title="the Galois correspondence">
        <p>Let <M>{"L/K"}</M> be finite Galois with group <M>{"G"}</M>. The maps</p>
        <p style={{ textAlign: "center" }}>
          <M>{"H \\mapsto L^H"}</M> and <M>{"E \\mapsto \\mathrm{Gal}(L/E)"}</M>
        </p>
        <p>
          are mutually inverse bijections between subgroups of <M>{"G"}</M> and fields <M>{"E"}</M> with{" "}
          <M>{"K \\subseteq E \\subseteq L"}</M>. They reverse inclusions, and{" "}
          <M>{"[L : E] = |\\mathrm{Gal}(L/E)|"}</M>, <M>{"[E : K] = [G : \\mathrm{Gal}(L/E)]"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          <M>{"L/E"}</M> is Galois, since <M>{"L"}</M> is a splitting field over <M>{"K"}</M> of a separable polynomial and
          hence over <M>{"E"}</M> too. So <M>{"|\\mathrm{Gal}(L/E)| = [L : E]"}</M>, and the fixed field of{" "}
          <M>{"\\mathrm{Gal}(L/E)"}</M> contains <M>{"E"}</M> and has the same degree below <M>{"L"}</M>, so equals{" "}
          <M>{"E"}</M>. In the other direction, <M>{"\\mathrm{Gal}(L/L^H)"}</M> contains <M>{"H"}</M>, and by Artin both have
          order <M>{"[L : L^H]"}</M>, so they are equal. Inclusions reverse because a larger group fixes fewer elements.
        </p>
      </Proof>

      <Example title="ℚ(√2, √3)">
        <p>
          The Galois group has 4 elements, changing the signs of <M>{"\\sqrt2"}</M> and <M>{"\\sqrt3"}</M>, and is{" "}
          <M>{"\\mathbb{Z}/2 \\times \\mathbb{Z}/2"}</M>. It has exactly three subgroups of order 2, so there are exactly three
          intermediate fields of degree 2: <M>{"\\mathbb{Q}(\\sqrt2)"}</M>, <M>{"\\mathbb{Q}(\\sqrt3)"}</M> and{" "}
          <M>{"\\mathbb{Q}(\\sqrt6)"}</M>. There are no others.
        </p>
      </Example>

      <Remark title="why this matters">
        <p>
          The correspondence turns questions about infinite fields into questions about finite groups, which can be listed and
          computed. It is the engine behind the classical results of the theory: constructibility of polygons, the
          insolvability of the quintic, and the structure of finite fields.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "count",
      rung: "check",
      prompt: <p>How many intermediate fields does <M>{"\\mathbb{Q}(\\sqrt2, \\sqrt3)/\\mathbb{Q}"}</M> have, including both ends?</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0 },
    },
    {
      key: "rev",
      rung: "check",
      prompt: <p>If <M>{"H_1 \\subseteq H_2"}</M>, how do their fixed fields compare?</p>,
      answer: { kind: "choice", options: ["L^{H₂} ⊆ L^{H₁}", "L^{H₁} ⊆ L^{H₂}", "They are equal", "They are unrelated"], correct: [0] },
    },
    {
      key: "index",
      rung: "apply",
      prompt: <p>In <M>{"\\mathbb{Q}(\\sqrt[3]{2}, \\omega)"}</M>, with Galois group <M>{"S_3"}</M>, what is the degree over <M>{"\\mathbb{Q}"}</M> of the fixed field of a subgroup of order 2?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "s3",
      rung: "apply",
      prompt: <p>How many intermediate fields does <M>{"\\mathbb{Q}(\\sqrt[3]{2}, \\omega)/\\mathbb{Q}"}</M> have, including both ends?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "fix",
      rung: "apply",
      prompt: <p>Which field is fixed by the automorphism of <M>{"\\mathbb{Q}(\\sqrt2, \\sqrt3)"}</M> that changes the signs of both <M>{"\\sqrt2"}</M> and <M>{"\\sqrt3"}</M>?</p>,
      answer: { kind: "choice", options: ["ℚ(√6)", "ℚ(√2)", "ℚ(√3)", "ℚ"], correct: [0] },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>For a finite Galois extension <M>{"L/K"}</M> with intermediate field <M>{"E"}</M>, prove that <M>{"L^{\\mathrm{Gal}(L/E)} = E"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes L/E is Galois, so |Gal(L/E)| = [L : E].",
          "Notes the fixed field F contains E, and by Artin [L : F] = |Gal(L/E)|.",
          "Concludes [L : F] = [L : E] with E ⊆ F, so F = E.",
        ],
      },
    },
    {
      key: "prim",
      rung: "stretch",
      prompt: <p>Use the correspondence to show that a finite Galois extension has only finitely many intermediate fields.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes intermediate fields correspond bijectively to subgroups of the finite Galois group.",
          "Concludes there are finitely many, at most the number of subsets of G.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the fixed field of a group of automorphisms, Artin's theorem, how the Galois correspondence matches subgroups with intermediate fields and reverses inclusions, and how it finds all subfields of ℚ(√2, √3).",

  glimpse: (
    <p>
      The next lesson completes the fundamental theorem: normal subgroups correspond to normal intermediate extensions. Later,
      solvable groups explain which equations can be solved by radicals.
    </p>
  ),
};
