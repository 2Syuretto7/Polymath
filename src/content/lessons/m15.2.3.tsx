import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { DiagonalProductViz } from "@/components/viz/DiagonalProductViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m15.2.3",
  minutes: 90,
  links: {
    revisits: ["m15.2.2", "m15.1.2", "m1.8.3"],
    foreshadows: ["m20.6.5", "m23.4.2", "m20.3.3"],
  },

  puzzle: (
    <>
      <p>
        A sequence in <M>{"[0, 1]"}</M> always has a convergent subsequence. What about a sequence of infinite sequences, a
        sequence of points in the cube <M>{"[0, 1]^{\\mathbb{N}}"}</M>? Each point has infinitely many coordinates to tame at
        once. Can we still find a subsequence that settles down in every coordinate?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Squeeze one coordinate at a time, always keeping the half that holds more of the sequence, and watch how many terms
        survive.
      </p>
      <DiagonalProductViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the product topology">
        <p>
          For spaces <M>{"X_i"}</M> indexed by any set <M>{"I"}</M>, the product <M>{"\\prod X_i"}</M> has as basis the sets{" "}
          <M>{"\\prod U_i"}</M> with each <M>{"U_i"}</M> open and <M>{"U_i = X_i"}</M> for all but finitely many <M>{"i"}</M>.
          It is the coarsest topology making every projection continuous, and a net or sequence converges in it exactly when
          it converges in every coordinate.
        </p>
      </Definition>

      <Theorem title="Tychonoff">
        <p>Any product of compact spaces is compact, in the product topology.</p>
      </Theorem>

      <Proof>
        <p>
          For two factors, let <M>{"\\mathcal{U}"}</M> be an open cover of <M>{"X \\times Y"}</M> by basic sets. For each{" "}
          <M>{"x"}</M>, the slice <M>{"\\{x\\} \\times Y"}</M> is compact, so finitely many members cover it; their first
          factors intersect in an open <M>{"W_x \\ni x"}</M>, and those finitely many members cover <M>{"W_x \\times Y"}</M>, a
          tube. Finitely many <M>{"W_x"}</M> cover <M>{"X"}</M>, giving a finite subcover. Induction handles finite products.
          For arbitrary products one uses the axiom of choice, through Zorn&rsquo;s lemma or ultrafilters; the statement for
          all products is in fact equivalent to the axiom of choice.
        </p>
      </Proof>

      <Example title="countable products and the diagonal argument">
        <p>
          For <M>{"[0, 1]^{\\mathbb{N}}"}</M> there is a direct proof. Given a sequence <M>{"(p_n)"}</M>, pick a subsequence
          whose first coordinates converge, then a further subsequence whose second coordinates converge, and so on. The
          diagonal subsequence, whose <M>{"k"}</M>th term is the <M>{"k"}</M>th term of the <M>{"k"}</M>th subsequence,
          converges in every coordinate, hence in the product topology. This is Cantor&rsquo;s diagonal idea put to
          constructive use.
        </p>
      </Example>

      <Remark title="why finitely many factors in the basis">
        <p>
          The box topology, allowing every <M>{"U_i"}</M> to be a proper open set, is finer. In it <M>{"[0, 1]^{\\mathbb{N}}"}</M>{" "}
          is not compact: the boxes <M>{"\\prod U_i"}</M> with each <M>{"U_i"}</M> either <M>{"[0, 2/3)"}</M> or{" "}
          <M>{"(1/3, 1]"}</M> form an uncountable cover with no finite, or even countable, subcover. Tychonoff&rsquo;s theorem
          is one reason the product topology is the right one.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "statement",
      rung: "check",
      prompt: <p>What does Tychonoff&rsquo;s theorem say?</p>,
      answer: {
        kind: "choice",
        options: [
          "Any product of compact spaces is compact in the product topology.",
          "Any product of compact spaces is compact in the box topology.",
          "Only finite products of compact spaces are compact.",
          "Any product of connected spaces is compact.",
        ],
        correct: [0],
      },
    },
    {
      key: "basis",
      rung: "check",
      prompt: <p>In the product topology, a basic open set restricts how many coordinates?</p>,
      answer: { kind: "choice", options: ["Finitely many", "All of them", "Countably many", "None"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, why do fewer terms remain after each coordinate is squeezed?</p>,
      answer: {
        kind: "choice",
        options: [
          "Each halving keeps only the terms in one half, so we pass to a subsequence each time.",
          "The terms move.",
          "The coordinates are not independent.",
          "The sequence is converging already.",
        ],
        correct: [0],
      },
    },
    {
      key: "converge",
      rung: "apply",
      prompt: <p>A sequence in <M>{"[0, 1]^{\\mathbb{N}}"}</M> converges in the product topology exactly when it converges in each coordinate. Does the sequence whose <M>{"n"}</M>th term has 1 in coordinate <M>{"n"}</M> and 0 elsewhere converge?</p>,
      answer: {
        kind: "choice",
        options: ["Yes, to the zero sequence, since each coordinate is eventually 0", "No, since it never gets close to anything", "Yes, to the all-ones sequence", "It has no convergent subsequence"],
        correct: [0],
      },
    },
    {
      key: "tube",
      rung: "apply",
      prompt: <p>In the proof for two factors, which property of compactness lets finitely many tubes <M>{"W_x \\times Y"}</M> cover <M>{"X \\times Y"}</M>?</p>,
      answer: {
        kind: "choice",
        options: ["Compactness of X, applied to the open cover by the sets W_x", "Compactness of Y alone", "Connectedness of X", "The Hausdorff property"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the closed unit square <M>{"[0, 1]^2"}</M> is compact, using that <M>{"[0, 1]"}</M> is compact.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes an open cover and, for each x, covers the slice {x} × [0, 1] by finitely many members using compactness of [0, 1].",
          "Finds an open W_x round x so that the same finitely many members cover W_x × [0, 1].",
          "Covers [0, 1] by finitely many W_x and concludes there is a finite subcover.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why <M>{"[0, 1]^{\\mathbb{N}}"}</M> is not compact in the box topology.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Builds a cover by boxes whose factors are each one of two overlapping open pieces, such as [0, 2/3) and (1/3, 1].",
          "Notes that points with coordinates in {0, 1} lie in exactly one box each, and there are uncountably many such points.",
          "Concludes no finite subcover exists. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the product topology, the tube argument for a product of two compact spaces, the diagonal argument for countable products, and why the box topology fails.",

  glimpse: (
    <p>
      Next, local compactness lets us compactify spaces like ℝ by adding a point at infinity. Tychonoff&rsquo;s theorem
      reappears behind the Banach-Alaoglu theorem in functional analysis, and its equivalence with choice in set theory.
    </p>
  ),
};
