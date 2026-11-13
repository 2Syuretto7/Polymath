import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { BrouwerRayViz } from "@/components/viz/BrouwerRayViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m15.4.5",
  minutes: 85,
  links: {
    revisits: ["m15.4.4", "m15.3.5", "m15.2.1"],
    foreshadows: ["m25.4.3", "m15.5.2", "m15.5.3"],
  },

  puzzle: (
    <>
      <p>
        Stir a cup of tea gently, without splashing, and let it settle. Is some particle of tea back exactly where it started?
        On an interval the answer is yes, by the intermediate value theorem. Brouwer showed the same is true of a disc, and the
        proof needs the fundamental group.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move the point x and follow the ray from its image through it. Then find where the ray cannot be drawn.</p>
      <BrouwerRayViz />
    </>
  ),

  theory: (
    <>
      <Definition title="retractions">
        <p>
          A <strong>retraction</strong> of <M>{"X"}</M> onto a subspace <M>{"A"}</M> is a continuous{" "}
          <M>{"r : X \\to A"}</M> with <M>{"r(a) = a"}</M> for every <M>{"a \\in A"}</M>. If <M>{"i : A \\to X"}</M> is the
          inclusion, then <M>{"r \\circ i = \\mathrm{id}_A"}</M>, so <M>{"r_* \\circ i_*"}</M> is the identity of{" "}
          <M>{"\\pi_1(A)"}</M> and <M>{"i_*"}</M> must be injective.
        </p>
      </Definition>

      <Theorem title="no retraction">
        <p>There is no retraction of the closed disc <M>{"D^2"}</M> onto its boundary circle <M>{"S^1"}</M>.</p>
      </Theorem>

      <Proof>
        <p>
          A retraction would make <M>{"i_* : \\pi_1(S^1) \\to \\pi_1(D^2)"}</M> injective. But{" "}
          <M>{"\\pi_1(S^1) \\cong \\mathbb{Z}"}</M> and <M>{"\\pi_1(D^2)"}</M> is trivial, since the disc is convex.
        </p>
      </Proof>

      <Theorem title="Brouwer’s fixed point theorem">
        <p>Every continuous <M>{"f : D^2 \\to D^2"}</M> has a fixed point.</p>
      </Theorem>

      <Proof>
        <p>
          Suppose <M>{"f(x) \\neq x"}</M> for all <M>{"x"}</M>. Let <M>{"r(x)"}</M> be the point where the ray from{" "}
          <M>{"f(x)"}</M> through <M>{"x"}</M> meets <M>{"S^1"}</M>. Solving a quadratic gives a formula for <M>{"r"}</M> that is
          continuous in <M>{"x"}</M>, and if <M>{"x \\in S^1"}</M> then <M>{"r(x) = x"}</M>. So <M>{"r"}</M> is a retraction of
          the disc onto its boundary, which is impossible.
        </p>
      </Proof>

      <Example title="applications">
        <p>
          A continuous map from any space homeomorphic to the disc, such as a square or a triangle, to itself has a fixed point.
          A real <M>{"3 \\times 3"}</M> matrix with positive entries has a positive eigenvector: the map{" "}
          <M>{"v \\mapsto Av / \\sum (Av)_i"}</M> sends the triangle of non-negative unit-sum vectors to itself, and a fixed point
          is an eigenvector. In higher dimensions the theorem still holds, with a proof by homology.
        </p>
      </Example>

      <Remark title="existence without construction">
        <p>
          The proof says nothing about where the fixed point is. Nash used Brouwer&rsquo;s theorem, in its higher-dimensional
          form, to prove that every finite game has an equilibrium in mixed strategies. Finding fixed points efficiently is a
          hard computational problem, and Sperner&rsquo;s lemma gives a combinatorial route to them.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "statement",
      rung: "check",
      prompt: <p>What does Brouwer&rsquo;s fixed point theorem say about the closed disc?</p>,
      answer: {
        kind: "choice",
        options: [
          "Every continuous map from the disc to itself has a fixed point.",
          "Every continuous map from the disc to itself is a rotation.",
          "Every map from the disc to the circle has a fixed point.",
          "The disc has exactly one fixed point.",
        ],
        correct: [0],
      },
    },
    {
      key: "retract",
      rung: "check",
      prompt: <p>What is a retraction of <M>{"X"}</M> onto <M>{"A"}</M>?</p>,
      answer: {
        kind: "choice",
        options: ["A continuous map X → A fixing every point of A", "A homeomorphism of X with A", "A homotopy from X to A", "An inclusion of A into X"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, where is r(x) when x is on the boundary circle?</p>,
      answer: { kind: "choice", options: ["At x itself", "At f(x)", "At the centre", "Opposite x"], correct: [0] },
    },
    {
      key: "annulus",
      rung: "apply",
      prompt: <p>Which space has a continuous self-map with no fixed point?</p>,
      answer: {
        kind: "choice",
        options: ["The circle, by a rotation", "The closed disc", "A closed square", "A closed interval"],
        correct: [0],
      },
    },
    {
      key: "open",
      rung: "apply",
      prompt: <p>Does every continuous map of the open disc to itself have a fixed point?</p>,
      answer: {
        kind: "choice",
        options: [
          "No: (x, y) ↦ ((x + 1)/2, y/2) maps the open disc into itself, and its only fixed point, (1, 0), is missing.",
          "Yes, by Brouwer.",
          "Yes, since the open disc is contractible.",
          "Only if the map is a contraction.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that there is no retraction from the closed disc onto its boundary circle.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that r ∘ i = id on the circle, so r_* ∘ i_* is the identity of π₁(S¹).",
          "Uses π₁(S¹) ≅ ℤ and π₁(D²) trivial.",
          "Concludes that the identity of ℤ would factor through the trivial group, which is impossible.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Prove the one-dimensional version: every continuous <M>{"f : [0, 1] \\to [0, 1]"}</M> has a fixed point.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers g(x) = f(x) − x.",
          "Notes g(0) ≥ 0 and g(1) ≤ 0.",
          "Applies the intermediate value theorem to find a zero of g. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a retraction is, why the disc does not retract onto its boundary, how a fixed-point-free map would give such a retraction, and some consequences of Brouwer's theorem.",

  glimpse: (
    <p>
      Next, the Seifert-van Kampen theorem computes fundamental groups of spaces glued from simpler pieces, leading to the
      classification of surfaces. The Lefschetz fixed point theorem later counts fixed points using homology.
    </p>
  ),
};
