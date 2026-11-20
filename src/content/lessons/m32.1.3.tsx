import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { GroupCommViz } from "@/components/viz/GroupCommViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m32.1.3",
  minutes: 90,
  links: {
    revisits: ["m32.1.2", "m26.4.3", "m26.7.2"],
    foreshadows: ["m32.3.1", "m32.3.3", "m32.5.1"],
  },

  puzzle: (
    <>
      <p>
        Hold a book flat. Turn it a little about a north–south axis, then a little about an east–west axis, then undo the
        first turn, then undo the second. The book does not come back to where it started: it has turned slightly about
        the vertical. How large is that leftover turn, and what object measures it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change t and the angle between the two axes, and compare the leftover rotation with t².</p>
      <GroupCommViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Lie algebra">
        <p>
          A <strong>Lie algebra</strong> is a vector space <M>{"\\mathfrak{g}"}</M> with a bilinear bracket{" "}
          <M>{"[\\cdot, \\cdot]"}</M> that is antisymmetric, <M>{"[X, Y] = -[Y, X]"}</M>, and satisfies the Jacobi
          identity <M>{"[X, [Y, Z]] + [Y, [Z, X]] + [Z, [X, Y]] = 0"}</M>.
        </p>
        <p>
          The Lie algebra of a Lie group G is <M>{"T_eG"}</M>, identified with the left-invariant vector fields, with the
          bracket of vector fields. For a matrix group, the bracket is the commutator <M>{"[X, Y] = XY - YX"}</M>.
        </p>
      </Definition>

      <Theorem title="the bracket measures non-commutativity">
        <p>
          <M>{"\\exp(tX)\\exp(tY)\\exp(-tX)\\exp(-tY) = \\exp\\big(t^2[X, Y] + O(t^3)\\big)"}</M>. Equivalently, with{" "}
          <M>{"\\operatorname{Ad}_g Y = gYg^{-1}"}</M>, we have{" "}
          <M>{"\\tfrac{d}{dt}\\big|_{t=0} \\operatorname{Ad}_{\\exp tX} Y = [X, Y]"}</M>.
        </p>
      </Theorem>

      <Theorem title="Lie's correspondence">
        <ul>
          <li>A homomorphism of Lie groups <M>{"\\Phi"}</M> differentiates to a Lie algebra homomorphism <M>{"d\\Phi_e"}</M>.</li>
          <li>Connected Lie subgroups of G correspond one to one with subalgebras of <M>{"\\mathfrak{g}"}</M>.</li>
          <li>If G is simply connected, every Lie algebra homomorphism from <M>{"\\mathfrak{g}"}</M> lifts to a unique group homomorphism.</li>
          <li>Every finite-dimensional real Lie algebra is the Lie algebra of a unique simply connected Lie group.</li>
        </ul>
      </Theorem>

      <Example title="so(3) and su(2)">
        <p>
          Let <M>{"J_1, J_2, J_3"}</M> generate rotations about the three axes. Then <M>{"[J_1, J_2] = J_3"}</M> and
          cyclically, so <M>{"\\mathfrak{so}(3)"}</M> is <M>{"\\mathbb{R}^3"}</M> with the cross product. The algebra{" "}
          <M>{"\\mathfrak{su}(2)"}</M> is isomorphic to it, yet SU(2) and SO(3) are different groups: SU(2) is simply
          connected and maps two to one onto SO(3).
        </p>
      </Example>

      <Remark title="Baker–Campbell–Hausdorff">
        <p>
          Near the identity, <M>{"\\exp X \\exp Y = \\exp\\big(X + Y + \\tfrac12[X, Y] + \\tfrac1{12}([X,[X,Y]] + [Y,[Y,X]]) + \\cdots\\big)"}</M>,
          where every term is built from brackets. So the bracket determines the group multiplication near e, which is why
          the Lie algebra nearly determines the group.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "br",
      rung: "check",
      prompt: <p>For a matrix Lie group, what is the bracket on its Lie algebra?</p>,
      answer: { kind: "choice", options: ["[X, Y] = XY − YX", "[X, Y] = XY", "[X, Y] = X + Y", "[X, Y] = exp X exp Y"], correct: [0] },
    },
    {
      key: "jac",
      rung: "check",
      prompt: <p>Besides bilinearity and antisymmetry, what must a Lie bracket satisfy?</p>,
      answer: { kind: "choice", options: ["The Jacobi identity", "Associativity", "Commutativity", "[X, X] = X"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with the axes 90° apart and t = 0.5, by what angle does the commutator rotate? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 0.245, tolerance: 0.002 },
    },
    {
      key: "dim",
      rung: "apply",
      prompt: <p>The Lie algebra so(n) consists of the antisymmetric n × n real matrices. What is the dimension of so(4)?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "lz",
      rung: "apply",
      prompt: <p>In so(3), with J₁, J₂, J₃ the rotation generators from the theory, what is [J₂, J₁]?</p>,
      answer: { kind: "choice", options: ["−J₃", "J₃", "0", "J₁"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Let G be an abelian matrix Lie group. Show that [X, Y] = 0 for all X and Y in its Lie algebra.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes exp(tX) and exp(sY) lie in G and so commute: exp(tX) exp(sY) exp(−tX) = exp(sY).",
          "Differentiates in s at 0 to get exp(tX) Y exp(−tX) = Y.",
          "Differentiates in t at 0 to get XY − YX = 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>SU(2) and SO(3) have isomorphic Lie algebras but are not isomorphic. Why does this not contradict Lie&rsquo;s correspondence?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the correspondence matches Lie algebras with simply connected groups.",
          "Notes SO(3) is not simply connected, and SU(2) is its two-to-one universal cover.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Lie algebras will soon let us classify the compact groups and their representations. First we return to finite
        groups, where characters already reveal a great deal with very little computation.
      </p>
      <p>Next, characters in depth.</p>
    </>
  ),
};
