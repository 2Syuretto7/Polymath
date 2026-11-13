import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { RootMonodromyViz } from "@/components/viz/RootMonodromyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m14.4.3",
  minutes: 90,
  links: {
    revisits: ["m14.4.2", "m14.3.4", "m14.4.1"],
    foreshadows: ["m15.4.3", "m28.4.3", "m24.5.2"],
  },

  puzzle: (
    <>
      <p>
        By 1545 there were formulas in radicals for equations of degree 2, 3 and 4. For almost three centuries the best
        mathematicians hunted for one for degree 5. In 1824 Abel proved there is none, and a few years later Galois explained
        exactly which equations can be solved. What is the obstruction?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Move the coefficient c of x⁵ − 5x + c round a loop and follow the five roots. Which permutations of the roots can you
        make?
      </p>
      <RootMonodromyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="solvable by radicals">
        <p>
          Let <M>{"F"}</M> have characteristic 0. An extension <M>{"K/F"}</M> is <strong>radical</strong> if there is a tower
        </p>
        <MD>{"F = K_0 \\subseteq K_1 \\subseteq \\cdots \\subseteq K_r = K, \\qquad K_{i+1} = K_i(\\alpha_i), \\quad \\alpha_i^{n_i} \\in K_i."}</MD>
        <p>
          A polynomial <M>{"f \\in F[x]"}</M> is <strong>solvable by radicals</strong> if its splitting field lies inside some
          radical extension of <M>{"F"}</M>: its roots can be written using field operations and <M>{"n"}</M>th roots.
        </p>
      </Definition>

      <Theorem title="a cyclic step">
        <p>
          If <M>{"K"}</M> contains a primitive <M>{"n"}</M>th root of unity <M>{"\\zeta"}</M> and <M>{"a \\in K"}</M>, then{" "}
          <M>{"K(\\sqrt[n]{a})/K"}</M> is Galois with cyclic Galois group.
        </p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"\\alpha^n = a"}</M>. The roots of <M>{"x^n - a"}</M> are <M>{"\\zeta^k \\alpha"}</M>, all in{" "}
          <M>{"K(\\alpha)"}</M>, so the extension is a splitting field and Galois. An automorphism <M>{"\\sigma"}</M> sends{" "}
          <M>{"\\alpha"}</M> to some <M>{"\\zeta^{k}\\alpha"}</M>, and <M>{"\\sigma \\mapsto \\zeta^k"}</M> is an injective
          homomorphism into the cyclic group of <M>{"n"}</M>th roots of unity, because <M>{"\\zeta"}</M> is fixed. Subgroups
          of cyclic groups are cyclic.
        </p>
      </Proof>

      <Theorem title="Galois">
        <p>
          Over a field of characteristic 0, <M>{"f"}</M> is solvable by radicals if and only if its Galois group is solvable.
        </p>
      </Theorem>

      <Proof>
        <p>
          We sketch the forward direction. Enlarge the radical tower so that it is Galois over <M>{"F"}</M>, and adjoin all
          the needed roots of unity at the start; that first step has abelian Galois group by the cyclotomic lesson. Each later
          step is cyclic by the previous theorem. By the Galois correspondence the tower gives a chain of subgroups, each
          normal in the one before, with abelian quotients, so the Galois group of the whole tower is solvable. The Galois group
          of <M>{"f"}</M> is a quotient of it, hence solvable. The converse uses the same ideas in reverse, building the
          splitting field by cyclic steps.
        </p>
      </Proof>

      <Example title="x⁵ − 6x + 3">
        <p>
          This is irreducible over <M>{"\\mathbb{Q}"}</M> by Eisenstein at 3. Its derivative <M>{"5x^4 - 6"}</M> has two real
          zeros, and sign changes at <M>{"-2, -1, 0, 1, 2"}</M> show exactly three real roots, so two are complex conjugates.
          Its Galois group <M>{"G"}</M> acts on the five roots. Since <M>{"5"}</M> divides <M>{"|G|"}</M> by irreducibility,
          Cauchy&rsquo;s theorem gives an element of order 5, a 5-cycle. Complex conjugation swaps the two complex roots and
          fixes the real ones, a transposition. A 5-cycle and a transposition generate <M>{"S_5"}</M>, which is not solvable.
          So no formula in radicals gives its roots.
        </p>
      </Example>

      <Remark title="the general quintic and Arnold&rsquo;s view">
        <p>
          Some quintics, like <M>{"x^5 - 2"}</M>, are solvable. The theorem says no single formula works for all of them.
          Vladimir Arnold gave a topological picture, shown above: moving coefficients round loops permutes the roots, and any
          formula built from radicals can only produce permutations in a solvable group. For{" "}
          <M>{"x^5 - 5x + c"}</M> the loops already give every transposition of the form <M>{"(i\\,5)"}</M>, and these
          generate all of <M>{"S_5"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "criterion",
      rung: "check",
      prompt: <p>According to Galois, when is a polynomial over ℚ solvable by radicals?</p>,
      answer: {
        kind: "choice",
        options: [
          "When its Galois group is solvable.",
          "When its degree is at most 5.",
          "When it has integer coefficients.",
          "When all its roots are real.",
        ],
        correct: [0],
      },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these quintics is solvable by radicals?</p>,
      answer: { kind: "choice", options: ["x⁵ − 2", "x⁵ − 6x + 3", "Neither", "Both"], correct: [0] },
    },
    {
      key: "loop",
      rung: "apply",
      prompt: <p>In the visualisation, what does a single loop round one branch point do to the roots?</p>,
      answer: {
        kind: "choice",
        options: ["Swaps two of them and leaves the others in place", "Cycles all five", "Leaves every root fixed", "Sends every root to 0"],
        correct: [0],
      },
    },
    {
      key: "real",
      rung: "apply",
      prompt: <p>How many real roots does <M>{"x^5 - 6x + 3"}</M> have?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "five",
      rung: "apply",
      prompt: <p>Why does the Galois group of an irreducible quintic over ℚ contain a 5-cycle?</p>,
      answer: {
        kind: "choice",
        options: [
          "Adjoining one root gives degree 5, so 5 divides the group order, and Cauchy’s theorem gives an element of order 5.",
          "Complex conjugation has order 5.",
          "Every quintic has five real roots.",
          "Every group contains a 5-cycle.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the 5-cycle <M>{"(1\\,2\\,3\\,4\\,5)"}</M> and the transposition <M>{"(1\\,2)"}</M> generate <M>{"S_5"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Conjugates (1 2) by powers of the 5-cycle to get (2 3), (3 4) and (4 5).",
          "Shows that the adjacent transpositions give every transposition, for example by conjugating or composing them.",
          "Concludes since every permutation is a product of transpositions.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why every polynomial of degree at most 4 over ℚ is solvable by radicals.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the Galois group of a polynomial of degree n is a subgroup of Sₙ.",
          "Uses that S₄, and so each Sₙ with n at most 4, is solvable and that subgroups of solvable groups are solvable.",
          "Applies Galois’s theorem. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what solvable by radicals means, why each radical step has an abelian Galois group, how Galois's theorem links radicals to solvable groups, and why x⁵ − 6x + 3 has no formula in radicals.",

  glimpse: (
    <p>
      The permutations made by loops are the monodromy of a covering space, studied in topology and on Riemann surfaces.
      Infinite Galois theory extends the correspondence to extensions of infinite degree.
    </p>
  ),
};
