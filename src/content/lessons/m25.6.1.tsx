import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { HomotopyTableViz } from "@/components/viz/HomotopyTableViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m25.6.1",
  minutes: 95,
  links: {
    revisits: ["m25.5.4", "m25.1.3", "m25.2.3"],
    foreshadows: ["m25.6.2", "m26.7.1", "m39.2.1"],
  },

  puzzle: (
    <>
      <p>
        The 2-sphere has no homology above degree 2. So it seems there should be nothing interesting about maps from the
        3-sphere to the 2-sphere. Yet in 1931 Heinz Hopf found such a map that cannot be deformed to a constant. What is it
        detecting, if not homology?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Here are the homotopy groups πₖ(Sⁿ) for k and n up to 8. Click an entry to see where it comes from, and look for
        patterns along the diagonals.
      </p>
      <HomotopyTableViz />
    </>
  ),

  theory: (
    <>
      <Definition title="higher homotopy groups">
        <p>
          <M>{"\\pi_k(X, x_0)"}</M> is the set of homotopy classes of maps <M>{"(I^k, \\partial I^k) \\to (X, x_0)"}</M>, or
          equivalently of based maps <M>{"S^k \\to X"}</M>. Composition puts two cubes side by side along the first
          coordinate. For k ≥ 2 there is room to slide one cube round the other, so <M>{"\\pi_k"}</M> is{" "}
          <strong>abelian</strong> (the Eckmann–Hilton argument).
        </p>
      </Definition>

      <Theorem title="basic facts">
        <p>
          (1) <M>{"\\pi_k"}</M> is a homotopy invariant and <M>{"\\pi_k(X \\times Y) \\cong \\pi_k(X) \\times \\pi_k(Y)"}</M>. (2) A
          covering map induces isomorphisms on <M>{"\\pi_k"}</M> for k ≥ 2, so <M>{"\\pi_k(S^1) = 0"}</M> and{" "}
          <M>{"\\pi_k(T^n) = 0"}</M> for k ≥ 2. (3) <M>{"\\pi_k(S^n) = 0"}</M> for k &lt; n, by cellular approximation, and{" "}
          <M>{"\\pi_n(S^n) \\cong \\mathbb{Z}"}</M>, by degree.
        </p>
      </Theorem>

      <Theorem title="the Hurewicz theorem">
        <p>
          If X is (n−1)-connected, meaning <M>{"\\pi_k(X) = 0"}</M> for k &lt; n, with n ≥ 2, then{" "}
          <M>{"\\tilde{H}_k(X) = 0"}</M> for k &lt; n and the Hurewicz map <M>{"\\pi_n(X) \\to H_n(X)"}</M>, sending a sphere
          to the image of its fundamental class, is an isomorphism. For n = 1 it is abelianisation.
        </p>
      </Theorem>

      <Example title="spheres">
        <p>
          The Hopf map <M>{"S^3 \\to S^2"}</M>, sending (z, w) in <M>{"S^3 \\subset \\mathbb{C}^2"}</M> to z/w in ℂ ∪ {"{∞}"},
          generates <M>{"\\pi_3(S^2) \\cong \\mathbb{Z}"}</M>. Each fibre is a circle, and any two fibres are linked once.
          Freudenthal&rsquo;s suspension theorem says <M>{"\\pi_k(S^n)"}</M> depends only on k − n when k &lt; 2n − 1: these
          are the stable homotopy groups of spheres, ℤ, ℤ/2, ℤ/2, ℤ/24, 0, 0, ℤ/2, … , whose complete calculation is
          still out of reach.
        </p>
      </Example>

      <Remark title="Whitehead’s theorem">
        <p>
          Homotopy groups are fine enough to detect homotopy type: a map between CW complexes that induces isomorphisms on
          all homotopy groups is a homotopy equivalence. Homology is not enough, unless the spaces are simply connected.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ab",
      rung: "check",
      prompt: <p>For which k is πₖ(X) always abelian?</p>,
      answer: { kind: "choice", options: ["k ≥ 2", "k ≥ 1", "Only k = 1", "Never"], correct: [0] },
    },
    {
      key: "cover",
      rung: "check",
      prompt: <p>Why is πₖ(S¹) = 0 for k ≥ 2?</p>,
      answer: { kind: "choice", options: ["The universal cover ℝ is contractible, and covers induce isomorphisms on πₖ for k ≥ 2", "S¹ is contractible", "S¹ has no H₂", "Maps into S¹ are constant"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the order of π₈(S⁵)?</p>,
      answer: { kind: "numeric", value: 24 },
    },
    {
      key: "hur",
      rung: "apply",
      prompt: <p>X is simply connected and H₂(X) ≅ ℤ³. What is π₂(X)?</p>,
      answer: { kind: "choice", options: ["ℤ³", "0", "ℤ", "It cannot be determined"], correct: [0] },
    },
    {
      key: "stable",
      rung: "apply",
      prompt: <p>π₄(S³) = ℤ/2. Using Freudenthal&rsquo;s theorem, what is π₁₀(S⁹)?</p>,
      answer: { kind: "choice", options: ["ℤ/2", "ℤ", "0", "ℤ/24"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Explain why H₃(S²) = 0 and π₃(S²) ≅ ℤ do not contradict the Hurewicz theorem.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the Hurewicz theorem applies only in the first non-vanishing degree, here degree 2.",
          "Notes it says nothing about π₃(S²) compared with H₃(S²).",
          "Concludes homotopy groups can be non-zero above the dimension, unlike homology.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why might homotopy groups be so much harder to compute than homology groups?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes there is no excision or Mayer–Vietoris for homotopy groups.",
          "Notes higher-dimensional spheres can map onto lower ones in essential ways, as the Hopf map shows.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Homotopy groups lack excision, but they have a substitute: a long exact sequence for fibrations, the maps that look
        locally like products. The Hopf map is one, with circle fibres.
      </p>
      <p>Next, fibrations: the homotopy lifting property and the long exact sequence of homotopy groups.</p>
    </>
  ),
};
