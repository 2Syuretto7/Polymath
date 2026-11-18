import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { DeckViz } from "@/components/viz/DeckViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m25.2.3",
  minutes: 90,
  links: {
    revisits: ["m25.2.2", "m7.2.3", "m7.4.1"],
    foreshadows: ["m25.3.1", "m25.4.3", "m25.6.2"],
  },

  puzzle: (
    <>
      <p>
        The real line covers the circle, and shifting ℝ by 1 does not change which point of the circle anything lies over.
        Some covers have so many such symmetries that every sheet looks like every other. Others have none at all except
        the identity. What decides which?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A deck transformation permutes the sheets of a cover while respecting every a-edge and b-edge. Pick a cover and try
        each symmetry; some covers look the same from every sheet, and some do not.
      </p>
      <DeckViz />
    </>
  ),

  theory: (
    <>
      <Definition title="deck transformations">
        <p>
          A <strong>deck transformation</strong> of a cover <M>{"p: \\tilde{X} \\to X"}</M> is a homeomorphism{" "}
          <M>{"\\tau: \\tilde{X} \\to \\tilde{X}"}</M> with <M>{"p \\tau = p"}</M>. They form a group{" "}
          <M>{"G(\\tilde{X})"}</M> under composition. Since a deck transformation is a lift of <M>p</M>, it is fixed by where
          it sends one point; so a non-identity deck transformation has no fixed points.
        </p>
      </Definition>

      <Definition title="normal covers">
        <p>
          A connected cover is <strong>normal</strong> (or regular, or Galois) when its deck group acts transitively on each
          fibre: for any two points over the same point of X, some deck transformation carries one to the other.
        </p>
      </Definition>

      <Theorem title="the deck group">
        <p>
          Let <M>{"H = p_*(\\pi_1(\\tilde{X}, \\tilde{x}_0))"}</M>, with <M>X</M> path-connected and locally path-connected.
          Then the cover is normal exactly when <M>H</M> is a normal subgroup, and in general
        </p>
        <p>
          <M>{"G(\\tilde{X}) \\cong N(H)/H,"}</M>
        </p>
        <p>
          where <M>N(H)</M> is the normaliser. For the universal cover, <M>H</M> is trivial, so its deck group is{" "}
          <M>{"\\pi_1(X)"}</M> itself.
        </p>
        <p>
          <strong>Proof idea.</strong> A deck transformation sending <M>{"\\tilde{x}_0"}</M> to <M>{"\\tilde{x}_1"}</M> exists
          exactly when the two base points give the same subgroup, by the lifting criterion. Moving the base point along the
          lift of a loop <M>g</M> conjugates <M>H</M> by <M>g</M>, so the reachable points correspond to <M>g</M> in{" "}
          <M>N(H)</M>, and two such <M>g</M> give the same point when they differ by an element of <M>H</M>.
        </p>
      </Theorem>

      <Definition title="covering space actions">
        <p>
          An action of a group <M>G</M> on a space <M>Y</M> is a <strong>covering space action</strong> if each point has a
          neighbourhood <M>U</M> whose translates <M>gU</M> are pairwise disjoint. Then <M>{"Y \\to Y/G"}</M> is a normal
          cover with deck group <M>G</M>, and if <M>Y</M> is simply connected, <M>{"\\pi_1(Y/G) \\cong G"}</M>.
        </p>
      </Definition>

      <Example title="from actions to fundamental groups">
        <p>
          ℤ acts on ℝ by translation, giving <M>{"\\pi_1(S^1) \\cong \\mathbb{Z}"}</M>. ℤ² acts on ℝ², giving the torus.
          The antipodal map makes ℤ/2 act on Sⁿ, giving <M>{"\\pi_1(\\mathbb{R}P^n) \\cong \\mathbb{Z}/2"}</M> for n ≥ 2.
          ℤ/m acts on S³ ⊂ ℂ² by <M>{"(z, w) \\mapsto (\\zeta z, \\zeta^q w)"}</M>, giving the lens spaces.
        </p>
      </Example>

      <Remark title="a non-normal cover">
        <p>
          In the visualisation, the cover of the figure eight with a = (0 1) and b = (1 2) has only the identity as a deck
          transformation: sheet 2 has a b-edge that is not a loop and an a-edge that is, while sheet 0 has the reverse
          pattern. Its subgroup is its own normaliser.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "fix",
      rung: "check",
      prompt: <p>A deck transformation of a connected cover fixes a point. What can you conclude?</p>,
      answer: { kind: "choice", options: ["It is the identity", "It has order 2", "The cover is universal", "The cover is trivial"], correct: [0] },
    },
    {
      key: "univ",
      rung: "check",
      prompt: <p>What is the deck group of the universal cover of X?</p>,
      answer: { kind: "choice", options: ["π₁(X)", "The trivial group", "ℤ", "The abelianisation of π₁(X)"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many deck transformations does the cover with a = (0 1) and b = (1 2) have?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "two",
      rung: "apply",
      prompt: <p>Why is every connected 2-sheeted cover normal?</p>,
      answer: { kind: "choice", options: ["A subgroup of index 2 is always normal", "Every subgroup is normal", "2-sheeted covers are universal", "The base must be simply connected"], correct: [0] },
    },
    {
      key: "lens",
      rung: "apply",
      prompt: <p>ℤ/5 acts on S³ by a covering space action. What is the order of the fundamental group of the quotient?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if a connected cover is normal, the number of deck transformations equals the number of sheets.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Fixes a point over the base point and maps each deck transformation to its image.",
          "Uses uniqueness of lifts to show this map is injective.",
          "Uses normality (transitivity on the fibre) to show it is surjective, so the counts agree.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The Klein bottle is covered twice by the torus. Is this cover normal, and what is its deck group?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the cover has two sheets, so its subgroup has index 2 and is normal.",
          "Concludes the deck group has two elements, ℤ/2, swapping the sheets.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Group actions now produce spaces with any fundamental group one likes, and covering theory has shown that π₁ is
        rich. But π₁ only sees loops: it cannot tell S² from S³, both simply connected.
      </p>
      <p>
        Next, homology: an algebraic invariant in every dimension, built from chains of simplices and their boundaries.
      </p>
    </>
  ),
};
