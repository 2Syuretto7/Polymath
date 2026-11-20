import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { KillingFormViz } from "@/components/viz/KillingFormViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m32.3.3",
  minutes: 90,
  links: {
    revisits: ["m32.3.2", "m32.3.1", "m32.1.3"],
    foreshadows: ["m32.4.1", "m32.4.2", "m32.4.3"],
  },

  puzzle: (
    <>
      <p>
        A Lie algebra is just a vector space with a bracket; nobody hands it an inner product. Yet every Lie algebra
        carries one, built from nothing but the bracket and the trace. What is it, and what can it tell us?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick an algebra and read its Killing form and the signs of its eigenvalues.</p>
      <KillingFormViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Killing form">
        <p>
          <M>{"B(x, y) = \\operatorname{tr}(\\operatorname{ad} x \\circ \\operatorname{ad} y)"}</M>. It is symmetric and
          bilinear, and it is <strong>invariant</strong>: <M>{"B([x, y], z) = B(x, [y, z])"}</M>. Every automorphism of the
          algebra preserves it.
        </p>
      </Definition>

      <Theorem title="Cartan's criteria">
        <ul>
          <li>Solvability: <M>{"\\mathfrak{g}"}</M> is solvable if and only if B(x, y) = 0 for all x in <M>{"\\mathfrak{g}"}</M> and y in <M>{"[\\mathfrak{g}, \\mathfrak{g}]"}</M>.</li>
          <li>Semisimplicity: <M>{"\\mathfrak{g}"}</M> is semisimple if and only if B is non-degenerate.</li>
        </ul>
      </Theorem>

      <Theorem title="consequences">
        <p>
          In a semisimple algebra, the orthogonal complement of an ideal is an ideal, which gives the decomposition into
          simple ideals. Every derivation is inner, ad x for some x. And B identifies <M>{"\\mathfrak{g}"}</M> with its dual,
          which builds the Casimir element used to prove Weyl&rsquo;s theorem.
        </p>
      </Theorem>

      <Example title="sl(2)">
        <p>
          In the basis H, E, F, ad H has eigenvalues 0, 2, −2, so B(H, H) = 8. Also B(E, F) = 4 and the other entries vanish.
          In general, on <M>{"\\mathfrak{sl}(n)"}</M>, <M>{"B(x, y) = 2n\\operatorname{tr}(xy)"}</M>. The form is
          non-degenerate with signature (2, 1).
        </p>
      </Example>

      <Remark title="signature and compactness">
        <p>
          On <M>{"\\mathfrak{so}(3)"}</M> the Killing form is negative definite. A real semisimple Lie algebra has a
          negative definite Killing form exactly when it is the Lie algebra of a compact group. Every complex semisimple
          algebra has such a compact real form, as <M>{"\\mathfrak{su}(2)"}</M> is for <M>{"\\mathfrak{sl}(2, \\mathbb{C})"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>How is the Killing form defined?</p>,
      answer: { kind: "choice", options: ["B(x, y) = tr(ad x ad y)", "B(x, y) = tr(xy) always", "B(x, y) = [x, y]", "B(x, y) = det(ad x)"], correct: [0] },
    },
    {
      key: "cartan",
      rung: "check",
      prompt: <p>What does Cartan&rsquo;s criterion for semisimplicity say?</p>,
      answer: { kind: "choice", options: ["The algebra is semisimple exactly when its Killing form is non-degenerate", "The algebra is semisimple exactly when its Killing form is zero", "Every algebra is semisimple", "The algebra is semisimple when it is abelian"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose sl(3). How many positive eigenvalues does its Killing form have?</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0 },
    },
    {
      key: "hh",
      rung: "apply",
      prompt: <p>In sl(2), with H = diag(1, −1), what is B(H, H)?</p>,
      answer: { kind: "numeric", value: 8, tolerance: 0 },
    },
    {
      key: "sl3",
      rung: "apply",
      prompt: <p>Using B(x, y) = 2n tr(xy) on sl(n), find B(x, x) for x = diag(1, −1, 0) in sl(3).</p>,
      answer: { kind: "numeric", value: 12, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the Killing form is invariant: B([x, y], z) = B(x, [y, z]).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses that ad is a homomorphism: ad [x, y] = ad x ad y − ad y ad x.",
          "Expands both sides as traces of triple products of ad x, ad y and ad z.",
          "Uses cyclicity of the trace to show the two sides agree.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why is the Killing form of a nilpotent Lie algebra identically zero?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that by Engel’s theorem all ad x can be made strictly upper triangular in one basis.",
          "Concludes ad x ad y is strictly upper triangular, so its trace is 0.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Inside a semisimple algebra sit maximal families of commuting, diagonalisable elements. Their simultaneous
        eigenvalues, organised by the Killing form, will lead to roots.
      </p>
      <p>Next, Cartan subalgebras.</p>
    </>
  ),
};
