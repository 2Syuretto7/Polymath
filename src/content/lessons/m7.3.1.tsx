import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ComposePermViz } from "@/components/viz/ComposePermViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.3.1",
  minutes: 80,
  links: {
    revisits: ["m7.1.1", "m4.1.2", "m3.3.4"],
    foreshadows: ["m7.3.2", "m7.4.1", "m14.4.2"],
  },

  puzzle: (
    <>
      <p>
        Before anyone defined an abstract group, Lagrange, Ruffini and Cauchy studied the ways of permuting the roots of an
        equation. Groups were born as groups of permutations. Is that a special kind of group, or, in some sense, every kind?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose two permutations of four objects and compose them in both orders.
      </p>
      <ComposePermViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the symmetric group">
        <p>
          A <strong>permutation</strong> of a set <M>{"X"}</M> is a bijection <M>{"X \\to X"}</M>. The permutations of{" "}
          <M>{"X"}</M> form a group under composition, the <strong>symmetric group</strong> on <M>{"X"}</M>. For{" "}
          <M>{"X = \\{1, \\ldots, n\\}"}</M> it is written <M>{"S_n"}</M>, and has <M>{"n!"}</M> elements. A permutation can be
          written in two-line notation, listing each <M>{"i"}</M> above its image <M>{"\\sigma(i)"}</M>, or in cycle notation:{" "}
          <M>{"(1\\,2\\,3)"}</M> sends 1 to 2, 2 to 3 and 3 to 1.
        </p>
      </Definition>

      <Theorem title="Cayley's theorem">
        <p>
          Every group <M>{"G"}</M> is isomorphic to a subgroup of the symmetric group on <M>{"G"}</M>. In particular, every
          group of order <M>{"n"}</M> is isomorphic to a subgroup of <M>{"S_n"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          For each <M>{"g"}</M>, left multiplication <M>{"\\lambda_g(x) = gx"}</M> is a permutation of <M>{"G"}</M>, with
          inverse <M>{"\\lambda_{g^{-1}}"}</M>. Since <M>{"\\lambda_g\\lambda_h(x) = ghx = \\lambda_{gh}(x)"}</M>, the map{" "}
          <M>{"g \\mapsto \\lambda_g"}</M> is a homomorphism. Its kernel is trivial, since <M>{"\\lambda_g = \\text{id}"}</M>{" "}
          forces <M>{"g = ge = e"}</M>. So <M>{"G"}</M> is isomorphic to its image.
        </p>
      </Proof>

      <Example title="small symmetric groups">
        <p>
          <M>{"S_2"}</M> has 2 elements and is cyclic. <M>{"S_3"}</M> has 6 elements and is the smallest non-abelian group: it
          is isomorphic to <M>{"D_3"}</M>, since every permutation of a triangle&rsquo;s corners comes from a symmetry. For{" "}
          <M>{"n \\ge 3"}</M>, <M>{"S_n"}</M> is not abelian: <M>{"(1\\,2)(2\\,3) = (1\\,2\\,3)"}</M> but{" "}
          <M>{"(2\\,3)(1\\,2) = (1\\,3\\,2)"}</M>, composing right to left.
        </p>
      </Example>

      <Remark title="why it matters">
        <p>
          Cayley&rsquo;s theorem, from 1854, says that abstract groups are no more general than permutation groups. But the
          embedding is wasteful: <M>{"S_n"}</M> is far larger than <M>{"G"}</M>, and the art of group theory is often to find a
          small set on which a group acts. Permutation matrices let <M>{"S_n"}</M> act on vectors too, linking groups with
          linear algebra.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "order",
      rung: "check",
      prompt: <p>How many elements does S₅ have?</p>,
      answer: { kind: "numeric", value: 120 },
    },
    {
      key: "cycle",
      rung: "check",
      prompt: <p>Where does the cycle (1 4 2) send 4?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "comp",
      rung: "apply",
      prompt: <p>Composing right to left, what is (1 2)(1 3)?</p>,
      answer: { kind: "choice", options: ["(1 3 2)", "(1 2 3)", "(2 3)", "e"], correct: [0] },
    },
    {
      key: "s3",
      rung: "apply",
      prompt: <p>Which group is S₃ isomorphic to?</p>,
      answer: { kind: "choice", options: ["ℤ₆", "D₃, the symmetries of a triangle", "ℤ₂ × ℤ₂", "D₄"], correct: [1] },
    },
    {
      key: "cayley",
      rung: "apply",
      prompt: <p>By Cayley&rsquo;s theorem, a group of order 7 is isomorphic to a subgroup of which symmetric group, at most?</p>,
      answer: { kind: "choice", options: ["S₃", "S₇", "S₄₉", "S₅₀₄₀"], correct: [1] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that Sₙ is not abelian for n ≥ 3. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Exhibits two permutations that do not commute, such as (1 2) and (2 3).",
          "Computes both products, for example sending 1 to different places.",
        ],
      },
    },
    {
      key: "inj",
      rung: "stretch",
      prompt: <p>In the proof of Cayley&rsquo;s theorem, why is each λ_g a bijection, and why is g ↦ λ_g injective?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes λ_g has inverse λ_(g⁻¹), so it is a bijection.",
          "Notes λ_g = λ_h gives g = λ_g(e) = λ_h(e) = h. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the symmetric group is, how to read and compose permutations in cycle notation, why Sₙ is non-abelian for n ≥ 3, and how Cayley's theorem shows every group is a permutation group.",

  glimpse: (
    <p>
      The next lesson shows that every permutation splits uniquely into disjoint cycles. Then the alternating group of even
      permutations, and group actions, which make Cayley&rsquo;s idea of letting a group permute a set into a general tool.
    </p>
  ),
};
