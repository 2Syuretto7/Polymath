import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { NormalExtViz } from "@/components/viz/NormalExtViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m14.3.2",
  minutes: 80,
  links: {
    revisits: ["m14.3.1", "m14.1.3", "m14.1.2"],
    foreshadows: ["m14.3.3", "m14.3.4", "m14.4.1"],
  },

  puzzle: (
    <>
      <p>
        The field <M>{"\\mathbb{Q}(\\sqrt2)"}</M> has a symmetry: <M>{"a + b\\sqrt2 \\mapsto a - b\\sqrt2"}</M>. The field{" "}
        <M>{"\\mathbb{Q}(\\sqrt[3]{2})"}</M>, of degree 3, has no symmetry at all except the identity. What makes one field so
        symmetric and the other so rigid?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>For each field, see which roots of the generator&rsquo;s minimal polynomial it contains.</p>
      <NormalExtViz />
    </>
  ),

  theory: (
    <>
      <Definition title="normal extension">
        <p>
          An algebraic extension <M>{"L/K"}</M> is <strong>normal</strong> if every irreducible polynomial in{" "}
          <M>{"K[x]"}</M> that has one root in <M>{"L"}</M> splits completely in <M>{"L"}</M>.
        </p>
      </Definition>

      <Theorem title="normal means splitting field">
        <p>
          A finite extension <M>{"L/K"}</M> is normal if and only if <M>{"L"}</M> is the splitting field over <M>{"K"}</M> of
          some polynomial.
        </p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"L = K(\\alpha_1, \\dots, \\alpha_n)"}</M> is normal, it is the splitting field of the product of the
          minimal polynomials of the <M>{"\\alpha_i"}</M>, each of which splits in <M>{"L"}</M>. Conversely, let{" "}
          <M>{"L"}</M> split <M>{"f"}</M>, and let <M>{"g"}</M> be irreducible with roots <M>{"\\beta \\in L"}</M> and{" "}
          <M>{"\\beta'"}</M> in some extension. There is an isomorphism <M>{"K(\\beta) \\to K(\\beta')"}</M> fixing{" "}
          <M>{"K"}</M>; it extends to the splitting fields of <M>{"f"}</M> over each, which are <M>{"L"}</M> and{" "}
          <M>{"L(\\beta')"}</M>. Comparing degrees gives <M>{"[L(\\beta') : L] = 1"}</M>, so <M>{"\\beta' \\in L"}</M>.
        </p>
      </Proof>

      <Theorem title="counting automorphisms">
        <p>
          For a finite extension, <M>{"|\\mathrm{Aut}(L/K)| \\le [L : K]"}</M>, with equality exactly when <M>{"L/K"}</M> is
          normal and separable. Such an extension is called <strong>Galois</strong>, and{" "}
          <M>{"\\mathrm{Gal}(L/K) = \\mathrm{Aut}(L/K)"}</M>.
        </p>
      </Theorem>

      <Example title="two of degree 4">
        <p>
          <M>{"\\mathbb{Q}(\\sqrt2, \\sqrt3)"}</M> is the splitting field of <M>{"(x^2 - 2)(x^2 - 3)"}</M>, so it is normal,
          with 4 automorphisms changing the signs of <M>{"\\sqrt2"}</M> and <M>{"\\sqrt3"}</M> independently. But{" "}
          <M>{"\\mathbb{Q}(\\sqrt[4]{2})"}</M> contains only two of the four roots of <M>{"x^4 - 2"}</M>, so it is not normal
          and has only 2 automorphisms.
        </p>
      </Example>

      <Remark title="normality is not transitive">
        <p>
          <M>{"\\mathbb{Q}(\\sqrt[4]{2}) / \\mathbb{Q}(\\sqrt2)"}</M> and <M>{"\\mathbb{Q}(\\sqrt2)/\\mathbb{Q}"}</M> are both of
          degree 2, hence normal, yet the composite is not. Every extension of degree 2 is normal, since a quadratic with one
          root in the field has the other root there too.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Is <M>{"\\mathbb{Q}(\\sqrt[3]{2})/\\mathbb{Q}"}</M> normal?</p>,
      answer: { kind: "choice", options: ["No", "Yes"], correct: [0] },
    },
    {
      key: "aut",
      rung: "check",
      prompt: <p>How many automorphisms does <M>{"\\mathbb{Q}(\\sqrt[3]{2})"}</M> have?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "quad",
      rung: "apply",
      prompt: <p>Why is every extension of degree 2 normal?</p>,
      answer: {
        kind: "choice",
        options: [
          "If a quadratic has one root in the field, the other is the coefficient minus that root, also in the field.",
          "Because 2 is prime.",
          "Because degree 2 extensions are trivial.",
          "It is not true.",
        ],
        correct: [0],
      },
    },
    {
      key: "gal",
      rung: "apply",
      prompt: <p>What is <M>{"|\\mathrm{Gal}(\\mathbb{Q}(\\sqrt2, \\sqrt3, \\sqrt5)/\\mathbb{Q})|"}</M>?</p>,
      answer: { kind: "numeric", value: 8, tolerance: 0 },
    },
    {
      key: "four",
      rung: "apply",
      prompt: <p>Which field is the normal closure of <M>{"\\mathbb{Q}(\\sqrt[4]{2})"}</M> over <M>{"\\mathbb{Q}"}</M>?</p>,
      answer: { kind: "choice", options: ["ℚ(⁴√2, i)", "ℚ(√2)", "ℚ(⁴√2)", "ℚ(i)"], correct: [0] },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>Show that a <M>{"K"}</M>-automorphism of <M>{"K(\\alpha)"}</M> is determined by the image of <M>{"\\alpha"}</M>, which must be a root of the minimal polynomial of <M>{"\\alpha"}</M>. Deduce <M>{"|\\mathrm{Aut}(K(\\alpha)/K)| \\le [K(\\alpha) : K]"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes every element is a polynomial in α with coefficients in K, so the automorphism is determined by σ(α).",
          "Applies σ to m(α) = 0 to get m(σ(α)) = 0.",
          "Concludes there are at most deg m = [K(α) : K] choices.",
        ],
      },
    },
    {
      key: "trans",
      rung: "stretch",
      prompt: <p>Use <M>{"\\mathbb{Q} \\subset \\mathbb{Q}(\\sqrt2) \\subset \\mathbb{Q}(\\sqrt[4]{2})"}</M> to explain why normality is not transitive.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes each step has degree 2 and so is normal.",
          "Notes x⁴ − 2 has a root in ℚ(⁴√2) but does not split there, so the composite is not normal.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a normal extension is, why normal finite extensions are exactly splitting fields, why the number of automorphisms is at most the degree with equality for Galois extensions, and why ℚ(∛2) has no non-trivial automorphisms.",

  glimpse: (
    <p>
      The next lesson matches the subgroups of a Galois group with the intermediate fields. The fundamental theorem then
      explains which intermediate fields are themselves normal.
    </p>
  ),
};
