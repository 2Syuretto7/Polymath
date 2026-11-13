import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { RepeatedRootViz } from "@/components/viz/RepeatedRootViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m14.3.1",
  minutes: 80,
  links: {
    revisits: ["m14.1.3", "m14.2.1", "m7.7.2"],
    foreshadows: ["m14.3.2", "m14.3.3", "m14.3.4"],
  },

  puzzle: (
    <>
      <p>
        Over the rationals an irreducible polynomial never has a repeated root. But over the field{" "}
        <M>{"\\mathbb{F}_p(t)"}</M> of rational functions, the irreducible polynomial <M>{"x^p - t"}</M> has a single root
        repeated <M>{"p"}</M> times. What goes wrong, and why does it matter?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move the roots of a cubic and compare its graph with its derivative.</p>
      <RepeatedRootViz />
    </>
  ),

  theory: (
    <>
      <Definition title="separable">
        <p>
          A polynomial is <strong>separable</strong> if it has distinct roots in a splitting field. An algebraic element is
          separable over <M>{"K"}</M> if its minimal polynomial is, and an algebraic extension is separable if all its elements
          are.
        </p>
      </Definition>

      <Theorem title="the derivative test">
        <p>
          With the formal derivative <M>{"f' = \\sum k a_k x^{k-1}"}</M>, a polynomial <M>{"f"}</M> has a repeated root exactly
          when <M>{"f"}</M> and <M>{"f'"}</M> have a common factor of positive degree, that is, when{" "}
          <M>{"\\gcd(f, f') \\ne 1"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"f = (x - \\alpha)^2 g"}</M>, then <M>{"f' = (x - \\alpha)(2g + (x - \\alpha)g')"}</M>, so{" "}
          <M>{"x - \\alpha"}</M> divides both. If <M>{"f = (x - \\alpha) g"}</M> with <M>{"g(\\alpha) \\ne 0"}</M>, then{" "}
          <M>{"f'(\\alpha) = g(\\alpha) \\ne 0"}</M>. The gcd can be computed in <M>{"K[x]"}</M> by Euclid&rsquo;s algorithm,
          and does not change in an extension.
        </p>
      </Proof>

      <Theorem title="perfect fields">
        <p>
          An irreducible <M>{"f"}</M> is inseparable only if <M>{"f' = 0"}</M>. This is impossible in characteristic 0, and in
          characteristic <M>{"p"}</M> it means <M>{"f(x) = g(x^p)"}</M>. Every field of characteristic 0, and every finite
          field, is <strong>perfect</strong>: all its algebraic extensions are separable.
        </p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"f"}</M> is irreducible and <M>{"\\gcd(f, f') \\ne 1"}</M>, the gcd must be <M>{"f"}</M> itself, which
          divides <M>{"f'"}</M> of smaller degree, so <M>{"f' = 0"}</M>. Then each <M>{"k a_k = 0"}</M>, so{" "}
          <M>{"a_k = 0"}</M> unless <M>{"p \\mid k"}</M>. Over a finite field every element is a <M>{"p"}</M>th power, since
          Frobenius is a bijection, so <M>{"g(x^p) = h(x)^p"}</M> would be reducible.
        </p>
      </Proof>

      <Example title="an inseparable extension">
        <p>
          Over <M>{"K = \\mathbb{F}_p(t)"}</M>, <M>{"x^p - t"}</M> is irreducible by Eisenstein at <M>{"t"}</M>. If{" "}
          <M>{"\\alpha^p = t"}</M>, then
        </p>
        <MD>{"x^p - t = x^p - \\alpha^p = (x - \\alpha)^p,"}</MD>
        <p>so it has one root of multiplicity <M>{"p"}</M>, and <M>{"K(\\alpha)/K"}</M> is inseparable.</p>
      </Example>

      <Remark title="why it matters">
        <p>
          A separable extension of degree <M>{"n"}</M> has exactly <M>{"n"}</M> embeddings into an algebraic closure, which
          is what makes Galois groups large enough. The primitive element theorem also needs separability: every finite
          separable extension is <M>{"K(\\gamma)"}</M> for a single element <M>{"\\gamma"}</M>, as{" "}
          <M>{"\\mathbb{Q}(\\sqrt2, \\sqrt3) = \\mathbb{Q}(\\sqrt2 + \\sqrt3)"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "der",
      rung: "check",
      prompt: <p>Does <M>{"x^3 - 3x + 2"}</M> have a repeated root? (Compare with its derivative.)</p>,
      answer: { kind: "choice", options: ["Yes, at x = 1", "No"], correct: [0] },
    },
    {
      key: "char0",
      rung: "check",
      prompt: <p>Can an irreducible polynomial over <M>{"\\mathbb{Q}"}</M> have a repeated root?</p>,
      answer: { kind: "choice", options: ["No", "Yes"], correct: [0] },
    },
    {
      key: "fp",
      rung: "apply",
      prompt: <p>Over <M>{"\\mathbb{F}_5"}</M>, what is the formal derivative of <M>{"x^5 + x + 1"}</M>?</p>,
      answer: { kind: "choice", options: ["1", "5x⁴ + 1", "0", "x⁴"], correct: [0] },
    },
    {
      key: "zero",
      rung: "apply",
      prompt: <p>Over <M>{"\\mathbb{F}_3"}</M>, which polynomial has derivative 0?</p>,
      answer: { kind: "choice", options: ["x⁶ + 2x³ + 1", "x³ + x", "x² + 1", "x⁴ + x"], correct: [0] },
    },
    {
      key: "mult",
      rung: "apply",
      prompt: <p>With multiplicity counted, how many times is the root repeated in <M>{"x^7 - t"}</M> over <M>{"\\mathbb{F}_7(t)"}</M>?</p>,
      answer: { kind: "numeric", value: 7, tolerance: 0 },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>Prove that <M>{"f"}</M> has a repeated root in a splitting field if and only if <M>{"f"}</M> and <M>{"f'"}</M> have a common root.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows a repeated root α makes (x − α) divide f′ by differentiating (x − α)²g.",
          "Shows a simple root α has f′(α) = g(α) ≠ 0.",
          "Concludes the equivalence.",
        ],
      },
    },
    {
      key: "finite",
      rung: "stretch",
      prompt: <p>Show that every irreducible polynomial over a finite field is separable.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes an inseparable irreducible f must have f′ = 0, so f(x) = g(xᵖ).",
          "Uses surjectivity of Frobenius to write g(xᵖ) = h(x)ᵖ, contradicting irreducibility.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what separability is, why a repeated root is a common root of f and f′, why fields of characteristic 0 and finite fields are perfect, and the example x^p − t over 𝔽ₚ(t).",

  glimpse: (
    <p>
      The next lesson defines normal extensions. Separable and normal together make an extension Galois, the setting of the
      Galois correspondence.
    </p>
  ),
};
