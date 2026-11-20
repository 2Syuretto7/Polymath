import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { InducedCharViz } from "@/components/viz/InducedCharViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m32.2.2",
  minutes: 90,
  links: {
    revisits: ["m32.2.1", "m14.6.1", "m14.6.4"],
    foreshadows: ["m32.2.3", "m32.5.2", "m32.5.3"],
  },

  puzzle: (
    <>
      <p>
        S₃ permutes three points, giving a three-dimensional representation. That representation is built entirely from
        the trivial representation of the two-element subgroup fixing one point. Can any representation of a subgroup be
        pushed up to the whole group in this way, and what does the result contain?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a subgroup of S₃ and a character of it, and see the induced character and its decomposition.</p>
      <InducedCharViz />
    </>
  ),

  theory: (
    <>
      <Definition title="induced representation">
        <p>
          Let H ≤ G and let W be a representation of H. Choose coset representatives{" "}
          <M>{"g_1, \\dots, g_r"}</M> of G/H. Then <M>{"\\operatorname{Ind}_H^G W = \\bigoplus_i g_i W"}</M>, where g acts by
          sending <M>{"g_i w"}</M> to <M>{"g_j h w"}</M> whenever <M>{"g g_i = g_j h"}</M> with h in H. Its dimension is{" "}
          <M>{"[G : H]\\dim W"}</M>. Equivalently, <M>{"\\operatorname{Ind}_H^G W = \\mathbb{C}[G] \\otimes_{\\mathbb{C}[H]} W"}</M>.
        </p>
      </Definition>

      <Theorem title="the character of an induced representation">
        <p>
          <M>{"\\operatorname{Ind}\\chi(g) = \\frac{1}{|H|}\\sum_{x \\in G,\\ x^{-1}gx \\in H} \\chi(x^{-1}gx)"}</M>. In
          particular it vanishes on every class that does not meet H.
        </p>
      </Theorem>

      <Theorem title="Frobenius reciprocity">
        <p>
          For a character χ of H and a character ψ of G,{" "}
          <M>{"\\langle \\operatorname{Ind}_H^G \\chi, \\psi \\rangle_G = \\langle \\chi, \\operatorname{Res}_H \\psi \\rangle_H"}</M>.
          Induction and restriction are adjoint: the multiplicity of an irreducible ψ in Ind χ is the multiplicity of χ in
          the restriction of ψ.
        </p>
      </Theorem>

      <Example title="S₃">
        <ul>
          <li>From the trivial subgroup, the trivial representation induces the regular representation, which contains each irreducible as often as its dimension.</li>
          <li>From ⟨(12)⟩, trivial induces the permutation representation, trivial + standard; sign induces sign + standard.</li>
          <li>From A₃, trivial induces trivial + sign, and a character sending (123) to a primitive cube root of unity induces the irreducible standard representation.</li>
        </ul>
      </Example>

      <Remark title="induction theorems">
        <p>
          Induction is transitive: inducing from K to H and then to G is inducing from K to G. Artin&rsquo;s theorem says
          every character is a rational combination of characters induced from cyclic subgroups, and Brauer&rsquo;s theorem
          gives an integer combination from elementary subgroups. So much of the representation theory of a group is
          visible from small subgroups.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dim",
      rung: "check",
      prompt: <p>What is the dimension of the representation induced from W on a subgroup H?</p>,
      answer: { kind: "choice", options: ["[G : H] times dim W", "dim W", "|G| times dim W", "|H|"], correct: [0] },
    },
    {
      key: "frob",
      rung: "check",
      prompt: <p>What does Frobenius reciprocity say?</p>,
      answer: { kind: "choice", options: ["⟨Ind χ, ψ⟩ on G equals ⟨χ, Res ψ⟩ on H", "Ind χ always equals χ", "Res Ind χ = χ", "Every induced representation is irreducible"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what does the trivial character of A₃ induce?</p>,
      answer: { kind: "choice", options: ["trivial + sign", "standard", "the regular representation", "trivial + standard"], correct: [0] },
    },
    {
      key: "ind",
      rung: "apply",
      prompt: <p>A two-dimensional representation of a subgroup of index 5 is induced up. What is the dimension of the result?</p>,
      answer: { kind: "numeric", value: 10, tolerance: 0 },
    },
    {
      key: "reg",
      rung: "apply",
      prompt: <p>How many times does the standard representation of S₃ occur in the regular representation?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Deduce Frobenius reciprocity from the formula for the induced character.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes ⟨Ind χ, ψ⟩ as (1/|G|)(1/|H|) times a sum over g and over x with x⁻¹gx in H of χ(x⁻¹gx) times the conjugate of ψ(g).",
          "Substitutes h = x⁻¹gx and uses that ψ is a class function, so ψ(g) = ψ(h).",
          "Notes each of the |G| values of x contributes the same sum over h in H, leaving (1/|H|) Σ χ(h) times the conjugate of ψ(h).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that the character of A₃ sending (123) to a primitive cube root of unity ω induces an irreducible representation of S₃.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes the induced character 2, 0, ω + ω² = −1 on the three classes.",
          "Checks ⟨χ, χ⟩ = (4 + 2·1)/6 = 1, or uses Frobenius reciprocity.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        For the symmetric groups, inducing from subgroups that permute blocks separately produces every irreducible
        representation, and the combinatorics of partitions organises the whole theory.
      </p>
      <p>Next, the symmetric group.</p>
    </>
  ),
};
