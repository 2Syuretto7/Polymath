import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { GluingLinesViz } from "@/components/viz/GluingLinesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m30.4.2",
  minutes: 90,
  links: {
    revisits: ["m30.4.1", "m30.1.2", "m30.3.1"],
    foreshadows: ["m30.4.3", "m30.4.4", "m30.5.1"],
  },

  puzzle: (
    <>
      <p>
        Take two copies of the affine line and glue them everywhere except at the origin. Depending on how you match points,
        you get either a circle-like closed curve, the projective line, or a strange line with two origins. Both are
        made of affine pieces. Which of them deserves to be called a geometric space?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a gluing, and see what space the two affine lines make.</p>
      <GluingLinesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="locally ringed spaces and schemes">
        <p>
          A <strong>locally ringed space</strong> is a topological space X with a sheaf of rings{" "}
          <M>{"\\mathcal{O}_X"}</M> whose stalks are local rings. A <strong>scheme</strong> is a locally ringed space in
          which every point has an open neighbourhood isomorphic, as a locally ringed space, to an affine scheme Spec A.
          Morphisms of schemes are morphisms of locally ringed spaces: continuous maps with compatible maps of sheaves
          that send maximal ideals of stalks into maximal ideals.
        </p>
      </Definition>

      <Definition title="gluing">
        <p>
          Given schemes <M>{"X_i"}</M>, open subschemes <M>{"U_{ij} \\subseteq X_i"}</M> and isomorphisms{" "}
          <M>{"\\varphi_{ij} : U_{ij} \\to U_{ji}"}</M> that agree on triple overlaps, there is a scheme X covered by copies
          of the <M>{"X_i"}</M>, glued along the <M>{"\\varphi_{ij}"}</M>. Every scheme arises by gluing affine schemes.
        </p>
      </Definition>

      <Example title="the projective line">
        <p>
          Glue Spec k[x] and Spec k[y] along Spec k[x, 1/x] ≅ Spec k[y, 1/y] by y = 1/x. The result is{" "}
          <M>{"\\mathbb{P}^1"}</M>: the origin of the second copy is the point at infinity of the first. Its only global
          regular functions are constants, since a polynomial in x that is also a polynomial in 1/x is constant; so{" "}
          <M>{"\\mathbb{P}^1"}</M> is not affine. In general, Proj of a graded ring gives projective schemes such as{" "}
          <M>{"\\mathbb{P}^n"}</M>, glued from n + 1 affine spaces.
        </p>
      </Example>

      <Remark title="a pathology">
        <p>
          Gluing by y = x instead gives the line with two origins. It is a scheme, but two distinct points cannot be
          separated by the behaviour of morphisms into it: two maps from the line agreeing away from the origin need not
          agree. Such schemes are excluded by the condition of being <strong>separated</strong>, the algebraic analogue of
          the Hausdorff property, since the Zariski topology itself is almost never Hausdorff.
        </p>
      </Remark>

      <Theorem title="varieties are schemes">
        <p>
          Every variety over an algebraically closed field k gives a scheme of finite type over k, whose closed points are
          the points of the variety and whose other points are generic points of its irreducible closed subvarieties. This
          identifies varieties with the reduced, separated schemes of finite type over k.
        </p>
      </Theorem>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is a scheme?</p>,
      answer: { kind: "choice", options: ["A locally ringed space that is locally isomorphic to affine schemes", "Any topological space with a ring", "A variety over ℂ", "A ring with a topology"], correct: [0] },
    },
    {
      key: "glob",
      rung: "check",
      prompt: <p>What are the global regular functions on the projective line?</p>,
      answer: { kind: "choice", options: ["Only the constants", "All polynomials in x", "All rational functions", "There are none"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which gluing gives the projective line?</p>,
      answer: { kind: "choice", options: ["x = 1/y", "x = y", "Both", "Neither"], correct: [0] },
    },
    {
      key: "pn",
      rung: "apply",
      prompt: <p>How many affine spaces are glued to make projective n-space in the standard way?</p>,
      answer: { kind: "choice", options: ["n + 1", "n", "2", "2ⁿ"], correct: [0] },
    },
    {
      key: "sep",
      rung: "apply",
      prompt: <p>Which condition excludes the line with two origins?</p>,
      answer: { kind: "choice", options: ["Being separated", "Being affine", "Being reduced", "Being of finite type"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the projective line is not an affine scheme.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes the global sections: polynomials f(x) that equal polynomials g(1/x) on the overlap, which are constants.",
          "Notes an affine scheme is Spec of its global sections, so it would be Spec k, a single point.",
          "Concludes, since the projective line has infinitely many points.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>On the line with two origins, find two different morphisms from the affine line that agree away from 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes the two inclusions of the affine line, one through each copy.",
          "Notes they agree on the complement of the origin but send 0 to different points.",
          "Links this to the failure of separatedness. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A morphism of schemes can do more than a map of varieties: it can map Spec of a field to a scheme, picking out a
        point with values in that field. Studying all such maps at once is a powerful point of view.
      </p>
      <p>Next, morphisms of schemes.</p>
    </>
  ),
};
