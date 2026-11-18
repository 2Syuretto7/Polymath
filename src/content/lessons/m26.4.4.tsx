import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { HolonomyLoopViz } from "@/components/viz/HolonomyLoopViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m26.4.4",
  minutes: 90,
  links: {
    revisits: ["m26.4.3", "m26.3.2", "m12.4.2"],
    foreshadows: ["m26.5.3", "m26.6.2", "m26.7.2"],
  },

  puzzle: (
    <>
      <p>
        A single vector field always has integral curves. Now choose a plane at every point of ℝ³, varying smoothly. Is there
        always a surface tangent to these planes, the way a curve is tangent to a field? Sometimes yes, sometimes no, and the
        Lie bracket decides which.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Each choice of planes is given by an equation dz = α: moving within a plane, z must change by α. Trace a rectangle in
        the xy-plane and lift it, climbing as required. If a surface fits the planes, the lift closes up.
      </p>
      <HolonomyLoopViz />
    </>
  ),

  theory: (
    <>
      <Definition title="distributions">
        <p>
          A rank k <strong>distribution</strong> D on an n-manifold M is a choice of k-dimensional subspace{" "}
          <M>{"D_p \\subseteq T_pM"}</M> at each point, varying smoothly: locally spanned by k smooth vector fields. An{" "}
          <strong>integral manifold</strong> is an immersed submanifold N with <M>{"T_pN = D_p"}</M> at each of its points. D is{" "}
          <strong>integrable</strong> if every point lies in one.
        </p>
      </Definition>

      <Definition title="involutive distributions">
        <p>
          D is <strong>involutive</strong> if the bracket of any two vector fields lying in D also lies in D. Integrable implies
          involutive: fields tangent to N restrict to fields on N, and their bracket, computed on N, is tangent to N.
        </p>
      </Definition>

      <Theorem title="the Frobenius theorem">
        <p>
          A distribution is integrable if and only if it is involutive. Moreover, near each point there are coordinates in which
          D is spanned by <M>{"\\partial / \\partial x^1, \\dots, \\partial / \\partial x^k"}</M>, so the integral manifolds are the
          slices <M>{"x^{k+1}, \\dots, x^n"}</M> constant. The integral manifolds fit together into a{" "}
          <strong>foliation</strong> of M.
        </p>
        <p>
          <strong>Proof idea.</strong> Choose spanning fields <M>{"X_1, \\dots, X_k"}</M> of D with vanishing brackets, possible
          by involutivity after a change of basis. Their flows commute, so{" "}
          <M>{"(t_1, \\dots, t_k) \\mapsto \\theta^1_{t_1} \\circ \\dots \\circ \\theta^k_{t_k}(q)"}</M> parametrises the leaves.
        </p>
      </Theorem>

      <Example title="the contact plane field">
        <p>
          The planes dz = y dx in ℝ³ are spanned by <M>{"X = \\partial_x + y \\, \\partial_z"}</M> and <M>{"Y = \\partial_y"}</M>.
          Then <M>{"[X, Y] = -\\partial_z"}</M>, which is not in the plane. So no surface is tangent to these planes. In the
          visualisation, the lifted loop fails to close by the area enclosed, a direct sign of the twisting. By contrast,
          dz = y dx + x dy is d(xy), and its planes are tangent to the surfaces z = xy + c.
        </p>
      </Example>

      <Remark title="in the language of forms">
        <p>
          A plane field in ℝ³ given as the kernel of a 1-form ω is integrable exactly when <M>{"\\omega \\wedge d\\omega = 0"}</M>.
          For ω = dz − y dx, <M>{"\\omega \\wedge d\\omega = dx \\wedge dy \\wedge dz \\neq 0"}</M>: the opposite extreme, a{" "}
          <strong>contact structure</strong>. These ideas come from thermodynamics and mechanics as much as from geometry.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "inv",
      rung: "check",
      prompt: <p>When is a distribution involutive?</p>,
      answer: { kind: "choice", options: ["When the bracket of any two fields in it also lies in it", "When it has rank 1", "When it is spanned by coordinate fields", "When every field in it is complete"], correct: [0] },
    },
    {
      key: "frob",
      rung: "check",
      prompt: <p>What does the Frobenius theorem say?</p>,
      answer: { kind: "choice", options: ["A distribution is integrable if and only if it is involutive", "Every distribution is integrable", "No distribution of rank 2 is integrable", "Integrable distributions have rank 1"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose dz = y dx with width 2 and height 1.5. What is the change in z round the loop?</p>,
      answer: { kind: "numeric", value: -3, tolerance: 0.01 },
    },
    {
      key: "rank1",
      rung: "apply",
      prompt: <p>Why is every rank 1 distribution integrable?</p>,
      answer: { kind: "choice", options: ["Locally it is spanned by one field X, and [fX, gX] is a multiple of X, so it is involutive; also integral curves exist", "Because ℝ is one-dimensional", "Because brackets are always zero", "It is not: some rank 1 distributions fail"], correct: [0] },
    },
    {
      key: "bracket",
      rung: "apply",
      prompt: <p>For X = ∂x + y ∂z and Y = ∂y, what is [X, Y]?</p>,
      answer: { kind: "choice", options: ["−∂z", "∂z", "0", "∂x"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the plane field spanned by X = ∂x + y ∂z and Y = ∂y in ℝ³ is not integrable.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes [X, Y] = −∂z.",
          "Shows −∂z is not a combination of X and Y, for example because such a combination aX + bY has ∂x-component a, forcing a = 0, and then has no ∂z-component.",
          "Concludes the distribution is not involutive, so by Frobenius (or the easy direction) not integrable.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The planes dz = y dx do not come from surfaces. Why does that mean you can reach any point of ℝ³ moving only within the planes?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes moving within the planes reaches the x and y directions directly.",
          "Notes loops in the planes change z by the enclosed area, so z can be adjusted too.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Vector fields are one kind of object on a manifold. Covectors, bilinear forms such as inner products, and determinants
        are others: all are tensors, multilinear in vectors and covectors, assembled into bundles just as vectors were.
      </p>
      <p>Next, tensors on manifolds.</p>
    </>
  ),
};
