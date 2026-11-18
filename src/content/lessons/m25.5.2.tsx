import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { UCTViz } from "@/components/viz/UCTViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m25.5.2",
  minutes: 90,
  links: {
    revisits: ["m25.5.1", "m25.3.4", "m25.3.2"],
    foreshadows: ["m25.5.3", "m25.5.4", "m25.6.1"],
  },

  puzzle: (
    <>
      <p>
        ℝP² has H₁ = ℤ/2 and H₂ = 0. Its cohomology has H¹ = 0 and H² = ℤ/2: the torsion has climbed a degree. With ℤ/2
        coefficients, it appears in both degrees. Is there a rule that predicts all of this from integer homology alone?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a space and a coefficient group, and watch the universal coefficient theorem assemble the cohomology.</p>
      <UCTViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the universal coefficient theorem for cohomology">
        <p>For a chain complex of free abelian groups, such as the singular or cellular chains of X, there is a split exact sequence</p>
        <p>
          <M>{"0 \\to \\operatorname{Ext}(H_{n-1}(X), G) \\to H^n(X; G) \\to \\operatorname{Hom}(H_n(X), G) \\to 0,"}</M>
        </p>
        <p>
          so <M>{"H^n(X; G) \\cong \\operatorname{Hom}(H_n(X), G) \\oplus \\operatorname{Ext}(H_{n-1}(X), G)"}</M>. The
          splitting is not natural, but the groups are determined.
        </p>
      </Theorem>

      <Definition title="Ext">
        <p>
          For finitely generated groups, Ext is computed from three rules: it turns direct sums into direct sums,{" "}
          <M>{"\\operatorname{Ext}(\\mathbb{Z}, G) = 0"}</M>, and{" "}
          <M>{"\\operatorname{Ext}(\\mathbb{Z}/m, G) = G/mG"}</M>. So <M>{"\\operatorname{Ext}(\\mathbb{Z}/m, \\mathbb{Z}) = \\mathbb{Z}/m"}</M>{" "}
          and <M>{"\\operatorname{Ext}(\\mathbb{Z}/m, \\mathbb{Q}) = 0"}</M>. In general, Ext(H, G) measures how a free
          resolution of H fails to stay exact after applying Hom into G.
        </p>
      </Definition>

      <Example title="integer coefficients">
        <p>
          If every <M>{"H_n(X)"}</M> is finitely generated with free part <M>{"F_n"}</M> and torsion part <M>{"T_n"}</M>, then{" "}
          <M>{"H^n(X; \\mathbb{Z}) \\cong F_n \\oplus T_{n-1}"}</M>. For the Klein bottle, homology ℤ, ℤ ⊕ ℤ/2, 0 gives
          cohomology ℤ, ℤ, ℤ/2.
        </p>
      </Example>

      <Example title="field coefficients">
        <p>
          Over a field F, Ext vanishes and <M>{"H^n(X; F)"}</M> is the dual vector space of <M>{"H_n(X; F)"}</M>. Over ℚ, only
          the Betti numbers survive. Over ℤ/p, p-torsion is counted twice, once by Hom and once by Ext, which is why ℤ/2
          coefficients see the non-orientable surfaces so clearly.
        </p>
      </Example>

      <Remark title="homology with coefficients">
        <p>
          There is a matching theorem for homology:{" "}
          <M>{"H_n(X; G) \\cong H_n(X) \\otimes G \\oplus \\operatorname{Tor}(H_{n-1}(X), G)"}</M>. Together, the two say that
          integer homology is the master invariant: every other version of (co)homology of a space is determined by it, as
          groups. What it does not determine is extra structure, like the cup product.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "uct",
      rung: "check",
      prompt: <p>What does the universal coefficient theorem compute Hⁿ(X; G) from?</p>,
      answer: { kind: "choice", options: ["Hₙ(X) and Hₙ₋₁(X), via Hom and Ext", "Hⁿ(X; ℤ) alone", "π₁(X)", "The number of n-cells"], correct: [0] },
    },
    {
      key: "extz",
      rung: "check",
      prompt: <p>What is Ext(ℤ, G)?</p>,
      answer: { kind: "choice", options: ["0", "G", "ℤ", "G ⊕ G"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose ℝP² with coefficients ℤ. What is the order of H²?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "lens",
      rung: "apply",
      prompt: <p>The lens space L(5, 1) has H₁ = ℤ/5 and H₂ = 0. What is H²(L(5, 1); ℤ)?</p>,
      answer: { kind: "choice", options: ["ℤ/5", "0", "ℤ", "ℤ/5 ⊕ ℤ/5"], correct: [0] },
    },
    {
      key: "z2",
      rung: "apply",
      prompt: <p>What is the dimension of H¹(ℝP²; ℤ/2) as a vector space over ℤ/2?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Use the universal coefficient theorem to compute H*(ℝP²; ℤ).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Starts from H₀ = ℤ, H₁ = ℤ/2, H₂ = 0.",
          "Computes H⁰ = ℤ, H¹ = Hom(ℤ/2, ℤ) ⊕ Ext(ℤ, ℤ) = 0, and H² = Hom(0, ℤ) ⊕ Ext(ℤ/2, ℤ) = ℤ/2.",
          "States the answer ℤ, 0, ℤ/2 in degrees 0, 1, 2.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If integer homology determines all cohomology groups, why might a topologist still prefer cohomology?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that cohomology carries a ring structure, the cup product, that homology groups do not determine.",
          "Notes cohomology arises naturally from forms, functions and obstructions.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The groups of cohomology hold nothing new. What is new is a product: two cochains of degrees p and q can be multiplied
        to give a cochain of degree p + q.
      </p>
      <p>Next, the cup product, and how it tells apart spaces that homology groups cannot.</p>
    </>
  ),
};
