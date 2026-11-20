import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { MonomialCountViz } from "@/components/viz/MonomialCountViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m30.1.4",
  minutes: 90,
  links: {
    revisits: ["m30.1.3", "m24.5.1", "m24.2.3"],
    foreshadows: ["m30.2.1", "m30.2.2", "m30.4.1"],
  },

  puzzle: (
    <>
      <p>
        A line through the origin of space, together with a plane, is one variety. Is it one-dimensional or
        two-dimensional? And how could you tell from the equations alone, without drawing a picture?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a ring, and watch how fast the number of surviving monomials grows with the degree.</p>
      <MonomialCountViz />
    </>
  ),

  theory: (
    <>
      <Definition title="dimension">
        <p>
          The <strong>dimension</strong> of a variety X is the largest n for which there is a chain{" "}
          <M>{"Z_0 \\subsetneq Z_1 \\subsetneq \\cdots \\subsetneq Z_n"}</M> of irreducible closed subsets of X. For an
          affine variety this is the <strong>Krull dimension</strong> of k[X], the longest chain of prime ideals. A
          union of pieces has the dimension of its largest piece.
        </p>
      </Definition>

      <Theorem title="dimension as transcendence degree">
        <p>
          If X is an irreducible affine variety, its dimension equals the transcendence degree over k of its function
          field k(X). In particular <M>{"\\dim \\mathbb{A}^n = n"}</M>, since <M>{"k(x_1, \\dots, x_n)"}</M> has
          transcendence degree n, and every proper closed subset of an irreducible variety has strictly smaller dimension.
        </p>
      </Theorem>

      <Theorem title="hypersurfaces">
        <p>
          If X is irreducible of dimension n and f is a regular function on X that is neither zero nor a unit, every
          irreducible component of V(f) has dimension n − 1. This is Krull&rsquo;s principal ideal theorem. So a single
          equation cuts the dimension by exactly one, and r equations by at most r.
        </p>
      </Theorem>

      <Example title="counting monomials">
        <p>
          In k[x, y] there are (d + 1)(d + 2)/2 monomials of degree at most d, a quadratic in d. In k[x, y]/(xy), the
          surviving monomials are 1 and the powers of x or of y alone: 2d + 1 of them, linear in d. The degree of this
          Hilbert polynomial is the dimension: 2 for the plane and 1 for the two crossing lines.
        </p>
      </Example>

      <Remark title="intersections">
        <p>
          In projective space, varieties of dimensions a and b in <M>{"\\mathbb{P}^n"}</M> meet in a set of dimension at
          least a + b − n whenever a + b ≥ n. So two curves in the projective plane always meet, and two surfaces in{" "}
          <M>{"\\mathbb{P}^3"}</M> always share a curve. In affine space parallel lines show this can fail.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "a3",
      rung: "check",
      prompt: <p>What is the dimension of affine 3-space?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "xy",
      rung: "check",
      prompt: <p>What is the dimension of V(xy) in the plane?</p>,
      answer: { kind: "choice", options: ["1", "0", "2", "It is not defined, since V(xy) is reducible"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose k[x, y]/(xy) and d = 10. How many monomials survive?</p>,
      answer: { kind: "numeric", value: 21, tolerance: 0 },
    },
    {
      key: "xyz",
      rung: "apply",
      prompt: <p>What is the dimension of the surface xyz = 1 in affine 3-space?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "p3",
      rung: "apply",
      prompt: <p>Two surfaces in projective 3-space meet in a set of dimension at least what?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the dimension of affine n-space is at least n.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes down a chain such as {0} ⊂ V(x₂, …, xₙ) ⊂ V(x₃, …, xₙ) ⊂ ⋯ ⊂ 𝔸ⁿ of coordinate subspaces.",
          "Notes each is closed and irreducible, its coordinate ring being a polynomial ring and so a domain.",
          "Notes the inclusions are strict, giving a chain of length n.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Count the monomials of degree at most d in k[x, y], and explain what the count says about the dimension of the plane.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Counts e + 1 monomials of each degree e, summing over e ≤ d to (d + 1)(d + 2)/2.",
          "Notes this is a polynomial of degree 2 in d.",
          "Links the degree to the dimension 2. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The simplest varieties after points are curves in the plane, each the zero set of one polynomial. Their degree,
        their singular points and their tangent lines can all be read from that polynomial.
      </p>
      <p>Next, plane curves.</p>
    </>
  ),
};
