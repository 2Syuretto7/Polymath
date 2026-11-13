import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { FinitePlaneViz } from "@/components/viz/FinitePlaneViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.1.1",
  minutes: 80,
  links: {
    revisits: ["m3.4.1", "m7.6.4", "m3.4.4"],
    foreshadows: ["m8.1.2", "m14.1.1", "m14.2.3"],
  },

  puzzle: (
    <>
      <p>
        The first linear algebra course worked in <M>{"\\mathbb{R}^n"}</M>. But the proofs about bases and dimension never
        used order, distance or limits; they used only that you can add, subtract, multiply and divide. So they should work
        over the complex numbers, the rationals, even over <M>{"\\mathbb{Z}_2"}</M>, where <M>{"1 + 1 = 0"}</M>. In a plane
        over <M>{"\\mathbb{Z}_5"}</M>, what does a line look like, and how many are there?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Here is the plane <M>{"\\mathbb{Z}_p^2"}</M>. Choose a vector and see its span; then choose a second vector off that
        line.
      </p>
      <FinitePlaneViz />
    </>
  ),

  theory: (
    <>
      <Definition title="vector space over a field">
        <p>
          Let <M>{"F"}</M> be a field. A <strong>vector space over F</strong> is a set <M>{"V"}</M> with an addition making
          it an abelian group, and a scalar multiplication <M>{"F \\times V \\to V"}</M>, such that
        </p>
        <MD>{"a(v + w) = av + aw, \\quad (a + b)v = av + bv, \\quad (ab)v = a(bv), \\quad 1v = v."}</MD>
        <p>
          Span, linear independence, basis and dimension are defined exactly as before.
        </p>
      </Definition>

      <Theorem title="dimension is well defined">
        <p>
          If <M>{"V"}</M> is spanned by <M>{"m"}</M> vectors, every linearly independent list in <M>{"V"}</M> has at most{" "}
          <M>{"m"}</M> vectors. Hence any two bases of a finite-dimensional space have the same length.
        </p>
      </Theorem>

      <Proof>
        <p>
          The exchange argument: given an independent list <M>{"u_1, \\dots, u_k"}</M> and a spanning list{" "}
          <M>{"w_1, \\dots, w_m"}</M>, add <M>{"u_1"}</M> to the spanning list. It is now dependent, and some{" "}
          <M>{"w_j"}</M> is a combination of the others, so it can be removed, keeping the span. Repeat with{" "}
          <M>{"u_2, u_3, \\dots"}</M>; each time a <M>{"w"}</M> leaves, since the <M>{"u"}</M>&rsquo;s are independent. So{" "}
          <M>{"k \\le m"}</M>. The only division used is by a non-zero scalar, which is fine in any field.
        </p>
      </Proof>

      <Example title="a gallery">
        <p>
          <M>{"F^n"}</M> has dimension <M>{"n"}</M>. Polynomials of degree at most <M>{"n"}</M> have basis{" "}
          <M>{"1, x, \\dots, x^n"}</M>, dimension <M>{"n + 1"}</M>. <M>{"\\mathbb{C}"}</M> is a vector space of dimension 1
          over itself and 2 over <M>{"\\mathbb{R}"}</M>; <M>{"\\mathbb{R}"}</M> over <M>{"\\mathbb{Q}"}</M> is
          infinite-dimensional. Over <M>{"\\mathbb{Z}_p"}</M>, an <M>{"n"}</M>-dimensional space has exactly{" "}
          <M>{"p^n"}</M> vectors.
        </p>
      </Example>

      <Remark title="why other fields matter">
        <p>
          Vector spaces over <M>{"\\mathbb{Z}_2"}</M> are the setting of error-correcting codes and much of computer
          science. In field theory, a larger field is a vector space over a smaller one, and its dimension, the degree,
          decides questions such as which constructions are possible with ruler and compass.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "count",
      rung: "check",
      prompt: <p>How many vectors does a 3-dimensional space over ℤ₂ contain?</p>,
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "dimc",
      rung: "check",
      prompt: <p>What is the dimension of ℂ as a vector space over ℝ?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "lines",
      rung: "apply",
      prompt: <p>How many lines through the origin are there in the plane over ℤ₇?</p>,
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "poly",
      rung: "apply",
      prompt: <p>What is the dimension of the space of real polynomials of degree at most 5?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "dep",
      rung: "apply",
      prompt: <p>Over ℤ₂, are (1, 1, 0), (0, 1, 1) and (1, 0, 1) linearly independent?</p>,
      answer: {
        kind: "choice",
        options: [
          "Yes, as they are over ℝ.",
          "No: their sum is (2, 2, 2) = (0, 0, 0) over ℤ₂.",
          "Yes, because they are distinct.",
          "The question makes no sense over ℤ₂.",
        ],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that in any vector space, 0 · v = 0 for every vector v. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes 0v = (0 + 0)v = 0v + 0v using distributivity.",
          "Adds the additive inverse of 0v to both sides.",
          "Concludes 0v = 0.",
        ],
      },
    },
    {
      key: "basis",
      rung: "stretch",
      prompt: <p>Count the ordered bases of the plane over ℤₚ. Check your formula for p = 2.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Chooses the first vector as any non-zero vector: p² − 1 ways.",
          "Chooses the second off the line spanned by the first: p² − p ways, giving (p² − 1)(p² − p).",
          "Checks p = 2 gives 3 × 2 = 6. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a vector space over a general field is, why the proofs about dimension work over any field, and some examples, including spaces over ℤ_p and ℂ as a space over ℝ.",

  glimpse: (
    <p>
      The next lesson studies linear maps between abstract vector spaces and their matrices. In field theory the dimension of
      one field over another becomes the degree of an extension, and vector spaces over finite fields carry
      error-correcting codes.
    </p>
  ),
};
