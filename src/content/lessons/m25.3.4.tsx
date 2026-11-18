import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { CellChainViz } from "@/components/viz/CellChainViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m25.3.4",
  minutes: 95,
  links: {
    revisits: ["m25.3.3", "m25.1.1", "m3.4.2"],
    foreshadows: ["m25.4.1", "m25.4.3", "m25.5.3"],
  },

  puzzle: (
    <>
      <p>
        Singular homology has uncountably many generators in every degree. Yet a torus is built from one point, two edges and
        one square. Is there a chain complex with just those four generators whose homology is the homology of the torus? And
        if the square is glued on differently, giving a Klein bottle, what changes?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Take one point, two loops a and b, and attach a disc along any word. Watch the cellular chain complex, and the
        homology it gives.
      </p>
      <CellChainViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the cellular chain complex">
        <p>
          For a CW complex X with n-skeleton <M>{"X^n"}</M>, let <M>{"C^{CW}_n = H_n(X^n, X^{n-1})"}</M>. Since{" "}
          <M>{"X^n / X^{n-1}"}</M> is a wedge of n-spheres, one for each n-cell, this is free abelian on the n-cells. The
          boundary <M>{"d_n"}</M> is the composite of the connecting map of the pair <M>{"(X^n, X^{n-1})"}</M> with the map to{" "}
          <M>{"H_{n-1}(X^{n-1}, X^{n-2})"}</M>.
        </p>
      </Definition>

      <Theorem title="cellular homology equals singular homology">
        <p>
          <M>{"H_n(C^{CW}) \\cong H_n(X)"}</M>. In particular, <M>{"H_n(X) = 0"}</M> if X has no n-cells, and the rank of{" "}
          <M>{"H_n(X)"}</M> is at most the number of n-cells.
        </p>
        <p>
          <strong>Proof idea.</strong> The long exact sequences of the pairs <M>{"(X^n, X^{n-1})"}</M> show{" "}
          <M>{"H_k(X^n) = 0"}</M> for k &gt; n and <M>{"H_n(X^{n+1}) \\cong H_n(X)"}</M>. Chasing these through one diagram
          identifies the cellular cycles modulo boundaries with <M>{"H_n(X)"}</M>.
        </p>
      </Theorem>

      <Theorem title="the cellular boundary formula">
        <p>
          The coefficient of an (n−1)-cell β in <M>{"d_n(\\alpha)"}</M> is the degree of the composite{" "}
          <M>{"S^{n-1} \\to X^{n-1} \\to S^{n-1}"}</M>: attach α, then collapse everything except β. For a 2-cell attached by
          a word in the 1-cells, this degree is the exponent sum of that letter.
        </p>
      </Theorem>

      <Example title="surfaces and projective spaces">
        <p>
          Torus, word aba⁻¹b⁻¹: <M>{"d_2 = 0"}</M>, so <M>{"H = \\mathbb{Z}, \\mathbb{Z}^2, \\mathbb{Z}"}</M>. Klein bottle, word
          abab⁻¹: <M>{"d_2 = (2, 0)"}</M>, so <M>{"H_1 = \\mathbb{Z} \\oplus \\mathbb{Z}/2"}</M> and <M>{"H_2 = 0"}</M>. ℝPⁿ has
          one cell in each dimension up to n, with <M>{"d_k"}</M> equal to 0 or 2 as k is odd or even. So{" "}
          <M>{"H_k(\\mathbb{R}P^n) = \\mathbb{Z}/2"}</M> for odd k &lt; n, 0 for even 0 &lt; k ≤ n, and ℤ in degree n when n is odd.
        </p>
      </Example>

      <Remark title="the Euler characteristic, again">
        <p>
          Since cellular chains are finitely generated, the alternating sum of the numbers of cells equals the alternating sum
          of the ranks of homology. So χ does not depend on the cell structure: any cell decomposition of the sphere has
          V − E + F = 2.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "gen",
      rung: "check",
      prompt: <p>What are the generators of the cellular chain group in degree n?</p>,
      answer: { kind: "choice", options: ["The n-cells of the CW complex", "All singular n-simplices", "The n-dimensional holes", "The points of the n-skeleton"], correct: [0] },
    },
    {
      key: "none",
      rung: "check",
      prompt: <p>A CW complex has no 3-cells. What is H₃?</p>,
      answer: { kind: "choice", options: ["0", "ℤ", "It cannot be determined", "The same as H₂"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, clear the word and build a a a b b b. What is the order of the torsion part of H₁?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "rp",
      rung: "apply",
      prompt: <p>What is H₃(ℝP³)?</p>,
      answer: { kind: "choice", options: ["ℤ", "ℤ/2", "0", "ℤ²"], correct: [0] },
    },
    {
      key: "chi",
      rung: "apply",
      prompt: <p>A CW structure on a surface has 1 vertex, 4 edges and 1 face. What is its Euler characteristic?</p>,
      answer: { kind: "numeric", value: -2 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Compute the homology of ℝP², which has one cell in each of dimensions 0, 1 and 2, the 2-cell attached along aa.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the chain complex ℤ → ℤ → ℤ with d₂ multiplication by 2 and d₁ = 0.",
          "Computes H₂ = ker d₂ = 0 and H₁ = ℤ/2ℤ.",
          "Notes H₀ = ℤ, as ℝP² is connected.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>ℝP² has the same Betti numbers as a point. What does integer homology see that the Betti numbers miss?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes H₁(ℝP²) = ℤ/2 is torsion, which has rank 0 and so does not affect the Betti numbers.",
          "Notes torsion records cells attached with degree greater than 1, as in ℝP² and the Klein bottle.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The cellular boundary formula uses the degree of a map from a sphere to a sphere. That number is worth studying on
        its own: it measures how many times one sphere wraps round another.
      </p>
      <p>
        Next, degree: its definition through homology, how to compute it by counting preimages, and what it says about
        vector fields on spheres.
      </p>
    </>
  ),
};
