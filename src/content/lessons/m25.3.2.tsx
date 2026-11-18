import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { DiscPairViz } from "@/components/viz/DiscPairViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m25.3.2",
  minutes: 100,
  links: {
    revisits: ["m25.3.1", "m25.1.2", "m7.2.5"],
    foreshadows: ["m25.3.3", "m25.4.1", "m25.4.2"],
  },

  puzzle: (
    <>
      <p>
        The disc is contractible, so its homology is boring. Its boundary circle is not. Crush the circle to a point and the
        disc becomes a sphere. Can the boring homology of a disc, and what we know of a circle, be made to tell us the
        homology of the sphere, and then of every sphere?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose n and read the long exact sequence of the disc relative to its boundary sphere. Because the middle column is
        almost all zeros, the connecting map has to be an isomorphism.
      </p>
      <DiscPairViz />
    </>
  ),

  theory: (
    <>
      <Definition title="relative homology">
        <p>
          For a subspace <M>{"A \\subseteq X"}</M>, the relative chains are <M>{"C_n(X, A) = C_n(X)/C_n(A)"}</M>: chains in{" "}
          <M>X</M>, ignoring anything in <M>A</M>. A relative cycle is a chain whose boundary lies in <M>A</M>, and{" "}
          <M>{"H_n(X, A)"}</M> is the homology of these chains. Reduced homology <M>{"\\tilde{H}_n"}</M> is the same as{" "}
          <M>{"H_n"}</M> except that <M>{"\\tilde{H}_0"}</M> loses one copy of ℤ, so a point has all reduced groups zero.
        </p>
      </Definition>

      <Theorem title="the long exact sequence of a pair">
        <p>There is an exact sequence</p>
        <p>
          <M>{"\\cdots \\to H_n(A) \\to H_n(X) \\to H_n(X, A) \\xrightarrow{\\partial} H_{n-1}(A) \\to H_{n-1}(X) \\to \\cdots"}</M>
        </p>
        <p>
          where ∂ takes a relative cycle to its boundary, a cycle in <M>A</M>. It comes from the short exact sequence of chain
          complexes <M>{"0 \\to C(A) \\to C(X) \\to C(X, A) \\to 0"}</M> by a diagram chase, the snake lemma in disguise.
          Exactness means the image of each map is the kernel of the next.
        </p>
      </Theorem>

      <Theorem title="excision">
        <p>
          If <M>{"Z \\subseteq A \\subseteq X"}</M> and the closure of <M>Z</M> lies in the interior of <M>A</M>, then the
          inclusion induces isomorphisms <M>{"H_n(X - Z, A - Z) \\cong H_n(X, A)"}</M>. What happens deep inside <M>A</M> does
          not matter to relative homology.
        </p>
        <p>
          <strong>Proof idea.</strong> Barycentric subdivision, repeated, makes every singular simplex small enough to lie in{" "}
          <M>{"X - Z"}</M> or in the interior of <M>A</M>, without changing homology. Chains in <M>A</M> are thrown away
          anyway.
        </p>
      </Theorem>

      <Theorem title="good pairs">
        <p>
          If <M>A</M> is a non-empty closed subspace that is a deformation retract of some neighbourhood (a{" "}
          <strong>good pair</strong>), then <M>{"H_n(X, A) \\cong \\tilde{H}_n(X/A)"}</M>. CW complexes and their subcomplexes
          are good pairs.
        </p>
      </Theorem>

      <Example title="the homology of spheres">
        <p>
          Apply the reduced long exact sequence to <M>{"(D^n, S^{n-1})"}</M>. The disc has zero reduced homology, so{" "}
          <M>{"\\tilde{H}_k(D^n, S^{n-1}) \\cong \\tilde{H}_{k-1}(S^{n-1})"}</M>. Since <M>{"D^n/S^{n-1} = S^n"}</M>, the
          left side is <M>{"\\tilde{H}_k(S^n)"}</M>. Starting from <M>{"S^0"}</M>, two points, induction gives
        </p>
        <p>
          <M>{"\\tilde{H}_k(S^n) = \\mathbb{Z} \\text{ if } k = n, \\text{ and } 0 \\text{ otherwise.}"}</M>
        </p>
      </Example>

      <Remark title="what follows at once">
        <p>
          <M>{"S^m"}</M> and <M>{"S^n"}</M> are not homotopy equivalent for m ≠ n, and ℝᵐ is not homeomorphic to ℝⁿ: removing
          a point leaves something homotopy equivalent to a sphere. The sphere is not a retract of the disc, since{" "}
          <M>{"\\tilde{H}_{n-1}"}</M> would factor ℤ through 0, and so every map <M>{"D^n \\to D^n"}</M> has a fixed point:
          Brouwer&rsquo;s theorem in every dimension.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "exact",
      rung: "check",
      prompt: <p>What does it mean for a sequence of maps to be exact at a group?</p>,
      answer: { kind: "choice", options: ["The image of the incoming map equals the kernel of the outgoing map", "Both maps are isomorphisms", "Both maps are zero", "The group is trivial"], correct: [0] },
    },
    {
      key: "exc",
      rung: "check",
      prompt: <p>What does excision allow?</p>,
      answer: { kind: "choice", options: ["Removing a subspace well inside A without changing H(X, A)", "Removing any subspace without changing H(X)", "Adding a disc to any space", "Ignoring torsion"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose n = 4. In which degree k is Hₖ(D⁴, S³) non-zero?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "rn",
      rung: "apply",
      prompt: <p>Why is ℝ³ not homeomorphic to ℝ⁵?</p>,
      answer: { kind: "choice", options: ["Removing a point leaves spaces homotopy equivalent to S² and S⁴, which have different homology", "ℝ³ is compact and ℝ⁵ is not", "They have different fundamental groups", "ℝ⁵ is not contractible"], correct: [0] },
    },
    {
      key: "sum",
      rung: "apply",
      prompt: <p>What is the rank of H₃ of the wedge S³ ∨ S³ ∨ S³?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that Sⁿ⁻¹ is not a retract of Dⁿ, using homology.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes a retraction r with r ∘ i the identity on Sⁿ⁻¹.",
          "Applies reduced Hₙ₋₁ to get the identity of ℤ factoring through H̃ₙ₋₁(Dⁿ) = 0.",
          "Concludes this is impossible, so there is no retraction.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The long exact sequence and excision are among the Eilenberg–Steenrod axioms. Why might it help to describe homology by axioms rather than by a construction?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that most computations use only the axioms, not the chains.",
          "Notes the axioms show different constructions (simplicial, singular, cellular) must agree on nice spaces.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The pair sequence relates a space to a subspace. Often a space is better described as a union of two open pieces
        whose homology is known, like a sphere as two discs, or a torus as two cylinders.
      </p>
      <p>
        Next, the Mayer–Vietoris sequence: the homological version of van Kampen&rsquo;s theorem, computing the homology of
        a union from the pieces and their overlap.
      </p>
    </>
  ),
};
