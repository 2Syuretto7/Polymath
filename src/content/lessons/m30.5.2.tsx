import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ModuleStalkViz } from "@/components/viz/ModuleStalkViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m30.5.2",
  minutes: 90,
  links: {
    revisits: ["m30.5.1", "m30.3.2", "m24.2.2"],
    foreshadows: ["m30.5.3", "m30.6.1", "m30.6.3"],
  },

  puzzle: (
    <>
      <p>
        The abelian group ℤ/12 is a ℤ-module, so it ought to be a geometric object over Spec ℤ. Where does it live? It is
        killed by 12, so it should sit over the primes 2 and 3 and nowhere else. How do you turn a module into something
        spread over a space, and which sheaves arise this way?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a ℤ-module, and read off its stalk at each point of Spec ℤ.</p>
      <ModuleStalkViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the sheaf of a module">
        <p>
          For a ring A and an A-module M there is a sheaf <M>{"\\widetilde{M}"}</M> of <M>{"\\mathcal{O}"}</M>-modules on
          Spec A whose sections over the basic open set D(f) are the localisation <M>{"M_f"}</M>, and whose stalk at a prime
          𝔭 is <M>{"M_{\\mathfrak{p}}"}</M>. For M = A this is the structure sheaf itself.
        </p>
      </Definition>

      <Definition title="quasi-coherent and coherent sheaves">
        <p>
          An <M>{"\\mathcal{O}_X"}</M>-module on a scheme X is <strong>quasi-coherent</strong> if X is covered by affine open
          sets Spec A on which it is isomorphic to <M>{"\\widetilde{M}"}</M> for some A-module M. On a noetherian scheme it
          is <strong>coherent</strong> if each such M can be taken finitely generated. Locally free sheaves of finite rank
          are the algebraic vector bundles.
        </p>
      </Definition>

      <Theorem title="the affine case">
        <p>
          On X = Spec A, the functor <M>{"M \\mapsto \\widetilde{M}"}</M> is an equivalence between A-modules and
          quasi-coherent sheaves on X, with inverse taking global sections. It is exact and commutes with direct sums and
          tensor products. Quasi-coherent ideal sheaves correspond to closed subschemes.
        </p>
      </Theorem>

      <Example title="on Spec ℤ and on projective space">
        <p>
          The sheaf of ℤ/12 has stalk ℤ/4 at (2), ℤ/3 at (3), and 0 elsewhere, including at the generic point: torsion lives
          on closed points. On <M>{"\\mathbb{P}^n"}</M> the twisting sheaf <M>{"\\mathcal{O}(1)"}</M> is quasi-coherent but
          not of the form <M>{"\\widetilde{M}"}</M> globally, since projective space is not affine; its sections are the
          linear forms.
        </p>
      </Example>

      <Remark title="why the condition matters">
        <p>
          Not every <M>{"\\mathcal{O}_X"}</M>-module is quasi-coherent: extending the structure sheaf of an open set U by
          zero gives one whose sections over X vanish although it is non-zero on U. Quasi-coherent sheaves are those that
          behave like modules locally, and they form an abelian category in which cohomology is computed.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sec",
      rung: "check",
      prompt: <p>What are the sections of the sheaf of an A-module M over the basic open set D(f)?</p>,
      answer: { kind: "choice", options: ["The localisation of M at f", "M itself", "The quotient M/fM", "Zero"], correct: [0] },
    },
    {
      key: "stalk",
      rung: "check",
      prompt: <p>What is the stalk of the sheaf of M at a prime 𝔭?</p>,
      answer: { kind: "choice", options: ["The localisation of M at 𝔭", "M/𝔭M", "The residue field", "The annihilator of M"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with M = ℤ/12, at how many of the primes shown is the stalk non-zero?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "inv",
      rung: "apply",
      prompt: <p>For M = ℤ[1/6], what is the stalk at (5)?</p>,
      answer: { kind: "choice", options: ["ℤ localised at (5)", "ℚ", "0", "ℤ/5"], correct: [0] },
    },
    {
      key: "eq",
      rung: "apply",
      prompt: <p>On an affine scheme Spec A, quasi-coherent sheaves correspond to what?</p>,
      answer: { kind: "choice", options: ["A-modules", "Ideals of A only", "Prime ideals of A", "Finitely generated A-algebras"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the stalk of the sheaf of ℤ/n at a prime (p) not dividing n is zero.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Identifies the stalk with the localisation of ℤ/n at (p).",
          "Notes n is a unit in ℤ localised at (p), since p does not divide n.",
          "Concludes that n both kills every element and is invertible, so every element is 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why is the set of primes where a finitely generated module has non-zero stalk a closed subset of Spec A?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows the stalk at 𝔭 is non-zero exactly when 𝔭 contains the annihilator of M, using finitely many generators.",
          "Concludes the support is V(Ann M).",
          "Notes this is closed in the Zariski topology. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The simplest locally free sheaves have rank one. They correspond to formal sums of hypersurfaces, counted with
        multiplicity, and on a curve to configurations of points.
      </p>
      <p>Next, divisors and line bundles.</p>
    </>
  ),
};
